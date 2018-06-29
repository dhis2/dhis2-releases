
-- 2.30 upgrade script

-- New function for generating uids in sql

create or replace function generate_uid()
  returns text as
$$
declare
  chars  text [] := '{0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z}';
  result text := chars [11 + random() * (array_length(chars, 1) - 11)];
begin
  for i in 1..10 loop
    result := result || chars [1 + random() * (array_length(chars, 1) - 1)];
  end loop;
  return result;
end;
$$
language plpgsql;

/*
 * The following transaction will perform all database changes and migrate data
 */
begin;

/*
 * These queries both check if the script has run already (We remove these columns at the end) and allows us to add new
 * relationshiptypes without specifying these values.
 */
alter table relationshiptype
  alter column a_is_to_b drop not null,
  alter column b_is_to_a drop not null;

/*
 * There are two new tables introduces: relationshipconstraint and relationshipitem. These represent each side of a
 * relationshiptype and relationship respectively
 */
create table relationshipconstraint
(
  relationshipconstraintid integer not null
    constraint relationshipconstraint_pkey
    primary key,
  entity                   varchar(255),
  trackedentitytypeid      integer
    constraint fk_relationshipconstraint_trackedentitytype_trackedentitytypeid
    references trackedentitytype,
  programid                integer
    constraint fk_relationshipconstraint_program_programid
    references program,
  programstageid           integer
    constraint fk_relationshipconstraint_programstage_programstageid
    references programstage,
  relationshiptypeid       integer
);

create table relationshipitem
(
  relationshipitemid      integer not null
    constraint relationshipitem_pkey
    primary key,
  relationshipid          integer
    constraint fk_relationshipitem_relationshipid
    references relationship,
  trackedentityinstanceid integer
    constraint fk_relationshipitem_trackedentityinstanceid
    references trackedentityinstance,
  programinstanceid       integer
    constraint fk_relationshipitem_programinstanceid
    references programinstance,
  programstageinstanceid  integer
    constraint fk_relationshipitem_programstageinstanceid
    references programstageinstance
);

/*
 * In addition, we have new columns in relationshiptype and relationship tables that refer to these new tables:
 * from_relationshipconstraintid, to_relationshipconstraintid, from_relationshipitemid and to_relationshipitemid.
 */
alter table relationshiptype
  add column
  from_relationshipconstraintid integer
    constraint uk_kdvifebf1bvql5ttxartcaxgx
    unique
    constraint fk_relationshiptype_from_relationshipconstraintid
    references relationshipconstraint,
  add column
  to_relationshipconstraintid integer
    constraint uk_1e7cp750l06gamjry454xlkjl
    unique
    constraint fk_relationshiptype_to_relationshipconstraintid
    references relationshipconstraint;

alter table relationship
  add column from_relationshipitemid integer
  constraint uk_gsvll3t3tsda7kx38waqnegkw
  unique
  constraint fk_relationship_from_relationshipitemid
  references relationshipitem,
  add column to_relationshipitemid integer
  constraint uk_2gbm9ji77snuoll07yvpgj3o5
  unique
  constraint fk_relationship_to_relationshipitemid
  references relationshipitem;

/*
 * The next part will move, update and create data for the relationshiptype table, based on the existing data. We begin
 by creating a new temporary table that will hold information necessary to update the data or add new data.
 */
create temporary table new_relationshiptypes
(
  original_relationshiptypeid               integer,
  generated_a_relationshiptypeid            integer,
  generated_b_relationshiptypeid            integer,
  generated_a_uid                           varchar(11),
  generated_b_uid                           varchar(11),
  generated_a_name                          varchar(255),
  generated_b_name                          varchar(255),
  original_description                      varchar(255),
  generated_a_code                          varchar(255),
  generated_b_code                          varchar(255),
  original_created                          timestamp,
  original_lastupdated                      timestamp,
  original_lastupdatedby                    integer,
  original_a_trackedentitytypeid            integer,
  original_b_trackedentitytypeid            integer,
  generated_a_from_relationshipconstraintid integer,
  generated_b_from_relationshipconstraintid integer,
  generated_a_to_relationshipconstraintid   integer,
  generated_b_to_relationshipconstraintid   integer
);

/*
 * We populate the new table with the following query. This query will find all existing unique combinations of relationshiptypeid and
 * trackedentitytypeid for both sides of the relationships ( trackedentityinstanceaid, trackedentityinstancebid ). We also generate ids, uids
 * as well as new names and codes based on the old relationshiptypes and trackedentityinstances used.
 *
 * Since we group by relationshiptypeid, we also know that the columns from the relationshiptype table will be from a single row, so using the max()
 * aggregation for these columns is just a formality.
 *
 * Each resulting row will represent an unique combination of relationshiptype and two trackedentitytypes, that currently exists in the database,
 * and each row has multiple columns for "a" and "b", refering to each side of the relationship, but is also used later to create new, inverse versions,
 * of the existing relationships.
 *
 * For readability, each column is prefixed with "original_" or "generated_" to indicate if this piece of data is something created during the upgradescript,
 * or fetched from existing data.
 */
insert into new_relationshiptypes
    (
        select
            rel.relationshiptypeid as original_relationshiptypeid,
            nextval('hibernate_sequence') as generated_a_relationshiptypeid,
            nextval('hibernate_sequence') as generated_b_relationshiptypeid,
            generate_uid() as generated_a_uid,
            generate_uid() as generated_b_uid,
            concat(max(rel_type.name), '_a-to-b_(', max(a.name), '-', max(b.name), ')') as generated_a_name,
            concat(max(rel_type.name), '_b-to-a_(', max(b.name), '-', max(a.name), ')') as generated_b_name,
            max(rel_type.description) as original_description,
            concat(max(coalesce(rel_type.code, rel_type.relationshiptypeid::text)), '_A_(', max(a.name), '-', max(b.name), ')') as generated_a_code,
            concat(max(coalesce(rel_type.code, rel_type.relationshiptypeid::text)), '_B_(', max(b.name), '-', max(a.name), ')') as generated_b_code,
            max(rel_type.created) as original_created,
            max(rel_type.lastupdated) as original_lastupdated,
            max(rel_type.lastupdatedby) as original_lastupdatedby,
            a.trackedentitytypeid as original_a_trackedentitytypeid,
            b.trackedentitytypeid as original_b_trackedentitytypeid
        from relationship rel
          left join trackedentityinstance a_tei on a_tei.trackedentityinstanceid = rel.trackedentityinstanceaid
          left join trackedentityinstance b_tei on b_tei.trackedentityinstanceid = rel.trackedentityinstancebid
          left join trackedentitytype a on a.trackedentitytypeid = a_tei.trackedentitytypeid
          left join trackedentitytype b on b.trackedentitytypeid = b_tei.trackedentitytypeid
          left join relationshiptype rel_type on rel_type.relationshiptypeid = rel.relationshiptypeid
        group by original_a_trackedentitytypeid, original_b_trackedentitytypeid, rel.relationshiptypeid
    );

/*
 * Creating new relationshiptypes, including types for different combinations of tets if they where found in the previous query.
 */
insert into relationshiptype(relationshiptypeid, description, name, uid, code, lastupdated, created, lastupdatedby)
    (
        select
            generated_a_relationshiptypeid,
            original_description,
            generated_a_name,
            generated_a_uid,
            generated_a_code,
            original_lastupdated,
            original_created,
            original_lastupdatedby
        from new_relationshiptypes
    );

/*
 * Creating all the counter-types for the previously created ones. Note we are not referrring to the "b" columns and not "a" as in the last query.
 */
insert into relationshiptype(relationshiptypeid, description, name, uid, code, lastupdated, created, lastupdatedby)
    (
        select
            generated_b_relationshiptypeid,
            original_description,
            generated_b_name,
            generated_b_uid,
            generated_b_code,
            original_lastupdated,
            original_created,
            original_lastupdatedby
        from new_relationshiptypes
    );

/*
 * Adding two temporary columns, so we are able to update the references on relationshiptype table later.
 */
alter table relationshipconstraint
  add column
  from_relationshiptypeid integer,
  add column
  to_relationshiptypeid integer;

/*
 * Adding two new constraint for each relationshiptype, which means two for the initial relationshiptype, and two more for
 * the inverse version of that relationshiptype.
 */
insert into relationshipconstraint(relationshipconstraintid, entity, trackedentitytypeid, from_relationshiptypeid )
    (
        select
            nextval('hibernate_sequence'),
            'TRACKED_ENTITY_INSTANCE',
            original_a_trackedentitytypeid,
            generated_a_relationshiptypeid
        from new_relationshiptypes
    );

insert into relationshipconstraint(relationshipconstraintid, entity, trackedentitytypeid, to_relationshiptypeid )
    (
        select
            nextval('hibernate_sequence'),
            'TRACKED_ENTITY_INSTANCE',
            original_b_trackedentitytypeid,
            generated_a_relationshiptypeid
        from new_relationshiptypes
    );

insert into relationshipconstraint(relationshipconstraintid, entity, trackedentitytypeid, from_relationshiptypeid )
    (
        select
            nextval('hibernate_sequence'),
            'TRACKED_ENTITY_INSTANCE',
            original_a_trackedentitytypeid,
            generated_b_relationshiptypeid
        from new_relationshiptypes
    );

insert into relationshipconstraint(relationshipconstraintid, entity, trackedentitytypeid, to_relationshiptypeid )
    (
        select
            nextval('hibernate_sequence'),
            'TRACKED_ENTITY_INSTANCE',
            original_b_trackedentitytypeid,
            generated_b_relationshiptypeid
        from new_relationshiptypes
    );

/*
 * Based on the temporary columns we added, we now update the relationshiptypes to refer to the correct relationshipconstraints.
 * We combine the two columns into the constraints set, saying each from_id and to_id should refer to the same relationshiptypeid,
 * that way each row in this contains and matches all the data needed for each relevant row in the relationshiptype table.
 */
with constraints as
    (
    select
        _from.relationshipconstraintid as from_id,
        _to.relationshipconstraintid as to_id,
        _from.from_relationshiptypeid as relationshiptypeid
    from relationshipconstraint _from,
         relationshipconstraint _to
    where _from.from_relationshiptypeid = _to.to_relationshiptypeid
    )
    update relationshiptype
set from_relationshipconstraintid = constraints.from_id,
    to_relationshipconstraintid = constraints.to_id
from
    (select * from constraints) constraints
where relationshiptype.relationshiptypeid = constraints.relationshiptypeid;

/*
 * We are now done with upgrading relationshiptypes, so we are removing the temporary columns since we don't need them anymore
 */
alter table relationshipconstraint
  drop column from_relationshiptypeid,
  drop column to_relationshiptypeid;

/*
 * This next part will take existing relationships, break them down into multiple relationships that uses the new relationshiptypes
 * we created during the previous part of this upgrade. For starters, we are creating a new temporary table to track necessary information
 * about the relationships.
 */
create table new_relationships
(
  original_relationshipid            integer,
  generated_a_relationshiptypeid     integer,
  generated_b_relationshiptypeid     integer,
  original_a_trackedentityinstanceid integer,
  original_b_trackedentityinstanceid integer
);

/*
 * We populate this table based on the existing relationships, combined with the new relationshiptypes. We match the original relationshiptypeid
 * of the existing relationships, with the temporary table for new relationshiptypes, combined with the actual trackedentitytypeids of each tei.
 * This way we find the correct relationshiptypeids to use for each relationship we need to update or create.
 */
insert into new_relationships(
    original_relationshipid,
    generated_a_relationshiptypeid,
    generated_b_relationshiptypeid,
    original_a_trackedentityinstanceid,
    original_b_trackedentityinstanceid
    )
    (
        select
            relationshipid,
            nrt.generated_a_relationshiptypeid,
            nrt.generated_b_relationshiptypeid,
            a_tei.trackedentityinstanceid,
            b_tei.trackedentityinstanceid
        from relationship
          left join trackedentityinstance a_tei on relationship.trackedentityinstanceaid = a_tei.trackedentityinstanceid
          left join trackedentityinstance b_tei on relationship.trackedentityinstancebid = b_tei.trackedentityinstanceid
          left join new_relationshiptypes nrt on relationship.relationshiptypeid = nrt.original_relationshiptypeid
                                                 and a_tei.trackedentitytypeid = nrt.original_a_trackedentitytypeid
                                                 and b_tei.trackedentitytypeid = nrt.original_b_trackedentitytypeid
    );

/*
 * The first relationships we work on, is the existing ones. We update the relationships to use the correct new relationshiptype
 */
update relationship
set
  relationshiptypeid = nr.generated_a_relationshiptypeid
from (select * from new_relationships) nr
where relationshipid = nr.original_relationshipid;

/*
 * Then we add the inverse version of those relationships
 */
insert into relationship(
    relationshipid,
    trackedentityinstanceaid,
    relationshiptypeid,
    trackedentityinstancebid)
    (
        select
            nextval('hibernate_sequence'),
            original_b_trackedentityinstanceid,
            generated_b_relationshiptypeid,
            original_a_trackedentityinstanceid
        from new_relationships
    );

/*
 * Now that we have the relationships in place, we need to add the new relationshipitems. Each relationship has two relationshipitems,
 * from_relationshipitemid and to_relationshipitemid.
 *
 * This query first adds relationshipitems for both from and to, then finally retrieves those temporary sets and updates the relationships.
 */
with from_relationshipitems as
    (
    insert into relationshipitem(relationshipitemid, relationshipid, trackedentityinstanceid)
      (
          select
              nextval('hibernate_sequence'),
              relationshipid,
              trackedentityinstanceaid
          from relationship
      )
    returning relationshipitemid, relationshipid
    ), to_relationshipitems as
    (
    insert into relationshipitem(relationshipitemid, relationshipid, trackedentityinstanceid)
      (
          select
              nextval('hibernate_sequence'),
              relationshipid,
              trackedentityinstancebid
          from relationship
      )
    returning relationshipitemid, relationshipid
    )
    update relationship
set
  from_relationshipitemid = fri.relationshipitemid,
  to_relationshipitemid = tri.relationshipitemid
from
    (select * from from_relationshipitems) fri,
    (select * from to_relationshipitems) tri
where relationship.relationshipid = fri.relationshipid
    and relationship.relationshipid = tri.relationshipid;

/*
 * Add new identifiable object columns, set data and make not-null
 */
alter table relationship
    add column uid varchar(11) unique,
    add column created timestamp,
    add column lastupdated timestamp;

update relationship
SET
    uid = generate_uid(),
    created = now(),
    lastupdated = now();

alter table relationship
    alter column uid set not null,
    alter column created set not null,
    alter column lastupdated set not null;

/*
 * Now that all relationships have been created and updated, we remove the old relationships. First we remove columns
 * related to relationships on table program, to avoid any conflicts, then we remove the old types.
 */
alter table program
  drop column relationshiptypeid,
  drop column relationshipfroma,
  drop column relationshiptext;

delete from relationshiptype where a_is_to_b is not null or b_is_to_a is not null;

/*
 * Then we drop the temporary tables
 */
drop table new_relationships;
drop table new_relationshiptypes;

/*
 * And then we remove columns we will no longer use
 */
alter table relationship
  drop column trackedentityinstanceaid,
  drop column trackedentityinstancebid;
/*
 * Finally we drop the columns we are altering at the start, implicitly signaling we completed the upgrade, before we end
 * the transaction by committing.
 */
alter table relationshiptype
  drop column a_is_to_b,
  drop column b_is_to_a;

commit;

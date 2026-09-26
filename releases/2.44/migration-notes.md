# DHIS2 Version 44 Migration Notes

Welcome to the migration notes for DHIS2 version 44.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [Inconsistent data](#inconsistent-data)
    - [Tracker](#tracker)
      - [Tracked entity value has encrypted value but no plain text value](#tracked-entity-value-has-encrypted-value-but-no-plain-text-value)
      - [Notes without an enrollment or event](#notes-without-an-enrollment-or-event)
      - [Notes linked to more than one enrollment or event](#notes-linked-to-more-than-one-enrollment-or-event)
---
## Inconsistent data

### Tracker

### Tracked entity value has encrypted value but no plain text value

Support for marking tracked entity attributes as confidential has been removed in version 2.44. Attributes that were previously marked as confidential are automatically migrated to `skipAnalytics = true`, preserving their exclusion from analytics exports. 

The migration will fail if any attribute value exists only in encrypted form with no readable value. See below for how to detect and fix this before upgrading.


#### Checking for records with encrypted values only

 To identify any tracked entity attribute values that exist only in encrypted form, you can run the following SQL query. If it returns a value greater than 0, there are inconsistent records that must be resolved before upgrading:


```sql
SELECT COUNT(*)
FROM trackedentityattributevalue
WHERE encryptedvalue IS NOT NULL
AND (value IS NULL OR value = '');
```

#### Fixing records with encrypted values only

 There are 2 options to fix the data:

  - Populate the plain text value from the encrypted value. This requires access to the encryption key and must be done outside the database. Contact DHIS2 support if you need assistance recovering these values before upgrading.   
  - Completely remove the records. If the encrypted only values can be discarded, the following script permanently removes them:

```sql      
DELETE FROM trackedentityattributevalue
WHERE encryptedvalue IS NOT NULL
AND (value IS NULL OR value = '');
```

### Notes without an enrollment or event

In v44 every note belongs to exactly one enrollment, tracker event or single event. Earlier versions
left notes without one, which cannot be read through the API, when:

* permanently removing soft deleted enrollments and events in the `data-administration` app
* the v43 migration moved events to `inconsistentevent`, see
  [Inconsistent Events](../2.43/migration-notes.md#inconsistent-events)

The migration moves these notes to a new `inconsistentnote` table and logs a warning.

#### Check

Before upgrading, the following query counts the notes the migration will move:

```sql
select count(*)
from note n
where not exists (select 1 from enrollment_notes l where l.noteid = n.noteid)
and not exists (select 1 from trackerevent_notes l where l.noteid = n.noteid)
and not exists (select 1 from singleevent_notes l where l.noteid = n.noteid);
```

After upgrading, these notes are in the `inconsistentnote` table, created only if there are any:

```sql
select * from inconsistentnote;
```

#### Fix

There are 2 options to fix the data:

* Attach a note to an enrollment. The following script moves the note back into the `note` table:

```sql
begin;

insert into note (noteid, uid, created, lastupdatedby, notetext, enrollmentid)
select noteid, uid, created, lastupdatedby, notetext,
       (select enrollmentid from enrollment where uid = '<enrollment uid>')
from inconsistentnote
where uid = '<note uid>';

delete from inconsistentnote
where uid = '<note uid>';

commit;
```

To attach it to an event, replace `enrollmentid` with `trackereventid` and select the `eventid`
from `trackerevent`, or with `singleeventid` and `singleevent`.

* Delete the notes by dropping the table:

```sql
drop table inconsistentnote;
```

### Notes linked to more than one enrollment or event

The migration fails if a note is linked more than once. The tracker importer never does this, so
such links only come from changes made directly in the database.

#### Check

Before upgrading, the following query lists every link of the notes linked more than once:

```sql
select *
from (
    select *, count(*) over (partition by noteid) as links
    from (
        select l.noteid, 'enrollment' as type, e.uid, l.sort_order
        from enrollment_notes l join enrollment e on e.enrollmentid = l.enrollmentid
        union all
        select l.noteid, 'tracker event', ev.uid, l.sort_order
        from trackerevent_notes l join trackerevent ev on ev.eventid = l.eventid
        union all
        select l.noteid, 'single event', ev.uid, l.sort_order
        from singleevent_notes l join singleevent ev on ev.eventid = l.eventid
    ) l
) l
where links > 1
order by noteid;
```

#### Fix

Keep one link per note and delete the others before upgrading again. For example, the following
script removes the link between a note and a tracker event:

```sql
delete from trackerevent_notes
where noteid = <noteid>
and eventid = (select eventid from trackerevent where uid = '<event uid>')
and sort_order = <sort_order>;
```

Use `enrollment_notes` and `enrollmentid`, or `singleevent_notes` and `singleevent`, to remove a
link to an enrollment or single event.

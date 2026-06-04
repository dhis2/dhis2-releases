# DHIS2 Version 43 Migration Notes

Welcome to the migration notes for DHIS2 version 43.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

- [Inconsistent data](#inconsistent-data)
  - [Tracker](#tracker)
    - [Null Occurred Date for Single Events](#null-occurred-date-for-single-events)
    - [Inconsistent Events](#inconsistent-events)
    - [Tracker Associate](#tracker-associate)

---

## Inconsistent data

### Tracker

In v43, the `event` table has been split into two separate tables: `singleevent` and `trackerevent`.
The original `event` table stored two different types of events (single events and tracker events) in the
same place. Because a single table had to accommodate both types, several columns could not be constrained
as strictly as each event type required. By splitting the data into dedicated tables, we can now enforce
the stricter constraints that are appropriate for each type.

However, the rules that these new constraints represent were previously enforced only by the application
code, not by the database itself. This means that, while the system was preventing inconsistent data from
being written through normal use, the database had no way to guarantee it. As a result, it is possible that
some existing data is not consistent with the constraints we now want to enforce (for example, due to direct
database manipulation, data imports, or issues in older versions).

Before these stricter constraints can be applied, we must make sure the existing data is consistent. The
following sections explain how to check for inconsistencies and how to fix them.

### Null Occurred Date for Single Events

Single events cannot be scheduled; therefore, in v43 the `occurreddate` column in `singleevent`
is marked as `not null`. While this constraint was enforced in the code, it was not enforced
at the database level in the `event` table.

#### Checking for Null Values

To identify any `null` values in the `occurreddate` column in the `event` table for single events,
you can run the `Single events without an occurred date` integrity check, or you can use
the following SQL scripts. If any of these return a value greater than 0, that means
there is inconsistent data in the system:

##### For >= v41 Instances:

```sql
SELECT COUNT(1)
FROM event e
JOIN programstage ps ON e.programstageid = ps.programstageid
JOIN program p ON ps.programid = p.programid
WHERE e.occurreddate IS NULL
  AND p.type = 'WITHOUT_REGISTRATION';
```

##### For <= v40 Instances:

```sql
SELECT COUNT(1)
FROM programstageinstance psi
JOIN programstage ps ON psi.programstageid = ps.programstageid
JOIN program p ON ps.programid = p.programid
WHERE psi.executiondate IS NULL
  AND p.type = 'WITHOUT_REGISTRATION';
```

#### Fixing Null Values

In version v43, `null` values in the `occurreddate` column in the `singleevent` table are not allowed,
and in order to upgrade, all inconsistencies must be resolved.
So there are 2 options to fix the data:
- Change the `null` value to a valid and meaningful date. ([Assign occurred date to event](#assign-occurred-date-to-event))
- Completely remove the record. ([Delete events](#deleting-inconsistent-events))

##### Assign occurred date to event

The system does not allow writing a `null` value in the `occurreddate` column in the `event` table
for single events, and this validation has been present for a long time. If the inconsistency is present,
it is most likely because the single event was scheduled, even though `SCHEDULE` status does not make sense
for a single event, or because the event was created and already set to `COMPLETED` without a value for
`occurreddate`.
Use the following script to assign a meaningful value to the `occurreddate` column in the `event` table
(the column is called `executiondate` for <=v40) for single events (replace `{REFERENCE_DATE}`
with a valid date like `2025-09-01 11:26:00`):

##### For >= v41 Instances:

```sql
update event
set occurreddate = coalesce(scheduleddate, completeddate, '{REFERENCE_DATE}')
where occurreddate is null
and eventid in (
    SELECT ev.eventid
    FROM event ev
    JOIN programstage ps ON ev.programstageid = ps.programstageid
    JOIN program p ON ps.programid = p.programid
    WHERE p.type = 'WITHOUT_REGISTRATION'
    );
```

##### For <= v40 Instances:

```sql
update programstageinstance
set executiondate = coalesce(duedate, completeddate, '{REFERENCE_DATE}')
where executiondate is null
and programstageinstanceid in (
    SELECT psi.programstageinstanceid
    FROM programstageinstance psi
    JOIN programstage ps ON psi.programstageid = ps.programstageid
    JOIN program p ON ps.programid = p.programid
    WHERE p.type = 'WITHOUT_REGISTRATION'
    );
```

##### Deleting inconsistent events

The following script can be used to soft delete all single events that have a `null` value
in the `occurreddate` column.

```sql
update event
set deleted = true
where occurreddate is null
and eventid in (
    SELECT ev.eventid
    FROM event ev
    JOIN programstage ps ON ev.programstageid = ps.programstageid
    JOIN program p ON ps.programid = p.programid
    WHERE p.type = 'WITHOUT_REGISTRATION'
    );
```

Then, you can permanently delete all soft-deleted events from the `data-administration` app
in the `maintenance` section by setting the `Permanently remove soft deleted events` option and clicking
`Perform maintenance option`.

### Inconsistent Events

The migration script that split the `event` table into `singleevent` and `trackerevent` may create
an `inconsistentevent` table to collect all events that, during the split,
could not be moved to either of the new tables because they are linked to a program stage that
has a `null` value in the `programid` column.
This check is already performed by the `program_stages_no_programs` integrity check. Running this check
will provide all the information needed to fix or delete the inconsistent data, if present in the system.

If the `inconsistentevent` table is present and there are records in it,
there are 2 options to fix the data:
- Fix the program stage inconsistency with the integrity check and move the inconsistent events
  to the right table. ([Move inconsistent events to the right table](#move-inconsistent-events-to-the-right-table))
- Completely remove the `inconsistentevent` table. ([Delete inconsistentevent table](#deleting-the-inconsistentevent-table))

#### Move inconsistent events to the right table

Run the following scripts:

```sql
insert into trackerevent (
select ev.*
from inconsistentevent ev
join programstage ps on ev.programstageid = ps.programstageid
join program p on ps.programid = p.programid
where p.type = 'WITH_REGISTRATION'
);
```

```sql
insert into singleevent (
    select ev.eventid,
           ev.programstageid,
           ev.occurreddate,
           ev.organisationunitid,
           ev.status,
           ev.completeddate,
           ev.uid,
           ev.created,
           ev.lastupdated,
           ev.attributeoptioncomboid,
           ev.storedby,
           ev.completedby,
           ev.deleted,
           ev.createdatclient,
           ev.lastupdatedatclient,
           ev.geometry,
           ev.lastsynchronized,
           ev.eventdatavalues,
           ev.assigneduserid,
           ev.createdbyuserinfo,
           ev.lastupdatedbyuserinfo
    from inconsistentevent ev
             join programstage ps on ev.programstageid = ps.programstageid
             join program p on ps.programid = p.programid
    where p.type = 'WITHOUT_REGISTRATION'
);
```

```sql
drop table inconsistentevent;
```

#### Deleting the inconsistentevent table

Just run the following script:

```sql
drop table inconsistentevent;
```

### Tracker Associate

The `TRACKER_ASSOCIATE` value type is no longer supported, and if it is present in the database, the upgrade
will fail.
This check is already performed by the `tracker_associate_is_deprecated` integrity check.
Running this check will provide all the information needed to fix or delete the inconsistent data,
if present in the system.

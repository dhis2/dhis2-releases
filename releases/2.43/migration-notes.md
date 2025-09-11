# DHIS2 Version 43 Migration Notes

Welcome to the migration notes for DHIS2 version 43.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [Inconsistent data](#inconsistent-data)
    - [Tracker](#tracker)
      - [Null Occurred Date For Single Events](#null-occurred-date-for-single-event)
      - [Inconsistent Events](#inconsistent-events)
---
## Inconsistent-data

### Tracker

### Null Occurred Date For Single Events

Single events cannot be scheduled, hence `occurreddate` column in `single_event` is marked as
`not null`. While this constraint is enforced in the code, it was not enforced
at the database level in the `event` table.

To align the database with the system's constraints, the `occurreddate` column in the `singleevent`
table must be made `not null`.

#### Checking for Null Values

To identify any `null` values in `occurredate` columns in `event` table for single events,
you can run `Single events without an occurred date` integrity check or you can use
the following SQL scripts, if any of these return a value of greater than 0, that means
there are inconsistent data in the system:

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

In version v43 `null` values on `occurreddate` column  in `singleevent` table is not allowed,
and in order to upgrade all the inconsistencies must be resolved.
So there are 2 options to fix the data:
- Change the `null` value to a valid and meaningful date. ([Assign occurred date to event](#assign-occurred-date-to-event))
- Completely remove the record. ([Delete events](#deleting-inconsistent-events)).

##### Assign occurred date to event

The system do not allow to write a `null` value in `occurreddate` column in `event` table and
this validation was present for a long time. If the inconsistency is present, most likely,
it is because the single event was scheduled, even though `SCHEDULE` status does not make sense
for a single event, or the event was created and already set to `COMPLETED` and the value for
`occurreddate` was not provided.
Use the following script to assign a meaningful value to `occurreddate` column in `event` table
(column is called `executiondate` for <=v40) for single events (replace `{REFERENCE_DATE}`
with a valid date like 2025-09-01 11:26:00'):

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

The following script can be used to soft delete all the single events that have a `null` value
in `occurreddate` column.

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

Then, you can permanently delete all soft deleted events from  `data-administration` app
in `maintenance` section, setting `Permanently remove soft deleted events` option and clicking on
`Perform maintenance option`.

### Inconsistent Events

The migration script that split `event` table into `single_event` and `tracker_event` is possibly
creating a `inconsistentevent` table to collect all the events that, during the split,
couldn't be move to either one of the new tables because it is linked to a program stage that
has a `null` value in `programid` column.
This check is already performed by `program_stages_no_programs` integrity check. Running this check
will provide all the information to fix or delete the inconsistent data if present in the system.

If `inconsistentevent` table is present and there are records in it,
there are 2 options to fix the data:
- Fix the program stage inconsistency with the integrity check and move the inconsistent events
to the right table. ([Move inconsistent events to the right table](#move-inconsistent-events-to-the-right-table))
- Completely remove the `inconsistentevent` table. ([Delete inconsistentevent table](#deleting-inconsistentevent-table)).

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

#### Deleting inconsistentevent table
Just run the following script:

```sql
drop table inconsistentevent;
```

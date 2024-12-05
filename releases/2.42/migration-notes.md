# DHIS2 Version 42 Migration Notes

Welcome to the migration notes for DHIS2 version 42.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [Inconsistent data](#inconsistent-data)
    - [Tracker](#tracker)
      - [Null Organisation Unit](#null-organisation-unit)
---
## Inconsistent-data

### Tracker

### Null Organisation Unit

In the system, every event and enrollment must belong to an organisation unit.  
While this constraint is enforced in the code, it is not enforced at the database level.

To align the database with the system's constraints, the `organisationunitid` column 
in the `event` and `enrollment` tables must be made `NOT NULL`.

#### Checking for Null Values

To identify any `NULL` values in these columns, you can use the following SQL scripts,
if any of these return a value of greater than 0, that means there are inconsistent data in the system:

##### For 2.41 Instances:

```sql
SELECT COUNT(1)
FROM enrollment e
JOIN program p ON e.programid = p.programid
WHERE e.organisationunitid IS NULL
  AND p.type = 'WITH_REGISTRATION';
```

```sql
SELECT COUNT(1)
FROM event
WHERE organisationunitid IS NULL;
```
##### For <= 2.40 Instances:

```sql
SELECT COUNT(1)
FROM programinstance pi
JOIN program p ON pi.programid = p.programid
WHERE pi.organisationunitid IS NULL
  AND p.type = 'WITH_REGISTRATION';
```

```sql
SELECT COUNT(1)
FROM programstageinstance
WHERE organisationunitid IS NULL;
```

#### Fixing Null Values

In version v42 `NULL` values on these columns are not allowed anymore, 
and in order to upgrade all the inconsistencies must be resolved.
So there are 2 options to fix the data:
- Change the `NULL` value to a valid and meaningful organisation unit. ([Assign organisation unit to event](#assign-organisation-unit-to-event) and [Assign organisation unit to enrollment](#assign-organisation-unit-to-enrollment))
- Completely remove the record. ([Delete events](#deleting-inconsistent-events) and [Delete enrollments](#deleting-inconsistent-enrollments))

##### Assign organisation unit to event

To assign an organisation unit to an event with a `NULL` value in
column `organisationunitid` is a sensitive operation as the organisation unit
defines which users can access such event (through the search and capture scope).
The first step is to find a "reference" event that should be in the same scope
as the one to be updated.
The following script assign the organisation unit of the "reference" event 
to the event with `NULL` organisation unit.
Substitute {REFERENCE_UID} with the `uid` of the reference event and
{EVENT_UID} with the `uid` of the event to be updated.

```sql
update event ev
set organisationunitid = (select organisationunitid from event where uid = '{REFERENCE_UID}')
where ev.organisationunitid is null
and ev.uid = '{EVENT_UID}';
```

##### Assign organisation unit to enrollment

To assign an organisation unit to an enrollment with a `NULL` value in
column `organisationunitid` is a sensitive operation as the organisation unit
defines which users can access such enrollment (through the search and capture scope).
The first step is to find a "reference" enrollment that should be in the same scope
as the one to be updated.
The following script assign the organisation unit of the "reference" enrollment
to the enrollment with `NULL` organisation unit.
Substitute {REFERENCE_UID} with the `uid` of the reference enrollment and
{ENROLLMENT_UID} with the `uid` of the enrollment to be updated.

```sql
update enrollment en
set organisationunitid = (select organisationunitid from enrollment where uid = '{REFERENCE_UID}')
where en.organisationunitid is null
and en.uid = '{ENROLLMENT_UID}'
AND en.programid in (select programid from program where type = 'WITH_REGISTRATION');
```

##### Deleting inconsistent events

The following script can be used to remove all the events that have a 'NULL' value in `organisationunitid` column.

```plsql
DO $$
DECLARE
  event_ids_temp RECORD;
  pm_ids_temp RECORD;
BEGIN
  -- Create temporary table for event_ids
  CREATE TEMP TABLE temp_event_ids AS
  SELECT eventid
  FROM event
  WHERE organisationunitid IS NULL;

  -- Create temporary table for pm_ids
  CREATE TEMP TABLE temp_pm_ids AS
  SELECT id
  FROM programmessage
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  -- Delete from programmessage_deliverychannels
  DELETE FROM programmessage_deliverychannels
  WHERE programmessagedeliverychannelsid IN (SELECT id FROM temp_pm_ids);

  -- Delete from programmessage_emailaddresses
  DELETE FROM programmessage_emailaddresses
  WHERE programmessageemailaddressid IN (SELECT id FROM temp_pm_ids);

  -- Delete from programmessage_phonenumbers
  DELETE FROM programmessage_phonenumbers
  WHERE programmessagephonenumberid IN (SELECT id FROM temp_pm_ids);

  -- Delete from programnotificationinstance
  DELETE FROM programnotificationinstance
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  -- Delete from event_notes
  DELETE FROM event_notes
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  -- Delete from note
  DELETE FROM note
  WHERE noteid NOT IN (
      SELECT noteid
      FROM event_notes
      UNION ALL
      SELECT noteid
      FROM enrollment_notes
  );

  -- Delete from relationshipitem
  DELETE FROM relationshipitem
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  -- Delete from trackedentitydatavalueaudit
  DELETE FROM trackedentitydatavalueaudit
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  -- Delete from programmessage
  DELETE FROM programmessage
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  -- Delete from event
  DELETE FROM event
  WHERE organisationunitid IS NULL;

  -- Clean up temporary tables
  DROP TABLE temp_event_ids;
  DROP TABLE temp_pm_ids;
END;
$$;
```

##### Deleting inconsistent enrollments

The following script can be used to remove all the enrollments that have a 'NULL' value in `organisationunitid` column.
Event programs create a dummy enrollment in order to work properly, those enrollment cannot be deleted
and the migration script is updating the value in `organisationunitid` column.

```plsql
DO $$
BEGIN
  -- Create temporary tables for storing IDs
  CREATE TEMP TABLE temp_enrollment_ids AS
  SELECT enrollmentid
  FROM enrollment
  WHERE organisationunitid IS NULL
  AND programid IN (SELECT programid FROM program WHERE type = 'WITH_REGISTRATION');

  CREATE TEMP TABLE temp_event_ids AS
  SELECT eventid
  FROM event
  WHERE enrollmentid IN (SELECT enrollmentid FROM temp_enrollment_ids);

  CREATE TEMP TABLE temp_pm_ids AS
  SELECT id
  FROM programmessage
  WHERE enrollmentid IN (SELECT enrollmentid FROM temp_enrollment_ids);

  -- Delete from programmessage related tables
  DELETE FROM programmessage_deliverychannels
  WHERE programmessagedeliverychannelsid IN (SELECT id FROM temp_pm_ids);

  DELETE FROM programmessage_emailaddresses
  WHERE programmessageemailaddressid IN (SELECT id FROM temp_pm_ids);

  DELETE FROM programmessage_phonenumbers
  WHERE programmessagephonenumberid IN (SELECT id FROM temp_pm_ids);

  -- Delete from notes related tables
  DELETE FROM event_notes
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  DELETE FROM enrollment_notes
  WHERE enrollmentid IN (SELECT enrollmentid FROM temp_enrollment_ids);

  DELETE FROM note
  WHERE noteid NOT IN (
      SELECT noteid
      FROM event_notes
      UNION ALL
      SELECT noteid
      FROM enrollment_notes
  );

  -- Delete from program notification instances
  DELETE FROM programnotificationinstance
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  DELETE FROM programnotificationinstance
  WHERE enrollmentid IN (SELECT enrollmentid FROM temp_enrollment_ids);

  -- Delete from relationship items
  DELETE FROM relationshipitem
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  -- Delete from tracked entity data value audit
  DELETE FROM trackedentitydatavalueaudit
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  -- Delete from program messages
  DELETE FROM programmessage
  WHERE eventid IN (SELECT eventid FROM temp_event_ids);

  DELETE FROM relationshipitem
  WHERE enrollmentid IN (SELECT enrollmentid FROM temp_enrollment_ids);

  DELETE FROM programmessage
  WHERE enrollmentid IN (SELECT enrollmentid FROM temp_enrollment_ids);

  DELETE FROM event
  WHERE enrollmentid IN (SELECT enrollmentid FROM temp_enrollment_ids);

  DELETE FROM enrollment
  WHERE organisationunitid IS NULL
  AND programid IN (SELECT programid FROM program WHERE type = 'WITH_REGISTRATION');

  DROP TABLE temp_enrollment_ids;
  DROP TABLE temp_event_ids;
  DROP TABLE temp_pm_ids;
 
END;
$$;```
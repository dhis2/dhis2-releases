# DHIS2 Version 42 Migration Notes

Welcome to the migration notes for DHIS2 version 42.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [Inconsistent data](#inconsistent-data)
    - [Tracker](#tracker)
      - [Null Organisation Unit](#null-organisation-unit)
      - [Null Tracked Entity Type](#null-tracked-entity-type)
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
$$;
```

### Null Tracked Entity Type

The `TrackedEntity`, previously known as `TrackedEntityInstance`, is required to have a specific type, such as person, place, equipment, or area. However, this constraint was not enforced at the database level, leading to inconsistent data. To ensure data integrity moving forward, we need to enforce this requirement by making the `trackedentitytypeid` column in the `trackedentity` table non-nullable.

#### Checking for Null Values

To check for any NULL values in the trackedentitytypeid column, you can use the following SQL script. If the list returned is not empty, it indicates the presence of inconsistent data that the migration process was unable to resolve. The uids returned can be used in subsequent steps of this procedure.

##### For >= 2.41 Instances:

```sql
SELECT STRING_AGG(te.uid, ', ') AS uids
FROM trackedentity te
WHERE te.trackedentitytypeid IS NULL
  AND NOT EXISTS (
 SELECT 1
    FROM enrollment e JOIN program p on e.programid = p.programid
    WHERE e.trackedentityid = te.trackedentityid and p.trackedentitytypeid IS NOT NULL
  );
```
##### For <= 2.40 Instances:

```sql
SELECT STRING_AGG(te.uid, ', ') AS uids
FROM trackedentityinstance te
WHERE te.trackedentitytypeid IS NULL
  AND NOT EXISTS (
   SELECT 1
    FROM programinstance pi JOIN program p ON pi.programid = p.programid
    WHERE pi.trackedentityinstanceid = te.trackedentityinstanceid and p.trackedentitytypeid IS NOT NULL  );
```

#### Fixing Null Values

Starting from version v42, NULL values are no longer allowed in the trackedentitytypeid column. The migration attempted to address the invalid data, but it was unsuccessful. There are two options going forward.
- Change the `NULL` value to a valid trackedentitytypeid. ([Assign trackedentitytyeid to tracked entity](#assign-tracked-entity-type))
- Completely remove invalid trackedentity record. ([Delete trackedentities](#deleting-invalid-tracked-entities))

##### Assign tracked entity type
To assign valid trackedentitytypeid 
- Use the following command to list all the trackedentitytypes currently available in the system. This query retrieves the uid and name of all trackedentitytypes in your database. Review the output to identify the most appropriate trackedentitytype.

```sql
SELECT uid, name FROM trackedentitytype;
```

- Replace {REFERENCE_UID} with the UID of the selected trackedentitytype and {UIDS} with the UIDs retrieved from the SQL query above. Then, execute the following command:

```sql
UPDATE trackedentity SET trackedentitytypeid=( SELECT trackedentitytypeid FROM trackedentitytype WHERE uid='{REFERENCE_UID}') WHERE trackedentitytypeid IS NULL AND trackedentityid IN ({UIDS})?
```


##### Deleting invalid tracked entities
The script below can be used to remove all trackedentity records where the trackedentitytypeid column is null and migration was not able to fix it. Use this script with caution, as it may result in permanent data loss.

##### For >= 2.41 Instances:

```plsql
DO $$
DECLARE
    invalid_count INT;  -- Variable to store the count of invalid TrackedEntities
    deleted_count INT := 0;  -- Variable to keep track of deleted TrackedEntity count
BEGIN
    CREATE TEMP TABLE te AS (
        SELECT trackedentityid
        FROM trackedentity
        WHERE trackedentitytypeid IS NULL
    );

    CREATE TEMP TABLE enrollment_ids AS (
        SELECT enrollmentid
        FROM enrollment
        WHERE trackedentityid IN (SELECT trackedentityid FROM te)
    );

    CREATE TEMP TABLE event_ids AS (
        SELECT eventid
        FROM event
        WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids)
    );

    CREATE TEMP TABLE te_pm AS (
        SELECT id
        FROM programmessage
        WHERE trackedentityid IN (SELECT trackedentityid FROM te)
    );

    CREATE TEMP TABLE pi_pm AS (
        SELECT id
        FROM programmessage
        WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids)
    );

    CREATE TEMP TABLE event_pm AS (
        SELECT id
        FROM programmessage
        WHERE eventid IN (SELECT eventid FROM event_ids)
    );

    SELECT COUNT(trackedentityid)
    INTO invalid_count
    FROM trackedentity te
    WHERE trackedentitytypeid IS NULL AND NOT EXISTS (
           SELECT 1
            FROM enrollment e JOIN program p on e.programid = p.programid
            WHERE e.trackedentityid = te.trackedentityid and p.trackedentitytypeid IS NOT NULL
        );

    RAISE NOTICE 'Number of invalid TrackedEntities (trackedentitytypeid IS NULL): %', invalid_count;

    -- If there are any invalid TrackedEntities, proceed with deletion
    IF invalid_count > 0 THEN

        DELETE FROM programmessage_deliverychannels
        WHERE programmessagedeliverychannelsid IN (SELECT id FROM te_pm);

        DELETE FROM programmessage_emailaddresses
        WHERE programmessageemailaddressid IN (SELECT id FROM te_pm);

        DELETE FROM programmessage_phonenumbers
        WHERE programmessagephonenumberid IN (SELECT id FROM te_pm);

        DELETE FROM programmessage_deliverychannels
        WHERE programmessagedeliverychannelsid IN (SELECT id FROM pi_pm);

        DELETE FROM programmessage_emailaddresses
        WHERE programmessageemailaddressid IN (SELECT id FROM pi_pm);

        DELETE FROM programmessage_phonenumbers
        WHERE programmessagephonenumberid IN (SELECT id FROM pi_pm);

        DELETE FROM programmessage_deliverychannels
        WHERE programmessagedeliverychannelsid IN (SELECT id FROM event_pm);

        DELETE FROM programmessage_emailaddresses
        WHERE programmessageemailaddressid IN (SELECT id FROM event_pm);

        DELETE FROM programmessage_phonenumbers
        WHERE programmessagephonenumberid IN (SELECT id FROM event_pm);

        DELETE FROM event_notes
        WHERE eventid IN (SELECT eventid FROM event_ids);

        DELETE FROM enrollment_notes
        WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids);

        DELETE FROM note
        WHERE noteid NOT IN (
            SELECT noteid FROM event_notes
            UNION ALL
            SELECT noteid FROM enrollment_notes
        );

        DELETE FROM trackedentitydatavalueaudit
        WHERE eventid IN (SELECT eventid FROM event_ids);

        DELETE FROM programmessage
        WHERE eventid IN (SELECT eventid FROM event_ids);

        DELETE FROM programmessage
        WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids);

        DELETE FROM event
        WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids);

        DELETE FROM programmessage
        WHERE trackedentityid IN (SELECT trackedentityid FROM te);

        DELETE FROM relationshipitem
        WHERE trackedentityid IN (SELECT trackedentityid FROM te);

        DELETE FROM trackedentityattributevalue
        WHERE trackedentityid IN (SELECT trackedentityid FROM te);

        DELETE FROM trackedentityattributevalueaudit
        WHERE trackedentityid IN (SELECT trackedentityid FROM te);
      
        DELETE FROM trackedentityprogramowner
        WHERE trackedentityid IN (SELECT trackedentityid FROM te);

        DELETE FROM programtempowner
        WHERE trackedentityid IN (SELECT trackedentityid FROM te);

        DELETE FROM programtempownershipaudit
        WHERE trackedentityid IN (SELECT trackedentityid FROM te);

        DELETE FROM programownershiphistory
        WHERE trackedentityid IN (SELECT trackedentityid FROM te);

        DELETE FROM enrollment
        WHERE trackedentityid IN (SELECT trackedentityid FROM te);
		
        WITH deleted AS (DELETE FROM trackedentity WHERE trackedentitytypeid IS NULL AND NOT EXISTS (
           SELECT 1
            FROM enrollment e JOIN program p on e.programid = p.programid
            WHERE e.trackedentityid = te.trackedentityid and p.trackedentitytypeid IS NOT NULL
        ) 
        RETURNING *) SELECT COUNT(*) INTO deleted_count FROM deleted;

        RAISE NOTICE 'Total number of TrackedEntities deleted: %', deleted_count;

    ELSE
        RAISE NOTICE 'No invalid TrackedEntities found for deletion.';
    END IF;

    DROP TABLE IF EXISTS te, enrollment_ids, event_ids, te_pm, pi_pm, event_pm;

END;
$$;
```

##### For <= 2.40 Instances:

```plsql
DO $$
DECLARE
    invalid_count INT;  -- Variable to store the count of invalid TrackedEntityInstances
    deleted_count INT := 0;  -- Variable to keep track of deleted TrackedEntityInstance count
BEGIN
    CREATE TEMP TABLE te AS (
        SELECT trackedentityinstanceid
        FROM trackedentityinstance
        WHERE trackedentitytypeid IS NULL
    );

    CREATE TEMP TABLE pi_ids AS (
        SELECT programinstanceid
        FROM programinstance
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te)
    );

    CREATE TEMP TABLE psi_ids AS (
        SELECT programstageinstanceid
        FROM programstageinstance
        WHERE programinstanceid IN (SELECT programinstanceid FROM pi_ids )
    );

    CREATE TEMP TABLE te_pm AS (
        SELECT id
        FROM programmessage
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te)
    );

    CREATE TEMP TABLE pi_pm AS (
        SELECT id
        FROM programmessage
        WHERE programinstanceid IN (SELECT programinstanceid FROM pi_ids )
    );

    CREATE TEMP TABLE psi_pm AS (
        SELECT id
        FROM programmessage
        WHERE programstageinstanceid IN (SELECT programstageinstanceid FROM psi_ids )
    );

    SELECT COUNT(trackedentityinstanceid)
    INTO invalid_count
    FROM trackedentityinstance te
    WHERE trackedentitytypeid IS NULL AND NOT EXISTS (
           SELECT 1
            FROM programinstance e JOIN program p on e.programid = p.programid
            WHERE e.trackedentityinstanceid = te. trackedentityinstanceid and p.trackedentitytypeid IS NOT NULL
        );

    RAISE NOTICE 'Number of invalid TrackedEntityInstances (trackedentitytypeid IS NULL): %', invalid_count;

    -- If there are any invalid TrackedEntityInstances, proceed with deletion
    IF invalid_count > 0 THEN

        DELETE FROM programmessage_deliverychannels
        WHERE programmessagedeliverychannelsid IN (SELECT id FROM te_pm);

        DELETE FROM programmessage_emailaddresses
        WHERE programmessageemailaddressid IN (SELECT id FROM te_pm);

        DELETE FROM programmessage_phonenumbers
        WHERE programmessagephonenumberid IN (SELECT id FROM te_pm);

        DELETE FROM programmessage_deliverychannels
        WHERE programmessagedeliverychannelsid IN (SELECT id FROM pi_pm);

        DELETE FROM programmessage_emailaddresses
        WHERE programmessageemailaddressid IN (SELECT id FROM pi_pm);

        DELETE FROM programmessage_phonenumbers
        WHERE programmessagephonenumberid IN (SELECT id FROM pi_pm);

        DELETE FROM programmessage_deliverychannels
        WHERE programmessagedeliverychannelsid IN (SELECT id FROM psi_pm );

        DELETE FROM programmessage_emailaddresses
        WHERE programmessageemailaddressid IN (SELECT id FROM psi_pm );

        DELETE FROM programmessage_phonenumbers
        WHERE programmessagephonenumberid IN (SELECT id FROM psi_pm );

        DELETE FROM programstageinstancecomments
        WHERE programstageinstanceid IN (SELECT programstageinstanceid FROM psi_ids );

        DELETE FROM programinstancecomments
        WHERE programinstanceid IN (SELECT programinstanceid FROM pi_ids );

        DELETE FROM trackedentitycomment
        WHERE trackedentitycommentid NOT IN (
            SELECT trackedentitycommentid FROM programstageinstancecomments
            UNION ALL
            SELECT trackedentitycommentid FROM programinstancecomments
        );

        DELETE FROM trackedentitydatavalueaudit
        WHERE programstageinstanceid IN (SELECT programstageinstanceid FROM psi_ids );

        DELETE FROM programmessage
        WHERE programstageinstanceid IN (SELECT programstageinstanceid FROM psi_ids );

        DELETE FROM programmessage
        WHERE programinstanceid IN (SELECT programinstanceid FROM pi_ids );

        DELETE FROM programstageinstance
        WHERE programinstanceid IN (SELECT programinstanceid FROM pi_ids );

        DELETE FROM programmessage
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te);

        DELETE FROM relationshipitem
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te);

        DELETE FROM trackedentityattributevalue
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te);

        DELETE FROM trackedentityattributevalueaudit
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te);
      
        DELETE FROM trackedentityprogramowner
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te);

        DELETE FROM programtempowner
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te);

        DELETE FROM programtempownershipaudit
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te);

        DELETE FROM programownershiphistory
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te);

        DELETE FROM programinstance
        WHERE trackedentityinstanceid IN (SELECT trackedentityinstanceid FROM te);
		
        WITH deleted AS (DELETE FROM trackedentityinstanceid WHERE trackedentitytypeid IS NULL AND NOT EXISTS (
           SELECT 1
            FROM programinstance e JOIN program p on e.programid = p.programid
            WHERE e.trackedentityinstanceid = te.trackedentityinstanceid and p.trackedentitytypeid IS NOT NULL
        ) 
        RETURNING *) SELECT COUNT(*) INTO deleted_count FROM deleted;

        RAISE NOTICE 'Total number of TrackedEntityInstances deleted: %', deleted_count;

    ELSE
        RAISE NOTICE 'No invalid TrackedEntityInstances found for deletion.';
    END IF;

    DROP TABLE IF EXISTS te, pi_ids, psi_ids, te_pm, pi_pm, psi_pm;

END;
$$;
```

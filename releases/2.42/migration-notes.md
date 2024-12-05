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
- Completely remove the record. ([Delete events](#deleting-inconsistent-events) and [Delete enrollments](#deleting-inconsistent-enrollments))
- Change the `NULL` value to a valid and meaningful organisation unit. ([Assign organisation unit to event](#assign-organisation-unit-to-event) and [Assign organisation unit to enrollment](#assign-organisation-unit-to-enrollment))

##### Deleting inconsistent events

The following script can be used to remove all the events that have a 'NULL' value in `organisationunitid` column.

```plsql
DO $$
BEGIN
WITH event_ids AS (
    SELECT eventid
    FROM event
    WHERE organisationunitid IS NULL
),
     pm_ids AS (
         SELECT id
         FROM programmessage
         WHERE eventid IN (SELECT eventid FROM event_ids)
     )

DELETE FROM programmessage_deliverychannels
WHERE programmessagedeliverychannelsid IN (SELECT id FROM pm_ids);

DELETE FROM programmessage_emailaddresses
WHERE programmessageemailaddressid IN (SELECT id FROM pm_ids);

DELETE FROM programmessage_phonenumbers
WHERE programmessagephonenumberid IN (SELECT id FROM pm_ids);

DELETE FROM programnotificationinstance
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM event_notes
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM note
WHERE noteid NOT IN (
    SELECT noteid
    FROM event_notes
    UNION ALL
    SELECT noteid
    FROM enrollment_notes
);

DELETE FROM relationshipitem
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM trackedentitydatavalueaudit
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM programmessage
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM event
WHERE organisationunitid IS NULL;
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
WITH enrollment_ids AS (
    SELECT enrollmentid
    FROM enrollment
    WHERE organisationunitid IS NULL
    AND programid in (select programid from program where type = 'WITH_REGISTRATION')
),
     event_ids AS (
         SELECT eventid
         FROM event
         WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids)
     ),
     pm_ids AS (
         SELECT id
         FROM programmessage
         WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids)
     )

DELETE FROM programmessage_deliverychannels
WHERE programmessagedeliverychannelsid IN (SELECT id FROM pm_ids);

DELETE FROM programmessage_emailaddresses
WHERE programmessageemailaddressid IN (SELECT id FROM pm_ids);

DELETE FROM programmessage_phonenumbers
WHERE programmessagephonenumberid IN (SELECT id FROM pm_ids);

DELETE FROM event_notes
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM enrollment_notes
WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids);

DELETE FROM note
WHERE noteid NOT IN (
    SELECT noteid
    FROM event_notes
    UNION ALL
    SELECT noteid
    FROM enrollment_notes
);

DELETE FROM programnotificationinstance
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM programnotificationinstance
WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids);

DELETE FROM relationshipitem
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM trackedentitydatavalueaudit
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM programmessage
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM relationshipitem
WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids);

DELETE FROM programmessage
WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids);

DELETE FROM event
WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids);

DELETE FROM enrollment
WHERE organisationunitid IS NULL
AND programid in (select programid from program where type = 'WITH_REGISTRATION');
END;
$$;
```

##### Assign organisation unit to event

To assign an organisation unit to an event with a `NULL` value in
column `organisationunitid` is a sensitive operation as the organisation unit
defines which users can access such event (through the search and capture scope).
The first step is to find a "reference" event that should be in the same scope
as the one to be updated.
The following script assign the organisation unit of the "reference" event 
to the event with `NULL' organisation unit.
Substitute {REFERENCE_UID} with the `uid` of the reference event and
{EVENT_UID} with the the `uid` of the event to be updated.

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
to the enrollment with `NULL' organisation unit.
Substitute {REFERENCE_UID} with the `uid` of the reference enrollment and
{ENROLLMENT_UID} with the the `uid` of the enrollment to be updated.

```sql
update enrollment en
set organisationunitid = (select organisationunitid from enrollment where uid = '{REFERENCE_UID}')
where en.organisationunitid is null
and en.uid = '{ENROLLMENT_UID}'
AND en.programid in (select programid from program where type = 'WITH_REGISTRATION');
```

### Null Tracked Entity Type

The `TrackedEntity`, previously known as `TrackedEntityInstance`, is required to have a specific type, such as person, place, equipment, or area. However, this constraint was not enforced at the database level, leading to inconsistent data. To ensure data integrity moving forward, we need to enforce this requirement by making the `trackedentitytypeid` column in the `trackedentity` table non-nullable.

#### Checking for Null Values

To check for any NULL values in this column, you can use the following SQL script. If it returns a value greater than 0, it indicates the presence of inconsistent data in the system.

##### For 2.41 Instances:

```sql
SELECT COUNT(1)
FROM trackedentity
WHERE trackedentitytypeid IS NULL;
```
##### For <= 2.40 Instances:


```sql
SELECT COUNT(1)
FROM trackedentityinstance
WHERE trackedentitytypeid IS NULL;
```

#### Fixing Null Values

Starting from version v42, NULL value is no longer allowed for the trackedentitytypeid column. To proceed with the upgrade, all inconsistencies must be resolved, which involves completely removing any invalid records. ([Delete trackedentity](#deleting-inconsistent-trackedentities))

##### Deleting inconsistent trackedentities

The following script can be used to remove all TrackedEntity records with a NULL value in the trackedentitytypeid column.

```plsql
DO $$
BEGIN
WITH te AS (
    SELECT trackedentityid
    FROM trackedentity
    WHERE trackedentitytypeid IS NULL
),

enrollment_ids AS (
    SELECT enrollmentid
    FROM enrollment
    WHERE trackedentityid IN (SELECT trackedentityid FROM te)
),

event_ids AS (
    SELECT eventid
    FROM event
    WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids)
),

te_pm AS (
    SELECT id
    FROM programmessage
    WHERE trackedentityid IN (SELECT trackedentityid FROM te)
),
pi_pm AS (
    SELECT id
    FROM programmessage
    WHERE enrollmentid IN (SELECT enrollmentid FROM enrollment_ids)
),
event_pm AS (
    SELECT id
    FROM programmessage
    WHERE eventid IN (SELECT eventid FROM event_ids)
)

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
WHERE noteid NOT IN (SELECT noteid FROM event_notes
                     UNION ALL
                     SELECT noteid FROM enrollment_notes);


DELETE FROM trackedentitydatavalueaudit
WHERE eventid IN (SELECT eventid FROM event_ids);

DELETE FROM eventchangelog
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

DELETE FROM trackedentitychangelog
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

DELETE FROM trackedentity
WHERE trackedentitytypeid IS NULL;

END;
$$;
```


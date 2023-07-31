# 2.41 Upgrade Notes




## API
### Sharing

- **Legacy Sharing properties are removed**: from 2.36 a new `sharing` property has been introduced in order to replace the legacy sharing properties userAccesses, userGroupAccesses, publicAccess, externalAccess. In order to keep the web api backward compability we have been supported both new and legacy properties our web api and all related features. However, in order to implement new features and keep the code base clean we need to remove the legacy format in 2.41. So from this version, you will not get those properties returned from our web api : `userAccesses`, `userGroupAccesses`, `publicAccess`, `externalAccess`. Instead, those properties can be accessed in new `sharing` properties as documented [here](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-237/sharing.html#new-sharing-object).

- **Breaking change in Dashboard App**: in 2.40 and older versions, Users can view Dashboard content even without `METADATA_READ` permission to all metadata objects linked to DashboardItems. That is possible because of a loophole in our web api which allows any User to see details of any metadata object if the `uid` is known. This loophole has been causing issues for a long time so we decided to remove it in 2.41. As a result, many Users will not be able to view Dashboards because they don't have enough `METADATA_READ` permission of the Dashboard content. In order to fix it, the System Administrator or the Dashboard owner can make use of the feature [Cascade sharing for Dashboard](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-237/sharing.html#cascade-sharing-for-dashboard) to grant required permissions to affected Users.

### Tracker

#### Breaking Changes

The following query parameters have been removed as they have never been implemented and thus had no
effect on the response

* `/tracker/trackedEntities?attachment`
* `/tracker/event?attachment`

#### Deprecated APIs

##### Semicolon as separator for identifiers (UID)

The following query parameters accepting one or more semicolon separated UIDs are deprecated in
favor of a parameter accepting **comma separated** UIDs. This is to ensure UIDs are consistently
separated by comma across all DHIS2 endpoints. Names are now also consistently using plural to
indicate more than one UID is allowed.

`/tracker/trackedEntity`
* `assignedUsers` replaces `assignedUser`
* `orgUnits` replaces `orgUnit`
* `trackedEntities` replaces `trackedEntity`

`/tracker/enrollments`
* `orgUnits` replaces `orgUnit`
* `enrollments` replaces `enrollment`

`/tracker/events`
* `assignedUsers` replaces `assignedUser`
* `attributeCategoryOptions` replaces `attributeCos`
* `events` replaces `event`

##### Naming

Tracker names have changed over time. In order to provide a consistent API we have deprecated the
following query parameters and paths in favor of new ones consistently using `trackedEntity`,
`enrollment` and `event`.

`/tracker/relationships`
* `trackedEntity` replaces `tei`

`/tracker/events`
* `attributeCategoryCombo` replaces `attributeCc`

`/tracker/ownership/transfer`
* `trackedEntity` replaces `trackedEntityInstance`

`/tracker/ownership/override`
* `trackedEntity` replaces `trackedEntityInstance`

`/messages/`
* `enrollment` replaces `programInstance`
* `event` replaces `programStageInstance`

`/messages/scheduled/sent`
* `enrollment` replaces `programInstance`
* `event` replaces `programStageInstance`

`/audits/trackedEntityDataValue`
* `events` replaces `psi`

`/audits/trackedEntityAttributeValue`
* `trackedEntities` replaces `tei`

`/audits/trackedEntityInstance`
* `trackedEntities` replaces `tei`

`/programNotificationInstances`
* `enrollment` replaces `programInstance`
* `event` replaces `programStageInstance`

`/tracker/trackedEntities`
`/tracker/enrollments`
`/tracker/events`
* `orgUnitMode` replaces `ouMode`

The following endpoints are deprecated

* `/maintenance/softDeletedTrackedEntityRemoval` replaces `/maintenance/softDeletedTrackedEntityInstanceRemoval`
* `/maintenance/softDeletedEnrollmentRemoval` replaces `/maintenance/softDeletedProgramInstanceRemoval`
* `/maintenance/softDeletedEventRemoval` replaces `/maintenance/softDeletedProgramStageInstanceRemoval`
* `/audits/trackedEntity` replaces `/audits/trackedEntityInstance`

We have deprecated keys

* `trackedEntity` replaces `trackedEntityInstance`
* `enrollment` replaces `programInstance`
* `event` replaces `programStageInstance`

in the following API response bodies

* `/api/dataSummary` in the `objectCounts` object
* `/api/system/objectCounts`

## Database

### Tracker

#### Breaking Changes: renamed tables and columns 

We have renamed some tables and columns following tracker's new [naming](#naming) in the API.

Therefore, we align the database's names with the changes applied to `trackedEntityInstance`, `programInstance`, and `programStageInstance`.

#### Rename Tables

| Old Table Name              | New Table Name                 |
| ----------------------------|:------------------------------:|
| trackedentityinstance       | trackedentity                  |
| programinstance             | enrollment                     |
| programstageinstance        | event                          |
| programstageinstancefilter  | eventfilter                    |
| programstageinstancecomments| eventcomments                  |
| programinstancecomments     | enrollmentcomments             |
| trackedentityinstanceaudit  | trackedentityaudit             |
| trackedentityinstancefilter | trackedentityfilter            |

#### Renamed Columns

The following `programstageinstance` related columns have been renamed 

| Table (new names)           | Column Old Name                | Column New Name        |
| ----------------------------|:------------------------------:|-----------------------:|
| event                       | programstageinstanceid         | eventid                |
| eventfilter                 | programstageinstancefilterid   | eventfilterid          |
| relationshipitem            | programstageinstanceid         | eventid                |
| trackedentitydatavalueaudit | programstageinstanceid         | eventid                |
| programmessage              | programstageinstanceid         | eventid                |
| programnotificationinstance | programstageinstanceid         | eventid                |
| eventcomments               | programstageinstanceid         | eventid                |
| trackedentitydatavalueaudit | programstageinstanceid         | eventid                |

The following `programinstance` related columns have been renamed 

| Table (new names)           | Column Old Name                | Column New Name        |
| ----------------------------|:------------------------------:|-----------------------:|
| enrollment                  | programinstanceid              | enrollmentid           |
| enrollmentcomments          | programinstanceid              | enrollmentid           |
| relationshipitem            | programinstanceid              | enrollmentid           |
| programnotificationinstance | programinstanceid              | enrollmentid           |
| programmessage              | programinstanceid              | enrollmentid           |
| event                       | programinstanceid              | enrollmentid           |

The following `trackedentityinstance` related columns have been renamed 

| Table (new names)                | Column Old Name                | Column New Name        |
| ---------------------------------|:------------------------------:|-----------------------:|
| trackedentity                    | trackedentityinstanceid        | trackedentityid        |
| trackedentityaudit               | trackedentityinstance          | trackedentity          |
| trackedentityaudit               | trackedentityinstanceauditid   | trackedentityauditid   |
| trackedentityfilter              | trackedentityinstancefilterid  | trackedentityfilterid  |
| enrollment                       | trackedentityinstanceid        | trackedentityid        |
| trackedentityattributevalueaudit | trackedentityinstanceid        | trackedentityid        |
| programmessage                   | trackedentityinstanceid        | trackedentityid        |
| relationshipitem                 | trackedentityinstanceid        | trackedentityid        |
| trackedentityprogramowner        | trackedentityinstanceid        | trackedentityid        |
| programtempownershipaudit        | trackedentityinstanceid        | trackedentityid        |
| programtempowner                 | trackedentityinstanceid        | trackedentityid        |
| programownershiphistory          | trackedentityinstanceid        | trackedentityid        |


#### Postgres Reference

From Postgres docs for [alter table](https://www.postgresql.org/docs/current/sql-altertable.html)

> The RENAME forms change the name of a table (or an index, sequence, view, materialized view, or foreign table), 
> the name of an individual column in a table, or the name of a constraint of the table. 
> When renaming a constraint that has an underlying index, the index is renamed as well. **There is no effect on the stored data.**

Renaming a table or a table's column does not affect the data. For example, re-building a primary key index, which can be expensive for large tables, should not happen.
Therefore, no downtime is expected following the migrations.

You can check that the index creation hasn't changed after the migration via the transaction commit. 

```sql
SELECT pg_xact_commit_timestamp(xmin)
FROM pg_class
WHERE relname = 'programstageinstance_pkey';
```
Notice if you want to run the query, Postgres needs to start with `-c track_commit_timestamp=on`
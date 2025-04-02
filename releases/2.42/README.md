# DHIS2 Version 42 Upgrade Notes

Welcome to the upgrade notes for DHIS2 version 42.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**
>
> :warning: **Please ensure you have also read the upgrade notes from the [PREVIOUS RELEASE](../2.41/README.md), if upgrading from an earlier version**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [Prerequisits](#prerequisits)
  - [API Changes](#api-changes)
    - [Platform](#platform)
    - [Tracker](#tracker)
    - [Analytics](#analytics)
      - [Breaking Changes](#breaking-changes)
  - [Database](#database)
    - [Analytics](#analytics-1)
      - [Breaking Changes: renamed tables and columns](#breaking-changes-renamed-tables-and-columns)
    - [Tracker](#tracker-1)
        - [Data inconsistencies](#data-inconsistencies)
---
## Prerequisits

> **Important**
>
> Version 42 of DHIS2 **now requires Tomcat 10.1** or above.

## API Changes

### Platform

#### Users

The /user/userCredentials object is merged into the user object and is now removed.
Previous user object payload could look like this:
`{
  "firstName": "John",
  "surname": "Doe",
  "email": "youremailaddress@mail.com",
  "userCredentials": {
    "username": "testUser",
    "userRoles": [ {
      "id": "Euq3XfEIEbx"
    } ]
  },
  "organisationUnits": [ {
    "id": "ImspTQPwCqd"
  } ],
  "userGroups": [ {
    "id": "vAvEltyXGbD"
  } ],
  "welcomeMessage": "Test Welcome Message"
}`

But from 2.42 it must look like this:
`{
  "firstName": "John",
  "surname": "Doe",
  "email": "youremailaddress@mail.com",
  "username": "testUser",
  "userRoles": [ {
    "id": "Euq3XfEIEbx"
  } ],
  "organisationUnits": [ {
    "id": "ImspTQPwCqd"
  } ],
  "userGroups": [ {
    "id": "vAvEltyXGbD"
  } ],
  "welcomeMessage": "Test Welcome Message"
}`


#### DataElement

Updating the `valueType` of a `DataElement` is prohibited if there is any existing data associated with that `DataElement`. See [Jira issue](https://dhis2.atlassian.net/browse/DHIS2-18152).

### Analytics

#### Breaking Changes

* In the endpoint `/analytics/trackedEntities/query`, the `header` column `trackedentityinstanceuid` (part of the response object) was replaced by `trackedentity`.
* For analytics operations the authenticated user must have permission to export and analyze data for the designated organization units.
  In previous versions, this permission requirement was disregarded. If no organization unit permissions are explicitly granted,
  data capture and maintenance rights will be applied instead.

* In the endpoint `/analytics/*/query`, the some filter capabilities were removed. ie.:
| edqlbukwRfQ[*].vANAXwtLwcT, dqlbukwRfQ[-1~3].vANAXwtLwcT, edqlbukwRfQ[0~5~LAST_3_MONTHS].vANAXwtLwcT, edqlbukwRfQ[-1~3~2021-01-01~2022-05-31].vANAXwtLwcT

### Tracker

#### Breaking Changes

All parameters, properties and endpoints that have been deprecated in
[v41](https://github.com/dhis2/dhis2-releases/tree/master/releases/2.41#tracker) have been removed.

The most notable endpoints that have been removed are

* `/trackedEntityInstances`
* `/enrollments`
* `/events`
* `/relationships`

Please follow [this migration
guide](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-241/tracker-deprecated.html#webapi_tracker_migration).

Tracker and event program data can no longer be synchronized via the [metadata
synchronization](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/exchanging-data/metadata-synchronization.html#about-data-and-metadata-synchronization).

The two change log endpoints have also been removed:
| Removed Endpoint                      | Endpoint to use instead                     | Documentation                       |
|---------------------------------------|---------------------------------------------|---------------------------------------------|
| `/audits/trackedEntityDataValue`      | `/tracker/events/{uid}/changeLogs`          |[Event change logs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/tracker.html#webapi_event_data_value_change_logs)|
| `/audits/trackedEntityAttributeValue` | `/tracker/trackedEntities/{uid}/changeLogs` |[Tracked entity attribute change logs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/tracker.html#webapi_tracker_attribute_change_logs)|

Data from the `trackedentityattributevalueaudit` and `trackedentitydatavalueaudit` tables, which were used by now-removed endpoints, has been migrated to the new `trackedentitychangelog` and `eventchangelog` tables. 
These new tables better align with updated requirements and will be used by the new change log endpoints.

As part of the migration, only valid change log data was transferred. 
Records were migrated if they met the following criteria:
- For event change logs, the record contains a valid `eventid` and `dataelementid`.
- For attribute change logs, the record contains a valid `trackedentityid` and `attributeid`.
- For both, the change log type is one of `CREATE`, `UPDATE`, or `DELETE`.

Records that did not meet these conditions were not migrated and remain in the original tables. 
The `trackedentityattributevalueaudit` and `trackedentitydatavalueaudit` tables will not be deleted, but they are no longer maintained or used by the system. 
Administrators can decide how to handle these tables, but the remaining data lacks the essential information needed for use as change logs in the new framework.

When it comes to pagination, a request to `/trackedEntities` will throw a `BadRequestException` if the requested page size exceeds the system setting `KeyTrackedEntityMaxLimit`. This setting can be configured via the [API](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-241/settings-and-configuration.html?h=system+settings+develop+2.41#webapi_system_settings).

#### Deprecated APIs

The table below summarizes the deprecated API parameters:

| Endpoint                      | Deprecated Parameter   | New Parameter        |
|-------------------------------|------------------------|----------------------|
| `/tracker/trackedEntities`    | `programStatus`        | `enrollmentStatus`   |
| `/tracker/enrollments`        | `programStatus`        | `status`             |
| `/tracker/events`             | `programStatus`        | `enrollmentStatus`   |
| `/tracker/ownership/transfer` | `ou`                   | `orgUnit`            |

The table below summarizes the deprecated API endpoints:

| Deprecated Endpoint                   | Endpoint to use instead                     |
|---------------------------------------|---------------------------------------------|
| `/audits/trackedEntityDataValue`      | `/tracker/events/{uid}/changeLogs`          |
| `/audits/trackedEntityAttributeValue` | `/tracker/trackedEntities/{uid}/changeLogs` |

## Database

The database related changes are described by each respective product stream.

### Analytics

In release 41 we had some changes regarding the naming convention. Some terms were adjusted to improve the clarity and facilitate the communication. In release 42 we are bringing the same naming conventions into analytics, which comes with breaking changes. You can find them below.

#### Breaking Changes: renamed tables and columns

 Renamed tables

| Old table name                | New table name               |
| ------------------------------|:----------------------------:|
| analytics_tei_*               | analytics_te_*               |
| analytics_tei_events_*        | analytics_te_event_*        |
| analytics_tei_enrollments_*   | analytics_te_enrollment_*   |

 Renamed columns

| Table                                 | Old column name               | New column name    |
| --------------------------------------|:-----------------------------:|-------------------:|
| analytics_te_* (renamed)              | trackedentityinstanceuid      | trackedentity      |
| analytics_te_event_* (renamed)        | trackedentityinstanceuid      | trackedentity      |
| analytics_te_event_* (renamed)        | programuid                    | program            |
| analytics_te_event_* (renamed)        | programinstanceuid            | enrollment         |
| analytics_te_event_* (renamed)        | programstageuid               | programstage       |
| analytics_te_event_* (renamed)        | programstageinstanceuid       | event              |
| analytics_te_event_* (renamed)        | psigeometry                   | evgeometry         |
| analytics_te_event_* (renamed)        | psilongitude                  | evlongitude        |
| analytics_te_event_* (renamed)        | psilatitude                   | evlatitude         |
| analytics_te_enrollment_* (renamed)   | trackedentityinstanceuid      | trackedentity      |
| analytics_te_enrollment_* (renamed)   | programuid                    | program            |
| analytics_te_enrollment_* (renamed)   | programinstanceuid            | enrollment         |
| analytics_te_enrollment_* (renamed)   | pigeometry                    | engeometry         |
| analytics_te_enrollment_* (renamed)   | pilongitude                   | enlongitude        |
| analytics_te_enrollment_* (renamed)   | pilatitude                    | enlatitude         |
| analytics_ownership_*                 | teiuid                        | teuid              |
| analytics_event_*                     | tei                           | trackedentity      |
| analytics_event_*                     | psi                           | event              |
| analytics_event_*                     | pi                            | enrollment         |
| analytics_event_*                     | psistatus                     | eventstatus        |
| analytics_event_*                     | pistatus                      | enrollmentstatus   |
| analytics_event_*                     | evgeometry                    | psigeometry        |
| analytics_event_*                     | engeometry                    | pigeometry         |
| analytics_event_*                     | tegeometry                    | teigeometry        |
| analytics_enrollment_*                | pi                            | enrollment         |
| analytics_enrollment_*                | pigeometry                    | engeometry         |

### Tracker

#### Data inconsistencies

Some database migrations aim to make the schema as strict as possible and fully aligned with the data model.
To ensure these migrations succeed, any inconsistencies in the database must be resolved beforehand.
If a migration fails during the upgrade process, carefully review the logs
and follow the provided instructions to address and fix the inconsistencies.

`not null` constraints added

| Table name                  |        Column name        |
|-----------------------------|:-------------------------:|
| event                       | organisationunitid        |
| enrollment                  | organisationunitid        |

For more information [migration notes](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.42/migration-notes.md).

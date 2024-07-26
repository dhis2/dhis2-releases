# DHIS2 Version 42 Upgrade Notes

Welcome to the upgrade notes for DHIS2 version 42.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**
>
> :warning: **Please ensure you have also read the upgrade notes from the [PREVIOUS RELEASE](../2.41/README.md), if upgrading from an earlier version**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [API Changes](#api-changes)
    - [Tracker](#tracker)
    - [Analytics](#analytics)
      - [Breaking Changes](#breaking-changes)
  - [Database](#database)
    - [Analytics](#analytics-1)
      - [Breaking Changes: renamed tables and columns](#breaking-changes-renamed-tables-and-columns)
---
## API Changes

### Analytics

#### Breaking Changes

In the endpoint `/analytics/trackedEntities/query`, the `header` column `trackedentityinstanceuid` (part of the response object) was replaced by `trackedentity`.

### Tracker

#### Breaking Changes

The following endpoints have been removed

* `/trackedEntityInstances`
* `/enrollments`
* `/events`
* `/relationships`

Please follow [this migration
guide](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/tracker-deprecated.html#webapi_tracker_migration).

Tracker and event program data can no longer be synchronized via the [metadata
synchronization](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/exchanging-data/metadata-synchronization.html#about-data-and-metadata-synchronization).

#### Deprecated APIs

The table below summarizes the deprecated API parameters:

| Endpoint                   | Deprecated Parameter   | New Parameter        |
|----------------------------|------------------------|----------------------|
| `/tracker/trackedEntities` | `programStatus`        | `enrollmentStatus`   |
| `/tracker/enrollments`     | `programStatus`        | `status`             |
| `/tracker/events`          | `programStatus`        | `enrollmentStatus`   |

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

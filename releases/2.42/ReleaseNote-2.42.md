# DHIS2 Version 42 Upgrade Notes

Welcome to the upgrade notes for DHIS2 version 42.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**
>
> :warning: **Please ensure you have also read the upgrade notes from the [PREVIOUS RELEASE](../2.41/README.md), if upgrading from an earlier version**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [API Changes](#api-changes)
    - [Tracker](#tracker)

---
## API Changes

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


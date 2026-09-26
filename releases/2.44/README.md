# DHIS2 Version 44 Upgrade Notes

Welcome to the upgrade notes for DHIS2 version 44.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**
>
> :warning: **Please ensure you have also read the upgrade notes from the [PREVIOUS RELEASE](../2.43/README.md), if upgrading from an earlier version**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [API Changes](#api-changes)
    - [Platform](#platform)
    - [Tracker](#tracker)
    - [Analytics](#analytics)
---

## API Changes

### Platform

### Tracker
The `storedBy` field has been removed from Notes, Tracked Entities, Enrollments, Events, and EventDataValues. For these objects, the existing `createdBy` field should be used instead, as it already provides the relevant user information. The only exception is EventDataValues, which expose this information through the `createdByUserInfo` field.

Please note that both `createdBy` and `createdByUserInfo` are set server-side, so no user input is required.

For TrackedEntityAttributeValues, the `storedBy` field has been renamed to `updatedBy`. It stores the authenticated user instead of the user provided in the payload, and is also set server-side, making it effectively read-only.

#### Export requests are now bounded by a timeout

Tracker export requests are now cancelled once they exceed a time budget, failing with `504 Gateway Timeout`.

| Key | Default | Description |
|---|---|---|
| `tracker.export.timeout` | `600` | Seconds a tracker export request may spend fetching data. One budget is shared by every database query and object store read of a request. `0` disables it |

10 minutes is a backstop so that no export runs unbounded, generous enough that typical workloads are unaffected. Set it below any timeout in front of DHIS2, such as a reverse proxy, so DHIS2 is the layer that times out first. See the [documentation](https://docs.dhis2.org/en/manage/reference/dhis-core-version-master/dhis.conf.html#install_tracker_configuration).

#### Table changes

If you run **custom SQL scripts** or have created **SQL views** on notes, you might need to adapt them. The `enrollment_notes`, `trackerevent_notes` and `singleevent_notes` tables have been removed. A note now references its enrollment or event through a column on the `note` table, exactly one of which is set.

| Removed table      | Column on `note` |
|--------------------|------------------|
| enrollment_notes   | enrollmentid     |
| trackerevent_notes | trackereventid   |
| singleevent_notes  | singleeventid    |

The upgrade moves notes without an enrollment or event to a new `inconsistentnote` table, see the [migration notes](migration-notes.md#notes-without-an-enrollment-or-event).

#### Breaking Changes

- `/api/identifiableObjects/{uid}` no longer returns notes. Notes are returned with their enrollment or event, for example `/api/tracker/enrollments/{uid}?fields=notes`.


### Analytics

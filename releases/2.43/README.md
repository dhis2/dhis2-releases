# DHIS2 Version 43 Upgrade Notes

Welcome to the upgrade notes for DHIS2 version 43.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**
>
> :warning: **Please ensure you have also read the upgrade notes from the [PREVIOUS RELEASE](../2.42/README.md), if upgrading from an earlier version**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [Prerequisits](#prerequisits)
  - [API Changes](#api-changes)
    - [Platform](#platform)
    - [Tracker](#tracker)
    - [Analytics](#analytics)
---
## Prerequisits

It must pass integrity check `Single events without an occurred date`.

## API Changes

### Platform

### Analytics

### Tracker
As described [in the docs] (https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/tracker.html#webapi_tracker_objects_events)
events can be of 2 different types, tracker events and single events. We made this distinction
explicit in the code and the database, so the `event` table was split into `singleevent`
and `trackerevent` tables.

#### Table changes

Given the new database structure, if you run **custom SQL scripts** or have created
**SQL views**, you might need to adapt to the breaking changes described in the current section.

Split tables

| Original event table | Single event table   | Tracker event table   |
| ---------------------|:--------------------:|----------------------:|
| event                | singleevent          | trackerevent          |
| eventchangelog       | singleeventchangelog | trackereventchangelog |
| event_notes          | singleevent_notes    | trackerevent_notes    |

Split columns

| Table                       | Original event column | Single event column | Tracker event column |
| ----------------------------|:---------------------:|:-------------------:|---------------------:|
| programmessage              | eventid               | singleeventid       | trackereventid       |
| relationshipitem            | eventid               | singleeventid       | trackereventid       |
| programnotificationinstance | eventid               | singleeventid       | trackereventid       |

#### Breaking Changes

The following changes have been made to Tracker error codes to improve accuracy and consistency:​
- Error code `E1084` has been removed. Depending on the context, the system will now return
the more appropriate error codes: `E1007` for attributes or `E1302` for data values.
- Error code `E1085` has also been removed. In its place, the system will return error code `E1007`.​

Tracker API improvements and cleanup:
- Made program a mandatory parameter in `/tracker/events` endpoint.
- Made program a mandatory parameter in `/tracker/enrollments` endpoint.
- Removed trackedEntityType as a supported parameter in `/tracker/enrollments`.
- Removed deprecated ou parameter from `/api/tracker/ownership/transfer`. Use orgUnit instead.
- Removed the job type Tracker Search Optimization from `/api/jobTypes`. We [introduced](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/maintaining-the-system/scheduling.html?h=tracker+search+optimization+master#scheduling_tracker_search_optimization) the new Tracker trigram index maintenance.

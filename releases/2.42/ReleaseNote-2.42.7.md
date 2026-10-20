# Patch 2.42.7 Release Note

- [Core updates](#core-updates)
  - [Features](#features)
  - [Bugs](#bugs)
- [App updates](#app-updates)

## Core updates

Changes made in the bundled applications are listed under [App updates](#app-updates).

### Features

#### [App] Metadata Management App

- **[DHIS2-22171](https://dhis2.atlassian.net/browse/DHIS2-22171)** [METADATA MANAGEMENT]: add d2:log and d2:exponent to program rule grammar
- **[DHIS2-22044](https://dhis2.atlassian.net/browse/DHIS2-22044)** [METADATA MANAGEMENT APP]: resources add/edit

### Bugs

#### [API] Analytics

- **[DHIS2-19473](https://dhis2.atlassian.net/browse/DHIS2-19473)** Duplicated Analytics values when using Continuous Analytics job
- **[DHIS2-22242](https://dhis2.atlassian.net/browse/DHIS2-22242)** [Event] [A] 500 error when analytics caching is enabled and skipMeta=true
- **[DHIS2-22013](https://dhis2.atlassian.net/browse/DHIS2-22013)** DV shows NaN on totals with data set completeness variables
- **[DHIS2-22026](https://dhis2.atlassian.net/browse/DHIS2-22026)** Dashboard edits block when favorited by 255+ users
- **[DHIS2-19094](https://dhis2.atlassian.net/browse/DHIS2-19094)** Indicator with subExpression for Single Value or Gauge Chart shows no data in Data Visualizer

#### [API] Frameworks and libraries

- **[DHIS2-22067](https://dhis2.atlassian.net/browse/DHIS2-22067)** Hibernate and JdbcTemplate do not share a connection inside @Transactional

#### [API] Metadata import-export

- **[DHIS2-13920](https://dhis2.atlassian.net/browse/DHIS2-13920)** Metadata import: NPE instead of a validation error when importing a program rule action with missing references

#### [API] Metadata model

- **[DHIS2-21925](https://dhis2.atlassian.net/browse/DHIS2-21925)** Visualization fails to open (500) when data dimension item sort order has a gap
- **[DHIS2-22154](https://dhis2.atlassian.net/browse/DHIS2-22154)** Deleting an OptionGroup permanently deletes its member Option(s), not just the group

#### [API] Other

- **[DHIS2-22296](https://dhis2.atlassian.net/browse/DHIS2-22296)** Org unit merge silently deletes the target's own data values when the target already has data
- **[DHIS2-19353](https://dhis2.atlassian.net/browse/DHIS2-19353)** Requests when logged out get redirected to an HTTP address, when it should be HTTPS
- **[DHIS2-22083](https://dhis2.atlassian.net/browse/DHIS2-22083)** [api/REPORTS]: cannot remove available relative periods

#### [API] Tracker

- **[DHIS2-22245](https://dhis2.atlassian.net/browse/DHIS2-22245)** Tracker import fails with NullPointerException
- **[DHIS2-22241](https://dhis2.atlassian.net/browse/DHIS2-22241)** Tracker import accepts duplicate org unit scoped unique values when only an enrollment is sent
- **[DHIS2-22240](https://dhis2.atlassian.net/browse/DHIS2-22240)** Tracker import rejects unique value in different org units
- **[DHIS2-21836](https://dhis2.atlassian.net/browse/DHIS2-21836)** Empty phone number or email address in org unit is preventing notification to be sent
- **[DHIS2-22002](https://dhis2.atlassian.net/browse/DHIS2-22002)** Generation of RANDOM values fails when two values are the same with different cases

#### [API] User

- **[DHIS2-21854](https://dhis2.atlassian.net/browse/DHIS2-21854)** Slow PATCH /api/userRoles/{uid} when authorities change: session invalidation hydrates every member user

#### [App] Metadata Management App

- **[DHIS2-21936](https://dhis2.atlassian.net/browse/DHIS2-21936)** Error on delete of Program Indicator with disaggregation

#### [Core] Data Integrity

- **[DHIS2-18694](https://dhis2.atlassian.net/browse/DHIS2-18694)** table trackedentityaudit is not cleaned during "hard delete"

## App updates

The bundled applications below were updated between DHIS2 2.42.6 and 2.42.7.

| App | Versions | Changes |
| --- | --- | --- |
| [Aggregate Data Entry](#aggregate-data-entry) | 102.1.0 → 102.1.4 | 6 changes |
| [App Management](#app-management) | 100.5.1 → 100.5.2 | minor bug fixes |
| [Capture](#capture) | 107.0.2 → 107.8.1 | 21 changes |
| [Dashboard](#dashboard) | 101.6.2 → 101.7.1 | 1 change |
| [Data Quality](#data-quality) | 2.42.6 → 100.0.1 | 1 change |
| [Data Visualizer](#data-visualizer) | 101.6.3 → 101.6.5 | 1 change |
| [Datastore](#datastore) | 100.5.0 → 100.5.2 | new translations |
| [Global Shell](#global-shell) | 1.12.3 → 1.13.4 | 1 change |
| [Import Export](#import-export) | 101.3.6 → 101.6.1 | 9 changes |
| [Interpretation](#interpretation) | 2.42.6 → 1.2.0 | minor improvements and dependency updates |
| [Line Listing](#line-listing) | 102.4.0 → 102.4.1 | minor bug fixes |
| [Login](#login) | 100.5.0 → 100.6.0 | 1 change |
| [Maps](#maps) | 101.16.0 → 101.17.5 | 6 changes |

### Aggregate Data Entry

[102.1.0 → 102.1.4](https://github.com/dhis2/aggregate-data-entry-app/compare/v102.1.0...v102.1.4)

#### Bug Fixes

- constrain option set dropdown menu width [DHIS2-13634](https://dhis2.atlassian.net/browse/DHIS2-13634)
- first row height with vertical section tabs [DHIS2-21240](https://dhis2.atlassian.net/browse/DHIS2-21240)
- keep section tab header pinned while table scrolls independently [DHIS2-21336](https://dhis2.atlassian.net/browse/DHIS2-21336)
- make section tab bar horizontally scrollable [DHIS2-21336](https://dhis2.atlassian.net/browse/DHIS2-21336) (#591)
- search results non-level 1 [DHIS2-21397](https://dhis2.atlassian.net/browse/DHIS2-21397)
- styling with no data sets [DHIS2-21850](https://dhis2.atlassian.net/browse/DHIS2-21850) (#598)

### App Management

[100.5.1 → 100.5.2](https://github.com/dhis2/app-management-app/compare/v100.5.1...v100.5.2)

Includes minor bug fixes.

### Capture

[107.0.2 → 107.8.1](https://github.com/dhis2/capture-app/compare/v107.0.2...v107.8.1)

#### Features

- [DHIS2-18573](https://dhis2.atlassian.net/browse/DHIS2-18573) add UID header link to bulk operation error messages (#4665)
- [DHIS2-21635](https://dhis2.atlassian.net/browse/DHIS2-21635) Display custom terminology labels across UI (#4727)
- [DHIS2-21655](https://dhis2.atlassian.net/browse/DHIS2-21655) Uncomplete events from view mode (#4649)
- [DHIS2-21797](https://dhis2.atlassian.net/browse/DHIS2-21797) Enrollment AOC in the registration form (#4752)
- [DHIS2-21875](https://dhis2.atlassian.net/browse/DHIS2-21875) Unify overflow menu between View Event page and Stages and Events widget (#4657)
- [DHIS2-21913](https://dhis2.atlassian.net/browse/DHIS2-21913) filter out non-accessible TEAs (#4675)
- [DHIS2-21941](https://dhis2.atlassian.net/browse/DHIS2-21941) Self contained changelog widget (#4690)
- [DHIS2-22165](https://dhis2.atlassian.net/browse/DHIS2-22165) Enrollment AOC in the enrollment widget (#4753)

#### Bug Fixes

- [DHIS2-13020](https://dhis2.atlassian.net/browse/DHIS2-13020) [DHIS2-21871](https://dhis2.atlassian.net/browse/DHIS2-21871) Preserve WL sharing on update and fix 409 for non-owners (#4702)
- [DHIS2-18620](https://dhis2.atlassian.net/browse/DHIS2-18620) [DHIS2-21937](https://dhis2.atlassian.net/browse/DHIS2-21937) Hidden TEA is displayed in the TEI profile (#4704)
- [DHIS2-20459](https://dhis2.atlassian.net/browse/DHIS2-20459) Align Date, DateTime and Time value type fields (#4737)
- [DHIS2-21630](https://dhis2.atlassian.net/browse/DHIS2-21630) program rule assignment in scheduled events (#4758)
- [DHIS2-21727](https://dhis2.atlassian.net/browse/DHIS2-21727) program rules on enrollment+event registration page (#4707)
- [DHIS2-21902](https://dhis2.atlassian.net/browse/DHIS2-21902) Not count SKIPPED events against non-repeatable stage limit (#4744)
- [DHIS2-21942](https://dhis2.atlassian.net/browse/DHIS2-21942) Re-enroll button navigates to registration (#4739)
- [DHIS2-22007](https://dhis2.atlassian.net/browse/DHIS2-22007) comparison between the new and the cached rule messages (#4709)
- [DHIS2-22080](https://dhis2.atlassian.net/browse/DHIS2-22080) perpetual option codes in profile widget (#4732)
- [DHIS2-22117](https://dhis2.atlassian.net/browse/DHIS2-22117) Schedule button does not trigger missing org unit validation error (#4743)
- [DHIS2-22189](https://dhis2.atlassian.net/browse/DHIS2-22189) TEI search fails when the first attribute is non-searchable (#4756)
- [DHIS2-22189](https://dhis2.atlassian.net/browse/DHIS2-22189) resolve TEI search group by filtered index when first attribute is non-searchable

#### Documentation

- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) recapture remaining likely-outdated screenshots (batch 2) (#4682)

### Dashboard

[101.6.2 → 101.7.1](https://github.com/dhis2/dashboard-app/compare/v101.6.2...v101.7.1)

#### Bug Fixes

- show correct basemap for maps on dashboards ([DHIS2-22110](https://dhis2.atlassian.net/browse/DHIS2-22110)) (#3343)

### Data Quality

[2.42.6 → 100.0.1](https://github.com/dhis2/data-quality-app/compare/2.42.6...v100.0.1)

#### Bug Fixes

- remove patch [DHIS2-21532](https://dhis2.atlassian.net/browse/DHIS2-21532) (#1376)

### Data Visualizer

[101.6.3 → 101.6.5](https://github.com/dhis2/data-visualizer-app/compare/v101.6.3...v101.6.5)

#### Bug Fixes

- respect short name display property in org unit tree [DHIS2-21562](https://dhis2.atlassian.net/browse/DHIS2-21562) (#3478)

### Datastore

[100.5.0 → 100.5.2](https://github.com/dhis2/datastore-app/compare/v100.5.0...v100.5.2)

Includes new translations.

### Global Shell

[1.12.3 → 1.13.4](https://github.com/dhis2/global-shell-app/compare/v1.12.3...v1.13.4)

#### Features

- header-bar: add expandable notification dot indicator [LIBS-868](https://dhis2.atlassian.net/browse/LIBS-868)

### Import Export

[101.3.6 → 101.6.1](https://github.com/dhis2/import-export-app/compare/v101.3.6...v101.6.1)

#### Features

- show error alerts when export request fails [DHIS2-20435](https://dhis2.atlassian.net/browse/DHIS2-20435)

#### Bug Fixes

- add alert when export request fails [DHIS2-18667](https://dhis2.atlassian.net/browse/DHIS2-18667)
- add digit group separator to EE import preview numbers [DHIS2-14239](https://dhis2.atlassian.net/browse/DHIS2-14239)
- address review feedback on digit group separator [DHIS2-14239](https://dhis2.atlassian.net/browse/DHIS2-14239)
- compressed data export with uncompressed filename [DHIS2-22131](https://dhis2.atlassian.net/browse/DHIS2-22131)
- correct AtomicMode help text and metadata import options [DHIS2-9997](https://dhis2.atlassian.net/browse/DHIS2-9997)
- correct atomicMode description and metadata import values [DHIS2-9997](https://dhis2.atlassian.net/browse/DHIS2-9997)
- hide program stage control for event programs [DHIS2-11507](https://dhis2.atlassian.net/browse/DHIS2-11507)
- include enrollments, events in tei export [DHIS2-21901](https://dhis2.atlassian.net/browse/DHIS2-21901) (#2271)

### Interpretation

[2.42.6 → 1.2.0](https://github.com/dhis2/interpretation-app/compare/2.42.6...v1.2.0)

Includes minor improvements and dependency updates.

### Line Listing

[102.4.0 → 102.4.1](https://github.com/dhis2/line-listing-app/compare/v102.4.0...v102.4.1)

Includes minor bug fixes.

### Login

[100.5.0 → 100.6.0](https://github.com/dhis2/login-app/compare/v100.5.0...v100.6.0)

#### Features

- update account status messages [DHIS2-22167](https://dhis2.atlassian.net/browse/DHIS2-22167) (#80)

### Maps

[101.16.0 → 101.17.5](https://github.com/dhis2/maps-app/compare/v101.16.0...v101.17.5)

#### Features

- replace OSM Light basemap with OpenFreeMap, add Dark and Fiord [DHIS2-22028](https://dhis2.atlassian.net/browse/DHIS2-22028) (#3756)

#### Bug Fixes

- improve download settings UX for north arrow, map name tooltip and footer note [DHIS2-15792](https://dhis2.atlassian.net/browse/DHIS2-15792) (#3662)
- pass basemaps field through in dashboard embed config [DHIS2-22110](https://dhis2.atlassian.net/browse/DHIS2-22110) (#3772)
- prevent duplicate and hidden layers from Open as map [DHIS2-22073](https://dhis2.atlassian.net/browse/DHIS2-22073) (#3746)
- show Earth Engine layers in dashboard map items on 2.43+ [DHIS2-22188](https://dhis2.atlassian.net/browse/DHIS2-22188)
- use policy-compliant tile URL for OSM Detailed basemap [DHIS2-22122](https://dhis2.atlassian.net/browse/DHIS2-22122) (#3773)

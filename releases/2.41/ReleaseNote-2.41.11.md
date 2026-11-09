# Patch 2.41.11 Release Note

- [Core updates](#core-updates)
  - [Features](#features)
  - [Bugs](#bugs)
- [App updates](#app-updates)

## Core updates

Changes made in the bundled applications are listed under [App updates](#app-updates).

### Features

#### [App] Metadata Management App

- **[DHIS2-22044](https://dhis2.atlassian.net/browse/DHIS2-22044)** [METADATA MANAGEMENT APP]: resources add/edit

### Bugs

#### [API] Analytics

- **[DHIS2-21927](https://dhis2.atlassian.net/browse/DHIS2-21927)** Analytics table generation fails with "out of range for type double precision" when a TEXT/LONG_TEXT data element value resembles scientific notation
- **[DHIS2-22242](https://dhis2.atlassian.net/browse/DHIS2-22242)** [Event] [A] 500 error when analytics caching is enabled and skipMeta=true

#### [API] Metadata import-export

- **[DHIS2-13920](https://dhis2.atlassian.net/browse/DHIS2-13920)** Metadata import: NPE instead of a validation error when importing a program rule action with missing references

#### [API] Metadata model

- **[DHIS2-21925](https://dhis2.atlassian.net/browse/DHIS2-21925)** Visualization fails to open (500) when data dimension item sort order has a gap
- **[DHIS2-18947](https://dhis2.atlassian.net/browse/DHIS2-18947)** Superusers cannot see or delete a private dashboard
- **[DHIS2-22154](https://dhis2.atlassian.net/browse/DHIS2-22154)** Deleting an OptionGroup permanently deletes its member Option(s), not just the group

#### [API] Other

- **[DHIS2-21856](https://dhis2.atlassian.net/browse/DHIS2-21856)** Single-object metadata GET with field preset triggers link generation that loads entire lazy collections (30s+ CPU for large user roles)
- **[DHIS2-21841](https://dhis2.atlassian.net/browse/DHIS2-21841)** [v41 only] Custom start page app login fails without SavedRequest
- **[DHIS2-22296](https://dhis2.atlassian.net/browse/DHIS2-22296)** Org unit merge silently deletes the target's own data values when the target already has data
- **[DHIS2-22083](https://dhis2.atlassian.net/browse/DHIS2-22083)** [api/REPORTS]: cannot remove available relative periods

#### [API] Predictors

- **[DHIS2-17719](https://dhis2.atlassian.net/browse/DHIS2-17719)** Wrong calculation or parsing of aggregate functions in predictors — also _[App] Maintenance_

#### [API] Tracker

- **[DHIS2-22301](https://dhis2.atlassian.net/browse/DHIS2-22301)** Tracker import 500: NPE in program rule engine when a TE's stored attribute value resolves to null
- **[DHIS2-21836](https://dhis2.atlassian.net/browse/DHIS2-21836)** Empty phone number or email address in org unit is preventing notification to be sent
- **[DHIS2-21795](https://dhis2.atlassian.net/browse/DHIS2-21795)** v41: Program notifications fail and throws the error "org.hisp.dhis.user.CurrentUserUtil.getCurrentUserDetails()" is null
- **[DHIS2-22245](https://dhis2.atlassian.net/browse/DHIS2-22245)** Tracker import fails with NullPointerException
- **[DHIS2-22241](https://dhis2.atlassian.net/browse/DHIS2-22241)** Tracker import accepts duplicate org unit scoped unique values when only an enrollment is sent
- **[DHIS2-22240](https://dhis2.atlassian.net/browse/DHIS2-22240)** Tracker import rejects unique value in different org units
- **[DHIS2-22002](https://dhis2.atlassian.net/browse/DHIS2-22002)** Generation of RANDOM values fails when two values are the same with different cases

#### [API] User

- **[DHIS2-21854](https://dhis2.atlassian.net/browse/DHIS2-21854)** Slow PATCH /api/userRoles/{uid} when authorities change: session invalidation hydrates every member user

#### [App] Metadata Management App

- **[DHIS2-21936](https://dhis2.atlassian.net/browse/DHIS2-21936)** Error on delete of Program Indicator with disaggregation

#### [Core] Data Integrity

- **[DHIS2-18694](https://dhis2.atlassian.net/browse/DHIS2-18694)** table trackedentityaudit is not cleaned during "hard delete"

## App updates

The bundled applications below were updated between DHIS2 2.41.10.1 and 2.41.11.

| App | Versions | Changes |
| --- | --- | --- |
| [Aggregate Data Entry](#aggregate-data-entry) | 102.1.0 → 102.1.6 | 8 changes |
| [App Management](#app-management) | 100.5.1 → 100.5.2 | minor bug fixes |
| [Capture](#capture) | 107.0.4 → 107.9.1 | 28 changes |
| [Dashboard](#dashboard) | 101.6.3 → 101.7.2 | 3 changes |
| [Data Administration](#data-administration) | 100.2.0 → 100.2.1 | 1 change |
| [Data Quality](#data-quality) | 2.41.10 → 100.0.1 | 1 change |
| [Data Visualizer](#data-visualizer) | 101.6.3 → 101.6.5 | 1 change |
| [Datastore](#datastore) | 100.5.0 → 100.5.2 | new translations |
| [Import Export](#import-export) | 101.4.0 → 101.6.1 | 3 changes |
| [Interpretation](#interpretation) | 2.41.10 → 1.2.0 | no user-facing changes |
| [Login](#login) | 100.5.0 → 100.6.0 | 1 change |
| [Maps](#maps) | 101.16.0 → 101.17.7 | 7 changes |

### Aggregate Data Entry

[102.1.0 → 102.1.6](https://github.com/dhis2/aggregate-data-entry-app/compare/v102.1.0...v102.1.6)

#### Bug Fixes

- constrain option set dropdown menu width [DHIS2-13634](https://dhis2.atlassian.net/browse/DHIS2-13634)
- first row height with vertical section tabs [DHIS2-21240](https://dhis2.atlassian.net/browse/DHIS2-21240)
- keep section tab header pinned while table scrolls independently [DHIS2-21336](https://dhis2.atlassian.net/browse/DHIS2-21336)
- make section tab bar horizontally scrollable [DHIS2-21336](https://dhis2.atlassian.net/browse/DHIS2-21336) (#591)
- match org unit itself [DHIS2-21397](https://dhis2.atlassian.net/browse/DHIS2-21397) (#600)
- search results non-level 1 [DHIS2-21397](https://dhis2.atlassian.net/browse/DHIS2-21397)
- styling with no data sets [DHIS2-21850](https://dhis2.atlassian.net/browse/DHIS2-21850) (#598)
- word min-max warning as a guideline, not a hard limit [DHIS2-19618](https://dhis2.atlassian.net/browse/DHIS2-19618) (#603)

### App Management

[100.5.1 → 100.5.2](https://github.com/dhis2/app-management-app/compare/v100.5.1...v100.5.2)

Includes minor bug fixes.

### Capture

[107.0.4 → 107.9.1](https://github.com/dhis2/capture-app/compare/v107.0.4...v107.9.1)

#### Features

- [DHIS2-18573](https://dhis2.atlassian.net/browse/DHIS2-18573) add UID header link to bulk operation error messages (#4665)
- [DHIS2-21635](https://dhis2.atlassian.net/browse/DHIS2-21635) Display custom terminology labels across UI (#4727)
- [DHIS2-21655](https://dhis2.atlassian.net/browse/DHIS2-21655) Uncomplete events from view mode (#4649)
- [DHIS2-21797](https://dhis2.atlassian.net/browse/DHIS2-21797) Enrollment AOC in the registration form (#4752)
- [DHIS2-21875](https://dhis2.atlassian.net/browse/DHIS2-21875) Unify overflow menu between View Event page and Stages and Events widget (#4657)
- [DHIS2-21913](https://dhis2.atlassian.net/browse/DHIS2-21913) filter out non-accessible TEAs (#4675)
- [DHIS2-21941](https://dhis2.atlassian.net/browse/DHIS2-21941) Self contained changelog widget (#4690)
- [DHIS2-22165](https://dhis2.atlassian.net/browse/DHIS2-22165) Enrollment AOC in the enrollment widget (#4753)
- [DHIS2-22185](https://dhis2.atlassian.net/browse/DHIS2-22185) Use enableChangeLog for changelog toggling (#4795)

#### Bug Fixes

- [DHIS2-18620](https://dhis2.atlassian.net/browse/DHIS2-18620) [DHIS2-21937](https://dhis2.atlassian.net/browse/DHIS2-21937) Hidden TEA is displayed in the TEI profile (#4704)
- [DHIS2-20459](https://dhis2.atlassian.net/browse/DHIS2-20459) Align Date, DateTime and Time value type fields (#4737)
- [DHIS2-21630](https://dhis2.atlassian.net/browse/DHIS2-21630) program rule assignment in scheduled events (#4758)
- [DHIS2-21727](https://dhis2.atlassian.net/browse/DHIS2-21727) program rules on enrollment+event registration page (#4707)
- [DHIS2-21902](https://dhis2.atlassian.net/browse/DHIS2-21902) Not count SKIPPED events against non-repeatable stage limit (#4744)
- [DHIS2-21942](https://dhis2.atlassian.net/browse/DHIS2-21942) Re-enroll button navigates to registration (#4739)
- [DHIS2-22007](https://dhis2.atlassian.net/browse/DHIS2-22007) comparison between the new and the cached rule messages (#4709)
- [DHIS2-22080](https://dhis2.atlassian.net/browse/DHIS2-22080) perpetual option codes in profile widget (#4732)
- [DHIS2-22112](https://dhis2.atlassian.net/browse/DHIS2-22112) allow rule engine orgunit to be undefined (#4779)
- [DHIS2-22117](https://dhis2.atlassian.net/browse/DHIS2-22117) Schedule button does not trigger missing org unit validation error (#4743)
- [DHIS2-22189](https://dhis2.atlassian.net/browse/DHIS2-22189) TEI search fails when the first attribute is non-searchable (#4756)
- [DHIS2-22189](https://dhis2.atlassian.net/browse/DHIS2-22189) resolve TEI search group by filtered index when first attribute is non-searchable
- [DHIS2-22190](https://dhis2.atlassian.net/browse/DHIS2-22190) keep a saved program stage working list selected until the URL catches up
- [DHIS2-22190](https://dhis2.atlassian.net/browse/DHIS2-22190) keep the saved working list selected when deleting it fails
- [DHIS2-22201](https://dhis2.atlassian.net/browse/DHIS2-22201) program rule z-score calculations (#4788)
- [DHIS2-22315](https://dhis2.atlassian.net/browse/DHIS2-22315) Complete checkbox is always disabled on a scheduled event (#4804)

#### Documentation

- [DHIS2-15916](https://dhis2.atlassian.net/browse/DHIS2-15916) fix related stages heading level in capture user guide (#4781)
- [DHIS2-22284](https://dhis2.atlassian.net/browse/DHIS2-22284) replace display front page list with the metadata management label (#4785)
- [DHIS2-22305](https://dhis2.atlassian.net/browse/DHIS2-22305) Update the Changelog docs for the new change history settings (#4794)

### Dashboard

[101.6.3 → 101.7.2](https://github.com/dhis2/dashboard-app/compare/v101.6.3...v101.7.2)

#### Bug Fixes

- show a message for non authorised plugins [DHIS2-22363](https://dhis2.atlassian.net/browse/DHIS2-22363) (#3346)
- show correct basemap for maps on dashboards ([DHIS2-22110](https://dhis2.atlassian.net/browse/DHIS2-22110)) (#3343)

#### Documentation

- document text box markdown support ([DHIS2-20008](https://dhis2.atlassian.net/browse/DHIS2-20008)) (#3334)

### Data Administration

[100.2.0 → 100.2.1](https://github.com/dhis2/data-administration-app/compare/v100.2.0...v100.2.1)

#### Bug Fixes

- use old mainteanance app links prior to v41 [DHIS2-22004](https://dhis2.atlassian.net/browse/DHIS2-22004) (#1290)

### Data Quality

[2.41.10 → 100.0.1](https://github.com/dhis2/data-quality-app/compare/2.41.10...v100.0.1)

#### Bug Fixes

- remove patch [DHIS2-21532](https://dhis2.atlassian.net/browse/DHIS2-21532) (#1376)

### Data Visualizer

[101.6.3 → 101.6.5](https://github.com/dhis2/data-visualizer-app/compare/v101.6.3...v101.6.5)

#### Bug Fixes

- respect short name display property in org unit tree [DHIS2-21562](https://dhis2.atlassian.net/browse/DHIS2-21562) (#3478)

### Datastore

[100.5.0 → 100.5.2](https://github.com/dhis2/datastore-app/compare/v100.5.0...v100.5.2)

Includes new translations.

### Import Export

[101.4.0 → 101.6.1](https://github.com/dhis2/import-export-app/compare/v101.4.0...v101.6.1)

#### Features

- show error alerts when export request fails [DHIS2-20435](https://dhis2.atlassian.net/browse/DHIS2-20435)

#### Bug Fixes

- add alert when export request fails [DHIS2-18667](https://dhis2.atlassian.net/browse/DHIS2-18667)
- compressed data export with uncompressed filename [DHIS2-22131](https://dhis2.atlassian.net/browse/DHIS2-22131)

### Interpretation

[2.41.10 → 1.2.0](https://github.com/dhis2/interpretation-app/compare/2.41.10...v1.2.0)

Updated with no user-facing changes.

### Login

[100.5.0 → 100.6.0](https://github.com/dhis2/login-app/compare/v100.5.0...v100.6.0)

#### Features

- update account status messages [DHIS2-22167](https://dhis2.atlassian.net/browse/DHIS2-22167) (#80)

### Maps

[101.16.0 → 101.17.7](https://github.com/dhis2/maps-app/compare/v101.16.0...v101.17.7)

#### Features

- replace OSM Light basemap with OpenFreeMap, add Dark and Fiord [DHIS2-22028](https://dhis2.atlassian.net/browse/DHIS2-22028) (#3756)

#### Bug Fixes

- improve download settings UX for north arrow, map name tooltip and footer note [DHIS2-15792](https://dhis2.atlassian.net/browse/DHIS2-15792) (#3662)
- pass basemaps field through in dashboard embed config [DHIS2-22110](https://dhis2.atlassian.net/browse/DHIS2-22110) (#3772)
- prevent duplicate and hidden layers from Open as map [DHIS2-22073](https://dhis2.atlassian.net/browse/DHIS2-22073) (#3746)
- show Earth Engine layers in dashboard map items on 2.43+ [DHIS2-22188](https://dhis2.atlassian.net/browse/DHIS2-22188)
- support more scripts in map labels [DHIS2-21946](https://dhis2.atlassian.net/browse/DHIS2-21946) (#3766)
- use policy-compliant tile URL for OSM Detailed basemap [DHIS2-22122](https://dhis2.atlassian.net/browse/DHIS2-22122) (#3773)

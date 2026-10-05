# Patch 2.43.2 Release Note

- [Core updates](#core-updates)
  - [Features](#features)
  - [Bugs](#bugs)
- [App updates](#app-updates)

## Core updates

Changes made in the bundled applications are listed under [App updates](#app-updates).

### Features

#### [Core] Expression Language

- **[DHIS2-21809](https://dhis2.atlassian.net/browse/DHIS2-21809)** Add d2:log and d2:exponent to program rule grammar

### Bugs

#### [API] Analytics

- **[DHIS2-21756](https://dhis2.atlassian.net/browse/DHIS2-21756)** Doris: Preserve PostgreSQL VARCHAR character semantics during schema generation
- **[DHIS2-22070](https://dhis2.atlassian.net/browse/DHIS2-22070)** Enrollment program indicator filter combining V{event_status} with any other condition throws ParserException
- **[DHIS2-22026](https://dhis2.atlassian.net/browse/DHIS2-22026)** Dashboard edits block when favorited by 255+ users
- **[DHIS2-19094](https://dhis2.atlassian.net/browse/DHIS2-19094)** Indicator with subExpression for Single Value or Gauge Chart shows no data in Data Visualizer
- **[DHIS2-22090](https://dhis2.atlassian.net/browse/DHIS2-22090)** Incident date analytics period boundary always results in 0 for enrollment PIs
- **[DHIS2-19473](https://dhis2.atlassian.net/browse/DHIS2-19473)** Duplicated Analytics values when using Continuous Analytics job
- **[DHIS2-21788](https://dhis2.atlassian.net/browse/DHIS2-21788)** Only one event returned in event analytics query API if max limit set to unlimited
- **[DHIS2-19860](https://dhis2.atlassian.net/browse/DHIS2-19860)** Selected user database language is skipped when displaying OU hierarchy in Pivot table

#### [API] Data Entry

- **[DHIS2-21757](https://dhis2.atlassian.net/browse/DHIS2-21757)** /api/dataEntry/metadata has a Hibernate n+1 query issue

#### [API] Data Import

- **[DHIS2-21479](https://dhis2.atlassian.net/browse/DHIS2-21479)** `heatCaches` triggers full OU table load when CDSR entries exceed 500 rows

#### [API] Data value set

- **[DHIS2-22126](https://dhis2.atlassian.net/browse/DHIS2-22126)** DataValueSets export returns wrong Content-Type when compression is requested — also _[App] Import-export_
- **[DHIS2-21821](https://dhis2.atlassian.net/browse/DHIS2-21821)** dataValueSets export GET rejects requests using only lastUpdatedDuration/lastUpdated (regression in 2.43)

#### [API] Frameworks and libraries

- **[DHIS2-22067](https://dhis2.atlassian.net/browse/DHIS2-22067)** Hibernate and JdbcTemplate do not share a connection inside @Transactional

#### [API] Metadata import-export

- **[DHIS2-13920](https://dhis2.atlassian.net/browse/DHIS2-13920)** Metadata import: NPE instead of a validation error when importing a program rule action with missing references

#### [API] Metadata model

- **[DHIS2-22114](https://dhis2.atlassian.net/browse/DHIS2-22114)** Successful interface fallback in DefaultSchemaService.safeInvoke logs ERROR with stack trace on /api/dimensions/{uid}/items

#### [API] Other

- **[DHIS2-22083](https://dhis2.atlassian.net/browse/DHIS2-22083)** [api/REPORTS]: cannot remove available relative periods
- **[DHIS2-21856](https://dhis2.atlassian.net/browse/DHIS2-21856)** Single-object metadata GET with field preset triggers link generation that loads entire lazy collections (30s+ CPU for large user roles)
- **[DHIS2-21858](https://dhis2.atlassian.net/browse/DHIS2-21858)** Flaky AuditIntegrationTest: await conditions never wait for the async audit consumer

#### [API] Program rules

- **[DHIS2-21359](https://dhis2.atlassian.net/browse/DHIS2-21359)** ValidatePattern function is not correctly escaping regex expression
- **[DHIS2-21961](https://dhis2.atlassian.net/browse/DHIS2-21961)** Enrollment AGE attribute evaluated as null/unavailable when program rules are revalidated on event completion in Capture app (v2.42) — also _[App] Capture_

#### [API] Security

- **[DHIS2-21786](https://dhis2.atlassian.net/browse/DHIS2-21786)** LazyInitializationException on User.userRoles when PAT authentication occurs on a non-OSIV endpoint (e.g. /api/dataValueSets)

#### [API] Synchronization

- **[DHIS2-21781](https://dhis2.atlassian.net/browse/DHIS2-21781)** Data sync between 2 instances logging ERROR in logs — also _[App] Job scheduler_

#### [API] Tracker

- **[DHIS2-22187](https://dhis2.atlassian.net/browse/DHIS2-22187)** Capture enrollment notification message/email does not resolve attribute values — shows [N/A] placeholders
- **[DHIS2-22002](https://dhis2.atlassian.net/browse/DHIS2-22002)** Generation of RANDOM values fails when two values are the same with different cases
- **[DHIS2-21963](https://dhis2.atlassian.net/browse/DHIS2-21963)** Unsynchronized native SQL writes evict all Hibernate L2 cache regions — also _[Core] Job Scheduler_
- **[DHIS2-21887](https://dhis2.atlassian.net/browse/DHIS2-21887)** Data value can't be imported when calculated from program rule
- **[DHIS2-21800](https://dhis2.atlassian.net/browse/DHIS2-21800)**  Event program notifications with recipient ORGANISATION_UNIT are broken

#### [App] Metadata Management App

- **[DHIS2-21936](https://dhis2.atlassian.net/browse/DHIS2-21936)** Error on delete of Program Indicator with disaggregation

#### [Core] Data Integrity

- **[DHIS2-18694](https://dhis2.atlassian.net/browse/DHIS2-18694)** table trackedentityaudit is not cleaned during "hard delete"

## App updates

The bundled applications below were updated between DHIS2 2.43.1 and 2.43.2.

| App | Versions | Changes |
| --- | --- | --- |
| [Aggregate Data Entry](#aggregate-data-entry) | 102.0.10 → 102.1.2 | 5 changes |
| [Capture](#capture) | 106.6.3 → 107.3.1 | 24 changes |
| [Dashboard](#dashboard) | 101.6.1 → 101.7.1 | 2 changes |
| [Data Quality](#data-quality) | 2.43.1 → 100.0.1 | 1 change |
| [Data Visualizer](#data-visualizer) | 101.6.1 → 101.6.3 | minor bug fixes |
| [Import Export](#import-export) | 101.3.2 → 101.6.0 | 12 changes |
| [Interpretation](#interpretation) | 2.43.1 → 1.2.0 | minor improvements and dependency updates |
| [Line Listing](#line-listing) | 102.4.0 → 102.4.1 | 1 change |
| [Login](#login) | 100.4.6 → 100.5.0 | minor improvements and minor bug fixes |
| [Maps](#maps) | 101.15.0 → 101.17.3 | 5 changes |
| [Metadata Management](#metadata-management) | 0.166.1 → 0.179.0 | 10 changes |

### Aggregate Data Entry

[102.0.10 → 102.1.2](https://github.com/dhis2/aggregate-data-entry-app/compare/v102.0.10...v102.1.2)

#### Features

- totals for pivoted layout [DHIS2-19079](https://dhis2.atlassian.net/browse/DHIS2-19079) (#578)

#### Bug Fixes

- constrain option set dropdown menu width [DHIS2-13634](https://dhis2.atlassian.net/browse/DHIS2-13634)
- first row height with vertical section tabs [DHIS2-21240](https://dhis2.atlassian.net/browse/DHIS2-21240)
- keep section tab header pinned while table scrolls independently [DHIS2-21336](https://dhis2.atlassian.net/browse/DHIS2-21336)
- make section tab bar horizontally scrollable [DHIS2-21336](https://dhis2.atlassian.net/browse/DHIS2-21336) (#591)

### Capture

[106.6.3 → 107.3.1](https://github.com/dhis2/capture-app/compare/v106.6.3...v107.3.1)

#### Features

- [DHIS2-21266](https://dhis2.atlassian.net/browse/DHIS2-21266) Integrate react Markdown lib in WidgetFeedback (#4621)
- [DHIS2-21655](https://dhis2.atlassian.net/browse/DHIS2-21655) Uncomplete events from view mode (#4649)
- [DHIS2-21875](https://dhis2.atlassian.net/browse/DHIS2-21875) Unify overflow menu between View Event page and Stages and Events widget (#4657)
- [DHIS2-21941](https://dhis2.atlassian.net/browse/DHIS2-21941) Self contained changelog widget (#4690)

#### Bug Fixes

- [DHIS2-13020](https://dhis2.atlassian.net/browse/DHIS2-13020) [DHIS2-21871](https://dhis2.atlassian.net/browse/DHIS2-21871) Preserve WL sharing on update and fix 409 for non-owners (#4702)
- [DHIS2-18620](https://dhis2.atlassian.net/browse/DHIS2-18620) [DHIS2-21937](https://dhis2.atlassian.net/browse/DHIS2-21937) Hidden TEA is displayed in the TEI profile (#4704)
- [DHIS2-19814](https://dhis2.atlassian.net/browse/DHIS2-19814) re-enable and de-flake changelog sort by date test (#4650)
- [DHIS2-19814](https://dhis2.atlassian.net/browse/DHIS2-19814) update changelog test for new demo data
- [DHIS2-21685](https://dhis2.atlassian.net/browse/DHIS2-21685) show min characters filter validation only on update attempt (#4647)
- [DHIS2-21708](https://dhis2.atlassian.net/browse/DHIS2-21708) Org unit selector is expanded when form open if no org unit in top bar (#4629)
- [DHIS2-21727](https://dhis2.atlassian.net/browse/DHIS2-21727) program rules on enrollment+event registration page (#4707)
- [DHIS2-21855](https://dhis2.atlassian.net/browse/DHIS2-21855) limit concurrent api requests (#4668)
- [DHIS2-21874](https://dhis2.atlassian.net/browse/DHIS2-21874) Deactivated TEI shows wrong readonly reason (#4656)
- [DHIS2-22007](https://dhis2.atlassian.net/browse/DHIS2-22007) comparison between the new and the cached rule messages (#4709)
- [DHIS2-22080](https://dhis2.atlassian.net/browse/DHIS2-22080) perpetual option codes in profile widget (#4732)

#### Documentation

- [DHIS2-15916](https://dhis2.atlassian.net/browse/DHIS2-15916) clarify ScopeSelector top bar context (#4648)
- [DHIS2-20703](https://dhis2.atlassian.net/browse/DHIS2-20703) Fix typos, outdated terminology and content in Capture docs (#4651)
- [DHIS2-20703](https://dhis2.atlassian.net/browse/DHIS2-20703) Fix typos, outdated terms and content in Capture docs
- [DHIS2-20703](https://dhis2.atlassian.net/browse/DHIS2-20703) Recapture outdated enrollment dashboard screenshots
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) Recapture outdated enrollment dashboard screenshots (#4677)
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) fix stale text and screenshots in Capture app docs (#4680)
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) fix stale text in Capture app docs
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) recapture more outdated screenshots and fix related text
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) recapture remaining likely-outdated screenshots (batch 2) (#4682)

### Dashboard

[101.6.1 → 101.7.1](https://github.com/dhis2/dashboard-app/compare/v101.6.1...v101.7.1)

#### Bug Fixes

- hide "Open in app" for plugins without an app entrypoint ([DHIS2-21739](https://dhis2.atlassian.net/browse/DHIS2-21739)) (#3335)
- show correct basemap for maps on dashboards ([DHIS2-22110](https://dhis2.atlassian.net/browse/DHIS2-22110)) (#3343)

### Data Quality

[2.43.1 → 100.0.1](https://github.com/dhis2/data-quality-app/compare/2.43.1...v100.0.1)

#### Bug Fixes

- remove patch [DHIS2-21532](https://dhis2.atlassian.net/browse/DHIS2-21532) (#1376)

### Data Visualizer

[101.6.1 → 101.6.3](https://github.com/dhis2/data-visualizer-app/compare/v101.6.1...v101.6.3)

Includes minor bug fixes.

### Import Export

[101.3.2 → 101.6.0](https://github.com/dhis2/import-export-app/compare/v101.3.2...v101.6.0)

#### Features

- show error alerts when export request fails [DHIS2-20435](https://dhis2.atlassian.net/browse/DHIS2-20435)

#### Bug Fixes

- add alert when export request fails [DHIS2-18667](https://dhis2.atlassian.net/browse/DHIS2-18667)
- add digit group separator to EE import preview numbers [DHIS2-14239](https://dhis2.atlassian.net/browse/DHIS2-14239)
- address review feedback on digit group separator [DHIS2-14239](https://dhis2.atlassian.net/browse/DHIS2-14239)
- compressed data export with uncompressed filename [DHIS2-22131](https://dhis2.atlassian.net/browse/DHIS2-22131)
- correct AtomicMode help text and metadata import options [DHIS2-9997](https://dhis2.atlassian.net/browse/DHIS2-9997)
- correct atomicMode description and metadata import values [DHIS2-9997](https://dhis2.atlassian.net/browse/DHIS2-9997)
- filter out objects with embeddedObject true [DHIS2-21770](https://dhis2.atlassian.net/browse/DHIS2-21770)
- handle empty objects [DHIS2-19761](https://dhis2.atlassian.net/browse/DHIS2-19761) (#2265)
- hide program stage control for event programs [DHIS2-11507](https://dhis2.atlassian.net/browse/DHIS2-11507)
- include enrollments, events in tei export [DHIS2-21901](https://dhis2.atlassian.net/browse/DHIS2-21901) (#2271)
- run GML import async and track it under the METADATA_IMPORT job [DHIS2-21758](https://dhis2.atlassian.net/browse/DHIS2-21758) (#2250)

### Interpretation

[2.43.1 → 1.2.0](https://github.com/dhis2/interpretation-app/compare/2.43.1...v1.2.0)

Includes minor improvements and dependency updates.

### Line Listing

[102.4.0 → 102.4.1](https://github.com/dhis2/line-listing-app/compare/v102.4.0...v102.4.1)

#### Bug Fixes

- [DHIS2-21939](https://dhis2.atlassian.net/browse/DHIS2-21939) Event data not show for organisation unit group has different level

### Login

[100.4.6 → 100.5.0](https://github.com/dhis2/login-app/compare/v100.4.6...v100.5.0)

Includes minor improvements and minor bug fixes.

### Maps

[101.15.0 → 101.17.3](https://github.com/dhis2/maps-app/compare/v101.15.0...v101.17.3)

#### Features

- replace OSM Light basemap with OpenFreeMap, add Dark and Fiord [DHIS2-22028](https://dhis2.atlassian.net/browse/DHIS2-22028) (#3756)

#### Bug Fixes

- improve download settings UX for north arrow, map name tooltip and footer note [DHIS2-15792](https://dhis2.atlassian.net/browse/DHIS2-15792) (#3662)
- pass basemaps field through in dashboard embed config [DHIS2-22110](https://dhis2.atlassian.net/browse/DHIS2-22110) (#3772)
- prevent duplicate and hidden layers from Open as map [DHIS2-22073](https://dhis2.atlassian.net/browse/DHIS2-22073) (#3746)
- use policy-compliant tile URL for OSM Detailed basemap [DHIS2-22122](https://dhis2.atlassian.net/browse/DHIS2-22122) (#3773)

### Metadata Management

[0.166.1 → 0.179.0](https://github.com/dhis2/metadata-management-app/compare/v0.166.1...v0.179.0)

#### Features

- [DHIS2-21877](https://dhis2.atlassian.net/browse/DHIS2-21877) Add new plural terminology fields (#1006)
- add bulk delete action to section list toolbar [DHIS2-22045](https://dhis2.atlassian.net/browse/DHIS2-22045) (#1031)
- categories merge with validation [DHIS2-18292](https://dhis2.atlassian.net/browse/DHIS2-18292) (#994)
- update help text in data set sections [DHIS2-21437](https://dhis2.atlassian.net/browse/DHIS2-21437)
- warning for unsaved elements in program stages and data sets [DHIS2-21577](https://dhis2.atlassian.net/browse/DHIS2-21577)

#### Bug Fixes

- add minor patch for plural translation labels [DHIS2-22006](https://dhis2.atlassian.net/browse/DHIS2-22006) (#1027)
- filter variables for events expression builder [DHIS2-21494](https://dhis2.atlassian.net/browse/DHIS2-21494)
- org unit response processing [DHIS2-21965](https://dhis2.atlassian.net/browse/DHIS2-21965) (#1022)
- program sharing form state [DHIS2-22022](https://dhis2.atlassian.net/browse/DHIS2-22022) (#1029)
- require organisation unit levels for predictors [DHIS2-12090](https://dhis2.atlassian.net/browse/DHIS2-12090) (#1001)

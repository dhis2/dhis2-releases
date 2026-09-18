# Patch 2.42.6 Release Note

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

- **[DHIS2-21788](https://dhis2.atlassian.net/browse/DHIS2-21788)** Only one event returned in event analytics query API if max limit set to unlimited
- **[DHIS2-21677](https://dhis2.atlassian.net/browse/DHIS2-21677)**  NullPointerException for OUG{} indicators over org units with no group members
- **[DHIS2-19860](https://dhis2.atlassian.net/browse/DHIS2-19860)** Selected user database language is skipped when displaying OU hierarchy in Pivot table
- **[DHIS2-21434](https://dhis2.atlassian.net/browse/DHIS2-21434)** Cannot save a visualization with more than 255 periods
- **[DHIS2-21673](https://dhis2.atlassian.net/browse/DHIS2-21673)** The sortOrder and limit parameters are ignored in enrollment/aggregate analytics request
- **[DHIS2-21591](https://dhis2.atlassian.net/browse/DHIS2-21591)** Program Indicator is not calculated because a column name was not updated in the code (pistatus -> enrollmentstatus)
- **[DHIS2-17214](https://dhis2.atlassian.net/browse/DHIS2-17214)** outputIdSchema=id in analytics endpoint returns internal postgres pkeys

#### [API] Data Entry

- **[DHIS2-21757](https://dhis2.atlassian.net/browse/DHIS2-21757)** /api/dataEntry/metadata has a Hibernate n+1 query issue

#### [API] Metadata import-export

- **[DHIS2-20266](https://dhis2.atlassian.net/browse/DHIS2-20266)** Map synchronization and import fails with ConstraintViolationException due to duplicate key — also _[API] Synchronization_
- **[DHIS2-21731](https://dhis2.atlassian.net/browse/DHIS2-21731)** Metadata of MapViews with indicator fails to import

#### [API] Other

- **[DHIS2-21856](https://dhis2.atlassian.net/browse/DHIS2-21856)** Single-object metadata GET with field preset triggers link generation that loads entire lazy collections (30s+ CPU for large user roles)
- **[DHIS2-21858](https://dhis2.atlassian.net/browse/DHIS2-21858)** Flaky AuditIntegrationTest: await conditions never wait for the async audit consumer
- **[DHIS2-21740](https://dhis2.atlassian.net/browse/DHIS2-21740)** User datastore updates cause updates to other users data

#### [API] Program rules

- **[DHIS2-21961](https://dhis2.atlassian.net/browse/DHIS2-21961)** Enrollment AGE attribute evaluated as null/unavailable when program rules are revalidated on event completion in Capture app (v2.42) — also _[App] Capture_

#### [API] Security

- **[DHIS2-21786](https://dhis2.atlassian.net/browse/DHIS2-21786)** LazyInitializationException on User.userRoles when PAT authentication occurs on a non-OSIV endpoint (e.g. /api/dataValueSets)

#### [API] Synchronization

- **[DHIS2-21608](https://dhis2.atlassian.net/browse/DHIS2-21608)** Metadata Sync keeps adding things in new versions but don't include real new metadata
- **[DHIS2-21781](https://dhis2.atlassian.net/browse/DHIS2-21781)** Data sync between 2 instances logging ERROR in logs — also _[App] Job scheduler_

#### [API] Tracker

- **[DHIS2-21599](https://dhis2.atlassian.net/browse/DHIS2-21599)** null TEA values are sent in the payload and saved in the database, causing PR errors
- **[DHIS2-21221](https://dhis2.atlassian.net/browse/DHIS2-21221)**  orgUnitMode=SELECTED Causes Full Table Scan
- **[DHIS2-21963](https://dhis2.atlassian.net/browse/DHIS2-21963)** Unsynchronized native SQL writes evict all Hibernate L2 cache regions — also _[Core] Job Scheduler_
- **[DHIS2-21870](https://dhis2.atlassian.net/browse/DHIS2-21870)** Tracker import rejects valid IMAGE file resources with E1007 "invalid image format" (2.41/2.42)
- **[DHIS2-21536](https://dhis2.atlassian.net/browse/DHIS2-21536)** Completed events with expiry date are always editable
- **[DHIS2-21887](https://dhis2.atlassian.net/browse/DHIS2-21887)** Data value can't be imported when calculated from program rule
- **[DHIS2-21800](https://dhis2.atlassian.net/browse/DHIS2-21800)**  Event program notifications with recipient ORGANISATION_UNIT are broken
- **[DHIS2-21551](https://dhis2.atlassian.net/browse/DHIS2-21551)** Completed events with "Block entry form after completion" can be edited
- **[DHIS2-21588](https://dhis2.atlassian.net/browse/DHIS2-21588)** Exported CSV file fails when imported

#### [API] Translations

- **[DHIS2-21388](https://dhis2.atlassian.net/browse/DHIS2-21388)** [USERS APP]: fix metadata management app authority name — also _[App] User_

#### [API] User

- **[DHIS2-19912](https://dhis2.atlassian.net/browse/DHIS2-19912)** Outdated email text in other languages in account recovery: still refers to two emails

#### [App] Line Listing

- **[DHIS2-21939](https://dhis2.atlassian.net/browse/DHIS2-21939)** Event data not show for organisation unit group has different level

#### [App] User

- **[DHIS2-22000](https://dhis2.atlassian.net/browse/DHIS2-22000)** Replicated users not shown in Users list

## App updates

The bundled applications below were updated between DHIS2 2.42.5.2 and 2.42.6.

| App | Versions | Changes |
| --- | --- | --- |
| [Aggregate Data Entry](#aggregate-data-entry) | 102.0.6 → 102.1.0 | 5 changes |
| [Approval](#approval) | 100.1.6 → 100.2.1 | 1 change |
| [Capture](#capture) | 106.2.2 → 107.0.2 | 35 changes |
| [Dashboard](#dashboard) | 101.6.1 → 101.6.2 | 1 change |
| [Data Visualizer](#data-visualizer) | 101.6.0 → 101.6.3 | 3 changes |
| [Import Export](#import-export) | 101.3.1 → 101.3.6 | 4 changes |
| [Login](#login) | 100.4.6 → 100.5.0 | minor improvements and minor bug fixes |
| [Maps](#maps) | 101.11.0 → 101.16.0 | 38 changes |

### Aggregate Data Entry

[102.0.6 → 102.1.0](https://github.com/dhis2/aggregate-data-entry-app/compare/v102.0.6...v102.1.0)

#### Features

- totals for pivoted layout [DHIS2-19079](https://dhis2.atlassian.net/browse/DHIS2-19079) (#578)

#### Bug Fixes

- [DHIS2-21240](https://dhis2.atlassian.net/browse/DHIS2-21240) First row too high when sections are displayed vertically
- allow decimals for value type percentage in legacy custom forms [DHIS2-13645](https://dhis2.atlassian.net/browse/DHIS2-13645)
- replace standalone indicators custom forms [DHIS2-21607](https://dhis2.atlassian.net/browse/DHIS2-21607)
- respect indicator decimals and factor in legacy custom forms [DHIS2-15129](https://dhis2.atlassian.net/browse/DHIS2-15129)

### Approval

[100.1.6 → 100.2.1](https://github.com/dhis2/approval-app/compare/v100.1.6...v100.2.1)

#### Features

- context selector order [DHIS2-20624](https://dhis2.atlassian.net/browse/DHIS2-20624)

### Capture

[106.2.2 → 107.0.2](https://github.com/dhis2/capture-app/compare/v106.2.2...v107.0.2)

#### Features

- [DHIS2-16610](https://dhis2.atlassian.net/browse/DHIS2-16610) Add support for configurable terminology labels  (#4609)
- [DHIS2-20842](https://dhis2.atlassian.net/browse/DHIS2-20842) Deactivate tracked entity (#4605)
- [DHIS2-21266](https://dhis2.atlassian.net/browse/DHIS2-21266) Integrate react Markdown lib in WidgetFeedback (#4621)
- [DHIS2-21371](https://dhis2.atlassian.net/browse/DHIS2-21371) Read-only enrollment dashboard (#4529)
- [DHIS2-21394](https://dhis2.atlassian.net/browse/DHIS2-21394) Implement read-only mode for event program view event (#4566)

#### Bug Fixes

- [DHIS2-16363](https://dhis2.atlassian.net/browse/DHIS2-16363) Navigate to Schedule tab when creating event after stage complete (#4618)
- [DHIS2-19814](https://dhis2.atlassian.net/browse/DHIS2-19814) re-enable and de-flake changelog sort by date test (#4650)
- [DHIS2-19814](https://dhis2.atlassian.net/browse/DHIS2-19814) update changelog test for new demo data
- [DHIS2-21152](https://dhis2.atlassian.net/browse/DHIS2-21152) enrollment dashboard shows old information  (#4546)
- [DHIS2-21359](https://dhis2.atlassian.net/browse/DHIS2-21359) bump rule engine version 3.7.1 -> 3.8.1 (#4547)
- [DHIS2-21392](https://dhis2.atlassian.net/browse/DHIS2-21392) Form elements visible when no form access (#4549)
- [DHIS2-21475](https://dhis2.atlassian.net/browse/DHIS2-21475) revert patch for gregorian calendar for iso8601 to handle chrome bug (#4573)
- [DHIS2-21508](https://dhis2.atlassian.net/browse/DHIS2-21508) Fix priority typo in storeProgramRules (#4564)
- [DHIS2-21544](https://dhis2.atlassian.net/browse/DHIS2-21544) Fix stale optimistic enrollment note state after failed save (#4599)
- [DHIS2-21546](https://dhis2.atlassian.net/browse/DHIS2-21546) User can save empty note (#4579)
- [DHIS2-21550](https://dhis2.atlassian.net/browse/DHIS2-21550) Not respecting completeEventsExpiryDays (#4583)
- [DHIS2-21567](https://dhis2.atlassian.net/browse/DHIS2-21567) String without spaces overflows form (#4584)
- [DHIS2-21580](https://dhis2.atlassian.net/browse/DHIS2-21580) Sequential errors are not shown in the FeedbackBar (#4591)
- [DHIS2-21592](https://dhis2.atlassian.net/browse/DHIS2-21592) undefined program rule condition (#4596)
- [DHIS2-21618](https://dhis2.atlassian.net/browse/DHIS2-21618) Fix form layout for scheduled events (#4600)
- [DHIS2-21669](https://dhis2.atlassian.net/browse/DHIS2-21669) omit inaccessible data elements in enrollment dashboard (#4622)
- [DHIS2-21685](https://dhis2.atlassian.net/browse/DHIS2-21685) show min characters filter validation only on update attempt (#4647)
- [DHIS2-21693](https://dhis2.atlassian.net/browse/DHIS2-21693) Stop auto switching org unit in context selector (#4630)
- [DHIS2-21708](https://dhis2.atlassian.net/browse/DHIS2-21708) Org unit selector is expanded when form open if no org unit in top bar (#4629)
- [DHIS2-21741](https://dhis2.atlassian.net/browse/DHIS2-21741) Failed event deletion is not rolled back in the UI (#4636)
- [DHIS2-21855](https://dhis2.atlassian.net/browse/DHIS2-21855) limit concurrent api requests (#4668)
- [DHIS2-21874](https://dhis2.atlassian.net/browse/DHIS2-21874) Deactivated TEI shows wrong readonly reason (#4656)

#### Documentation

- [DHIS2-15916](https://dhis2.atlassian.net/browse/DHIS2-15916) clarify ScopeSelector top bar context (#4648)
- [DHIS2-20703](https://dhis2.atlassian.net/browse/DHIS2-20703) Fix typos, outdated terminology and content in Capture docs (#4651)
- [DHIS2-20703](https://dhis2.atlassian.net/browse/DHIS2-20703) Fix typos, outdated terms and content in Capture docs
- [DHIS2-20703](https://dhis2.atlassian.net/browse/DHIS2-20703) Recapture outdated enrollment dashboard screenshots
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) Recapture outdated enrollment dashboard screenshots (#4677)
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) fix stale text and screenshots in Capture app docs (#4680)
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) fix stale text in Capture app docs
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) recapture more outdated screenshots and fix related text

### Dashboard

[101.6.1 → 101.6.2](https://github.com/dhis2/dashboard-app/compare/v101.6.1...v101.6.2)

#### Bug Fixes

- hide "Open in app" for plugins without an app entrypoint ([DHIS2-21739](https://dhis2.atlassian.net/browse/DHIS2-21739)) (#3335)

### Data Visualizer

[101.6.0 → 101.6.3](https://github.com/dhis2/data-visualizer-app/compare/v101.6.0...v101.6.3)

#### Bug Fixes

- [DHIS2-21726](https://dhis2.atlassian.net/browse/DHIS2-21726) Inconsistent issue with downloading of pivot table report from Data Visualiser
- release blocked translations and [DHIS2-20499](https://dhis2.atlassian.net/browse/DHIS2-20499)
- stop flooding logs with warnings when opening the Data dimension panel [DHIS2-20499](https://dhis2.atlassian.net/browse/DHIS2-20499)

### Import Export

[101.3.1 → 101.3.6](https://github.com/dhis2/import-export-app/compare/v101.3.1...v101.3.6)

#### Bug Fixes

- [DHIS2-9997](https://dhis2.atlassian.net/browse/DHIS2-9997) Incorrect atomicMode description
- filter out objects with embeddedObject true [DHIS2-21770](https://dhis2.atlassian.net/browse/DHIS2-21770)
- handle empty objects [DHIS2-19761](https://dhis2.atlassian.net/browse/DHIS2-19761) (#2265)
- run GML import async and track it under the METADATA_IMPORT job [DHIS2-21758](https://dhis2.atlassian.net/browse/DHIS2-21758) (#2250)

### Login

[100.4.6 → 100.5.0](https://github.com/dhis2/login-app/compare/v100.4.6...v100.5.0)

Includes minor improvements and minor bug fixes.

### Maps

[101.11.0 → 101.16.0](https://github.com/dhis2/maps-app/compare/v101.11.0...v101.16.0)

#### Features

- [DHIS2-10823](https://dhis2.atlassian.net/browse/DHIS2-10823) Improve the predefined legend display
- [DHIS2-15514](https://dhis2.atlassian.net/browse/DHIS2-15514) Zero value separate in Maps
- [DHIS2-15695](https://dhis2.atlassian.net/browse/DHIS2-15695) Improve display of value ranges in automatic legends
- [DHIS2-18963](https://dhis2.atlassian.net/browse/DHIS2-18963) Digit groups separator functionality in maps
- [DHIS2-19078](https://dhis2.atlassian.net/browse/DHIS2-19078) Save visibility toggle state of layers and visibility and opacity of basemap with map
- [DHIS2-19580](https://dhis2.atlassian.net/browse/DHIS2-19580) Events layer: Show breakdown of a cluster
- [DHIS2-19812](https://dhis2.atlassian.net/browse/DHIS2-19812) Properly distinguish values outside of legend and no data and allow user to display both independently
- [DHIS2-19850](https://dhis2.atlassian.net/browse/DHIS2-19850) Thematic / OrgUnit / Facility / EarthEngine layer - Deal with OrgUnits without coordinates
- [DHIS2-20287](https://dhis2.atlassian.net/browse/DHIS2-20287) Hide or show map layers while on the dashboard like it is the charts
- [DHIS2-21142](https://dhis2.atlassian.net/browse/DHIS2-21142) Add new classification method (natural breaks, pretty breaks, log, sd)
- [DHIS2-237](https://dhis2.atlassian.net/browse/DHIS2-237) Events layer - Deal with events without coordinates
- [DHIS2-3156](https://dhis2.atlassian.net/browse/DHIS2-3156) Allow setting of numeric precision in automatic map legends
- [DHIS2-8478](https://dhis2.atlassian.net/browse/DHIS2-8478) Automatic legends with few data points
- add custom scale toggle for heat stress layers [DHIS2-20564](https://dhis2.atlassian.net/browse/DHIS2-20564) (#3708)
- enhance map legends, classification, and styling [DHIS2-18242](https://dhis2.atlassian.net/browse/DHIS2-18242) (#3661)

#### Bug Fixes

- [DHIS2-12860](https://dhis2.atlassian.net/browse/DHIS2-12860) Equal counts distribution is not ideal when many values are the same
- [DHIS2-19982](https://dhis2.atlassian.net/browse/DHIS2-19982) Chevron icon is not centered in the color select button
- [DHIS2-19983](https://dhis2.atlassian.net/browse/DHIS2-19983) Improve ranges/legend sorting in Maps data table
- [DHIS2-19984](https://dhis2.atlassian.net/browse/DHIS2-19984) Values not displayed for data item with type NUMBER and associated to an option set in Maps app data table
- [DHIS2-20818](https://dhis2.atlassian.net/browse/DHIS2-20818) Thematic layer, bubble style - legends shows NaN when the all mapped values are equal
- [DHIS2-21356](https://dhis2.atlassian.net/browse/DHIS2-21356) Saving event layer without choosing predefined legend set breaks layer
- coerce thematic period values to numbers [DHIS2-21037](https://dhis2.atlassian.net/browse/DHIS2-21037)
- combine multiple filters on same dimension [DHIS2-19696](https://dhis2.atlassian.net/browse/DHIS2-19696) (#3667)
- correct URL routing for trailing slashes, bare hash, and legacy links [DHIS2-19417](https://dhis2.atlassian.net/browse/DHIS2-19417) [DHIS2-19418](https://dhis2.atlassian.net/browse/DHIS2-19418)
- detect fullscreen and resize to autopin legend and enable multitouch [DHIS2-13242](https://dhis2.atlassian.net/browse/DHIS2-13242) [DHIS2-20761](https://dhis2.atlassian.net/browse/DHIS2-20761) (#3685)
- don't inherit period from single thematic layer when adding new thematic layer [DHIS2-21517](https://dhis2.atlassian.net/browse/DHIS2-21517)
- preserve program/enrollment period type on TE layer reload [DHIS2-19205](https://dhis2.atlassian.net/browse/DHIS2-19205) (#3674)
- preserve saved dates and default period when editing/adding thematic and event layers [DHIS2-21516](https://dhis2.atlassian.net/browse/DHIS2-21516) [DHIS2-21517](https://dhis2.atlassian.net/browse/DHIS2-21517) (#3666)
- preserve saved start/end dates when editing event layer [DHIS2-21516](https://dhis2.atlassian.net/browse/DHIS2-21516)
- prevent crash when timeline thematic layer fails to load [DHIS2-19063](https://dhis2.atlassian.net/browse/DHIS2-19063)
- prevent duplicate overview map outline in splitmap download mode [DHIS2-21540](https://dhis2.atlassian.net/browse/DHIS2-21540) (#3676)
- prevent timeline crash on load failure and fix period after drilling up/down [DHIS2-19063](https://dhis2.atlassian.net/browse/DHIS2-19063) [DHIS2-21113](https://dhis2.atlassian.net/browse/DHIS2-21113) (#3664)
- release of [DHIS2-15884](https://dhis2.atlassian.net/browse/DHIS2-15884) [DHIS2-19205](https://dhis2.atlassian.net/browse/DHIS2-19205) [DHIS2-21540](https://dhis2.atlassian.net/browse/DHIS2-21540)
- render calculated integer values without decimals in timeline [DHIS2-21037](https://dhis2.atlassian.net/browse/DHIS2-21037) (#3669)
- resize data table and map canvas continuously during drag [DHIS2-15884](https://dhis2.atlassian.net/browse/DHIS2-15884) (#3675)
- special characters encoded in layer alerts [DHIS2-19998](https://dhis2.atlassian.net/browse/DHIS2-19998) (#3658)
- stop flooding logs with warnings when opening the Data dimension panel [DHIS2-20499](https://dhis2.atlassian.net/browse/DHIS2-20499) (#3709)
- timeline period not updated after drilling up/down [DHIS2-21113](https://dhis2.atlassian.net/browse/DHIS2-21113)

# Patch 2.43.1 Release Note

- [Core updates](#core-updates)
  - [Features](#features)
  - [Bugs](#bugs)
- [App updates](#app-updates)

## Core updates

Changes made in the bundled applications are listed under [App updates](#app-updates).

### Features

#### [API] Other

- **[DHIS2-19712](https://dhis2.atlassian.net/browse/DHIS2-19712)** Allow for gzipped JSON and CSV min max bulk imports

### Bugs

#### [API] Analytics

- **[DHIS2-21778](https://dhis2.atlassian.net/browse/DHIS2-21778)** # `optionSet` missing from `analytics/events/aggregate` GridHeader on 2.43 — also _[API] Frameworks and libraries_
- **[DHIS2-20929](https://dhis2.atlassian.net/browse/DHIS2-20929)** Program Indicator using Yes/No Data element filter produces incorrect value for "No"
- **[DHIS2-21750](https://dhis2.atlassian.net/browse/DHIS2-21750)** Custom label for ou/enrollmentou is not respected in events/enrollments aggregate analytics responses
- **[DHIS2-21677](https://dhis2.atlassian.net/browse/DHIS2-21677)**  NullPointerException for OUG{} indicators over org units with no group members
- **[DHIS2-21434](https://dhis2.atlassian.net/browse/DHIS2-21434)** Cannot save a visualization with more than 255 periods
- **[DHIS2-21478](https://dhis2.atlassian.net/browse/DHIS2-21478)** Invalid aggregate enrollment SQL when unfiltered stage dimensions share a stage with filtered stage dimensions
- **[DHIS2-21628](https://dhis2.atlassian.net/browse/DHIS2-21628)** Enrollment analytics program indicator filters leak unresolved CTE placeholders into SQL
- **[DHIS2-21513](https://dhis2.atlassian.net/browse/DHIS2-21513)** Tracker Program Indicators don't work after they are defined or edited
- **[DHIS2-21673](https://dhis2.atlassian.net/browse/DHIS2-21673)** The sortOrder and limit parameters are ignored in enrollment/aggregate analytics request
- **[DHIS2-21591](https://dhis2.atlassian.net/browse/DHIS2-21591)** Program Indicator is not calculated because a column name was not updated in the code (pistatus -> enrollmentstatus)
- **[DHIS2-17214](https://dhis2.atlassian.net/browse/DHIS2-17214)** outputIdSchema=id in analytics endpoint returns internal postgres pkeys
- **[DHIS2-15864](https://dhis2.atlassian.net/browse/DHIS2-15864)** EVER: Download fails when data elements have legend sets — also _[App] EVER_

#### [API] Data administration

- **[DHIS2-21496](https://dhis2.atlassian.net/browse/DHIS2-21496)** Analytics fails to update when  "Respect category option start and end date in analytics table export" is on

#### [API] Metadata import-export

- **[DHIS2-21490](https://dhis2.atlassian.net/browse/DHIS2-21490)** Data export - Including OU descendants is unreasonably slow
- **[DHIS2-21364](https://dhis2.atlassian.net/browse/DHIS2-21364)** response.responseType unintentionally changed between versions
- **[DHIS2-20266](https://dhis2.atlassian.net/browse/DHIS2-20266)** Map synchronization and import fails with ConstraintViolationException due to duplicate key — also _[API] Synchronization_
- **[DHIS2-21731](https://dhis2.atlassian.net/browse/DHIS2-21731)** Metadata of MapViews with indicator fails to import

#### [API] Metadata model

- **[DHIS2-21424](https://dhis2.atlassian.net/browse/DHIS2-21424)** Category options are not saved in visualizations
- **[DHIS2-21873](https://dhis2.atlassian.net/browse/DHIS2-21873)** Cannot select Data Elements in Maps thematic layer when Data Type = "Data elements"

#### [API] Other

- **[DHIS2-21740](https://dhis2.atlassian.net/browse/DHIS2-21740)** User datastore updates cause updates to other users data
- **[DHIS2-21366](https://dhis2.atlassian.net/browse/DHIS2-21366)** Header bar in all apps crashes if an app manifest does not specify an icon — also _[App] Other_
- **[DHIS2-21509](https://dhis2.atlassian.net/browse/DHIS2-21509)** EventVisualization allows program to be null, on POST

#### [API] Synchronization

- **[DHIS2-21608](https://dhis2.atlassian.net/browse/DHIS2-21608)** Metadata Sync keeps adding things in new versions but don't include real new metadata
- **[DHIS2-21252](https://dhis2.atlassian.net/browse/DHIS2-21252)** Metadata Sync StreamConstraintsException - String value length exceeds the maximum allowed

#### [API] Tracker

- **[DHIS2-21599](https://dhis2.atlassian.net/browse/DHIS2-21599)** null TEA values are sent in the payload and saved in the database, causing PR errors
- **[DHIS2-21536](https://dhis2.atlassian.net/browse/DHIS2-21536)** Completed events with expiry date are always editable
- **[DHIS2-21551](https://dhis2.atlassian.net/browse/DHIS2-21551)** Completed events with "Block entry form after completion" can be edited
- **[DHIS2-21581](https://dhis2.atlassian.net/browse/DHIS2-21581)** Event import shows incorrect number of ignored events for CSV with invalid rows
- **[DHIS2-21588](https://dhis2.atlassian.net/browse/DHIS2-21588)** Exported CSV file fails when imported
- **[DHIS2-20787](https://dhis2.atlassian.net/browse/DHIS2-20787)** Incorrect validation for ProgramRuleVariable source types
- **[DHIS2-21288](https://dhis2.atlassian.net/browse/DHIS2-21288)** d2:inOrgUnitGroup function doesn't work with codes in the server
- **[DHIS2-21103](https://dhis2.atlassian.net/browse/DHIS2-21103)** Missing org unit scope validation when importing enrollments and events

#### [API] Translations

- **[DHIS2-21388](https://dhis2.atlassian.net/browse/DHIS2-21388)** [USERS APP]: fix metadata management app authority name — also _[App] User_

#### [API] User

- **[DHIS2-19912](https://dhis2.atlassian.net/browse/DHIS2-19912)** Outdated email text in other languages in account recovery: still refers to two emails

#### [App] Event reports (classic)

- **[DHIS2-21782](https://dhis2.atlassian.net/browse/DHIS2-21782)** Event report app does not display the dimension name (data elements)

#### [App] Maintenance

- **[DHIS2-15969](https://dhis2.atlassian.net/browse/DHIS2-15969)** Program notification email/SMS checkbox not persisting

#### [App] Metadata Management App

- **[DHIS2-22006](https://dhis2.atlassian.net/browse/DHIS2-22006)** [METADATA MANAGEMENT]: programs don't load in 2.43.1

## App updates

The bundled applications below were updated between DHIS2 2.43.0.1 and 2.43.1.

| App | Versions | Changes |
| --- | --- | --- |
| [Aggregate Data Entry](#aggregate-data-entry) | 102.0.1 → 102.0.10 | 6 changes |
| [App Management](#app-management) | 100.5.0 → 100.5.1 | minor bug fixes |
| [Approval](#approval) | 100.1.5 → 100.2.1 | 1 change |
| [Capture](#capture) | 105.13.6 → 106.6.3 | 36 changes |
| [Dashboard](#dashboard) | 101.6.0 → 101.6.1 | 1 change |
| [Data Visualizer](#data-visualizer) | 101.5.2 → 101.6.1 | 5 changes |
| [Import Export](#import-export) | 101.3.1 → 101.3.2 | 1 change |
| [Maps](#maps) | 101.10.1 → 101.15.0 | 39 changes |
| [Metadata Management](#metadata-management) | 0.151.5 → 0.166.1 | 34 changes |
| [Settings](#settings) | 100.15.3 → 100.15.5 | 1 change |
| [User](#user) | 100.11.0 → 100.11.2 | 1 change |

### Aggregate Data Entry

[102.0.1 → 102.0.10](https://github.com/dhis2/aggregate-data-entry-app/compare/v102.0.1...v102.0.10)

#### Bug Fixes

- allow decimals for value type percentage in legacy custom forms [DHIS2-13645](https://dhis2.atlassian.net/browse/DHIS2-13645)
- mandatory fields [DHIS2-21165](https://dhis2.atlassian.net/browse/DHIS2-21165)
- replace standalone indicators custom forms [DHIS2-21607](https://dhis2.atlassian.net/browse/DHIS2-21607)
- respect indicator decimals and factor in legacy custom forms [DHIS2-15129](https://dhis2.atlassian.net/browse/DHIS2-15129)
- show delete limits button [DHIS2-19517](https://dhis2.atlassian.net/browse/DHIS2-19517) (#552)
- useHighlightedFieldStore coc logic [DHIS2-20741](https://dhis2.atlassian.net/browse/DHIS2-20741)

### App Management

[100.5.0 → 100.5.1](https://github.com/dhis2/app-management-app/compare/v100.5.0...v100.5.1)

Includes minor bug fixes.

### Approval

[100.1.5 → 100.2.1](https://github.com/dhis2/approval-app/compare/v100.1.5...v100.2.1)

#### Features

- context selector order [DHIS2-20624](https://dhis2.atlassian.net/browse/DHIS2-20624)

### Capture

[105.13.6 → 106.6.3](https://github.com/dhis2/capture-app/compare/v105.13.6...v106.6.3)

#### Features

- [DHIS2-16610](https://dhis2.atlassian.net/browse/DHIS2-16610) Add support for configurable terminology labels  (#4609)
- [DHIS2-19940](https://dhis2.atlassian.net/browse/DHIS2-19940) Implement "No value" filtering for all filter types in working list (#4468)
- [DHIS2-20842](https://dhis2.atlassian.net/browse/DHIS2-20842) Deactivate tracked entity (#4605)
- [DHIS2-21135](https://dhis2.atlassian.net/browse/DHIS2-21135) Improve truncated labels in Working List filter buttons (#4494)
- [DHIS2-21371](https://dhis2.atlassian.net/browse/DHIS2-21371) Read-only enrollment dashboard (#4529)
- [DHIS2-21394](https://dhis2.atlassian.net/browse/DHIS2-21394) Implement read-only mode for event program view event (#4566)

#### Bug Fixes

- [DHIS2-12281](https://dhis2.atlassian.net/browse/DHIS2-12281) Misleading text when creating new TEI through creation of relationship  (#4528)
- [DHIS2-16363](https://dhis2.atlassian.net/browse/DHIS2-16363) Navigate to Schedule tab when creating event after stage complete (#4618)
- [DHIS2-17625](https://dhis2.atlassian.net/browse/DHIS2-17625) Use Capture scope for working lists without org unit (#4522)
- [DHIS2-18592](https://dhis2.atlassian.net/browse/DHIS2-18592) Not saving an option that starts or ends with a space (#4524)
- [DHIS2-20032](https://dhis2.atlassian.net/browse/DHIS2-20032) Update "Last updated" in enrollment widget on change (#4516)
- [DHIS2-20985](https://dhis2.atlassian.net/browse/DHIS2-20985) Username field selects first suggestion instead of clicked user (#4493)
- [DHIS2-21058](https://dhis2.atlassian.net/browse/DHIS2-21058) Update phone number validation (#4515)
- [DHIS2-21136](https://dhis2.atlassian.net/browse/DHIS2-21136) disable Enrollement actions buttons on ready only access (#4514)
- [DHIS2-21152](https://dhis2.atlassian.net/browse/DHIS2-21152) enrollment dashboard shows old information  (#4546)
- [DHIS2-21184](https://dhis2.atlassian.net/browse/DHIS2-21184) Remove orphaned Cypress step definitions (#4499)
- [DHIS2-21249](https://dhis2.atlassian.net/browse/DHIS2-21249) Date and time filter not having time in filter button text (#4508)
- [DHIS2-21348](https://dhis2.atlassian.net/browse/DHIS2-21348) Console log errors if a TEA associated with a optionSet is empty (#4521)
- [DHIS2-21359](https://dhis2.atlassian.net/browse/DHIS2-21359) bump rule engine version 3.7.1 -> 3.8.1 (#4547)
- [DHIS2-21392](https://dhis2.atlassian.net/browse/DHIS2-21392) Form elements visible when no form access (#4549)
- [DHIS2-21475](https://dhis2.atlassian.net/browse/DHIS2-21475) revert patch for gregorian calendar for iso8601 to handle chrome bug (#4573)
- [DHIS2-21475](https://dhis2.atlassian.net/browse/DHIS2-21475) use gregorian calendar for iso8601 to handle chrome bug (#4560)
- [DHIS2-21508](https://dhis2.atlassian.net/browse/DHIS2-21508) Fix priority typo in storeProgramRules (#4564)
- [DHIS2-21544](https://dhis2.atlassian.net/browse/DHIS2-21544) Fix stale optimistic enrollment note state after failed save (#4599)
- [DHIS2-21546](https://dhis2.atlassian.net/browse/DHIS2-21546) User can save empty note (#4579)
- [DHIS2-21550](https://dhis2.atlassian.net/browse/DHIS2-21550) Not respecting completeEventsExpiryDays (#4583)
- [DHIS2-21567](https://dhis2.atlassian.net/browse/DHIS2-21567) String without spaces overflows form (#4584)
- [DHIS2-21580](https://dhis2.atlassian.net/browse/DHIS2-21580) Sequential errors are not shown in the FeedbackBar (#4591)
- [DHIS2-21592](https://dhis2.atlassian.net/browse/DHIS2-21592) undefined program rule condition (#4596)
- [DHIS2-21618](https://dhis2.atlassian.net/browse/DHIS2-21618) Fix form layout for scheduled events (#4600)
- [DHIS2-21669](https://dhis2.atlassian.net/browse/DHIS2-21669) omit inaccessible data elements in enrollment dashboard (#4622)
- [DHIS2-21693](https://dhis2.atlassian.net/browse/DHIS2-21693) Stop auto switching org unit in context selector (#4630)
- [DHIS2-21741](https://dhis2.atlassian.net/browse/DHIS2-21741) Failed event deletion is not rolled back in the UI (#4636)
- [DHIS2-8814](https://dhis2.atlassian.net/browse/DHIS2-8814) Table in custom form overflows container with no scrollbar (#4527)

#### Documentation

- [DHIS2-21386](https://dhis2.atlassian.net/browse/DHIS2-21386) Docs for empty value filtering (#4536)
- [DHIS2-21395](https://dhis2.atlassian.net/browse/DHIS2-21395) Docs for added value types filtering working list (#4538)

### Dashboard

[101.6.0 → 101.6.1](https://github.com/dhis2/dashboard-app/compare/v101.6.0...v101.6.1)

#### Bug Fixes

- handle new bundled app endpoint format ([DHIS2-21469](https://dhis2.atlassian.net/browse/DHIS2-21469)) (#3330)

### Data Visualizer

[101.5.2 → 101.6.1](https://github.com/dhis2/data-visualizer-app/compare/v101.5.2...v101.6.1)

#### Bug Fixes

- [DHIS2-21726](https://dhis2.atlassian.net/browse/DHIS2-21726) Inconsistent issue with downloading of pivot table report from Data Visualiser
- release blocked translations and [DHIS2-20499](https://dhis2.atlassian.net/browse/DHIS2-20499)
- stop flooding logs with warnings when opening the Data dimension panel [DHIS2-20499](https://dhis2.atlassian.net/browse/DHIS2-20499)

#### Documentation

- documentation cleanup [DHIS2-20700](https://dhis2.atlassian.net/browse/DHIS2-20700) (#3467)
- fix and expand options documentation ([DHIS2-20700](https://dhis2.atlassian.net/browse/DHIS2-20700))

### Import Export

[101.3.1 → 101.3.2](https://github.com/dhis2/import-export-app/compare/v101.3.1...v101.3.2)

#### Bug Fixes

- [DHIS2-9997](https://dhis2.atlassian.net/browse/DHIS2-9997) Incorrect atomicMode description

### Maps

[101.10.1 → 101.15.0](https://github.com/dhis2/maps-app/compare/v101.10.1...v101.15.0)

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
- add filter operators `<=` and `>=` and correct `<` and `>` in data table [DHIS2-19988](https://dhis2.atlassian.net/browse/DHIS2-19988) (#3643)
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

### Metadata Management

[0.151.5 → 0.166.1](https://github.com/dhis2/metadata-management-app/compare/v0.151.5...v0.166.1)

#### Features

- [DHIS2-21173](https://dhis2.atlassian.net/browse/DHIS2-21173) Data approval level form (#872)
- [DHIS2-21174](https://dhis2.atlassian.net/browse/DHIS2-21174) Data approval workflow form (#873)
- [DHIS2-21175](https://dhis2.atlassian.net/browse/DHIS2-21175) Analytics table hooks form (#865)
- [DHIS2-21176](https://dhis2.atlassian.net/browse/DHIS2-21176) Analytics table hooks list (#864)
- [DHIS2-21380](https://dhis2.atlassian.net/browse/DHIS2-21380) Analytics table hook uniqueness validation (#907)
- [DHIS2-21477](https://dhis2.atlassian.net/browse/DHIS2-21477) metadata group editor (#935)
- [DHIS2-21578](https://dhis2.atlassian.net/browse/DHIS2-21578) Standalone program stage list (#965)
- [DHIS2-21579](https://dhis2.atlassian.net/browse/DHIS2-21579) Standalone program stage form (#968)
- [DHIS2-21624](https://dhis2.atlassian.net/browse/DHIS2-21624) Add fields for configuration of custom plurals terminology (#969)
- add cloning for orgUnitGroups/orgUnitGroupSets [DHIS2-21228](https://dhis2.atlassian.net/browse/DHIS2-21228)
- add option cloning [DHIS2-21230](https://dhis2.atlassian.net/browse/DHIS2-21230)
- add validation items cloning [DHIS2-21231](https://dhis2.atlassian.net/browse/DHIS2-21231)
- legend sets [DHIS2-20344](https://dhis2.atlassian.net/browse/DHIS2-20344) (#883)
- organisation-units: add organisation unit group filter to list ([DHIS2-20280](https://dhis2.atlassian.net/browse/DHIS2-20280))
- refreshable single select, in drawer [DHIS2-21575](https://dhis2.atlassian.net/browse/DHIS2-21575) (#973)
- sql view form [DHIS2-21243](https://dhis2.atlassian.net/browse/DHIS2-21243)
- update deletion text [DHIS2-21489](https://dhis2.atlassian.net/browse/DHIS2-21489)

#### Bug Fixes

- [DHIS2-21475](https://dhis2.atlassian.net/browse/DHIS2-21475): add iso8601 to gregorian calendar mapping workaround (#934)
- [DHIS2-21182](https://dhis2.atlassian.net/browse/DHIS2-21182) Priority field allows negative values (#866)
- [DHIS2-21310](https://dhis2.atlassian.net/browse/DHIS2-21310) Store program rule content with tag (#910)
- [DHIS2-21521](https://dhis2.atlassian.net/browse/DHIS2-21521) Unchecking does not clear values in Program details section (#942)
- add custom attributes to data set section [DHIS2-7765](https://dhis2.atlassian.net/browse/DHIS2-7765)
- add program rule duplicates [DHIS2-21249](https://dhis2.atlassian.net/browse/DHIS2-21249)
- allow wrapping of list items [DHIS2-21219](https://dhis2.atlassian.net/browse/DHIS2-21219)
- attributes schema cleanup [DHIS2-21322](https://dhis2.atlassian.net/browse/DHIS2-21322) [DHIS2-21323](https://dhis2.atlassian.net/browse/DHIS2-21323) (#890)
- clean up translations [DHIS2-21010](https://dhis2.atlassian.net/browse/DHIS2-21010) (#847)
- display persisted notification timing [DHIS2-21333](https://dhis2.atlassian.net/browse/DHIS2-21333) (#893)
- duplicate issues [DHIS2-21299](https://dhis2.atlassian.net/browse/DHIS2-21299) (#925)
- filter out child sections by api version [DHIS2-21547](https://dhis2.atlassian.net/browse/DHIS2-21547) (#948)
- fixes to expression builders [DHIS2-21494](https://dhis2.atlassian.net/browse/DHIS2-21494)
- orgUnitField default [DHIS2-21560](https://dhis2.atlassian.net/browse/DHIS2-21560) (#949)
- organisation-units: clear filters + loading state ([DHIS2-20280](https://dhis2.atlassian.net/browse/DHIS2-20280))
- rename duplicate to clone [DHIS2-21399](https://dhis2.atlassian.net/browse/DHIS2-21399)
- use default name field for program stage [DHIS2-21346](https://dhis2.atlassian.net/browse/DHIS2-21346) (#888)

### Settings

[100.15.3 → 100.15.5](https://github.com/dhis2/settings-app/compare/v100.15.3...v100.15.5)

#### Bug Fixes

- [DHIS2-16608](https://dhis2.atlassian.net/browse/DHIS2-16608): enforce setting validators and reject invalid saves

### User

[100.11.0 → 100.11.2](https://github.com/dhis2/user-app/compare/v100.11.0...v100.11.2)

#### Bug Fixes

- update UI library [DHIS2-19573](https://dhis2.atlassian.net/browse/DHIS2-19573)

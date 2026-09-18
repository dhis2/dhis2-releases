# Patch 2.41.10 Release Note

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

- **[DHIS2-19094](https://dhis2.atlassian.net/browse/DHIS2-19094)** Indicator with subExpression for Single Value or Gauge Chart shows no data in Data Visualizer
- **[DHIS2-22026](https://dhis2.atlassian.net/browse/DHIS2-22026)** Dashboard edits block when favorited by 255+ users
- **[DHIS2-19473](https://dhis2.atlassian.net/browse/DHIS2-19473)** Duplicated Analytics values when using Continuous Analytics job
- **[DHIS2-21788](https://dhis2.atlassian.net/browse/DHIS2-21788)** Only one event returned in event analytics query API if max limit set to unlimited
- **[DHIS2-21677](https://dhis2.atlassian.net/browse/DHIS2-21677)**  NullPointerException for OUG{} indicators over org units with no group members
- **[DHIS2-19860](https://dhis2.atlassian.net/browse/DHIS2-19860)** Selected user database language is skipped when displaying OU hierarchy in Pivot table
- **[DHIS2-21434](https://dhis2.atlassian.net/browse/DHIS2-21434)** Cannot save a visualization with more than 255 periods
- **[DHIS2-21673](https://dhis2.atlassian.net/browse/DHIS2-21673)** The sortOrder and limit parameters are ignored in enrollment/aggregate analytics request
- **[DHIS2-17214](https://dhis2.atlassian.net/browse/DHIS2-17214)** outputIdSchema=id in analytics endpoint returns internal postgres pkeys

#### [API] Data Entry

- **[DHIS2-21757](https://dhis2.atlassian.net/browse/DHIS2-21757)** /api/dataEntry/metadata has a Hibernate n+1 query issue

#### [API] Frameworks and libraries

- **[DHIS2-22067](https://dhis2.atlassian.net/browse/DHIS2-22067)** Hibernate and JdbcTemplate do not share a connection inside @Transactional

#### [API] Metadata import-export

- **[DHIS2-20266](https://dhis2.atlassian.net/browse/DHIS2-20266)** Map synchronization and import fails with ConstraintViolationException due to duplicate key — also _[API] Synchronization_
- **[DHIS2-21731](https://dhis2.atlassian.net/browse/DHIS2-21731)** Metadata of MapViews with indicator fails to import

#### [API] Other

- **[DHIS2-21740](https://dhis2.atlassian.net/browse/DHIS2-21740)** User datastore updates cause updates to other users data

#### [API] Synchronization

- **[DHIS2-21608](https://dhis2.atlassian.net/browse/DHIS2-21608)** Metadata Sync keeps adding things in new versions but don't include real new metadata

#### [API] Tracker

- **[DHIS2-21785](https://dhis2.atlassian.net/browse/DHIS2-21785)** Program attribute can't be imported when calculated from program rule
- **[DHIS2-21599](https://dhis2.atlassian.net/browse/DHIS2-21599)** null TEA values are sent in the payload and saved in the database, causing PR errors
- **[DHIS2-21221](https://dhis2.atlassian.net/browse/DHIS2-21221)**  orgUnitMode=SELECTED Causes Full Table Scan
- **[DHIS2-21963](https://dhis2.atlassian.net/browse/DHIS2-21963)** Unsynchronized native SQL writes evict all Hibernate L2 cache regions — also _[Core] Job Scheduler_
- **[DHIS2-21870](https://dhis2.atlassian.net/browse/DHIS2-21870)** Tracker import rejects valid IMAGE file resources with E1007 "invalid image format" (2.41/2.42)
- **[DHIS2-21536](https://dhis2.atlassian.net/browse/DHIS2-21536)** Completed events with expiry date are always editable
- **[DHIS2-21800](https://dhis2.atlassian.net/browse/DHIS2-21800)**  Event program notifications with recipient ORGANISATION_UNIT are broken
- **[DHIS2-21551](https://dhis2.atlassian.net/browse/DHIS2-21551)** Completed events with "Block entry form after completion" can be edited

#### [API] User

- **[DHIS2-19912](https://dhis2.atlassian.net/browse/DHIS2-19912)** Outdated email text in other languages in account recovery: still refers to two emails

#### [App] Line Listing

- **[DHIS2-21939](https://dhis2.atlassian.net/browse/DHIS2-21939)** Event data not show for organisation unit group has different level

## App updates

The bundled applications below were updated between DHIS2 2.41.9.1 and 2.41.10.

| App | Versions | Changes |
| --- | --- | --- |
| [Aggregate Data Entry](#aggregate-data-entry) | 102.0.8 → 102.1.0 | 3 changes |
| [Capture](#capture) | 106.5.0 → 107.0.4 | 25 changes |
| [Dashboard](#dashboard) | 101.6.1 → 101.6.3 | 1 change |
| [Data Visualizer](#data-visualizer) | 101.6.0 → 101.6.3 | 3 changes |
| [Import Export](#import-export) | 101.3.2 → 101.4.0 | 9 changes |
| [Login](#login) | 100.4.6 → 100.5.0 | minor improvements and minor bug fixes |
| [Maps](#maps) | 101.13.2 → 101.16.0 | 5 changes |

### Aggregate Data Entry

[102.0.8 → 102.1.0](https://github.com/dhis2/aggregate-data-entry-app/compare/v102.0.8...v102.1.0)

#### Features

- totals for pivoted layout [DHIS2-19079](https://dhis2.atlassian.net/browse/DHIS2-19079) (#578)

#### Bug Fixes

- allow decimals for value type percentage in legacy custom forms [DHIS2-13645](https://dhis2.atlassian.net/browse/DHIS2-13645)
- respect indicator decimals and factor in legacy custom forms [DHIS2-15129](https://dhis2.atlassian.net/browse/DHIS2-15129)

### Capture

[106.5.0 → 107.0.4](https://github.com/dhis2/capture-app/compare/v106.5.0...v107.0.4)

#### Features

- [DHIS2-20842](https://dhis2.atlassian.net/browse/DHIS2-20842) Deactivate tracked entity (#4605)
- [DHIS2-21266](https://dhis2.atlassian.net/browse/DHIS2-21266) Integrate react Markdown lib in WidgetFeedback (#4621)

#### Bug Fixes

- [DHIS2-13020](https://dhis2.atlassian.net/browse/DHIS2-13020) [DHIS2-21871](https://dhis2.atlassian.net/browse/DHIS2-21871) Preserve WL sharing on update and fix 409 for non-owners (#4702)
- [DHIS2-16363](https://dhis2.atlassian.net/browse/DHIS2-16363) Navigate to Schedule tab when creating event after stage complete (#4618)
- [DHIS2-19814](https://dhis2.atlassian.net/browse/DHIS2-19814) re-enable and de-flake changelog sort by date test (#4650)
- [DHIS2-19814](https://dhis2.atlassian.net/browse/DHIS2-19814) update changelog test for new demo data
- [DHIS2-21544](https://dhis2.atlassian.net/browse/DHIS2-21544) Fix stale optimistic enrollment note state after failed save (#4599)
- [DHIS2-21550](https://dhis2.atlassian.net/browse/DHIS2-21550) Not respecting completeEventsExpiryDays (#4583)
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
- [DHIS2-21885](https://dhis2.atlassian.net/browse/DHIS2-21885) recapture remaining likely-outdated screenshots (batch 2) (#4682)

### Dashboard

[101.6.1 → 101.6.3](https://github.com/dhis2/dashboard-app/compare/v101.6.1...v101.6.3)

#### Bug Fixes

- hide "Open in app" for plugins without an app entrypoint ([DHIS2-21739](https://dhis2.atlassian.net/browse/DHIS2-21739)) (#3335)

### Data Visualizer

[101.6.0 → 101.6.3](https://github.com/dhis2/data-visualizer-app/compare/v101.6.0...v101.6.3)

#### Bug Fixes

- [DHIS2-21726](https://dhis2.atlassian.net/browse/DHIS2-21726) Inconsistent issue with downloading of pivot table report from Data Visualiser
- release blocked translations and [DHIS2-20499](https://dhis2.atlassian.net/browse/DHIS2-20499)
- stop flooding logs with warnings when opening the Data dimension panel [DHIS2-20499](https://dhis2.atlassian.net/browse/DHIS2-20499)

### Import Export

[101.3.2 → 101.4.0](https://github.com/dhis2/import-export-app/compare/v101.3.2...v101.4.0)

#### Bug Fixes

- add digit group separator to EE import preview numbers [DHIS2-14239](https://dhis2.atlassian.net/browse/DHIS2-14239)
- address review feedback on digit group separator [DHIS2-14239](https://dhis2.atlassian.net/browse/DHIS2-14239)
- correct AtomicMode help text and metadata import options [DHIS2-9997](https://dhis2.atlassian.net/browse/DHIS2-9997)
- correct atomicMode description and metadata import values [DHIS2-9997](https://dhis2.atlassian.net/browse/DHIS2-9997)
- filter out objects with embeddedObject true [DHIS2-21770](https://dhis2.atlassian.net/browse/DHIS2-21770)
- handle empty objects [DHIS2-19761](https://dhis2.atlassian.net/browse/DHIS2-19761) (#2265)
- hide program stage control for event programs [DHIS2-11507](https://dhis2.atlassian.net/browse/DHIS2-11507)
- include enrollments, events in tei export [DHIS2-21901](https://dhis2.atlassian.net/browse/DHIS2-21901) (#2271)
- run GML import async and track it under the METADATA_IMPORT job [DHIS2-21758](https://dhis2.atlassian.net/browse/DHIS2-21758) (#2250)

### Login

[100.4.6 → 100.5.0](https://github.com/dhis2/login-app/compare/v100.4.6...v100.5.0)

Includes minor improvements and minor bug fixes.

### Maps

[101.13.2 → 101.16.0](https://github.com/dhis2/maps-app/compare/v101.13.2...v101.16.0)

#### Features

- [DHIS2-15792](https://dhis2.atlassian.net/browse/DHIS2-15792) Improve UX of map download settings
- [DHIS2-19580](https://dhis2.atlassian.net/browse/DHIS2-19580) Events layer: Show breakdown of a cluster
- add custom scale toggle for heat stress layers [DHIS2-20564](https://dhis2.atlassian.net/browse/DHIS2-20564) (#3708)

#### Bug Fixes

- [DHIS2-22028](https://dhis2.atlassian.net/browse/DHIS2-22028) OSM Light basemap tiles are watermarked - CARTO now requires an API key for its basemap service
- stop flooding logs with warnings when opening the Data dimension panel [DHIS2-20499](https://dhis2.atlassian.net/browse/DHIS2-20499) (#3709)

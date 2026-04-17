# DHIS2 version 43 Release Notes

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

## Tracker

### Performance

> **Note:** These are preliminary results based on pre-release builds. Final numbers will be updated when the 2.43.0 release is published.

#### Method

All tests use the [TrackerTest](https://github.com/dhis2/dhis2-core/blob/0bce5b265e8c2d339a8d612b2b880ef2cb271756/dhis-2/dhis-test-performance/src/test/java/org/hisp/dhis/test/tracker/TrackerTest.java) Gatling simulation from `dhis-2/dhis-test-performance`, pinned to master commit [`0bce5b265e8c2d339a8d612b2b880ef2cb271756`](https://github.com/dhis2/dhis2-core/commit/0bce5b265e8c2d339a8d612b2b880ef2cb271756). Import tests use `testMode=import` with the `load` profile. Runs are executed via the [`performance-tests.yml`](https://github.com/dhis2/dhis2-core/actions/workflows/performance-tests.yml) workflow. Each run is linked by GitHub Actions run ID; artifacts (Gatling HTML report, simulation.csv, gc.log) are available for 90 days.

##### Versions

| Version | Image | DB_VERSION | Notes |
|---|---|---|---|
| 2.43.0 | `dhis2/core:2.43.0.0-rc@sha256:f95e0dd187613483972433020ff714ef14d1cc4ddf442d8e0a7f9fe6f63aee55` | 2.43.0 | patch/2.43.0 at `838e47af4c8` (2026-04-15) |
| 2.42.4 | `dhis2/core:2.42.4` | 2.42.0 | latest stable 2.42 release |
| 2.41.8 | `dhis2/core:2.41.8` | 2.41.0 | latest stable 2.41 release |

##### Server

Self-hosted runner: Intel Xeon E3-1275 v6 @ 3.80GHz, 4 cores / 8 threads, 64 GiB RAM.
Docker Compose allocates 4 CPUs and 16 GiB each to web and db containers. DHIS2 and PostgreSQL run on the same machine.

##### Test design

TrackerTest imports into three Sierra Leone demo DB programs sequentially: MNCH / PNC (tracker, 9 entities/line), Child Programme (tracker, 4 entities/line), and ANC visit (event program, 1 event/line). Import data is pre-generated [Synthea](https://github.com/synthetichealth/synthea) synthetic patient data fetched from S3. Each import request posts 500 entities to `POST /api/tracker?async=false`.

For the `load` profile, each program imports for `importDurationSec` seconds using a closed injection model: a fixed pool of `importUsers` concurrent users loop until the duration elapses. The circular feeder replays the payload when exhausted. Since the Synthea payloads have no entity UIDs, DHIS2 generates a new UID for every request and every replay creates new entities.

##### How to reproduce

Trigger a single load run via `performance-tests.yml`. The `perf_tests_git_ref` pins the TrackerTest source code; `DHIS2_IMAGE` pins the server under test. Example for 2.43.0:

```sh
gh workflow run performance-tests.yml \
  --repo dhis2/dhis2-core \
  --field perf_tests_git_ref="0bce5b265e8c2d339a8d612b2b880ef2cb271756" \
  --field test_name="import-2.43.0-7users-30min" \
  --field test_env="DHIS2_IMAGE=dhis2/core:2.43.0.0-rc@sha256:f95e0dd187613483972433020ff714ef14d1cc4ddf442d8e0a7f9fe6f63aee55
DB_VERSION=2.43.0
SIMULATION_CLASS=org.hisp.dhis.test.tracker.TrackerTest
MVN_ARGS='-Dprofile=load -DtestMode=import -DimportUsers=7 -DimportDurationSec=1800'"
```

Substitute `DHIS2_IMAGE`, `DB_VERSION`, `importUsers`, and `importDurationSec` for other versions and scenarios. `DB_VERSION` must match the DHIS2 major version of the image (2.43.0 for 2.43.0.0-rc, 2.42.0 for 2.42.x, 2.41.0 for 2.41.x). `MVN_ARGS` must be single-quoted so multiple `-D` args reach Maven as one value. `perf_tests_git_ref` must be a full 40-char SHA.

#### Import

##### Concurrency sweep

For each version, 5-min import runs at increasing concurrency (2, 4, 5, 6, 7, 8 import users) to find the throughput plateau.

| Import users | 2.43.0 req/s | 2.43.0 p95 (ms) | 2.42.4 req/s | 2.42.4 p95 (ms) | 2.41.8 req/s | 2.41.8 p95 (ms) |
|---|---|---|---|---|---|---|
| 2 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |

##### Soak test

At each version's sweet spot concurrency, a sustained import for at least 30 min to verify throughput holds as the DB grows.

| Version | Import users | Duration | Entities imported | Throughput (req/s) | p95 (ms) |
|---|---|---|---|---|---|
| 2.43.0 | | | | | |
| 2.42.4 | | | | | |
| 2.41.8 | | | | | |

##### What changed

Key import optimizations in 2.43 that explain the throughput difference:

| Issue | Description | Impact |
|---|---|---|
| [DHIS2-21271](https://dhis2.atlassian.net/browse/DHIS2-21271) | Skip audit JMS pipeline when no consumer exists | ~19% CPU eliminated |
| [DHIS2-21239](https://dhis2.atlassian.net/browse/DHIS2-21239) | Batch changelog inserts via multi-row INSERT | +39% throughput |
| [DHIS2-21248](https://dhis2.atlassian.net/browse/DHIS2-21248) | Reduce JSONB serialization overhead for event data values | +17-26% throughput |
| [DHIS2-21234](https://dhis2.atlassian.net/browse/DHIS2-21234) | Validate option sets using preheated data instead of DB queries | 151K queries eliminated |
| [DHIS2-21177](https://dhis2.atlassian.net/browse/DHIS2-21177) | Batch-fetch user group members before notification dispatch | N*M queries reduced to 2 |
| [DHIS2-21287](https://dhis2.atlassian.net/browse/DHIS2-21287) | Replace linear scans with indexed lookups in validation | Validation CPU halved |
| [DHIS2-21178](https://dhis2.atlassian.net/browse/DHIS2-21178) | Reduce allocations for program rules evaluation | |
| [DHIS2-21245](https://dhis2.atlassian.net/browse/DHIS2-21245) | Analyze rules before running to limit context | |
| | HikariCP default connection pool (replaces c3p0) | c3p0 proxy overhead eliminated |

These import improvements are backported to 2.42 and 2.41 branches and will be available in the next patch releases (2.42.5, 2.41.9).

#### Export

TODO

## Bugs

**[DHIS2-20611](https://dhis2.atlassian.net/browse/DHIS2-20611): Enforce check on null usernames**  
Components: _[API] User_

Under certain circumstances, users may have a `null` username. In this version, we will disable 
such users and reasssign a username like `missing_uname_` + random UUID string. Additionally, a
database constraint will be added to prevent creation of users with a `null` username. 

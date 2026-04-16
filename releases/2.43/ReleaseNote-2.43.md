# DHIS2 version 43 Release Notes

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

## Tracker

### Performance

> **Note:** These are preliminary results based on pre-release builds. Final numbers will be updated when the 2.43.0 release is published.

#### Method

All tests use the [TrackerTest](https://github.com/dhis2/dhis2-core/blob/eb221b31987/dhis-2/dhis-test-performance/src/test/java/org/hisp/dhis/test/tracker/TrackerTest.java) Gatling simulation from `dhis-2/dhis-test-performance`. Import tests use `testMode=import` with the `load` profile. Runs are executed via the [`performance-tests.yml`](https://github.com/dhis2/dhis2-core/actions/workflows/performance-tests.yml) workflow. Each run is linked by GitHub Actions run ID; artifacts (Gatling HTML report, simulation.csv, gc.log) are available for 90 days.

##### Versions

| Version | Image | DB_VERSION | Notes |
|---|---|---|---|
| 2.43.0 | `dhis2/core:2.43.0.0-rc@sha256:f95e0dd187613483972433020ff714ef14d1cc4ddf442d8e0a7f9fe6f63aee55` | dev | patch/2.43.0 at `838e47af4c8` (2026-04-15) |
| 2.42.4 | `dhis2/core:2.42.4` | 2.42.0 | latest stable 2.42 release |
| 2.41.8 | `dhis2/core:2.41.8` | 2.41.0 | latest stable 2.41 release |

##### Server

Self-hosted runner: Intel Xeon E3-1275 v6 @ 3.80GHz, 4 cores / 8 threads, 64 GiB RAM.
Docker Compose allocates 4 CPUs and 16 GiB each to web and db containers. DHIS2 and PostgreSQL run on the same machine.

##### How to reproduce

All runs use `performance-tests.yml`. Example for a single run:

```sh
gh workflow run performance-tests.yml \
  --repo dhis2/dhis2-core \
  --field perf_tests_git_ref="<full-40-char-sha-on-master>" \
  --field test_env="DHIS2_IMAGE=dhis2/core:2.43.0.0-rc@sha256:f95e0dd187613483972433020ff714ef14d1cc4ddf442d8e0a7f9fe6f63aee55
DB_VERSION=dev
SIMULATION_CLASS=org.hisp.dhis.test.tracker.TrackerTest
MVN_ARGS=-Dprofile=load -DtestMode=import -DimportUsers=4 -DdurationSec=300"
```

Substitute image, DB_VERSION, and importUsers to get the full matrix. Each run produces a `run-simulation.env` file in the Gatling output directory that contains all parameters needed to reproduce.

##### Test design

TrackerTest imports into three Sierra Leone demo DB programs sequentially: MNCH / PNC (tracker, 9 entities/line), Child Programme (tracker, 4 entities/line), and ANC visit (event program, 1 event/line). Each program imports up to 30,000 entities by default. Import data is pre-generated [Synthea](https://github.com/synthetichealth/synthea) synthetic patient data fetched from S3.

Each import request posts a batch to `POST /api/tracker?async=false&importStrategy=CREATE_AND_UPDATE`. The three programs run one after the other (not interleaved). All import users start simultaneously and each processes their share of the data.

This differs from a single-program sustained-load test in that the payload shape and size varies across programs, and the import phase ends when all data is consumed rather than running for a fixed duration. To achieve a soak-style test, `importMaxEntitiesPerProgram` is set high enough that the import runs for the desired duration.

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

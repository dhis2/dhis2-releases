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

| Version | Image | DB_VERSION | Default pool | Notes |
|---|---|---|---|---|
| 2.43.0 | `dhis2/core:2.43.0.0-rc@sha256:f95e0dd187613483972433020ff714ef14d1cc4ddf442d8e0a7f9fe6f63aee55` | 2.42.0 | HikariCP | patch/2.43.0 at `838e47af4c8` (2026-04-15). Uses the 2.42.0 dump because the 2.43 dump does not match the current schema; Flyway migrates on startup. |
| 2.42.4 | `dhis2/core:2.42.4` | 2.42.0 | c3p0 | latest stable 2.42 release |
| 2.41.8 | `dhis2/core:2.41.8` | 2.41.0 | c3p0 | latest stable 2.41 release |

2.43 switches the default JDBC connection pool from c3p0 to HikariCP. c3p0 wraps every JDBC call in a proxy that added ~10-15% CPU overhead on 2.41/2.42 under concurrent import load. Users on 2.41/2.42 can opt into HikariCP by setting `db.pool.type = hikari` in `dhis.conf`.

##### Server

Self-hosted runner: Intel Xeon E3-1275 v6 @ 3.80GHz, 4 cores / 8 threads, 64 GiB RAM.
Docker Compose allocates 4 CPUs and 16 GiB each to web and db containers. DHIS2 and PostgreSQL run on the same machine.

##### Test design

TrackerTest imports into three Sierra Leone demo DB programs sequentially: MNCH / PNC, Child Programme, and ANC visit. Import data is pre-generated [Synthea](https://github.com/synthetichealth/synthea) synthetic patient data fetched from S3. Each import request posts 500 entities to `POST /api/tracker?async=false`.

For the `load` profile, each program imports for `importDurationSec` seconds using a closed injection model: a fixed pool of `importUsers` concurrent users loop until the duration elapses. The circular feeder replays the payload when exhausted. Since the Synthea payloads have no entity UIDs, DHIS2 generates a new UID for every request and every replay creates new entities.

##### Import data

Each line in an ndjson file is one top-level entity. The three programs differ in payload shape, which matters because events write more to the database than plain tracked entities or attribute values.

| Program | Type | ndjson lines | Entities per line | Breakdown per line |
|---|---|---|---|---|
| MNCH / PNC | tracker program | 11,338 | 9 | 1 TE + 2 enrollments + 6 events |
| Child Programme | tracker program | 29,969 | 4 | 1 TE + 1 enrollment + 2 events |
| ANC visit | event program | 410,022 | 1 | 1 event (no TE, no enrollment) |

Events in tracker programs belong to an enrollment (`trackerevent` table). Events in event programs have no enrollment or tracked entity (`singleevent` table). The two use different import and query paths.

At a target of 500 entities per request, one request contains ~55 MNCH lines, ~125 Child lines, or 500 ANC events. MNCH is the heaviest payload per TE (most events and attribute values flow through the persister for each TE); ANC is the lightest because it skips TE preheat and attribute validation entirely. When interpreting per-program p95 or throughput, these payload differences dominate the comparison between programs.

##### How to reproduce

Trigger a single load run via `performance-tests.yml`. The `perf_tests_git_ref` pins the TrackerTest source code; `DHIS2_IMAGE` pins the server under test. Example for 2.43.0:

```sh
gh workflow run performance-tests.yml \
  --repo dhis2/dhis2-core \
  --field perf_tests_git_ref="0bce5b265e8c2d339a8d612b2b880ef2cb271756" \
  --field test_name="import-2.43.0-7users-30min" \
  --field test_env="DHIS2_IMAGE=dhis2/core:2.43.0.0-rc@sha256:f95e0dd187613483972433020ff714ef14d1cc4ddf442d8e0a7f9fe6f63aee55
DB_VERSION=2.42.0
SIMULATION_CLASS=org.hisp.dhis.test.tracker.TrackerTest
MVN_ARGS='-Dprofile=load -DtestMode=import -DimportUsers=7 -DimportDurationSec=1800'"
```

Substitute `DHIS2_IMAGE`, `DB_VERSION`, `importUsers`, and `importDurationSec` for other versions and scenarios. Use `DB_VERSION=2.42.0` for 2.43 and 2.42 images (Flyway migrates 2.43 on startup); use `DB_VERSION=2.41.0` for 2.41. `MVN_ARGS` must be single-quoted so multiple `-D` args reach Maven as one value. `perf_tests_git_ref` must be a full 40-char SHA.

#### Import

##### Concurrency sweep

For each version, 5-min import runs (300s per program) at increasing concurrency to find each program's throughput plateau. 2.43.0 was swept at 1/2/4/5/6/7/8 users; 2.42.4 and 2.41.8 only at 1/2/4 users because they saturate much earlier and higher concurrency only makes p95 explode without adding throughput. Results are reported per program because the three programs have different payload shapes (see Import data above).

Throughput (req/s) comes from `simulation.csv`. p95 (ms) comes from the Gatling HTML report so it matches what you see when clicking the run link.

**2.43.0** (image `dhis2/core:2.43.0.0-rc@sha256:f95e0dd187613483972433020ff714ef14d1cc4ddf442d8e0a7f9fe6f63aee55`)

Sweet spot: **6 users** (best trade-off across all three programs). All runs had 0 KO.

MNCH / PNC import:

| users | req/s | mean (ms) | p95 (ms) | run |
|---|---|---|---|---|
| 1 | 1.30 | 771 | 1217 | [24566167645](https://github.com/dhis2/dhis2-core/actions/runs/24566167645) |
| 2 | 1.97 | 1012 | 1790 | [24555265579](https://github.com/dhis2/dhis2-core/actions/runs/24555265579) |
| 4 | 2.52 | 1579 | 3386 | [24555267507](https://github.com/dhis2/dhis2-core/actions/runs/24555267507) |
| 5 | 3.03 | 1648 | 3270 | [24555269466](https://github.com/dhis2/dhis2-core/actions/runs/24555269466) |
| **6** | **3.78** | **1583** | **2897** | [24555271744](https://github.com/dhis2/dhis2-core/actions/runs/24555271744) |
| 7 | 3.08 | 2259 | 4861 | [24555273620](https://github.com/dhis2/dhis2-core/actions/runs/24555273620) |
| 8 | 3.05 | 2610 | 5706 | [24555275573](https://github.com/dhis2/dhis2-core/actions/runs/24555275573) |

Child Programme import:

| users | req/s | mean (ms) | p95 (ms) | run |
|---|---|---|---|---|
| 1 | 3.15 | 317 | 417 | [24566167645](https://github.com/dhis2/dhis2-core/actions/runs/24566167645) |
| 2 | 5.36 | 373 | 583 | [24555265579](https://github.com/dhis2/dhis2-core/actions/runs/24555265579) |
| 4 | 7.15 | 558 | 1056 | [24555267507](https://github.com/dhis2/dhis2-core/actions/runs/24555267507) |
| 5 | 8.65 | 576 | 1014 | [24555269466](https://github.com/dhis2/dhis2-core/actions/runs/24555269466) |
| 6 | 10.48 | 571 | 867 | [24555271744](https://github.com/dhis2/dhis2-core/actions/runs/24555271744) |
| **7** | **10.80** | **646** | **1128** | [24555273620](https://github.com/dhis2/dhis2-core/actions/runs/24555273620) |
| 8 | 10.31 | 773 | 1540 | [24555275573](https://github.com/dhis2/dhis2-core/actions/runs/24555275573) |

ANC visit import:

| users | req/s | mean (ms) | p95 (ms) | run |
|---|---|---|---|---|
| 1 | 3.36 | 297 | 620 | [24566167645](https://github.com/dhis2/dhis2-core/actions/runs/24566167645) |
| 2 | 5.50 | 363 | 796 | [24555265579](https://github.com/dhis2/dhis2-core/actions/runs/24555265579) |
| 4 | 6.88 | 580 | 1469 | [24555267507](https://github.com/dhis2/dhis2-core/actions/runs/24555267507) |
| 5 | 9.11 | 547 | 1215 | [24555269466](https://github.com/dhis2/dhis2-core/actions/runs/24555269466) |
| **6** | **9.97** | **600** | **1324** | [24555271744](https://github.com/dhis2/dhis2-core/actions/runs/24555271744) |
| 7 | 9.15 | 762 | 2285 | [24555273620](https://github.com/dhis2/dhis2-core/actions/runs/24555273620) |
| 8 | 9.17 | 870 | 2304 | [24555275573](https://github.com/dhis2/dhis2-core/actions/runs/24555275573) |

**2.42.4** (image `dhis2/core:2.42.4`)

Sweet spot: **4 users**. Throughput is still climbing slightly from 1→2→4 users but p95 already degrades sharply. All runs 0 KO.

MNCH / PNC import:

| users | req/s | mean (ms) | p95 (ms) | run |
|---|---|---|---|---|
| 1 | 0.37 | 2692 | 3581 | [24566169785](https://github.com/dhis2/dhis2-core/actions/runs/24566169785) |
| 2 | 0.56 | 3558 | 4503 | [24564635144](https://github.com/dhis2/dhis2-core/actions/runs/24564635144) |
| **4** | **0.76** | **5237** | **6696** | [24564636860](https://github.com/dhis2/dhis2-core/actions/runs/24564636860) |

Child Programme import:

| users | req/s | mean (ms) | p95 (ms) | run |
|---|---|---|---|---|
| 1 | 0.84 | 1191 | 1326 | [24566169785](https://github.com/dhis2/dhis2-core/actions/runs/24566169785) |
| 2 | 1.24 | 1605 | 1752 | [24564635144](https://github.com/dhis2/dhis2-core/actions/runs/24564635144) |
| **4** | **1.71** | **2327** | **2479** | [24564636860](https://github.com/dhis2/dhis2-core/actions/runs/24564636860) |

ANC visit import:

| users | req/s | mean (ms) | p95 (ms) | run |
|---|---|---|---|---|
| 1 | 1.08 | 924 | 1080 | [24566169785](https://github.com/dhis2/dhis2-core/actions/runs/24566169785) |
| 2 | 1.64 | 1215 | 1653 | [24564635144](https://github.com/dhis2/dhis2-core/actions/runs/24564635144) |
| **4** | **2.13** | **1869** | **2460** | [24564636860](https://github.com/dhis2/dhis2-core/actions/runs/24564636860) |

**2.41.8** (image `dhis2/core:2.41.8`)

Sweet spot: **4 users**. Same shape as 2.42.4. All runs 0 KO.

MNCH / PNC import:

| users | req/s | mean (ms) | p95 (ms) | run |
|---|---|---|---|---|
| 1 | 0.44 | 2256 | 2703 | [24566171631](https://github.com/dhis2/dhis2-core/actions/runs/24566171631) |
| 2 | 0.62 | 3202 | 4362 | [24564643009](https://github.com/dhis2/dhis2-core/actions/runs/24564643009) |
| **4** | **0.72** | **5498** | **7033** | [24564644824](https://github.com/dhis2/dhis2-core/actions/runs/24564644824) |

Child Programme import:

| users | req/s | mean (ms) | p95 (ms) | run |
|---|---|---|---|---|
| 1 | 1.05 | 950 | 1097 | [24566171631](https://github.com/dhis2/dhis2-core/actions/runs/24566171631) |
| 2 | 1.61 | 1241 | 1473 | [24564643009](https://github.com/dhis2/dhis2-core/actions/runs/24564643009) |
| **4** | **2.13** | **1876** | **2061** | [24564644824](https://github.com/dhis2/dhis2-core/actions/runs/24564644824) |

ANC visit import:

| users | req/s | mean (ms) | p95 (ms) | run |
|---|---|---|---|---|
| 1 | 1.26 | 790 | 939 | [24566171631](https://github.com/dhis2/dhis2-core/actions/runs/24566171631) |
| 2 | 2.00 | 998 | 1149 | [24564643009](https://github.com/dhis2/dhis2-core/actions/runs/24564643009) |
| **4** | **2.39** | **1669** | **2102** | [24564644824](https://github.com/dhis2/dhis2-core/actions/runs/24564644824) |

##### At-a-glance comparison

Throughput at each version's sweet spot (2.43 = 6 users; 2.42 and 2.41 = 4 users):

| Program | 2.43.0 req/s | 2.42.4 req/s | 2.41.8 req/s | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 3.78 | 0.76 | 0.72 | +397% | +425% |
| Child | 10.48 | 1.71 | 2.13 | +513% | +392% |
| ANC | 9.97 | 2.13 | 2.39 | +368% | +317% |

p95 at each version's sweet spot:

| Program | 2.43.0 p95 | 2.42.4 p95 | 2.41.8 p95 | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 2897 | 6696 | 7033 | -57% | -59% |
| Child | 867 | 2479 | 2061 | -65% | -58% |
| ANC | 1324 | 2460 | 2102 | -46% | -37% |

2.43 imports 3-5x more per second than 2.42/2.41 **and** does it with 40-65% lower p95.

##### Soak test

At each version's sweet spot concurrency, a sustained import for 30 min per program (90 min total per version) to verify throughput holds as the DB grows.

**2.43.0** (6 users, 30 min per program, 0 KO): [run 24566213531](https://github.com/dhis2/dhis2-core/actions/runs/24566213531)

| Program | Requests | req/s | mean (ms) | p95 (ms) | vs short-run (300s) p95 |
|---|---|---|---|---|---|
| MNCH | 6,500 | 3.60 | 1,665 | 3,614 | +25% |
| Child | 13,895 | 7.71 | 777 | 1,587 | +83% |
| ANC | 14,602 | 8.10 | 740 | 1,895 | +43% |

Throughput stays within 5-8% of the short-run peak, p95 rises as expected as the DB grows (~34k entities imported across the 90-min run). No collapses.

**2.42.4** (4 users, 30 min per program, 0 KO): [run 24599094193](https://github.com/dhis2/dhis2-core/actions/runs/24599094193)

| Program | Requests | req/s | mean (ms) | p95 (ms) |
|---|---|---|---|---|
| MNCH | 989 | 0.55 | 7,293 | 10,614 |
| Child | 3,059 | 1.70 | 2,355 | 3,177 |
| ANC | 3,380 | 1.88 | 2,130 | 3,240 |

**2.41.8** (4 users, 30 min per program, 0 KO): [run 24599094195](https://github.com/dhis2/dhis2-core/actions/runs/24599094195)

| Program | Requests | req/s | mean (ms) | p95 (ms) |
|---|---|---|---|---|
| MNCH | 1,381 | 0.77 | 5,220 | 6,572 |
| Child | 2,691 | 1.49 | 2,677 | 3,172 |
| ANC | 3,339 | 1.85 | 2,156 | 2,521 |

**Soak summary** (sustained 30 min at each sweet spot, 0 KO all versions):

| Program | 2.43.0 req/s | 2.42.4 req/s | 2.41.8 req/s | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 3.60 | 0.55 | 0.77 | +555% | +368% |
| Child | 7.71 | 1.70 | 1.49 | +354% | +418% |
| ANC | 8.10 | 1.88 | 1.85 | +331% | +338% |

| Program | 2.43.0 p95 | 2.42.4 p95 | 2.41.8 p95 | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 3,614 | 10,614 | 6,572 | -66% | -45% |
| Child | 1,587 | 3,177 | 3,172 | -50% | -50% |
| ANC | 1,895 | 3,240 | 2,521 | -42% | -25% |

##### HikariCP workaround on 2.42.4

2.43 defaults to HikariCP; 2.42.4 and 2.41.8 default to c3p0. On heavily contended workloads where the c3p0 proxy layer amplifies per-call overhead, setting `db.pool.type = hikari` in `dhis.conf` can help. On the TrackerTest import mix against 2.42.4, the effect is small:

| Users | Pool | MNCH req/s | MNCH p95 | Child req/s | Child p95 | ANC req/s | ANC p95 |
|---|---|---|---|---|---|---|---|
| 2 | c3p0 | 0.56 | 4,503 | 1.24 | 1,752 | 1.64 | 1,653 |
| 2 | hikari | 0.58 | 4,267 | 1.31 | 1,699 | 1.68 | 1,475 |
| 4 | c3p0 | 0.76 | 6,696 | 1.71 | 2,479 | 2.13 | 2,460 |
| 4 | hikari | 0.78 | 6,378 | 1.80 | 2,347 | 2.22 | 2,574 |
| 6 | hikari | 0.88 | 9,140 | 1.92 | 3,502 | 2.33 | 3,506 |

Hikari adds ~2-5% at matched concurrency (runs: [2u](https://github.com/dhis2/dhis2-core/actions/runs/24601217263), [4u](https://github.com/dhis2/dhis2-core/actions/runs/24601218072), [6u](https://github.com/dhis2/dhis2-core/actions/runs/24601218816)). The sweet spot stays at 4 users. For users stuck on 2.42.4 the workaround is a small win but does not close the gap to 2.43 — the bulk of the improvement in 2.43 comes from the import path changes listed below, not the pool.

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

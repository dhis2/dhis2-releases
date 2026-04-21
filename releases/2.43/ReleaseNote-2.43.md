# DHIS2 version 43 Release Notes

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

## Tracker

### Performance

> **Note:** These are preliminary results based on pre-release builds. Final numbers will be updated when the 2.43.0 release is published.

#### Summary

Compared against the latest stable 2.42.4 and 2.41.8 releases on the Sierra Leone demo DB:

Import:

* **In a sustained 30-min import at each version's best concurrency, 2.43 imports 17.5M entities vs 3.7M on 2.42.4 / 2.41.8**: 4-6x more throughput with 25-66% lower p95. See [Soak test](#soak-test).
* **2.43 scales further before p95 degrades.** It handles 6 concurrent import users comfortably; 2.42.4 and 2.41.8 cap out around 4 on the same hardware. See [Concurrency sweep](#concurrency-sweep).
* **Most import improvements are backported** and will ship in 2.42.5 and 2.41.9; see [What changed](#what-changed) for the per-issue backport status.
* **The DB connection pool choice matters more on 2.43 than on 2.42** (measured on import). On 2.43, switching from HikariCP (default) to c3p0 raises p95 by 18-35% and drops throughput by up to 12%. On 2.42.4, switching from c3p0 (default) to HikariCP only adds 2-5% throughput. See [DB connection pool](#db-connection-pool).

Export:

* **Event program listing queries are ~100x faster than 2.42.4 and ~12x faster than 2.41.8** at 1 user. Tracker program queries are 30-80% faster than 2.42.4, mostly flat or slightly improved vs 2.41.8 with one regression under investigation. See [Export](#export).
* **Under concurrency 2.43 holds up**; 2.42.4 starts failing at 4 export users (3 KOs on ANC listings), 2.41.8 collapses with 24 KOs. See [Multi-user export](#multi-user-export-same-seeded-db).

#### Method

All tests use the [TrackerTest](https://github.com/dhis2/dhis2-core/blob/0bce5b265e8c2d339a8d612b2b880ef2cb271756/dhis-2/dhis-test-performance/src/test/java/org/hisp/dhis/test/tracker/TrackerTest.java) Gatling simulation from `dhis-2/dhis-test-performance`, pinned to master commit [`0bce5b265e8c2d339a8d612b2b880ef2cb271756`](https://github.com/dhis2/dhis2-core/commit/0bce5b265e8c2d339a8d612b2b880ef2cb271756). Import tests use `testMode=import` with the `load` profile. Runs are executed via the [`performance-tests.yml`](https://github.com/dhis2/dhis2-core/blob/0bce5b265e8c2d339a8d612b2b880ef2cb271756/.github/workflows/performance-tests.yml) workflow. Each run is linked by GitHub Actions run ID; artifacts (Gatling HTML report, `simulation.csv`, ...) are available for 90 days.

p95 values in the tables come from the Gatling HTML report so they match what you see when clicking the run link. Throughput (req/s) and request counts are computed from `simulation.csv`.

##### Versions

| Version | Image | DB_VERSION | Default pool | Notes |
|---|---|---|---|---|
| 2.43.0 | `dhis2/core:2.43.0.0-rc@sha256:f95e0dd187613483972433020ff714ef14d1cc4ddf442d8e0a7f9fe6f63aee55` | 2.42.0 | HikariCP | patch/2.43.0 at [`838e47af4c8`](https://github.com/dhis2/dhis2-core/commit/838e47af4c8) (2026-04-15). |
| 2.42.4 | `dhis2/core:2.42.4` | 2.42.0 | c3p0 | latest stable 2.42 release |
| 2.41.8 | `dhis2/core:2.41.8` | 2.41.0 | c3p0 | latest stable 2.41 release |

##### Server

Self-hosted Linux runner: Intel Xeon E3-1275 v6 @ 3.80GHz, 4 cores / 8 threads, 64 GiB RAM. Docker Compose allocates 4 CPUs and 16 GiB each to the `web` (DHIS2) and `db` (PostgreSQL) containers. Both containers run on the same machine.

##### DHIS2 configuration

`dhis.conf` is the [default from the performance test module](https://github.com/dhis2/dhis2-core/blob/0bce5b265e8c2d339a8d612b2b880ef2cb271756/dhis-2/dhis-test-performance/docker/dhis.conf):

```properties
connection.dialect = org.hibernate.dialect.PostgreSQLDialect
connection.driver_class = org.postgresql.Driver
connection.url = jdbc:postgresql://db/dhis
connection.username = dhis
connection.password = dhis

system.update_notifications_enabled = off
```

##### Warmup

Each run executes the full simulation once as warmup (`WARMUP=1`, the workflow default). Reported numbers are from the measured run only.

##### Baseline DB

TrackerTest exercises three programs in the Sierra Leone 2.42.0 dump. All three are sparsely populated, so the test mostly measures the cost of inserting new data rather than the cost of growing an already-large dataset:

| Program | Type | TEs | Enrollments | Events |
|---|---|---|---|---|
| MNCH / PNC (`uy2gU8kT1jF`) | tracker program | 3 | 3 | 14 |
| Child Programme (`IpHINAT79UW`) | tracker program | 19,030 | 19,031 | 37,643 |
| ANC visit (`lxAQ7Zs9VYR`) | event program | - | - | 3 |

Totals across all programs in the dump: 73,125 tracked entities, 73,133 enrollments, 373,597 events, 1,069,732 attribute values.

##### Import payload

Import data is pre-generated [Synthea](https://github.com/synthetichealth/synthea) synthetic patient data:

| Program | Entities per patient (or event) | Breakdown |
|---|---|---|
| MNCH / PNC | 9 | 1 TE + 2 enrollments + 6 events |
| Child Programme | 4 | 1 TE + 1 enrollment + 2 events |
| ANC visit | 1 | 1 event (no TE, no enrollment) |

Each import request posts ~500 entities to `POST /api/tracker?async=false`, so one request imports ~55 MNCH patients, ~125 Child patients, or 500 ANC events. Throughput and p95 differ between programs regardless of version because the per-request work differs.

Programs are imported sequentially (MNCH → Child → ANC).

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
MVN_ARGS='-DtestMode=import -DimportUsers=7 -DimportDurationSec=1800'"
```

Substitute `DHIS2_IMAGE`, `DB_VERSION` (see [Versions](#versions)), `importUsers`, and `importDurationSec` for other scenarios.

#### Import

Import runs use duration-based import: `importUsers` concurrent users loop over import requests for `importDurationSec` seconds per program.

##### Concurrency sweep

5-min runs per concurrency level to find each program's throughput plateau. 2.43.0 scales further than 2.42.4 and 2.41.8, which saturate early; beyond ~4 users the older versions only gain p95, no throughput.

**2.43.0** (image `dhis2/core:2.43.0.0-rc@sha256:f95e0dd187613483972433020ff714ef14d1cc4ddf442d8e0a7f9fe6f63aee55`)

Sweet spot: **6 users** (best trade-off across all three programs). All runs had 0 KO.

MNCH / PNC import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 1.30 | 1217 | [24566167645](https://github.com/dhis2/dhis2-core/actions/runs/24566167645) |
| 2 | 1.97 | 1790 | [24555265579](https://github.com/dhis2/dhis2-core/actions/runs/24555265579) |
| 4 | 2.52 | 3386 | [24555267507](https://github.com/dhis2/dhis2-core/actions/runs/24555267507) |
| 5 | 3.03 | 3270 | [24555269466](https://github.com/dhis2/dhis2-core/actions/runs/24555269466) |
| **6** | **3.78** | **2897** | [24555271744](https://github.com/dhis2/dhis2-core/actions/runs/24555271744) |
| 7 | 3.08 | 4861 | [24555273620](https://github.com/dhis2/dhis2-core/actions/runs/24555273620) |
| 8 | 3.05 | 5706 | [24555275573](https://github.com/dhis2/dhis2-core/actions/runs/24555275573) |

Child Programme import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 3.15 | 417 | [24566167645](https://github.com/dhis2/dhis2-core/actions/runs/24566167645) |
| 2 | 5.36 | 583 | [24555265579](https://github.com/dhis2/dhis2-core/actions/runs/24555265579) |
| 4 | 7.15 | 1056 | [24555267507](https://github.com/dhis2/dhis2-core/actions/runs/24555267507) |
| 5 | 8.65 | 1014 | [24555269466](https://github.com/dhis2/dhis2-core/actions/runs/24555269466) |
| 6 | 10.48 | 867 | [24555271744](https://github.com/dhis2/dhis2-core/actions/runs/24555271744) |
| **7** | **10.80** | **1128** | [24555273620](https://github.com/dhis2/dhis2-core/actions/runs/24555273620) |
| 8 | 10.31 | 1540 | [24555275573](https://github.com/dhis2/dhis2-core/actions/runs/24555275573) |

ANC visit import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 3.36 | 620 | [24566167645](https://github.com/dhis2/dhis2-core/actions/runs/24566167645) |
| 2 | 5.50 | 796 | [24555265579](https://github.com/dhis2/dhis2-core/actions/runs/24555265579) |
| 4 | 6.88 | 1469 | [24555267507](https://github.com/dhis2/dhis2-core/actions/runs/24555267507) |
| 5 | 9.11 | 1215 | [24555269466](https://github.com/dhis2/dhis2-core/actions/runs/24555269466) |
| **6** | **9.97** | **1324** | [24555271744](https://github.com/dhis2/dhis2-core/actions/runs/24555271744) |
| 7 | 9.15 | 2285 | [24555273620](https://github.com/dhis2/dhis2-core/actions/runs/24555273620) |
| 8 | 9.17 | 2304 | [24555275573](https://github.com/dhis2/dhis2-core/actions/runs/24555275573) |

**2.42.4** (image `dhis2/core:2.42.4`)

Highest concurrency measured: **4 users**. Throughput is still climbing mildly 1→2→4, but p95 is already several seconds so we stopped there. All runs 0 KO.

MNCH / PNC import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 0.37 | 3581 | [24566169785](https://github.com/dhis2/dhis2-core/actions/runs/24566169785) |
| 2 | 0.56 | 4503 | [24564635144](https://github.com/dhis2/dhis2-core/actions/runs/24564635144) |
| **4** | **0.76** | **6696** | [24564636860](https://github.com/dhis2/dhis2-core/actions/runs/24564636860) |

Child Programme import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 0.84 | 1326 | [24566169785](https://github.com/dhis2/dhis2-core/actions/runs/24566169785) |
| 2 | 1.24 | 1752 | [24564635144](https://github.com/dhis2/dhis2-core/actions/runs/24564635144) |
| **4** | **1.71** | **2479** | [24564636860](https://github.com/dhis2/dhis2-core/actions/runs/24564636860) |

ANC visit import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 1.08 | 1080 | [24566169785](https://github.com/dhis2/dhis2-core/actions/runs/24566169785) |
| 2 | 1.64 | 1653 | [24564635144](https://github.com/dhis2/dhis2-core/actions/runs/24564635144) |
| **4** | **2.13** | **2460** | [24564636860](https://github.com/dhis2/dhis2-core/actions/runs/24564636860) |

**2.41.8** (image `dhis2/core:2.41.8`)

Highest concurrency measured: **4 users**, same shape as 2.42.4. All runs 0 KO.

MNCH / PNC import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 0.44 | 2703 | [24566171631](https://github.com/dhis2/dhis2-core/actions/runs/24566171631) |
| 2 | 0.62 | 4362 | [24564643009](https://github.com/dhis2/dhis2-core/actions/runs/24564643009) |
| **4** | **0.72** | **7033** | [24564644824](https://github.com/dhis2/dhis2-core/actions/runs/24564644824) |

Child Programme import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 1.05 | 1097 | [24566171631](https://github.com/dhis2/dhis2-core/actions/runs/24566171631) |
| 2 | 1.61 | 1473 | [24564643009](https://github.com/dhis2/dhis2-core/actions/runs/24564643009) |
| **4** | **2.13** | **2061** | [24564644824](https://github.com/dhis2/dhis2-core/actions/runs/24564644824) |

ANC visit import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 1.26 | 939 | [24566171631](https://github.com/dhis2/dhis2-core/actions/runs/24566171631) |
| 2 | 2.00 | 1149 | [24564643009](https://github.com/dhis2/dhis2-core/actions/runs/24564643009) |
| **4** | **2.39** | **2102** | [24564644824](https://github.com/dhis2/dhis2-core/actions/runs/24564644824) |

**Summary.**

Throughput at each version's best concurrency (2.43 at 6 users, 2.42.4 and 2.41.8 at 4):

| Program | 2.43.0 req/s | 2.42.4 req/s | 2.41.8 req/s | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 3.78 | 0.76 | 0.72 | +397% | +425% |
| Child | 10.48 | 1.71 | 2.13 | +513% | +392% |
| ANC | 9.97 | 2.13 | 2.39 | +368% | +317% |

p95 at the same concurrency levels:

| Program | 2.43.0 p95 | 2.42.4 p95 | 2.41.8 p95 | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 2897 | 6696 | 7033 | -57% | -59% |
| Child | 867 | 2479 | 2061 | -65% | -58% |
| ANC | 1324 | 2460 | 2102 | -46% | -37% |

##### Soak test

30 min per program (90 min total per version) at each version's best concurrency (from the [concurrency sweep](#concurrency-sweep)) to verify throughput holds as the DB grows.

**2.43.0** (6 users, 30 min per program, 0 KO): [run 24566213531](https://github.com/dhis2/dhis2-core/actions/runs/24566213531)

| Program | Requests | Entities | req/s | p95 (ms) | vs short-run (300s) p95 |
|---|---|---|---|---|---|
| MNCH | 6,500 | 3,217,500 | 3.60 | 3,614 | +25% |
| Child | 13,895 | 6,947,500 | 7.71 | 1,587 | +83% |
| ANC | 14,602 | 7,301,000 | 8.10 | 1,895 | +43% |

17.5M entities imported across the 90-min run. Throughput stays within 5-8% of the short-run peak, p95 rises gradually as the DB grows but stays within a single-digit multiple of the short-run values.

**2.42.4** (4 users, 30 min per program, 0 KO): [run 24599094193](https://github.com/dhis2/dhis2-core/actions/runs/24599094193)

| Program | Requests | Entities | req/s | p95 (ms) | vs short-run (300s) p95 |
|---|---|---|---|---|---|
| MNCH | 989 | 489,555 | 0.55 | 10,614 | +59% |
| Child | 3,059 | 1,529,500 | 1.70 | 3,177 | +28% |
| ANC | 3,380 | 1,690,000 | 1.88 | 3,240 | +32% |

3.7M entities in the 90-min run.

**2.41.8** (4 users, 30 min per program, 0 KO): [run 24599094195](https://github.com/dhis2/dhis2-core/actions/runs/24599094195)

| Program | Requests | Entities | req/s | p95 (ms) | vs short-run (300s) p95 |
|---|---|---|---|---|---|
| MNCH | 1,381 | 683,595 | 0.77 | 6,572 | -7% |
| Child | 2,691 | 1,345,500 | 1.49 | 3,172 | +54% |
| ANC | 3,339 | 1,669,500 | 1.85 | 2,521 | +20% |

3.7M entities in the 90-min run.

**Summary.**

2.43 imports **4.7x more entities** in the same wall time (17.5M vs 3.7M): **4-6x more throughput with 25-66% lower p95**.

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

##### DB connection pool

2.43 defaults to HikariCP; 2.42.4 and 2.41.8 default to c3p0. Either can be overridden with `db.pool.type` in `dhis.conf`. We measured the non-default pool on 2.43 and on 2.42.4.

**2.43: HikariCP (default) vs c3p0.** c3p0 on 2.43 peaks slightly higher in concurrency (7 users vs HikariCP's 6) but delivers up to 12% less throughput and 18-35% higher p95 across all three programs. HikariCP is the recommended default; users who opt into c3p0 get most of the 2.43 improvements but with more tail latency.

| Users | Pool | MNCH req/s | MNCH p95 | Child req/s | Child p95 | ANC req/s | ANC p95 |
|---|---|---|---|---|---|---|---|
| 2 | HikariCP | 1.97 | 1,790 | 5.36 | 583 | 5.50 | 796 |
| 2 | c3p0 | 1.85 | 1,970 | 5.28 | 505 | 5.23 | 853 |
| 4 | HikariCP | 2.52 | 3,386 | 7.15 | 1,056 | 6.88 | 1,469 |
| 4 | c3p0 | 2.35 | 3,835 | 6.92 | 1,115 | 6.17 | 1,680 |
| 6 | HikariCP | 3.78 | 2,897 | 10.48 | 867 | 9.97 | 1,324 |
| 6 | c3p0 | 2.81 | 4,839 | 9.71 | 997 | 8.88 | 1,740 |
| 7 | HikariCP | 3.08 | 4,861 | 10.80 | 1,128 | 9.15 | 2,285 |
| 7 | c3p0 | 3.37 | 4,441 | 10.71 | 1,091 | 10.19 | 1,605 |

At each pool's own sweet spot (HikariCP 6u, c3p0 7u):

| Program | HikariCP req/s | c3p0 req/s | Δ | HikariCP p95 | c3p0 p95 | Δ |
|---|---|---|---|---|---|---|
| MNCH | 3.78 | 3.37 | +12% | 2,897 | 4,441 | -35% |
| Child | 10.48 | 10.71 | -2% | 867 | 1,091 | -21% |
| ANC | 9.97 | 10.19 | -2% | 1,324 | 1,605 | -18% |

c3p0 runs on 2.43: [2u](https://github.com/dhis2/dhis2-core/actions/runs/24620867667), [4u](https://github.com/dhis2/dhis2-core/actions/runs/24620868345), [6u](https://github.com/dhis2/dhis2-core/actions/runs/24620869073), [7u](https://github.com/dhis2/dhis2-core/actions/runs/24620869806).

**2.42.4: c3p0 (default) vs HikariCP.** On 2.42.4 the pool switch is a small win (~2-5% throughput at matched concurrency). The sweet spot stays at 4 users. It does not close the gap to 2.43: the bulk of the improvement in 2.43 comes from the import path changes listed below, not the pool.

| Users | Pool | MNCH req/s | MNCH p95 | Child req/s | Child p95 | ANC req/s | ANC p95 |
|---|---|---|---|---|---|---|---|
| 2 | c3p0 | 0.56 | 4,503 | 1.24 | 1,752 | 1.64 | 1,653 |
| 2 | hikari | 0.58 | 4,267 | 1.31 | 1,699 | 1.68 | 1,475 |
| 4 | c3p0 | 0.76 | 6,696 | 1.71 | 2,479 | 2.13 | 2,460 |
| 4 | hikari | 0.78 | 6,378 | 1.80 | 2,347 | 2.22 | 2,574 |
| 6 | hikari | 0.88 | 9,140 | 1.92 | 3,502 | 2.33 | 3,506 |

hikari runs on 2.42.4: [2u](https://github.com/dhis2/dhis2-core/actions/runs/24601217263), [4u](https://github.com/dhis2/dhis2-core/actions/runs/24601218072), [6u](https://github.com/dhis2/dhis2-core/actions/runs/24601218816).

##### What changed

Key import optimizations in 2.43. Most are backported to 2.42/2.41 (shipping in 2.42.5 / 2.41.9); HikariCP as default is **not** backported. Check each Jira for exact backport status.

| Issue | Description |
|---|---|
| [DHIS2-21271](https://dhis2.atlassian.net/browse/DHIS2-21271) | Skip audit JMS pipeline when no consumer exists |
| [DHIS2-21239](https://dhis2.atlassian.net/browse/DHIS2-21239) | Batch changelog inserts via multi-row INSERT |
| [DHIS2-21248](https://dhis2.atlassian.net/browse/DHIS2-21248) | Reduce JSONB serialization overhead for event data values |
| [DHIS2-21234](https://dhis2.atlassian.net/browse/DHIS2-21234) | Validate option sets using preheated data instead of DB queries |
| [DHIS2-21177](https://dhis2.atlassian.net/browse/DHIS2-21177) | Batch-fetch user group members before notification dispatch |
| [DHIS2-21287](https://dhis2.atlassian.net/browse/DHIS2-21287) | Replace linear scans with indexed lookups in validation |
| [DHIS2-21178](https://dhis2.atlassian.net/browse/DHIS2-21178) | Reduce allocations for program rules evaluation |
| [DHIS2-21245](https://dhis2.atlassian.net/browse/DHIS2-21245) | Analyze rules before running to limit context |
| | HikariCP default connection pool (replaces c3p0) |

#### Export

Each version first runs a deterministic seed (1 user, 50 entities per request, 1000 requests per program = 50k per program, 150k total) to bring all three versions to the same DB state. Export then runs with the `load` profile at N concurrent users for 300s per scenario.

> The Sierra Leone demo DB has comparatively little data in the three programs the test exports from: ~19k TEs in Child Programme and just 3 events in the ANC event program at baseline (see [Baseline DB](#baseline-db)). The seed step adds 50k entities per program, which is enough to differentiate version behavior on the query paths but still modest compared to production-scale databases. Treat absolute numbers here as indicative; relative differences between versions on the same DB are fair to compare.

##### 1-user export (same-seeded DB)

1-user p95 on the same seeded DB. All runs 0 KO. Each request runs 100 times; `Get relationships for first event` runs 200 times (appears in both export scenarios). Runs: [2.43.0](https://github.com/dhis2/dhis2-core/actions/runs/24599249365), [2.42.4](https://github.com/dhis2/dhis2-core/actions/runs/24599249376), [2.41.8](https://github.com/dhis2/dhis2-core/actions/runs/24599249364).

##### Event program (ANC visit) queries

| Request | 2.43.0 p95 | 2.42.4 p95 | 2.41.8 p95 | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| Go to first page | 156 | 16,846 | 1,980 | **-99.1%** | **-92.1%** |
| Go to second page | 158 | 16,887 | 1,974 | **-99.1%** | **-92.0%** |
| Search not assigned | 150 | 17,246 | 1,979 | **-99.1%** | **-92.4%** |
| Search by date range | 703 | 2,080 | 280 | -66.2% | +151% |
| Get first event | 40 | 47 | 14 | -15% | +186% |
| Get relationships for first event | 4 | 4 | 3 | 0% | +33% |

Listing and filtering single events on 2.43 is ~100x faster than 2.42.4 and ~12x faster than 2.41.8. Relevant 2.43 changes on the single event path include the default order change ([DHIS2-20991](https://dhis2.atlassian.net/browse/DHIS2-20991)) and the event query join eliminations ([DHIS2-20922](https://dhis2.atlassian.net/browse/DHIS2-20922), [DHIS2-20891](https://dhis2.atlassian.net/browse/DHIS2-20891)); we did not profile these runs to isolate each change's contribution.

Single-item fetches (`Get first event`, relationship lookups) are fast on all versions, and 2.41 is a few ms faster than 2.43 on these. The seeded data contains no relationships, so relationship queries are cheap by construction.

##### Tracker program (Child Programme) queries

| Request | 2.43.0 p95 | 2.42.4 p95 | 2.41.8 p95 | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| Get first page of TEs | 106 | 224 | 65 | -53% | +63% |
| Get TEs with enrollment status | 137 | 331 | 174 | -59% | -21% |
| Get TEs from events | 8 | 42 | 9 | -81% | -11% |
| Search TE by name (like) | 125 | 183 | 134 | -32% | -7% |
| Search TE by name (eq) | 26 | 39 | 26 | -33% | 0% |
| Search Birth events | 1,296 | 117 | 87 | +1008% | +1390% |
| Not found TE by name (like) | 109 | 115 | 124 | -5% | -12% |
| Not found TE by name (eq) | 6 | 10 | 15 | -40% | -60% |
| Get first tracked entity | 27 | 41 | 23 | -34% | +17% |
| Get first enrollment | 20 | 21 | 12 | -5% | +67% |
| Get first event from enrollment | 24 | 47 | 13 | -49% | +85% |
| Get relationships for first TE | 4 | 5 | 3 | -20% | +33% |

Tracker queries on 2.43 are consistently faster than 2.42.4. Against 2.41 the picture is mixed: most listing queries improve slightly or stay flat, a few single-item fetches measure 10-70 ms slower on 2.43. We have not characterised run-to-run variance on this pipeline, so small deltas should not be read as regressions without repeated runs. **One clear outlier**: `Search Birth events` (filtering tracker events by program stage) is ~10x slower on 2.43 than on 2.41; under investigation and not yet filed.

##### Multi-user export (same-seeded DB)

Export at increasing concurrency on the same seeded DB. 2.43 was run at 2/4/6 users; 2.42.4 and 2.41.8 only at 2/4 because they already show failures at 4. p95 in ms; `KO` means the request hit the 60 s Gatling timeout.

**2.43.0** — [2u](https://github.com/dhis2/dhis2-core/actions/runs/24650125776), [4u](https://github.com/dhis2/dhis2-core/actions/runs/24650127007), [6u](https://github.com/dhis2/dhis2-core/actions/runs/24650128223). All 0 KO.

| Request | 2u | 4u | 6u |
|---|---|---|---|
| Get TEs with enrollment status | 951 | 948 | 5596 |
| Search Birth events | 4106 | 1029 | 15192 |
| Go to first page (ANC) | 13 | 20 | 19 |
| Go to second page (ANC) | 36 | 40 | 40 |
| Search not assigned (ANC) | 28 | 39 | 38 |
| Search TE by name (like) | 854 | 894 | 1049 |

**2.42.4** — [2u](https://github.com/dhis2/dhis2-core/actions/runs/24650129500), [4u](https://github.com/dhis2/dhis2-core/actions/runs/24650130673). 3 KOs at 4u (all on ANC listings).

| Request | 2u | 4u |
|---|---|---|
| Get TEs with enrollment status | 793 | 928 |
| Search Birth events | 2487 | 7088 |
| Go to first page (ANC) | 60001 | 60001 |
| Go to second page (ANC) | 60001 | 60000 |
| Search not assigned (ANC) | 60001 | 59935 |
| Search TE by name (like) | 723 | 1445 |

**2.41.8** — [2u](https://github.com/dhis2/dhis2-core/actions/runs/24650132188), [4u](https://github.com/dhis2/dhis2-core/actions/runs/24650133459). 24 KOs at 4u (all on ANC listings).

| Request | 2u | 4u |
|---|---|---|
| Get TEs with enrollment status | 121 | 3171 |
| Search Birth events | 508 | 28006 |
| Go to first page (ANC) | 39989 | 60001 |
| Go to second page (ANC) | 39684 | 60002 |
| Search not assigned (ANC) | 39735 | 60003 |
| Search TE by name (like) | 104 | 2544 |
| Not found TE by name (like) | 450 | 29258 |

2.43 is the only version that holds up at 4+ export users on this test mix. The root cause of the 2.42/2.41 ANC failures is not profiled here; candidates include the event query paths that 2.43 addresses via [DHIS2-20991](https://dhis2.atlassian.net/browse/DHIS2-20991) and the event query join eliminations, or connection pool exhaustion.

## Bugs

**[DHIS2-20611](https://dhis2.atlassian.net/browse/DHIS2-20611): Enforce check on null usernames**
Components: _[API] User_

Under certain circumstances, users may have a `null` username. In this version, we will disable
such users and reasssign a username like `missing_uname_` + random UUID string. Additionally, a
database constraint will be added to prevent creation of users with a `null` username.

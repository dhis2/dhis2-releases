# Tracker performance (2.43)

This document backs the [tracker performance summary](ReleaseNote-2.43.md#tracker) in the 2.43 release notes with the test methodology, raw measurements, and per-issue change list.

## Method

All tests use the [TrackerTest](https://github.com/dhis2/dhis2-core/blob/0bce5b265e8c2d339a8d612b2b880ef2cb271756/dhis-2/dhis-test-performance/src/test/java/org/hisp/dhis/test/tracker/TrackerTest.java) Gatling simulation from `dhis-2/dhis-test-performance`, pinned to master commit [`0bce5b265e8c2d339a8d612b2b880ef2cb271756`](https://github.com/dhis2/dhis2-core/commit/0bce5b265e8c2d339a8d612b2b880ef2cb271756). Runs are executed via the [`performance-tests.yml`](https://github.com/dhis2/dhis2-core/blob/0bce5b265e8c2d339a8d612b2b880ef2cb271756/.github/workflows/performance-tests.yml) workflow. Each run is linked by GitHub Actions run ID; artifacts (Gatling HTML report, `simulation.csv`, ...) are available for 90 days.

p95 values come from [`gstat` v0.4.0](https://github.com/dhis2/gatling-statistics/releases/tag/v0.4.0) over each run's `simulation.csv`; see [its percentile note](https://github.com/dhis2/gatling-statistics#percentiles) for why these will not exactly match the Gatling HTML report. All p95 values are in milliseconds. The 2.43.0 numbers in this revision of the doc were recomputed with v0.4.0 against the final 2.43.0 image; the 2.42.4 and 2.41.8 numbers were originally computed with v0.2.0 and are unchanged. Percentile values are stable across the two versions for the data used here.

Request counts and throughput (req/s) in the [Import](#import) tables are computed directly from `simulation.csv`, **per program**: `count / (max(end_timestamp) − min(start_timestamp))` over that program's rows only. The import scenario runs MNCH → Child → ANC sequentially, so each program is active for ~1/3 of the total run wall time. The per-program span captures the rate the system sustained while that program was being driven. This is **not** what Gatling's HTML report or `gstat req_per_sec` show: both use the whole-run window as denominator, so the per-program rates in the import tables are ~3x higher than the whole-run numbers Gatling and `gstat` report. The [Export](#export) tables do not report throughput.

`gstat` computes percentiles over **all** request rows (OK and KO together), matching the Gatling HTML report. A cell shows `-` when every iteration KO'd at the 60s timeout. Cells near 60,000 ms reflect timeout artifacts, not server response time; per-section KO totals call out which rows are affected.

All percentage deltas in this document use `(new − old) / old`. In column headers like "2.43 vs 2.42", the first version is `new` and the second is `old` (baseline). Positive throughput deltas mean faster; negative p95 deltas mean faster.

### Versions

| Version | Image | DB_VERSION | Default pool | Notes |
|---|---|---|---|---|
| 2.43.0 | `dhis2/core:2.43.0@sha256:5c077d30fc186ed1b20ebb8bcfc9cf031c83c1e836d36930b92d607bda2d4bde` | 2.42.0 | HikariCP | 2.43.0 at [`0c543cc7776`](https://github.com/dhis2/dhis2-core/commit/0c543cc7776) (2026-05-05). |
| 2.42.4 | `dhis2/core:2.42.4` | 2.42.0 | c3p0 | latest stable 2.42 release |
| 2.41.8 | `dhis2/core:2.41.8` | 2.41.0 | c3p0 | latest stable 2.41 release |

### Server

Self-hosted Linux runner: Intel Xeon E3-1275 v6 @ 3.80GHz, 4 cores / 8 threads, 64 GiB RAM. Docker Compose allocates 4 CPUs and 16 GiB each to the `web` (DHIS2) and `db` (PostgreSQL) containers. Both containers run on the same machine.

### DHIS2 configuration

`dhis.conf` is the [default from the performance test module](https://github.com/dhis2/dhis2-core/blob/0bce5b265e8c2d339a8d612b2b880ef2cb271756/dhis-2/dhis-test-performance/docker/dhis.conf):

```properties
connection.dialect = org.hibernate.dialect.PostgreSQLDialect
connection.driver_class = org.postgresql.Driver
connection.url = jdbc:postgresql://db/dhis
connection.username = dhis
connection.password = dhis

system.update_notifications_enabled = off
```

### Warmup

Each run executes the full simulation once as warmup (`WARMUP=1`, the workflow default). Reported numbers are from the measured run only.

### Baseline DB

TrackerTest exercises three programs in the Sierra Leone 2.42.0 dump. All three are sparsely populated, so the import tests run directly on this DB to measure the cost of inserting into a near-empty dataset; the export tests run against a re-seeded DB (see [Export](#export)) so read paths are measured on a larger dataset.

| Program | Type | TEs | Enrollments | Events |
|---|---|---|---|---|
| MNCH / PNC (`uy2gU8kT1jF`) | tracker program | 3 | 3 | 14 |
| Child Programme (`IpHINAT79UW`) | tracker program | 19,030 | 19,031 | 37,643 |
| ANC visit (`lxAQ7Zs9VYR`) | event program | - | - | 3 |

Totals across all programs in the dump: 73,125 tracked entities, 73,133 enrollments, 373,597 events, 1,069,732 attribute values.

### Import payload

Import data is pre-generated [Synthea](https://github.com/synthetichealth/synthea) synthetic patient data:

| Program | Entities per patient (or event) | Breakdown |
|---|---|---|
| MNCH / PNC | 9 | 1 TE + 2 enrollments + 6 events |
| Child Programme | 4 | 1 TE + 1 enrollment + 2 events |
| ANC visit | 1 | 1 event (no TE, no enrollment) |

Each import request posts ~500 entities to `POST /api/tracker?async=false`, so one request imports ~55 MNCH patients, ~125 Child patients, or 500 ANC events. Throughput and p95 differ between programs regardless of version because the per-request work differs.

Programs are imported sequentially (MNCH → Child → ANC).

### How to reproduce

Trigger a single load run via `performance-tests.yml`. The `perf_tests_git_ref` pins the TrackerTest source code; `DHIS2_IMAGE` pins the server under test. Example for 2.43.0:

```sh
gh workflow run performance-tests.yml \
  --repo dhis2/dhis2-core \
  --field perf_tests_git_ref="0bce5b265e8c2d339a8d612b2b880ef2cb271756" \
  --field test_name="import-2.43.0-7users-30min" \
  --field test_env="DHIS2_IMAGE=dhis2/core:2.43.0@sha256:5c077d30fc186ed1b20ebb8bcfc9cf031c83c1e836d36930b92d607bda2d4bde
DB_VERSION=2.42.0
SIMULATION_CLASS=org.hisp.dhis.test.tracker.TrackerTest
MVN_ARGS='-DtestMode=import -DimportUsers=7 -DimportDurationSec=1800'"
```

Substitute `DHIS2_IMAGE`, `DB_VERSION` (see [Versions](#versions)), `importUsers`, and `importDurationSec` for other scenarios. The c3p0 runs in the [DB connection pool](#db-connection-pool) section use a different `perf_tests_git_ref` (`8ff23e1760ace5a8295f59c9e79ff10a619ddb8c`) which adds `db.pool.type = c3p0` to the perf test `dhis.conf`; the export multi-user runs use ref `cc753e90e118d9727d111b7fb4fdba0033c476af` (the predecessor that allowed seeding the DB inline via `-DimportRequestsPerUser`).

## Import

Models a bulk-import workload: posts large batches to `POST /api/tracker`. Runs are duration-based: `importUsers` concurrent users loop over import requests for `importDurationSec` seconds per program.

### Concurrency sweep

5-min runs per concurrency level to find each program's throughput plateau. 2.43.0 scales further than 2.42.4 and 2.41.8, which saturate early; beyond ~4 users the older versions only gain p95, no throughput.

**2.43.0** (image `dhis2/core:2.43.0@sha256:5c077d30fc186ed1b20ebb8bcfc9cf031c83c1e836d36930b92d607bda2d4bde`)

Sweet spot: **7 users** (best trade-off across all three programs; MNCH and ANC peak at 7u, Child is still climbing slowly through 8u but with worse p95). All runs had 0 KO.

MNCH / PNC import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 1.26 | 1363 | [25475748072](https://github.com/dhis2/dhis2-core/actions/runs/25475748072) |
| 2 | 2.08 | 1597 | [25475749097](https://github.com/dhis2/dhis2-core/actions/runs/25475749097) |
| 4 | 2.85 | 3024 | [25475750207](https://github.com/dhis2/dhis2-core/actions/runs/25475750207) |
| 5 | 3.06 | 3506 | [25475751310](https://github.com/dhis2/dhis2-core/actions/runs/25475751310) |
| 6 | 3.36 | 3451 | [25475752291](https://github.com/dhis2/dhis2-core/actions/runs/25475752291) |
| **7** | **3.79** | **4021** | [25475753301](https://github.com/dhis2/dhis2-core/actions/runs/25475753301) |
| 8 | 3.30 | 5581 | [25475754313](https://github.com/dhis2/dhis2-core/actions/runs/25475754313) |

Child Programme import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 3.16 | 458 | [25475748072](https://github.com/dhis2/dhis2-core/actions/runs/25475748072) |
| 2 | 5.53 | 467 | [25475749097](https://github.com/dhis2/dhis2-core/actions/runs/25475749097) |
| 4 | 7.55 | 921 | [25475750207](https://github.com/dhis2/dhis2-core/actions/runs/25475750207) |
| 5 | 8.13 | 1150 | [25475751310](https://github.com/dhis2/dhis2-core/actions/runs/25475751310) |
| 6 | 10.19 | 965 | [25475752291](https://github.com/dhis2/dhis2-core/actions/runs/25475752291) |
| **7** | **10.39** | **1236** | [25475753301](https://github.com/dhis2/dhis2-core/actions/runs/25475753301) |
| 8 | 11.07 | 1330 | [25475754313](https://github.com/dhis2/dhis2-core/actions/runs/25475754313) |

ANC visit import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 3.41 | 596 | [25475748072](https://github.com/dhis2/dhis2-core/actions/runs/25475748072) |
| 2 | 5.75 | 647 | [25475749097](https://github.com/dhis2/dhis2-core/actions/runs/25475749097) |
| 4 | 7.49 | 1270 | [25475750207](https://github.com/dhis2/dhis2-core/actions/runs/25475750207) |
| **5** | **8.98** | **1214** | [25475751310](https://github.com/dhis2/dhis2-core/actions/runs/25475751310) |
| 6 | 9.17 | 1749 | [25475752291](https://github.com/dhis2/dhis2-core/actions/runs/25475752291) |
| 7 | 9.98 | 1786 | [25475753301](https://github.com/dhis2/dhis2-core/actions/runs/25475753301) |
| 8 | 9.63 | 2302 | [25475754313](https://github.com/dhis2/dhis2-core/actions/runs/25475754313) |

**2.42.4** (image `dhis2/core:2.42.4`)

Highest concurrency measured: **4 users**. Throughput is still climbing mildly 1→2→4, but p95 is already several seconds so we stopped there. All runs 0 KO.

MNCH / PNC import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 0.37 | 3536 | [24566169785](https://github.com/dhis2/dhis2-core/actions/runs/24566169785) |
| 2 | 0.56 | 4472 | [24564635144](https://github.com/dhis2/dhis2-core/actions/runs/24564635144) |
| **4** | **0.76** | **6667** | [24564636860](https://github.com/dhis2/dhis2-core/actions/runs/24564636860) |

Child Programme import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 0.84 | 1326 | [24566169785](https://github.com/dhis2/dhis2-core/actions/runs/24566169785) |
| 2 | 1.24 | 1742 | [24564635144](https://github.com/dhis2/dhis2-core/actions/runs/24564635144) |
| **4** | **1.71** | **2474** | [24564636860](https://github.com/dhis2/dhis2-core/actions/runs/24564636860) |

ANC visit import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 1.08 | 1068 | [24566169785](https://github.com/dhis2/dhis2-core/actions/runs/24566169785) |
| 2 | 1.64 | 1652 | [24564635144](https://github.com/dhis2/dhis2-core/actions/runs/24564635144) |
| **4** | **2.13** | **2468** | [24564636860](https://github.com/dhis2/dhis2-core/actions/runs/24564636860) |

**2.41.8** (image `dhis2/core:2.41.8`)

Highest concurrency measured: **4 users**, same shape as 2.42.4. All runs 0 KO.

MNCH / PNC import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 0.44 | 2699 | [24566171631](https://github.com/dhis2/dhis2-core/actions/runs/24566171631) |
| 2 | 0.62 | 4307 | [24564643009](https://github.com/dhis2/dhis2-core/actions/runs/24564643009) |
| **4** | **0.72** | **7016** | [24564644824](https://github.com/dhis2/dhis2-core/actions/runs/24564644824) |

Child Programme import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 1.05 | 1096 | [24566171631](https://github.com/dhis2/dhis2-core/actions/runs/24566171631) |
| 2 | 1.61 | 1471 | [24564643009](https://github.com/dhis2/dhis2-core/actions/runs/24564643009) |
| **4** | **2.13** | **2062** | [24564644824](https://github.com/dhis2/dhis2-core/actions/runs/24564644824) |

ANC visit import:

| users | req/s | p95 (ms) | run |
|---|---|---|---|
| 1 | 1.26 | 934 | [24566171631](https://github.com/dhis2/dhis2-core/actions/runs/24566171631) |
| 2 | 2.00 | 1142 | [24564643009](https://github.com/dhis2/dhis2-core/actions/runs/24564643009) |
| **4** | **2.39** | **2104** | [24564644824](https://github.com/dhis2/dhis2-core/actions/runs/24564644824) |

**Summary.**

Throughput at each version's best concurrency (2.43 at 7 users, 2.42.4 and 2.41.8 at 4):

| Program | 2.43.0 req/s | 2.42.4 req/s | 2.41.8 req/s | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 3.79 | 0.76 | 0.72 | +399% | +426% |
| Child | 10.39 | 1.71 | 2.13 | +507% | +388% |
| ANC | 9.98 | 2.13 | 2.39 | +369% | +318% |

p95 at the same concurrency levels:

| Program | 2.43.0 p95 | 2.42.4 p95 | 2.41.8 p95 | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 4021 | 6667 | 7016 | -40% | -43% |
| Child | 1236 | 2474 | 2062 | -50% | -40% |
| ANC | 1786 | 2468 | 2104 | -28% | -15% |

### Soak test

30 min per program (90 min total per version) at each version's best concurrency (from the [concurrency sweep](#concurrency-sweep)) to verify throughput holds as the DB grows.

**2.43.0** (6 users, 30 min per program, 0 KO): [run 25489782293](https://github.com/dhis2/dhis2-core/actions/runs/25489782293)

The 2.43.0 soak was run at 6 users to match the original methodology; the final-image short-run sweet spot is 7 users (see [concurrency sweep](#concurrency-sweep)), so this soak is at one user below the new peak.

| Program | Requests | Entities | req/s | p95 (ms) | vs short-run (300s) p95 |
|---|---|---|---|---|---|
| MNCH | 6,460 | 3,230,000 | 3.59 | 3,620 | +5% |
| Child | 13,771 | 6,885,500 | 7.65 | 1,612 | +67% |
| ANC | 14,602 | 7,301,000 | 8.11 | 1,892 | +8% |

17.4M entities imported across the 90-min run. Throughput stays within a few percent of the 6u short-run peak (3.36/10.19/9.17 → 3.59/7.65/8.11); MNCH and ANC even nudge slightly higher, Child drops 25% as its DB grows fastest. p95 rises modestly for MNCH and ANC but climbs 67% for Child.

**2.42.4** (4 users, 30 min per program, 0 KO): [run 24599094195](https://github.com/dhis2/dhis2-core/actions/runs/24599094195)

| Program | Requests | Entities | req/s | p95 (ms) | vs short-run (300s) p95 |
|---|---|---|---|---|---|
| MNCH | 1,381 | 683,595 | 0.77 | 6,572 | -1% |
| Child | 2,691 | 1,345,500 | 1.49 | 3,174 | +28% |
| ANC | 3,339 | 1,669,500 | 1.85 | 2,523 | +2% |

3.7M entities in the 90-min run.

**2.41.8** (4 users, 30 min per program, 0 KO): [run 24599094193](https://github.com/dhis2/dhis2-core/actions/runs/24599094193)

| Program | Requests | Entities | req/s | p95 (ms) | vs short-run (300s) p95 |
|---|---|---|---|---|---|
| MNCH | 989 | 489,555 | 0.55 | 10,607 | +51% |
| Child | 3,059 | 1,529,500 | 1.70 | 3,178 | +54% |
| ANC | 3,380 | 1,690,000 | 1.88 | 3,235 | +54% |

3.7M entities in the 90-min run.

**Summary.**

2.43 imports **4.7x more entities** in the same wall time (17.4M vs 3.7M): **4-6x more throughput with 25-66% lower p95**.

| Program | 2.43.0 req/s | 2.42.4 req/s | 2.41.8 req/s | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 3.59 | 0.77 | 0.55 | +366% | +553% |
| Child | 7.65 | 1.49 | 1.70 | +413% | +350% |
| ANC | 8.11 | 1.85 | 1.88 | +338% | +331% |

| Program | 2.43.0 p95 | 2.42.4 p95 | 2.41.8 p95 | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| MNCH | 3,620 | 6,572 | 10,607 | -45% | -66% |
| Child | 1,612 | 3,174 | 3,178 | -49% | -49% |
| ANC | 1,892 | 2,523 | 3,235 | -25% | -42% |

### DB connection pool

2.43 defaults to HikariCP; 2.42.4 and 2.41.8 default to c3p0. Either can be overridden with `db.pool.type` in `dhis.conf`. We measured the non-default pool on 2.43 and on 2.42.4. c3p0 is deprecated and will be removed in a future version (see [DHIS2-13818](https://dhis2.atlassian.net/browse/DHIS2-13818)); see the [HikariCP benchmark](https://github.com/brettwooldridge/HikariCP-benchmark) for background on why HikariCP is generally faster.

**2.43: HikariCP (default) vs c3p0.** At matched concurrency, c3p0 on 2.43 delivers roughly equivalent throughput to HikariCP (within ±18% at the same user count) but consistently worse p95 (5-31% higher across all three programs at the shared 7u sweet spot). HikariCP is the recommended default; users who opt into c3p0 get most of the 2.43 improvements but with more tail latency, particularly on MNCH.

| Users | Pool | MNCH req/s | MNCH p95 | Child req/s | Child p95 | ANC req/s | ANC p95 |
|---|---|---|---|---|---|---|---|
| 2 | HikariCP | 2.08 | 1,597 | 5.53 | 467 | 5.75 | 647 |
| 2 | c3p0 | 1.94 | 1,810 | 5.16 | 576 | 5.43 | 737 |
| 4 | HikariCP | 2.85 | 3,024 | 7.55 | 921 | 7.49 | 1,270 |
| 4 | c3p0 | 2.35 | 3,649 | 6.97 | 1,111 | 6.71 | 1,485 |
| 6 | HikariCP | 3.36 | 3,451 | 10.19 | 965 | 9.17 | 1,749 |
| 6 | c3p0 | 3.00 | 4,178 | 10.19 | 926 | 8.82 | 1,946 |
| 7 | HikariCP | 3.79 | 4,021 | 10.39 | 1,236 | 9.98 | 1,786 |
| 7 | c3p0 | 3.12 | 5,303 | 10.15 | 1,278 | 8.83 | 2,248 |

At the shared 7u sweet spot. Δ is (c3p0 − HikariCP) / HikariCP.

| Program | HikariCP req/s | c3p0 req/s | Δ req/s | HikariCP p95 | c3p0 p95 | Δ p95 |
|---|---|---|---|---|---|---|
| MNCH | 3.79 | 3.12 | -18% | 4,021 | 5,303 | +32% |
| Child | 10.39 | 10.15 | -2% | 1,236 | 1,278 | +3% |
| ANC | 9.98 | 8.83 | -12% | 1,786 | 2,248 | +26% |

c3p0 runs on 2.43 (final image): [2u](https://github.com/dhis2/dhis2-core/actions/runs/25489783967), [4u](https://github.com/dhis2/dhis2-core/actions/runs/25489785785), [6u](https://github.com/dhis2/dhis2-core/actions/runs/25489787335), [7u](https://github.com/dhis2/dhis2-core/actions/runs/25489788792).

**2.42.4: c3p0 (default) vs HikariCP.** On 2.42.4 switching to HikariCP is a small win on throughput (3-5% more) and a small shift on p95 (4-5% lower on MNCH and Child, 3% higher on ANC) at matched concurrency (4u, c3p0's sweet spot). It does not close the gap to 2.43: the bulk of the improvement in 2.43 comes from the import path changes listed below, not the pool.

| Users | Pool | MNCH req/s | MNCH p95 | Child req/s | Child p95 | ANC req/s | ANC p95 |
|---|---|---|---|---|---|---|---|
| 2 | c3p0 | 0.56 | 4,472 | 1.24 | 1,742 | 1.64 | 1,652 |
| 2 | hikari | 0.58 | 4,244 | 1.31 | 1,698 | 1.68 | 1,472 |
| 4 | c3p0 | 0.76 | 6,667 | 1.71 | 2,474 | 2.13 | 2,468 |
| 4 | hikari | 0.78 | 6,370 | 1.80 | 2,347 | 2.22 | 2,549 |
| 6 | hikari | 0.88 | 9,138 | 1.92 | 3,499 | 2.33 | 3,483 |

At c3p0's sweet spot (4u), matched concurrency. Δ is (hikari − c3p0) / c3p0.

| Program | c3p0 req/s | hikari req/s | Δ req/s | c3p0 p95 | hikari p95 | Δ p95 |
|---|---|---|---|---|---|---|
| MNCH | 0.76 | 0.78 | +3% | 6,667 | 6,370 | -4% |
| Child | 1.71 | 1.80 | +5% | 2,474 | 2,347 | -5% |
| ANC | 2.13 | 2.22 | +4% | 2,468 | 2,549 | +3% |

hikari runs on 2.42.4: [2u](https://github.com/dhis2/dhis2-core/actions/runs/24601217263), [4u](https://github.com/dhis2/dhis2-core/actions/runs/24601218072), [6u](https://github.com/dhis2/dhis2-core/actions/runs/24601218816).

### What changed

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

## Export

Models the read traffic a Capture app user generates while navigating the UI. The request mix is derived from the actual HTTP calls the app issues for common flows (opening event lists, searching TEs, opening a TE, viewing enrollments and events). Each version first runs a deterministic seed (1 user, 50 entities per request, 1000 requests per program = 50k per program, 150k total) to bring all three versions to the same DB state. Both export subsections below run against that same seeded DB.

> DB size after seeding is modest compared to production. Treat absolute numbers as indicative; relative differences between versions on the same DB are fair to compare.

### 1-user export (same-seeded DB)

`smoke` profile: single user, each request repeated 100 times sequentially. Isolates per-request cost without concurrency. All runs 0 KO. Runs: [2.43.0](https://github.com/dhis2/dhis2-core/actions/runs/25489790747), [2.42.4](https://github.com/dhis2/dhis2-core/actions/runs/24599249376), [2.41.8](https://github.com/dhis2/dhis2-core/actions/runs/24599249364).

### Event program (ANC visit) queries

| Request | 2.43.0 p95 | 2.42.4 p95 | 2.41.8 p95 | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| Go to first page | 162 | 16,858 | 1,980 | **-99.0%** | **-91.8%** |
| Go to second page | 163 | 16,897 | 1,974 | **-99.0%** | **-91.7%** |
| Search not assigned | 163 | 17,263 | 1,979 | **-99.1%** | **-91.8%** |
| Search by date range | 618 | 2,080 | 280 | -70.3% | +121% |
| Get first event | 37 | 47 | 14 | -21% | +164% |
| Get relationships for first event | 3 | 4 | 3 | -25% | 0% |

The three event listing queries (`Go to first page`, `Go to second page`, `Search not assigned`) on 2.43 are ~100x faster than 2.42.4 and ~12x faster than 2.41.8. `Search by date range` is also faster on 2.43 than 2.42.4 (~3x) but slower than 2.41.8 (618 vs 280 ms). `Get first event` is 37 ms on 2.43 vs 47 on 2.42.4 and 14 on 2.41.8 (+23 ms vs 2.41.8); `Get relationships for first event` is within 1 ms on all three. Relevant 2.43 changes on the single event path include the default order change ([DHIS2-20991](https://dhis2.atlassian.net/browse/DHIS2-20991)) and the single-event query join eliminations ([DHIS2-20891](https://dhis2.atlassian.net/browse/DHIS2-20891)). These were unlocked by [DHIS2-17961](https://dhis2.atlassian.net/browse/DHIS2-17961), which split tracker events and single events into separate tables so each path can be optimized independently.

The seeded data does not include any relationships, so relationship lookup times reflect the cost of an empty-result query path only.

### Tracker program (Child Programme) queries

| Request | 2.43.0 p95 | 2.42.4 p95 | 2.41.8 p95 | 2.43 vs 2.42 | 2.43 vs 2.41 |
|---|---|---|---|---|---|
| Get first page of TEs | 114 | 225 | 65 | -49% | +75% |
| Get TEs with enrollment status | 145 | 331 | 174 | -56% | -17% |
| Get TEs from events | 8 | 42 | 9 | -81% | -11% |
| Search TE by name (like) | 132 | 183 | 134 | -28% | -1% |
| Search TE by name (eq) | 26 | 39 | 26 | -33% | 0% |
| Search Birth events | 1,321 | 117 | 87 | +1029% | +1418% |
| Not found TE by name (like) | 76 | 115 | 124 | -34% | -39% |
| Not found TE by name (eq) | 5 | 10 | 15 | -50% | -67% |
| Get first tracked entity | 27 | 41 | 23 | -34% | +17% |
| Get first enrollment | 19 | 21 | 12 | -10% | +58% |
| Get first event from enrollment | 23 | 47 | 13 | -51% | +77% |
| Get relationships for first TE | 5 | 5 | 3 | 0% | +67% |

Tracker queries on 2.43 are consistently faster than 2.42.4. Tracker-event query join eliminations ([DHIS2-20922](https://dhis2.atlassian.net/browse/DHIS2-20922)) contribute on this path, also unlocked by the tracker/single event table split in [DHIS2-17961](https://dhis2.atlassian.net/browse/DHIS2-17961). Against 2.41 the picture is mixed: 4 queries are faster on 2.43, 2 are within ±2%, and 6 are slower (most by 2-10 ms, with `Get first page of TEs` at +49 ms and the `Search Birth events` outlier called out below). We have not characterised run-to-run variance on this pipeline, so small deltas should not be read as regressions without repeated runs.

**`Search Birth events` bimodal regression.** `Search Birth events` (tracker-event listing filtered by program stage) is ~15x slower on 2.43 than on 2.41.8 at 1 user on the CI runner (1,321 ms vs 87 ms on the final-image smoke run; first observed 2026-04-16 on the RC image at 1,296 ms). Every run shows the same bimodal pattern within itself: the first ~10 requests return in ~90 ms, then the scenario flips to a sustained ~1,300 ms mode for the remainder of the run (chart below). The chart shown is from the original 2026-04-16 RC run; the final 2.43.0 image on 2026-05-07 reproduces the identical shape (8 fast then 92 slow at ~1,300 ms). Investigation of SQL (captured PG queries and Hibernate logs), DB connection pool stats (HikariCP metrics), and GC pauses showed no correlated regression: the server saw no slow queries, the pool had no waiters, and GC pauses were short and uncorrelated. The slow mode did not reproduce locally on the same 2.43 image and an equivalently-seeded DB (p95 ~60 ms across 100 iterations), so the behavior is specific to the self-hosted CI runner. The bimodal briefly stopped reproducing on 2026-04-22 (five reruns p95 13-34 ms) but came back by the time of the final-image runs on 2026-05-07. The root cause is still not identified.

![Search Birth events response times over time (2.43.0 CI smoke run)](images/performance-tracker-search-birth-events-bimodal.png)

Each spike in the chart is one of the 100 `Search Birth events` requests. Response times are strictly bimodal: requests are either ~90 ms or ~1,200 ms, with nothing in between. After the first ~10 fast requests, the scenario transitions into the sustained slow mode.

### Multi-user export (same-seeded DB)

`load` profile: N concurrent users loop through the scenario for 300s per run. 2.43 was run at 2/4/6 users; 2.42.4 and 2.41.8 only at 2/4 because they already show failures at 4. 2.43 is the only version that stays at 0 KO across all concurrency levels measured; at 4 users 2.43 is faster than 2.41.8 on every request (including two that did not execute at all on 2.41.8) and faster than 2.42.4 on most. `KO` counts Gatling-level failures (request hit the 60s timeout or a `.check()` assertion on the response failed).

**2.43.0** runs: [2u](https://github.com/dhis2/dhis2-core/actions/runs/25723839557), [4u](https://github.com/dhis2/dhis2-core/actions/runs/25723841366), [6u](https://github.com/dhis2/dhis2-core/actions/runs/25723843045). All 0 KO.

| Request | 2u p95 | 4u p95 | 6u p95 |
|---|---|---|---|
| Go to first page | 15 | 14 | 19 |
| Go to second page | 40 | 39 | 41 |
| Search not assigned | 38 | 37 | 38 |
| Search by date range | 39 | 38 | 39 |
| Get first event | 87 | 83 | 80 |
| Get relationships for first event | 5 | 4 | 6 |
| Get first page of TEs | 65 | 78 | 93 |
| Get TEs with enrollment status | 1,280 | 1,311 | 1,750 |
| Get TEs from events | 16 | 14 | 42 |
| Search TE by name (like) | 911 | 895 | 1,442 |
| Search TE by name (eq) | 69 | 95 | 90 |
| Search Birth events | 36,623 | 9,979 | 5,089 |
| Not found TE by name (like) | 786 | 762 | 1,003 |
| Not found TE by name (eq) | 22 | 21 | 23 |
| Get first tracked entity | 85 | 61 | 78 |
| Get first enrollment | 24 | 30 | 40 |
| Get first event from enrollment | 63 | 72 | 88 |
| Get relationships for first TE | 5 | 6 | 6 |

**2.42.4** runs: [2u](https://github.com/dhis2/dhis2-core/actions/runs/24650129500), [4u](https://github.com/dhis2/dhis2-core/actions/runs/24650130673). 10 KOs at 2u (all on ANC listings); 13 KOs at 4u (10 on MNCH import 60s timeouts, 3 on ANC listings).

| Request | 2u p95 | 4u p95 |
|---|---|---|
| Go to first page | - | 60,001 |
| Go to second page | - | 59,990 |
| Search not assigned | - | 59,929 |
| Search by date range | 8,605 | 7,503 |
| Get first event | 44 | 62 |
| Get relationships for first event | 8 | 7 |
| Get first page of TEs | 322 | 372 |
| Get TEs with enrollment status | 781 | 858 |
| Get TEs from events | 57 | 116 |
| Search TE by name (like) | 719 | 975 |
| Search TE by name (eq) | 109 | 91 |
| Search Birth events | 2,460 | 5,874 |
| Not found TE by name (like) | 466 | 491 |
| Not found TE by name (eq) | 34 | 29 |
| Get first tracked entity | 80 | 76 |
| Get first enrollment | 23 | 29 |
| Get first event from enrollment | 79 | 76 |
| Get relationships for first TE | 5 | 7 |

`-` = no successful samples (all iterations KO'd at the 60s Gatling timeout). Of the 10 KOs at 2u, all fall in the three ANC listing requests above.

**2.41.8** runs: [2u](https://github.com/dhis2/dhis2-core/actions/runs/24650132188), [4u](https://github.com/dhis2/dhis2-core/actions/runs/24650133459). 24 KOs at 4u (all on ANC listings). At 4u the ANC scenario `Get first event` and `Get relationships for first event` never execute because the scenario picks the event UID from the `Search by date range` response (`saveAs("eventUid")`) and then runs those two inside a `doIf(session.contains("eventUid"))`; `Search by date range` KOs on all 4 iterations at 2.41.8 4u, so no UID is ever saved and the `doIf` block is skipped.

| Request | 2u p95 | 4u p95 |
|---|---|---|
| Go to first page | 39,952 | - |
| Go to second page | 39,641 | - |
| Search not assigned | 39,735 | - |
| Search by date range | 4,987 | - |
| Get first event | 19 | - |
| Get relationships for first event | 6 | - |
| Get first page of TEs | 106 | 2,676 |
| Get TEs with enrollment status | 117 | 2,644 |
| Get TEs from events | 13 | 299 |
| Search TE by name (like) | 93 | 2,539 |
| Search TE by name (eq) | 57 | 925 |
| Search Birth events | 492 | 27,333 |
| Not found TE by name (like) | 446 | 28,990 |
| Not found TE by name (eq) | 24 | 464 |
| Get first tracked entity | 45 | 196 |
| Get first enrollment | 12 | 65 |
| Get first event from enrollment | 38 | 155 |
| Get relationships for first TE | 4 | 65 |

`-` at 4u: all four ANC listing requests KO'd on every iteration with no successful samples; `Get first event` and `Get relationships for first event` are skipped by the `doIf` gate explained above.

**Summary.**

At 2u the four ANC event program requests on 2.43 are tens of ms while 2.42.4 and 2.41.8 are tens of seconds (or KO'd entirely on 2.42.4); outside of those, 2.43 is slower by ≥ 15 ms vs at least one older version on several tracker program requests (notably `Get TEs with enrollment status` +499 ms, `Search TE by name (like)` +192 ms, `Not found TE by name (like)` +320 ms, `Search Birth events` +34 s, where the `Search Birth events` 2u tail is dominated by 3/28 requests that timed out near 36 s; see Birth-events bimodal note below). At 4u 2.43 is faster than 2.41.8 on every request that executed; the ANC scenario `Get first event` and `Get relationships for first event` never execute on 2.41.8 4u because the scenario gates them on a `saveAs` from `Search by date range`, which KOs on every iteration there (see the 2.41.8 table note). 2.43 is faster than 2.42.4 on most 4u requests but slower on five: `Get first event` (+21 ms), `Get TEs with enrollment status` (+453 ms), `Search TE by name (eq)` (+4 ms), `Not found TE by name (like)` (+271 ms), `Search Birth events` (+4,105 ms). The 2.42/2.41 ANC failures under concurrency are not root-caused here; candidates include the single-event query paths that 2.43 addresses via [DHIS2-20991](https://dhis2.atlassian.net/browse/DHIS2-20991) and [DHIS2-20891](https://dhis2.atlassian.net/browse/DHIS2-20891), or connection pool exhaustion.

Matched concurrency:

| Request | 2.43 2u p95 | 2.42 2u p95 | 2.41 2u p95 | 2.43 4u p95 | 2.42 4u p95 | 2.41 4u p95 |
|---|---|---|---|---|---|---|
| Go to first page | 15 | - | 39,952 | 14 | 60,001 | - |
| Go to second page | 40 | - | 39,641 | 39 | 59,990 | - |
| Search not assigned | 38 | - | 39,735 | 37 | 59,929 | - |
| Search by date range | 39 | 8,605 | 4,987 | 38 | 7,503 | - |
| Get first event | 87 | 44 | 19 | 83 | 62 | - |
| Get relationships for first event | 5 | 8 | 6 | 4 | 7 | - |
| Get first page of TEs | 65 | 322 | 106 | 78 | 372 | 2,676 |
| Get TEs with enrollment status | 1,280 | 781 | 117 | 1,311 | 858 | 2,644 |
| Get TEs from events | 16 | 57 | 13 | 14 | 116 | 299 |
| Search TE by name (like) | 911 | 719 | 93 | 895 | 975 | 2,539 |
| Search TE by name (eq) | 69 | 109 | 57 | 95 | 91 | 925 |
| Search Birth events | 36,623 | 2,460 | 492 | 9,979 | 5,874 | 27,333 |
| Not found TE by name (like) | 786 | 466 | 446 | 762 | 491 | 28,990 |
| Not found TE by name (eq) | 22 | 34 | 24 | 21 | 29 | 464 |
| Get first tracked entity | 85 | 80 | 45 | 61 | 76 | 196 |
| Get first enrollment | 24 | 23 | 12 | 30 | 29 | 65 |
| Get first event from enrollment | 63 | 79 | 38 | 72 | 76 | 155 |
| Get relationships for first TE | 5 | 5 | 4 | 6 | 7 | 65 |

**`Search Birth events` under concurrency.** The same request flagged as the 1-user outlier also degrades under concurrency on every version: 2.41.8 went from 87 ms (1u) to 492 ms (2u) to 27.3 s (4u); on the final 2.43.0 image (2026-05-07) p95 is 1,321 ms (1u) → 36,623 ms (2u) → 9,979 ms (4u) → 5,089 ms (6u). The 2.43 numbers are non-monotonic: at 2u 25/28 samples returned in 1-5 s and 3/28 sat near 36 s (essentially Gatling-timeout-adjacent), inflating p95; at 4u and 6u the long tail is shorter and most samples are under 1 s (median 709/712 ms). This is consistent with the bimodal behaviour on the same runner: the slow mode dominates 2u (small sample, less averaging) and is diluted by higher concurrency.

### What changed

Key export optimizations in 2.43, grouped by query path. Unlike the import changes, most of these are not backported. Check each Jira for exact backport status.

| Issue | Description |
|---|---|
| [DHIS2-17961](https://dhis2.atlassian.net/browse/DHIS2-17961) | Split tracker events and single events into separate tables (enabler for the per-path optimizations below) |
| [DHIS2-20991](https://dhis2.atlassian.net/browse/DHIS2-20991) | Change single-event default order to `occurredDate desc` with supporting indices |
| [DHIS2-20891](https://dhis2.atlassian.net/browse/DHIS2-20891) | Optimize `/events` for single events (program-table join elimination, dedicated count query, program-stage filtering, AssignedUser filter) |
| [DHIS2-20922](https://dhis2.atlassian.net/browse/DHIS2-20922) | Optimize `/events` for tracker events (program-table join elimination, dedicated count query, INNER JOIN for filtered attribute values, indexed AssignedUser filter) |
| [DHIS2-20921](https://dhis2.atlassian.net/browse/DHIS2-20921) | Optimize `/enrollments` queries (program/trackedentitytype join elimination on data and count queries) |
| [DHIS2-20863](https://dhis2.atlassian.net/browse/DHIS2-20863) | Optimize `/trackedEntities` queries (program-table join elimination, attribute filtering at SQL level, flattened event subquery, ownership-clause optimization, org-unit paths resolved at query build time, skip `DISTINCT ON` for `enrolledAt` order on `onlyEnrollOnce` programs) |
| [DHIS2-19910](https://dhis2.atlassian.net/browse/DHIS2-19910) | Make field filtering efficient for tracker (avoid serializing fields that are filtered out) |
| [DHIS2-20655](https://dhis2.atlassian.net/browse/DHIS2-20655) | Fix `/trackedEntities` connection pool exhaustion |
| [DHIS2-20512](https://dhis2.atlassian.net/browse/DHIS2-20512) | Exclude tracker read APIs from Open-Session-In-View, freeing DB connections sooner |
| | HikariCP default connection pool (replaces c3p0; see [DB connection pool](#db-connection-pool)) |

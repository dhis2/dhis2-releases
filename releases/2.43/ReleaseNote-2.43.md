# DHIS2 version 43 Release Notes

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

## Performance

### Tracker

> **Note:** These are preliminary results based on pre-release builds. Final numbers will be updated when the 2.43.0 release is published.

Compared against the latest stable 2.42.4 and 2.41.8 releases on the Sierra Leone demo DB:

Import:

* **In a sustained 30-min import at each version's best concurrency, 2.43 imports 17.5M entities vs 3.7M on 2.42.4 / 2.41.8**: 4-6x more throughput with 25-66% lower p95. See [Soak test](tracker-performance.md#soak-test).
* **2.43 scales further before p95 degrades.** It handles 6 concurrent import users comfortably; 2.42.4 and 2.41.8 cap out around 4 on the same hardware. See [Concurrency sweep](tracker-performance.md#concurrency-sweep).
* **Most import improvements are backported** and will ship in 2.42.5 and 2.41.9; see [What changed](tracker-performance.md#what-changed) for the per-issue backport status.
* **The DB connection pool choice matters more on 2.43 than on 2.42** (measured on import). On 2.43, switching from HikariCP (default) to c3p0 drops throughput by up to 11% and raises p95 by 21-53%. On 2.42.4, switching from c3p0 (default) to HikariCP adds 3-5% throughput and lowers p95 by 3-5%. See [DB connection pool](tracker-performance.md#db-connection-pool).

Export:

* **At 1 user the three ANC event program listing queries (`Go to first page`, `Go to second page`, `Search not assigned`) are ~100x faster than 2.42.4 and ~12x faster than 2.41.8.** Tracker program queries are 5-81% faster than 2.42.4 (most in the 30-60% range). Against 2.41.8 the picture is mixed, with one past bimodal regression on `Search Birth events` that is no longer reproducing (see [Export](tracker-performance.md#export)).
* **Under concurrency 2.43 is the only version that stays at 0 KO across all levels measured** (2/4/6 users); 2.42.4 has KOs at 2u and 4u, 2.41.8 at 4u. See [Multi-user export](tracker-performance.md#multi-user-export-same-seeded-db). At matched users:
  * At 4 users, 2.43 is faster than 2.41.8 on every request and faster than 2.42.4 on most (3 requests are 20-260 ms slower on 2.43).
  * At 2 users, only the ANC event program paths are clearly faster on 2.43; several tracker program requests are slower than on 2.42.4 and/or 2.41.8.

See [tracker-performance.md](tracker-performance.md) for the full methodology, raw measurements, and per-issue change list.

## Bugs

**[DHIS2-20611](https://dhis2.atlassian.net/browse/DHIS2-20611): Enforce check on null usernames**
Components: _[API] User_

Under certain circumstances, users may have a `null` username. In this version, we will disable
such users and reasssign a username like `missing_uname_` + random UUID string. Additionally, a
database constraint will be added to prevent creation of users with a `null` username.

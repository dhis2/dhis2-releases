# 2.34 Upgrade Notes

## Tomcat support

- Minimum required Tomcat version is now **8.5.50**. Support for Tomcat 7.0 and 8.0 is now dropped. The main reason for this change is Tomcat 7.0 and 8.0 having several issues with certain application development frameworks (most importantly _Jackson_, used for JSON and XML serialization) used internally by DHIS 2. 

## Web API and Data model

- A new entity and API resource is introduced called `Visualization`, located at `/api/visualizations`. The visualization entity merges the previous `ReportTable` and `Chart` entities and API resources. The corresponding API endpoints `/api/reportTables` and `/api/charts` will be functional for some time but will be removed in the future and we recommend clients to migrate as soon as possible. This also implies that report tables and charts cannot be exchanged between systems using the `/api/metadata` endpoint, instead, metadata should be exchanged as visualizations.

- The `/api/configuration/settings` and `/api/configuration/settings/filter` endpoints have been removed.

## Functionality

- The _continuous execution_ option for jobs in Scheduler app has been removed, as it was often misused and caused significant problems. Instead, jobs can now be of type _fixed delay_ which means they will be invoked with a fixed delay in between each run (such as the new _continuous analytics table_ job).

## Predictor

- Function names in predictor expressions are now case sensitive and must match the predictor function names in the DHIS 2 User Guide. Previously they were case-insensitive. As part of the upgrade to 2.34, functions names in existing predictor expressions are automatically converted to the correct case.

- The `stddev` function in predictor expressions is now the same as `stddevSamp` for consistency with other parts of DHIS 2 and with general usage. Previously, `stddev` was synonymous with `stddevPop` in predictor expressions. As part of the upgrade to 2.34, references to stddev in existing predictor expressions are automatically replaced with `stddevPop`.

## Process

- Remember to drop SQL views from **Apps > Data administration > Maintenance > Drop SQL views** before upgrading and to recreate them after the upgrade is completed. This is to avoid database integrity issues during the upgrade process, as database tables/columns with associated views cannot be modified.

## Patch-specific Changes

### 2.34.4 Database Schema

- New index on table `trackedentityprogramowner` over columns `(trackedentityinstanceid, programid, organisationunitid)`. Improves lookup related to organisation unit scopes in the context of a program.
- New index on table `programinstance` over columns `(programid)`. Improves general lookup for programinstances based on program in most cases.
- New index on table `trackedentityattributevalue` over columns `(trackedentityinstanceid, trackedentityattributeid, lower(value))`. This is in addition to the previous index over the columns `(trackedentityattributeid, lower(value))`. We saw situations related to value lookup in the context of tracked entity instances where postgres would revert to a sequential scan, when using the existing index would yield a much better result. With the new index we are successfully encouraging postres to use the index also when we are matching on tracked entity instances.
- New index on table `programstageinstance` over the columns `(status, executiondate)`. This table often grows a lot bigger than tracked entity instance and program instance tables, and we saw a bottleneck in some of our queries when including program stage instances as filters in searches. We added this index to improve the performance of the most common column we filter by, status, as well as executiondate, which is often used together with status when searching for events.

> **Caution** 
> 
> Due to the number of indexes, and the typical size of their tables, be aware that upgrading to this version or above might take a significant amount of time.

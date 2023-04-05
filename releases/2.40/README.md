# 2.40 Upgrade Notes

## Update Dashboard
- From 2.40 when updating a `Dashboard`, user is required to have `METADATA_WRITE` permission to the `Dashboard` itself and `METADATA_READ` permission to all referenced objects in all `DashboardItems`. The Administrator can use function [Cascade sharing](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/dashboards.html#cascade-sharing-of-visualizations-on-the-dashboard) in order to grant required sharing permissions when needed.
- From 2.40 there is new column in Analytics tables(ounamehierarchy). New export of analytics tables is required.

## API

* **Old tracker APIs deprecated:** In previous release old tracker API endpoints were deprecated. (see [deprecated-features](https://github.com/dhis2/dhis2-releases/blob/master/releases/deprecated-features.md) ). We encourage developers of apps and extensions do transition over to move away from old endpoints. Deprecated API endpoints are:
   ```
   - /api/trackedEntityInstances
   - /api/enrollments
   - /api/events
   - /api/relationships
   ```
   This endpoint should be used instead:
   ```
   - /api/tracker/
   ```
   [Docs tracker endpoint](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-240/tracker.html) | [Docs old tracker endpoints](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-240/old-tracker.html)

* **Removed status field in bundleReport:** Import summaries have the following overall structure [defined here](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-240/tracker.html#import-summary-structure). Status field in `bundleReport` property was redundant, hence it was removed. `Status` field in the root of the import summary should be used.

# 2.40 Upgrade Notes

## Update Dashboard 
- From 2.40 when updating a `Dashboard`, user is required to have `METADATA_WRITE` permission to the `Dashboard` itself and `METADATA_READ` permission to all referenced objects in all `DashboardItems`. The Administrator can use function [Cascade sharing](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/dashboards.html#cascade-sharing-of-visualizations-on-the-dashboard) in order to grant required sharing permissions when needed. 
- From 2.40 there is new column in Analytics tables(ounamehierarchy). New export of analytics tables is required.

## API

* **Old tracker APIs will be removed in 2.41:** The old tracker API endpoints for importing tracked and event data will be removed in 2.41. We encourage developers of apps and extensions do transition over to the new endpoints. API endpoints that will be removed are:
   ```
  - /api/relationships
  - /api/trackedEntityInstances
  - /api/enrollments
  - /api/events
   ```
   [Docs tracker endpoint](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-239/new-tracker.html)

# 2.38 Upgrade Notes

## Database

## API

- Running jobs manually using `/api/jobConfigurations/execute` changed from 
  `GET` to `POST` request
- Program id is now mandatory for program stage. Affected endpoints: /programStages, /metadata
- Several API endpoints slightly change their response root object to be in line 
  with the majority of endpoints.
  The root object returned pre 2.38 will become the member named `response`
  of the new root object returned by 2.38. Consumers can opt to either use
  `/api/37/...` to get the old behaviour or have to unpack to new response
  by doing `<root>.response` to resolve the previous root from the 2.38 
  response.
 
  **OBS!** In case of error responses this also entails an HTTP status code 
  change from `200 OK` to `409 Conflict`.
  
  Affected endpoints are:

  - `POST /api/completeDataSetRegistrations` with `JSON`/`XML` (only non 
   `async` affected)
  - `POST /api/dataValueSets` with `JSON`/`XML`/`ADX`/`CSV` (only non `async` affected)
  - `POST /api/metadata` with `JSON`/`XML`/`GML`/`CSV` (only non `async` affected)
  - `POST /api/predictions` (only non `async` affected)
  - `PUT /api/predictions` (only non `async` affected)
  - `PUT /api/relationships/{id}`
  - `PUT /api/users/{uid}` with `JSON`/`XML`

## Authorities

## Audit

## Migrations (Chart and ReportTable)

Depending on the DHIS2 version you're updating from, you may face migration issues/errors related to the removal of ReportTable and Chart tables.
The failure could be caused by tables that are still present in very old versions of DHIS2. Even though they are not in usage they might still be referenced.
This will cause errors when the migration scripts try to remove ReportTable and Chart tables because of the constraints present in those legacy tables.
More details related to this issue can be found at https://jira.dhis2.org/browse/DHIS2-12601

Once those problems are identified and confirmed, a few legacy tables need to be dropped before attempting the migration to DHIS2 2.38.

Below we list the SQL statements that need to be executed directly in your PostgreSQL instance. These SQL statements are applicable if your starting DHIS 2 version is between 2.24 and 2.31 (inclusive).

DROP TABLE IF EXISTS charttranslations CASCADE;
DROP TABLE IF EXISTS reporttabletranslations CASCADE;
DROP TABLE IF EXISTS dashboarditem_reporttables CASCADE;
DROP TABLE IF EXISTS dashboarditem_charts CASCADE;

Assuming the statements are successfully executed you will be able to try the upgrade again.

## Analytics

As part of this version, we are including changes to support a new Line Listing application.
This application requires additional event analytics attributes which reflect new database columns.
The new columns should be added into the analytics tables automatically.
But if, for some reason, you face errors related to any of the new columns (`storedby`, `createdbyusername`, `createdbyname`, `createdbylastname`, `createdbydisplayname`, `lastupdatedbyusername`, `lastupdatedbyname`, `lastupdatedbylastname` or `lastupdatedbydisplayname`), please follow the steps below.

Two steps have to be executed in order to avoid those errors during the analytics export job.

1. Go to `Data Administration` -> `Maintenance`, check `Clear analytics tables` and click on `Perform maintenance`
2. After step `1.` is completed, go to `Data Administration` -> `Analytics Tables` and click on `Start Export`

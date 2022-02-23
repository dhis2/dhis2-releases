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

Depending on the DHIS2 version you're updating from, you may face migration issues/errors.
Please, find more details at https://jira.dhis2.org/browse/DHIS2-12601

These problems are very likely caused by old/legacy tables that need to be dropped before migrating to DHIS2 2.38.

If you face those problems, please, execute the SQL statements below, directly in your PostgreSQL instance.

DROP TABLE IF EXISTS chart CASCADE;
DROP TABLE IF EXISTS charttranslations CASCADE;
DROP TABLE IF EXISTS reporttable CASCADE;
DROP TABLE IF EXISTS dashboarditem_reporttables CASCADE;

Once that is finished you are ready to try again the upgrade to DHIS2 2.38.

## Analytics

As part of this version, we are releasing a new Event Visualizer application.
This application requires additional event analytics attributes which reflect new database columns.
Because of that, this release requires the re-generation of the analytics tables.
Basically, two steps have to be executed in order to avoid errors in the analytics applications.

1. Go to `Data Administration` -> `Maintenance`, check `Clear analytics tables` and click on `Perform maintenance`
2. After step `1.` is completed, go to `Data Administration` -> `Analytics Tables` and click on `Start Export`

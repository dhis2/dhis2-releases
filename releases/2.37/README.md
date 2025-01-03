# 2.37 Upgrade Notes

> :warning: **Please ensure you have read the upgrade notes from the [PREVIOUS RELEASE](../2.36/README.md), if upgrading from an earlier version**

## Database

## API

- The `/api/userCredentials` API endpoint is removed. API users should use the `/api/users` and `/api/userLookup` API endpoints instead.
- The APIs related to charts (`/api/charts`) and report tables (`/api/reportTables`) are removed. Consumers should use the Visualization API instead (`/api/visualizations`). Other existing endpoints that make any kind of reference to Chart and Report Table will now reference Visualization.

## Authorities

- The existing `F_GENERATE_MIN_MAX_VALUES` authority is now required to generate min-max values in the data administration app. Previously `F_PERFORM_MAINTENANCE` was required.
- Creating data approval levels requires the `F_DATA_APPROVAL_LEVEL` authority.
- Creating data approval workflows requires the `F_DATA_APPROVAL_WORKFLOW` authority.

## Audit

In 2.38 we will be changing the default location of audits from the database to a logfile called `dhis-audits.log`. If you don't want this
behavior and want to be futureproof it's recommended that you add these lines to your `dhis.conf`:

```
audit.database = on
audit.logger = off
```

## Patch-specific Changes

### 2.37.5
- `GET /systemSettings` returning JSONP (`Accept=application/javascript`) was removed

## Future API changes
Please note that from 2.38 onwards several API endpoints slightly change
their response root object to be in line with the majority of endpoints.
The root object returned pre 2.38 will become the member named `response`
of the root object returned by 2.38. Consumers can opt to either use
`/api/37/...` to get the old behaviour or have to unpack to new response
by doing `<root>.response` to resolve the old root from the 2.38 response.
In case of error responses this also entails an HTTP status code change from `200 OK` to `409 Conflict`.

Affected endpoints are:

- `POST /api/completeDataSetRegistrations` with `JSON`/`XML` (only non `async` affected)
- `POST /api/dataValueSets` with `JSON`/`XML`/`ADX`/`CSV` (only non `async` affected)
- `POST /api/metadata` with `JSON`/`XML`/`GML`/`CSV` (only non `async` affected)
- `POST /api/predictions` (only non `async` affected)
- `PUT /api/predictions` (only non `async` affected)
- `PUT /api/relationships/{id}`
- `PUT /api/users/{uid}` with `JSON`/`XML`

## Migrations (Chart and ReportTable)

Depending on the DHIS2 version you're updating from, you may face migration issues/errors related to the removal of ReportTable and Chart tables.
The failure could be caused by tables that are still present in very old versions of DHIS2. Even though they are not in usage they might still be referenced.
This will cause errors when the migration scripts try to remove ReportTable and Chart tables because of the constraints present in those legacy tables.
More details related to this issue can be found at https://jira.dhis2.org/browse/DHIS2-12601

Once those problems are identified and confirmed, a few legacy tables need to be dropped before attempting the migration to DHIS2 2.37.

Below we list the SQL statements that need to be executed directly in your PostgreSQL instance. These SQL statements are applicable if your starting DHIS 2 version is between 2.24 and 2.31 (inclusive).

```
DROP TABLE IF EXISTS charttranslations CASCADE;
DROP TABLE IF EXISTS reporttabletranslations CASCADE;
DROP TABLE IF EXISTS dashboarditem_reporttables CASCADE;
DROP TABLE IF EXISTS dashboarditem_charts CASCADE;
```

Assuming the statements are successfully executed you will be able to try the upgrade again.

## SMS Codes
During the upgrade process, the migration related to SMS codes might fail. The migration in question is named V2_37_46__Add_coc_fk_in_smscode.sql. If this occurs, you can resolve it using the SQL script provided below.

After applying the script, retry the upgrade process. This should resolve the issue and allow the upgrade to complete successfully.

Note: Please ensure you have a proper backup before executing any SQL scripts during the upgrade.

```
-- Set invalid cat option combos to default
update smscodes set optionid = (
  select categoryoptioncomboid from categoryoptioncombo where name = 'default')
where optionid not in (
  select distinct categoryoptioncomboid from categoryoptioncombo)
or optionid is null;
```

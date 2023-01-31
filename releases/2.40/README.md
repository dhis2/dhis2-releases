# 2.40 Upgrade Notes

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

# 2.34 Upgrade Notes

## Tomcat support

- Minimum required Tomcat version is now **8.5.50**. Support for Tomcat 7.0 and 8.0 is now dropped. The main reason for this change is Tomcat 7.0 and 8.0 having several issues with certain application development frameworks (most importantly _Jackson_, used for JSON and XML serialization) used internally by DHIS 2. 

## Web API and Data model

- A new entity and API resource is introduced called `Visualization`, located at `/api/visualizations`. The visualization entity merges the previous `ReportTable` and `Chart` entities and API resources. The corresponding API endpoints `/api/reportTables` and `/api/charts` will be functional for some time but will be removed in the future and we recommend clients to migrate as soon as possible. This also implies that report tables and charts cannot be exchanged between systems using the `/api/metadata` endpint, instead, metadata should be exchanged as visualizations.

- The `/api/configuration/settings` and `/api/configuration/settings/filter` endpoints have been removed.

## Predictor expressions

- Function names in predictor expressions are now case sensitive and must match the predictor function names in the DHIS 2 User Guide. Previously they were case-insensitive. As part of the upgrade to 2.34, functions names in existing predictor expressions are automatically converted to the correct case.

- The stddev function in predictor expressions is now the same as stddevSamp, for consistency with other parts of DHIS 2 and with general usage. Previously, stddev was synonymous with stddevPop in predictor expressions. As part of the upgrade to 2.34, references to stddev in existing predictor expressions are automatically replaced with stddevPop.

## Process

- Remember to drop SQL views from **Apps > Data administration > Maintenance > Drop SQL views** before upgrading and to recreate them after the upgrade is completed. This is to avoid database integrity issues during the upgrade process, as database tables/columns with associated views cannot be modified.

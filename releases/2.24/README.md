# DHIS 2.24 Upgrade Notes

## Upgrade

- Version 2.24 sets all "uid", "created" and "lastupdated" columns for metadata tables as not nullable. As a result it is recommended to first run version 2.23 on your database before running version 2.24 to allow new columns to be added and populated prior to marking them has not nullable.

## User Interface

- Maintenance operations for metadata attributes, constants and option sets have been moved to the Maintenance app.

## Web API

- The translations solution has been rewritten, and translations are now included for each object in the API response instead of from the old /api/translations endpoint. Please consult the translations documentation.
- Web API versioning is gradually being introduced. If you want to write your app against a specific API version for greater stability you can use **/api/24** as base URL. An example is play.dhis2.org/demo/api/24/dataElements. This work will be completed in v 2.25.

# DHIS 2.31 Upgrade Notes

> :warning: **Please ensure you have read the upgrade notes from the [PREVIOUS RELEASE](../2.30/README.md), if upgrading from an earlier version**

## Upgrade

- In 2.31 we are introducing [Flyway](https://flywaydb.org/) as a new system for database migrations. In the process we have removed most of the legacy database migration statements/scripts in order to have a fresh start and to reduce startup time of the application. As a result, when migrating from older DHIS 2 versions it is required to install *DHIS 2.30* before installing DHIS 2.31. This will ensure that older migration scripts are being executed.
- As always, remember to drop your SQL views before upgrading the DHIS 2 version. The database upgrade routines might change data types, which is not allowed by PostgreSQL if referred to from SQL views.

### Upgrade from 2.31.0 to a later patch

A bug was introduced in 2.31.0 which was corrected later in the 2.31.1 Flyway script. This leads to a checksum mismatch when upgrading from that earlier release.

You will need to **run the following SQL prior to upgrading from 2.31.0** to correct the checksum:
```
update flyway_schema_history set checksum = '-271885416' where version = '2.31.1';
```
This manual intervention is **not** required when upgrading directly from 2.30.

## Middleware

- PostgreSQL version **9.6** or higher is required. The minimum required version was previously 9.4. We recommend migrating straight to version 10 as it is well tested with DHIS 2 and contains several performance improvements over 9.x. 

## System

- Support for _memcached_ as application cache provider is removed. Please use _Redis_ instead.
- The system settings _Enable email notifications_ and _Enable SMS notifications_ have been removed. The corresponding user settings now default to `true`.
- The _Mapzen_ API is discontinued and removed from Maps app and Settings app.
- [Flyway](https://flywaydb.org/) is introduced for database migration.

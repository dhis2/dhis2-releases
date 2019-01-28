# DHIS 2.31 Upgrade Notes

## Upgrade

- In 2.31 we are introducing [Flyway](https://flywaydb.org/) as a new system for database migrations. In the process we have removed most of the legacy database migration statements/scripts in order to have a fresh start and to reduce startup time of the application. As a result, when migrating from older DHIS 2 versions it is required to install *DHIS 2.30* before installing DHIS 2.31. This will ensure that older migration scripts are being executed.
- As always, remember to drop your SQL views before upgrading the DHIS 2 version. The database upgrade routines might change data types, which is not allowed by PostgreSQL if referred to from SQL views.

## Middleware

- PostgreSQL version **9.6** or higher is required. The minimum required version was previously 9.4. We recommend migrating straight to version 10 as it is well tested with DHIS 2 and contains several performance improvements over 9.x. 

## System

- Support for _memcached_ as application cache provider is removed. Please use _Redis_ instead.
- The system settings _Enable email notifications_ and _Enable SMS notifications_ have been removed. The corresponding user settings now default to `true`.
- The _Mapzen_ API is discontinued and removed from Maps app and Settings app.
- [Flyway](https://flywaydb.org/) is introduced for database migration.

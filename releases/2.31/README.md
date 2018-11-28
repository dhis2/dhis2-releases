# DHIS 2.31 Upgrade Notes

## Middleware

- PostgreSQL version **9.6** or higher is required. The minimum required version was previously 9.4. We recommend migrating straight to version 10 as it is well tested with DHIS 2 and contains several performance improvements over 9.x. 


## System

- Support for _memcached_ as application cache provider is removed. Please use _Redis_ instead.
- The system settings _Enable email notifications_ and _Enable SMS notifications_ have been removed. The corresponding user settings now default to `true`.
- Dhis2 uses flyway for handling all database upgrades, migrations and versioning. Removes the need for manual execution of upgrade scripts, unless the script requires superuser privileges.



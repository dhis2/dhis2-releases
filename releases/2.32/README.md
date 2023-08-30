# 2.32 Upgrade Notes

> **Please ensure you have read the upgrade notes from the [PREVIOUS RELEASE](../2.31/README.md), if upgrading from an earlier version**

## System Administration
- The *Server base URL* system setting has changed from being a system setting to a `dhis.conf` property. This is done because the server base URL typically follows the server and not the database. The setting key is `server.base.url`. See install guide for details.
- Most metadata database tables now use *8-bit int* data type for the primary key column. This migration happens automatically. For the migration to succeed it is recommended to increase the PostgreSQL max locks per transaction setting such as `max_locks_per_transaction = 96`. See install guide for details. Note that this migration can take several hours, and that the database size may increase substantially during the process.
- For Tomcat versions after 8.5, it is necessary to include a `relaxedQueryChars="[]"` attribute to allow for brackets in URLs in the `Connector` element in `server.xml`. See install guide for details.

## Data model
- The (unused) association between `Program` and `DataApprovalWorkflow` is removed.
- The (unused) `representative` association between `TrackedEntityInstance` and `TrackedEntityInstance` is removed.
- A Geometry (`Geometry, 4326`) field `geometry` is added replacing the `coordinates` and `featuretype` fields for `OrganisationUnit`.
- A Geometry (`Geometry, 4326`) field `geometry` is added replacing the `coordinates` columns for `OrganisationUnitGroup`.

## Database
- The `trackedentitydatavalue` table has been replaced by a PostgreSQL JSONB object/column in the `programstageinstance` table. 

## System
- The *Event capture* app is removed. It is replaced by the *Capture* app which offers all of its features and more.

## Process
- Remember to drop SQL view from Apps > Data administration > SQL views before upgrading to avoid database integrity issues during the upgrade process, then recreate them after the upgrade is completed.

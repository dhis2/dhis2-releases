# 2.32 Upgrade Notes

## System Administration
- The *Server base URL* system setting has changed from being a system setting to a `dhis.conf` property. This is done because the server base URL typically follows the server and not the database. The setting key is `server.base.url`.

## Data model
- The (unused) association between `Program` and `DataApprovalWorkflow` is removed.
- The (unused) `representative` association between `TrackedEntityInstance` and `TrackedEntityInstance` is removed.
- A Geometry (`Geometry, 4326`) field `geometry` is added replacing the `coordinates` and `featuretype` fields for `OrganisationUnit`.
- A Geometry (`Geometry, 4326`) field `geometry` is added replacing the `coordinates` columns for `OrganisationUnitGroup`.

## Database
- The `trackedentitydatavalue` table has been replaced by a PostgreSQL JSONB object/column in the `programstageinstance` table. 

## System
- The *Event capture* app is removed. It is replaced by the *Capture* app which offers all of its features and more.

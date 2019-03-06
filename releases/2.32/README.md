# 2.32 Upgrade Notes

## System Administration
- The *Server base URL* system setting has changed from being a system setting to a `dhis.conf` property. This is done because the server base URL typically follows the server and not the database.

## Data model
- The (unused) association between `Program` and `DataApprovalWorkflow` is removed.
- The (unused) association between `TrackedEntityInstance` and "representative" `TrackedEntityInstance` is removed.
- A Geometry (`Geometry, 4326`) field is added to replace the `coordinates` and `featuretype` fields for `OrganisationUnit`.
- A Geometry (`Geometry, 4326`) is added to replace the `coordinates` columns for `OrganisationUnitGroup`.

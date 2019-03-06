# 2.32 Upgrade Notes

## System Administration
- Server base url has been moved from System Settings to configurations and its value will be retrieved from dhis2.conf.

## Data model
- The (unused) association between `Program` and `DataApprovalWorkflow` has been removed.
- The (unused) association between `TrackedEntityInstance` and "representative" `TrackedEntityInstance` has been removed.
- A Geometry (`Geometry, 4326`) field has been added to replace the `coordinates` and `featuretype` fields for `OrganisationUnit`.
- A Geometry (`Geometry, 4326`) has been added to replace the `coordinates` columns for `OrganisationUnitGroup`.

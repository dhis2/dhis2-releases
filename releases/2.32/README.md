# 2.32 Upgrade Notes

## System Administration
- Server base url has been moved from System Settings to configurations and its value will be retrieved from dhis2.conf.

## Data model
- The (unused) association between `Program` and `DataApprovalWorkflow` has been removed.
- A Geometry (`Geometry, 4326`) has been added to replace the `coordinates` and `featuretype` columns for `organisationunit` table
- A Geometry (`Geometry, 4326`) has been added to replace the `coordinates` columns for `orgunitgroup` table

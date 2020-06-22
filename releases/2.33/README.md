# 2.33 Upgrade Notes

## Browser support

- Support for **Internet Explorer 11** has been dropped.
- Supported web browsers are now Chrome, Firefox, Safari and Edge.

## Configuration / dhis.conf

- A new property `server.https` is introduced. This setting is highly recommended to enable when deploying on HTTPS as it provides additional security (set `server.https = on` to enable). See install docs for details.
- The property `connection.schema` no longer has any effect and can be removed.

## Data model

- Property `programScope` of object `TrackedEntityAttribute` is removed. Correspondingly column `programscope` of table `trackedentityattribute` is removed.
- Column `tracedentityattributeid` of table `program_attributes` is made non-null.
- Column `programstageid` of table `programstagedataelement` is made non-null.

## Application

- The `Reports` legacy web module is removed from the system, and is replaced by the a new `Reports` React web app. The system uses the same authority as before, the app name is the same, and there is no action required.
- The `Approval` part of reports web module has been turned into a new web module. A new React-based app is in the works to replace it.
- The `Classic Data Visualizer` app is removed. This app is superseded by the new `Data Visualizer` app.
- The `GIS` app is removed. This app is superseeded by the new `Maps` app.
- The system setting `Lock user account temporarily after multiple failed login attempts` (with API key `keyLockMultipleFailedLogins`) is now enabled by default.
- The system setting `Skip zero data values in analytics tables` (with API key `keySkipZeroValuesInAnalyticsTableExport`) is now enabled by default.

## Process
- Remember to drop SQL views from **Apps > Data administration > Maintenance > Drop SQL views** before upgrading, to avoid database integrity issues during the upgrade process, then recreate them after the upgrade is completed.

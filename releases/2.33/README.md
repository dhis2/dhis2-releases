# 2.33 Upgrade Notes

## Browser support

- Support for **Internet Explorer 11** has been dropped.
- Supported web browsers are now Chrome, Firefox, Safari and Edge.

## Data model

- Property `programScope` of object `TrackedEntityAttribute` is removed. Correspondingly column `programscope` of table `trackedentityattribute` is removed.
- Column `tracedentityattributeid` of table `program_attributes` is made non-null.
- Column `programstageid` of table `programstagedataelement` is made non-null.

## Application

- The `Reports` legacy web module is removed from the system, and is replaced by the a new `Reports` React web app. The system uses the same authority as before, the app name is the same, and there is no action required to be taken.
- The default value for the system setting `Skip zero data values in analytics tables` (with API key `keySkipZeroValuesInAnalyticsTableExport`) is now `true` (previously `false`).

## Process
- Remember to drop SQL view from Apps > Data administration > SQL views before upgrading to avoid database integrity issues during the upgrade process, then recreate them after the upgrade is completed.

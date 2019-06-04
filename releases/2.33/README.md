# 2.33 Upgrade Notes

## Browser support

- Support for **Internet Explorer 11** has been dropped.
- Supported web browsers are now Chrome, Firefox, Safari and Edge.

## Data model

- Property `programScope` of object `TrackedEntityAttribute` is removed. Correspondingly column `programscope` of table `trackedentityattribute` is removed.
- Column `tracedentityattributeid` of table `program_attributes` is made non-null.
- Column `programstageid` of table `programstagedataelement` is made non-null.

# DHIS 2.30 Upgrade Notes

## Database

- Run the database [SQL upgrade script](upgrade-230.sql) once before updating the WAR file.

# System

- The following authorities have been removed from the system and superseded by the new *data read* and *data write* sharing levels in DHIS 2.29:

```
F_TRACKED_ENTITY_DATAVALUE_ADD
F_TRACKED_ENTITY_DATAVALUE_DELETE
F_TRACKED_ENTITY_DATAVALUE_READ
F_VIEW_EVENT_ANALYTICS
F_TRACKED_ENTITY_INSTANCE_SEARCH
F_TRACKED_ENTITY_INSTANCE_ADD
F_TRACKED_ENTITY_INSTANCE_DELETE
F_PROGRAM_ENROLLMENT
F_PROGRAM_UNENROLLMENT
F_PROGRAM_ENROLLMENT_READ
F_IMPORT_GML
F_SQLVIEW_MANAGEMENT
```


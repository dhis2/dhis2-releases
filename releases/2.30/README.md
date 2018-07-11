# DHIS 2.30 Upgrade Notes

## Database

- Run the database [SQL upgrade script](upgrade-230.sql) once before updating the WAR file.
- _PostGIS_ is now a required extension for PostgreSQL. Make sure to install and enable PostGis in your database before upgrading to DHIS 2.30. Please consult the [installation guide](https://docs.dhis2.org/master/en/implementer/html/install_server_setup.html#install_postgresql_installation).

## System

- The following authorities have been removed from the system and superseded by the new *data read* and *data write* sharing levels from DHIS 2.29:

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

- The following authority has been added and it is used for Program data synchronization purpose:

```
F_IGNORE_TRACKER_REQUIRED_VALUE_VALIDATION
```

- The _analytics table generation_ screen has been moved from _Reports_ app to _Data administration_ app.

- The _SQL view_ screen has been moved to from _Data administration_ app to _Maintenance_ app.

- The _Light_ web module has been removed and there are currently no plans to replace it.

- The _user_, _import-export_, _messaging_, _data administration_ and _data quality_ apps have been rewritten as Javascript apps using Material UI design.

## Data model

- The _Relationship_ and _RelationshipType_ concepts have been redesigned. The upgrade script will update existing data to conform to the changes. To account for some major concept changes like specifying types for relationship items, as well as making relationships one-directional, the following data changes should be expected: Each relationship and relationship type will be replaced with at least two new relationships and relationship types. Since existing relationships are bi-directional and have been made uni-directional we need to create a new relationship and type for each direction. In addition, since we are enforcing types for relationships, for example a RelationshipType can go from one specific TrackedEntityType to another, we need to replicate any existing variations of TrackedEntityTypes. So for each existing relationship with more than one combination of TrackedEntityTypes, two new RelationshipTypes will be created (one for each direction). The names of the newly created RelationshipTypes will be based on the existing RelationshipTypes, as well as the direction and TrackedEntityTypes they contain.


# DHIS 2.30 Upgrade Notes

## Database

- Run the database [SQL upgrade script](upgrade-230.sql) once before updating the WAR file.
- PostGIS is now a required extension for PostgreSQL. Make sure to install and enable PostGis in your database before upgrading to DHIS 2.30.

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

- The _analytics table generation_ screen has been moved from _Reports_ app to _Data administration_ app.

## Data model

- Relationships and RelationshipTypes have been redesigned. The upgradescript will update existing data to conform to the changes. To account for some major concept changes, like specifying types for relationship items, as well as making relationships one-directional, the following data changes should be expected. Each relationship and relationshipType will be replaced with at least 2 new relationship and relationshipType. Since existing relationships are bidirectional, and we are making them unidirectional, we need to create a new type and relationship for each direction to repliace what is there today. In addition, since we are enforcing types for relationships, for example a RelationshipType can go from one specific TrackedEntityType to another, we need to replicate any existing variations of TrackedEntityTypes. So for each existing relationship with more than 1 combination of TrackedEntityTypes, two new RelationshipTypes will be created (One for each direction). The names of the newly created RelationshipTypes will be based on the existing RelationshipTypes, as well as the direction and TrackedEntityTypes it contains.


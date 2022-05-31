# 2.39 Upgrade Notes

## Web Apps

* The previous data approval Struts-based web module is removed, and superseded by the React-based data approval web app.

## Tracker

* Relationships are now soft-deletable entities. This means that when they are deleted, they are still in the database but they are still used in validations. So if an import is trying to reference a soft-deleted relationship, the importer will return an error.
* In previous versions Relationships were identified by their `UID` or by a combination of `Relationship Type`, `from` field and `to` field. From 2.39 Relationships are only identified by their `UID`. This is causing a potential breaking change as before the same payload with a Relationship without a specified `UID` could be imported multiple times without errors (just a warning that update for relationships is not possible), while now it is throwing an error relating that a Relationship of the same type and linking the same entities already exists.

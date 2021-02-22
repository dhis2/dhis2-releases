# DHIS 2.25 Upgrade Notes

## Database

- It is recommended to drop all SQL views in DHIS 2 before deploying the upgrade to avoid conflicts with the upgrade statements. This can be done from Data administration > Maintenance.
- Run the [upgrade script](https://github.com/dhis2/dhis2-utils/blob/master/resources/sql/upgrade-225.sql).
- A column **deleted** has been added to table **datavalue**. Values will be set to false for all existing rows. This will happen automatically but expect a few minutes the first time you start the system for the upgrade routine to complete. For large data value tables it is recommended to run the upgrade script mentioned above. This will be faster as it first drops and later recreates the table indexes. Data values are now marked as deleted instead of physically removed from the datavalue table. SQL queries should include a clause for the deleted column if no deleted values should be included in the query response.
- A new table **datasetelement** has been introduced and replaces table **datasetmembers** which is now removed.
- The **created** and **lastupdated** columns of metadata tables have been set to not-null.

## User Interface

- The *Data browser* functionality in data administration module has been removed.
- The *Clear cache* function (referring to DHIS 2 cache) has been moved to *Maintenance* in the data administration module and is now referred to as Clear application cache.
- The management user interface for tracked entity attribute, relationship type and tracked entity objects have been moved from the program module into the maintenance app.

## Functionality

- The "reminder message template" functionality has been replaced by a new version referred to as "program notifications" and "program stage notifications". This is a better implementation of the notifications system and is mostly equivalent in terms of features.
- The "surveillance" type of validation rules has been removed, and is replaced by the new "predictor" concept.
- The "detailed metadata export" has been removed and will be replaced by the "metadata dependency export" feature.

## Web API

- The association between **dataSet** and **dataElement** has been changed and is now represented through a new entity **dataSetElement**. The dataSetElement entity has references to **dataSet**, **dataElement** and **categoryCombo**.
- Property **uuid** of resource organisation unit has been removed.

## System Administration

- The system will no longer look for a configuration file called **hibernate.properties**. Instead use **dhis.conf** as filename. The configuration properties in dhis.conf are different from hibernate.properties - read the database configuration documentation.

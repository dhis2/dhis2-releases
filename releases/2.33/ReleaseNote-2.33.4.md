# Patch 2.33.4 Release Note

## Features

**[DHIS2-8398](https://jira.dhis2.org/browse/DHIS2-8398): Data approval stopgap app based on Struts module**  
Components: _[App] Data approval_  

The data approval functionality is re-introduced as a separate app called *Data approval*. It offers the same functionality which was previously accessible through the Reports app. It allows for approving data by data set and time period. 

**[DHIS2-7610](https://jira.dhis2.org/browse/DHIS2-7610): Select all authorities checkbox**  
Components: _[App] User_

## Bugs

**[DHIS2-8212](https://jira.dhis2.org/browse/DHIS2-8212): Weekly starting Sunday period type overlaps first and last week for 2019-2020**  
Components: _[API] Analytics_

**[DHIS2-8665](https://jira.dhis2.org/browse/DHIS2-8665): Function d2:hasValue does not support program variables**  
Components: _[API] Analytics_, _[API] Tracker_

**[DHIS2-8691](https://jira.dhis2.org/browse/DHIS2-8691): Clearing the Application Cache Removes User Installed Apps**  
Components: _[API] App management_

**[DHIS2-7895](https://jira.dhis2.org/browse/DHIS2-7895): Data Administration - Unable to remove TEIs due to linked records in table "trackedentityprogramowner"**  
Components: _[API] Data administration_

**[DHIS2-8627](https://jira.dhis2.org/browse/DHIS2-8627): Integer out of range when creating resource table for larger database**  
Components: _[API] Data administration_

**[DHIS2-8612](https://jira.dhis2.org/browse/DHIS2-8612): Capture app with the Arabic Interface Language does not save events / event list filtering fails**  
Components: _[API] Events_, _[App] Capture_

**[DHIS2-8682](https://jira.dhis2.org/browse/DHIS2-8682): Identifier matching on CODE does not work for metadata importer updates**  
Components: _[API] Metadata import-export_  
**Testing**

**[DHIS2-8035](https://jira.dhis2.org/browse/DHIS2-8035): Import fails when importing metadata file that contains option sets**  
Components: _[API] Metadata import-export_

**[DHIS2-8707](https://jira.dhis2.org/browse/DHIS2-8707): Predictor only runs a single cycle when predicted data element is part of the generator**  
Components: _[API] Predictors_

**[DHIS2-8181](https://jira.dhis2.org/browse/DHIS2-8181): Categories missing category options after using analytic tools**  
Components: _[API] Tracker_, _[App] Event reports_, _[App] Maintenance_, _[App] Pivot table_  
**Testing**

**[DHIS2-8732](https://jira.dhis2.org/browse/DHIS2-8732): Invalid error message if deeply nested TE and invalid org unit**  
Components: _[API] Tracker_

**[DHIS2-8717](https://jira.dhis2.org/browse/DHIS2-8717): TEAV.storedBy does not get set on save/update enrollment**  
Components: _[API] Tracker_

**[DHIS2-7740](https://jira.dhis2.org/browse/DHIS2-7740): Relationships endpoint returns status code 200 even if there is an error**  
Components: _[API] Tracker_

**[DHIS2-6770](https://jira.dhis2.org/browse/DHIS2-6770): Deleting trackedEntityInstance doesn't delete relationships**  
Components: _[API] Tracker_

**[DHIS2-6401](https://jira.dhis2.org/browse/DHIS2-6401): 500 error when trying to delete Program with associated RelationshipType**  
Components: _[API] Tracker_

**[DHIS2-8674](https://jira.dhis2.org/browse/DHIS2-8674): Make static strings translatable**  
Components: _[API] User_

**[DHIS2-7300](https://jira.dhis2.org/browse/DHIS2-7300): Capture app - very high number of point coordinate decimals**  
Components: _[App] Capture_

**[DHIS2-7348](https://jira.dhis2.org/browse/DHIS2-7348): Order of lat/long coordinate is different in create/edit event and in view event**  
Components: _[App] Capture_

**[DHIS2-8784](https://jira.dhis2.org/browse/DHIS2-8784): Multi-Organisation Unit Forms Enabled by Default**  
Components: _[App] Data entry_, _[App] Maintenance_

**[DHIS2-5398](https://jira.dhis2.org/browse/DHIS2-5398): Removing a Data Element from a Data Set doesn't remove it from the Section**  
Components: _[App] Data entry_

**[DHIS2-8752](https://jira.dhis2.org/browse/DHIS2-8752): Single quotes not escaped in query for Std Dev Outlier Analysis, causing error "Unterminated string literal started at position 340 in SQL"**  
Components: _[App] Data quality_

**[DHIS2-8124](https://jira.dhis2.org/browse/DHIS2-8124): In program indicators d2 functions return an error when using variables**  
Components: _[App] Data visualizer_, _[App] Event reports_, _[App] Pivot table_

**[DHIS2-8615](https://jira.dhis2.org/browse/DHIS2-8615): Event reports with category option group sets cannot be restored**  
Components: _[App] Event reports_

**[DHIS2-8837](https://jira.dhis2.org/browse/DHIS2-8837): Error on metadata Import in XML format**  
Components: _[App] Import-export_  
**Testing**

**[DHIS2-8621](https://jira.dhis2.org/browse/DHIS2-8621): Updated Attribute associated to DataSets is not working**  
Components: _[App] Maintenance_

**[DHIS2-8658](https://jira.dhis2.org/browse/DHIS2-8658): Maps app: Non-translatable fields**  
Components: _[App] Maps_  
**Retesting**

**[DHIS2-8585](https://jira.dhis2.org/browse/DHIS2-8585): Error message in the console when trying to open a map as a chart**  
Components: _[App] Maps_

**[DHIS2-8575](https://jira.dhis2.org/browse/DHIS2-8575): Filters are not kept when switching from DV to Maps**  
Components: _[App] Maps_

**[DHIS2-8479](https://jira.dhis2.org/browse/DHIS2-8479): Handle error if org unit selection is invalid for thematic layers**  
Components: _[App] Maps_

**[DHIS2-8474](https://jira.dhis2.org/browse/DHIS2-8474): Handle error if org unit selection is invalid for facility layers**  
Components: _[App] Maps_

**[DHIS2-8176](https://jira.dhis2.org/browse/DHIS2-8176): Org Units with no data displaying for periods in Maps timeline**  
Components: _[App] Maps_

**[DHIS2-7924](https://jira.dhis2.org/browse/DHIS2-7924): Editing map layer with OU grandchildren selected breaks map**  
Components: _[App] Maps_

**[DHIS2-7089](https://jira.dhis2.org/browse/DHIS2-7089): Maps - Filtering on data element option with operator "Not one of" generates error**  
Components: _[App] Maps_

**[DHIS2-8661](https://jira.dhis2.org/browse/DHIS2-8661): Tracked entity instance filter of "followup" ignored**  
Components: _[App] Tracker capture_

**[DHIS2-8670](https://jira.dhis2.org/browse/DHIS2-8670): Location not saved when registering new TEI in Relationship context**  
Components: _[App] Tracker capture_  
**Needs Update**

**[DHIS2-8718](https://jira.dhis2.org/browse/DHIS2-8718): Editing an event will DELETE event coordinates**  
Components: _[App] Tracker capture_

**[DHIS2-7984](https://jira.dhis2.org/browse/DHIS2-7984): "hasUserRole" function is not working in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-8830](https://jira.dhis2.org/browse/DHIS2-8830): D2-ui components are not translated correctly**  
Components: _[App] User_

**[DHIS2-8813](https://jira.dhis2.org/browse/DHIS2-8813): Strings not translated correctly**  
Components: _[App] User_

**[DHIS2-8829](https://jira.dhis2.org/browse/DHIS2-8829): Can create user without organisation unit**  
Components: _[App] User_

**[DHIS2-8546](https://jira.dhis2.org/browse/DHIS2-8546): User is created despite error when Interface Language or Database Language are not selected**  
Components: _[App] User_

**[DHIS2-8788](https://jira.dhis2.org/browse/DHIS2-8788): API call /api/me/profile.json not working**  
Components: _[App] User Profile_


# Patch 2.31.5 Release Note 


## Features


**[DHIS2-6327](https://jira.dhis2.org/browse/DHIS2-6327): Predictor - add support for percentiles**  
Components: _[API] Predictors_  
> Percentile and standard deviation aggregation functions have now been added to predictors to support the definition of thresholds, etc.. See [create_predictor](https://docs.dhis2.org/master/en/user/html/manage_predictor.html#create_predictor) documentation.


## Bugs


**[DHIS2-7046](https://jira.dhis2.org/browse/DHIS2-7046): Unable to get import summary via api in redis backed horizontal scaled version**  
Components: _[API] Data value set_ 


**[DHIS2-7237](https://jira.dhis2.org/browse/DHIS2-7237): Toggling `enabled` field of a job in jobConfigurations does not update jobStatus**  
Components: _[API] Job scheduler_ 


**[DHIS2-7255](https://jira.dhis2.org/browse/DHIS2-7255): Add PDF data value import function to /api/datavalueSets endpoint**  
Components: _[API] Metadata import-export_ 


**[DHIS2-6133](https://jira.dhis2.org/browse/DHIS2-6133): Search screen won't display (because the metadata export/import process has corrupted trackedEntityTypeAttributes?)**  
Components: _[API] Metadata import-export_ 


**[DHIS2-6135](https://jira.dhis2.org/browse/DHIS2-6135): DataSet Sections and Sections are not getting translated.**  
Components: _[API] Other_ 


**[DHIS2-4044](https://jira.dhis2.org/browse/DHIS2-4044): Data Element translation in indicator and validation rule**  
Components: _[API] Other_, _[API] Validation_, _[App] Data visualizer_, _[App] GIS_, _[App] Maps_, _[App] Pivot table_  


**[DHIS2-7067](https://jira.dhis2.org/browse/DHIS2-7067): Complete and create enrollments in the same payload**  
Components: _[API] Tracker_  


**[DHIS2-7194](https://jira.dhis2.org/browse/DHIS2-7194): DST transition dates not saved in some cases**  
Components: _[API] Tracker_ 


**[DHIS2-7274](https://jira.dhis2.org/browse/DHIS2-7274): Custom logos stored in S3 return 500**  
Components: _[App] Core resource_ 


**[DHIS2-6880](https://jira.dhis2.org/browse/DHIS2-6880): DataStore Manager - total failure after deleting a stored item**  
Components: _[App] Data store_ 


**[DHIS2-7114](https://jira.dhis2.org/browse/DHIS2-7114): Help link in profile menu is broken**  
Components: _[App] Header and menu_ 


**[DHIS2-6247](https://jira.dhis2.org/browse/DHIS2-6247): Importing zipped data files fail**  
Components: _[App] Import-export_ 


**[DHIS2-7069](https://jira.dhis2.org/browse/DHIS2-7069): Event Import with idScheme=CODE fails to update event**  
Components: _[API] Events_, _[App] Import-export_ 


**[DHIS2-6379](https://jira.dhis2.org/browse/DHIS2-6379): Importing metadata does not consider the DRY RUN flag**  
Components: _[App] Import-export_ 


**[DHIS2-6350](https://jira.dhis2.org/browse/DHIS2-6350): Attribute ID is deleted from program attributes**  
Components: _[API] Metadata model_, _[App] Maintenance_ 


**[DHIS2-6362](https://jira.dhis2.org/browse/DHIS2-6362): Short names visible in UI but no persisted in database**  
Components: _[API] Metadata model_, _[App] Maintenance_ 


**[DHIS2-7198](https://jira.dhis2.org/browse/DHIS2-7198): Failure to assign user to the message**  
Components: _[App] Messaging_ 


**[DHIS2-7098](https://jira.dhis2.org/browse/DHIS2-7098): Rules that make an attribute mandatory fail in TEI dashboard**  
Components: _[App] Tracker capture_ 


**[DHIS2-7282](https://jira.dhis2.org/browse/DHIS2-7282): Any modification of a user clears lastlogin**  
Components: _[API] User_, _[App] User_ 


**[DHIS2-2022](https://jira.dhis2.org/browse/DHIS2-2022): Category option combination not updated after category option rename**  
Components: _Backend_  

**[DHIS2-6898](https://jira.dhis2.org/browse/DHIS2-6898): Add Event Layer - API Errors are not reported to user**  
Components: _[App] Maps_

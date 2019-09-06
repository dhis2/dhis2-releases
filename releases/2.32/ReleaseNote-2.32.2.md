# Patch 2.32.2 Release Note 


## Features


**[DHIS2-6327](https://jira.dhis2.org/browse/DHIS2-6327): Predictor - add support for percentiles**  
Components: _[API] Predictors_  


**[DHIS2-6590](https://jira.dhis2.org/browse/DHIS2-6590): Use new expression test endpoints by type in Maintenance app**  
Components: _[App] Maintenance_ 


**[DHIS2-5968](https://jira.dhis2.org/browse/DHIS2-5968): Show owning org unit in the user interface for tracked entity instances**  
Components: _[App] Tracker capture_  


## Bugs


**[DHIS2-7046](https://jira.dhis2.org/browse/DHIS2-7046): Unable to get import summary via api in redis backed horizontal scaled version**  
Components: _[API] Data value set_ 


**[DHIS2-7268](https://jira.dhis2.org/browse/DHIS2-7268): DataElements identifiers are not translated to CODE when idScheme=CODE is used**  
Components: _[API] Events_ 


**[DHIS2-7373](https://jira.dhis2.org/browse/DHIS2-7373): Conflict in "geometry" does not include "reference" field in server response**  
Components: _[API] Events_ 


**[DHIS2-6914](https://jira.dhis2.org/browse/DHIS2-6914): API response does not include "reference" when deleting events**  
Components: _[API] Events_, _[API] Tracker_ 


**[DHIS2-7237](https://jira.dhis2.org/browse/DHIS2-7237): Toggling `enabled` field of a job in jobConfigurations does not update jobStatus**  
Components: _[API] Job scheduler_ 


**[DHIS2-7225](https://jira.dhis2.org/browse/DHIS2-7225): Importing map objects through /metadata API endpoint fails**  
Components: _[API] Metadata import-export_  
**Retesting**


**[DHIS2-7255](https://jira.dhis2.org/browse/DHIS2-7255): Add PDF data value import function to /api/datavalueSets endpoint**  
Components: _[API] Metadata import-export_ 


**[DHIS2-6133](https://jira.dhis2.org/browse/DHIS2-6133): Search screen won't display (because the metadata export/import process has corrupted trackedEntityTypeAttributes?)**  
Components: _[API] Metadata import-export_ 


**[DHIS2-6572](https://jira.dhis2.org/browse/DHIS2-6572): DELETE app endpoint hangs and subsequent installs with same name deletes files from the apps re-installed**  
Components: _[API] Other_  
**Needs Update**


**[DHIS2-4044](https://jira.dhis2.org/browse/DHIS2-4044): Data Element translation in indicator and validation rule**  
Components: _[API] Other_, _[API] Validation_, _[App] Data visualizer_, _[App] GIS_, _[App] Maps_, _[App] Pivot table_  
**Needs Update**


**[DHIS2-6135](https://jira.dhis2.org/browse/DHIS2-6135): DataSet Sections and Sections are not getting translated.**  
Components: _[API] Other_ 


**[DHIS2-7320](https://jira.dhis2.org/browse/DHIS2-7320): Cannot create predictor for autofill Data Element with categoryCombos**  
Components: _[API] Predictors_  
**Needs Update**


**[DHIS2-6920](https://jira.dhis2.org/browse/DHIS2-6920): (Sync process) Dataset, Sections not updated when elements & sections removed**  
Components: _[API] Synchronization_  
**Testing**


**[DHIS2-7067](https://jira.dhis2.org/browse/DHIS2-7067): Complete and create enrollments in the same payload**  
Components: _[API] Tracker_ 


**[DHIS2-7194](https://jira.dhis2.org/browse/DHIS2-7194): DST transition dates not saved in some cases**  
Components: _[API] Tracker_ 


**[DHIS2-7282](https://jira.dhis2.org/browse/DHIS2-7282): Any modification of a user clears lastlogin**  
Components: _[API] User_, _[App] User_ 


**[DHIS2-7274](https://jira.dhis2.org/browse/DHIS2-7274): Custom logos stored in S3 return 500**  
Components: _[App] Core resource_ 


**[DHIS2-6691](https://jira.dhis2.org/browse/DHIS2-6691): DHIS2 2.30 Horzontal Scaling - slow getSystemCalendar redis (get/pexpire)**  
Components: _[App] Dashboard_ 


**[DHIS2-6198](https://jira.dhis2.org/browse/DHIS2-6198): Users with authority to access the Data Quality app are denied acccess**  
Components: _[App] Data quality_ 


**[DHIS2-6880](https://jira.dhis2.org/browse/DHIS2-6880): DataStore Manager - total failure after deleting a stored item**  
Components: _[App] Data store_ 


**[DHIS2-7249](https://jira.dhis2.org/browse/DHIS2-7249): Interpretation panel in maps and visualizer no longer supports copy/paste of rich text formatting directly**  
Components: _[App] Data visualizer_, _[App] Maps_ 


**[DHIS2-1790](https://jira.dhis2.org/browse/DHIS2-1790): Short name in Event Reports app**  
Components: _[App] Event reports_, _[App] Event visualizer_ 


**[DHIS2-7114](https://jira.dhis2.org/browse/DHIS2-7114): Help link in profile menu is broken**  
Components: _[App] Header and menu_ 


**[DHIS2-6247](https://jira.dhis2.org/browse/DHIS2-6247): Importing zipped data files fail**  
Components: _[App] Import-export_ 


**[DHIS2-7069](https://jira.dhis2.org/browse/DHIS2-7069): Event Import with idScheme=CODE fails to update event**  
Components: _[API] Events_, _[App] Import-export_ 


**[DHIS2-6379](https://jira.dhis2.org/browse/DHIS2-6379): Importing metadata does not consider the DRY RUN flag**  
Components: _[App] Import-export_ 


**[DHIS2-7301](https://jira.dhis2.org/browse/DHIS2-7301): Capture app - re-sorting event program data elements result in them disappearing**  
Components: _[App] Maintenance_ 


**[DHIS2-6350](https://jira.dhis2.org/browse/DHIS2-6350): Attribute ID is deleted from program attributes**  
Components: _[API] Metadata model_, _[App] Maintenance_ 


**[DHIS2-5419](https://jira.dhis2.org/browse/DHIS2-5419): Unsupported options for feature type is shown in Maintenance**  
Components: _[App] Maintenance_ 


**[DHIS2-6588](https://jira.dhis2.org/browse/DHIS2-6588): Fix expression tests for different types of expressions**  
Components: _[API] Other_, _[App] Maintenance_ 


**[DHIS2-6362](https://jira.dhis2.org/browse/DHIS2-6362): Short names visible in UI but no persisted in database**  
Components: _[API] Metadata model_, _[App] Maintenance_ 


**[DHIS2-7387](https://jira.dhis2.org/browse/DHIS2-7387): Maps app never loads in IE11**  
Components: _[App] Maps_ 


**[DHIS2-7098](https://jira.dhis2.org/browse/DHIS2-7098): Rules that make an attribute mandatory fail in TEI dashboard**  
Components: _[App] Tracker capture_ 


**[DHIS2-6926](https://jira.dhis2.org/browse/DHIS2-6926): Creating relationship between TEI of TET type A and TEI of TET type B only shows records of Type B**  
Components: _[App] Tracker capture_ 


**[DHIS2-6125](https://jira.dhis2.org/browse/DHIS2-6125): Tracker Capture search with "Age" data type is unusable**  
Components: _[App] Tracker capture_ 


**[DHIS2-7389](https://jira.dhis2.org/browse/DHIS2-7389): [UA App] Headerbar app links don't work on non-root deployments**  
Components: _[App] Usage analytics_ 


**[DHIS2-2022](https://jira.dhis2.org/browse/DHIS2-2022): Category option combination not updated after category option rename**  
Components: _Backend_  
**Testing**



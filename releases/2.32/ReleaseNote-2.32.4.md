# Patch 2.32.4 Release Note

## Features

**[DHIS2-7174](https://jira.dhis2.org/browse/DHIS2-7174): Improve cache (Improve cache versioning and facilitate downgrade)**  
Components: _[App] Capture_

**[DHIS2-4653](https://jira.dhis2.org/browse/DHIS2-4653): Remove messaging section in settings app**  
Components: _[App] Settings_

## Bugs

**[DHIS2-8177](https://jira.dhis2.org/browse/DHIS2-8177): Indicators return 0 with no numerator data but with denominator data**  
Components: _[API] Analytics_

**[DHIS2-7712](https://jira.dhis2.org/browse/DHIS2-7712): Event reports doesn't use dimension restrictions assigned to a user account**  
Components: _[API] Analytics_, _[API] Events_  
**Needs Update**

**[DHIS2-7256](https://jira.dhis2.org/browse/DHIS2-7256): Error perfom maintanace updating category option combination**  
Components: _[API] Data administration_

**[DHIS2-7994](https://jira.dhis2.org/browse/DHIS2-7994): Request to /event/eventRows fails on NullPointerException**  
Components: _[API] Events_, _Backend_

**[DHIS2-7596](https://jira.dhis2.org/browse/DHIS2-7596): V{event_date} in Program Indicator formulas doesn't work**  
Components: _[API] Events_

**[DHIS2-8160](https://jira.dhis2.org/browse/DHIS2-8160): Wrong URL is logged and/or called when executing DATA_SYNCHRONISATION job**  
Components: _[API] Job scheduler_

**[DHIS2-7936](https://jira.dhis2.org/browse/DHIS2-7936): Metadata sync and import is failing with TransientObjectException**  
Components: _[API] Metadata import-export_, _[API] Synchronization_

**[DHIS2-8035](https://jira.dhis2.org/browse/DHIS2-8035): Import fails when importing metadata file that contains option sets**  
Components: _[API] Metadata import-export_

**[DHIS2-6543](https://jira.dhis2.org/browse/DHIS2-6543): Error importing metadata including program stage section with sequential renderType**  
Components: _[API] Metadata import-export_

**[DHIS2-2109](https://jira.dhis2.org/browse/DHIS2-2109): Validation left/right side description exception**  
Components: _[API] Metadata import-export_

**[DHIS2-7496](https://jira.dhis2.org/browse/DHIS2-7496): Skip sharing property is not working correctly with metadata import**  
Components: _[API] Metadata import-export_

**[DHIS2-7854](https://jira.dhis2.org/browse/DHIS2-7854): Can not get data from the fileResources endpoint**  
Components: _[API] Metadata model_

**[DHIS2-8068](https://jira.dhis2.org/browse/DHIS2-8068): Error trying to save predictor**  
Components: _[API] Predictors_, _[App] Maintenance_

**[DHIS2-7824](https://jira.dhis2.org/browse/DHIS2-7824): Predictor - Predictor formulas with Program Indicators runs at snail pace**  
Components: _[API] Predictors_

**[DHIS2-7884](https://jira.dhis2.org/browse/DHIS2-7884): Data sync is not updating the deleted value for deleted events**  
Components: _[API] Synchronization_

**[DHIS2-7476](https://jira.dhis2.org/browse/DHIS2-7476): Tracker data synchronization does not synchronize some of TEAVs**  
Components: _[API] Synchronization_

**[DHIS2-8137](https://jira.dhis2.org/browse/DHIS2-8137): Relationships API end point/resource do not block duplicate relationships**  
Components: _[API] Tracker_

**[DHIS2-7442](https://jira.dhis2.org/browse/DHIS2-7442): Can't open TEI dashboard of TEI registered in old version**  
Components: _[API] Tracker_  
**Testing**

**[DHIS2-7892](https://jira.dhis2.org/browse/DHIS2-7892): Issue in Enrollment Analytics Indicators with Event Boundaries**  
Components: _[API] Tracker_  
**Needs Update**

**[DHIS2-5777](https://jira.dhis2.org/browse/DHIS2-5777): User can edit and save ProgramStages that includes DataElement user does not have access to**  
Components: _[API] Tracker_

**[DHIS2-7606](https://jira.dhis2.org/browse/DHIS2-7606): Auto-generated ID creates conflict when saving TEI profile**  
Components: _[API] Tracker_

**[DHIS2-7893](https://jira.dhis2.org/browse/DHIS2-7893): Resetting password fails**  
Components: _[API] User_

**[DHIS2-1439](https://jira.dhis2.org/browse/DHIS2-1439): Email invite problems when email address has a + in it**  
Components: _[API] User_

**[DHIS2-7875](https://jira.dhis2.org/browse/DHIS2-7875): Fields are pre-filled with current user username and password**  
Components: _[API] User_

**[DHIS2-8033](https://jira.dhis2.org/browse/DHIS2-8033): Indicator decimal output set to zero are not respected in the analytics**  
Components: _[App] Analytics_  

**[DHIS2-8032](https://jira.dhis2.org/browse/DHIS2-8032): Application Title is cleared when clearing cache**  
Components: _[App] Cache cleaner_

**[DHIS2-7894](https://jira.dhis2.org/browse/DHIS2-7894): Can not save form when a hide section rule is active**  
Components: _[App] Capture_

**[DHIS2-7749](https://jira.dhis2.org/browse/DHIS2-7749): Large metadata volumes makes LocalStorage and MemoryStorage cache unsuitable**  
Components: _[App] Capture_

**[DHIS2-7885](https://jira.dhis2.org/browse/DHIS2-7885): Opening a new version of the capture app in the same domain fails**  
Components: _[App] Capture_

**[DHIS2-7044](https://jira.dhis2.org/browse/DHIS2-7044): Data Visualizer Error if Option-Style-No Space Between Columns/Bars is selected**  
Components: _[App] Data visualizer_

**[DHIS2-7797](https://jira.dhis2.org/browse/DHIS2-7797): Data Element with Average aggregationType not working when placed as Report filter**  
Components: _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-7802](https://jira.dhis2.org/browse/DHIS2-7802): Vertical scaling breaks layout on >= 3 filter rows**  
Components: _[App] Data visualizer_

**[DHIS2-6144](https://jira.dhis2.org/browse/DHIS2-6144): Cannot Delete File Resources from Event Capture**  
Components: _[App] Event capture_

**[DHIS2-8205](https://jira.dhis2.org/browse/DHIS2-8205): Importing options and optionSets doesn't update, only fails validation**  
Components: _[App] Import-export_

**[DHIS2-8195](https://jira.dhis2.org/browse/DHIS2-8195): Metadata and event export is not working**  
Components: _[App] Import-export_  

**[DHIS2-6991](https://jira.dhis2.org/browse/DHIS2-6991): Import/Export app orgunit attributes hardcoded to "HR identifier"?**  
Components: _[App] Import-export_

**[DHIS2-7991](https://jira.dhis2.org/browse/DHIS2-7991): Localised versions showing invalid characters**  
Components: _[App] Maintenance_

**[DHIS2-8097](https://jira.dhis2.org/browse/DHIS2-8097): Unable to select data elements of type email when creating program stage notifications**  
Components: _[App] Maintenance_

**[DHIS2-7147](https://jira.dhis2.org/browse/DHIS2-7147): Add UI to select MissingValueStrategy for predictor generator expressions**  
Components: _[App] Maintenance_

**[DHIS2-7773](https://jira.dhis2.org/browse/DHIS2-7773): Empty geoFeatures response for boundary layers gives error**  
Components: _[App] Maps_

**[DHIS2-7839](https://jira.dhis2.org/browse/DHIS2-7839): Maps app crashes with certain period selection**  
Components: _[App] Maps_

**[DHIS2-7866](https://jira.dhis2.org/browse/DHIS2-7866): Maps app crash for some filter combinations**  
Components: _[App] Maps_

**[DHIS2-7867](https://jira.dhis2.org/browse/DHIS2-7867): Filter row overflows beyond boundaries**  
Components: _[App] Maps_

**[DHIS2-8200](https://jira.dhis2.org/browse/DHIS2-8200): Reports app (Beta) broken in v32 due to using v33 versioned api calls**  
Components: _[App] Reports_  

**[DHIS2-7901](https://jira.dhis2.org/browse/DHIS2-7901): Database locales incorrectly presents UI locales instead of DB locales in settings**  
Components: _[App] Settings_

**[DHIS2-8066](https://jira.dhis2.org/browse/DHIS2-8066): Tracker performance issues**  
Components: _[App] Tracker capture_

**[DHIS2-7923](https://jira.dhis2.org/browse/DHIS2-7923): Tracked Entity Attributes with Option Set are blank**  
Components: _[App] Tracker capture_

**[DHIS2-7488](https://jira.dhis2.org/browse/DHIS2-7488): Getting error when trying to upload file to the file type data element in tracker capture**  
Components: _[App] Tracker capture_

**[DHIS2-7808](https://jira.dhis2.org/browse/DHIS2-7808): Editing the user fields also changes the assigned user roles in User App**  
Components: _[App] User_

**[DHIS2-8099](https://jira.dhis2.org/browse/DHIS2-8099): Add new button hiding the next page arrow in user app**  
Components: _[App] User_

**[DHIS2-7845](https://jira.dhis2.org/browse/DHIS2-7845): Prevent old password autofill**  
Components: _[App] User Profile_

**[DHIS2-7838](https://jira.dhis2.org/browse/DHIS2-7838): V2_32_27__Clean_attribute_values.sql Erroring out on startup**  
Components: _Backend_


# Patch 2.31.7 Release Note

## Features

**[DHIS2-7174](https://jira.dhis2.org/browse/DHIS2-7174): Improve cache (Improve cache versioning and facilitate downgrade)**  
Components: _[App] Capture_

**[DHIS2-4653](https://jira.dhis2.org/browse/DHIS2-4653): Remove messaging section in settings app**  
Components: _[App] Settings_

## Bugs

**[DHIS2-7256](https://jira.dhis2.org/browse/DHIS2-7256): Error perfom maintanace updating category option combination**  
Components: _[API] Data administration_

**[DHIS2-7806](https://jira.dhis2.org/browse/DHIS2-7806): Deprecated/discarded table columns not deleted from database**  
Components: _[API] Database migration_  

**[DHIS2-7994](https://jira.dhis2.org/browse/DHIS2-7994): Request to /event/eventRows fails on NullPointerException**  
Components: _[API] Events_, _Backend_

**[DHIS2-6837](https://jira.dhis2.org/browse/DHIS2-6837): Import metadata of dataElements with attribute values cause duplicate values**  
Components: _[API] Metadata import-export_

**[DHIS2-2109](https://jira.dhis2.org/browse/DHIS2-2109): Validation left/right side description exception**  
Components: _[API] Metadata import-export_

**[DHIS2-7496](https://jira.dhis2.org/browse/DHIS2-7496): Skip sharing property is not working correctly with metadata import**  
Components: _[API] Metadata import-export_

**[DHIS2-7811](https://jira.dhis2.org/browse/DHIS2-7811): Import metadata duplicates existing attribute values**  
Components: _[API] Metadata import-export_

**[DHIS2-7936](https://jira.dhis2.org/browse/DHIS2-7936): Metadata sync and import is failing with TransientObjectException**  
Components: _[API] Metadata import-export_, _[API] Synchronization_  

**[DHIS2-7461](https://jira.dhis2.org/browse/DHIS2-7461): No import summary shown for Event, Data and Metadata Import in all the formats**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-6285](https://jira.dhis2.org/browse/DHIS2-6285): API accepts optionSets with options having duplicate code or name**  
Components: _[API] Metadata import-export_

**[DHIS2-7587](https://jira.dhis2.org/browse/DHIS2-7587): Self Registration Password**  
Components: _[API] Other_

**[DHIS2-8068](https://jira.dhis2.org/browse/DHIS2-8068): Error trying to save predictor**  
Components: _[API] Predictors_, _[App] Maintenance_  

**[DHIS2-7755](https://jira.dhis2.org/browse/DHIS2-7755): Predictor - re-running Predictor with multiple levels is crashing**  
Components: _[API] Predictors_

**[DHIS2-7827](https://jira.dhis2.org/browse/DHIS2-7827): Tracker data synchronization synchronizes also attributes that should be skipped**  
Components: _[API] Synchronization_

**[DHIS2-7476](https://jira.dhis2.org/browse/DHIS2-7476): Tracker data synchronization does not synchronize some of TEAVs**  
Components: _[API] Synchronization_

**[DHIS2-5777](https://jira.dhis2.org/browse/DHIS2-5777): User can edit and save ProgramStages that includes DataElement user does not have access to**  
Components: _[API] Tracker_

**[DHIS2-7606](https://jira.dhis2.org/browse/DHIS2-7606): Auto-generated ID creates conflict when saving TEI profile**  
Components: _[API] Tracker_

**[DHIS2-7893](https://jira.dhis2.org/browse/DHIS2-7893): Resetting password fails**  
Components: _[API] User_

**[DHIS2-7875](https://jira.dhis2.org/browse/DHIS2-7875): Fields are pre-filled with current user username and password**  
Components: _[API] User_

**[DHIS2-8032](https://jira.dhis2.org/browse/DHIS2-8032): Application Title is cleared when clearing cache**  
Components: _[App] Cache cleaner_

**[DHIS2-7385](https://jira.dhis2.org/browse/DHIS2-7385): Unknown comment author when the comment was created with event**  
Components: _[App] Capture_

**[DHIS2-7894](https://jira.dhis2.org/browse/DHIS2-7894): Can not save form when a hide section rule is active**  
Components: _[App] Capture_

**[DHIS2-7749](https://jira.dhis2.org/browse/DHIS2-7749): Large metadata volumes makes LocalStorage and MemoryStorage cache unsuitable**  
Components: _[App] Capture_

**[DHIS2-7885](https://jira.dhis2.org/browse/DHIS2-7885): Opening a new version of the capture app in the same domain fails**  
Components: _[App] Capture_

**[DHIS2-7259](https://jira.dhis2.org/browse/DHIS2-7259): Capture App performance issues with large metadata volume (Category Options and Org Units)**  
Components: _[App] Capture_

**[DHIS2-7802](https://jira.dhis2.org/browse/DHIS2-7802): Vertical scaling breaks layout on >= 3 filter rows**  
Components: _[App] Data visualizer_

**[DHIS2-6670](https://jira.dhis2.org/browse/DHIS2-6670): Recommended dimensions permissions**  
Components: _[App] Data visualizer_

**[DHIS2-6073](https://jira.dhis2.org/browse/DHIS2-6073): Unable to deselect "Event Completed?" check box in Event Capture**  
Components: _[App] Event capture_

**[DHIS2-7147](https://jira.dhis2.org/browse/DHIS2-7147): Add UI to select MissingValueStrategy for predictor generator expressions**  
Components: _[App] Maintenance_

**[DHIS2-7754](https://jira.dhis2.org/browse/DHIS2-7754): Maintenance app does not properly work with (JSONB) AttributeValues**  
Components: _[App] Maintenance_

**[DHIS2-7773](https://jira.dhis2.org/browse/DHIS2-7773): Empty geoFeatures response for boundary layers gives error**  
Components: _[App] Maps_

**[DHIS2-7839](https://jira.dhis2.org/browse/DHIS2-7839): Maps app crashes with certain period selection**  
Components: _[App] Maps_

**[DHIS2-7867](https://jira.dhis2.org/browse/DHIS2-7867): Filter row overflows beyond boundaries**  
Components: _[App] Maps_

**[DHIS2-8053](https://jira.dhis2.org/browse/DHIS2-8053): Fix headerbar in v31**  
Components: _[App] Messaging_

**[DHIS2-7901](https://jira.dhis2.org/browse/DHIS2-7901): Database locales incorrectly presents UI locales instead of DB locales in settings**  
Components: _[App] Settings_

**[DHIS2-7923](https://jira.dhis2.org/browse/DHIS2-7923): Tracked Entity Attributes with Option Set are blank**  
Components: _[App] Tracker capture_

**[DHIS2-7808](https://jira.dhis2.org/browse/DHIS2-7808): Editing the user fields also changes the assigned user roles in User App**  
Components: _[App] User_  

**[DHIS2-7662](https://jira.dhis2.org/browse/DHIS2-7662): CreatedBy field is set to undefined in UserGroup after performing a metadatasync**  
Components: _[App] User_

**[DHIS2-7845](https://jira.dhis2.org/browse/DHIS2-7845): Prevent old password autofill**  
Components: _[App] User Profile_

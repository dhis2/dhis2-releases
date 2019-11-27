# Patch 2.33.1 Release Note

## Features

**[DHIS2-7070](https://jira.dhis2.org/browse/DHIS2-7070): Add IdScheme=ATTRIBUTE: to events endpoint**  
Components: _[API] Events_

**[DHIS2-7656](https://jira.dhis2.org/browse/DHIS2-7656): Static content end-point that returns json containing the URL to the file(s)**  
Components: _[API] Other_

**[DHIS2-5942](https://jira.dhis2.org/browse/DHIS2-5942): Enable the editing of incorrect enrollment dates in Tracker Capture**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-4373](https://jira.dhis2.org/browse/DHIS2-4373): Support centralized audit**  
Components: _[API] Security_, _[API] Tracker_

**[DHIS2-7658](https://jira.dhis2.org/browse/DHIS2-7658): Split out enrollments,events from tracked entity payload**  
Components: _[API] Tracker_

**[DHIS2-7174](https://jira.dhis2.org/browse/DHIS2-7174): Improve cache (Improve cache versioning and facilitate downgrade)**  
Components: _[App] Capture_

**[DHIS2-7690](https://jira.dhis2.org/browse/DHIS2-7690): Style should change in split map views when looking at facilities**  
Components: _[App] Maps_

## Bugs

**[DHIS2-6901](https://jira.dhis2.org/browse/DHIS2-6901): Indicator formulas that include other indicators are not working**  
Components: _[API] Analytics_

**[DHIS2-7676](https://jira.dhis2.org/browse/DHIS2-7676): Mismatch between header and row lengths in analytics API**  
Components: _[API] Analytics_

**[DHIS2-5197](https://jira.dhis2.org/browse/DHIS2-5197): d2:monthsBetween (date1,date2) gives wrong results**  
Components: _[API] Analytics_, _[API] Other_  
**Testing**

**[DHIS2-7256](https://jira.dhis2.org/browse/DHIS2-7256): Error perfom maintanace updating category option combination**  
Components: _[API] Data administration_  
**Reopened**

**[DHIS2-7280](https://jira.dhis2.org/browse/DHIS2-7280): Can't remove soft deleted enrollments/TEIs due to foreign key constraint "fk_programmessage_programinstanceid"**  
Components: _[API] Data administration_

**[DHIS2-7583](https://jira.dhis2.org/browse/DHIS2-7583): Unable to permanently remove events under Data Administration -> Maintenance**  
Components: _[API] Data administration_

**[DHIS2-7789](https://jira.dhis2.org/browse/DHIS2-7789): Event Analytics query fails - DataElement is not part of given program**  
Components: _[API] Events_

**[DHIS2-7936](https://jira.dhis2.org/browse/DHIS2-7936): Metadata sync and import is failing with TransientObjectException**  
Components: _[API] Metadata import-export_, _[API] Synchronization_  
**In Review**

**[DHIS2-7461](https://jira.dhis2.org/browse/DHIS2-7461): No import summary shown for Event, Data and Metadata Import in all the formats**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-6285](https://jira.dhis2.org/browse/DHIS2-6285): API accepts optionSets with options having duplicate code or name**  
Components: _[API] Metadata import-export_

**[DHIS2-7611](https://jira.dhis2.org/browse/DHIS2-7611): Metadata filtering causes null pointer exception**  
Components: _[API] Metadata model_

**[DHIS2-7629](https://jira.dhis2.org/browse/DHIS2-7629): DataStatistics doesn't include endDate when getting data**  
Components: _[API] Other_

**[DHIS2-7381](https://jira.dhis2.org/browse/DHIS2-7381): Deleted Objects endpoint paging does not work**  
Components: _[API] Other_

**[DHIS2-7755](https://jira.dhis2.org/browse/DHIS2-7755): Predictor - re-running Predictor with multiple levels is crashing**  
Components: _[API] Predictors_

**[DHIS2-7476](https://jira.dhis2.org/browse/DHIS2-7476): Tracker data synchronization does not synchronize some of TEAVs**  
Components: _[API] Synchronization_

**[DHIS2-7827](https://jira.dhis2.org/browse/DHIS2-7827): Tracker data synchronization synchronizes also attributes that should be skipped**  
Components: _[API] Synchronization_  
**Testing**

**[DHIS2-7667](https://jira.dhis2.org/browse/DHIS2-7667): Events are not deleted when enrolment is deleted**  
Components: _[API] Tracker_

**[DHIS2-7189](https://jira.dhis2.org/browse/DHIS2-7189): Adding coordinates throws (silent) 409 error**  
Components: _[API] Tracker_

**[DHIS2-7681](https://jira.dhis2.org/browse/DHIS2-7681): Error enrolling TEI with relationships from event into another program**  
Components: _[API] Tracker_

**[DHIS2-7533](https://jira.dhis2.org/browse/DHIS2-7533): Conflict in Enrollment or Incident date does not include "reference" field in server response**  
Components: _[API] Tracker_

**[DHIS2-7893](https://jira.dhis2.org/browse/DHIS2-7893): Resetting password fails**  
Components: _[API] User_

**[DHIS2-7875](https://jira.dhis2.org/browse/DHIS2-7875): Fields are pre-filled with current user username and password**  
Components: _[API] User_

**[DHIS2-7724](https://jira.dhis2.org/browse/DHIS2-7724): /api/me/dataApprovalLevels is missing in 2.32 onwards**  
Components: _[API] User_

**[DHIS2-7512](https://jira.dhis2.org/browse/DHIS2-7512): Authority names get munged in role editing screen**  
Components: _[API] User_

**[DHIS2-7927](https://jira.dhis2.org/browse/DHIS2-7927): Translations not working**  
Components: _[App] Capture_

**[DHIS2-7928](https://jira.dhis2.org/browse/DHIS2-7928): Capture app header bar dhis2 logo forwards to wrong url**  
Components: _[App] Capture_

**[DHIS2-7749](https://jira.dhis2.org/browse/DHIS2-7749): Large metadata volumes makes LocalStorage and MemoryStorage cache unsuitable**  
Components: _[App] Capture_

**[DHIS2-7885](https://jira.dhis2.org/browse/DHIS2-7885): Opening a new version of the capture app in the same domain fails**  
Components: _[App] Capture_

**[DHIS2-7259](https://jira.dhis2.org/browse/DHIS2-7259): Capture App performance issues with large metadata volume (Category Options and Org Units)**  
Components: _[App] Capture_

**[DHIS2-6919](https://jira.dhis2.org/browse/DHIS2-6919): Cannot toggle to TEI (Tracker Capture) in relationship widget in Capture app**  
Components: _[App] Capture_

**[DHIS2-7554](https://jira.dhis2.org/browse/DHIS2-7554): System date setting and capture app**  
Components: _[App] Capture_

**[DHIS2-6670](https://jira.dhis2.org/browse/DHIS2-6670): Recommended dimensions permissions**  
Components: _[App] Data visualizer_

**[DHIS2-7446](https://jira.dhis2.org/browse/DHIS2-7446): User can see all OU hierarchy in new data visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-7532](https://jira.dhis2.org/browse/DHIS2-7532): Data Visualizer - hovering popup in pie-charts show incorrect values**  
Components: _[App] Data visualizer_

**[DHIS2-7281](https://jira.dhis2.org/browse/DHIS2-7281): Metadata Dependency Export is exporting all objects under the Object Type**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-7773](https://jira.dhis2.org/browse/DHIS2-7773): Empty geoFeatures response for boundary layers gives error**  
Components: _[App] Maps_

**[DHIS2-7839](https://jira.dhis2.org/browse/DHIS2-7839): Maps app crashes with certain period selection**  
Components: _[App] Maps_

**[DHIS2-7866](https://jira.dhis2.org/browse/DHIS2-7866): Maps app crash for some filter combinations**  
Components: _[App] Maps_

**[DHIS2-7867](https://jira.dhis2.org/browse/DHIS2-7867): Filter row overflows beyond boundaries**  
Components: _[App] Maps_

**[DHIS2-7878](https://jira.dhis2.org/browse/DHIS2-7878): Thematic layer: No feature count in brackets**  
Components: _[App] Maps_

**[DHIS2-7684](https://jira.dhis2.org/browse/DHIS2-7684): Downloading HTML report template doesn't work on chrome**  
Components: _[App] Reports_

**[DHIS2-7901](https://jira.dhis2.org/browse/DHIS2-7901): Database locales incorrectly presents UI locales instead of DB locales in settings**  
Components: _[App] Settings_

**[DHIS2-7923](https://jira.dhis2.org/browse/DHIS2-7923): Tracked Entity Attributes with Option Set are blank**  
Components: _[App] Tracker capture_

**[DHIS2-7601](https://jira.dhis2.org/browse/DHIS2-7601): Bidirectional relationship does not show on both entities**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-7607](https://jira.dhis2.org/browse/DHIS2-7607): Error when adding new relationships when old relationships with no access exists**  
Components: _[App] Tracker capture_

**[DHIS2-7662](https://jira.dhis2.org/browse/DHIS2-7662): CreatedBy field is set to undefined in UserGroup after performing a metadatasync**  
Components: _[App] User_

**[DHIS2-7275](https://jira.dhis2.org/browse/DHIS2-7275): Emails with CAPITAL letters in domain trigger hidden warning upon upgrade**  
Components: _[App] User_

**[DHIS2-7845](https://jira.dhis2.org/browse/DHIS2-7845): Prevent old password autofill**  
Components: _[App] User Profile_


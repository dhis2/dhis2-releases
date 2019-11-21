# Patch 2.32.3 Release Note

## Features

**[DHIS2-7096](https://jira.dhis2.org/browse/DHIS2-7096): Event export without event UID**  
Components: _[API] Events_

**[DHIS2-7070](https://jira.dhis2.org/browse/DHIS2-7070): Add IdScheme=ATTRIBUTE: to events endpoint**  
Components: _[API] Events_

**[DHIS2-6188](https://jira.dhis2.org/browse/DHIS2-6188): Query parameter for relative timestamps in Tracker API**  
Components: _[API] Events_, _[API] Tracker_

**[DHIS2-590](https://jira.dhis2.org/browse/DHIS2-590): Program Indicators to support nested functions**  
Components: _[API] Metadata model_

**[DHIS2-7656](https://jira.dhis2.org/browse/DHIS2-7656): Static content end-point that returns json containing the URL to the file(s)**  
Components: _[API] Other_

**[DHIS2-6560](https://jira.dhis2.org/browse/DHIS2-6560): Specify read-only transaction level in service layer methods**  
Components: _[API] Other_

**[DHIS2-7658](https://jira.dhis2.org/browse/DHIS2-7658): Split out enrollments,events from tracked entity payload**  
Components: _[API] Tracker_

**[DHIS2-5709](https://jira.dhis2.org/browse/DHIS2-5709): Skip sharing option for metadata download with dependencies - [Frontend]**  
Components: _[App] Import-export_

## Bugs

**[DHIS2-7655](https://jira.dhis2.org/browse/DHIS2-7655): TEAs with data type ORGANISATION UNIT cause bad SQL grammar in analytics queries**  
Components: _[API] Analytics_

**[DHIS2-7676](https://jira.dhis2.org/browse/DHIS2-7676): Mismatch between header and row lengths in analytics API**  
Components: _[API] Analytics_

**[DHIS2-7157](https://jira.dhis2.org/browse/DHIS2-7157): UID of OU appearing instead of Name on Event reports**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-2315](https://jira.dhis2.org/browse/DHIS2-2315): Datatype "Organisation unit" show UID in event report**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-6865](https://jira.dhis2.org/browse/DHIS2-6865): Event Report shows OU UID when Data Element has type ORGANISATION_UNIT**  
Components: _[API] Analytics_, _[API] Events_

**[DHIS2-7280](https://jira.dhis2.org/browse/DHIS2-7280): Can't remove soft deleted enrollments/TEIs due to foreign key constraint "fk_programmessage_programinstanceid"**  
Components: _[API] Data administration_

**[DHIS2-7583](https://jira.dhis2.org/browse/DHIS2-7583): Unable to permanently remove events under Data Administration -> Maintenance**  
Components: _[API] Data administration_

**[DHIS2-6837](https://jira.dhis2.org/browse/DHIS2-6837): Import metadata of dataElements with attribute values cause duplicate values**  
Components: _[API] Metadata import-export_  

**[DHIS2-7461](https://jira.dhis2.org/browse/DHIS2-7461): No import summary shown for Event, Data and Metadata Import in all the formats**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-6285](https://jira.dhis2.org/browse/DHIS2-6285): API accepts optionSets with options having duplicate code or name**  
Components: _[API] Metadata import-export_

**[DHIS2-7281](https://jira.dhis2.org/browse/DHIS2-7281): Metadata Dependency Export is exporting all objects under the Object Type**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-7452](https://jira.dhis2.org/browse/DHIS2-7452): Redis env: No taskSummaries when metadata import is not successful**  
Components: _[API] Metadata import-export_

**[DHIS2-7611](https://jira.dhis2.org/browse/DHIS2-7611): Metadata filtering causes null pointer exception**  
Components: _[API] Metadata model_

**[DHIS2-7629](https://jira.dhis2.org/browse/DHIS2-7629): DataStatistics doesn't include endDate when getting data**  
Components: _[API] Other_

**[DHIS2-7381](https://jira.dhis2.org/browse/DHIS2-7381): Deleted Objects endpoint paging does not work**  
Components: _[API] Other_

**[DHIS2-7755](https://jira.dhis2.org/browse/DHIS2-7755): Predictor - re-running Predictor with multiple levels is crashing**  
Components: _[API] Predictors_

**[DHIS2-7744](https://jira.dhis2.org/browse/DHIS2-7744): Predictor - working expressions returns "not well-formed" error message**  
Components: _[API] Predictors_

**[DHIS2-7502](https://jira.dhis2.org/browse/DHIS2-7502): Realize user invitation UI is leaking token through referred header**  
Components: _[API] Security_, _[API] User_

**[DHIS2-7827](https://jira.dhis2.org/browse/DHIS2-7827): Tracker data synchronization synchronizes also attributes that should be skipped**  
Components: _[API] Synchronization_  
**Testing**

**[DHIS2-7667](https://jira.dhis2.org/browse/DHIS2-7667): Events are not deleted when enrolment is deleted**  
Components: _[API] Tracker_

**[DHIS2-6770](https://jira.dhis2.org/browse/DHIS2-6770): Deleting trackedEntityInstance doesn´t delete relationships**  
Components: _[API] Tracker_

**[DHIS2-7189](https://jira.dhis2.org/browse/DHIS2-7189): Adding coordinates throws (silent) 409 error**  
Components: _[API] Tracker_

**[DHIS2-7019](https://jira.dhis2.org/browse/DHIS2-7019): Tracker - moving cases permanently to another OrgUnit do not work**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-7681](https://jira.dhis2.org/browse/DHIS2-7681): Error enrolling TEI with relationships from event into another program**  
Components: _[API] Tracker_

**[DHIS2-7533](https://jira.dhis2.org/browse/DHIS2-7533): Conflict in Enrollment or Incident date does not include "reference" field in server response**  
Components: _[API] Tracker_

**[DHIS2-6054](https://jira.dhis2.org/browse/DHIS2-6054): Can create events outside search scope**  
Components: _[API] Tracker_

**[DHIS2-7724](https://jira.dhis2.org/browse/DHIS2-7724): /api/me/dataApprovalLevels is missing in 2.32 onwards**  
Components: _[API] User_

**[DHIS2-7512](https://jira.dhis2.org/browse/DHIS2-7512): Authority names get munged in role editing screen**  
Components: _[API] User_

**[DHIS2-7259](https://jira.dhis2.org/browse/DHIS2-7259): Capture App performance issues with large metadata volume (Category Options and Org Units)**  
Components: _[App] Capture_

**[DHIS2-6919](https://jira.dhis2.org/browse/DHIS2-6919): Cannot toggle to TEI (Tracker Capture) in relationship widget in Capture app**  
Components: _[App] Capture_

**[DHIS2-7554](https://jira.dhis2.org/browse/DHIS2-7554): System date setting and capture app**  
Components: _[App] Capture_

**[DHIS2-6641](https://jira.dhis2.org/browse/DHIS2-6641): Download data from table, filename**  
Components: _[App] Capture_

**[DHIS2-7534](https://jira.dhis2.org/browse/DHIS2-7534): Data entry app does not prompt user to load cached data**  
Components: _[App] Data entry_

**[DHIS2-6670](https://jira.dhis2.org/browse/DHIS2-6670): Recommended dimensions permissions**  
Components: _[App] Data visualizer_

**[DHIS2-7446](https://jira.dhis2.org/browse/DHIS2-7446): User can see all OU hierarchy in new data visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-7532](https://jira.dhis2.org/browse/DHIS2-7532): Data Visualizer - hovering popup in pie-charts show incorrect values**  
Components: _[App] Data visualizer_

**[DHIS2-6868](https://jira.dhis2.org/browse/DHIS2-6868): Event Reports - Favorites don't save multiple filters on same date field**  
Components: _[App] Event reports_

**[DHIS2-4871](https://jira.dhis2.org/browse/DHIS2-4871): Cannot see values in event reports and visualizer if DE is type "Number"**  
Components: _[App] Event reports_, _[App] Event visualizer_

**[DHIS2-7614](https://jira.dhis2.org/browse/DHIS2-7614): Interpretations app is loading charts from old data visualiser**  
Components: _[App] Interpretations_

**[DHIS2-6394](https://jira.dhis2.org/browse/DHIS2-6394): Width of information box in Maps does not expand with long attributes/DE**  
Components: _[App] Maps_

**[DHIS2-7575](https://jira.dhis2.org/browse/DHIS2-7575): Disable autocomplete in forms**  
Components: _[App] Settings_, _[App] User_

**[DHIS2-6643](https://jira.dhis2.org/browse/DHIS2-6643): Small mistake with date format**  
Components: _[App] Settings_

**[DHIS2-7588](https://jira.dhis2.org/browse/DHIS2-7588): Settings -> Oauth2 -> Edit button does not work**  
Components: _[App] Settings_, _Frontend_

**[DHIS2-7094](https://jira.dhis2.org/browse/DHIS2-7094): Possible to edit attributes of TEI permanently moved to another org.unit if page is not refreshed**  
Components: _[App] Tracker capture_

**[DHIS2-7601](https://jira.dhis2.org/browse/DHIS2-7601): Bidirectional relationship does not show on both entities**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-7607](https://jira.dhis2.org/browse/DHIS2-7607): Error when adding new relationships when old relationships with no access exists**  
Components: _[App] Tracker capture_

**[DHIS2-7662](https://jira.dhis2.org/browse/DHIS2-7662): CreatedBy field is set to undefined in UserGroup after performing a metadatasync**  
Components: _[App] User_

**[DHIS2-7275](https://jira.dhis2.org/browse/DHIS2-7275): Emails with CAPITAL letters in domain trigger hidden warning upon upgrade**  
Components: _[App] User_

# Patch 2.31.6 Release Note

## Features

**[DHIS2-7070](https://jira.dhis2.org/browse/DHIS2-7070): Add IdScheme=ATTRIBUTE: to events endpoint**  
Components: _[API] Events_

**[DHIS2-6188](https://jira.dhis2.org/browse/DHIS2-6188): Query parameter for relative timestamps in Tracker API**  
Components: _[API] Events_, _[API] Tracker_

**[DHIS2-7096](https://jira.dhis2.org/browse/DHIS2-7096): Event export without event UID**  
Components: _[API] Events_

**[DHIS2-7656](https://jira.dhis2.org/browse/DHIS2-7656): Static content end-point that returns json containing the URL to the file(s)**  
Components: _[API] Other_

**[DHIS2-6560](https://jira.dhis2.org/browse/DHIS2-6560): Specify read-only transaction level in service layer methods**  
Components: _[API] Other_

**[DHIS2-5709](https://jira.dhis2.org/browse/DHIS2-5709): Skip sharing option for metadata download with dependencies - [Frontend]**  
Components: _[App] Import-export_

**[DHIS2-5968](https://jira.dhis2.org/browse/DHIS2-5968): Show owning org unit in the user interface for tracked entity instances**  
Components: _[App] Tracker capture_

## Bugs

**[DHIS2-7157](https://jira.dhis2.org/browse/DHIS2-7157): UID of OU appearing instead of Name on Event reports**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-7655](https://jira.dhis2.org/browse/DHIS2-7655): TEAs with data type ORGANISATION UNIT cause bad SQL grammar in analytics queries**  
Components: _[API] Analytics_

**[DHIS2-2315](https://jira.dhis2.org/browse/DHIS2-2315): Datatype "Organisation unit" show UID in event report**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-6865](https://jira.dhis2.org/browse/DHIS2-6865): Event Report shows OU UID when Data Element has type ORGANISATION_UNIT**  
Components: _[API] Analytics_, _[API] Events_

**[DHIS2-7453](https://jira.dhis2.org/browse/DHIS2-7453): Analytics query (dataValueSets) for indicators using orgunit group (OUG) in expression fails**  
Components: _[API] Analytics_, _[App] Analytics_

**[DHIS2-7583](https://jira.dhis2.org/browse/DHIS2-7583): Unable to permanently remove events under Data Administration -> Maintenance**  
Components: _[API] Data administration_

**[DHIS2-7280](https://jira.dhis2.org/browse/DHIS2-7280): Can't remove soft deleted enrollments/TEIs due to foreign key constraint "fk_programmessage_programinstanceid"**  
Components: _[API] Data administration_  
**Retesting**

**[DHIS2-7373](https://jira.dhis2.org/browse/DHIS2-7373): Conflict in "geometry" does not include "reference" field in server response**  
Components: _[API] Events_

**[DHIS2-7452](https://jira.dhis2.org/browse/DHIS2-7452): Redis env: No taskSummaries when metadata import is not successful**  
Components: _[API] Metadata import-export_

**[DHIS2-7611](https://jira.dhis2.org/browse/DHIS2-7611): Metadata filtering causes null pointer exception**  
Components: _[API] Metadata model_

**[DHIS2-7629](https://jira.dhis2.org/browse/DHIS2-7629): DataStatistics doesn't include endDate when getting data**  
Components: _[API] Other_

**[DHIS2-7381](https://jira.dhis2.org/browse/DHIS2-7381): Deleted Objects endpoint paging does not work**  
Components: _[API] Other_

**[DHIS2-7320](https://jira.dhis2.org/browse/DHIS2-7320): Cannot create predictor for autofill Data Element with categoryCombos**  
Components: _[API] Predictors_  
**Needs Update**

**[DHIS2-7502](https://jira.dhis2.org/browse/DHIS2-7502): [TITLE REDACTED]**  
Components: _[API] Security_, _[API] User_

**[DHIS2-6920](https://jira.dhis2.org/browse/DHIS2-6920): (Sync process) Dataset, Sections not updated when elements & sections removed**  
Components: _[API] Synchronization_

**[DHIS2-7667](https://jira.dhis2.org/browse/DHIS2-7667): Events are not deleted when enrolment is deleted**  
Components: _[API] Tracker_

**[DHIS2-7019](https://jira.dhis2.org/browse/DHIS2-7019): Tracker - moving cases permanently to another OrgUnit do not work**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-7533](https://jira.dhis2.org/browse/DHIS2-7533): Conflict in Enrollment or Incident date does not include "reference" field in server response**  
Components: _[API] Tracker_

**[DHIS2-6054](https://jira.dhis2.org/browse/DHIS2-6054): Can create events outside search scope**  
Components: _[API] Tracker_

**[DHIS2-7512](https://jira.dhis2.org/browse/DHIS2-7512): Authority names get munged in role editing screen**  
Components: _[API] User_

**[DHIS2-7554](https://jira.dhis2.org/browse/DHIS2-7554): System date setting and capture app**  
Components: _[App] Capture_

**[DHIS2-7534](https://jira.dhis2.org/browse/DHIS2-7534): Data entry app does not prompt user to load cached data**  
Components: _[App] Data entry_

**[DHIS2-6198](https://jira.dhis2.org/browse/DHIS2-6198): Users with authority to access the Data Quality app are denied acccess**  
Components: _[App] Data quality_

**[DHIS2-7446](https://jira.dhis2.org/browse/DHIS2-7446): User can see all OU hierarchy in new data visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-7249](https://jira.dhis2.org/browse/DHIS2-7249): Interpretation panel in maps and visualizer no longer supports copy/paste of rich text formatting directly**  
Components: _[App] Data visualizer_, _[App] Maps_

**[DHIS2-4871](https://jira.dhis2.org/browse/DHIS2-4871): Cannot see values in event reports and visualizer if DE is type "Number"**  
Components: _[App] Event reports_, _[App] Event visualizer_

**[DHIS2-7614](https://jira.dhis2.org/browse/DHIS2-7614): Interpretations app is loading charts from old data visualiser**  
Components: _[App] Interpretations_

**[DHIS2-7301](https://jira.dhis2.org/browse/DHIS2-7301): Capture app - re-sorting event program data elements result in them disappearing**  
Components: _[App] Maintenance_

**[DHIS2-6643](https://jira.dhis2.org/browse/DHIS2-6643): Small mistake with date format**  
Components: _[App] Settings_

**[DHIS2-5926](https://jira.dhis2.org/browse/DHIS2-5926): Auto-logout due to inactivity not functional when Tracker Capture is open**  
Components: _[App] Tracker capture_

**[DHIS2-6125](https://jira.dhis2.org/browse/DHIS2-6125): Tracker Capture search with "Age" data type is unusable**  
Components: _[App] Tracker capture_

**[DHIS2-7575](https://jira.dhis2.org/browse/DHIS2-7575): Disable autocomplete in forms**  
Components: _[App] Settings_, _[App] User_

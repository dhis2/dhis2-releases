# Patch 2.35.4 Release Note

## Features

## Bugs

**[DHIS2-10766](https://jira.dhis2.org/browse/DHIS2-10766): Duplicated elements in the pagination of /dataItems**  
Components: _[API] Analytics_

**[DHIS2-10810](https://jira.dhis2.org/browse/DHIS2-10810): Permanently pruning Events fails due to related ProgramMessage**  
Components: _[API] Data administration_

**[DHIS2-10864](https://jira.dhis2.org/browse/DHIS2-10864): Data value set endpoint not respecting data view orgunit**  
Components: _[API] Data value set_  
**In Progress**

**[DHIS2-10805](https://jira.dhis2.org/browse/DHIS2-10805): Visualization fails to migrate from 2.34 to 2.35**  
Components: _[API] Database migration_, _[App] Data visualizer_

**[DHIS2-10702](https://jira.dhis2.org/browse/DHIS2-10702): Unexpected error querying tracked entity instance**  
Components: _[API] Metadata import-export_, _[API] Tracker_

**[DHIS2-10956](https://jira.dhis2.org/browse/DHIS2-10956): Validate program rule variable names in API**  
Components: _[API] Metadata model_

**[DHIS2-1127](https://jira.dhis2.org/browse/DHIS2-1127): Translation of external map layers - added translation is not saved**  
Components: _[API] Metadata model_, _[API] Other_, _[App] Maintenance_

**[DHIS2-10184](https://jira.dhis2.org/browse/DHIS2-10184): Rendering Options for attributes not correct**  
Components: _[API] Metadata model_, _[API] Other_, _[App] Maintenance_

**[DHIS2-10836](https://jira.dhis2.org/browse/DHIS2-10836): Change default pageSize to 50 for api/sharing/search endpoint**  
Components: _[API] Other_

**[DHIS2-10822](https://jira.dhis2.org/browse/DHIS2-10822): SendMessage program rule not going through when trigger rule is set only to a program stage**  
Components: _[API] Program rules_

**[DHIS2-10853](https://jira.dhis2.org/browse/DHIS2-10853): Unable to Authenticate with LDAP**  
Components: _[API] System configuration_  
**Testing**

**[DHIS2-11164](https://jira.dhis2.org/browse/DHIS2-11164): Create index for reservedvalue table**  
Components: _[API] Tracker_  
**Testing**

**[DHIS2-11073](https://jira.dhis2.org/browse/DHIS2-11073): Tracked entity instance query with event filters produces illegal SQL**  
Components: _[API] Tracker_

**[DHIS2-10866](https://jira.dhis2.org/browse/DHIS2-10866): Cached user accesses are not invalidated after changing**  
Components: _[API] Tracker_  
**Needs Update**

**[DHIS2-10870](https://jira.dhis2.org/browse/DHIS2-10870): Search by unique attribute doesn't work when minAttributesRequiredToSearch > 1**  
Components: _[API] Tracker_

**[DHIS2-10841](https://jira.dhis2.org/browse/DHIS2-10841): Endpoint /trackedEntityInstances returns error 500 if orgunit not included in the query**  
Components: _[API] Tracker_

**[DHIS2-6167](https://jira.dhis2.org/browse/DHIS2-6167): User changes leave fields "lastupdatedby" in table "users" as NULL**  
Components: _[API] User_

**[DHIS2-4326](https://jira.dhis2.org/browse/DHIS2-4326): Validation Rules Analysis provides false results when rule expressions have empty data values**  
Components: _[API] Validation_  

**[DHIS2-10859](https://jira.dhis2.org/browse/DHIS2-10859): App Management App self-update version comparison is incorrect**  
Components: _[App] App management_  
**Testing**

**[DHIS2-8998](https://jira.dhis2.org/browse/DHIS2-8998): Untranslatable strings in Capture app**  
Components: _[App] Capture_

**[DHIS2-10625](https://jira.dhis2.org/browse/DHIS2-10625): Avoid loading all user groups in interpretation comment**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_  

**[DHIS2-10365](https://jira.dhis2.org/browse/DHIS2-10365): Pagination ends at 50 for Dashboard Filters of OUGSets, OUGs within OUGSets**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11065](https://jira.dhis2.org/browse/DHIS2-11065): "Most viewed" show the same result for all users**  
Components: _[App] Data visualizer_

**[DHIS2-10988](https://jira.dhis2.org/browse/DHIS2-10988): Dynamic dimensions only accessing 50 items**  
Components: _[App] Data visualizer_

**[DHIS2-10945](https://jira.dhis2.org/browse/DHIS2-10945): Error when "All types" data type is chosen**  
Components: _[App] Data visualizer_

**[DHIS2-9829](https://jira.dhis2.org/browse/DHIS2-9829): Trendline render behind column**  
Components: _[App] Data visualizer_

**[DHIS2-10611](https://jira.dhis2.org/browse/DHIS2-10611): Debounce on visualization search does not work**  
Components: _[App] Data visualizer_

**[DHIS2-10532](https://jira.dhis2.org/browse/DHIS2-10532): Backport: Remove unsupported import-export preheat options**  
Components: _[App] Import-export_

**[DHIS2-10635](https://jira.dhis2.org/browse/DHIS2-10635): No translations in Scheduler App**  
Components: _[App] Job scheduler_

**[DHIS2-10354](https://jira.dhis2.org/browse/DHIS2-10354): SQL View does not show grid**  
Components: _[App] Maintenance_

**[DHIS2-10722](https://jira.dhis2.org/browse/DHIS2-10722): Error when filtering event layer**  
Components: _[App] Maps_

**[DHIS2-10867](https://jira.dhis2.org/browse/DHIS2-10867): Don't request event count when styling by data item**  
Components: _[App] Maps_

**[DHIS2-10912](https://jira.dhis2.org/browse/DHIS2-10912): Landcover layer is not showing**  
Components: _[App] Maps_

**[DHIS2-10872](https://jira.dhis2.org/browse/DHIS2-10872): Color is not shown in data table for thematic layer**  
Components: _[App] Maps_

**[DHIS2-10734](https://jira.dhis2.org/browse/DHIS2-10734): Not possible to change opacity for facility labels**  
Components: _[App] Maps_

**[DHIS2-10889](https://jira.dhis2.org/browse/DHIS2-10889): Donut clusters are not always shown on first render**  
Components: _[App] Maps_

**[DHIS2-10675](https://jira.dhis2.org/browse/DHIS2-10675): UI Translation doesn't work**  
Components: _[App] Tracker capture_

**[DHIS2-10996](https://jira.dhis2.org/browse/DHIS2-10996): Program rules: Leading zeros removed from text**  
Components: _[App] Tracker capture_


# Patch 2.34.6 Release Note

- [Features](#Features)
- [Bugs](#Bugs)

## Features

**[DHIS2-7739](https://jira.dhis2.org/browse/DHIS2-7739): Program indicator or event data item as a filter in data visualizer**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-11030](https://jira.dhis2.org/browse/DHIS2-11030): Make Notification templates translatable**  
Components: _[API] Translations_

**[DHIS2-10562](https://jira.dhis2.org/browse/DHIS2-10562): Make chart/visualisation components translatable**  
Components: _[API] Translations_

## Bugs

**[DHIS2-11282](https://jira.dhis2.org/browse/DHIS2-11282): Digit Group Separator not Appearing in Dashboards**  
Components: _[API] Analytics_

**[DHIS2-10858](https://jira.dhis2.org/browse/DHIS2-10858): Analytics return the name of "yesterday" with a trailing comma**  
Components: _[API] Analytics_

**[DHIS2-10857](https://jira.dhis2.org/browse/DHIS2-10857): Analytics returns large numbers in scientific notation**  
Components: _[API] Analytics_, _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-10674](https://jira.dhis2.org/browse/DHIS2-10674): Chart and ReportTable are returning invalid "access" attribute**  
Components: _[API] Analytics_

**[DHIS2-10810](https://jira.dhis2.org/browse/DHIS2-10810): Permanently pruning Events fails due to related ProgramMessage**  
Components: _[API] Data administration_

**[DHIS2-10864](https://jira.dhis2.org/browse/DHIS2-10864): Data value set endpoint not respecting data view orgunit**  
Components: _[API] Data value set_

**[DHIS2-11273](https://jira.dhis2.org/browse/DHIS2-11273): Program rule variable can't be updated through /metadata**  
Components: _[API] Metadata import-export_

**[DHIS2-10702](https://jira.dhis2.org/browse/DHIS2-10702): Unexpected error querying tracked entity instance**  
Components: _[API] Metadata import-export_, _[API] Tracker_

**[DHIS2-8379](https://jira.dhis2.org/browse/DHIS2-8379): Data import created date changed when updating data values**  
Components: _[API] Metadata import-export_

**[DHIS2-11051](https://jira.dhis2.org/browse/DHIS2-11051): ProgramStageSection is not available in Translation App**  
Components: _[API] Metadata model_

**[DHIS2-10956](https://jira.dhis2.org/browse/DHIS2-10956): Validate program rule variable names in API**  
Components: _[API] Metadata model_

**[DHIS2-10649](https://jira.dhis2.org/browse/DHIS2-10649): Event Charts do not upgrade correctly**  
Components: _[API] Metadata model_

**[DHIS2-10184](https://jira.dhis2.org/browse/DHIS2-10184): Rendering Options for attributes not correct**  
Components: _[API] Metadata model_, _[API] Other_, _[App] Maintenance_

**[DHIS2-1127](https://jira.dhis2.org/browse/DHIS2-1127): Translation of external map layers - added translation is not saved**  
Components: _[API] Metadata model_, _[API] Other_, _[App] Maintenance_

**[DHIS2-11329](https://jira.dhis2.org/browse/DHIS2-11329): Can't edit dashboard with "can edit and view"**  
Components: _[API] Other_

**[DHIS2-10836](https://jira.dhis2.org/browse/DHIS2-10836): Change default pageSize to 50 for api/sharing/search endpoint**  
Components: _[API] Other_

**[DHIS2-10697](https://jira.dhis2.org/browse/DHIS2-10697): Path index on organisationunit table not working as expected**  
Components: _[API] Other_

**[DHIS2-10487](https://jira.dhis2.org/browse/DHIS2-10487): getModules.action does not translate displayName to user locale**  
Components: _[API] Other_

**[DHIS2-9854](https://jira.dhis2.org/browse/DHIS2-9854): d2:hasValue does not support A{abcd} variables**  
Components: _[API] Program rules_

**[DHIS2-11164](https://jira.dhis2.org/browse/DHIS2-11164): Create index for reservedvalue table**  
Components: _[API] Tracker_

**[DHIS2-11121](https://jira.dhis2.org/browse/DHIS2-11121): Tracker async import only expect new entities**  
Components: _[API] Tracker_

**[DHIS2-11073](https://jira.dhis2.org/browse/DHIS2-11073): Tracked entity instance query with event filters produces illegal SQL**  
Components: _[API] Tracker_

**[DHIS2-6167](https://jira.dhis2.org/browse/DHIS2-6167): User changes leave fields "lastupdatedby" in table "users" as NULL**  
Components: _[API] User_

**[DHIS2-4326](https://jira.dhis2.org/browse/DHIS2-4326): Validation Rules Analysis provides false results when rule expressions have empty data values**  
Components: _[API] Validation_

**[DHIS2-10394](https://jira.dhis2.org/browse/DHIS2-10394): Program rule action: ERROR_ON_COMPLETE is executed regardless status**  
Components: _[App] Capture_

**[DHIS2-8998](https://jira.dhis2.org/browse/DHIS2-8998): Untranslatable strings in Capture app**  
Components: _[App] Capture_

**[DHIS2-10625](https://jira.dhis2.org/browse/DHIS2-10625): Avoid loading all user groups in interpretation comment**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-7164](https://jira.dhis2.org/browse/DHIS2-7164): Indicators are displayed twice in data entry when the section contains multiple category combos.**  
Components: _[App] Data entry_

**[DHIS2-11230](https://jira.dhis2.org/browse/DHIS2-11230): Incorrect documentation URLs**  
Components: _[App] Data quality_

**[DHIS2-11065](https://jira.dhis2.org/browse/DHIS2-11065): "Most viewed" show the same result for all users**  
Components: _[App] Data visualizer_

**[DHIS2-9829](https://jira.dhis2.org/browse/DHIS2-9829): Trendline render behind column**  
Components: _[App] Data visualizer_

**[DHIS2-9789](https://jira.dhis2.org/browse/DHIS2-9789): Analytics data value set dynamic filters set as dimensions in download**  
Components: _[App] Data visualizer_

**[DHIS2-10426](https://jira.dhis2.org/browse/DHIS2-10426): Period selection for last N days is blanked out in Event reports**  
Components: _[App] Event reports_

**[DHIS2-10228](https://jira.dhis2.org/browse/DHIS2-10228): Event Reports - Enrollment line list is always blank when a Coordinates data element is selected**  
Components: _[App] Event reports_

**[DHIS2-10066](https://jira.dhis2.org/browse/DHIS2-10066): Selecting an org unit data element in Event Reports line list Enrollment view generates blank output**  
Components: _[App] Event reports_

**[DHIS2-9641](https://jira.dhis2.org/browse/DHIS2-9641): Custom date labels are not respected in event reports downloads**  
Components: _[App] Event reports_

**[DHIS2-10635](https://jira.dhis2.org/browse/DHIS2-10635): No translations in Scheduler App**  
Components: _[App] Job scheduler_

**[DHIS2-10912](https://jira.dhis2.org/browse/DHIS2-10912): Landcover layer is not showing**  
Components: _[App] Maps_

**[DHIS2-10889](https://jira.dhis2.org/browse/DHIS2-10889): Donut clusters are not always shown on first render**  
Components: _[App] Maps_

**[DHIS2-10867](https://jira.dhis2.org/browse/DHIS2-10867): Don't request event count when styling by data item**  
Components: _[App] Maps_

**[DHIS2-10734](https://jira.dhis2.org/browse/DHIS2-10734): Not possible to change opacity for facility labels**  
Components: _[App] Maps_

**[DHIS2-10722](https://jira.dhis2.org/browse/DHIS2-10722): Error when filtering event layer**  
Components: _[App] Maps_

**[DHIS2-8869](https://jira.dhis2.org/browse/DHIS2-8869): Error "???" code when show result of Data Set report that has custom form**  
Components: _[App] Reports_

**[DHIS2-10996](https://jira.dhis2.org/browse/DHIS2-10996): Program rules: Leading zeros removed from text**  
Components: _[App] Tracker capture_

**[DHIS2-10675](https://jira.dhis2.org/browse/DHIS2-10675): UI Translation doesn't work**  
Components: _[App] Tracker capture_

**[DHIS2-10248](https://jira.dhis2.org/browse/DHIS2-10248): Tracker Capture - Completing Enrollment results in events disappearing from Timeline Data Entry**  
Components: _[App] Tracker capture_

**[DHIS2-10081](https://jira.dhis2.org/browse/DHIS2-10081): Can't delete polygon in TEI profile in Tracker capture**  
Components: _[App] Tracker capture_

**[DHIS2-9334](https://jira.dhis2.org/browse/DHIS2-9334): Translations not working properly in tracker capture profile (2.34)**  
Components: _[App] Tracker capture_

**[DHIS2-8660](https://jira.dhis2.org/browse/DHIS2-8660): Non-translatable fields in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-8475](https://jira.dhis2.org/browse/DHIS2-8475): Automatically generated ID using SEQUENTIAL incrementing by 2**  
Components: _[App] Tracker capture_

**[DHIS2-7700](https://jira.dhis2.org/browse/DHIS2-7700): Fileresource Cleanup Job doesn't delete correct/any files**  
Components: 


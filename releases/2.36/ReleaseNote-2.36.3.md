# Patch 2.36.3 Release Note

- [Features](#Features)
- [Bugs](#Bugs)

## Features

**[DHIS2-10295](https://jira.dhis2.org/browse/DHIS2-10295): Support a single program indicators as filter**  
Components: _[API] Analytics_

**[DHIS2-169](https://jira.dhis2.org/browse/DHIS2-169): System setting for relative periods in analytics apps**  
Components: _[API] Analytics_, _[App] Analytics_, _[App] Maps_

**[DHIS2-10337](https://jira.dhis2.org/browse/DHIS2-10337): Add support for using JWT tokens issued by an OIDC provider directly**  
Components: _[API] Security_

**[DHIS2-11094](https://jira.dhis2.org/browse/DHIS2-11094): Refactor paging / skipPaging request parameters in new tracker export endpoints**  
Components: _[API] Tracker_

**[DHIS2-11030](https://jira.dhis2.org/browse/DHIS2-11030): Make Notification templates translatable**  
Components: _[API] Translations_

**[DHIS2-8876](https://jira.dhis2.org/browse/DHIS2-8876): Return attribute option combos with validation results**  
Components: _[API] Validation_

**[DHIS2-10851](https://jira.dhis2.org/browse/DHIS2-10851): Selected org-unit(s) are cleared when navigating back to form**  
Components: _[App] Data quality_

**[DHIS2-3448](https://jira.dhis2.org/browse/DHIS2-3448): Add job details to scheduler/new app**  
Components: _[App] Job scheduler_

**[DHIS2-11266](https://jira.dhis2.org/browse/DHIS2-11266): Use period generators from dhis2/analytics**  
Components: _[App] Maps_

**[DHIS2-9387](https://jira.dhis2.org/browse/DHIS2-9387): Port to app-platform [settings-app]**  
Components: _[App] Settings_

**[DHIS2-10589](https://jira.dhis2.org/browse/DHIS2-10589): Change Usage Analytics App to Include Passive Views when specified**  
Components: _[App] Usage analytics_

## Bugs

**[DHIS2-11292](https://jira.dhis2.org/browse/DHIS2-11292): Number Conversion Error - Long/Double - Program Indicator**  
Components: _[API] Analytics_

**[DHIS2-10858](https://jira.dhis2.org/browse/DHIS2-10858): Analytics return the name of "yesterday" with a trailing comma**  
Components: _[API] Analytics_

**[DHIS2-10857](https://jira.dhis2.org/browse/DHIS2-10857): Analytics returns large numbers in scientific notation**  
Components: _[API] Analytics_, _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-10742](https://jira.dhis2.org/browse/DHIS2-10742): Endpoint /events/query is ALWAYS paging**  
Components: _[API] Analytics_

**[DHIS2-10864](https://jira.dhis2.org/browse/DHIS2-10864): Data value set endpoint not respecting data view orgunit**  
Components: _[API] Data value set_

**[DHIS2-9313](https://jira.dhis2.org/browse/DHIS2-9313): ADX export of data value sets does not respect the same set of parameters as the other formats**  
Components: _[API] Data value set_

**[DHIS2-10805](https://jira.dhis2.org/browse/DHIS2-10805): Visualization fails to migrate from 2.34 to 2.35**  
Components: _[API] Database migration_, _[App] Data visualizer_

**[DHIS2-10022](https://jira.dhis2.org/browse/DHIS2-10022): Event import failled with IdScheme='Code' (error on programStage id)**  
Components: _[API] Events_

**[DHIS2-11330](https://jira.dhis2.org/browse/DHIS2-11330): Program rule variable name and program validation is not triggered**  
Components: _[API] Metadata import-export_

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

**[DHIS2-8203](https://jira.dhis2.org/browse/DHIS2-8203): Data elements with differing cat combos in the same section do not respect sort order**  
Components: _[API] Metadata model_, _[App] Data entry_, _[App] Maintenance_

**[DHIS2-1127](https://jira.dhis2.org/browse/DHIS2-1127): Translation of external map layers - added translation is not saved**  
Components: _[API] Metadata model_, _[API] Other_, _[App] Maintenance_

**[DHIS2-11329](https://jira.dhis2.org/browse/DHIS2-11329): Can't edit dashboard with "can edit and view"**  
Components: _[API] Other_

**[DHIS2-11195](https://jira.dhis2.org/browse/DHIS2-11195): SQL View sharing "capture and view" option should be hidden**  
Components: _[API] Other_, _[App] Maintenance_

**[DHIS2-10954](https://jira.dhis2.org/browse/DHIS2-10954): Update sharing data when deleting UserGroup**  
Components: _[API] Other_

**[DHIS2-10836](https://jira.dhis2.org/browse/DHIS2-10836): Change default pageSize to 50 for api/sharing/search endpoint**  
Components: _[API] Other_

**[DHIS2-10697](https://jira.dhis2.org/browse/DHIS2-10697): Path index on organisationunit table not working as expected**  
Components: _[API] Other_

**[DHIS2-10822](https://jira.dhis2.org/browse/DHIS2-10822): SendMessage program rule not going through when trigger rule is set only to a program stage**  
Components: _[API] Program rules_

**[DHIS2-9854](https://jira.dhis2.org/browse/DHIS2-9854): d2:hasValue does not support A{abcd} variables**  
Components: _[API] Program rules_

**[DHIS2-11197](https://jira.dhis2.org/browse/DHIS2-11197): New tracker importer does not create ownership records**  
Components: _[API] Tracker_

**[DHIS2-11164](https://jira.dhis2.org/browse/DHIS2-11164): Create index for reservedvalue table**  
Components: _[API] Tracker_

**[DHIS2-11121](https://jira.dhis2.org/browse/DHIS2-11121): Tracker async import only expect new entities**  
Components: _[API] Tracker_

**[DHIS2-11073](https://jira.dhis2.org/browse/DHIS2-11073): Tracked entity instance query with event filters produces illegal SQL**  
Components: _[API] Tracker_

**[DHIS2-10797](https://jira.dhis2.org/browse/DHIS2-10797): Fix remove null values for tracker attributes and data values**  
Components: _[API] Tracker_

**[DHIS2-10789](https://jira.dhis2.org/browse/DHIS2-10789): Remove validations from DefaultTrackerObjectsDeletionService**  
Components: _[API] Tracker_

**[DHIS2-10603](https://jira.dhis2.org/browse/DHIS2-10603): Search takes long when max tei limit to return in search is set**  
Components: _[API] Tracker_

**[DHIS2-10601](https://jira.dhis2.org/browse/DHIS2-10601): TEI search by unique attribute takes long when user search scope is lower level org unit**  
Components: _[API] Tracker_

**[DHIS2-6167](https://jira.dhis2.org/browse/DHIS2-6167): User changes leave fields "lastupdatedby" in table "users" as NULL**  
Components: _[API] User_

**[DHIS2-10394](https://jira.dhis2.org/browse/DHIS2-10394): Program rule action: ERROR_ON_COMPLETE is executed regardless status**  
Components: _[App] Capture_

**[DHIS2-8998](https://jira.dhis2.org/browse/DHIS2-8998): Untranslatable strings in Capture app**  
Components: _[App] Capture_

**[DHIS2-11023](https://jira.dhis2.org/browse/DHIS2-11023): The programStagesInstances shouldn't exist in resources**  
Components: _[App] Core resource_

**[DHIS2-11324](https://jira.dhis2.org/browse/DHIS2-11324): Dashboard app should handle items with no type**  
Components: _[App] Dashboard_

**[DHIS2-11303](https://jira.dhis2.org/browse/DHIS2-11303): Dashboard show empty chart or spinner when analytics request fails**  
Components: _[App] Dashboard_

**[DHIS2-11302](https://jira.dhis2.org/browse/DHIS2-11302): Dashboard map shows map title when adding dashboard filters**  
Components: _[App] Dashboard_

**[DHIS2-11113](https://jira.dhis2.org/browse/DHIS2-11113): Visualisations of CERTAIN_TYPES are not supported on dashboards**  
Components: _[App] Dashboard_

**[DHIS2-11097](https://jira.dhis2.org/browse/DHIS2-11097): Not possible to resize Dashboard controlbar to 1 row**  
Components: _[App] Dashboard_

**[DHIS2-11089](https://jira.dhis2.org/browse/DHIS2-11089): Saving a starred dashboard removes the star**  
Components: _[App] Dashboard_

**[DHIS2-11054](https://jira.dhis2.org/browse/DHIS2-11054): Dashboard: adding a dashboard filter results in no Map being shown**  
Components: _[App] Dashboard_

**[DHIS2-11009](https://jira.dhis2.org/browse/DHIS2-11009): Dashboard namespace missing from dataStore**  
Components: _[App] Dashboard_

**[DHIS2-10795](https://jira.dhis2.org/browse/DHIS2-10795): Dashboard bar can't resize by dragging if it has been expanded to full height**  
Components: _[App] Dashboard_

**[DHIS2-10899](https://jira.dhis2.org/browse/DHIS2-10899): "Add new" dialog doesn't close after saving the lock exception.**  
Components: _[App] Data administration_

**[DHIS2-10888](https://jira.dhis2.org/browse/DHIS2-10888): Improve layout in maintenance section**  
Components: _[App] Data administration_

**[DHIS2-7164](https://jira.dhis2.org/browse/DHIS2-7164): Indicators are displayed twice in data entry when the section contains multiple category combos.**  
Components: _[App] Data entry_

**[DHIS2-11487](https://jira.dhis2.org/browse/DHIS2-11487): Update platform apps that previously used service workers to use newest app scripts**  
Components: _[App] Data quality_, _[App] Reports_, _[App] Translations_, _[App] User_

**[DHIS2-11270](https://jira.dhis2.org/browse/DHIS2-11270): Error message for errors encountered during form submission is always 'undefined'**  
Components: _[App] Data quality_

**[DHIS2-11269](https://jira.dhis2.org/browse/DHIS2-11269): Incorrect rendering of validation details**  
Components: _[App] Data quality_

**[DHIS2-11230](https://jira.dhis2.org/browse/DHIS2-11230): Incorrect documentation URLs**  
Components: _[App] Data quality_

**[DHIS2-11352](https://jira.dhis2.org/browse/DHIS2-11352): Missing scatter chart icon in most viewed charts**  
Components: _[App] Data visualizer_

**[DHIS2-11065](https://jira.dhis2.org/browse/DHIS2-11065): "Most viewed" show the same result for all users**  
Components: _[App] Data visualizer_

**[DHIS2-11291](https://jira.dhis2.org/browse/DHIS2-11291): Org unit type data element shows the UID instead of name in Event reports**  
Components: _[App] Event reports_

**[DHIS2-10228](https://jira.dhis2.org/browse/DHIS2-10228): Event Reports - Enrollment line list is always blank when a Coordinates data element is selected**  
Components: _[App] Event reports_

**[DHIS2-10066](https://jira.dhis2.org/browse/DHIS2-10066): Selecting an org unit data element in Event Reports line list Enrollment view generates blank output**  
Components: _[App] Event reports_

**[DHIS2-9641](https://jira.dhis2.org/browse/DHIS2-9641): Custom date labels are not respected in event reports downloads**  
Components: _[App] Event reports_

**[DHIS2-11433](https://jira.dhis2.org/browse/DHIS2-11433): Org unit data is not showing**  
Components: _[App] Maps_

**[DHIS2-11335](https://jira.dhis2.org/browse/DHIS2-11335): Fixed periods does not work for non-default locales**  
Components: _[App] Maps_

**[DHIS2-10912](https://jira.dhis2.org/browse/DHIS2-10912): Landcover layer is not showing**  
Components: _[App] Maps_

**[DHIS2-10889](https://jira.dhis2.org/browse/DHIS2-10889): Donut clusters are not always shown on first render**  
Components: _[App] Maps_

**[DHIS2-10872](https://jira.dhis2.org/browse/DHIS2-10872): Color is not shown in data table for thematic layer**  
Components: _[App] Maps_

**[DHIS2-10867](https://jira.dhis2.org/browse/DHIS2-10867): Don't request event count when styling by data item**  
Components: _[App] Maps_

**[DHIS2-10821](https://jira.dhis2.org/browse/DHIS2-10821): Make legend set required if "predefined"**  
Components: _[App] Maps_

**[DHIS2-10820](https://jira.dhis2.org/browse/DHIS2-10820): Exclude long options sets from "style by data items"**  
Components: _[App] Maps_

**[DHIS2-10819](https://jira.dhis2.org/browse/DHIS2-10819): Upgrade WorldPop poulation dataset**  
Components: _[App] Maps_

**[DHIS2-10736](https://jira.dhis2.org/browse/DHIS2-10736): Event layer: Not possible to style by "mode of discharge"**  
Components: _[App] Maps_

**[DHIS2-10734](https://jira.dhis2.org/browse/DHIS2-10734): Not possible to change opacity for facility labels**  
Components: _[App] Maps_

**[DHIS2-10722](https://jira.dhis2.org/browse/DHIS2-10722): Error when filtering event layer**  
Components: _[App] Maps_

**[DHIS2-10721](https://jira.dhis2.org/browse/DHIS2-10721): App crash if changing program after changing coordinate field for event layers**  
Components: _[App] Maps_

**[DHIS2-8869](https://jira.dhis2.org/browse/DHIS2-8869): Error "???" code when show result of Data Set report that has custom form**  
Components: _[App] Reports_

**[DHIS2-11403](https://jira.dhis2.org/browse/DHIS2-11403): Assignment program rule crashes when assigning numeric value**  
Components: _[App] Tracker capture_

**[DHIS2-10996](https://jira.dhis2.org/browse/DHIS2-10996): Program rules: Leading zeros removed from text**  
Components: _[App] Tracker capture_

**[DHIS2-10675](https://jira.dhis2.org/browse/DHIS2-10675): UI Translation doesn't work**  
Components: _[App] Tracker capture_

**[DHIS2-10442](https://jira.dhis2.org/browse/DHIS2-10442): Tracker capture app doesn't load enrollment imported by the new tracker importer**  
Components: _[App] Tracker capture_

**[DHIS2-10248](https://jira.dhis2.org/browse/DHIS2-10248): Tracker Capture - Completing Enrollment results in events disappearing from Timeline Data Entry**  
Components: _[App] Tracker capture_

**[DHIS2-10081](https://jira.dhis2.org/browse/DHIS2-10081): Can't delete polygon in TEI profile in Tracker capture**  
Components: _[App] Tracker capture_

**[DHIS2-8660](https://jira.dhis2.org/browse/DHIS2-8660): Non-translatable fields in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-8475](https://jira.dhis2.org/browse/DHIS2-8475): Automatically generated ID using SEQUENTIAL incrementing by 2**  
Components: _[App] Tracker capture_

**[DHIS2-11486](https://jira.dhis2.org/browse/DHIS2-11486): [Translations App] Unregister service worker**  
Components: _[App] Translations_

**[DHIS2-7700](https://jira.dhis2.org/browse/DHIS2-7700): Fileresource Cleanup Job doesn't delete correct/any files**  
Components: 


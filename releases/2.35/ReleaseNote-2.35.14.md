# Patch 2.35.14 Release Note

- [Features](#features)
- [Bugs](#bugs)

## Features

**[DHIS2-12241](https://jira.dhis2.org/browse/DHIS2-12241): Optimize performance for ouMode event queries**  
Components: _[API] Tracker_

**[DHIS2-11574](https://jira.dhis2.org/browse/DHIS2-11574): Translatable properties for Predictor and Expression**  
Components: _[API] Translations_

## Bugs

**[DHIS2-13099](https://jira.dhis2.org/browse/DHIS2-13099): [D] Unhandled exception in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-11327](https://jira.dhis2.org/browse/DHIS2-11327): Program indicators - custom aggregation with count distinct**  
Components: _[API] Analytics_

**[DHIS2-12543](https://jira.dhis2.org/browse/DHIS2-12543): Scientific notation is returned when downloading visualisation data in excel**  
Components: _[API] Analytics_

**[DHIS2-12216](https://jira.dhis2.org/browse/DHIS2-12216): [A]Event report download response has wrong content-disposition header - backport**  
Components: _[API] Analytics_

**[DHIS2-12237](https://jira.dhis2.org/browse/DHIS2-12237): Grid Caching is not properly used in analytics**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-12258](https://jira.dhis2.org/browse/DHIS2-12258): periodOffset should be only for indicator expressions**  
Components: _[API] Analytics_

**[DHIS2-12496](https://jira.dhis2.org/browse/DHIS2-12496): periodOffset misses some data**  
Components: _[API] Analytics_

**[DHIS2-10687](https://jira.dhis2.org/browse/DHIS2-10687): Data Admin->Maintenance->Update catoptioncombos  crashes if catoptioncombo is used in predictor**  
Components: _[API] Data administration_, _[App] Data administration_

**[DHIS2-12360](https://jira.dhis2.org/browse/DHIS2-12360): ADX Export excludes a period ending on the requested end date**  
Components: _[API] Data value set_

**[DHIS2-12598](https://jira.dhis2.org/browse/DHIS2-12598): Default JSON event fields does not include dataValues**  
Components: _[API] Events_

**[DHIS2-12634](https://jira.dhis2.org/browse/DHIS2-12634): Event api missing dataValues when fields parameter is empty**  
Components: _[API] Events_

**[DHIS2-12494](https://jira.dhis2.org/browse/DHIS2-12494): The endpoint "/events" does not include results in select ou when ouMode is DESCENDANTS or CHILDREN**  
Components: _[API] Events_

**[DHIS2-12986](https://jira.dhis2.org/browse/DHIS2-12986): Fix logging exception on startup**  
Components: _[API] Frameworks and libraries_

**[DHIS2-12129](https://jira.dhis2.org/browse/DHIS2-12129): Mandatory program stage to program association not enforced**  
Components: _[API] Metadata import-export_

**[DHIS2-12293](https://jira.dhis2.org/browse/DHIS2-12293): ProgramSection is not shown in Translation App**  
Components: _[API] Metadata model_

**[DHIS2-12467](https://jira.dhis2.org/browse/DHIS2-12467): Missing attribute id of Attribute Value in API**  
**[DHIS2-12089](https://jira.dhis2.org/browse/DHIS2-12089): Expression not valid when dividing by a data value within if() function**  
Components: _[API] Predictors_, _[API] Validation_

**[DHIS2-12091](https://jira.dhis2.org/browse/DHIS2-12091): Predictors in a job don't run in a predictable order**  
Components: _[API] Predictors_

**[DHIS2-12153](https://jira.dhis2.org/browse/DHIS2-12153): Invalid date in tracker data entry**  
Components: _[API] Tracker_

**[DHIS2-11935](https://jira.dhis2.org/browse/DHIS2-11935): Performance: relationships endpoint is slow when there are many relationships**  
Components: _[API] Tracker_

**[DHIS2-11702](https://jira.dhis2.org/browse/DHIS2-11702): Query parameter in calls to /api/trackedEntityInstances not working as expected**  
Components: _[API] Tracker_

**[DHIS2-12285](https://jira.dhis2.org/browse/DHIS2-12285): The endpoint /api/trackedEntityInstances returns soft-deleted events**  
Components: _[API] Tracker_

**[DHIS2-12369](https://jira.dhis2.org/browse/DHIS2-12369): TEA with : (and possibly other characters) causes fields to disappear from API**  
Components: _[API] Tracker_

**[DHIS2-7107](https://jira.dhis2.org/browse/DHIS2-7107): Date and time data type doesn't display in event reports**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-12083](https://jira.dhis2.org/browse/DHIS2-12083): Multiple translations for the same "locale" and "property"**  
Components: _[API] Translations_, _[App] Translations_

**[DHIS2-4527](https://jira.dhis2.org/browse/DHIS2-4527): Validation of email on the user created/edit screen is not precise enough**  
Components: _[API] User_, _[App] User_

**[DHIS2-10332](https://jira.dhis2.org/browse/DHIS2-10332): Capture App Skipping Metadata Pulls when refreshing the browser**  
Components: _[App] Capture_

**[DHIS2-12280](https://jira.dhis2.org/browse/DHIS2-12280): Program not preselected when registering TEI through creation of Relationship**  
Components: _[App] Capture_

**[DHIS2-10651](https://jira.dhis2.org/browse/DHIS2-10651): Preserve sharing settings when updating working list (back port)**  
Components: _[App] Capture_

**[DHIS2-12172](https://jira.dhis2.org/browse/DHIS2-12172): V{orgunit_code} not being pulled when OUs are searched for in Capture App**  
Components: _[App] Capture_

**[DHIS2-12518](https://jira.dhis2.org/browse/DHIS2-12518): 500 error on some saved charts on Data Visualizer app and "Visits ANC" and "Nutrition" Dashboards**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11778](https://jira.dhis2.org/browse/DHIS2-11778): During print preview from edit mode, other action buttons shouldn't be available**  
Components: _[App] Dashboard_

**[DHIS2-11924](https://jira.dhis2.org/browse/DHIS2-11924): Missing names when map analytical objects are loaded by dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-10785](https://jira.dhis2.org/browse/DHIS2-10785): Data Statistics UI has unlabeled rows**  
Components: _[App] Data administration_

**[DHIS2-8174](https://jira.dhis2.org/browse/DHIS2-8174): Hide Empty Categories not functioning in Visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-12677](https://jira.dhis2.org/browse/DHIS2-12677): [B] Bug in Analytic Tables**  
Components: _[App] Event visualizer_, _[App] Pivot table_

**[DHIS2-12104](https://jira.dhis2.org/browse/DHIS2-12104): Unexpected message "expression is not valid" when validating a Program Rule Action**  
Components: _[App] Maintenance_

**[DHIS2-7931](https://jira.dhis2.org/browse/DHIS2-7931): ValidationStrategy dropdown for programs doesn't change value**  
Components: _[App] Maintenance_

**[DHIS2-9860](https://jira.dhis2.org/browse/DHIS2-9860): Hierarchy operations only moves first 50 selected**  
Components: _[App] Maintenance_

**[DHIS2-12527](https://jira.dhis2.org/browse/DHIS2-12527): Various errors in the Profile Widget**  
Components: _[App] Tracker capture_

**[DHIS2-10793](https://jira.dhis2.org/browse/DHIS2-10793): Tracker Capture case listing - lots of lookup errors in console**  
Components: _[App] Tracker capture_

**[DHIS2-12213](https://jira.dhis2.org/browse/DHIS2-12213): Error loading data entry form on slow connectivity**  
Components: _[App] Tracker capture_

**[DHIS2-12684](https://jira.dhis2.org/browse/DHIS2-12684): TEI sort not working in Tracker Capture app**  
Components: _[App] Tracker capture_

**[DHIS2-7940](https://jira.dhis2.org/browse/DHIS2-7940): Disabled users become Enabled once being Edited**  
Components: _[App] User_


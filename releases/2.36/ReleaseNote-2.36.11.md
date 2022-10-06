# Patch 2.36.11 Release Note

- [Features](#features)
- [Bugs](#bugs)

## Features

**[DHIS2-12819](https://jira.dhis2.org/browse/DHIS2-12819): Support API versioning in new tracker APIs (backports to 2.37 and 2.36)**  
Components: _[API] Tracker_

## Bugs

**[DHIS2-13212](https://jira.dhis2.org/browse/DHIS2-13212): [E] Header names don't reflect users' custom time dimension names**  
Components: _[API] Analytics_

**[DHIS2-13085](https://jira.dhis2.org/browse/DHIS2-13085): [D]Disk space utilization for analytics temp tables spiking in 2.37**  
Components: _[API] Analytics_

**[DHIS2-13002](https://jira.dhis2.org/browse/DHIS2-13002): [D] Fix bug in Visualization migration**  
Components: _[API] Analytics_

**[DHIS2-13099](https://jira.dhis2.org/browse/DHIS2-13099): [D] Unhandled exception in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-11327](https://jira.dhis2.org/browse/DHIS2-11327): Program indicators - custom aggregation with count distinct**  
Components: _[API] Analytics_

**[DHIS2-12497](https://jira.dhis2.org/browse/DHIS2-12497): Zero values for data elements of type average not included in analytics tables**  
Components: _[API] Analytics_

**[DHIS2-12543](https://jira.dhis2.org/browse/DHIS2-12543): Scientific notation is returned when downloading visualisation data in excel**  
Components: _[API] Analytics_

**[DHIS2-12571](https://jira.dhis2.org/browse/DHIS2-12571): [C] Event report crashes when trying to download**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-12581](https://jira.dhis2.org/browse/DHIS2-12581): [B] Error on analytics run with future/past years**  
Components: _[API] Analytics_

**[DHIS2-12216](https://jira.dhis2.org/browse/DHIS2-12216): [A]Event report download response has wrong content-disposition header - backport**  
Components: _[API] Analytics_

**[DHIS2-10687](https://jira.dhis2.org/browse/DHIS2-10687): Data Admin->Maintenance->Update catoptioncombos  crashes if catoptioncombo is used in predictor**  
Components: _[API] Data administration_, _[App] Data administration_

**[DHIS2-12598](https://jira.dhis2.org/browse/DHIS2-12598): Default JSON event fields does not include dataValues**  
Components: _[API] Events_

**[DHIS2-12634](https://jira.dhis2.org/browse/DHIS2-12634): Event api missing dataValues when fields parameter is empty**  
Components: _[API] Events_

**[DHIS2-13163](https://jira.dhis2.org/browse/DHIS2-13163): Disable builtin logging customization when given logging config by user**  
Components: _[API] Frameworks and libraries_

**[DHIS2-12986](https://jira.dhis2.org/browse/DHIS2-12986): Fix logging exception on startup**  
Components: _[API] Frameworks and libraries_

**[DHIS2-12094](https://jira.dhis2.org/browse/DHIS2-12094): [C] Newly created Continuous Analytics Job fails**  
Components: _[API] Job scheduler_

**[DHIS2-12829](https://jira.dhis2.org/browse/DHIS2-12829): [C] Fix typo in import error message**  
Components: _[API] Metadata import-export_

**[DHIS2-12831](https://jira.dhis2.org/browse/DHIS2-12831): Metadata import corrupts option sort order**  
Components: _[API] Metadata import-export_

**[DHIS2-12290](https://jira.dhis2.org/browse/DHIS2-12290): ProgramStageSection shouldn't have shortName translatable**  
Components: _[API] Metadata model_

**[DHIS2-12958](https://jira.dhis2.org/browse/DHIS2-12958): Collections API does not support additions and deletions in the same request**  
Components: _[API] Other_

**[DHIS2-12541](https://jira.dhis2.org/browse/DHIS2-12541): Cannot order list of Org Units using level property in API**  
Components: _[API] Other_

**[DHIS2-12591](https://jira.dhis2.org/browse/DHIS2-12591): API resources.json endpoint error v. 2.36.7**  
Components: _[API] Other_

**[DHIS2-8712](https://jira.dhis2.org/browse/DHIS2-8712): Login page does not use Interface language**  
Components: _[API] Other_

**[DHIS2-12841](https://jira.dhis2.org/browse/DHIS2-12841): Too many error logs from AbstractHibernateListener**  
Components: _[API] Other_

**[DHIS2-12702](https://jira.dhis2.org/browse/DHIS2-12702): Predictors fail to run with multiple disaggregations per data element**  
Components: _[API] Predictors_

**[DHIS2-12593](https://jira.dhis2.org/browse/DHIS2-12593): Cannot sync data values when using JWT bearer tokens (or any other POST request)**  
Components: _[API] Security_

**[DHIS2-12279](https://jira.dhis2.org/browse/DHIS2-12279): SMS reports - Value Parser Command duplicating values on multiple submissions for same Orgunit, data element and Period**  
Components: _[API] SMS_, _[App] SMS configuration_

**[DHIS2-12533](https://jira.dhis2.org/browse/DHIS2-12533): SMS reporting - DHIS2 accepting SMS reports coming from organisation units not attached to the dataset**  
Components: _[API] SMS_, _[App] SMS configuration_

**[DHIS2-13263](https://jira.dhis2.org/browse/DHIS2-13263): Duplicate relationship added when item is event**  
Components: _[API] Tracker_

**[DHIS2-12153](https://jira.dhis2.org/browse/DHIS2-12153): Invalid date in tracker data entry**  
Components: _[API] Tracker_

**[DHIS2-11935](https://jira.dhis2.org/browse/DHIS2-11935): Performance: relationships endpoint is slow when there are many relationships**  
Components: _[API] Tracker_

**[DHIS2-13032](https://jira.dhis2.org/browse/DHIS2-13032): ORG_UNIT_CODE Generation fails**  
Components: _[API] Tracker_

**[DHIS2-7869](https://jira.dhis2.org/browse/DHIS2-7869): Program rules using V{event_status} are not working**  
Components: _[API] Tracker_

**[DHIS2-11702](https://jira.dhis2.org/browse/DHIS2-11702): Query parameter in calls to /api/trackedEntityInstances not working as expected**  
Components: _[API] Tracker_

**[DHIS2-12182](https://jira.dhis2.org/browse/DHIS2-12182): /generateAndReserve returns duplicate values when attribute pattern contains a constant**  
Components: _[API] Tracker_

**[DHIS2-12285](https://jira.dhis2.org/browse/DHIS2-12285): The endpoint /api/trackedEntityInstances returns soft-deleted events**  
Components: _[API] Tracker_

**[DHIS2-12369](https://jira.dhis2.org/browse/DHIS2-12369): TEA with : (and possibly other characters) causes fields to disappear from API**  
Components: _[API] Tracker_

**[DHIS2-12663](https://jira.dhis2.org/browse/DHIS2-12663): NTI: Updating event with file_resource data value fails**  
Components: _[API] Tracker_

**[DHIS2-12844](https://jira.dhis2.org/browse/DHIS2-12844): Sorting order is not working on TEI working lists**  
Components: _[API] Tracker_

**[DHIS2-11789](https://jira.dhis2.org/browse/DHIS2-11789): NTI: tracked entity attribute value history is not stored**  
Components: _[API] Tracker_

**[DHIS2-12624](https://jira.dhis2.org/browse/DHIS2-12624): Translating programs fails with a 500 server error**  
Components: _[API] Translations_

**[DHIS2-10332](https://jira.dhis2.org/browse/DHIS2-10332): Capture App Skipping Metadata Pulls when refreshing the browser**  
Components: _[App] Capture_

**[DHIS2-12188](https://jira.dhis2.org/browse/DHIS2-12188): Tracker capture skips paging when loading program indicators**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-11610](https://jira.dhis2.org/browse/DHIS2-11610): Organisation unit attributes are not saved when registering a TEI**  
Components: _[App] Capture_

**[DHIS2-12280](https://jira.dhis2.org/browse/DHIS2-12280): Program not preselected when registering TEI through creation of Relationship**  
Components: _[App] Capture_

**[DHIS2-12524](https://jira.dhis2.org/browse/DHIS2-12524): No option for "Search in all programs" if no results in current program**  
Components: _[App] Capture_

**[DHIS2-12557](https://jira.dhis2.org/browse/DHIS2-12557): link button doesn't activate the linking process when Unique ID is unique but not autogenerated on Capture app**  
Components: _[App] Capture_

**[DHIS2-12929](https://jira.dhis2.org/browse/DHIS2-12929): Working lists: views are ordered incorrectly**  
Components: _[App] Capture_

**[DHIS2-12518](https://jira.dhis2.org/browse/DHIS2-12518): 500 error on some saved charts on Data Visualizer app and "Visits ANC" and "Nutrition" Dashboards**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11821](https://jira.dhis2.org/browse/DHIS2-11821): Upgrade cli-app-scripts to introduce kill-switch**  
Components: _[App] Data administration_

**[DHIS2-10785](https://jira.dhis2.org/browse/DHIS2-10785): Data Statistics UI has unlabeled rows**  
Components: _[App] Data administration_

**[DHIS2-12865](https://jira.dhis2.org/browse/DHIS2-12865): Translations are not visible for sections and section details.**  
Components: _[App] Data entry_

**[DHIS2-12677](https://jira.dhis2.org/browse/DHIS2-12677): [B] Bug in Analytic Tables**  
Components: _[App] Event visualizer_, _[App] Pivot table_

**[DHIS2-13129](https://jira.dhis2.org/browse/DHIS2-13129): Uncompressed format data export file is downloaded without the file extension**  
Components: _[App] Import-export_

**[DHIS2-12554](https://jira.dhis2.org/browse/DHIS2-12554): Export datavalues in DHIS2, File downloaded does not specify where and When**  
Components: _[App] Import-export_

**[DHIS2-13227](https://jira.dhis2.org/browse/DHIS2-13227): Indicator expression giving error when using data element of value type (YES/NO) --boolena**  
Components: _[App] Maintenance_

**[DHIS2-11543](https://jira.dhis2.org/browse/DHIS2-11543): Data input period in UI changes to the day before on save**  
Components: _[App] Maintenance_

**[DHIS2-11100](https://jira.dhis2.org/browse/DHIS2-11100): Deleting data elements takes very long**  
Components: _[App] Maintenance_

**[DHIS2-12104](https://jira.dhis2.org/browse/DHIS2-12104): Unexpected message "expression is not valid" when validating a Program Rule Action**  
Components: _[App] Maintenance_

**[DHIS2-12105](https://jira.dhis2.org/browse/DHIS2-12105): Unexpected message "expression is not valid" when validating a Program Rule condition**  
Components: _[App] Maintenance_

**[DHIS2-12196](https://jira.dhis2.org/browse/DHIS2-12196): Show event clusters on innermost zoom level**  
Components: _[App] Maps_

**[DHIS2-12862](https://jira.dhis2.org/browse/DHIS2-12862): Basemap attribution is not included in map download**  
Components: _[App] Maps_

**[DHIS2-12861](https://jira.dhis2.org/browse/DHIS2-12861): Increase margin between layers in download legend**  
Components: _[App] Maps_

**[DHIS2-12504](https://jira.dhis2.org/browse/DHIS2-12504): Error not shown when org unit selection is invalid**  
Components: _[App] Maps_

**[DHIS2-12506](https://jira.dhis2.org/browse/DHIS2-12506): Avoid "null people per hectare" for population layers**  
Components: _[App] Maps_

**[DHIS2-12800](https://jira.dhis2.org/browse/DHIS2-12800): App crash if data table is opened for earth engine layers while no org units are selected**  
Components: _[App] Maps_

**[DHIS2-6276](https://jira.dhis2.org/browse/DHIS2-6276): Booleans do not display properly in SQL Views**  
Components: _[App] Other_

**[DHIS2-12708](https://jira.dhis2.org/browse/DHIS2-12708): DHIS2 Logs Contain Very Little or No Infomation**  
Components: _[App] Other_

**[DHIS2-13134](https://jira.dhis2.org/browse/DHIS2-13134): Incorrect number of dataset expected reports**  
Components: _[App] Reports_

**[DHIS2-12590](https://jira.dhis2.org/browse/DHIS2-12590): Sms configuration update**  
Components: _[App] SMS configuration_

**[DHIS2-12298](https://jira.dhis2.org/browse/DHIS2-12298): Searching on large option sets should ignore accented characters when filtering**  
Components: _[App] Tracker capture_

**[DHIS2-12527](https://jira.dhis2.org/browse/DHIS2-12527): Various errors in the Profile Widget**  
Components: _[App] Tracker capture_


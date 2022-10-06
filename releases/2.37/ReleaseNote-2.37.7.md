# Patch 2.37.7 Release Note

- [Patch 2.37.7 Release Note](#patch-2377-release-note)
  - [Features](#features)
  - [Bugs](#bugs)

## Features

**[DHIS2-11181](https://jira.dhis2.org/browse/DHIS2-11181): Support outputIdScheme for event analytics**  
Components: _[API] Events_

**[DHIS2-13035](https://jira.dhis2.org/browse/DHIS2-13035): Allow selective notifications to replace last message instead of append**  
Components: _[API] Job scheduler_

**[DHIS2-13152](https://jira.dhis2.org/browse/DHIS2-13152): Deleting org units crash with associations to category option**  
Components: _[API] Metadata model_

**[DHIS2-11637](https://jira.dhis2.org/browse/DHIS2-11637): OrgUnit group and ancestor expression functions**  
Components: _[API] Predictors_

**[DHIS2-12516](https://jira.dhis2.org/browse/DHIS2-12516): Use JSON as default response format for system settings**  
Components: _[API] System configuration_

**[DHIS2-12819](https://jira.dhis2.org/browse/DHIS2-12819): Support API versioning in new tracker APIs (backports to 2.37 and 2.36)**  
Components: _[API] Tracker_

**[DHIS2-7128](https://jira.dhis2.org/browse/DHIS2-7128): Improve the text for category names in user feedback for event capture**  
Components: _[App] Capture_

**[DHIS2-12046](https://jira.dhis2.org/browse/DHIS2-12046): Max org unit level for data output in add and edit user screens**  
Components: _[App] User_

## Bugs

**[DHIS2-13212](https://jira.dhis2.org/browse/DHIS2-13212): [E] Header names don't reflect users' custom time dimension names**  
Components: _[API] Analytics_

**[DHIS2-13098](https://jira.dhis2.org/browse/DHIS2-13098): [D] Name not respected for OptionSet in Excel export in /enrollments/query**  
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

**[DHIS2-12807](https://jira.dhis2.org/browse/DHIS2-12807): [B] Analytics Export Fails When a New Column is Added**  
Components: _[API] Analytics_

**[DHIS2-9372](https://jira.dhis2.org/browse/DHIS2-9372): Manual application uploads fail with 400 error**  
Components: _[API] App management_

**[DHIS2-10687](https://jira.dhis2.org/browse/DHIS2-10687): Data Admin->Maintenance->Update catoptioncombos  crashes if catoptioncombo is used in predictor**  
Components: _[API] Data administration_, _[App] Data administration_

**[DHIS2-12741](https://jira.dhis2.org/browse/DHIS2-12741): Data integrity does not work**  
Components: _[API] Data administration_, _[App] Data administration_

**[DHIS2-12602](https://jira.dhis2.org/browse/DHIS2-12602): Throwing Namespace not found error with 404 status code for dataStore api**  
Components: _[API] Data store_

**[DHIS2-11925](https://jira.dhis2.org/browse/DHIS2-11925): Data value export to XML with compression creates empty archive**  
Components: _[API] Data value set_

**[DHIS2-12180](https://jira.dhis2.org/browse/DHIS2-12180): Incorrect total count during DataValueSet import**  
Components: _[API] Data value set_

**[DHIS2-12601](https://jira.dhis2.org/browse/DHIS2-12601): Upgrade Failure to 2.37**  
Components: _[API] Database migration_

**[DHIS2-12853](https://jira.dhis2.org/browse/DHIS2-12853): Tracker data value history not available**  
Components: _[API] Events_, _[API] Tracker_

**[DHIS2-12598](https://jira.dhis2.org/browse/DHIS2-12598): Default JSON event fields does not include dataValues**  
Components: _[API] Events_

**[DHIS2-12634](https://jira.dhis2.org/browse/DHIS2-12634): Event api missing dataValues when fields parameter is empty**  
Components: _[API] Events_

**[DHIS2-13163](https://jira.dhis2.org/browse/DHIS2-13163): Disable builtin logging customization when given logging config by user**  
Components: _[API] Frameworks and libraries_

**[DHIS2-12986](https://jira.dhis2.org/browse/DHIS2-12986): Fix logging exception on startup**  
Components: _[API] Frameworks and libraries_

**[DHIS2-13030](https://jira.dhis2.org/browse/DHIS2-13030): Tracker sync fails because called service can't handle superuser execution (NPE)**  
Components: _[API] Job scheduler_

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

**[DHIS2-12762](https://jira.dhis2.org/browse/DHIS2-12762): Event data Sync is failing**  
Components: _[API] Synchronization_

**[DHIS2-10174](https://jira.dhis2.org/browse/DHIS2-10174): Property to display in analysis modules ignored**  
Components: _[API] System configuration_, _[App] Analytics_, _[App] Settings_

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

**[DHIS2-12282](https://jira.dhis2.org/browse/DHIS2-12282): idScheme=CODE not working for dataElement or attributeOptionCombo**  
Components: _[API] Tracker_

**[DHIS2-12285](https://jira.dhis2.org/browse/DHIS2-12285): The endpoint /api/trackedEntityInstances returns soft-deleted events**  
Components: _[API] Tracker_

**[DHIS2-12325](https://jira.dhis2.org/browse/DHIS2-12325): Bad request when fetching relationship through event**  
Components: _[API] Tracker_

**[DHIS2-12347](https://jira.dhis2.org/browse/DHIS2-12347): Exception:OrganisationUnit can't be null**  
Components: _[API] Tracker_

**[DHIS2-12348](https://jira.dhis2.org/browse/DHIS2-12348): Marking enrollment for followUp is ignored**  
Components: _[API] Tracker_

**[DHIS2-12369](https://jira.dhis2.org/browse/DHIS2-12369): TEA with : (and possibly other characters) causes fields to disappear from API**  
Components: _[API] Tracker_

**[DHIS2-12484](https://jira.dhis2.org/browse/DHIS2-12484): NTI: import events with IMAGE dataValues returns a conflict**  
Components: _[API] Tracker_

**[DHIS2-12663](https://jira.dhis2.org/browse/DHIS2-12663): NTI: Updating event with file_resource data value fails**  
Components: _[API] Tracker_

**[DHIS2-12717](https://jira.dhis2.org/browse/DHIS2-12717): Handle user fields as User Info objects in NTI**  
Components: _[API] Tracker_

**[DHIS2-12844](https://jira.dhis2.org/browse/DHIS2-12844): Sorting order is not working on TEI working lists**  
Components: _[API] Tracker_

**[DHIS2-11947](https://jira.dhis2.org/browse/DHIS2-11947): NTI: enrollment date validation message doesn't include the date**  
Components: _[API] Tracker_

**[DHIS2-12534](https://jira.dhis2.org/browse/DHIS2-12534): Remove NTI idScheme AUTO**  
Components: _[API] Tracker_

**[DHIS2-12623](https://jira.dhis2.org/browse/DHIS2-12623): Move DB access and mutation to preheat and preprocessor**  
Components: _[API] Tracker_

**[DHIS2-11300](https://jira.dhis2.org/browse/DHIS2-11300): Missing errorReports when using DELETE strategy and validation fails (enrollment)**  
Components: _[API] Tracker_

**[DHIS2-12659](https://jira.dhis2.org/browse/DHIS2-12659): GET /api/tracker/relationships query params are inconsistent with the docs**  
Components: _[API] Tracker_

**[DHIS2-12460](https://jira.dhis2.org/browse/DHIS2-12460): New tracker importer require attributeOptionCombo**  
Components: _[API] Tracker_

**[DHIS2-12624](https://jira.dhis2.org/browse/DHIS2-12624): Translating programs fails with a 500 server error**  
Components: _[API] Translations_

**[DHIS2-12707](https://jira.dhis2.org/browse/DHIS2-12707): Hiding program sections prevents event saving (Capture app)**  
Components: _[App] Capture_

**[DHIS2-10332](https://jira.dhis2.org/browse/DHIS2-10332): Capture App Skipping Metadata Pulls when refreshing the browser**  
Components: _[App] Capture_

**[DHIS2-12188](https://jira.dhis2.org/browse/DHIS2-12188): Tracker capture skips paging when loading program indicators**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-12876](https://jira.dhis2.org/browse/DHIS2-12876): App is being crashed when a unique Tracked entity attribute encounters duplicate value**  
Components: _[App] Capture_

**[DHIS2-11610](https://jira.dhis2.org/browse/DHIS2-11610): Organisation unit attributes are not saved when registering a TEI**  
Components: _[App] Capture_

**[DHIS2-12158](https://jira.dhis2.org/browse/DHIS2-12158): Multiple enrollments message when there are only one**  
Components: _[App] Capture_

**[DHIS2-12280](https://jira.dhis2.org/browse/DHIS2-12280): Program not preselected when registering TEI through creation of Relationship**  
Components: _[App] Capture_

**[DHIS2-12508](https://jira.dhis2.org/browse/DHIS2-12508): Multiple program message when only enrolled in one**  
Components: _[App] Capture_

**[DHIS2-12524](https://jira.dhis2.org/browse/DHIS2-12524): No option for "Search in all programs" if no results in current program**  
Components: _[App] Capture_

**[DHIS2-12557](https://jira.dhis2.org/browse/DHIS2-12557): link button doesn't activate the linking process when Unique ID is unique but not autogenerated on Capture app**  
Components: _[App] Capture_

**[DHIS2-12667](https://jira.dhis2.org/browse/DHIS2-12667): Report date in View/Edit Enrollment Event says "Incident date"**  
Components: _[App] Capture_

**[DHIS2-12837](https://jira.dhis2.org/browse/DHIS2-12837): Editing single event crashes the app**  
Components: _[App] Capture_

**[DHIS2-12929](https://jira.dhis2.org/browse/DHIS2-12929): Working lists: views are ordered incorrectly**  
Components: _[App] Capture_

**[DHIS2-12584](https://jira.dhis2.org/browse/DHIS2-12584): Enrollment status Complete should be "Completed" in Enrollment Widget**  
Components: _[App] Capture_

**[DHIS2-11821](https://jira.dhis2.org/browse/DHIS2-11821): Upgrade cli-app-scripts to introduce kill-switch**  
Components: _[App] Data administration_

**[DHIS2-12865](https://jira.dhis2.org/browse/DHIS2-12865): Translations are not visible for sections and section details.**  
Components: _[App] Data entry_

**[DHIS2-13015](https://jira.dhis2.org/browse/DHIS2-13015): Issue on translating the title of favorite/newly created DV/Pivot Table by going to file menu on DV App**  
Components: _[App] Data visualizer_

**[DHIS2-13129](https://jira.dhis2.org/browse/DHIS2-13129): Uncompressed format data export file is downloaded without the file extension**  
Components: _[App] Import-export_

**[DHIS2-13019](https://jira.dhis2.org/browse/DHIS2-13019): metadata Import error DHIS2.37.4**  
Components: _[App] Import-export_

**[DHIS2-12554](https://jira.dhis2.org/browse/DHIS2-12554): Export datavalues in DHIS2, File downloaded does not specify where and When**  
Components: _[App] Import-export_

**[DHIS2-12262](https://jira.dhis2.org/browse/DHIS2-12262): XML data import causes 406 response**  
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

**[DHIS2-12590](https://jira.dhis2.org/browse/DHIS2-12590): Sms configuration update**  
Components: _[App] SMS configuration_

**[DHIS2-12298](https://jira.dhis2.org/browse/DHIS2-12298): Searching on large option sets should ignore accented characters when filtering**  
Components: _[App] Tracker capture_

**[DHIS2-12527](https://jira.dhis2.org/browse/DHIS2-12527): Various errors in the Profile Widget**  
Components: _[App] Tracker capture_


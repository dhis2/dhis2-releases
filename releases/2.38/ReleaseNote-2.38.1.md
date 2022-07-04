# Patch 2.38.1 Release Note

- [Patch 2.38.1 Release Note](#patch-2381-release-note)
  - [Features](#features)
  - [Bugs](#bugs)

## Features

**[DHIS2-11522](https://jira.dhis2.org/browse/DHIS2-11522): Indicator sub-expressions**  
Components: _[API] Analytics_

**[DHIS2-13152](https://jira.dhis2.org/browse/DHIS2-13152): Deleting org units crash with associations to category option**  
Components: _[API] Metadata model_

**[DHIS2-12249](https://jira.dhis2.org/browse/DHIS2-12249): Relationship type attributes for display**  
Components: _[API] Metadata model_

**[DHIS2-12048](https://jira.dhis2.org/browse/DHIS2-12048): API that lists candidates for indexable attributes**  
Components: _[API] Tracker_

**[DHIS2-13298](https://jira.dhis2.org/browse/DHIS2-13298): Add African Union colour palettes to key reporting apps**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-13311](https://jira.dhis2.org/browse/DHIS2-13311): Show GeoJSON attribute description**  
Components: _[App] Maps_

**[DHIS2-12155](https://jira.dhis2.org/browse/DHIS2-12155): Allow the default basemap to be changed for a DHIS2 instance**  
Components: _[App] Maps_

**[DHIS2-12521](https://jira.dhis2.org/browse/DHIS2-12521): Add 500k and 1m records as options under Systems setting for reports and SQL Views**  
Components: _[App] Settings_

**[DHIS2-12792](https://jira.dhis2.org/browse/DHIS2-12792): Show title at top of replicate user form**  
Components: _[App] User_

**[DHIS2-1677](https://jira.dhis2.org/browse/DHIS2-1677): Aggregate indicators with filters and conditional statements**  

## Bugs

**[DHIS2-12989](https://jira.dhis2.org/browse/DHIS2-12989): [D]"last value" aggregation type is broken in later versions for data elements and program indicators in the analytics API**  
Components: _[API] Analytics_

**[DHIS2-12979](https://jira.dhis2.org/browse/DHIS2-12979): [E]Data items with null value give incorrect order of repeatable events in line lists**  
Components: _[API] Analytics_

**[DHIS2-13212](https://jira.dhis2.org/browse/DHIS2-13212): [E] Header names don't reflect users' custom time dimension names**  
Components: _[API] Analytics_

**[DHIS2-13119](https://jira.dhis2.org/browse/DHIS2-13119): [E] Make "legacy" flag always false, for POST/PUT on "/eventVisualizations"**  
Components: _[API] Analytics_

**[DHIS2-13098](https://jira.dhis2.org/browse/DHIS2-13098): [D] Name not respected for OptionSet in Excel export in /enrollments/query**  
Components: _[API] Analytics_

**[DHIS2-13140](https://jira.dhis2.org/browse/DHIS2-13140): [E] Options not returned when results rows are empty**  
Components: _[API] Analytics_

**[DHIS2-13002](https://jira.dhis2.org/browse/DHIS2-13002): [D] Fix bug in Visualization migration**  
Components: _[API] Analytics_

**[DHIS2-13099](https://jira.dhis2.org/browse/DHIS2-13099): [D] Unhandled exception in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-13141](https://jira.dhis2.org/browse/DHIS2-13141): [E] NULL values from numeric Program Indicators are converted to 0**  
Components: _[API] Analytics_

**[DHIS2-13086](https://jira.dhis2.org/browse/DHIS2-13086): [E] Aggregate event analytics throws a 500**  
Components: _[API] Analytics_

**[DHIS2-12965](https://jira.dhis2.org/browse/DHIS2-12965): [D]/analytics/enrollments/query counts the rows when totalPages=false**  
Components: _[API] Analytics_

**[DHIS2-12602](https://jira.dhis2.org/browse/DHIS2-12602): Throwing Namespace not found error with 404 status code for dataStore api**  
Components: _[API] Data store_

**[DHIS2-12748](https://jira.dhis2.org/browse/DHIS2-12748): Data store: numeric sort order sometimes returns 500**  
Components: _[API] Data store_

**[DHIS2-12853](https://jira.dhis2.org/browse/DHIS2-12853): Tracker data value history not available**  
Components: _[API] Events_, _[API] Tracker_

**[DHIS2-13163](https://jira.dhis2.org/browse/DHIS2-13163): Disable builtin logging customization when given logging config by user**  
Components: _[API] Frameworks and libraries_

**[DHIS2-12986](https://jira.dhis2.org/browse/DHIS2-12986): Fix logging exception on startup**  
Components: _[API] Frameworks and libraries_

**[DHIS2-12094](https://jira.dhis2.org/browse/DHIS2-12094): [C] Newly created Continuous Analytics Job fails**  
Components: _[API] Job scheduler_

**[DHIS2-12938](https://jira.dhis2.org/browse/DHIS2-12938): Too many error logs from PostInsertAuditListener.java**  
Components: _[API] Other_

**[DHIS2-13172](https://jira.dhis2.org/browse/DHIS2-13172): Incomplete 'Completed by details' in datasets**  
Components: _[API] Other_, _[API] Tracker_, _[App] Data entry_

**[DHIS2-12958](https://jira.dhis2.org/browse/DHIS2-12958): Collections API does not support additions and deletions in the same request**  
Components: _[API] Other_

**[DHIS2-8712](https://jira.dhis2.org/browse/DHIS2-8712): Login page does not use Interface language**  
Components: _[API] Other_

**[DHIS2-10174](https://jira.dhis2.org/browse/DHIS2-10174): Property to display in analysis modules ignored**  
Components: _[API] System configuration_, _[App] Analytics_, _[App] Settings_

**[DHIS2-11534](https://jira.dhis2.org/browse/DHIS2-11534): Potential duplicate status is not validated**  
Components: _[API] Tracker_

**[DHIS2-12657](https://jira.dhis2.org/browse/DHIS2-12657): Error message in the Program Indicator creation interface - boolean values**  
Components: _[API] Tracker_

**[DHIS2-13263](https://jira.dhis2.org/browse/DHIS2-13263): Duplicate relationship added when item is event**  
Components: _[API] Tracker_

**[DHIS2-13146](https://jira.dhis2.org/browse/DHIS2-13146): Delete not existing relationship throws an error in NTI**  
Components: _[API] Tracker_

**[DHIS2-13032](https://jira.dhis2.org/browse/DHIS2-13032): ORG_UNIT_CODE Generation fails**  
Components: _[API] Tracker_

**[DHIS2-7869](https://jira.dhis2.org/browse/DHIS2-7869): Program rules using V{event_status} are not working**  
Components: _[API] Tracker_

**[DHIS2-11702](https://jira.dhis2.org/browse/DHIS2-11702): Query parameter in calls to /api/trackedEntityInstances not working as expected**  
Components: _[API] Tracker_

**[DHIS2-12369](https://jira.dhis2.org/browse/DHIS2-12369): TEA with : (and possibly other characters) causes fields to disappear from API**  
Components: _[API] Tracker_

**[DHIS2-12822](https://jira.dhis2.org/browse/DHIS2-12822):  Error when trying add username to the TEA of valuetype "username"**  
Components: _[API] Tracker_

**[DHIS2-13110](https://jira.dhis2.org/browse/DHIS2-13110): Move DGS and display name property from Appearance to Analytics section**  
Components: _[App] Analytics_, _[App] Settings_

**[DHIS2-12138](https://jira.dhis2.org/browse/DHIS2-12138): Remove the call to /count when searching for potential duplicates**  
Components: _[App] Capture_

**[DHIS2-13062](https://jira.dhis2.org/browse/DHIS2-13062): Person Profile should be "[TETname] profile"**  
Components: _[App] Capture_

**[DHIS2-12707](https://jira.dhis2.org/browse/DHIS2-12707): Hiding program sections prevents event saving (Capture app)**  
Components: _[App] Capture_

**[DHIS2-11977](https://jira.dhis2.org/browse/DHIS2-11977): hasUserRole condition in program rule does not trigger in Capture app**  
Components: _[App] Capture_

**[DHIS2-10332](https://jira.dhis2.org/browse/DHIS2-10332): Capture App Skipping Metadata Pulls when refreshing the browser**  
Components: _[App] Capture_

**[DHIS2-12188](https://jira.dhis2.org/browse/DHIS2-12188): Tracker capture skips paging when loading program indicators**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-13241](https://jira.dhis2.org/browse/DHIS2-13241): URL out of sync after adding a new event**  
Components: _[App] Capture_

**[DHIS2-12929](https://jira.dhis2.org/browse/DHIS2-12929): Working lists: views are ordered incorrectly**  
Components: _[App] Capture_

**[DHIS2-12880](https://jira.dhis2.org/browse/DHIS2-12880): Add new button is visible after refreshing the page**  
Components: _[App] Capture_

**[DHIS2-12993](https://jira.dhis2.org/browse/DHIS2-12993): Not redirected to enrollment dashboard when choosing a different program TEI is already enrolled in**  
Components: _[App] Capture_

**[DHIS2-12928](https://jira.dhis2.org/browse/DHIS2-12928): TEI - error ASSIGN_VALUE output**  
Components: _[App] Capture_

**[DHIS2-12883](https://jira.dhis2.org/browse/DHIS2-12883): Working lists - Improve multiple order arguments**  
Components: _[App] Capture_

**[DHIS2-12873](https://jira.dhis2.org/browse/DHIS2-12873): Deleting one file deletes all the files in edit profile page**  
Components: _[App] Capture_

**[DHIS2-12988](https://jira.dhis2.org/browse/DHIS2-12988): Selecting Complete/Incomplete buttons on data entry app for 2.38.0 won't change the state of the buttons( graying out)**  
Components: _[App] Data entry_

**[DHIS2-12915](https://jira.dhis2.org/browse/DHIS2-12915): Wrong error screen for empty dimension errors**  
Components: _[App] Data visualizer_

**[DHIS2-13129](https://jira.dhis2.org/browse/DHIS2-13129): Uncompressed format data export file is downloaded without the file extension**  
Components: _[App] Import-export_

**[DHIS2-13019](https://jira.dhis2.org/browse/DHIS2-13019): metadata Import error DHIS2.37.4**  
Components: _[App] Import-export_

**[DHIS2-12554](https://jira.dhis2.org/browse/DHIS2-12554): Export datavalues in DHIS2, File downloaded does not specify where and When**  
Components: _[App] Import-export_

**[DHIS2-13227](https://jira.dhis2.org/browse/DHIS2-13227): Indicator expression giving error when using data element of value type (YES/NO) --boolena**  
Components: _[App] Maintenance_

**[DHIS2-11543](https://jira.dhis2.org/browse/DHIS2-11543): Data input period in UI changes to the day before on save**  
Components: _[App] Maintenance_

**[DHIS2-11100](https://jira.dhis2.org/browse/DHIS2-11100): Deleting data elements takes very long**  
Components: _[App] Maintenance_

**[DHIS2-12862](https://jira.dhis2.org/browse/DHIS2-12862): Basemap attribution is not included in map download**  
Components: _[App] Maps_

**[DHIS2-12861](https://jira.dhis2.org/browse/DHIS2-12861): Increase margin between layers in download legend**  
Components: _[App] Maps_

**[DHIS2-12504](https://jira.dhis2.org/browse/DHIS2-12504): Error not shown when org unit selection is invalid**  
Components: _[App] Maps_

**[DHIS2-12475](https://jira.dhis2.org/browse/DHIS2-12475): Earth Engine layers: Better handling when no aggregation types or org units are selected**  
Components: _[App] Maps_

**[DHIS2-6276](https://jira.dhis2.org/browse/DHIS2-6276): Booleans do not display properly in SQL Views**  
Components: _[App] Other_

**[DHIS2-12298](https://jira.dhis2.org/browse/DHIS2-12298): Searching on large option sets should ignore accented characters when filtering**  
Components: _[App] Tracker capture_

**[DHIS2-13446](https://jira.dhis2.org/browse/DHIS2-13446): [frontend] DHIS2 shouldn't unilaterally enforce all-lowercase usernames**  
Components: _[App] User_


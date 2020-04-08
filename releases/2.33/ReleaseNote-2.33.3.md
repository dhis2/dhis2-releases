# Patch 2.33.3 Release Note

## Features

**[DHIS2-7226](https://jira.dhis2.org/browse/DHIS2-7226): Improve search when creating relationships**  
Components: _[App] Tracker capture_

## Bugs

**[DHIS2-8542](https://jira.dhis2.org/browse/DHIS2-8542): Sorting on program indicators in events query doesn't work**  
Components: _[API] Analytics_

**[DHIS2-7862](https://jira.dhis2.org/browse/DHIS2-7862): Indicators with fixed values or constants do not render**  
Components: _[API] Analytics_, _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-8571](https://jira.dhis2.org/browse/DHIS2-8571): 500 error on /analytics/events/query**  
Components: _[API] Analytics_

**[DHIS2-8387](https://jira.dhis2.org/browse/DHIS2-8387): Map fails when indicator has 0 decimals**  
Components: _[API] Analytics_  
**Testing**

**[DHIS2-7552](https://jira.dhis2.org/browse/DHIS2-7552): Error when triggering analytics with orgUnitField defined**  
Components: _[API] Analytics_

**[DHIS2-7712](https://jira.dhis2.org/browse/DHIS2-7712): Event reports doesn't use dimension restrictions assigned to a user account**  
Components: _[API] Analytics_, _[API] Events_

**[DHIS2-8461](https://jira.dhis2.org/browse/DHIS2-8461): Data sharing not enforced for data sets for data export**  
Components: _[API] Data value set_

**[DHIS2-8196](https://jira.dhis2.org/browse/DHIS2-8196): Deleted completeDataSetRegistrations cannot be noticed in web API**  
Components: _[API] Data value set_

**[DHIS2-6322](https://jira.dhis2.org/browse/DHIS2-6322): Error trying to edit compulsory data elements in data set**  
Components: _[API] Metadata import-export_

**[DHIS2-3454](https://jira.dhis2.org/browse/DHIS2-3454): Can't delete Program Rule after importing it through metadata import**  
Components: _[API] Metadata import-export_, _[API] Metadata model_  

**[DHIS2-8308](https://jira.dhis2.org/browse/DHIS2-8308): Metadata import fails: `offsetPeriods` allowed range [0 to 2 147 483 647], but number given was -18**  
Components: _[API] Metadata import-export_

**[DHIS2-8513](https://jira.dhis2.org/browse/DHIS2-8513): Pagination firstResult calculated incorrectly**  
Components: _[API] Metadata model_

**[DHIS2-8508](https://jira.dhis2.org/browse/DHIS2-8508): AbstractController does not propagate pagination info to the back-end**  
Components: _[API] Metadata model_

**[DHIS2-2696](https://jira.dhis2.org/browse/DHIS2-2696): CategoryCombo W/O Options Causes DataElement Operands 500**  
Components: _[API] Other_  

**[DHIS2-8578](https://jira.dhis2.org/browse/DHIS2-8578): Plugin resources aren't publicly accessible**  
Components: _[API] Other_  
**Testing**

**[DHIS2-8526](https://jira.dhis2.org/browse/DHIS2-8526): Editing localized appearance settings throws a 409 if default values are undefined**  
Components: _[App] Settings_  
**Testing**

**[DHIS2-8506](https://jira.dhis2.org/browse/DHIS2-8506): Cannot run function with create temporary table from SQL view**  
Components: _[API] Other_

**[DHIS2-5731](https://jira.dhis2.org/browse/DHIS2-5731): trackedEntityInstances query only returns "Display in List" attributes**  
Components: _[API] Tracker_

**[DHIS2-8317](https://jira.dhis2.org/browse/DHIS2-8317): Enrollment blocked for non-super users**  
Components: _[API] Tracker_  
**Testing**

**[DHIS2-8439](https://jira.dhis2.org/browse/DHIS2-8439): Cannot remove What'sapp and Skype addresses from users**  
Components: _[API] User_, _[App] User_, _[App] User Profile_  

**[DHIS2-8386](https://jira.dhis2.org/browse/DHIS2-8386): Validation Rule fails when indicator has 0 decimals**  
Components: _[API] Validation_

**[DHIS2-8602](https://jira.dhis2.org/browse/DHIS2-8602): Opening the new event page with a tracker program selected causes the app to crash**  
Components: _[App] Capture_  
**Testing**

**[DHIS2-8519](https://jira.dhis2.org/browse/DHIS2-8519): Covid-19 data package: Can't submit form in row view**  
Components: _[App] Capture_

**[DHIS2-8600](https://jira.dhis2.org/browse/DHIS2-8600): Report links in dashboard have wrong url**  
Components: _[App] Dashboard_  
**Testing**

**[DHIS2-5382](https://jira.dhis2.org/browse/DHIS2-5382): [Data entry app] Staring comments for YesOnly data elements deletes comments**  
Components: _[App] Data entry_

**[DHIS2-7872](https://jira.dhis2.org/browse/DHIS2-7872): Event Reports "Selected Data Items" Input fails for TEA with AGE data type (looking for TIMESTAMP type)**  
Components: _[App] Event reports_

**[DHIS2-8170](https://jira.dhis2.org/browse/DHIS2-8170): Sorting line lists on program indicators causes empty list**  
Components: _[App] Event reports_

**[DHIS2-8407](https://jira.dhis2.org/browse/DHIS2-8407): Event Report - LineListing-Enrollment display optionvalueCODES and all text values in lowercase**  
Components: _[App] Event reports_

**[DHIS2-8414](https://jira.dhis2.org/browse/DHIS2-8414): TEAs removed from event reports on update**  
Components: _[App] Event reports_

**[DHIS2-2731](https://jira.dhis2.org/browse/DHIS2-2731): Import Option/OptionSet doesn't work properly**  
Components: _[App] Import-export_

**[DHIS2-8435](https://jira.dhis2.org/browse/DHIS2-8435): Remove "Date to send message" field for send message program rule action**  
Components: _[App] Maintenance_

**[DHIS2-4998](https://jira.dhis2.org/browse/DHIS2-4998): Update stage sections when a data element is removed**  
Components: _[App] Maintenance_  

**[DHIS2-8574](https://jira.dhis2.org/browse/DHIS2-8574): Meta-data paging broken**  
Components: _[App] Maintenance_  

**[DHIS2-8590](https://jira.dhis2.org/browse/DHIS2-8590): Push analytics not preview not working**  
Components: _[App] Maintenance_  

**[DHIS2-8136](https://jira.dhis2.org/browse/DHIS2-8136): Missing autoScrollBodyContent prop on dialogs prevents scrolling vertically**  
Components: _[App] Maintenance_

**[DHIS2-7707](https://jira.dhis2.org/browse/DHIS2-7707): Error in posting job configuration for PushAnalysis**  
Components: _[App] Maintenance_

**[DHIS2-8520](https://jira.dhis2.org/browse/DHIS2-8520): Context menu for dashboard maps is shown outside map canvas**  
Components: _[App] Maps_

**[DHIS2-8529](https://jira.dhis2.org/browse/DHIS2-8529): Editing Event layer from "Group events" to "Show all events" result in empty layer**  
Components: _[App] Maps_

**[DHIS2-8576](https://jira.dhis2.org/browse/DHIS2-8576): Create standard report not working**  
Components: _[App] Reports_

**[DHIS2-7865](https://jira.dhis2.org/browse/DHIS2-7865): Tracker Capture Widgets and Locking Feature cause timeline data entry failure**  
Components: _[App] Tracker capture_

**[DHIS2-7619](https://jira.dhis2.org/browse/DHIS2-7619): About Page Refuses to load**  
Components: _[App] User Profile_

**[DHIS2-6128](https://jira.dhis2.org/browse/DHIS2-6128): Change the frontend API call on setting Locale dependent Appearance settings**  
Components: _[App] User Profile_


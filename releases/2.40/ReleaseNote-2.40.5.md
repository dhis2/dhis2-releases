# Patch 2.40.5 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-17174](https://dhis2.atlassian.net/browse/DHIS2-17174): Support other filestores than s3**  
Components: _[API] File Resources_

**[DHIS2-17276](https://dhis2.atlassian.net/browse/DHIS2-17276): Add metadata sharing setting option to data exchanges**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-17048](https://dhis2.atlassian.net/browse/DHIS2-17048): Skip/unskip events in stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-17878](https://dhis2.atlassian.net/browse/DHIS2-17878): Delete event action in stages and events widget**  
Components: _[App] Capture_

**[DHIS2-17171](https://dhis2.atlassian.net/browse/DHIS2-17171): Preview images in versions prior to 41**  
Components: _[App] Capture_

**[DHIS2-11836](https://dhis2.atlassian.net/browse/DHIS2-11836): Respect "Block entry form" setting**  
Components: _[App] Capture_

**[DHIS2-15462](https://dhis2.atlassian.net/browse/DHIS2-15462): Use dhis2 UI calendarInput component in forms**  
Components: _[App] Capture_

**[DHIS2-15463](https://dhis2.atlassian.net/browse/DHIS2-15463): Use dhis2 UI calendarInput component in working lists**  
Components: _[App] Capture_

**[DHIS2-17575](https://dhis2.atlassian.net/browse/DHIS2-17575): Disable new event buttons when no data write access to programstage**  
Components: _[App] Capture_

**[DHIS2-17101](https://dhis2.atlassian.net/browse/DHIS2-17101): Related stages: Consider "Prevent adding events to stage” program rule**  
Components: _[App] Capture_

**[DHIS2-17655](https://dhis2.atlassian.net/browse/DHIS2-17655): [Related stages] Two event workspace**  
Components: _[App] Capture_

**[DHIS2-17591](https://dhis2.atlassian.net/browse/DHIS2-17591): [Frontend] Support plugins in event programs**  
Components: _[App] Capture_

**[DHIS2-17607](https://dhis2.atlassian.net/browse/DHIS2-17607): [Frontend] Support plugins in program stages**  
Components: _[App] Capture_

**[DHIS2-17726](https://dhis2.atlassian.net/browse/DHIS2-17726): [Frontend] Support plugins in Profile Widget**  
Components: _[App] Capture_

**[DHIS2-16125](https://dhis2.atlassian.net/browse/DHIS2-16125): Stages and events Widget: Hide program stage under certain circumstances**  
Components: _[App] Capture_

**[DHIS2-17630](https://dhis2.atlassian.net/browse/DHIS2-17630): Option to disable mobile log in**  
Components: _[App] Login_

**[DHIS2-17629](https://dhis2.atlassian.net/browse/DHIS2-17629): [LOGIN APP]: read hash routes + append on redirect**  
Components: _[App] Login_

## Bugs

**[DHIS2-16986](https://dhis2.atlassian.net/browse/DHIS2-16986): Continuous analytics job never runs a full table update**  
Components: _[API] Analytics_

**[DHIS2-15291](https://dhis2.atlassian.net/browse/DHIS2-15291): Event Report Enrollments not returning correct data - BACKPORT**  
Components: _[API] Analytics_

**[DHIS2-16762](https://dhis2.atlassian.net/browse/DHIS2-16762): Data Visualizer with fixed period "Weekly (Start Sunday)" not showing correct label**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-12003](https://dhis2.atlassian.net/browse/DHIS2-12003): GET maps/data.png fails**  
Components: _[API] Analytics_

**[DHIS2-17798](https://dhis2.atlassian.net/browse/DHIS2-17798): API PATCH request cannot add category options to categories**  
Components: _[API] Metadata import-export_, _[API] Metadata model_, _[API] Other_

**[DHIS2-17751](https://dhis2.atlassian.net/browse/DHIS2-17751): Metadata field filtering does not work with nameable**  
Components: _[API] Metadata model_

**[DHIS2-15419](https://dhis2.atlassian.net/browse/DHIS2-15419): Metrics API does not work with Hikari database pool**  
Components: _[API] Other_

**[DHIS2-17784](https://dhis2.atlassian.net/browse/DHIS2-17784): Fix linked_accounts logic so disabled accounts do not block enabled accounts**  
Components: _[API] Other_

**[DHIS2-17515](https://dhis2.atlassian.net/browse/DHIS2-17515): Referential integrity between ProgramRuleAction and ProgramNotificationTemplate**  
Components: _[API] Tracker_

**[DHIS2-17880](https://dhis2.atlassian.net/browse/DHIS2-17880): User is allowed to transfer TE to org unit not assigned to program**  
Components: _[API] Tracker_

**[DHIS2-17180](https://dhis2.atlassian.net/browse/DHIS2-17180): indiscriminately sending notifications in Capture app ( new Tracker endpoint )**  
Components: _[API] Tracker_

**[DHIS2-17243](https://dhis2.atlassian.net/browse/DHIS2-17243): ProgramRule notification are not sent (long-term solution)**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-15425](https://dhis2.atlassian.net/browse/DHIS2-15425): While Sending notification to ancestors, it skips the base orgunitsation unit**  
Components: _[API] Tracker_

**[DHIS2-17560](https://dhis2.atlassian.net/browse/DHIS2-17560): Mandatory data sync error with new importer (App 3.0 instances 39, 40 & 41)**  
Components: _[API] Tracker_

**[DHIS2-16417](https://dhis2.atlassian.net/browse/DHIS2-16417): Importer requiring mandatory TEA from program rules**  
Components: _[API] Tracker_

**[DHIS2-14300](https://dhis2.atlassian.net/browse/DHIS2-14300): Inconsistency in trackedEntities endpoint response (protected programs)**  
Components: _[API] Tracker_

**[DHIS2-16981](https://dhis2.atlassian.net/browse/DHIS2-16981): System user does not consider owner org unit when getting tracked entities**  
Components: _[API] Tracker_

**[DHIS2-17646](https://dhis2.atlassian.net/browse/DHIS2-17646): Auto generated ID null/empty**  
Components: _[API] Tracker_

**[DHIS2-17402](https://dhis2.atlassian.net/browse/DHIS2-17402): Delete relationships is not working when only UID is present in payload**  
Components: _[API] Tracker_

**[DHIS2-17863](https://dhis2.atlassian.net/browse/DHIS2-17863): Unable to make a linked account in v40.4.1**  
Components: _[API] User_

**[DHIS2-17971](https://dhis2.atlassian.net/browse/DHIS2-17971): ProgramRules for specific ProgramStage not being triggered**  
Components: _[App] Capture_

**[DHIS2-17488](https://dhis2.atlassian.net/browse/DHIS2-17488): Failed in denying access to stages for a user or group in the Capture App**  
Components: _[App] Capture_

**[DHIS2-17352](https://dhis2.atlassian.net/browse/DHIS2-17352): Choosing a different program in the event workspace does nothing**  
Components: _[App] Capture_

**[DHIS2-17516](https://dhis2.atlassian.net/browse/DHIS2-17516): Bad Request when sorting in the working lists**  
Components: _[App] Capture_

**[DHIS2-16373](https://dhis2.atlassian.net/browse/DHIS2-16373): Cannot change AOC on existing events in Tracker program**  
Components: _[App] Capture_

**[DHIS2-17653](https://dhis2.atlassian.net/browse/DHIS2-17653): Filter out existing events that are already linked**  
Components: _[App] Capture_

**[DHIS2-16218](https://dhis2.atlassian.net/browse/DHIS2-16218): Map basemap layer is displayed in dashboard even though the map's basemap layer is configured to be hidden**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-17758](https://dhis2.atlassian.net/browse/DHIS2-17758): [DATA ADMINISTRATION App] maintenance run previous selected items**  
Components: _[App] Data administration_

**[DHIS2-17955](https://dhis2.atlassian.net/browse/DHIS2-17955): Improve Data Visualizer with fixed period "Weekly (Start Sunday)" labels**  
Components: _[App] Data visualizer_

**[DHIS2-17707](https://dhis2.atlassian.net/browse/DHIS2-17707): Clearing the year input field in analytics apps throws an error**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-15976](https://dhis2.atlassian.net/browse/DHIS2-15976): Data element created date overwritten to date of update**  
Components: _[App] Import-export_

**[DHIS2-17672](https://dhis2.atlassian.net/browse/DHIS2-17672): [IMPORT/EXPORT]: event programs are not listed for export in Event export**  
Components: _[App] Import-export_

**[DHIS2-17772](https://dhis2.atlassian.net/browse/DHIS2-17772): When user the value type "org unit" in an attribute, line listing shows the uid of the org unit and not the name. (for 40 and 39)**  
Components: _[App] Line Listing_

**[DHIS2-15961](https://dhis2.atlassian.net/browse/DHIS2-15961): Line Listing app disregards to the option translations**  
Components: _[App] Line Listing_

**[DHIS2-16208](https://dhis2.atlassian.net/browse/DHIS2-16208): When downloading a multilingual line list as excel file/.csv , the option sets are not rendered in the correct language in the translation**  
Components: _[App] Line Listing_

**[DHIS2-17929](https://dhis2.atlassian.net/browse/DHIS2-17929): DHIS2 LDAP Issue**  
Components: _[App] Login_

**[DHIS2-6011](https://dhis2.atlassian.net/browse/DHIS2-6011): Irrelevant error message while deleting legends**  
Components: _[App] Maintenance_

**[DHIS2-17709](https://dhis2.atlassian.net/browse/DHIS2-17709): [SETTINGS APP]: Crashes with Portuguese Brazilian**  
Components: _[App] Settings_

**[DHIS2-10843](https://dhis2.atlassian.net/browse/DHIS2-10843): User roles: app names aren't always sorted or formatted correctly in authorities selector**  
Components: _[App] User_


# Patch 2.42.2 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-19942](https://dhis2.atlassian.net/browse/DHIS2-19942): Prevent updating a CategoryCombo's Categories through the `/api/metadata` endpoint, when associated data exists**  
Components: _[API] Metadata import-export_

**[DHIS2-19780](https://dhis2.atlassian.net/browse/DHIS2-19780): New systemSettings.keyAzureMapsApiKey (Bing is being retired)**  
Components: _[API] Other_, _[App] Settings_

**[DHIS2-19828](https://dhis2.atlassian.net/browse/DHIS2-19828): HTTP HEAD as method for personal access tokens (PAT)**  
Components: _[API] Security_

**[DHIS2-3354](https://dhis2.atlassian.net/browse/DHIS2-3354): Allow selecting data elements and tracked entity attributes with org unit value type as coordinate field**  
Components: _[App] Maps_

**[DHIS2-17187](https://dhis2.atlassian.net/browse/DHIS2-17187): Display Bing maps as disabled in the basemap layer card when Bing API key is missing**  
Components: _[App] Maps_

**[DHIS2-15696](https://dhis2.atlassian.net/browse/DHIS2-15696): Include values in legend for single color bubble maps**  
Components: _[App] Maps_

**[DHIS2-18500](https://dhis2.atlassian.net/browse/DHIS2-18500): Add Sentinel-2 cloudless mosaic**  
Components: _[App] Maps_

**[DHIS2-19863](https://dhis2.atlassian.net/browse/DHIS2-19863): Expose the ApiToken/PAT's code field to the UI, so it can be used for naming tokens**  
Components: _[App] User Profile_

## Bugs

**[DHIS2-19989](https://dhis2.atlassian.net/browse/DHIS2-19989): Analytics API: Query with dimensions of type coordinate fails**  
Components: _[API] Analytics_

**[DHIS2-19584](https://dhis2.atlassian.net/browse/DHIS2-19584): Exporting dashboard with dependencies not exporting visualizations relativePeriods**  
Components: _[API] Analytics_

**[DHIS2-19866](https://dhis2.atlassian.net/browse/DHIS2-19866): Data statistics returns negative numbers for certain object types**  
Components: _[API] Data administration_

**[DHIS2-19338](https://dhis2.atlassian.net/browse/DHIS2-19338): Duplicated category option combos are created by the maintenance task**  
Components: _[API] Data administration_

**[DHIS2-19762](https://dhis2.atlassian.net/browse/DHIS2-19762): ProgramTrackedEntityAttributes and ProgramStageDataElements should not appear at root level in dependency export**  
Components: _[API] Metadata import-export_

**[DHIS2-19883](https://dhis2.atlassian.net/browse/DHIS2-19883): Exclusion of nested fields might not properly exclude them**  
Components: _[API] Metadata import-export_

**[DHIS2-20099](https://dhis2.atlassian.net/browse/DHIS2-20099): [API: validationNotificationTemplates]: patch updates do not work**  
Components: _[API] Metadata model_

**[DHIS2-19941](https://dhis2.atlassian.net/browse/DHIS2-19941): [API: DATA SET SECTIONS EDIT]: removing an indicator from a data set does not remove it from an associated section**  
Components: _[API] Other_

**[DHIS2-19878](https://dhis2.atlassian.net/browse/DHIS2-19878): [api: system/flags]: Denmark is returned twice**  
Components: _[API] Other_

**[DHIS2-19915](https://dhis2.atlassian.net/browse/DHIS2-19915): Run operation of the Route API is filtering out the request's Content-Type**  
Components: _[API] Other_

**[DHIS2-19779](https://dhis2.atlassian.net/browse/DHIS2-19779): Guest user role update via UI (user app) is broken**  
Components: _[API] Security_

**[DHIS2-19665](https://dhis2.atlassian.net/browse/DHIS2-19665): OAuth2 authentication server don't work with https**  
Components: _[API] Security_

**[DHIS2-19725](https://dhis2.atlassian.net/browse/DHIS2-19725): Visualization with calculations won't sync - TransientObjectException - ExpressionDimensionItem**  
Components: _[API] Synchronization_

**[DHIS2-19583](https://dhis2.atlassian.net/browse/DHIS2-19583): MetadataSync does not chain anymore, only syncs 1 version.**  
Components: _[API] Synchronization_

**[DHIS2-18338](https://dhis2.atlassian.net/browse/DHIS2-18338): Tracker endpoints emit inaccessible data for a period of time**  
Components: _[API] Tracker_

**[DHIS2-12547](https://dhis2.atlassian.net/browse/DHIS2-12547): Program-related endpoints do not ensure SRID=4326 for all coordinates**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-20037](https://dhis2.atlassian.net/browse/DHIS2-20037): Empty static text in warning program rule action breaks tracker importer**  
Components: _[API] Tracker_

**[DHIS2-19693](https://dhis2.atlassian.net/browse/DHIS2-19693): Unable to Delete Users Without User Role Modification Permission**  
Components: _[API] User_

**[DHIS2-20009](https://dhis2.atlassian.net/browse/DHIS2-20009): "Reason to check for enrollments" needs to be mandatory**  
Components: _[App] Capture_

**[DHIS2-19973](https://dhis2.atlassian.net/browse/DHIS2-19973): App menu: links opening in new tabs for some apps**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-19975](https://dhis2.atlassian.net/browse/DHIS2-19975): TOTP secret created in versions earlier than v2.42 will not work after upgrading to v2.42+**  
Components: _[App] Login_, _[App] User Profile_

**[DHIS2-19267](https://dhis2.atlassian.net/browse/DHIS2-19267): Clicking data-table sort icon causes crash for some columns**  
Components: _[App] Maps_

**[DHIS2-19623](https://dhis2.atlassian.net/browse/DHIS2-19623): Events count is wrong with server clustering**  
Components: _[App] Maps_

**[DHIS2-19447](https://dhis2.atlassian.net/browse/DHIS2-19447): Thematic Layer: Legend for "No data" not visible in bubble map**  
Components: _[App] Maps_

**[DHIS2-19448](https://dhis2.atlassian.net/browse/DHIS2-19448): Thematic layers: Count of OU with No data is missing**  
Components: _[App] Maps_

**[DHIS2-19209](https://dhis2.atlassian.net/browse/DHIS2-19209): Error in Creating Bubble Maps with Single Colour Legend**  
Components: _[App] Maps_

**[DHIS2-18983](https://dhis2.atlassian.net/browse/DHIS2-18983): Basemap flashing in dashboard on fullscreen/slideshow mode**  
Components: _[App] Maps_

**[DHIS2-6683](https://dhis2.atlassian.net/browse/DHIS2-6683): Map layer text is selected when dragging/dropping map layers**  
Components: _[App] Maps_

**[DHIS2-19716](https://dhis2.atlassian.net/browse/DHIS2-19716): A user with ALL (Superuser) authority should have access to Manage available layer sources**  
Components: _[App] Maps_

**[DHIS2-19730](https://dhis2.atlassian.net/browse/DHIS2-19730): GroupSetSelect handling of None and missing values**  
Components: _[App] Maps_

**[DHIS2-20010](https://dhis2.atlassian.net/browse/DHIS2-20010): Routes with parameters using filter=id:in:[uid,uid] doesn't work**  
Components: _[App] Route Manager_

**[DHIS2-20157](https://dhis2.atlassian.net/browse/DHIS2-20157): fix: FileResourceCleanUpJob does not clean up JOB_DATA file resources/files for deleted  ONCE_ASAP jobs**  
Components: _[Core] Job Scheduler_


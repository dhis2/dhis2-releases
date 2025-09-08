# Patch 2.40.9 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-19942](https://dhis2.atlassian.net/browse/DHIS2-19942): Prevent updating a CategoryCombo's Categories through the `/api/metadata` endpoint, when associated data exists**  
Components: _[API] Metadata import-export_

**[DHIS2-19780](https://dhis2.atlassian.net/browse/DHIS2-19780): New systemSettings.keyAzureMapsApiKey (Bing is being retired)**  
Components: _[API] Other_, _[App] Settings_

**[DHIS2-3354](https://dhis2.atlassian.net/browse/DHIS2-3354): Allow selecting data elements and tracked entity attributes with org unit value type as coordinate field**  
Components: _[App] Maps_

**[DHIS2-17187](https://dhis2.atlassian.net/browse/DHIS2-17187): Display Bing maps as disabled in the basemap layer card when Bing API key is missing**  
Components: _[App] Maps_

**[DHIS2-15696](https://dhis2.atlassian.net/browse/DHIS2-15696): Include values in legend for single color bubble maps**  
Components: _[App] Maps_

**[DHIS2-18500](https://dhis2.atlassian.net/browse/DHIS2-18500): Add Sentinel-2 cloudless mosaic**  
Components: _[App] Maps_

## Bugs

**[DHIS2-18324](https://dhis2.atlassian.net/browse/DHIS2-18324): [DATA EXCHANGE API]: Scheduled data exchange jobs do not run**  
Components: _[API] Aggregate Data Exchange_, _[API] Job scheduler_

**[DHIS2-19584](https://dhis2.atlassian.net/browse/DHIS2-19584): Exporting dashboard with dependencies not exporting visualizations relativePeriods**  
Components: _[API] Analytics_

**[DHIS2-19028](https://dhis2.atlassian.net/browse/DHIS2-19028): Sorting of the Excel / CSV file when downloaded from Data Visualizer**  
Components: _[API] Analytics_

**[DHIS2-19058](https://dhis2.atlassian.net/browse/DHIS2-19058): Data Visualizer downloads XLS/CSV with removed empty rows/columns**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-18788](https://dhis2.atlassian.net/browse/DHIS2-18788): Incorrect "Limit Values" option does not work for Program Indicators**  
Components: _[API] Analytics_

**[DHIS2-19548](https://dhis2.atlassian.net/browse/DHIS2-19548): NPE in Maps API**  
Components: _[API] Analytics_

**[DHIS2-19866](https://dhis2.atlassian.net/browse/DHIS2-19866): Data statistics returns negative numbers for certain object types**  
Components: _[API] Data administration_

**[DHIS2-19338](https://dhis2.atlassian.net/browse/DHIS2-19338): Duplicated category option combos are created by the maintenance task**  
Components: _[API] Data administration_

**[DHIS2-19883](https://dhis2.atlassian.net/browse/DHIS2-19883): Exclusion of nested fields might not properly exclude them**  
Components: _[API] Metadata import-export_

**[DHIS2-19878](https://dhis2.atlassian.net/browse/DHIS2-19878): [api: system/flags]: Denmark is returned twice**  
Components: _[API] Other_

**[DHIS2-19915](https://dhis2.atlassian.net/browse/DHIS2-19915): Run operation of the Route API is filtering out the request's Content-Type**  
Components: _[API] Other_

**[DHIS2-19700](https://dhis2.atlassian.net/browse/DHIS2-19700): Route connection pool returns 503**  
Components: _[API] Other_

**[DHIS2-19779](https://dhis2.atlassian.net/browse/DHIS2-19779): Guest user role update via UI (user app) is broken**  
Components: _[API] Security_

**[DHIS2-19725](https://dhis2.atlassian.net/browse/DHIS2-19725): Visualization with calculations won't sync - TransientObjectException - ExpressionDimensionItem**  
Components: _[API] Synchronization_

**[DHIS2-19583](https://dhis2.atlassian.net/browse/DHIS2-19583): MetadataSync does not chain anymore, only syncs 1 version.**  
Components: _[API] Synchronization_

**[DHIS2-19694](https://dhis2.atlassian.net/browse/DHIS2-19694): Unique attribute uses LIKE when filtering in working list in Capture**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-19693](https://dhis2.atlassian.net/browse/DHIS2-19693): Unable to Delete Users Without User Role Modification Permission**  
Components: _[API] User_

**[DHIS2-19647](https://dhis2.atlassian.net/browse/DHIS2-19647): Clicking "View event" breadcrumb in Edit event always shows "Discard changes" warning**  
Components: _[App] Capture_

**[DHIS2-11104](https://dhis2.atlassian.net/browse/DHIS2-11104): Translations missing for some fields in capture app**  
Components: _[App] Capture_

**[DHIS2-11847](https://dhis2.atlassian.net/browse/DHIS2-11847): Critical alert bar should be displayed on failure**  
Components: _[App] Capture_

**[DHIS2-18951](https://dhis2.atlassian.net/browse/DHIS2-18951): "Error encountered during field validation" when registering TE with unique, searchable PTEA**  
Components: _[App] Capture_

**[DHIS2-19973](https://dhis2.atlassian.net/browse/DHIS2-19973): App menu: links opening in new tabs for some apps**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-19466](https://dhis2.atlassian.net/browse/DHIS2-19466): Visualization name does not update immediately after a rename in Data Visualizer**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-19506](https://dhis2.atlassian.net/browse/DHIS2-19506): Renaming overwrites newer copy of visualization**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-12149](https://dhis2.atlassian.net/browse/DHIS2-12149): Approval levels are not shown in order**  
Components: _[App] Maintenance_

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

**[DHIS2-19479](https://dhis2.atlassian.net/browse/DHIS2-19479): When renaming while in a different database language, the original name is lost because the translated name is used.**  
Components: _[App] Maps_

**[DHIS2-5920](https://dhis2.atlassian.net/browse/DHIS2-5920): Text overflow in event popups when having long data element names**  
Components: _[App] Maps_

**[DHIS2-19685](https://dhis2.atlassian.net/browse/DHIS2-19685): Program rule notification/message doesn't recognise data element**  
Components: _[App] Tracker capture_


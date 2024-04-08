# Patch 2.39.5 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-15689](https://dhis2.atlassian.net/browse/DHIS2-15689): skipRounding not saved in EVENT_VISUALIZATION AO**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14956](https://dhis2.atlassian.net/browse/DHIS2-14956): Add "Sorting" object to "EventVisualization"**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-16750](https://dhis2.atlassian.net/browse/DHIS2-16750): Min max value validation performance enhancement**  
Components: _[API] Validation_

**[DHIS2-16305](https://dhis2.atlassian.net/browse/DHIS2-16305): Support Plugins in the Enrollment Pages**  
Components: _[App] Capture_

**[DHIS2-16372](https://dhis2.atlassian.net/browse/DHIS2-16372): Relationship widget: Deleting relationship**  
Components: _[App] Capture_

**[DHIS2-15170](https://dhis2.atlassian.net/browse/DHIS2-15170): Adjust context selector "New" button**  
Components: _[App] Capture_

**[DHIS2-15480](https://dhis2.atlassian.net/browse/DHIS2-15480): Assigned user Widget for view- and edit event (Tracker programs)**  
Components: _[App] Capture_

**[DHIS2-16262](https://dhis2.atlassian.net/browse/DHIS2-16262): Support custom Enrollment Overview and Event Workspace configuration**  
Components: _[App] Capture_

**[DHIS2-16527](https://dhis2.atlassian.net/browse/DHIS2-16527): Assign user when first stage appears on registration page**  
Components: _[App] Capture_

**[DHIS2-12544](https://dhis2.atlassian.net/browse/DHIS2-12544): Verbose parameter for logging program rule evaluation in Capture**  
Components: _[App] Capture_

**[DHIS2-11419](https://dhis2.atlassian.net/browse/DHIS2-11419): Show assignee in stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-15783](https://dhis2.atlassian.net/browse/DHIS2-15783): Working list title - show full working list name on hover and focus**  
Components: _[App] Capture_

**[DHIS2-6626](https://dhis2.atlassian.net/browse/DHIS2-6626): Items in sidebar not clickable full width**  
Components: _[App] Data visualizer_

**[DHIS2-13995](https://dhis2.atlassian.net/browse/DHIS2-13995): Renaming 'Hide program stage' action in program rules to 'Prevent adding new events to stage'**  
Components: _[App] Maintenance_

## Bugs

**[DHIS2-16315](https://dhis2.atlassian.net/browse/DHIS2-16315): Analytics API returns wrong valueType for tracker data elements**  
Components: _[API] Analytics_

**[DHIS2-15278](https://dhis2.atlassian.net/browse/DHIS2-15278): Program Indicators returned with too many decimal places**  
Components: _[API] Analytics_

**[DHIS2-15597](https://dhis2.atlassian.net/browse/DHIS2-15597): Error 500 on Visualizer**  
Components: _[API] Analytics_

**[DHIS2-16290](https://dhis2.atlassian.net/browse/DHIS2-16290): Data value sets should not be able to be completed in the future**  
Components: _[API] Data Import_

**[DHIS2-16728](https://dhis2.atlassian.net/browse/DHIS2-16728): Data integrity detailed-check for "data_elements_aggregate_abandoned" throws error**  
Components: _[API] Data Integrity_

**[DHIS2-16422](https://dhis2.atlassian.net/browse/DHIS2-16422): Consistent format for data store entries response with paging enabled or disabled**  
Components: _[API] Data store_

**[DHIS2-12540](https://dhis2.atlassian.net/browse/DHIS2-12540): dataValueSets request returns empty body for new data set**  
Components: _[API] Data value set_

**[DHIS2-15254](https://dhis2.atlassian.net/browse/DHIS2-15254): dataValueSets reports - ignored data value should show as ignored, not updated**  
Components: _[API] Data value set_

**[DHIS2-16700](https://dhis2.atlassian.net/browse/DHIS2-16700): Creating new metadata objects should always default to the actual current user**  
Components: _[API] Metadata import-export_

**[DHIS2-16512](https://dhis2.atlassian.net/browse/DHIS2-16512): Exporting User accounts drops user roles and username when "Skip sharing" is selected**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-13663](https://dhis2.atlassian.net/browse/DHIS2-13663): Import does not cover Option Set Groups and Program Sections**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-16006](https://dhis2.atlassian.net/browse/DHIS2-16006): Import/Export app not downloading "programSection"**  
Components: _[API] Metadata import-export_

**[DHIS2-15543](https://dhis2.atlassian.net/browse/DHIS2-15543): updateNoAcl does not update the lastUpdatedBy property of objects**  
Components: _[API] Other_

**[DHIS2-13358](https://dhis2.atlassian.net/browse/DHIS2-13358): Indonesian language not supported in Apps UI**  
Components: _[API] Other_, _Frontend_

**[DHIS2-16706](https://dhis2.atlassian.net/browse/DHIS2-16706): Relationships are not filtered by deleted in tracker/relationships endpoint**  
Components: _[API] Tracker_

**[DHIS2-16320](https://dhis2.atlassian.net/browse/DHIS2-16320): Ensure lastUpdated field reflects deletion for event and enrollment**  
Components: _[API] Tracker_

**[DHIS2-16715](https://dhis2.atlassian.net/browse/DHIS2-16715): Page no. is not incrementing in reply from /api/tracker/trackedEntities**  
Components: _[API] Tracker_

**[DHIS2-16731](https://dhis2.atlassian.net/browse/DHIS2-16731): Getting internal server when trying to fetch a deleted enrollment**  
Components: _[API] Tracker_

**[DHIS2-16398](https://dhis2.atlassian.net/browse/DHIS2-16398): Reduce runtime for expensive subquery in /api/events endpoint**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-16107](https://dhis2.atlassian.net/browse/DHIS2-16107): Event export ignores attribute option combo**  
Components: _[API] Tracker_

**[DHIS2-10613](https://dhis2.atlassian.net/browse/DHIS2-10613): TrackedEntityInstance query by enrollmentDate returns TEIs from date after**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-12352](https://dhis2.atlassian.net/browse/DHIS2-12352): Event import using CSV cannot have empty "Due Date"Column**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-13961](https://dhis2.atlassian.net/browse/DHIS2-13961): Add missing translation of F_AGGREGATE_DATA_EXCHANGE authority**  
Components: _[API] User_

**[DHIS2-14990](https://dhis2.atlassian.net/browse/DHIS2-14990): PAT (api_token) record not removed when user is deleted**  
Components: _[API] User_

**[DHIS2-13445](https://dhis2.atlassian.net/browse/DHIS2-13445): Check for case-insensitive username duplicates**  
Components: _[API] User_

**[DHIS2-13883](https://dhis2.atlassian.net/browse/DHIS2-13883): No meaningful error message shown when app install fails**  
Components: _[App] App management_

**[DHIS2-13915](https://dhis2.atlassian.net/browse/DHIS2-13915): App install/update from app hub should show a loading spinner**  
Components: _[App] App management_

**[DHIS2-13252](https://dhis2.atlassian.net/browse/DHIS2-13252): Install button is enabled when there are no compatible app versions**  
Components: _[App] App management_

**[DHIS2-16499](https://dhis2.atlassian.net/browse/DHIS2-16499): Handle importable exporter payload**  
Components: _[App] Capture_

**[DHIS2-15621](https://dhis2.atlassian.net/browse/DHIS2-15621): Row view is split into sections instead of all data elements on one row**  
Components: _[App] Capture_

**[DHIS2-16318](https://dhis2.atlassian.net/browse/DHIS2-16318): Fix/clean up enrollment dashboard loading**  
Components: _[App] Capture_

**[DHIS2-16205](https://dhis2.atlassian.net/browse/DHIS2-16205): Locked selector should be floating**  
Components: _[App] Capture_

**[DHIS2-12007](https://dhis2.atlassian.net/browse/DHIS2-12007): Text string improvements**  
Components: _[App] Capture_

**[DHIS2-16352](https://dhis2.atlassian.net/browse/DHIS2-16352): Add spacing between cards in capture event overview screen**  
Components: _[App] Capture_

**[DHIS2-16084](https://dhis2.atlassian.net/browse/DHIS2-16084): Filter unidirectional relationships where source is on the "to" side**  
Components: _[App] Capture_

**[DHIS2-14901](https://dhis2.atlassian.net/browse/DHIS2-14901): Arabic characters replaced with question marks (?) on data validation notifications.**  
Components: _[App] Data administration_

**[DHIS2-13527](https://dhis2.atlassian.net/browse/DHIS2-13527): Validation fails in legacy data entry app**  
**[DHIS2-14075](https://dhis2.atlassian.net/browse/DHIS2-14075): Data entry: align integer restrictions with what is use on backend**  
Components: _[App] Data entry_

**[DHIS2-10825](https://dhis2.atlassian.net/browse/DHIS2-10825): Trim trailing zeroes in appropriate columns**  
Components: _[App] Data quality_

**[DHIS2-11233](https://dhis2.atlassian.net/browse/DHIS2-11233): Event Reports cannot filter by OVERDUE, SKIPPED, or SCHEDULED event status**  
Components: _[App] Event reports_

**[DHIS2-16501](https://dhis2.atlassian.net/browse/DHIS2-16501): Exporting and importing EventVisualization meta-data do not work**  
Components: _[App] Import-export_, _[Core] Data Export_

**[DHIS2-7881](https://dhis2.atlassian.net/browse/DHIS2-7881): Data import with empty file doesn't display import summaries**  
Components: _[App] Import-export_

**[DHIS2-16264](https://dhis2.atlassian.net/browse/DHIS2-16264): Import Export App - Data Export - crash when toggling advanced options**  
Components: _[App] Import-export_

**[DHIS2-12017](https://dhis2.atlassian.net/browse/DHIS2-12017): Disabled job gets enabled on editing the job**  
Components: _[App] Job scheduler_

**[DHIS2-16252](https://dhis2.atlassian.net/browse/DHIS2-16252): Translation/labels missing for Aggregation types**  
Components: _[App] Maintenance_

**[DHIS2-16331](https://dhis2.atlassian.net/browse/DHIS2-16331): "The value is to short/small": typo in validation message and error displayed too high up on Indicator Group Description**  
Components: _[App] Maintenance_

**[DHIS2-16237](https://dhis2.atlassian.net/browse/DHIS2-16237): Old maintenance app does not work when instance url contains api**  
Components: _[App] Maintenance_

**[DHIS2-9503](https://dhis2.atlassian.net/browse/DHIS2-9503): Indicator group description field is missing**  
Components: _[App] Maintenance_

**[DHIS2-14042](https://dhis2.atlassian.net/browse/DHIS2-14042): Indicator Mx - ** display_numerator_description ****  
Components: _[App] Maintenance_

**[DHIS2-12556](https://dhis2.atlassian.net/browse/DHIS2-12556): Unable to clone tracked entity type with attributes.**  
Components: _[App] Maintenance_

**[DHIS2-16148](https://dhis2.atlassian.net/browse/DHIS2-16148): Static text field too narrow**  
Components: _[App] Maintenance_

**[DHIS2-15940](https://dhis2.atlassian.net/browse/DHIS2-15940): SQL view cache strategy lacks translations**  
Components: _[App] Maintenance_

**[DHIS2-16250](https://dhis2.atlassian.net/browse/DHIS2-16250): Maps are incorrectly classified as "VISUALIZATION_VIEW"**  
Components: _[App] Maps_

**[DHIS2-16496](https://dhis2.atlassian.net/browse/DHIS2-16496): Standard Report doesn't show Arabic text**  
Components: _[App] Reports_

**[DHIS2-16378](https://dhis2.atlassian.net/browse/DHIS2-16378): Email receiver can't decode content part for some languages (Laos, Vietnamese) - UTF-8**  
**[DHIS2-10834](https://dhis2.atlassian.net/browse/DHIS2-10834): Appearance page: ℹ️ information icons should not be buttons**  
Components: _[App] Settings_

**[DHIS2-10931](https://dhis2.atlassian.net/browse/DHIS2-10931): Missing translations for known translated strings**  
Components: _[App] SMS configuration_

**[DHIS2-11316](https://dhis2.atlassian.net/browse/DHIS2-11316): Translation support and labels are missing for "Subject" and "Message" for all notification templates in translations app**  
Components: _[App] Translations_

**[DHIS2-12971](https://dhis2.atlassian.net/browse/DHIS2-12971): Error when selecting "Program Rule Action" in Translations app**  
Components: _[App] Translations_

**[DHIS2-12294](https://dhis2.atlassian.net/browse/DHIS2-12294): Can not remove user groups from manage user group section in DHIS2**  
Components: _[App] User_

**[DHIS2-13408](https://dhis2.atlassian.net/browse/DHIS2-13408): Pre-fill user-invite fields and align form fields with user-app form**  
Components: _[App] User_

**[DHIS2-14585](https://dhis2.atlassian.net/browse/DHIS2-14585): User form - orgunit filters only find embedded strings that start with character no 1**  
Components: _[App] User_

**[DHIS2-15431](https://dhis2.atlassian.net/browse/DHIS2-15431): user role, user group update does not redirect to user app main menu**  
Components: _[App] User_

**[DHIS2-16299](https://dhis2.atlassian.net/browse/DHIS2-16299): User app: user groups code is not editable**  
Components: _[App] User_

**[DHIS2-10828](https://dhis2.atlassian.net/browse/DHIS2-10828): No file size limit for user avatar**  
Components: _[App] User Profile_


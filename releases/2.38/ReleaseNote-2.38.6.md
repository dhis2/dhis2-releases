# Patch 2.38.6 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-16123](https://dhis2.atlassian.net/browse/DHIS2-16123): "Inherit" tracked entity attributes**  
Components: _[App] Capture_

**[DHIS2-13237](https://dhis2.atlassian.net/browse/DHIS2-13237): Capture and show enrollment coordinates in enrollment widget**  
Components: _[App] Capture_

**[DHIS2-11419](https://dhis2.atlassian.net/browse/DHIS2-11419): Show assignee in stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-12544](https://dhis2.atlassian.net/browse/DHIS2-12544): Verbose parameter for logging program rule evaluation in Capture**  
Components: _[App] Capture_

**[DHIS2-15783](https://dhis2.atlassian.net/browse/DHIS2-15783): Working list title - show full working list name on hover and focus**  
Components: _[App] Capture_

**[DHIS2-14012](https://dhis2.atlassian.net/browse/DHIS2-14012): Remove the working list "Download as XML" button**  
Components: _[App] Capture_

**[DHIS2-15483](https://dhis2.atlassian.net/browse/DHIS2-15483): Assign user to scheduled events**  
Components: _[App] Capture_

**[DHIS2-13995](https://dhis2.atlassian.net/browse/DHIS2-13995): Renaming 'Hide program stage' action in program rules to 'Prevent adding new events to stage'**  
Components: _[App] Maintenance_

## Bugs

**[DHIS2-15597](https://dhis2.atlassian.net/browse/DHIS2-15597): Error 500 on Visualizer**  
Components: _[API] Analytics_

**[DHIS2-16290](https://dhis2.atlassian.net/browse/DHIS2-16290): Data value sets should not be able to be completed in the future**  
Components: _[API] Data Import_

**[DHIS2-16422](https://dhis2.atlassian.net/browse/DHIS2-16422): Consistent format for data store entries response with paging enabled or disabled**  
Components: _[API] Data store_

**[DHIS2-12540](https://dhis2.atlassian.net/browse/DHIS2-12540): dataValueSets request returns empty body for new data set**  
Components: _[API] Data value set_

**[DHIS2-15254](https://dhis2.atlassian.net/browse/DHIS2-15254): dataValueSets reports - ignored data value should show as ignored, not updated**  
Components: _[API] Data value set_

**[DHIS2-13663](https://dhis2.atlassian.net/browse/DHIS2-13663): Import does not cover Option Set Groups and Program Sections**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-16006](https://dhis2.atlassian.net/browse/DHIS2-16006): Import/Export app not downloading "programSection"**  
Components: _[API] Metadata import-export_

**[DHIS2-15622](https://dhis2.atlassian.net/browse/DHIS2-15622): Option Groups not pulled in with metadata dependency program pulls**  

**[DHIS2-6183](https://dhis2.atlassian.net/browse/DHIS2-6183): Metadata dependency export for programs does not capture option groups**  
Components: _[API] Metadata import-export_, _[App] Import-export_, _[App] Maintenance_

**[DHIS2-12345](https://dhis2.atlassian.net/browse/DHIS2-12345): CSV import events - UI does not recognize when import is complete**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-16107](https://dhis2.atlassian.net/browse/DHIS2-16107): Event export ignores attribute option combo**  
Components: _[API] Tracker_

**[DHIS2-10613](https://dhis2.atlassian.net/browse/DHIS2-10613): TrackedEntityInstance query by enrollmentDate returns TEIs from date after**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-16117](https://dhis2.atlassian.net/browse/DHIS2-16117): tracker/events not returning event relationships**  
Components: _[API] Tracker_

**[DHIS2-15967](https://dhis2.atlassian.net/browse/DHIS2-15967): Selecting Tracked Entity Type Attribute as Mandatory creates an error in Capture app**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-11968](https://dhis2.atlassian.net/browse/DHIS2-11968): Users API allows you create users with special characters in uid**  
Components: _[API] User_

**[DHIS2-13883](https://dhis2.atlassian.net/browse/DHIS2-13883): No meaningful error message shown when app install fails**  
Components: _[App] App management_

**[DHIS2-13915](https://dhis2.atlassian.net/browse/DHIS2-13915): App install/update from app hub should show a loading spinner**  
Components: _[App] App management_

**[DHIS2-13252](https://dhis2.atlassian.net/browse/DHIS2-13252): Install button is enabled when there are no compatible app versions**  
Components: _[App] App management_

**[DHIS2-15983](https://dhis2.atlassian.net/browse/DHIS2-15983): Enrollment date is not automatically assigned to attribute/data element**  
Components: _[App] Capture_

**[DHIS2-16352](https://dhis2.atlassian.net/browse/DHIS2-16352): Add spacing between cards in capture event overview screen**  
Components: _[App] Capture_

**[DHIS2-15814](https://dhis2.atlassian.net/browse/DHIS2-15814): Display translated org.unit name for enrollments and events**  
Components: _[App] Capture_

**[DHIS2-16317](https://dhis2.atlassian.net/browse/DHIS2-16317): " Please provide a valid organisation unit" error message pops up when selecting organisation unit type data element on Capture app**  
Components: _[App] Capture_

**[DHIS2-16084](https://dhis2.atlassian.net/browse/DHIS2-16084): Filter unidirectional relationships where source is on the "to" side**  
Components: _[App] Capture_

**[DHIS2-15694](https://dhis2.atlassian.net/browse/DHIS2-15694): Cancel-button navigates to wrong page in Relationships**  
Components: _[App] Capture_

**[DHIS2-15686](https://dhis2.atlassian.net/browse/DHIS2-15686): Program rule that copy data element value into an attribute does not work when opening/editing TE profile**  
Components: _[App] Capture_

**[DHIS2-15693](https://dhis2.atlassian.net/browse/DHIS2-15693): Rules engine is not triggered after changing program in Relationships**  
Components: _[App] Capture_

**[DHIS2-15383](https://dhis2.atlassian.net/browse/DHIS2-15383): Align mandatory error behaviour for all value types**  
Components: _[App] Capture_

**[DHIS2-14901](https://dhis2.atlassian.net/browse/DHIS2-14901): Arabic characters replaced with question marks (?) on data validation notifications.**  
Components: _[App] Data administration_

**[DHIS2-14075](https://dhis2.atlassian.net/browse/DHIS2-14075): Data entry: align integer restrictions with what is use on backend**  
Components: _[App] Data entry_

**[DHIS2-10825](https://dhis2.atlassian.net/browse/DHIS2-10825): Trim trailing zeroes in appropriate columns**  
Components: _[App] Data quality_

**[DHIS2-12830](https://dhis2.atlassian.net/browse/DHIS2-12830): Legend sets fail to load in data visualizer table that has multiple indicators with data dimension in the row**  
Components: _[App] Data visualizer_

**[DHIS2-11233](https://dhis2.atlassian.net/browse/DHIS2-11233): Event Reports cannot filter by OVERDUE, SKIPPED, or SCHEDULED event status**  
Components: _[App] Event reports_

**[DHIS2-7881](https://dhis2.atlassian.net/browse/DHIS2-7881): Data import with empty file doesn't display import summaries**  
Components: _[App] Import-export_

**[DHIS2-16264](https://dhis2.atlassian.net/browse/DHIS2-16264): Import Export App - Data Export - crash when toggling advanced options**  
Components: _[App] Import-export_

**[DHIS2-12017](https://dhis2.atlassian.net/browse/DHIS2-12017): Disabled job gets enabled on editing the job**  
Components: _[App] Job scheduler_

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

**[DHIS2-16378](https://dhis2.atlassian.net/browse/DHIS2-16378): Email receiver can't decode content part for some languages (Laos, Vietnamese) - UTF-8**  

**[DHIS2-10834](https://dhis2.atlassian.net/browse/DHIS2-10834): Appearance page: ℹ️ information icons should not be buttons**  
Components: _[App] Settings_

**[DHIS2-12710](https://dhis2.atlassian.net/browse/DHIS2-12710): SMS command cannot retrieve previously assigned codes to data elements**  

**[DHIS2-10931](https://dhis2.atlassian.net/browse/DHIS2-10931): Missing translations for known translated strings**  
Components: _[App] SMS configuration_

**[DHIS2-16209](https://dhis2.atlassian.net/browse/DHIS2-16209): Mistranslated arabic month name**  
Components: _[App] Tracker capture_

**[DHIS2-11316](https://dhis2.atlassian.net/browse/DHIS2-11316): Translation support and labels are missing for "Subject" and "Message" for all notification templates in translations app**  
Components: _[App] Translations_

**[DHIS2-12971](https://dhis2.atlassian.net/browse/DHIS2-12971): Error when selecting "Program Rule Action" in Translations app**  
Components: _[App] Translations_

**[DHIS2-14585](https://dhis2.atlassian.net/browse/DHIS2-14585): User form - orgunit filters only find embedded strings that start with character no 1**  
Components: _[App] User_

**[DHIS2-15431](https://dhis2.atlassian.net/browse/DHIS2-15431): user role, user group update does not redirect to user app main menu**  
Components: _[App] User_

**[DHIS2-12294](https://dhis2.atlassian.net/browse/DHIS2-12294): Can not remove user groups from manage user group section in DHIS2**  
Components: _[App] User_

**[DHIS2-16299](https://dhis2.atlassian.net/browse/DHIS2-16299): User app: user groups code is not editable**  
Components: _[App] User_

**[DHIS2-10828](https://dhis2.atlassian.net/browse/DHIS2-10828): No file size limit for user avatar**  
Components: _[App] User Profile_


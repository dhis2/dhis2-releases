# Patch 2.33.2 Release Note

## Features

**[DHIS2-7932](https://jira.dhis2.org/browse/DHIS2-7932): Improve readability of long dimension names in sidebar**  
Components: _[App] Data visualizer_

**[DHIS2-4653](https://jira.dhis2.org/browse/DHIS2-4653): Remove messaging section in settings app**  
Components: _[App] Settings_

## Bugs

**[DHIS2-8267](https://jira.dhis2.org/browse/DHIS2-8267): Cannot Save a Favorite due to run away SQL Queries**  
Components: _[API] Analytics_, _[App] Pivot table_  
**Closed**

**[DHIS2-7896](https://jira.dhis2.org/browse/DHIS2-7896): Program Indicators containing DHIS 2 Constants do not work**  
Components: _[API] Analytics_  
**Testing**

**[DHIS2-8177](https://jira.dhis2.org/browse/DHIS2-8177): Indicators return 0 with no numerator data but with denominator data**  
Components: _[API] Analytics_

**[DHIS2-7712](https://jira.dhis2.org/browse/DHIS2-7712): Event reports doesn't use dimension restrictions assigned to a user account**  
Components: _[API] Analytics_, _[API] Events_  
**Needs Update**

**[DHIS2-7976](https://jira.dhis2.org/browse/DHIS2-7976): Analytics crashing in 2.33 due to the indexing of _geom columns**  
Components: _[API] Analytics_

**[DHIS2-1678](https://jira.dhis2.org/browse/DHIS2-1678): Data audit period filter does not work**  
Components: _[API] Data value set_

**[DHIS2-8242](https://jira.dhis2.org/browse/DHIS2-8242): Remove "href" from payload if event UID is not present**  
Components: _[API] Events_

**[DHIS2-7596](https://jira.dhis2.org/browse/DHIS2-7596): V{event_date} in Program Indicator formulas doesn't work**  
Components: _[API] Events_

**[DHIS2-6322](https://jira.dhis2.org/browse/DHIS2-6322): Error trying to edit compulsory data elements in data set**  
Components: _[API] Metadata import-export_  
**In Progress**

**[DHIS2-8035](https://jira.dhis2.org/browse/DHIS2-8035): Import fails when importing metadata file that contains option sets**  
Components: _[API] Metadata import-export_

**[DHIS2-6543](https://jira.dhis2.org/browse/DHIS2-6543): Error importing metadata including program stage section with sequential renderType**  
Components: _[API] Metadata import-export_

**[DHIS2-7936](https://jira.dhis2.org/browse/DHIS2-7936): Metadata sync and import is failing with TransientObjectException**  
Components: _[API] Metadata import-export_, _[API] Synchronization_

**[DHIS2-2109](https://jira.dhis2.org/browse/DHIS2-2109): Validation left/right side description exception**  
Components: _[API] Metadata import-export_

**[DHIS2-8224](https://jira.dhis2.org/browse/DHIS2-8224): SMS module: removal of dataSetCompleteRegistration is not working**  
Components: _[API] Other_

**[DHIS2-8183](https://jira.dhis2.org/browse/DHIS2-8183): Endpoint /api/systemSettings/<key> should accept content-type JSON**  
Components: _[API] Other_, _[App] Settings_

**[DHIS2-7602](https://jira.dhis2.org/browse/DHIS2-7602): DHIS2 logging session ids**  
Components: _[API] Other_

**[DHIS2-7994](https://jira.dhis2.org/browse/DHIS2-7994): Request to /event/eventRows fails on NullPointerException**  
Components: _[API] Events_, _[API] Other_

**[DHIS2-8068](https://jira.dhis2.org/browse/DHIS2-8068): Error trying to save predictor**  
Components: _[API] Predictors_, _[App] Maintenance_

**[DHIS2-8223](https://jira.dhis2.org/browse/DHIS2-8223): Predictor Run failing for all predictors - Recently introduced bug**  
Components: _[API] Predictors_

**[DHIS2-7824](https://jira.dhis2.org/browse/DHIS2-7824): Predictor - Predictor formulas with Program Indicators runs at snail pace**  
Components: _[API] Predictors_

**[DHIS2-7358](https://jira.dhis2.org/browse/DHIS2-7358): Disabled user can continue using the application in active session**  
Components: _[API] Security_  
**Reopened**

**[DHIS2-5527](https://jira.dhis2.org/browse/DHIS2-5527): Setting localized appearance settings throws a 409**  
Components: _[API] System configuration_  
**Needs Update**

**[DHIS2-7987](https://jira.dhis2.org/browse/DHIS2-7987): Program notification**  
Components: _[API] Tracker_

**[DHIS2-7417](https://jira.dhis2.org/browse/DHIS2-7417): Unable to create tracked entity instance after metadata migration**  
Components: _[API] Tracker_, _[App] Maintenance_

**[DHIS2-7442](https://jira.dhis2.org/browse/DHIS2-7442): Can't open TEI dashboard of TEI registered in old version**  
Components: _[API] Tracker_

**[DHIS2-7892](https://jira.dhis2.org/browse/DHIS2-7892): Issue in Enrollment Analytics Indicators with Event Boundaries**  
Components: _[API] Tracker_

**[DHIS2-8137](https://jira.dhis2.org/browse/DHIS2-8137): Relationships API end point/resource do not block duplicate relationships**  
Components: _[API] Tracker_

**[DHIS2-5777](https://jira.dhis2.org/browse/DHIS2-5777): User can edit and save ProgramStages that includes DataElement user does not have access to**  
Components: _[API] Tracker_

**[DHIS2-7606](https://jira.dhis2.org/browse/DHIS2-7606): Auto-generated ID creates conflict when saving TEI profile**  
Components: _[API] Tracker_

**[DHIS2-1439](https://jira.dhis2.org/browse/DHIS2-1439): Email invite problems when email address has a + in it**  
Components: _[API] User_

**[DHIS2-7679](https://jira.dhis2.org/browse/DHIS2-7679): OrgUnit shared component in analytics does not support multiple roots**  
Components: _[App] Analytics_  

**[DHIS2-8033](https://jira.dhis2.org/browse/DHIS2-8033): Indicator decimal output set to zero are not respected in the analytics**  
Components: _[App] Analytics_  

**[DHIS2-8032](https://jira.dhis2.org/browse/DHIS2-8032): Application Title is cleared when clearing cache**  
Components: _[App] Cache cleaner_

**[DHIS2-7894](https://jira.dhis2.org/browse/DHIS2-7894): Can not save form when a hide section rule is active**  
Components: _[App] Capture_

**[DHIS2-8222](https://jira.dhis2.org/browse/DHIS2-8222): Hovering over map legend on dashboard causes image to go blank**  
Components: _[App] Dashboard_

**[DHIS2-7787](https://jira.dhis2.org/browse/DHIS2-7787): Dimensions topple over one another in dashboard**  
Components: _[App] Dashboard_  

**[DHIS2-7804](https://jira.dhis2.org/browse/DHIS2-7804): Analytics table help icon link is broken due to missing docs**  
Components: _[App] Data administration_

**[DHIS2-8125](https://jira.dhis2.org/browse/DHIS2-8125): Malformed Image on download from data entry**  
Components: _[App] Data entry_  

**[DHIS2-8278](https://jira.dhis2.org/browse/DHIS2-8278): Incomplete dataset message is the same a complete**  
Components: _[App] Data entry_

**[DHIS2-2198](https://jira.dhis2.org/browse/DHIS2-2198): Allow entry against a site with an Opening date within the data entry period**  
Components: _[App] Data entry_

**[DHIS2-7912](https://jira.dhis2.org/browse/DHIS2-7912): Error running validation rule analysis for non superusers**  
Components: _[App] Data quality_

**[DHIS2-8302](https://jira.dhis2.org/browse/DHIS2-8302): Empty data items break pie charts**  
Components: _[App] Data visualizer_

**[DHIS2-7044](https://jira.dhis2.org/browse/DHIS2-7044): Data Visualizer Error if Option-Style-No Space Between Columns/Bars is selected**  
Components: _[App] Data visualizer_

**[DHIS2-7797](https://jira.dhis2.org/browse/DHIS2-7797): Data Element with Average aggregationType not working when placed as Report filter**  
Components: _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-7802](https://jira.dhis2.org/browse/DHIS2-7802): Vertical scaling breaks layout on >= 3 filter rows**  
Components: _[App] Data visualizer_

**[DHIS2-8205](https://jira.dhis2.org/browse/DHIS2-8205): Importing options and optionSets doesn't update, only fails validation**  
Components: _[App] Import-export_

**[DHIS2-8082](https://jira.dhis2.org/browse/DHIS2-8082): Data import app - dataElelementIdScheme option not working**  
Components: _[App] Import-export_

**[DHIS2-8311](https://jira.dhis2.org/browse/DHIS2-8311): Frontend error validating predictor expressions**  
Components: _[App] Maintenance_

**[DHIS2-8047](https://jira.dhis2.org/browse/DHIS2-8047): Deleted programstagesection & programstagesection_dataelement records remain in database table**  
Components: _[App] Maintenance_

**[DHIS2-7991](https://jira.dhis2.org/browse/DHIS2-7991): Localised versions showing invalid characters**  
Components: _[App] Maintenance_

**[DHIS2-8097](https://jira.dhis2.org/browse/DHIS2-8097): Unable to select data elements of type email when creating program stage notifications**  
Components: _[App] Maintenance_

**[DHIS2-7147](https://jira.dhis2.org/browse/DHIS2-7147): Add UI to select MissingValueStrategy for predictor generator expressions**  
Components: _[App] Maintenance_

**[DHIS2-8215](https://jira.dhis2.org/browse/DHIS2-8215): Maps plugin don't support user authentication**  
Components: _[App] Maps_

**[DHIS2-8066](https://jira.dhis2.org/browse/DHIS2-8066): Tracker performance issues**  
Components: _[App] Tracker capture_

**[DHIS2-8099](https://jira.dhis2.org/browse/DHIS2-8099): Add new button hiding the next page arrow in user app**  
Components: _[App] User_

**[DHIS2-7808](https://jira.dhis2.org/browse/DHIS2-7808): Editing the user fields also changes the assigned user roles in User App**  
Components: _[App] User_

**[DHIS2-7669](https://jira.dhis2.org/browse/DHIS2-7669): Incorporate new API end point for password update**  
Components: _[App] User Profile_

**[DHIS2-8160](https://jira.dhis2.org/browse/DHIS2-8160): Wrong URL is logged and/or called when executing DATA_SYNCHRONISATION job**  
Components: 


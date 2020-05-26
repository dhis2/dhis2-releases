# Patch 2.31.9 Release Note

## Features

**[DHIS2-8526](https://jira.dhis2.org/browse/DHIS2-8526): Editing localized appearance settings throws a 409 if default values are undefined**  
Components: _[App] Settings_

## Bugs

**[DHIS2-8387](https://jira.dhis2.org/browse/DHIS2-8387): Map fails when indicator has 0 decimals**  
Components: _[API] Analytics_

**[DHIS2-7862](https://jira.dhis2.org/browse/DHIS2-7862): Indicators with fixed values or constants do not render**  
Components: _[API] Analytics_, _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-7712](https://jira.dhis2.org/browse/DHIS2-7712): Event reports doesn't use dimension restrictions assigned to a user account**  
Components: _[API] Analytics_, _[API] Events_

**[DHIS2-8177](https://jira.dhis2.org/browse/DHIS2-8177): Indicators return 0 with no numerator data but with denominator data**  
Components: _[API] Analytics_

**[DHIS2-7895](https://jira.dhis2.org/browse/DHIS2-7895): Data Administration - Unable to remove TEIs due to linked records in table "trackedentityprogramowner"**  
Components: _[API] Data administration_

**[DHIS2-8461](https://jira.dhis2.org/browse/DHIS2-8461): Data sharing not enforced for data sets for data export**  
Components: _[API] Data value set_

**[DHIS2-1678](https://jira.dhis2.org/browse/DHIS2-1678): Data audit period filter does not work**  
Components: _[API] Data value set_

**[DHIS2-8388](https://jira.dhis2.org/browse/DHIS2-8388): Attributes deleted in upgrade from v_2.31.8 to v_2.32.4**  
Components: _[API] Database migration_

**[DHIS2-8242](https://jira.dhis2.org/browse/DHIS2-8242): Remove "href" from payload if event UID is not present**  
Components: _[API] Events_

**[DHIS2-8035](https://jira.dhis2.org/browse/DHIS2-8035): Import fails when importing metadata file that contains option sets**  
Components: _[API] Metadata import-export_

**[DHIS2-6322](https://jira.dhis2.org/browse/DHIS2-6322): Error trying to edit compulsory data elements in data set**  
Components: _[API] Metadata import-export_

**[DHIS2-8308](https://jira.dhis2.org/browse/DHIS2-8308): Metadata import fails: `offsetPeriods` allowed range [0 to 2 147 483 647], but number given was -18**  
Components: _[API] Metadata import-export_

**[DHIS2-6543](https://jira.dhis2.org/browse/DHIS2-6543): Error importing metadata including program stage section with sequential renderType**  
Components: _[API] Metadata import-export_

**[DHIS2-8513](https://jira.dhis2.org/browse/DHIS2-8513): Pagination firstResult calculated incorrectly**  
Components: _[API] Metadata model_

**[DHIS2-8508](https://jira.dhis2.org/browse/DHIS2-8508): AbstractController does not propagate pagination info to the back-end**  
Components: _[API] Metadata model_

**[DHIS2-2696](https://jira.dhis2.org/browse/DHIS2-2696): CategoryCombo W/O Options Causes DataElement Operands 500**  
Components: _[API] Other_

**[DHIS2-4044](https://jira.dhis2.org/browse/DHIS2-4044): Data Element translation in indicator and validation rule**  
Components: _[API] Other_, _[API] Validation_, _[App] Data visualizer_, _[App] Maps_, _[App] Pivot table_

**[DHIS2-8578](https://jira.dhis2.org/browse/DHIS2-8578): Plugin resources aren't publicly accessible**  
Components: _[API] Other_

**[DHIS2-8183](https://jira.dhis2.org/browse/DHIS2-8183): Endpoint /api/systemSettings/<key> should accept content-type JSON**  
Components: _[API] Other_, _[App] Settings_

**[DHIS2-7602](https://jira.dhis2.org/browse/DHIS2-7602): DHIS2 logging session ids**  
Components: _[API] Other_

**[DHIS2-7320](https://jira.dhis2.org/browse/DHIS2-7320): Cannot create predictor for autofill Data Element with categoryCombos**  
Components: _[API] Predictors_

**[DHIS2-8223](https://jira.dhis2.org/browse/DHIS2-8223): Predictor Run failing for all predictors - Recently introduced bug**  
Components: _[API] Predictors_

**[DHIS2-7358](https://jira.dhis2.org/browse/DHIS2-7358): Disabled user can continue using the application in active session**  
Components: _[API] Security_

**[DHIS2-8322](https://jira.dhis2.org/browse/DHIS2-8322): The legacy Event synchronization does not support new features**  
Components: _[API] Synchronization_

**[DHIS2-7884](https://jira.dhis2.org/browse/DHIS2-7884): Data sync is not updating the deleted value for deleted events**  
Components: _[API] Synchronization_

**[DHIS2-5527](https://jira.dhis2.org/browse/DHIS2-5527): Setting localized appearance settings throws a 409**  
Components: _[API] System configuration_

**[DHIS2-8181](https://jira.dhis2.org/browse/DHIS2-8181): Categories missing category options after using analytic tools**  
Components: _[API] Tracker_, _[App] Event reports_, _[App] Maintenance_, _[App] Pivot table_  
**Testing**

**[DHIS2-8317](https://jira.dhis2.org/browse/DHIS2-8317): Enrollment blocked for non-super users**  
Components: _[API] Tracker_

**[DHIS2-8482](https://jira.dhis2.org/browse/DHIS2-8482): Issue with reserved values on 2.30->2.31 upgrade**  
Components: _[API] Tracker_

**[DHIS2-5731](https://jira.dhis2.org/browse/DHIS2-5731): trackedEntityInstances query only returns "Display in List" attributes**  
Components: _[API] Tracker_

**[DHIS2-7987](https://jira.dhis2.org/browse/DHIS2-7987): Program notification**  
Components: _[API] Tracker_

**[DHIS2-7417](https://jira.dhis2.org/browse/DHIS2-7417): Unable to create tracked entity instance after metadata migration**  
Components: _[API] Tracker_, _[App] Maintenance_

**[DHIS2-8137](https://jira.dhis2.org/browse/DHIS2-8137): Relationships API end point/resource do not block duplicate relationships**  
Components: _[API] Tracker_

**[DHIS2-8439](https://jira.dhis2.org/browse/DHIS2-8439): Cannot remove What'sapp and Skype addresses from users**  
Components: _[API] User_, _[App] User_, _[App] User Profile_

**[DHIS2-1439](https://jira.dhis2.org/browse/DHIS2-1439): Email invite problems when email address has a + in it**  
Components: _[API] User_

**[DHIS2-8386](https://jira.dhis2.org/browse/DHIS2-8386): Validation Rule fails when indicator has 0 decimals**  
Components: _[API] Validation_

**[DHIS2-7804](https://jira.dhis2.org/browse/DHIS2-7804): Analytics table help icon link is broken due to missing docs**  
Components: _[App] Data administration_

**[DHIS2-8125](https://jira.dhis2.org/browse/DHIS2-8125): Malformed Image on download from data entry**  
Components: _[App] Data entry_

**[DHIS2-5382](https://jira.dhis2.org/browse/DHIS2-5382): [Data entry app] Staring comments for YesOnly data elements deletes comments**  
Components: _[App] Data entry_

**[DHIS2-2198](https://jira.dhis2.org/browse/DHIS2-2198): Allow entry against a site with an Opening date within the data entry period**  
Components: _[App] Data entry_

**[DHIS2-7912](https://jira.dhis2.org/browse/DHIS2-7912): Error running validation rule analysis for non superusers**  
Components: _[App] Data quality_

**[DHIS2-7797](https://jira.dhis2.org/browse/DHIS2-7797): Data Element with Average aggregationType not working when placed as Report filter**  
Components: _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-2731](https://jira.dhis2.org/browse/DHIS2-2731): Import Option/OptionSet doesn't work properly**  
Components: _[App] Import-export_

**[DHIS2-8205](https://jira.dhis2.org/browse/DHIS2-8205): Importing options and optionSets doesn't update, only fails validation**  
Components: _[App] Import-export_

**[DHIS2-6991](https://jira.dhis2.org/browse/DHIS2-6991): Import/Export app orgunit attributes hardcoded to "HR identifier"?**  
Components: _[App] Import-export_

**[DHIS2-4998](https://jira.dhis2.org/browse/DHIS2-4998): Update stage sections when a data element is removed**  
Components: _[App] Maintenance_

**[DHIS2-8435](https://jira.dhis2.org/browse/DHIS2-8435): Remove "Date to send message" field for send message program rule action**  
Components: _[App] Maintenance_

**[DHIS2-8311](https://jira.dhis2.org/browse/DHIS2-8311): Frontend error validating predictor expressions**  
Components: _[App] Maintenance_

**[DHIS2-8136](https://jira.dhis2.org/browse/DHIS2-8136): Missing autoScrollBodyContent prop on dialogs prevents scrolling vertically**  
Components: _[App] Maintenance_

**[DHIS2-7707](https://jira.dhis2.org/browse/DHIS2-7707): Error in posting job configuration for PushAnalysis**  
Components: _[App] Maintenance_

**[DHIS2-8047](https://jira.dhis2.org/browse/DHIS2-8047): Deleted programstagesection & programstagesection_dataelement records remain in database table**  
Components: _[App] Maintenance_

**[DHIS2-8097](https://jira.dhis2.org/browse/DHIS2-8097): Unable to select data elements of type email when creating program stage notifications**  
Components: _[App] Maintenance_

**[DHIS2-8529](https://jira.dhis2.org/browse/DHIS2-8529): Editing Event layer from "Group events" to "Show all events" result in empty layer**  
Components: _[App] Maps_

**[DHIS2-8215](https://jira.dhis2.org/browse/DHIS2-8215): Maps plugin don't support user authentication**  
Components: _[App] Maps_

**[DHIS2-8718](https://jira.dhis2.org/browse/DHIS2-8718): Editing an event will DELETE event coordinates**  
Components: _[App] Tracker capture_

**[DHIS2-8661](https://jira.dhis2.org/browse/DHIS2-8661): Tracked entity instance filter of "followup" ignored**  
Components: _[App] Tracker capture_

**[DHIS2-7984](https://jira.dhis2.org/browse/DHIS2-7984): "hasUserRole" function is not working in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-8066](https://jira.dhis2.org/browse/DHIS2-8066): Tracker performance issues**  
Components: _[App] Tracker capture_

**[DHIS2-7865](https://jira.dhis2.org/browse/DHIS2-7865): Tracker Capture Widgets and Locking Feature cause timeline data entry failure**  
Components: _[App] Tracker capture_

**[DHIS2-8546](https://jira.dhis2.org/browse/DHIS2-8546): User is created despite error when Interface Language or Database Language are not selected**  
Components: _[App] User_

**[DHIS2-8099](https://jira.dhis2.org/browse/DHIS2-8099): Add new button hiding the next page arrow in user app**  
Components: _[App] User_

**[DHIS2-7619](https://jira.dhis2.org/browse/DHIS2-7619): About Page Refuses to load**  
Components: _[App] User Profile_

**[DHIS2-6128](https://jira.dhis2.org/browse/DHIS2-6128): Change the frontend API call on setting Locale dependent Appearance settings**  
Components: _[App] User Profile_

**[DHIS2-7669](https://jira.dhis2.org/browse/DHIS2-7669): Incorporate new API end point for password update**  
Components: _[App] User Profile_


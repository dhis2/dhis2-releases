# Patch 2.32.5 Release Note

## Features

**[DHIS2-8526](https://jira.dhis2.org/browse/DHIS2-8526): Editing localized appearance settings throws a 409 if default values are undefined**  
Components: _[App] Settings_

## Bugs

**[DHIS2-8665](https://jira.dhis2.org/browse/DHIS2-8665): Function d2:hasValue does not support program variables**  
Components: _[API] Analytics_, _[API] Tracker_

**[DHIS2-8387](https://jira.dhis2.org/browse/DHIS2-8387): Map fails when indicator has 0 decimals**  
Components: _[API] Analytics_  
**Testing**

**[DHIS2-8542](https://jira.dhis2.org/browse/DHIS2-8542): Sorting on program indicators in events query doesn't work**  
Components: _[API] Analytics_

**[DHIS2-7862](https://jira.dhis2.org/browse/DHIS2-7862): Indicators with fixed values or constants do not render**  
Components: _[API] Analytics_, _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-8571](https://jira.dhis2.org/browse/DHIS2-8571): 500 error on /analytics/events/query**  
Components: _[API] Analytics_

**[DHIS2-7552](https://jira.dhis2.org/browse/DHIS2-7552): Error when triggering analytics with orgUnitField defined**  
Components: _[API] Analytics_

**[DHIS2-7712](https://jira.dhis2.org/browse/DHIS2-7712): Event reports doesn't use dimension restrictions assigned to a user account**  
Components: _[API] Analytics_, _[API] Events_

**[DHIS2-7895](https://jira.dhis2.org/browse/DHIS2-7895): Data Administration - Unable to remove TEIs due to linked records in table "trackedentityprogramowner"**  
Components: _[API] Data administration_

**[DHIS2-8627](https://jira.dhis2.org/browse/DHIS2-8627): Integer out of range when creating resource table for larger database**  
Components: _[API] Data administration_

**[DHIS2-8461](https://jira.dhis2.org/browse/DHIS2-8461): Data sharing not enforced for data sets for data export**  
Components: _[API] Data value set_

**[DHIS2-1678](https://jira.dhis2.org/browse/DHIS2-1678): Data audit period filter does not work**  
Components: _[API] Data value set_

**[DHIS2-8388](https://jira.dhis2.org/browse/DHIS2-8388): Attributes deleted in upgrade from v_2.31.8 to v_2.32.4**  
Components: _[API] Database migration_

**[DHIS2-8612](https://jira.dhis2.org/browse/DHIS2-8612): Capture app with the Arabic Interface Language does not save events / event list filtering fails**  
Components: _[API] Events_, _[App] Capture_

**[DHIS2-8242](https://jira.dhis2.org/browse/DHIS2-8242): Remove "href" from payload if event UID is not present**  
Components: _[API] Events_

**[DHIS2-8035](https://jira.dhis2.org/browse/DHIS2-8035): Import fails when importing metadata file that contains option sets**  
Components: _[API] Metadata import-export_

**[DHIS2-6322](https://jira.dhis2.org/browse/DHIS2-6322): Error trying to edit compulsory data elements in data set**  
Components: _[API] Metadata import-export_

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

**[DHIS2-8566](https://jira.dhis2.org/browse/DHIS2-8566): Can't start DHIS2 with mvn jetty:run-war**  
Components: _[API] Other_

**[DHIS2-4044](https://jira.dhis2.org/browse/DHIS2-4044): Data Element translation in indicator and validation rule**  
Components: _[API] Other_, _[API] Validation_, _[App] Data visualizer_, _[App] Maps_, _[App] Pivot table_

**[DHIS2-8183](https://jira.dhis2.org/browse/DHIS2-8183): Endpoint /api/systemSettings/<key> should accept content-type JSON**  
Components: _[API] Other_, _[App] Settings_

**[DHIS2-7602](https://jira.dhis2.org/browse/DHIS2-7602): DHIS2 logging session ids**  
Components: _[API] Other_

**[DHIS2-7320](https://jira.dhis2.org/browse/DHIS2-7320): Cannot create predictor for autofill Data Element with categoryCombos**  
Components: _[API] Predictors_

**[DHIS2-8223](https://jira.dhis2.org/browse/DHIS2-8223): Predictor Run failing for all predictors - Recently introduced bug**  
Components: _[API] Predictors_

**[DHIS2-8583](https://jira.dhis2.org/browse/DHIS2-8583):**  
Components: _[API] Security_

**[DHIS2-7358](https://jira.dhis2.org/browse/DHIS2-7358):**  
Components: _[API] Security_

**[DHIS2-8322](https://jira.dhis2.org/browse/DHIS2-8322): The legacy Event synchronization does not support new features**  
Components: _[API] Synchronization_

**[DHIS2-7740](https://jira.dhis2.org/browse/DHIS2-7740): Relationships endpoint returns status code 200 even if there is an error**  
Components: _[API] Tracker_

**[DHIS2-8317](https://jira.dhis2.org/browse/DHIS2-8317): Enrollment blocked for non-super users**  
Components: _[API] Tracker_  
**Testing**

**[DHIS2-6401](https://jira.dhis2.org/browse/DHIS2-6401): 500 error when trying to delete Program with associated RelationshipType**  
Components: _[API] Tracker_

**[DHIS2-5731](https://jira.dhis2.org/browse/DHIS2-5731): trackedEntityInstances query only returns "Display in List" attributes**  
Components: _[API] Tracker_

**[DHIS2-7987](https://jira.dhis2.org/browse/DHIS2-7987): Program notification**  
Components: _[API] Tracker_

**[DHIS2-7417](https://jira.dhis2.org/browse/DHIS2-7417): Unable to create tracked entity instance after metadata migration**  
Components: _[API] Tracker_, _[App] Maintenance_

**[DHIS2-8439](https://jira.dhis2.org/browse/DHIS2-8439): Cannot remove What'sapp and Skype addresses from users**  
Components: _[API] User_, _[App] User_, _[App] User Profile_

**[DHIS2-8386](https://jira.dhis2.org/browse/DHIS2-8386): Validation Rule fails when indicator has 0 decimals**  
Components: _[API] Validation_

**[DHIS2-7300](https://jira.dhis2.org/browse/DHIS2-7300): Capture app - ridiculous number of point coordinate decimals**  
Components: _[App] Capture_  
**Testing**

**[DHIS2-8519](https://jira.dhis2.org/browse/DHIS2-8519): Covid-19 data package: Can't submit form in row view**  
Components: _[App] Capture_

**[DHIS2-7348](https://jira.dhis2.org/browse/DHIS2-7348): Order of lat/long coordinate is different in create/edit event and in view event**  
Components: _[App] Capture_

**[DHIS2-7787](https://jira.dhis2.org/browse/DHIS2-7787): Dimensions topple over one another in dashboard**  
Components: _[App] Dashboard_

**[DHIS2-8125](https://jira.dhis2.org/browse/DHIS2-8125): Malformed Image on download from data entry**  
Components: _[App] Data entry_

**[DHIS2-5382](https://jira.dhis2.org/browse/DHIS2-5382): [Data entry app] Staring comments for YesOnly data elements deletes comments**  
Components: _[App] Data entry_

**[DHIS2-8278](https://jira.dhis2.org/browse/DHIS2-8278): Incomplete dataset message is the same a complete**  
Components: _[App] Data entry_

**[DHIS2-2198](https://jira.dhis2.org/browse/DHIS2-2198): Allow entry against a site with an Opening date within the data entry period**  
Components: _[App] Data entry_

**[DHIS2-7912](https://jira.dhis2.org/browse/DHIS2-7912): Error running validation rule analysis for non superusers**  
Components: _[App] Data quality_

**[DHIS2-8124](https://jira.dhis2.org/browse/DHIS2-8124): In program indicators d2 functions return an error when using variables**  
Components: _[App] Data visualizer_, _[App] Event reports_, _[App] Pivot table_

**[DHIS2-8264](https://jira.dhis2.org/browse/DHIS2-8264): Visualizer shows wrong period if requests contains periods without data**  
Components: _[App] Data visualizer_

**[DHIS2-8302](https://jira.dhis2.org/browse/DHIS2-8302): Empty data items break pie charts**  
Components: _[App] Data visualizer_

**[DHIS2-8407](https://jira.dhis2.org/browse/DHIS2-8407): Event Report - LineListing-Enrollment display optionvalueCODES and all text values in lowercase**  
Components: _[App] Event reports_

**[DHIS2-2731](https://jira.dhis2.org/browse/DHIS2-2731): Import Option/OptionSet doesn't work properly**  
Components: _[App] Import-export_

**[DHIS2-8311](https://jira.dhis2.org/browse/DHIS2-8311): Frontend error validating predictor expressions**  
Components: _[App] Maintenance_

**[DHIS2-4998](https://jira.dhis2.org/browse/DHIS2-4998): Update stage sections when a data element is removed**  
Components: _[App] Maintenance_

**[DHIS2-8435](https://jira.dhis2.org/browse/DHIS2-8435): Remove "Date to send message" field for send message program rule action**  
Components: _[App] Maintenance_

**[DHIS2-8136](https://jira.dhis2.org/browse/DHIS2-8136): Missing autoScrollBodyContent prop on dialogs prevents scrolling vertically**  
Components: _[App] Maintenance_

**[DHIS2-7707](https://jira.dhis2.org/browse/DHIS2-7707): Error in posting job configuration for PushAnalysis**  
Components: _[App] Maintenance_

**[DHIS2-8047](https://jira.dhis2.org/browse/DHIS2-8047): Deleted programstagesection & programstagesection_dataelement records remain in database table**  
Components: _[App] Maintenance_

**[DHIS2-8585](https://jira.dhis2.org/browse/DHIS2-8585): Error message in the console when trying to open a map as a chart**  
Components: _[App] Maps_

**[DHIS2-8575](https://jira.dhis2.org/browse/DHIS2-8575): Filters are not kept when switching from DV to Maps**  
Components: _[App] Maps_

**[DHIS2-8479](https://jira.dhis2.org/browse/DHIS2-8479): Handle error if org unit selection is invalid for thematic layers**  
Components: _[App] Maps_

**[DHIS2-8474](https://jira.dhis2.org/browse/DHIS2-8474): Handle error if org unit selection is invalid for facility layers**  
Components: _[App] Maps_

**[DHIS2-7924](https://jira.dhis2.org/browse/DHIS2-7924): Editing map layer with OU grandchildren selected breaks map**  
Components: _[App] Maps_

**[DHIS2-7089](https://jira.dhis2.org/browse/DHIS2-7089): Maps - Filtering on data element option with operator "Not one of" generates error**  
Components: _[App] Maps_

**[DHIS2-8529](https://jira.dhis2.org/browse/DHIS2-8529): Editing Event layer from "Group events" to "Show all events" result in empty layer**  
Components: _[App] Maps_

**[DHIS2-8215](https://jira.dhis2.org/browse/DHIS2-8215): Maps plugin don't support user authentication**  
Components: _[App] Maps_

**[DHIS2-8576](https://jira.dhis2.org/browse/DHIS2-8576): Create standard report not working**  
Components: _[App] Reports_

**[DHIS2-8661](https://jira.dhis2.org/browse/DHIS2-8661): Tracked entity instance filter of "followup" ignored**  
Components: _[App] Tracker capture_

**[DHIS2-8718](https://jira.dhis2.org/browse/DHIS2-8718): Editing an event will DELETE event coordinates**  
Components: _[App] Tracker capture_

**[DHIS2-7984](https://jira.dhis2.org/browse/DHIS2-7984): "hasUserRole" function is not working in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-7865](https://jira.dhis2.org/browse/DHIS2-7865): Tracker Capture Widgets and Locking Feature cause timeline data entry failure**  
Components: _[App] Tracker capture_

**[DHIS2-8546](https://jira.dhis2.org/browse/DHIS2-8546): User is created despite error when Interface Language or Database Language are not selected**  
Components: _[App] User_

**[DHIS2-7619](https://jira.dhis2.org/browse/DHIS2-7619): About Page Refuses to load**  
Components: _[App] User Profile_

**[DHIS2-6128](https://jira.dhis2.org/browse/DHIS2-6128): Change the frontend API call on setting Locale dependent Appearance settings**  
Components: _[App] User Profile_

**[DHIS2-7669](https://jira.dhis2.org/browse/DHIS2-7669): Incorporate new API end point for password update**  
Components: _[App] User Profile_


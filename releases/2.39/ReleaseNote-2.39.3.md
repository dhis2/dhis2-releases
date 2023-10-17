# Patch 2.39.3 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-14956](https://dhis2.atlassian.net/browse/DHIS2-14956): Add "Sorting" object to "EventVisualization"**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-15501](https://dhis2.atlassian.net/browse/DHIS2-15501): Include full column titles when downloading the line lists from the line-listing app**  
Components: _[API] Analytics_

**[DHIS2-15689](https://dhis2.atlassian.net/browse/DHIS2-15689): skipRounding not saved in EVENT_VISUALIZATION AO**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14371](https://dhis2.atlassian.net/browse/DHIS2-14371): Add parameters to dataApprovals/categoryOptionCombos endpoint**  
Components: _[API] Data approval_

**[DHIS2-12615](https://dhis2.atlassian.net/browse/DHIS2-12615): Add TEI's relationship - Search for existing TEI to link (capture-parity edition)**  
Components: _[App] Capture_

**[DHIS2-9661](https://dhis2.atlassian.net/browse/DHIS2-9661): Add event for first stage in registration page**  
Components: _[App] Capture_

**[DHIS2-14830](https://dhis2.atlassian.net/browse/DHIS2-14830): Rules execution for for first stage in registration page**  
Components: _[App] Capture_

**[DHIS2-13343](https://dhis2.atlassian.net/browse/DHIS2-13343): Implement PRA "Prevent adding new events to stage" in Capture app**  
Components: _[App] Capture_

**[DHIS2-14334](https://dhis2.atlassian.net/browse/DHIS2-14334): Edit enrollment date and incident date in capture**  
Components: _[App] Capture_

**[DHIS2-15185](https://dhis2.atlassian.net/browse/DHIS2-15185): Use Dhis2 DataTable component in working lists**  
Components: _[App] Capture_

**[DHIS2-14729](https://dhis2.atlassian.net/browse/DHIS2-14729): [Frontend] Render form field plugins in the Capture App registration page**  
Components: _[App] Capture_

**[DHIS2-14775](https://dhis2.atlassian.net/browse/DHIS2-14775): [Frontend] Build registration form metadata based on datastore config**  
Components: _[App] Capture_

**[DHIS2-5437](https://dhis2.atlassian.net/browse/DHIS2-5437): Change wording for discard warning modal**  
Components: _[App] Capture_

**[DHIS2-15426](https://dhis2.atlassian.net/browse/DHIS2-15426): UI adjustments**  
Components: _[App] Capture_

**[DHIS2-14577](https://dhis2.atlassian.net/browse/DHIS2-14577): Improve search form UX (remove * etc)**  
Components: _[App] Capture_

**[DHIS2-15015](https://dhis2.atlassian.net/browse/DHIS2-15015): Remove time dimension requirement for line lists**  
Components: _[App] Line Listing_

**[DHIS2-15703](https://dhis2.atlassian.net/browse/DHIS2-15703): Program indicator parser description for V{event_count} is confusing**  
Components: _[App] Maintenance_

**[DHIS2-15472](https://dhis2.atlassian.net/browse/DHIS2-15472): Upgrade Landcover dataset for supported versions**  
Components: _[App] Maps_

## Bugs

**[DHIS2-14454](https://dhis2.atlassian.net/browse/DHIS2-14454): Event Report app loading infinitely for pivot table and certain option sets [Console shows "Uncaught TypeError")**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-14971](https://dhis2.atlassian.net/browse/DHIS2-14971): Zero value for enrollment PI in a single period aggregates to zero value in multi-period Single Value chart**  
Components: _[API] Analytics_

**[DHIS2-15573](https://dhis2.atlassian.net/browse/DHIS2-15573): Errors executing analytics due invalid date and period**  
Components: _[API] Analytics_

**[DHIS2-14923](https://dhis2.atlassian.net/browse/DHIS2-14923): 500 internal server error for calls to the orgUnitAnalytics API, when query references an ou group set that is not set to be a data dimension (Leading to error in Org unit distribution report)**  
Components: _[API] Analytics_

**[DHIS2-15502](https://dhis2.atlassian.net/browse/DHIS2-15502): Event report showing only 101 rows in first page and not navigated to next page**  
Components: _[API] Analytics_

**[DHIS2-15775](https://dhis2.atlassian.net/browse/DHIS2-15775): Option codes and OptionSet association is missing in metadata**  
Components: _[API] Analytics_

**[DHIS2-15268](https://dhis2.atlassian.net/browse/DHIS2-15268): Cannot save visualisations with a fixed future period which does not exist in the database**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-13773](https://dhis2.atlassian.net/browse/DHIS2-13773): Deleting SQL view metadata that references resource tables and/or analytics tables can then block resource tables and/or analytics**  
Components: _[API] Analytics_, _[App] Data administration_

**[DHIS2-12495](https://dhis2.atlassian.net/browse/DHIS2-12495): Tracker program table isn't generated**  
Components: _[API] Analytics_

**[DHIS2-11509](https://dhis2.atlassian.net/browse/DHIS2-11509): Export of Event report: DE with optionSet doesn't use translation**  
Components: _[API] Analytics_

**[DHIS2-15708](https://dhis2.atlassian.net/browse/DHIS2-15708): Missing period type - QuarterlyNovember**  
Components: _[API] Analytics_

**[DHIS2-15684](https://dhis2.atlassian.net/browse/DHIS2-15684): Invalid Period object in the /analytics endpoint**  
Components: _[API] Analytics_

**[DHIS2-14769](https://dhis2.atlassian.net/browse/DHIS2-14769): Program indicators - custom aggregation with count distinct (With Text Fields)**  
Components: _[API] Analytics_

**[DHIS2-13611](https://dhis2.atlassian.net/browse/DHIS2-13611): [I,J,K, L, M] Error response from geoFeatures api is confusing**  
Components: _[API] Analytics_

**[DHIS2-12152](https://dhis2.atlassian.net/browse/DHIS2-12152): Event analytics: Integer data element with decimal number filter causes a 500**  
Components: _[API] Analytics_

**[DHIS2-14561](https://dhis2.atlassian.net/browse/DHIS2-14561): [B23] Event analytics does not recognize no value "NV" as valid query filter for numeric values**  
Components: _[API] Analytics_

**[DHIS2-15044](https://dhis2.atlassian.net/browse/DHIS2-15044): Visualizer download resulting in ERR_INVALID_RESPONSE when ALL_ITEMS is in use**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-14493](https://dhis2.atlassian.net/browse/DHIS2-14493): Loading a line list with multi-stage elements causes a 400**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-15364](https://dhis2.atlassian.net/browse/DHIS2-15364): Missing options (of option set) in Analytics events/aggregate API**  
Components: _[API] Analytics_

**[DHIS2-14932](https://dhis2.atlassian.net/browse/DHIS2-14932): Visualization download should remove redundant "0" digits for Program Indicators**  
Components: _[API] Analytics_

**[DHIS2-15766](https://dhis2.atlassian.net/browse/DHIS2-15766): Installed app version are not retained after restart of DHIS2**  
Components: _[API] App management_

**[DHIS2-15531](https://dhis2.atlassian.net/browse/DHIS2-15531): Hibernate error at startup : [org.hisp.dhis.period.PeriodType] : Discriminator: QuarterlyNov**  
Components: _[API] Database migration_

**[DHIS2-15631](https://dhis2.atlassian.net/browse/DHIS2-15631): Decimal places not setting**  
Components: _[API] Data Entry_

**[DHIS2-15294](https://dhis2.atlassian.net/browse/DHIS2-15294): Data value set GET with .csv extension not working**  
Components: _[API] Data value set_

**[DHIS2-14836](https://dhis2.atlassian.net/browse/DHIS2-14836): Unexpected change of eventDate we sent to the server**  
Components: _[API] Events_

**[DHIS2-15288](https://dhis2.atlassian.net/browse/DHIS2-15288): Job Scheduler: Leader only is a property of the JobType not the JobConfiguration**  
Components: _[API] Job scheduler_

**[DHIS2-13380](https://dhis2.atlassian.net/browse/DHIS2-13380): Broken link on data set notification message**  
Components: _[API] Messaging_

**[DHIS2-15565](https://dhis2.atlassian.net/browse/DHIS2-15565): Gist API: Filter value cannot contain colon or other split characters**  
Components: _[API] Metadata Gist_

**[DHIS2-15351](https://dhis2.atlassian.net/browse/DHIS2-15351): Imprting metadata in a new blank instance inserts NULL in some categories making the maintenance app unusuable**  
Components: _[API] Metadata import-export_, _[App] Aggregate Data Entry_, _[App] Maintenance_

**[DHIS2-15417](https://dhis2.atlassian.net/browse/DHIS2-15417): Org unit email address validation is not consistent between UI and back-end**  
Components: _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-15706](https://dhis2.atlassian.net/browse/DHIS2-15706): Dimensions endpoint in CSV format not working since 2.38.x**  
Components: _[API] Metadata model_

**[DHIS2-15168](https://dhis2.atlassian.net/browse/DHIS2-15168): Gist API: Multiple nested properties are unnecessarily wrapped in an array in the JSON response**  
Components: _[API] Metadata model_

**[DHIS2-15322](https://dhis2.atlassian.net/browse/DHIS2-15322): Visualization list endpoint does not return nested rows, columns or filters**  
Components: _[API] Metadata model_

**[DHIS2-15068](https://dhis2.atlassian.net/browse/DHIS2-15068): Org unit opening date is not included in the CSV columns**  
Components: _[API] Metadata model_

**[DHIS2-15613](https://dhis2.atlassian.net/browse/DHIS2-15613): Both "total" and "pageCount" are not working for dimensions endpoint.**  
Components: _[API] Other_

**[DHIS2-15061](https://dhis2.atlassian.net/browse/DHIS2-15061): Predictor fails with different QueryModifers on the same data element**  
Components: _[API] Predictors_

**[DHIS2-15127](https://dhis2.atlassian.net/browse/DHIS2-15127): Capture App program rules error**  
Components: _[API] Program rules_, _[App] Capture_

**[DHIS2-15347](https://dhis2.atlassian.net/browse/DHIS2-15347): PreviousEvent rule variable fails on enrollment evaluation**  
Components: _[API] Program rules_

**[DHIS2-13541](https://dhis2.atlassian.net/browse/DHIS2-13541): Unable to save event in Capture when program rule assigns option name**  
Components: _[API] Program rules_

**[DHIS2-13275](https://dhis2.atlassian.net/browse/DHIS2-13275): Error escaping special chars evaluating Program Rules**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-13453](https://dhis2.atlassian.net/browse/DHIS2-13453): Not possible to change max concurrent user sessions**  
Components: _[API] Security_

**[DHIS2-15596](https://dhis2.atlassian.net/browse/DHIS2-15596): Tracker importer doesn't respect order of entities in the report**  
Components: _[API] Tracker_

**[DHIS2-15325](https://dhis2.atlassian.net/browse/DHIS2-15325): /tracker/trackedEntities?order=createdAt orders by tracked entity id**  
Components: _[API] Tracker_

**[DHIS2-13649](https://dhis2.atlassian.net/browse/DHIS2-13649): New tracker API totalPages parameter returns the total number of records, not the total number of pages**  
Components: _[API] Tracker_

**[DHIS2-14154](https://dhis2.atlassian.net/browse/DHIS2-14154): API Rules engine throws an error when using constants**  
Components: _[API] Tracker_

**[DHIS2-15603](https://dhis2.atlassian.net/browse/DHIS2-15603): Same event with multiple notes is returned multiple times by /tracker/events**  
Components: _[API] Tracker_

**[DHIS2-15102](https://dhis2.atlassian.net/browse/DHIS2-15102): Assign value program rules: Values not stored**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-15295](https://dhis2.atlassian.net/browse/DHIS2-15295): Old tracker importer returns an error when trying to remove an IMAGE attribute value**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-15595](https://dhis2.atlassian.net/browse/DHIS2-15595): createdBy field not changed when clone user**  
Components: _[API] User_, _[App] User_

**[DHIS2-15512](https://dhis2.atlassian.net/browse/DHIS2-15512): Cannot disable user from users list view**  
Components: _[API] User_

**[DHIS2-15357](https://dhis2.atlassian.net/browse/DHIS2-15357): Usergroups lastupdated and lastupdatedby not updated consistently**  
Components: _[API] User_

**[DHIS2-15277](https://dhis2.atlassian.net/browse/DHIS2-15277): Data Entry (Beta): crashes on data set selection when user language is Arabic**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-15525](https://dhis2.atlassian.net/browse/DHIS2-15525): Capture App: Enrollment Dashboard stages Grid not show correctly names**  
Components: _[App] Capture_

**[DHIS2-15700](https://dhis2.atlassian.net/browse/DHIS2-15700): Option sets not working in register TEI**  
Components: _[App] Capture_

**[DHIS2-15492](https://dhis2.atlassian.net/browse/DHIS2-15492): Tooltip "No available program stages" shown incorrectly**  
Components: _[App] Capture_

**[DHIS2-15312](https://dhis2.atlassian.net/browse/DHIS2-15312): Attribute option combo prevents events in Event programs being re-saved in Capture**  
Components: _[App] Capture_

**[DHIS2-14484](https://dhis2.atlassian.net/browse/DHIS2-14484): Capture App does not display a message for a value that is blanked by a hide rule**  
Components: _[App] Capture_

**[DHIS2-14412](https://dhis2.atlassian.net/browse/DHIS2-14412): Program rule assigning date based on report date is not rerun when report date is changed**  
Components: _[App] Capture_

**[DHIS2-12520](https://dhis2.atlassian.net/browse/DHIS2-12520): View enrollment event: Rules are executed without dependency data**  
Components: _[App] Capture_

**[DHIS2-15153](https://dhis2.atlassian.net/browse/DHIS2-15153): Ask user to create new event when stage is complete flag is not working correctly when the program stages are not repeatable**  
Components: _[App] Capture_

**[DHIS2-15103](https://dhis2.atlassian.net/browse/DHIS2-15103): Wrong text in "No results found" modal**  
Components: _[App] Capture_

**[DHIS2-14838](https://dhis2.atlassian.net/browse/DHIS2-14838): Generate tables buttons not available more than once when using Redis**  
Components: _[App] Core resource_

**[DHIS2-13256](https://dhis2.atlassian.net/browse/DHIS2-13256): Status 500 error issue on saved chart , maps and dashboards**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-15251](https://dhis2.atlassian.net/browse/DHIS2-15251): SV add some space above the title in DV**  
**[DHIS2-13128](https://dhis2.atlassian.net/browse/DHIS2-13128): Target line allows for float entry but then saves as integer**  
Components: _[App] Data visualizer_

**[DHIS2-15468](https://dhis2.atlassian.net/browse/DHIS2-15468): Event Report and Event Visualizer Take default relative period for analytics**  
Components: _[App] Event reports_, _[App] Event visualizer_

**[DHIS2-15771](https://dhis2.atlassian.net/browse/DHIS2-15771): Line listing app duplicates values if option sets share the same code**  
Components: _[App] Line Listing_

**[DHIS2-15248](https://dhis2.atlassian.net/browse/DHIS2-15248): LL download does not apply user defined sorting**  
Components: _[App] Line Listing_

**[DHIS2-15026](https://dhis2.atlassian.net/browse/DHIS2-15026): Data from repeatable events shows name of DE instead of blank cell**  
Components: _[App] Line Listing_

**[DHIS2-15423](https://dhis2.atlassian.net/browse/DHIS2-15423): Loading a saved line list with multi-stage data elements causes a crash**  
Components: _[App] Line Listing_

**[DHIS2-15642](https://dhis2.atlassian.net/browse/DHIS2-15642): Password Reset "Recover" Button Does Nothing**  
Components: _[App] Login_

**[DHIS2-14951](https://dhis2.atlassian.net/browse/DHIS2-14951): Variables missing from program indicator configuration menu**  
Components: _[App] Maintenance_

**[DHIS2-9717](https://dhis2.atlassian.net/browse/DHIS2-9717): Very long indicator expression descriptions overrun the screen**  
Components: _[App] Maintenance_

**[DHIS2-15416](https://dhis2.atlassian.net/browse/DHIS2-15416): Wrong errror message for invalid email address in organization unit edit page**  
Components: _[App] Maintenance_

**[DHIS2-15763](https://dhis2.atlassian.net/browse/DHIS2-15763): When switching from split view to Monthly period, map view only uses part of canvas**  
**[DHIS2-15435](https://dhis2.atlassian.net/browse/DHIS2-15435): Display period in not reset to "Single" when changing from relative to fixed period**  
Components: _[App] Maps_

**[DHIS2-15439](https://dhis2.atlassian.net/browse/DHIS2-15439): Visibility is not kept when changing period for timeline layer**  
Components: _[App] Maps_

**[DHIS2-15407](https://dhis2.atlassian.net/browse/DHIS2-15407): Arabic text doesn’t show up in PDF downloads of Data Set Reports**  
Components: _[App] Reports_

**[DHIS2-15844](https://dhis2.atlassian.net/browse/DHIS2-15844): Expressions with multiple `d2:hasValue`s fails**  
Components: _[App] Tracker capture_

**[DHIS2-15464](https://dhis2.atlassian.net/browse/DHIS2-15464): d2:right and d2:left on numerical strings**  
Components: _[App] Tracker capture_

**[DHIS2-15453](https://dhis2.atlassian.net/browse/DHIS2-15453): Program Rules not running in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-15521](https://dhis2.atlassian.net/browse/DHIS2-15521): Use translated form name on data elements**  
Components: _[App] Tracker capture_

**[DHIS2-15532](https://dhis2.atlassian.net/browse/DHIS2-15532): d2:inOrgUnitGroup as program rule condition always returns true**  
Components: _[App] Tracker capture_

**[DHIS2-15340](https://dhis2.atlassian.net/browse/DHIS2-15340): d2:inOrgUnitGroup() is not working**  
Components: _[App] Tracker capture_

**[DHIS2-15089](https://dhis2.atlassian.net/browse/DHIS2-15089): Feedback widget is empty whenever no events are selected**  
Components: _[App] Tracker capture_

**[DHIS2-15860](https://dhis2.atlassian.net/browse/DHIS2-15860): Impossibility of creating or modifying a user when there are some attributes in the form and these are not completed**  
Components: _[App] User_

**[DHIS2-15485](https://dhis2.atlassian.net/browse/DHIS2-15485): User app: password message for create new user is missing text about special character**  
Components: _[App] User_

**[DHIS2-15172](https://dhis2.atlassian.net/browse/DHIS2-15172): Unable to disable and enable users through the context menu in user management app**  
Components: _[App] User_

**[DHIS2-15611](https://dhis2.atlassian.net/browse/DHIS2-15611): Scrollbar showing when typing username when replicating user**  
Components: _[App] User_

**[DHIS2-15470](https://dhis2.atlassian.net/browse/DHIS2-15470): Only show the owners PATs in the list as an admin**  
Components: _[App] User Profile_


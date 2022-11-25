# Patch 2.38.2 Release Note

- [Features](#features)
- [Bugs](#bugs)

## Features

**[DHIS2-13370](https://dhis2.atlassian.net/browse/DHIS2-13370): Data statistics endpoint to return display name**  
Components: _[API] Analytics_

**[DHIS2-7851](https://dhis2.atlassian.net/browse/DHIS2-7851): Allow superuser to modify other userDataStore of other users**  
Components: _[API] Data store_

**[DHIS2-13619](https://dhis2.atlassian.net/browse/DHIS2-13619): Multiple auditTypes for /api/audits/trackedEntityDataValue filter**  
Components: _[API] Events_

**[DHIS2-13461](https://dhis2.atlassian.net/browse/DHIS2-13461): TrackedEntityDataValue audit ou mode parameter**  
Components: _[API] Other_

**[DHIS2-13421](https://dhis2.atlassian.net/browse/DHIS2-13421): api/audit/trackedEntityDataValue: add OrgUnit, period, programStage filters**  
Components: _[API] Other_

**[DHIS2-13443](https://dhis2.atlassian.net/browse/DHIS2-13443): Performance optimisation when fetching events from Event Programs**  
Components: _[API] Tracker_

**[DHIS2-13621](https://dhis2.atlassian.net/browse/DHIS2-13621): List TrackedEntityAttributes in CSV export for TrackedEntityInstances**  
Components: _[API] Tracker_

**[DHIS2-13468](https://dhis2.atlassian.net/browse/DHIS2-13468): Program rule on import fails for future event dates**  
Components: _[API] Tracker_

**[DHIS2-13279](https://dhis2.atlassian.net/browse/DHIS2-13279): Register a user on search fallback**  
Components: _[App] Capture_

**[DHIS2-13298](https://dhis2.atlassian.net/browse/DHIS2-13298): Add color palettes to key reporting apps**  
Components: _[App] Data visualizer_

**[DHIS2-12490](https://dhis2.atlassian.net/browse/DHIS2-12490): [M][L][J] Program indicators filter operands in event reports**  
Components: _[App] Event reports_

**[DHIS2-12781](https://dhis2.atlassian.net/browse/DHIS2-12781): Documentation update for Line Listing app**  
Components: _[App] Line Listing_

## Bugs

**[DHIS2-13478](https://dhis2.atlassian.net/browse/DHIS2-13478): No data shows after continuous/delta analytics run (lastyears=0)**  
Components: _[API] Analytics_

**[DHIS2-13429](https://dhis2.atlassian.net/browse/DHIS2-13429): All Previous Analytics data removed after partial "lastyears=2" run**  
Components: _[API] Analytics_

**[DHIS2-13479](https://dhis2.atlassian.net/browse/DHIS2-13479): Running full analytics does not remove continuous/delta table (analytics_0)**  
Components: _[API] Analytics_

**[DHIS2-13573](https://dhis2.atlassian.net/browse/DHIS2-13573): [I] NullPointer Exception in /query/events**  
Components: _[API] Analytics_

**[DHIS2-13514](https://dhis2.atlassian.net/browse/DHIS2-13514): [J, K] Analytics Continous Job Fails for New Program**  
Components: _[API] Analytics_

**[DHIS2-13694](https://dhis2.atlassian.net/browse/DHIS2-13694): [J,K] Event Date filter not respecting individual dates selection**  
Components: _[API] Analytics_

**[DHIS2-13638](https://dhis2.atlassian.net/browse/DHIS2-13638): [J]Org. Unit Group Sets are considered as filters in events/enrollments queries**  
Components: _[API] Analytics_

**[DHIS2-13286](https://dhis2.atlassian.net/browse/DHIS2-13286): [I, J, K] OUGS are sorted by id instead of display name in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-8184](https://dhis2.atlassian.net/browse/DHIS2-8184): [I] Remove decimals in report rate summary for integer only values**  
Components: _[API] Analytics_

**[DHIS2-13633](https://dhis2.atlassian.net/browse/DHIS2-13633): [I] Data Elements of type Percentage returns 0.0 for null values**  
Components: _[API] Analytics_

**[DHIS2-13721](https://dhis2.atlassian.net/browse/DHIS2-13721): [J,K] Incorrect column names in analytics events and enrollments response**  
Components: _[API] Analytics_

**[DHIS2-13563](https://dhis2.atlassian.net/browse/DHIS2-13563): [I] Filter !EQ in analytics event query filters out null**  
Components: _[API] Analytics_

**[DHIS2-13538](https://dhis2.atlassian.net/browse/DHIS2-13538): [I] Metadata item duplication for OptionSets in events/analytics**  
Components: _[API] Analytics_

**[DHIS2-13558](https://dhis2.atlassian.net/browse/DHIS2-13558): [I] Event analytics table partitions not generated for future years**  
Components: _[API] Analytics_

**[DHIS2-13655](https://dhis2.atlassian.net/browse/DHIS2-13655): [J] Events query: no rows when paging=false**  
Components: _[API] Analytics_

**[DHIS2-13606](https://dhis2.atlassian.net/browse/DHIS2-13606): No events returned in event analytics query API if max limit set to unlimited**  
Components: _[API] Analytics_

**[DHIS2-12466](https://dhis2.atlassian.net/browse/DHIS2-12466): [F]Potential bug with analytics api when requesting event data from two programs that share a data element**  
Components: _[API] Analytics_

**[DHIS2-13212](https://dhis2.atlassian.net/browse/DHIS2-13212): [E] Header names don't reflect users' custom time dimension names**  
Components: _[API] Analytics_

**[DHIS2-13136](https://dhis2.atlassian.net/browse/DHIS2-13136): [G,F] Analytics headers to apply user defined names for time dimensions**  
Components: _[API] Analytics_

**[DHIS2-13487](https://dhis2.atlassian.net/browse/DHIS2-13487): [H] Program Indicator fails to parse timestamps**  
Components: _[API] Analytics_

**[DHIS2-13460](https://dhis2.atlassian.net/browse/DHIS2-13460): [H,I] Visualization download should remove redundant "0" digits for Data Elements**  
Components: _[API] Analytics_

**[DHIS2-13837](https://dhis2.atlassian.net/browse/DHIS2-13837): Installed app redirects from index.action return 302 with no Location header**  
Components: _[API] App management_

**[DHIS2-13836](https://dhis2.atlassian.net/browse/DHIS2-13836): Installed app redirects to bundled app path doesn't work**  
Components: _[API] App management_

**[DHIS2-13632](https://dhis2.atlassian.net/browse/DHIS2-13632): tracker/events endpoint updates created date**  
Components: _[API] Events_

**[DHIS2-13360](https://dhis2.atlassian.net/browse/DHIS2-13360): DELETE events should update the lastUpdated property**  
Components: _[API] Events_

**[DHIS2-13693](https://dhis2.atlassian.net/browse/DHIS2-13693): [J] Filter !ILIKE, !LIKE in analytics event query filters out null**  
Components: _[API] Events_

**[DHIS2-13451](https://dhis2.atlassian.net/browse/DHIS2-13451): Event data value audits created for all data values on event update**  
Components: _[API] Events_

**[DHIS2-13452](https://dhis2.atlassian.net/browse/DHIS2-13452): Event data value audit represents value before modification**  
Components: _[API] Events_

**[DHIS2-13489](https://dhis2.atlassian.net/browse/DHIS2-13489): Job Progress Tracking: Process status should be final**  
Components: _[API] Job scheduler_

**[DHIS2-9768](https://dhis2.atlassian.net/browse/DHIS2-9768): Scheduler: Unable to specify scheduled job ending on Sunday**  
Components: _[API] Job scheduler_

**[DHIS2-13474](https://dhis2.atlassian.net/browse/DHIS2-13474): Analytics table UI in progress after crash**  
Components: _[API] Job scheduler_, _[App] Data administration_

**[DHIS2-12217](https://dhis2.atlassian.net/browse/DHIS2-12217): A problem with messaging inside Tracker capture app**  
Components: _[API] Messaging_, _[API] Tracker_

**[DHIS2-13675](https://dhis2.atlassian.net/browse/DHIS2-13675): Importing metadata of type 'user' fails**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-13178](https://dhis2.atlassian.net/browse/DHIS2-13178): Error when removing expiry days set on program**  
Components: _[API] Metadata import-export_

**[DHIS2-13736](https://dhis2.atlassian.net/browse/DHIS2-13736): Importing programRules with Program rule actions "WARNINGONCOMPLETE" fails in 2.38**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-8381](https://dhis2.atlassian.net/browse/DHIS2-8381): Cannot mark greyed field if categoryCombo is default**  
Components: _[API] Metadata import-export_, _[App] Maintenance_

**[DHIS2-7586](https://dhis2.atlassian.net/browse/DHIS2-7586): Metadata dependency export includes mapViews in 2.32 - crashes import in 2.32**  
Components: _[API] Metadata import-export_

**[DHIS2-13517](https://dhis2.atlassian.net/browse/DHIS2-13517): QueryPlanner has issues separating persisted / non-persisted**  
Components: _[API] Metadata model_

**[DHIS2-13607](https://dhis2.atlassian.net/browse/DHIS2-13607): No entity found for query; Maintenance app/api endpoints**  
Components: _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-13580](https://dhis2.atlassian.net/browse/DHIS2-13580): Sharing.userGroups displayName is empty**  
Components: _[API] Metadata model_

**[DHIS2-13371](https://dhis2.atlassian.net/browse/DHIS2-13371): Cannot update greyedFields of a Data Set Section with categoryCombo None**  
Components: _[API] Metadata model_

**[DHIS2-14114](https://dhis2.atlassian.net/browse/DHIS2-14114): SystemSettingManager.getSystemSetting causes performance issue**  
Components: _[API] Other_

**[DHIS2-13711](https://dhis2.atlassian.net/browse/DHIS2-13711): Regression in */* content-type negotiation**  
Components: _[API] Other_

**[DHIS2-13763](https://dhis2.atlassian.net/browse/DHIS2-13763): Token filter is not working**  
Components: _[API] Other_

**[DHIS2-7908](https://dhis2.atlassian.net/browse/DHIS2-7908): Option Groups containing orphan options**  
Components: _[API] Other_, _[App] Maintenance_

**[DHIS2-6705](https://dhis2.atlassian.net/browse/DHIS2-6705): Data entry module as default home page produces error**  
Components: _[API] Other_, _[API] System configuration_

**[DHIS2-9213](https://dhis2.atlassian.net/browse/DHIS2-9213): XML representation of SQL view data results in error**  
Components: _[API] Other_

**[DHIS2-13592](https://dhis2.atlassian.net/browse/DHIS2-13592): Redis cache of system setting keyCanGrantOwnUserAuthorityGroups doesn't work**  
Components: _[API] Other_

**[DHIS2-13821](https://dhis2.atlassian.net/browse/DHIS2-13821): 2.38.1.1 Program Rule Validation Preventing Data Syncing**  
Components: _[API] Program rules_, _[App] Capture_

**[DHIS2-13230](https://dhis2.atlassian.net/browse/DHIS2-13230): zing returns false**  
Components: _[API] Program rules_, _[App] Capture_

**[DHIS2-8677](https://dhis2.atlassian.net/browse/DHIS2-8677): /api/system/info includes sensitive data**  
Components: _[API] Security_

**[DHIS2-13076](https://dhis2.atlassian.net/browse/DHIS2-13076): Internal server error in /trackedEntityInstances/query when there are no filterable attributes**  
Components: _[API] Tracker_

**[DHIS2-13325](https://dhis2.atlassian.net/browse/DHIS2-13325): Remove redundant information from validation errors**  
Components: _[API] Tracker_

**[DHIS2-13686](https://dhis2.atlassian.net/browse/DHIS2-13686): api/trackedEntityInstances does not respect category combination sharing**  
Components: _[API] Tracker_

**[DHIS2-13484](https://dhis2.atlassian.net/browse/DHIS2-13484): Events for an org unit fail to import through Import/Export App unless there is at least one event in that program and org unit**  
Components: _[API] Tracker_

**[DHIS2-10376](https://dhis2.atlassian.net/browse/DHIS2-10376): When downloading event files as CSV they are labelled as metadata.csv**  
Components: _[API] Tracker_, _[App] Import-export_

**[DHIS2-12039](https://dhis2.atlassian.net/browse/DHIS2-12039): Slow PSQL queries when retrieving /events**  
Components: _[API] Tracker_

**[DHIS2-12669](https://dhis2.atlassian.net/browse/DHIS2-12669): [backend] PERCENTAGE value type data elements allow incorrect values in Capture app**  
Components: _[API] Tracker_

**[DHIS2-13635](https://dhis2.atlassian.net/browse/DHIS2-13635): GS1DataMatrix parser assumes all AIs has length 2**  
Components: _[API] Tracker_

**[DHIS2-13840](https://dhis2.atlassian.net/browse/DHIS2-13840): Searching for attribute values containing "NV" results in malformed SQL and 500 internal error**  
Components: _[API] Tracker_

**[DHIS2-12816](https://dhis2.atlassian.net/browse/DHIS2-12816): Unable to trigger save event in capture app**  
Components: _[API] Tracker_

**[DHIS2-13723](https://dhis2.atlassian.net/browse/DHIS2-13723): Search fallback should navigate to new app if enabled**  
Components: _[API] Tracker_

**[DHIS2-11410](https://dhis2.atlassian.net/browse/DHIS2-11410): Wrong error message when querying enrollments by tei ids**  
Components: _[API] Tracker_

**[DHIS2-13519](https://dhis2.atlassian.net/browse/DHIS2-13519): /api/tracker/events CSV export misses events without data values**  
Components: _[API] Tracker_

**[DHIS2-11935](https://dhis2.atlassian.net/browse/DHIS2-11935): Performance: relationships endpoint is slow when there are many relationships**  
Components: _[API] Tracker_

**[DHIS2-13529](https://dhis2.atlassian.net/browse/DHIS2-13529): /api/tracker/events CSV export missing file extension**  
Components: _[API] Tracker_

**[DHIS2-13413](https://dhis2.atlassian.net/browse/DHIS2-13413): Accessing /api/tracker/events cause a crash**  
Components: _[API] Tracker_

**[DHIS2-12782](https://dhis2.atlassian.net/browse/DHIS2-12782): Incorrect Content-Type when requesting individual user settings fields**  
Components: _[API] User_

**[DHIS2-13720](https://dhis2.atlassian.net/browse/DHIS2-13720): Program stage events could not be retrieved**  
Components: _[App] Capture_

**[DHIS2-8613](https://dhis2.atlassian.net/browse/DHIS2-8613): Can select future dates in Capture app for Report Date**  
Components: _[App] Capture_

**[DHIS2-14001](https://dhis2.atlassian.net/browse/DHIS2-14001): Use "Complete" as label for enrollment widget**  
Components: _[App] Capture_

**[DHIS2-7913](https://dhis2.atlassian.net/browse/DHIS2-7913): Hidden fields should not be visible in event details**  
Components: _[App] Capture_

**[DHIS2-13906](https://dhis2.atlassian.net/browse/DHIS2-13906): d2:hasValue in program rule condition no longer working in Capture app**  
Components: _[App] Capture_

**[DHIS2-8210](https://dhis2.atlassian.net/browse/DHIS2-8210): Tracker Registration Form not displaying properly (sorting/order)**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-13739](https://dhis2.atlassian.net/browse/DHIS2-13739): Opt-in not respected when linking to TEI from single event page**  
Components: _[App] Capture_

**[DHIS2-13544](https://dhis2.atlassian.net/browse/DHIS2-13544): No form validation when saving scheduled event without report date**  
Components: _[App] Capture_

**[DHIS2-13545](https://dhis2.atlassian.net/browse/DHIS2-13545): Capture app does not adjust to time zones when it comes to last updated**  
Components: _[App] Capture_

**[DHIS2-13476](https://dhis2.atlassian.net/browse/DHIS2-13476): [frontend] PERCENTAGE value type data elements allow incorrect values in Capture app**  
Components: _[App] Capture_

**[DHIS2-13624](https://dhis2.atlassian.net/browse/DHIS2-13624): "Save and add another" button missing border/shadows**  
Components: _[App] Capture_

**[DHIS2-13542](https://dhis2.atlassian.net/browse/DHIS2-13542): Show Error message/warning if Report date in New Enrollment Event is not filled out**  
Components: _[App] Capture_

**[DHIS2-13548](https://dhis2.atlassian.net/browse/DHIS2-13548): Searching for an attribute and putting a space in another attribute results in a `like:null` in the searching url**  
Components: _[App] Capture_

**[DHIS2-13185](https://dhis2.atlassian.net/browse/DHIS2-13185): Edit event button is enabled when user doesn't have write access to the program stage**  
Components: _[App] Capture_

**[DHIS2-13551](https://dhis2.atlassian.net/browse/DHIS2-13551): Enrollment edit event infinit loading**  
Components: _[App] Capture_

**[DHIS2-13204](https://dhis2.atlassian.net/browse/DHIS2-13204): Different username/name is shown in comment widget in New vs View event**  
Components: _[App] Capture_

**[DHIS2-12991](https://dhis2.atlassian.net/browse/DHIS2-12991): Comment author is only displayed after refreshing the page**  
Components: _[App] Capture_

**[DHIS2-13500](https://dhis2.atlassian.net/browse/DHIS2-13500): New "Capture" Apps is loading forever, it is not opening the registration form**  
Components: _[App] Capture_

**[DHIS2-13181](https://dhis2.atlassian.net/browse/DHIS2-13181): Capture app uses old endpoint to delete events**  
Components: _[App] Capture_

**[DHIS2-13534](https://dhis2.atlassian.net/browse/DHIS2-13534): Error edit single event and unnecessary "Delete" button.**  
Components: _[App] Capture_

**[DHIS2-13196](https://dhis2.atlassian.net/browse/DHIS2-13196): Inconsistencies between attributes displayed in edit profile and view profile widgets**  
Components: _[App] Capture_

**[DHIS2-13228](https://dhis2.atlassian.net/browse/DHIS2-13228): TET with no attributes assigned make edit profile widget stale**  
Components: _[App] Capture_

**[DHIS2-13060](https://dhis2.atlassian.net/browse/DHIS2-13060): Working lists: Incidence date and "Assigned to" is shown as filter selectors when not applicable**  
Components: _[App] Capture_

**[DHIS2-12777](https://dhis2.atlassian.net/browse/DHIS2-12777): Hide programs in list if user has no TET access**  
Components: _[App] Capture_

**[DHIS2-13063](https://dhis2.atlassian.net/browse/DHIS2-13063): Working lists should use FormName if available**  
Components: _[App] Capture_

**[DHIS2-13486](https://dhis2.atlassian.net/browse/DHIS2-13486): Rules engine: Ensure double quotes always encapsulates values**  
Components: _[App] Capture_

**[DHIS2-12304](https://dhis2.atlassian.net/browse/DHIS2-12304): Show error (caused by invalid future Enrollment date) in SnackBar**  
Components: _[App] Capture_

**[DHIS2-13186](https://dhis2.atlassian.net/browse/DHIS2-13186): Schedule event page is missing "no access" error message**  
Components: _[App] Capture_

**[DHIS2-12772](https://dhis2.atlassian.net/browse/DHIS2-12772): Change saving text when re-enrolling**  
Components: _[App] Capture_

**[DHIS2-12670](https://dhis2.atlassian.net/browse/DHIS2-12670): Working Lists: deleting a "just created" view behaves incorrectly**  
Components: _[App] Capture_

**[DHIS2-13202](https://dhis2.atlassian.net/browse/DHIS2-13202): Report and Due date use hardcoded name in program stage event list even when configured**  
Components: _[App] Capture_

**[DHIS2-13347](https://dhis2.atlassian.net/browse/DHIS2-13347): Cannot uncheck "Yes" checkboxes**  
Components: _[App] Capture_


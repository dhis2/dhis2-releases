# Patch 2.39.0 Release - PRELIMINARY

- [Features](#features)
- [Bugs](#bugs)

## Features

**[DHIS2-11998](https://dhis2.atlassian.net/browse/DHIS2-11998): Add support for multiple geometries associated with org units in the data model and API**  
Components: _[API] Analytics_, _[API] Metadata model_

**[DHIS2-13411](https://dhis2.atlassian.net/browse/DHIS2-13411): [H,G, J, K] Dimension Endpoint to retrieve data for FE in Cross Program Line Listing app**  
Components: _[API] Analytics_

**[DHIS2-12871](https://dhis2.atlassian.net/browse/DHIS2-12871): [C] Dashboard item search to return only eventVisualizations of type line list**  
Components: _[API] Analytics_

**[DHIS2-8061](https://dhis2.atlassian.net/browse/DHIS2-8061): Indicator expression not accepting blanks as output**  
Components: _[API] Analytics_, _[API] Other_, _[App] Pivot table_

**[DHIS2-11192](https://dhis2.atlassian.net/browse/DHIS2-11192): Visualize "Scheduled date" in Line Listing app**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-12309](https://dhis2.atlassian.net/browse/DHIS2-12309): [E, I, J] Support scheduled events in analytics**  
Components: _[API] Analytics_, _[App] Event reports_, _[App] Line Listing_

**[DHIS2-11522](https://dhis2.atlassian.net/browse/DHIS2-11522): Indicator sub-expressions**  
Components: _[API] Analytics_

**[DHIS2-13614](https://dhis2.atlassian.net/browse/DHIS2-13614): [I]Remove partitions from tei_event tables**  
Components: _[API] Analytics_

**[DHIS2-13526](https://dhis2.atlassian.net/browse/DHIS2-13526): [H] Add skip flag for TEI tables in analytics export**  
Components: _[API] Analytics_

**[DHIS2-13511](https://dhis2.atlassian.net/browse/DHIS2-13511): [H] Add headers param support in CPL**  
Components: _[API] Analytics_

**[DHIS2-12320](https://dhis2.atlassian.net/browse/DHIS2-12320): [E]Add support for V{scheduled_date} in program indicators**  
Components: _[API] Analytics_

**[DHIS2-12319](https://dhis2.atlassian.net/browse/DHIS2-12319): [E]Support V{scheduled_event_count} for program indicators**  
Components: _[API] Analytics_

**[DHIS2-12967](https://dhis2.atlassian.net/browse/DHIS2-12967): [D]New display names for some period types**  
Components: _[API] Analytics_

**[DHIS2-12838](https://dhis2.atlassian.net/browse/DHIS2-12838): [C][TECH-DEBT]Change the implicite or/and by filtering of data elements**  
Components: _[API] Analytics_

**[DHIS2-13115](https://dhis2.atlassian.net/browse/DHIS2-13115): [D] Add support for dimensions of type "datetime" to analytics endpoints**  
Components: _[API] Analytics_

**[DHIS2-13321](https://dhis2.atlassian.net/browse/DHIS2-13321): Data Integrity - add type of details objects to report**  
Components: _[API] Data administration_

**[DHIS2-12643](https://dhis2.atlassian.net/browse/DHIS2-12643): Server-side translations for data integrity checks**  
Components: _[API] Data administration_

**[DHIS2-12852](https://dhis2.atlassian.net/browse/DHIS2-12852): Allow manual execution of system jobs**  
Components: _[API] Job scheduler_

**[DHIS2-13035](https://dhis2.atlassian.net/browse/DHIS2-13035): Allow selective notifications to replace last message instead of append**  
Components: _[API] Job scheduler_

**[DHIS2-12992](https://dhis2.atlassian.net/browse/DHIS2-12992): In memory notifier pool size cap logic broken**  
Components: _[API] Job scheduler_

**[DHIS2-13100](https://dhis2.atlassian.net/browse/DHIS2-13100): Show Job Progress Tracking in Logs**  
Components: _[API] Job scheduler_

**[DHIS2-13313](https://dhis2.atlassian.net/browse/DHIS2-13313): GeoJSON unpublish (clear)**  
Components: _[API] Metadata import-export_

**[DHIS2-11867](https://dhis2.atlassian.net/browse/DHIS2-11867): Shorthand API notation for attributes and values for JSON and CSV**  
Components: _[API] Metadata import-export_

**[DHIS2-5537](https://dhis2.atlassian.net/browse/DHIS2-5537): Validation of metadata attribute values on import**  
Components: _[API] Metadata import-export_

**[DHIS2-13158](https://dhis2.atlassian.net/browse/DHIS2-13158): Object filter attribute and value shorthand notation**  
Components: _[API] Metadata model_

**[DHIS2-13323](https://dhis2.atlassian.net/browse/DHIS2-13323): Render GeoJSON attributes as plain JSON in metadata API**  
Components: _[API] Metadata model_

**[DHIS2-13421](https://dhis2.atlassian.net/browse/DHIS2-13421): api/audit/trackedEntityDataValue: add OrgUnit, period, programStage filters**  
Components: _[API] Other_

**[DHIS2-13192](https://dhis2.atlassian.net/browse/DHIS2-13192): Log patterns should have new line at the end**  
Components: _[API] Other_

**[DHIS2-11871](https://dhis2.atlassian.net/browse/DHIS2-11871): Support JSON payload for programIndicators/filter/description**  
Components: _[API] Other_

**[DHIS2-13376](https://dhis2.atlassian.net/browse/DHIS2-13376): Support for additional hotfix version identifier**  
Components: _[API] Other_

**[DHIS2-13370](https://dhis2.atlassian.net/browse/DHIS2-13370): Data statistics endpoint to return display name**  
Components: _[API] Other_

**[DHIS2-13461](https://dhis2.atlassian.net/browse/DHIS2-13461): TrackedEntityDataValue audit ou mode parameter**  
Components: _[API] Other_

**[DHIS2-12364](https://dhis2.atlassian.net/browse/DHIS2-12364): Implement d2:extractDataMatrixValue(key, dataMatrixText) in Java rule engine**  
Components: _[API] Program rules_

**[DHIS2-12537](https://dhis2.atlassian.net/browse/DHIS2-12537): Update logging level from info to debug**  
Components: _[API] Program rules_

**[DHIS2-13659](https://dhis2.atlassian.net/browse/DHIS2-13659): Generate TOTP 2FA codes in the backend**  
Components: _[API] Security_

**[DHIS2-13442](https://dhis2.atlassian.net/browse/DHIS2-13442): Reset MFA secret when MFA is disabled then enabled**  
Components: _[API] Security_, _[API] User_

**[DHIS2-13206](https://dhis2.atlassian.net/browse/DHIS2-13206): Allow any page to fail during data synchronization**  
Components: _[API] Synchronization_

**[DHIS2-12249](https://dhis2.atlassian.net/browse/DHIS2-12249): Relationship type attributes for display**  
Components: _[API] Tracker_

**[DHIS2-13300](https://dhis2.atlassian.net/browse/DHIS2-13300): Add new property "referral" to RelationshipType**  
Components: _[API] Tracker_

**[DHIS2-10679](https://dhis2.atlassian.net/browse/DHIS2-10679): Add configurable max records limit for the tracker query endpoint**  
Components: _[API] Tracker_

**[DHIS2-13455](https://dhis2.atlassian.net/browse/DHIS2-13455): Refactor Event SQL to use named parameters - Complex bindings**  
Components: _[API] Tracker_

**[DHIS2-13468](https://dhis2.atlassian.net/browse/DHIS2-13468): Program rule on import fails for future event dates**  
Components: _[API] Tracker_

**[DHIS2-13443](https://dhis2.atlassian.net/browse/DHIS2-13443): Performance optimisation when fetching events from Event Programs**  
Components: _[API] Tracker_

**[DHIS2-11423](https://dhis2.atlassian.net/browse/DHIS2-11423): Add entity for assigned user information in events**  
Components: _[API] Tracker_

**[DHIS2-13042](https://dhis2.atlassian.net/browse/DHIS2-13042): Implement Bi-Directional reference for fileResource**  
Components: _[API] Tracker_

**[DHIS2-13306](https://dhis2.atlassian.net/browse/DHIS2-13306): Refactor Event SQL to use named parameters - Simple bindings**  
Components: _[API] Tracker_

**[DHIS2-12043](https://dhis2.atlassian.net/browse/DHIS2-12043): New API for retrieving trigram index summary and suggestions**  
Components: _[API] Tracker_

**[DHIS2-11320](https://dhis2.atlassian.net/browse/DHIS2-11320): Invalidate relationships instead of deleting them in deletion handler**  
Components: _[API] Tracker_

**[DHIS2-12048](https://dhis2.atlassian.net/browse/DHIS2-12048): API that lists candidates for indexable attributes**  
Components: _[API] Tracker_

**[DHIS2-12723](https://dhis2.atlassian.net/browse/DHIS2-12723): Check username not already exists and make it immutable**  
Components: _[API] User_

**[DHIS2-12586](https://dhis2.atlassian.net/browse/DHIS2-12586): Restrict UserLookup endpoint to only give visibility to "capture" org units**  
Components: _[API] User_

**[DHIS2-13441](https://dhis2.atlassian.net/browse/DHIS2-13441): Disable MFA for user account**  
Components: _[API] User_, _[App] User_

**[DHIS2-13426](https://dhis2.atlassian.net/browse/DHIS2-13426): Use error codes for user invite error responses**  
Components: _[API] User_

**[DHIS2-12246](https://dhis2.atlassian.net/browse/DHIS2-12246): Add missing "built in variables" for tracker program rules execution**  
Components: _[App] Capture_

**[DHIS2-13439](https://dhis2.atlassian.net/browse/DHIS2-13439): Use "Description of due date" in Schedule tab**  
Components: _[App] Capture_

**[DHIS2-12627](https://dhis2.atlassian.net/browse/DHIS2-12627): TEI Context in page 4b.**  
Components: _[App] Capture_

**[DHIS2-12140](https://dhis2.atlassian.net/browse/DHIS2-12140): Load TEI lists only if displayFrontPageList program config is true**  
Components: _[App] Capture_

**[DHIS2-12372](https://dhis2.atlassian.net/browse/DHIS2-12372): Relationship Widgets: View linked records**  
Components: _[App] Capture_

**[DHIS2-12377](https://dhis2.atlassian.net/browse/DHIS2-12377): Event's relationships Widget: View mode - display relationships**  
Components: _[App] Capture_

**[DHIS2-12362](https://dhis2.atlassian.net/browse/DHIS2-12362): TEI's relationships Widget: View mode - display relationships**  
Components: _[App] Capture_

**[DHIS2-13612](https://dhis2.atlassian.net/browse/DHIS2-13612): Stage tooltip: use UI library, hide when no description**  
Components: _[App] Capture_

**[DHIS2-13472](https://dhis2.atlassian.net/browse/DHIS2-13472): Deselecting reg. unit should expand tree to previous reg. unit**  
Components: _[App] Capture_

**[DHIS2-13253](https://dhis2.atlassian.net/browse/DHIS2-13253): Edit enrollment event page: eventId should be the only required query param**  
Components: _[App] Capture_

**[DHIS2-13279](https://dhis2.atlassian.net/browse/DHIS2-13279): Register a user on search fallback**  
Components: _[App] Capture_

**[DHIS2-12611](https://dhis2.atlassian.net/browse/DHIS2-12611): Implement "Open data entry form after enrollment" in Capture app**  
Components: _[App] Capture_

**[DHIS2-13308](https://dhis2.atlassian.net/browse/DHIS2-13308): Go directly to Edit mode for scheduled events**  
Components: _[App] Capture_

**[DHIS2-13285](https://dhis2.atlassian.net/browse/DHIS2-13285): Working lists: Preserve view settings when changing org unit**  
Components: _[App] Capture_

**[DHIS2-12678](https://dhis2.atlassian.net/browse/DHIS2-12678): Stay on same page when executing "Search in all programs" (Manual fallback)**  
Components: _[App] Capture_

**[DHIS2-13049](https://dhis2.atlassian.net/browse/DHIS2-13049): Use new selector in Main page**  
Components: _[App] Capture_

**[DHIS2-13047](https://dhis2.atlassian.net/browse/DHIS2-13047): Use new selector in View single event page**  
Components: _[App] Capture_

**[DHIS2-13048](https://dhis2.atlassian.net/browse/DHIS2-13048): Use new selector in Search page**  
Components: _[App] Capture_

**[DHIS2-12974](https://dhis2.atlassian.net/browse/DHIS2-12974): Implement UI for deleting events in Capture app**  
Components: _[App] Capture_

**[DHIS2-12675](https://dhis2.atlassian.net/browse/DHIS2-12675): Working lists: Support custom relative period filters**  
Components: _[App] Capture_

**[DHIS2-12885](https://dhis2.atlassian.net/browse/DHIS2-12885): Opt-in button for tracker in Capture**  
Components: _[App] Capture_

**[DHIS2-12363](https://dhis2.atlassian.net/browse/DHIS2-12363): Implement d2:extractDataMatrixValue(key, dataMatrixText) in Capture and Tracker Capture**  
Components: _[App] Capture_

**[DHIS2-12141](https://dhis2.atlassian.net/browse/DHIS2-12141): Add functionality for enrolling existing TEI for page 4.b**  
Components: _[App] Capture_

**[DHIS2-12514](https://dhis2.atlassian.net/browse/DHIS2-12514): Implement "Add new" for Completed enrollments in Enrollment Widget**  
Components: _[App] Capture_

**[DHIS2-12137](https://dhis2.atlassian.net/browse/DHIS2-12137): Translation of ProgramRuleAction content in TrackerCapture App**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-13298](https://dhis2.atlassian.net/browse/DHIS2-13298): Add color palettes to key reporting apps**  
Components: _[App] Data visualizer_

**[DHIS2-12490](https://dhis2.atlassian.net/browse/DHIS2-12490): [J] Program indicators filter operands in event reports**  
Components: _[App] Event reports_

**[DHIS2-13264](https://dhis2.atlassian.net/browse/DHIS2-13264): Add "legend" element into EventVisualization**  
Components: _[App] Event visualizer_

**[DHIS2-7171](https://dhis2.atlassian.net/browse/DHIS2-7171): Improved org unit coordinate importer using GeoJSON**  
Components: _[App] Import-export_, _[App] Maps_

**[DHIS2-12781](https://dhis2.atlassian.net/browse/DHIS2-12781): Documentation update for Line Listing app**  
Components: _[App] Line Listing_

**[DHIS2-4026](https://dhis2.atlassian.net/browse/DHIS2-4026): Add Support for CategoryOption Group Set as Dimensions in Line Listing**  
Components: _[App] Line Listing_

**[DHIS2-1897](https://dhis2.atlassian.net/browse/DHIS2-1897): Support for showing TEIs without any event**  
Components: _[App] Line Listing_

**[DHIS2-12157](https://dhis2.atlassian.net/browse/DHIS2-12157): Maintenance app Update for adding ValueType in ProgramRuleVariable**  
Components: _[App] Maintenance_

**[DHIS2-13095](https://dhis2.atlassian.net/browse/DHIS2-13095): Add "Only include completed events" to map thematic layer**  
Components: _[App] Maps_

**[DHIS2-13311](https://dhis2.atlassian.net/browse/DHIS2-13311): Show GeoJSON attribute description**  
Components: _[App] Maps_

**[DHIS2-12155](https://dhis2.atlassian.net/browse/DHIS2-12155): Allow the default basemap to be changed for a DHIS2 instance**  
Components: _[App] Maps_

**[DHIS2-12521](https://dhis2.atlassian.net/browse/DHIS2-12521): Add 500k and 1m records as options under Systems setting for reports and SQL Views**  
Components: _[App] Settings_

**[DHIS2-12056](https://dhis2.atlassian.net/browse/DHIS2-12056): Refactor summary pages**  
Components: _[App] User_

**[DHIS2-13083](https://dhis2.atlassian.net/browse/DHIS2-13083): Include username requirements in help text**  
Components: _[App] User_

**[DHIS2-10524](https://dhis2.atlassian.net/browse/DHIS2-10524):  Adding users to a user-group when dealing with high volumes of users**  
Components: _[App] User_

**[DHIS2-12791](https://dhis2.atlassian.net/browse/DHIS2-12791): Only show "reset password" action if an email can be sent**  
Components: _[App] User_

**[DHIS2-12792](https://dhis2.atlassian.net/browse/DHIS2-12792): Show title at top of replicate user form**  
Components: _[App] User_

## Bugs

**[DHIS2-13694](https://dhis2.atlassian.net/browse/DHIS2-13694): [J,K] Event Date filter not respecting individual dates selection**  
Components: _[API] Analytics_

**[DHIS2-13478](https://dhis2.atlassian.net/browse/DHIS2-13478): No data shows after continuous/delta analytics run (lastyears=0)**  
Components: _[API] Analytics_

**[DHIS2-13638](https://dhis2.atlassian.net/browse/DHIS2-13638): [J]Org. Unit Group Sets are considered as filters in events/enrollments queries**  
Components: _[API] Analytics_

**[DHIS2-13514](https://dhis2.atlassian.net/browse/DHIS2-13514): [J, K] Analytics Continous Job Fails for New Program**  
Components: _[API] Analytics_

**[DHIS2-13173](https://dhis2.atlassian.net/browse/DHIS2-13173): [F][E] Param displayProperty:SHORTNAME doesn't return short name**  
Components: _[API] Analytics_

**[DHIS2-13286](https://dhis2.atlassian.net/browse/DHIS2-13286): [I, J, K] OUGS are sorted by id instead of display name in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-8184](https://dhis2.atlassian.net/browse/DHIS2-8184): [I] Remove decimals in report rate summary for integer only values**  
Components: _[API] Analytics_

**[DHIS2-13550](https://dhis2.atlassian.net/browse/DHIS2-13550): Running analytics deletes user defined SQL views**  
Components: _[API] Analytics_, _[App] Maintenance_

**[DHIS2-13130](https://dhis2.atlassian.net/browse/DHIS2-13130): [E] Dynamic dimensions should be sortable in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-13247](https://dhis2.atlassian.net/browse/DHIS2-13247): [E]Investigate and document "recommended dimensions" feature**  
Components: _[API] Analytics_

**[DHIS2-12366](https://dhis2.atlassian.net/browse/DHIS2-12366): api/system/tasks/ANALYTICS_TABLE/uid not working**  
Components: _[API] Analytics_, _[API] Job scheduler_

**[DHIS2-12367](https://dhis2.atlassian.net/browse/DHIS2-12367): Indicate when a job has collided with another job**  
Components: _[API] Analytics_, _[API] Job scheduler_

**[DHIS2-13633](https://dhis2.atlassian.net/browse/DHIS2-13633): [I] Data Elements of type Percentage returns 0.0 for null values**  
Components: _[API] Analytics_

**[DHIS2-13713](https://dhis2.atlassian.net/browse/DHIS2-13713): [J] Schedule date column not displaying custom label**  
Components: _[API] Analytics_

**[DHIS2-13721](https://dhis2.atlassian.net/browse/DHIS2-13721): [J,K] Incorrect column names in analytics events and enrollments response**  
Components: _[API] Analytics_

**[DHIS2-13573](https://dhis2.atlassian.net/browse/DHIS2-13573): [I] NullPointer Exception in /query/events**  
Components: _[API] Analytics_

**[DHIS2-12888](https://dhis2.atlassian.net/browse/DHIS2-12888): [C] Wrong operator used for nested conditions**  
Components: _[API] Analytics_

**[DHIS2-13703](https://dhis2.atlassian.net/browse/DHIS2-13703): [J] Events analytics: sorting by "scheduleddate" fails**  
Components: _[API] Analytics_

**[DHIS2-13429](https://dhis2.atlassian.net/browse/DHIS2-13429): All Previous Analytics data removed after partial "lastyears=2" run**  
Components: _[API] Analytics_

**[DHIS2-13479](https://dhis2.atlassian.net/browse/DHIS2-13479): Running full analytics does not remove continuous/delta table (analytics_0)**  
Components: _[API] Analytics_

**[DHIS2-13563](https://dhis2.atlassian.net/browse/DHIS2-13563): [I] Filter !EQ in analytics event query filters out null**  
Components: _[API] Analytics_

**[DHIS2-13538](https://dhis2.atlassian.net/browse/DHIS2-13538): [I] Metadata item duplication for OptionSets in events/analytics**  
Components: _[API] Analytics_

**[DHIS2-13558](https://dhis2.atlassian.net/browse/DHIS2-13558): [I] Event analytics table partitions not generated for future years**  
Components: _[API] Analytics_

**[DHIS2-13179](https://dhis2.atlassian.net/browse/DHIS2-13179): [E] Analytics request: some characters are ignored when using LIKE**  
Components: _[API] Analytics_

**[DHIS2-13211](https://dhis2.atlassian.net/browse/DHIS2-13211): [F] Metadata for start-end dates not provided in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-13085](https://dhis2.atlassian.net/browse/DHIS2-13085): [D]Disk space utilization for analytics temp tables spiking in 2.37**  
Components: _[API] Analytics_

**[DHIS2-13606](https://dhis2.atlassian.net/browse/DHIS2-13606): No events returned in event analytics query API if max limit set to unlimited**  
Components: _[API] Analytics_

**[DHIS2-12466](https://dhis2.atlassian.net/browse/DHIS2-12466): [F]Potential bug with analytics api when requesting event data from two programs that share a data element**  
Components: _[API] Analytics_

**[DHIS2-13212](https://dhis2.atlassian.net/browse/DHIS2-13212): [E] Header names don't reflect users' custom time dimension names**  
Components: _[API] Analytics_

**[DHIS2-13136](https://dhis2.atlassian.net/browse/DHIS2-13136): [G,F] Analytics headers to apply user defined names for time dimensions**  
Components: _[API] Analytics_

**[DHIS2-13588](https://dhis2.atlassian.net/browse/DHIS2-13588): [I] NE:NV filter in events query returns null values**  
Components: _[API] Analytics_

**[DHIS2-13487](https://dhis2.atlassian.net/browse/DHIS2-13487): [H] Program Indicator fails to parse timestamps**  
Components: _[API] Analytics_

**[DHIS2-13460](https://dhis2.atlassian.net/browse/DHIS2-13460): [H,I] Visualization download should remove redundant "0" digits for Data Elements**  
Components: _[API] Analytics_

**[DHIS2-12581](https://dhis2.atlassian.net/browse/DHIS2-12581): [B] Error on analytics run with future/past years**  
Components: _[API] Analytics_

**[DHIS2-13284](https://dhis2.atlassian.net/browse/DHIS2-13284): [F] No value operator NV not supported for DATETIME elements**  
Components: _[API] Analytics_

**[DHIS2-12989](https://dhis2.atlassian.net/browse/DHIS2-12989): [D]"last value" aggregation type is broken in later versions for data elements and program indicators in the analytics API**  
Components: _[API] Analytics_

**[DHIS2-13151](https://dhis2.atlassian.net/browse/DHIS2-13151): [E] Dimensions can't be sorted by shortName**  
Components: _[API] Analytics_

**[DHIS2-13164](https://dhis2.atlassian.net/browse/DHIS2-13164): [F] NV value in filter throws error**  
Components: _[API] Analytics_

**[DHIS2-12979](https://dhis2.atlassian.net/browse/DHIS2-12979): [E]Data items with null value give incorrect order of repeatable events in line lists**  
Components: _[API] Analytics_

**[DHIS2-13119](https://dhis2.atlassian.net/browse/DHIS2-13119): [E] Make "legacy" flag always false, for POST/PUT on "/eventVisualizations"**  
Components: _[API] Analytics_

**[DHIS2-13098](https://dhis2.atlassian.net/browse/DHIS2-13098): [D] Name not respected for OptionSet in Excel export in /enrollments/query**  
Components: _[API] Analytics_

**[DHIS2-13140](https://dhis2.atlassian.net/browse/DHIS2-13140): [E] Options not returned when results rows are empty**  
Components: _[API] Analytics_

**[DHIS2-12824](https://dhis2.atlassian.net/browse/DHIS2-12824): 50% Of aggregation types don't work**  
**[DHIS2-13002](https://dhis2.atlassian.net/browse/DHIS2-13002): [D] Fix bug in Visualization migration**  
Components: _[API] Analytics_

**[DHIS2-12985](https://dhis2.atlassian.net/browse/DHIS2-12985): [C]Conditions: time with "before" conditions returns values matching "before or including"**  
Components: _[API] Analytics_

**[DHIS2-13114](https://dhis2.atlassian.net/browse/DHIS2-13114): [D] Datetime dimension with filter throws 409 error**  
Components: _[API] Analytics_

**[DHIS2-13099](https://dhis2.atlassian.net/browse/DHIS2-13099): [D] Unhandled exception in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-13141](https://dhis2.atlassian.net/browse/DHIS2-13141): [E] NULL values from numeric Program Indicators are converted to 0**  
Components: _[API] Analytics_

**[DHIS2-13086](https://dhis2.atlassian.net/browse/DHIS2-13086): [E] Aggregate event analytics throws a 500**  
Components: _[API] Analytics_

**[DHIS2-12787](https://dhis2.atlassian.net/browse/DHIS2-12787): [C] NULL values from numeric items are converted to 0 in analytics endpoints**  
Components: _[API] Analytics_

**[DHIS2-12959](https://dhis2.atlassian.net/browse/DHIS2-12959): [C] Analytics dimensions endpoint does not return optionSet for attributes**  
Components: _[API] Analytics_

**[DHIS2-12571](https://dhis2.atlassian.net/browse/DHIS2-12571): [C] Event report crashes when trying to download**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-12807](https://dhis2.atlassian.net/browse/DHIS2-12807): [B] Analytics Export Fails When a New Column is Added**  
Components: _[API] Analytics_

**[DHIS2-12965](https://dhis2.atlassian.net/browse/DHIS2-12965): [D]/analytics/enrollments/query counts the rows when totalPages=false**  
Components: _[API] Analytics_

**[DHIS2-12976](https://dhis2.atlassian.net/browse/DHIS2-12976): [C]Missing metadata for weeks in the analytics API**  
Components: _[API] Analytics_

**[DHIS2-12839](https://dhis2.atlassian.net/browse/DHIS2-12839): [C]Nested data element conditions should be AND in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-12761](https://dhis2.atlassian.net/browse/DHIS2-12761): [B]Sorting by stageId.elementId does not work in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-12895](https://dhis2.atlassian.net/browse/DHIS2-12895): [C] Wrong name for lastPage element**  
Components: _[API] Analytics_

**[DHIS2-12891](https://dhis2.atlassian.net/browse/DHIS2-12891): [C] EventVisualization is using the wrong name for last updated date**  
Components: _[API] Analytics_

**[DHIS2-12836](https://dhis2.atlassian.net/browse/DHIS2-12836): Multiple minDate/MaxDate/aggregationTypes fail**  
Components: _[API] Analytics_

**[DHIS2-12832](https://dhis2.atlassian.net/browse/DHIS2-12832): [C] sorting by programstatus in enrollment analytics result in wrong query generated**  
Components: _[API] Analytics_

**[DHIS2-12922](https://dhis2.atlassian.net/browse/DHIS2-12922): /dhis-web-commons/menu/getModules.action returns status 500**  
Components: _[API] App management_, _[API] Other_

**[DHIS2-12741](https://dhis2.atlassian.net/browse/DHIS2-12741): Data integrity does not work**  
Components: _[API] Data administration_, _[App] Data administration_

**[DHIS2-13125](https://dhis2.atlassian.net/browse/DHIS2-13125): Cancelled analytics jobs are not marked as completed in /system/tasks**  
Components: _[API] Data administration_, _[API] Job scheduler_

**[DHIS2-12884](https://dhis2.atlassian.net/browse/DHIS2-12884): Flyway migration V2_38_19 migth fail if ProgramRuleVariable is misconfigured**  
Components: _[API] Database migration_

**[DHIS2-13193](https://dhis2.atlassian.net/browse/DHIS2-13193): Support use of [] and () interchangeably in DataStore fields expansion**  
Components: _[API] Data store_

**[DHIS2-12748](https://dhis2.atlassian.net/browse/DHIS2-12748): Data store: numeric sort order sometimes returns 500**  
Components: _[API] Data store_

**[DHIS2-12602](https://dhis2.atlassian.net/browse/DHIS2-12602): Throwing Namespace not found error with 404 status code for dataStore api**  
Components: _[API] Data store_

**[DHIS2-12691](https://dhis2.atlassian.net/browse/DHIS2-12691): Data element group filter for data value sets API**  
Components: _[API] Data value set_

**[DHIS2-13693](https://dhis2.atlassian.net/browse/DHIS2-13693): [J] Filter !ILIKE, !LIKE in analytics event query filters out null**  
Components: _[API] Events_

**[DHIS2-13451](https://dhis2.atlassian.net/browse/DHIS2-13451): Event data value audits created for all data values on event update**  
Components: _[API] Events_

**[DHIS2-12853](https://dhis2.atlassian.net/browse/DHIS2-12853): Tracker data value history not available**  
Components: _[API] Events_, _[API] Tracker_

**[DHIS2-13360](https://dhis2.atlassian.net/browse/DHIS2-13360): DELETE events should update the lastUpdated property**  
Components: _[API] Events_

**[DHIS2-13452](https://dhis2.atlassian.net/browse/DHIS2-13452): Event data value audit represents value before modification**  
Components: _[API] Events_

**[DHIS2-12634](https://dhis2.atlassian.net/browse/DHIS2-12634): Event api missing dataValues when fields parameter is empty**  
Components: _[API] Events_

**[DHIS2-9062](https://dhis2.atlassian.net/browse/DHIS2-9062): V(orgunit_code) and d2:inOrgUnitGroup() does not work**  
Components: _[API] Events_, _[App] Capture_

**[DHIS2-13163](https://dhis2.atlassian.net/browse/DHIS2-13163): Disable built-in logging customization when given logging config by user**  
Components: _[API] Frameworks and libraries_

**[DHIS2-12986](https://dhis2.atlassian.net/browse/DHIS2-12986): Fix logging exception on startup**  
Components: _[API] Frameworks and libraries_

**[DHIS2-12094](https://dhis2.atlassian.net/browse/DHIS2-12094): [C] Newly created Continuous Analytics Job fails**  
Components: _[API] Job scheduler_

**[DHIS2-13489](https://dhis2.atlassian.net/browse/DHIS2-13489): Job Progress Tracking: Process status should be final**  
Components: _[API] Job scheduler_

**[DHIS2-13030](https://dhis2.atlassian.net/browse/DHIS2-13030): Tracker sync fails because called service can't handle superuser execution (NPE)**  
Components: _[API] Job scheduler_

**[DHIS2-13201](https://dhis2.atlassian.net/browse/DHIS2-13201): Tracker sync jobs get cancelled on first import error**  
Components: _[API] Job scheduler_

**[DHIS2-9768](https://dhis2.atlassian.net/browse/DHIS2-9768): Scheduler: Unable to specify scheduled job ending on Sunday**  
Components: _[API] Job scheduler_

**[DHIS2-13474](https://dhis2.atlassian.net/browse/DHIS2-13474): Analytics table UI in progress after crash**  
Components: _[API] Job scheduler_, _[App] Data administration_

**[DHIS2-12217](https://dhis2.atlassian.net/browse/DHIS2-12217): A problem with messaging inside Tracker capture app**  
Components: _[API] Messaging_, _[API] Tracker_

**[DHIS2-13709](https://dhis2.atlassian.net/browse/DHIS2-13709): Get org units at level and boundary is broken**  
Components: _[API] Metadata import-export_

**[DHIS2-13129](https://dhis2.atlassian.net/browse/DHIS2-13129): Uncompressed format data export file is downloaded without the file extension**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-13569](https://dhis2.atlassian.net/browse/DHIS2-13569): Error when importing metadata with existing attribute in payload**  
Components: _[API] Metadata import-export_

**[DHIS2-12829](https://dhis2.atlassian.net/browse/DHIS2-12829): [C] Fix typo in import error message**  
Components: _[API] Metadata import-export_

**[DHIS2-8381](https://dhis2.atlassian.net/browse/DHIS2-8381): Cannot mark greyed field if categoryCombo is default**  
Components: _[API] Metadata import-export_, _[App] Maintenance_

**[DHIS2-12831](https://dhis2.atlassian.net/browse/DHIS2-12831): Metadata import corrupts option sort order**  
Components: _[API] Metadata import-export_

**[DHIS2-6183](https://dhis2.atlassian.net/browse/DHIS2-6183): Metadata dependency export for programs does not capture option groups**  
Components: _[API] Metadata import-export_, _[App] Import-export_, _[App] Maintenance_

**[DHIS2-10027](https://dhis2.atlassian.net/browse/DHIS2-10027): Phone number datatype accepts alphanumeric characters of any length**  
Components: _[API] Metadata import-export_

**[DHIS2-13178](https://dhis2.atlassian.net/browse/DHIS2-13178): Error when removing expiry days set on program**  
Components: _[API] Metadata import-export_

**[DHIS2-7803](https://dhis2.atlassian.net/browse/DHIS2-7803): Import-export of metadata fails**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-7864](https://dhis2.atlassian.net/browse/DHIS2-7864): Inconsistent error report in metadata endpoint**  
Components: _[API] Metadata import-export_

**[DHIS2-13056](https://dhis2.atlassian.net/browse/DHIS2-13056): Program org unit associations endpoint vulnerability**  
Components: _[API] Metadata import-export_

**[DHIS2-11435](https://dhis2.atlassian.net/browse/DHIS2-11435): Null option sort_order causes all apps to break**  
Components: _[API] Metadata import-export_

**[DHIS2-13277](https://dhis2.atlassian.net/browse/DHIS2-13277): Option Groups and Program Sections give errors when exporting/importing Program**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-12828](https://dhis2.atlassian.net/browse/DHIS2-12828): Null options are returned when there are gaps in sort order**  
Components: _[API] Metadata import-export_


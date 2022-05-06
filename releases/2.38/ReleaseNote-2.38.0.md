# Patch 2.38.0 Release Note

- [Patch 2.38.0 Release Note](#patch-2380-release-note)
  - [Features](#features)
  - [Bugs](#bugs)

## Features

**[DHIS2-13115](https://jira.dhis2.org/browse/DHIS2-13115): [D] Add support for dimensions of type "datetime" to analytics endpoints**  
Components: _[API] Analytics_

**[DHIS2-12811](https://jira.dhis2.org/browse/DHIS2-12811): [B] Prefixed dimension ids in metadata response in event/enrollment analytics api**  
Components: _[API] Analytics_

**[DHIS2-12312](https://jira.dhis2.org/browse/DHIS2-12312): [D][Testing] Selection of repeatable stages in analytics**  
Components: _[API] Analytics_

**[DHIS2-12810](https://jira.dhis2.org/browse/DHIS2-12810): [A]As user I would like to have query time estimation feedback**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-12814](https://jira.dhis2.org/browse/DHIS2-12814): (ExpressionParser) Selection of repeatable stages**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-11407](https://jira.dhis2.org/browse/DHIS2-11407): lastUpdated field in Event Analytics**  
Components: _[API] Analytics_

**[DHIS2-12313](https://jira.dhis2.org/browse/DHIS2-12313): New endpoint for enrollment data dimensions**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-12317](https://jira.dhis2.org/browse/DHIS2-12317): Save repeatable events config with event visualization**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-12318](https://jira.dhis2.org/browse/DHIS2-12318): Support dimension filter operators in event analytics**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-12323](https://jira.dhis2.org/browse/DHIS2-12323): [A] Support time dimensions with start/end dates in event analytics**  
Components: _[API] Analytics_, _[App] Event reports_, _[App] Line Listing_

**[DHIS2-12311](https://jira.dhis2.org/browse/DHIS2-12311): Support time dimensions with start/end dates in EventVisualization**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-3293](https://jira.dhis2.org/browse/DHIS2-3293): Range set for Program indicators**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-12310](https://jira.dhis2.org/browse/DHIS2-12310): New endpoint for event data dimensions**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-11775](https://jira.dhis2.org/browse/DHIS2-11775): Add storedby and lastupdated to event reporting for enrollments**  
Components: _[API] Analytics_

**[DHIS2-12072](https://jira.dhis2.org/browse/DHIS2-12072): Flush analytics cache after analytics update**  
Components: _[API] Analytics_

**[DHIS2-12662](https://jira.dhis2.org/browse/DHIS2-12662): [B] Sort on elements across stages in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-12605](https://jira.dhis2.org/browse/DHIS2-12605): [A]As a user in the new role (granted to execute explain) I am granted to use "explain" entry point**  
Components: _[API] Analytics_

**[DHIS2-12645](https://jira.dhis2.org/browse/DHIS2-12645): [B] Make new eventReport line list interpretations available on eventVisualization**  
Components: _[API] Analytics_

**[DHIS2-4530](https://jira.dhis2.org/browse/DHIS2-4530): Ability to define the aggregation operator override for a data element in indicator expressions**  
Components: _[API] Analytics_

**[DHIS2-9831](https://jira.dhis2.org/browse/DHIS2-9831): Indicator expression test for period start/end dates**  
Components: _[API] Analytics_

**[DHIS2-11170](https://jira.dhis2.org/browse/DHIS2-11170): [B] Sort the event report table by any of the standard fields in the analytics/events/query API payload**  
Components: _[API] Analytics_, _[API] Events_

**[DHIS2-12314](https://jira.dhis2.org/browse/DHIS2-12314): Support headers param in event analytics**  
Components: _[API] Analytics_

**[DHIS2-12315](https://jira.dhis2.org/browse/DHIS2-12315): Option set and value type as part of the dimension object in EventVisualization**  
Components: _[API] Analytics_

**[DHIS2-12482](https://jira.dhis2.org/browse/DHIS2-12482): [B] Support created by and last updated by display names in event analytics**  
Components: _[API] Analytics_

**[DHIS2-12569](https://jira.dhis2.org/browse/DHIS2-12569): return data element id as PROGRAM_STAGE_ID.DATA_ELEMENT_ID in events dimension endpoint**  
Components: _[API] Analytics_

**[DHIS2-12607](https://jira.dhis2.org/browse/DHIS2-12607): As a FE Developer I would like to use as parameter separator comma character only**  
Components: _[API] Analytics_

**[DHIS2-12695](https://jira.dhis2.org/browse/DHIS2-12695): RepeatableStages in Metadata**  
Components: _[API] Analytics_

**[DHIS2-12809](https://jira.dhis2.org/browse/DHIS2-12809): Save created by and last updated by as dimensions/filters in EventVisualization**  
Components: _[API] Analytics_

**[DHIS2-12813](https://jira.dhis2.org/browse/DHIS2-12813): Return stage id in enrollment analytics response header**  
Components: _[API] Analytics_

**[DHIS2-12647](https://jira.dhis2.org/browse/DHIS2-12647): [B] Mark old event reports as new after PUT**  
**[DHIS2-12666](https://jira.dhis2.org/browse/DHIS2-12666): [B] Add support for both yyyyMMdd and yyyy-MM-dd for analytics dates (both in period dimension and custom time dimensions)**  
Components: _[API] Analytics_

**[DHIS2-12609](https://jira.dhis2.org/browse/DHIS2-12609): [A] Add a programStageId request parameter for enrollments dimension query endpoint**  
Components: _[API] Analytics_

**[DHIS2-12578](https://jira.dhis2.org/browse/DHIS2-12578): Add support for sortable fields in event/enrollment dimension endpoints**  
Components: _[API] Analytics_

**[DHIS2-12498](https://jira.dhis2.org/browse/DHIS2-12498): System setting for including zero values in analytics tables**  
Components: _[API] Analytics_

**[DHIS2-12389](https://jira.dhis2.org/browse/DHIS2-12389): Program/event status in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-12493](https://jira.dhis2.org/browse/DHIS2-12493): Return paging fields in the response for dimensions endpoint under a pager object**  
Components: _[API] Analytics_

**[DHIS2-11085](https://jira.dhis2.org/browse/DHIS2-11085): Events query (org units): use IN instead of EQUALS operator in SQL**  
Components: _[API] Analytics_

**[DHIS2-10907](https://jira.dhis2.org/browse/DHIS2-10907): Output identifier scheme support for event aggregate analytics**  
Components: _[API] Analytics_

**[DHIS2-11786](https://jira.dhis2.org/browse/DHIS2-11786): Add unit test for InQueryFilter**  
Components: _[API] Analytics_

**[DHIS2-12639](https://jira.dhis2.org/browse/DHIS2-12639): Integrity check that category combo is unique**  
Components: _[API] Data administration_

**[DHIS2-12219](https://jira.dhis2.org/browse/DHIS2-12219): Integrity check for exactly one default category option combo**  
Components: _[API] Data administration_

**[DHIS2-12599](https://jira.dhis2.org/browse/DHIS2-12599): Cached Data Integrity Checks**  
Components: _[API] Data administration_

**[DHIS2-12214](https://jira.dhis2.org/browse/DHIS2-12214): Configuration Based Data Integrity Checks**  
Components: _[API] Data administration_, _[App] Data quality_

**[DHIS2-11281](https://jira.dhis2.org/browse/DHIS2-11281): Org unit merge API**  
Components: _[API] Data administration_

**[DHIS2-6242](https://jira.dhis2.org/browse/DHIS2-6242): Use short name for names in resource table column names**  
Components: _[API] Data administration_

**[DHIS2-5075](https://jira.dhis2.org/browse/DHIS2-5075): Add last updated user and timestamp to data approval record**  
Components: _[API] Data approval_

**[DHIS2-12154](https://jira.dhis2.org/browse/DHIS2-12154): Data store field filtering**  
Components: _[API] Data store_

**[DHIS2-12329](https://jira.dhis2.org/browse/DHIS2-12329): Data store paging of key/values in namespace**  
Components: _[API] Data store_

**[DHIS2-12331](https://jira.dhis2.org/browse/DHIS2-12331): Data store value/object filtering**  
Components: _[API] Data store_

**[DHIS2-12330](https://jira.dhis2.org/browse/DHIS2-12330): Data store sort order**  
Components: _[API] Data store_

**[DHIS2-12689](https://jira.dhis2.org/browse/DHIS2-12689): Single data value endpoint with JSON body**  
Components: _[API] Data value set_

**[DHIS2-9822](https://jira.dhis2.org/browse/DHIS2-9822): Input ID scheme for data value sets API**  
Components: _[API] Data value set_

**[DHIS2-4674](https://jira.dhis2.org/browse/DHIS2-4674): Locked data set message**  
Components: _[API] Data value set_, _[App] Data entry_

**[DHIS2-11943](https://jira.dhis2.org/browse/DHIS2-11943): Data Value (Set) Import/Export SPI**  
Components: _[API] Data value set_

**[DHIS2-11181](https://jira.dhis2.org/browse/DHIS2-11181): Support outputIdScheme for event analytics**  
Components: _[API] Events_

**[DHIS2-11234](https://jira.dhis2.org/browse/DHIS2-11234): Allow data entry in programs after attribute option end date**  
Components: _[API] Events_, _[API] Tracker_, _[App] Capture_, _[App] Maintenance_, _[App] Tracker capture_

**[DHIS2-13035](https://jira.dhis2.org/browse/DHIS2-13035): Allow selective notifications to replace last message instead of append**  
Components: _[API] Job scheduler_

**[DHIS2-12992](https://jira.dhis2.org/browse/DHIS2-12992): In memory notifier pool size cap logic broken**  
Components: _[API] Job scheduler_

**[DHIS2-12637](https://jira.dhis2.org/browse/DHIS2-12637): Include enum constants in job parameter description**  
Components: _[API] Job scheduler_

**[DHIS2-12852](https://jira.dhis2.org/browse/DHIS2-12852): Job Scheduling: Allow manual execution of system jobs**  
Components: _[API] Job scheduler_

**[DHIS2-12019](https://jira.dhis2.org/browse/DHIS2-12019): API call to list running jobs**  
Components: _[API] Job scheduler_

**[DHIS2-6314](https://jira.dhis2.org/browse/DHIS2-6314): Cancel analytics/resource table generation**  
Components: _[API] Job scheduler_

**[DHIS2-12049](https://jira.dhis2.org/browse/DHIS2-12049): Add Trigram Indexing Job**  
Components: _[API] Job scheduler_

**[DHIS2-11787](https://jira.dhis2.org/browse/DHIS2-11787): Bulk metadata sharing API**  
Components: _[API] Metadata import-export_, _[API] Metadata model_

**[DHIS2-12522](https://jira.dhis2.org/browse/DHIS2-12522): Data entry metadata endpoint**  
Components: _[API] Metadata import-export_

**[DHIS2-4828](https://jira.dhis2.org/browse/DHIS2-4828): Propose and accept metadata addition and removal**  
Components: _[API] Metadata model_

**[DHIS2-12249](https://jira.dhis2.org/browse/DHIS2-12249): Relationship type attributes for display**  
Components: _[API] Metadata model_

**[DHIS2-12376](https://jira.dhis2.org/browse/DHIS2-12376): Add data filters to trackedEntityInstanceFilter model**  
Components: _[API] Metadata model_

**[DHIS2-12328](https://jira.dhis2.org/browse/DHIS2-12328): GeoJSON value type for attributes**  
Components: _[API] Metadata model_

**[DHIS2-12492](https://jira.dhis2.org/browse/DHIS2-12492): Add (DataMatrix) render type for data elements**  
Components: _[API] Metadata model_

**[DHIS2-7317](https://jira.dhis2.org/browse/DHIS2-7317): Add short name to group set entites**  
Components: _[API] Metadata model_

**[DHIS2-12030](https://jira.dhis2.org/browse/DHIS2-12030): Gist API Filter Groups**  
Components: _[API] Metadata model_

**[DHIS2-12038](https://jira.dhis2.org/browse/DHIS2-12038): Gist API read non persistent bean properties from persistent fields**  
Components: _[API] Metadata model_

**[DHIS2-13192](https://jira.dhis2.org/browse/DHIS2-13192): Log patterns should have new line at the end**  
Components: _[API] Other_

**[DHIS2-6494](https://jira.dhis2.org/browse/DHIS2-6494): Logging of X-Request-ID**  
Components: _[API] Other_, _[API] Tracker_

**[DHIS2-12654](https://jira.dhis2.org/browse/DHIS2-12654): Make geoFeatures endpoint support GeoJSON org unit attributes**  
Components: _[API] Other_

**[DHIS2-12871](https://jira.dhis2.org/browse/DHIS2-12871): [C] Dashboard item search to return only eventVisualizations of type line list**  
Components: _[API] Other_

**[DHIS2-12734](https://jira.dhis2.org/browse/DHIS2-12734): Add orgUnitCoordinateField to MapView**  
Components: _[API] Other_

**[DHIS2-11748](https://jira.dhis2.org/browse/DHIS2-11748): Translation for EmbeddedObject**  
Components: _[API] Other_

**[DHIS2-11978](https://jira.dhis2.org/browse/DHIS2-11978): Update redesigned metadata icons**  
Components: _[API] Other_

**[DHIS2-11957](https://jira.dhis2.org/browse/DHIS2-11957): Describe keys and support aliases for keys**  
Components: _[API] Other_

**[DHIS2-12235](https://jira.dhis2.org/browse/DHIS2-12235): JsonTree Builder API**  
Components: _[API] Other_

**[DHIS2-12032](https://jira.dhis2.org/browse/DHIS2-12032): Enable context variable to define DHIS2_HOME**  
Components: _[API] Other_

**[DHIS2-12082](https://jira.dhis2.org/browse/DHIS2-12082): OrgUnit dataSet and program expression functions**  
Components: _[API] Predictors_, _[API] Validation_

**[DHIS2-9833](https://jira.dhis2.org/browse/DHIS2-9833): Optional predictor aggregation of lower-level organisation units**  
Components: _[API] Predictors_, _[App] Maintenance_

**[DHIS2-12092](https://jira.dhis2.org/browse/DHIS2-12092): Predictor group "Run Now" support**  
Components: _[API] Predictors_

**[DHIS2-12364](https://jira.dhis2.org/browse/DHIS2-12364): Implement d2:extractDataMatrixValue(key, dataMatrixText) in Java rule engine**  
Components: _[API] Program rules_

**[DHIS2-12296](https://jira.dhis2.org/browse/DHIS2-12296): Frontend rule-engine updates for ValueType parameter**  
Components: _[API] Program rules_

**[DHIS2-12537](https://jira.dhis2.org/browse/DHIS2-12537): Update logging level from info to debug**  
Components: _[API] Program rules_

**[DHIS2-12350](https://jira.dhis2.org/browse/DHIS2-12350): Add ValueType parameter in ProgramRuleVariables**  
Components: _[API] Program rules_

**[DHIS2-12295](https://jira.dhis2.org/browse/DHIS2-12295): Backend rule-engine updates for ValueType parameter**  
Components: _[API] Program rules_

**[DHIS2-10886](https://jira.dhis2.org/browse/DHIS2-10886): Disallow case-sensitive username on user creation**  
Components: _[API] Security_

**[DHIS2-9897](https://jira.dhis2.org/browse/DHIS2-9897): DHIS 2 version check service and upgrade notification system**  
Components: _[API] Security_

**[DHIS2-9100](https://jira.dhis2.org/browse/DHIS2-9100): Return account disabled information**  
Components: _[API] Security_

**[DHIS2-12516](https://jira.dhis2.org/browse/DHIS2-12516): Use JSON as default response format for system settings**  
Components: _[API] System configuration_

**[DHIS2-11341](https://jira.dhis2.org/browse/DHIS2-11341): Add field filtering to /system/info endpoint**  
Components: _[API] System configuration_

**[DHIS2-11993](https://jira.dhis2.org/browse/DHIS2-11993): Start page app to render a light-weight landing page**  
Components: _[API] System configuration_

**[DHIS2-12208](https://jira.dhis2.org/browse/DHIS2-12208): Unify on/off and true/false configuration switches**  
Components: _[API] System configuration_

**[DHIS2-12576](https://jira.dhis2.org/browse/DHIS2-12576): Add DataElement support to be used for notification web_hook**  
Components: _[API] Tracker_

**[DHIS2-12241](https://jira.dhis2.org/browse/DHIS2-12241): Optimize performance for ouMode event queries**  
Components: _[API] Tracker_

**[DHIS2-12574](https://jira.dhis2.org/browse/DHIS2-12574): Add the missing fields to trackedEntityInstanceFilterModel**  
Components: _[API] Tracker_

**[DHIS2-12255](https://jira.dhis2.org/browse/DHIS2-12255): Support API versioning in new tracker APIs**  
Components: _[API] Tracker_

**[DHIS2-12373](https://jira.dhis2.org/browse/DHIS2-12373): Implement sharing for trackedEntityInstanceFilters**  
Components: _[API] Tracker_

**[DHIS2-12185](https://jira.dhis2.org/browse/DHIS2-12185): Add new QueryOperator (search types) for more controlled querying/searching**  
Components: _[API] Tracker_

**[DHIS2-12050](https://jira.dhis2.org/browse/DHIS2-12050): Add extensions to support trigram indexing**  
Components: _[API] Tracker_

**[DHIS2-11892](https://jira.dhis2.org/browse/DHIS2-11892): [ Reserved Values ] - Improve data base access while generating random values**  
Components: _[API] Tracker_

**[DHIS2-10837](https://jira.dhis2.org/browse/DHIS2-10837): Add CSV support for Events in new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-12723](https://jira.dhis2.org/browse/DHIS2-12723): Check username not already exists and make it immutable**  
Components: _[API] User_

**[DHIS2-12720](https://jira.dhis2.org/browse/DHIS2-12720): Rename UserAuthorityGroup to UserRole**  
Components: _[API] User_

**[DHIS2-12577](https://jira.dhis2.org/browse/DHIS2-12577): Merge User/UserCredentials into one database table**  
Components: _[API] User_

**[DHIS2-11589](https://jira.dhis2.org/browse/DHIS2-11589): Reminder emails for user account disabling**  
Components: _[API] User_, _[App] User_

**[DHIS2-12363](https://jira.dhis2.org/browse/DHIS2-12363): Implement d2:extractDataMatrixValue(key, dataMatrixText) in Capture and Tracker Capture**  
Components: _[App] Capture_

**[DHIS2-11953](https://jira.dhis2.org/browse/DHIS2-11953): Quick actions in Enrollment Dashboard**  
Components: _[App] Capture_

**[DHIS2-5345](https://jira.dhis2.org/browse/DHIS2-5345): Display description/URL for data elements and tracked entity attributes in Capture app**  
Components: _[App] Capture_

**[DHIS2-12141](https://jira.dhis2.org/browse/DHIS2-12141): Add functionality for enrolling existing TEI for page 4.b**  
Components: _[App] Capture_

**[DHIS2-12514](https://jira.dhis2.org/browse/DHIS2-12514): Implement "Add new" for Completed enrollments in Enrollment Widget**  
Components: _[App] Capture_

**[DHIS2-12137](https://jira.dhis2.org/browse/DHIS2-12137): Translation of ProgramRuleAction content in TrackerCapture App**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-12575](https://jira.dhis2.org/browse/DHIS2-12575): Query all the fields from trackedEntityInstanceFilters**  
Components: _[App] Capture_

**[DHIS2-9281](https://jira.dhis2.org/browse/DHIS2-9281): Share TEI working lists**  
Components: _[App] Capture_

**[DHIS2-9284](https://jira.dhis2.org/browse/DHIS2-9284): Update TEI working lists**  
Components: _[App] Capture_

**[DHIS2-9280](https://jira.dhis2.org/browse/DHIS2-9280): Load TEI working lists**  
Components: _[App] Capture_

**[DHIS2-9279](https://jira.dhis2.org/browse/DHIS2-9279): Save TEI working lists**  
Components: _[App] Capture_

**[DHIS2-9282](https://jira.dhis2.org/browse/DHIS2-9282): Delete TEI working lists**  
Components: _[App] Capture_

**[DHIS2-10950](https://jira.dhis2.org/browse/DHIS2-10950): Update tracked entity attributes**  
Components: _[App] Capture_

**[DHIS2-12301](https://jira.dhis2.org/browse/DHIS2-12301): Default enrollment dashboard in Capture app**  
Components: _[App] Capture_

**[DHIS2-11878](https://jira.dhis2.org/browse/DHIS2-11878): Execute rules in edit profile mode - part 1**  
Components: _[App] Capture_

**[DHIS2-11633](https://jira.dhis2.org/browse/DHIS2-11633): Profile Widget - Display edit form**  
Components: _[App] Capture_

**[DHIS2-11862](https://jira.dhis2.org/browse/DHIS2-11862): Implement schedule info**  
Components: _[App] Capture_

**[DHIS2-11400](https://jira.dhis2.org/browse/DHIS2-11400): Add tab bar to switch between "Report event" and "schedule"**  
**[DHIS2-11864](https://jira.dhis2.org/browse/DHIS2-11864): Add schedule event action buttons**  
Components: _[App] Capture_

**[DHIS2-11863](https://jira.dhis2.org/browse/DHIS2-11863): Develop comments widget and add to the scheduling page**  
Components: _[App] Capture_

**[DHIS2-11952](https://jira.dhis2.org/browse/DHIS2-11952): New Event - Program Stage selection list**  
Components: _[App] Capture_

**[DHIS2-11617](https://jira.dhis2.org/browse/DHIS2-11617): Mode for scheduling event in the Add event page**  
Components: _[App] Capture_

**[DHIS2-11806](https://jira.dhis2.org/browse/DHIS2-11806): Use new org unit component in Capture app**  
Components: _[App] Capture_

**[DHIS2-12143](https://jira.dhis2.org/browse/DHIS2-12143): Allow for selective execution of integrity checks**  
Components: _[App] Core resource_

**[DHIS2-11989](https://jira.dhis2.org/browse/DHIS2-11989): Light-weight landing page**  
Components: _[App] Dashboard_

**[DHIS2-9605](https://jira.dhis2.org/browse/DHIS2-9605): Hide dashboard app name - frontend**  
Components: _[App] Dashboard_

**[DHIS2-11790](https://jira.dhis2.org/browse/DHIS2-11790): Add code to create and edit dashboard**  
Components: _[App] Dashboard_

**[DHIS2-11250](https://jira.dhis2.org/browse/DHIS2-11250): Use MultiSelect from @dhis2/ui instead of \<select multiple\> on 'Min-max value generation' page**  
Components: _[App] Data administration_

**[DHIS2-11599](https://jira.dhis2.org/browse/DHIS2-11599): Respect section config for data element grouping**  
Components: _[App] Data entry_

**[DHIS2-12393](https://jira.dhis2.org/browse/DHIS2-12393): Migrate from EventReport and EventChart to EventVisualization**  
Components: _[App] Event reports_, _[App] Line Listing_

**[DHIS2-11927](https://jira.dhis2.org/browse/DHIS2-11927): Improve SQL in EnrollmentTimeFieldSqlRenderer**  
Components: _[App] Event reports_

**[DHIS2-4978](https://jira.dhis2.org/browse/DHIS2-4978): Add ADX export to import/export app**  
Components: _[App] Import-export_

**[DHIS2-11442](https://jira.dhis2.org/browse/DHIS2-11442): UI for sorting the event report table by any of the standard fields in the API payload**  
Components: _[App] Line Listing_

**[DHIS2-12145](https://jira.dhis2.org/browse/DHIS2-12145): Repeating a data element used in multiple stages in a single linelist**  
Components: _[App] Line Listing_

**[DHIS2-4026](https://jira.dhis2.org/browse/DHIS2-4026): Add Support for CategoryOption Group Set as Dimensions in Line Listing**  
Components: _[App] Line Listing_

**[DHIS2-1897](https://jira.dhis2.org/browse/DHIS2-1897): Support for showing TEIs without any event**  
Components: _[App] Line Listing_

**[DHIS2-11190](https://jira.dhis2.org/browse/DHIS2-11190): [A]Period dimension options required for line listing multiple events.**  
Components: _[App] Line Listing_

**[DHIS2-11101](https://jira.dhis2.org/browse/DHIS2-11101): Sort columns in new event reports app**  
Components: _[App] Line Listing_

**[DHIS2-1288](https://jira.dhis2.org/browse/DHIS2-1288): Ability to arrange and move around attributes and data elements in Event Reports and Events Visualizer**  
Components: _[App] Line Listing_

**[DHIS2-7455](https://jira.dhis2.org/browse/DHIS2-7455): Add status (COMPLETED, ACTIVE etc) and created/lastupdated etc as a filter**  
Components: _[App] Line Listing_

**[DHIS2-10575](https://jira.dhis2.org/browse/DHIS2-10575): Linelist by incident date**  
Components: _[App] Line Listing_

**[DHIS2-10231](https://jira.dhis2.org/browse/DHIS2-10231): Event Reports - Standard Program Date fields (Enrollment Date, Incident Date, Event Date) should not show time**  
Components: _[App] Line Listing_

**[DHIS2-7871](https://jira.dhis2.org/browse/DHIS2-7871): Hide legend boundaries shown in parenthesis**  
Components: _[App] Line Listing_

**[DHIS2-11108](https://jira.dhis2.org/browse/DHIS2-11108): Display username of data capturer in Line listing**  
Components: _[App] Line Listing_

**[DHIS2-12118](https://jira.dhis2.org/browse/DHIS2-12118): Maintenance app Open days after category option end date**  
Components: _[App] Maintenance_

**[DHIS2-12365](https://jira.dhis2.org/browse/DHIS2-12365): Add d2:extractDataMatrixValue to maintenance UI**  
Components: _[App] Maintenance_

**[DHIS2-10855](https://jira.dhis2.org/browse/DHIS2-10855): Add WEB_HOOK recipient to program notifications**  
Components: _[App] Maintenance_

**[DHIS2-12157](https://jira.dhis2.org/browse/DHIS2-12157): Maintenance app update for adding ValueType in ProgramRuleVariable**  
Components: _[App] Maintenance_

**[DHIS2-12150](https://jira.dhis2.org/browse/DHIS2-12150): Choose whether to include organisation unit descendants in a Predictor**  
Components: _[App] Maintenance_

**[DHIS2-12034](https://jira.dhis2.org/browse/DHIS2-12034): Add short name to indicator group set and category option group set**  
Components: _[App] Maintenance_

**[DHIS2-12000](https://jira.dhis2.org/browse/DHIS2-12000): Allow associated geometries to be requested and viewed in DHIS2 Maps**  
Components: _[App] Maps_

**[DHIS2-11963](https://jira.dhis2.org/browse/DHIS2-11963): New buildings layer from Google Earth Engine**  
Components: _[App] Maps_

**[DHIS2-12016](https://jira.dhis2.org/browse/DHIS2-12016): Add support for VectorStyle external map layers in maintenance app**  
Components: _[App] Maps_

**[DHIS2-11956](https://jira.dhis2.org/browse/DHIS2-11956): Vector tiles basemap**  
Components: _[App] Maps_

**[DHIS2-11039](https://jira.dhis2.org/browse/DHIS2-11039): Show EE aggregation values per band (e.g. age/gender group)**  
Components: _[App] Maps_

**[DHIS2-12212](https://jira.dhis2.org/browse/DHIS2-12212): Basic offline support for DHIS2 Maps**  
Components: _[App] Maps_

**[DHIS2-11823](https://jira.dhis2.org/browse/DHIS2-11823): Allow org unit profile to be opened from the data table**  
Components: _[App] Maps_

**[DHIS2-12464](https://jira.dhis2.org/browse/DHIS2-12464): Improved handling of Earth Engine layers**  
Components: _[App] Maps_

**[DHIS2-11071](https://jira.dhis2.org/browse/DHIS2-11071): Re-purpose Boundary map layer to new Org unit layer**  
Components: _[App] Maps_

**[DHIS2-12060](https://jira.dhis2.org/browse/DHIS2-12060): New system setting "startModuleEnableLightweight"**  
Components: _[App] Settings_

**[DHIS2-12099](https://jira.dhis2.org/browse/DHIS2-12099): Dropdown in System Settings for system update notifications**  
Components: _[App] Settings_

**[DHIS2-12515](https://jira.dhis2.org/browse/DHIS2-12515): System setting for including zero value in analytics tables**  
Components: _[App] Settings_

**[DHIS2-12046](https://jira.dhis2.org/browse/DHIS2-12046): Max org unit level for data output in add and edit user screens**  
Components: _[App] User_

**[DHIS2-12028](https://jira.dhis2.org/browse/DHIS2-12028): Migrate UI components used for home page to @dhis2/ui**  
Components: _[App] User_

**[DHIS2-11825](https://jira.dhis2.org/browse/DHIS2-11825): Migrate form-components to @dhis2/ui**  
Components: _[App] User_

**[DHIS2-11853](https://jira.dhis2.org/browse/DHIS2-11853): Select and deselect all objects for metadata sharing in user role**  
Components: _[App] User_

**[DHIS2-11866](https://jira.dhis2.org/browse/DHIS2-11866): First name and Last name in user screen**  
Components: _[App] User_

**[DHIS2-12021](https://jira.dhis2.org/browse/DHIS2-12021): Remove verbs from left-side menu in user profile**  
Components: _[App] User Profile_

## Bugs

**[DHIS2-13140](https://jira.dhis2.org/browse/DHIS2-13140): [E] Options not returned when results rows are empty**  
Components: _[API] Analytics_

**[DHIS2-13114](https://jira.dhis2.org/browse/DHIS2-13114): [D] Datetime dimension with filter throws 409 error**  
Components: _[API] Analytics_

**[DHIS2-12787](https://jira.dhis2.org/browse/DHIS2-12787): [C] NULL values from numeric items are converted to 0 in analytics endpoints**  
Components: _[API] Analytics_

**[DHIS2-12326](https://jira.dhis2.org/browse/DHIS2-12326): Event analytics always returns metadata for all options in option set**  
Components: _[API] Analytics_

**[DHIS2-12959](https://jira.dhis2.org/browse/DHIS2-12959): [C] Analytics dimensions endpoint does not return optionSet for attributes**  
Components: _[API] Analytics_

**[DHIS2-12888](https://jira.dhis2.org/browse/DHIS2-12888): [C] Wrong operator used for nested conditions**  
Components: _[API] Analytics_

**[DHIS2-13006](https://jira.dhis2.org/browse/DHIS2-13006): [D] Download error for advanced XML format (data set value)**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-11327](https://jira.dhis2.org/browse/DHIS2-11327): Program indicators - custom aggregation with count distinct**  
Components: _[API] Analytics_

**[DHIS2-12497](https://jira.dhis2.org/browse/DHIS2-12497): Zero values for data elements of type average not included in analytics tables**  
Components: _[API] Analytics_

**[DHIS2-12543](https://jira.dhis2.org/browse/DHIS2-12543): Scientific notation is returned when downloading visualisation data in excel**  
Components: _[API] Analytics_

**[DHIS2-12571](https://jira.dhis2.org/browse/DHIS2-12571): [C] Event report crashes when trying to download**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-12581](https://jira.dhis2.org/browse/DHIS2-12581): [B] Error on analytics run with future/past years**  
Components: _[API] Analytics_

**[DHIS2-12807](https://jira.dhis2.org/browse/DHIS2-12807): [B] Analytics Export Fails When a New Column is Added**  
Components: _[API] Analytics_

**[DHIS2-12216](https://jira.dhis2.org/browse/DHIS2-12216): [A]Event report download response has wrong content-disposition header - backport**  
Components: _[API] Analytics_

**[DHIS2-12237](https://jira.dhis2.org/browse/DHIS2-12237): Grid Caching is not properly used in analytics**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-12258](https://jira.dhis2.org/browse/DHIS2-12258): periodOffset should be only for indicator expressions**  
Components: _[API] Analytics_

**[DHIS2-12496](https://jira.dhis2.org/browse/DHIS2-12496): periodOffset misses some data**  
Components: _[API] Analytics_

**[DHIS2-12976](https://jira.dhis2.org/browse/DHIS2-12976): [C]Missing metadata for weeks in the analytics API**  
Components: _[API] Analytics_

**[DHIS2-12839](https://jira.dhis2.org/browse/DHIS2-12839): [C]Nested data element conditions should be AND in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-12366](https://jira.dhis2.org/browse/DHIS2-12366): api/system/tasks/ANALYTICS_TABLE/uid not working**  
Components: _[API] Analytics_, _[API] Job scheduler_

**[DHIS2-12761](https://jira.dhis2.org/browse/DHIS2-12761): [B]Sorting by stageId.elementId does not work in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-12895](https://jira.dhis2.org/browse/DHIS2-12895): [C] Wrong name for lastPage element**  
Components: _[API] Analytics_

**[DHIS2-12891](https://jira.dhis2.org/browse/DHIS2-12891): [C] EventVisualization is using the wrong name for last updated date**  
Components: _[API] Analytics_

**[DHIS2-12277](https://jira.dhis2.org/browse/DHIS2-12277): [C]DHIS2 Can’t finish the analytic in version 2.37.1**  
**[DHIS2-12836](https://jira.dhis2.org/browse/DHIS2-12836): Multiple minDate/MaxDate/aggregationTypes fail**  
Components: _[API] Analytics_

**[DHIS2-12808](https://jira.dhis2.org/browse/DHIS2-12808): [B]Backend: Requesting COGS items does not filter the response**  
Components: _[API] Analytics_

**[DHIS2-12832](https://jira.dhis2.org/browse/DHIS2-12832): [C] sorting by programstatus in enrollment analytics result in wrong query generated**  
Components: _[API] Analytics_

**[DHIS2-12674](https://jira.dhis2.org/browse/DHIS2-12674): [B] NPE in item options**  
Components: _[API] Analytics_

**[DHIS2-12652](https://jira.dhis2.org/browse/DHIS2-12652): [B]Add Authority ALL to analytics explain api entry point**  
Components: _[API] Analytics_

**[DHIS2-12529](https://jira.dhis2.org/browse/DHIS2-12529): [B]totalPages param does not work in event analytics**  
Components: _[API] Analytics_

**[DHIS2-5468](https://jira.dhis2.org/browse/DHIS2-5468): Links are not displaying in notifications messages of interpretations**  
Components: _[API] Analytics_

**[DHIS2-12585](https://jira.dhis2.org/browse/DHIS2-12585): NPE on analytics event aggregate**  
Components: _[API] Analytics_

**[DHIS2-12334](https://jira.dhis2.org/browse/DHIS2-12334): Event analytics returns no data for option sets when options are specified**  
Components: _[API] Analytics_

**[DHIS2-12278](https://jira.dhis2.org/browse/DHIS2-12278): Indicator coGroup: includes too many option combos**  
Components: _[API] Analytics_

**[DHIS2-12458](https://jira.dhis2.org/browse/DHIS2-12458): Allow multiple "filter" parameter in new dimension endpoints**  
Components: _[API] Analytics_

**[DHIS2-12457](https://jira.dhis2.org/browse/DHIS2-12457): Use paging instead of skipPaging in new dimension endpoints**  
Components: _[API] Analytics_

**[DHIS2-11769](https://jira.dhis2.org/browse/DHIS2-11769): outputOrgUnitIdScheme not working on /analytics/dataValueSet endpoint**  
Components: _[API] Analytics_

**[DHIS2-11997](https://jira.dhis2.org/browse/DHIS2-11997): LAST_10_YEARS missing name in metadata response**  
Components: _[API] Analytics_

**[DHIS2-11951](https://jira.dhis2.org/browse/DHIS2-11951): "Chartid" and "reporttableid" to be removed from the  table ""public.interpretation" and "public.datasetcompleteness"**  
Components: _[API] Analytics_

**[DHIS2-11770](https://jira.dhis2.org/browse/DHIS2-11770): Analytics events count fails in certain cases**  
Components: _[API] Analytics_

**[DHIS2-9372](https://jira.dhis2.org/browse/DHIS2-9372): Manual application uploads fail with 400 error**  
Components: _[API] App management_

**[DHIS2-10687](https://jira.dhis2.org/browse/DHIS2-10687): Data Admin->Maintenance->Update catoptioncombos  crashes if catoptioncombo is used in predictor**  
Components: _[API] Data administration_, _[App] Data administration_

**[DHIS2-12741](https://jira.dhis2.org/browse/DHIS2-12741): Data integrity does not work**  
Components: _[API] Data administration_, _[App] Data administration_

**[DHIS2-11981](https://jira.dhis2.org/browse/DHIS2-11981): Unapprove data is incorrectly allowed**  
Components: _[API] Data approval_

**[DHIS2-11858](https://jira.dhis2.org/browse/DHIS2-11858): Internal server error when loading a data set report**  
Components: _[API] Data approval_, _[API] Other_

**[DHIS2-11857](https://jira.dhis2.org/browse/DHIS2-11857): Sporadic error when loading data approvals**  
Components: _[API] Data approval_

**[DHIS2-11870](https://jira.dhis2.org/browse/DHIS2-11870): Return approvedAt and approvedBy when needed**  
Components: _[API] Data approval_

**[DHIS2-13193](https://jira.dhis2.org/browse/DHIS2-13193): Support use of [] and () interchangeably in DataStore fields expansion**  
Components: _[API] Data store_

**[DHIS2-11925](https://jira.dhis2.org/browse/DHIS2-11925): Data value export to XML with compression creates empty archive**  
Components: _[API] Data value set_

**[DHIS2-12180](https://jira.dhis2.org/browse/DHIS2-12180): Incorrect total count during DataValueSet import**  
Components: _[API] Data value set_

**[DHIS2-12360](https://jira.dhis2.org/browse/DHIS2-12360): ADX Export excludes a period ending on the requested end date**  
Components: _[API] Data value set_

**[DHIS2-12691](https://jira.dhis2.org/browse/DHIS2-12691): Data element group filter for data value sets API**  
Components: _[API] Data value set_

**[DHIS2-9313](https://jira.dhis2.org/browse/DHIS2-9313): ADX export of data value sets does not respect the same set of parameters as the other formats**  
Components: _[API] Data value set_

**[DHIS2-11624](https://jira.dhis2.org/browse/DHIS2-11624): Inconsistent behaviour (api/UI) - aggregate dataElement Values**  
Components: _[API] Data value set_

**[DHIS2-11921](https://jira.dhis2.org/browse/DHIS2-11921): dataValueSets endpoint broken for user group access to (attribute) category option**  
Components: _[API] Data value set_

**[DHIS2-12601](https://jira.dhis2.org/browse/DHIS2-12601): Upgrade Failure to 2.37**  
Components: _[API] Database migration_

**[DHIS2-12884](https://jira.dhis2.org/browse/DHIS2-12884): Flyway migration V2_38_19 migth fail if ProgramRuleVariable is misconfigured**  
Components: _[API] Database migration_

**[DHIS2-12222](https://jira.dhis2.org/browse/DHIS2-12222): Upgrading instance from 2.35.8 to 2.36.4 fails with flyway error**  
Components: _[API] Database migration_

**[DHIS2-12634](https://jira.dhis2.org/browse/DHIS2-12634): Event api missing dataValues when fields parameter is empty**  
Components: _[API] Events_

**[DHIS2-12494](https://jira.dhis2.org/browse/DHIS2-12494): The endpoint "/events" does not include results in select ou when ouMode is DESCENDANTS or CHILDREN**  
Components: _[API] Events_

**[DHIS2-12530](https://jira.dhis2.org/browse/DHIS2-12530): Wrong pager returned when totalPages=false**  
Components: _[API] Events_

**[DHIS2-12648](https://jira.dhis2.org/browse/DHIS2-12648): Some number is showing for the events in the response instead of events uid**  
Components: _[API] Events_

**[DHIS2-12114](https://jira.dhis2.org/browse/DHIS2-12114): Capture app lists events from other org units than the chosen org unit**  
Components: _[API] Events_

**[DHIS2-12061](https://jira.dhis2.org/browse/DHIS2-12061): Event/tracker entries don't respect AttributeOption start & end dates**  
Components: _[API] Events_

**[DHIS2-11541](https://jira.dhis2.org/browse/DHIS2-11541): Event collection endpoint does not expose relationships**  
Components: _[API] Events_

**[DHIS2-13030](https://jira.dhis2.org/browse/DHIS2-13030): Tracker sync fails because called service can't handle superuser execution (NPE)**  
Components: _[API] Job scheduler_

**[DHIS2-12018](https://jira.dhis2.org/browse/DHIS2-12018): Prevent simultaneous analytics or resource table runs**  
Components: _[API] Job scheduler_

**[DHIS2-12146](https://jira.dhis2.org/browse/DHIS2-12146): Executing jobs uses GET request**  
Components: _[API] Job scheduler_

**[DHIS2-11568](https://jira.dhis2.org/browse/DHIS2-11568): Import of event report with program indicator using a filter does not populate table trackedentityprogramindicatordimension**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-12829](https://jira.dhis2.org/browse/DHIS2-12829): [C] Fix typo in import error message**  
Components: _[API] Metadata import-export_

**[DHIS2-12831](https://jira.dhis2.org/browse/DHIS2-12831): Metadata import corrupts option sort order**  
Components: _[API] Metadata import-export_

**[DHIS2-12129](https://jira.dhis2.org/browse/DHIS2-12129): Mandatory program stage to program association not enforced**  
Components: _[API] Metadata import-export_

**[DHIS2-12828](https://jira.dhis2.org/browse/DHIS2-12828): Null options are returned when there are gaps in sort order**  
Components: _[API] Metadata import-export_

**[DHIS2-10323](https://jira.dhis2.org/browse/DHIS2-10323): Search does not work when using Cyrillic characters in Maintenance**  
Components: _[API] Metadata import-export_, _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-11483](https://jira.dhis2.org/browse/DHIS2-11483): PATCH doesn't work for metadata sharing**  
Components: _[API] Metadata import-export_

**[DHIS2-13045](https://jira.dhis2.org/browse/DHIS2-13045): Support XML requests for 2.38 with deprecation notice**  
Components: _[API] Metadata model_

**[DHIS2-12290](https://jira.dhis2.org/browse/DHIS2-12290): ProgramStageSection shouldn't have shortName translatable**  
Components: _[API] Metadata model_

**[DHIS2-12293](https://jira.dhis2.org/browse/DHIS2-12293): ProgramSection is not shown in Translation App**  
Components: _[API] Metadata model_

**[DHIS2-12843](https://jira.dhis2.org/browse/DHIS2-12843): /api/interpretations Does not properly populate the access object**  
Components: _[API] Metadata model_

**[DHIS2-12485](https://jira.dhis2.org/browse/DHIS2-12485): CollectionService: adding item fails because of silent exception during validation**  
Components: _[API] Metadata model_

**[DHIS2-12752](https://jira.dhis2.org/browse/DHIS2-12752): Can't get relationship types**  
Components: _[API] Metadata model_

**[DHIS2-11929](https://jira.dhis2.org/browse/DHIS2-11929): SQL view "type" and "cacheStrategy" should be required**  
Components: _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-12356](https://jira.dhis2.org/browse/DHIS2-12356): ProgramStage name should be not-null**  
Components: _[API] Metadata model_

**[DHIS2-12070](https://jira.dhis2.org/browse/DHIS2-12070): Incorrect expression validation: found number when expecting boolean**  
Components: _[API] Metadata model_

**[DHIS2-12168](https://jira.dhis2.org/browse/DHIS2-12168): Gist API: String length (size) filter does not work with specific length**  
Components: _[API] Metadata model_

**[DHIS2-12841](https://jira.dhis2.org/browse/DHIS2-12841): Too many error logs from AbstractHibernateListener**  
Components: _[API] Other_

**[DHIS2-12805](https://jira.dhis2.org/browse/DHIS2-12805): Bulk sharing update is slow for complex objects**  
Components: _[API] Other_

**[DHIS2-12801](https://jira.dhis2.org/browse/DHIS2-12801): Nested access objects not available on metadata endpoints**  
Components: _[API] Other_

**[DHIS2-11946](https://jira.dhis2.org/browse/DHIS2-11946): SQL queries with variables names with accented characters will not return error when variable is not provided**  
Components: _[API] Other_

**[DHIS2-12697](https://jira.dhis2.org/browse/DHIS2-12697): api/system/id does not work**  
Components: _[API] Other_

**[DHIS2-12704](https://jira.dhis2.org/browse/DHIS2-12704): CancellationException hides errors in analytics table generation**  
Components: _[API] Other_

**[DHIS2-12526](https://jira.dhis2.org/browse/DHIS2-12526): New ER: Creating interpretations on eventVisualization sometimes fails**  
Components: _[API] Other_

**[DHIS2-12538](https://jira.dhis2.org/browse/DHIS2-12538): Hashed session id does not work across threads**  
Components: _[API] Other_

**[DHIS2-10901](https://jira.dhis2.org/browse/DHIS2-10901): LockExceptions endpoint doesn't return error messages**  
Components: _[API] Other_

**[DHIS2-11142](https://jira.dhis2.org/browse/DHIS2-11142): trackedEntityInstanceFilters resource is not appearing in /api/resources**  
Components: _[API] Other_

**[DHIS2-11932](https://jira.dhis2.org/browse/DHIS2-11932): SQL variables in SQL view do not accept accented characters**  
Components: _[API] Other_

**[DHIS2-12008](https://jira.dhis2.org/browse/DHIS2-12008): Superusers cannot update sharing for dashboards which are not already shared with them**  
Components: _[API] Other_

**[DHIS2-11990](https://jira.dhis2.org/browse/DHIS2-11990): Null pointer exception in /authorities**  
Components: _[API] Other_

**[DHIS2-12031](https://jira.dhis2.org/browse/DHIS2-12031): Data Set Reports are broken with non-default CatCombo Data Sets**  
Components: _[API] Other_

**[DHIS2-11742](https://jira.dhis2.org/browse/DHIS2-11742): Sharing is not saved for new ProgramStage**  
Components: _[API] Other_

**[DHIS2-12073](https://jira.dhis2.org/browse/DHIS2-12073): Gist API like-filters are case sensitive**  
Components: _[API] Other_

**[DHIS2-12702](https://jira.dhis2.org/browse/DHIS2-12702): Predictors fail to run with multiple disaggregations per data element**  
Components: _[API] Predictors_

**[DHIS2-12089](https://jira.dhis2.org/browse/DHIS2-12089): Expression not valid when dividing by a data value within if() function**  
Components: _[API] Predictors_, _[API] Validation_

**[DHIS2-12091](https://jira.dhis2.org/browse/DHIS2-12091): Predictors in a job don't run in a predictable order**  
Components: _[API] Predictors_

**[DHIS2-12164](https://jira.dhis2.org/browse/DHIS2-12164): Predictors fail on some systems on aggregate data input**  
Components: _[API] Predictors_

**[DHIS2-12863](https://jira.dhis2.org/browse/DHIS2-12863): Error when creating PR with WARNING/ERRORONCOMPLETE without DE/TEA**  
Components: _[API] Program rules_

**[DHIS2-12614](https://jira.dhis2.org/browse/DHIS2-12614): sendMessage program rule not triggering**  
Components: _[API] Program rules_

**[DHIS2-12033](https://jira.dhis2.org/browse/DHIS2-12033): Program rules that assign values to calculated PRV fail to import**  
Components: _[API] Program rules_

**[DHIS2-12593](https://jira.dhis2.org/browse/DHIS2-12593): Cannot sync data values when using JWT bearer tokens (or any other POST request)**  
Components: _[API] Security_

**[DHIS2-12279](https://jira.dhis2.org/browse/DHIS2-12279): SMS reports - Value Parser Command duplicating values on multiple submissions for same Orgunit, data element and Period**  
Components: _[API] SMS_, _[App] SMS configuration_

**[DHIS2-12533](https://jira.dhis2.org/browse/DHIS2-12533): SMS reporting - DHIS2 accepting SMS reports coming from organisation units not attached to the dataset**  
Components: _[API] SMS_, _[App] SMS configuration_

**[DHIS2-12762](https://jira.dhis2.org/browse/DHIS2-12762): Event data Sync is failing**  
Components: _[API] Synchronization_

**[DHIS2-9723](https://jira.dhis2.org/browse/DHIS2-9723): Program stage sharing not retained after metadata import**  
Components: _[API] Synchronization_, _[API] Tracker_, _[App] Settings_

**[DHIS2-12259](https://jira.dhis2.org/browse/DHIS2-12259): Analytics Table Runtime not formatted**  
Components: _[API] System configuration_

**[DHIS2-13078](https://jira.dhis2.org/browse/DHIS2-13078): NTI: error when ORGANISATION_UNIT attribute is other than TEI's orgunit**  
Components: _[API] Tracker_

**[DHIS2-12625](https://jira.dhis2.org/browse/DHIS2-12625): Relationship-endpoint only returning uids when queried**  
Components: _[API] Tracker_

**[DHIS2-12153](https://jira.dhis2.org/browse/DHIS2-12153): Invalid date in tracker data entry**  
Components: _[API] Tracker_

**[DHIS2-12182](https://jira.dhis2.org/browse/DHIS2-12182): /generateAndReserve returns duplicate values when attribute pattern contains a constant**  
Components: _[API] Tracker_

**[DHIS2-12282](https://jira.dhis2.org/browse/DHIS2-12282): idScheme=CODE not working for dataElement or attributeOptionCombo**  
Components: _[API] Tracker_

**[DHIS2-12285](https://jira.dhis2.org/browse/DHIS2-12285): The endpoint /api/trackedEntityInstances returns soft-deleted events**  
Components: _[API] Tracker_

**[DHIS2-12325](https://jira.dhis2.org/browse/DHIS2-12325): Bad request when fetching relationship through event**  
Components: _[API] Tracker_

**[DHIS2-12347](https://jira.dhis2.org/browse/DHIS2-12347): Exception:OrganisationUnit can't be null**  
Components: _[API] Tracker_

**[DHIS2-12348](https://jira.dhis2.org/browse/DHIS2-12348): Marking enrollment for followUp is ignored**  
Components: _[API] Tracker_

**[DHIS2-12484](https://jira.dhis2.org/browse/DHIS2-12484): NTI: import events with IMAGE dataValues returns a conflict**  
Components: _[API] Tracker_

**[DHIS2-12663](https://jira.dhis2.org/browse/DHIS2-12663): NTI: Updating event with file_resource data value fails**  
Components: _[API] Tracker_

**[DHIS2-12717](https://jira.dhis2.org/browse/DHIS2-12717): Handle user fields as User Info objects in NTI**  
Components: _[API] Tracker_

**[DHIS2-12844](https://jira.dhis2.org/browse/DHIS2-12844): Sorting order is not working on TEI working lists**  
Components: _[API] Tracker_

**[DHIS2-11947](https://jira.dhis2.org/browse/DHIS2-11947): NTI: enrollment date validation message doesn't include the date**  
Components: _[API] Tracker_

**[DHIS2-12534](https://jira.dhis2.org/browse/DHIS2-12534): Remove NTI idScheme AUTO**  
Components: _[API] Tracker_

**[DHIS2-12623](https://jira.dhis2.org/browse/DHIS2-12623): Move DB access and mutation to preheat and preprocessor**  
Components: _[API] Tracker_

**[DHIS2-11300](https://jira.dhis2.org/browse/DHIS2-11300): Missing errorReports when using DELETE strategy and validation fails (enrollment)**  
Components: _[API] Tracker_

**[DHIS2-12659](https://jira.dhis2.org/browse/DHIS2-12659): GET /api/tracker/relationships query params are inconsistent with the docs**  
Components: _[API] Tracker_

**[DHIS2-12460](https://jira.dhis2.org/browse/DHIS2-12460): New tracker importer require attributeOptionCombo**  
Components: _[API] Tracker_

**[DHIS2-11789](https://jira.dhis2.org/browse/DHIS2-11789): NTI: tracked entity attribute value history is not stored**  
Components: _[API] Tracker_

**[DHIS2-7107](https://jira.dhis2.org/browse/DHIS2-7107): Date and time data type doesn't display in event reports**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-12660](https://jira.dhis2.org/browse/DHIS2-12660): NTI: fields filtering doesn't work**  
Components: _[API] Tracker_

**[DHIS2-12886](https://jira.dhis2.org/browse/DHIS2-12886): trackedEntityInstanceFilters : Default for public access should be "No access"**  
Components: _[API] Tracker_

**[DHIS2-12933](https://jira.dhis2.org/browse/DHIS2-12933): Event import fails when data value is an option and sort_order has gaps**  
Components: _[API] Tracker_

**[DHIS2-12845](https://jira.dhis2.org/browse/DHIS2-12845): API returning 500 when including field=***  
Components: _[API] Tracker_

**[DHIS2-12854](https://jira.dhis2.org/browse/DHIS2-12854): Move info log to debug for assign program rule**  
Components: _[API] Tracker_

**[DHIS2-12685](https://jira.dhis2.org/browse/DHIS2-12685): Missing errorReports when using DELETE strategy and validation fails (event, tei)**  
Components: _[API] Tracker_

**[DHIS2-12486](https://jira.dhis2.org/browse/DHIS2-12486): NTI: unique attribute is considered as duplicated if present in TEI and enrollment**  
Components: _[API] Tracker_

**[DHIS2-12732](https://jira.dhis2.org/browse/DHIS2-12732): NTI: events cannot be imported in glass-protected TEI when glass is broken**  
Components: _[API] Tracker_

**[DHIS2-12622](https://jira.dhis2.org/browse/DHIS2-12622): Notes not returning extended info on storedBy-user**  
Components: _[API] Tracker_

**[DHIS2-12620](https://jira.dhis2.org/browse/DHIS2-12620): Events-endpoint not returning info about assignedUser**  
Components: _[API] Tracker_

**[DHIS2-12713](https://jira.dhis2.org/browse/DHIS2-12713): NPE when getting enrollments**  
Components: _[API] Tracker_

**[DHIS2-11973](https://jira.dhis2.org/browse/DHIS2-11973): NTI: time should be ignored when validating enrollment date**  
Components: _[API] Tracker_

**[DHIS2-11761](https://jira.dhis2.org/browse/DHIS2-11761): TEI lastUpdated value is not updated on event updates**  
Components: _[API] Tracker_

**[DHIS2-11979](https://jira.dhis2.org/browse/DHIS2-11979): NTI: slow imports and high memory allocation when posting full payloads**  
Components: _[API] Tracker_

**[DHIS2-12181](https://jira.dhis2.org/browse/DHIS2-12181): Adding enrollment using orgUnitIdScheme=ATTRIBUTE**  
Components: _[API] Tracker_

**[DHIS2-12229](https://jira.dhis2.org/browse/DHIS2-12229): Enrollments are not returned when retrieving a collection of teis by uids**  
Components: _[API] Tracker_

**[DHIS2-11893](https://jira.dhis2.org/browse/DHIS2-11893): Legacy Tei fetching causes performance issues**  
Components: _[API] Tracker_

**[DHIS2-11557](https://jira.dhis2.org/browse/DHIS2-11557): Endpoint /trackedEntityInstance does not include nested enrollments if program shared at user level**  
Components: _[API] Tracker_

**[DHIS2-11752](https://jira.dhis2.org/browse/DHIS2-11752): Adhoc connections are created outside datasource**  
Components: _[API] Tracker_

**[DHIS2-11762](https://jira.dhis2.org/browse/DHIS2-11762): NTI: updates fail when attributes are not in the payload**  
Components: _[API] Tracker_

**[DHIS2-11764](https://jira.dhis2.org/browse/DHIS2-11764): NTI: storedBy is not set for notes**  
Components: _[API] Tracker_

**[DHIS2-11766](https://jira.dhis2.org/browse/DHIS2-11766): NTI: ASSIGN_VALUE program rules are evaluating old value when doing updates**  
Components: _[API] Tracker_

**[DHIS2-11802](https://jira.dhis2.org/browse/DHIS2-11802): Deduplication: incorrect class name in relationship audit**  
Components: _[API] Tracker_

**[DHIS2-11803](https://jira.dhis2.org/browse/DHIS2-11803): Deduplication: tei changelog entry is added with incorrect attribute value**  
Components: _[API] Tracker_

**[DHIS2-11851](https://jira.dhis2.org/browse/DHIS2-11851): Lazy Init exception when checking Ownership when redis is used**  
Components: _[API] Tracker_

**[DHIS2-11852](https://jira.dhis2.org/browse/DHIS2-11852): NTI: exception when removing attribute values**  
Components: _[API] Tracker_

**[DHIS2-11910](https://jira.dhis2.org/browse/DHIS2-11910): NTI: TEI can't be updated within search scope**  
Components: _[API] Tracker_

**[DHIS2-11950](https://jira.dhis2.org/browse/DHIS2-11950): NTI: uniqueness is not validated for attributes in enrollment scope**  
Components: _[API] Tracker_

**[DHIS2-12107](https://jira.dhis2.org/browse/DHIS2-12107): Using Event data element filters for the event API returns an error**  
Components: _[API] Tracker_

**[DHIS2-12123](https://jira.dhis2.org/browse/DHIS2-12123): Event import for new tracker API crashes when program stage and not program is specified**  
Components: _[API] Tracker_

**[DHIS2-12162](https://jira.dhis2.org/browse/DHIS2-12162): NPE when importing TEI**  
Components: _[API] Tracker_

**[DHIS2-11659](https://jira.dhis2.org/browse/DHIS2-11659): NTI: Error when updating enrollment**  
Components: _[API] Tracker_

**[DHIS2-11753](https://jira.dhis2.org/browse/DHIS2-11753): Relationships not included in audits**  
Components: _[API] Tracker_

**[DHIS2-11765](https://jira.dhis2.org/browse/DHIS2-11765): NTI: lastUpdatedBy and createdBy are not stored for data values**  
Components: _[API] Tracker_

**[DHIS2-11949](https://jira.dhis2.org/browse/DHIS2-11949): NTI: duplicate validation messages for enrollment attributes**  
Components: _[API] Tracker_

**[DHIS2-11983](https://jira.dhis2.org/browse/DHIS2-11983): NTI: slow imports caused by user service**  
Components: _[API] Tracker_

**[DHIS2-11868](https://jira.dhis2.org/browse/DHIS2-11868): NTI: import fails when optionSet type data elements have null value**  
Components: _[API] Tracker_

**[DHIS2-11824](https://jira.dhis2.org/browse/DHIS2-11824): NTI: last updated date on TEI is not updated when underlying data changes**  
Components: _[API] Tracker_

**[DHIS2-11918](https://jira.dhis2.org/browse/DHIS2-11918): NTI: slow imports because of cross joining program and psi**  
Components: _[API] Tracker_

**[DHIS2-11689](https://jira.dhis2.org/browse/DHIS2-11689): NTI: async tracker import adds audit entry with createdby='system-process'**  
Components: _[API] Tracker_

**[DHIS2-11780](https://jira.dhis2.org/browse/DHIS2-11780): Relationship not audited**  
Components: _[API] Tracker_

**[DHIS2-11801](https://jira.dhis2.org/browse/DHIS2-11801): NTI: slow single relationship import**  
Components: _[API] Tracker_

**[DHIS2-11988](https://jira.dhis2.org/browse/DHIS2-11988): Remove call to attribute value service in NTI Persister**  
Components: _[API] Tracker_

**[DHIS2-11788](https://jira.dhis2.org/browse/DHIS2-11788): PSQL exception when adding tracked entity instance search history**  
Components: _[API] Tracker_

**[DHIS2-11767](https://jira.dhis2.org/browse/DHIS2-11767): Improve query performance when fetching tei across orgunits**  
Components: _[API] Tracker_

**[DHIS2-12624](https://jira.dhis2.org/browse/DHIS2-12624): Translating programs fails with a 500 server error**  
Components: _[API] Translations_

**[DHIS2-12083](https://jira.dhis2.org/browse/DHIS2-12083): Multiple translations for the same "locale" and "property"**  
Components: _[API] Translations_, _[App] Translations_

**[DHIS2-12916](https://jira.dhis2.org/browse/DHIS2-12916): /api/me missing fields previously present on 2.37 and below**  
Components: _[API] User_

**[DHIS2-12779](https://jira.dhis2.org/browse/DHIS2-12779): Cannot disable user through PATCH API**  
Components: _[API] User_

**[DHIS2-12688](https://jira.dhis2.org/browse/DHIS2-12688): The date format of the lastUpdated/created property is incorrect in the api/me call.**  
Components: _[API] User_

**[DHIS2-12705](https://jira.dhis2.org/browse/DHIS2-12705): Organisation units not set for new users if userCredentials is not first key in JSON body**  
Components: _[API] User_

**[DHIS2-12336](https://jira.dhis2.org/browse/DHIS2-12336): Set errorProperty of returned errors when creating/updating user**  
Components: _[API] User_

**[DHIS2-11317](https://jira.dhis2.org/browse/DHIS2-11317): userLookup does not return all the users in the system**  
Components: _[API] User_

**[DHIS2-11610](https://jira.dhis2.org/browse/DHIS2-11610): Organisation unit attributes are not saved when registering a TEI**  
Components: _[App] Capture_

**[DHIS2-12158](https://jira.dhis2.org/browse/DHIS2-12158): Multiple enrollments message when there are only one**  
Components: _[App] Capture_

**[DHIS2-12280](https://jira.dhis2.org/browse/DHIS2-12280): Program not preselected when registering TEI through creation of Relationship**  
Components: _[App] Capture_

**[DHIS2-12508](https://jira.dhis2.org/browse/DHIS2-12508): Multiple program message when only enrolled in one**  
Components: _[App] Capture_

**[DHIS2-12524](https://jira.dhis2.org/browse/DHIS2-12524): No option for "Search in all programs" if no results in current program**  
Components: _[App] Capture_

**[DHIS2-12557](https://jira.dhis2.org/browse/DHIS2-12557): link button doesn't activate the linking process when Unique ID is unique but not autogenerated on Capture app**  
Components: _[App] Capture_

**[DHIS2-12667](https://jira.dhis2.org/browse/DHIS2-12667): Report date in View/Edit Enrollment Event says "Incident date"**  
Components: _[App] Capture_

**[DHIS2-12837](https://jira.dhis2.org/browse/DHIS2-12837): Editing single event crashes the app**  
Components: _[App] Capture_

**[DHIS2-12584](https://jira.dhis2.org/browse/DHIS2-12584): Enrollment status Complete should be "Completed" in Enrollment Widget**  
Components: _[App] Capture_

**[DHIS2-13008](https://jira.dhis2.org/browse/DHIS2-13008): Error while viewing event which has TEI relationship on Capture app**  
Components: _[App] Capture_

**[DHIS2-12966](https://jira.dhis2.org/browse/DHIS2-12966): Invalid property ownerOrgUnit of programOwner is queried from the API**  
Components: _[App] Capture_

**[DHIS2-12924](https://jira.dhis2.org/browse/DHIS2-12924): Update view is not shown to the user with view and edit access on TEI filter**  
Components: _[App] Capture_

**[DHIS2-12925](https://jira.dhis2.org/browse/DHIS2-12925): The owner of the filter should have access to manage, update and delete**  
Components: _[App] Capture_

**[DHIS2-12783](https://jira.dhis2.org/browse/DHIS2-12783): Hide referral tab and referral quick action**  
Components: _[App] Capture_

**[DHIS2-12930](https://jira.dhis2.org/browse/DHIS2-12930): Fix correct fields-filtering in TeiSearch**  
Components: _[App] Capture_

**[DHIS2-12950](https://jira.dhis2.org/browse/DHIS2-12950): Enrollment dashboard: Use old Tracker Capture dashboard for bundled version**  
Components: _[App] Capture_

**[DHIS2-12112](https://jira.dhis2.org/browse/DHIS2-12112): Program rules not working for the new events created in capture app**  
Components: _[App] Capture_

**[DHIS2-12870](https://jira.dhis2.org/browse/DHIS2-12870): Error when trying to save TEI filter**  
Components: _[App] Capture_

**[DHIS2-11796](https://jira.dhis2.org/browse/DHIS2-11796): Working lists don't load when using range as filter**  
Components: _[App] Capture_

**[DHIS2-12480](https://jira.dhis2.org/browse/DHIS2-12480): Unable to download data in capture app**  
Components: _[App] Capture_

**[DHIS2-12821](https://jira.dhis2.org/browse/DHIS2-12821): Error when trying to delete the file in Capture app**  
Components: _[App] Capture_

**[DHIS2-12868](https://jira.dhis2.org/browse/DHIS2-12868): DisplayName not showing correctly in comments widget**  
Components: _[App] Capture_

**[DHIS2-12847](https://jira.dhis2.org/browse/DHIS2-12847): App crash when saving TEI without enrollment**  
Components: _[App] Capture_

**[DHIS2-12665](https://jira.dhis2.org/browse/DHIS2-12665): Wrong validation errors when updating a TEI with existing unique TEA's**  
Components: _[App] Capture_

**[DHIS2-12641](https://jira.dhis2.org/browse/DHIS2-12641): Title in Registration page should not say “New $TET in $program” if it's re-enrollment**  
Components: _[App] Capture_

**[DHIS2-12740](https://jira.dhis2.org/browse/DHIS2-12740): New endpoints: Send "null" for erased dataValues/tracked entity attributes**  
Components: _[App] Capture_

**[DHIS2-12727](https://jira.dhis2.org/browse/DHIS2-12727):  Error when trying to create new events with relationship linked to a new person register WITHOUT a program**  
Components: _[App] Capture_

**[DHIS2-12726](https://jira.dhis2.org/browse/DHIS2-12726): Error when trying to create new events with relationship linked to a new person register WITH a program**  
Components: _[App] Capture_

**[DHIS2-12733](https://jira.dhis2.org/browse/DHIS2-12733): New enrollment: Removing the TEI from the context doesn't clear the form**  
Components: _[App] Capture_

**[DHIS2-12778](https://jira.dhis2.org/browse/DHIS2-12778): No text in tooltip when hovering over disabled "New [PSname] event"**  
Components: _[App] Capture_

**[DHIS2-12119](https://jira.dhis2.org/browse/DHIS2-12119): Enrolling person into another program creates a new person**  
Components: _[App] Capture_

**[DHIS2-12714](https://jira.dhis2.org/browse/DHIS2-12714): V{event_date} missing in rules engine**  
Components: _[App] Capture_

**[DHIS2-12134](https://jira.dhis2.org/browse/DHIS2-12134): New and scheduled events don't show up in the Stages and Events Widget**  
Components: _[App] Capture_

**[DHIS2-12528](https://jira.dhis2.org/browse/DHIS2-12528): "View dashboard" in "Search all programs" crashes app**  
Components: _[App] Capture_

**[DHIS2-11804](https://jira.dhis2.org/browse/DHIS2-11804): Add missing dependencies to the rules engine execution [edit enrollment event page]**  
Components: _[App] Capture_

**[DHIS2-12121](https://jira.dhis2.org/browse/DHIS2-12121): Warnings are not displayed on data elements**  
Components: _[App] Capture_

**[DHIS2-12558](https://jira.dhis2.org/browse/DHIS2-12558): Event programs are not laoding**  
Components: _[App] Capture_

**[DHIS2-12523](https://jira.dhis2.org/browse/DHIS2-12523): Showing error in the network tab when trying to open the profile widget edit form**  
Components: _[App] Capture_

**[DHIS2-12247](https://jira.dhis2.org/browse/DHIS2-12247): Get rid of "don't create in render loop" errors/warnings in the console**  
Components: _[App] Capture_

**[DHIS2-12473](https://jira.dhis2.org/browse/DHIS2-12473): Calculated program rule variables are not working**  
Components: _[App] Capture_

**[DHIS2-12513](https://jira.dhis2.org/browse/DHIS2-12513): Certain value type attributes are not shown in profile widget edit form**  
Components: _[App] Capture_

**[DHIS2-12324](https://jira.dhis2.org/browse/DHIS2-12324): Date in "Selected enrollment" in Locked selector should be EnrollmentDate**  
Components: _[App] Capture_

**[DHIS2-12077](https://jira.dhis2.org/browse/DHIS2-12077): Non-translatable fields in Capture (2.37)**  
Components: _[App] Capture_

**[DHIS2-12002](https://jira.dhis2.org/browse/DHIS2-12002): Broken "Switch to row view" in Event programs**  
Components: _[App] Capture_

**[DHIS2-11837](https://jira.dhis2.org/browse/DHIS2-11837): Users are not prompted with the message when saving the form without having values on mandatory datalement**  
Components: _[App] Capture_

**[DHIS2-12125](https://jira.dhis2.org/browse/DHIS2-12125): Text for showing to see all records accessible to you in xxx prpogram is not shown for the program with category options**  
Components: _[App] Capture_

**[DHIS2-12124](https://jira.dhis2.org/browse/DHIS2-12124): Catergory options selection seems not be required for showing the list of events**  
Components: _[App] Capture_

**[DHIS2-12139](https://jira.dhis2.org/browse/DHIS2-12139): Potential duplicates open in tracker capture instead of capture**  
Components: _[App] Capture_

**[DHIS2-10607](https://jira.dhis2.org/browse/DHIS2-10607): d2:length() only works on number variables**  
Components: _[App] Capture_

**[DHIS2-12126](https://jira.dhis2.org/browse/DHIS2-12126): Error message when trying to click show all events from view event page for the program with category options**  
Components: _[App] Capture_

**[DHIS2-12047](https://jira.dhis2.org/browse/DHIS2-12047): WorkingLists not loading event data**  
Components: _[App] Capture_

**[DHIS2-12142](https://jira.dhis2.org/browse/DHIS2-12142): TEI profile displays CODE option set value instead of NAME**  
Components: _[App] Capture_

**[DHIS2-10267](https://jira.dhis2.org/browse/DHIS2-10267): Bold text on registration page resolves to i18n problem**  
Components: _[App] Capture_

**[DHIS2-8938](https://jira.dhis2.org/browse/DHIS2-8938): Section descriptions do not display in Capture app**  
Components: _[App] Capture_

**[DHIS2-11797](https://jira.dhis2.org/browse/DHIS2-11797): App crashes when saving new enrollment event**  
Components: _[App] Capture_

**[DHIS2-11084](https://jira.dhis2.org/browse/DHIS2-11084): Tracked entity instance search: convert values based on valueType when sending the api request**  
Components: _[App] Capture_

**[DHIS2-11733](https://jira.dhis2.org/browse/DHIS2-11733): Application crash error when trying to open the events from the stage lists**  
Components: _[App] Capture_

**[DHIS2-11791](https://jira.dhis2.org/browse/DHIS2-11791): Comments are not shown in edit event page**  
Components: _[App] Capture_

**[DHIS2-11795](https://jira.dhis2.org/browse/DHIS2-11795): Non-searchable attributes are displayed in capture app when listing data from all org units**  
Components: _[App] Capture_

**[DHIS2-11815](https://jira.dhis2.org/browse/DHIS2-11815): Investigate and fix random crashes in enrollment pages**  
Components: _[App] Capture_

**[DHIS2-11830](https://jira.dhis2.org/browse/DHIS2-11830): Auto-select enrollment when opening enrollment dashboard**  
Components: _[App] Capture_

**[DHIS2-11832](https://jira.dhis2.org/browse/DHIS2-11832): Capture app should handle special characters**  
Components: _[App] Capture_

**[DHIS2-11838](https://jira.dhis2.org/browse/DHIS2-11838): Can not capture polygon**  
Components: _[App] Capture_

**[DHIS2-11850](https://jira.dhis2.org/browse/DHIS2-11850): Capture Tracked Entity fails to load**  
Components: _[App] Capture_

**[DHIS2-11986](https://jira.dhis2.org/browse/DHIS2-11986): Error opening enrollment overview page**  
Components: _[App] Capture_

**[DHIS2-12122](https://jira.dhis2.org/browse/DHIS2-12122): Events that are due today are showed as overdue**  
Components: _[App] Capture_

**[DHIS2-11822](https://jira.dhis2.org/browse/DHIS2-11822): Capture: spinner in the TEI selection when TEI has less than two TET attributes**  
Components: _[App] Capture_

**[DHIS2-11783](https://jira.dhis2.org/browse/DHIS2-11783): Widgets are not shown correctly in the enrollment dashboard when using the URL to the first time to the capture app**  
Components: _[App] Capture_

**[DHIS2-12518](https://jira.dhis2.org/browse/DHIS2-12518): 500 error on some saved charts on Data Visualizer app and "Visits ANC" and "Nutrition" Dashboards**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11778](https://jira.dhis2.org/browse/DHIS2-11778): During print preview from edit mode, other action buttons shouldn't be available**  
Components: _[App] Dashboard_

**[DHIS2-11924](https://jira.dhis2.org/browse/DHIS2-11924): Missing names when map analytical objects are loaded by dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-12859](https://jira.dhis2.org/browse/DHIS2-12859): Cannot open dashboard in edit mode**  
Components: _[App] Dashboard_

**[DHIS2-10671](https://jira.dhis2.org/browse/DHIS2-10671): Buffer layer map is not suporting "View as table/chart" in dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-11976](https://jira.dhis2.org/browse/DHIS2-11976): Bump platform deps to improve PWA update UX**  
Components: _[App] Dashboard_

**[DHIS2-11930](https://jira.dhis2.org/browse/DHIS2-11930): Bump platform dependency to fix routing**  
Components: _[App] Dashboard_

**[DHIS2-11768](https://jira.dhis2.org/browse/DHIS2-11768): Disable layout buttons in edit mode when offline**  
Components: _[App] Dashboard_

**[DHIS2-11810](https://jira.dhis2.org/browse/DHIS2-11810): Single value charts with no data display 'undefined'**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11889](https://jira.dhis2.org/browse/DHIS2-11889): Map items that can't be viewed as table or chart (lack thematic views) is broken**  
Components: _[App] Dashboard_

**[DHIS2-11908](https://jira.dhis2.org/browse/DHIS2-11908): Maps with EE layers don't cache the EE layer requests**  
Components: _[App] Dashboard_

**[DHIS2-12020](https://jira.dhis2.org/browse/DHIS2-12020): User's chosen dashboard is not remembered**  
Components: _[App] Dashboard_

**[DHIS2-11685](https://jira.dhis2.org/browse/DHIS2-11685): Top section missing bottom shadow**  
Components: _[App] Dashboard_

**[DHIS2-11725](https://jira.dhis2.org/browse/DHIS2-11725): Series key bullets won't print**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11821](https://jira.dhis2.org/browse/DHIS2-11821): Upgrade cli-app-scripts to introduce kill-switch**  
Components: _[App] Data administration_

**[DHIS2-12775](https://jira.dhis2.org/browse/DHIS2-12775): Polling not occurring**  
Components: _[App] Data administration_

**[DHIS2-11840](https://jira.dhis2.org/browse/DHIS2-11840): Max data element column padding/width for data set report**  
Components: _[App] Data approval_

**[DHIS2-11881](https://jira.dhis2.org/browse/DHIS2-11881): Show message when user does not have data approval authorities**  
Components: _[App] Data approval_

**[DHIS2-11882](https://jira.dhis2.org/browse/DHIS2-11882): Handle approval states correctly**  
Components: _[App] Data approval_

**[DHIS2-11905](https://jira.dhis2.org/browse/DHIS2-11905): Approve button should be disabled when data set has been approved**  
Components: _[App] Data approval_

**[DHIS2-11869](https://jira.dhis2.org/browse/DHIS2-11869): Periods should be displayed in reverse chronological order**  
Components: _[App] Data approval_

**[DHIS2-11884](https://jira.dhis2.org/browse/DHIS2-11884): Persist selected data set in URL**  
Components: _[App] Data approval_

**[DHIS2-11542](https://jira.dhis2.org/browse/DHIS2-11542): Data set input periods uses user local date time not the server's**  
Components: _[App] Data entry_

**[DHIS2-12865](https://jira.dhis2.org/browse/DHIS2-12865): Translations are not visible for sections and section details.**  
Components: _[App] Data entry_

**[DHIS2-11896](https://jira.dhis2.org/browse/DHIS2-11896): Data value history chart in data entry is broken**  
Components: _[App] Data entry_

**[DHIS2-13015](https://jira.dhis2.org/browse/DHIS2-13015): Issue on translating the title of favorite/newly created DV/Pivot Table by going to file menu on DV App**  
Components: _[App] Data visualizer_

**[DHIS2-12874](https://jira.dhis2.org/browse/DHIS2-12874): Saved charts with "no data" issue on Data Visualizer app**  
Components: _[App] Data visualizer_

**[DHIS2-11849](https://jira.dhis2.org/browse/DHIS2-11849): Scatter layout data chip gets stretched**  
Components: _[App] Data visualizer_

**[DHIS2-12264](https://jira.dhis2.org/browse/DHIS2-12264): Saved legend set option not showing in the dropdown**  
Components: _[App] Data visualizer_

**[DHIS2-11820](https://jira.dhis2.org/browse/DHIS2-11820): ID shown in the title instead of name for national level OU**  
Components: _[App] Data visualizer_

**[DHIS2-11835](https://jira.dhis2.org/browse/DHIS2-11835): Row header alignment is not correct when choosing the option "Fix row headers to left of table"**  
Components: _[App] Data visualizer_

**[DHIS2-13092](https://jira.dhis2.org/browse/DHIS2-13092): Paging issues in Event Reports line lists**  
Components: _[App] Event reports_

**[DHIS2-13084](https://jira.dhis2.org/browse/DHIS2-13084): Data elements do not show up in line lists**  
Components: _[App] Event reports_

**[DHIS2-12947](https://jira.dhis2.org/browse/DHIS2-12947): [C] Data table not generated when creating event reports**  
Components: _[App] Event reports_

**[DHIS2-9477](https://jira.dhis2.org/browse/DHIS2-9477): DE type Number displaying zero instead of null value**  
Components: _[App] Event reports_

**[DHIS2-13022](https://jira.dhis2.org/browse/DHIS2-13022):  Metadata dependency export is not working**  
Components: _[App] Import-export_

**[DHIS2-12262](https://jira.dhis2.org/browse/DHIS2-12262): XML data import causes 406 response**  
Components: _[App] Import-export_

**[DHIS2-12825](https://jira.dhis2.org/browse/DHIS2-12825): Metadata export is not working**  
Components: _[App] Import-export_

**[DHIS2-11843](https://jira.dhis2.org/browse/DHIS2-11843): File extension in attachment parameter should be stripped for data export**  
Components: _[App] Import-export_

**[DHIS2-12026](https://jira.dhis2.org/browse/DHIS2-12026): Error on importing metadata of XML type**  
Components: _[App] Import-export_

**[DHIS2-12156](https://jira.dhis2.org/browse/DHIS2-12156): Not able to run the jobs manually**  
Components: _[App] Job scheduler_

**[DHIS2-13109](https://jira.dhis2.org/browse/DHIS2-13109): [E] Incorrect URL in messaging app when mentioning interpretation in line listing app**  
Components: _[App] Line Listing_, _[App] Messaging_

**[DHIS2-12980](https://jira.dhis2.org/browse/DHIS2-12980): Empty dates are displayed as invalid**  
Components: _[App] Line Listing_

**[DHIS2-12909](https://jira.dhis2.org/browse/DHIS2-12909): Error when downloading reports**  
Components: _[App] Line Listing_

**[DHIS2-12798](https://jira.dhis2.org/browse/DHIS2-12798): Getting error when trying to save the blank report**  
Components: _[App] Line Listing_

**[DHIS2-12904](https://jira.dhis2.org/browse/DHIS2-12904): Mentioning in interpretations does not work**  
Components: _[App] Line Listing_

**[DHIS2-12901](https://jira.dhis2.org/browse/DHIS2-12901): Sorting order of interpretation is not correct**  
Components: _[App] Line Listing_

**[DHIS2-12902](https://jira.dhis2.org/browse/DHIS2-12902): When replying to the Interpretations, it should be "Post Reply" not the "Post comment"**  
Components: _[App] Line Listing_

**[DHIS2-12900](https://jira.dhis2.org/browse/DHIS2-12900): Interpretation sharing option is missing in line listing app**  
Components: _[App] Line Listing_

**[DHIS2-12948](https://jira.dhis2.org/browse/DHIS2-12948): Error when trying to do "Save as" in line listing app**  
Components: _[App] Line Listing_

**[DHIS2-12785](https://jira.dhis2.org/browse/DHIS2-12785): The app crashes when trying to add/save interpretation in Line Listing app**  
Components: _[App] Line Listing_

**[DHIS2-12104](https://jira.dhis2.org/browse/DHIS2-12104): Unexpected message "expression is not valid" when validating a Program Rule Action**  
Components: _[App] Maintenance_

**[DHIS2-12105](https://jira.dhis2.org/browse/DHIS2-12105): Unexpected message "expression is not valid" when validating a Program Rule condition**  
Components: _[App] Maintenance_

**[DHIS2-7931](https://jira.dhis2.org/browse/DHIS2-7931): ValidationStrategy dropdown for programs doesn't change value**  
Components: _[App] Maintenance_

**[DHIS2-11665](https://jira.dhis2.org/browse/DHIS2-11665): Validation passes for variables that don't exist**  
Components: _[App] Maintenance_

**[DHIS2-12196](https://jira.dhis2.org/browse/DHIS2-12196): Show event clusters on innermost zoom level**  
Components: _[App] Maps_

**[DHIS2-11800](https://jira.dhis2.org/browse/DHIS2-11800): No data issue on Malaria favorites maps**  
Components: _[App] Maps_

**[DHIS2-12506](https://jira.dhis2.org/browse/DHIS2-12506): Avoid "null people per hectare" for population layers**  
Components: _[App] Maps_

**[DHIS2-12800](https://jira.dhis2.org/browse/DHIS2-12800): App crash if data table is opened for earth engine layers while no org units are selected**  
Components: _[App] Maps_

**[DHIS2-12169](https://jira.dhis2.org/browse/DHIS2-12169): In some time zones map layer cards show the wrong date**  
Components: _[App] Maps_

**[DHIS2-12583](https://jira.dhis2.org/browse/DHIS2-12583): Console error when filtering maps on the dashboard**  
Components: _[App] Maps_

**[DHIS2-12483](https://jira.dhis2.org/browse/DHIS2-12483): Issues with data table resize handle**  
Components: _[App] Maps_

**[DHIS2-12502](https://jira.dhis2.org/browse/DHIS2-12502): Data table filter is not kept in map when basemap is switched**  
Components: _[App] Maps_

**[DHIS2-12462](https://jira.dhis2.org/browse/DHIS2-12462): Errors with drill down, data table filtering and open as chart**  
Components: _[App] Maps_

**[DHIS2-12463](https://jira.dhis2.org/browse/DHIS2-12463): Not possible to change opacity for external basemaps**  
Components: _[App] Maps_

**[DHIS2-11923](https://jira.dhis2.org/browse/DHIS2-11923): Donut clusters are not always shown on load**  
Components: _[App] Maps_

**[DHIS2-11749](https://jira.dhis2.org/browse/DHIS2-11749): Period for saved EE layers is not showing**  
Components: _[App] Maps_

**[DHIS2-11934](https://jira.dhis2.org/browse/DHIS2-11934): Typing start/end dates is not working properly**  
Components: _[App] Maps_

**[DHIS2-12276](https://jira.dhis2.org/browse/DHIS2-12276): Error if no org units are passed to an earth engine layer**  
Components: _[App] Maps_

**[DHIS2-11919](https://jira.dhis2.org/browse/DHIS2-11919): Event layer does not restore start/end dates**  
Components: _[App] Maps_

**[DHIS2-11920](https://jira.dhis2.org/browse/DHIS2-11920): Event layer that is styled by data element crashes when changing program**  
Components: _[App] Maps_

**[DHIS2-11922](https://jira.dhis2.org/browse/DHIS2-11922): Layer name is not showing in map legend on dashboard**  
Components: _[App] Maps_

**[DHIS2-11970](https://jira.dhis2.org/browse/DHIS2-11970): App crash in style tab for thematic layer**  
Components: _[App] Maps_

**[DHIS2-9957](https://jira.dhis2.org/browse/DHIS2-9957): Remove relocate and swap longitude/latitude options**  
Components: _[App] Maps_

**[DHIS2-12708](https://jira.dhis2.org/browse/DHIS2-12708): DHIS2 Logs Contain Very Little or No Infomation**  
Components: _[App] Other_

**[DHIS2-11537](https://jira.dhis2.org/browse/DHIS2-11537): Reports App does not respect user org unit**  
Components: _[App] Reports_

**[DHIS2-12590](https://jira.dhis2.org/browse/DHIS2-12590): Sms configuration update**  
Components: _[App] SMS configuration_

**[DHIS2-12527](https://jira.dhis2.org/browse/DHIS2-12527): Various errors in the Profile Widget**  
Components: _[App] Tracker capture_

**[DHIS2-10793](https://jira.dhis2.org/browse/DHIS2-10793): Tracker Capture case listing - lots of lookup errors in console**  
Components: _[App] Tracker capture_

**[DHIS2-12213](https://jira.dhis2.org/browse/DHIS2-12213): Error loading data entry form on slow connectivity**  
Components: _[App] Tracker capture_

**[DHIS2-12855](https://jira.dhis2.org/browse/DHIS2-12855): assignedUser not showing correctly in Event-workinglist**  
Components: _[App] Tracker capture_

**[DHIS2-11529](https://jira.dhis2.org/browse/DHIS2-11529): No programs are available for entry in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-12501](https://jira.dhis2.org/browse/DHIS2-12501): "Add new" in Enrollment widget in Tracker Capture does not work**  
Components: _[App] Tracker capture_

**[DHIS2-11468](https://jira.dhis2.org/browse/DHIS2-11468): Event-Tracker bidirectional event link from tracker not working**  
Components: _[App] Tracker capture_

**[DHIS2-12068](https://jira.dhis2.org/browse/DHIS2-12068): Tracker capture makes multiple requests to /generate for the same attribute**  
Components: _[App] Tracker capture_

**[DHIS2-8734](https://jira.dhis2.org/browse/DHIS2-8734): Yes/No (valuetype) not translated in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-9345](https://jira.dhis2.org/browse/DHIS2-9345): Tracker Capture - IDBObjectStore error when opening COMPLETED enrollment case**  
Components: _[App] Tracker capture_

**[DHIS2-12022](https://jira.dhis2.org/browse/DHIS2-12022): Remove heavy queries from reports functionality in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-12040](https://jira.dhis2.org/browse/DHIS2-12040): Events are not shown under program statistics report**  
Components: _[App] Tracker capture_

**[DHIS2-11503](https://jira.dhis2.org/browse/DHIS2-11503): [ PotentialDuplicate ] - Flag potential duplicate**  
Components: _[App] Tracker capture_

**[DHIS2-10550](https://jira.dhis2.org/browse/DHIS2-10550): Tracker Upcoming and Overdue Events reports missing pager**  
Components: _[App] Tracker capture_

**[DHIS2-11751](https://jira.dhis2.org/browse/DHIS2-11751): Error when loading usage statistics for report tables event type**  
Components: _[App] Usage analytics_

**[DHIS2-13003](https://jira.dhis2.org/browse/DHIS2-13003): Cannot create user if value of optional attributes have not been set**  
Components: _[App] User_

**[DHIS2-12877](https://jira.dhis2.org/browse/DHIS2-12877): User's database language not shown**  
Components: _[App] User_

**[DHIS2-12771](https://jira.dhis2.org/browse/DHIS2-12771): Leave group under user group is not working**  
Components: _[App] User_

**[DHIS2-12767](https://jira.dhis2.org/browse/DHIS2-12767): Year yyyy is not shown correctly in the account expiration date field**  
Components: _[App] User_

**[DHIS2-12579](https://jira.dhis2.org/browse/DHIS2-12579): Error message when trying to create user by email invitation/create new user**  
Components: _[App] User_

**[DHIS2-13154](https://jira.dhis2.org/browse/DHIS2-13154): 2FA status is not persisted**  
Components: _[App] User Profile_

**[DHIS2-12009](https://jira.dhis2.org/browse/DHIS2-12009): More lax validation for allowed IPs/referrers in personal access tokens page**  
Components: _[App] User Profile_


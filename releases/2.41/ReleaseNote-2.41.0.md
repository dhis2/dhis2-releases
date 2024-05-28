# Patch 2.41.0 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-15949](https://dhis2.atlassian.net/browse/DHIS2-15949): Add data value set import options for aggregate data exchange target**  
Components: _[API] Aggregate Data Exchange_

**[DHIS2-16814](https://dhis2.atlassian.net/browse/DHIS2-16814): Introduce data level sharing for aggregate data exchange**  
Components: _[API] Aggregate Data Exchange_

**[DHIS2-17481](https://dhis2.atlassian.net/browse/DHIS2-17481): "New" calculation of outliers in the "old" API**  
Components: _[API] Analytics_

**[DHIS2-16807](https://dhis2.atlassian.net/browse/DHIS2-16807): Add support for custom labels in the response headers of the TE API**  
Components: _[API] Analytics_

**[DHIS2-17026](https://dhis2.atlassian.net/browse/DHIS2-17026): Analytics Enrollments API - round to two decimals by default**  
Components: _[API] Analytics_

**[DHIS2-16726](https://dhis2.atlassian.net/browse/DHIS2-16726): Period dimension items to use the correct AND / OR filtering**  
Components: _[API] Analytics_

**[DHIS2-16437](https://dhis2.atlassian.net/browse/DHIS2-16437): Return program metadata for cross-program dimensions in EventVisualization**  
Components: _[API] Analytics_

**[DHIS2-14956](https://dhis2.atlassian.net/browse/DHIS2-14956): Add "Sorting" object to "EventVisualization"**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-15874](https://dhis2.atlassian.net/browse/DHIS2-15874): Allow periodOffset within subExpression**  
Components: _[API] Analytics_

**[DHIS2-15725](https://dhis2.atlassian.net/browse/DHIS2-15725): Support multi-programs in EventVisualization entity**  
Components: _[API] Analytics_

**[DHIS2-15689](https://dhis2.atlassian.net/browse/DHIS2-15689): skipRounding not saved in EVENT_VISUALIZATION AO**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-16809](https://dhis2.atlassian.net/browse/DHIS2-16809): Configure analytics table generation to be unlogged by default**  
Components: _[API] Analytics_

**[DHIS2-16598](https://dhis2.atlassian.net/browse/DHIS2-16598): Implement configurable labels for certain DHIS2 terminology [Analytics]**  
Components: _[API] Analytics_

**[DHIS2-16065](https://dhis2.atlassian.net/browse/DHIS2-16065): Improve and add new features to outliers API**  
Components: _[API] Analytics_

**[DHIS2-16025](https://dhis2.atlassian.net/browse/DHIS2-16025): Metadata for user orgunits in analytics CPL response**  
Components: _[API] Analytics_

**[DHIS2-15933](https://dhis2.atlassian.net/browse/DHIS2-15933): Metadata for user orgunits in analytics response**  
Components: _[API] Analytics_

**[DHIS2-15880](https://dhis2.atlassian.net/browse/DHIS2-15880): System setting for number of analytics table export parallel jobs**  
Components: _[API] Analytics_

**[DHIS2-16369](https://dhis2.atlassian.net/browse/DHIS2-16369): Add sorting object to Visualization**  
Components: _[API] Analytics_

**[DHIS2-15083](https://dhis2.atlassian.net/browse/DHIS2-15083): Extend indicator sub-expressions to allow multiple items**  
Components: _[API] Analytics_

**[DHIS2-16096](https://dhis2.atlassian.net/browse/DHIS2-16096): Support "created" data in Event Visualization entity, as SimpleDimension**  
Components: _[API] Analytics_

**[DHIS2-14420](https://dhis2.atlassian.net/browse/DHIS2-14420): [D23]Distinguish non-existent repetitions from empty values in enrollment analytics api**  
Components: _[API] Analytics_

**[DHIS2-15501](https://dhis2.atlassian.net/browse/DHIS2-15501): Include full column titles when downloading the line lists from the line-listing app**  
Components: _[API] Analytics_

**[DHIS2-15182](https://dhis2.atlassian.net/browse/DHIS2-15182): Add support to download of TEI in all formats supported (like the Download menu in the Line Listing app)**  
Components: _[API] Analytics_

**[DHIS2-15427](https://dhis2.atlassian.net/browse/DHIS2-15427): Add support for programId parameter in events/query/dimensions endpoint**  
Components: _[API] Analytics_

**[DHIS2-14897](https://dhis2.atlassian.net/browse/DHIS2-14897): Add support for param "dataIdScheme"**  
Components: _[API] Analytics_

**[DHIS2-14891](https://dhis2.atlassian.net/browse/DHIS2-14891): [D23] Add support for param "outputIdScheme"**  
Components: _[API] Analytics_

**[DHIS2-14816](https://dhis2.atlassian.net/browse/DHIS2-14816): Implement "nulls last" in TEI queries/endpoint**  
Components: _[API] Analytics_

**[DHIS2-14818](https://dhis2.atlassian.net/browse/DHIS2-14818): [C23] TEI with Program Indicator as filter or dimension not working**  
Components: _[API] Analytics_

**[DHIS2-14819](https://dhis2.atlassian.net/browse/DHIS2-14819): [C23] TEI with Event Data Element as dimension not working**  
Components: _[API] Analytics_

**[DHIS2-14821](https://dhis2.atlassian.net/browse/DHIS2-14821): The param "enrollmentDate" and "eventDate" should be validated to avoid DB query errors**  
Components: _[API] Analytics_

**[DHIS2-14853](https://dhis2.atlassian.net/browse/DHIS2-14853): [C23] Add default period of LAST_12_MONTHS**  
Components: _[API] Analytics_

**[DHIS2-14887](https://dhis2.atlassian.net/browse/DHIS2-14887): [D23] Add support for param "ouMode"**  
Components: _[API] Analytics_

**[DHIS2-13795](https://dhis2.atlassian.net/browse/DHIS2-13795): [M] Implement filtering by EnrollmentDate with offset in Cross Program Line listing**  
Components: _[API] Analytics_

**[DHIS2-14794](https://dhis2.atlassian.net/browse/DHIS2-14794): [D23] Spike of missing query params (that make sense for TEI)**  
Components: _[API] Analytics_

**[DHIS2-17021](https://dhis2.atlassian.net/browse/DHIS2-17021): Optionally serve all apps through a global app shell**  
Components: _[API] App management_

**[DHIS2-16722](https://dhis2.atlassian.net/browse/DHIS2-16722): Data administration: Data integrity checks UI**  
Components: _[API] Data administration_

**[DHIS2-14718](https://dhis2.atlassian.net/browse/DHIS2-14718): Scheduled refresh job for materialized views**  
Components: _[API] Data administration_

**[DHIS2-16226](https://dhis2.atlassian.net/browse/DHIS2-16226): Create SQL based integrity check for organisation units without groups**  
Components: _[API] Data administration_

**[DHIS2-15745](https://dhis2.atlassian.net/browse/DHIS2-15745): Job Scheduler - Use scheduler for async import of data set completions**  
Components: _[API] Data Entry_

**[DHIS2-16531](https://dhis2.atlassian.net/browse/DHIS2-16531): Include report errors in persistent job errors for async data value imports**  
Components: _[API] Data Import_

**[DHIS2-16223](https://dhis2.atlassian.net/browse/DHIS2-16223): Data Integrity - Improved execution model**  
Components: _[API] Data Integrity_

**[DHIS2-15626](https://dhis2.atlassian.net/browse/DHIS2-15626): Allow users to implement their own integrity checks**  
Components: _[API] Data Integrity_

**[DHIS2-17469](https://dhis2.atlassian.net/browse/DHIS2-17469): Partial & Rolling data store updates**  
Components: _[API] Data store_

**[DHIS2-16134](https://dhis2.atlassian.net/browse/DHIS2-16134): Apply sharing to data store entry retrieval**  
Components: _[API] Data store_

**[DHIS2-15959](https://dhis2.atlassian.net/browse/DHIS2-15959): Apply sharing to listing of keys for namespace in data store**  
Components: _[API] Data store_

**[DHIS2-15746](https://dhis2.atlassian.net/browse/DHIS2-15746): Datastore API - Allow add or update with a single endpoint call**  
Components: _[API] Data store_

**[DHIS2-16215](https://dhis2.atlassian.net/browse/DHIS2-16215): Remove sharingRespected property in datastore namespaces**  
Components: _[API] Data store_

**[DHIS2-16872](https://dhis2.atlassian.net/browse/DHIS2-16872): CustomIcon refactor**  
Components: _[API] File Resources_, _[API] Tracker_, _[App] Maintenance_

**[DHIS2-17174](https://dhis2.atlassian.net/browse/DHIS2-17174): Support other filestores than s3**  
Components: _[API] File Resources_

**[DHIS2-15414](https://dhis2.atlassian.net/browse/DHIS2-15414): File Resource owner reverse lookup for custom icons**  
Components: _[API] File Resources_

**[DHIS2-16183](https://dhis2.atlassian.net/browse/DHIS2-16183): Jobs : Store import errors as part of job progress tracking, provide error search API**  
Components: _[API] Job scheduler_, _[Core] Job Scheduler_

**[DHIS2-16406](https://dhis2.atlassian.net/browse/DHIS2-16406): Allow running queues manually**  
Components: _[API] Job scheduler_

**[DHIS2-15702](https://dhis2.atlassian.net/browse/DHIS2-15702): Job Scheduler - Use scheduler for async metadata import**  
Components: _[API] Job scheduler_, _[Core] Job Scheduler_

**[DHIS2-15166](https://dhis2.atlassian.net/browse/DHIS2-15166): Scheduling Manager: Execute jobs as a certain User**  
Components: _[API] Job scheduler_

**[DHIS2-14902](https://dhis2.atlassian.net/browse/DHIS2-14902): Scheduler API: nextExecutionTime as computed property**  
Components: _[API] Job scheduler_

**[DHIS2-15027](https://dhis2.atlassian.net/browse/DHIS2-15027): Job Scheduler: Scheduling based on Database state**  
Components: _[API] Job scheduler_

**[DHIS2-14929](https://dhis2.atlassian.net/browse/DHIS2-14929): Job queues: Rename a queue via update as shortcut to delete and create a queue**  
Components: _[API] Job scheduler_

**[DHIS2-16401](https://dhis2.atlassian.net/browse/DHIS2-16401): Allow showing totals in Gist API via query parameter totalPages**  
Components: _[API] Metadata Gist_

**[DHIS2-15279](https://dhis2.atlassian.net/browse/DHIS2-15279): Clone program**  
Components: _[API] Metadata import-export_

**[DHIS2-14458](https://dhis2.atlassian.net/browse/DHIS2-14458): Indicator type merge**  
Components: _[API] Metadata model_

**[DHIS2-4308](https://dhis2.atlassian.net/browse/DHIS2-4308): Storage Key Back to Storage Metadata API**  
Components: _[API] Metadata model_

**[DHIS2-16043](https://dhis2.atlassian.net/browse/DHIS2-16043): Extend the Icon metadata to include created and lastUpdated**  
Components: _[API] Metadata model_

**[DHIS2-15498](https://dhis2.atlassian.net/browse/DHIS2-15498): Deprecate and remove old generic PATCH method in API**  
Components: _[API] Metadata model_

**[DHIS2-14274](https://dhis2.atlassian.net/browse/DHIS2-14274): New domain type for FileResources (CUSTOM_ICON)**  
Components: _[API] Metadata model_

**[DHIS2-15036](https://dhis2.atlassian.net/browse/DHIS2-15036): File Resource - Support read-only CRUD API**  
Components: _[API] Metadata model_

**[DHIS2-16921](https://dhis2.atlassian.net/browse/DHIS2-16921): Extend route API to support additional HTTP methods**  
Components: _[API] Other_

**[DHIS2-14812](https://dhis2.atlassian.net/browse/DHIS2-14812): Publicly accessible endpoint for /api/locales/ui**  
Components: _[API] Other_

**[DHIS2-16941](https://dhis2.atlassian.net/browse/DHIS2-16941): Decide how to serve html templates for login app**  
Components: _[API] Other_

**[DHIS2-16942](https://dhis2.atlassian.net/browse/DHIS2-16942): Provide fallback safe login page**  
Components: _[API] Other_

**[DHIS2-16940](https://dhis2.atlassian.net/browse/DHIS2-16940): Serve login page as an app**  
Components: _[API] Other_

**[DHIS2-15108](https://dhis2.atlassian.net/browse/DHIS2-15108): System setting for SQL views needing write permission**  
Components: _[API] Other_, _[API] System configuration_

**[DHIS2-11658](https://dhis2.atlassian.net/browse/DHIS2-11658): Field filtering for /dataStatistics endpoint**  
Components: _[API] Other_

**[DHIS2-16044](https://dhis2.atlassian.net/browse/DHIS2-16044): Add support for filtering in the icons endpoint**  
Components: _[API] Other_

**[DHIS2-16046](https://dhis2.atlassian.net/browse/DHIS2-16046): Add support for pagination in the icons api**  
Components: _[API] Other_

**[DHIS2-16945](https://dhis2.atlassian.net/browse/DHIS2-16945): api version needs to be exposed in loginConfig**  
Components: _[API] Other_

**[DHIS2-16943](https://dhis2.atlassian.net/browse/DHIS2-16943): Expose recaptcha site key in loginConfig**  
Components: _[API] Other_

**[DHIS2-15509](https://dhis2.atlassian.net/browse/DHIS2-15509): Use hibernate tag <bag> to map java.util.List**  
Components: _[API] Other_

**[DHIS2-12167](https://dhis2.atlassian.net/browse/DHIS2-12167): Support "exact case insensitive" meta-data filter operator**  
Components: _[API] Other_

**[DHIS2-14907](https://dhis2.atlassian.net/browse/DHIS2-14907): Include language in language name for locales**  
Components: _[API] Other_

**[DHIS2-9832](https://dhis2.atlassian.net/browse/DHIS2-9832): Predictions by category option combination**  
Components: _[API] Predictors_, _[App] Maintenance_

**[DHIS2-14613](https://dhis2.atlassian.net/browse/DHIS2-14613): Login endpoint**  
Components: _[API] Security_, _[API] User_

**[DHIS2-14615](https://dhis2.atlassian.net/browse/DHIS2-14615): Self registration endpoint**  
Components: _[API] Security_, _[API] User_

**[DHIS2-14617](https://dhis2.atlassian.net/browse/DHIS2-14617): Invitation endpoint**  
Components: _[API] Security_, _[API] User_

**[DHIS2-14618](https://dhis2.atlassian.net/browse/DHIS2-14618): Password reset endpoint**  
Components: _[API] Security_, _[API] User_

**[DHIS2-16972](https://dhis2.atlassian.net/browse/DHIS2-16972): make endpoints accessible if they include api**  
Components: _[API] Security_

**[DHIS2-13776](https://dhis2.atlassian.net/browse/DHIS2-13776): Merge data value and min-max authorities for add and delete**  
Components: _[API] Security_

**[DHIS2-10886](https://dhis2.atlassian.net/browse/DHIS2-10886): Disallow case-sensitive username on user creation**  
**[DHIS2-14681](https://dhis2.atlassian.net/browse/DHIS2-14681): Public endpoint for retrieving system appearance**  
Components: _[API] System configuration_

**[DHIS2-16856](https://dhis2.atlassian.net/browse/DHIS2-16856): [Backend] Paging and sorting for events change log**  
Components: _[API] Tracker_

**[DHIS2-16740](https://dhis2.atlassian.net/browse/DHIS2-16740): [Backend] Add endpoint to get events changelog**  
Components: _[API] Tracker_

**[DHIS2-16741](https://dhis2.atlassian.net/browse/DHIS2-16741): [Backend] Add endpoint to get tracked entity attributes changelog**  
Components: _[API] Tracker_

**[DHIS2-16964](https://dhis2.atlassian.net/browse/DHIS2-16964): [Backend] Implement sorting for tracked entity attributes change log + filter by program uid.**  
Components: _[API] Tracker_

**[DHIS2-16696](https://dhis2.atlassian.net/browse/DHIS2-16696): Add tracker endpoint to download data element images**  
Components: _[API] Tracker_

**[DHIS2-16326](https://dhis2.atlassian.net/browse/DHIS2-16326): Implement configurable labels for certain DHIS2 terminology [Tracker]**  
Components: _[API] Tracker_

**[DHIS2-16763](https://dhis2.atlassian.net/browse/DHIS2-16763): Add tracker endpoint to download attribute images**  
Components: _[API] Tracker_

**[DHIS2-16681](https://dhis2.atlassian.net/browse/DHIS2-16681): Add tracker endpoint to download data element files**  
Components: _[API] Tracker_

**[DHIS2-16701](https://dhis2.atlassian.net/browse/DHIS2-16701): Add tracker endpoint to download attribute files**  
Components: _[API] Tracker_

**[DHIS2-15666](https://dhis2.atlassian.net/browse/DHIS2-15666): Add createdAtClient to relationships**  
Components: _[API] Tracker_

**[DHIS2-15900](https://dhis2.atlassian.net/browse/DHIS2-15900): Support /tracker/events?order=createdAtClient/updatedAtClient**  
Components: _[API] Tracker_

**[DHIS2-15035](https://dhis2.atlassian.net/browse/DHIS2-15035): Support for adding comments in program indicator expressions**  
Components: _[API] Tracker_

## Bugs

**[DHIS2-16440](https://dhis2.atlassian.net/browse/DHIS2-16440): aggregateDataExchanges patch requires you to provide authentication details**  
Components: _[API] Aggregate Data Exchange_

**[DHIS2-17405](https://dhis2.atlassian.net/browse/DHIS2-17405): Analytics TE query API - Random SQL error in query**  
Components: _[API] Analytics_

**[DHIS2-16542](https://dhis2.atlassian.net/browse/DHIS2-16542): EventVisualization: remove column restriction in "sorting" object**  
Components: _[API] Analytics_

**[DHIS2-16523](https://dhis2.atlassian.net/browse/DHIS2-16523): Remove "maxResults" validation in EventVisualization**  
Components: _[API] Analytics_

**[DHIS2-17028](https://dhis2.atlassian.net/browse/DHIS2-17028): Analytics enrollments query API returning duplicated values**  
Components: _[API] Analytics_

**[DHIS2-16709](https://dhis2.atlassian.net/browse/DHIS2-16709): Different results in repeatable events, between analytics/enrollments and analytics/trackedEntities APIs**  
Components: _[API] Analytics_

**[DHIS2-17025](https://dhis2.atlassian.net/browse/DHIS2-17025): Repeated events with scheduled event returned as the most recent**  
**[DHIS2-17099](https://dhis2.atlassian.net/browse/DHIS2-17099): Analytics Enrollment and TE Query endpoints shouldn't return scheduled events**  
Components: _[API] Analytics_

**[DHIS2-17104](https://dhis2.atlassian.net/browse/DHIS2-17104): Analytics tracked entity endpoint: value type for "enrollmentdate" is wrong**  
Components: _[API] Analytics_

**[DHIS2-15845](https://dhis2.atlassian.net/browse/DHIS2-15845): Add error handling for Calculation in Maps**  
Components: _[API] Analytics_

**[DHIS2-17029](https://dhis2.atlassian.net/browse/DHIS2-17029): Analytics TE query API - rowContext still returning invalid results**  
Components: _[API] Analytics_

**[DHIS2-17027](https://dhis2.atlassian.net/browse/DHIS2-17027): Analytics Enrollments Query API - skipRounding not working**  
Components: _[API] Analytics_

**[DHIS2-16533](https://dhis2.atlassian.net/browse/DHIS2-16533): TE analytics API - Meta data should return only dimension, filter objects, programs, headers and sorting params**  
Components: _[API] Analytics_

**[DHIS2-16459](https://dhis2.atlassian.net/browse/DHIS2-16459): Operators NE:NV, IEQ, !IEQ not supported on /trackedEntities**  
Components: _[API] Analytics_

**[DHIS2-16379](https://dhis2.atlassian.net/browse/DHIS2-16379): Analytics TEI API: metadata not returning full qualified uid**  
Components: _[API] Analytics_

**[DHIS2-16743](https://dhis2.atlassian.net/browse/DHIS2-16743): Wrong handling of multiple items**  
Components: _[API] Analytics_

**[DHIS2-16382](https://dhis2.atlassian.net/browse/DHIS2-16382): trackedEntities response returns NaN values**  
Components: _[API] Analytics_

**[DHIS2-16692](https://dhis2.atlassian.net/browse/DHIS2-16692): Using [0] repetition offset throws a 409 error**  
Components: _[API] Analytics_

**[DHIS2-16397](https://dhis2.atlassian.net/browse/DHIS2-16397): Request to /analytics/trackedEntities throws 409 error unexpectedly**  
Components: _[API] Analytics_

**[DHIS2-16419](https://dhis2.atlassian.net/browse/DHIS2-16419): Registration and enrollment orgunit dimension items not separated**  
Components: _[API] Analytics_

**[DHIS2-16510](https://dhis2.atlassian.net/browse/DHIS2-16510): Multiple items for the same dimension produce a wrong sql condition**  
Components: _[API] Analytics_

**[DHIS2-16513](https://dhis2.atlassian.net/browse/DHIS2-16513): /trackedEntities returns boolean values as strings instead of numerics**  
Components: _[API] Analytics_

**[DHIS2-16708](https://dhis2.atlassian.net/browse/DHIS2-16708): Analytics trackedEntities endpoint fails with multiple period for "enrollmentDate"**  
Components: _[API] Analytics_

**[DHIS2-16749](https://dhis2.atlassian.net/browse/DHIS2-16749): Support ORGANISATION_UNIT_GROUP_SET and other TET attribute types in TEI analytics**  
Components: _[API] Analytics_

**[DHIS2-16733](https://dhis2.atlassian.net/browse/DHIS2-16733): EventVisualization: "repetition" in columns is not consistent with previous DHIS2 version**  
Components: _[API] Analytics_

**[DHIS2-16886](https://dhis2.atlassian.net/browse/DHIS2-16886): Tracked entity analytics row context returning invalid "not defined"**  
Components: _[API] Analytics_

**[DHIS2-17105](https://dhis2.atlassian.net/browse/DHIS2-17105): Analytics trackedEntities endpoint, "skipRounding" not working**  
Components: _[API] Analytics_

**[DHIS2-16742](https://dhis2.atlassian.net/browse/DHIS2-16742): stageOffset is missing from headers**  
Components: _[API] Analytics_

**[DHIS2-17143](https://dhis2.atlassian.net/browse/DHIS2-17143): Analytics TE query API - error comparing time**  
Components: _[API] Analytics_

**[DHIS2-17140](https://dhis2.atlassian.net/browse/DHIS2-17140): Analytics TE query API - ValueType "TIME" not properly supported**  
Components: _[API] Analytics_

**[DHIS2-17142](https://dhis2.atlassian.net/browse/DHIS2-17142): Analytics TE query API - error related to Time dimension**  
Components: _[API] Analytics_

**[DHIS2-17147](https://dhis2.atlassian.net/browse/DHIS2-17147): Analytics TE query API - numbers sorted as strings**  
Components: _[API] Analytics_

**[DHIS2-17145](https://dhis2.atlassian.net/browse/DHIS2-17145): Analytics TE query API, inconsistency in data**  
Components: _[API] Analytics_

**[DHIS2-17172](https://dhis2.atlassian.net/browse/DHIS2-17172): TE analytics API - "outputIdScheme" not working as expected**  
**[DHIS2-17194](https://dhis2.atlassian.net/browse/DHIS2-17194): Error running analytics when a specific year is selected (year != ALL)**  
Components: _[API] Analytics_

**[DHIS2-15199](https://dhis2.atlassian.net/browse/DHIS2-15199): Analytics events query fails with SQL grammar exception**  
Components: _[API] Analytics_

**[DHIS2-15278](https://dhis2.atlassian.net/browse/DHIS2-15278): Program Indicators returned with too many decimal places**  
Components: _[API] Analytics_

**[DHIS2-15873](https://dhis2.atlassian.net/browse/DHIS2-15873): Program Indicator Calculation Error on Reusing Data Elements Across Program Stages**  
Components: _[API] Analytics_

**[DHIS2-16951](https://dhis2.atlassian.net/browse/DHIS2-16951): Analytics outliers: incorrect validation of org. units**  
Components: _[API] Analytics_

**[DHIS2-16418](https://dhis2.atlassian.net/browse/DHIS2-16418): Filter using "IN:NV", in analytics enrollments query should not return "ND" values**  
Components: _[API] Analytics_

**[DHIS2-16894](https://dhis2.atlassian.net/browse/DHIS2-16894): Analytics outliers API: period not fully supported. Missing fixed types.**  
Components: _[API] Analytics_

**[DHIS2-16982](https://dhis2.atlassian.net/browse/DHIS2-16982): TEI: Bug in the repositioning of rowContext column indexes.**  
Components: _[API] Analytics_

**[DHIS2-16720](https://dhis2.atlassian.net/browse/DHIS2-16720): Analytics Tracker Entity Export fails for Org. Unit Types Attributes**  
Components: _[API] Analytics_

**[DHIS2-16800](https://dhis2.atlassian.net/browse/DHIS2-16800): Some static dimension doesn't work when no restriction is provided**  
Components: _[API] Analytics_

**[DHIS2-15936](https://dhis2.atlassian.net/browse/DHIS2-15936): Aggregating boolean to numeric doesn't work in indicator subExpression**  
Components: _[API] Analytics_

**[DHIS2-12495](https://dhis2.atlassian.net/browse/DHIS2-12495): Tracker program table isn't generated**  
Components: _[API] Analytics_

**[DHIS2-16315](https://dhis2.atlassian.net/browse/DHIS2-16315): Analytics API returns wrong valueType for tracker data elements**  
Components: _[API] Analytics_

**[DHIS2-12346](https://dhis2.atlassian.net/browse/DHIS2-12346): Data elements do not show 0 values and Indicators are not calculated**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-15781](https://dhis2.atlassian.net/browse/DHIS2-15781): Line listing hangs with a spinner loading when clicking on "See Interpretation" when the line list has no time dimensions**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-16368](https://dhis2.atlassian.net/browse/DHIS2-16368): Tei Dimension endpoint should return Program prefix for ProgramIndicators items**  
Components: _[API] Analytics_

**[DHIS2-15069](https://dhis2.atlassian.net/browse/DHIS2-15069): Sharing settings on program indicators do not work**  
Components: _[API] Analytics_, _[App] Event reports_, _[App] Event visualizer_, _[App] Line Listing_

**[DHIS2-16420](https://dhis2.atlassian.net/browse/DHIS2-16420): Simple dimensions mixing up program and programStage**  
**[DHIS2-15597](https://dhis2.atlassian.net/browse/DHIS2-15597): Error 500 on Visualizer**  
Components: _[API] Analytics_

**[DHIS2-15573](https://dhis2.atlassian.net/browse/DHIS2-15573): Errors executing analytics due invalid date and period**  
Components: _[API] Analytics_

**[DHIS2-14454](https://dhis2.atlassian.net/browse/DHIS2-14454): Event Report app loading infinitely for pivot table and certain option sets [Console shows "Uncaught TypeError")**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-16194](https://dhis2.atlassian.net/browse/DHIS2-16194): Analytics Tracked Entity API should not check OUGS permission**  
Components: _[API] Analytics_

**[DHIS2-16195](https://dhis2.atlassian.net/browse/DHIS2-16195): Missing support for exclamation mark in operators, in analytics TEI API**  
Components: _[API] Analytics_

**[DHIS2-15184](https://dhis2.atlassian.net/browse/DHIS2-15184): Return friendly error message when analytics queries fail to execute.**  
Components: _[API] Analytics_

**[DHIS2-13773](https://dhis2.atlassian.net/browse/DHIS2-13773): Deleting SQL view metadata that references resource tables and/or analytics tables can then block resource tables and/or analytics**  
Components: _[API] Analytics_, _[App] Data administration_

**[DHIS2-11509](https://dhis2.atlassian.net/browse/DHIS2-11509): Export of Event report: DE with optionSet doesn't use translation**  
Components: _[API] Analytics_

**[DHIS2-16202](https://dhis2.atlassian.net/browse/DHIS2-16202): Repeatable stage with index 0 returns error**  
Components: _[API] Analytics_

**[DHIS2-16203](https://dhis2.atlassian.net/browse/DHIS2-16203): Headers not returned for repeatable stage/events**  
Components: _[API] Analytics_

**[DHIS2-15775](https://dhis2.atlassian.net/browse/DHIS2-15775): Option codes and OptionSet association is missing in metadata**  
Components: _[API] Analytics_

**[DHIS2-14971](https://dhis2.atlassian.net/browse/DHIS2-14971): Zero value for enrollment PI in a single period aggregates to zero value in multi-period Single Value chart**  
Components: _[API] Analytics_

**[DHIS2-15372](https://dhis2.atlassian.net/browse/DHIS2-15372): Month names are not same as the report in the PDF**  
Components: _[API] Analytics_

**[DHIS2-13173](https://dhis2.atlassian.net/browse/DHIS2-13173): [M][L][F][E] Param displayProperty:SHORTNAME doesn't return short name**  
Components: _[API] Analytics_

**[DHIS2-15791](https://dhis2.atlassian.net/browse/DHIS2-15791): /analytics API doesn't return the hierarchy for OUs that don't have data**  
Components: _[API] Analytics_

**[DHIS2-14906](https://dhis2.atlassian.net/browse/DHIS2-14906): [D23] Users should be able to see EDIs by default in shared dashboards**  
Components: _[API] Analytics_

**[DHIS2-14923](https://dhis2.atlassian.net/browse/DHIS2-14923): 500 internal server error for calls to the orgUnitAnalytics API, when query references an ou group set that is not set to be a data dimension (Leading to error in Org unit distribution report)**  
Components: _[API] Analytics_

**[DHIS2-15502](https://dhis2.atlassian.net/browse/DHIS2-15502): Event report showing only 101 rows in first page and not navigated to next page**  
Components: _[API] Analytics_

**[DHIS2-15268](https://dhis2.atlassian.net/browse/DHIS2-15268): Cannot save visualisations with a fixed future period which does not exist in the database**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-15093](https://dhis2.atlassian.net/browse/DHIS2-15093): Performance issue in /analytics**  
Components: _[API] Analytics_

**[DHIS2-11041](https://dhis2.atlassian.net/browse/DHIS2-11041): Can access visualizations that user doesn't have access to in visualizations/{:id}.json endpoint**  
Components: _[API] Analytics_

**[DHIS2-15684](https://dhis2.atlassian.net/browse/DHIS2-15684): Invalid Period object in the /analytics endpoint**  
Components: _[API] Analytics_

**[DHIS2-14769](https://dhis2.atlassian.net/browse/DHIS2-14769): Program indicators - custom aggregation with count distinct (With Text Fields)**  
Components: _[API] Analytics_

**[DHIS2-13611](https://dhis2.atlassian.net/browse/DHIS2-13611): [I,J,K, L, M] Error response from geoFeatures api is confusing**  
Components: _[API] Analytics_

**[DHIS2-15044](https://dhis2.atlassian.net/browse/DHIS2-15044): Visualizer download resulting in ERR_INVALID_RESPONSE when ALL_ITEMS is in use**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-15628](https://dhis2.atlassian.net/browse/DHIS2-15628): Line Listing fails to save**  
Components: _[API] Analytics_

**[DHIS2-15364](https://dhis2.atlassian.net/browse/DHIS2-15364): Missing options (of option set) in Analytics events/aggregate API**  
Components: _[API] Analytics_

**[DHIS2-14932](https://dhis2.atlassian.net/browse/DHIS2-14932): Visualization download should remove redundant "0" digits for Program Indicators**  
Components: _[API] Analytics_

**[DHIS2-14240](https://dhis2.atlassian.net/browse/DHIS2-14240): visualizations/UID/data.csv returns 500 or no data when DEG is used in favorite**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-15467](https://dhis2.atlassian.net/browse/DHIS2-15467): Org. Unit Ownership: export fails with NPE**  
Components: _[API] Analytics_

**[DHIS2-14442](https://dhis2.atlassian.net/browse/DHIS2-14442): [A23] Scheduled events missing when using fixed monthly periods**  
Components: _[API] Analytics_

**[DHIS2-15106](https://dhis2.atlassian.net/browse/DHIS2-15106): [D23] EDIs name/shortName should not be unique**  
Components: _[API] Analytics_

**[DHIS2-15059](https://dhis2.atlassian.net/browse/DHIS2-15059): Add specific restriction to /dataItems endpoint for EDIs**  
Components: _[API] Analytics_

**[DHIS2-14981](https://dhis2.atlassian.net/browse/DHIS2-14981): [D23] Support "lastupdatedatclient/createdAtClient" in analytics table export (events)**  
Components: _[API] Analytics_

**[DHIS2-15010](https://dhis2.atlassian.net/browse/DHIS2-15010): [D23] Make shortName mandatory/unique for ExpressionDimensionItem**  
Components: _[API] Analytics_

**[DHIS2-14908](https://dhis2.atlassian.net/browse/DHIS2-14908): [D23] Search feature in Dashboard edition should bring only LINE_LIST visualizations for Line Listing app**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14910](https://dhis2.atlassian.net/browse/DHIS2-14910): [D23] Remove existing core apps from Dashboard search results**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-16794](https://dhis2.atlassian.net/browse/DHIS2-16794): Core app installation via app-management app not working as expected**  
Components: _[API] App management_

**[DHIS2-15766](https://dhis2.atlassian.net/browse/DHIS2-15766): Installed app version are not retained after restart of DHIS2**  
Components: _[API] App management_

**[DHIS2-16256](https://dhis2.atlassian.net/browse/DHIS2-16256): Return all completed data integrity summaries regardless of if they are slow or not**  
Components: _[API] Data administration_

**[DHIS2-15837](https://dhis2.atlassian.net/browse/DHIS2-15837): dataApprovals/categoryOptionCombos returns no results**  
Components: _[API] Data approval_

**[DHIS2-15531](https://dhis2.atlassian.net/browse/DHIS2-15531): Hibernate error at startup : [org.hisp.dhis.period.PeriodType] : Discriminator: QuarterlyNov**  
Components: _[API] Database migration_

**[DHIS2-16937](https://dhis2.atlassian.net/browse/DHIS2-16937): Error on "Get PDF for data entry" on DHIS versions 2.38, 2.39, and 2.40.**  
Components: _[API] Data Entry_

**[DHIS2-15631](https://dhis2.atlassian.net/browse/DHIS2-15631): Decimal places not setting**  
Components: _[API] Data Entry_

**[DHIS2-16290](https://dhis2.atlassian.net/browse/DHIS2-16290): Data value sets should not be able to be completed in the future**  
Components: _[API] Data Import_

**[DHIS2-16728](https://dhis2.atlassian.net/browse/DHIS2-16728): Data integrity detailed-check for "data_elements_aggregate_abandoned" throws error**  
Components: _[API] Data Integrity_

**[DHIS2-15723](https://dhis2.atlassian.net/browse/DHIS2-15723): UserDataStore should support query, filtering, sorting, and pagination**  
Components: _[API] Data store_

**[DHIS2-16422](https://dhis2.atlassian.net/browse/DHIS2-16422): Consistent format for data store entries response with paging enabled or disabled**  
Components: _[API] Data store_


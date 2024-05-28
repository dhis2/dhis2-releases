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

**[DHIS2-15409](https://dhis2.atlassian.net/browse/DHIS2-15409): Custom icon link**  
Components: _[API] Tracker_

**[DHIS2-15258](https://dhis2.atlassian.net/browse/DHIS2-15258): Add /maintenance/softDeletedRemoval for trackedEntity, enrollment and event**  
Components: _[API] Tracker_, _[App] Maintenance_

**[DHIS2-14737](https://dhis2.atlassian.net/browse/DHIS2-14737): Add validation for multi text value type in the tracker importer**  
Components: _[API] Tracker_

**[DHIS2-15039](https://dhis2.atlassian.net/browse/DHIS2-15039): Create new endpoints to CRUD custom icons**  
Components: _[API] Tracker_

**[DHIS2-17031](https://dhis2.atlassian.net/browse/DHIS2-17031): Expose registered OpenID-Connect providers in login config**  
Components: _[API] User_

**[DHIS2-17002](https://dhis2.atlassian.net/browse/DHIS2-17002): implement section before and after functionality**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-16434](https://dhis2.atlassian.net/browse/DHIS2-16434): Aggregate Data Exchange: add configurations UI**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-15012](https://dhis2.atlassian.net/browse/DHIS2-15012): [AGGREGATE EXCHANGE APP] Update clipboard text with more information**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-14852](https://dhis2.atlassian.net/browse/DHIS2-14852): Add org. units full hierarchy column**  
Components: _[App] Analytics_

**[DHIS2-16922](https://dhis2.atlassian.net/browse/DHIS2-16922): Delete Tracked entity from profile Widget**  
Components: _[App] Capture_

**[DHIS2-15170](https://dhis2.atlassian.net/browse/DHIS2-15170): Adjust context selector "New" button**  
Components: _[App] Capture_

**[DHIS2-16291](https://dhis2.atlassian.net/browse/DHIS2-16291): Related stages:  Widget for new event (tracker programs)**  
Components: _[App] Capture_

**[DHIS2-13233](https://dhis2.atlassian.net/browse/DHIS2-13233): Download TE working lists**  
Components: _[App] Capture_

**[DHIS2-16789](https://dhis2.atlassian.net/browse/DHIS2-16789): Preview images in tracked entity working lists**  
Components: _[App] Capture_

**[DHIS2-15392](https://dhis2.atlassian.net/browse/DHIS2-15392): Preview images in forms and views**  
Components: _[App] Capture_

**[DHIS2-16305](https://dhis2.atlassian.net/browse/DHIS2-16305): Support Plugins in the Enrollment Pages**  
Components: _[App] Capture_

**[DHIS2-14799](https://dhis2.atlassian.net/browse/DHIS2-14799): Working list for Follow up**  
Components: _[App] Capture_

**[DHIS2-15229](https://dhis2.atlassian.net/browse/DHIS2-15229): [Frontend] MULTI_TEXT in search page / relationship search**  
Components: _[App] Capture_

**[DHIS2-13237](https://dhis2.atlassian.net/browse/DHIS2-13237): Capture and show enrollment coordinates in enrollment widget**  
Components: _[App] Capture_

**[DHIS2-13800](https://dhis2.atlassian.net/browse/DHIS2-13800): Implement "Ask user to complete enrollment" flag**  
Components: _[App] Capture_

**[DHIS2-15391](https://dhis2.atlassian.net/browse/DHIS2-15391): Preview images in event lists**  
Components: _[App] Capture_

**[DHIS2-15475](https://dhis2.atlassian.net/browse/DHIS2-15475): [Frontend] Switch to Plugin-component**  
Components: _[App] Capture_

**[DHIS2-16781](https://dhis2.atlassian.net/browse/DHIS2-16781): [Frontend] Changelog paging**  
Components: _[App] Capture_

**[DHIS2-16759](https://dhis2.atlassian.net/browse/DHIS2-16759): [Frontend] Event changelog**  
Components: _[App] Capture_

**[DHIS2-16372](https://dhis2.atlassian.net/browse/DHIS2-16372): Relationship widget: Deleting relationship**  
Components: _[App] Capture_

**[DHIS2-16322](https://dhis2.atlassian.net/browse/DHIS2-16322): Instant (one-click) transfer**  
Components: _[App] Capture_

**[DHIS2-16764](https://dhis2.atlassian.net/browse/DHIS2-16764): [Frontend] Tracked entity changelog**  
Components: _[App] Capture_

**[DHIS2-15480](https://dhis2.atlassian.net/browse/DHIS2-15480): Assigned user Widget for view- and edit event (Tracker programs)**  
Components: _[App] Capture_

**[DHIS2-16262](https://dhis2.atlassian.net/browse/DHIS2-16262): Support custom Enrollment Overview and Event Workspace configuration**  
Components: _[App] Capture_

**[DHIS2-16527](https://dhis2.atlassian.net/browse/DHIS2-16527): Assign user when first stage appears on registration page**  
Components: _[App] Capture_

**[DHIS2-12256](https://dhis2.atlassian.net/browse/DHIS2-12256): Display translation of Event Date and Due Date**  
Components: _[App] Capture_, _[App] Translations_

**[DHIS2-14729](https://dhis2.atlassian.net/browse/DHIS2-14729): [Frontend] Render form field plugins in the Capture App registration page**  
Components: _[App] Capture_

**[DHIS2-12544](https://dhis2.atlassian.net/browse/DHIS2-12544): Verbose parameter for logging program rule evaluation in Capture**  
Components: _[App] Capture_

**[DHIS2-15216](https://dhis2.atlassian.net/browse/DHIS2-15216): Referral Widget: Finalise Widget and "Don't link to a response/request"**  
Components: _[App] Capture_

**[DHIS2-15214](https://dhis2.atlassian.net/browse/DHIS2-15214): Referral Widget: Link to an existing response/request**  
Components: _[App] Capture_

**[DHIS2-16123](https://dhis2.atlassian.net/browse/DHIS2-16123): "Inherit" tracked entity attributes**  
Components: _[App] Capture_

**[DHIS2-13343](https://dhis2.atlassian.net/browse/DHIS2-13343): Implement PRA "Prevent adding new events to stage" in Capture app**  
Components: _[App] Capture_

**[DHIS2-11419](https://dhis2.atlassian.net/browse/DHIS2-11419): Show assignee in stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-14405](https://dhis2.atlassian.net/browse/DHIS2-14405): Referral widget: Schedule response / request**  
Components: _[App] Capture_

**[DHIS2-15783](https://dhis2.atlassian.net/browse/DHIS2-15783): Working list title - show full working list name on hover and focus**  
Components: _[App] Capture_

**[DHIS2-14275](https://dhis2.atlassian.net/browse/DHIS2-14275): Add support for custom (non-SVG) icons in Capture App**  
Components: _[App] Capture_

**[DHIS2-14465](https://dhis2.atlassian.net/browse/DHIS2-14465): Implement AOC selection in report and schedule event workspace**  
Components: _[App] Capture_

**[DHIS2-15299](https://dhis2.atlassian.net/browse/DHIS2-15299): Escape value for attribute filter [ Capture App ]**  
Components: _[App] Capture_

**[DHIS2-14012](https://dhis2.atlassian.net/browse/DHIS2-14012): Remove the working list "Download as XML" button**  
Components: _[App] Capture_

**[DHIS2-15483](https://dhis2.atlassian.net/browse/DHIS2-15483): Assign user to scheduled events**  
Components: _[App] Capture_

**[DHIS2-15906](https://dhis2.atlassian.net/browse/DHIS2-15906): Relationships: Consider auto-generate event and first-stage on registration page for tracked entity registration**  
Components: _[App] Capture_

**[DHIS2-12616](https://dhis2.atlassian.net/browse/DHIS2-12616): Add TEI's relationship - Create new TEI to link (capture-parity edition)**  
Components: _[App] Capture_

**[DHIS2-12615](https://dhis2.atlassian.net/browse/DHIS2-12615): Add TEI's relationship - Search for existing TEI to link (capture-parity edition)**  
Components: _[App] Capture_

**[DHIS2-9661](https://dhis2.atlassian.net/browse/DHIS2-9661): Add event for first stage in registration page**  
Components: _[App] Capture_

**[DHIS2-14830](https://dhis2.atlassian.net/browse/DHIS2-14830): Rules execution for for first stage in registration page**  
Components: _[App] Capture_

**[DHIS2-14334](https://dhis2.atlassian.net/browse/DHIS2-14334): Edit enrollment date and incident date in capture**  
Components: _[App] Capture_

**[DHIS2-15185](https://dhis2.atlassian.net/browse/DHIS2-15185): Use Dhis2 DataTable component in working lists**  
Components: _[App] Capture_

**[DHIS2-14775](https://dhis2.atlassian.net/browse/DHIS2-14775): [Frontend] Build registration form metadata based on datastore config**  
Components: _[App] Capture_

**[DHIS2-14781](https://dhis2.atlassian.net/browse/DHIS2-14781): [Frontend] Render MULTI_TEXT in stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-14780](https://dhis2.atlassian.net/browse/DHIS2-14780): [Frontend] Render MULTI_TEXT in views**  
Components: _[App] Capture_

**[DHIS2-14779](https://dhis2.atlassian.net/browse/DHIS2-14779): [Frontend] Render MULTI_TEXT in working lists**  
Components: _[App] Capture_

**[DHIS2-14778](https://dhis2.atlassian.net/browse/DHIS2-14778): [Frontend] Render MULTI_TEXT in input forms**  
Components: _[App] Capture_

**[DHIS2-5437](https://dhis2.atlassian.net/browse/DHIS2-5437): Change wording for discard warning modal**  
Components: _[App] Capture_

**[DHIS2-15426](https://dhis2.atlassian.net/browse/DHIS2-15426): UI adjustments**  
Components: _[App] Capture_

**[DHIS2-14577](https://dhis2.atlassian.net/browse/DHIS2-14577): Improve search form UX (remove * etc)**  
Components: _[App] Capture_

**[DHIS2-14574](https://dhis2.atlassian.net/browse/DHIS2-14574): [Frontend] Working list templates combined TEA and events**  
Components: _[App] Capture_

**[DHIS2-15358](https://dhis2.atlassian.net/browse/DHIS2-15358): Enable legend toggle button for LL dashboard items**  
Components: _[App] Dashboard_

**[DHIS2-16143](https://dhis2.atlassian.net/browse/DHIS2-16143): Options for skipping tracked entity and outlier data**  
Components: _[App] Data administration_

**[DHIS2-16132](https://dhis2.atlassian.net/browse/DHIS2-16132): implement transposing functionality**  
Components: _[App] Data entry_

**[DHIS2-14600](https://dhis2.atlassian.net/browse/DHIS2-14600): Data Entry: Show the date and time a period will close**  
Components: _[App] Data entry_

**[DHIS2-13858](https://dhis2.atlassian.net/browse/DHIS2-13858): Outlier DQ Table**  
Components: _[App] Data visualizer_

**[DHIS2-10067](https://dhis2.atlassian.net/browse/DHIS2-10067): Error message for non-numeric data types**  
Components: _[App] Data visualizer_

**[DHIS2-5497](https://dhis2.atlassian.net/browse/DHIS2-5497): Cumulative values in pivot tables**  
Components: _[App] Data visualizer_

**[DHIS2-6626](https://dhis2.atlassian.net/browse/DHIS2-6626): Items in sidebar not clickable full width**  
Components: _[App] Data visualizer_

**[DHIS2-15657](https://dhis2.atlassian.net/browse/DHIS2-15657): User friendly error screens for E7144 and E7145**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-15691](https://dhis2.atlassian.net/browse/DHIS2-15691): New Analytics/Enrollment API EntryPoint**  
Components: _[App] Event reports_

**[DHIS2-15939](https://dhis2.atlassian.net/browse/DHIS2-15939): Job Scheduler - Use scheduler for async import of GeoJSON**  
Components: _[App] Import-export_

**[DHIS2-16411](https://dhis2.atlassian.net/browse/DHIS2-16411): Add cursor pointer to transfer options**  
Components: _[App] Job scheduler_

**[DHIS2-14749](https://dhis2.atlassian.net/browse/DHIS2-14749): Display job sequences in job list screen**  
Components: _[App] Job scheduler_

**[DHIS2-16189](https://dhis2.atlassian.net/browse/DHIS2-16189): Add new toggle for Scheduler app / "Analytics table" job**  
Components: _[App] Job scheduler_

**[DHIS2-16023](https://dhis2.atlassian.net/browse/DHIS2-16023): Tracked entity input and multi-program line listing**  
Components: _[App] Line Listing_

**[DHIS2-15767](https://dhis2.atlassian.net/browse/DHIS2-15767): Distinguish non-existent repetitions from empty values in line lists**  
Components: _[App] Line Listing_

**[DHIS2-15454](https://dhis2.atlassian.net/browse/DHIS2-15454): Event/enrollment ui changes to prepare for TEI cross-program support**  
Components: _[App] Line Listing_

**[DHIS2-15015](https://dhis2.atlassian.net/browse/DHIS2-15015): Remove time dimension requirement for line lists**  
Components: _[App] Line Listing_

**[DHIS2-13440](https://dhis2.atlassian.net/browse/DHIS2-13440): Search feature in Maintenance App for Option Set Options**  
Components: _[App] Maintenance_

**[DHIS2-16581](https://dhis2.atlassian.net/browse/DHIS2-16581): Add fields for configuration of configurable terminology in Maintenance**  
Components: _[App] Maintenance_

**[DHIS2-15703](https://dhis2.atlassian.net/browse/DHIS2-15703): Program indicator parser description for V{event_count} is confusing**  
Components: _[App] Maintenance_

**[DHIS2-15981](https://dhis2.atlassian.net/browse/DHIS2-15981): External GeoJSON URL layer in DHIS2 Maps**  
Components: _[App] Maps_

**[DHIS2-15762](https://dhis2.atlassian.net/browse/DHIS2-15762): Implement hash url handling in maps**  
Components: _[App] Maps_

**[DHIS2-16944](https://dhis2.atlassian.net/browse/DHIS2-16944): Settings app: Add login page theme option**  
Components: _[App] Settings_

**[DHIS2-15765](https://dhis2.atlassian.net/browse/DHIS2-15765): System Settings App - Add Scheduling Settings**  
Components: _[App] Settings_

**[DHIS2-10247](https://dhis2.atlassian.net/browse/DHIS2-10247): Rename "whitelist" and "blacklist" to "allowlist" and "blocklist"**  
Components: _[App] Settings_

**[DHIS2-15292](https://dhis2.atlassian.net/browse/DHIS2-15292): Settings App: incorporate language display name**  
Components: _[App] Settings_

**[DHIS2-13001](https://dhis2.atlassian.net/browse/DHIS2-13001): SMS gateway config doesn't add more than one gateway**  
Components: _[App] SMS configuration_

**[DHIS2-15327](https://dhis2.atlassian.net/browse/DHIS2-15327): Translations App: incorporate language display name**  
Components: _[App] Translations_

**[DHIS2-15328](https://dhis2.atlassian.net/browse/DHIS2-15328): Users app: incorporate language display name**  
Components: _[App] User_

**[DHIS2-15293](https://dhis2.atlassian.net/browse/DHIS2-15293): User Profile App: incorporate language display name**  
Components: _[App] User Profile_

**[DHIS2-16799](https://dhis2.atlassian.net/browse/DHIS2-16799): Port Partial & Rolling Update Datastore feature to UserDatastore**  
Components: _[Core] General_

**[DHIS2-16753](https://dhis2.atlassian.net/browse/DHIS2-16753): Remove Google Maps API key from DHIS2 core**  
Components: _[Core] General_

**[DHIS2-16004](https://dhis2.atlassian.net/browse/DHIS2-16004): Job Scheduler - Multi-Job Workers**  
Components: _[Core] Job Scheduler_

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

**[DHIS2-16138](https://dhis2.atlassian.net/browse/DHIS2-16138): dataValueSet API performance has drastically worsened in v40**  
Components: _[API] Data value set_

**[DHIS2-16159](https://dhis2.atlassian.net/browse/DHIS2-16159): dataValueSet API performance has drastically worsened in v40**  
Components: _[API] Data value set_

**[DHIS2-12540](https://dhis2.atlassian.net/browse/DHIS2-12540): dataValueSets request returns empty body for new data set**  
Components: _[API] Data value set_

**[DHIS2-15254](https://dhis2.atlassian.net/browse/DHIS2-15254): dataValueSets reports - ignored data value should show as ignored, not updated**  
Components: _[API] Data value set_

**[DHIS2-8084](https://dhis2.atlassian.net/browse/DHIS2-8084): Data value import can change created and last updated date**  
Components: _[API] Data value set_, _[App] Import-export_

**[DHIS2-15294](https://dhis2.atlassian.net/browse/DHIS2-15294): Data value set GET with .csv extension not working**  
Components: _[API] Data value set_

**[DHIS2-17246](https://dhis2.atlassian.net/browse/DHIS2-17246): Query executed during a POST/PUT to the events endpoint**  
Components: _[API] Events (deprecated)_

**[DHIS2-15021](https://dhis2.atlassian.net/browse/DHIS2-15021): Filter events in SEARCH orgunit fails when the program is PROTECTED**  
Components: _[API] Events (deprecated)_

**[DHIS2-14836](https://dhis2.atlassian.net/browse/DHIS2-14836): Unexpected change of eventDate we sent to the server**  
Components: _[API] Events (deprecated)_

**[DHIS2-13564](https://dhis2.atlassian.net/browse/DHIS2-13564): Dry Run ignored on custom Importer app**  
**[DHIS2-16703](https://dhis2.atlassian.net/browse/DHIS2-16703): Unable to store image in different sizes**  
Components: _[API] File Resources_, _[API] Tracker_

**[DHIS2-17292](https://dhis2.atlassian.net/browse/DHIS2-17292): The field `lastExecutedStatus` on a MetadataSync job config shows as failed even though it completes successfully**  
Components: _[API] Job scheduler_

**[DHIS2-15288](https://dhis2.atlassian.net/browse/DHIS2-15288): Job Scheduler: Leader only is a property of the JobType not the JobConfiguration**  
Components: _[API] Job scheduler_

**[DHIS2-15241](https://dhis2.atlassian.net/browse/DHIS2-15241): Scheduler API: scheduler list thows NPE when fixed delay jobs are in the list**  
Components: _[API] Job scheduler_

**[DHIS2-15699](https://dhis2.atlassian.net/browse/DHIS2-15699): Failed scheduler queue name update leaves no existing queue**  
Components: _[API] Job scheduler_

**[DHIS2-15826](https://dhis2.atlassian.net/browse/DHIS2-15826): Set logging level of heart beat job to debug**  
Components: _[API] Job scheduler_

**[DHIS2-14316](https://dhis2.atlassian.net/browse/DHIS2-14316): Job Scheduler: reliably remove jobs from schedule**  
Components: _[API] Job scheduler_

**[DHIS2-15305](https://dhis2.atlassian.net/browse/DHIS2-15305): Job Scheduler: Existing job parameters cannot be deserialized**  
Components: _[API] Job scheduler_

**[DHIS2-16074](https://dhis2.atlassian.net/browse/DHIS2-16074): Jobs API - Jobs removed from a queue are filtered from the main list**  
Components: _[API] Job scheduler_

**[DHIS2-8967](https://dhis2.atlassian.net/browse/DHIS2-8967): Unable to disable Data Synchronization schedule where server does not exist or is offline**  
Components: _[API] Job scheduler_

**[DHIS2-15333](https://dhis2.atlassian.net/browse/DHIS2-15333): Scheduler `lock exception cleanup` job does not retain the `Expires after months` job parameter**  
Components: _[API] Job scheduler_

**[DHIS2-13380](https://dhis2.atlassian.net/browse/DHIS2-13380): Broken link on data set notification message**  
Components: _[API] Messaging_

**[DHIS2-15567](https://dhis2.atlassian.net/browse/DHIS2-15567): Gist API: Pluck of a IdentifiableObject property should pluck their UID not long ID**  
Components: _[API] Metadata Gist_

**[DHIS2-15565](https://dhis2.atlassian.net/browse/DHIS2-15565): Gist API: Filter value cannot contain colon or other split characters**  
Components: _[API] Metadata Gist_

**[DHIS2-15772](https://dhis2.atlassian.net/browse/DHIS2-15772): Metadata Import - Rejected deletion causes the import to abort/end with the rejected item**  
Components: _[API] Metadata import-export_

**[DHIS2-16700](https://dhis2.atlassian.net/browse/DHIS2-16700): Creating new metadata objects should always default to the actual current user**  
Components: _[API] Metadata import-export_

**[DHIS2-13663](https://dhis2.atlassian.net/browse/DHIS2-13663): Import does not cover Option Set Groups and Program Sections**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-14694](https://dhis2.atlassian.net/browse/DHIS2-14694): Problematic metadata defaults**  
Components: _[API] Metadata import-export_, _[API] Metadata model_

**[DHIS2-16006](https://dhis2.atlassian.net/browse/DHIS2-16006): Import/Export app not downloading "programSection"**  
Components: _[API] Metadata import-export_

**[DHIS2-12345](https://dhis2.atlassian.net/browse/DHIS2-12345): CSV import events - UI does not recognize when import is complete**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-15351](https://dhis2.atlassian.net/browse/DHIS2-15351): Imprting metadata in a new blank instance inserts NULL in some categories making the maintenance app unusuable**  
Components: _[API] Metadata import-export_, _[App] Aggregate Data Entry_, _[App] Maintenance_

**[DHIS2-15242](https://dhis2.atlassian.net/browse/DHIS2-15242): GeoJson support is not working correctly**  
Components: _[API] Metadata import-export_

**[DHIS2-10331](https://dhis2.atlassian.net/browse/DHIS2-10331): Error on dataSets/ID/metadata endpoint when dataset attribute is selected**  
Components: _[API] Metadata import-export_, _[API] Metadata model_

**[DHIS2-17097](https://dhis2.atlassian.net/browse/DHIS2-17097): identifiable:token filter only searches DB-language**  
Components: _[API] Metadata model_

**[DHIS2-15322](https://dhis2.atlassian.net/browse/DHIS2-15322): Visualization list endpoint does not return nested rows, columns or filters**  
Components: _[API] Metadata model_

**[DHIS2-14591](https://dhis2.atlassian.net/browse/DHIS2-14591): Period end date as timestamp is excluding the last day of the period**  
Components: _[API] Metadata model_

**[DHIS2-12941](https://dhis2.atlassian.net/browse/DHIS2-12941): Meta-data table TrackedEntityAttribute should not be PROTECTED**  
Components: _[API] Metadata model_

**[DHIS2-12926](https://dhis2.atlassian.net/browse/DHIS2-12926): Apply ACL to api/{object-type}/uid**  
Components: _[API] Metadata model_

**[DHIS2-15417](https://dhis2.atlassian.net/browse/DHIS2-15417): Org unit email address validation is not consistent between UI and back-end**  
Components: _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-15801](https://dhis2.atlassian.net/browse/DHIS2-15801): Sorting options in optionSet is broken**  
Components: _[API] Metadata model_

**[DHIS2-15706](https://dhis2.atlassian.net/browse/DHIS2-15706): Dimensions endpoint in CSV format not working since 2.38.x**  
Components: _[API] Metadata model_

**[DHIS2-15168](https://dhis2.atlassian.net/browse/DHIS2-15168): Gist API: Multiple nested properties are unnecessarily wrapped in an array in the JSON response**  
Components: _[API] Metadata model_

**[DHIS2-15068](https://dhis2.atlassian.net/browse/DHIS2-15068): Org unit opening date is not included in the CSV columns**  
Components: _[API] Metadata model_

**[DHIS2-15517](https://dhis2.atlassian.net/browse/DHIS2-15517): Organisation Unit special tree lists stopped including the parent**  
Components: _[API] Metadata model_

**[DHIS2-17303](https://dhis2.atlassian.net/browse/DHIS2-17303): visualizations api has all relativePeriods set to `false`**  
Components: _[API] Other_

**[DHIS2-17062](https://dhis2.atlassian.net/browse/DHIS2-17062): system.sql_view_write_enabled no longer working**  
Components: _[API] Other_, _[API] System configuration_

**[DHIS2-15543](https://dhis2.atlassian.net/browse/DHIS2-15543): updateNoAcl does not update the lastUpdatedBy property of objects**  
Components: _[API] Other_

**[DHIS2-16935](https://dhis2.atlassian.net/browse/DHIS2-16935): Cannot order by multiple fields**  
Components: _[API] Other_

**[DHIS2-16517](https://dhis2.atlassian.net/browse/DHIS2-16517): api/authorities missing `F_IMPERSONATE_USER` name**  
Components: _[API] Other_

**[DHIS2-16145](https://dhis2.atlassian.net/browse/DHIS2-16145): Database connection test during startup does not close database connection**  
Components: _[API] Other_

**[DHIS2-15198](https://dhis2.atlassian.net/browse/DHIS2-15198): Route API fails when accessed through nginx gateway**  
Components: _[API] Other_

**[DHIS2-13838](https://dhis2.atlassian.net/browse/DHIS2-13838): Authentication event format miss IP address when called via API**  
Components: _[API] Other_

**[DHIS2-15613](https://dhis2.atlassian.net/browse/DHIS2-15613): Both "total" and "pageCount" are not working for dimensions endpoint.**  
Components: _[API] Other_

**[DHIS2-13901](https://dhis2.atlassian.net/browse/DHIS2-13901): /organisationUnits/<ID>?includeDescendants=true does not have a consistent response body shape**  
Components: _[API] Other_

**[DHIS2-15061](https://dhis2.atlassian.net/browse/DHIS2-15061): Predictor fails with different QueryModifers on the same data element**  
Components: _[API] Predictors_

**[DHIS2-15261](https://dhis2.atlassian.net/browse/DHIS2-15261): Assign rule is not working when clearing the value**  
Components: _[API] Program rules_

**[DHIS2-15127](https://dhis2.atlassian.net/browse/DHIS2-15127): Capture App program rules error**  
Components: _[API] Program rules_, _[App] Capture_

**[DHIS2-15347](https://dhis2.atlassian.net/browse/DHIS2-15347): PreviousEvent rule variable fails on enrollment evaluation**  
Components: _[API] Program rules_

**[DHIS2-13541](https://dhis2.atlassian.net/browse/DHIS2-13541): Unable to save event in Capture when program rule assigns option name**  
Components: _[API] Program rules_

**[DHIS2-13275](https://dhis2.atlassian.net/browse/DHIS2-13275): Error escaping special chars evaluating Program Rules**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-14916](https://dhis2.atlassian.net/browse/DHIS2-14916): More than one program rule variable linked to the same data element make rule engine crash**  
Components: _[API] Program rules_

**[DHIS2-14190](https://dhis2.atlassian.net/browse/DHIS2-14190): Errors saving event when program rule assigns blank value to a data element with option set**  
Components: _[API] Program rules_, _[API] Tracker_, _[App] Capture_

**[DHIS2-12835](https://dhis2.atlassian.net/browse/DHIS2-12835): Remove unused security authorities**  
Components: _[API] Security_

**[DHIS2-13453](https://dhis2.atlassian.net/browse/DHIS2-13453): Not possible to change max concurrent user sessions**  
Components: _[API] Security_

**[DHIS2-15144](https://dhis2.atlassian.net/browse/DHIS2-15144): Metadata Synchronisation Job cannot use more than 1000 data values per page**  
**[DHIS2-15009](https://dhis2.atlassian.net/browse/DHIS2-15009): Expose spatialSupport from database info in the system controller**  
Components: _[API] System configuration_

**[DHIS2-10643](https://dhis2.atlassian.net/browse/DHIS2-10643): System settings API returns an empty string for non-existing props**  
Components: _[API] System configuration_

**[DHIS2-17414](https://dhis2.atlassian.net/browse/DHIS2-17414): Rule engine incorrectly populating rules with multiple rule actions**  
Components: _[API] Tracker_

**[DHIS2-16019](https://dhis2.atlassian.net/browse/DHIS2-16019): Date filters in tracker are not considering the time**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-16460](https://dhis2.atlassian.net/browse/DHIS2-16460): Tracker endpoint returns E1006 error when quering nested relationships**  
Components: _[API] Tracker_

**[DHIS2-15425](https://dhis2.atlassian.net/browse/DHIS2-15425): While Sending notification to ancestors, it skips the base orgunitsation unit**  
Components: _[API] Tracker_

**[DHIS2-17252](https://dhis2.atlassian.net/browse/DHIS2-17252): Relationship ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-17280](https://dhis2.atlassian.net/browse/DHIS2-17280): Enrollment ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-17251](https://dhis2.atlassian.net/browse/DHIS2-17251): Tracked Entity ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-17090](https://dhis2.atlassian.net/browse/DHIS2-17090): tracker/relationships emits inaccessible program attributes**  
Components: _[API] Tracker_

**[DHIS2-17236](https://dhis2.atlassian.net/browse/DHIS2-17236): Update validation logic when requesting multiple TE without program**  
Components: _[API] Tracker_

**[DHIS2-17070](https://dhis2.atlassian.net/browse/DHIS2-17070): Transferred enrollment not accessible by org unit owner**  
Components: _[API] Tracker_

**[DHIS2-13014](https://dhis2.atlassian.net/browse/DHIS2-13014): New tracker/events API takes time and throws a 500 when called with no parameters**  
Components: _[API] Tracker_

**[DHIS2-17154](https://dhis2.atlassian.net/browse/DHIS2-17154): Set CSP header with script-src in tracker file/image endpoints**  
Components: _[API] Tracker_

**[DHIS2-16927](https://dhis2.atlassian.net/browse/DHIS2-16927): eventOccurredBefore & eventOccurredAfter query params for "GET /api/tracker/trackedEntities" do not behave as expected**  
Components: _[API] Tracker_

**[DHIS2-15679](https://dhis2.atlassian.net/browse/DHIS2-15679): /tracker/events?order=<attributeUID> filters out events without attribute**  
Components: _[API] Tracker_

**[DHIS2-16706](https://dhis2.atlassian.net/browse/DHIS2-16706): Relationships are not filtered by deleted in tracker/relationships endpoint**  
Components: _[API] Tracker_

**[DHIS2-16738](https://dhis2.atlassian.net/browse/DHIS2-16738): FollowUp is not persisted in programStageWorkingListFilters**  
Components: _[API] Tracker_

**[DHIS2-16320](https://dhis2.atlassian.net/browse/DHIS2-16320): Ensure lastUpdated field reflects deletion for event and enrollment**  
Components: _[API] Tracker_

**[DHIS2-16491](https://dhis2.atlassian.net/browse/DHIS2-16491): /tracker exporter payload is not importable**  
Components: _[API] Tracker_

**[DHIS2-15967](https://dhis2.atlassian.net/browse/DHIS2-15967): Selecting Tracked Entity Type Attribute as Mandatory creates an error in Capture app**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-13649](https://dhis2.atlassian.net/browse/DHIS2-13649): New tracker API totalPages parameter returns the total number of records, not the total number of pages**  
Components: _[API] Tracker_

**[DHIS2-15665](https://dhis2.atlassian.net/browse/DHIS2-15665): Remove /tracker/trackedEntities?query, attribute and includeAllAttributes**  
Components: _[API] Tracker_

**[DHIS2-15658](https://dhis2.atlassian.net/browse/DHIS2-15658): /tracker/trackedEntities?order=enrolledAt/createdAtClient/updatedAtClient combined with attribute causes BadSqlGrammarException**  
Components: _[API] Tracker_

**[DHIS2-15325](https://dhis2.atlassian.net/browse/DHIS2-15325): /tracker/trackedEntities?order=createdAt orders by tracked entity id**  
Components: _[API] Tracker_

**[DHIS2-15394](https://dhis2.atlassian.net/browse/DHIS2-15394): Events request returns access exception when program closed or protected**  
Components: _[API] Tracker_

**[DHIS2-16637](https://dhis2.atlassian.net/browse/DHIS2-16637): Review and Adjust Access Control Logic for Closed Programs in User Authorization Flow**  
Components: _[API] Tracker_

**[DHIS2-16636](https://dhis2.atlassian.net/browse/DHIS2-16636): /events user validation when user authorized**  
Components: _[API] Tracker_

**[DHIS2-16635](https://dhis2.atlassian.net/browse/DHIS2-16635): /events needs to return all available events to the user when program not present in request**  
Components: _[API] Tracker_

**[DHIS2-16633](https://dhis2.atlassian.net/browse/DHIS2-16633): /events need to validate org unit against search scope regardless of program access level**  
Components: _[API] Tracker_

**[DHIS2-16630](https://dhis2.atlassian.net/browse/DHIS2-16630): Harmonize old api events endpoint ACL**  
Components: _[API] Tracker_

**[DHIS2-16627](https://dhis2.atlassian.net/browse/DHIS2-16627): /enrollments needs to work as it did before DHIS2-15145**  
Components: _[API] Tracker_

**[DHIS2-16626](https://dhis2.atlassian.net/browse/DHIS2-16626): Org unit mode ALL in trackedEntities and enrollments**  
Components: _[API] Tracker_

**[DHIS2-16624](https://dhis2.atlassian.net/browse/DHIS2-16624): Use the same authority consistently to define who is a superuser when org unit mode ALL**  
Components: _[API] Tracker_

**[DHIS2-16623](https://dhis2.atlassian.net/browse/DHIS2-16623): Define org unit mode to use if none provided**  
Components: _[API] Tracker_

**[DHIS2-16621](https://dhis2.atlassian.net/browse/DHIS2-16621): Optimize sql queries that use IN operator with org units**  
Components: _[API] Tracker_

**[DHIS2-16620](https://dhis2.atlassian.net/browse/DHIS2-16620): Validate request does not contain orgUnit and ouMode**  
Components: _[API] Tracker_

**[DHIS2-16398](https://dhis2.atlassian.net/browse/DHIS2-16398): Reduce runtime for expensive subquery in /api/events endpoint**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-13041](https://dhis2.atlassian.net/browse/DHIS2-13041): NTI follow-up field names are inconsistent**  
Components: _[API] Tracker_

**[DHIS2-15806](https://dhis2.atlassian.net/browse/DHIS2-15806): Note clean up**  
Components: _[API] Tracker_

**[DHIS2-16107](https://dhis2.atlassian.net/browse/DHIS2-16107): Event export ignores attribute option combo**  
Components: _[API] Tracker_

**[DHIS2-13734](https://dhis2.atlassian.net/browse/DHIS2-13734): /tracker/trackedEntities attributes does not filter**  
**[DHIS2-10613](https://dhis2.atlassian.net/browse/DHIS2-10613): TrackedEntityInstance query by enrollmentDate returns TEIs from date after**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-16117](https://dhis2.atlassian.net/browse/DHIS2-16117): tracker/events not returning event relationships**  
Components: _[API] Tracker_

**[DHIS2-14159](https://dhis2.atlassian.net/browse/DHIS2-14159): Analytics issues - bad SQL grammar: ERROR: syntax error at or near "and"**  
Components: _[API] Tracker_, _[App] Analytics_

**[DHIS2-15724](https://dhis2.atlassian.net/browse/DHIS2-15724): Capture app does not send enrolment notification**  
Components: _[API] Tracker_

**[DHIS2-14752](https://dhis2.atlassian.net/browse/DHIS2-14752): Simplify Fields to Param in Tracker Export**  
**[DHIS2-16063](https://dhis2.atlassian.net/browse/DHIS2-16063): Cannot retrieve IDs for Potential Duplicate Records**  
Components: _[API] Tracker_

**[DHIS2-10215](https://dhis2.atlassian.net/browse/DHIS2-10215): Characters such as ":" (colon) ";" (semi-colon) and probably others not accepted in Tracker capture Attributes**  
Components: _[API] Tracker_

**[DHIS2-9324](https://dhis2.atlassian.net/browse/DHIS2-9324): TEI query fails when search text contains a comma**  
Components: _[API] Tracker_

**[DHIS2-15596](https://dhis2.atlassian.net/browse/DHIS2-15596): Tracker importer doesn't respect order of entities in the report**  
Components: _[API] Tracker_

**[DHIS2-15616](https://dhis2.atlassian.net/browse/DHIS2-15616): Pagination in enrollment always use default values**  
Components: _[API] Tracker_

**[DHIS2-15020](https://dhis2.atlassian.net/browse/DHIS2-15020): TEI not sorted by registration date**  
Components: _[API] Tracker_

**[DHIS2-14154](https://dhis2.atlassian.net/browse/DHIS2-14154): API Rules engine throws an error when using constants**  
Components: _[API] Tracker_

**[DHIS2-15603](https://dhis2.atlassian.net/browse/DHIS2-15603): Same event with multiple notes is returned multiple times by /tracker/events**  
Components: _[API] Tracker_

**[DHIS2-15600](https://dhis2.atlassian.net/browse/DHIS2-15600): Cannot get /tracker/events if event has a comment**  
Components: _[API] Tracker_

**[DHIS2-15225](https://dhis2.atlassian.net/browse/DHIS2-15225): Createdbyuserinfo and lastupdatedbyuserinfo jsonb fields in trackedentityinstance are also blank**  
Components: _[API] Tracker_

**[DHIS2-15145](https://dhis2.atlassian.net/browse/DHIS2-15145): enrolments endpoint does not use capture scope when program is protected or closed**  
Components: _[API] Tracker_

**[DHIS2-14711](https://dhis2.atlassian.net/browse/DHIS2-14711): Relationship validation in tracker returns misleading errors**  
Components: _[API] Tracker_

**[DHIS2-17307](https://dhis2.atlassian.net/browse/DHIS2-17307): Not able to clear a data element value**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-15102](https://dhis2.atlassian.net/browse/DHIS2-15102): Assign value program rules: Values not stored**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-12352](https://dhis2.atlassian.net/browse/DHIS2-12352): Event import using CSV cannot have empty "Due Date"Column**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-15295](https://dhis2.atlassian.net/browse/DHIS2-15295): Old tracker importer returns an error when trying to remove an IMAGE attribute value**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-15757](https://dhis2.atlassian.net/browse/DHIS2-15757): Search in maintenance app does not work with translated values**  
Components: _[API] Translations_

**[DHIS2-17266](https://dhis2.atlassian.net/browse/DHIS2-17266): Only one concurrent user is allowed**  
Components: _[API] User_

**[DHIS2-16490](https://dhis2.atlassian.net/browse/DHIS2-16490): Password expire update not working**  
Components: _[API] User_

**[DHIS2-13961](https://dhis2.atlassian.net/browse/DHIS2-13961): Add missing translation of F_AGGREGATE_DATA_EXCHANGE authority**  
Components: _[API] User_

**[DHIS2-14990](https://dhis2.atlassian.net/browse/DHIS2-14990): PAT (api_token) record not removed when user is deleted**  
Components: _[API] User_

**[DHIS2-10334](https://dhis2.atlassian.net/browse/DHIS2-10334): After assigning/remove roles to an user, the user must logout/login for the new roles to take effect**  
Components: _[API] User_

**[DHIS2-15195](https://dhis2.atlassian.net/browse/DHIS2-15195): Misleading message about password requirements**  
Components: _[API] User_

**[DHIS2-11968](https://dhis2.atlassian.net/browse/DHIS2-11968): Users API allows you create users with special characters in uid**  
Components: _[API] User_

**[DHIS2-7791](https://dhis2.atlassian.net/browse/DHIS2-7791): User cannot edit their own profile pic without F_USER_ADD authority**  
Components: _[API] User_, _[App] User Profile_

**[DHIS2-15787](https://dhis2.atlassian.net/browse/DHIS2-15787): Unexpected 403 response when modifying user**  
Components: _[API] User_

**[DHIS2-14144](https://dhis2.atlassian.net/browse/DHIS2-14144): Deleting users could cause exceptions as the user UIDs references are not deleted**  
Components: _[API] User_

**[DHIS2-14223](https://dhis2.atlassian.net/browse/DHIS2-14223): Users cannot change their own profile data unless they have edit user authority**  
Components: _[API] User_

**[DHIS2-15595](https://dhis2.atlassian.net/browse/DHIS2-15595): createdBy field not changed when clone user**  
Components: _[API] User_, _[App] User_

**[DHIS2-15512](https://dhis2.atlassian.net/browse/DHIS2-15512): Cannot disable user from users list view**  
Components: _[API] User_

**[DHIS2-14877](https://dhis2.atlassian.net/browse/DHIS2-14877): Ensure that 2FA status is correct on all user fields**  
Components: _[API] User_

**[DHIS2-15357](https://dhis2.atlassian.net/browse/DHIS2-15357): Usergroups lastupdated and lastupdatedby not updated consistently**  
Components: _[API] User_

**[DHIS2-14995](https://dhis2.atlassian.net/browse/DHIS2-14995): When replicating a user, the new user's lastlogin is copied instead of being set to null**  
Components: _[API] User_, _[App] User_

**[DHIS2-16479](https://dhis2.atlassian.net/browse/DHIS2-16479): Data Entry (Beta): annual periods not selectable**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-14444](https://dhis2.atlassian.net/browse/DHIS2-14444): Add message when there are no periods in current year available**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-15883](https://dhis2.atlassian.net/browse/DHIS2-15883): Data Entry App: app crashes if section has no data elements**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-15085](https://dhis2.atlassian.net/browse/DHIS2-15085): Backend errors not displaying in app (data input periods)**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-15277](https://dhis2.atlassian.net/browse/DHIS2-15277): Data Entry (Beta): crashes on data set selection when user language is Arabic**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-14218](https://dhis2.atlassian.net/browse/DHIS2-14218): Align data input period logic to match back end logic (Data Entry Beta)**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-17286](https://dhis2.atlassian.net/browse/DHIS2-17286): [DATA EXCHANGE APP]: import summaries not being display properly**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-16735](https://dhis2.atlassian.net/browse/DHIS2-16735): Outliers detection, order by standard deviation does not work.**  
Components: _[App] Analytics_

**[DHIS2-15260](https://dhis2.atlassian.net/browse/DHIS2-15260): Time value missing in event table (line listing app)**  
Components: _[App] Analytics_

**[DHIS2-15882](https://dhis2.atlassian.net/browse/DHIS2-15882): DV charts crash with analytics >= 26.0.9**  
Components: _[App] Analytics_, _[App] Data visualizer_

**[DHIS2-15829](https://dhis2.atlassian.net/browse/DHIS2-15829): The event analytics table on SL for program q04uboqq3rp has some data but analytics enrollment for the same program is empty.**  
**[DHIS2-15332](https://dhis2.atlassian.net/browse/DHIS2-15332): EDI - parsing error for numeric expression [0-9]+**  
Components: _[App] Analytics_

**[DHIS2-15304](https://dhis2.atlassian.net/browse/DHIS2-15304): Attempting to upload an app while unauthenticated shows a “success” response despite failing**  
Components: _[App] App management_

**[DHIS2-13883](https://dhis2.atlassian.net/browse/DHIS2-13883): No meaningful error message shown when app install fails**  
Components: _[App] App management_

**[DHIS2-13915](https://dhis2.atlassian.net/browse/DHIS2-13915): App install/update from app hub should show a loading spinner**  
Components: _[App] App management_

**[DHIS2-13252](https://dhis2.atlassian.net/browse/DHIS2-13252): Install button is enabled when there are no compatible app versions**  
Components: _[App] App management_

**[DHIS2-14558](https://dhis2.atlassian.net/browse/DHIS2-14558): Capture App: Glitchy Save and Add Another**  
**[DHIS2-17195](https://dhis2.atlassian.net/browse/DHIS2-17195): d2:condition() not working in Capture**  
Components: _[App] Capture_

**[DHIS2-16931](https://dhis2.atlassian.net/browse/DHIS2-16931): Capture app delete button hidden**  
Components: _[App] Capture_

**[DHIS2-17044](https://dhis2.atlassian.net/browse/DHIS2-17044): "x events" should be singular if only one event in Stages & Event widget**  
Components: _[App] Capture_

**[DHIS2-17177](https://dhis2.atlassian.net/browse/DHIS2-17177): Registration page stuck in endless loop after failed save attempt**  
Components: _[App] Capture_

**[DHIS2-17096](https://dhis2.atlassian.net/browse/DHIS2-17096): "Hide/show option group" program rule action does not trigger in Edit profile widget**  
Components: _[App] Capture_

**[DHIS2-17131](https://dhis2.atlassian.net/browse/DHIS2-17131): Scheduling events breaks when using date format DD-MM-YYYY**  
Components: _[App] Capture_

**[DHIS2-16999](https://dhis2.atlassian.net/browse/DHIS2-16999): Program rules for "Assign value" should not run in "View event"**  
Components: _[App] Capture_

**[DHIS2-14938](https://dhis2.atlassian.net/browse/DHIS2-14938): Error on Complete Program Rule Action and other mandatory DEs doesn't trigger upon initial save, does on secondary save**  
Components: _[App] Capture_

**[DHIS2-17084](https://dhis2.atlassian.net/browse/DHIS2-17084): Add relationship: Only show relationship types with data write**  
Components: _[App] Capture_

**[DHIS2-17110](https://dhis2.atlassian.net/browse/DHIS2-17110): Hide delete-icon for relationship types without write access**  
Components: _[App] Capture_

**[DHIS2-17102](https://dhis2.atlassian.net/browse/DHIS2-17102): When saving an event, you should be sent to Enrollment Dashboard / Main page**  
Components: _[App] Capture_

**[DHIS2-17089](https://dhis2.atlassian.net/browse/DHIS2-17089): "Registering unit" in Context selector should say "Organisation unit"**  
Components: _[App] Capture_

**[DHIS2-15624](https://dhis2.atlassian.net/browse/DHIS2-15624): App version not picked up by the header bar in Capture**  
Components: _[App] Capture_

**[DHIS2-17108](https://dhis2.atlassian.net/browse/DHIS2-17108): Enrollment and TET geometry are not stored and properly displayed**  
Components: _[App] Capture_

**[DHIS2-17072](https://dhis2.atlassian.net/browse/DHIS2-17072): Verbose logging is not sufficient**  
Components: _[App] Capture_

**[DHIS2-16257](https://dhis2.atlassian.net/browse/DHIS2-16257): Search page: padding, spacing, border issues**  
Components: _[App] Capture_

**[DHIS2-17035](https://dhis2.atlassian.net/browse/DHIS2-17035): Changelog: Prioritised bugs**  
Components: _[App] Capture_

**[DHIS2-15681](https://dhis2.atlassian.net/browse/DHIS2-15681): Drawn polygon missing in the edit profile modal**  
Components: _[App] Capture_

**[DHIS2-6335](https://dhis2.atlassian.net/browse/DHIS2-6335): Location map picker in Capture app defaults to London**  
Components: _[App] Capture_

**[DHIS2-17001](https://dhis2.atlassian.net/browse/DHIS2-17001): View event page needs refresh after image upload**  
Components: _[App] Capture_

**[DHIS2-16767](https://dhis2.atlassian.net/browse/DHIS2-16767): Feedback and Indicator empty text should be dynamic**  
Components: _[App] Capture_

**[DHIS2-16394](https://dhis2.atlassian.net/browse/DHIS2-16394): Relationship widget uses option codes instead of name**  
Components: _[App] Capture_

**[DHIS2-16393](https://dhis2.atlassian.net/browse/DHIS2-16393): Stages and Event list uses option code instead of option name**  
Components: _[App] Capture_

**[DHIS2-17037](https://dhis2.atlassian.net/browse/DHIS2-17037): Edit event page crashes for event programs**  
Components: _[App] Capture_

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

**[DHIS2-15153](https://dhis2.atlassian.net/browse/DHIS2-15153): Ask user to create new event when stage is complete flag is not working correctly when the program stages are not repeatable**  
Components: _[App] Capture_

**[DHIS2-15888](https://dhis2.atlassian.net/browse/DHIS2-15888): "Text with multiple values" TEA does not trigger program rules**  
Components: _[App] Capture_

**[DHIS2-15983](https://dhis2.atlassian.net/browse/DHIS2-15983): Enrollment date is not automatically assigned to attribute/data element**  
Components: _[App] Capture_

**[DHIS2-15879](https://dhis2.atlassian.net/browse/DHIS2-15879): Unable to schedule event with note**  
Components: _[App] Capture_

**[DHIS2-16352](https://dhis2.atlassian.net/browse/DHIS2-16352): Add spacing between cards in capture event overview screen**  
Components: _[App] Capture_

**[DHIS2-15782](https://dhis2.atlassian.net/browse/DHIS2-15782): Persist "more filters" in working lists**  
Components: _[App] Capture_

**[DHIS2-15827](https://dhis2.atlassian.net/browse/DHIS2-15827): "Prevent adding new events to stage" does not work as intended**  
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

**[DHIS2-15734](https://dhis2.atlassian.net/browse/DHIS2-15734): Assigned data value to MANDATORY DE is not treated as valid in Capture edit event page**  
Components: _[App] Capture_

**[DHIS2-15945](https://dhis2.atlassian.net/browse/DHIS2-15945): Missing calendar translations in enrollment widget**  
Components: _[App] Capture_

**[DHIS2-15356](https://dhis2.atlassian.net/browse/DHIS2-15356): "No person found" message is generated when searching by attribute while adding relationship in Capture app using "Orgunit scope: Selected" and Orgunit "Sierra Leone""**  
Components: _[App] Capture_

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

**[DHIS2-15231](https://dhis2.atlassian.net/browse/DHIS2-15231): Information widgets wrongly hidden in Add Event Page**  
Components: _[App] Capture_

**[DHIS2-15342](https://dhis2.atlassian.net/browse/DHIS2-15342): Program stage WL Bad Request**  
Components: _[App] Capture_

**[DHIS2-14412](https://dhis2.atlassian.net/browse/DHIS2-14412): Program rule assigning date based on report date is not rerun when report date is changed**  
Components: _[App] Capture_

**[DHIS2-12520](https://dhis2.atlassian.net/browse/DHIS2-12520): View enrollment event: Rules are executed without dependency data**  
Components: _[App] Capture_

**[DHIS2-15103](https://dhis2.atlassian.net/browse/DHIS2-15103): Wrong text in "No results found" modal**  
Components: _[App] Capture_

**[DHIS2-13884](https://dhis2.atlassian.net/browse/DHIS2-13884): Capture App adding blank space for hidden Sections/Sections without Data Elements visible**  
Components: _[App] Capture_

**[DHIS2-11345](https://dhis2.atlassian.net/browse/DHIS2-11345): d2:length function for LONG_TEXT field**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-14862](https://dhis2.atlassian.net/browse/DHIS2-14862): Program icon should be shown in scope selector when selected**  
Components: _[App] Capture_

**[DHIS2-7325](https://dhis2.atlassian.net/browse/DHIS2-7325): Coordinate field not following background pattern**  
Components: _[App] Capture_

**[DHIS2-14868](https://dhis2.atlassian.net/browse/DHIS2-14868): All of Search mode header should be clickable**  
Components: _[App] Capture_

**[DHIS2-14976](https://dhis2.atlassian.net/browse/DHIS2-14976): Discrepancy in time zones assigns previous date in program rules**  
Components: _[App] Capture_

**[DHIS2-15109](https://dhis2.atlassian.net/browse/DHIS2-15109): eventDate breaks saved event working lists**  
Components: _[App] Capture_

**[DHIS2-14838](https://dhis2.atlassian.net/browse/DHIS2-14838): Generate tables buttons not available more than once when using Redis**  
Components: _[App] Core resource_

**[DHIS2-12489](https://dhis2.atlassian.net/browse/DHIS2-12489): Import/Export app's data export start/end period  picker issue**  
Components: _[App] Core resource_, _[App] Import-export_

**[DHIS2-17242](https://dhis2.atlassian.net/browse/DHIS2-17242): Tracked entity line lists not working on dashboards**  
Components: _[App] Dashboard_

**[DHIS2-16216](https://dhis2.atlassian.net/browse/DHIS2-16216): Visualizations title are not translated**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-8649](https://dhis2.atlassian.net/browse/DHIS2-8649): Search field does not handle long placeholder text translations**  
Components: _[App] Dashboard_

**[DHIS2-11380](https://dhis2.atlassian.net/browse/DHIS2-11380): SV title not aligned top**  
Components: _[App] Dashboard_

**[DHIS2-12937](https://dhis2.atlassian.net/browse/DHIS2-12937): In local server without internet connectivity dashboards are not loading, it only loads if it saved as a "make available for offline"**  
Components: _[App] Dashboard_

**[DHIS2-15262](https://dhis2.atlassian.net/browse/DHIS2-15262): PWA apps crash in contexts where SW is unavailable**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-15316](https://dhis2.atlassian.net/browse/DHIS2-15316): Platform deps for analytics apps: fix login redirect & connection status responsiveness**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-8650](https://dhis2.atlassian.net/browse/DHIS2-8650): Icons for removing reports and resources has grey background**  
Components: _[App] Dashboard_

**[DHIS2-15627](https://dhis2.atlassian.net/browse/DHIS2-15627): Legend key disappearing when expanded on Dashboard**  
Components: _[App] Dashboard_

**[DHIS2-14901](https://dhis2.atlassian.net/browse/DHIS2-14901): Arabic characters replaced with question marks (?) on data validation notifications.**  
Components: _[App] Data administration_

**[DHIS2-15948](https://dhis2.atlassian.net/browse/DHIS2-15948): Duplicate rows in Data Statistics**  
Components: _[App] Data administration_

**[DHIS2-15415](https://dhis2.atlassian.net/browse/DHIS2-15415): Can't show all Workflows, Can't scroll**  
Components: _[App] Data approval_

**[DHIS2-13527](https://dhis2.atlassian.net/browse/DHIS2-13527): Validation fails in legacy data entry app**  
**[DHIS2-14075](https://dhis2.atlassian.net/browse/DHIS2-14075): Data entry: align integer restrictions with what is use on backend**  
Components: _[App] Data entry_

**[DHIS2-13013](https://dhis2.atlassian.net/browse/DHIS2-13013): Downloading follow up analysis data quality report to pdf, csv or excel generates null reports**  
Components: _[App] Data quality_

**[DHIS2-10825](https://dhis2.atlassian.net/browse/DHIS2-10825): Trim trailing zeroes in appropriate columns**  
Components: _[App] Data quality_

**[DHIS2-17261](https://dhis2.atlassian.net/browse/DHIS2-17261): Period is dropped after rename of a favorite in Data Visualizer - results in a crash after refresh**  
Components: _[App] Data visualizer_

**[DHIS2-15558](https://dhis2.atlassian.net/browse/DHIS2-15558): Interpretations modal too short**  
Components: _[App] Data visualizer_

**[DHIS2-16365](https://dhis2.atlassian.net/browse/DHIS2-16365): Interpretations and replies don't respect new lines**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-13745](https://dhis2.atlassian.net/browse/DHIS2-13745): Interpretations panel: Loading spinner flashes on fast connection**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-15302](https://dhis2.atlassian.net/browse/DHIS2-15302): Saving a visualization without rendering as chart fails silently**  
**[DHIS2-15373](https://dhis2.atlassian.net/browse/DHIS2-15373): On First save getting error message as "Something went wrong"**  
Components: _[App] Data visualizer_

**[DHIS2-10235](https://dhis2.atlassian.net/browse/DHIS2-10235): Pivot Tables - Limit max value shifts to min value fields**  
Components: _[App] Data visualizer_

**[DHIS2-16392](https://dhis2.atlassian.net/browse/DHIS2-16392): Interpretations panel flashes when liking/unliking an interpretation**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-12830](https://dhis2.atlassian.net/browse/DHIS2-12830): Legend sets fail to load in data visualizer table that has multiple indicators with data dimension in the row**  
Components: _[App] Data visualizer_

**[DHIS2-16429](https://dhis2.atlassian.net/browse/DHIS2-16429): Interpretations reply input focus shadow is cut off**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-16154](https://dhis2.atlassian.net/browse/DHIS2-16154): Renaming saved visualizations throws an error**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-14827](https://dhis2.atlassian.net/browse/DHIS2-14827): Data Visualizer - Pivot display do not resize correctly**  
Components: _[App] Data visualizer_

**[DHIS2-16108](https://dhis2.atlassian.net/browse/DHIS2-16108): Basic colorset has wrong colors**  
Components: _[App] Data visualizer_

**[DHIS2-15008](https://dhis2.atlassian.net/browse/DHIS2-15008): Some dashboard item loading screens have unwanted translucent layer**  
Components: _[App] Data visualizer_

**[DHIS2-15750](https://dhis2.atlassian.net/browse/DHIS2-15750):  Dimension labels in pivot tables not translated**  
Components: _[App] Data visualizer_

**[DHIS2-15964](https://dhis2.atlassian.net/browse/DHIS2-15964): Interpretations component crashes while doing an access check**  
Components: _[App] Data visualizer_

**[DHIS2-15721](https://dhis2.atlassian.net/browse/DHIS2-15721): Interpretations modal error after being opened from url**  
Components: _[App] Data visualizer_

**[DHIS2-15120](https://dhis2.atlassian.net/browse/DHIS2-15120): Change legend type description to fit SV**  
Components: _[App] Data visualizer_

**[DHIS2-15722](https://dhis2.atlassian.net/browse/DHIS2-15722): Saving an AO after creating a copy removes the copy**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-15698](https://dhis2.atlassian.net/browse/DHIS2-15698): Totals/subtotals in PT are not computed correctly when opening an AO**  
Components: _[App] Data visualizer_

**[DHIS2-14879](https://dhis2.atlassian.net/browse/DHIS2-14879): Links to Data Visualizer app favorites responds with HTTP Status 404 page**  
Components: _[App] Data visualizer_

**[DHIS2-14188](https://dhis2.atlassian.net/browse/DHIS2-14188): Long text does not display in pivot tables in data visualizer app**  
Components: _[App] Data visualizer_

**[DHIS2-12618](https://dhis2.atlassian.net/browse/DHIS2-12618): Users can access visualisations not shared with them**  
**[DHIS2-15251](https://dhis2.atlassian.net/browse/DHIS2-15251): SV add some space above the title in DV**  
**[DHIS2-13128](https://dhis2.atlassian.net/browse/DHIS2-13128): Target line allows for float entry but then saves as integer**  
Components: _[App] Data visualizer_

**[DHIS2-15440](https://dhis2.atlassian.net/browse/DHIS2-15440): Event data item shows wrong result**  
Components: _[App] Data visualizer_

**[DHIS2-15291](https://dhis2.atlassian.net/browse/DHIS2-15291): Event Report Enrollments not returning correct data**  
Components: _[App] Event reports_

**[DHIS2-11233](https://dhis2.atlassian.net/browse/DHIS2-11233): Event Reports cannot filter by OVERDUE, SKIPPED, or SCHEDULED event status**  
Components: _[App] Event reports_

**[DHIS2-15468](https://dhis2.atlassian.net/browse/DHIS2-15468): Event Report and Event Visualizer Take default relative period for analytics**  
Components: _[App] Event reports_, _[App] Event visualizer_

**[DHIS2-17368](https://dhis2.atlassian.net/browse/DHIS2-17368): Event Visualizer App uses deprecated PATCH endpoint for renaming**  
Components: _[App] Event visualizer_

**[DHIS2-16015](https://dhis2.atlassian.net/browse/DHIS2-16015): TEI export shows Event programs**  
Components: _[App] Import-export_

**[DHIS2-17151](https://dhis2.atlassian.net/browse/DHIS2-17151): Import/Export app crashes if you click "Job summary" while doing a TE import**  
Components: _[App] Import-export_

**[DHIS2-17046](https://dhis2.atlassian.net/browse/DHIS2-17046): "created" value in an import is not reflected in the summary**  
Components: _[App] Import-export_

**[DHIS2-11635](https://dhis2.atlassian.net/browse/DHIS2-11635): No import summary for errors in TEI import**  
Components: _[App] Import-export_

**[DHIS2-9048](https://dhis2.atlassian.net/browse/DHIS2-9048): Import/Export App does not report logs in Redis/Horizontally Scaled Env**  
Components: _[App] Import-export_

**[DHIS2-7881](https://dhis2.atlassian.net/browse/DHIS2-7881): Data import with empty file doesn't display import summaries**  
Components: _[App] Import-export_

**[DHIS2-16264](https://dhis2.atlassian.net/browse/DHIS2-16264): Import Export App - Data Export - crash when toggling advanced options**  
Components: _[App] Import-export_

**[DHIS2-14693](https://dhis2.atlassian.net/browse/DHIS2-14693): “Require data elements  to be part of data set" in Settings prevents data import**  
Components: _[App] Import-export_

**[DHIS2-14972](https://dhis2.atlassian.net/browse/DHIS2-14972): Regression from 2.39: The interpretations app doesn't display maps**  
Components: _[App] Interpretations_

**[DHIS2-14787](https://dhis2.atlassian.net/browse/DHIS2-14787): Scheduler Issue: "Not Scheduled" but status says "Scheduled." Scheduler not running on expected time; however, running scheduler manually works.**  
Components: _[App] Job scheduler_

**[DHIS2-16354](https://dhis2.atlassian.net/browse/DHIS2-16354): Cannot disable a job in Scheduler on FE**  
Components: _[App] Job scheduler_

**[DHIS2-12570](https://dhis2.atlassian.net/browse/DHIS2-12570): Scheduler Pre-set Times are Ambiguous**  
Components: _[App] Job scheduler_

**[DHIS2-12017](https://dhis2.atlassian.net/browse/DHIS2-12017): Disabled job gets enabled on editing the job**  
Components: _[App] Job scheduler_

**[DHIS2-17267](https://dhis2.atlassian.net/browse/DHIS2-17267): Missing boolean values says 'Not answered'**  
Components: _[App] Line Listing_

**[DHIS2-15828](https://dhis2.atlassian.net/browse/DHIS2-15828): Repeated dimensions can’t be sorted**  
Components: _[App] Line Listing_

**[DHIS2-15248](https://dhis2.atlassian.net/browse/DHIS2-15248): LL download does not apply user defined sorting**  
Components: _[App] Line Listing_

**[DHIS2-16286](https://dhis2.atlassian.net/browse/DHIS2-16286): Missing legend key for wide line lists**  
Components: _[App] Line Listing_

**[DHIS2-15629](https://dhis2.atlassian.net/browse/DHIS2-15629): Line Listing app API request rounds decimals when it shouldn't**  
Components: _[App] Line Listing_

**[DHIS2-15737](https://dhis2.atlassian.net/browse/DHIS2-15737): Lack of access show the generic "something went wrong" error**  
Components: _[App] Line Listing_

**[DHIS2-13946](https://dhis2.atlassian.net/browse/DHIS2-13946): Loading spinner gets cut off in the interpretations view**  
Components: _[App] Line Listing_

**[DHIS2-15530](https://dhis2.atlassian.net/browse/DHIS2-15530): List of programs does not filter out programs the user does not have data access to**  
Components: _[App] Line Listing_

**[DHIS2-16249](https://dhis2.atlassian.net/browse/DHIS2-16249): Orgunits are not restored in the orgunit tree**  
Components: _[App] Line Listing_

**[DHIS2-15465](https://dhis2.atlassian.net/browse/DHIS2-15465): Pagination in the table footer is being cut off once table exceeds viewport width**  
Components: _[App] Line Listing_

**[DHIS2-16181](https://dhis2.atlassian.net/browse/DHIS2-16181): Dimension tooltip shows wrong option labels when options in different optionsets have identical codes**  
Components: _[App] Line Listing_

**[DHIS2-15771](https://dhis2.atlassian.net/browse/DHIS2-15771): Line listing app duplicates values if option sets share the same code**  
Components: _[App] Line Listing_

**[DHIS2-14030](https://dhis2.atlassian.net/browse/DHIS2-14030): Make "greater than or equal to" render on a single line for conditions**  
Components: _[App] Line Listing_

**[DHIS2-13931](https://dhis2.atlassian.net/browse/DHIS2-13931): Missing translations in LL**  
Components: _[App] Line Listing_

**[DHIS2-15026](https://dhis2.atlassian.net/browse/DHIS2-15026): Data from repeatable events shows name of DE instead of blank cell**  
Components: _[App] Line Listing_

**[DHIS2-15423](https://dhis2.atlassian.net/browse/DHIS2-15423): Loading a saved line list with multi-stage data elements causes a crash**  
Components: _[App] Line Listing_

**[DHIS2-15785](https://dhis2.atlassian.net/browse/DHIS2-15785): Cannot demo because recaptcha fails**  
**[DHIS2-15642](https://dhis2.atlassian.net/browse/DHIS2-15642): Password Reset "Recover" Button Does Nothing**  
Components: _[App] Login_

**[DHIS2-17210](https://dhis2.atlassian.net/browse/DHIS2-17210): Migrate to new sharing structure**  
Components: _[App] Maintenance_

**[DHIS2-16252](https://dhis2.atlassian.net/browse/DHIS2-16252): Translation/labels missing for Aggregation types**  
Components: _[App] Maintenance_

**[DHIS2-9717](https://dhis2.atlassian.net/browse/DHIS2-9717): Very long indicator expression descriptions overrun the screen**  
Components: _[App] Maintenance_

**[DHIS2-15952](https://dhis2.atlassian.net/browse/DHIS2-15952): Program allows to select itself as a related program, and after saving it cannot be edited.**  
Components: _[App] Maintenance_, _[App] Tracker capture_

**[DHIS2-14703](https://dhis2.atlassian.net/browse/DHIS2-14703): Program Indicator SUM inconsistencies when || (or) in filter**  
Components: _[App] Maintenance_

**[DHIS2-16331](https://dhis2.atlassian.net/browse/DHIS2-16331): "The value is to short/small": typo in validation message and error displayed too high up on Indicator Group Description**  
Components: _[App] Maintenance_

**[DHIS2-16237](https://dhis2.atlassian.net/browse/DHIS2-16237): Old maintenance app does not work when instance url contains api**  
Components: _[App] Maintenance_

**[DHIS2-14042](https://dhis2.atlassian.net/browse/DHIS2-14042): Indicator Mx - ** display_numerator_description ****  
Components: _[App] Maintenance_

**[DHIS2-15940](https://dhis2.atlassian.net/browse/DHIS2-15940): SQL view cache strategy lacks translations**  
Components: _[App] Maintenance_

**[DHIS2-13714](https://dhis2.atlassian.net/browse/DHIS2-13714): OptionSet not ordered properly**  
Components: _[App] Maintenance_

**[DHIS2-14951](https://dhis2.atlassian.net/browse/DHIS2-14951): Variables missing from program indicator configuration menu**  
Components: _[App] Maintenance_

**[DHIS2-15416](https://dhis2.atlassian.net/browse/DHIS2-15416): Wrong errror message for invalid email address in organization unit edit page**  
Components: _[App] Maintenance_

**[DHIS2-15798](https://dhis2.atlassian.net/browse/DHIS2-15798): Show longitude/latitude in split view map doesn't do anything**  
Components: _[App] Maps_

**[DHIS2-16810](https://dhis2.atlassian.net/browse/DHIS2-16810): When editing the url, download mode and interpretationId are ignored**  
Components: _[App] Maps_

**[DHIS2-16269](https://dhis2.atlassian.net/browse/DHIS2-16269): Data table doesn't display columns with extended event data in some cases**  
Components: _[App] Maps_

**[DHIS2-16250](https://dhis2.atlassian.net/browse/DHIS2-16250): Maps are incorrectly classified as "VISUALIZATION_VIEW"**  
Components: _[App] Maps_

**[DHIS2-10583](https://dhis2.atlassian.net/browse/DHIS2-10583): Missing translation when going from pivot table to maps**  
Components: _[App] Maps_

**[DHIS2-14928](https://dhis2.atlassian.net/browse/DHIS2-14928): Not possible to toggle visibility for event donut clusters**  
Components: _[App] Maps_

**[DHIS2-8443](https://dhis2.atlassian.net/browse/DHIS2-8443): CreatedBy value changes when other user edits the reportTable**  
Components: _[App] Pivot table_

**[DHIS2-16496](https://dhis2.atlassian.net/browse/DHIS2-16496): Standard Report doesn't show Arabic text**  
Components: _[App] Reports_

**[DHIS2-15651](https://dhis2.atlassian.net/browse/DHIS2-15651): Standard Reports take Data capture instead of Data output for Org Unit selection parameter**  
Components: _[App] Reports_

**[DHIS2-15041](https://dhis2.atlassian.net/browse/DHIS2-15041): Standard Reports: data retrieval does not clear null filter selections**  
Components: _[App] Reports_

**[DHIS2-15407](https://dhis2.atlassian.net/browse/DHIS2-15407): Arabic text doesn’t show up in PDF downloads of Data Set Reports**  
Components: _[App] Reports_

**[DHIS2-16534](https://dhis2.atlassian.net/browse/DHIS2-16534): Remove "Put analytics into maintenance mode" checkbox**  
Components: _[App] Settings_

**[DHIS2-15326](https://dhis2.atlassian.net/browse/DHIS2-15326): Settings app: do NOT remove OAuth2 Clients Settings in v41**  
Components: _[App] Settings_

**[DHIS2-15735](https://dhis2.atlassian.net/browse/DHIS2-15735): Superuser role unable to make changes in the System Settings app**  
Components: _[App] Settings_

**[DHIS2-10834](https://dhis2.atlassian.net/browse/DHIS2-10834): Appearance page: ℹ️ information icons should not be buttons**  
Components: _[App] Settings_

**[DHIS2-15875](https://dhis2.atlassian.net/browse/DHIS2-15875): Some pages are not full-height in System Settings app**  
Components: _[App] Settings_

**[DHIS2-15662](https://dhis2.atlassian.net/browse/DHIS2-15662): System settings - fallback auto-reverts to English after any update**  
Components: _[App] Settings_

**[DHIS2-10931](https://dhis2.atlassian.net/browse/DHIS2-10931): Missing translations for known translated strings**  
Components: _[App] SMS configuration_

**[DHIS2-14104](https://dhis2.atlassian.net/browse/DHIS2-14104): Evaluation error for `d2:hasValue` on True Only fields**  
Components: _[App] Tracker capture_

**[DHIS2-16787](https://dhis2.atlassian.net/browse/DHIS2-16787): Tracker capture - Ask user to create new event when stage is complete flag is not working correctly when the program stages are not repeatable**  
Components: _[App] Tracker capture_

**[DHIS2-16110](https://dhis2.atlassian.net/browse/DHIS2-16110): PR hide program stage based on Org Unit group not working**  
Components: _[App] Tracker capture_

**[DHIS2-16209](https://dhis2.atlassian.net/browse/DHIS2-16209): Mistranslated arabic month name**  
Components: _[App] Tracker capture_

**[DHIS2-15844](https://dhis2.atlassian.net/browse/DHIS2-15844): Expressions with multiple `d2:hasValue`s fails**  
Components: _[App] Tracker capture_

**[DHIS2-15464](https://dhis2.atlassian.net/browse/DHIS2-15464): d2:right and d2:left on numerical strings**  
Components: _[App] Tracker capture_

**[DHIS2-15500](https://dhis2.atlassian.net/browse/DHIS2-15500): Form name for TEA is not displaying on List of TEI page for a Tracker Capture Program**  
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

**[DHIS2-14357](https://dhis2.atlassian.net/browse/DHIS2-14357): an apostrophe sign inside user string cause crash to d2:length function**  
Components: _[App] Tracker capture_

**[DHIS2-15022](https://dhis2.atlassian.net/browse/DHIS2-15022):  Enrollments POST API failure with caching issue**  
Components: _[App] Tracker capture_

**[DHIS2-13679](https://dhis2.atlassian.net/browse/DHIS2-13679): "Show Error" program rule action functionality**  
Components: _[App] Tracker capture_

**[DHIS2-9190](https://dhis2.atlassian.net/browse/DHIS2-9190): Form name translations not applied on TEAs**  
Components: _[App] Tracker capture_

**[DHIS2-11316](https://dhis2.atlassian.net/browse/DHIS2-11316): Translation support and labels are missing for "Subject" and "Message" for all notification templates in translations app**  
Components: _[App] Translations_

**[DHIS2-12971](https://dhis2.atlassian.net/browse/DHIS2-12971): Error when selecting "Program Rule Action" in Translations app**  
Components: _[App] Translations_

**[DHIS2-16516](https://dhis2.atlassian.net/browse/DHIS2-16516): [Users app]: missing authority translations**  
Components: _[App] User_

**[DHIS2-13408](https://dhis2.atlassian.net/browse/DHIS2-13408): Pre-fill user-invite fields and align form fields with user-app form**  
Components: _[App] User_

**[DHIS2-14585](https://dhis2.atlassian.net/browse/DHIS2-14585): User form - orgunit filters only find embedded strings that start with character no 1**  
Components: _[App] User_

**[DHIS2-16268](https://dhis2.atlassian.net/browse/DHIS2-16268): User App: Org Units not properly searchable if not super user**  
Components: _[App] User_

**[DHIS2-15431](https://dhis2.atlassian.net/browse/DHIS2-15431): user role, user group update does not redirect to user app main menu**  
Components: _[App] User_

**[DHIS2-16170](https://dhis2.atlassian.net/browse/DHIS2-16170): Opening a User up in User App automatically Changes Database and Interface Languages**  
Components: _[App] User_

**[DHIS2-16299](https://dhis2.atlassian.net/browse/DHIS2-16299): User app: user groups code is not editable**  
Components: _[App] User_

**[DHIS2-14203](https://dhis2.atlassian.net/browse/DHIS2-14203): User App - Last Login Time Ignoring Local User Timezone**  
Components: _[App] User_

**[DHIS2-15368](https://dhis2.atlassian.net/browse/DHIS2-15368): Cannot edit a user who has had their last role removed**  
Components: _[App] User_

**[DHIS2-15860](https://dhis2.atlassian.net/browse/DHIS2-15860): Impossibility of creating or modifying a user when there are some attributes in the form and these are not completed**  
Components: _[App] User_

**[DHIS2-15485](https://dhis2.atlassian.net/browse/DHIS2-15485): User app: password message for create new user is missing text about special character**  
Components: _[App] User_

**[DHIS2-15172](https://dhis2.atlassian.net/browse/DHIS2-15172): Unable to disable and enable users through the context menu in user management app**  
Components: _[App] User_

**[DHIS2-15611](https://dhis2.atlassian.net/browse/DHIS2-15611): Scrollbar showing when typing username when replicating user**  
Components: _[App] User_

**[DHIS2-15148](https://dhis2.atlassian.net/browse/DHIS2-15148): User Profile app needs to use new endpoint for updating their avatar**  
Components: _[App] User Profile_

**[DHIS2-10828](https://dhis2.atlassian.net/browse/DHIS2-10828): No file size limit for user avatar**  
Components: _[App] User Profile_

**[DHIS2-15470](https://dhis2.atlassian.net/browse/DHIS2-15470): Only show the owners PATs in the list as an admin**  
Components: _[App] User Profile_

**[DHIS2-16521](https://dhis2.atlassian.net/browse/DHIS2-16521): Job Scheduler - Finished jobs are cleanup up too quickly**  
Components: _[Core] Job Scheduler_

**[DHIS2-14900](https://dhis2.atlassian.net/browse/DHIS2-14900): multi-calendar component does not show correct ethiopic calendar today date**  
Components: _Frontend_


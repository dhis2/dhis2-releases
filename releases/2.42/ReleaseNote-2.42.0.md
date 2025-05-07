# Patch 2.42.0 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-18451](https://dhis2.atlassian.net/browse/DHIS2-18451): Add OptionSet objects to /dataItems endpoint**  
Components: _[API] Analytics_

**[DHIS2-18368](https://dhis2.atlassian.net/browse/DHIS2-18368): Options in analytics API data dimension items**  
Components: _[API] Analytics_

**[DHIS2-19148](https://dhis2.atlassian.net/browse/DHIS2-19148): Event visualization parent graph map for orgunit data elements**  
Components: _[API] Analytics_

**[DHIS2-15803](https://dhis2.atlassian.net/browse/DHIS2-15803): Add Year start Sept - Aug**  
Components: _[API] Analytics_

**[DHIS2-18956](https://dhis2.atlassian.net/browse/DHIS2-18956): Add support for Options in /dataItems endpoint**  
Components: _[API] Analytics_

**[DHIS2-18239](https://dhis2.atlassian.net/browse/DHIS2-18239): Extend Dashboard model to support embedded dashboards**  
Components: _[API] Analytics_

**[DHIS2-13907](https://dhis2.atlassian.net/browse/DHIS2-13907): Support XLSX in Analytics downloads**  
Components: _[API] Analytics_

**[DHIS2-14884](https://dhis2.atlassian.net/browse/DHIS2-14884): [D23] Improve TEI query performance**  
Components: _[API] Analytics_

**[DHIS2-17481](https://dhis2.atlassian.net/browse/DHIS2-17481): "New" calculation of outliers in the "old" API**  
Components: _[API] Analytics_

**[DHIS2-17282](https://dhis2.atlassian.net/browse/DHIS2-17282): Config option for disabling indexing of dynamic dimension columns in analytics tables**  
Components: _[API] Analytics_

**[DHIS2-17485](https://dhis2.atlassian.net/browse/DHIS2-17485): Org units associated with program and data set for org unit dimension in analytics API**  
Components: _[API] Analytics_

**[DHIS2-17452](https://dhis2.atlassian.net/browse/DHIS2-17452): Index model refactoring**  
Components: _[API] Analytics_

**[DHIS2-17026](https://dhis2.atlassian.net/browse/DHIS2-17026): Analytics Enrollments API - round to two decimals by default**  
Components: _[API] Analytics_

**[DHIS2-17659](https://dhis2.atlassian.net/browse/DHIS2-17659): Base URL html injection for bundled apps and bundled app overrides**  
Components: _[API] App management_

**[DHIS2-18286](https://dhis2.atlassian.net/browse/DHIS2-18286): Indicator merge from UI**  
Components: _[API] App management_

**[DHIS2-18287](https://dhis2.atlassian.net/browse/DHIS2-18287): Indicator types merge from UI**  
Components: _[API] App management_

**[DHIS2-18290](https://dhis2.atlassian.net/browse/DHIS2-18290): category options merge from UI**  
Components: _[API] App management_

**[DHIS2-18872](https://dhis2.atlassian.net/browse/DHIS2-18872): Export data summary statistics in Prometheus text format**  
Components: _[API] Data administration_

**[DHIS2-18899](https://dhis2.atlassian.net/browse/DHIS2-18899): [Data Administration]: Update deprecated reference to softDeletedTrackedEntityInstanceRemoval**  
Components: _[API] Data administration_

**[DHIS2-18768](https://dhis2.atlassian.net/browse/DHIS2-18768): Integrity check for users with ALL**  
Components: _[API] Data Integrity_

**[DHIS2-18941](https://dhis2.atlassian.net/browse/DHIS2-18941): Integrity check for datasets with same name**  
Components: _[API] Data Integrity_

**[DHIS2-18280](https://dhis2.atlassian.net/browse/DHIS2-18280): Integrity check for categories which are dimensions but not used in any visualization**  
Components: _[API] Data Integrity_

**[DHIS2-17737](https://dhis2.atlassian.net/browse/DHIS2-17737): Integrity check for user role with no authorities/users**  
Components: _[API] Data Integrity_

**[DHIS2-17734](https://dhis2.atlassian.net/browse/DHIS2-17734): Integrity check for users with no roles**  
Components: _[API] Data Integrity_

**[DHIS2-17739](https://dhis2.atlassian.net/browse/DHIS2-17739): Integrity check for option groups with no optionsets or options**  
Components: _[API] Data Integrity_

**[DHIS2-17686](https://dhis2.atlassian.net/browse/DHIS2-17686): Data Integrity Check - find users which have a capture OU that is not in their search OU**  
Components: _[API] Data Integrity_

**[DHIS2-17742](https://dhis2.atlassian.net/browse/DHIS2-17742): Integrity check for push analyses with no recipients**  
Components: _[API] Data Integrity_

**[DHIS2-18258](https://dhis2.atlassian.net/browse/DHIS2-18258): Create data integrity check for duplicate category option combos (has same category options & category combo)**  
Components: _[API] Data Integrity_

**[DHIS2-17752](https://dhis2.atlassian.net/browse/DHIS2-17752): Add integrity check for users with invalid usernames**  
Components: _[API] Data Integrity_

**[DHIS2-16431](https://dhis2.atlassian.net/browse/DHIS2-16431): Datastore - add ACL check for writes**  
Components: _[API] Data store_

**[DHIS2-18271](https://dhis2.atlassian.net/browse/DHIS2-18271): File Resource - detect and repair when file resource and file are out of sync**  
Components: _[API] File Resources_

**[DHIS2-16872](https://dhis2.atlassian.net/browse/DHIS2-16872): CustomIcon refactor**  
Components: _[API] File Resources_, _[API] Tracker_, _[App] Maintenance_

**[DHIS2-18388](https://dhis2.atlassian.net/browse/DHIS2-18388): Ability to invalidate specific cache based on application events**  
Components: _[API] Frameworks and libraries_, _[API] Security_

**[DHIS2-17419](https://dhis2.atlassian.net/browse/DHIS2-17419): Job Scheduler - Manual revert of jobs stuck in RUNNING status**  
Components: _[API] Job scheduler_

**[DHIS2-18752](https://dhis2.atlassian.net/browse/DHIS2-18752): Job Scheduler - Use shutdown hook to transition running jobs to a new INTERRUPTED state**  
Components: _[API] Job scheduler_, _[Core] Job Scheduler_

**[DHIS2-17449](https://dhis2.atlassian.net/browse/DHIS2-17449): Specifying root junction OR with a single filter for metadata leads to no results**  
Components: _[API] Metadata import-export_

**[DHIS2-14456](https://dhis2.atlassian.net/browse/DHIS2-14456): Indicator merge API**  
Components: _[API] Metadata model_

**[DHIS2-18745](https://dhis2.atlassian.net/browse/DHIS2-18745): Add backend support for Program Indicator Disaggregation**  
Components: _[API] Metadata model_

**[DHIS2-19067](https://dhis2.atlassian.net/browse/DHIS2-19067): Add code and short name to tracked entity type**  
Components: _[API] Metadata model_

**[DHIS2-18321](https://dhis2.atlassian.net/browse/DHIS2-18321): Category Option Combination merge API**  
Components: _[API] Metadata model_

**[DHIS2-14428](https://dhis2.atlassian.net/browse/DHIS2-14428): Category option merge API**  
Components: _[API] Metadata model_

**[DHIS2-14429](https://dhis2.atlassian.net/browse/DHIS2-14429): Data element merge API**  
Components: _[API] Metadata model_

**[DHIS2-16454](https://dhis2.atlassian.net/browse/DHIS2-16454): New metadata property for non individually analysable tracked entity attributes at program level**  
Components: _[API] Metadata model_

**[DHIS2-18644](https://dhis2.atlassian.net/browse/DHIS2-18644): Add "optionSetId" into objects returned in /dataItems**  
Components: _[API] Other_

**[DHIS2-19166](https://dhis2.atlassian.net/browse/DHIS2-19166): Handle requests to /apps/<appName> when a global shell is not installed/enabled**  
Components: _[API] Other_

**[DHIS2-19120](https://dhis2.atlassian.net/browse/DHIS2-19120): Bundle Global Shell**  
Components: _[API] Other_, _[App] Other_

**[DHIS2-18880](https://dhis2.atlassian.net/browse/DHIS2-18880): Notifier - minimum notification level setting**  
Components: _[API] Other_

**[DHIS2-18846](https://dhis2.atlassian.net/browse/DHIS2-18846): Notifier - add API endpoint to clear notifications of jobs**  
Components: _[API] Other_

**[DHIS2-18370](https://dhis2.atlassian.net/browse/DHIS2-18370): Visualization API: Support saving and loading "optionSetItem" in "items"**  
Components: _[API] Other_

**[DHIS2-18994](https://dhis2.atlassian.net/browse/DHIS2-18994): Support OAuth2 client grant AuthScheme for API Routes**  
Components: _[API] Other_

**[DHIS2-18992](https://dhis2.atlassian.net/browse/DHIS2-18992): Allow route response timeout to be customised**  
Components: _[API] Other_

**[DHIS2-15913](https://dhis2.atlassian.net/browse/DHIS2-15913): Remove log prefix for job process**  
Components: _[API] Other_

**[DHIS2-18837](https://dhis2.atlassian.net/browse/DHIS2-18837): Support other authentication schemes for Route API**  
Components: _[API] Other_, _[App] Route Manager_

**[DHIS2-18643](https://dhis2.atlassian.net/browse/DHIS2-18643): Visualization API: return default "optionSetItem" in "items"**  
Components: _[API] Other_

**[DHIS2-17015](https://dhis2.atlassian.net/browse/DHIS2-17015): Backend- Documentation for new login endpoints**  
Components: _[API] Other_

**[DHIS2-13435](https://dhis2.atlassian.net/browse/DHIS2-13435): Implement contains() and containsItems() expression functions in Kotlin rule engine**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-18914](https://dhis2.atlassian.net/browse/DHIS2-18914): Move 2FA system settings into configuration aka. dhis.conf**  
Components: _[API] Security_

**[DHIS2-17922](https://dhis2.atlassian.net/browse/DHIS2-17922): Spring Authorization Server**  
Components: _[API] Security_

**[DHIS2-18915](https://dhis2.atlassian.net/browse/DHIS2-18915): Add 2FA type in authentication controller response**  
Components: _[API] Security_

**[DHIS2-18574](https://dhis2.atlassian.net/browse/DHIS2-18574): Provide a password validation regxp based on the current policy and configurables**  
Components: _[API] Security_

**[DHIS2-18977](https://dhis2.atlassian.net/browse/DHIS2-18977): Expose the current allowed 2fA methods in the API**  
Components: _[API] Security_

**[DHIS2-18912](https://dhis2.atlassian.net/browse/DHIS2-18912): When changing email with email based 2FA enabled, fail fast**  
Components: _[API] Security_

**[DHIS2-18933](https://dhis2.atlassian.net/browse/DHIS2-18933): Revert password regexp in system setting**  
Components: _[API] Security_

**[DHIS2-18913](https://dhis2.atlassian.net/browse/DHIS2-18913): Expose the 2FA type in the /me endpoint**  
Components: _[API] Security_

**[DHIS2-18390](https://dhis2.atlassian.net/browse/DHIS2-18390): Enforce email verification in system settings**  
Components: _[API] Security_

**[DHIS2-13334](https://dhis2.atlassian.net/browse/DHIS2-13334): Email-based authentication codes for MFA/2FA**  
Components: _[API] Security_, _[API] User_

**[DHIS2-18305](https://dhis2.atlassian.net/browse/DHIS2-18305): Wire up new backup login page made in DHIS2-18114**  
Components: _[API] Security_

**[DHIS2-18623](https://dhis2.atlassian.net/browse/DHIS2-18623): Various email verification feature tweaks**  
Components: _[API] Security_

**[DHIS2-16267](https://dhis2.atlassian.net/browse/DHIS2-16267): Add system setting to allow pop-up message on login page**  
Components: _[API] System configuration_, _[App] Login_

**[DHIS2-18014](https://dhis2.atlassian.net/browse/DHIS2-18014): [Backend] Add log entries for occurredAt, scheduledAt and geometry**  
Components: _[API] Tracker_

**[DHIS2-18540](https://dhis2.atlassian.net/browse/DHIS2-18540): Export /tracker/trackedEntities using different idSchemes**  
Components: _[API] Tracker_

**[DHIS2-18012](https://dhis2.atlassian.net/browse/DHIS2-18012): [Backend] Filter and sort by user and dataElement in changelogs**  
Components: _[API] Tracker_

**[DHIS2-14968](https://dhis2.atlassian.net/browse/DHIS2-14968): Export /tracker/event using different idSchemes**  
Components: _[API] Tracker_

**[DHIS2-18475](https://dhis2.atlassian.net/browse/DHIS2-18475): [Backend] Filter and sort by user and TEA in changelogs**  
Components: _[API] Tracker_

**[DHIS2-17827](https://dhis2.atlassian.net/browse/DHIS2-17827): Refactor ProgramNotificationTemplate model**  
Components: _[API] Tracker_

**[DHIS2-16853](https://dhis2.atlassian.net/browse/DHIS2-16853): Email verification support**  
Components: _[API] User_

**[DHIS2-18405](https://dhis2.atlassian.net/browse/DHIS2-18405): [Data Entry App]: Default to first section when not tabbed**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18129](https://dhis2.atlassian.net/browse/DHIS2-18129): Custom title/subtitle for dataset**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18399](https://dhis2.atlassian.net/browse/DHIS2-18399): Documentation for new custom forms settings**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-17506](https://dhis2.atlassian.net/browse/DHIS2-17506): implement vertical vs horizontal tabs**  
Components: _[App] Aggregate Data Entry_, _[App] Maintenance_

**[DHIS2-16819](https://dhis2.atlassian.net/browse/DHIS2-16819): [DATA EXCHANGE APP]: Disable "Submit data" button when user lacks data write permission in the data exchange app**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-17489](https://dhis2.atlassian.net/browse/DHIS2-17489): [DATA EXCHANGE APP]: add target importStrategy, skipAudit, dryRun options in UI**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-18411](https://dhis2.atlassian.net/browse/DHIS2-18411): [DATA EXCHANGE APP]: add data sharing in configurations menu**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-17275](https://dhis2.atlassian.net/browse/DHIS2-17275): Update ID Scheme selection settings in Data exchange config UI**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-17276](https://dhis2.atlassian.net/browse/DHIS2-17276): Add metadata sharing setting option to data exchanges**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-17213](https://dhis2.atlassian.net/browse/DHIS2-17213): [DATA EXCHANGE]: add `outputDataItemIdScheme` as option in v41**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-16270](https://dhis2.atlassian.net/browse/DHIS2-16270): Standardized, updated dimension chip design**  
Components: _[App] Analytics_, _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-13885](https://dhis2.atlassian.net/browse/DHIS2-13885): Link to an installed app should be available from the App Management App**  
Components: _[App] App management_

**[DHIS2-19144](https://dhis2.atlassian.net/browse/DHIS2-19144): Performance related options for working lists**  
Components: _[App] Capture_

**[DHIS2-17589](https://dhis2.atlassian.net/browse/DHIS2-17589): Show absolute date when hovering over relative dates**  
Components: _[App] Capture_

**[DHIS2-8087](https://dhis2.atlassian.net/browse/DHIS2-8087): First launch/empty state**  
Components: _[App] Capture_

**[DHIS2-17591](https://dhis2.atlassian.net/browse/DHIS2-17591): [Frontend] Support plugins in event programs**  
Components: _[App] Capture_

**[DHIS2-17607](https://dhis2.atlassian.net/browse/DHIS2-17607): [Frontend] Support plugins in program stages**  
Components: _[App] Capture_

**[DHIS2-17726](https://dhis2.atlassian.net/browse/DHIS2-17726): [Frontend] Support plugins in Profile Widget**  
Components: _[App] Capture_

**[DHIS2-16338](https://dhis2.atlassian.net/browse/DHIS2-16338): Display event's org. unit in working lists**  
Components: _[App] Capture_

**[DHIS2-16337](https://dhis2.atlassian.net/browse/DHIS2-16337): Display event's org. unit in view event page**  
Components: _[App] Capture_

**[DHIS2-15462](https://dhis2.atlassian.net/browse/DHIS2-15462): Use dhis2 UI calendarInput component in forms**  
Components: _[App] Capture_

**[DHIS2-18309](https://dhis2.atlassian.net/browse/DHIS2-18309): Enable non-Gregorian calendars in forms**  
Components: _[App] Capture_

**[DHIS2-18311](https://dhis2.atlassian.net/browse/DHIS2-18311): Enable non-Gregorian calendars in working list filters**  
Components: _[App] Capture_

**[DHIS2-18310](https://dhis2.atlassian.net/browse/DHIS2-18310): Enable non-Gregorian calendars in views and lists**  
Components: _[App] Capture_

**[DHIS2-15187](https://dhis2.atlassian.net/browse/DHIS2-15187): Bulk operations for tracked entity list**  
Components: _[App] Capture_

**[DHIS2-15466](https://dhis2.atlassian.net/browse/DHIS2-15466): Typing the date when editing enrollment- and incident-date**  
Components: _[App] Capture_

**[DHIS2-18325](https://dhis2.atlassian.net/browse/DHIS2-18325): Show org. unit selector in the new event form in Tracker Programs**  
Components: _[App] Capture_

**[DHIS2-18746](https://dhis2.atlassian.net/browse/DHIS2-18746): Show org. unit selector in the edit event forms for Tracker programs**  
Components: _[App] Capture_

**[DHIS2-17655](https://dhis2.atlassian.net/browse/DHIS2-17655): [Related stages] Two event workspace**  
Components: _[App] Capture_

**[DHIS2-18328](https://dhis2.atlassian.net/browse/DHIS2-18328): [Frontend] Handle log entries for occurredAt, scheduledAt and geometry**  
Components: _[App] Capture_

**[DHIS2-18018](https://dhis2.atlassian.net/browse/DHIS2-18018): Show related stages Widget in view event page**  
Components: _[App] Capture_

**[DHIS2-15190](https://dhis2.atlassian.net/browse/DHIS2-15190): Bulk operations in event list**  
Components: _[App] Capture_

**[DHIS2-17792](https://dhis2.atlassian.net/browse/DHIS2-17792): Org unit context in forms**  
Components: _[App] Capture_

**[DHIS2-17192](https://dhis2.atlassian.net/browse/DHIS2-17192): Show related stages Widget on registration page**  
Components: _[App] Capture_

**[DHIS2-17613](https://dhis2.atlassian.net/browse/DHIS2-17613): Use the new /note endpoints**  
Components: _[App] Capture_

**[DHIS2-13195](https://dhis2.atlassian.net/browse/DHIS2-13195): Show user friendly error messages when tracker import fails**  
Components: _[App] Capture_

**[DHIS2-12288](https://dhis2.atlassian.net/browse/DHIS2-12288): Implement enrollment section descriptions  in Capture app**  
Components: _[App] Capture_

**[DHIS2-18250](https://dhis2.atlassian.net/browse/DHIS2-18250): Breadcrumb bar for event and enrollment pages**  
Components: _[App] Capture_

**[DHIS2-17956](https://dhis2.atlassian.net/browse/DHIS2-17956): Show name for org. unit value type in changelog**  
Components: _[App] Capture_

**[DHIS2-18017](https://dhis2.atlassian.net/browse/DHIS2-18017): [Related stages] Ability to unlink event from view event page**  
Components: _[App] Capture_

**[DHIS2-15463](https://dhis2.atlassian.net/browse/DHIS2-15463): Use dhis2 UI calendarInput component in working lists**  
Components: _[App] Capture_

**[DHIS2-17771](https://dhis2.atlassian.net/browse/DHIS2-17771): Org unit context in tables and lists**  
Components: _[App] Capture_

**[DHIS2-11836](https://dhis2.atlassian.net/browse/DHIS2-11836): Respect "Block entry form" setting**  
Components: _[App] Capture_

**[DHIS2-17991](https://dhis2.atlassian.net/browse/DHIS2-17991): [Related stages] Show org.unit selector in "Enter details now"**  
Components: _[App] Capture_

**[DHIS2-15238](https://dhis2.atlassian.net/browse/DHIS2-15238): Show and filter on assigned user in Program stage working list**  
Components: _[App] Capture_

**[DHIS2-17770](https://dhis2.atlassian.net/browse/DHIS2-17770): Org unit contextualization in self-contained widgets**  
Components: _[App] Capture_

**[DHIS2-17048](https://dhis2.atlassian.net/browse/DHIS2-17048): Skip/unskip events in stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-17878](https://dhis2.atlassian.net/browse/DHIS2-17878): Delete event action in stages and events widget**  
Components: _[App] Capture_

**[DHIS2-17575](https://dhis2.atlassian.net/browse/DHIS2-17575): Disable new event buttons when no data write access to programstage**  
Components: _[App] Capture_

**[DHIS2-17068](https://dhis2.atlassian.net/browse/DHIS2-17068): Related stages: Check if stage is eligible**  
Components: _[App] Capture_

**[DHIS2-17101](https://dhis2.atlassian.net/browse/DHIS2-17101): Related stages: Consider "Prevent adding events to stage” program rule**  
Components: _[App] Capture_

**[DHIS2-16125](https://dhis2.atlassian.net/browse/DHIS2-16125): Stages and events Widget: Hide program stage under certain circumstances**  
Components: _[App] Capture_

**[DHIS2-16293](https://dhis2.atlassian.net/browse/DHIS2-16293): Add category combination selection for new event (event programs)**  
Components: _[App] Capture_

**[DHIS2-16294](https://dhis2.atlassian.net/browse/DHIS2-16294): Add category combination selection for edit event (event programs)**  
Components: _[App] Capture_

**[DHIS2-13233](https://dhis2.atlassian.net/browse/DHIS2-13233): Download TE working lists**  
Components: _[App] Capture_

**[DHIS2-18066](https://dhis2.atlassian.net/browse/DHIS2-18066): Allow selecting the user org unit in combination with org unit levels or groups**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-18641](https://dhis2.atlassian.net/browse/DHIS2-18641): Adjust map zoom level when entering/leaving fullscreen/slideshow of dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-6647](https://dhis2.atlassian.net/browse/DHIS2-6647): Dashboard search/filtering, inform user of no returned results**  
Components: _[App] Dashboard_

**[DHIS2-18441](https://dhis2.atlassian.net/browse/DHIS2-18441): Improved user experience with updated dashboard design**  
Components: _[App] Dashboard_

**[DHIS2-13038](https://dhis2.atlassian.net/browse/DHIS2-13038): Slideshow presentation mode on dashboards**  
Components: _[App] Dashboard_

**[DHIS2-16143](https://dhis2.atlassian.net/browse/DHIS2-16143): Options for skipping tracked entity and outlier data**  
Components: _[App] Data administration_

**[DHIS2-19304](https://dhis2.atlassian.net/browse/DHIS2-19304): [Datastore App] Editor Enhancements**  
Components: _[App] Data store_

**[DHIS2-14774](https://dhis2.atlassian.net/browse/DHIS2-14774): Display type and definitions for data items in data selector**  
Components: _[App] Data visualizer_

**[DHIS2-15833](https://dhis2.atlassian.net/browse/DHIS2-15833): Making Pivot table the default item in data visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-15691](https://dhis2.atlassian.net/browse/DHIS2-15691): Use new aggregate enrollment analytics endpoint**  
Components: _[App] Event reports_

**[DHIS2-11779](https://dhis2.atlassian.net/browse/DHIS2-11779): Deprecate mergeMode in Import/Export app**  
Components: _[App] Import-export_

**[DHIS2-18375](https://dhis2.atlassian.net/browse/DHIS2-18375): FE: create a page that confirms email verification success or failure**  
Components: _[App] Login_

**[DHIS2-17851](https://dhis2.atlassian.net/browse/DHIS2-17851): Filter redirect URLs after login to never accept js, image etc. resources, only index.html and /**  
Components: _[App] Login_

**[DHIS2-17629](https://dhis2.atlassian.net/browse/DHIS2-17629): [LOGIN APP]: read hash routes + append on redirect**  
Components: _[App] Login_

**[DHIS2-19411](https://dhis2.atlassian.net/browse/DHIS2-19411): Add shortcuts for command palette - Maintenance App**  
Components: _[App] Maintenance_

**[DHIS2-19091](https://dhis2.atlassian.net/browse/DHIS2-19091): data elements - refactor**  
Components: _[App] Maintenance_

**[DHIS2-19090](https://dhis2.atlassian.net/browse/DHIS2-19090): data sets - custom form**  
Components: _[App] Maintenance_

**[DHIS2-12203](https://dhis2.atlassian.net/browse/DHIS2-12203): Select predictions by category option combination**  
Components: _[App] Maintenance_

**[DHIS2-18917](https://dhis2.atlassian.net/browse/DHIS2-18917): data sets - readapt the form for editing**  
Components: _[App] Maintenance_

**[DHIS2-18710](https://dhis2.atlassian.net/browse/DHIS2-18710): data sets - advanced**  
Components: _[App] Maintenance_

**[DHIS2-18709](https://dhis2.atlassian.net/browse/DHIS2-18709): data sets - org unit access**  
Components: _[App] Maintenance_

**[DHIS2-18945](https://dhis2.atlassian.net/browse/DHIS2-18945): data sets - display options**  
Components: _[App] Maintenance_

**[DHIS2-18706](https://dhis2.atlassian.net/browse/DHIS2-18706): data sets - periods fields**  
Components: _[App] Maintenance_

**[DHIS2-18707](https://dhis2.atlassian.net/browse/DHIS2-18707): data sets - validation fields**  
Components: _[App] Maintenance_

**[DHIS2-18997](https://dhis2.atlassian.net/browse/DHIS2-18997): org units levels -  list**  
Components: _[App] Maintenance_

**[DHIS2-18953](https://dhis2.atlassian.net/browse/DHIS2-18953): add missing overviews**  
Components: _[App] Maintenance_

**[DHIS2-19084](https://dhis2.atlassian.net/browse/DHIS2-19084): data sets - section form - translate**  
Components: _[App] Maintenance_

**[DHIS2-19088](https://dhis2.atlassian.net/browse/DHIS2-19088): data sets - section form - filter by category combo**  
Components: _[App] Maintenance_

**[DHIS2-19089](https://dhis2.atlassian.net/browse/DHIS2-19089): data sets - section form -manage enabled/disabled fields**  
Components: _[App] Maintenance_

**[DHIS2-19086](https://dhis2.atlassian.net/browse/DHIS2-19086): data sets - section form - edit section**  
Components: _[App] Maintenance_

**[DHIS2-19083](https://dhis2.atlassian.net/browse/DHIS2-19083): data sets - section form - move up and down**  
Components: _[App] Maintenance_

**[DHIS2-18543](https://dhis2.atlassian.net/browse/DHIS2-18543): data sets - data fields**  
Components: _[App] Maintenance_

**[DHIS2-17848](https://dhis2.atlassian.net/browse/DHIS2-17848): Implement Organisation unit tree list x**  
Components: _[App] Maintenance_

**[DHIS2-18334](https://dhis2.atlassian.net/browse/DHIS2-18334): Maintenance app - First version of the data set form - scaffholding**  
Components: _[App] Maintenance_

**[DHIS2-18049](https://dhis2.atlassian.net/browse/DHIS2-18049): Implement Category options list**  
Components: _[App] Maintenance_

**[DHIS2-18281](https://dhis2.atlassian.net/browse/DHIS2-18281): Maintenance app - indicator list**  
Components: _[App] Maintenance_

**[DHIS2-18514](https://dhis2.atlassian.net/browse/DHIS2-18514): Category option group set list - row actions**  
Components: _[App] Maintenance_

**[DHIS2-18284](https://dhis2.atlassian.net/browse/DHIS2-18284): Maintanance app - indicator types new form**  
Components: _[App] Maintenance_

**[DHIS2-18283](https://dhis2.atlassian.net/browse/DHIS2-18283): Maintanance app - indicator types list**  
Components: _[App] Maintenance_

**[DHIS2-18705](https://dhis2.atlassian.net/browse/DHIS2-18705): data sets - custom disaggregation in data fields**  
Components: _[App] Maintenance_

**[DHIS2-18538](https://dhis2.atlassian.net/browse/DHIS2-18538): data sets - required fields**  
Components: _[App] Maintenance_

**[DHIS2-18879](https://dhis2.atlassian.net/browse/DHIS2-18879): Implement organisation Unit Group add form**  
Components: _[App] Maintenance_

**[DHIS2-18878](https://dhis2.atlassian.net/browse/DHIS2-18878): Implement organisation Unit Group edit form**  
Components: _[App] Maintenance_

**[DHIS2-18696](https://dhis2.atlassian.net/browse/DHIS2-18696): Implement organisation Unit Group Sets edit form**  
Components: _[App] Maintenance_

**[DHIS2-18769](https://dhis2.atlassian.net/browse/DHIS2-18769): Update icon picker for new API with pagination**  
Components: _[App] Maintenance_

**[DHIS2-18539](https://dhis2.atlassian.net/browse/DHIS2-18539): data sets - setup fields**  
Components: _[App] Maintenance_

**[DHIS2-17898](https://dhis2.atlassian.net/browse/DHIS2-17898): ORG UNIT FORM: Create add a new org unit form**  
Components: _[App] Maintenance_

**[DHIS2-17899](https://dhis2.atlassian.net/browse/DHIS2-17899): ORG UNIT FORM: readapt form for editing**  
Components: _[App] Maintenance_

**[DHIS2-18434](https://dhis2.atlassian.net/browse/DHIS2-18434): Implement category option combos edit form**  
Components: _[App] Maintenance_

**[DHIS2-18142](https://dhis2.atlassian.net/browse/DHIS2-18142): Category option list**  
Components: _[App] Maintenance_

**[DHIS2-18439](https://dhis2.atlassian.net/browse/DHIS2-18439): Category option group add form**  
Components: _[App] Maintenance_

**[DHIS2-18440](https://dhis2.atlassian.net/browse/DHIS2-18440): Category option group edit form**  
Components: _[App] Maintenance_

**[DHIS2-18698](https://dhis2.atlassian.net/browse/DHIS2-18698): organisation Unit Group Set list**  
Components: _[App] Maintenance_

**[DHIS2-18047](https://dhis2.atlassian.net/browse/DHIS2-18047): Implement Category combo list**  
Components: _[App] Maintenance_

**[DHIS2-18437](https://dhis2.atlassian.net/browse/DHIS2-18437): Implement Category options add form**  
Components: _[App] Maintenance_

**[DHIS2-18438](https://dhis2.atlassian.net/browse/DHIS2-18438): Implement Category options edit form**  
Components: _[App] Maintenance_

**[DHIS2-18700](https://dhis2.atlassian.net/browse/DHIS2-18700): organisation Unit Group list**  
Components: _[App] Maintenance_

**[DHIS2-18512](https://dhis2.atlassian.net/browse/DHIS2-18512): Category option group set list -viewing items**  
Components: _[App] Maintenance_

**[DHIS2-18032](https://dhis2.atlassian.net/browse/DHIS2-18032): ORG UNITS LIST: remove select all checkbox x**  
Components: _[App] Maintenance_

**[DHIS2-17896](https://dhis2.atlassian.net/browse/DHIS2-17896): ORG UNITS LIST: Add actions menu to elements in the list with the actions to edit & delete x**  
Components: _[App] Maintenance_

**[DHIS2-17914](https://dhis2.atlassian.net/browse/DHIS2-17914): ORG UNITS LIST: Add translate action to actions menu**  
Components: _[App] Maintenance_

**[DHIS2-18431](https://dhis2.atlassian.net/browse/DHIS2-18431): Implement Category combo add form**  
Components: _[App] Maintenance_

**[DHIS2-18432](https://dhis2.atlassian.net/browse/DHIS2-18432): Implement Category combo edit form**  
Components: _[App] Maintenance_

**[DHIS2-18420](https://dhis2.atlassian.net/browse/DHIS2-18420): show display name rather than name**  
Components: _[App] Maintenance_

**[DHIS2-18419](https://dhis2.atlassian.net/browse/DHIS2-18419): change searchable dropdown clean filter**  
Components: _[App] Maintenance_

**[DHIS2-18515](https://dhis2.atlassian.net/browse/DHIS2-18515): Category option group set list - multiple row actions**  
Components: _[App] Maintenance_

**[DHIS2-18513](https://dhis2.atlassian.net/browse/DHIS2-18513): Category option group set list - filters**  
Components: _[App] Maintenance_

**[DHIS2-17576](https://dhis2.atlassian.net/browse/DHIS2-17576): Maintenance app support for Data Approval Workflow Category Combo**  
Components: _[App] Maintenance_

**[DHIS2-18489](https://dhis2.atlassian.net/browse/DHIS2-18489): Maintanance app - indicator types edit form**  
Components: _[App] Maintenance_

**[DHIS2-17897](https://dhis2.atlassian.net/browse/DHIS2-17897): ORG UNITS LIST: Implement multi selected banner + download functionality for selected items x**  
Components: _[App] Maintenance_

**[DHIS2-13473](https://dhis2.atlassian.net/browse/DHIS2-13473): Analytics table hooks user interface**  
Components: _[App] Maintenance_

**[DHIS2-17901](https://dhis2.atlassian.net/browse/DHIS2-17901): ORG UNITS LIST: Implement deselect all functionality x**  
Components: _[App] Maintenance_

**[DHIS2-18067](https://dhis2.atlassian.net/browse/DHIS2-18067): ORG UNITS LIST: add details panel x**  
Components: _[App] Maintenance_

**[DHIS2-13724](https://dhis2.atlassian.net/browse/DHIS2-13724): Option for skip analytics for program stage data element in maintenance UI**  
Components: _[App] Maintenance_

**[DHIS2-15474](https://dhis2.atlassian.net/browse/DHIS2-15474): Support custom calculations in maps-app**  
Components: _[App] Maps_

**[DHIS2-19047](https://dhis2.atlassian.net/browse/DHIS2-19047): Maps app to provide access to enrollment coordinates for event maps**  
Components: _[App] Maps_

**[DHIS2-15796](https://dhis2.atlassian.net/browse/DHIS2-15796): Align period selector with other analytics apps and add more support for timeline and split view**  
Components: _[App] Maps_

**[DHIS2-16358](https://dhis2.atlassian.net/browse/DHIS2-16358): Add support for fixed periods for timeline and split-view maps**  
Components: _[App] Maps_

**[DHIS2-16112](https://dhis2.atlassian.net/browse/DHIS2-16112): Remove cloudy pixels from satellite imagery**  
Components: _[App] Maps_

**[DHIS2-18257](https://dhis2.atlassian.net/browse/DHIS2-18257): [Route Management] GET routes should pass query params (even without wildcard)**  
Components: _[App] Other_

**[DHIS2-18492](https://dhis2.atlassian.net/browse/DHIS2-18492): FE: add toggle in system setting app for turning on and off enforcing of verified emails**  
Components: _[App] Settings_

**[DHIS2-18493](https://dhis2.atlassian.net/browse/DHIS2-18493): FE: modify change email address journey**  
Components: _[App] Settings_

**[DHIS2-18789](https://dhis2.atlassian.net/browse/DHIS2-18789): [SETTINGS APP]: restrict enabling of enforceVerifiedEmail based on email configuration**  
Components: _[App] Settings_

**[DHIS2-18472](https://dhis2.atlassian.net/browse/DHIS2-18472): Enable embedded dashboards system setting**  
Components: _[App] Settings_

**[DHIS2-6361](https://dhis2.atlassian.net/browse/DHIS2-6361): Encryption of confidential system settings**  
**[DHIS2-18612](https://dhis2.atlassian.net/browse/DHIS2-18612): FE: Update user edit page to show if user has verified email**  
Components: _[App] User_

**[DHIS2-18422](https://dhis2.atlassian.net/browse/DHIS2-18422): [USERS APP]: allow users to remove deprecated authorities from user roles**  
Components: _[App] User_

**[DHIS2-18613](https://dhis2.atlassian.net/browse/DHIS2-18613): FE: Update user list to show email verification information + filter**  
Components: _[App] User_

**[DHIS2-18446](https://dhis2.atlassian.net/browse/DHIS2-18446): [USER APP]: communicate why user roles are not assignable**  
Components: _[App] User_

**[DHIS2-18376](https://dhis2.atlassian.net/browse/DHIS2-18376): FE: show warning to tell user they need to verify their email**  
Components: _[App] User Profile_

**[DHIS2-18374](https://dhis2.atlassian.net/browse/DHIS2-18374): FE: add button to verify email address**  
Components: _[App] User Profile_

**[DHIS2-15747](https://dhis2.atlassian.net/browse/DHIS2-15747): Job Scheduler - Be more selective what CRON job triggers after a missed execution**  
Components: _[Core] Job Scheduler_

**[DHIS2-16702](https://dhis2.atlassian.net/browse/DHIS2-16702): Job Scheduler - GeoJSON import should use a continuous execution**  
Components: _[Core] Job Scheduler_

## Bugs

**[DHIS2-13925](https://dhis2.atlassian.net/browse/DHIS2-13925): Program indicators not outputting correct decimals**  
Components: _[API] Analytics_, _[App] Analytics_

**[DHIS2-18509](https://dhis2.atlassian.net/browse/DHIS2-18509): Visualizations fails for indicators with period-based criteria**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-19249](https://dhis2.atlassian.net/browse/DHIS2-19249): Missing ou hierarchy in event visualization payload**  
Components: _[API] Analytics_

**[DHIS2-19323](https://dhis2.atlassian.net/browse/DHIS2-19323): Analytics: Difference in name/shortname in APIs**  
**[DHIS2-19248](https://dhis2.atlassian.net/browse/DHIS2-19248): Analytics API: displaying null instead of the correct name**  
Components: _[API] Analytics_

**[DHIS2-18845](https://dhis2.atlassian.net/browse/DHIS2-18845): Analytics event/enroll query: IN filter not working for Org. Unit DE**  
Components: _[API] Analytics_

**[DHIS2-19147](https://dhis2.atlassian.net/browse/DHIS2-19147): Analytics program data element option cache issue**  
Components: _[API] Analytics_

**[DHIS2-19130](https://dhis2.atlassian.net/browse/DHIS2-19130): Return OU Groups and levels in metaData**  
Components: _[API] Analytics_

**[DHIS2-18989](https://dhis2.atlassian.net/browse/DHIS2-18989): Analytics across TEI relationships with program indicators does not work**  
Components: _[API] Analytics_

**[DHIS2-16349](https://dhis2.atlassian.net/browse/DHIS2-16349): Failing enrollment analytics queries on programs with cat combos for non-super users**  
Components: _[API] Analytics_, _[App] Event reports_, _[App] Line Listing_

**[DHIS2-18738](https://dhis2.atlassian.net/browse/DHIS2-18738): Analytics table not generated for the first week when registering weekly data**  
Components: _[API] Analytics_

**[DHIS2-12003](https://dhis2.atlassian.net/browse/DHIS2-12003): GET maps/data.png fails**  
Components: _[API] Analytics_

**[DHIS2-18377](https://dhis2.atlassian.net/browse/DHIS2-18377): Analytics csv download is slow**  
Components: _[API] Analytics_

**[DHIS2-18337](https://dhis2.atlassian.net/browse/DHIS2-18337): Visualization API: Add more friendly name for org. units constants in response ("items")**  
Components: _[API] Analytics_

**[DHIS2-16265](https://dhis2.atlassian.net/browse/DHIS2-16265): Requested order of periods not always respected**  
Components: _[API] Analytics_

**[DHIS2-18045](https://dhis2.atlassian.net/browse/DHIS2-18045): Analytics API returns invalid "totalAggregationType"**  
Components: _[API] Analytics_

**[DHIS2-13498](https://dhis2.atlassian.net/browse/DHIS2-13498): User analysis org is refered to user capturing org**  
Components: _[API] Analytics_, _[App] Data visualizer_, _[App] Event visualizer_

**[DHIS2-15291](https://dhis2.atlassian.net/browse/DHIS2-15291): Event Report Enrollments not returning correct data - BACKPORT**  
Components: _[API] Analytics_

**[DHIS2-18182](https://dhis2.atlassian.net/browse/DHIS2-18182): Analytics API: No data returned for data element details/operands as filter**  
Components: _[API] Analytics_

**[DHIS2-17549](https://dhis2.atlassian.net/browse/DHIS2-17549): orgUnit levels should be dynamic in TE analytics export**  
Components: _[API] Analytics_

**[DHIS2-17842](https://dhis2.atlassian.net/browse/DHIS2-17842): The coordinate fields are not backward compatible with some front end applications**  
Components: _[API] Analytics_

**[DHIS2-17539](https://dhis2.atlassian.net/browse/DHIS2-17539): Analytics TE query API - 500 error for invalid Period**  
Components: _[API] Analytics_

**[DHIS2-17870](https://dhis2.atlassian.net/browse/DHIS2-17870): User analysis org is refered to user capturing org (event, enrollment api)**  
Components: _[API] Analytics_

**[DHIS2-16762](https://dhis2.atlassian.net/browse/DHIS2-16762): Data Visualizer with fixed period "Weekly (Start Sunday)" not showing correct label**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-16009](https://dhis2.atlassian.net/browse/DHIS2-16009): Line Listing report - "Repeated events" not in chronological order**  
Components: _[API] Analytics_

**[DHIS2-13322](https://dhis2.atlassian.net/browse/DHIS2-13322): Issues with enrollment coordinate support for event analytics**  
Components: _[API] Analytics_

**[DHIS2-17257](https://dhis2.atlassian.net/browse/DHIS2-17257): Codes in numeric option sets are returned with decimals**  
Components: _[API] Analytics_

**[DHIS2-16717](https://dhis2.atlassian.net/browse/DHIS2-16717): Line Listing hh:mm time format ambiguous**  
Components: _[API] Analytics_

**[DHIS2-17258](https://dhis2.atlassian.net/browse/DHIS2-17258): Analytics TE query API - Multiple option set in filter not working**  
Components: _[API] Analytics_

**[DHIS2-16855](https://dhis2.atlassian.net/browse/DHIS2-16855): Expression Dim. Items API fails for number with large decimal digits**  
Components: _[API] Analytics_

**[DHIS2-17182](https://dhis2.atlassian.net/browse/DHIS2-17182): Analytics TE query API - error comparing datetime**  
Components: _[API] Analytics_

**[DHIS2-17259](https://dhis2.atlassian.net/browse/DHIS2-17259): Analytics TE query API - Option set sorting fails with 500 error**  
Components: _[API] Analytics_

**[DHIS2-16235](https://dhis2.atlassian.net/browse/DHIS2-16235): Bad SQL syntax exception in /analytics/Event/aggregate**  
Components: _[API] Analytics_

**[DHIS2-17405](https://dhis2.atlassian.net/browse/DHIS2-17405): Analytics TE query API - Random SQL error in query**  
Components: _[API] Analytics_

**[DHIS2-15194](https://dhis2.atlassian.net/browse/DHIS2-15194): Tracked Entity Attribute text in Data Visualizer fragmented by group separators**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-17149](https://dhis2.atlassian.net/browse/DHIS2-17149): Analytics enrollments query API using OR instead of AND**  
Components: _[API] Analytics_

**[DHIS2-17299](https://dhis2.atlassian.net/browse/DHIS2-17299): Analytics date/time response headers are not consistent with DB columns**  
Components: _[API] Analytics_

**[DHIS2-17339](https://dhis2.atlassian.net/browse/DHIS2-17339): Bug in continuous analytics job.**  
Components: _[API] Analytics_

**[DHIS2-15892](https://dhis2.atlassian.net/browse/DHIS2-15892): Option “limit minimum/maximum values” doesn't work with "reporting rate" for data set**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-15978](https://dhis2.atlassian.net/browse/DHIS2-15978): PUT in /maps API does not return response body**  
Components: _[API] Analytics_

**[DHIS2-17028](https://dhis2.atlassian.net/browse/DHIS2-17028): Analytics enrollments query API returning duplicated values**  
Components: _[API] Analytics_

**[DHIS2-16709](https://dhis2.atlassian.net/browse/DHIS2-16709): Different results in repeatable events, between analytics/enrollments and analytics/trackedEntities APIs**  
Components: _[API] Analytics_

**[DHIS2-17099](https://dhis2.atlassian.net/browse/DHIS2-17099): Analytics Enrollment and TE Query endpoints shouldn't return scheduled events**  
Components: _[API] Analytics_

**[DHIS2-17104](https://dhis2.atlassian.net/browse/DHIS2-17104): Analytics tracked entity endpoint: value type for "enrollmentdate" is wrong**  
Components: _[API] Analytics_

**[DHIS2-17231](https://dhis2.atlassian.net/browse/DHIS2-17231): Analytics events query API: 500 error when dimension is not present in the query**  
Components: _[API] Analytics_

**[DHIS2-17029](https://dhis2.atlassian.net/browse/DHIS2-17029): Analytics TE query API - rowContext still returning invalid results**  
Components: _[API] Analytics_

**[DHIS2-17027](https://dhis2.atlassian.net/browse/DHIS2-17027): Analytics Enrollments Query API - skipRounding not working**  
Components: _[API] Analytics_

**[DHIS2-16088](https://dhis2.atlassian.net/browse/DHIS2-16088): Map API returning the "uid" as "name" for external layers**  
Components: _[API] Analytics_

**[DHIS2-17105](https://dhis2.atlassian.net/browse/DHIS2-17105): Analytics trackedEntities endpoint, "skipRounding" not working**  
Components: _[API] Analytics_

**[DHIS2-17143](https://dhis2.atlassian.net/browse/DHIS2-17143): Analytics TE query API - error comparing time**  
Components: _[API] Analytics_

**[DHIS2-17140](https://dhis2.atlassian.net/browse/DHIS2-17140): Analytics TE query API - ValueType "TIME" not properly supported**  
Components: _[API] Analytics_

**[DHIS2-17142](https://dhis2.atlassian.net/browse/DHIS2-17142): Analytics TE query API - error related to Time dimension**  
Components: _[API] Analytics_

**[DHIS2-17147](https://dhis2.atlassian.net/browse/DHIS2-17147): Analytics TE query API - numbers sorted as strings**  
Components: _[API] Analytics_

**[DHIS2-17146](https://dhis2.atlassian.net/browse/DHIS2-17146): Analytics TE query API - returning OU code instead of name**  
Components: _[API] Analytics_

**[DHIS2-17148](https://dhis2.atlassian.net/browse/DHIS2-17148): Analytics enrollments query API returning syntax error**  
Components: _[API] Analytics_

**[DHIS2-17144](https://dhis2.atlassian.net/browse/DHIS2-17144): Analytics enrollments query API returning syntax error**  
Components: _[API] Analytics_

**[DHIS2-17194](https://dhis2.atlassian.net/browse/DHIS2-17194): Error running analytics when a specific year is selected (year != ALL)**  
Components: _[API] Analytics_

**[DHIS2-17139](https://dhis2.atlassian.net/browse/DHIS2-17139): SQL error in enrollment request when using E2E - Coordinate and E2E - Organisation Unit**  
Components: _[API] Analytics_

**[DHIS2-17181](https://dhis2.atlassian.net/browse/DHIS2-17181): Analytics outliers: table export seems slower than expected**  
Components: _[API] Analytics_

**[DHIS2-17103](https://dhis2.atlassian.net/browse/DHIS2-17103): Analytics enrollment endpoint: remove the use of default period for empty enrollment/incident date**  
Components: _[API] Analytics_

**[DHIS2-16800](https://dhis2.atlassian.net/browse/DHIS2-16800): Some static dimension doesn't work when no restriction is provided**  
Components: _[API] Analytics_

**[DHIS2-19124](https://dhis2.atlassian.net/browse/DHIS2-19124): App menu order can't be changed (using menu management)**  
Components: _[API] App management_

**[DHIS2-19319](https://dhis2.atlassian.net/browse/DHIS2-19319): Non-bundled apps display shortname instead of displayName in command palette**  
Components: _[API] App management_, _[App] Global Shell_

**[DHIS2-18185](https://dhis2.atlassian.net/browse/DHIS2-18185): 404s if custom apps are accessed without a trailing slash**  
Components: _[API] App management_

**[DHIS2-17493](https://dhis2.atlassian.net/browse/DHIS2-17493): Redirect to app/ is broken**  
Components: _[API] App management_

**[DHIS2-16794](https://dhis2.atlassian.net/browse/DHIS2-16794): Core app installation via app-management app not working as expected**  
Components: _[API] App management_

**[DHIS2-16445](https://dhis2.atlassian.net/browse/DHIS2-16445): Inconsistency in Display of Resource Tables in Data Administration UI**  
Components: _[API] Data administration_, _[App] Data administration_

**[DHIS2-18666](https://dhis2.atlassian.net/browse/DHIS2-18666): [Indicator merge]: Duplicate reference kept in list of indicators in dataSet sections**  
Components: _[API] Data Entry_, _[Core] General_

**[DHIS2-17647](https://dhis2.atlassian.net/browse/DHIS2-17647): Compulsory data elements ignored for data set completion**  
Components: _[API] Data Entry_, _[App] Aggregate Data Entry_, _Documentation_

**[DHIS2-18095](https://dhis2.atlassian.net/browse/DHIS2-18095): Elements of UI not translated -non tranlatable in Data Entry (Beta) app**  
Components: _[API] Data Entry_

**[DHIS2-16129](https://dhis2.atlassian.net/browse/DHIS2-16129): /dataEntry/metadata does not include the default catCombo if no dataElements reference it**  
Components: _[API] Data Entry_

**[DHIS2-19004](https://dhis2.atlassian.net/browse/DHIS2-19004): Prevent duplicate descriptions in data integrity checks**  
Components: _[API] Data Integrity_

**[DHIS2-17760](https://dhis2.atlassian.net/browse/DHIS2-17760): Missing translations for integrity checks**  
Components: _[API] Data Integrity_

**[DHIS2-17186](https://dhis2.atlassian.net/browse/DHIS2-17186): idSchema inconsistencies for dataValueSet endpoint**  
Components: _[API] Data value set_

**[DHIS2-18606](https://dhis2.atlassian.net/browse/DHIS2-18606): Icons - Default icon creation fails in case the file-resource exist but the icon does not**  
Components: _[API] File Resources_

**[DHIS2-18424](https://dhis2.atlassian.net/browse/DHIS2-18424): Tomcat fails to start if monitoring.api.enabled is set to on**  
Components: _[API] Frameworks and libraries_

**[DHIS2-13866](https://dhis2.atlassian.net/browse/DHIS2-13866): Add system settings for configurable system jobs**  
Components: _[API] Job scheduler_

**[DHIS2-17292](https://dhis2.atlassian.net/browse/DHIS2-17292): The field `lastExecutedStatus` on a MetadataSync job config shows as failed even though it completes successfully**  
Components: _[API] Job scheduler_

**[DHIS2-16408](https://dhis2.atlassian.net/browse/DHIS2-16408): A job without a schedule can be enabled**  
Components: _[API] Job scheduler_

**[DHIS2-18605](https://dhis2.atlassian.net/browse/DHIS2-18605): Message conversions list is no longer user specific**  
Components: _[API] Messaging_

**[DHIS2-16522](https://dhis2.atlassian.net/browse/DHIS2-16522): /programNotificationTemplates does not implement pagination**  
Components: _[API] Messaging_

**[DHIS2-17445](https://dhis2.atlassian.net/browse/DHIS2-17445): Import fails with TransientObjectException on LegendSet during export then import of Event Visualization**  
Components: _[API] Metadata import-export_

**[DHIS2-17798](https://dhis2.atlassian.net/browse/DHIS2-17798): API PATCH request cannot add category options to categories**  
Components: _[API] Metadata import-export_, _[API] Metadata model_, _[API] Other_

**[DHIS2-18148](https://dhis2.atlassian.net/browse/DHIS2-18148): Equivalent analytics table hooks should not be able to be imported**  
Components: _[API] Metadata import-export_

**[DHIS2-11811](https://dhis2.atlassian.net/browse/DHIS2-11811): Metadata Import fails silently with different database errors**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-15772](https://dhis2.atlassian.net/browse/DHIS2-15772): Metadata Import - Rejected deletion causes the import to abort/end with the rejected item**  
Components: _[API] Metadata import-export_

**[DHIS2-18152](https://dhis2.atlassian.net/browse/DHIS2-18152): Prohibit changing value type of data element when data exists (backend)**  
Components: _[API] Metadata model_

**[DHIS2-18947](https://dhis2.atlassian.net/browse/DHIS2-18947): Superusers cannot see or delete a private dashboard**  
Components: _[API] Metadata model_

**[DHIS2-11781](https://dhis2.atlassian.net/browse/DHIS2-11781): Incorrect paging on filtering organisation units with `maxLevel` and `withinUserHiearchy` query parameters**  
Components: _[API] Metadata model_

**[DHIS2-17337](https://dhis2.atlassian.net/browse/DHIS2-17337): Organisation unit API: compound filters broken**  
Components: _[API] Metadata model_

**[DHIS2-19020](https://dhis2.atlassian.net/browse/DHIS2-19020): OU from merge shows in hierarchy root**  
Components: _[API] Metadata model_

**[DHIS2-17482](https://dhis2.atlassian.net/browse/DHIS2-17482): Organisationunit-related Attribute objects using excessive memory**  
Components: _[API] Metadata model_

**[DHIS2-17994](https://dhis2.atlassian.net/browse/DHIS2-17994): OU from split show in hierarchy root**  
Components: _[API] Metadata model_

**[DHIS2-18702](https://dhis2.atlassian.net/browse/DHIS2-18702): Error when deleting a program because there is a mapview associated that was not deleted**  
Components: _[API] Metadata model_

**[DHIS2-18748](https://dhis2.atlassian.net/browse/DHIS2-18748): query parameter does not include searching username of users**  
Components: _[API] Metadata model_, _[API] User_

**[DHIS2-17098](https://dhis2.atlassian.net/browse/DHIS2-17098): identifiable:token-filter may be too broad when matching ID**  
Components: _[API] Metadata model_

**[DHIS2-18423](https://dhis2.atlassian.net/browse/DHIS2-18423): [ORG UNIT SPLIT]: adds split organisation units to user org units**  
Components: _[API] Metadata model_

**[DHIS2-17564](https://dhis2.atlassian.net/browse/DHIS2-17564): defaults parameter not working**  
Components: _[API] Metadata model_

**[DHIS2-17973](https://dhis2.atlassian.net/browse/DHIS2-17973): Api Metadata Version is broken**  
Components: _[API] Metadata model_, _[App] Settings_

**[DHIS2-17952](https://dhis2.atlassian.net/browse/DHIS2-17952): OU query - parents filter has no effect**  
Components: _[API] Metadata model_

**[DHIS2-17751](https://dhis2.atlassian.net/browse/DHIS2-17751): Metadata field filtering does not work with nameable**  
Components: _[API] Metadata model_

**[DHIS2-17688](https://dhis2.atlassian.net/browse/DHIS2-17688): Api filter doesn't support "sharing" object**  
Components: _[API] Metadata model_

**[DHIS2-17097](https://dhis2.atlassian.net/browse/DHIS2-17097): identifiable:token filter only searches DB-language**  
Components: _[API] Metadata model_

**[DHIS2-19516](https://dhis2.atlassian.net/browse/DHIS2-19516): Custom top menu icon broken**  
Components: _[API] Other_

**[DHIS2-18842](https://dhis2.atlassian.net/browse/DHIS2-18842): Notifier - LOOP level items should be replaced by successive messages in redis**  
Components: _[API] Other_

**[DHIS2-17596](https://dhis2.atlassian.net/browse/DHIS2-17596): User cannot log off when they log in via OIDC when using linked accounts**  
Components: _[API] Other_

**[DHIS2-16438](https://dhis2.atlassian.net/browse/DHIS2-16438): The me API endpoint does not return attribute values even when specified in the fields param for versions newer than 2.37.x**  
Components: _[API] Other_, _[API] User_

**[DHIS2-9300](https://dhis2.atlassian.net/browse/DHIS2-9300): SQL Views cache _current_user_id**  
Components: _[API] Other_

**[DHIS2-17593](https://dhis2.atlassian.net/browse/DHIS2-17593): Route API POST fails when using a sub-path**  
Components: _[API] Other_

**[DHIS2-18020](https://dhis2.atlassian.net/browse/DHIS2-18020): User selected order of relative periods not respected in Visualization**  
Components: _[API] Other_

**[DHIS2-17391](https://dhis2.atlassian.net/browse/DHIS2-17391): API with nested transformations appends field to transformation**  
Components: _[API] Other_

**[DHIS2-17365](https://dhis2.atlassian.net/browse/DHIS2-17365): App logos and global app shell resources are not served correctly**  
Components: _[API] Other_

**[DHIS2-16453](https://dhis2.atlassian.net/browse/DHIS2-16453): Usage statistics does not return the correct number of active users**  
Components: _[API] Other_

**[DHIS2-17492](https://dhis2.atlassian.net/browse/DHIS2-17492): api/plugins cannot be filtered by pluginType**  
Components: _[API] Other_

**[DHIS2-17303](https://dhis2.atlassian.net/browse/DHIS2-17303): visualizations api has all relativePeriods set to `false`**  
Components: _[API] Other_

**[DHIS2-16934](https://dhis2.atlassian.net/browse/DHIS2-16934): Entities loaded multiple times (DB is hit several times), in comparison with relase 40**  
Components: _[API] Other_

**[DHIS2-15891](https://dhis2.atlassian.net/browse/DHIS2-15891): Impossibility of saving an event in Capture App, when there is a Program Rule Action associated to a data element with Date value type**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-17470](https://dhis2.atlassian.net/browse/DHIS2-17470): Posting events deletes program rule actions**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-17740](https://dhis2.atlassian.net/browse/DHIS2-17740): Fails to log in when Redis session is used and the server runs in a non-embedded Tomcat container**  
Components: _[API] Security_

**[DHIS2-17496](https://dhis2.atlassian.net/browse/DHIS2-17496): Make sure API tokens are backward compatible**  
Components: _[API] Security_

**[DHIS2-18096](https://dhis2.atlassian.net/browse/DHIS2-18096): Not possible to log in after upgrade to 2.41 due to username validation in authentication controller**  
Components: _[API] Security_

**[DHIS2-17429](https://dhis2.atlassian.net/browse/DHIS2-17429): Password is reflected back in error response on PATCH operation**  
**[DHIS2-17682](https://dhis2.atlassian.net/browse/DHIS2-17682): Login UI fallback to simple HTML**  
Components: _[API] Security_

**[DHIS2-17581](https://dhis2.atlassian.net/browse/DHIS2-17581): Back-end service worker caching on bundled apps breaks app overrides**  
Components: _[API] Security_

**[DHIS2-18542](https://dhis2.atlassian.net/browse/DHIS2-18542): api/sms/inbound does not work in dev v42**  
Components: _[API] SMS_

**[DHIS2-18962](https://dhis2.atlassian.net/browse/DHIS2-18962): User setting for "Property to display in analysis modules" can't be changed**  
Components: _[API] System configuration_, _[App] Settings_

**[DHIS2-18961](https://dhis2.atlassian.net/browse/DHIS2-18961): Setting connection.schema=update interferes with flyway migrations**  
Components: _[API] System configuration_

**[DHIS2-18244](https://dhis2.atlassian.net/browse/DHIS2-18244): Cannot configure e-mail setting on dev 42: smtp server not configured error**  
Components: _[API] System configuration_

**[DHIS2-19200](https://dhis2.atlassian.net/browse/DHIS2-19200): Change logs recorded even when disabled in config**  
Components: _[API] Tracker_

**[DHIS2-18877](https://dhis2.atlassian.net/browse/DHIS2-18877): Breaking the glass fails when program(s) accessible protected**  
Components: _[API] Tracker_

**[DHIS2-19286](https://dhis2.atlassian.net/browse/DHIS2-19286): Check TE access when requesting tracked entities without pagination**  
Components: _[API] Tracker_

**[DHIS2-19263](https://dhis2.atlassian.net/browse/DHIS2-19263): Cached program owner not loaded correctly**  
Components: _[API] Tracker_

**[DHIS2-19282](https://dhis2.atlassian.net/browse/DHIS2-19282): Registering org unit path not present after fetching TE from DB**  
Components: _[API] Tracker_

**[DHIS2-17806](https://dhis2.atlassian.net/browse/DHIS2-17806): Program Stage Notification not sent on 39 & 40 when there are multiple actions defined with Send Message for Program Rule**  
Components: _[API] Tracker_

**[DHIS2-19238](https://dhis2.atlassian.net/browse/DHIS2-19238): [Backport] Unidirectional relationships should only consider "from" end in the exporter**  
Components: _[API] Tracker_

**[DHIS2-19233](https://dhis2.atlassian.net/browse/DHIS2-19233): [Backport] Create new relationship in /relationships endpoint does not update TE lastupdated value**  
Components: _[API] Tracker_

**[DHIS2-9767](https://dhis2.atlassian.net/browse/DHIS2-9767): Create new relationship in /relationships endpoint does not update TE lastupdated value**  
Components: _[API] Tracker_

**[DHIS2-19169](https://dhis2.atlassian.net/browse/DHIS2-19169): Unidirectional relationships should only consider "from" end in the exporter**  
Components: _[API] Tracker_

**[DHIS2-19050](https://dhis2.atlassian.net/browse/DHIS2-19050): NPE when requesting TEs without a program in an instance with a TE return limit**  
Components: _[API] Tracker_

**[DHIS2-18908](https://dhis2.atlassian.net/browse/DHIS2-18908): async=FALSE and async=false in new tracker endpoint behave different**  
Components: _[API] Tracker_

**[DHIS2-18621](https://dhis2.atlassian.net/browse/DHIS2-18621): d2:hasValue check doesn’t work when sending null, blocking enrollment**  
Components: _[API] Tracker_

**[DHIS2-18991](https://dhis2.atlassian.net/browse/DHIS2-18991): Cannot get TE if there are no tracker programs**  
Components: _[API] Tracker_

**[DHIS2-19001](https://dhis2.atlassian.net/browse/DHIS2-19001): Importing an event results in a 500 error when a program rule assigns a value to a variable**  
Components: _[API] Tracker_

**[DHIS2-17864](https://dhis2.atlassian.net/browse/DHIS2-17864): Event and enrollment notes don't return storedAt time component on collection endpoints**  
Components: _[API] Tracker_

**[DHIS2-18584](https://dhis2.atlassian.net/browse/DHIS2-18584): Capture app sends multiple notifications when only one is configured**  
Components: _[API] Tracker_

**[DHIS2-15066](https://dhis2.atlassian.net/browse/DHIS2-15066): Tracker table trackedentityinstance misses not-null constraint**  
Components: _[API] Tracker_

**[DHIS2-19141](https://dhis2.atlassian.net/browse/DHIS2-19141): [Changelog] Attributes assigned to program are not recorded in the TE changelog**  
Components: _[API] Tracker_

**[DHIS2-17236](https://dhis2.atlassian.net/browse/DHIS2-17236): Update validation logic when requesting multiple TE without program**  
Components: _[API] Tracker_

**[DHIS2-17070](https://dhis2.atlassian.net/browse/DHIS2-17070): Transferred enrollment not accessible by org unit owner**  
Components: _[API] Tracker_

**[DHIS2-14885](https://dhis2.atlassian.net/browse/DHIS2-14885): Tracker event table misses not-null constraint on attributeoptioncomboid**  
Components: _[API] Tracker_

**[DHIS2-16019](https://dhis2.atlassian.net/browse/DHIS2-16019): Date filters in tracker are not considering the time**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-18586](https://dhis2.atlassian.net/browse/DHIS2-18586): Unable to save outbound sms in async operations**  
Components: _[API] Tracker_

**[DHIS2-18591](https://dhis2.atlassian.net/browse/DHIS2-18591): Filtering events by occurredDate is considering scheduledDate when occurredDate is null**  
Components: _[API] Tracker_

**[DHIS2-12600](https://dhis2.atlassian.net/browse/DHIS2-12600): Events and Enrollments allows organisation unit to be null**  
Components: _[API] Tracker_

**[DHIS2-17681](https://dhis2.atlassian.net/browse/DHIS2-17681): Sync Error in Android Capture When Updating Dependents of a Calculated Value Attribute**  
Components: _[API] Tracker_

**[DHIS2-17671](https://dhis2.atlassian.net/browse/DHIS2-17671): Duplicate event entries around page boundaries in different pages when fetching tracker events using API**  
Components: _[API] Tracker_

**[DHIS2-17335](https://dhis2.atlassian.net/browse/DHIS2-17335): Event ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-16446](https://dhis2.atlassian.net/browse/DHIS2-16446): /tracker/trackedEntites?order=enrolledAt returns wrong order**  
Components: _[API] Tracker_

**[DHIS2-14300](https://dhis2.atlassian.net/browse/DHIS2-14300): Inconsistency in trackedEntities endpoint response (protected programs)**  
Components: _[API] Tracker_

**[DHIS2-15272](https://dhis2.atlassian.net/browse/DHIS2-15272): Unable to capture data for the last month of a program when expiry days are set to a value greater than 0**  
Components: _[API] Tracker_

**[DHIS2-15683](https://dhis2.atlassian.net/browse/DHIS2-15683): Server always accepts the date of tomorrow as enrollment date**  
Components: _[API] Tracker_

**[DHIS2-17708](https://dhis2.atlassian.net/browse/DHIS2-17708): Include CS org units in searchable scope**  
Components: _[API] Tracker_

**[DHIS2-7321](https://dhis2.atlassian.net/browse/DHIS2-7321): User Search OUs Break TEI List View (Tracker Capture App and Capture App)**  
Components: _[API] Tracker_

**[DHIS2-17834](https://dhis2.atlassian.net/browse/DHIS2-17834): Incorrect paginated result in ProgramNotificationTemplate controller**  
Components: _[API] Tracker_

**[DHIS2-18319](https://dhis2.atlassian.net/browse/DHIS2-18319): /tracker/events exports notes with timestamps instead of dates**  
Components: _[API] Tracker_

**[DHIS2-14829](https://dhis2.atlassian.net/browse/DHIS2-14829): Tracker endpoints return wrong enrollment orgunit when multiple enrollments**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-18206](https://dhis2.atlassian.net/browse/DHIS2-18206): Incorrect "Follow-up" Filter Applied in Saved Working Lists**  
Components: _[API] Tracker_

**[DHIS2-17090](https://dhis2.atlassian.net/browse/DHIS2-17090): tracker/relationships emits inaccessible program attributes**  
Components: _[API] Tracker_

**[DHIS2-17715](https://dhis2.atlassian.net/browse/DHIS2-17715): Import failing when org unit code is null**  
Components: _[API] Tracker_

**[DHIS2-18252](https://dhis2.atlassian.net/browse/DHIS2-18252): Created date of data value can be defined by the user**  
Components: _[API] Tracker_

**[DHIS2-18225](https://dhis2.atlassian.net/browse/DHIS2-18225): Any change to a Completed Enrollment delete `completedAt` and `completedBy` fields**  
Components: _[API] Tracker_

**[DHIS2-16122](https://dhis2.atlassian.net/browse/DHIS2-16122): The completedAt field remains populated when updating an event from complete to active, returning incorrect data when "Only include completed events" checkbox is selected**  
Components: _[API] Tracker_

**[DHIS2-16442](https://dhis2.atlassian.net/browse/DHIS2-16442): trackedentities DB column inactive allows nulls**  
Components: _[API] Tracker_

**[DHIS2-17515](https://dhis2.atlassian.net/browse/DHIS2-17515): Referential integrity between ProgramRuleAction and ProgramNotificationTemplate**  
Components: _[API] Tracker_

**[DHIS2-17880](https://dhis2.atlassian.net/browse/DHIS2-17880): User is allowed to transfer TE to org unit not assigned to program**  
Components: _[API] Tracker_

**[DHIS2-17180](https://dhis2.atlassian.net/browse/DHIS2-17180): indiscriminately sending notifications in Capture app ( new Tracker endpoint )**  
Components: _[API] Tracker_

**[DHIS2-15425](https://dhis2.atlassian.net/browse/DHIS2-15425): While Sending notification to ancestors, it skips the base orgunitsation unit**  
Components: _[API] Tracker_

**[DHIS2-17477](https://dhis2.atlassian.net/browse/DHIS2-17477): Incorrect error message when program protected but user not in search scope**  
Components: _[API] Tracker_

**[DHIS2-16981](https://dhis2.atlassian.net/browse/DHIS2-16981): System user does not consider owner org unit when getting tracked entities**  
Components: _[API] Tracker_

**[DHIS2-17252](https://dhis2.atlassian.net/browse/DHIS2-17252): Relationship ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-17402](https://dhis2.atlassian.net/browse/DHIS2-17402): Delete relationships is not working when only UID is present in payload**  
Components: _[API] Tracker_

**[DHIS2-17184](https://dhis2.atlassian.net/browse/DHIS2-17184): Filters for occurredAfter and occurredBefore not using specified time just date**  
Components: _[API] Tracker_

**[DHIS2-16498](https://dhis2.atlassian.net/browse/DHIS2-16498): Report Date, Today option doesn't populate events created on that day on the registered events page of Capture app**  
Components: _[API] Tracker_

**[DHIS2-16460](https://dhis2.atlassian.net/browse/DHIS2-16460): Tracker endpoint returns E1006 error when quering nested relationships**  
Components: _[API] Tracker_

**[DHIS2-17280](https://dhis2.atlassian.net/browse/DHIS2-17280): Enrollment ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-17251](https://dhis2.atlassian.net/browse/DHIS2-17251): Tracked Entity ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-13014](https://dhis2.atlassian.net/browse/DHIS2-13014): New tracker/events API takes time and throws a 500 when called with no parameters**  
Components: _[API] Tracker_

**[DHIS2-17154](https://dhis2.atlassian.net/browse/DHIS2-17154): Set CSP header with script-src in tracker file/image endpoints**  
Components: _[API] Tracker_

**[DHIS2-18655](https://dhis2.atlassian.net/browse/DHIS2-18655): Cannot switch accounts in v40.6.0**  
Components: _[API] User_

**[DHIS2-17803](https://dhis2.atlassian.net/browse/DHIS2-17803): Various crashes and hangs in 41-42 after creating a user group including the logged in user**  
Components: _[API] User_

**[DHIS2-17200](https://dhis2.atlassian.net/browse/DHIS2-17200): total (in pager) is not aligned with the number of resources returned**  
Components: _[API] User_

**[DHIS2-17505](https://dhis2.atlassian.net/browse/DHIS2-17505): Remove deprecated UserCredentials code**  
Components: _[API] User_

**[DHIS2-16727](https://dhis2.atlassian.net/browse/DHIS2-16727): Make sure methods running async/background use null safe access to current user**  
Components: _[API] User_

**[DHIS2-17266](https://dhis2.atlassian.net/browse/DHIS2-17266): Only one concurrent user is allowed**  
Components: _[API] User_

**[DHIS2-19173](https://dhis2.atlassian.net/browse/DHIS2-19173): The pagination of the endpoint /api/validationResults is not working**  
Components: _[API] Validation_

**[DHIS2-14925](https://dhis2.atlassian.net/browse/DHIS2-14925): Add missing unique constraints on UIDs**  
Components: _[API] Validation_

**[DHIS2-18373](https://dhis2.atlassian.net/browse/DHIS2-18373): [DATA ENTRY APP]: Non performant rendering of larger forms (particularly on section navigation)**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18526](https://dhis2.atlassian.net/browse/DHIS2-18526): Data Entry (Beta) is not passing Attribute Option assignment to children OUs**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-17619](https://dhis2.atlassian.net/browse/DHIS2-17619): [DATA ENTRY APP]: review date logic for multicalendar support**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-17618](https://dhis2.atlassian.net/browse/DHIS2-17618): [DATA ENTRY APP] Support DateTime with DHIS2 CalendarInput**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18219](https://dhis2.atlassian.net/browse/DHIS2-18219): [AGGREGATE DATA ENTRY]: date input does not convert date strings to ISO before posting**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-17617](https://dhis2.atlassian.net/browse/DHIS2-17617): [DATA ENTRY APP]: selector bar needs to support non-ISO calendars**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18057](https://dhis2.atlassian.net/browse/DHIS2-18057): [DATA ENTRY APP]: period shown in selector is not translated / use Gregorian calendar**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18031](https://dhis2.atlassian.net/browse/DHIS2-18031): Crash when using a locale that includes a region or script (agg data entry)**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18087](https://dhis2.atlassian.net/browse/DHIS2-18087): [DATA EXCHANGE APP]: date time issues**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-18010](https://dhis2.atlassian.net/browse/DHIS2-18010): [DATA EXCHANGE APP]: users able to select exchanges they do not have read data access to**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-17382](https://dhis2.atlassian.net/browse/DHIS2-17382): [DATA EXCHANGE APP]: updating authentication details does not save**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-18013](https://dhis2.atlassian.net/browse/DHIS2-18013): [DATA EXCHANGE APP]: id schemes are persisted with "NONE"**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-17288](https://dhis2.atlassian.net/browse/DHIS2-17288): [DATA EXCHANGE APP]: internal url is not undefined**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-19253](https://dhis2.atlassian.net/browse/DHIS2-19253): Line Listing app does not show info on previous releases and continuously triggers the API call**  
Components: _[App] App management_

**[DHIS2-19053](https://dhis2.atlassian.net/browse/DHIS2-19053): [APP MANAGEMENT APP]: Data Entry (Beta) renaming issues**  
Components: _[App] App management_

**[DHIS2-17253](https://dhis2.atlassian.net/browse/DHIS2-17253): App version not picked up by header bar in App Management**  
Components: _[App] App management_

**[DHIS2-18952](https://dhis2.atlassian.net/browse/DHIS2-18952): Relationship widget and search page (general+relationships) should use form name**  
Components: _[App] Capture_

**[DHIS2-18770](https://dhis2.atlassian.net/browse/DHIS2-18770): Event-note uses wrong date-format**  
Components: _[App] Capture_

**[DHIS2-19336](https://dhis2.atlassian.net/browse/DHIS2-19336): “Some operations are still running” message pops up when creating new person on MNCH/PNC (Adult women) tracker program**  
Components: _[App] Capture_

**[DHIS2-16918](https://dhis2.atlassian.net/browse/DHIS2-16918): Event relationship URL link is broken**  
Components: _[App] Capture_

**[DHIS2-19165](https://dhis2.atlassian.net/browse/DHIS2-19165): Can't edit an event missing schedule date**  
Components: _[App] Capture_

**[DHIS2-19161](https://dhis2.atlassian.net/browse/DHIS2-19161): [Integrate Kotlin rule engine] Indicator widgets not working in the TEI dashboard**  
Components: _[App] Capture_

**[DHIS2-18326](https://dhis2.atlassian.net/browse/DHIS2-18326): App stuck in infinite loading state when deselecting orgUnit**  
Components: _[App] Capture_

**[DHIS2-18676](https://dhis2.atlassian.net/browse/DHIS2-18676): Capture: display error for age in the future in tracked entity in capture**  
Components: _[App] Capture_

**[DHIS2-18855](https://dhis2.atlassian.net/browse/DHIS2-18855): Program indicators without expressions break the capture app**  
Components: _[App] Capture_

**[DHIS2-18704](https://dhis2.atlassian.net/browse/DHIS2-18704): Registration form missing values**  
Components: _[App] Capture_

**[DHIS2-18714](https://dhis2.atlassian.net/browse/DHIS2-18714): "Search Unique ID" when adding relationships shows different behavior**  
Components: _[App] Capture_

**[DHIS2-18673](https://dhis2.atlassian.net/browse/DHIS2-18673): Capture: profile widget allows saving when validation errors are present**  
Components: _[App] Capture_

**[DHIS2-18571](https://dhis2.atlassian.net/browse/DHIS2-18571): Bulk operations: Modal says 50 when more than 50 enrollments are selected**  
Components: _[App] Capture_

**[DHIS2-15685](https://dhis2.atlassian.net/browse/DHIS2-15685): Viewing an event in Tracker Programs should be possible without selecting org. unit**  
Components: _[App] Capture_

**[DHIS2-18582](https://dhis2.atlassian.net/browse/DHIS2-18582): Data element with number option set value does not show in stages & event widget on Capture App**  
Components: _[App] Capture_

**[DHIS2-18944](https://dhis2.atlassian.net/browse/DHIS2-18944): Deleting an Event in Event Programs Requires a Refresh to Update the View**  
Components: _[App] Capture_

**[DHIS2-16871](https://dhis2.atlassian.net/browse/DHIS2-16871): Fix requests that use semicolon as separator for UIDs**  
Components: _[App] Capture_

**[DHIS2-18876](https://dhis2.atlassian.net/browse/DHIS2-18876): Replace parameters deprecated in 2.41**  
Components: _[App] Capture_

**[DHIS2-18958](https://dhis2.atlassian.net/browse/DHIS2-18958): "Search in all programs" is missing a loading spinner**  
Components: _[App] Capture_

**[DHIS2-17152](https://dhis2.atlassian.net/browse/DHIS2-17152): Autogenerated events with "Open data entry form after enrollment" should have status SCHEDULE until saved**  
Components: _[App] Capture_

**[DHIS2-19140](https://dhis2.atlassian.net/browse/DHIS2-19140): [Capture app] Changelog modal dialog unmounts on sort**  
Components: _[App] Capture_

**[DHIS2-18596](https://dhis2.atlassian.net/browse/DHIS2-18596): Relationship-widget limited to 50 entries**  
Components: _[App] Capture_

**[DHIS2-18902](https://dhis2.atlassian.net/browse/DHIS2-18902): Searching for a TEI in protected program (break the glass) exits the program context in top bar**  
Components: _[App] Capture_

**[DHIS2-17537](https://dhis2.atlassian.net/browse/DHIS2-17537): Use new endpoints for FILE data elements / TEA**  
Components: _[App] Capture_

**[DHIS2-17531](https://dhis2.atlassian.net/browse/DHIS2-17531): Deprecated endpoints for IMAGE TEA results card avatar**  
Components: _[App] Capture_

**[DHIS2-17536](https://dhis2.atlassian.net/browse/DHIS2-17536): Cannot delete single event relationship**  
Components: _[App] Capture_

**[DHIS2-17442](https://dhis2.atlassian.net/browse/DHIS2-17442): Cannot delete program stage events**  
Components: _[App] Capture_

**[DHIS2-18668](https://dhis2.atlassian.net/browse/DHIS2-18668): Possible to delete TE from event page**  
Components: _[App] Capture_

**[DHIS2-18836](https://dhis2.atlassian.net/browse/DHIS2-18836): Profile widget displays "false profile" when loading**  
Components: _[App] Capture_

**[DHIS2-18355](https://dhis2.atlassian.net/browse/DHIS2-18355): [Related stages] Runtime error occurs when saving empty widget in Related stages"**  
Components: _[App] Capture_

**[DHIS2-15633](https://dhis2.atlassian.net/browse/DHIS2-15633): Change ‘comment’ to 'note'**  
Components: _[App] Capture_

**[DHIS2-18632](https://dhis2.atlassian.net/browse/DHIS2-18632): Sorting stage detail table on org. unit breaks the app**  
Components: _[App] Capture_

**[DHIS2-18614](https://dhis2.atlassian.net/browse/DHIS2-18614): Update Button Unresponsive When Single Date Selected in Date Range Filter (Working lists)**  
Components: _[App] Capture_

**[DHIS2-16992](https://dhis2.atlassian.net/browse/DHIS2-16992): Changelog modal and columns changes size with long text values**  
Components: _[App] Capture_

**[DHIS2-17662](https://dhis2.atlassian.net/browse/DHIS2-17662): CategoryOption selection doesn't filter by OU in initial event creation (in entry form)**  
Components: _[App] Capture_

**[DHIS2-15687](https://dhis2.atlassian.net/browse/DHIS2-15687): Options are not translated in TE Profile in Enrollment Dashboard**  
Components: _[App] Capture_

**[DHIS2-17736](https://dhis2.atlassian.net/browse/DHIS2-17736): Dropdown Regression in Registration Form**  
Components: _[App] Capture_

**[DHIS2-16852](https://dhis2.atlassian.net/browse/DHIS2-16852): Confusing UI when there is more than one warning/error next to TEA/DE**  
Components: _[App] Capture_

**[DHIS2-17195](https://dhis2.atlassian.net/browse/DHIS2-17195): d2:condition() not working in Capture**  
Components: _[App] Capture_

**[DHIS2-17854](https://dhis2.atlassian.net/browse/DHIS2-17854): Improve validation performance for values ​​assigned from the rules engine**  
Components: _[App] Capture_

**[DHIS2-16994](https://dhis2.atlassian.net/browse/DHIS2-16994): Changelog: Image and file DE/TEA are not displayed**  
Components: _[App] Capture_

**[DHIS2-16801](https://dhis2.atlassian.net/browse/DHIS2-16801): Events scheduled for today's date should show "today" in stages/event list**  
Components: _[App] Capture_

**[DHIS2-17519](https://dhis2.atlassian.net/browse/DHIS2-17519): App crashing when opening new event form from view event**  
Components: _[App] Capture_

**[DHIS2-18150](https://dhis2.atlassian.net/browse/DHIS2-18150): User has to click out of range filter for update button to trigger**  
Components: _[App] Capture_

**[DHIS2-18238](https://dhis2.atlassian.net/browse/DHIS2-18238): Capture app posting incorrect data for working list**  
Components: _[App] Capture_

**[DHIS2-17018](https://dhis2.atlassian.net/browse/DHIS2-17018): Improve text when trying to access closed program**  
Components: _[App] Capture_

**[DHIS2-17135](https://dhis2.atlassian.net/browse/DHIS2-17135): Adjust string for user assignment error message**  
Components: _[App] Capture_

**[DHIS2-18228](https://dhis2.atlassian.net/browse/DHIS2-18228): Images are deleted when a value is added or updated**  
Components: _[App] Capture_

**[DHIS2-17843](https://dhis2.atlassian.net/browse/DHIS2-17843): Improve UX when users do not have "Delete enrollment and associated events" authority**  
Components: _[App] Capture_

**[DHIS2-16010](https://dhis2.atlassian.net/browse/DHIS2-16010): App crash on invalid ProgramId**  
Components: _[App] Capture_

**[DHIS2-18028](https://dhis2.atlassian.net/browse/DHIS2-18028): [Related stages] User is able to add linked event in non-repeatable stage with eventCount > 0**  
Components: _[App] Capture_

**[DHIS2-17978](https://dhis2.atlassian.net/browse/DHIS2-17978): Missing program icons make program names unreadable**  
Components: _[App] Capture_

**[DHIS2-16487](https://dhis2.atlassian.net/browse/DHIS2-16487): Auto-select organisation unit and program if there are only one available**  
Components: _[App] Capture_

**[DHIS2-18056](https://dhis2.atlassian.net/browse/DHIS2-18056): Linking tracked entities through new relationship search adds invalid values to store**  
Components: _[App] Capture_

**[DHIS2-16993](https://dhis2.atlassian.net/browse/DHIS2-16993): Changelog: Text and long text DEs are missing arrows when deleted**  
Components: _[App] Capture_

**[DHIS2-17970](https://dhis2.atlassian.net/browse/DHIS2-17970): [Related stages] Auto-select orgunit if there is only one available**  
Components: _[App] Capture_

**[DHIS2-18215](https://dhis2.atlassian.net/browse/DHIS2-18215): Selected working list filter not persisted when navigating back from dashboard**  
Components: _[App] Capture_

**[DHIS2-18116](https://dhis2.atlassian.net/browse/DHIS2-18116): Clicking save after entering a non-integer in an age field freezes the app**  
Components: _[App] Capture_

**[DHIS2-17971](https://dhis2.atlassian.net/browse/DHIS2-17971): ProgramRules for specific ProgramStage not being triggered**  
Components: _[App] Capture_

**[DHIS2-17953](https://dhis2.atlassian.net/browse/DHIS2-17953): Invalid dateFormat conversion in related stages**  
Components: _[App] Capture_

**[DHIS2-17924](https://dhis2.atlassian.net/browse/DHIS2-17924): Searching for Sierra Leone in organisation unit field displays organisation unit tree with all the children org units**  
Components: _[App] Capture_

**[DHIS2-17488](https://dhis2.atlassian.net/browse/DHIS2-17488): Failed in denying access to stages for a user or group in the Capture App**  
Components: _[App] Capture_

**[DHIS2-17352](https://dhis2.atlassian.net/browse/DHIS2-17352): Choosing a different program in the event workspace does nothing**  
Components: _[App] Capture_

**[DHIS2-17516](https://dhis2.atlassian.net/browse/DHIS2-17516): Bad Request when sorting in the working lists**  
Components: _[App] Capture_

**[DHIS2-17399](https://dhis2.atlassian.net/browse/DHIS2-17399): Unable to save events with multiple categories**  
Components: _[App] Capture_

**[DHIS2-16373](https://dhis2.atlassian.net/browse/DHIS2-16373): Cannot change AOC on existing events in Tracker program**  
Components: _[App] Capture_

**[DHIS2-17694](https://dhis2.atlassian.net/browse/DHIS2-17694): Edit button does not show up on Profile Widget**  
Components: _[App] Capture_

**[DHIS2-17653](https://dhis2.atlassian.net/browse/DHIS2-17653): Filter out existing events that are already linked**  
Components: _[App] Capture_

**[DHIS2-17608](https://dhis2.atlassian.net/browse/DHIS2-17608): From a single event cannot add a new tracked entity in a program**  
Components: _[App] Capture_

**[DHIS2-17398](https://dhis2.atlassian.net/browse/DHIS2-17398): Short-term improvement for unique ID search**  
Components: _[App] Capture_

**[DHIS2-16196](https://dhis2.atlassian.net/browse/DHIS2-16196): set MaxHeight to "more filters" in working lists**  
Components: _[App] Capture_

**[DHIS2-15379](https://dhis2.atlassian.net/browse/DHIS2-15379): Data elements of Long text/Text value type is misaligned in TET profile**  
Components: _[App] Capture_

**[DHIS2-17115](https://dhis2.atlassian.net/browse/DHIS2-17115): Plugin config titles are not translateable**  
Components: _[App] Capture_

**[DHIS2-16919](https://dhis2.atlassian.net/browse/DHIS2-16919): Program stage WL without a orgUnit selected redirects to broken event URL**  
Components: _[App] Capture_

**[DHIS2-16488](https://dhis2.atlassian.net/browse/DHIS2-16488): Incorrect behavior in Capture when user has TET data:read**  
Components: _[App] Capture_

**[DHIS2-17054](https://dhis2.atlassian.net/browse/DHIS2-17054): Feedback widget always shows "undefined" when expression is empty**  
Components: _[App] Capture_

**[DHIS2-17000](https://dhis2.atlassian.net/browse/DHIS2-17000): Display translation of Event Date and Enrollment Date**  
Components: _[App] Capture_

**[DHIS2-17249](https://dhis2.atlassian.net/browse/DHIS2-17249): Capture tracked entity filter generates invalid API call**  
Components: _[App] Capture_

**[DHIS2-17052](https://dhis2.atlassian.net/browse/DHIS2-17052): Dropdown shows unrelated error when there are no TETs**  
Components: _[App] Capture_

**[DHIS2-15920](https://dhis2.atlassian.net/browse/DHIS2-15920): Filling in no values in TEAs should not trigger duplicate modal**  
Components: _[App] Capture_

**[DHIS2-17102](https://dhis2.atlassian.net/browse/DHIS2-17102): When saving an event, you should be sent to Enrollment Dashboard / Main page**  
Components: _[App] Capture_

**[DHIS2-17089](https://dhis2.atlassian.net/browse/DHIS2-17089): "Registering unit" in Context selector should say "Organisation unit"**  
Components: _[App] Capture_

**[DHIS2-17225](https://dhis2.atlassian.net/browse/DHIS2-17225): Cannot add TET with polygon or coordinate**  
Components: _[App] Capture_

**[DHIS2-17161](https://dhis2.atlassian.net/browse/DHIS2-17161): Changes in profile widget are not persisted if enrollment is completed right away**  
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

**[DHIS2-14938](https://dhis2.atlassian.net/browse/DHIS2-14938): Error on Complete Program Rule Action and other mandatory DEs doesn't trigger upon initial save, does on secondary save**  
Components: _[App] Capture_

**[DHIS2-17035](https://dhis2.atlassian.net/browse/DHIS2-17035): Changelog: Prioritised bugs**  
Components: _[App] Capture_

**[DHIS2-15681](https://dhis2.atlassian.net/browse/DHIS2-15681): Drawn polygon missing in the edit profile modal**  
Components: _[App] Capture_

**[DHIS2-6335](https://dhis2.atlassian.net/browse/DHIS2-6335): Location map picker in Capture app defaults to London**  
Components: _[App] Capture_

**[DHIS2-16767](https://dhis2.atlassian.net/browse/DHIS2-16767): Feedback and Indicator empty text should be dynamic**  
Components: _[App] Capture_

**[DHIS2-16394](https://dhis2.atlassian.net/browse/DHIS2-16394): Relationship widget uses option codes instead of name**  
Components: _[App] Capture_

**[DHIS2-16393](https://dhis2.atlassian.net/browse/DHIS2-16393): Stages and Event list uses option code instead of option name**  
Components: _[App] Capture_

**[DHIS2-19394](https://dhis2.atlassian.net/browse/DHIS2-19394): Migrate old ehcache 2 config to 3**  
Components: _[App] Core resource_, _[Core] General_

**[DHIS2-18470](https://dhis2.atlassian.net/browse/DHIS2-18470): Line lists have wrong icon in the dashboard item dropdown**  
Components: _[App] Dashboard_

**[DHIS2-19273](https://dhis2.atlassian.net/browse/DHIS2-19273): Not possible to switch dashboards on mobile devices**  
Components: _[App] Dashboard_

**[DHIS2-17268](https://dhis2.atlassian.net/browse/DHIS2-17268): Visualizations render twice when loading a dashboard, creating a flashing effect**  
Components: _[App] Dashboard_

**[DHIS2-18576](https://dhis2.atlassian.net/browse/DHIS2-18576): If you add a filter that results in "no data" for a chart, removing the filter does not reload the original chart**  
Components: _[App] Dashboard_

**[DHIS2-19022](https://dhis2.atlassian.net/browse/DHIS2-19022): Data Statistics not being recorded for Event Charts and Event Reports**  
Components: _[App] Dashboard_

**[DHIS2-17918](https://dhis2.atlassian.net/browse/DHIS2-17918): User dialog does not match the actual version of Dashboard**  
Components: _[App] Dashboard_

**[DHIS2-15000](https://dhis2.atlassian.net/browse/DHIS2-15000): System / user setting for display name not respected in Org Unit tree**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-17758](https://dhis2.atlassian.net/browse/DHIS2-17758): [DATA ADMINISTRATION App] maintenance run previous selected items**  
Components: _[App] Data administration_

**[DHIS2-18268](https://dhis2.atlassian.net/browse/DHIS2-18268): Data visualization issue with Nepal Implementation**  
Components: _[App] Data visualizer_

**[DHIS2-19326](https://dhis2.atlassian.net/browse/DHIS2-19326): Error screen in DV has misaligned text when container is narrow enough**  
Components: _[App] Data visualizer_

**[DHIS2-5455](https://dhis2.atlassian.net/browse/DHIS2-5455): Sorting by column does not work properly when using "Percentage of rows"**  
Components: _[App] Data visualizer_

**[DHIS2-19046](https://dhis2.atlassian.net/browse/DHIS2-19046): Sidebar dimension items content movement on :hover**  
Components: _[App] Data visualizer_

**[DHIS2-17934](https://dhis2.atlassian.net/browse/DHIS2-17934): Dimension chips lose styling when being dragged from the sidebar**  
Components: _[App] Data visualizer_

**[DHIS2-15841](https://dhis2.atlassian.net/browse/DHIS2-15841): Download of pivot table in excel contains a period or comma at the end of each value**  
Components: _[App] Data visualizer_

**[DHIS2-16158](https://dhis2.atlassian.net/browse/DHIS2-16158): Subtitle for pivot tables is missing in UI and general design of top bar for pivot tables**  
Components: _[App] Data visualizer_

**[DHIS2-15140](https://dhis2.atlassian.net/browse/DHIS2-15140): Assigned categories chip should have grab cursor instead of pointer cursor**  
Components: _[App] Data visualizer_

**[DHIS2-17955](https://dhis2.atlassian.net/browse/DHIS2-17955): Improve Data Visualizer with fixed period "Weekly (Start Sunday)" labels**  
Components: _[App] Data visualizer_

**[DHIS2-17942](https://dhis2.atlassian.net/browse/DHIS2-17942): "Something went wrong  There's a syntax problem with the analytics request" error message when generating PI pivot table for DV and Event reports apps**  
Components: _[App] Data visualizer_, _[App] Event reports_

**[DHIS2-17919](https://dhis2.atlassian.net/browse/DHIS2-17919): User dialog does not match the actual version of Data Visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-17707](https://dhis2.atlassian.net/browse/DHIS2-17707): Clearing the year input field in analytics apps throws an error**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-17861](https://dhis2.atlassian.net/browse/DHIS2-17861): Analytics request params and values should be sorted for caching purposes**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-16904](https://dhis2.atlassian.net/browse/DHIS2-16904): "Week" and "Bi-week" not translated in period selector in Analytics app**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-13167](https://dhis2.atlassian.net/browse/DHIS2-13167): Non-existing AO blocks new AOs from being created**  
Components: _[App] Data visualizer_

**[DHIS2-16900](https://dhis2.atlassian.net/browse/DHIS2-16900): Numbers are misaligned in pivot table**  
Components: _[App] Data visualizer_

**[DHIS2-17261](https://dhis2.atlassian.net/browse/DHIS2-17261): Period is dropped after rename of a favorite in Data Visualizer - results in a crash after refresh**  
Components: _[App] Data visualizer_

**[DHIS2-17631](https://dhis2.atlassian.net/browse/DHIS2-17631): Event Reports does not load in 42 due to userCredentials api removal**  
Components: _[App] Event reports_

**[DHIS2-17368](https://dhis2.atlassian.net/browse/DHIS2-17368): Event Visualizer App uses deprecated PATCH endpoint for renaming**  
Components: _[App] Event visualizer_

**[DHIS2-19404](https://dhis2.atlassian.net/browse/DHIS2-19404): Command palette: Shortcut items missing arrow icon**  
Components: _[App] Global Shell_

**[DHIS2-19212](https://dhis2.atlassian.net/browse/DHIS2-19212): [Global shell] Header bar is being shown on login page**  
Components: _[App] Global Shell_

**[DHIS2-18929](https://dhis2.atlassian.net/browse/DHIS2-18929): [IMPORT/EXPORT]: clean up implementation of new tracker api endpoints**  
Components: _[App] Import-export_

**[DHIS2-17824](https://dhis2.atlassian.net/browse/DHIS2-17824): Challenge importing organisation unit group membership from CSV file**  
Components: _[App] Import-export_

**[DHIS2-18118](https://dhis2.atlassian.net/browse/DHIS2-18118): CSV import for OUG membership not working**  
Components: _[App] Import-export_

**[DHIS2-15976](https://dhis2.atlassian.net/browse/DHIS2-15976): Data element created date overwritten to date of update**  
Components: _[App] Import-export_

**[DHIS2-17672](https://dhis2.atlassian.net/browse/DHIS2-17672): [IMPORT/EXPORT]: event programs are not listed for export in Event export**  
Components: _[App] Import-export_

**[DHIS2-16988](https://dhis2.atlassian.net/browse/DHIS2-16988): JSON uncompressed opens in plain text rather than being downloaded**  
Components: _[App] Import-export_

**[DHIS2-17151](https://dhis2.atlassian.net/browse/DHIS2-17151): Import/Export app crashes if you click "Job summary" while doing a TE import**  
Components: _[App] Import-export_

**[DHIS2-18859](https://dhis2.atlassian.net/browse/DHIS2-18859): [SCHEDULER APP]: range boundary does not properly parse/evaluate ranges in cron expressions**  
Components: _[App] Job scheduler_

**[DHIS2-19283](https://dhis2.atlassian.net/browse/DHIS2-19283): Sorting doesn't work on line list columns when viewing it in the Interpretation modal**  
Components: _[App] Line Listing_

**[DHIS2-18330](https://dhis2.atlassian.net/browse/DHIS2-18330): Error when trying to delete a visualization report in Line Listing App**  
Components: _[App] Line Listing_

**[DHIS2-17917](https://dhis2.atlassian.net/browse/DHIS2-17917): User dialog does not match the actual version of Line Listing**  
Components: _[App] Line Listing_

**[DHIS2-16210](https://dhis2.atlassian.net/browse/DHIS2-16210): When user the value type "org unit" in an attribute, line listing shows the uid of the org unit and not the name.**  
Components: _[App] Line Listing_

**[DHIS2-17923](https://dhis2.atlassian.net/browse/DHIS2-17923): Allow grabbing scroll bar next to resizable sidebar**  
Components: _[App] Line Listing_

**[DHIS2-17855](https://dhis2.atlassian.net/browse/DHIS2-17855): Display the right date/time format for time dimensions**  
Components: _[App] Line Listing_

**[DHIS2-15961](https://dhis2.atlassian.net/browse/DHIS2-15961): Line Listing app disregards to the option translations**  
Components: _[App] Line Listing_

**[DHIS2-16208](https://dhis2.atlassian.net/browse/DHIS2-16208): When downloading a multilingual line list as excel file/.csv , the option sets are not rendered in the correct language in the translation**  
Components: _[App] Line Listing_

**[DHIS2-16018](https://dhis2.atlassian.net/browse/DHIS2-16018): Favourite link is missing the app name**  
Components: _[App] Line Listing_

**[DHIS2-17412](https://dhis2.atlassian.net/browse/DHIS2-17412): Enrollment line list: Filter for program stage not working**  
Components: _[App] Line Listing_

**[DHIS2-19193](https://dhis2.atlassian.net/browse/DHIS2-19193): [LOGIN APP]: update links to work with global shell**  
Components: _[App] Login_

**[DHIS2-18585](https://dhis2.atlassian.net/browse/DHIS2-18585): Backup login page fails to log in users**  
Components: _[App] Login_

**[DHIS2-17782](https://dhis2.atlassian.net/browse/DHIS2-17782): Different login screen after timeout and clicking on an app**  
Components: _[App] Login_

**[DHIS2-17773](https://dhis2.atlassian.net/browse/DHIS2-17773): [LOGIN APP]: various 200 status responses are not handled by app**  
Components: _[App] Login_

**[DHIS2-17960](https://dhis2.atlassian.net/browse/DHIS2-17960): [LOGIN APP] Word "password" missing from reset password message for expired credentials**  
Components: _[App] Login_

**[DHIS2-17138](https://dhis2.atlassian.net/browse/DHIS2-17138): [LOGIN App] remove horizontal scroll bar when unnecessary**  
Components: _[App] Login_

**[DHIS2-17696](https://dhis2.atlassian.net/browse/DHIS2-17696): [LOGIN APP]: fallback to language when missing language-locale translations**  
Components: _[App] Login_

**[DHIS2-17433](https://dhis2.atlassian.net/browse/DHIS2-17433): Login app: customize error message according to network response**  
Components: _[App] Login_

**[DHIS2-17160](https://dhis2.atlassian.net/browse/DHIS2-17160): [LOGIN APP]: keep login button disabled until redirected**  
Components: _[App] Login_

**[DHIS2-12067](https://dhis2.atlassian.net/browse/DHIS2-12067): First value (averge in org unit hierarchy) - typo**  
Components: _[App] Maintenance_

**[DHIS2-18617](https://dhis2.atlassian.net/browse/DHIS2-18617): After delete of a category option group set - the item is still shown as selected**  
Components: _[App] Maintenance_

**[DHIS2-12190](https://dhis2.atlassian.net/browse/DHIS2-12190): Category option combination: Ignore approval missing in Maintenance App**  
Components: _[App] Maintenance_

**[DHIS2-18365](https://dhis2.atlassian.net/browse/DHIS2-18365): Mandatory Attribute not being respected as Mandatory**  
Components: _[App] Maintenance_, _[App] User_, _[Core] Attributes_

**[DHIS2-18597](https://dhis2.atlassian.net/browse/DHIS2-18597): "option group to show"  doesn't populate already created option groups while creating program rules**  
Components: _[App] Maintenance_

**[DHIS2-17800](https://dhis2.atlassian.net/browse/DHIS2-17800): Cannot save a Program Rule's action Send Message with template on 42 (dev)**  
Components: _[App] Maintenance_

**[DHIS2-18073](https://dhis2.atlassian.net/browse/DHIS2-18073): Inability to Assign Custom Attributes to Metadata Objects Properly**  
Components: _[App] Maintenance_

**[DHIS2-6011](https://dhis2.atlassian.net/browse/DHIS2-6011): Irrelevant error message while deleting legends**  
Components: _[App] Maintenance_

**[DHIS2-8042](https://dhis2.atlassian.net/browse/DHIS2-8042): Programrule Actions & Variables block deletion of dataelements**  
**[DHIS2-16144](https://dhis2.atlassian.net/browse/DHIS2-16144): adding geojson_url overlay gets added as basemap**  
Components: _[App] Maintenance_

**[DHIS2-17753](https://dhis2.atlassian.net/browse/DHIS2-17753): TEs layer not showing all relationships when source and target are of same type**  
Components: _[App] Maps_

**[DHIS2-19279](https://dhis2.atlassian.net/browse/DHIS2-19279): Global header bar does not hide when entering download mode and in-app bar appears when leaving**  
Components: _[App] Maps_

**[DHIS2-17711](https://dhis2.atlassian.net/browse/DHIS2-17711): Name of data element used for styling event disappears in pop-up after saving**  
Components: _[App] Maps_

**[DHIS2-19008](https://dhis2.atlassian.net/browse/DHIS2-19008): When a popup is open in a timeline map, the period is updated but not the value**  
Components: _[App] Maps_

**[DHIS2-17710](https://dhis2.atlassian.net/browse/DHIS2-17710): "Coordinate field" defaults to "Event location" whenever the "Data" tab of "Edit event layer" is opened**  
Components: _[App] Maps_

**[DHIS2-18312](https://dhis2.atlassian.net/browse/DHIS2-18312): TE Layer won't load - Select Data > Program, Period > Enrollment and change back Data > Program to None**  
Components: _[App] Maps_

**[DHIS2-18722](https://dhis2.atlassian.net/browse/DHIS2-18722): Start / End dates gets reset when switching between period tabs**  
Components: _[App] Maps_

**[DHIS2-15438](https://dhis2.atlassian.net/browse/DHIS2-15438): Save maps gives two message boxes at the bottom**  
Components: _[App] Maps_

**[DHIS2-18218](https://dhis2.atlassian.net/browse/DHIS2-18218): Cluster are not displayed for events layer**  
**[DHIS2-19327](https://dhis2.atlassian.net/browse/DHIS2-19327): Column Header and Content mismatch in Report Rate Summary**  
Components: _[App] Reports_

**[DHIS2-17378](https://dhis2.atlassian.net/browse/DHIS2-17378): 500 on some report generations with JFreeChart**  
Components: _[App] Reports_

**[DHIS2-19069](https://dhis2.atlassian.net/browse/DHIS2-19069): Unable edit Standard report: throws an error on Edit**  
Components: _[App] Reports_

**[DHIS2-17415](https://dhis2.atlassian.net/browse/DHIS2-17415): Error Encountered When Downloading Dataset Reports (Error 500)**  
Components: _[App] Reports_

**[DHIS2-16199](https://dhis2.atlassian.net/browse/DHIS2-16199): Report period selector in Reports app missing labels**  
Components: _[App] Reports_

**[DHIS2-12469](https://dhis2.atlassian.net/browse/DHIS2-12469): Data Set Reports give error while downloading PDF or XLS**  
Components: _[App] Reports_

**[DHIS2-19527](https://dhis2.atlassian.net/browse/DHIS2-19527): Custom App as a Start Page results in 404 or broken pages**  
Components: _[App] Settings_

**[DHIS2-19290](https://dhis2.atlassian.net/browse/DHIS2-19290): Display enableGlobalShell setting in Global Shell for v42+ (and not pre-42)**  
Components: _[App] Settings_

**[DHIS2-15663](https://dhis2.atlassian.net/browse/DHIS2-15663): Profile/Apps popup menu UIs are not consistent within different apps**  
**[DHIS2-17709](https://dhis2.atlassian.net/browse/DHIS2-17709): [SETTINGS APP]: Crashes with Portuguese Brazilian**  
Components: _[App] Settings_

**[DHIS2-17592](https://dhis2.atlassian.net/browse/DHIS2-17592): [SETTINGS APP]: remove OAuth2  from settings app v42**  
Components: _[App] Settings_

**[DHIS2-18119](https://dhis2.atlassian.net/browse/DHIS2-18119): Dropdowns open behind the save button in SMS Configuration app**  
Components: _[App] SMS configuration_

**[DHIS2-15704](https://dhis2.atlassian.net/browse/DHIS2-15704): Password validation needs to be consistent with the backend**  
Components: _[App] User_, _[App] User Profile_

**[DHIS2-18742](https://dhis2.atlassian.net/browse/DHIS2-18742): Authorities need translations**  
Components: _[App] User_

**[DHIS2-19009](https://dhis2.atlassian.net/browse/DHIS2-19009): Select all when searching for authorities selects all, not just the search result**  
Components: _[App] User_

**[DHIS2-16858](https://dhis2.atlassian.net/browse/DHIS2-16858): User creation form shows variables in input values**  
Components: _[App] User_

**[DHIS2-16858](https://dhis2.atlassian.net/browse/DHIS2-16858): User creation form shows variables in input values**  
Components: _[App] User_

**[DHIS2-17083](https://dhis2.atlassian.net/browse/DHIS2-17083): [USER APP]: Provide Clear Notification for Users Without Edit Access on User Group View Page**  
Components: _[App] User_

**[DHIS2-10843](https://dhis2.atlassian.net/browse/DHIS2-10843): User roles: app names aren't always sorted or formatted correctly in authorities selector**  
Components: _[App] User_

**[DHIS2-17441](https://dhis2.atlassian.net/browse/DHIS2-17441): authorities are missing in New/edit user roles**  
Components: _[App] User_

**[DHIS2-18358](https://dhis2.atlassian.net/browse/DHIS2-18358): Two-factor Authentication doesn't work if Application title is not English alphabet character**  
Components: _[App] User Profile_

**[DHIS2-18920](https://dhis2.atlassian.net/browse/DHIS2-18920): [USER PROFILE APP]: email verification warning appears on account settings and user settings page**  
Components: _[App] User Profile_

**[DHIS2-18460](https://dhis2.atlassian.net/browse/DHIS2-18460): system.session.timeout not enforced when using a cluster and Redis**  
Components: _[Core] General_

**[DHIS2-18251](https://dhis2.atlassian.net/browse/DHIS2-18251): Cyclic reference in OpenAPI definition for WebMessage schema**  
Components: _[Core] OpenAPI_


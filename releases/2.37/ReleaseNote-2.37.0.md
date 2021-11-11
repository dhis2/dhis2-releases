# Patch 2.37.0 Release Note

  - [Features](#features)
  - [Bugs](#bugs)

## Features

**[DHIS2-11737](https://jira.dhis2.org/browse/DHIS2-11737): Data output max organisation unit level**  
Components: _[API] Analytics_, _[API] User_

**[DHIS2-7879](https://jira.dhis2.org/browse/DHIS2-7879): Configurable programs in event analytics table export API and job**  
Components: _[API] Analytics_

**[DHIS2-11047](https://jira.dhis2.org/browse/DHIS2-11047): Drop support for ReportTable and Chart**  
Components: _[API] Analytics_

**[DHIS2-10079](https://jira.dhis2.org/browse/DHIS2-10079): Outlier analysis support in visualizations**  
Components: _[API] Analytics_, _[API] Metadata model_

**[DHIS2-11174](https://jira.dhis2.org/browse/DHIS2-11174): Use declarative partitioning for analytics tables**  
Components: _[API] Analytics_

**[DHIS2-5001](https://jira.dhis2.org/browse/DHIS2-5001): File Resource Aggregation Type "Count"**  
Components: _[API] Analytics_

**[DHIS2-3352](https://jira.dhis2.org/browse/DHIS2-3352): Fallback to org unit location for missing event location in event analytics**  
Components: _[API] Analytics_

**[DHIS2-9747](https://jira.dhis2.org/browse/DHIS2-9747): Indicator expressions: data element and category option groups**  
Components: _[API] Analytics_

**[DHIS2-716](https://jira.dhis2.org/browse/DHIS2-716): Category options in indicator formulas**  
Components: _[API] Analytics_

**[DHIS2-1219](https://jira.dhis2.org/browse/DHIS2-1219): Filter by missing (NV) data in event analytics apps**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-4902](https://jira.dhis2.org/browse/DHIS2-4902): storedBy field in Event Analytics**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-10295](https://jira.dhis2.org/browse/DHIS2-10295): Support a single program indicators as filter**  
Components: _[API] Analytics_

**[DHIS2-11052](https://jira.dhis2.org/browse/DHIS2-11052): Support "textMode" for Title (in Axes) - Visualization object**  
Components: _[API] Analytics_

**[DHIS2-7029](https://jira.dhis2.org/browse/DHIS2-7029): Add Last 10 years as relative period**  
Components: _[API] Analytics_, _[App] Analytics_

**[DHIS2-6542](https://jira.dhis2.org/browse/DHIS2-6542): Return enrollment geometry in API calls**  
Components: _[API] Analytics_

**[DHIS2-7776](https://jira.dhis2.org/browse/DHIS2-7776): Create a relative period for Last 10 Financial years**  
Components: _[API] Analytics_

**[DHIS2-169](https://jira.dhis2.org/browse/DHIS2-169): System setting for relative periods in analytics apps**  
Components: _[API] Analytics_, _[App] Analytics_, _[App] Maps_

**[DHIS2-11281](https://jira.dhis2.org/browse/DHIS2-11281): Org unit merge API**  
Components: _[API] Data administration_

**[DHIS2-11301](https://jira.dhis2.org/browse/DHIS2-11301): Org unit split API**  
Components: _[API] Data administration_

**[DHIS2-11157](https://jira.dhis2.org/browse/DHIS2-11157): Require specific authority for generating min-max values**  
Components: _[API] Data administration_

**[DHIS2-10865](https://jira.dhis2.org/browse/DHIS2-10865): Use approximate counting for data statistics**  
Components: _[API] Data administration_

**[DHIS2-11582](https://jira.dhis2.org/browse/DHIS2-11582): Return user details and approval date/time for approved workflows**  
Components: _[API] Data approval_

**[DHIS2-11654](https://jira.dhis2.org/browse/DHIS2-11654): Show notification when encountering data sets with non-default form types**  
Components: _[API] Data approval_

**[DHIS2-11155](https://jira.dhis2.org/browse/DHIS2-11155): Introduce authorities for data approval level and workflow**  
Components: _[API] Data approval_, _[API] Security_

**[DHIS2-10214](https://jira.dhis2.org/browse/DHIS2-10214): ValueType options class**  
Components: _[API] Data store_

**[DHIS2-6163](https://jira.dhis2.org/browse/DHIS2-6163): Avoid update and audit for identical data values**  
Components: _[API] Data value set_

**[DHIS2-11181](https://jira.dhis2.org/browse/DHIS2-11181): Support outputIdScheme for event analytics**  
Components: _[API] Events_

**[DHIS2-8328](https://jira.dhis2.org/browse/DHIS2-8328): Hibernate cluster cache invalidation with automatic node registration**  
Components: _[API] Frameworks and libraries_

**[DHIS2-10592](https://jira.dhis2.org/browse/DHIS2-10592): Refactor Artemis to use in-VM connector**  
Components: _[API] Frameworks and libraries_

**[DHIS2-11191](https://jira.dhis2.org/browse/DHIS2-11191): programNotificationTemplates endpoint should include program/programstage ID**  
Components: _[API] Messaging_, _[API] Tracker_

**[DHIS2-10718](https://jira.dhis2.org/browse/DHIS2-10718): Add JSON Patch support for metadata endpoints**  
Components: _[API] Metadata import-export_

**[DHIS2-10407](https://jira.dhis2.org/browse/DHIS2-10407): Validate email of user during import**  
Components: _[API] Metadata import-export_, _[API] User_

**[DHIS2-11323](https://jira.dhis2.org/browse/DHIS2-11323): Include fields of 1:1 references with no endpoint on their own for Gist API**  
Components: _[API] Metadata model_

**[DHIS2-11690](https://jira.dhis2.org/browse/DHIS2-11690): Add noDataColor to MapView with hex color code validation**  
Components: _[API] Metadata model_

**[DHIS2-11496](https://jira.dhis2.org/browse/DHIS2-11496): Gist API: Describe**  
Components: _[API] Metadata model_

**[DHIS2-11177](https://jira.dhis2.org/browse/DHIS2-11177): Org unit profile data model, storage and API**  
Components: _[API] Metadata model_

**[DHIS2-11370](https://jira.dhis2.org/browse/DHIS2-11370): Convert DataApproval ID from int to long**  
Components: _[API] Metadata model_

**[DHIS2-11024](https://jira.dhis2.org/browse/DHIS2-11024): Gist Metadata API**  
Components: _[API] Metadata model_

**[DHIS2-11172](https://jira.dhis2.org/browse/DHIS2-11172): Org unit image upload API**  
Components: _[API] Metadata model_

**[DHIS2-11978](https://jira.dhis2.org/browse/DHIS2-11978): Update redesigned metadata icons**  
Components: _[API] Other_

**[DHIS2-11502](https://jira.dhis2.org/browse/DHIS2-11502): Data set reports to allow multiple periods in API**  
Components: _[API] Other_

**[DHIS2-101](https://jira.dhis2.org/browse/DHIS2-101): Cascading sharing for dashboards to items**  
Components: _[API] Other_, _[App] Dashboard_

**[DHIS2-10287](https://jira.dhis2.org/browse/DHIS2-10287): Remove legacy translation tables and objects**  
Components: _[API] Other_

**[DHIS2-10177](https://jira.dhis2.org/browse/DHIS2-10177): Make old Axes elements read-only**  
Components: _[API] Other_

**[DHIS2-4417](https://jira.dhis2.org/browse/DHIS2-4417): CategoryOption endpoint to only return items that are linked to capture org units of user**  
Components: _[API] Other_, _[API] Tracker_

**[DHIS2-11005](https://jira.dhis2.org/browse/DHIS2-11005): Package and deploy API and backend as JAR file in embedded servlet container**  
Components: _[API] Other_

**[DHIS2-10602](https://jira.dhis2.org/browse/DHIS2-10602): Add API version 37**  
Components: _[API] Other_

**[DHIS2-11637](https://jira.dhis2.org/browse/DHIS2-11637): OrgUnit group and ancestor expression functions**  
Components: _[API] Predictors_

**[DHIS2-10802](https://jira.dhis2.org/browse/DHIS2-10802): ProgramRule action validation**  
Components: _[API] Program rules_

**[DHIS2-10337](https://jira.dhis2.org/browse/DHIS2-10337): Add support for using JWT tokens issued by an OIDC provider directly**  
Components: _[API] Security_

**[DHIS2-10353](https://jira.dhis2.org/browse/DHIS2-10353): Add "generic" OIDC provider support**  
Components: _[API] Security_

**[DHIS2-9346](https://jira.dhis2.org/browse/DHIS2-9346): Add Azure AD OpenID Connect provider support**  
Components: _[API] Security_

**[DHIS2-10619](https://jira.dhis2.org/browse/DHIS2-10619): Notifications for repeatable program stages**  
Components: _[API] SMS_, _[API] Tracker_

**[DHIS2-11700](https://jira.dhis2.org/browse/DHIS2-11700): Facility maps org unit group set and level configuration options**  
Components: _[API] System configuration_, _[App] Settings_

**[DHIS2-11166](https://jira.dhis2.org/browse/DHIS2-11166): Add analytics system setting for hiding biweekly periods**  
Components: _[API] System configuration_

**[DHIS2-9963](https://jira.dhis2.org/browse/DHIS2-9963): UI changes to new OpenID connect features**  
Components: _[API] System configuration_, _[App] User_, _[App] User Profile_

**[DHIS2-9674](https://jira.dhis2.org/browse/DHIS2-9674): Create a system job to clean up used reserved values**  
Components: _[API] Tracker_

**[DHIS2-11182](https://jira.dhis2.org/browse/DHIS2-11182): Remove uneccesary use of reserved values and queries**  
Components: _[API] Tracker_

**[DHIS2-11566](https://jira.dhis2.org/browse/DHIS2-11566): Deduplication: Remove TrackedEntity (merge)**  
Components: _[API] Tracker_

**[DHIS2-10682](https://jira.dhis2.org/browse/DHIS2-10682): Add web hook delivery channel to program notifications**  
Components: _[API] Tracker_

**[DHIS2-11626](https://jira.dhis2.org/browse/DHIS2-11626): Deduplication: Merge simple enrollments**  
Components: _[API] Tracker_

**[DHIS2-11305](https://jira.dhis2.org/browse/DHIS2-11305): Improve Reserved Values generation**  
Components: _[API] Tracker_

**[DHIS2-11565](https://jira.dhis2.org/browse/DHIS2-11565): Deduplication: Move Relationships (Merge)**  
Components: _[API] Tracker_

**[DHIS2-11564](https://jira.dhis2.org/browse/DHIS2-11564): Deduplication: Move TrackedEntityAttributes (Merge)**  
Components: _[API] Tracker_

**[DHIS2-11561](https://jira.dhis2.org/browse/DHIS2-11561): Deduplication: check invalid references**  
Components: _[API] Tracker_

**[DHIS2-11563](https://jira.dhis2.org/browse/DHIS2-11563): Deduplication: Merge records in the database**  
Components: _[API] Tracker_

**[DHIS2-11351](https://jira.dhis2.org/browse/DHIS2-11351): Deduplication: ACL for merging duplicates**  
Components: _[API] Tracker_

**[DHIS2-11562](https://jira.dhis2.org/browse/DHIS2-11562): Deduplication: Generate MergeObject**  
Components: _[API] Tracker_

**[DHIS2-11401](https://jira.dhis2.org/browse/DHIS2-11401): Deduplication: Merge potential duplicate endpoint**  
Components: _[API] Tracker_

**[DHIS2-11395](https://jira.dhis2.org/browse/DHIS2-11395): Deduplication: Automatically merging potential duplicates**  
Components: _[API] Tracker_

**[DHIS2-11353](https://jira.dhis2.org/browse/DHIS2-11353): Deduplication: Merging duplicates service**  
Components: _[API] Tracker_

**[DHIS2-11396](https://jira.dhis2.org/browse/DHIS2-11396): Deduplication: Manually merging potential duplicates**  
Components: _[API] Tracker_

**[DHIS2-11226](https://jira.dhis2.org/browse/DHIS2-11226): Filter events by enrollment uids**  
Components: _[API] Tracker_

**[DHIS2-11348](https://jira.dhis2.org/browse/DHIS2-11348): Deduplication: Decide mergability of two tracked entities [no enrollments]**  
Components: _[API] Tracker_

**[DHIS2-11196](https://jira.dhis2.org/browse/DHIS2-11196): Include uid of deleted elements in the new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-10572](https://jira.dhis2.org/browse/DHIS2-10572): Program's max tei result should override TrackedEntityType's max tei result**  
Components: _[API] Tracker_

**[DHIS2-11336](https://jira.dhis2.org/browse/DHIS2-11336): Deduplication: Update potential duplicate**  
Components: _[API] Tracker_

**[DHIS2-11337](https://jira.dhis2.org/browse/DHIS2-11337): Deduplication: GET potential duplicates, filter by status**  
Components: _[API] Tracker_

**[DHIS2-10571](https://jira.dhis2.org/browse/DHIS2-10571): TrackedEntityType or Program is required for requesting tei data**  
**[DHIS2-11094](https://jira.dhis2.org/browse/DHIS2-11094): Refactor paging / skipPaging request parameters in new tracker export endpoints**  
Components: _[API] Tracker_

**[DHIS2-11092](https://jira.dhis2.org/browse/DHIS2-11092): Order items in NT export endpoints**  
Components: _[API] Tracker_

**[DHIS2-10885](https://jira.dhis2.org/browse/DHIS2-10885): Add createdBy and updatedBy properties in Tracker Objects**  
Components: _[API] Tracker_

**[DHIS2-10831](https://jira.dhis2.org/browse/DHIS2-10831): Add event/execution dates to program stage notification template**  
Components: _[API] Tracker_

**[DHIS2-10953](https://jira.dhis2.org/browse/DHIS2-10953): Add pagination to New Tracker Relationship endpoint**  
Components: _[API] Tracker_

**[DHIS2-10756](https://jira.dhis2.org/browse/DHIS2-10756): Implement field filtering capability on new tracker GET endpoints**  
Components: _[API] Tracker_

**[DHIS2-10875](https://jira.dhis2.org/browse/DHIS2-10875): Validate updatable properties in new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-10452](https://jira.dhis2.org/browse/DHIS2-10452): Validation for values with option sets**  
Components: _[API] Tracker_

**[DHIS2-9085](https://jira.dhis2.org/browse/DHIS2-9085): Add support for deletion of tracker objects in the new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-11574](https://jira.dhis2.org/browse/DHIS2-11574): Translatable properties for Predictor and Expression**  
Components: _[API] Translations_

**[DHIS2-11030](https://jira.dhis2.org/browse/DHIS2-11030): Make Notification templates translatable**  
Components: _[API] Translations_

**[DHIS2-10562](https://jira.dhis2.org/browse/DHIS2-10562): Make chart/visualisation components translatable**  
Components: _[API] Translations_

**[DHIS2-9820](https://jira.dhis2.org/browse/DHIS2-9820): Reset password by invitation for existing user**  
Components: _[API] User_, _[App] User_

**[DHIS2-11645](https://jira.dhis2.org/browse/DHIS2-11645): Modified Z-score for outlier detection**  
Components: _[API] Validation_

**[DHIS2-8876](https://jira.dhis2.org/browse/DHIS2-8876): Return attribute option combos with validation results**  
Components: _[API] Validation_

**[DHIS2-11002](https://jira.dhis2.org/browse/DHIS2-11002): Rewrite d2-ui-favorites-dialog in analytics with @dhis2/ui**  
Components: _[App] Analytics_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-10501](https://jira.dhis2.org/browse/DHIS2-10501): Update app management UI to match redesign**  
Components: _[App] App management_

**[DHIS2-122](https://jira.dhis2.org/browse/DHIS2-122): Integrated app upgrade from App Hub**  
Components: _[App] App management_

**[DHIS2-11399](https://jira.dhis2.org/browse/DHIS2-11399): Save the new event form**  
Components: _[App] Capture_

**[DHIS2-11224](https://jira.dhis2.org/browse/DHIS2-11224): Add the list to the program stage event list page**  
Components: _[App] Capture_

**[DHIS2-11467](https://jira.dhis2.org/browse/DHIS2-11467): List events in a program assigned to a user, regardless of OU**  
Components: _[App] Capture_

**[DHIS2-11632](https://jira.dhis2.org/browse/DHIS2-11632): Enrollment comments in the enrollment overview**  
Components: _[App] Capture_

**[DHIS2-11616](https://jira.dhis2.org/browse/DHIS2-11616): Event comments widget on the edit event page**  
Components: _[App] Capture_

**[DHIS2-11576](https://jira.dhis2.org/browse/DHIS2-11576): Improve event sorting in stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-11393](https://jira.dhis2.org/browse/DHIS2-11393): Add the new event form**  
Components: _[App] Capture_

**[DHIS2-11452](https://jira.dhis2.org/browse/DHIS2-11452): Use indicator widget in add event page**  
Components: _[App] Capture_

**[DHIS2-11450](https://jira.dhis2.org/browse/DHIS2-11450): Use feedback widget in add event page**  
Components: _[App] Capture_

**[DHIS2-11449](https://jira.dhis2.org/browse/DHIS2-11449): Use warning widget in add event page**  
Components: _[App] Capture_

**[DHIS2-11448](https://jira.dhis2.org/browse/DHIS2-11448): Use error widget in add event page**  
Components: _[App] Capture_

**[DHIS2-11631](https://jira.dhis2.org/browse/DHIS2-11631): Prevent adding more than one event when the stage is not repeatable**  
Components: _[App] Capture_

**[DHIS2-11630](https://jira.dhis2.org/browse/DHIS2-11630): Visualise due date in the status tag in the stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-11199](https://jira.dhis2.org/browse/DHIS2-11199): Scope selector in view/edit enrollment event page**  
Components: _[App] Capture_

**[DHIS2-11389](https://jira.dhis2.org/browse/DHIS2-11389): Scope selector in new enrollment event page**  
Components: _[App] Capture_

**[DHIS2-11455](https://jira.dhis2.org/browse/DHIS2-11455): Use profile widget in add event page**  
Components: _[App] Capture_

**[DHIS2-11456](https://jira.dhis2.org/browse/DHIS2-11456): use enrollment widget in add event page**  
Components: _[App] Capture_

**[DHIS2-11201](https://jira.dhis2.org/browse/DHIS2-11201): Top Bar Actions in view/edit enrollment event page**  
Components: _[App] Capture_

**[DHIS2-11390](https://jira.dhis2.org/browse/DHIS2-11390): Top Bar Actions in new enrollment event page**  
Components: _[App] Capture_

**[DHIS2-11212](https://jira.dhis2.org/browse/DHIS2-11212): Create indicator Widget**  
Components: _[App] Capture_

**[DHIS2-11615](https://jira.dhis2.org/browse/DHIS2-11615): Add plus symbol to "add new" button in stages and events**  
Components: _[App] Capture_

**[DHIS2-11573](https://jira.dhis2.org/browse/DHIS2-11573): Sort indicators alphabetically in indicator widget**  
Components: _[App] Capture_

**[DHIS2-11222](https://jira.dhis2.org/browse/DHIS2-11222): Program stage event list - Create Widget with title and icon**  
Components: _[App] Capture_

**[DHIS2-11572](https://jira.dhis2.org/browse/DHIS2-11572): Navigation from overview event page to program event list and add new event form**  
Components: _[App] Capture_

**[DHIS2-11594](https://jira.dhis2.org/browse/DHIS2-11594): Comment column is missing under stages and events**  
Components: _[App] Capture_

**[DHIS2-11593](https://jira.dhis2.org/browse/DHIS2-11593): Due date column is missing under stages and events**  
Components: _[App] Capture_

**[DHIS2-11402](https://jira.dhis2.org/browse/DHIS2-11402): Navigate to the edit event page when clicking an event in the "stages and events" widget**  
Components: _[App] Capture_

**[DHIS2-11457](https://jira.dhis2.org/browse/DHIS2-11457): Use profile widget on the view/edit enrollment event page**  
Components: _[App] Capture_

**[DHIS2-11458](https://jira.dhis2.org/browse/DHIS2-11458): Use enrollment widget on the view/edit enrollment event page**  
Components: _[App] Capture_

**[DHIS2-11459](https://jira.dhis2.org/browse/DHIS2-11459): Use feedback and indicator widget on the view/edit enrollment event page**  
Components: _[App] Capture_

**[DHIS2-11211](https://jira.dhis2.org/browse/DHIS2-11211): Use error and warning widget on the view/edit enrollment event page**  
Components: _[App] Capture_

**[DHIS2-10222](https://jira.dhis2.org/browse/DHIS2-10222): Stages and events overview and table**  
Components: _[App] Capture_

**[DHIS2-11420](https://jira.dhis2.org/browse/DHIS2-11420): Resolve options if they exist**  
Components: _[App] Capture_

**[DHIS2-11422](https://jira.dhis2.org/browse/DHIS2-11422): Take value type into consideration when sorting the events**  
Components: _[App] Capture_

**[DHIS2-11208](https://jira.dhis2.org/browse/DHIS2-11208): Display form using the view/edit single event component**  
Components: _[App] Capture_

**[DHIS2-11392](https://jira.dhis2.org/browse/DHIS2-11392): Create new event Widget with title and icon**  
Components: _[App] Capture_

**[DHIS2-11388](https://jira.dhis2.org/browse/DHIS2-11388): Create new page with routing**  
Components: _[App] Capture_

**[DHIS2-11045](https://jira.dhis2.org/browse/DHIS2-11045): Warning Widget: Use widget component and add header**  
Components: _[App] Capture_

**[DHIS2-10977](https://jira.dhis2.org/browse/DHIS2-10977): Create the feedback widget wrapper component**  
Components: _[App] Capture_

**[DHIS2-10942](https://jira.dhis2.org/browse/DHIS2-10942): Retrieve and show information for current enrollment**  
Components: _[App] Capture_

**[DHIS2-10947](https://jira.dhis2.org/browse/DHIS2-10947): Use widget component and add header**  
Components: _[App] Capture_

**[DHIS2-11206](https://jira.dhis2.org/browse/DHIS2-11206): Custom enrollment forms**  
Components: _[App] Capture_

**[DHIS2-10981](https://jira.dhis2.org/browse/DHIS2-10981): Feedback widget: Make component for rendering feedback-content**  
Components: _[App] Capture_

**[DHIS2-11044](https://jira.dhis2.org/browse/DHIS2-11044): Error Widget: Use widget component and add header**  
Components: _[App] Capture_

**[DHIS2-11221](https://jira.dhis2.org/browse/DHIS2-11221): Program stage event list page with routing**  
Components: _[App] Capture_

**[DHIS2-11079](https://jira.dhis2.org/browse/DHIS2-11079): Update UI to reflect the new prototype / design doc for DHIS2-10218**  
**[DHIS2-10759](https://jira.dhis2.org/browse/DHIS2-10759): Implement Sections in Enrollment Form in Capture app**  
Components: _[App] Capture_

**[DHIS2-11207](https://jira.dhis2.org/browse/DHIS2-11207): Create view/edit event Widget with title and icon**  
Components: _[App] Capture_

**[DHIS2-11200](https://jira.dhis2.org/browse/DHIS2-11200): Create page with routing - View/Edit event page**  
Components: _[App] Capture_

**[DHIS2-10943](https://jira.dhis2.org/browse/DHIS2-10943): Buttons (complete, follow-up, canceled, delete.)**  
Components: _[App] Capture_

**[DHIS2-10218](https://jira.dhis2.org/browse/DHIS2-10218): User can see a list of the different stages and their titles**  
Components: _[App] Capture_

**[DHIS2-10948](https://jira.dhis2.org/browse/DHIS2-10948): Show tracked entity attributes**  
Components: _[App] Capture_

**[DHIS2-10525](https://jira.dhis2.org/browse/DHIS2-10525): Back functionality when navigating between tracker and Capture**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-10941](https://jira.dhis2.org/browse/DHIS2-10941): Use widget component and add header**  
Components: _[App] Capture_

**[DHIS2-3600](https://jira.dhis2.org/browse/DHIS2-3600): Dashboard column layout**  
Components: _[App] Dashboard_

**[DHIS2-6296](https://jira.dhis2.org/browse/DHIS2-6296): Show legends for pivot tables and charts on dashboard**  
Components: _[App] Dashboard_

**[DHIS2-11723](https://jira.dhis2.org/browse/DHIS2-11723): Dashboard PWA - make show/hide desc available offline**  
Components: _[App] Dashboard_

**[DHIS2-10874](https://jira.dhis2.org/browse/DHIS2-10874): Implement offline dashboard MVP**  
Components: _[App] Dashboard_

**[DHIS2-7420](https://jira.dhis2.org/browse/DHIS2-7420): Add indicator type to single value chart type**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-4361](https://jira.dhis2.org/browse/DHIS2-4361): Allow removing visualizations and maps with interpretations or added to dashboards**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-10143](https://jira.dhis2.org/browse/DHIS2-10143): Dashboards app UI / UX improvements**  
Components: _[App] Dashboard_

**[DHIS2-10518](https://jira.dhis2.org/browse/DHIS2-10518): Lazily load plugin code**  
Components: _[App] Dashboard_

**[DHIS2-11251](https://jira.dhis2.org/browse/DHIS2-11251): Split 'Lock exception' page into 3: management, addition and batch deletion**  
Components: _[App] Data administration_

**[DHIS2-11249](https://jira.dhis2.org/browse/DHIS2-11249): Use card styles following our design guidelines on overview page**  
Components: _[App] Data administration_

**[DHIS2-11248](https://jira.dhis2.org/browse/DHIS2-11248): Expand use of usePoll hook to 'Maintenance' and 'Resource tables' pages**  
Components: _[App] Data administration_

**[DHIS2-11247](https://jira.dhis2.org/browse/DHIS2-11247): Replace d2 with @dhis2/app-runtime**  
Components: _[App] Data administration_

**[DHIS2-11070](https://jira.dhis2.org/browse/DHIS2-11070): Move away from page state architecture**  
Components: _[App] Data administration_

**[DHIS2-10483](https://jira.dhis2.org/browse/DHIS2-10483): Port to app-platform [data-administration-app]**  
Components: _[App] Data administration_

**[DHIS2-11426](https://jira.dhis2.org/browse/DHIS2-11426): Browser navigation support and hrefs**  
Components: _[App] Data approval_

**[DHIS2-11299](https://jira.dhis2.org/browse/DHIS2-11299): Run e2e tests on CI**  
Components: _[App] Data approval_

**[DHIS2-11581](https://jira.dhis2.org/browse/DHIS2-11581): Add period display name and workflow name to confirmation modal**  
Components: _[App] Data approval_

**[DHIS2-11578](https://jira.dhis2.org/browse/DHIS2-11578): Establish correct status tag icons and display texts**  
Components: _[App] Data approval_

**[DHIS2-11588](https://jira.dhis2.org/browse/DHIS2-11588): Add period display name to 'no data for period' data workspace message**  
Components: _[App] Data approval_

**[DHIS2-11583](https://jira.dhis2.org/browse/DHIS2-11583): Show approval states within the org-unit-tree**  
Components: _[App] Data approval_

**[DHIS2-11584](https://jira.dhis2.org/browse/DHIS2-11584): Implement correct status tag icons and display texts**  
Components: _[App] Data approval_

**[DHIS2-11592](https://jira.dhis2.org/browse/DHIS2-11592): Remove resolutions field from package.json**  
Components: _[App] Data approval_

**[DHIS2-11285](https://jira.dhis2.org/browse/DHIS2-11285): Context selection top bar**  
Components: _[App] Data approval_

**[DHIS2-11283](https://jira.dhis2.org/browse/DHIS2-11283): App layout**  
Components: _[App] Data approval_

**[DHIS2-11287](https://jira.dhis2.org/browse/DHIS2-11287): Bottom Bar**  
Components: _[App] Data approval_

**[DHIS2-11286](https://jira.dhis2.org/browse/DHIS2-11286): Data workspace: interacting with a workflow**  
Components: _[App] Data approval_

**[DHIS2-11284](https://jira.dhis2.org/browse/DHIS2-11284): State management and routing**  
Components: _[App] Data approval_

**[DHIS2-11516](https://jira.dhis2.org/browse/DHIS2-11516): Show periods of previous year if the first period of the year has not finished yet**  
Components: _[App] Data approval_

**[DHIS2-11609](https://jira.dhis2.org/browse/DHIS2-11609): Show approval user and date/time in approval status tag**  
Components: _[App] Data approval_

**[DHIS2-11579](https://jira.dhis2.org/browse/DHIS2-11579): Deploy app to play/dev**  
Components: _[App] Data approval_

**[DHIS2-11619](https://jira.dhis2.org/browse/DHIS2-11619): Do not show tab-bar when no datasets are connected to workflow**  
Components: _[App] Data approval_

**[DHIS2-11664](https://jira.dhis2.org/browse/DHIS2-11664): UI improvements - from test session**  
Components: _[App] Data approval_

**[DHIS2-10486](https://jira.dhis2.org/browse/DHIS2-10486): Port to React from Struts [data approvals]**  
**[DHIS2-11683](https://jira.dhis2.org/browse/DHIS2-11683): Rename Data Approval Struts module to Data Approval Classic**  
Components: _[App] Data approval_

**[DHIS2-11599](https://jira.dhis2.org/browse/DHIS2-11599): Respect section config for data element grouping**  
Components: _[App] Data entry_

**[DHIS2-11315](https://jira.dhis2.org/browse/DHIS2-11315): Indicators displayed in dataset should not be editable**  
**[DHIS2-11663](https://jira.dhis2.org/browse/DHIS2-11663): Add Modified Z-Score outlier detection to Data Quality App**  
Components: _[App] Data quality_

**[DHIS2-11446](https://jira.dhis2.org/browse/DHIS2-11446): Add periodDisplayName field to new UUID-based followup API (GET /dataAnalysis/followup)**  
Components: _[App] Data quality_

**[DHIS2-11062](https://jira.dhis2.org/browse/DHIS2-11062): Use UUID-based followups APIs introduced by DHIS2-10658**  
Components: _[App] Data quality_

**[DHIS2-11444](https://jira.dhis2.org/browse/DHIS2-11444): Replace d2 with @dhis2/app-runtime**  
Components: _[App] Data quality_

**[DHIS2-10851](https://jira.dhis2.org/browse/DHIS2-10851): Selected org-unit(s) are cleared when navigating back to form**  
Components: _[App] Data quality_

**[DHIS2-9971](https://jira.dhis2.org/browse/DHIS2-9971): Port to app-platform [data quality]**  
Components: _[App] Data quality_

**[DHIS2-10482](https://jira.dhis2.org/browse/DHIS2-10482): Port to app-platform [datastore-app]**  
Components: _[App] Data store_

**[DHIS2-11556](https://jira.dhis2.org/browse/DHIS2-11556): Allow option for text wrapping in pivot tables**  
Components: _[App] Data visualizer_

**[DHIS2-11057](https://jira.dhis2.org/browse/DHIS2-11057): Fixed column and row headers in pivot tables**  
Components: _[App] Data visualizer_

**[DHIS2-6672](https://jira.dhis2.org/browse/DHIS2-6672): Axis titles for multi axis charts**  
Components: _[App] Data visualizer_

**[DHIS2-9734](https://jira.dhis2.org/browse/DHIS2-9734): Add select "All" feature in data visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-10902](https://jira.dhis2.org/browse/DHIS2-10902): Improve the axis title component**  
Components: _[App] Data visualizer_

**[DHIS2-11061](https://jira.dhis2.org/browse/DHIS2-11061): Drill down org units in bar and column charts**  
Components: _[App] Data visualizer_

**[DHIS2-11037](https://jira.dhis2.org/browse/DHIS2-11037): Update legend control label**  
Components: _[App] Data visualizer_

**[DHIS2-4978](https://jira.dhis2.org/browse/DHIS2-4978): Add ADX export to import/export app**  
Components: _[App] Import-export_

**[DHIS2-10983](https://jira.dhis2.org/browse/DHIS2-10983): Validate program rule action**  
Components: _[App] Maintenance_

**[DHIS2-10639](https://jira.dhis2.org/browse/DHIS2-10639): Create a flag for multiple notification delivery**  
Components: _[App] Maintenance_

**[DHIS2-11175](https://jira.dhis2.org/browse/DHIS2-11175): Org unit image upload in edit org unit screen**  
Components: _[App] Maintenance_

**[DHIS2-7081](https://jira.dhis2.org/browse/DHIS2-7081): Add formName to Category Options - Maintenance**  
Components: _[App] Maintenance_

**[DHIS2-11406](https://jira.dhis2.org/browse/DHIS2-11406): Switch from Mapbox GL JS to MapLibre GL JS**  
Components: _[App] Maps_

**[DHIS2-11071](https://jira.dhis2.org/browse/DHIS2-11071): Re-purpose Boundary map layer to new Org unit layer**  
Components: _[App] Maps_

**[DHIS2-10252](https://jira.dhis2.org/browse/DHIS2-10252): Dashboard: Enable mouse scroll zoom for fullscreen map and disable map panning on touch screens**  
Components: _[App] Maps_

**[DHIS2-11266](https://jira.dhis2.org/browse/DHIS2-11266): Use period generators from dhis2/analytics**  
Components: _[App] Maps_

**[DHIS2-11704](https://jira.dhis2.org/browse/DHIS2-11704): Add two default org unit map system settings**  
Components: _[App] Settings_

**[DHIS2-11165](https://jira.dhis2.org/browse/DHIS2-11165): Add option for hiding biweekly periods**  
Components: _[App] Settings_

**[DHIS2-9387](https://jira.dhis2.org/browse/DHIS2-9387): Port to app-platform [settings-app]**  
Components: _[App] Settings_

**[DHIS2-10485](https://jira.dhis2.org/browse/DHIS2-10485): Port to app-platform [translations]**  
Components: _[App] Translations_

**[DHIS2-11662](https://jira.dhis2.org/browse/DHIS2-11662): Migrate usage analytics from ReportTable/Chart to Visualization**  
Components: _[App] Usage analytics_

**[DHIS2-11268](https://jira.dhis2.org/browse/DHIS2-11268): Frontend: Reset password by invitation**  
Components: _[App] User_

**[DHIS2-9388](https://jira.dhis2.org/browse/DHIS2-9388): Port to app-platform [user-profile-app]**  
Components: _[App] User Profile_

## Bugs

**[DHIS2-11504](https://jira.dhis2.org/browse/DHIS2-11504): visualization API returns wrong pager information**  
Components: _[API] Analytics_

**[DHIS2-11156](https://jira.dhis2.org/browse/DHIS2-11156): Remove program id from program indicators on /dataItems**  
Components: _[API] Analytics_

**[DHIS2-10871](https://jira.dhis2.org/browse/DHIS2-10871): Analytics return different data for dx as dimension or filter**  
Components: _[API] Analytics_

**[DHIS2-11770](https://jira.dhis2.org/browse/DHIS2-11770): Analytics events count fails in certain cases**  
Components: _[API] Analytics_

**[DHIS2-10551](https://jira.dhis2.org/browse/DHIS2-10551): Indicator .periodOffset() doesn't work for multiple offsets**  
Components: _[API] Analytics_

**[DHIS2-11235](https://jira.dhis2.org/browse/DHIS2-11235): periodOffset parses as the wrong precedence level**  
Components: _[API] Analytics_

**[DHIS2-11515](https://jira.dhis2.org/browse/DHIS2-11515): periodOffset indicator expression function is broken**  
Components: _[API] Analytics_

**[DHIS2-10857](https://jira.dhis2.org/browse/DHIS2-10857): Analytics returns large numbers in scientific notation**  
Components: _[API] Analytics_, _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11292](https://jira.dhis2.org/browse/DHIS2-11292): Number Conversion Error - Long/Double - Program Indicator**  
Components: _[API] Analytics_

**[DHIS2-10674](https://jira.dhis2.org/browse/DHIS2-10674): Chart and ReportTable are returning invalid "access" attribute**  
Components: _[API] Analytics_

**[DHIS2-10742](https://jira.dhis2.org/browse/DHIS2-10742): Endpoint /events/query is ALWAYS paging**  
Components: _[API] Analytics_

**[DHIS2-10766](https://jira.dhis2.org/browse/DHIS2-10766): Duplicated elements in the pagination of /dataItems**  
Components: _[API] Analytics_

**[DHIS2-10858](https://jira.dhis2.org/browse/DHIS2-10858): Analytics return the name of "yesterday" with a trailing comma**  
Components: _[API] Analytics_

**[DHIS2-11159](https://jira.dhis2.org/browse/DHIS2-11159): Pager is missing on the enrollment analytics endpoint**  
Components: _[API] Analytics_

**[DHIS2-6591](https://jira.dhis2.org/browse/DHIS2-6591): [Clean]analytics/enrollments/query fails when data element is specified twice**  
Components: _[API] Analytics_

**[DHIS2-10648](https://jira.dhis2.org/browse/DHIS2-10648): Charts are missing values for rows, columns and filters when filter by UID is used**  
Components: _[API] Analytics_

**[DHIS2-11451](https://jira.dhis2.org/browse/DHIS2-11451): Custom apps disappear in API response after application cache cleared**  
Components: _[API] App management_

**[DHIS2-11086](https://jira.dhis2.org/browse/DHIS2-11086): Task notification array order has changed**  
Components: _[API] Data administration_, _[App] Data administration_

**[DHIS2-10914](https://jira.dhis2.org/browse/DHIS2-10914): Error on clicking return/back arrow on batch deletion page**  
Components: _[API] Data administration_

**[DHIS2-10810](https://jira.dhis2.org/browse/DHIS2-10810): Permanently pruning Events fails due to related ProgramMessage**  
Components: _[API] Data administration_

**[DHIS2-11858](https://jira.dhis2.org/browse/DHIS2-11858): Internal server error when loading a data set report**  
Components: _[API] Data approval_, _[API] Other_

**[DHIS2-10839](https://jira.dhis2.org/browse/DHIS2-10839): Endpoint /api/dataApprovals/multiple returns error 500**  
Components: _[API] Data approval_

**[DHIS2-9313](https://jira.dhis2.org/browse/DHIS2-9313): ADX export of data value sets does not respect the same set of parameters as the other formats**  
Components: _[API] Data value set_

**[DHIS2-10864](https://jira.dhis2.org/browse/DHIS2-10864): Data value set endpoint not respecting data view orgunit**  
Components: _[API] Data value set_

**[DHIS2-10658](https://jira.dhis2.org/browse/DHIS2-10658): Data Analysis controller uses integer IDs**  
Components: _[API] Data value set_, _[API] Validation_

**[DHIS2-10805](https://jira.dhis2.org/browse/DHIS2-10805): Visualization fails to migrate from 2.34 to 2.35**  
Components: _[API] Database migration_, _[App] Data visualizer_

**[DHIS2-10685](https://jira.dhis2.org/browse/DHIS2-10685): Migration to 2.36 crashes with patienttabularreport issue**  
Components: _[API] Database migration_

**[DHIS2-11541](https://jira.dhis2.org/browse/DHIS2-11541): Event collection endpoint does not expose relationships**  
Components: _[API] Events_

**[DHIS2-11429](https://jira.dhis2.org/browse/DHIS2-11429): Event order without direction leads to 500 server error**  
Components: _[API] Events_

**[DHIS2-10022](https://jira.dhis2.org/browse/DHIS2-10022): Event import failled with IdScheme='Code' (error on programStage id)**  
Components: _[API] Events_

**[DHIS2-11264](https://jira.dhis2.org/browse/DHIS2-11264): Unnecessary access check for events API for event programs**  
Components: _[API] Events_

**[DHIS2-10672](https://jira.dhis2.org/browse/DHIS2-10672): Error downloading events when a category combination is present**  
Components: _[API] Events_

**[DHIS2-10890](https://jira.dhis2.org/browse/DHIS2-10890): Continuous analytics job can't be disabled**  
Components: _[API] Job scheduler_

**[DHIS2-10768](https://jira.dhis2.org/browse/DHIS2-10768): Job configurations with parameters not saved if no parameters are included**  
Components: _[API] Job scheduler_

**[DHIS2-11483](https://jira.dhis2.org/browse/DHIS2-11483): PATCH doesn't work for metadata sharing**  
Components: _[API] Metadata import-export_

**[DHIS2-10622](https://jira.dhis2.org/browse/DHIS2-10622): Import fails to link programstagedataelement to programstage due to renderType**  
Components: _[API] Metadata import-export_

**[DHIS2-11568](https://jira.dhis2.org/browse/DHIS2-11568): Import of event report with program indicator using a filter does not populate table trackedentityprogramindicatordimension**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-11330](https://jira.dhis2.org/browse/DHIS2-11330): Program rule variable name and program validation is not triggered**  
Components: _[API] Metadata import-export_

**[DHIS2-11099](https://jira.dhis2.org/browse/DHIS2-11099): /gist is slow when returning organisation unit users**  
Components: _[API] Metadata import-export_

**[DHIS2-8379](https://jira.dhis2.org/browse/DHIS2-8379): Data import created date changed when updating data values**  
Components: _[API] Metadata import-export_

**[DHIS2-10702](https://jira.dhis2.org/browse/DHIS2-10702): Unexpected error querying tracked entity instance**  
Components: _[API] Metadata import-export_, _[API] Tracker_

**[DHIS2-11273](https://jira.dhis2.org/browse/DHIS2-11273): Program rule variable can't be updated through /metadata**  
Components: _[API] Metadata import-export_

**[DHIS2-11103](https://jira.dhis2.org/browse/DHIS2-11103): /gist is slow when returning program org units with totals**  
Components: _[API] Metadata import-export_

**[DHIS2-10620](https://jira.dhis2.org/browse/DHIS2-10620): Slow searches in /api/reportTables**  
Components: _[API] Metadata import-export_

**[DHIS2-12070](https://jira.dhis2.org/browse/DHIS2-12070): Incorrect expression validation: found number when expecting boolean**  
Components: _[API] Metadata model_

**[DHIS2-11383](https://jira.dhis2.org/browse/DHIS2-11383): !like api filter operator broken**  
Components: _[API] Metadata model_

**[DHIS2-11198](https://jira.dhis2.org/browse/DHIS2-11198): Type of 'periodType' field of data sets changed from string to object of shape '{ name: String }'**  
Components: _[API] Metadata model_

**[DHIS2-11144](https://jira.dhis2.org/browse/DHIS2-11144): Tracker: Data Element Form Name, not show-up in the forms (For both Mobile & Desktop)**  
Components: _[API] Metadata model_

**[DHIS2-8203](https://jira.dhis2.org/browse/DHIS2-8203): Data elements with differing cat combos in the same section do not respect sort order**  
Components: _[API] Metadata model_, _[App] Data entry_, _[App] Maintenance_

**[DHIS2-10956](https://jira.dhis2.org/browse/DHIS2-10956): Validate program rule variable names in API**  
Components: _[API] Metadata model_

**[DHIS2-1127](https://jira.dhis2.org/browse/DHIS2-1127): Translation of external map layers - added translation is not saved**  
Components: _[API] Metadata model_, _[API] Other_, _[App] Maintenance_

**[DHIS2-11051](https://jira.dhis2.org/browse/DHIS2-11051): ProgramStageSection is not available in Translation App**  
Components: _[API] Metadata model_

**[DHIS2-10184](https://jira.dhis2.org/browse/DHIS2-10184): Rendering Options for attributes not correct**  
Components: _[API] Metadata model_, _[API] Other_, _[App] Maintenance_

**[DHIS2-12031](https://jira.dhis2.org/browse/DHIS2-12031): Data Set Reports are broken with non-default CatCombo Data Sets**  
Components: _[API] Other_

**[DHIS2-11848](https://jira.dhis2.org/browse/DHIS2-11848): Metadata with external access set to true requires login**  
Components: _[API] Other_

**[DHIS2-11742](https://jira.dhis2.org/browse/DHIS2-11742): Sharing is not saved for new ProgramStage**  
Components: _[API] Other_

**[DHIS2-11575](https://jira.dhis2.org/browse/DHIS2-11575): EventReports and identifiableObjects endpoint**  
Components: _[API] Other_, _[App] Event reports_

**[DHIS2-11587](https://jira.dhis2.org/browse/DHIS2-11587): PUT to the userDataStore giving different response code**  
Components: _[API] Other_

**[DHIS2-10954](https://jira.dhis2.org/browse/DHIS2-10954): Update sharing data when deleting UserGroup**  
Components: _[API] Other_

**[DHIS2-11329](https://jira.dhis2.org/browse/DHIS2-11329): Can't edit dashboard with "can edit and view"**  
Components: _[API] Other_

**[DHIS2-10697](https://jira.dhis2.org/browse/DHIS2-10697): Path index on organisationunit table not working as expected**  
Components: _[API] Other_

**[DHIS2-10752](https://jira.dhis2.org/browse/DHIS2-10752): New id for eventFilter - sharing settings are non editable**  
Components: _[API] Other_

**[DHIS2-10836](https://jira.dhis2.org/browse/DHIS2-10836): Change default pageSize to 50 for api/sharing/search endpoint**  
Components: _[API] Other_

**[DHIS2-11195](https://jira.dhis2.org/browse/DHIS2-11195): SQL View sharing "capture and view" option should be hidden**  
Components: _[API] Other_, _[App] Maintenance_

**[DHIS2-10487](https://jira.dhis2.org/browse/DHIS2-10487): getModules.action does not translate displayName to user locale**  
Components: _[API] Other_

**[DHIS2-9064](https://jira.dhis2.org/browse/DHIS2-9064): File descriptor leak processing image uploads**  
Components: _[API] Other_

**[DHIS2-10642](https://jira.dhis2.org/browse/DHIS2-10642): /favorites?eventType=VISUALIZATION_VIEW returns no results**  
Components: _[API] Other_, _[App] Data visualizer_

**[DHIS2-8256](https://jira.dhis2.org/browse/DHIS2-8256): Deleting interpretation comments does not always work**  
Components: _[API] Other_

**[DHIS2-9854](https://jira.dhis2.org/browse/DHIS2-9854): d2:hasValue does not support A{abcd} variables**  
Components: _[API] Program rules_

**[DHIS2-10822](https://jira.dhis2.org/browse/DHIS2-10822): SendMessage program rule not going through when trigger rule is set only to a program stage**  
Components: _[API] Program rules_

**[DHIS2-10724](https://jira.dhis2.org/browse/DHIS2-10724): Rule executed for events cannot access attributes**  
Components: _[API] Program rules_

**[DHIS2-11232](https://jira.dhis2.org/browse/DHIS2-11232): Don't enforce data element or tracked entity attribute for show error/warning**  
Components: _[API] Program rules_

**[DHIS2-10396](https://jira.dhis2.org/browse/DHIS2-10396): ProgramRule notification are not working in docker container**  
Components: _[API] Program rules_, _[API] SMS_

**[DHIS2-9723](https://jira.dhis2.org/browse/DHIS2-9723): Program stage sharing not retained after metadata import**  
Components: _[API] Synchronization_, _[API] Tracker_, _[App] Settings_

**[DHIS2-11789](https://jira.dhis2.org/browse/DHIS2-11789): NTI: tracked entity attribute value history is not stored**  
Components: _[API] Tracker_

**[DHIS2-11918](https://jira.dhis2.org/browse/DHIS2-11918): NTI: slow imports because of cross joining program and psi**  
Components: _[API] Tracker_

**[DHIS2-11949](https://jira.dhis2.org/browse/DHIS2-11949): NTI: duplicate validation messages for enrollment attributes**  
Components: _[API] Tracker_

**[DHIS2-11950](https://jira.dhis2.org/browse/DHIS2-11950): NTI: uniqueness is not validated for attributes in enrollment scope**  
Components: _[API] Tracker_

**[DHIS2-11983](https://jira.dhis2.org/browse/DHIS2-11983): NTI: slow imports caused by user service**  
Components: _[API] Tracker_

**[DHIS2-11761](https://jira.dhis2.org/browse/DHIS2-11761): TEI lastUpdated value is not updated on event updates**  
Components: _[API] Tracker_

**[DHIS2-11824](https://jira.dhis2.org/browse/DHIS2-11824): NTI: last updated date on TEI is not updated when underlying data changes**  
Components: _[API] Tracker_

**[DHIS2-11765](https://jira.dhis2.org/browse/DHIS2-11765): NTI: lastUpdatedBy and createdBy are not stored for data values**  
Components: _[API] Tracker_

**[DHIS2-11659](https://jira.dhis2.org/browse/DHIS2-11659): NTI: Error when updating enrollment**  
Components: _[API] Tracker_

**[DHIS2-11910](https://jira.dhis2.org/browse/DHIS2-11910): NTI: TEI can't be updated within search scope**  
Components: _[API] Tracker_

**[DHIS2-11689](https://jira.dhis2.org/browse/DHIS2-11689): NTI: async tracker import adds audit entry with createdby='system-process'**  
Components: _[API] Tracker_

**[DHIS2-11852](https://jira.dhis2.org/browse/DHIS2-11852): NTI: exception when removing attribute values**  
Components: _[API] Tracker_

**[DHIS2-11766](https://jira.dhis2.org/browse/DHIS2-11766): NTI: ASSIGN_VALUE program rules are evaluating old value when doing updates**  
Components: _[API] Tracker_

**[DHIS2-11868](https://jira.dhis2.org/browse/DHIS2-11868): NTI: import fails when optionSet type data elements have null value**  
Components: _[API] Tracker_

**[DHIS2-11223](https://jira.dhis2.org/browse/DHIS2-11223): Ownership validation and preheating in new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-11851](https://jira.dhis2.org/browse/DHIS2-11851): Lazy Init exception when checking Ownership when redis is used**  
Components: _[API] Tracker_

**[DHIS2-11752](https://jira.dhis2.org/browse/DHIS2-11752): Adhoc connections are created outside datasource**  
Components: _[API] Tracker_

**[DHIS2-11762](https://jira.dhis2.org/browse/DHIS2-11762): NTI: updates fail when attributes are not in the payload**  
Components: _[API] Tracker_

**[DHIS2-11758](https://jira.dhis2.org/browse/DHIS2-11758): Null pointer exception when assignedUser query param has empty value**  
Components: _[API] Tracker_

**[DHIS2-11803](https://jira.dhis2.org/browse/DHIS2-11803): Deduplication: tei changelog entry is added with incorrect attribute value**  
Components: _[API] Tracker_

**[DHIS2-11802](https://jira.dhis2.org/browse/DHIS2-11802): Deduplication: incorrect class name in relationship audit**  
Components: _[API] Tracker_

**[DHIS2-11753](https://jira.dhis2.org/browse/DHIS2-11753): Relationships not included in audits**  
Components: _[API] Tracker_

**[DHIS2-11764](https://jira.dhis2.org/browse/DHIS2-11764): NTI: storedBy is not set for notes**  
Components: _[API] Tracker_

**[DHIS2-11788](https://jira.dhis2.org/browse/DHIS2-11788): PSQL exception when adding tracked entity instance search history**  
Components: _[API] Tracker_

**[DHIS2-11767](https://jira.dhis2.org/browse/DHIS2-11767): Improve query performance when fetching tei across orgunits**  
Components: _[API] Tracker_

**[DHIS2-11780](https://jira.dhis2.org/browse/DHIS2-11780): Relationship not audited**  
Components: _[API] Tracker_

**[DHIS2-11738](https://jira.dhis2.org/browse/DHIS2-11738): [ Potential Duplicate ] - Remove contraints on user, add username info**  
Components: _[API] Tracker_

**[DHIS2-11577](https://jira.dhis2.org/browse/DHIS2-11577): Hard deletion of event/enrollment does not add audit entry**  
Components: _[API] Tracker_

**[DHIS2-11671](https://jira.dhis2.org/browse/DHIS2-11671): Tracker importer should support all date time formats**  
Components: _[API] Tracker_

**[DHIS2-11567](https://jira.dhis2.org/browse/DHIS2-11567): High memory allocation when posting teis with enrollments**  
Components: _[API] Tracker_

**[DHIS2-11532](https://jira.dhis2.org/browse/DHIS2-11532): [ PotentialDuplicate ] - [BE] Flag for potential duplicate at tei level [ old tracker ]**  
Components: _[API] Tracker_

**[DHIS2-11409](https://jira.dhis2.org/browse/DHIS2-11409): NPE in EnrollmentController when provided enrollments don't exist**  
Components: _[API] Tracker_

**[DHIS2-11405](https://jira.dhis2.org/browse/DHIS2-11405): Tracker Program Available to Unassigned Org Units and can be enrolled into them**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-11437](https://jira.dhis2.org/browse/DHIS2-11437): [ PotentialDuplicate ] - Not null for Pair of tracked entities**  
Components: _[API] Tracker_

**[DHIS2-11377](https://jira.dhis2.org/browse/DHIS2-11377): Ownership access denied when POST to api/trackedEntityInstances with enrollments and events in payload**  
Components: _[API] Tracker_

**[DHIS2-11495](https://jira.dhis2.org/browse/DHIS2-11495): Repeatable program stage check error**  
Components: _[API] Tracker_

**[DHIS2-11279](https://jira.dhis2.org/browse/DHIS2-11279): NPE in while using UserGroup in program notifications**  
Components: _[API] Tracker_

**[DHIS2-10764](https://jira.dhis2.org/browse/DHIS2-10764): Error when using lastUpdatedStartDate in get TEIs API**  
Components: _[API] Tracker_

**[DHIS2-11055](https://jira.dhis2.org/browse/DHIS2-11055): Failed to lazily initialize a collection DataElement.userGroupAccesses**  
Components: _[API] Tracker_

**[DHIS2-11376](https://jira.dhis2.org/browse/DHIS2-11376): api/trackedEntityInstances: events fails, but no error message is returned from API**  
Components: _[API] Tracker_

**[DHIS2-11375](https://jira.dhis2.org/browse/DHIS2-11375): Hard deletes performed when syncing tracked entity instances**  
Components: _[API] Tracker_

**[DHIS2-11225](https://jira.dhis2.org/browse/DHIS2-11225): Remove program field in event in new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-10600](https://jira.dhis2.org/browse/DHIS2-10600): Front page list takes a long time to load when there are many teis in org unit**  
Components: _[API] Tracker_

**[DHIS2-10601](https://jira.dhis2.org/browse/DHIS2-10601): TEI search by unique attribute takes long when user search scope is lower level org unit**  
Components: _[API] Tracker_

**[DHIS2-10603](https://jira.dhis2.org/browse/DHIS2-10603): Search takes long when max tei limit to return in search is set**  
Components: _[API] Tracker_

**[DHIS2-10678](https://jira.dhis2.org/browse/DHIS2-10678): Async import reports are sometimes unavailable**  
Components: _[API] Tracker_

**[DHIS2-10683](https://jira.dhis2.org/browse/DHIS2-10683): TEI import fails with null pointer exception on value type validation**  
Components: _[API] Tracker_

**[DHIS2-10714](https://jira.dhis2.org/browse/DHIS2-10714): Excessive postgres count query when requesting trackedEntityInstances**  
Components: _[API] Tracker_

**[DHIS2-10789](https://jira.dhis2.org/browse/DHIS2-10789): Remove validations from DefaultTrackerObjectsDeletionService**  
Components: _[API] Tracker_

**[DHIS2-10797](https://jira.dhis2.org/browse/DHIS2-10797): Fix remove null values for tracker attributes and data values**  
Components: _[API] Tracker_

**[DHIS2-10841](https://jira.dhis2.org/browse/DHIS2-10841): Endpoint /trackedEntityInstances returns error 500 if orgunit not included in the query**  
Components: _[API] Tracker_

**[DHIS2-10870](https://jira.dhis2.org/browse/DHIS2-10870): Search by unique attribute doesn't work when minAttributesRequiredToSearch > 1**  
Components: _[API] Tracker_

**[DHIS2-11073](https://jira.dhis2.org/browse/DHIS2-11073): Tracked entity instance query with event filters produces illegal SQL**  
Components: _[API] Tracker_

**[DHIS2-11197](https://jira.dhis2.org/browse/DHIS2-11197): New tracker importer does not create ownership records**  
Components: _[API] Tracker_

**[DHIS2-11121](https://jira.dhis2.org/browse/DHIS2-11121): Tracker async import only expect new entities**  
Components: _[API] Tracker_

**[DHIS2-10676](https://jira.dhis2.org/browse/DHIS2-10676): maxTeiLimit can be bypassed when query params are not provided**  
Components: _[API] Tracker_

**[DHIS2-10631](https://jira.dhis2.org/browse/DHIS2-10631): Optimize SQL query used in /tracker/trackedEntities**  
Components: _[API] Tracker_

**[DHIS2-10351](https://jira.dhis2.org/browse/DHIS2-10351): Endpoint for tracked entity instances returns one less entry than requested**  
Components: _[API] Tracker_

**[DHIS2-10660](https://jira.dhis2.org/browse/DHIS2-10660): Can't PUT Dashboard without overriding translations and sharing**  
Components: _[API] Translations_

**[DHIS2-6167](https://jira.dhis2.org/browse/DHIS2-6167): User changes leave fields "lastupdatedby" in table "users" as NULL**  
Components: _[API] User_

**[DHIS2-10818](https://jira.dhis2.org/browse/DHIS2-10818): Validation rules for boolean-type data elements not triggering**  
Components: _[API] Validation_

**[DHIS2-10859](https://jira.dhis2.org/browse/DHIS2-10859): App Management App self-update version comparison is incorrect**  
Components: _[App] App management_

**[DHIS2-10630](https://jira.dhis2.org/browse/DHIS2-10630): No translations in App Management App**  
Components: _[App] App management_

**[DHIS2-10791](https://jira.dhis2.org/browse/DHIS2-10791): Cache cleaner selections not working**  
Components: _[App] Cache cleaner_

**[DHIS2-10632](https://jira.dhis2.org/browse/DHIS2-10632): No translations in Cache Cleaner App**  
Components: _[App] Cache cleaner_

**[DHIS2-12047](https://jira.dhis2.org/browse/DHIS2-12047): WorkingLists not loading event data**  
Components: _[App] Capture_

**[DHIS2-11850](https://jira.dhis2.org/browse/DHIS2-11850): Capture Tracked Entity fails to load**  
Components: _[App] Capture_

**[DHIS2-11795](https://jira.dhis2.org/browse/DHIS2-11795): Non-searchable attributes are displayed in capture app when listing data from all org units**  
Components: _[App] Capture_

**[DHIS2-11838](https://jira.dhis2.org/browse/DHIS2-11838): Can not capture polygon**  
Components: _[App] Capture_

**[DHIS2-11745](https://jira.dhis2.org/browse/DHIS2-11745): New events are not shown under the stages events lists**  
Components: _[App] Capture_

**[DHIS2-11733](https://jira.dhis2.org/browse/DHIS2-11733): Application crash error when trying to open the events from the stage lists**  
Components: _[App] Capture_

**[DHIS2-11783](https://jira.dhis2.org/browse/DHIS2-11783): Widgets are not shown correctly in the enrollment dashboard when using the URL to the first time to the capture app**  
Components: _[App] Capture_

**[DHIS2-11669](https://jira.dhis2.org/browse/DHIS2-11669): Saving validation is not performed correctly  in new enrollment event**  
Components: _[App] Capture_

**[DHIS2-11746](https://jira.dhis2.org/browse/DHIS2-11746):  New events are shown as "Completed" status when events added with the option "Save without completing"**  
Components: _[App] Capture_

**[DHIS2-11695](https://jira.dhis2.org/browse/DHIS2-11695): Overdue calculation is incorrect in stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-11694](https://jira.dhis2.org/browse/DHIS2-11694): Header is shown twice, no padding left in new event enrollment Widget**  
Components: _[App] Capture_

**[DHIS2-11549](https://jira.dhis2.org/browse/DHIS2-11549): 500 error when filtering the events**  
Components: _[App] Capture_

**[DHIS2-10330](https://jira.dhis2.org/browse/DHIS2-10330): Capture App viewEvent URL link for category options**  
Components: _[App] Capture_

**[DHIS2-11067](https://jira.dhis2.org/browse/DHIS2-11067): Fix flaky cypress tests in LockedSelector.feature**  
Components: _[App] Capture_

**[DHIS2-8998](https://jira.dhis2.org/browse/DHIS2-8998): Untranslatable strings in Capture app**  
Components: _[App] Capture_

**[DHIS2-10206](https://jira.dhis2.org/browse/DHIS2-10206): Message on leaving page without saving is not working on registration page**  
Components: _[App] Capture_

**[DHIS2-10394](https://jira.dhis2.org/browse/DHIS2-10394): Program rule action: ERROR_ON_COMPLETE is executed regardless status**  
Components: _[App] Capture_

**[DHIS2-10715](https://jira.dhis2.org/browse/DHIS2-10715): Slow TEI listing due to attribute order**  
Components: _[App] Capture_

**[DHIS2-10716](https://jira.dhis2.org/browse/DHIS2-10716): Display value directly if option not found in the working lists**  
Components: _[App] Capture_

**[DHIS2-10723](https://jira.dhis2.org/browse/DHIS2-10723): Capturing polygon fails**  
Components: _[App] Capture_

**[DHIS2-10738](https://jira.dhis2.org/browse/DHIS2-10738): After searching multiple times capture app crashes**  
Components: _[App] Capture_

**[DHIS2-10739](https://jira.dhis2.org/browse/DHIS2-10739): Max TEI count message is not handled by the capture app**  
Components: _[App] Capture_

**[DHIS2-10765](https://jira.dhis2.org/browse/DHIS2-10765): Form names not showing in new Capture app**  
Components: _[App] Capture_

**[DHIS2-10711](https://jira.dhis2.org/browse/DHIS2-10711): Duplicate calls to /generate when filling out enrolment form**  
Components: _[App] Capture_

**[DHIS2-10645](https://jira.dhis2.org/browse/DHIS2-10645): Change icon of the capture-app**  
Components: _[App] Capture_

**[DHIS2-10712](https://jira.dhis2.org/browse/DHIS2-10712): Excessive /count queries when registering a TEI**  
Components: _[App] Capture_

**[DHIS2-11023](https://jira.dhis2.org/browse/DHIS2-11023): The programStagesInstances shouldn't exist in resources**  
Components: _[App] Core resource_

**[DHIS2-12020](https://jira.dhis2.org/browse/DHIS2-12020): User's chosen dashboard is not remembered**  
Components: _[App] Dashboard_

**[DHIS2-11908](https://jira.dhis2.org/browse/DHIS2-11908): Maps with EE layers don't cache the EE layer requests**  
Components: _[App] Dashboard_

**[DHIS2-11739](https://jira.dhis2.org/browse/DHIS2-11739): Error when saving a dashboard with a type APP item**  
Components: _[App] Dashboard_

**[DHIS2-11930](https://jira.dhis2.org/browse/DHIS2-11930): Bump platform dependency to fix routing**  
Components: _[App] Dashboard_

**[DHIS2-11889](https://jira.dhis2.org/browse/DHIS2-11889): Map items that can't be viewed as table or chart (lack thematic views) is broken**  
Components: _[App] Dashboard_

**[DHIS2-11685](https://jira.dhis2.org/browse/DHIS2-11685): Top section missing bottom shadow**  
Components: _[App] Dashboard_

**[DHIS2-11647](https://jira.dhis2.org/browse/DHIS2-11647): Show more/fewer dashboards tooltip not visible when bar expanded**  
Components: _[App] Dashboard_

**[DHIS2-11773](https://jira.dhis2.org/browse/DHIS2-11773): Small screen (mobile portrait): double menu or non-closing menu when using the More menu**  
Components: _[App] Dashboard_

**[DHIS2-11734](https://jira.dhis2.org/browse/DHIS2-11734): It should be possible to remove dashboard from cache while offline**  
Components: _[App] Dashboard_

**[DHIS2-11701](https://jira.dhis2.org/browse/DHIS2-11701): Remove "discard changes" check on intended exit**  
Components: _[App] Dashboard_

**[DHIS2-11699](https://jira.dhis2.org/browse/DHIS2-11699): Interpretations panel shows error when there are interpretations**  
Components: _[App] Dashboard_

**[DHIS2-11810](https://jira.dhis2.org/browse/DHIS2-11810): Single value charts with no data display 'undefined'**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11724](https://jira.dhis2.org/browse/DHIS2-11724): Column sorting causes a table clipping issue**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11016](https://jira.dhis2.org/browse/DHIS2-11016): Wrong ou level name shown on dashboard**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11017](https://jira.dhis2.org/browse/DHIS2-11017): Filter dialog in dashboard needs better styling**  
Components: _[App] Dashboard_

**[DHIS2-11703](https://jira.dhis2.org/browse/DHIS2-11703): Layout columns should be a number greater than zero**  
Components: _[App] Dashboard_

**[DHIS2-11778](https://jira.dhis2.org/browse/DHIS2-11778): During print preview, other action buttons shouldn't be available**  
Components: _[App] Dashboard_

**[DHIS2-11750](https://jira.dhis2.org/browse/DHIS2-11750): Item selector covering the input field in edit mode**  
Components: _[App] Dashboard_

**[DHIS2-11725](https://jira.dhis2.org/browse/DHIS2-11725): Series key bullets won't print**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11033](https://jira.dhis2.org/browse/DHIS2-11033): Create dashboard button position slightly off**  
Components: _[App] Dashboard_

**[DHIS2-11636](https://jira.dhis2.org/browse/DHIS2-11636): Legend key for pivot table is not aligned correctly  in print preview page**  
Components: _[App] Dashboard_

**[DHIS2-11031](https://jira.dhis2.org/browse/DHIS2-11031): Show more dashboards broken on "not found" page**  
Components: _[App] Dashboard_

**[DHIS2-11303](https://jira.dhis2.org/browse/DHIS2-11303): Dashboard show empty chart or spinner when analytics request fails**  
Components: _[App] Dashboard_

**[DHIS2-11304](https://jira.dhis2.org/browse/DHIS2-11304): Dashboard - wrong font in table when viewing map as table**  
Components: _[App] Dashboard_

**[DHIS2-11054](https://jira.dhis2.org/browse/DHIS2-11054): Dashboard: adding a dashboard filter results in no Map being shown**  
Components: _[App] Dashboard_

**[DHIS2-11324](https://jira.dhis2.org/browse/DHIS2-11324): Dashboard app should handle items with no type**  
Components: _[App] Dashboard_

**[DHIS2-10795](https://jira.dhis2.org/browse/DHIS2-10795): Dashboard bar can't resize by dragging if it has been expanded to full height**  
Components: _[App] Dashboard_

**[DHIS2-11097](https://jira.dhis2.org/browse/DHIS2-11097): Not possible to resize Dashboard controlbar to 1 row**  
Components: _[App] Dashboard_

**[DHIS2-11089](https://jira.dhis2.org/browse/DHIS2-11089): Saving a starred dashboard removes the star**  
Components: _[App] Dashboard_

**[DHIS2-11302](https://jira.dhis2.org/browse/DHIS2-11302): Dashboard map shows map title when adding dashboard filters**  
Components: _[App] Dashboard_

**[DHIS2-9202](https://jira.dhis2.org/browse/DHIS2-9202): Help Page Link does not work in all apps**  
Components: _[App] Dashboard_, _[App] Settings_

**[DHIS2-10787](https://jira.dhis2.org/browse/DHIS2-10787): Maps, EV, ER do not resize to fill screen when entering fullscreen on dashboard**  
Components: _[App] Dashboard_

**[DHIS2-11009](https://jira.dhis2.org/browse/DHIS2-11009): Dashboard namespace missing from dataStore**  
Components: _[App] Dashboard_

**[DHIS2-11113](https://jira.dhis2.org/browse/DHIS2-11113): Visualisations of CERTAIN_TYPES are not supported on dashboards**  
Components: _[App] Dashboard_

**[DHIS2-7764](https://jira.dhis2.org/browse/DHIS2-7764): [analytics apps] Sharing dialog does not paginate results**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-7018](https://jira.dhis2.org/browse/DHIS2-7018): Strange menu display**  
**[DHIS2-11560](https://jira.dhis2.org/browse/DHIS2-11560): Show analytics & resource tables tasks progress for all users**  
Components: _[App] Data administration_

**[DHIS2-10985](https://jira.dhis2.org/browse/DHIS2-10985): Data integrity check UI indicates errors when none exists**  
Components: _[App] Data administration_

**[DHIS2-11241](https://jira.dhis2.org/browse/DHIS2-11241): Lack of translation strings**  
Components: _[App] Data administration_

**[DHIS2-10868](https://jira.dhis2.org/browse/DHIS2-10868): Batch Deletion button on Lock Exceptions generates error**  
Components: _[App] Data administration_

**[DHIS2-10888](https://jira.dhis2.org/browse/DHIS2-10888): Improve layout in maintenance section**  
Components: _[App] Data administration_

**[DHIS2-10899](https://jira.dhis2.org/browse/DHIS2-10899): "Add new" dialog doesn't close after saving the lock exception.**  
Components: _[App] Data administration_

**[DHIS2-10869](https://jira.dhis2.org/browse/DHIS2-10869): Internal server error when deleting single Lock exception**  
Components: _[App] Data administration_

**[DHIS2-7726](https://jira.dhis2.org/browse/DHIS2-7726): Adjust analytics and resource tables section to work with revised API response payload**  
Components: _[App] Data administration_

**[DHIS2-11881](https://jira.dhis2.org/browse/DHIS2-11881): Show message when user does not have data approval authorities**  
Components: _[App] Data approval_

**[DHIS2-11884](https://jira.dhis2.org/browse/DHIS2-11884): Persist selected data set in URL**  
Components: _[App] Data approval_

**[DHIS2-11840](https://jira.dhis2.org/browse/DHIS2-11840): Max data element column padding/width for data set report**  
Components: _[App] Data approval_

**[DHIS2-11869](https://jira.dhis2.org/browse/DHIS2-11869): Periods should be displayed in reverse chronological order**  
Components: _[App] Data approval_

**[DHIS2-11905](https://jira.dhis2.org/browse/DHIS2-11905): Approve button should be disabled when data set has been approved**  
Components: _[App] Data approval_

**[DHIS2-11882](https://jira.dhis2.org/browse/DHIS2-11882): Handle approval states correctly**  
Components: _[App] Data approval_

**[DHIS2-11883](https://jira.dhis2.org/browse/DHIS2-11883): Add retry button when dataApprovals returns a 500**  
Components: _[App] Data approval_

**[DHIS2-11880](https://jira.dhis2.org/browse/DHIS2-11880): Options for period-type Daily should respect system settings**  
Components: _[App] Data approval_

**[DHIS2-11845](https://jira.dhis2.org/browse/DHIS2-11845): Approval date says "Invalid date" when dataset is approved on higher level**  
Components: _[App] Data approval_

**[DHIS2-11678](https://jira.dhis2.org/browse/DHIS2-11678): Data workspace table: only occupy horizontal space needed.**  
Components: _[App] Data approval_

**[DHIS2-11585](https://jira.dhis2.org/browse/DHIS2-11585): Fix yearly period type**  
**[DHIS2-11646](https://jira.dhis2.org/browse/DHIS2-11646): Opening period select throws error when starting blank**  
Components: _[App] Data approval_

**[DHIS2-11660](https://jira.dhis2.org/browse/DHIS2-11660): Fix potential memory leak in confirmation dialog**  
Components: _[App] Data approval_

**[DHIS2-11661](https://jira.dhis2.org/browse/DHIS2-11661): Fix potential memory leak in org-unit-tree**  
**[DHIS2-11666](https://jira.dhis2.org/browse/DHIS2-11666): App doesn't take server time offset into account when displaying approval time in tooltips**  
Components: _[App] Data approval_

**[DHIS2-11673](https://jira.dhis2.org/browse/DHIS2-11673): Reduce context selector height**  
Components: _[App] Data approval_

**[DHIS2-11674](https://jira.dhis2.org/browse/DHIS2-11674): Clear selections button size**  
Components: _[App] Data approval_

**[DHIS2-11675](https://jira.dhis2.org/browse/DHIS2-11675): Status tag text cut off**  
**[DHIS2-11676](https://jira.dhis2.org/browse/DHIS2-11676): Scrollable tab < > buttons are displayed when not needed**  
Components: _[App] Data approval_

**[DHIS2-11677](https://jira.dhis2.org/browse/DHIS2-11677): Empty data sets not displaying empty state**  
**[DHIS2-11680](https://jira.dhis2.org/browse/DHIS2-11680): Data workspace title styles**  
Components: _[App] Data approval_

**[DHIS2-11681](https://jira.dhis2.org/browse/DHIS2-11681): Custom forms warning: adjust wording**  
Components: _[App] Data approval_

**[DHIS2-11682](https://jira.dhis2.org/browse/DHIS2-11682): Confirmation dialog, adjust wording**  
Components: _[App] Data approval_

**[DHIS2-7164](https://jira.dhis2.org/browse/DHIS2-7164): Indicators are displayed twice in data entry when the section contains multiple category combos.**  
Components: _[App] Data entry_

**[DHIS2-10653](https://jira.dhis2.org/browse/DHIS2-10653): Remove the word "asdas" in Multi organisation unit forms**  
Components: _[App] Data entry_

**[DHIS2-11230](https://jira.dhis2.org/browse/DHIS2-11230): Incorrect documentation URLs**  
Components: _[App] Data quality_

**[DHIS2-11270](https://jira.dhis2.org/browse/DHIS2-11270): Error message for errors encountered during form submission is always 'undefined'**  
Components: _[App] Data quality_

**[DHIS2-11269](https://jira.dhis2.org/browse/DHIS2-11269): Incorrect rendering of validation details**  
Components: _[App] Data quality_

**[DHIS2-10731](https://jira.dhis2.org/browse/DHIS2-10731): Scrollable options apear behind multi-select filter field**  
Components: _[App] Data quality_

**[DHIS2-10735](https://jira.dhis2.org/browse/DHIS2-10735): Wrong query param and default value for ordering in outlier detection**  
Components: _[App] Data quality_

**[DHIS2-10771](https://jira.dhis2.org/browse/DHIS2-10771): Cannot deselect org unit in Validation rule analysis org unit tree**  
Components: _[App] Data quality_

**[DHIS2-10813](https://jira.dhis2.org/browse/DHIS2-10813): The End date doesn't change on Validation Rule Analysis and Outlier detection sections of Data Quality App**  
Components: _[App] Data quality_

**[DHIS2-10794](https://jira.dhis2.org/browse/DHIS2-10794): Data store app does not support new metadata schema**  
Components: _[App] Data store_

**[DHIS2-11820](https://jira.dhis2.org/browse/DHIS2-11820): ID shown in the title instead of name for national level OU**  
Components: _[App] Data visualizer_

**[DHIS2-9789](https://jira.dhis2.org/browse/DHIS2-9789): Analytics data value set dynamic filters set as dimensions in download**  
Components: _[App] Data visualizer_

**[DHIS2-11835](https://jira.dhis2.org/browse/DHIS2-11835): Row header alignment is not correct when choosing the option "Fix row headers to left of table"**  
Components: _[App] Data visualizer_

**[DHIS2-10171](https://jira.dhis2.org/browse/DHIS2-10171): Mismatching org unit level and selected org unit should display a custom error**  
Components: _[App] Data visualizer_

**[DHIS2-11411](https://jira.dhis2.org/browse/DHIS2-11411): Horizontal axix title and labels not working for Year over Year chart type**  
Components: _[App] Data visualizer_

**[DHIS2-11650](https://jira.dhis2.org/browse/DHIS2-11650): Getting error when trying to save the visualization after changing the axis title to "None"**  
Components: _[App] Data visualizer_

**[DHIS2-10990](https://jira.dhis2.org/browse/DHIS2-10990): Sharing is reverted when visualisation is saved**  
Components: _[App] Data visualizer_

**[DHIS2-11001](https://jira.dhis2.org/browse/DHIS2-11001): Axis names for vertical types**  
Components: _[App] Data visualizer_

**[DHIS2-10945](https://jira.dhis2.org/browse/DHIS2-10945): Error when "All types" data type is chosen**  
Components: _[App] Data visualizer_

**[DHIS2-11065](https://jira.dhis2.org/browse/DHIS2-11065): "Most viewed" show the same result for all users**  
Components: _[App] Data visualizer_

**[DHIS2-9022](https://jira.dhis2.org/browse/DHIS2-9022): Event reports app sometimes doesn't load (formatDate error)**  
Components: _[App] Event reports_

**[DHIS2-9641](https://jira.dhis2.org/browse/DHIS2-9641): Custom date labels are not respected in event reports downloads**  
Components: _[App] Event reports_

**[DHIS2-10066](https://jira.dhis2.org/browse/DHIS2-10066): Selecting an org unit data element in Event Reports line list Enrollment view generates blank output**  
Components: _[App] Event reports_

**[DHIS2-10228](https://jira.dhis2.org/browse/DHIS2-10228): Event Reports - Enrollment line list is always blank when a Coordinates data element is selected**  
Components: _[App] Event reports_

**[DHIS2-11291](https://jira.dhis2.org/browse/DHIS2-11291): Org unit type data element shows the UID instead of name in Event reports**  
Components: _[App] Event reports_

**[DHIS2-11618](https://jira.dhis2.org/browse/DHIS2-11618): Lack of navigation item text wrapping**  
Components: _[App] Import-export_

**[DHIS2-11604](https://jira.dhis2.org/browse/DHIS2-11604): Incomplete translations**  
Components: _[App] Import-export_

**[DHIS2-11355](https://jira.dhis2.org/browse/DHIS2-11355): Being unable to comple data set using completeDataSetRegistration Web API orgUnitIdScheme=code**  
Components: _[App] Import-export_

**[DHIS2-9712](https://jira.dhis2.org/browse/DHIS2-9712): User avatar display U instead of correct initials**  
Components: _[App] Interpretations_

**[DHIS2-10635](https://jira.dhis2.org/browse/DHIS2-10635): No translations in Scheduler App**  
Components: _[App] Job scheduler_

**[DHIS2-7230](https://jira.dhis2.org/browse/DHIS2-7230): Custom attribute for Program Indicator doesn't work**  
Components: _[App] Maintenance_

**[DHIS2-11665](https://jira.dhis2.org/browse/DHIS2-11665): Validation passes for variables that don't exist**  
Components: _[App] Maintenance_

**[DHIS2-11227](https://jira.dhis2.org/browse/DHIS2-11227): Not possible to remove color from org unit group**  
Components: _[App] Maintenance_

**[DHIS2-10464](https://jira.dhis2.org/browse/DHIS2-10464): Sharing section is missing in program access page**  
Components: _[App] Maintenance_

**[DHIS2-10998](https://jira.dhis2.org/browse/DHIS2-10998): createdBy undefined for categories in Maintenance app**  
Components: _[App] Maintenance_

**[DHIS2-9957](https://jira.dhis2.org/browse/DHIS2-9957): Remove relocate and swap longitude/latitude options**  
Components: _[App] Maps_

**[DHIS2-11749](https://jira.dhis2.org/browse/DHIS2-11749): Period for saved EE layers is not showing**  
Components: _[App] Maps_

**[DHIS2-11038](https://jira.dhis2.org/browse/DHIS2-11038): Avoid dialog scroll in layer dialogs**  
Components: _[App] Maps_

**[DHIS2-10819](https://jira.dhis2.org/browse/DHIS2-10819): Upgrade WorldPop poulation dataset**  
Components: _[App] Maps_

**[DHIS2-10820](https://jira.dhis2.org/browse/DHIS2-10820): Exclude long options sets from "style by data items"**  
Components: _[App] Maps_

**[DHIS2-11335](https://jira.dhis2.org/browse/DHIS2-11335): Fixed periods does not work for non-default locales**  
Components: _[App] Maps_

**[DHIS2-11433](https://jira.dhis2.org/browse/DHIS2-11433): Org unit data is not showing**  
Components: _[App] Maps_

**[DHIS2-10684](https://jira.dhis2.org/browse/DHIS2-10684): Maps don't load on the dashboard**  
Components: _[App] Maps_

**[DHIS2-10721](https://jira.dhis2.org/browse/DHIS2-10721): App crash if changing program after changing coordinate field for event layers**  
Components: _[App] Maps_

**[DHIS2-10736](https://jira.dhis2.org/browse/DHIS2-10736): Event layer: Not possible to style by "mode of discharge"**  
Components: _[App] Maps_

**[DHIS2-10807](https://jira.dhis2.org/browse/DHIS2-10807): Maps only receiving 50 events from the api**  
Components: _[App] Maps_

**[DHIS2-10821](https://jira.dhis2.org/browse/DHIS2-10821): Make legend set required if "predefined"**  
Components: _[App] Maps_

**[DHIS2-10846](https://jira.dhis2.org/browse/DHIS2-10846): Headerbar and File Menu translations don't load**  
Components: _[App] Maps_

**[DHIS2-10867](https://jira.dhis2.org/browse/DHIS2-10867): Don't request event count when styling by data item**  
Components: _[App] Maps_

**[DHIS2-10872](https://jira.dhis2.org/browse/DHIS2-10872): Color is not shown in data table for thematic layer**  
Components: _[App] Maps_

**[DHIS2-10873](https://jira.dhis2.org/browse/DHIS2-10873): Style issues after upgrading from Material UI to DHIS2 UI**  
Components: _[App] Maps_

**[DHIS2-11629](https://jira.dhis2.org/browse/DHIS2-11629): Message types not translated**  
Components: _[App] Messaging_

**[DHIS2-10576](https://jira.dhis2.org/browse/DHIS2-10576): No translations in Messaging App**  
Components: _[App] Messaging_

**[DHIS2-8869](https://jira.dhis2.org/browse/DHIS2-8869): Error "???" code when show result of Data Set report that has custom form**  
Components: _[App] Reports_

**[DHIS2-10609](https://jira.dhis2.org/browse/DHIS2-10609): Reports app is loading all visualizations from API**  
Components: _[App] Reports_

**[DHIS2-10783](https://jira.dhis2.org/browse/DHIS2-10783): No alert shown to user if custom logo upload succeeds or fails**  
Components: _[App] Settings_

**[DHIS2-11004](https://jira.dhis2.org/browse/DHIS2-11004): Unable to update event/input data in program using category combo (attribute)**  
Components: _[App] Tracker capture_

**[DHIS2-11503](https://jira.dhis2.org/browse/DHIS2-11503): [ PotentialDuplicate ] - Flag potential duplicate**  
Components: _[App] Tracker capture_

**[DHIS2-11403](https://jira.dhis2.org/browse/DHIS2-11403): Assignment program rule crashes when assigning numeric value**  
Components: _[App] Tracker capture_

**[DHIS2-10550](https://jira.dhis2.org/browse/DHIS2-10550): Tracker Upcoming and Overdue Events reports missing pager**  
Components: _[App] Tracker capture_

**[DHIS2-8475](https://jira.dhis2.org/browse/DHIS2-8475): Automatically generated ID using SEQUENTIAL incrementing by 2**  
Components: _[App] Tracker capture_

**[DHIS2-5835](https://jira.dhis2.org/browse/DHIS2-5835): Percentage data values do not accept floats**  
Components: _[App] Tracker capture_

**[DHIS2-10996](https://jira.dhis2.org/browse/DHIS2-10996): Program rules: Leading zeros removed from text**  
Components: _[App] Tracker capture_

**[DHIS2-8660](https://jira.dhis2.org/browse/DHIS2-8660): Non-translatable fields in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-10081](https://jira.dhis2.org/browse/DHIS2-10081): Can't delete polygon in TEI profile in Tracker capture**  
Components: _[App] Tracker capture_

**[DHIS2-10248](https://jira.dhis2.org/browse/DHIS2-10248): Tracker Capture - Completing Enrollment results in events disappearing from Timeline Data Entry**  
Components: _[App] Tracker capture_

**[DHIS2-10442](https://jira.dhis2.org/browse/DHIS2-10442): Tracker capture app doesn't load enrollment imported by the new tracker importer**  
Components: _[App] Tracker capture_

**[DHIS2-10675](https://jira.dhis2.org/browse/DHIS2-10675): UI Translation doesn't work**  
Components: _[App] Tracker capture_

**[DHIS2-10719](https://jira.dhis2.org/browse/DHIS2-10719): Tracker capture app doesn't display full TEI information when rerouting from capture**  
Components: _[App] Tracker capture_

**[DHIS2-10804](https://jira.dhis2.org/browse/DHIS2-10804): Program icons are missing**  
Components: _[App] Tracker capture_

**[DHIS2-10763](https://jira.dhis2.org/browse/DHIS2-10763): Add visualization property labels in Translations app**  
Components: _[App] Translations_

**[DHIS2-11751](https://jira.dhis2.org/browse/DHIS2-11751): Error when loading usage statistics for report tables event type**  
Components: _[App] Usage analytics_

**[DHIS2-10636](https://jira.dhis2.org/browse/DHIS2-10636): No translations in Usage Analytics App**  
Components: _[App] Usage analytics_

**[DHIS2-10844](https://jira.dhis2.org/browse/DHIS2-10844): Translations missing in Users app**  
Components: _[App] User_

**[DHIS2-11528](https://jira.dhis2.org/browse/DHIS2-11528): Users with spaces in their username cannot be edited**  
Components: _[App] User_

**[DHIS2-10717](https://jira.dhis2.org/browse/DHIS2-10717): Expiry date is set automatically when updating a user**  
Components: _[App] User_

**[DHIS2-9167](https://jira.dhis2.org/browse/DHIS2-9167): User avatar icon rendered outside headerbar**  
Components: _[App] User Profile_

**[DHIS2-8874](https://jira.dhis2.org/browse/DHIS2-8874): Analytics statistics don't echo continuous analytics**  
Components: _[App] User Profile_

**[DHIS2-7700](https://jira.dhis2.org/browse/DHIS2-7700): Fileresource Cleanup Job doesn't delete correct/any files**  
Components: 


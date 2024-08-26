# Patch 2.41.1 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-17686](https://dhis2.atlassian.net/browse/DHIS2-17686): Data Integrity Check - find users which have a capture OU that is not in their search OU**  
Components: _[API] Data Integrity_

**[DHIS2-17734](https://dhis2.atlassian.net/browse/DHIS2-17734): Integrity check for users with no roles**  
Components: _[API] Data Integrity_

**[DHIS2-17737](https://dhis2.atlassian.net/browse/DHIS2-17737): Integrity check for user role with no authorities/users**  
Components: _[API] Data Integrity_

**[DHIS2-16267](https://dhis2.atlassian.net/browse/DHIS2-16267): Add system setting to allow pop-up message on login page**  
Components: _[API] System configuration_, _[App] Login_

**[DHIS2-17276](https://dhis2.atlassian.net/browse/DHIS2-17276): Add metadata sharing setting option to data exchanges**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-16270](https://dhis2.atlassian.net/browse/DHIS2-16270): Standardized, updated dimension chip design**  
Components: _[App] Analytics_, _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-17770](https://dhis2.atlassian.net/browse/DHIS2-17770): Org unit contextualization in self-contained widgets**  
Components: _[App] Capture_

**[DHIS2-17575](https://dhis2.atlassian.net/browse/DHIS2-17575): Disable new event buttons when no data write access to programstage**  
Components: _[App] Capture_

**[DHIS2-17068](https://dhis2.atlassian.net/browse/DHIS2-17068): Related stages: Check if stage is eligible**  
Components: _[App] Capture_

**[DHIS2-17101](https://dhis2.atlassian.net/browse/DHIS2-17101): Related stages: Consider "Prevent adding events to stage” program rule**  
Components: _[App] Capture_

**[DHIS2-17655](https://dhis2.atlassian.net/browse/DHIS2-17655): [Related stages] Two event workspace**  
Components: _[App] Capture_

**[DHIS2-17591](https://dhis2.atlassian.net/browse/DHIS2-17591): [Frontend] Support plugins in event programs**  
Components: _[App] Capture_

**[DHIS2-17607](https://dhis2.atlassian.net/browse/DHIS2-17607): [Frontend] Support plugins in program stages**  
Components: _[App] Capture_

**[DHIS2-17726](https://dhis2.atlassian.net/browse/DHIS2-17726): [Frontend] Support plugins in Profile Widget**  
Components: _[App] Capture_

**[DHIS2-16125](https://dhis2.atlassian.net/browse/DHIS2-16125): Stages and events Widget: Hide program stage under certain circumstances**  
Components: _[App] Capture_

**[DHIS2-16293](https://dhis2.atlassian.net/browse/DHIS2-16293): Add category combination selection for new event (event programs)**  
Components: _[App] Capture_

**[DHIS2-16294](https://dhis2.atlassian.net/browse/DHIS2-16294): Add category combination selection for edit event (event programs)**  
Components: _[App] Capture_

**[DHIS2-15367](https://dhis2.atlassian.net/browse/DHIS2-15367): Push Analytics**  
Components: _[App] Dashboard_

**[DHIS2-15914](https://dhis2.atlassian.net/browse/DHIS2-15914): Render newlines properly in data visualizer right-side panel**  
Components: _[App] Data visualizer_

**[DHIS2-13724](https://dhis2.atlassian.net/browse/DHIS2-13724): Option for skip analytics for program stage data element in maintenance UI**  
Components: _[App] Maintenance_

**[DHIS2-16111](https://dhis2.atlassian.net/browse/DHIS2-16111): Allow FeatureCollection layers to be styled**  
Components: _[App] Maps_

**[DHIS2-16106](https://dhis2.atlassian.net/browse/DHIS2-16106): Support date ranges and period reducers**  
Components: _[App] Maps_

**[DHIS2-16102](https://dhis2.atlassian.net/browse/DHIS2-16102): New ERA5 precipitation layer**  
Components: _[App] Maps_

**[DHIS2-16101](https://dhis2.atlassian.net/browse/DHIS2-16101): New ERA5 temperature layer**  
Components: _[App] Maps_

## Bugs

**[DHIS2-16762](https://dhis2.atlassian.net/browse/DHIS2-16762): Data Visualizer with fixed period "Weekly (Start Sunday)" not showing correct label**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-16265](https://dhis2.atlassian.net/browse/DHIS2-16265): Requested order of periods not always respected**  
Components: _[API] Analytics_

**[DHIS2-12003](https://dhis2.atlassian.net/browse/DHIS2-12003): GET maps/data.png fails**  
Components: _[API] Analytics_

**[DHIS2-17539](https://dhis2.atlassian.net/browse/DHIS2-17539): Analytics TE query API - 500 error for invalid Period**  
Components: _[API] Analytics_

**[DHIS2-13322](https://dhis2.atlassian.net/browse/DHIS2-13322): Issues with enrollment coordinate support for event analytics**  
Components: _[API] Analytics_

**[DHIS2-16717](https://dhis2.atlassian.net/browse/DHIS2-16717): Line Listing hh:mm time format ambiguous**  
Components: _[API] Analytics_

**[DHIS2-16349](https://dhis2.atlassian.net/browse/DHIS2-16349): Failing enrollment analytics queries on programs with cat combos for non-super users**  
Components: _[API] Analytics_, _[App] Event reports_, _[App] Line Listing_

**[DHIS2-17258](https://dhis2.atlassian.net/browse/DHIS2-17258): Analytics TE query API - Multiple option set in filter not working**  
Components: _[API] Analytics_

**[DHIS2-16855](https://dhis2.atlassian.net/browse/DHIS2-16855): Expression Dim. Items API fails for number with large decimal digits**  
Components: _[API] Analytics_

**[DHIS2-17259](https://dhis2.atlassian.net/browse/DHIS2-17259): Analytics TE query API - Option set sorting fails with 500 error**  
Components: _[API] Analytics_

**[DHIS2-16235](https://dhis2.atlassian.net/browse/DHIS2-16235): Bad SQL syntax exception in /analytics/Event/aggregate**  
Components: _[API] Analytics_

**[DHIS2-15194](https://dhis2.atlassian.net/browse/DHIS2-15194): Tracked Entity Attribute text in Data Visualizer fragmented by group separators**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-17149](https://dhis2.atlassian.net/browse/DHIS2-17149): Analytics enrollments query API using OR instead of AND**  
Components: _[API] Analytics_

**[DHIS2-17299](https://dhis2.atlassian.net/browse/DHIS2-17299): Analytics date/time response headers are not consistent with DB columns**  
Components: _[API] Analytics_

**[DHIS2-15892](https://dhis2.atlassian.net/browse/DHIS2-15892): Option “limit minimum/maximum values” doesn't work with "reporting rate" for data set**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-15978](https://dhis2.atlassian.net/browse/DHIS2-15978): PUT in /maps API does not return response body**  
Components: _[API] Analytics_

**[DHIS2-17231](https://dhis2.atlassian.net/browse/DHIS2-17231): Analytics events query API: 500 error when dimension is not present in the query**  
Components: _[API] Analytics_

**[DHIS2-17146](https://dhis2.atlassian.net/browse/DHIS2-17146): Analytics TE query API - returning OU code instead of name**  
Components: _[API] Analytics_

**[DHIS2-17148](https://dhis2.atlassian.net/browse/DHIS2-17148): Analytics enrollments query API returning syntax error**  
Components: _[API] Analytics_

**[DHIS2-17144](https://dhis2.atlassian.net/browse/DHIS2-17144): Analytics enrollments query API returning syntax error**  
Components: _[API] Analytics_

**[DHIS2-17139](https://dhis2.atlassian.net/browse/DHIS2-17139): SQL error in enrollment request when using E2E - Coordinate and E2E - Organisation Unit**  
Components: _[API] Analytics_

**[DHIS2-17181](https://dhis2.atlassian.net/browse/DHIS2-17181): Analytics outliers: table export seems slower than expected**  
Components: _[API] Analytics_

**[DHIS2-17103](https://dhis2.atlassian.net/browse/DHIS2-17103): Analytics enrollment endpoint: remove the use of default period for empty enrollment/incident date**  
Components: _[API] Analytics_

**[DHIS2-17197](https://dhis2.atlassian.net/browse/DHIS2-17197): Cannot update an app when using cloud store minio**  
Components: _[API] App management_

**[DHIS2-16887](https://dhis2.atlassian.net/browse/DHIS2-16887): Double-Clicking Input Fields in Data Entry Throw Exception**  
Components: _[API] Data Entry_

**[DHIS2-17186](https://dhis2.atlassian.net/browse/DHIS2-17186): idSchema inconsistencies for dataValueSet endpoint**  
Components: _[API] Data value set_

**[DHIS2-16408](https://dhis2.atlassian.net/browse/DHIS2-16408): A job without a schedule can be enabled**  
Components: _[API] Job scheduler_

**[DHIS2-17798](https://dhis2.atlassian.net/browse/DHIS2-17798): API PATCH request cannot add category options to categories**  
Components: _[API] Metadata import-export_, _[API] Metadata model_, _[API] Other_

**[DHIS2-17337](https://dhis2.atlassian.net/browse/DHIS2-17337): Organisation unit API: compound filters broken**  
Components: _[API] Metadata model_

**[DHIS2-17952](https://dhis2.atlassian.net/browse/DHIS2-17952): OU query - parents filter has no effect**  
Components: _[API] Metadata model_

**[DHIS2-17751](https://dhis2.atlassian.net/browse/DHIS2-17751): Metadata field filtering does not work with nameable**  
Components: _[API] Metadata model_

**[DHIS2-17688](https://dhis2.atlassian.net/browse/DHIS2-17688): Api filter doesn't support "sharing" object**  
Components: _[API] Metadata model_

**[DHIS2-16453](https://dhis2.atlassian.net/browse/DHIS2-16453): Usage statistics does not return the correct number of active users**  
Components: _[API] Other_

**[DHIS2-17492](https://dhis2.atlassian.net/browse/DHIS2-17492): api/plugins cannot be filtered by pluginType**  
Components: _[API] Other_

**[DHIS2-16934](https://dhis2.atlassian.net/browse/DHIS2-16934): Entities loaded multiple times (DB is hit several times), in comparison with relase 40**  
Components: _[API] Other_

**[DHIS2-17612](https://dhis2.atlassian.net/browse/DHIS2-17612): Regression in OAuth configuration**  
Components: _[API] Security_

**[DHIS2-17180](https://dhis2.atlassian.net/browse/DHIS2-17180): indiscriminately sending notifications in Capture app ( new Tracker endpoint )**  
Components: _[API] Tracker_

**[DHIS2-17243](https://dhis2.atlassian.net/browse/DHIS2-17243): ProgramRule notification are not sent (long-term solution)**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-15425](https://dhis2.atlassian.net/browse/DHIS2-15425): While Sending notification to ancestors, it skips the base orgunitsation unit**  
Components: _[API] Tracker_

**[DHIS2-17560](https://dhis2.atlassian.net/browse/DHIS2-17560): Mandatory data sync error with new importer (App 3.0 instances 39, 40 & 41)**  
Components: _[API] Tracker_

**[DHIS2-16417](https://dhis2.atlassian.net/browse/DHIS2-16417): Importer requiring mandatory TEA from program rules**  
Components: _[API] Tracker_

**[DHIS2-17477](https://dhis2.atlassian.net/browse/DHIS2-17477): Incorrect error message when program protected but user not in search scope**  
Components: _[API] Tracker_

**[DHIS2-14300](https://dhis2.atlassian.net/browse/DHIS2-14300): Inconsistency in trackedEntities endpoint response (protected programs)**  
Components: _[API] Tracker_

**[DHIS2-16981](https://dhis2.atlassian.net/browse/DHIS2-16981): System user does not consider owner org unit when getting tracked entities**  
Components: _[API] Tracker_

**[DHIS2-17646](https://dhis2.atlassian.net/browse/DHIS2-17646): Auto generated ID null/empty**  
Components: _[API] Tracker_

**[DHIS2-17402](https://dhis2.atlassian.net/browse/DHIS2-17402): Delete relationships is not working when only UID is present in payload**  
Components: _[API] Tracker_

**[DHIS2-16442](https://dhis2.atlassian.net/browse/DHIS2-16442): trackedentities DB column inactive allows nulls**  
Components: _[API] Tracker_

**[DHIS2-16019](https://dhis2.atlassian.net/browse/DHIS2-16019): Date filters in tracker are not considering the time**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-17184](https://dhis2.atlassian.net/browse/DHIS2-17184): Filters for occurredAfter and occurredBefore not using specified time just date**  
Components: _[API] Tracker_

**[DHIS2-16446](https://dhis2.atlassian.net/browse/DHIS2-16446): /tracker/trackedEntites?order=enrolledAt returns wrong order**  
Components: _[API] Tracker_

**[DHIS2-16498](https://dhis2.atlassian.net/browse/DHIS2-16498): Report Date, Today option doesn't populate events created on that day on the registered events page of Capture app**  
Components: _[API] Tracker_

**[DHIS2-17129](https://dhis2.atlassian.net/browse/DHIS2-17129): TEXT and LONG_TEXT with single quote (')**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-17168](https://dhis2.atlassian.net/browse/DHIS2-17168): Program stage completion webhook notification POSTs twice (once before completion)**  
Components: _[API] Tracker (deprecated)_, _[App] Maintenance_

**[DHIS2-17288](https://dhis2.atlassian.net/browse/DHIS2-17288): [DATA EXCHANGE APP]: internal url is not undefined**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-17924](https://dhis2.atlassian.net/browse/DHIS2-17924): Searching for Sierra Leone in organisation unit field displays organisation unit tree with all the children org units**  
Components: _[App] Capture_

**[DHIS2-17488](https://dhis2.atlassian.net/browse/DHIS2-17488): Failed in denying access to stages for a user or group in the Capture App**  
Components: _[App] Capture_

**[DHIS2-17352](https://dhis2.atlassian.net/browse/DHIS2-17352): Choosing a different program in the event workspace does nothing**  
Components: _[App] Capture_

**[DHIS2-17516](https://dhis2.atlassian.net/browse/DHIS2-17516): Bad Request when sorting in the working lists**  
Components: _[App] Capture_

**[DHIS2-16373](https://dhis2.atlassian.net/browse/DHIS2-16373): Cannot change AOC on existing events in Tracker program**  
Components: _[App] Capture_

**[DHIS2-17653](https://dhis2.atlassian.net/browse/DHIS2-17653): Filter out existing events that are already linked**  
Components: _[App] Capture_

**[DHIS2-15633](https://dhis2.atlassian.net/browse/DHIS2-15633): Change ‘comment’ to 'note'**  
Components: _[App] Capture_

**[DHIS2-15379](https://dhis2.atlassian.net/browse/DHIS2-15379): Data elements of Long text/Text value type is misaligned in TET profile**  
Components: _[App] Capture_

**[DHIS2-17536](https://dhis2.atlassian.net/browse/DHIS2-17536): Cannot delete single event relationship**  
Components: _[App] Capture_

**[DHIS2-17115](https://dhis2.atlassian.net/browse/DHIS2-17115): Plugin config titles are not translateable**  
Components: _[App] Capture_

**[DHIS2-16919](https://dhis2.atlassian.net/browse/DHIS2-16919): Program stage WL without a orgUnit selected redirects to broken event URL**  
Components: _[App] Capture_

**[DHIS2-16488](https://dhis2.atlassian.net/browse/DHIS2-16488): Incorrect behavior in Capture when user has TET data:read**  
Components: _[App] Capture_

**[DHIS2-17054](https://dhis2.atlassian.net/browse/DHIS2-17054): Feedback widget always shows "undefined" when expression is empty**  
Components: _[App] Capture_

**[DHIS2-16487](https://dhis2.atlassian.net/browse/DHIS2-16487): Auto-select organisation unit and program if there are only one available**  
Components: _[App] Capture_

**[DHIS2-17000](https://dhis2.atlassian.net/browse/DHIS2-17000): Display translation of Event Date and Enrollment Date**  
Components: _[App] Capture_

**[DHIS2-17249](https://dhis2.atlassian.net/browse/DHIS2-17249): Capture tracked entity filter generates invalid API call**  
Components: _[App] Capture_

**[DHIS2-17052](https://dhis2.atlassian.net/browse/DHIS2-17052): Dropdown shows unrelated error when there are no TETs**  
Components: _[App] Capture_

**[DHIS2-15920](https://dhis2.atlassian.net/browse/DHIS2-15920): Filling in no values in TEAs should not trigger duplicate modal**  
Components: _[App] Capture_

**[DHIS2-17225](https://dhis2.atlassian.net/browse/DHIS2-17225): Cannot add TET with polygon or coordinate**  
Components: _[App] Capture_

**[DHIS2-17161](https://dhis2.atlassian.net/browse/DHIS2-17161): Changes in profile widget are not persisted if enrollment is completed right away**  
Components: _[App] Capture_

**[DHIS2-12499](https://dhis2.atlassian.net/browse/DHIS2-12499): ShortName doesn't display in dashboards**  
Components: _[App] Dashboard_

**[DHIS2-16218](https://dhis2.atlassian.net/browse/DHIS2-16218): Map basemap layer is displayed in dashboard even though the map's basemap layer is configured to be hidden**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-15000](https://dhis2.atlassian.net/browse/DHIS2-15000): System / user setting for display name not respected in Org Unit tree**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-17509](https://dhis2.atlassian.net/browse/DHIS2-17509): Offline mode does not show data in plugins**  
Components: _[App] Dashboard_

**[DHIS2-17334](https://dhis2.atlassian.net/browse/DHIS2-17334): Dashboard crashes when Viewing Map as Chart and applying a filter**  
Components: _[App] Dashboard_

**[DHIS2-17136](https://dhis2.atlassian.net/browse/DHIS2-17136): When visualization uses org unit levels, the vis flashes with every dashboard change**  
Components: _[App] Dashboard_

**[DHIS2-17137](https://dhis2.atlassian.net/browse/DHIS2-17137): Dashboard visualization spinner loads forever when resizing horizontally**  
Components: _[App] Dashboard_

**[DHIS2-17942](https://dhis2.atlassian.net/browse/DHIS2-17942): "Something went wrong  There's a syntax problem with the analytics request" error message when generating PI pivot table for DV and Event reports apps**  
Components: _[App] Data visualizer_, _[App] Event reports_

**[DHIS2-17707](https://dhis2.atlassian.net/browse/DHIS2-17707): Clearing the year input field in analytics apps throws an error**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-16904](https://dhis2.atlassian.net/browse/DHIS2-16904): "Week" and "Bi-week" not translated in period selector in Analytics app**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-17297](https://dhis2.atlassian.net/browse/DHIS2-17297): Data Visualizer crashes when using totals with a certain layout**  
Components: _[App] Data visualizer_

**[DHIS2-13167](https://dhis2.atlassian.net/browse/DHIS2-13167): Non-existing AO blocks new AOs from being created**  
Components: _[App] Data visualizer_

**[DHIS2-16900](https://dhis2.atlassian.net/browse/DHIS2-16900): Numbers are misaligned in pivot table**  
Components: _[App] Data visualizer_

**[DHIS2-16172](https://dhis2.atlassian.net/browse/DHIS2-16172): Separator for hundreds, thousands and millions is missing in the Pie charts**  
Components: _[App] Data visualizer_

**[DHIS2-15841](https://dhis2.atlassian.net/browse/DHIS2-15841): Download of pivot table in excel contains a period or comma at the end of each value**  
Components: _[App] Data visualizer_

**[DHIS2-15570](https://dhis2.atlassian.net/browse/DHIS2-15570): Visualisation flashes / multiple requests fired when opening an interpretation or adding/changing/removing comments, likes**  
Components: _[App] Data visualizer_

**[DHIS2-15291](https://dhis2.atlassian.net/browse/DHIS2-15291): Event Report Enrollments not returning correct data - BACKPORT**  
Components: _[App] Event reports_

**[DHIS2-15816](https://dhis2.atlassian.net/browse/DHIS2-15816): Data Element filters not displayed after saving a favorite in Event Reports**  
Components: _[App] Event reports_

**[DHIS2-17071](https://dhis2.atlassian.net/browse/DHIS2-17071): GeoJSON import app error when no attribute is present in DHIS2**  
Components: _[App] Import-export_, _[App] Maps_

**[DHIS2-16210](https://dhis2.atlassian.net/browse/DHIS2-16210): When user the value type "org unit" in an attribute, line listing shows the uid of the org unit and not the name.**  
Components: _[App] Line Listing_

**[DHIS2-15961](https://dhis2.atlassian.net/browse/DHIS2-15961): Line Listing app disregards to the option translations**  
Components: _[App] Line Listing_

**[DHIS2-16208](https://dhis2.atlassian.net/browse/DHIS2-16208): When downloading a multilingual line list as excel file/.csv , the option sets are not rendered in the correct language in the translation**  
Components: _[App] Line Listing_

**[DHIS2-16018](https://dhis2.atlassian.net/browse/DHIS2-16018): Favourite link is missing the app name**  
Components: _[App] Line Listing_

**[DHIS2-17412](https://dhis2.atlassian.net/browse/DHIS2-17412): Enrollment line list: Filter for program stage not working**  
Components: _[App] Line Listing_

**[DHIS2-17160](https://dhis2.atlassian.net/browse/DHIS2-17160): [LOGIN APP]: keep login button disabled until redirected**  
Components: _[App] Login_

**[DHIS2-6011](https://dhis2.atlassian.net/browse/DHIS2-6011): Irrelevant error message while deleting legends**  
Components: _[App] Maintenance_

**[DHIS2-15799](https://dhis2.atlassian.net/browse/DHIS2-15799): Unclear option "Show no data" in thematic style tab**  
Components: _[App] Maps_

**[DHIS2-17415](https://dhis2.atlassian.net/browse/DHIS2-17415): Error Encountered When Downloading Dataset Reports (Error 500)**  
Components: _[App] Reports_

**[DHIS2-12469](https://dhis2.atlassian.net/browse/DHIS2-12469): Data Set Reports give error while downloading PDF or XLS**  
Components: _[App] Reports_

**[DHIS2-17378](https://dhis2.atlassian.net/browse/DHIS2-17378): 500 on some report generations with JFreeChart**  
Components: _[App] Reports_

**[DHIS2-17363](https://dhis2.atlassian.net/browse/DHIS2-17363): TRUE_ONLY element doesn't save it's state**  
Components: _[App] Tracker capture_

**[DHIS2-17450](https://dhis2.atlassian.net/browse/DHIS2-17450): Revert DHIS2-17363 TRUE_ONLY element doesn't save it's state**  
Components: _[App] Tracker capture_

**[DHIS2-17301](https://dhis2.atlassian.net/browse/DHIS2-17301): One program stage can't properly handle multiple "Prevent adding new events to stage" actions**  
Components: _[App] Tracker capture_

**[DHIS2-10843](https://dhis2.atlassian.net/browse/DHIS2-10843): User roles: app names aren't always sorted or formatted correctly in authorities selector**  
Components: _[App] User_


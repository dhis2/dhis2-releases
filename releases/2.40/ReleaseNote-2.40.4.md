# Patch 2.40.4 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-16814](https://dhis2.atlassian.net/browse/DHIS2-16814): Introduce data level sharing for aggregate data exchange**  
Components: _[API] Aggregate Data Exchange_

**[DHIS2-17282](https://dhis2.atlassian.net/browse/DHIS2-17282): Config option for disabling indexing of dynamic dimension columns in analytics tables**  
Components: _[API] Analytics_

**[DHIS2-14956](https://dhis2.atlassian.net/browse/DHIS2-14956): Add "Sorting" object to "EventVisualization"**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-15689](https://dhis2.atlassian.net/browse/DHIS2-15689): skipRounding not saved in EVENT_VISUALIZATION AO**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14718](https://dhis2.atlassian.net/browse/DHIS2-14718): Scheduled refresh job for materialized views**  
Components: _[API] Data administration_

**[DHIS2-11658](https://dhis2.atlassian.net/browse/DHIS2-11658): Field filtering for /dataStatistics endpoint**  
Components: _[API] Other_

**[DHIS2-16434](https://dhis2.atlassian.net/browse/DHIS2-16434): Aggregate Data Exchange: add configurations UI**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-16270](https://dhis2.atlassian.net/browse/DHIS2-16270): Standardized, updated dimension chip design**  
Components: _[App] Analytics_, _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-17068](https://dhis2.atlassian.net/browse/DHIS2-17068): Related stages: Check if stage is eligible**  
Components: _[App] Capture_

**[DHIS2-16322](https://dhis2.atlassian.net/browse/DHIS2-16322): Instant (one-click) transfer**  
Components: _[App] Capture_

**[DHIS2-16293](https://dhis2.atlassian.net/browse/DHIS2-16293): Add category combination selection for new event (event programs)**  
Components: _[App] Capture_

**[DHIS2-16294](https://dhis2.atlassian.net/browse/DHIS2-16294): Add category combination selection for edit event (event programs)**  
Components: _[App] Capture_

**[DHIS2-16922](https://dhis2.atlassian.net/browse/DHIS2-16922): Delete Tracked entity from profile Widget**  
Components: _[App] Capture_

**[DHIS2-15170](https://dhis2.atlassian.net/browse/DHIS2-15170): Adjust context selector "New" button**  
Components: _[App] Capture_

**[DHIS2-16291](https://dhis2.atlassian.net/browse/DHIS2-16291): Related stages:  Widget for new event (tracker programs)**  
Components: _[App] Capture_

**[DHIS2-13233](https://dhis2.atlassian.net/browse/DHIS2-13233): Download TE working lists**  
Components: _[App] Capture_

**[DHIS2-14799](https://dhis2.atlassian.net/browse/DHIS2-14799): Working list for Follow up**  
Components: _[App] Capture_

**[DHIS2-13800](https://dhis2.atlassian.net/browse/DHIS2-13800): Implement "Ask user to complete enrollment" flag**  
Components: _[App] Capture_

**[DHIS2-16527](https://dhis2.atlassian.net/browse/DHIS2-16527): Assign user when first stage appears on registration page**  
Components: _[App] Capture_

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

**[DHIS2-16440](https://dhis2.atlassian.net/browse/DHIS2-16440): aggregateDataExchanges patch requires you to provide authentication details**  
Components: _[API] Aggregate Data Exchange_

**[DHIS2-16497](https://dhis2.atlassian.net/browse/DHIS2-16497): Unable to run analytics through GUI, Localhost API calls fail 70% of time**  
Components: _[API] Analytics_, _[App] Analytics_

**[DHIS2-16717](https://dhis2.atlassian.net/browse/DHIS2-16717): Line Listing hh:mm time format ambiguous**  
Components: _[API] Analytics_

**[DHIS2-16349](https://dhis2.atlassian.net/browse/DHIS2-16349): Failing enrollment analytics queries on programs with cat combos for non-super users**  
Components: _[API] Analytics_, _[App] Event reports_, _[App] Line Listing_

**[DHIS2-16855](https://dhis2.atlassian.net/browse/DHIS2-16855): Expression Dim. Items API fails for number with large decimal digits**  
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

**[DHIS2-15845](https://dhis2.atlassian.net/browse/DHIS2-15845): Add error handling for Calculation in Maps**  
Components: _[API] Analytics_

**[DHIS2-17231](https://dhis2.atlassian.net/browse/DHIS2-17231): Analytics events query API: 500 error when dimension is not present in the query**  
Components: _[API] Analytics_

**[DHIS2-17027](https://dhis2.atlassian.net/browse/DHIS2-17027): Analytics Enrollments Query API - skipRounding not working**  
Components: _[API] Analytics_

**[DHIS2-16418](https://dhis2.atlassian.net/browse/DHIS2-16418): Filter using "IN:NV", in analytics enrollments query should not return "ND" values**  
Components: _[API] Analytics_

**[DHIS2-16794](https://dhis2.atlassian.net/browse/DHIS2-16794): Core app installation via app-management app not working as expected**  
Components: _[API] App management_

**[DHIS2-16887](https://dhis2.atlassian.net/browse/DHIS2-16887): Double-Clicking Input Fields in Data Entry Throw Exception**  
Components: _[API] Data Entry_

**[DHIS2-16129](https://dhis2.atlassian.net/browse/DHIS2-16129): /dataEntry/metadata does not include the default catCombo if no dataElements reference it**  
Components: _[API] Data Entry_

**[DHIS2-16937](https://dhis2.atlassian.net/browse/DHIS2-16937): Error on "Get PDF for data entry" on DHIS versions 2.38, 2.39, and 2.40.**  
Components: _[API] Data Entry_

**[DHIS2-17186](https://dhis2.atlassian.net/browse/DHIS2-17186): idSchema inconsistencies for dataValueSet endpoint**  
Components: _[API] Data value set_

**[DHIS2-17246](https://dhis2.atlassian.net/browse/DHIS2-17246): Query executed during a POST/PUT to the events endpoint**  
Components: _[API] Events (deprecated)_

**[DHIS2-13866](https://dhis2.atlassian.net/browse/DHIS2-13866): Add system settings for configurable system jobs**  
Components: _[API] Job scheduler_

**[DHIS2-17292](https://dhis2.atlassian.net/browse/DHIS2-17292): The field `lastExecutedStatus` on a MetadataSync job config shows as failed even though it completes successfully**  
Components: _[API] Job scheduler_

**[DHIS2-15772](https://dhis2.atlassian.net/browse/DHIS2-15772): Metadata Import - Rejected deletion causes the import to abort/end with the rejected item**  
Components: _[API] Metadata import-export_

**[DHIS2-16700](https://dhis2.atlassian.net/browse/DHIS2-16700): Creating new metadata objects should always default to the actual current user**  
Components: _[API] Metadata import-export_

**[DHIS2-17233](https://dhis2.atlassian.net/browse/DHIS2-17233): Metadata sync breaks in v2.39.3.1**  
Components: _[API] Metadata model_, _[API] Synchronization_, _[Core] Job Scheduler_

**[DHIS2-13358](https://dhis2.atlassian.net/browse/DHIS2-13358): Indonesian language not supported in Apps UI**  
Components: _[API] Other_, _Frontend_

**[DHIS2-16453](https://dhis2.atlassian.net/browse/DHIS2-16453): Usage statistics does not return the correct number of active users**  
Components: _[API] Other_

**[DHIS2-17492](https://dhis2.atlassian.net/browse/DHIS2-17492): api/plugins cannot be filtered by pluginType**  
Components: _[API] Other_

**[DHIS2-17062](https://dhis2.atlassian.net/browse/DHIS2-17062): system.sql_view_write_enabled no longer working**  
Components: _[API] Other_, _[API] System configuration_

**[DHIS2-15543](https://dhis2.atlassian.net/browse/DHIS2-15543): updateNoAcl does not update the lastUpdatedBy property of objects**  
Components: _[API] Other_

**[DHIS2-16935](https://dhis2.atlassian.net/browse/DHIS2-16935): Cannot order by multiple fields**  
Components: _[API] Other_

**[DHIS2-17470](https://dhis2.atlassian.net/browse/DHIS2-17470): Posting events deletes program rule actions**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-17070](https://dhis2.atlassian.net/browse/DHIS2-17070): Transferred enrollment not accessible by org unit owner**  
Components: _[API] Tracker_

**[DHIS2-17252](https://dhis2.atlassian.net/browse/DHIS2-17252): Relationship ownership is validated wrong in Tracker Importer**  
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

**[DHIS2-17236](https://dhis2.atlassian.net/browse/DHIS2-17236): Update validation logic when requesting multiple TE without program**  
Components: _[API] Tracker_

**[DHIS2-15898](https://dhis2.atlassian.net/browse/DHIS2-15898): /tracker/events?order=attributeOptionCombo on <41 leads to 500**  
Components: _[API] Tracker_

**[DHIS2-17280](https://dhis2.atlassian.net/browse/DHIS2-17280): Enrollment ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-17251](https://dhis2.atlassian.net/browse/DHIS2-17251): Tracked Entity ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-17090](https://dhis2.atlassian.net/browse/DHIS2-17090): tracker/relationships emits inaccessible program attributes**  
Components: _[API] Tracker_

**[DHIS2-13014](https://dhis2.atlassian.net/browse/DHIS2-13014): New tracker/events API takes time and throws a 500 when called with no parameters**  
Components: _[API] Tracker_

**[DHIS2-16715](https://dhis2.atlassian.net/browse/DHIS2-16715): Page no. is not incrementing in reply from /api/tracker/trackedEntities**  
Components: _[API] Tracker_

**[DHIS2-17129](https://dhis2.atlassian.net/browse/DHIS2-17129): TEXT and LONG_TEXT with single quote (')**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-17307](https://dhis2.atlassian.net/browse/DHIS2-17307): Not able to clear a data element value**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-17168](https://dhis2.atlassian.net/browse/DHIS2-17168): Program stage completion webhook notification POSTs twice (once before completion)**  
Components: _[API] Tracker (deprecated)_, _[App] Maintenance_

**[DHIS2-17288](https://dhis2.atlassian.net/browse/DHIS2-17288): [DATA EXCHANGE APP]: internal url is not undefined**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-17399](https://dhis2.atlassian.net/browse/DHIS2-17399): Unable to save events with multiple categories**  
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

**[DHIS2-17421](https://dhis2.atlassian.net/browse/DHIS2-17421): In v2.40 images in the TEI profile show a link compatible only from 2.41**  
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

**[DHIS2-17291](https://dhis2.atlassian.net/browse/DHIS2-17291): Program stage working lists break when there are no events**  
Components: _[App] Capture_

**[DHIS2-16597](https://dhis2.atlassian.net/browse/DHIS2-16597): Cannot create a Program Stage working list filtered by "Today" for report date**  
Components: _[App] Capture_

**[DHIS2-17089](https://dhis2.atlassian.net/browse/DHIS2-17089): "Registering unit" in Context selector should say "Organisation unit"**  
Components: _[App] Capture_

**[DHIS2-17225](https://dhis2.atlassian.net/browse/DHIS2-17225): Cannot add TET with polygon or coordinate**  
Components: _[App] Capture_

**[DHIS2-17195](https://dhis2.atlassian.net/browse/DHIS2-17195): d2:condition() not working in Capture**  
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

**[DHIS2-16999](https://dhis2.atlassian.net/browse/DHIS2-16999): Program rules for "Assign value" should not run in "View event"**  
Components: _[App] Capture_

**[DHIS2-14938](https://dhis2.atlassian.net/browse/DHIS2-14938): Error on Complete Program Rule Action and other mandatory DEs doesn't trigger upon initial save, does on secondary save**  
Components: _[App] Capture_

**[DHIS2-17084](https://dhis2.atlassian.net/browse/DHIS2-17084): Add relationship: Only show relationship types with data write**  
Components: _[App] Capture_

**[DHIS2-17110](https://dhis2.atlassian.net/browse/DHIS2-17110): Hide delete-icon for relationship types without write access**  
Components: _[App] Capture_

**[DHIS2-15624](https://dhis2.atlassian.net/browse/DHIS2-15624): App version not picked up by the header bar in Capture**  
Components: _[App] Capture_

**[DHIS2-17108](https://dhis2.atlassian.net/browse/DHIS2-17108): Enrollment and TET geometry are not stored and properly displayed**  
Components: _[App] Capture_

**[DHIS2-17072](https://dhis2.atlassian.net/browse/DHIS2-17072): Verbose logging is not sufficient**  
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

**[DHIS2-17037](https://dhis2.atlassian.net/browse/DHIS2-17037): Edit event page crashes for event programs**  
Components: _[App] Capture_

**[DHIS2-15621](https://dhis2.atlassian.net/browse/DHIS2-15621): Row view is split into sections instead of all data elements on one row**  
Components: _[App] Capture_

**[DHIS2-16016](https://dhis2.atlassian.net/browse/DHIS2-16016): multi text is not working in v40**  
Components: _[App] Capture_

**[DHIS2-16318](https://dhis2.atlassian.net/browse/DHIS2-16318): Fix/clean up enrollment dashboard loading**  
Components: _[App] Capture_

**[DHIS2-16205](https://dhis2.atlassian.net/browse/DHIS2-16205): Locked selector should be floating**  
Components: _[App] Capture_

**[DHIS2-12007](https://dhis2.atlassian.net/browse/DHIS2-12007): Text string improvements**  
Components: _[App] Capture_

**[DHIS2-12499](https://dhis2.atlassian.net/browse/DHIS2-12499): ShortName doesn't display in dashboards**  
Components: _[App] Dashboard_

**[DHIS2-15000](https://dhis2.atlassian.net/browse/DHIS2-15000): System / user setting for display name not respected in Org Unit tree**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-17509](https://dhis2.atlassian.net/browse/DHIS2-17509): Offline mode does not show data in plugins**  
Components: _[App] Dashboard_

**[DHIS2-17016](https://dhis2.atlassian.net/browse/DHIS2-17016): When adding the same item to a dashboard, the other "copies" re-render**  
Components: _[App] Dashboard_

**[DHIS2-17137](https://dhis2.atlassian.net/browse/DHIS2-17137): Dashboard visualization spinner loads forever when resizing horizontally**  
Components: _[App] Dashboard_

**[DHIS2-16904](https://dhis2.atlassian.net/browse/DHIS2-16904): "Week" and "Bi-week" not translated in period selector in Analytics app**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_


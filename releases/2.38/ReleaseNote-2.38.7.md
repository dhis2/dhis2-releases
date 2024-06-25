# Patch 2.38.7 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-14956](https://dhis2.atlassian.net/browse/DHIS2-14956): Add "Sorting" object to "EventVisualization"**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-15689](https://dhis2.atlassian.net/browse/DHIS2-15689): skipRounding not saved in EVENT_VISUALIZATION AO**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-16750](https://dhis2.atlassian.net/browse/DHIS2-16750): Min max value validation performance enhancement**  
Components: _[API] Validation_

**[DHIS2-16922](https://dhis2.atlassian.net/browse/DHIS2-16922): Delete Tracked entity from profile Widget**  
Components: _[App] Capture_

**[DHIS2-15170](https://dhis2.atlassian.net/browse/DHIS2-15170): Adjust context selector "New" button**  
Components: _[App] Capture_

**[DHIS2-16291](https://dhis2.atlassian.net/browse/DHIS2-16291): Related stages:  Widget for new event (tracker programs)**  
Components: _[App] Capture_

**[DHIS2-13233](https://dhis2.atlassian.net/browse/DHIS2-13233): Download TE working lists**  
Components: _[App] Capture_

**[DHIS2-16305](https://dhis2.atlassian.net/browse/DHIS2-16305): Support Plugins in the Enrollment Pages**  
Components: _[App] Capture_

**[DHIS2-14799](https://dhis2.atlassian.net/browse/DHIS2-14799): Working list for Follow up**  
Components: _[App] Capture_

**[DHIS2-13800](https://dhis2.atlassian.net/browse/DHIS2-13800): Implement "Ask user to complete enrollment" flag**  
Components: _[App] Capture_

**[DHIS2-16372](https://dhis2.atlassian.net/browse/DHIS2-16372): Relationship widget: Deleting relationship**  
Components: _[App] Capture_

**[DHIS2-16322](https://dhis2.atlassian.net/browse/DHIS2-16322): Instant (one-click) transfer**  
Components: _[App] Capture_

**[DHIS2-15480](https://dhis2.atlassian.net/browse/DHIS2-15480): Assigned user Widget for view- and edit event (Tracker programs)**  
Components: _[App] Capture_

**[DHIS2-16262](https://dhis2.atlassian.net/browse/DHIS2-16262): Support custom Enrollment Overview and Event Workspace configuration**  
Components: _[App] Capture_

**[DHIS2-16527](https://dhis2.atlassian.net/browse/DHIS2-16527): Assign user when first stage appears on registration page**  
Components: _[App] Capture_

**[DHIS2-15914](https://dhis2.atlassian.net/browse/DHIS2-15914): Render newlines properly in data visualizer right-side panel**  
Components: _[App] Data visualizer_

**[DHIS2-10067](https://dhis2.atlassian.net/browse/DHIS2-10067): Error message for non-numeric data types**  
Components: _[App] Data visualizer_

**[DHIS2-6626](https://dhis2.atlassian.net/browse/DHIS2-6626): Items in sidebar not clickable full width**  
Components: _[App] Data visualizer_

## Bugs

**[DHIS2-16349](https://dhis2.atlassian.net/browse/DHIS2-16349): Failing enrollment analytics queries on programs with cat combos for non-super users**  
Components: _[API] Analytics_, _[App] Event reports_, _[App] Line Listing_

**[DHIS2-16235](https://dhis2.atlassian.net/browse/DHIS2-16235): Bad SQL syntax exception in /analytics/Event/aggregate**  
Components: _[API] Analytics_

**[DHIS2-15194](https://dhis2.atlassian.net/browse/DHIS2-15194): Tracked Entity Attribute text in Data Visualizer fragmented by group separators**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-15892](https://dhis2.atlassian.net/browse/DHIS2-15892): Option “limit minimum/maximum values” doesn't work with "reporting rate" for data set**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-15978](https://dhis2.atlassian.net/browse/DHIS2-15978): PUT in /maps API does not return response body**  
Components: _[API] Analytics_

**[DHIS2-17231](https://dhis2.atlassian.net/browse/DHIS2-17231): Analytics events query API: 500 error when dimension is not present in the query**  
Components: _[API] Analytics_

**[DHIS2-17027](https://dhis2.atlassian.net/browse/DHIS2-17027): Analytics Enrollments Query API - skipRounding not working**  
Components: _[API] Analytics_

**[DHIS2-15278](https://dhis2.atlassian.net/browse/DHIS2-15278): Program Indicators returned with too many decimal places**  
Components: _[API] Analytics_

**[DHIS2-16418](https://dhis2.atlassian.net/browse/DHIS2-16418): Filter using "IN:NV", in analytics enrollments query should not return "ND" values**  
Components: _[API] Analytics_

**[DHIS2-16315](https://dhis2.atlassian.net/browse/DHIS2-16315): Analytics API returns wrong valueType for tracker data elements**  
Components: _[API] Analytics_

**[DHIS2-16794](https://dhis2.atlassian.net/browse/DHIS2-16794): Core app installation via app-management app not working as expected**  
Components: _[API] App management_

**[DHIS2-16887](https://dhis2.atlassian.net/browse/DHIS2-16887): Double-Clicking Input Fields in Data Entry Throw Exception**  
Components: _[API] Data Entry_

**[DHIS2-16937](https://dhis2.atlassian.net/browse/DHIS2-16937): Error on "Get PDF for data entry" on DHIS versions 2.38, 2.39, and 2.40.**  
Components: _[API] Data Entry_

**[DHIS2-17246](https://dhis2.atlassian.net/browse/DHIS2-17246): Query executed during a POST/PUT to the events endpoint**  
Components: _[API] Events (deprecated)_

**[DHIS2-16700](https://dhis2.atlassian.net/browse/DHIS2-16700): Creating new metadata objects should always default to the actual current user**  
Components: _[API] Metadata import-export_

**[DHIS2-13358](https://dhis2.atlassian.net/browse/DHIS2-13358): Indonesian language not supported in Apps UI**  
Components: _[API] Other_, _Frontend_

**[DHIS2-15543](https://dhis2.atlassian.net/browse/DHIS2-15543): updateNoAcl does not update the lastUpdatedBy property of objects**  
Components: _[API] Other_

**[DHIS2-15898](https://dhis2.atlassian.net/browse/DHIS2-15898): /tracker/events?order=attributeOptionCombo on <41 leads to 500**  
Components: _[API] Tracker_

**[DHIS2-13014](https://dhis2.atlassian.net/browse/DHIS2-13014): New tracker/events API takes time and throws a 500 when called with no parameters**  
Components: _[API] Tracker_

**[DHIS2-16927](https://dhis2.atlassian.net/browse/DHIS2-16927): eventOccurredBefore & eventOccurredAfter query params for "GET /api/tracker/trackedEntities" do not behave as expected**  
Components: _[API] Tracker_

**[DHIS2-16320](https://dhis2.atlassian.net/browse/DHIS2-16320): Ensure lastUpdated field reflects deletion for event and enrollment**  
Components: _[API] Tracker_

**[DHIS2-16715](https://dhis2.atlassian.net/browse/DHIS2-16715): Page no. is not incrementing in reply from /api/tracker/trackedEntities**  
Components: _[API] Tracker_

**[DHIS2-16731](https://dhis2.atlassian.net/browse/DHIS2-16731): Getting internal server when trying to fetch a deleted enrollment**  
Components: _[API] Tracker_

**[DHIS2-17307](https://dhis2.atlassian.net/browse/DHIS2-17307): Not able to clear a data element value**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-12352](https://dhis2.atlassian.net/browse/DHIS2-12352): Event import using CSV cannot have empty "Due Date"Column**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-16766](https://dhis2.atlassian.net/browse/DHIS2-16766): Unable to create a user group in DHIS2 version 2.38.6**  
Components: _[API] User_

**[DHIS2-14990](https://dhis2.atlassian.net/browse/DHIS2-14990): PAT (api_token) record not removed when user is deleted**  
Components: _[API] User_

**[DHIS2-17399](https://dhis2.atlassian.net/browse/DHIS2-17399): Unable to save events with multiple categories**  
Components: _[App] Capture_

**[DHIS2-16487](https://dhis2.atlassian.net/browse/DHIS2-16487): Auto-select organisation unit and program if there are only one available**  
Components: _[App] Capture_

**[DHIS2-17000](https://dhis2.atlassian.net/browse/DHIS2-17000): Display translation of Event Date and Enrollment Date**  
Components: _[App] Capture_

**[DHIS2-17249](https://dhis2.atlassian.net/browse/DHIS2-17249): Capture tracked entity filter generates invalid API call**  
Components: _[App] Capture_

**[DHIS2-15633](https://dhis2.atlassian.net/browse/DHIS2-15633): Change ‘comment’ to 'note'**  
Components: _[App] Capture_

**[DHIS2-17052](https://dhis2.atlassian.net/browse/DHIS2-17052): Dropdown shows unrelated error when there are no TETs**  
Components: _[App] Capture_

**[DHIS2-15920](https://dhis2.atlassian.net/browse/DHIS2-15920): Filling in no values in TEAs should not trigger duplicate modal**  
Components: _[App] Capture_

**[DHIS2-17102](https://dhis2.atlassian.net/browse/DHIS2-17102): When saving an event, you should be sent to Enrollment Dashboard / Main page**  
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

**[DHIS2-16257](https://dhis2.atlassian.net/browse/DHIS2-16257): Search page: padding, spacing, border issues**  
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

**[DHIS2-17509](https://dhis2.atlassian.net/browse/DHIS2-17509): Offline mode does not show data in plugins**  
Components: _[App] Dashboard_

**[DHIS2-12499](https://dhis2.atlassian.net/browse/DHIS2-12499): ShortName doesn't display in dashboards**  
Components: _[App] Dashboard_

**[DHIS2-15841](https://dhis2.atlassian.net/browse/DHIS2-15841): Download of pivot table in excel contains a period or comma at the end of each value**  
Components: _[App] Data visualizer_

**[DHIS2-13745](https://dhis2.atlassian.net/browse/DHIS2-13745): Interpretations panel: Loading spinner flashes on fast connection**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-15373](https://dhis2.atlassian.net/browse/DHIS2-15373): On First save getting error message as "Something went wrong"**  
Components: _[App] Data visualizer_

**[DHIS2-10235](https://dhis2.atlassian.net/browse/DHIS2-10235): Pivot Tables - Limit max value shifts to min value fields**  
Components: _[App] Data visualizer_

**[DHIS2-17368](https://dhis2.atlassian.net/browse/DHIS2-17368): Event Visualizer App uses deprecated PATCH endpoint for renaming**  
Components: _[App] Event visualizer_

**[DHIS2-16015](https://dhis2.atlassian.net/browse/DHIS2-16015): TEI export shows Event programs**  
Components: _[App] Import-export_

**[DHIS2-16501](https://dhis2.atlassian.net/browse/DHIS2-16501): Exporting and importing EventVisualization meta-data do not work**  
Components: _[App] Import-export_, _[Core] Data Export_

**[DHIS2-17267](https://dhis2.atlassian.net/browse/DHIS2-17267): Missing boolean values says 'Not answered'**  
Components: _[App] Line Listing_

**[DHIS2-16252](https://dhis2.atlassian.net/browse/DHIS2-16252): Translation/labels missing for Aggregation types**  
Components: _[App] Maintenance_

**[DHIS2-16710](https://dhis2.atlassian.net/browse/DHIS2-16710): Filter and sort does not work on event layer data items**  
Components: _[App] Maps_

**[DHIS2-15798](https://dhis2.atlassian.net/browse/DHIS2-15798): Show longitude/latitude in split view map doesn't do anything**  
Components: _[App] Maps_

**[DHIS2-16496](https://dhis2.atlassian.net/browse/DHIS2-16496): Standard Report doesn't show Arabic text**  
Components: _[App] Reports_

**[DHIS2-17363](https://dhis2.atlassian.net/browse/DHIS2-17363): TRUE_ONLY element doesn't save it's state**  
Components: _[App] Tracker capture_

**[DHIS2-17450](https://dhis2.atlassian.net/browse/DHIS2-17450): Revert DHIS2-17363 TRUE_ONLY element doesn't save it's state**  
Components: _[App] Tracker capture_

**[DHIS2-17301](https://dhis2.atlassian.net/browse/DHIS2-17301): One program stage can't properly handle multiple "Prevent adding new events to stage" actions**  
Components: _[App] Tracker capture_

**[DHIS2-13408](https://dhis2.atlassian.net/browse/DHIS2-13408): Pre-fill user-invite fields and align form fields with user-app form**  
Components: _[App] User_


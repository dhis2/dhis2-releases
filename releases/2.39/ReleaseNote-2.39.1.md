# Patch 2.39.1 Release Note

- [Features](#features)
- [Bugs](#bugs)

## Features

**[DHIS2-14208](https://dhis2.atlassian.net/browse/DHIS2-14208): [N] Support unlogged tables in analytics export**  
Components: _[API] Analytics_

**[DHIS2-13547](https://dhis2.atlassian.net/browse/DHIS2-13547): Maintenance app: Relationship type attributes for display**  
Components: _[App] Maintenance_

**[DHIS2-14152](https://dhis2.atlassian.net/browse/DHIS2-14152): Attribute values not displayed for options in maintenance app**  
Components: _[App] Maintenance_

## Bugs

**[DHIS2-14206](https://dhis2.atlassian.net/browse/DHIS2-14206): [N] Visualizations endpoint does not allow decimal values for axes props**  
Components: _[API] Analytics_

**[DHIS2-13909](https://dhis2.atlassian.net/browse/DHIS2-13909): Attempting to sort org unit DE results in "No data available" message**  
Components: _[API] Analytics_

**[DHIS2-14417](https://dhis2.atlassian.net/browse/DHIS2-14417): Analytics doesn't set resource tables update time when updating resource tables**  
Components: _[API] Analytics_

**[DHIS2-14434](https://dhis2.atlassian.net/browse/DHIS2-14434): [N] Data Visualizer: Excel download exports numbers as text**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-13456](https://dhis2.atlassian.net/browse/DHIS2-13456): deGroup does not work (Expression not supported) for indicators**  
Components: _[API] Analytics_

**[DHIS2-13700](https://dhis2.atlassian.net/browse/DHIS2-13700): [J,K] Analytics query fails for Event data item of type TEXT**  
Components: _[API] Analytics_

**[DHIS2-14146](https://dhis2.atlassian.net/browse/DHIS2-14146): [N] Dashboard item search returns both EventReports and EventVisualizations as EventReports**  
Components: _[API] Analytics_

**[DHIS2-12934](https://dhis2.atlassian.net/browse/DHIS2-12934): Unexpected change of dueDate if a datavelue is updated**  
Components: _[API] Events_

**[DHIS2-13555](https://dhis2.atlassian.net/browse/DHIS2-13555): eventVisualizations: order by created or lastUpdated doesn't work**  
Components: _[API] Events_

**[DHIS2-13656](https://dhis2.atlassian.net/browse/DHIS2-13656): event org units are different depending on the API query**  
Components: _[API] Events_

**[DHIS2-13632](https://dhis2.atlassian.net/browse/DHIS2-13632): tracker/events endpoint updates created date**  
Components: _[API] Events_

**[DHIS2-14550](https://dhis2.atlassian.net/browse/DHIS2-14550): Sharing Patch Add command Replaces, instead of adding**  
Components: _[API] Metadata import-export_

**[DHIS2-11846](https://dhis2.atlassian.net/browse/DHIS2-11846): api/programs/[uid]/metadata endpoint fails with custom attribute**  
Components: _[API] Metadata import-export_

**[DHIS2-13675](https://dhis2.atlassian.net/browse/DHIS2-13675): Importing metadata of type 'user' fails**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-14191](https://dhis2.atlassian.net/browse/DHIS2-14191): CreatedBy field is changed when updating with createdBy = null**  
Components: _[API] Metadata model_

**[DHIS2-14114](https://dhis2.atlassian.net/browse/DHIS2-14114): SystemSettingManager.getSystemSetting causes performance issue**  
Components: _[API] Other_

**[DHIS2-13711](https://dhis2.atlassian.net/browse/DHIS2-13711): Regression in */* content-type negotiation**  
Components: _[API] Other_

**[DHIS2-13821](https://dhis2.atlassian.net/browse/DHIS2-13821): 2.38.1.1 Program Rule Validation Preventing Data Syncing**  
Components: _[API] Program rules_, _[App] Capture_

**[DHIS2-11731](https://dhis2.atlassian.net/browse/DHIS2-11731): TrackedEntityInstance endpoint does not include nested event notes**  
Components: _[API] Tracker_

**[DHIS2-14295](https://dhis2.atlassian.net/browse/DHIS2-14295): Enrollment of event in event program not found in preheat**  
Components: _[API] Tracker_

**[DHIS2-11625](https://dhis2.atlassian.net/browse/DHIS2-11625): TEIs are not filterable by potentialDuplicate property**  
Components: _[API] Tracker_

**[DHIS2-11500](https://dhis2.atlassian.net/browse/DHIS2-11500): Inconsistent API response for superuser in api/trackedEntityInstances**  
Components: _[API] Tracker_

**[DHIS2-12906](https://dhis2.atlassian.net/browse/DHIS2-12906): /tracker/enrollments does not return attributes, events and relationships**  
Components: _[API] Tracker_

**[DHIS2-13422](https://dhis2.atlassian.net/browse/DHIS2-13422): Endpoint /trackedEntityInstances does not return assignedUser in events**  
Components: _[API] Tracker_

**[DHIS2-14040](https://dhis2.atlassian.net/browse/DHIS2-14040): Event property 'deleted' is not returned from api/events.json endpoint**  
Components: _[API] Tracker_

**[DHIS2-13324](https://dhis2.atlassian.net/browse/DHIS2-13324): Fail tracker import on invalid idScheme**  
Components: _[API] Tracker_

**[DHIS2-13281](https://dhis2.atlassian.net/browse/DHIS2-13281): Too many search results doesn't work correctly when maxt tei count > 4**  
Components: _[API] Tracker_

**[DHIS2-13076](https://dhis2.atlassian.net/browse/DHIS2-13076): Internal server error in /trackedEntityInstances/query when there are no filterable attributes**  
Components: _[API] Tracker_

**[DHIS2-13325](https://dhis2.atlassian.net/browse/DHIS2-13325): Remove redundant information from validation errors**  
Components: _[API] Tracker_

**[DHIS2-10376](https://dhis2.atlassian.net/browse/DHIS2-10376): When downloading event files as CSV they are labelled as metadata.csv**  
Components: _[API] Tracker_, _[App] Import-export_

**[DHIS2-13635](https://dhis2.atlassian.net/browse/DHIS2-13635): GS1DataMatrix parser assumes all AIs has length 2**  
Components: _[API] Tracker_

**[DHIS2-13840](https://dhis2.atlassian.net/browse/DHIS2-13840): Searching for attribute values containing "NV" results in malformed SQL and 500 internal error**  
Components: _[API] Tracker_

**[DHIS2-14557](https://dhis2.atlassian.net/browse/DHIS2-14557): Updating user groups in users app fails**  
Components: _[API] User_, _[App] User_

**[DHIS2-12782](https://dhis2.atlassian.net/browse/DHIS2-12782): Incorrect Content-Type when requesting individual user settings fields**  
Components: _[API] User_

**[DHIS2-14039](https://dhis2.atlassian.net/browse/DHIS2-14039): Clicking "Clear selections" when only a dataset has been selected does not remove the dataset**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-14210](https://dhis2.atlassian.net/browse/DHIS2-14210): [N] Conditions for PI might be wrong under some circumstances**  
Components: _[App] Analytics_

**[DHIS2-14355](https://dhis2.atlassian.net/browse/DHIS2-14355): Aggregate analytics for event data items with integer value type broken**  
Components: _[App] Analytics_

**[DHIS2-14629](https://dhis2.atlassian.net/browse/DHIS2-14629): Roll back "Hide section" changes**  
Components: _[App] Capture_

**[DHIS2-13197](https://dhis2.atlassian.net/browse/DHIS2-13197): Blank values are not taken into account when sorting in program stage event list**  
Components: _[App] Capture_

**[DHIS2-14340](https://dhis2.atlassian.net/browse/DHIS2-14340): Text values are not sorted in Stages&Events-widget**  
Components: _[App] Capture_

**[DHIS2-14352](https://dhis2.atlassian.net/browse/DHIS2-14352): `d2:oizp` doesn't work**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-14411](https://dhis2.atlassian.net/browse/DHIS2-14411): Change wording of "Can't add any more events"-tooltip**  
Components: _[App] Capture_

**[DHIS2-14001](https://dhis2.atlassian.net/browse/DHIS2-14001): Use "Complete" as label for enrollment widget**  
Components: _[App] Capture_

**[DHIS2-13720](https://dhis2.atlassian.net/browse/DHIS2-13720): Program stage events could not be retrieved**  
Components: _[App] Capture_

**[DHIS2-13968](https://dhis2.atlassian.net/browse/DHIS2-13968): Do not display 00:00 suffix in Enrollment/Report dates**  
Components: _[App] Capture_

**[DHIS2-7913](https://dhis2.atlassian.net/browse/DHIS2-7913): Hidden fields should not be visible in event details**  
Components: _[App] Capture_

**[DHIS2-8210](https://dhis2.atlassian.net/browse/DHIS2-8210): Tracker Registration Form not displaying properly (sorting/order)**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-6556](https://dhis2.atlassian.net/browse/DHIS2-6556): [M] Error in Dashboard when different access rights between dashboard and objects**  
Components: _[App] Dashboard_

**[DHIS2-14034](https://dhis2.atlassian.net/browse/DHIS2-14034): Dashboard app won't load if `navigator.serviceWorker` is undefined**  
Components: _[App] Dashboard_

**[DHIS2-14029](https://dhis2.atlassian.net/browse/DHIS2-14029): Clicking "Apply sharing to dashboard visualizations" in the sharing dialog crashes the app**  
Components: _[App] Dashboard_

**[DHIS2-14035](https://dhis2.atlassian.net/browse/DHIS2-14035): [N] "Progressive" Analytics Cache Mode causes 500 server errors in Data Approvals**  
Components: _[App] Data approval_

**[DHIS2-13088](https://dhis2.atlassian.net/browse/DHIS2-13088): Aggregate data entry for Sub-organisation Unit is not working (form with no data entry  fields)**  
Components: _[App] Data entry_

**[DHIS2-13911](https://dhis2.atlassian.net/browse/DHIS2-13911): Rich text (italics, bold, emojis) broken in DV, maps and LL description panel**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-14304](https://dhis2.atlassian.net/browse/DHIS2-14304): Event export in import/export app fails**  
Components: _[App] Import-export_

**[DHIS2-13849](https://dhis2.atlassian.net/browse/DHIS2-13849): Earth Engine import card doesn't display on app home page**  
Components: _[App] Import-export_

**[DHIS2-14016](https://dhis2.atlassian.net/browse/DHIS2-14016): Error in the evaluation of the CRON Expression in the scheduler app**  
Components: _[App] Job scheduler_

**[DHIS2-13872](https://dhis2.atlassian.net/browse/DHIS2-13872): [M]Code is displayed instead of name for numeric option sets**  
Components: _[App] Line Listing_

**[DHIS2-13902](https://dhis2.atlassian.net/browse/DHIS2-13902): Timestamp for value type "age" should be removed**  
Components: _[App] Line Listing_

**[DHIS2-13898](https://dhis2.atlassian.net/browse/DHIS2-13898): Swap the order of layout validation to prioritise "no program"**  
Components: _[App] Line Listing_

**[DHIS2-13904](https://dhis2.atlassian.net/browse/DHIS2-13904): Scheduled date being hidden by program stage not respected**  
Components: _[App] Line Listing_

**[DHIS2-13994](https://dhis2.atlassian.net/browse/DHIS2-13994): cannot rename Program attributes section name**  
Components: _[App] Maintenance_

**[DHIS2-14026](https://dhis2.atlassian.net/browse/DHIS2-14026): Cannot edit RelationshipType when TETAs and PAs differ**  
Components: _[App] Maintenance_

**[DHIS2-14291](https://dhis2.atlassian.net/browse/DHIS2-14291): Canvas is not white when map is downloaded**  
Components: _[App] Maps_

**[DHIS2-13982](https://dhis2.atlassian.net/browse/DHIS2-13982): Failure to generate report for data set with data element (category )**  
**[DHIS2-14265](https://dhis2.atlassian.net/browse/DHIS2-14265): Next period buttons for new event dialogue in tracker capture not working**  
Components: _[App] Tracker capture_

**[DHIS2-13889](https://dhis2.atlassian.net/browse/DHIS2-13889): Yes/no attribute as program rule variable**  
Components: _[App] Tracker capture_

**[DHIS2-12649](https://dhis2.atlassian.net/browse/DHIS2-12649): Tracker Capture App: Program with CC returns error on registration**  
Components: _[App] Tracker capture_

**[DHIS2-13832](https://dhis2.atlassian.net/browse/DHIS2-13832): Program rule variable error: V{event_id} in scheduled events**  
Components: _[App] Tracker capture_

**[DHIS2-7778](https://dhis2.atlassian.net/browse/DHIS2-7778): Compulsory property interferes among same DE in different program stages (with sections)**  
Components: _[App] Tracker capture_, _Frontend_

**[DHIS2-13145](https://dhis2.atlassian.net/browse/DHIS2-13145): coordinates type attribute doesn't enable the button to get coordinates from the map, that happens when it is used in custom form**  
Components: _[App] Tracker capture_

**[DHIS2-13712](https://dhis2.atlassian.net/browse/DHIS2-13712): Programrule dont trigger as expected in relationship**  
Components: _[App] Tracker capture_

**[DHIS2-11080](https://dhis2.atlassian.net/browse/DHIS2-11080): Enrollment Future dates error**  
Components: _[App] Tracker capture_

**[DHIS2-14147](https://dhis2.atlassian.net/browse/DHIS2-14147): Use dedicated endpoint for checking username**  
Components: _[App] User_

**[DHIS2-13914](https://dhis2.atlassian.net/browse/DHIS2-13914): User management table actions: "Add to group" should not select rows**  
Components: _[App] User_


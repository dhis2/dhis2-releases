# Patch 2.37.9 Release Note

- [Features](#features)
- [Bugs](#bugs)

## Features

**[DHIS2-13621](https://dhis2.atlassian.net/browse/DHIS2-13621): List TrackedEntityAttributes in CSV export for TrackedEntityInstances**  
Components: _[API] Tracker_

## Bugs

**[DHIS2-13456](https://dhis2.atlassian.net/browse/DHIS2-13456): deGroup does not work (Expression not supported) for indicators**  
Components: _[API] Analytics_

**[DHIS2-13700](https://dhis2.atlassian.net/browse/DHIS2-13700): [J,K] Analytics query fails for Event data item of type TEXT**  
Components: _[API] Analytics_

**[DHIS2-13478](https://dhis2.atlassian.net/browse/DHIS2-13478): No data shows after continuous/delta analytics run (lastyears=0)**  
Components: _[API] Analytics_

**[DHIS2-13429](https://dhis2.atlassian.net/browse/DHIS2-13429): All Previous Analytics data removed after partial "lastyears=2" run**  
Components: _[API] Analytics_

**[DHIS2-13479](https://dhis2.atlassian.net/browse/DHIS2-13479): Running full analytics does not remove continuous/delta table (analytics_0)**  
Components: _[API] Analytics_

**[DHIS2-13573](https://dhis2.atlassian.net/browse/DHIS2-13573): [I] NullPointer Exception in /query/events**  
Components: _[API] Analytics_

**[DHIS2-13514](https://dhis2.atlassian.net/browse/DHIS2-13514): [J, K] Analytics Continous Job Fails for New Program**  
Components: _[API] Analytics_

**[DHIS2-13633](https://dhis2.atlassian.net/browse/DHIS2-13633): [I] Data Elements of type Percentage returns 0.0 for null values**  
Components: _[API] Analytics_

**[DHIS2-13836](https://dhis2.atlassian.net/browse/DHIS2-13836): Installed app redirects to bundled app path doesn't work**  
Components: _[API] App management_

**[DHIS2-13837](https://dhis2.atlassian.net/browse/DHIS2-13837): Installed app redirects from index.action return 302 with no Location header**  
Components: _[API] App management_

**[DHIS2-13178](https://dhis2.atlassian.net/browse/DHIS2-13178): Error when removing expiry days set on program**  
Components: _[API] Metadata import-export_

**[DHIS2-13607](https://dhis2.atlassian.net/browse/DHIS2-13607): No entity found for query; Maintenance app/api endpoints**  
Components: _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-14191](https://dhis2.atlassian.net/browse/DHIS2-14191): CreatedBy field is changed when updating with createdBy = null**  
Components: _[API] Metadata model_

**[DHIS2-14114](https://dhis2.atlassian.net/browse/DHIS2-14114): SystemSettingManager.getSystemSetting causes performance issue**  
Components: _[API] Other_

**[DHIS2-13711](https://dhis2.atlassian.net/browse/DHIS2-13711): Regression in */* content-type negotiation**  
Components: _[API] Other_

**[DHIS2-13763](https://dhis2.atlassian.net/browse/DHIS2-13763): Token filter is not working**  
Components: _[API] Other_

**[DHIS2-13503](https://dhis2.atlassian.net/browse/DHIS2-13503): Upgrade jQuery version for login page**  
Components: _[API] Security_, _Frontend_

**[DHIS2-11731](https://dhis2.atlassian.net/browse/DHIS2-11731): TrackedEntityInstance endpoint does not include nested event notes**  
Components: _[API] Tracker_

**[DHIS2-14295](https://dhis2.atlassian.net/browse/DHIS2-14295): Enrollment of event in event program not found in preheat**  
Components: _[API] Tracker_

**[DHIS2-13422](https://dhis2.atlassian.net/browse/DHIS2-13422): Endpoint /trackedEntityInstances does not return assignedUser in events**  
Components: _[API] Tracker_

**[DHIS2-14040](https://dhis2.atlassian.net/browse/DHIS2-14040): Event property 'deleted' is not returned from api/events.json endpoint**  
Components: _[API] Tracker_

**[DHIS2-13281](https://dhis2.atlassian.net/browse/DHIS2-13281): Too many search results doesn't work correctly when maxt tei count > 4**  
Components: _[API] Tracker_

**[DHIS2-13076](https://dhis2.atlassian.net/browse/DHIS2-13076): Internal server error in /trackedEntityInstances/query when there are no filterable attributes**  
Components: _[API] Tracker_

**[DHIS2-13325](https://dhis2.atlassian.net/browse/DHIS2-13325): Remove redundant information from validation errors**  
Components: _[API] Tracker_

**[DHIS2-13484](https://dhis2.atlassian.net/browse/DHIS2-13484): Events for an org unit fail to import through Import/Export App unless there is at least one event in that program and org unit**  
Components: _[API] Tracker_

**[DHIS2-10376](https://dhis2.atlassian.net/browse/DHIS2-10376): When downloading event files as CSV they are labelled as metadata.csv**  
Components: _[API] Tracker_, _[App] Import-export_

**[DHIS2-12039](https://dhis2.atlassian.net/browse/DHIS2-12039): Slow PSQL queries when retrieving /events**  
Components: _[API] Tracker_

**[DHIS2-13840](https://dhis2.atlassian.net/browse/DHIS2-13840): Searching for attribute values containing "NV" results in malformed SQL and 500 internal error**  
Components: _[API] Tracker_

**[DHIS2-9761](https://dhis2.atlassian.net/browse/DHIS2-9761): Uploading profile image crashes for users without "View user"**  
Components: _[API] User_

**[DHIS2-12782](https://dhis2.atlassian.net/browse/DHIS2-12782): Incorrect Content-Type when requesting individual user settings fields**  
Components: _[API] User_

**[DHIS2-14355](https://dhis2.atlassian.net/browse/DHIS2-14355): Aggregate analytics for event data items with integer value type broken**  
Components: _[App] Analytics_

**[DHIS2-14001](https://dhis2.atlassian.net/browse/DHIS2-14001): Use "Complete" as label for enrollment widget**  
Components: _[App] Capture_

**[DHIS2-7913](https://dhis2.atlassian.net/browse/DHIS2-7913): Hidden fields should not be visible in event details**  
Components: _[App] Capture_

**[DHIS2-13906](https://dhis2.atlassian.net/browse/DHIS2-13906): d2:hasValue in program rule condition no longer working in Capture app**  
Components: _[App] Capture_

**[DHIS2-8210](https://dhis2.atlassian.net/browse/DHIS2-8210): Tracker Registration Form not displaying properly (sorting/order)**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-11514](https://dhis2.atlassian.net/browse/DHIS2-11514): Tracked entity attribute org unit code is undefined**  
Components: _[App] Capture_

**[DHIS2-12617](https://dhis2.atlassian.net/browse/DHIS2-12617): Users with edit access cannot add interpretations in Visualizer app**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-14035](https://dhis2.atlassian.net/browse/DHIS2-14035): [N] "Progressive" Analytics Cache Mode causes 500 server errors in Data Approvals**  
Components: _[App] Data approval_

**[DHIS2-14294](https://dhis2.atlassian.net/browse/DHIS2-14294): [N] Event reports shows Uid of a selected OU**  
Components: _[App] Event reports_

**[DHIS2-14304](https://dhis2.atlassian.net/browse/DHIS2-14304): Event export in import/export app fails**  
Components: _[App] Import-export_

**[DHIS2-13959](https://dhis2.atlassian.net/browse/DHIS2-13959): Error when export TEI with filter by TET**  
Components: _[App] Import-export_

**[DHIS2-13994](https://dhis2.atlassian.net/browse/DHIS2-13994): cannot rename Program attributes section name**  
Components: _[App] Maintenance_

**[DHIS2-13886](https://dhis2.atlassian.net/browse/DHIS2-13886): Creating validation rule left/right side expressions leads to javascript crash**  
Components: _[App] Maintenance_

**[DHIS2-14291](https://dhis2.atlassian.net/browse/DHIS2-14291): Canvas is not white when map is downloaded**  
Components: _[App] Maps_

**[DHIS2-8860](https://dhis2.atlassian.net/browse/DHIS2-8860): Duplicated system settings and duplicated "Default relative period for analysis"**  
Components: _[App] Settings_

**[DHIS2-12696](https://dhis2.atlassian.net/browse/DHIS2-12696): d2:round(), d2:ceil(), d2:floor() undefined when there is d2:daysBetween() within**  
Components: _[App] Tracker capture_

**[DHIS2-13889](https://dhis2.atlassian.net/browse/DHIS2-13889): Yes/no attribute as program rule variable**  
Components: _[App] Tracker capture_

**[DHIS2-12649](https://dhis2.atlassian.net/browse/DHIS2-12649): Tracker Capture App: Program with CC returns error on registration**  
Components: _[App] Tracker capture_

**[DHIS2-13832](https://dhis2.atlassian.net/browse/DHIS2-13832): Program rule variable error: V{event_id} in scheduled events**  
Components: _[App] Tracker capture_

**[DHIS2-7778](https://dhis2.atlassian.net/browse/DHIS2-7778): Compulsory property interferes among same DE in different program stages (with sections)**  
Components: _[App] Tracker capture_, _Frontend_

**[DHIS2-13817](https://dhis2.atlassian.net/browse/DHIS2-13817): In tracker capture program rules fail when a value is not present in an attribute evaluated in the condition**  
Components: _[App] Tracker capture_

**[DHIS2-13145](https://dhis2.atlassian.net/browse/DHIS2-13145): coordinates type attribute doesn't enable the button to get coordinates from the map, that happens when it is used in custom form**  
Components: _[App] Tracker capture_

**[DHIS2-13712](https://dhis2.atlassian.net/browse/DHIS2-13712): Programrule dont trigger as expected in relationship**  
Components: _[App] Tracker capture_

**[DHIS2-11080](https://dhis2.atlassian.net/browse/DHIS2-11080): Enrollment Future dates error**  
Components: _[App] Tracker capture_

**[DHIS2-13617](https://dhis2.atlassian.net/browse/DHIS2-13617): When opening profile for editing, program rules are not triggered on load**  
Components: _[App] Tracker capture_

**[DHIS2-14021](https://dhis2.atlassian.net/browse/DHIS2-14021): Created by - Users**  
Components: _[App] User Profile_


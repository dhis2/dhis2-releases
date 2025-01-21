# Patch 2.41.3 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-16451](https://dhis2.atlassian.net/browse/DHIS2-16451): Job scheduler: Add Push Analytics Job**  
Components: _[API] Job scheduler_

**[DHIS2-15462](https://dhis2.atlassian.net/browse/DHIS2-15462): Use dhis2 UI calendarInput component in forms**  
Components: _[App] Capture_

**[DHIS2-18250](https://dhis2.atlassian.net/browse/DHIS2-18250): Breadcrumb bar for event and enrollment pages**  
Components: _[App] Capture_

**[DHIS2-18017](https://dhis2.atlassian.net/browse/DHIS2-18017): [Related stages] Ability to unlink event from view event page**  
Components: _[App] Capture_

**[DHIS2-18422](https://dhis2.atlassian.net/browse/DHIS2-18422): [USERS APP]: allow users to remove deprecated authorities from user roles**  
Components: _[App] User_

**[DHIS2-18446](https://dhis2.atlassian.net/browse/DHIS2-18446): [USER APP]: communicate why user roles are not assignable**  
Components: _[App] User_

## Bugs

**[DHIS2-18337](https://dhis2.atlassian.net/browse/DHIS2-18337): Visualization API: Add more friendly name for org. units constants in response ("items")**  
Components: _[API] Analytics_

**[DHIS2-18045](https://dhis2.atlassian.net/browse/DHIS2-18045): Analytics API returns invalid "totalAggregationType"**  
Components: _[API] Analytics_

**[DHIS2-17994](https://dhis2.atlassian.net/browse/DHIS2-17994): OU from split show in hierarchy root**  
Components: _[API] Metadata model_

**[DHIS2-18135](https://dhis2.atlassian.net/browse/DHIS2-18135): perf: /options causes too many DB queries**  
Components: _[API] Metadata model_

**[DHIS2-17098](https://dhis2.atlassian.net/browse/DHIS2-17098): identifiable:token-filter may be too broad when matching ID**  
Components: _[API] Metadata model_

**[DHIS2-18423](https://dhis2.atlassian.net/browse/DHIS2-18423): [ORG UNIT SPLIT]: adds split organisation units to user org units**  
Components: _[API] Metadata model_

**[DHIS2-18020](https://dhis2.atlassian.net/browse/DHIS2-18020): User selected order of relative periods not respected in Visualization**  
Components: _[API] Other_

**[DHIS2-18187](https://dhis2.atlassian.net/browse/DHIS2-18187): Inbound SMS processing is broken by UserDetails refactoring**  
Components: _[API] SMS_, _[API] User_

**[DHIS2-18633](https://dhis2.atlassian.net/browse/DHIS2-18633): Notification template variables are not being populated in notifications using tracker app**  
Components: _[API] Tracker_

**[DHIS2-18586](https://dhis2.atlassian.net/browse/DHIS2-18586): Unable to save outbound sms in async operations**  
Components: _[API] Tracker_

**[DHIS2-18459](https://dhis2.atlassian.net/browse/DHIS2-18459): java.lang.NullPointerException: Cannot invoke "org.hisp.dhis.program.Program.getMaxTeiCountToReturn()"**  
Components: _[API] Tracker_

**[DHIS2-18591](https://dhis2.atlassian.net/browse/DHIS2-18591): Filtering events by occurredDate is considering scheduledDate when occurredDate is null**  
Components: _[API] Tracker_

**[DHIS2-18527](https://dhis2.atlassian.net/browse/DHIS2-18527): Inconsistent Relationship Unlinking Behavior Across Tracker Versions**  
Components: _[API] Tracker_

**[DHIS2-17671](https://dhis2.atlassian.net/browse/DHIS2-17671): Duplicate event entries around page boundaries in different pages when fetching tracker events using API**  
Components: _[API] Tracker_

**[DHIS2-17335](https://dhis2.atlassian.net/browse/DHIS2-17335): Event ownership is validated wrong in Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-15272](https://dhis2.atlassian.net/browse/DHIS2-15272): Unable to capture data for the last month of a program when expiry days are set to a value greater than 0**  
Components: _[API] Tracker_

**[DHIS2-15683](https://dhis2.atlassian.net/browse/DHIS2-15683): Server always accepts the date of tomorrow as enrollment date**  
Components: _[API] Tracker_

**[DHIS2-18319](https://dhis2.atlassian.net/browse/DHIS2-18319): /tracker/events exports notes with timestamps instead of dates**  
Components: _[API] Tracker_

**[DHIS2-14829](https://dhis2.atlassian.net/browse/DHIS2-14829): Tracker endpoints return wrong enrollment orgunit when multiple enrollments**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-18690](https://dhis2.atlassian.net/browse/DHIS2-18690): Deprecated API used in Tracker Capture loads entire TEI table into memory**  
**[DHIS2-18551](https://dhis2.atlassian.net/browse/DHIS2-18551): Registering new TEI fails with OWNERSHIP_ACCESS_DENIED**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-18692](https://dhis2.atlassian.net/browse/DHIS2-18692): Tracker Capture app crashes larger databases in version 41.x**  
Components: _[API] Tracker (deprecated)_, _[App] Tracker capture_

**[DHIS2-12536](https://dhis2.atlassian.net/browse/DHIS2-12536): Create TEI web api response headers.location has double '/api/api'**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-18355](https://dhis2.atlassian.net/browse/DHIS2-18355): [Related stages] Runtime error occurs when saving empty widget in Related stages"**  
Components: _[App] Capture_

**[DHIS2-18632](https://dhis2.atlassian.net/browse/DHIS2-18632): Sorting stage detail table on org. unit breaks the app**  
Components: _[App] Capture_

**[DHIS2-18614](https://dhis2.atlassian.net/browse/DHIS2-18614): Update Button Unresponsive When Single Date Selected in Date Range Filter (Working lists)**  
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

**[DHIS2-18369](https://dhis2.atlassian.net/browse/DHIS2-18369): Endless spinner when viewing interpretation of visualization**  
Components: _[App] Data visualizer_

**[DHIS2-18330](https://dhis2.atlassian.net/browse/DHIS2-18330): Error when trying to delete a visualization report in Line Listing App**  
Components: _[App] Line Listing_

**[DHIS2-18597](https://dhis2.atlassian.net/browse/DHIS2-18597): "option group to show"  doesn't populate already created option groups while creating program rules**  
Components: _[App] Maintenance_

**[DHIS2-18073](https://dhis2.atlassian.net/browse/DHIS2-18073): Inability to Assign Custom Attributes to Metadata Objects Properly**  
Components: _[App] Maintenance_

**[DHIS2-18427](https://dhis2.atlassian.net/browse/DHIS2-18427): Thematic Layer: 0 is confused with No data in tooltip and pop up**  
Components: _[App] Maps_

**[DHIS2-17799](https://dhis2.atlassian.net/browse/DHIS2-17799): Error when try to delete a file in an event using Tracker Capture App**  
Components: _[App] Tracker capture_


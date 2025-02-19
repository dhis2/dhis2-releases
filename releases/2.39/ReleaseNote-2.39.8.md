# Patch 2.39.8 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-15462](https://dhis2.atlassian.net/browse/DHIS2-15462): Use dhis2 UI calendarInput component in forms**  
Components: _[App] Capture_

**[DHIS2-18250](https://dhis2.atlassian.net/browse/DHIS2-18250): Breadcrumb bar for event and enrollment pages**  
Components: _[App] Capture_

**[DHIS2-17991](https://dhis2.atlassian.net/browse/DHIS2-17991): [Related stages] Show org.unit selector in "Enter details now"**  
Components: _[App] Capture_

**[DHIS2-17792](https://dhis2.atlassian.net/browse/DHIS2-17792): Org unit context in forms**  
Components: _[App] Capture_

## Bugs

**[DHIS2-18377](https://dhis2.atlassian.net/browse/DHIS2-18377): Analytics csv download is slow**  
Components: _[API] Analytics_

**[DHIS2-18182](https://dhis2.atlassian.net/browse/DHIS2-18182): Analytics API: No data returned for data element details/operands as filter**  
Components: _[API] Analytics_

**[DHIS2-18135](https://dhis2.atlassian.net/browse/DHIS2-18135): perf: /options causes too many DB queries**  
Components: _[API] Metadata model_

**[DHIS2-17098](https://dhis2.atlassian.net/browse/DHIS2-17098): identifiable:token-filter may be too broad when matching ID**  
Components: _[API] Metadata model_

**[DHIS2-18423](https://dhis2.atlassian.net/browse/DHIS2-18423): [ORG UNIT SPLIT]: adds split organisation units to user org units**  
Components: _[API] Metadata model_

**[DHIS2-18020](https://dhis2.atlassian.net/browse/DHIS2-18020): User selected order of relative periods not respected in Visualization**  
Components: _[API] Other_

**[DHIS2-15272](https://dhis2.atlassian.net/browse/DHIS2-15272): Unable to capture data for the last month of a program when expiry days are set to a value greater than 0**  
Components: _[API] Tracker_

**[DHIS2-18319](https://dhis2.atlassian.net/browse/DHIS2-18319): /tracker/events exports notes with timestamps instead of dates**  
Components: _[API] Tracker_

**[DHIS2-14829](https://dhis2.atlassian.net/browse/DHIS2-14829): Tracker endpoints return wrong enrollment orgunit when multiple enrollments**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-18206](https://dhis2.atlassian.net/browse/DHIS2-18206): Incorrect "Follow-up" Filter Applied in Saved Working Lists**  
Components: _[API] Tracker_

**[DHIS2-18252](https://dhis2.atlassian.net/browse/DHIS2-18252): Created date of data value can be defined by the user**  
Components: _[API] Tracker_

**[DHIS2-18225](https://dhis2.atlassian.net/browse/DHIS2-18225): Any change to a Completed Enrollment delete `completedAt` and `completedBy` fields**  
Components: _[API] Tracker_

**[DHIS2-18551](https://dhis2.atlassian.net/browse/DHIS2-18551): Registering new TEI fails with OWNERSHIP_ACCESS_DENIED**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-12536](https://dhis2.atlassian.net/browse/DHIS2-12536): Create TEI web api response headers.location has double '/api/api'**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-17854](https://dhis2.atlassian.net/browse/DHIS2-17854): Improve validation performance for values ​​assigned from the rules engine**  
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

**[DHIS2-18056](https://dhis2.atlassian.net/browse/DHIS2-18056): Linking tracked entities through new relationship search adds invalid values to store**  
Components: _[App] Capture_

**[DHIS2-17970](https://dhis2.atlassian.net/browse/DHIS2-17970): [Related stages] Auto-select orgunit if there is only one available**  
Components: _[App] Capture_

**[DHIS2-18215](https://dhis2.atlassian.net/browse/DHIS2-18215): Selected working list filter not persisted when navigating back from dashboard**  
Components: _[App] Capture_

**[DHIS2-18081](https://dhis2.atlassian.net/browse/DHIS2-18081): Problem with date format when scheduling an event**  
Components: _[App] Capture_

**[DHIS2-18330](https://dhis2.atlassian.net/browse/DHIS2-18330): Error when trying to delete a visualization report in Line Listing App**  
Components: _[App] Line Listing_

**[DHIS2-18073](https://dhis2.atlassian.net/browse/DHIS2-18073): Inability to Assign Custom Attributes to Metadata Objects Properly**  
Components: _[App] Maintenance_

**[DHIS2-18427](https://dhis2.atlassian.net/browse/DHIS2-18427): Thematic Layer: 0 is confused with No data in tooltip and pop up**  
Components: _[App] Maps_

**[DHIS2-16395](https://dhis2.atlassian.net/browse/DHIS2-16395): OrgUnit translation label doesn't show properly on OrgUnit layer in Laos language**  
Components: _[App] Maps_

**[DHIS2-18138](https://dhis2.atlassian.net/browse/DHIS2-18138): Event data value audit not working in Tracker Capture**  
Components: _[App] Tracker capture_


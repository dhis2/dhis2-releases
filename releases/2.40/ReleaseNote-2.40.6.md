# Patch 2.40.6 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-17771](https://dhis2.atlassian.net/browse/DHIS2-17771): Org unit context in tables and lists**  
Components: _[App] Capture_

**[DHIS2-18250](https://dhis2.atlassian.net/browse/DHIS2-18250): Breadcrumb bar for event and enrollment pages**  
Components: _[App] Capture_

**[DHIS2-17991](https://dhis2.atlassian.net/browse/DHIS2-17991): [Related stages] Show org.unit selector in "Enter details now"**  
Components: _[App] Capture_

**[DHIS2-17792](https://dhis2.atlassian.net/browse/DHIS2-17792): Org unit context in forms**  
Components: _[App] Capture_

**[DHIS2-15238](https://dhis2.atlassian.net/browse/DHIS2-15238): Show and filter on assigned user in Program stage working list**  
Components: _[App] Capture_

**[DHIS2-17770](https://dhis2.atlassian.net/browse/DHIS2-17770): Org unit contextualization in self-contained widgets**  
Components: _[App] Capture_

## Bugs

**[DHIS2-18182](https://dhis2.atlassian.net/browse/DHIS2-18182): Analytics API: No data returned for data element details/operands as filter**  
Components: _[API] Analytics_

**[DHIS2-17564](https://dhis2.atlassian.net/browse/DHIS2-17564): defaults parameter not working**  
Components: _[API] Metadata model_

**[DHIS2-15701](https://dhis2.atlassian.net/browse/DHIS2-15701): api/account/linkedAccounts returns excessive data per each user**  
Components: _[API] Metadata model_, _[API] User_

**[DHIS2-17834](https://dhis2.atlassian.net/browse/DHIS2-17834): Incorrect paginated result in ProgramNotificationTemplate controller**  
Components: _[API] Tracker_

**[DHIS2-18319](https://dhis2.atlassian.net/browse/DHIS2-18319): /tracker/events exports notes with timestamps instead of dates**  
Components: _[API] Tracker_

**[DHIS2-14829](https://dhis2.atlassian.net/browse/DHIS2-14829): Tracker endpoints return wrong enrollment orgunit when multiple enrollments**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-18206](https://dhis2.atlassian.net/browse/DHIS2-18206): Incorrect "Follow-up" Filter Applied in Saved Working Lists**  
Components: _[API] Tracker_

**[DHIS2-18279](https://dhis2.atlassian.net/browse/DHIS2-18279): Incorrect follow-up value while saving program working list**  
Components: _[API] Tracker_

**[DHIS2-18252](https://dhis2.atlassian.net/browse/DHIS2-18252): Created date of data value can be defined by the user**  
Components: _[API] Tracker_

**[DHIS2-18225](https://dhis2.atlassian.net/browse/DHIS2-18225): Any change to a Completed Enrollment delete `completedAt` and `completedBy` fields**  
Components: _[API] Tracker_

**[DHIS2-16122](https://dhis2.atlassian.net/browse/DHIS2-16122): The completedAt field remains populated when updating an event from complete to active, returning incorrect data when "Only include completed events" checkbox is selected**  
Components: _[API] Tracker_

**[DHIS2-18238](https://dhis2.atlassian.net/browse/DHIS2-18238): Capture app posting incorrect data for working list**  
Components: _[App] Capture_

**[DHIS2-17018](https://dhis2.atlassian.net/browse/DHIS2-17018): Improve text when trying to access closed program**  
Components: _[App] Capture_

**[DHIS2-17135](https://dhis2.atlassian.net/browse/DHIS2-17135): Adjust string for user assignment error message**  
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

**[DHIS2-17530](https://dhis2.atlassian.net/browse/DHIS2-17530): FILE DE or TEA is not a link**  
Components: _[App] Capture_

**[DHIS2-18116](https://dhis2.atlassian.net/browse/DHIS2-18116): Clicking save after entering a non-integer in an age field freezes the app**  
Components: _[App] Capture_

**[DHIS2-9155](https://dhis2.atlassian.net/browse/DHIS2-9155): Boolean data types no longer sum in pivots "totals" and "Subtotals"**  
Components: _[App] Data visualizer_

**[DHIS2-17824](https://dhis2.atlassian.net/browse/DHIS2-17824): Challenge importing organisation unit group membership from CSV file**  
Components: _[App] Import-export_

**[DHIS2-18118](https://dhis2.atlassian.net/browse/DHIS2-18118): CSV import for OUG membership not working**  
Components: _[App] Import-export_

**[DHIS2-18073](https://dhis2.atlassian.net/browse/DHIS2-18073): Inability to Assign Custom Attributes to Metadata Objects Properly**  
Components: _[App] Maintenance_

**[DHIS2-16395](https://dhis2.atlassian.net/browse/DHIS2-16395): OrgUnit translation label doesn't show properly on OrgUnit layer in Laos language**  
Components: _[App] Maps_

**[DHIS2-18138](https://dhis2.atlassian.net/browse/DHIS2-18138): Event data value audit not working in Tracker Capture**  
Components: _[App] Tracker capture_


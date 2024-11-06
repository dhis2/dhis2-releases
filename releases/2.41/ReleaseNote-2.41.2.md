# Patch 2.41.2 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-17419](https://dhis2.atlassian.net/browse/DHIS2-17419): Job Scheduler - Manual revert of jobs stuck in RUNNING status**  
Components: _[API] Job scheduler_

**[DHIS2-11836](https://dhis2.atlassian.net/browse/DHIS2-11836): Respect "Block entry form" setting**  
Components: _[App] Capture_

**[DHIS2-17991](https://dhis2.atlassian.net/browse/DHIS2-17991): [Related stages] Show org.unit selector in "Enter details now"**  
Components: _[App] Capture_

**[DHIS2-17792](https://dhis2.atlassian.net/browse/DHIS2-17792): Org unit context in forms**  
Components: _[App] Capture_

**[DHIS2-17771](https://dhis2.atlassian.net/browse/DHIS2-17771): Org unit context in tables and lists**  
Components: _[App] Capture_

**[DHIS2-17956](https://dhis2.atlassian.net/browse/DHIS2-17956): Show name for org. unit value type in changelog**  
Components: _[App] Capture_

**[DHIS2-15238](https://dhis2.atlassian.net/browse/DHIS2-15238): Show and filter on assigned user in Program stage working list**  
Components: _[App] Capture_

**[DHIS2-17048](https://dhis2.atlassian.net/browse/DHIS2-17048): Skip/unskip events in stages and events Widget**  
Components: _[App] Capture_

**[DHIS2-17878](https://dhis2.atlassian.net/browse/DHIS2-17878): Delete event action in stages and events widget**  
Components: _[App] Capture_

**[DHIS2-15462](https://dhis2.atlassian.net/browse/DHIS2-15462): Use dhis2 UI calendarInput component in forms**  
Components: _[App] Capture_

**[DHIS2-15463](https://dhis2.atlassian.net/browse/DHIS2-15463): Use dhis2 UI calendarInput component in working lists**  
Components: _[App] Capture_

## Bugs

**[DHIS2-18182](https://dhis2.atlassian.net/browse/DHIS2-18182): Analytics API: No data returned for data element details/operands as filter**  
Components: _[API] Analytics_

**[DHIS2-17549](https://dhis2.atlassian.net/browse/DHIS2-17549): orgUnit levels should be dynamic in TE analytics export**  
Components: _[API] Analytics_

**[DHIS2-17564](https://dhis2.atlassian.net/browse/DHIS2-17564): defaults parameter not working**  
Components: _[API] Metadata model_

**[DHIS2-14847](https://dhis2.atlassian.net/browse/DHIS2-14847): Dashboard table code column not unique in some databases**  
Components: _[API] Metadata model_

**[DHIS2-17784](https://dhis2.atlassian.net/browse/DHIS2-17784): Fix linked_accounts logic so disabled accounts do not block enabled accounts**  
Components: _[API] Other_

**[DHIS2-17496](https://dhis2.atlassian.net/browse/DHIS2-17496): Make sure API tokens are backward compatible**  
Components: _[API] Security_

**[DHIS2-18096](https://dhis2.atlassian.net/browse/DHIS2-18096): Not possible to log in after upgrade to 2.41 due to username validation in authentication controller**  
Components: _[API] Security_

**[DHIS2-18206](https://dhis2.atlassian.net/browse/DHIS2-18206): Incorrect "Follow-up" Filter Applied in Saved Working Lists**  
Components: _[API] Tracker_

**[DHIS2-17715](https://dhis2.atlassian.net/browse/DHIS2-17715): Import failing when org unit code is null**  
Components: _[API] Tracker_

**[DHIS2-18252](https://dhis2.atlassian.net/browse/DHIS2-18252): Created date of data value can be defined by the user**  
Components: _[API] Tracker_

**[DHIS2-18225](https://dhis2.atlassian.net/browse/DHIS2-18225): Any change to a Completed Enrollment delete `completedAt` and `completedBy` fields**  
Components: _[API] Tracker_

**[DHIS2-17834](https://dhis2.atlassian.net/browse/DHIS2-17834): Incorrect paginated result in ProgramNotificationTemplate controller**  
Components: _[API] Tracker_

**[DHIS2-16122](https://dhis2.atlassian.net/browse/DHIS2-16122): The completedAt field remains populated when updating an event from complete to active, returning incorrect data when "Only include completed events" checkbox is selected**  
Components: _[API] Tracker_

**[DHIS2-17515](https://dhis2.atlassian.net/browse/DHIS2-17515): Referential integrity between ProgramRuleAction and ProgramNotificationTemplate**  
Components: _[API] Tracker_

**[DHIS2-17880](https://dhis2.atlassian.net/browse/DHIS2-17880): User is allowed to transfer TE to org unit not assigned to program**  
Components: _[API] Tracker_

**[DHIS2-18065](https://dhis2.atlassian.net/browse/DHIS2-18065): Login fails when there is attribute values assigned to the user**  
Components: _[API] User_

**[DHIS2-17863](https://dhis2.atlassian.net/browse/DHIS2-17863): Unable to make a linked account in v40.4.1**  
Components: _[API] User_

**[DHIS2-17253](https://dhis2.atlassian.net/browse/DHIS2-17253): App version not picked up by header bar in App Management**  
Components: _[App] App management_

**[DHIS2-16010](https://dhis2.atlassian.net/browse/DHIS2-16010): App crash on invalid ProgramId**  
Components: _[App] Capture_

**[DHIS2-18028](https://dhis2.atlassian.net/browse/DHIS2-18028): [Related stages] User is able to add linked event in non-repeatable stage with eventCount > 0**  
Components: _[App] Capture_

**[DHIS2-17978](https://dhis2.atlassian.net/browse/DHIS2-17978): Missing program icons make program names unreadable**  
Components: _[App] Capture_

**[DHIS2-18056](https://dhis2.atlassian.net/browse/DHIS2-18056): Linking tracked entities through new relationship search adds invalid values to store**  
Components: _[App] Capture_

**[DHIS2-16993](https://dhis2.atlassian.net/browse/DHIS2-16993): Changelog: Text and long text DEs are missing arrows when deleted**  
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

**[DHIS2-17971](https://dhis2.atlassian.net/browse/DHIS2-17971): ProgramRules for specific ProgramStage not being triggered**  
Components: _[App] Capture_

**[DHIS2-9155](https://dhis2.atlassian.net/browse/DHIS2-9155): Boolean data types no longer sum in pivots "totals" and "Subtotals"**  
Components: _[App] Data visualizer_

**[DHIS2-17955](https://dhis2.atlassian.net/browse/DHIS2-17955): Improve Data Visualizer with fixed period "Weekly (Start Sunday)" labels**  
Components: _[App] Data visualizer_

**[DHIS2-17824](https://dhis2.atlassian.net/browse/DHIS2-17824): Challenge importing organisation unit group membership from CSV file**  
Components: _[App] Import-export_

**[DHIS2-18118](https://dhis2.atlassian.net/browse/DHIS2-18118): CSV import for OUG membership not working**  
Components: _[App] Import-export_

**[DHIS2-15976](https://dhis2.atlassian.net/browse/DHIS2-15976): Data element created date overwritten to date of update**  
Components: _[App] Import-export_

**[DHIS2-16395](https://dhis2.atlassian.net/browse/DHIS2-16395): OrgUnit translation label doesn't show properly on OrgUnit layer in Laos language**  
Components: _[App] Maps_

**[DHIS2-18138](https://dhis2.atlassian.net/browse/DHIS2-18138): Event data value audit not working in Tracker Capture**  
Components: _[App] Tracker capture_


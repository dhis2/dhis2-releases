# Patch 2.40.7 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-18837](https://dhis2.atlassian.net/browse/DHIS2-18837): Support other authentication schemes for Route API**  
Components: _[API] Other_, _[App] Route Manager_

**[DHIS2-17192](https://dhis2.atlassian.net/browse/DHIS2-17192): Show related stages Widget on registration page**  
Components: _[App] Capture_

**[DHIS2-15462](https://dhis2.atlassian.net/browse/DHIS2-15462): Use dhis2 UI calendarInput component in forms**  
Components: _[App] Capture_

**[DHIS2-18017](https://dhis2.atlassian.net/browse/DHIS2-18017): [Related stages] Ability to unlink event from view event page**  
Components: _[App] Capture_

## Bugs

**[DHIS2-18845](https://dhis2.atlassian.net/browse/DHIS2-18845): Analytics event/enroll query: IN filter not working for Org. Unit DE**  
Components: _[API] Analytics_

**[DHIS2-18738](https://dhis2.atlassian.net/browse/DHIS2-18738): Analytics table not generated for the first week when registering weekly data**  
Components: _[API] Analytics_

**[DHIS2-18337](https://dhis2.atlassian.net/browse/DHIS2-18337): Visualization API: Add more friendly name for org. units constants in response ("items")**  
Components: _[API] Analytics_

**[DHIS2-16265](https://dhis2.atlassian.net/browse/DHIS2-16265): Requested order of periods not always respected**  
Components: _[API] Analytics_

**[DHIS2-18702](https://dhis2.atlassian.net/browse/DHIS2-18702): Error when deleting a program because there is a mapview associated that was not deleted**  
Components: _[API] Metadata model_

**[DHIS2-17994](https://dhis2.atlassian.net/browse/DHIS2-17994): OU from split show in hierarchy root**  
Components: _[API] Metadata model_

**[DHIS2-18135](https://dhis2.atlassian.net/browse/DHIS2-18135): perf: /options causes too many DB queries**  
Components: _[API] Metadata model_

**[DHIS2-17098](https://dhis2.atlassian.net/browse/DHIS2-17098): identifiable:token-filter may be too broad when matching ID**  
Components: _[API] Metadata model_

**[DHIS2-18423](https://dhis2.atlassian.net/browse/DHIS2-18423): [ORG UNIT SPLIT]: adds split organisation units to user org units**  
Components: _[API] Metadata model_

**[DHIS2-17596](https://dhis2.atlassian.net/browse/DHIS2-17596): User cannot log off when they log in via OIDC when using linked accounts**  
Components: _[API] Other_

**[DHIS2-18020](https://dhis2.atlassian.net/browse/DHIS2-18020): User selected order of relative periods not respected in Visualization**  
Components: _[API] Other_

**[DHIS2-15891](https://dhis2.atlassian.net/browse/DHIS2-15891): Impossibility of saving an event in Capture App, when there is a Program Rule Action associated to a data element with Date value type**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-18089](https://dhis2.atlassian.net/browse/DHIS2-18089): A program rule executed on import fails to get a value from a previous event (Backports)**  
Components: _[API] Program rules_

**[DHIS2-17806](https://dhis2.atlassian.net/browse/DHIS2-17806): Program Stage Notification not sent on 39 & 40 when there are multiple actions defined with Send Message for Program Rule**  
Components: _[API] Tracker_

**[DHIS2-17864](https://dhis2.atlassian.net/browse/DHIS2-17864): Event and enrollment notes don't return storedAt time component on collection endpoints**  
Components: _[API] Tracker_

**[DHIS2-18633](https://dhis2.atlassian.net/browse/DHIS2-18633): Notification template variables are not being populated in notifications using tracker app**  
Components: _[API] Tracker_

**[DHIS2-18577](https://dhis2.atlassian.net/browse/DHIS2-18577): ProgramRule notification are not sent in 2.40 using capture app**  
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

**[DHIS2-18551](https://dhis2.atlassian.net/browse/DHIS2-18551): Registering new TEI fails with OWNERSHIP_ACCESS_DENIED**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-14864](https://dhis2.atlassian.net/browse/DHIS2-14864): TEI Import with delete strategy deletes on dry run**  
Components: _[API] Tracker (deprecated)_, _[App] Import-export_

**[DHIS2-12536](https://dhis2.atlassian.net/browse/DHIS2-12536): Create TEI web api response headers.location has double '/api/api'**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-18655](https://dhis2.atlassian.net/browse/DHIS2-18655): Cannot switch accounts in v40.6.0**  
Components: _[API] User_

**[DHIS2-18582](https://dhis2.atlassian.net/browse/DHIS2-18582): Data element with number option set value does not show in stages & event widget on Capture App**  
Components: _[App] Capture_

**[DHIS2-18902](https://dhis2.atlassian.net/browse/DHIS2-18902): Searching for a TEI in protected program (break the glass) exits the program context in top bar**  
Components: _[App] Capture_

**[DHIS2-18673](https://dhis2.atlassian.net/browse/DHIS2-18673): Capture: profile widget allows saving when validation errors are present**  
Components: _[App] Capture_

**[DHIS2-18668](https://dhis2.atlassian.net/browse/DHIS2-18668): Possible to delete TE from event page**  
Components: _[App] Capture_

**[DHIS2-18836](https://dhis2.atlassian.net/browse/DHIS2-18836): Profile widget displays "false profile" when loading**  
Components: _[App] Capture_

**[DHIS2-18355](https://dhis2.atlassian.net/browse/DHIS2-18355): [Related stages] Runtime error occurs when saving empty widget in Related stages"**  
Components: _[App] Capture_

**[DHIS2-18632](https://dhis2.atlassian.net/browse/DHIS2-18632): Sorting stage detail table on org. unit breaks the app**  
Components: _[App] Capture_

**[DHIS2-18614](https://dhis2.atlassian.net/browse/DHIS2-18614): Update Button Unresponsive When Single Date Selected in Date Range Filter (Working lists)**  
Components: _[App] Capture_

**[DHIS2-17854](https://dhis2.atlassian.net/browse/DHIS2-17854): Improve validation performance for values ​​assigned from the rules engine**  
Components: _[App] Capture_

**[DHIS2-16801](https://dhis2.atlassian.net/browse/DHIS2-16801): Events scheduled for today's date should show "today" in stages/event list**  
Components: _[App] Capture_

**[DHIS2-17519](https://dhis2.atlassian.net/browse/DHIS2-17519): App crashing when opening new event form from view event**  
Components: _[App] Capture_

**[DHIS2-18150](https://dhis2.atlassian.net/browse/DHIS2-18150): User has to click out of range filter for update button to trigger**  
Components: _[App] Capture_

**[DHIS2-18599](https://dhis2.atlassian.net/browse/DHIS2-18599): TEI import dry run is actually performing the import**  
Components: _[App] Import-export_

**[DHIS2-18330](https://dhis2.atlassian.net/browse/DHIS2-18330): Error when trying to delete a visualization report in Line Listing App**  
Components: _[App] Line Listing_

**[DHIS2-18365](https://dhis2.atlassian.net/browse/DHIS2-18365): Mandatory Attribute not being respected as Mandatory**  
Components: _[App] Maintenance_, _[App] User_, _[Core] Attributes_

**[DHIS2-18597](https://dhis2.atlassian.net/browse/DHIS2-18597): "option group to show"  doesn't populate already created option groups while creating program rules**  
Components: _[App] Maintenance_

**[DHIS2-18427](https://dhis2.atlassian.net/browse/DHIS2-18427): Thematic Layer: 0 is confused with No data in tooltip and pop up**  
Components: _[App] Maps_

**[DHIS2-17799](https://dhis2.atlassian.net/browse/DHIS2-17799): Error when try to delete a file in an event using Tracker Capture App**  
Components: _[App] Tracker capture_

**[DHIS2-18460](https://dhis2.atlassian.net/browse/DHIS2-18460): system.session.timeout not enforced when using a cluster and Redis**  
Components: _[Core] General_


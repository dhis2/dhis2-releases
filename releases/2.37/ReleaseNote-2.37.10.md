# Patch 2.37.10 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-14208](https://dhis2.atlassian.net/browse/DHIS2-14208): [N] Support unlogged tables in analytics export**  
Components: _[API] Analytics_

**[DHIS2-14531](https://dhis2.atlassian.net/browse/DHIS2-14531): Create dedicated ping endpoint**  
Components: _[API] Other_

**[DHIS2-12749](https://dhis2.atlassian.net/browse/DHIS2-12749): Add code field to category option group set**  
Components: _[App] Maintenance_

**[DHIS2-14440](https://dhis2.atlassian.net/browse/DHIS2-14440): Support facility symbols in SVG-format**  
Components: _[App] Maps_

## Bugs

**[DHIS2-12152](https://dhis2.atlassian.net/browse/DHIS2-12152): Event analytics: Integer data element with decimal number filter causes a 500**  
Components: _[API] Analytics_

**[DHIS2-14561](https://dhis2.atlassian.net/browse/DHIS2-14561): [B23] Event analytics does not recognize no value "NV" as valid query filter for numeric values**  
Components: _[API] Analytics_

**[DHIS2-15093](https://dhis2.atlassian.net/browse/DHIS2-15093): Performance issue in /analytics**  
Components: _[API] Analytics_

**[DHIS2-14206](https://dhis2.atlassian.net/browse/DHIS2-14206): [N] Visualizations endpoint does not allow decimal values for axes props**  
Components: _[API] Analytics_

**[DHIS2-14910](https://dhis2.atlassian.net/browse/DHIS2-14910): [D23] Remove existing core apps from Dashboard search results**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14434](https://dhis2.atlassian.net/browse/DHIS2-14434): [N] Data Visualizer: Excel download exports numbers as text**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-13928](https://dhis2.atlassian.net/browse/DHIS2-13928): Request parameter binding errors cause internal server error response**  
Components: _[API] Data value set_

**[DHIS2-14736](https://dhis2.atlassian.net/browse/DHIS2-14736): Events endpoint fails when updating existing event**  
Components: _[API] Events_

**[DHIS2-15021](https://dhis2.atlassian.net/browse/DHIS2-15021): Filter events in SEARCH orgunit fails when the program is PROTECTED**  
Components: _[API] Events_

**[DHIS2-13135](https://dhis2.atlassian.net/browse/DHIS2-13135): Event pageSize is not respected when more than 1 category**  
Components: _[API] Events_

**[DHIS2-12934](https://dhis2.atlassian.net/browse/DHIS2-12934): Unexpected change of dueDate if a datavalue is updated**  
Components: _[API] Events_

**[DHIS2-13656](https://dhis2.atlassian.net/browse/DHIS2-13656): event org units are different depending on the API query**  
Components: _[API] Events_

**[DHIS2-14476](https://dhis2.atlassian.net/browse/DHIS2-14476): [A23] paging=false and skipPaging=true are not working on api/events or api/enrollments**  
Components: _[API] Events_, _[API] Other_

**[DHIS2-14105](https://dhis2.atlassian.net/browse/DHIS2-14105): Cannot Import Program Rule Actions into 2.37.8 or 2.38.1.1**  
Components: _[API] Metadata import-export_, _[API] Program rules_, _[App] Import-export_

**[DHIS2-11846](https://dhis2.atlassian.net/browse/DHIS2-11846): api/programs/[uid]/metadata endpoint fails with custom attribute**  
Components: _[API] Metadata import-export_

**[DHIS2-14550](https://dhis2.atlassian.net/browse/DHIS2-14550): Sharing Patch Add command replaces, instead of adding**  
Components: _[API] Metadata import-export_

**[DHIS2-8953](https://dhis2.atlassian.net/browse/DHIS2-8953): Unable to delete OrganisationUnit when present in OrganisationUnit scopes**  
Components: _[API] Metadata model_

**[DHIS2-14858](https://dhis2.atlassian.net/browse/DHIS2-14858): [C23] Interpretations failing on Maps application**  
Components: _[API] Other_

**[DHIS2-14733](https://dhis2.atlassian.net/browse/DHIS2-14733): Program rule fails to assign when field is not in a program stage**  
Components: _[API] Program rules_, _[App] Tracker capture_

**[DHIS2-14721](https://dhis2.atlassian.net/browse/DHIS2-14721): /enrollment and and /tracker/enrollment endpoints are not working in 2.37**  
Components: _[API] Tracker_

**[DHIS2-15145](https://dhis2.atlassian.net/browse/DHIS2-15145): enrolments endpoint does not use capture scope when program is protected or closed**  
Components: _[API] Tracker_

**[DHIS2-14917](https://dhis2.atlassian.net/browse/DHIS2-14917): Rule-engine triggered by program event in old tracker can cause performance issues**  
Components: _[API] Tracker_

**[DHIS2-13984](https://dhis2.atlassian.net/browse/DHIS2-13984): Capture app unable to save events for program rule that assigns long decimals**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-14524](https://dhis2.atlassian.net/browse/DHIS2-14524): Createdbyuserinfo and lastupdatedbyuserinfo jsonb fields in programinstance are all blank (Old Tracker Capture)**  
Components: _[API] Tracker_

**[DHIS2-14497](https://dhis2.atlassian.net/browse/DHIS2-14497): The events cannot be filtered by the scheduled date**  
Components: _[API] Tracker_

**[DHIS2-14560](https://dhis2.atlassian.net/browse/DHIS2-14560): Sort order not respected for tracked entity attributes**  
Components: _[API] Tracker_

**[DHIS2-11625](https://dhis2.atlassian.net/browse/DHIS2-11625): TEIs are not filterable by potentialDuplicate property**  
Components: _[API] Tracker_

**[DHIS2-14362](https://dhis2.atlassian.net/browse/DHIS2-14362): TEIs are not filterable by potentialDuplicate property (NTI)**  
Components: _[API] Tracker_

**[DHIS2-11500](https://dhis2.atlassian.net/browse/DHIS2-11500): Inconsistent API response for superuser in api/trackedEntityInstances**  
Components: _[API] Tracker_

**[DHIS2-14995](https://dhis2.atlassian.net/browse/DHIS2-14995): When replicating a user, the new user's lastlogin is copied instead of being set to null**  
Components: _[API] User_, _[App] User_

**[DHIS2-14183](https://dhis2.atlassian.net/browse/DHIS2-14183): Make Upload date unambiguous**  
Components: _[App] App management_

**[DHIS2-11345](https://dhis2.atlassian.net/browse/DHIS2-11345): d2:length function for LONG_TEXT field**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-14868](https://dhis2.atlassian.net/browse/DHIS2-14868): All of Search mode header should be clickable**  
Components: _[App] Capture_

**[DHIS2-14340](https://dhis2.atlassian.net/browse/DHIS2-14340): Text values are not sorted in Stages&Events-widget**  
Components: _[App] Capture_

**[DHIS2-14352](https://dhis2.atlassian.net/browse/DHIS2-14352): `d2:oizp` doesn't work**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-14132](https://dhis2.atlassian.net/browse/DHIS2-14132): Dashboards Header Bar is not translated**  
Components: _[App] Dashboard_

**[DHIS2-6556](https://dhis2.atlassian.net/browse/DHIS2-6556): [M] Error in Dashboard when different access rights between dashboard and objects**  
Components: _[App] Dashboard_

**[DHIS2-13088](https://dhis2.atlassian.net/browse/DHIS2-13088): Aggregate data entry for Sub-organisation Unit is not working (form with no data entry  fields)**  
Components: _[App] Data entry_

**[DHIS2-14930](https://dhis2.atlassian.net/browse/DHIS2-14930): Struts Data Entry App: update frontend validation for COORDINATE valueType**  
Components: _[App] Data entry_

**[DHIS2-14188](https://dhis2.atlassian.net/browse/DHIS2-14188): Long text does not display in pivot tables in data visualizer app**  
Components: _[App] Data visualizer_

**[DHIS2-15315](https://dhis2.atlassian.net/browse/DHIS2-15315): Unable to rename a visualisations**  
Components: _[App] Data visualizer_, _[App] Event reports_, _[App] Event visualizer_

**[DHIS2-14850](https://dhis2.atlassian.net/browse/DHIS2-14850): DV is crashing when opening the org unit dialog for a chart originating from DHIS2 Maps**  
Components: _[App] Data visualizer_, _[App] Maps_

**[DHIS2-14693](https://dhis2.atlassian.net/browse/DHIS2-14693): “Require data elements  to be part of data set" in Settings prevents data import**  
Components: _[App] Import-export_

**[DHIS2-11265](https://dhis2.atlassian.net/browse/DHIS2-11265): Data export UI option wrongly implies only first level descendants**  
Components: _[App] Import-export_

**[DHIS2-12479](https://dhis2.atlassian.net/browse/DHIS2-12479): Import - Export app crashing for metadata import in update strategy**  
Components: _[App] Import-export_

**[DHIS2-15516](https://dhis2.atlassian.net/browse/DHIS2-15516): User unable to On/off Scheduled jobs. Both System jobs and user created jobs.**  
Components: _[App] Job scheduler_

**[DHIS2-14516](https://dhis2.atlassian.net/browse/DHIS2-14516): Scheduler App: adjust for server times**  
Components: _[App] Job scheduler_

**[DHIS2-14016](https://dhis2.atlassian.net/browse/DHIS2-14016): Error in the evaluation of the CRON Expression in the scheduler app**  
Components: _[App] Job scheduler_

**[DHIS2-12189](https://dhis2.atlassian.net/browse/DHIS2-12189): Removing data element from dataset does not also remove compulsoryDataElementOperands**  
Components: _[App] Maintenance_

**[DHIS2-14602](https://dhis2.atlassian.net/browse/DHIS2-14602): use sortOrder when requesting options for an option set**  
Components: _[App] Maintenance_

**[DHIS2-14290](https://dhis2.atlassian.net/browse/DHIS2-14290): Add locale module not visible to users with F_LOCALE_ADD authority**  
Components: _[App] Maintenance_

**[DHIS2-12750](https://dhis2.atlassian.net/browse/DHIS2-12750): Program Management: Manage columns popup incorrectly displays 2 labels**  
Components: _[App] Maintenance_

**[DHIS2-14406](https://dhis2.atlassian.net/browse/DHIS2-14406): Attributes are not removed from Section form when removed from "Assign attributes"**  
Components: _[App] Maintenance_

**[DHIS2-14826](https://dhis2.atlassian.net/browse/DHIS2-14826): Only 50 events are downloaded for event layer**  
Components: _[App] Maps_

**[DHIS2-14496](https://dhis2.atlassian.net/browse/DHIS2-14496): Org unit data for earlier years is not displayed in Org Unit Profile side panel**  
Components: _[App] Maps_

**[DHIS2-14928](https://dhis2.atlassian.net/browse/DHIS2-14928): Not possible to toggle visibility for event donut clusters**  
Components: _[App] Maps_

**[DHIS2-14630](https://dhis2.atlassian.net/browse/DHIS2-14630): Map description is not saved**  
Components: _[App] Maps_

**[DHIS2-13859](https://dhis2.atlassian.net/browse/DHIS2-13859): Settings app does not respect the UI locale**  
Components: _[App] Settings_

**[DHIS2-7422](https://dhis2.atlassian.net/browse/DHIS2-7422): Block or have warning when trying to change calendars when instance has existing periods**  
Components: _[App] Settings_

**[DHIS2-14357](https://dhis2.atlassian.net/browse/DHIS2-14357): an apostrophe sign inside user string cause crash to d2:length function**  
Components: _[App] Tracker capture_

**[DHIS2-15022](https://dhis2.atlassian.net/browse/DHIS2-15022):  Enrollments POST API failure with caching issue**  
Components: _[App] Tracker capture_

**[DHIS2-13679](https://dhis2.atlassian.net/browse/DHIS2-13679): "Show Error" program rule action functionality**  
Components: _[App] Tracker capture_

**[DHIS2-14104](https://dhis2.atlassian.net/browse/DHIS2-14104): Evaluation error for `d2:hasValue` on True Only fields**  
Components: _[App] Tracker capture_

**[DHIS2-9190](https://dhis2.atlassian.net/browse/DHIS2-9190): Form name translations not applied on TEAs**  
Components: _[App] Tracker capture_

**[DHIS2-13944](https://dhis2.atlassian.net/browse/DHIS2-13944): d2:inOrgUnitGroup doesn't work**  
Components: _[App] Tracker capture_

**[DHIS2-14597](https://dhis2.atlassian.net/browse/DHIS2-14597): Support translation for Date picker in Tracker Capture (especially Laos language)**  
Components: _[App] Tracker capture_

**[DHIS2-14266](https://dhis2.atlassian.net/browse/DHIS2-14266): Next and previous period buttons skip periods**  
Components: _[App] Tracker capture_

**[DHIS2-14698](https://dhis2.atlassian.net/browse/DHIS2-14698): d2:lastEventDate function not working in PR**  
Components: _[App] Tracker capture_

**[DHIS2-14265](https://dhis2.atlassian.net/browse/DHIS2-14265): Next period buttons for new event dialogue in tracker capture not working**  
Components: _[App] Tracker capture_

**[DHIS2-14793](https://dhis2.atlassian.net/browse/DHIS2-14793): Warning tips when creating users don't appear for Firstname and Surname**  
Components: _[App] User_, _[App] User Profile_

**[DHIS2-15313](https://dhis2.atlassian.net/browse/DHIS2-15313): Unable to upload profile picture**  
Components: _[App] User Profile_


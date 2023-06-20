# Patch 2.38.4 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-14372](https://dhis2.atlassian.net/browse/DHIS2-14372): Provide job parameters in system/tasks/{jobType} endpoint**  
Components: _[API] Job scheduler_, _[API] Other_

**[DHIS2-14902](https://dhis2.atlassian.net/browse/DHIS2-14902): Scheduler API: nextExecutionTime as computed property**  
Components: _[API] Job scheduler_

**[DHIS2-14531](https://dhis2.atlassian.net/browse/DHIS2-14531): Create dedicated ping endpoint**  
Components: _[API] Other_

**[DHIS2-13731](https://dhis2.atlassian.net/browse/DHIS2-13731): Automatically convert fields query parameter in controllers**  
Components: _[API] Other_

**[DHIS2-14577](https://dhis2.atlassian.net/browse/DHIS2-14577): Improve search form UX (remove * etc)**  
Components: _[App] Capture_

**[DHIS2-12256](https://dhis2.atlassian.net/browse/DHIS2-12256): Display translation of Event Date and Due Date**  
Components: _[App] Capture_, _[App] Translations_

**[DHIS2-13804](https://dhis2.atlassian.net/browse/DHIS2-13804): Enrollment page - handle protected programs**  
Components: _[App] Capture_

**[DHIS2-12337](https://dhis2.atlassian.net/browse/DHIS2-12337): Indicate waiting for server response in new TEI page**  
Components: _[App] Capture_

**[DHIS2-14008](https://dhis2.atlassian.net/browse/DHIS2-14008): Refactor the ScopeSelector to use the SelectionBar ui component**  
Components: _[App] Capture_

**[DHIS2-13475](https://dhis2.atlassian.net/browse/DHIS2-13475): Search by tokens across identifiable properties for saved favorites**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-12749](https://dhis2.atlassian.net/browse/DHIS2-12749): Add code field to category option group set**  
Components: _[App] Maintenance_

**[DHIS2-14440](https://dhis2.atlassian.net/browse/DHIS2-14440): Support facility symbols in SVG-format**  
Components: _[App] Maps_

## Bugs

**[DHIS2-14493](https://dhis2.atlassian.net/browse/DHIS2-14493): Loading a line list with multi-stage elements causes a 400**  
Components: _[API] Analytics_

**[DHIS2-15093](https://dhis2.atlassian.net/browse/DHIS2-15093): Performance issue in /analytics**  
Components: _[API] Analytics_

**[DHIS2-14206](https://dhis2.atlassian.net/browse/DHIS2-14206): [N] Visualizations endpoint does not allow decimal values for axes props**  
Components: _[API] Analytics_

**[DHIS2-14704](https://dhis2.atlassian.net/browse/DHIS2-14704): [B23] Program Indicators - NaN values always returned in spite of filter**  
Components: _[API] Analytics_

**[DHIS2-14240](https://dhis2.atlassian.net/browse/DHIS2-14240): visualizations/UID/data.csv returns 500 or no data when DEG is used in favorite**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-14908](https://dhis2.atlassian.net/browse/DHIS2-14908): [D23] Search feature in Dashboard edition should bring only LINE_LIST visualizations for Line Listing app**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14777](https://dhis2.atlassian.net/browse/DHIS2-14777): [B23, C23] Analytics events query API not respecting "unlimited" when paging=false**  
Components: _[API] Analytics_

**[DHIS2-14910](https://dhis2.atlassian.net/browse/DHIS2-14910): [D23] Remove existing core apps from Dashboard search results**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-15021](https://dhis2.atlassian.net/browse/DHIS2-15021): Filter events in SEARCH orgunit fails when the program is PROTECTED**  
Components: _[API] Events_

**[DHIS2-13135](https://dhis2.atlassian.net/browse/DHIS2-13135): Event pageSize is not respected when more than 1 category**  
Components: _[API] Events_

**[DHIS2-12934](https://dhis2.atlassian.net/browse/DHIS2-12934): Unexpected change of dueDate if a datavalue is updated**  
Components: _[API] Events_

**[DHIS2-10331](https://dhis2.atlassian.net/browse/DHIS2-10331): Error on dataSets/ID/metadata endpoint when dataset attribute is selected**  
Components: _[API] Metadata import-export_, _[API] Metadata model_

**[DHIS2-14084](https://dhis2.atlassian.net/browse/DHIS2-14084): RelationshipType trackerDataView does not respect order of attributes**  
Components: _[API] Metadata import-export_

**[DHIS2-11846](https://dhis2.atlassian.net/browse/DHIS2-11846): api/programs/[uid]/metadata endpoint fails with custom attribute**  
Components: _[API] Metadata import-export_

**[DHIS2-8953](https://dhis2.atlassian.net/browse/DHIS2-8953): Unable to delete OrganisationUnit when present in OrganisationUnit scopes**  
Components: _[API] Metadata model_

**[DHIS2-14858](https://dhis2.atlassian.net/browse/DHIS2-14858): [C23] Interpretations failing on Maps application**  
Components: _[API] Other_

**[DHIS2-15347](https://dhis2.atlassian.net/browse/DHIS2-15347): PreviousEvent rule variable fails on enrollment evaluation**  
Components: _[API] Program rules_

**[DHIS2-13541](https://dhis2.atlassian.net/browse/DHIS2-13541): Unable to save event in Capture when program rule assigns option name**  
Components: _[API] Program rules_

**[DHIS2-13275](https://dhis2.atlassian.net/browse/DHIS2-13275): Error escaping special chars evaluating Program Rules**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-14190](https://dhis2.atlassian.net/browse/DHIS2-14190): Errors saving event when program rule assigns blank value to a data element with option set**  
Components: _[API] Program rules_, _[API] Tracker_, _[App] Capture_

**[DHIS2-5682](https://dhis2.atlassian.net/browse/DHIS2-5682): "No flag" results in old DHIS2 logo**  
Components: _[API] System configuration_, _[App] Other_

**[DHIS2-15225](https://dhis2.atlassian.net/browse/DHIS2-15225): Createdbyuserinfo and lastupdatedbyuserinfo jsonb fields in trackedentityinstance are also blank**  
Components: _[API] Tracker_

**[DHIS2-15145](https://dhis2.atlassian.net/browse/DHIS2-15145): enrolments endpoint does not use capture scope when program is protected or closed**  
Components: _[API] Tracker_

**[DHIS2-14562](https://dhis2.atlassian.net/browse/DHIS2-14562): TrackedEntities returning soft deleted events**  
Components: _[API] Tracker_

**[DHIS2-14524](https://dhis2.atlassian.net/browse/DHIS2-14524): Createdbyuserinfo and lastupdatedbyuserinfo jsonb fields in programinstance are all blank (Old Tracker Capture)**  
Components: _[API] Tracker_

**[DHIS2-15020](https://dhis2.atlassian.net/browse/DHIS2-15020): TEI not sorted by registration date**  
Components: _[API] Tracker_

**[DHIS2-14407](https://dhis2.atlassian.net/browse/DHIS2-14407): Extends nested fields to Events in /trackedentities endpoint [ NTI ]**  
Components: _[API] Tracker_

**[DHIS2-14792](https://dhis2.atlassian.net/browse/DHIS2-14792): Ignore fields parameter in tracker CSV endpoints**  
Components: _[API] Tracker_

**[DHIS2-14783](https://dhis2.atlassian.net/browse/DHIS2-14783): Tracker does not return fields in accordance with field filtering**  
Components: _[API] Tracker_

**[DHIS2-14497](https://dhis2.atlassian.net/browse/DHIS2-14497): The events cannot be filtered by the scheduled date**  
Components: _[API] Tracker_

**[DHIS2-14560](https://dhis2.atlassian.net/browse/DHIS2-14560): Sort order not respected for tracked entity attributes**  
Components: _[API] Tracker_

**[DHIS2-13979](https://dhis2.atlassian.net/browse/DHIS2-13979): d2:hasValue evaluates to true for null values, preventing events with blank fields being edited**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-14182](https://dhis2.atlassian.net/browse/DHIS2-14182): Dry run api parameter doesn't work / exist for the new tracker endpoint**  
Components: _[API] Tracker_

**[DHIS2-14995](https://dhis2.atlassian.net/browse/DHIS2-14995): When replicating a user, the new user's lastlogin is copied instead of being set to null**  
Components: _[API] User_, _[App] User_

**[DHIS2-12509](https://dhis2.atlassian.net/browse/DHIS2-12509): Users API Throwing 500 error for reusing username of existing user**  
Components: _[API] User_

**[DHIS2-12306](https://dhis2.atlassian.net/browse/DHIS2-12306): Cannot Add Data Set Visualization beyond first 50 listed (api pagination issue)**  
**[DHIS2-14183](https://dhis2.atlassian.net/browse/DHIS2-14183): Make Upload date unambiguous**  
Components: _[App] App management_

**[DHIS2-15231](https://dhis2.atlassian.net/browse/DHIS2-15231): Information widgets wrongly hidden in Add Event Page**  
Components: _[App] Capture_

**[DHIS2-14412](https://dhis2.atlassian.net/browse/DHIS2-14412): Program rule assigning date based on report date is not rerun when report date is changed**  
Components: _[App] Capture_

**[DHIS2-12520](https://dhis2.atlassian.net/browse/DHIS2-12520): View enrollment event: Rules are executed without dependency data**  
Components: _[App] Capture_

**[DHIS2-15153](https://dhis2.atlassian.net/browse/DHIS2-15153): Ask user to create new event when stage is complete flag is not working correctly when the program stages are not repeatable**  
Components: _[App] Capture_

**[DHIS2-15103](https://dhis2.atlassian.net/browse/DHIS2-15103): Wrong text in "No results found" modal**  
Components: _[App] Capture_

**[DHIS2-13884](https://dhis2.atlassian.net/browse/DHIS2-13884): Capture App adding blank space for hidden Sections/Sections without Data Elements visible**  
Components: _[App] Capture_

**[DHIS2-11345](https://dhis2.atlassian.net/browse/DHIS2-11345): d2:length function for LONG_TEXT field**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-14862](https://dhis2.atlassian.net/browse/DHIS2-14862): Program icon should be shown in scope selector when selected**  
Components: _[App] Capture_

**[DHIS2-7325](https://dhis2.atlassian.net/browse/DHIS2-7325): Coordinate field not following background pattern**  
Components: _[App] Capture_

**[DHIS2-14868](https://dhis2.atlassian.net/browse/DHIS2-14868): All of Search mode header should be clickable**  
Components: _[App] Capture_

**[DHIS2-14976](https://dhis2.atlassian.net/browse/DHIS2-14976): Discrepancy in time zones assigns previous date in program rules**  
Components: _[App] Capture_

**[DHIS2-15109](https://dhis2.atlassian.net/browse/DHIS2-15109): eventDate breaks saved event working lists**  
Components: _[App] Capture_

**[DHIS2-14845](https://dhis2.atlassian.net/browse/DHIS2-14845): crash on searching in all programs when enrollment not found**  
Components: _[App] Capture_

**[DHIS2-14283](https://dhis2.atlassian.net/browse/DHIS2-14283): Rule engine receives wrong TEA values after editing profile**  
Components: _[App] Capture_

**[DHIS2-13203](https://dhis2.atlassian.net/browse/DHIS2-13203): Working list appears empty as default view contains no attributes**  
Components: _[App] Capture_

**[DHIS2-14578](https://dhis2.atlassian.net/browse/DHIS2-14578): Unique ID attribute error blocking re-enrollment**  
Components: _[App] Capture_

**[DHIS2-14141](https://dhis2.atlassian.net/browse/DHIS2-14141): standard interval days is not working in capture app**  
Components: _[App] Capture_

**[DHIS2-14697](https://dhis2.atlassian.net/browse/DHIS2-14697): The WL chip asterix logic is broken**  
Components: _[App] Capture_

**[DHIS2-10313](https://dhis2.atlassian.net/browse/DHIS2-10313): Resources can contain duplicated sub-elements if imported via API**  
Components: _[App] Core resource_

**[DHIS2-14132](https://dhis2.atlassian.net/browse/DHIS2-14132): Dashboards Header Bar is not translated**  
Components: _[App] Dashboard_

**[DHIS2-14930](https://dhis2.atlassian.net/browse/DHIS2-14930): Struts Data Entry App: update frontend validation for COORDINATE valueType**  
Components: _[App] Data entry_

**[DHIS2-14850](https://dhis2.atlassian.net/browse/DHIS2-14850): DV is crashing when opening the org unit dialog for a chart originating from DHIS2 Maps**  
Components: _[App] Data visualizer_, _[App] Maps_

**[DHIS2-14693](https://dhis2.atlassian.net/browse/DHIS2-14693): “Require data elements  to be part of data set" in Settings prevents data import**  
Components: _[App] Import-export_

**[DHIS2-11265](https://dhis2.atlassian.net/browse/DHIS2-11265): Data export UI option wrongly implies only first level descendants**  
Components: _[App] Import-export_

**[DHIS2-12479](https://dhis2.atlassian.net/browse/DHIS2-12479): Import - Export app crashing for metadata import in update strategy**  
Components: _[App] Import-export_

**[DHIS2-14516](https://dhis2.atlassian.net/browse/DHIS2-14516): Scheduler App: adjust for server times**  
Components: _[App] Job scheduler_

**[DHIS2-15205](https://dhis2.atlassian.net/browse/DHIS2-15205): Program Indicator: Analytics period boundaries are reset when changed to another default combination**  
Components: _[App] Maintenance_

**[DHIS2-12189](https://dhis2.atlassian.net/browse/DHIS2-12189): Removing data element from dataset does not also remove compulsoryDataElementOperands**  
Components: _[App] Maintenance_

**[DHIS2-14602](https://dhis2.atlassian.net/browse/DHIS2-14602): use sortOrder when requesting options for an option set**  
Components: _[App] Maintenance_

**[DHIS2-14406](https://dhis2.atlassian.net/browse/DHIS2-14406): Attributes are not removed from Section form when removed from "Assign attributes"**  
Components: _[App] Maintenance_

**[DHIS2-14826](https://dhis2.atlassian.net/browse/DHIS2-14826): Only 50 events are downloaded for event layer**  
Components: _[App] Maps_

**[DHIS2-14928](https://dhis2.atlassian.net/browse/DHIS2-14928): Not possible to toggle visibility for event donut clusters**  
Components: _[App] Maps_

**[DHIS2-14438](https://dhis2.atlassian.net/browse/DHIS2-14438): No facilities are showing if symbol is missing for org unit group**  
Components: _[App] Maps_

**[DHIS2-14630](https://dhis2.atlassian.net/browse/DHIS2-14630): Map description is not saved**  
Components: _[App] Maps_

**[DHIS2-7422](https://dhis2.atlassian.net/browse/DHIS2-7422): Block or have warning when trying to change calendars when instance has existing periods**  
Components: _[App] Settings_

**[DHIS2-15089](https://dhis2.atlassian.net/browse/DHIS2-15089): Feedback widget is empty whenever no events are selected**  
Components: _[App] Tracker capture_

**[DHIS2-14954](https://dhis2.atlassian.net/browse/DHIS2-14954): Soft Deleted Stage Event Remains Visible**  
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


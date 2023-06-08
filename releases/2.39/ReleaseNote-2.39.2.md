# Patch 2.39.2 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-4678](https://dhis2.atlassian.net/browse/DHIS2-4678): Include details of ignored data during import**  
Components: _[API] Data value set_

**[DHIS2-14372](https://dhis2.atlassian.net/browse/DHIS2-14372): Provide job parameters in system/tasks/{jobType} endpoint**  
Components: _[API] Job scheduler_, _[API] Other_

**[DHIS2-14902](https://dhis2.atlassian.net/browse/DHIS2-14902): Scheduler API: nextExecutionTime as computed property**  
Components: _[API] Job scheduler_

**[DHIS2-13731](https://dhis2.atlassian.net/browse/DHIS2-13731): Automatically convert fields query parameter in controllers**  
Components: _[API] Other_

**[DHIS2-13237](https://dhis2.atlassian.net/browse/DHIS2-13237): Capture and show enrollment coordinates in enrollment widget**  
Components: _[App] Capture_

**[DHIS2-12256](https://dhis2.atlassian.net/browse/DHIS2-12256): Display translation of Event Date and Due Date**  
Components: _[App] Capture_, _[App] Translations_

**[DHIS2-13804](https://dhis2.atlassian.net/browse/DHIS2-13804): Enrollment page - handle protected programs**  
Components: _[App] Capture_

**[DHIS2-12337](https://dhis2.atlassian.net/browse/DHIS2-12337): Indicate waiting for server response in new TEI page**  
Components: _[App] Capture_

**[DHIS2-14008](https://dhis2.atlassian.net/browse/DHIS2-14008): Refactor the ScopeSelector to use the SelectionBar ui component**  
Components: _[App] Capture_

**[DHIS2-13803](https://dhis2.atlassian.net/browse/DHIS2-13803): Change labels and path for button in "All programs" search results**  
Components: _[App] Capture_

**[DHIS2-13916](https://dhis2.atlassian.net/browse/DHIS2-13916): Skip generation of organization unit ownership data**  
Components: _[App] Data administration_

**[DHIS2-14600](https://dhis2.atlassian.net/browse/DHIS2-14600): Data Entry: Show the date and time a period will close**  
Components: _[App] Data entry_

**[DHIS2-13475](https://dhis2.atlassian.net/browse/DHIS2-13475): Search by tokens across identifiable properties for saved favorites**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-12749](https://dhis2.atlassian.net/browse/DHIS2-12749): Add code field to category option group set**  
Components: _[App] Maintenance_

**[DHIS2-14633](https://dhis2.atlassian.net/browse/DHIS2-14633): Improved display of multiple geometries (main + associated geometries)**  
Components: _[App] Maps_

**[DHIS2-14440](https://dhis2.atlassian.net/browse/DHIS2-14440): Support facility symbols in SVG-format**  
Components: _[App] Maps_

## Bugs

**[DHIS2-15093](https://dhis2.atlassian.net/browse/DHIS2-15093): Performance issue in /analytics**  
Components: _[API] Analytics_

**[DHIS2-14442](https://dhis2.atlassian.net/browse/DHIS2-14442): [A23] Scheduled events missing when using fixed monthly periods**  
Components: _[API] Analytics_

**[DHIS2-14206](https://dhis2.atlassian.net/browse/DHIS2-14206): [N] Visualizations endpoint does not allow decimal values for axes props**  
Components: _[API] Analytics_

**[DHIS2-14704](https://dhis2.atlassian.net/browse/DHIS2-14704): [B23] Program Indicators - NaN values always returned in spite of filter**  
Components: _[API] Analytics_

**[DHIS2-14240](https://dhis2.atlassian.net/browse/DHIS2-14240): visualizations/UID/data.csv returns 500 or no data when DEG is used in favorite**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-14443](https://dhis2.atlassian.net/browse/DHIS2-14443): Using scheduleddate and incidentdate combined returns different amount of rows for each request**  
Components: _[API] Analytics_

**[DHIS2-14908](https://dhis2.atlassian.net/browse/DHIS2-14908): [D23] Search feature in Dashboard edition should bring only LINE_LIST visualizations for Line Listing app**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14777](https://dhis2.atlassian.net/browse/DHIS2-14777): [B23, C23] Analytics events query API not respecting "unlimited" when paging=false**  
Components: _[API] Analytics_

**[DHIS2-14910](https://dhis2.atlassian.net/browse/DHIS2-14910): [D23] Remove existing core apps from Dashboard search results**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-13928](https://dhis2.atlassian.net/browse/DHIS2-13928): Request parameter binding errors cause internal server error response**  
Components: _[API] Data value set_

**[DHIS2-13135](https://dhis2.atlassian.net/browse/DHIS2-13135): Event pageSize is not respected when more than 1 category**  
Components: _[API] Events_

**[DHIS2-12934](https://dhis2.atlassian.net/browse/DHIS2-12934): Unexpected change of dueDate if a datavalue is updated**  
Components: _[API] Events_

**[DHIS2-14476](https://dhis2.atlassian.net/browse/DHIS2-14476): [A23] paging=false and skipPaging=true are not working on api/events or api/enrollments**  
Components: _[API] Events_, _[API] Other_

**[DHIS2-10331](https://dhis2.atlassian.net/browse/DHIS2-10331): Error on dataSets/ID/metadata endpoint when dataset attribute is selected**  
Components: _[API] Metadata import-export_, _[API] Metadata model_

**[DHIS2-14084](https://dhis2.atlassian.net/browse/DHIS2-14084): RelationshipType trackerDataView does not respect order of attributes**  
Components: _[API] Metadata import-export_

**[DHIS2-11846](https://dhis2.atlassian.net/browse/DHIS2-11846): api/programs/[uid]/metadata endpoint fails with custom attribute**  
Components: _[API] Metadata import-export_

**[DHIS2-14817](https://dhis2.atlassian.net/browse/DHIS2-14817): Saving an optionSet with valueType MULTI_TEXT fails with 500-error**  
Components: _[API] Metadata model_

**[DHIS2-8953](https://dhis2.atlassian.net/browse/DHIS2-8953): Unable to delete OrganisationUnit when present in OrganisationUnit scopes**  
Components: _[API] Metadata model_

**[DHIS2-14735](https://dhis2.atlassian.net/browse/DHIS2-14735): Allow attribute UID in fields param for all FieldFilterService methods**  
Components: _[API] Metadata model_

**[DHIS2-14858](https://dhis2.atlassian.net/browse/DHIS2-14858): [C23] Interpretations failing on Maps application**  
Components: _[API] Other_

**[DHIS2-14500](https://dhis2.atlassian.net/browse/DHIS2-14500): Error validating program indicator with custom aggregation function**  
Components: _[API] Other_

**[DHIS2-14499](https://dhis2.atlassian.net/browse/DHIS2-14499): Predictor breaks with integer program indicators**  
Components: _[API] Predictors_

**[DHIS2-14190](https://dhis2.atlassian.net/browse/DHIS2-14190): Errors saving event when program rule assigns blank value to a data element with option set**  
Components: _[API] Program rules_, _[API] Tracker_, _[App] Capture_

**[DHIS2-14733](https://dhis2.atlassian.net/browse/DHIS2-14733): Program rule fails to assign when field is not in a program stage**  
Components: _[API] Program rules_, _[App] Tracker capture_

**[DHIS2-5682](https://dhis2.atlassian.net/browse/DHIS2-5682): "No flag" results in old DHIS2 logo**  
Components: _[API] System configuration_, _[App] Other_

**[DHIS2-15145](https://dhis2.atlassian.net/browse/DHIS2-15145): enrolments endpoint does not use capture scope when program is protected or closed**  
Components: _[API] Tracker_

**[DHIS2-14562](https://dhis2.atlassian.net/browse/DHIS2-14562): TrackedEntities returning soft deleted events**  
Components: _[API] Tracker_

**[DHIS2-14917](https://dhis2.atlassian.net/browse/DHIS2-14917): Rule-engine triggered by program event in old tracker can cause performance issues**  
Components: _[API] Tracker_

**[DHIS2-13984](https://dhis2.atlassian.net/browse/DHIS2-13984): Capture app unable to save events for program rule that assigns long decimals**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-14524](https://dhis2.atlassian.net/browse/DHIS2-14524): Createdbyuserinfo and lastupdatedbyuserinfo jsonb fields in programinstance are all blank (Old Tracker Capture)**  
Components: _[API] Tracker_

**[DHIS2-15020](https://dhis2.atlassian.net/browse/DHIS2-15020): TEI not sorted by registration date**  
Components: _[API] Tracker_

**[DHIS2-13735](https://dhis2.atlassian.net/browse/DHIS2-13735): Tracker does not respect order of order criteria**  
Components: _[API] Tracker_

**[DHIS2-14828](https://dhis2.atlassian.net/browse/DHIS2-14828): href in /tracker/events is inconsistent and unused**  
Components: _[API] Tracker_

**[DHIS2-14407](https://dhis2.atlassian.net/browse/DHIS2-14407): Extends nested fields to Events in /trackedentities endpoint [ NTI ]**  
Components: _[API] Tracker_

**[DHIS2-14792](https://dhis2.atlassian.net/browse/DHIS2-14792): Ignore fields parameter in tracker CSV endpoints**  
Components: _[API] Tracker_

**[DHIS2-14783](https://dhis2.atlassian.net/browse/DHIS2-14783): Tracker does not return fields in accordance with field filtering**  
Components: _[API] Tracker_

**[DHIS2-11731](https://dhis2.atlassian.net/browse/DHIS2-11731): TrackedEntityInstance endpoint does not include nested event notes**  
Components: _[API] Tracker_

**[DHIS2-14502](https://dhis2.atlassian.net/browse/DHIS2-14502): Event notes behave differently in similar endpoints**  
Components: _[API] Tracker_

**[DHIS2-14497](https://dhis2.atlassian.net/browse/DHIS2-14497): The events cannot be filtered by the scheduled date**  
Components: _[API] Tracker_

**[DHIS2-14560](https://dhis2.atlassian.net/browse/DHIS2-14560): Sort order not respected for tracked entity attributes**  
Components: _[API] Tracker_

**[DHIS2-13979](https://dhis2.atlassian.net/browse/DHIS2-13979): d2:hasValue evaluates to true for null values, preventing events with blank fields being edited**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-14182](https://dhis2.atlassian.net/browse/DHIS2-14182): Dry run api parameter doesn't work / exist for the new tracker endpoint**  
Components: _[API] Tracker_

**[DHIS2-13981](https://dhis2.atlassian.net/browse/DHIS2-13981): Fix order field supported values for /trackedEntityInstanceFilters endpoint**  
Components: _[API] Tracker_

**[DHIS2-14213](https://dhis2.atlassian.net/browse/DHIS2-14213): Centralize orchestration of tracker validation**  
Components: _[API] Tracker_

**[DHIS2-14362](https://dhis2.atlassian.net/browse/DHIS2-14362): TEIs are not filterable by potentialDuplicate property (NTI)**  
Components: _[API] Tracker_

**[DHIS2-14995](https://dhis2.atlassian.net/browse/DHIS2-14995): When replicating a user, the new user's lastlogin is copied instead of being set to null**  
Components: _[API] User_, _[App] User_

**[DHIS2-12509](https://dhis2.atlassian.net/browse/DHIS2-12509): Users API Throwing 500 error for reusing username of existing user**  
Components: _[API] User_

**[DHIS2-14218](https://dhis2.atlassian.net/browse/DHIS2-14218): Align data input period logic to match back end logic (Data Entry Beta)**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-14183](https://dhis2.atlassian.net/browse/DHIS2-14183): Make Upload date unambiguous**  
Components: _[App] App management_

**[DHIS2-15225](https://dhis2.atlassian.net/browse/DHIS2-15225): Createdbyuserinfo and lastupdatedbyuserinfo jsonb fields in trackedentityinstance are also blank**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-15231](https://dhis2.atlassian.net/browse/DHIS2-15231): Information widgets wrongly hidden in Add Event Page**  
Components: _[App] Capture_

**[DHIS2-15250](https://dhis2.atlassian.net/browse/DHIS2-15250): Users still have access on Event programs and relationship types with sharing type "No access" on Capture app**  
Components: _[App] Capture_

**[DHIS2-13884](https://dhis2.atlassian.net/browse/DHIS2-13884): Capture App adding blank space for hidden Sections/Sections without Data Elements visible**  
Components: _[App] Capture_

**[DHIS2-11345](https://dhis2.atlassian.net/browse/DHIS2-11345): d2:length function for LONG_TEXT field**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-14862](https://dhis2.atlassian.net/browse/DHIS2-14862): Program icon should be shown in scope selector when selected**  
Components: _[App] Capture_

**[DHIS2-7325](https://dhis2.atlassian.net/browse/DHIS2-7325): Coordinate field not following background pattern**  
Components: _[App] Capture_

**[DHIS2-13346](https://dhis2.atlassian.net/browse/DHIS2-13346): Assigned value is not treated as an entered value**  
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

**[DHIS2-14439](https://dhis2.atlassian.net/browse/DHIS2-14439): Program stage WL scheduled date filter**  
Components: _[App] Capture_

**[DHIS2-14418](https://dhis2.atlassian.net/browse/DHIS2-14418): Show only future events when filter by Scheduled status**  
Components: _[App] Capture_

**[DHIS2-13203](https://dhis2.atlassian.net/browse/DHIS2-13203): Working list appears empty as default view contains no attributes**  
Components: _[App] Capture_

**[DHIS2-14578](https://dhis2.atlassian.net/browse/DHIS2-14578): Unique ID attribute error blocking re-enrollment**  
Components: _[App] Capture_

**[DHIS2-14141](https://dhis2.atlassian.net/browse/DHIS2-14141): standard interval days is not working in capture app**  
Components: _[App] Capture_

**[DHIS2-14697](https://dhis2.atlassian.net/browse/DHIS2-14697): The WL chip asterix logic is broken**  
Components: _[App] Capture_

**[DHIS2-13646](https://dhis2.atlassian.net/browse/DHIS2-13646): Last updated hidden in Stages and events Widget after adding a new event**  
Components: _[App] Capture_

**[DHIS2-10313](https://dhis2.atlassian.net/browse/DHIS2-10313): Resources can contain duplicated sub-elements if imported via API**  
Components: _[App] Core resource_

**[DHIS2-14930](https://dhis2.atlassian.net/browse/DHIS2-14930): Struts Data Entry App: update frontend validation for COORDINATE valueType**  
Components: _[App] Data entry_

**[DHIS2-13011](https://dhis2.atlassian.net/browse/DHIS2-13011): Error when complete or incomplete data entry form**  
Components: _[App] Data entry_

**[DHIS2-15032](https://dhis2.atlassian.net/browse/DHIS2-15032): Data sets with aggregate category combos do not complete**  
Components: _[App] Data entry_

**[DHIS2-14202](https://dhis2.atlassian.net/browse/DHIS2-14202): Error while formating the object**  
Components: _[App] Data store_

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

**[DHIS2-12750](https://dhis2.atlassian.net/browse/DHIS2-12750): Program Management: Manage columns popup incorrectly displays 2 labels**  
Components: _[App] Maintenance_

**[DHIS2-14482](https://dhis2.atlassian.net/browse/DHIS2-14482): Remove CSV and XML format from download options**  
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

**[DHIS2-14266](https://dhis2.atlassian.net/browse/DHIS2-14266): Next and previous period buttons skip periods**  
Components: _[App] Tracker capture_

**[DHIS2-14698](https://dhis2.atlassian.net/browse/DHIS2-14698): d2:lastEventDate function not working in PR**  
Components: _[App] Tracker capture_


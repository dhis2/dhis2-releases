# Patch 2.38.3 Release Note

  - [Features](#features)
  - [Bugs](#bugs)

## Features

**[DHIS2-14208](https://dhis2.atlassian.net/browse/DHIS2-14208): [N] Support unlogged tables in analytics export**  
Components: _[API] Analytics_

**[DHIS2-13237](https://dhis2.atlassian.net/browse/DHIS2-13237): Capture and show enrollment coordinates in enrollment widget**  
Components: _[App] Capture_

**[DHIS2-13803](https://dhis2.atlassian.net/browse/DHIS2-13803): Change labels and path for button in "All programs" search results**  
Components: _[App] Capture_

**[DHIS2-14152](https://dhis2.atlassian.net/browse/DHIS2-14152): Attribute values not displayed for options in maintenance app**  
Components: _[App] Maintenance_

**[DHIS2-13547](https://dhis2.atlassian.net/browse/DHIS2-13547): Maintenance app: Relationship type attributes for display**  
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

**[DHIS2-14146](https://dhis2.atlassian.net/browse/DHIS2-14146): [N] Dashboard item search returns both EventReports and EventVisualizations as EventReports**  
Components: _[API] Analytics_

**[DHIS2-13928](https://dhis2.atlassian.net/browse/DHIS2-13928): Request parameter binding errors cause internal server error response**  
Components: _[API] Data value set_

**[DHIS2-13656](https://dhis2.atlassian.net/browse/DHIS2-13656): event org units are different depending on the API query**  
Components: _[API] Events_

**[DHIS2-12934](https://dhis2.atlassian.net/browse/DHIS2-12934): Unexpected change of dueDate if a datavalue is updated**  
Components: _[API] Events_

**[DHIS2-14736](https://dhis2.atlassian.net/browse/DHIS2-14736): Events endpoint fails when updating existing event**  
Components: _[API] Events_

**[DHIS2-14720](https://dhis2.atlassian.net/browse/DHIS2-14720): TrackedEntityInstances endpoint does not return events if explicit fields are provided**  
Components: _[API] Events_

**[DHIS2-14476](https://dhis2.atlassian.net/browse/DHIS2-14476): [A23] paging=false and skipPaging=true are not working on api/events or api/enrollments**  
Components: _[API] Events_, _[API] Other_

**[DHIS2-14550](https://dhis2.atlassian.net/browse/DHIS2-14550): Sharing Patch Add command replaces, instead of adding**  
Components: _[API] Metadata import-export_

**[DHIS2-11846](https://dhis2.atlassian.net/browse/DHIS2-11846): api/programs/[uid]/metadata endpoint fails with custom attribute**  
Components: _[API] Metadata import-export_

**[DHIS2-14191](https://dhis2.atlassian.net/browse/DHIS2-14191): CreatedBy field is changed when updating with createdBy = null**  
Components: _[API] Metadata model_

**[DHIS2-14733](https://dhis2.atlassian.net/browse/DHIS2-14733): Program rule fails to assign when field is not in a program stage**  
Components: _[API] Program rules_, _[App] Tracker capture_

**[DHIS2-14828](https://dhis2.atlassian.net/browse/DHIS2-14828): href in /tracker/events is inconsistent and unused**  
Components: _[API] Tracker_

**[DHIS2-11731](https://dhis2.atlassian.net/browse/DHIS2-11731): TrackedEntityInstance endpoint does not include nested event notes**  
Components: _[API] Tracker_

**[DHIS2-14502](https://dhis2.atlassian.net/browse/DHIS2-14502): Event notes behave differently in similar endpoints**  
Components: _[API] Tracker_

**[DHIS2-12906](https://dhis2.atlassian.net/browse/DHIS2-12906): /tracker/enrollments does not return attributes, events and relationships**  
Components: _[API] Tracker_

**[DHIS2-13981](https://dhis2.atlassian.net/browse/DHIS2-13981): Fix order field supported values for /trackedEntityInstanceFilters endpoint**  
Components: _[API] Tracker_

**[DHIS2-14295](https://dhis2.atlassian.net/browse/DHIS2-14295): Enrollment of event in event program not found in preheat**  
Components: _[API] Tracker_

**[DHIS2-11625](https://dhis2.atlassian.net/browse/DHIS2-11625): TEIs are not filterable by potentialDuplicate property**  
Components: _[API] Tracker_

**[DHIS2-14362](https://dhis2.atlassian.net/browse/DHIS2-14362): TEIs are not filterable by potentialDuplicate property (NTI)**  
Components: _[API] Tracker_

**[DHIS2-13984](https://dhis2.atlassian.net/browse/DHIS2-13984): Capture app unable to save events for program rule that assigns long decimals**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-11500](https://dhis2.atlassian.net/browse/DHIS2-11500): Inconsistent API response for superuser in api/trackedEntityInstances**  
Components: _[API] Tracker_

**[DHIS2-13324](https://dhis2.atlassian.net/browse/DHIS2-13324): Fail tracker import on invalid idScheme**  
Components: _[API] Tracker_

**[DHIS2-13281](https://dhis2.atlassian.net/browse/DHIS2-13281): Too many search results doesn't work correctly when maxt tei count > 4**  
Components: _[API] Tracker_

**[DHIS2-9761](https://dhis2.atlassian.net/browse/DHIS2-9761): Uploading profile image crashes for users without "View user"**  
Components: _[API] User_

**[DHIS2-14210](https://dhis2.atlassian.net/browse/DHIS2-14210): [N] Conditions for PI might be wrong under some circumstances**  
Components: _[App] Analytics_

**[DHIS2-14242](https://dhis2.atlassian.net/browse/DHIS2-14242): Locale should be part of cache key for analytics queries**  
Components: _[App] Analytics_

**[DHIS2-14355](https://dhis2.atlassian.net/browse/DHIS2-14355): Aggregate analytics for event data items with integer value type broken**  
Components: _[App] Analytics_

**[DHIS2-13346](https://dhis2.atlassian.net/browse/DHIS2-13346): Assigned value is not treated as an entered value**  
Components: _[App] Capture_

**[DHIS2-14629](https://dhis2.atlassian.net/browse/DHIS2-14629): Roll back "Hide section" changes**  
Components: _[App] Capture_

**[DHIS2-13646](https://dhis2.atlassian.net/browse/DHIS2-13646): Last updated hidden in Stages and events Widget after adding a new event**  
Components: _[App] Capture_

**[DHIS2-13197](https://dhis2.atlassian.net/browse/DHIS2-13197): Blank values are not taken into account when sorting in program stage event list**  
Components: _[App] Capture_

**[DHIS2-14340](https://dhis2.atlassian.net/browse/DHIS2-14340): Text values are not sorted in Stages&Events-widget**  
Components: _[App] Capture_

**[DHIS2-14352](https://dhis2.atlassian.net/browse/DHIS2-14352): `d2:oizp` doesn't work**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-14411](https://dhis2.atlassian.net/browse/DHIS2-14411): Change wording of "Can't add any more events"-tooltip**  
Components: _[App] Capture_

**[DHIS2-13968](https://dhis2.atlassian.net/browse/DHIS2-13968): Do not display 00:00 suffix in Enrollment/Report dates**  
Components: _[App] Capture_

**[DHIS2-6556](https://dhis2.atlassian.net/browse/DHIS2-6556): [M] Error in Dashboard when different access rights between dashboard and objects**  
Components: _[App] Dashboard_

**[DHIS2-13088](https://dhis2.atlassian.net/browse/DHIS2-13088): Aggregate data entry for Sub-organisation Unit is not working (form with no data entry  fields)**  
Components: _[App] Data entry_

**[DHIS2-14202](https://dhis2.atlassian.net/browse/DHIS2-14202): Error while formating the object**  
Components: _[App] Data store_

**[DHIS2-8766](https://dhis2.atlassian.net/browse/DHIS2-8766): Multiple Event Reports (download) problems**  
Components: _[App] Event reports_

**[DHIS2-14304](https://dhis2.atlassian.net/browse/DHIS2-14304): Event export in import/export app fails**  
Components: _[App] Import-export_

**[DHIS2-14016](https://dhis2.atlassian.net/browse/DHIS2-14016): Error in the evaluation of the CRON Expression in the scheduler app**  
Components: _[App] Job scheduler_

**[DHIS2-13872](https://dhis2.atlassian.net/browse/DHIS2-13872): [M]Code is displayed instead of name for numeric option sets**  
Components: _[App] Line Listing_

**[DHIS2-13994](https://dhis2.atlassian.net/browse/DHIS2-13994): cannot rename Program attributes section name**  
Components: _[App] Maintenance_

**[DHIS2-14291](https://dhis2.atlassian.net/browse/DHIS2-14291): Canvas is not white when map is downloaded**  
Components: _[App] Maps_

**[DHIS2-13859](https://dhis2.atlassian.net/browse/DHIS2-13859): Settings app does not respect the UI locale**  
Components: _[App] Settings_

**[DHIS2-14266](https://dhis2.atlassian.net/browse/DHIS2-14266): Next and previous period buttons skip periods**  
Components: _[App] Tracker capture_

**[DHIS2-14698](https://dhis2.atlassian.net/browse/DHIS2-14698): d2:lastEventDate function not working in PR**  
Components: _[App] Tracker capture_

**[DHIS2-14265](https://dhis2.atlassian.net/browse/DHIS2-14265): Next period buttons for new event dialogue in tracker capture not working**  
Components: _[App] Tracker capture_

**[DHIS2-13889](https://dhis2.atlassian.net/browse/DHIS2-13889): Yes/no attribute as program rule variable**  
Components: _[App] Tracker capture_

**[DHIS2-14147](https://dhis2.atlassian.net/browse/DHIS2-14147): Use dedicated endpoint for checking username**  
Components: _[App] User_


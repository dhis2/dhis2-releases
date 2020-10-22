# DHIS version 2.33 Release Note

This document highlights the key features of the initial release of DHIS2 version 2.33.

## ANALYTICS FEATURES

**Multiple maps and timelines**: In the maps application you can now render multiple maps in the same screen to show how the data has evolved over time. You can also have a single map which can “play” the changes to data on a timeline to show the change over time. This is useful e.g. to show how an outbreak is spreading over time, or how coverage of a service changes over time.

[Demo](https://play.dhis2.org/2.33.0/dhis-web-dashboard/#/xP1jtPjus1c) | [Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/multiple_maps1.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/multiple_maps2.png) | [3](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/timeline.png) | [Jira](https://jira.dhis2.org/browse/DHIS2-2255)

**Single value charts and dashboard items**: You can now render a single aggregated value in data visualizer. This simple visualization displays a single value which can be saved and added to the dashboard. This allows for a dashboard item which provides essential information at a glance, such as the number of new cases of a disease or the number of facilities currently having a stock-out. |

[Demo](https://play.dhis2.org/2.33.0/dhis-web-dashboard/#/xP1jtPjus1c) | [Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/single_value_charts.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/single_value_dashboard_items.png) | [Jira](https://jira.dhis2.org/browse/DHIS2-3536)

**Patient line-listing with data from multiple stages in event reports**: You can now create a list of patients or tracked entity instances based on enrollment that displays data across any number of stages in a single table. In the case of disease surveillance patients line listing, this would typically be demographic data (Patient/TEAs), initial clinical examination and diagnosis (stage 1), specimen tracking & lab results (stages 2x), case investigations (stages 3x), follow-up visit stages and final outcome stage, all in a single table.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/patient_line_listing.png) | [Jira](https://jira.dhis2.org/browse/DHIS2-7459)

**Improved date reporting in Event reports**: Event reports now show enrollment dates and incident dates as well as event program stage dates. It can also show the description of these dates instead of just “Event date”. This can be configured in the program, e.g. as “Date of birth” or “Date of postnatal visit”.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/improved_date_reporting.png) | [Jira 1 ](https://jira.dhis2.org/browse/DHIS2-2480)| [2](https://jira.dhis2.org/browse/DHIS2-2757)

**Google Earth Engine Layers**: Several improvements have been made to the temperature and precipitation layers from Google Earth Engine. Previously it took a long time to load the weekly periods for multiple years. Two dropdowns have been added, one for year (default is the most recent) and one for week. For temperature layers, the data set has been updated to include the more recent time periods.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/earth_engine_layers.png) | [Jira 1](https://jira.dhis2.org/browse/DHIS2-6321) | [2](https://jira.dhis2.org/browse/DHIS2-6993)

## TRACKER AND EVENT FEATURES

**Performance and stability improvements**: This version offers significant performance and stability improvements, in particular in the area of transaction handling and queries optimization:

- The system has been reviewed to minimize the number of expensive read-write transactions, which has an impact on overall performance and might lead to database deadlocks.

- Tracker attribute uniqueness check performance has been optimized.

- Tracker notifications are asynchronous to avoid blocking.

- Tracked entity instance auditing is asynchronous to avoid blocking.

- Removed expensive circular checks for tracked entity instances, enrollments and events.

- Removed expensive loops checking access permission on data elements during import.

- Database indexes reviewed to make sure the relevant indexes are used for data-intensive queries.

**Working lists based on user assignment in tracker capture**: It is now possible to build working lists based on user assignment of events. This functionality lists tracked entity instance and filtering criteria and makes it easier to view and follow up on events. Working lists can be incorporated into the user’s normal work processes, enabling planning, prioritization and focus on specific events and specific TEI.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/working_lists_user_assignment_tracker.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/predefined_working_list_user_assignment_tracker.png) | [Docs](https://docs.dhis2.org/master/en/user/html/open_existing_tracked_entity_instance_dashboard.html#simple_tracked_entity_instance_search) | [Jira](https://jira.dhis2.org/browse/DHIS2-6053)

**Working lists and user assignment in capture app**: Similar to the working lists in tracker capture, single event programs can now be configured to allow user assignment of events and create working lists based on filtering criteria such as user, date, status, etc.

[Demo](https://play.dhis2.org/2.33.0/dhis-web-capture/index.html#/programId=VBqh0ynB2wv&orgUnitId=DiszpKrYNg8) | [Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Capture_App_Working_Lists_2.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Capture_App_Working_Lists_1.png) | [Docs 1](https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en_full.html#capture_user_assignment) | [Docs 2](https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en_full.html#capture_working_lists) | [Jira 1](https://jira.dhis2.org/browse/DHIS2-6048) | [Jira 2](https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en_full.html#capture_working_lists)

**Listing of tracker programs in capture app**: The capture app now lists tracker programs as well as single event programs in the program selector. Selecting a tracker program provides an information screen explaining that the program is handled in another app, and the user can click a deep link to open the tracker in the correct org unit and program. This feature lets users see all their programs, both tracker and event programs, in the same place.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Tracker_Programs_in_Capture_App.png) | [Docs](https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en_full.html#capture_tracker_programs) | [Jira](https://jira.dhis2.org/browse/DHIS2-6018)

**Display of program ownership**: The current ownership of all enrollments in the selected program is now displayed as “owned by” in the enrollment widget. The ownership is first assigned to the organisation unit that enrolled the TEI into the given program, and is transferred by referring a TEI using the “move permanently” option. Ownership can be different for a single TEI in different programs, for example one clinic can follow up a patient in HIV, while another clinic follows up the same patient in MCH.

A user that has capture access to the organisation unit that is the current owner of the TEI/Program will have write access to all enrollments for that TEI/Program combination. A user that has search access to the organisation unit that is the current owner will have access to search and find the TEI/Program combination.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Ownership_1.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Ownership_2.png) | [Docs](https://docs.dhis2.org/master/en/user/html/manage_tracked_entity_instance_enrollment.html#) | [Jira](https://jira.dhis2.org/browse/DHIS2-5968)

**Deduplication flagging in tracker capture**: When searching for tracked entity instances in tracker capture, it is now possible to flag the presence of possible duplicates in the results. When a duplicate is flagged, it acts as a reminder that the data needs to be cleaned up, and as information for anyone using the data in their daily work. The data is also available for future functionality for identifying and merging duplicates.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/duplicate_flagging_in_tracker_capture.png) | [Docs](https://docs.dhis2.org/master/en/user/html/open_existing_tracked_entity_instance_dashboard.html#flagging-tracked-entity-instance-as-potential-duplicate) | [Jira](https://jira.dhis2.org/browse/DHIS2-6070)

**Bidirectional relationships**: Bidirectional relationships can now be configured in tracker capture. A relationship represents a link between two entities in the tracker data model, and is considered data in DHIS2 based on a Relationship Type, similar to how a Tracked Entity Instance is based on a Tracked Entity Type. Relationships can now be defined as unidirectional or bidirectional, with bidirectional relationships creating an automatic relationship on both sides of the linked entities, such as a Mother and Child.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Bidirectional_Relationships.png) | [Docs](https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en_full.html#relationship_model) | [Jira](https://jira.dhis2.org/browse/DHIS2-5293)

**Updated icon library**: The icon library has been updated to include 534 searchable icons, covering a wide variety of health, agriculture, transport and education-related topics.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Icon_Library.png) | [Jira](https://jira.dhis2.org/browse/DHIS2-5447?jql=text%20~%20icon%20ORDER%20BY%20updated%20DESC)

**Image resizing**: It is now possible to resize/downgrade the images stored in the server when returned via the API, in order to reduce bandwidth consumption when downloading associated images to DEs, TE attributes or Options, and to minimize storage on the Android database. When requesting a data value of type image, the query can specify Small (256x256px); Medium (512x512px); Large (1024x1024px).

[Docs](https://docs.dhis2.org/master/en/developer/html/webapi_tracker_api.html#webapi_events) | [Jira](https://jira.dhis2.org/browse/DHIS2-4842)

**Program indicator and program rules health checks**: Program indicators and rules are now evaluated during the integrity check in the Data Administration app, reviewing for invalid expressions and filters; missing actions or priority and more.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Program_Indicator_Health_Check.png) | [Docs](https://docs.dhis2.org/master/en/user/html/data_admin.html#dataAdmin_dataIntegrity) | [Jira](https://jira.dhis2.org/browse/DHIS2-5750)

**Z-score calculations in program rules**: Standard functions for calculating Z scores “weight for height” and “height for age” are now available in program rules. Z score calculation for weight for age was present from 2.32. This is useful in settings where a clinician would otherwise be calculating Z-scores by hand. The d2 function calculates z-score based on data provided by WHO weight-for-height indicator. Its value varies between -3.5 to 3.5 depending upon the value of height.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Z_Score_Weight_for_Height.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/Z_Score_Height_for_Age.png) | [Docs](https://docs.dhis2.org/master/en/user/html/configure_program_rule.html#program_rules_operators_functions) | [Jira 1](https://jira.dhis2.org/browse/DHIS2-6579) | [2](https://jira.dhis2.org/browse/DHIS2-6578)

## APPS FEATURES

**Reports app**: The new reports app is out of beta and comes with many new improvements. As an example, standard reports are now linkable and can be opened from a URL. The old reports module has been removed.

[Demo 1](https://play.dhis2.org/2.33.0/dhis-web-reports/#/) | [2](https://play.dhis2.org/2.33.0/dhis-web-reports/index.html#/standard-report/view/fqERdm6UtkI?&ou=O6uvpzGd5pu) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/new-reports-app.png) | [Docs](https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en_full.html#using_reporting) | [Jira](https://jira.dhis2.org/browse/DHIS2-7134)

**Enrollment section forms**: You can now create section-based forms for enrollments in tracker. The configuration can be done in the maintenance app under the “attributes” section > “Create registration form” in the tracker program configuration wizard. This allows for creation a section-based tracker enrollment form without creating custom HTML-based forms.

[Demo](https://play.dhis2.org/2.33.0/dhis-web-maintenance/index.html#/edit/programSection/program/WSGAb5XwJ3Y) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/33/program-attribute-sections.png) | [Docs](https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en_full.html#create-or-edit-a-tracker-program) | [Jira](https://jira.dhis2.org/browse/DHIS2-4407)

## RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation and Javadocs|https://www.dhis2.org/documentation|
|Upgrade notes|[Upgrade notes for 2.33 on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.33/README.md)|
|Details about each feature on JIRA (requires login)|[https://jira.dhis2.org/issues/?filter=11153](https://jira.dhis2.org/issues/?filter=11421)|
|Overview of bugs fixed in JIRA (requires login)|[https://jira.dhis2.org/issues/?filter=11159](https://jira.dhis2.org/issues/?filter=11422)|
|Source code on Github|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.33.0/|
|DHIS 2 community|https://community.dhis2.org/|

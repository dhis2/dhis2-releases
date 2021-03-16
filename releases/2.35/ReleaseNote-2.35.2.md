# Patch 2.35.2 Release Note

## Features

**[DHIS2-9896](https://jira.dhis2.org/browse/DHIS2-9896): Add WSO2 OpenID Connect provider support**  
Components: _[API] Security_  

**[DHIS2-10040](https://jira.dhis2.org/browse/DHIS2-10040): Support SMS text UTF-8 encoding**  
Components: _[API] SMS_

**[DHIS2-10479](https://jira.dhis2.org/browse/DHIS2-10479): Add indexes to relationshipitem's id columns**  
Components: _[API] Tracker_  

**[DHIS2-9835](https://jira.dhis2.org/browse/DHIS2-9835): Username, userid, first name and last name needed for tracker notes**  
Components: _[API] Tracker_

**[DHIS2-10111](https://jira.dhis2.org/browse/DHIS2-10111): Only download relevant org units for programs**  
Components: _[App] Capture_

**[DHIS2-9056](https://jira.dhis2.org/browse/DHIS2-9056): Front-end support for translation of RelationshipType From/To name**  
Components: _[App] Maintenance_

**[DHIS2-10266](https://jira.dhis2.org/browse/DHIS2-10266): Only download relevant org units**  
Components: _[App] Tracker capture_

## Bugs

**[DHIS2-10227](https://jira.dhis2.org/browse/DHIS2-10227): ANTLR division parsing bug: "Expression is empty"**  
Components: _[API] Analytics_

**[DHIS2-10480](https://jira.dhis2.org/browse/DHIS2-10480): incorrect pager for dataElementOperands**  
Components: _[API] Analytics_

**[DHIS2-10441](https://jira.dhis2.org/browse/DHIS2-10441): Indicator .periodOffset() doesn't work for negative offsets**  
Components: _[API] Analytics_

**[DHIS2-10319](https://jira.dhis2.org/browse/DHIS2-10319): Items by dimension pager doesn't account for filter**  
Components: _[API] Analytics_

**[DHIS2-10346](https://jira.dhis2.org/browse/DHIS2-10346): Correct column name for enrollment status when using EVENT type Analytics**  
Components: _[API] Analytics_

**[DHIS2-10304](https://jira.dhis2.org/browse/DHIS2-10304): Wrong program indicator result when using V{creation_date} with analytics boundaries**  
Components: _[API] Analytics_

**[DHIS2-10056](https://jira.dhis2.org/browse/DHIS2-10056): Deleting an AO throws 500 "No row with the given identifier exists"**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-10166](https://jira.dhis2.org/browse/DHIS2-10166): Push Analysis - broken html around report table visualizations**  
Components: _[API] Analytics_

**[DHIS2-9939](https://jira.dhis2.org/browse/DHIS2-9939): File descriptor leak for app resources leads to unusable DHIS 2 instance**  
Components: _[API] App management_

**[DHIS2-9702](https://jira.dhis2.org/browse/DHIS2-9702):  "Run Data Integrity Checks" displaying nothing on Data Administration, Data Integrity sub section**  
Components: _[API] Data administration_

**[DHIS2-10414](https://jira.dhis2.org/browse/DHIS2-10414): Adding = or & in PI/PR expressions/filter cause 500 error**  
Components: _[API] Data administration_, _[API] Program rules_

**[DHIS2-6642](https://jira.dhis2.org/browse/DHIS2-6642): Impossible to permanently delete soft deleted events**  
Components: _[API] Data administration_

**[DHIS2-10119](https://jira.dhis2.org/browse/DHIS2-10119): Events endpoint not returning events whose attributeCos are not shared publicly**  
Components: _[API] Events_

**[DHIS2-10000](https://jira.dhis2.org/browse/DHIS2-10000): Filtering on data elements of value type integer fails**  
Components: _[API] Events_

**[DHIS2-9571](https://jira.dhis2.org/browse/DHIS2-9571): Schedule and Send message PRAs do not work**  
Components: _[API] Messaging_, _[App] Messaging_

**[DHIS2-10620](https://jira.dhis2.org/browse/DHIS2-10620): Slow searches in /api/reportTables**  
Components: _[API] Metadata import-export_

**[DHIS2-10010](https://jira.dhis2.org/browse/DHIS2-10010): Adding and removing objects in a single request not working**  
Components: _[API] Metadata model_

**[DHIS2-10219](https://jira.dhis2.org/browse/DHIS2-10219): getMetaData action with ANTLR parsing is too slow**  
Components: _[API] Other_  

**[DHIS2-10220](https://jira.dhis2.org/browse/DHIS2-10220): Search functionality within sharing dialog doesn't work across first and last names**  
Components: _[API] Other_

**[DHIS2-9467](https://jira.dhis2.org/browse/DHIS2-9467): Audit for OrganisationUnit throw hibernate lazy exception**  
Components: _[API] Other_

**[DHIS2-10189](https://jira.dhis2.org/browse/DHIS2-10189): Struts2 vulnerability S2-061**  
Components: _[API] Security_

**[DHIS2-10076](https://jira.dhis2.org/browse/DHIS2-10076): SMS confidential parameters are not pushed to database**  
Components: _[API] SMS_

**[DHIS2-9480](https://jira.dhis2.org/browse/DHIS2-9480): Duplicate IDs in SMS list**  
Components: _[API] SMS_

**[DHIS2-9941](https://jira.dhis2.org/browse/DHIS2-9941): SMS inbound issue on originator and user phone**  
Components: _[API] SMS_

**[DHIS2-10416](https://jira.dhis2.org/browse/DHIS2-10416): Password change reminder does not reference the instance URL**  
Components: _[API] System configuration_

**[DHIS2-10351](https://jira.dhis2.org/browse/DHIS2-10351): Endpoint for tracked entity instances returns one less entry than requested**  
Components: _[API] Tracker_  

**[DHIS2-10601](https://jira.dhis2.org/browse/DHIS2-10601): TEI search by unique attribute takes long when user search scope is lower level org unit**  
Components: _[API] Tracker_  

**[DHIS2-10603](https://jira.dhis2.org/browse/DHIS2-10603): Search takes long when max tei limit to return in search is set**  
Components: _[API] Tracker_  

**[DHIS2-10600](https://jira.dhis2.org/browse/DHIS2-10600): Front page list takes a long time to load when there are many teis in org unit**  
Components: _[API] Tracker_  

**[DHIS2-10409](https://jira.dhis2.org/browse/DHIS2-10409): Tracker audit fails and crashes the instance with higher load**  
Components: _[API] Tracker_  

**[DHIS2-10342](https://jira.dhis2.org/browse/DHIS2-10342): Extremely high memory allocation when posting TEIs with non super user**  
Components: _[API] Tracker_

**[DHIS2-10375](https://jira.dhis2.org/browse/DHIS2-10375): Response leaks SQL query if number of teis is too big**  
Components: _[API] Tracker_

**[DHIS2-9628](https://jira.dhis2.org/browse/DHIS2-9628): Tracker Capture - open existing relationship fails when Prog & orgunits differ**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-10341](https://jira.dhis2.org/browse/DHIS2-10341): Slow PSQL queries when checking that TEA is unique**  
Components: _[API] Tracker_

**[DHIS2-9787](https://jira.dhis2.org/browse/DHIS2-9787): Error while using V{due_date} variable in Enrollment type Program Indicators**  
Components: _[API] Tracker_

**[DHIS2-10139](https://jira.dhis2.org/browse/DHIS2-10139): Reduce the number of queries required to check if an Event's Org Unit belongs to a Program's Org Units List**  
Components: _[API] Tracker_

**[DHIS2-10318](https://jira.dhis2.org/browse/DHIS2-10318): Endpoint /trackedEntityInstances requires "ou" even if TEI uid is provided**  
Components: _[API] Tracker_

**[DHIS2-8911](https://jira.dhis2.org/browse/DHIS2-8911): Tracker API allow setting an arbitrary string as "storedBy" for Tracked Entity Attribute Values and Data Element Values**  
Components: _[API] Tracker_

**[DHIS2-9454](https://jira.dhis2.org/browse/DHIS2-9454): User API NextPage Only Shows One User per Page**  
Components: _[API] User_, _[App] User_

**[DHIS2-10135](https://jira.dhis2.org/browse/DHIS2-10135): User App Pagination issue (existing in 2.35.1)**  
Components: _[API] User_

**[DHIS2-10415](https://jira.dhis2.org/browse/DHIS2-10415): Cache constant map for performance**  
Components: _[API] Validation_  

**[DHIS2-10336](https://jira.dhis2.org/browse/DHIS2-10336): Validation fails when all data elements referenced with catOptionCombos are also referenced without them**  
Components: _[API] Validation_

**[DHIS2-10632](https://jira.dhis2.org/browse/DHIS2-10632): No translations in Cache Cleaner App**  
Components: _[App] Cache cleaner_

**[DHIS2-10398](https://jira.dhis2.org/browse/DHIS2-10398): new param restrictToCaptureScope=true break down our instances**  
Components: _[App] Capture_

**[DHIS2-5490](https://jira.dhis2.org/browse/DHIS2-5490): Program indicators concatenating numerical TEAs when null**  
Components: _[App] Capture_

**[DHIS2-10358](https://jira.dhis2.org/browse/DHIS2-10358): Column Totals not working in sections forms**  
Components: _[App] Data entry_

**[DHIS2-2510](https://jira.dhis2.org/browse/DHIS2-2510): Allow for implied 0s for non decimals between 0 and 1**  
Components: _[App] Data entry_

**[DHIS2-10216](https://jira.dhis2.org/browse/DHIS2-10216): Localisations not showing in Data Quality app**  
Components: _[App] Data quality_  

**[DHIS2-10355](https://jira.dhis2.org/browse/DHIS2-10355): In pivot tables two relative period are selected**  
Components: _[App] Event reports_, _[App] Pivot table_, _[App] Settings_

**[DHIS2-10440](https://jira.dhis2.org/browse/DHIS2-10440): Blank data item name and spinning wheel after saving Event Report**  
Components: _[App] Event reports_  

**[DHIS2-10163](https://jira.dhis2.org/browse/DHIS2-10163): Event Reports 'breaks' with Data Elements, Attributes and Program Indicators selected**  
Components: _[App] Event reports_

**[DHIS2-10379](https://jira.dhis2.org/browse/DHIS2-10379): Cannot see the fixed period selection field in Event Reports**  
Components: _[App] Event reports_  

**[DHIS2-9839](https://jira.dhis2.org/browse/DHIS2-9839): Enrollment Line List in Event Report cannot sort with DEs from multiple stages**  
Components: _[App] Event reports_

**[DHIS2-3602](https://jira.dhis2.org/browse/DHIS2-3602): Event Import: Incorrect Text when missing Attribute Option Combo**  
Components: _[App] Import-export_

**[DHIS2-10200](https://jira.dhis2.org/browse/DHIS2-10200): Null Pointer Exception in Metadata Import**  
Components: _[App] Import-export_

**[DHIS2-9913](https://jira.dhis2.org/browse/DHIS2-9913): Labels for "Numerator Description" and "Denominator Description"**  
Components: _[App] Maintenance_, _[App] Translations_

**[DHIS2-8658](https://jira.dhis2.org/browse/DHIS2-8658): Maps app: Non-translatable fields**  
Components: _[App] Maps_

**[DHIS2-10576](https://jira.dhis2.org/browse/DHIS2-10576): No translations in Messaging App**  
Components: _[App] Messaging_

**[DHIS2-9849](https://jira.dhis2.org/browse/DHIS2-9849): Message attachements can't be opened in messaging app**  
Components: _[App] Messaging_

**[DHIS2-10301](https://jira.dhis2.org/browse/DHIS2-10301): Login page does not show favicon**  
Components: _[App] Other_

**[DHIS2-10609](https://jira.dhis2.org/browse/DHIS2-10609): Reports app is loading all visualizations from API**  
Components: _[App] Reports_  

**[DHIS2-10502](https://jira.dhis2.org/browse/DHIS2-10502): Unregistered parser cannot parse command string**  
Components: _[App] SMS configuration_

**[DHIS2-10548](https://jira.dhis2.org/browse/DHIS2-10548): Inefficient query on /api/enrollments causes heap explosion**  
Components: _[App] Tracker capture_

**[DHIS2-9935](https://jira.dhis2.org/browse/DHIS2-9935): Program rule action "Send message" is not working when the first stage appears on the registration page**  
Components: _[App] Tracker capture_

**[DHIS2-10636](https://jira.dhis2.org/browse/DHIS2-10636): No translations in Usage Analytics App**  
Components: _[App] Usage analytics_

**[DHIS2-10377](https://jira.dhis2.org/browse/DHIS2-10377): User app crashes browser when there are many users in the system**  
Components: _[App] User_


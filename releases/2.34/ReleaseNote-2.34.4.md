# Patch 2.34.4 Release Note

## Features

**[DHIS2-10380](https://jira.dhis2.org/browse/DHIS2-10380): Disable server-side program rules configuration property**  
Components: _[API] Program rules_, _[API] System configuration_  

**[DHIS2-10479](https://jira.dhis2.org/browse/DHIS2-10479): Add indexes to relationshipitem's id columns**  
Components: _[API] Tracker_  

**[DHIS2-10556](https://jira.dhis2.org/browse/DHIS2-10556): Make "trackedEntityInstanceFilters" & "ProgramStageInstanceFilters" translatable**  
Components: _[API] Translations_

**[DHIS2-5587](https://jira.dhis2.org/browse/DHIS2-5587): Translations for Program Rule Actions (SHOWERROR/SHOWWARNING content)**  
Components: _[API] Translations_  

**[DHIS2-10266](https://jira.dhis2.org/browse/DHIS2-10266): Only download relevant org units**  
Components: _[App] Tracker capture_

## Bugs

**[DHIS2-10648](https://jira.dhis2.org/browse/DHIS2-10648): Charts (and maybe visualizations in general) are missing values for rows, columns and filters when filter by UID is used**  
Components: _[API] Analytics_

**[DHIS2-10480](https://jira.dhis2.org/browse/DHIS2-10480): incorrect pager for dataElementOperands**  
Components: _[API] Analytics_

**[DHIS2-10346](https://jira.dhis2.org/browse/DHIS2-10346): Correct column name for enrollment status when using EVENT type Analytics**  
Components: _[API] Analytics_

**[DHIS2-10304](https://jira.dhis2.org/browse/DHIS2-10304): Wrong program indicator result when using V{creation_date} with analytics boundaries**  
Components: _[API] Analytics_

**[DHIS2-10056](https://jira.dhis2.org/browse/DHIS2-10056): Deleting an AO throws 500 "No row with the given identifier exists"**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-9702](https://jira.dhis2.org/browse/DHIS2-9702):  "Run Data Integrity Checks" displaying nothing on Data Administration, Data Integrity sub section**  
Components: _[API] Data administration_

**[DHIS2-10308](https://jira.dhis2.org/browse/DHIS2-10308): Upgrading from 2.33 to 2.34 fails to migrate chart**  
Components: _[API] Database migration_, _[App] Data visualizer_  

**[DHIS2-10119](https://jira.dhis2.org/browse/DHIS2-10119): Events endpoint not returning events whose attributeCos are not shared publicly**  
Components: _[API] Events_

**[DHIS2-10622](https://jira.dhis2.org/browse/DHIS2-10622): Import fails to link programstagedataelement to programstage due to renderType**  
Components: _[API] Metadata import-export_

**[DHIS2-10620](https://jira.dhis2.org/browse/DHIS2-10620): Slow searches in /api/reportTables**  
Components: _[API] Metadata import-export_

**[DHIS2-10649](https://jira.dhis2.org/browse/DHIS2-10649): Event Charts do not upgrade correctly**  
Components: _[API] Metadata model_  

**[DHIS2-10010](https://jira.dhis2.org/browse/DHIS2-10010): Adding and removing objects in a single request not working**  
Components: _[API] Metadata model_

**[DHIS2-8256](https://jira.dhis2.org/browse/DHIS2-8256): Deleting interpretation comments does not always work**  
Components: _[API] Other_  

**[DHIS2-8262](https://jira.dhis2.org/browse/DHIS2-8262): DataSet Sections are not getting translated first time it is saved.**  
Components: _[API] Other_

**[DHIS2-10220](https://jira.dhis2.org/browse/DHIS2-10220): Search functionality within sharing dialog doesn't work across first and last names**  
Components: _[API] Other_

**[DHIS2-10076](https://jira.dhis2.org/browse/DHIS2-10076): SMS confidential parameters are not pushed to database**  
Components: _[API] SMS_

**[DHIS2-10416](https://jira.dhis2.org/browse/DHIS2-10416): Password change reminder does not reference the instance URL**  
Components: _[API] System configuration_

**[DHIS2-10601](https://jira.dhis2.org/browse/DHIS2-10601): TEI search by unique attribute takes long when user search scope is lower level org unit**  
Components: _[API] Tracker_  

**[DHIS2-10603](https://jira.dhis2.org/browse/DHIS2-10603): Search takes long when max tei limit to return in search is set**  
Components: _[API] Tracker_  

**[DHIS2-10600](https://jira.dhis2.org/browse/DHIS2-10600): Front page list takes a long time to load when there are many teis in org unit**  
Components: _[API] Tracker_  

**[DHIS2-10342](https://jira.dhis2.org/browse/DHIS2-10342): Extremely high memory allocation when posting TEIs with non super user**  
Components: _[API] Tracker_

**[DHIS2-9628](https://jira.dhis2.org/browse/DHIS2-9628): Tracker Capture - open existing relationship fails when Prog & orgunits differ**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-10341](https://jira.dhis2.org/browse/DHIS2-10341): Slow PSQL queries when checking that TEA is unique**  
Components: _[API] Tracker_

**[DHIS2-10415](https://jira.dhis2.org/browse/DHIS2-10415): Cache constant map for performance**  
Components: _[API] Validation_  

**[DHIS2-10336](https://jira.dhis2.org/browse/DHIS2-10336): Validation fails when all data elements referenced with catOptionCombos are also referenced without them**  
Components: _[API] Validation_

**[DHIS2-10398](https://jira.dhis2.org/browse/DHIS2-10398): new param restrictToCaptureScope=true break down our instances**  
Components: _[App] Capture_

**[DHIS2-10653](https://jira.dhis2.org/browse/DHIS2-10653): Remove the word "asdas" in Multi organisation unit forms**  
Components: _[App] Data entry_

**[DHIS2-10358](https://jira.dhis2.org/browse/DHIS2-10358): Column Totals not working in sections forms**  
Components: _[App] Data entry_

**[DHIS2-10216](https://jira.dhis2.org/browse/DHIS2-10216): Localisations not showing in Data Quality app**  
Components: _[App] Data quality_  

**[DHIS2-10355](https://jira.dhis2.org/browse/DHIS2-10355): In pivot tables two relative period are selected**  
Components: _[App] Event reports_, _[App] Pivot table_, _[App] Settings_

**[DHIS2-10163](https://jira.dhis2.org/browse/DHIS2-10163): Event Reports 'breaks' with Data Elements, Attributes and Program Indicators selected**  
Components: _[App] Event reports_

**[DHIS2-10379](https://jira.dhis2.org/browse/DHIS2-10379): Cannot see the fixed period selection field in Event Reports**  
Components: _[App] Event reports_  

**[DHIS2-9839](https://jira.dhis2.org/browse/DHIS2-9839): Enrollment Line List in Event Report cannot sort with DEs from multiple stages**  
Components: _[App] Event reports_

**[DHIS2-10532](https://jira.dhis2.org/browse/DHIS2-10532): Backport: Remove unsupported import-export preheat options**  
Components: _[App] Import-export_  

**[DHIS2-10576](https://jira.dhis2.org/browse/DHIS2-10576): No translations in Messaging App**  
Components: _[App] Messaging_

**[DHIS2-9849](https://jira.dhis2.org/browse/DHIS2-9849): Message attachements can't be opened in messaging app**  
Components: _[App] Messaging_

**[DHIS2-10411](https://jira.dhis2.org/browse/DHIS2-10411): Not able to add user to the recipients for messages**  
Components: _[App] Messaging_

**[DHIS2-10301](https://jira.dhis2.org/browse/DHIS2-10301): Login page does not show favicon**  
Components: _[App] Other_

**[DHIS2-10609](https://jira.dhis2.org/browse/DHIS2-10609): Reports app is loading all visualizations from API**  
Components: _[App] Reports_  

**[DHIS2-10548](https://jira.dhis2.org/browse/DHIS2-10548): Inefficient query on /api/enrollments causes heap explosion**  
Components: _[App] Tracker capture_

**[DHIS2-10636](https://jira.dhis2.org/browse/DHIS2-10636): No translations in Usage Analytics App**  
Components: _[App] Usage analytics_

**[DHIS2-10377](https://jira.dhis2.org/browse/DHIS2-10377): User app crashes browser when there are many users in the system**  
Components: _[App] User_


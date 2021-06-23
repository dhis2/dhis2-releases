# Patch 2.33.9 Release Note

- [Features](#Features)
- [Bugs](#Bugs)

## Features

**[DHIS2-10479](https://jira.dhis2.org/browse/DHIS2-10479): Add indexes to relationshipitem's id columns**  
Components: _[API] Tracker_

**[DHIS2-10562](https://jira.dhis2.org/browse/DHIS2-10562): Make chart/visualisation components translatable**  
Components: _[API] Translations_

**[DHIS2-10556](https://jira.dhis2.org/browse/DHIS2-10556): Make "trackedEntityInstanceFilters" & "ProgramStageInstanceFilters" translatable**  
Components: _[API] Translations_

**[DHIS2-5587](https://jira.dhis2.org/browse/DHIS2-5587): Translations for Program Rule Actions (SHOWERROR/SHOWWARNING content)**  
Components: _[API] Translations_

## Bugs

**[DHIS2-10648](https://jira.dhis2.org/browse/DHIS2-10648): Charts are missing values for rows, columns and filters when filter by UID is used**  
Components: _[API] Analytics_

**[DHIS2-10480](https://jira.dhis2.org/browse/DHIS2-10480): Incorrect pager for dataElementOperands**  
Components: _[API] Analytics_

**[DHIS2-10346](https://jira.dhis2.org/browse/DHIS2-10346): Correct column name for enrollment status when using EVENT type Analytics**  
Components: _[API] Analytics_

**[DHIS2-10304](https://jira.dhis2.org/browse/DHIS2-10304): Wrong program indicator result when using V{creation_date} with analytics boundaries**  
Components: _[API] Analytics_

**[DHIS2-10227](https://jira.dhis2.org/browse/DHIS2-10227): ANTLR division parsing bug: "Expression is empty"**  
Components: _[API] Analytics_

**[DHIS2-11264](https://jira.dhis2.org/browse/DHIS2-11264): Unnecessary access check for events API for event programs**  
Components: _[API] Events_

**[DHIS2-10119](https://jira.dhis2.org/browse/DHIS2-10119): Events endpoint not returning events whose attributeCos are not shared publicly**  
Components: _[API] Events_

**[DHIS2-10702](https://jira.dhis2.org/browse/DHIS2-10702): Unexpected error querying tracked entity instance**  
Components: _[API] Metadata import-export_, _[API] Tracker_

**[DHIS2-10622](https://jira.dhis2.org/browse/DHIS2-10622): Import fails to link programstagedataelement to programstage due to renderType**  
Components: _[API] Metadata import-export_

**[DHIS2-10649](https://jira.dhis2.org/browse/DHIS2-10649): Event Charts do not upgrade correctly**  
Components: _[API] Metadata model_

**[DHIS2-10184](https://jira.dhis2.org/browse/DHIS2-10184): Rendering Options for attributes not correct**  
Components: _[API] Metadata model_, _[API] Other_, _[App] Maintenance_

**[DHIS2-10010](https://jira.dhis2.org/browse/DHIS2-10010): Adding and removing objects in a single request not working**  
Components: _[API] Metadata model_

**[DHIS2-8262](https://jira.dhis2.org/browse/DHIS2-8262): DataSet Sections are not getting translated first time it is saved**  
Components: _[API] Other_

**[DHIS2-10416](https://jira.dhis2.org/browse/DHIS2-10416): Password change reminder does not reference the instance URL**  
Components: _[API] System configuration_

**[DHIS2-9787](https://jira.dhis2.org/browse/DHIS2-9787): Error while using V{due_date} variable in Enrollment type Program Indicators**  
Components: _[API] Tracker_

**[DHIS2-9628](https://jira.dhis2.org/browse/DHIS2-9628): Tracker Capture - open existing relationship fails when Prog & orgunits differ**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-8947](https://jira.dhis2.org/browse/DHIS2-8947): User search paging issue**  
Components: _[API] User_

**[DHIS2-10336](https://jira.dhis2.org/browse/DHIS2-10336): Validation fails when all data elements referenced with catOptionCombos also referenced without them**  
Components: _[API] Validation_

**[DHIS2-10625](https://jira.dhis2.org/browse/DHIS2-10625): Avoid loading all user groups in interpretation comment**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-10653](https://jira.dhis2.org/browse/DHIS2-10653): Remove the word "asdas" in Multi organisation unit forms**  
Components: _[App] Data entry_

**[DHIS2-10358](https://jira.dhis2.org/browse/DHIS2-10358): Column Totals not working in sections forms**  
Components: _[App] Data entry_

**[DHIS2-9829](https://jira.dhis2.org/browse/DHIS2-9829): Trendline render behind column**  
Components: _[App] Data visualizer_

**[DHIS2-10426](https://jira.dhis2.org/browse/DHIS2-10426): Period selection for last N days is blanked out in Event reports**  
Components: _[App] Event reports_

**[DHIS2-10228](https://jira.dhis2.org/browse/DHIS2-10228): Event Reports - Enrollment line list is always blank when a Coordinates data element is selected**  
Components: _[App] Event reports_

**[DHIS2-10066](https://jira.dhis2.org/browse/DHIS2-10066): Selecting an org unit data element in Event Reports line list Enrollment view generates blank output**  
Components: _[App] Event reports_

**[DHIS2-9641](https://jira.dhis2.org/browse/DHIS2-9641): Custom date labels are not respected in event reports downloads**  
Components: _[App] Event reports_

**[DHIS2-10635](https://jira.dhis2.org/browse/DHIS2-10635): No translations in Scheduler App**  
Components: _[App] Job scheduler_

**[DHIS2-10912](https://jira.dhis2.org/browse/DHIS2-10912): Landcover layer is not showing**  
Components: _[App] Maps_

**[DHIS2-10867](https://jira.dhis2.org/browse/DHIS2-10867): Don't request event count when styling by data item**  
Components: _[App] Maps_

**[DHIS2-10722](https://jira.dhis2.org/browse/DHIS2-10722): Error when filtering event layer**  
Components: _[App] Maps_

**[DHIS2-10576](https://jira.dhis2.org/browse/DHIS2-10576): No translations in Messaging App**  
Components: _[App] Messaging_

**[DHIS2-10609](https://jira.dhis2.org/browse/DHIS2-10609): Reports app is loading all visualizations from API**  
Components: _[App] Reports_

**[DHIS2-8869](https://jira.dhis2.org/browse/DHIS2-8869): Error "???" code when show result of Data Set report that has custom form**  
Components: _[App] Reports_

**[DHIS2-10248](https://jira.dhis2.org/browse/DHIS2-10248): Tracker Capture - Completing Enrollment results in events disappearing from Timeline Data Entry**  
Components: _[App] Tracker capture_

**[DHIS2-10636](https://jira.dhis2.org/browse/DHIS2-10636): No translations in Usage Analytics App**  
Components: _[App] Usage analytics_


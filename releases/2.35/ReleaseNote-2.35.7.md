# Patch 2.35.7 Release Note

- [Features](#Features)
- [Bugs](#Bugs)
- [Security Advisories](#Advisories)

## Features

**[DHIS2-10295](https://jira.dhis2.org/browse/DHIS2-10295): Support a single program indicators as filter**  
Components: _[API] Analytics_

**[DHIS2-9674](https://jira.dhis2.org/browse/DHIS2-9674): Create a system job to clean up used reserved values**  
Components: _[API] Tracker_

**[DHIS2-11574](https://jira.dhis2.org/browse/DHIS2-11574): Translatable properties for Predictor and Expression**  
Components: _[API] Translations_

**[DHIS2-11030](https://jira.dhis2.org/browse/DHIS2-11030): Make Notification templates translatable**  
Components: _[API] Translations_

**[DHIS2-11315](https://jira.dhis2.org/browse/DHIS2-11315): Indicators displayed in dataset should not be editable**  
Components: _[App] Data entry_

## Bugs

**[DHIS2-11515](https://jira.dhis2.org/browse/DHIS2-11515): periodOffset indicator expression function is broken**  
Components: _[API] Analytics_

**[DHIS2-11292](https://jira.dhis2.org/browse/DHIS2-11292): Number Conversion Error - Long/Double - Program Indicator**  
Components: _[API] Analytics_

**[DHIS2-10858](https://jira.dhis2.org/browse/DHIS2-10858): Analytics return the name of "yesterday" with a trailing comma**  
Components: _[API] Analytics_

**[DHIS2-10857](https://jira.dhis2.org/browse/DHIS2-10857): Analytics returns large numbers in scientific notation**  
Components: _[API] Analytics_, _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-10742](https://jira.dhis2.org/browse/DHIS2-10742): Endpoint /events/query is ALWAYS paging**  
Components: _[API] Analytics_

**[DHIS2-9313](https://jira.dhis2.org/browse/DHIS2-9313): ADX export of data value sets does not respect the same set of parameters as the other formats**  
Components: _[API] Data value set_

**[DHIS2-11330](https://jira.dhis2.org/browse/DHIS2-11330): Program rule variable name and program validation is not triggered**  
Components: _[API] Metadata import-export_

**[DHIS2-11273](https://jira.dhis2.org/browse/DHIS2-11273): Program rule variable can't be updated through /metadata**  
Components: _[API] Metadata import-export_

**[DHIS2-8379](https://jira.dhis2.org/browse/DHIS2-8379): Data import created date changed when updating data values**  
Components: _[API] Metadata import-export_

**[DHIS2-11051](https://jira.dhis2.org/browse/DHIS2-11051): ProgramStageSection is not available in Translation App**  
Components: _[API] Metadata model_

**[DHIS2-8203](https://jira.dhis2.org/browse/DHIS2-8203): Data elements with differing cat combos in the same section do not respect sort order**  
Components: _[API] Metadata model_, _[App] Data entry_, _[App] Maintenance_

**[DHIS2-11575](https://jira.dhis2.org/browse/DHIS2-11575): EventReports and identifiableObjects endpoint**  
Components: _[API] Other_, _[App] Event reports_

**[DHIS2-11329](https://jira.dhis2.org/browse/DHIS2-11329): Can't edit dashboard with "can edit and view"**  
Components: _[API] Other_

**[DHIS2-11567](https://jira.dhis2.org/browse/DHIS2-11567): High memory allocation when posting teis with enrollments**  
Components: _[API] Tracker_

**[DHIS2-11495](https://jira.dhis2.org/browse/DHIS2-11495): Repeatable program stage check error**  
Components: _[API] Tracker_

**[DHIS2-11409](https://jira.dhis2.org/browse/DHIS2-11409): NPE in EnrollmentController when provided enrollments don't exist**  
Components: _[API] Tracker_

**[DHIS2-11405](https://jira.dhis2.org/browse/DHIS2-11405): Tracker Program Available to Unassigned Org Units and can be enrolled into them**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-11279](https://jira.dhis2.org/browse/DHIS2-11279): NPE in while using UserGroup in program notifications**  
Components: _[API] Tracker_

**[DHIS2-11121](https://jira.dhis2.org/browse/DHIS2-11121): Tracker async import only expect new entities**  
Components: _[API] Tracker_

**[DHIS2-10394](https://jira.dhis2.org/browse/DHIS2-10394): Program rule action: ERROR_ON_COMPLETE is executed regardless status**  
Components: _[App] Capture_

**[DHIS2-10330](https://jira.dhis2.org/browse/DHIS2-10330): Capture App viewEvent URL link for category options**  
Components: _[App] Capture_

**[DHIS2-11023](https://jira.dhis2.org/browse/DHIS2-11023): The programStagesInstances shouldn't exist in resources**  
Components: _[App] Core resource_

**[DHIS2-11303](https://jira.dhis2.org/browse/DHIS2-11303): Dashboard show empty chart or spinner when analytics request fails**  
Components: _[App] Dashboard_

**[DHIS2-11113](https://jira.dhis2.org/browse/DHIS2-11113): Visualisations of CERTAIN_TYPES are not supported on dashboards**  
Components: _[App] Dashboard_

**[DHIS2-10365](https://jira.dhis2.org/browse/DHIS2-10365): Pagination ends at 50 for Dashboard Filters of OUGSets, OUGs within OUGSets**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11241](https://jira.dhis2.org/browse/DHIS2-11241): Lack of translation strings**  
Components: _[App] Data administration_

**[DHIS2-10985](https://jira.dhis2.org/browse/DHIS2-10985): Data integrity check UI indicates errors when none exists**  
Components: _[App] Data administration_

**[DHIS2-7164](https://jira.dhis2.org/browse/DHIS2-7164): Indicators are displayed twice in data entry when the section contains multiple category combos.**  
Components: _[App] Data entry_

**[DHIS2-11230](https://jira.dhis2.org/browse/DHIS2-11230): Incorrect documentation URLs**  
Components: _[App] Data quality_

**[DHIS2-11291](https://jira.dhis2.org/browse/DHIS2-11291): Org unit type data element shows the UID instead of name in Event reports**  
Components: _[App] Event reports_

**[DHIS2-10228](https://jira.dhis2.org/browse/DHIS2-10228): Event Reports - Enrollment line list is always blank when a Coordinates data element is selected**  
Components: _[App] Event reports_

**[DHIS2-10066](https://jira.dhis2.org/browse/DHIS2-10066): Selecting an org unit data element in Event Reports line list Enrollment view generates blank output**  
Components: _[App] Event reports_

**[DHIS2-9641](https://jira.dhis2.org/browse/DHIS2-9641): Custom date labels are not respected in event reports downloads**  
Components: _[App] Event reports_

**[DHIS2-9022](https://jira.dhis2.org/browse/DHIS2-9022): Event reports app sometimes doesn't load (formatDate error)**  
Components: _[App] Event reports_

**[DHIS2-11618](https://jira.dhis2.org/browse/DHIS2-11618): Lack of navigation item text wrapping**  
Components: _[App] Import-export_

**[DHIS2-11604](https://jira.dhis2.org/browse/DHIS2-11604): Incomplete translations**  
Components: _[App] Import-export_

**[DHIS2-11355](https://jira.dhis2.org/browse/DHIS2-11355): Being unable to comple data set using completeDataSetRegistration Web API orgUnitIdScheme=code**  
Components: _[App] Import-export_

**[DHIS2-11335](https://jira.dhis2.org/browse/DHIS2-11335): Fixed periods does not work for non-default locales**  
Components: _[App] Maps_

**[DHIS2-11143](https://jira.dhis2.org/browse/DHIS2-11143): Maps are not downloadable in Maps app**  
Components: _[App] Maps_

**[DHIS2-10736](https://jira.dhis2.org/browse/DHIS2-10736): Event layer: Not possible to style by "mode of discharge"**  
Components: _[App] Maps_

**[DHIS2-11414](https://jira.dhis2.org/browse/DHIS2-11414): Tracker Program Available to Unassigned Org Units**  
Components: _[App] Tracker capture_

**[DHIS2-10248](https://jira.dhis2.org/browse/DHIS2-10248): Tracker Capture - Completing Enrollment results in events disappearing from Timeline Data Entry**  
Components: _[App] Tracker capture_

**[DHIS2-10081](https://jira.dhis2.org/browse/DHIS2-10081): Can't delete polygon in TEI profile in Tracker capture**  
Components: _[App] Tracker capture_

**[DHIS2-8660](https://jira.dhis2.org/browse/DHIS2-8660): Non-translatable fields in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-8475](https://jira.dhis2.org/browse/DHIS2-8475): Automatically generated ID using SEQUENTIAL incrementing by 2**  
Components: _[App] Tracker capture_

**[DHIS2-5835](https://jira.dhis2.org/browse/DHIS2-5835): Percentage data values do not accept floats**  
Components: _[App] Tracker capture_

**[DHIS2-7700](https://jira.dhis2.org/browse/DHIS2-7700): Fileresource Cleanup Job doesn't delete correct/any files**  
Components: 

## Advisories

This release contains fixes for the following Common Vulnerabilites and Exposures (CVEs)

* CVE-2021-39179

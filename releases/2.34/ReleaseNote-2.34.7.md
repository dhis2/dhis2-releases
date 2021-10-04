# Patch 2.34.7 Release Note

- [Patch 2.34.7 Release Note](#patch-2347-release-note)
  - [Features](#features)
  - [Bugs](#bugs)
  - [Advisories](#advisories)
  

## Features

**[DHIS2-11182](https://jira.dhis2.org/browse/DHIS2-11182): Remove uneccesary use of reserved values and queries**  
Components: _[API] Tracker_

**[DHIS2-9674](https://jira.dhis2.org/browse/DHIS2-9674): Create a system job to clean up used reserved values**  
Components: _[API] Tracker_

**[DHIS2-11599](https://jira.dhis2.org/browse/DHIS2-11599): Respect section config for data element grouping**  
Components: _[App] Data entry_

## Bugs

**[DHIS2-7712](https://jira.dhis2.org/browse/DHIS2-7712): Event reports doesn't use dimension restrictions assigned to a user account**  
Components: _[API] Analytics_, _[API] Events_

**[DHIS2-9313](https://jira.dhis2.org/browse/DHIS2-9313): ADX export of data value sets does not respect the same set of parameters as the other formats**  
Components: _[API] Data value set_  

**[DHIS2-11330](https://jira.dhis2.org/browse/DHIS2-11330): Program rule variable name and program validation is not triggered**  
Components: _[API] Metadata import-export_

**[DHIS2-8203](https://jira.dhis2.org/browse/DHIS2-8203): Data elements with differing cat combos in the same section do not respect sort order**  
Components: _[API] Metadata model_, _[App] Data entry_, _[App] Maintenance_

**[DHIS2-11575](https://jira.dhis2.org/browse/DHIS2-11575): EventReports and identifiableObjects endpoint**  
Components: _[API] Other_, _[App] Event reports_

**[DHIS2-11567](https://jira.dhis2.org/browse/DHIS2-11567): High memory allocation when posting teis with enrollments**  
Components: _[API] Tracker_

**[DHIS2-11405](https://jira.dhis2.org/browse/DHIS2-11405): Tracker Program Available to Unassigned Org Units and can be enrolled into them**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-11082](https://jira.dhis2.org/browse/DHIS2-11082): DataElement displayFormName defaults to name instead of formName**  
Components: _[API] Translations_  

**[DHIS2-10330](https://jira.dhis2.org/browse/DHIS2-10330): Capture App viewEvent URL link for category options**  
Components: _[App] Capture_

**[DHIS2-11303](https://jira.dhis2.org/browse/DHIS2-11303): Dashboard show empty chart or spinner when analytics request fails**  
Components: _[App] Dashboard_

**[DHIS2-11241](https://jira.dhis2.org/browse/DHIS2-11241): Lack of translation strings**  
Components: _[App] Data administration_

**[DHIS2-9022](https://jira.dhis2.org/browse/DHIS2-9022): Event reports app sometimes doesn't load (formatDate error)**  
Components: _[App] Event reports_

**[DHIS2-11355](https://jira.dhis2.org/browse/DHIS2-11355): Being unable to comple data set using completeDataSetRegistration Web API orgUnitIdScheme=code**  
Components: _[App] Import-export_

**[DHIS2-11335](https://jira.dhis2.org/browse/DHIS2-11335): Fixed periods does not work for non-default locales**  
Components: _[App] Maps_

**[DHIS2-11629](https://jira.dhis2.org/browse/DHIS2-11629): Message types not translated**  
Components: _[App] Messaging_

**[DHIS2-11403](https://jira.dhis2.org/browse/DHIS2-11403): Assignment program rule crashes when assigning numeric value**  
Components: _[App] Tracker capture_

**[DHIS2-5835](https://jira.dhis2.org/browse/DHIS2-5835): Percentage data values do not accept floats**  
Components: _[App] Tracker capture_

## Advisories

This release contains fixes for the following Common Vulnerabilites and Exposures (CVEs)

* CVE-2021-39179
* CVE-2021-xxxxx (TBC)
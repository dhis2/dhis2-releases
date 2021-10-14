# Patch 2.36.4 Release Note

  - [Features](#features)
  - [Bugs](#bugs)
  - [Security Advisories](#advisories)

## Features

**[DHIS2-11182](https://jira.dhis2.org/browse/DHIS2-11182): Remove uneccesary use of reserved values and queries**  
Components: _[API] Tracker_

**[DHIS2-11196](https://jira.dhis2.org/browse/DHIS2-11196): Include uid of deleted elements in the new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-9674](https://jira.dhis2.org/browse/DHIS2-9674): Create a system job to clean up used reserved values**  
Components: _[API] Tracker_

## Bugs

**[DHIS2-10551](https://jira.dhis2.org/browse/DHIS2-10551): Indicator .periodOffset() doesn't work for multiple offsets**  
Components: _[API] Analytics_

**[DHIS2-11515](https://jira.dhis2.org/browse/DHIS2-11515): periodOffset indicator expression function is broken**  
Components: _[API] Analytics_

**[DHIS2-9313](https://jira.dhis2.org/browse/DHIS2-9313): ADX export of data value sets does not respect the same set of parameters as the other formats**  
Components: _[API] Data value set_

**[DHIS2-11429](https://jira.dhis2.org/browse/DHIS2-11429): Event order without direction leads to 500 server error**  
Components: _[API] Events_

**[DHIS2-11144](https://jira.dhis2.org/browse/DHIS2-11144): Tracker: Data Element Form Name, not show-up in the forms (For both Mobile & Desktop)**  
Components: _[API] Metadata model_

**[DHIS2-11383](https://jira.dhis2.org/browse/DHIS2-11383): !like api filter operator broken**  
Components: _[API] Metadata model_

**[DHIS2-11575](https://jira.dhis2.org/browse/DHIS2-11575): EventReports and identifiableObjects endpoint**  
Components: _[API] Other_, _[App] Event reports_

**[DHIS2-11761](https://jira.dhis2.org/browse/DHIS2-11761): TEI lastUpdated value is not updated on event updates**  
Components: _[API] Tracker_

**[DHIS2-11758](https://jira.dhis2.org/browse/DHIS2-11758): Null pointer exception when assignedUser query param has empty value**  
Components: _[API] Tracker_

**[DHIS2-11577](https://jira.dhis2.org/browse/DHIS2-11577): Hard deletion of event/enrollment does not add audit entry**  
Components: _[API] Tracker_

**[DHIS2-11567](https://jira.dhis2.org/browse/DHIS2-11567): High memory allocation when posting teis with enrollments**  
Components: _[API] Tracker_

**[DHIS2-11409](https://jira.dhis2.org/browse/DHIS2-11409): NPE in EnrollmentController when provided enrollments don't exist**  
Components: _[API] Tracker_

**[DHIS2-11405](https://jira.dhis2.org/browse/DHIS2-11405): Tracker Program Available to Unassigned Org Units and can be enrolled into them**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-11495](https://jira.dhis2.org/browse/DHIS2-11495): Repeatable program stage check error**  
Components: _[API] Tracker_

**[DHIS2-10330](https://jira.dhis2.org/browse/DHIS2-10330): Capture App viewEvent URL link for category options**  
Components: _[App] Capture_

**[DHIS2-11031](https://jira.dhis2.org/browse/DHIS2-11031): Show more dashboards broken on "not found" page**  
Components: _[App] Dashboard_

**[DHIS2-11304](https://jira.dhis2.org/browse/DHIS2-11304): Dashboard - wrong font in table when viewing map as table**  
Components: _[App] Dashboard_

**[DHIS2-10985](https://jira.dhis2.org/browse/DHIS2-10985): Data integrity check UI indicates errors when none exists**  
Components: _[App] Data administration_

**[DHIS2-11820](https://jira.dhis2.org/browse/DHIS2-11820): ID shown in the title instead of name for national level OU**  
Components: _[App] Data visualizer_

**[DHIS2-9022](https://jira.dhis2.org/browse/DHIS2-9022): Event reports app sometimes doesn't load (formatDate error)**  
Components: _[App] Event reports_

**[DHIS2-11618](https://jira.dhis2.org/browse/DHIS2-11618): Lack of navigation item text wrapping**  
Components: _[App] Import-export_

**[DHIS2-11604](https://jira.dhis2.org/browse/DHIS2-11604): Incomplete translations**  
Components: _[App] Import-export_

**[DHIS2-11355](https://jira.dhis2.org/browse/DHIS2-11355): Being unable to comple data set using completeDataSetRegistration Web API orgUnitIdScheme=code**  
Components: _[App] Import-export_

**[DHIS2-11629](https://jira.dhis2.org/browse/DHIS2-11629): Message types not translated**  
Components: _[App] Messaging_

**[DHIS2-11004](https://jira.dhis2.org/browse/DHIS2-11004): Unable to update event/input data in program using category combo (attribute)**  
Components: _[App] Tracker capture_

**[DHIS2-11528](https://jira.dhis2.org/browse/DHIS2-11528): Users with spaces in their username cannot be edited**  
Components: _[App] User_

## Advisories

This release contains fixes for the following Common Vulnerabilites and Exposures (CVEs)

* CVE-2021-39179
* CVE-2021-xxxxx (TBC)


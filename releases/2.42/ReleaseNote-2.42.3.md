# Patch 2.42.3 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-20160](https://dhis2.atlassian.net/browse/DHIS2-20160): Analytics table update crashes when data approval enabled**  
Components: _[API] Analytics_

**[DHIS2-20269](https://dhis2.atlassian.net/browse/DHIS2-20269): Perf: FileResource - when saving files, move creating extra image files to the async process**  
Components: _[API] File Resources_

**[DHIS2-20189](https://dhis2.atlassian.net/browse/DHIS2-20189): DHIS2 route runs should be audited**  
Components: _[API] Other_

**[DHIS2-20001](https://dhis2.atlassian.net/browse/DHIS2-20001): Hide unsupported attribute types from search form in Capture**  
Components: _[App] Capture_

**[DHIS2-18739](https://dhis2.atlassian.net/browse/DHIS2-18739): Update feedback and indicator widgets in Registration page**  
Components: _[App] Capture_

**[DHIS2-20000](https://dhis2.atlassian.net/browse/DHIS2-20000): Show message when no searchable attributes exist for an entity type**  
Components: _[App] Capture_

**[DHIS2-20143](https://dhis2.atlassian.net/browse/DHIS2-20143): Perf: Improve housekeeping job to only update file resources that need updating**  
Components: _[Core] Job Scheduler_

## Bugs

**[DHIS2-18638](https://dhis2.atlassian.net/browse/DHIS2-18638): Events and enrollments queries assign option set names to Yes/No (boolean) attributes and data elements**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-19473](https://dhis2.atlassian.net/browse/DHIS2-19473): Duplicated Analytics values when using Continuous Analytics job**  
Components: _[API] Analytics_

**[DHIS2-19681](https://dhis2.atlassian.net/browse/DHIS2-19681): analytics/tracker/events?coordinateField=**OrgUnit** returns polygons instead of their centroids**  
Components: _[API] Analytics_

**[DHIS2-20279](https://dhis2.atlassian.net/browse/DHIS2-20279): Periods in Visualization rows display out of order**  
Components: _[API] Analytics_

**[DHIS2-19934](https://dhis2.atlassian.net/browse/DHIS2-19934): Fix OU centroid property access when generating analytics tables**  
Components: _[API] Analytics_

**[DHIS2-20076](https://dhis2.atlassian.net/browse/DHIS2-20076): /api/visualizations/[visualization UID]/data results in internal server error when relative periods are used**  
Components: _[API] Analytics_

**[DHIS2-20300](https://dhis2.atlassian.net/browse/DHIS2-20300): Analytics Table Generation Fails Due to String Template Bug in Data Approval Joins**  
**[DHIS2-20261](https://dhis2.atlassian.net/browse/DHIS2-20261): Debug route logging can leak sensitive query params**  
Components: _[API] Other_

**[DHIS2-20181](https://dhis2.atlassian.net/browse/DHIS2-20181): PR/PRA validation is wrong for certain combinations of PRAs**  
Components: _[API] Program rules_

**[DHIS2-20391](https://dhis2.atlassian.net/browse/DHIS2-20391): The attributes value are missing in the /tracker/relationships response**  
Components: _[API] Tracker_

**[DHIS2-20173](https://dhis2.atlassian.net/browse/DHIS2-20173): Validate current and updated org unit when single event org unit updated**  
Components: _[API] Tracker_

**[DHIS2-20125](https://dhis2.atlassian.net/browse/DHIS2-20125): Tracker events use event org unit to validate ACL**  
Components: _[API] Tracker_

**[DHIS2-20132](https://dhis2.atlassian.net/browse/DHIS2-20132): Check for write access to a TET when importing a TE**  
Components: _[API] Tracker_

**[DHIS2-20328](https://dhis2.atlassian.net/browse/DHIS2-20328): Not possible to create new users when credentialsExpires is set**  
Components: _[API] User_

**[DHIS2-20045](https://dhis2.atlassian.net/browse/DHIS2-20045): TEA values disappear in relationship widget when refreshing page**  
**[DHIS2-16869](https://dhis2.atlassian.net/browse/DHIS2-16869): Capture top-bar showing UID when editing attribute**  
Components: _[App] Capture_

**[DHIS2-19970](https://dhis2.atlassian.net/browse/DHIS2-19970): Shortcut fallback language not falling back for Maintenance app**  
Components: _[App] Maintenance_

**[DHIS2-16371](https://dhis2.atlassian.net/browse/DHIS2-16371): Adjust text for OrgUnitField for Program Indicators**  
Components: _[App] Maintenance_

**[DHIS2-20130](https://dhis2.atlassian.net/browse/DHIS2-20130): Post Routes with form data and file doesn't work**  
Components: _[App] Route Manager_


# Patch 2.41.6 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-20269](https://dhis2.atlassian.net/browse/DHIS2-20269): Perf: FileResource - when saving files, move creating extra image files to the async process**  
Components: _[API] File Resources_

**[DHIS2-19942](https://dhis2.atlassian.net/browse/DHIS2-19942): Prevent updating a CategoryCombo's Categories through the `/api/metadata` endpoint, when associated data exists**  
Components: _[API] Metadata import-export_

**[DHIS2-18253](https://dhis2.atlassian.net/browse/DHIS2-18253): Crash with invalid JSON when deserializing attribute values**  
Components: _[API] Metadata model_

**[DHIS2-20189](https://dhis2.atlassian.net/browse/DHIS2-20189): DHIS2 route runs should be audited**  
Components: _[API] Other_

**[DHIS2-19828](https://dhis2.atlassian.net/browse/DHIS2-19828): HTTP HEAD as method for personal access tokens (PAT)**  
Components: _[API] Security_

**[DHIS2-18907](https://dhis2.atlassian.net/browse/DHIS2-18907): Implement slideshow autoplay**  
Components: _[App] Dashboard_

**[DHIS2-19863](https://dhis2.atlassian.net/browse/DHIS2-19863): Expose the ApiToken/PAT's code field to the UI, so it can be used for naming tokens**  
Components: _[App] User Profile_

**[DHIS2-20143](https://dhis2.atlassian.net/browse/DHIS2-20143): Perf: Improve housekeeping job to only update file resources that need updating**  
Components: _[Core] Job Scheduler_

## Bugs

**[DHIS2-20300](https://dhis2.atlassian.net/browse/DHIS2-20300): Analytics Table Generation Fails Due to String Template Bug in Data Approval Joins**  
**[DHIS2-19584](https://dhis2.atlassian.net/browse/DHIS2-19584): Exporting dashboard with dependencies not exporting visualizations relativePeriods**  
Components: _[API] Analytics_

**[DHIS2-19989](https://dhis2.atlassian.net/browse/DHIS2-19989): Analytics API: Query with dimensions of type coordinate fails**  
Components: _[API] Analytics_

**[DHIS2-19762](https://dhis2.atlassian.net/browse/DHIS2-19762): ProgramTrackedEntityAttributes and ProgramStageDataElements should not appear at root level in dependency export**  
Components: _[API] Metadata import-export_

**[DHIS2-20099](https://dhis2.atlassian.net/browse/DHIS2-20099): [API: validationNotificationTemplates]: patch updates do not work**  
Components: _[API] Metadata model_

**[DHIS2-20182](https://dhis2.atlassian.net/browse/DHIS2-20182): Incorrect `Content-Encoding` header on custom app files**  
Components: _[API] Other_

**[DHIS2-20261](https://dhis2.atlassian.net/browse/DHIS2-20261): Debug route logging can leak sensitive query params**  
Components: _[API] Other_

**[DHIS2-19941](https://dhis2.atlassian.net/browse/DHIS2-19941): [API: DATA SET SECTIONS EDIT]: removing an indicator from a data set does not remove it from an associated section**  
Components: _[API] Other_

**[DHIS2-19725](https://dhis2.atlassian.net/browse/DHIS2-19725): Visualization with calculations won't sync - TransientObjectException - ExpressionDimensionItem**  
Components: _[API] Synchronization_

**[DHIS2-12547](https://dhis2.atlassian.net/browse/DHIS2-12547): Program-related endpoints do not ensure SRID=4326 for all coordinates**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-20173](https://dhis2.atlassian.net/browse/DHIS2-20173): Validate current and updated org unit when single event org unit updated**  
Components: _[API] Tracker_

**[DHIS2-20125](https://dhis2.atlassian.net/browse/DHIS2-20125): Tracker events use event org unit to validate ACL**  
Components: _[API] Tracker_

**[DHIS2-20132](https://dhis2.atlassian.net/browse/DHIS2-20132): Check for write access to a TET when importing a TE**  
Components: _[API] Tracker_

**[DHIS2-18338](https://dhis2.atlassian.net/browse/DHIS2-18338): Tracker endpoints emit inaccessible data for a period of time**  
Components: _[API] Tracker_

**[DHIS2-20037](https://dhis2.atlassian.net/browse/DHIS2-20037): Empty static text in warning program rule action breaks tracker importer**  
Components: _[API] Tracker_

**[DHIS2-20009](https://dhis2.atlassian.net/browse/DHIS2-20009): "Reason to check for enrollments" needs to be mandatory**  
Components: _[App] Capture_

**[DHIS2-19973](https://dhis2.atlassian.net/browse/DHIS2-19973): App menu: links opening in new tabs for some apps**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-19267](https://dhis2.atlassian.net/browse/DHIS2-19267): Clicking data-table sort icon causes crash for some columns**  
Components: _[App] Maps_

**[DHIS2-20010](https://dhis2.atlassian.net/browse/DHIS2-20010): Routes with parameters using filter=id:in:[uid,uid] doesn't work**  
Components: _[App] Route Manager_

**[DHIS2-20157](https://dhis2.atlassian.net/browse/DHIS2-20157): fix: FileResourceCleanUpJob does not clean up JOB_DATA file resources/files for deleted  ONCE_ASAP jobs**  
Components: _[Core] Job Scheduler_


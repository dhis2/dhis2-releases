# Patch 2.40.10 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-20269](https://dhis2.atlassian.net/browse/DHIS2-20269): Perf: FileResource - when saving files, move creating extra image files to the async process**  
Components: _[API] File Resources_

**[DHIS2-20189](https://dhis2.atlassian.net/browse/DHIS2-20189): DHIS2 route runs should be audited**  
Components: _[API] Other_

**[DHIS2-19828](https://dhis2.atlassian.net/browse/DHIS2-19828): HTTP HEAD as method for personal access tokens (PAT)**  
Components: _[API] Security_

**[DHIS2-20001](https://dhis2.atlassian.net/browse/DHIS2-20001): Hide unsupported attribute types from search form in Capture**  
Components: _[App] Capture_

**[DHIS2-20000](https://dhis2.atlassian.net/browse/DHIS2-20000): Show message when no searchable attributes exist for an entity type**  
Components: _[App] Capture_

**[DHIS2-18739](https://dhis2.atlassian.net/browse/DHIS2-18739): Update feedback and indicator widgets in Registration page**  
Components: _[App] Capture_

**[DHIS2-18907](https://dhis2.atlassian.net/browse/DHIS2-18907): Implement slideshow autoplay**  
Components: _[App] Dashboard_

**[DHIS2-19863](https://dhis2.atlassian.net/browse/DHIS2-19863): Expose the ApiToken/PAT's code field to the UI, so it can be used for naming tokens**  
Components: _[App] User Profile_

## Bugs

**[DHIS2-19681](https://dhis2.atlassian.net/browse/DHIS2-19681): analytics/tracker/events?coordinateField=**OrgUnit** returns polygons instead of their centroids**  
Components: _[API] Analytics_

**[DHIS2-19673](https://dhis2.atlassian.net/browse/DHIS2-19673): DV crashing while searching by Name containing colon ( : )**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-20111](https://dhis2.atlassian.net/browse/DHIS2-20111): Invalid date range generated in Aggregate Enrollment analytics when `pe` dimension is used in filter**  
Components: _[API] Analytics_

**[DHIS2-18638](https://dhis2.atlassian.net/browse/DHIS2-18638): Events and enrollments queries assign option set names to Yes/No (boolean) attributes and data elements**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-19989](https://dhis2.atlassian.net/browse/DHIS2-19989): Analytics API: Query with dimensions of type coordinate fails**  
Components: _[API] Analytics_

**[DHIS2-20279](https://dhis2.atlassian.net/browse/DHIS2-20279): Periods in Visualization rows display out of order**  
Components: _[API] Analytics_

**[DHIS2-20076](https://dhis2.atlassian.net/browse/DHIS2-20076): /api/visualizations/[visualization UID]/data results in internal server error when relative periods are used**  
Components: _[API] Analytics_

**[DHIS2-19762](https://dhis2.atlassian.net/browse/DHIS2-19762): ProgramTrackedEntityAttributes and ProgramStageDataElements should not appear at root level in dependency export**  
Components: _[API] Metadata import-export_

**[DHIS2-20099](https://dhis2.atlassian.net/browse/DHIS2-20099): [API: validationNotificationTemplates]: patch updates do not work**  
Components: _[API] Metadata model_

**[DHIS2-20290](https://dhis2.atlassian.net/browse/DHIS2-20290): Routes API: pass response body transparently for non-200 responses**  
Components: _[API] Other_

**[DHIS2-20182](https://dhis2.atlassian.net/browse/DHIS2-20182): Incorrect `Content-Encoding` header on custom app files**  
Components: _[API] Other_

**[DHIS2-20261](https://dhis2.atlassian.net/browse/DHIS2-20261): Debug route logging can leak sensitive query params**  
Components: _[API] Other_

**[DHIS2-19941](https://dhis2.atlassian.net/browse/DHIS2-19941): [API: DATA SET SECTIONS EDIT]: removing an indicator from a data set does not remove it from an associated section**  
Components: _[API] Other_

**[DHIS2-20181](https://dhis2.atlassian.net/browse/DHIS2-20181): PR/PRA validation is wrong for certain combinations of PRAs**  
Components: _[API] Program rules_

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

**[DHIS2-20328](https://dhis2.atlassian.net/browse/DHIS2-20328): Not possible to create new users when credentialsExpires is set**  
Components: _[API] User_

**[DHIS2-20437](https://dhis2.atlassian.net/browse/DHIS2-20437): No searchable attributes message appears when the page loads**  
Components: _[App] Capture_

**[DHIS2-20352](https://dhis2.atlassian.net/browse/DHIS2-20352): Capture app fails to load when DE or TEA referenced in indicator is missing**  
Components: _[App] Capture_

**[DHIS2-16869](https://dhis2.atlassian.net/browse/DHIS2-16869): Capture top-bar showing UID when editing attribute**  
Components: _[App] Capture_

**[DHIS2-20009](https://dhis2.atlassian.net/browse/DHIS2-20009): "Reason to check for enrollments" needs to be mandatory**  
Components: _[App] Capture_

**[DHIS2-16467](https://dhis2.atlassian.net/browse/DHIS2-16467): Maps Legend on the dashboard collapsed during printing**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-20362](https://dhis2.atlassian.net/browse/DHIS2-20362): Interpretations and details does not open in the Visualiser app when visualisation type is Pivot Table**  
Components: _[App] Data visualizer_

**[DHIS2-16371](https://dhis2.atlassian.net/browse/DHIS2-16371): Adjust text for OrgUnitField for Program Indicators**  
Components: _[App] Maintenance_

**[DHIS2-20010](https://dhis2.atlassian.net/browse/DHIS2-20010): Routes with parameters using filter=id:in:[uid,uid] doesn't work**  
Components: _[App] Route Manager_

**[DHIS2-20130](https://dhis2.atlassian.net/browse/DHIS2-20130): Post Routes with form data and file doesn't work**  
Components: _[App] Route Manager_


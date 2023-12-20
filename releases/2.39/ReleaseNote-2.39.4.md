# Patch 2.39.4 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-15880](https://dhis2.atlassian.net/browse/DHIS2-15880): System setting for number of analytics table export parallel jobs**  
Components: _[API] Analytics_

**[DHIS2-16123](https://dhis2.atlassian.net/browse/DHIS2-16123): "Inherit" tracked entity attributes**  
Components: _[App] Capture_

**[DHIS2-13237](https://dhis2.atlassian.net/browse/DHIS2-13237): Capture and show enrollment coordinates in enrollment widget**  
Components: _[App] Capture_

**[DHIS2-14012](https://dhis2.atlassian.net/browse/DHIS2-14012): Remove the working list "Download as XML" button**  
Components: _[App] Capture_

**[DHIS2-15483](https://dhis2.atlassian.net/browse/DHIS2-15483): Assign user to scheduled events**  
Components: _[App] Capture_

**[DHIS2-15906](https://dhis2.atlassian.net/browse/DHIS2-15906): Relationships: Consider auto-generate event and first-stage on registration page for tracked entity registration**  
Components: _[App] Capture_

**[DHIS2-12616](https://dhis2.atlassian.net/browse/DHIS2-12616): Add TEI's relationship - Create new TEI to link (capture-parity edition)**  
Components: _[App] Capture_

**[DHIS2-15657](https://dhis2.atlassian.net/browse/DHIS2-15657): User friendly error screens for E7144 and E7145**  
Components: _[App] Data visualizer_, _[App] Line Listing_

## Bugs

**[DHIS2-15184](https://dhis2.atlassian.net/browse/DHIS2-15184): Return friendly error message when analytics queries fail to execute.**  
Components: _[API] Analytics_

**[DHIS2-15873](https://dhis2.atlassian.net/browse/DHIS2-15873): Program Indicator Calculation Error on Reusing Data Elements Across Program Stages**  
Components: _[API] Analytics_

**[DHIS2-15573](https://dhis2.atlassian.net/browse/DHIS2-15573): Errors executing analytics due invalid date and period**  
Components: _[API] Analytics_

**[DHIS2-15372](https://dhis2.atlassian.net/browse/DHIS2-15372): Month names are not same as the report in the PDF**  
Components: _[API] Analytics_

**[DHIS2-16256](https://dhis2.atlassian.net/browse/DHIS2-16256): Return all completed data integrity summaries regardless of if they are slow or not**  
Components: _[API] Data administration_

**[DHIS2-15837](https://dhis2.atlassian.net/browse/DHIS2-15837): dataApprovals/categoryOptionCombos returns no results**  
Components: _[API] Data approval_

**[DHIS2-16138](https://dhis2.atlassian.net/browse/DHIS2-16138): dataValueSet API performance has drastically worsened in v40**  
Components: _[API] Data value set_

**[DHIS2-16159](https://dhis2.atlassian.net/browse/DHIS2-16159): dataValueSet API performance has drastically worsened in v40**  
Components: _[API] Data value set_

**[DHIS2-12345](https://dhis2.atlassian.net/browse/DHIS2-12345): CSV import events - UI does not recognize when import is complete**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-16145](https://dhis2.atlassian.net/browse/DHIS2-16145): Database connection test during startup does not close database connection**  
Components: _[API] Other_

**[DHIS2-16117](https://dhis2.atlassian.net/browse/DHIS2-16117): tracker/events not returning event relationships**  
Components: _[API] Tracker_

**[DHIS2-15724](https://dhis2.atlassian.net/browse/DHIS2-15724): Capture app does not send enrolment notification**  
Components: _[API] Tracker_

**[DHIS2-15679](https://dhis2.atlassian.net/browse/DHIS2-15679): /tracker/events?order=<attributeUID> filters out events without attribute**  
Components: _[API] Tracker_

**[DHIS2-15967](https://dhis2.atlassian.net/browse/DHIS2-15967): Selecting Tracked Entity Type Attribute as Mandatory creates an error in Capture app**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-15787](https://dhis2.atlassian.net/browse/DHIS2-15787): Unexpected 403 response when modifying user**  
Components: _[API] User_

**[DHIS2-15866](https://dhis2.atlassian.net/browse/DHIS2-15866): Disabling two factor authentication returns an error**  
Components: _[API] User_

**[DHIS2-15883](https://dhis2.atlassian.net/browse/DHIS2-15883): Data Entry App: app crashes if section has no data elements**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-16317](https://dhis2.atlassian.net/browse/DHIS2-16317): " Please provide a valid organisation unit" error message pops up when selecting organisation unit type data element on Capture app**  
Components: _[App] Capture_

**[DHIS2-15694](https://dhis2.atlassian.net/browse/DHIS2-15694): Cancel-button navigates to wrong page in Relationships**  
Components: _[App] Capture_

**[DHIS2-15686](https://dhis2.atlassian.net/browse/DHIS2-15686): Program rule that copy data element value into an attribute does not work when opening/editing TE profile**  
Components: _[App] Capture_

**[DHIS2-14558](https://dhis2.atlassian.net/browse/DHIS2-14558): Capture App: Glitchy Save and Add Another**  
**[DHIS2-15693](https://dhis2.atlassian.net/browse/DHIS2-15693): Rules engine is not triggered after changing program in Relationships**  
Components: _[App] Capture_

**[DHIS2-15814](https://dhis2.atlassian.net/browse/DHIS2-15814): Display translated org.unit name for enrollments and events**  
Components: _[App] Capture_

**[DHIS2-15383](https://dhis2.atlassian.net/browse/DHIS2-15383): Align mandatory error behaviour for all value types**  
Components: _[App] Capture_

**[DHIS2-13013](https://dhis2.atlassian.net/browse/DHIS2-13013): Downloading follow up analysis data quality report to pdf, csv or excel generates null reports**  
Components: _[App] Data quality_

**[DHIS2-12830](https://dhis2.atlassian.net/browse/DHIS2-12830): Legend sets fail to load in data visualizer table that has multiple indicators with data dimension in the row**  
Components: _[App] Data visualizer_

**[DHIS2-15875](https://dhis2.atlassian.net/browse/DHIS2-15875): Some pages are not full-height in System Settings app**  
Components: _[App] Settings_

**[DHIS2-15662](https://dhis2.atlassian.net/browse/DHIS2-15662): System settings - fallback auto-reverts to English after any update**  
Components: _[App] Settings_

**[DHIS2-16209](https://dhis2.atlassian.net/browse/DHIS2-16209): Mistranslated arabic month name**  
Components: _[App] Tracker capture_


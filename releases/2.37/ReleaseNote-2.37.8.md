# Patch 2.37.8 Release Note

- [Features](#features)
- [Bugs](#bugs)

## Features

**[DHIS2-13443](https://dhis2.atlassian.net/browse/DHIS2-13443): Performance optimisation when fetching events from Event Programs**  
Components: _[API] Tracker_

**[DHIS2-13298](https://dhis2.atlassian.net/browse/DHIS2-13298): Add color palettes to key reporting apps**  
Components: _[App] Data visualizer_

## Bugs

**[DHIS2-8184](https://dhis2.atlassian.net/browse/DHIS2-8184): [I] Remove decimals in report rate summary for integer only values**  
Components: _[API] Analytics_

**[DHIS2-13558](https://dhis2.atlassian.net/browse/DHIS2-13558): [I] Event analytics table partitions not generated for future years**  
Components: _[API] Analytics_

**[DHIS2-12466](https://dhis2.atlassian.net/browse/DHIS2-12466): [F]Potential bug with analytics api when requesting event data from two programs that share a data element**  
Components: _[API] Analytics_

**[DHIS2-13212](https://dhis2.atlassian.net/browse/DHIS2-13212): [E] Header names don't reflect users' custom time dimension names**  
Components: _[API] Analytics_

**[DHIS2-13136](https://dhis2.atlassian.net/browse/DHIS2-13136): [G,F] Analytics headers to apply user defined names for time dimensions**  
Components: _[API] Analytics_

**[DHIS2-13487](https://dhis2.atlassian.net/browse/DHIS2-13487): [H] Program Indicator fails to parse timestamps**  
Components: _[API] Analytics_

**[DHIS2-13460](https://dhis2.atlassian.net/browse/DHIS2-13460): [H,I] Visualization download should remove redundant "0" digits for Data Elements**  
Components: _[API] Analytics_

**[DHIS2-12989](https://dhis2.atlassian.net/browse/DHIS2-12989): [D]"last value" aggregation type is broken in later versions for data elements and program indicators in the analytics API**  
Components: _[API] Analytics_

**[DHIS2-13360](https://dhis2.atlassian.net/browse/DHIS2-13360): DELETE events should update the lastUpdated property**  
Components: _[API] Events_

**[DHIS2-13250](https://dhis2.atlassian.net/browse/DHIS2-13250): ParseException on startup**  
Components: _[API] Frameworks and libraries_

**[DHIS2-13489](https://dhis2.atlassian.net/browse/DHIS2-13489): Job Progress Tracking: Process status should be final**  
Components: _[API] Job scheduler_

**[DHIS2-9768](https://dhis2.atlassian.net/browse/DHIS2-9768): Scheduler: Unable to specify scheduled job ending on Sunday**  
Components: _[API] Job scheduler_

**[DHIS2-13474](https://dhis2.atlassian.net/browse/DHIS2-13474): Analytics table UI in progress after crash**  
Components: _[API] Job scheduler_, _[App] Data administration_

**[DHIS2-12217](https://dhis2.atlassian.net/browse/DHIS2-12217): A problem with messaging inside Tracker capture app**  
Components: _[API] Messaging_, _[API] Tracker_

**[DHIS2-8381](https://dhis2.atlassian.net/browse/DHIS2-8381): Cannot mark greyed field if categoryCombo is default**  
Components: _[API] Metadata import-export_, _[App] Maintenance_

**[DHIS2-13386](https://dhis2.atlassian.net/browse/DHIS2-13386): File downloaded with sharing properties from Metadata dependency export cannot be re-uploaded**  
Components: _[API] Metadata import-export_

**[DHIS2-7586](https://dhis2.atlassian.net/browse/DHIS2-7586): Metadata dependency export includes mapViews in 2.32 - crashes import in 2.32**  
Components: _[API] Metadata import-export_

**[DHIS2-13371](https://dhis2.atlassian.net/browse/DHIS2-13371): Cannot update greyedFields of a Data Set Section with categoryCombo None**  
Components: _[API] Metadata model_

**[DHIS2-7908](https://dhis2.atlassian.net/browse/DHIS2-7908): Option Groups containing orphan options**  
Components: _[API] Other_, _[App] Maintenance_

**[DHIS2-12938](https://dhis2.atlassian.net/browse/DHIS2-12938): Too many error logs from PostInsertAuditListener.java**  
Components: _[API] Other_

**[DHIS2-6705](https://dhis2.atlassian.net/browse/DHIS2-6705): Data entry module as default home page produces error**  
Components: _[API] Other_, _[API] System configuration_

**[DHIS2-12958](https://dhis2.atlassian.net/browse/DHIS2-12958): Collections API does not support additions and deletions in the same request**  
Components: _[API] Other_

**[DHIS2-9213](https://dhis2.atlassian.net/browse/DHIS2-9213): XML representation of SQL view data results in error**  
Components: _[API] Other_

**[DHIS2-13172](https://dhis2.atlassian.net/browse/DHIS2-13172): Incomplete 'Completed by details' in datasets**  
Components: _[API] Other_, _[API] Tracker_, _[App] Data entry_

**[DHIS2-13230](https://dhis2.atlassian.net/browse/DHIS2-13230): zing returns false**  
Components: _[API] Program rules_, _[App] Capture_

**[DHIS2-13686](https://dhis2.atlassian.net/browse/DHIS2-13686): api/trackedEntityInstances does not respect category combination sharing**  
Components: _[API] Tracker_

**[DHIS2-12816](https://dhis2.atlassian.net/browse/DHIS2-12816): Unable to trigger save event in capture app**  
Components: _[API] Tracker_

**[DHIS2-12669](https://dhis2.atlassian.net/browse/DHIS2-12669): [backend] PERCENTAGE value type data elements allow incorrect values in Capture app**  
Components: _[API] Tracker_

**[DHIS2-11410](https://dhis2.atlassian.net/browse/DHIS2-11410): Wrong error message when querying enrollments by tei ids**  
Components: _[API] Tracker_

**[DHIS2-12657](https://dhis2.atlassian.net/browse/DHIS2-12657): Error message in the Program Indicator creation interface - boolean values**  
Components: _[API] Tracker_

**[DHIS2-13512](https://dhis2.atlassian.net/browse/DHIS2-13512): Paging is not working in enrollments API**  
Components: _[API] Tracker_

**[DHIS2-11935](https://dhis2.atlassian.net/browse/DHIS2-11935): Performance: relationships endpoint is slow when there are many relationships**  
Components: _[API] Tracker_

**[DHIS2-11534](https://dhis2.atlassian.net/browse/DHIS2-11534): Potential duplicate status is not validated**  
Components: _[API] Tracker_

**[DHIS2-13457](https://dhis2.atlassian.net/browse/DHIS2-13457): User password hash recorded in audit log**  
Components: _[API] User_

**[DHIS2-8613](https://dhis2.atlassian.net/browse/DHIS2-8613): Can select future dates in Capture app for Report Date**  
Components: _[App] Capture_

**[DHIS2-13476](https://dhis2.atlassian.net/browse/DHIS2-13476): [frontend] PERCENTAGE value type data elements allow incorrect values in Capture app**  
Components: _[App] Capture_

**[DHIS2-13624](https://dhis2.atlassian.net/browse/DHIS2-13624): "Save and add another" button missing border/shadows**  
Components: _[App] Capture_

**[DHIS2-13305](https://dhis2.atlassian.net/browse/DHIS2-13305): Issues with downloading events**  
Components: _[App] Capture_

**[DHIS2-13060](https://dhis2.atlassian.net/browse/DHIS2-13060): Working lists: Incidence date and "Assigned to" is shown as filter selectors when not applicable**  
Components: _[App] Capture_

**[DHIS2-12777](https://dhis2.atlassian.net/browse/DHIS2-12777): Hide programs in list if user has no TET access**  
Components: _[App] Capture_

**[DHIS2-13063](https://dhis2.atlassian.net/browse/DHIS2-13063): Working lists should use FormName if available**  
Components: _[App] Capture_

**[DHIS2-13486](https://dhis2.atlassian.net/browse/DHIS2-13486): Rules engine: Ensure double quotes always encapsulates values**  
Components: _[App] Capture_

**[DHIS2-12304](https://dhis2.atlassian.net/browse/DHIS2-12304): Show error (caused by invalid future Enrollment date) in SnackBar**  
Components: _[App] Capture_

**[DHIS2-12670](https://dhis2.atlassian.net/browse/DHIS2-12670): Working Lists: deleting a "just created" view behaves incorrectly**  
Components: _[App] Capture_

**[DHIS2-13291](https://dhis2.atlassian.net/browse/DHIS2-13291): Not able to save the enrollment when the date format is dd-mm-yyyy**  
Components: _[App] Capture_

**[DHIS2-12138](https://dhis2.atlassian.net/browse/DHIS2-12138): Remove the call to /count when searching for potential duplicates**  
Components: _[App] Capture_

**[DHIS2-12130](https://dhis2.atlassian.net/browse/DHIS2-12130): Error when saving visualisations in Data Visualiser**  
Components: _[App] Data visualizer_

**[DHIS2-12719](https://dhis2.atlassian.net/browse/DHIS2-12719): Series key color hint gets disappeared when saved as pdf/image from Data Visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-13490](https://dhis2.atlassian.net/browse/DHIS2-13490): [I] Saved charts and favourite reports are failing to open**  
Components: _[App] Event reports_, _[App] Event visualizer_

**[DHIS2-13054](https://dhis2.atlassian.net/browse/DHIS2-13054): Dataset - Unable to manage grey fields update (enable/disable)**  
Components: _[App] Maintenance_

**[DHIS2-13689](https://dhis2.atlassian.net/browse/DHIS2-13689): Avoid Google Earth Engine aggregation timeout**  
Components: _[App] Maps_

**[DHIS2-11438](https://dhis2.atlassian.net/browse/DHIS2-11438): Loading tracker capture simultaneously by multiple users crashes the instance**  
Components: _[App] Tracker capture_

**[DHIS2-10128](https://dhis2.atlassian.net/browse/DHIS2-10128): Marked for follow-up not working in Tracker reports**  
Components: _[App] Tracker capture_

**[DHIS2-13415](https://dhis2.atlassian.net/browse/DHIS2-13415): There was a problem retreiving the available authorities.**  
Components: _[App] User_


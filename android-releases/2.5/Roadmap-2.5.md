# DHIS2 Android App version 2.5 Release Notes
<!-- BEGIN-WEBSITE-SYNC-ID:android -->

<!-- Analytics -->
**LOCAL ANALYTICS**

**Offline In-App Program/Dataset Analytics:** The android app can now render analytics (charts, sigle value and tables) that have been created in DHIS2 and are compatible with Android. These visualizations can be rendered in the home screen of the App, and at the dataset level and program level. Analytics to be displayed require to be configured using the Android Settings WebApp, where administrators will be able to decide the charts and tables to be displayed for end users. Users will be able to create groups of charts and tables for easier user experience. Androif offline Analytics will support line chart, bar chart, pie chart, radar chart, tables and single value elements. All analytics are aggregated in the device using the local data. The Analyticis feature is 100% functional offline.
[ANDROAPP-2557](https://jira.dhis2.org/browse/ANDROAPP-2557) 


**DATA ENTRY USER EXPERIENCE**

**Adjust TEI Dashboard options to program configuration:** The options offered at the TEI dahsboard will be taileored to the specific configurtion of the program.
- Relationships tab will not be visible if the program relatioships are not configured.
- Create event button will be hidden When the user cannot create more events based on tracker configuration.
- Indicators tab will be not be visible if the program has no program indicators configured.
- Organisation Unit filter will not be visible if the user has only one Organisation Unit configured.
[ANDROAPP-4097](https://jira.dhis2.org/browse/ANDROAPP-4097) | [ANDROAPP-3129](https://jira.dhis2.org/browse/ANDROAPP-3129)

**Keep user prefered calendar display:** In the DHIS2 Android Capture App users can switch date selection from spinner to calendar view. In this version, the app will remember the last visualization selected by the user and use it the next time the user needs to select a date.
[ANDROAPP-2402](https://jira.dhis2.org/browse/ANDROAPP-2402)

**Display reason for data non-editable:** Data can be blocked for many reasons in DHIS2, because of access restrictions or expiration among others. When an Event, TEI or Data Set are not editable the user will be able to find the reason on the "Details" section.   
[ANDROAPP-3565](https://jira.dhis2.org/browse/ANDROAPP-3565)

**Improved render for icon-based data entry:** The layout and design of the screen when icons have been configured to rendered in data entry has been redesigned and improve for a better user experience. To render icons in data entry they ened to be assigned to option sets and the section needs to have only one data element.  
[ANDROAPP-4027](https://jira.dhis2.org/browse/ANDROAPP-4027)

**MAPS**

**General Maps User experience:** After three versions since maps were included in the DHIS2 Android App, we have reviewed and improved the user experience based on community feedback.  
[ANDROAPP-4024](https://jira.dhis2.org/browse/ANDROAPP-4024)

**Center to user postion:** The maps in the DHIS2 Android Capture App include now the posibility to center the map on the user location.  
[ANDROAPP-3583](https://jira.dhis2.org/browse/ANDROAPP-3583)

**TRACKER FEATURES**

**Add support for Event - TEI relationships:** The app allows now to add relationships from single events (event programs) to teis. For that there is a new tab in the event dashboard, named relationships, that is active when it is configured in the server. This version does not allow from teis to event relationships, or using events that belong to an enrollment. [ANDROAPP-2275](https://jira.dhis2.org/browse/ANDROAPP-2275)

**NEW filter for TEIs marked as follow-up:** Now the follow-up appears in the filters for tracker programs. 
[ANDROAPP-3304](https://jira.dhis2.org/browse/ANDROAPP-3304)

**OTHER FEATURES**

**Interface language based on DHIS2 user language:** The language of the DHIS2 Android App user interface and metadata will be the ones configured on the user account of the DHIS2 server. 
[ANDROAPP-2925](https://jira.dhis2.org/browse/ANDROAPP-2925)

**Export/Share QR and Bar codes:** Users will be able to display a bar or QR code in an image so that it can be shared it for printing, take a screenshot or show it in the screen for scanning.
[ANDROAPP-3891](https://jira.dhis2.org/browse/ANDROAPP-3891)


<!-- END-WEBSITE-SYNC-ID:android -->

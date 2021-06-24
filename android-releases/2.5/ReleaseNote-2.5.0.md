# DHIS2 Android App version 2.5 Release Notes
<!-- BEGIN-WEBSITE-SYNC-ID:android -->

<!-- Analytics -->
**LOCAL ANALYTICS & USE**

**Offline In-App Program/Dataset Analytics:** The android app can now render analytics (charts, and tables) that have been created in DHIS2 and are compatible with Android. These visualizations can be rendered in the home screen of the App, and at the dataset level and program level. Analytics to be displayed require to be configured using the Android Settings WebApp, where administrators will be able to decide the charts and tables to be displayed for end users. 
[ANDROAPP-2557](https://jira.dhis2.org/browse/ANDROAPP-2557)

**Tasks screen / To-Do List:** Users will be able to open the Android App with a Tasks Screen integrated in the home screen. The task screen is a to-do list of tasks that require attention from the user. The user will be able to visualize the upcoming tasks and navigate them using a calendar view. Tasks can be:
- Any schedule tracker event (with or without assignment).
- Any event assigned to the user.
- Data sets with expiration date or period about to expire.
[ANDROAPP-3427](https://jira.dhis2.org/browse/ANDROAPP-3427)

**DATA ENTRY USER EXPERIENCE**

**Adjust TEI Dashboard options to program configuration:** The options offered at the TEI dahsboard will be taileored to the specific configurtion of the program.
- Relationships tab will not be visible if the program relatioships are not configured.
- Create event button will be hidden When the user cannot create more events based on tracker configuration.
- Indicators tab will be not be visible if the program has no program indicators configured.
- Organisation Unit filter will not be visible if the user has only one Organisation Unit configured.
[ANDROAPP-2928](https://jira.dhis2.org/browse/ANDROAPP-2928) | [ANDROAPP-3129](https://jira.dhis2.org/browse/ANDROAPP-3129)

**Keep user prefered calendar display:** In the DHIS2 Android Capture App users can switch date selection from spinner to calendar view. In this version, the app will remember the last visualization selected by the user and use it the next time the user needs to select a date.
[ANDROAPP-2402](https://jira.dhis2.org/browse/ANDROAPP-2402)

**Redesign Data Set arrows to change column size:** The user can currently increase or reduce the size of the first column of the Data Sets. The buttons have been redefined for a more comfortable and user friendly experience.
[ANDROAPP-3016](https://jira.dhis2.org/browse/ANDROAPP-3016)

**Display reason for data non-editable:** Data can be blocked for many reasons in DHIS2, because of access restrictions or expiration among others. When an Event, TEI or Data Set are not editable the user will be able to find the reason on the "Details" section.   
[ANDROAPP-3565](https://jira.dhis2.org/browse/ANDROAPP-3565)

**MAPS**

**General Maps User experience:** After three versions since maps were included in the DHIS2 Android App, we have reviewed and improved the user experience based on community feedback.  
[ANDROAPP-4024](https://jira.dhis2.org/browse/ANDROAPP-4024)

**Center to user postion:** The maps in the DHIS2 Android Capture App include now the posibility to center the map on the user location.  
[ANDROAPP-3583](https://jira.dhis2.org/browse/ANDROAPP-3583)

**TRACKER FEATURES**

**Break the Glass:** The "Break the glass" functionality for TEI access auditing will be supported from this version of the DHIS2 Android App.
[ANDROAPP-657](https://jira.dhis2.org/browse/ANDROAPP-657)

**Add support for Event - TEI relationships:** The app allows now to add relationships from single events (event programs) to teis. For that there is a new tab in the event dashboard, named relationships, that is active when it is configured in the server. This version does not allow from teis to event relationships, or using events that belong to an enrollment. [ANDROAPP-2275](https://jira.dhis2.org/browse/ANDROAPP-2275)

**Add filter for TEIs marked as follow-up:** Now the follow-up appears in the filters for tracker programs. 
[ANDROAPP-3304](https://jira.dhis2.org/browse/ANDROAPP-3304)

**Improve search performance, separate online and offline search:** Previous versions of the Android App where performing TEI search both locally and on the server simultanenously and offering a combined list of results which made the double search transparent to the user. This approach slows down the search in locations where interent connection is slow or weak. Since in most cases the users can find their patients in their device, the new version of the Android App separates these two search in different steps, offering the user the list of local results first, with the option to expand the scope and search on the server.
[ANDROAPP-4023](https://jira.dhis2.org/browse/ANDROAPP-4023)

**OTHER FEATURES**

**Interface language based on DHIS2 user language:** The language of the DHIS2 Android App user interface and metadata will be the ones configured on the user account of the DHIS2 server. 
[ANDROAPP-2925](https://jira.dhis2.org/browse/ANDROAPP-2925)

**Export/Share QR and Bar codes:** Users will be able to display a bar or QR code in an image so that it can be shared it for printing, take a screenshot or show it in the screen for scanning.
[ANDROAPP-3891](https://jira.dhis2.org/browse/ANDROAPP-3891)

**IMPLEMENTATION SUPPORT**

**Dev options to settings screen for error debugging:** A new section for debuggindg will be included in the settings menu of the DHIS2 Android App.
[ANDROAPP-1655](https://jira.dhis2.org/browse/ANDROAPP-1655)

<!-- END-WEBSITE-SYNC-ID:android -->

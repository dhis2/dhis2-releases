# DHIS2 Android App version 2.1 Release Note

DHIS2 [Android Capture App 2.1](https://www.dhis2.org/android-2-1) is out with many new features, improvements and bug fixes! This version is fully compatible with the [DHIS2 version 2.34](https://community.dhis2.org/t/dhis-version-2-34-is-released/39064).

## DATA SETS
---
**Increase Row Headers:** The length of the first column in datasets is now calculated to show the full text for the Data Elements names. Users can also adjust the width to adapt it better to their screen size.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2716) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Data+Sets.png)

## LISTING, FILTERING & SORTING of EVENTS
---
**Group view of Program stages in TEI Dashboard:** The TEI Dashboard offers now the possibility to change the list of events from the chronological view to a stage grouping view. The stage grouping view will group and collapse the events per program stage. Each program stage group can be expanded by the user and the events will be displayed chronologically.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2641) | [Jira2](https://jira.dhis2.org/browse/ANDROAPP-1654) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Groupin+1.png) | [Screenshot2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Grouping+2.png) | [Documentation](https://docs.dhis2.org/2.33/en/dhis2_android_capture_app/programs.html#group-view-of-program-stages-in-tei-dashboard)

**Filtering added in TEI Dashboard:** Filters have been added to the TEI dashboard. It is possible to filter the events of a Tracked Entity Instance enrollment per period, organisation unit, sync status, event status, and user assignment.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2760) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/TEI+Dashboard+filters.png)

## DATA ENTRY FORMS (Event and Tracker Programs)
---
**Improved error message dialog when saving event or enrollment:** The app will now list the name of the mandatory fields missing when the user tries to complete an event or enrollment. The sections containing the missing fields will be highlighted to help the user find the missing fields.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2733) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Error+message.png)

**QR and Barcodes supported:** Data elements or attributes or type text can be configured as QR or barcodes. When a Data Element or Attribute is rendered as QR/Barcode, the app will open the device camera to read the code image. When the QR/Barcode is a TEI attribute configured as searchable, the user will be allowed to scan the code in order to search and identify the Tracked Entity Instance. This will also work for option sets.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-1670) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/QR1.png) | [Screenshot2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/QR2.png) | [Screenshot3](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Barcode1.png) | [Screenshot4](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Barcode2.png) | [Documentation](https://docs.dhis2.org/2.33/en/dhis2_android_capture_app/visual-configurations.html#qr-and-barcodes)

**Extended rendering options:** The available rendering options have been expanded to include horizontal and vertical radio buttons, checkboxes and toggles. The allowed options depend on the value type.

* Yes Only: can be rendered as radio button or checkbox.
* Yes/No: can be rendered as horizontal/vertical radio buttons or horizontal/vertical checkboxes or toggle.
* Text: can be rendered as QR or Barcode. When is linked to an option set can be rendered as horizontal/vertical radio buttons or horizontal/vertical checkboxes.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-741) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Rendering+types+1.jpg) | [Screenshot2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Rendering+Types+2.jpg) |[Screenshot3](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Rendering+Types+3.jpg) |[Documentation](https://docs.dhis2.org/2.33/en/dhis2_android_capture_app/visual-configurations.html#render-types)

**Save dialog and button in enrollments aligned with Events:** the design of the "save" button and related dialogs in the enrollment form have been modified to align with the user experience of the events form.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2731) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Save+button+enrollment.png)

**Improvements in Sections:** The display for sections has been redesigned for a more simple user experience. In addition, the sections in enrollment form are now supported and are aligned with the design of the event sections.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2732) | [Jira2](https://jira.dhis2.org/browse/ANDROAPP-656) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Sections+1.png) | [Screenshot2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Sections+2.png)

**Notes in events:** It is possible to add notes to events in single event programs and program stage events. Notes are available in a new tab at the data entry form.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-817) | [Jira2](https://jira.dhis2.org/browse/ANDROAPP-2671) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Notes+in+Events.png)

## USER ASSIGNMENT
---
**Filter events based on user assignment:** It is possible to filter events based on assignment to the current user. The “Assigned to me” filter has been added to the single event program list, the TEI list and the TEI Dashboard and the map views. It will only be displayed when the active program is configured to assign events to users.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2586) | [Jira2](https://jira.dhis2.org/browse/ANDROAPP-1290) | [Jira3](https://jira.dhis2.org/browse/ANDROAPP-1292) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Assigned+to+me+1.png) | [Screenshot2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.1/Assigned+to+me+2.png)

## QUALITY / SECURITY / PERFORMANCE
---
Fixed vulnerability related to the application PIN access control

Events are created and persisted at the end of the Form [Jira](https://jira.dhis2.org/browse/ANDROAPP-1998)

SqlBrite Queries migrated to SDK [Jira](https://jira.dhis2.org/browse/ANDROAPP-2662)

RELEASE INFO

---

|Release Information|Link|
| --- | --- |
|Download app from Google Play or Github|https://www.dhis2.org/app-store|
|Documentation and Javadocs|https://www.dhis2.org/android-documentation|
|Details about each feature on JIRA (requires login)|[2.1 Features](https://jira.dhis2.org/issues/?filter=11837)|
|Overview of bugs fixed on JIRA (requires login)|[2.1 Bugs](https://jira.dhis2.org/issues/?filter=11838)|
|Source code on Github|https://github.com/dhis2/dhis2-android-capture-app|
|Demo instance (user/password)|https://play.dhis2.org/2.34/ android / Android123|
|DHIS 2 community|[https://community.dhis2.org Mobile Community](https://community.dhis2.org/c/subcommunities/mobile/16)|
|Sour code of SDK on Github| [SDK 1.0.3](https://github.com/dhis2/dhis2-android-sdk/releases/tag/1.0.3)

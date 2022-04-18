# DHIS2 Android App version 2.6 Release Notes


## IMPLEMENTATION SUPPORT FEATURES

**Support multiple users offline:** The Android app can now work with up to 3 different users while being offline. The users will need to have access to internet for the frist log in of each account and bill be able to switch accounts after without requiring access to the Internet. The users will be able to manage the user accounts and delete accounts if needed. When the maximum number of accounts is reached, it will be necesary to delete one of the existing accounts to log in to a new one. 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-653) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Multiple-users.png) | [Screenshot 2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Multiple-users-2.png) | [Documentation]()

**Configuration troubleshooting:** This feature is for administrators. The Android App incorporates an option in the settings screen for verifying some aspects of the DHIS2 configuration.
  - Language: the user will be able to change the language of the application user interface to identify lables, buttons or prompts with errors or without translation.
  - Program rule validation: this validator will check the program rules in the device and display configuration inconsitencies. 


[Jira](https://jira.dhis2.org/browse/ANDROAPP-1655) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Configuration-troubleshooting.png) | [Screenshot 2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Configuration-troubleshooting-2.png) | [Documentation]()

## OFFLINE ANALYTICS

**Support legends for tables in analytics:** Legends are displayed in pivot tables by enabling the feature "Use legends for chart color" in the Data Visualizer App. The Android app will color the cells using either the pre-defined legend per data item or a single legend for the entire pivot table, depending on the settings in Web.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4500) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Legend-Sets.png) |  [Documentation]()

## TRACKER FEATURES

**Break the glass:** If the program is configured with an access level of "Protected" and a search is done outside the user scope, a dialogue requesting a reason for acess will be displayed for the user to temporarily override the ownership privilege of the program. This means, the user will gain access to the program related data.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-657) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Break-the-glass.png) | [Documentation]()

**Make mandatory TEI search configurable:** Searching TEIs before creating is not mandatory now. Using the Android Settings App (v2.2.0) it is possible to configure the user flow for creating TEIs. If the feature is enabled, the Android App will display a "create new" button after opening a program and a search will be optional.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4545) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Mandatory-TEI-Search-Config.png) | [Documentation]()

**Separate offline/online search flows:** To improve the response time in the search results, the Android App now searches offline first and displys ther results while makes an  online search as a second step, transparent to the user. Searching outside the program is offered as a second step when  the attributes used in the search contain at least one Tracked Entity Type (TET) attribute.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4023) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Search-flow.png) | [Documentation]()

## DATA ENTRY AND SYNC FEATURES

**Scan and display GS1 Data matrix QR codes:** If an attribute or data element rendering type is configured as QR code, the Android App will be able to read and process the string as GS1 Data Matrix codes. Combined with the use of d2 funtions in program rules, the different fields of a GS1 code can be saved into different data elements or attributes (d2:extractDataMatrixValue(key, dataMatrixText)).

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4329) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-GS1-Data-matrix.png) | [Documentation]()


**Allow the user to "refresh data" to get last updated data from server:** Users can now retrieve the latest data from the server before entering new data. A refresh button is now located to trigger a granular synchronization in the following screens:

* Home
* Search
* TEI dashboard
* Event program listing
* Event details
* Data set listing
* Data set details

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4331) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Refresh-data.png) | [Documentation]()

**Render Icons in enrollment forms:** The icon based data entry can now be used in enrollment forms. When an enrollment section contains one or more Tracked Entity Attributes with option sets and icons assigned, the app is able to display them as a matrix or sequence based on the section rendering type. In previous sections of the App this feature was only avaialble for Data elements.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4258) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Render-icons-in-enrollment-forms.png) | [Documentation]()

**Improve Save and Complete flow in events:** New dialogue boxes are displayed when saving an enrollment or event. The 'Re-open' button is now located in the details screen and it will be available only if the user has the correct authority (‘Uncomplete events’) to reopen a completed event. The "completion" concept and dialog is now more intuitive and user friendly.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4610) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Save-and-complete-flow.png) | [Documentation]()

**New design for warnings/errors and completion dialogs:** Error and Warning messages have been improved to provide the user more and better information. The new dialogues when saving, allow the user to discard changes, save and correct later or keep editing the form to correct the values depending on the configuration.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4591) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Warnings-errors-dialogs.png) | [Documentation]()

**Improve design fo datasets columns span:** The redimendioning arrows are now fixed at the upper-left corner of the screen .

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3016) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Dataset-span.png) | [Documentation]()

**Show hint of OU selected when opening the OU hierarchy:** If an organisation unit is selected, when the hierarchy is displayed, all the ascending (parent) OUs will be in bold to help the user navigate the previous selection.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2520) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.6/Release+Feature+Cards/Android-2-6-Ou-hint.png) | [Documentation]()

**Improve prevention of duplicating unique identifiers:** When searching by unique attributes and then creating a new enrollment, if the search returns a result, the app will not persist the values of the unique attributes into the enrollment form. 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4250) | [Documentation]()

**Hide save button if form is not editable:** If an event is expired or with view only rights, the 'save' button will be hidden.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4613) | [Documentation]()

**Align events navigation bottom bar:** The details tab in the event navigation bar has been improved to provide a better user experience.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3651) | [Documentation]()

**Improve "Yes Only" data element design:** The label 'Yes' next to the checkbox or radio button has not removed.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-4493) | [Documentation]()

## MAINTENANCE 

**Quality / Security / Performance:** You can find a list of issues related to quality, security and performance opening this [jira filter](https://jira.dhis2.org/issues/?filter=12363).

**Bug-fixing:** You can find a list of of the bugs fixed in this version opening this [jira filter](https://jira.dhis2.org/issues/?filter=12364).

## RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download app from Google Play or Github |[Google Play](https://www.dhis2.org/app-store) - [Github](https://github.com/dhis2/dhis2-android-capture-app/releases)| 
|Documentation|[https://www.dhis2.org/android-documentation](https://docs.dhis2.org/en/full/use/dhis2-android-app.html)|
|Details about each feature on JIRA (requires login)|[2.6 Features ](https://jira.dhis2.org/issues/?filter=12365)|
|Overview of bugs fixed on JIRA (requires login)|[2.6 Bugs](https://jira.dhis2.org/issues/?filter=12364)|
|Demo instance (user/password)|[https://play.dhis2.org/demo/ ](https://play.dhis2.org/demo/) Credentials: android / Android123|
|DHIS 2 community|[https://community.dhis2.org Mobile Community ](https://community.dhis2.org/c/subcommunities/mobile/16)|
|Source code on Github|[https://github.com/dhis2/dhis2-android-capture-app ](https://github.com/dhis2/dhis2-android-capture-app)|
|Source code of SDK on Github |[https://github.com/dhis2/dhis2-android-sdk](https://github.com/dhis2/dhis2-android-sdk)| 

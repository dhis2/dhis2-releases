# DHIS2 Android App version 2.3 Release Note

DHIS2 [Android Capture App 2.3](https://www.dhis2.org/android-2-3) is out with many improvements and bug fixes! This release we have focussed mainly on improving the user interface and data entry user experience.


This version is fully compatible with the [DHIS2 2.35 ](https://www.dhis2.org/235) and you can find the detailed new features and fixes below.


## GENERIC FEATURES 

**Add option to clear URL in login screen:**  In the previous version the user could easily clear the username or password, but not the URL. A button to clear the text from the URL text box has been added to facilitate the login process.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3315) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.3/Log+In.png)

**Improve error information to the user:**  In this version the app renders the name of the data elements or attributes which fail in the synchronization process and replace it in the error message by the name of the data element or the attribute. In addition, the app displays an error message also inside the data entry form, next to the affected field. This helps the user identify the source of error and fix the problem.

[Jira ](https://jira.dhis2.org/browse/ANDROAPP-2778) | [Jira 2 ](https://jira.dhis2.org/browse/ANDROAPP-3272) |  [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.3/Error+message.png)

**Improve feedback when form rendering is slow:**  A loading bar has been added in the data entry forms when form or section are loading and when programs rules are executed

[Jira ](https://jira.dhis2.org/browse/ANDROAPP-3026) 



**Open Image clicking on it:**  When the user taps on an image, the image is opened and displayed on the screen taking the whole screen.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2834) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.3/Picture+Display.png)



## USER EXPERIENCE AND USER INTERFACE
**New Event Cards in Event and Tracker programs:**  The event and TEI cards have been improved and made more intuitive and informative in the last version. We have harmonised our user interface and brought this design to the lists of events in event programs and in the TEI   dashboard. The cards display the name of the attribute or data element next to the value for the first three marked to be displayed. It is also possible to expand the card to display the rest of the attributes or data elements, which are shown following the same format. 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2766) | [Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.3/New+Event+Cards.png)

**New Fields for Data Entry form:** All value types rendering has been redefined. The images are fully displayed now with an adjusted size, the icons on the left side have been removed and the clear buttons have been added to all value types as well.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2917) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.3/New+Entry+forms.png)


## DATA ENTRY
**Barcode/QR code to also accept keyboard data entry:** Barcode and QR code rendered fields will also accept manual data entry of the codified text.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3086)

**Non-editable fields have different display:** Fields where the value is auto-complete, either because it is auto-generated or assigned by a program rule, are rendered greyed out giving information to the user about the field not being editable.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2848) | [Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.3/Non+Editable+fields.png)




## QUALITY / SECURITY / PERFORMANCE

[Functional Test][Event] Delete Event [Jira](https://jira.dhis2.org/browse/ANDROAPP-3200)

[Functional Test][Event] Details Event [Jira](https://jira.dhis2.org/browse/ANDROAPP-3201)

[Functional Test][Event] Share QR Event [Jira](https://jira.dhis2.org/browse/ANDROAPP-3202)

[Functional Test][Sync] Datasets [Jira](https://jira.dhis2.org/browse/ANDROAPP-2995)

[Functional Test][Sync] Event [Jira](https://jira.dhis2.org/browse/ANDROAPP-2997)

[Functional Test][Sync] Tei [Jira](https://jira.dhis2.org/browse/ANDROAPP-2996)

[Functional Test][Tei Dashboard] Enrollment [Jira](https://jira.dhis2.org/browse/ANDROAPP-3199)

[Test] Flow ui test [Jira](https://jira.dhis2.org/browse/ANDROAPP-3321)

[Performance][OrgUnitTree] Review list/adapter when loading org units [Jira](https://jira.dhis2.org/browse/ANDROAPP-2945)

Disable ADB in production version [Jira ](https://jira.dhis2.org/browse/ANDROAPP-2998)

Enable Acra in Prod and Debug [Jira](https://jira.dhis2.org/browse/ANDROAPP-3334)

Track socketTimeOut in firebase and show message [Jira](https://jira.dhis2.org/browse/ANDROAPP-2868)

Update crash activity texts [Jira](https://jira.dhis2.org/browse/ANDROAPP-3347) 

RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download app from Google Play or Github|[https://www.dhis2.org/app-store ](https://www.dhis2.org/app-store)|
|Documentation and Javadocs|[https://www.dhis2.org/android-documentation ](https://www.dhis2.org/android-documentation)|
|Details about each feature on JIRA (requires login)|[2.3 Features ](https://jira.dhis2.org/issues/?filter=11918)|
|Overview of bugs fixed on JIRA (requires login)|[2.3 Bugs](https://jira.dhis2.org/issues/?filter=11919)|
|Demo instance (user/password)|[https://play.dhis2.org/demo/ ](https://play.dhis2.org/demo/) android / Android123|
|DHIS 2 community|[https://community.dhis2.org Mobile Community ](https://community.dhis2.org/c/subcommunities/mobile/16)|
|Source code on Github|[https://github.com/dhis2/dhis2-android-capture-app ](https://github.com/dhis2/dhis2-android-capture-app)|
|Source code of SDK on Github|[SDK 1.2.1 ](https://github.com/dhis2/dhis2-android-sdk/releases/tag/1.2.1)|


# DHIS2 Android App version 2.2 Release Note

[**DHIS2 Android Capture App version 2.2** ](https://www.dhis2.org/android-2-2) is out with many new features, apps, improvements and bug fixes. The primary new features in this release are the support of validation rules for data sets, new filters and sorting for events and TEI lists, many new visualizations in maps, and the possibility to encrypt the database of the device, together with many small interface changes that result in a better user experience. 

|Important Update Information 
| --- | 
|The evaluation parser used by the rule engine of DHIS2 has been updated and some of your program rules might stop working in the Android App. The web interface might incorporate this changes at a different pace hence behaviour in web and Android might differ. PLEASE read carefuly the documentation and the information on [**THIS**](https://community.dhis2.org/t/important-review-your-program-rules-before-updating-to-android-2-2-in-production/39970?u=marta) post before updating your App to the new version in production environment. 
 

This version is fully compatible with the [DHIS2 version 2.34 ](https://community.dhis2.org/t/dhis-version-2-34-is-released/39064).
You can find the detailed new features and fixes below.


## DATA SETS

**Validations Rules:**  The App supports Validations Rules. The validation step has been integrated in the save and complete flow and the app supports both when the validation rules are configured as mandatory and when they are optional. The app will display a new card with the errors helping the user identify which values are incorrect.

[Jira ](https://jira.dhis2.org/browse/ANDROAPP-1174) | [Jira 2 ](https://jira.dhis2.org/browse/ANDROAPP-2999) | [Jira 3 ](https://jira.dhis2.org/browse/ANDROAPP-3000) | [Jira 4](https://jira.dhis2.org/browse/ANDROAPP-1157) | [Screenshots](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Validation+Rules.png)

## LISTING, FILTERING & SORTING of EVENTS

**Sorting of lists of Events and TEIs:** The app now supports sorting of lists of Events and TEIs. Sorting is integrated with the filters menu and users will be allowed to sort the list by one chosen parameter either in ascending or descending order. Sorting is applicable by date and organization unit, and by enrollment date and status when applicable. The screens that allow sorting are:

* Single event listing
* TEI Search screen list (When a TEI has multiple events, the app will order based on the most recent event)
* TEI Dashboard event list

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2354) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Sorting.png)


**New Filter - Enrollment Status:**  In the Program Search screen, the user is able to filter the TEI list by Enrollment Status. This filter does not allow multiselection. Users are not able to filter by more than one enrollment status at a time.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3111) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Filter+Enrollment+Status.png)

**New Filter - Enrollment Date:**  In the Program Search screen, the user is able to filter the TEI list by Enrollment Date (in addition to event date, which was already available). The filter will use the lable of the enrollment date when available.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3112) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Filter+Enrollment+Date.png)

**Changes in Filter names:**  The previous “Period” filter has been renamed as follows:

* *Date* in Home Screen and Event program screen.
* *Event Date* in Tracker program screen.
* Remains as *Period* for Datasets.



## MAPS

**Satellite view in map layers:**  The user will be able to change the map background to satellite view. Satellite view is available as an option in the map layer dialog. When selected, it will replace the default background image.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2891) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Maps+-+Satellite+View.png)

**Event layer in TEI program maps:**  When opening the map view in tracker programs, the program stages with coordinates will be available as layers. When the program stage layer is selected, the events of that stage with coordinates will be displayed in the map in combination with the other layers selected.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2979) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Map+-+Event+layer+in+Tracker.png) 

**Display TEI Relationships in map view:** When opening the map view in tracker programs, the Relationships between TEIs with coordinates will be available as layers. When the Relationship layer is selected, the TEIs with coordinates which are part of that relationship will be displayed in the map in combination with the other layers selected. The direction of the relationships will be represted with an arrow pointing in the corresponding direction. Bi-directional relationshiops will have arrows in both ends.

Users will be able to switch between list and map view from the TEI Dashboard relationships tab.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3004) | [Jira 2](https://jira.dhis2.org/browse/ANDROAPP-3005) | [Jira 3](https://jira.dhis2.org/browse/ANDROAPP-3118) | [Jira 4](https://jira.dhis2.org/browse/ANDROAPP-3090) | [Screenshots](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Maps+-+Relationships.png)

**Carrousel for navigating Events, TEIs & Relationships in map view:** A carousel with TEIs, Events or Relationships cards has been added to the map view. The carousel and the map will respond to the user selection in both directions. If the user selects an object on the map, the carousel will position the corresponding card on the screen. If the user selects a card on the carousel, the map will be centered to the corresponding object in the map and the icon for any selected object in the map will be remarked with a slightly bigger size.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3172) | [Jira 2](https://jira.dhis2.org/browse/ANDROAPP-3121) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Map+Event+Card.png) 

## GENERIC FEATURES 

**Pre select the previous organisation unit when entering events:**  When creating a new event, either in Tracker or Event Programs, if the user has more than one Organization Unit assigned for data capture, the app will pre-select the Organization Unit that was selected by the user the last time.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2335)

**Disable grammar spelling in predefined options fields:** Grammar spelling is disabled for fields that use option sets or categories. Even if the options have spelling mistakes, the app will not show a warning. This warning is removed because for predefined options the user cannot correct the error even if the app points it out.

[Jira ](https://jira.dhis2.org/browse/ANDROAPP-3094) 

**Change the color of the long text fields in the forms:**  Long text value type fields had a darker background. It has been changed to white to align it to other value types.
[Jira ](https://jira.dhis2.org/browse/ANDROAPP-2849) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Data+Entry+Long+Text.png)

**Make category options searchable:**  When creating events in programs or compelting Data Sets with category, having to scroll through long lists without the option to search made data entry slower. The app now will have a search box when there are more than 15 options in the category. This is implemented in the following screens:

* Event listing category option combo filter
* Event initial category option selectors
* Data set listing category option combo filter
* Data set initial category option selectors
* TEI dashboard for autogenerated events 

[Jira ](https://jira.dhis2.org/browse/ANDROAPP-2295) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/CatOptionSearchable.png) 

## TRACKER FEATURES

**Inherit values when creating TEI for new relationship:** When creating a new TEI as part of a relationship, the TEI will inherit any program attribute marked with the *Inherit* parameter in the tracked entity attribute configuration.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3144) 

## USER EXPERIENCE AND USER INTERFACE
**Redesign of Event and TEI cards:**  The event and TEI cards have been improved and made more intuitive and informative. The cards display now the name of the attribute or data element next to the value for the first three marked to be displayed. It is also possible to expand the card to display the rest of the attributes or data elements, which are shown following the same format. The new cards are available in Tracker programs for the TEI list, the events of the TEI Dashboard and the cards in the maps carousel.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2655) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/TEI+Cards.png)

**Improve Data Sets Screen:** The Data Set screen has been redesigned, the header information has been simplified and the a tab with the details of the Data Set (Status, Period, Org. Unit) has been aded in the data entry section. The data set will always open in the *Data Entry* tab.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2550) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/DataSet+Screen.png) 

**Disable horizontal swipe for tabs in Data sets:** Horizontal swipe will navigate the user inside the dataset table, but will not navigate the different tabs. User experience was sometimes confusing and resulting in non-voluntary changes of section. Changing sections requires the user to explicitely click on the specific tab in the secion header menu.
  
[Jira](https://jira.dhis2.org/browse/ANDROAPP-3158) 

**Updated Event Status Icons to new design:** The new design simplifies the Icons and aligns the aesthetics with the app's User Interface. All icons are identifible by their shape. Color differentiation is no longer used to add information.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3206) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Event+Status+Icons.png)

**Updated Sync Icons to new design:** The new design removes icons that were only differentiated by color. All icons are identifible by their shape. When an object is already synchronized there is no sync icon displayed.
[Jira](https://jira.dhis2.org/browse/ANDROAPP-3123) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.2/Sync+Status+Icons.png)

**Improved Settings Section for Sync parameters from Android settings DHIS2 Webapp:** The sync settings sections has been redesigned and expanded to accomodate the settings from the new Android Settings DHIS2 web app. The new Android Settings web app allows you to configure the sync settings for all devices in your implementation. When settings are configured centrally, they will overwrite the settings at device level.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2675) | [Web App Announcement](https://community.dhis2.org/t/new-dhis2-android-settings-web-app-version-1-0-is-released/39926) | [Web App Documentation](https://docs.dhis2.org/master/en/dhis2_android_capture_app/android-settings-app.html)

## QUALITY / SECURITY / PERFORMANCE

**Encrypt DB:**: The database in the android devices can now be encrtypted to increase the protection of your sensitive information. This is an action that will affect the local database of all android devices synchronizing with your server (it will not encrypt the DHIS2 server database).

By default the android app database is not encrypted, but an admin can check the *Encrypt device database* in the new Android Settings DHIS2 Webapp to encrypt the data and metadata stored in every device. Encrypting the database will have an impact on the database volume and performance of the android app. Selecting or unselecting this option causes no data loss (even if it hasn’t been previously synchronized with the server).

[Jira](https://jira.dhis2.org/browse/ANDROAPP-588) | [Jira SDK](https://jira.dhis2.org/browse/ANDROSDK-3)| [Web App Announcement](https://community.dhis2.org/t/new-dhis2-android-settings-web-app-version-1-0-is-released/39926) | [Web App Documentation](https://docs.dhis2.org/master/en/dhis2_android_capture_app/android-settings-app.html)

**Extended Error Log:** The error log in the app has been expanded to include all errors captured during the use of the app. The error log is available in the Settings Screen and can be share via the default options of any Android smartphone (email, instant messaging applications, SMS, copying text…).

**Other Qualit and Performance Improvements**

[Maps] Unify map data manager [Jira ](https://jira.dhis2.org/browse/ANDROAPP-2991)

[Maps] Unify Geometry Utils [Jira](https://jira.dhis2.org/browse/ANDROAPP-2990)

[Maps] Library and map view initialization (I) - Library init and structure [Jira](https://jira.dhis2.org/browse/ANDROAPP-3017)

[Maps] Library and map view initialization (II) - Map view initialization [Jira](https://jira.dhis2.org/browse/ANDROAPP-3018) 

[Bitrise][CI] Create a PR reminder that is launch twice a day [Jira](https://jira.dhis2.org/browse/ANDROAPP-2971)

[Functional Test][Sync] Datasets [Jira](https://jira.dhis2.org/browse/ANDROAPP-2995)

[Functional Test][Sync] Event [Jira](https://jira.dhis2.org/browse/ANDROAPP-2997)

[Functional Test][Tei Dashboard] Enrollment [Jira](https://jira.dhis2.org/browse/ANDROAPP-3199)

[Functional Test][Sync] Tei [Jira](https://jira.dhis2.org/browse/ANDROAPP-2996)

[Performance] Improve home performance [Jira](https://jira.dhis2.org/browse/ANDROAPP-3189)

RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download app from Google Play or Github|[https://www.dhis2.org/install ](https://www.dhis2.org/app-store)|
|Documentation and Javadocs|[https://www.dhis2.org/android-documentation ](https://www.dhis2.org/android-documentation)|
|Details about each feature on JIRA (requires login)|[2.2 Features ](https://jira.dhis2.org/issues/?filter=11877)|
|Overview of bugs fixed on JIRA (requires login)|[2.2 Bugs Fixed](https://jira.dhis2.org/issues/?filter=11878)|
|Source code on Github|[https://github.com/dhis2/dhis2-android-capture-app ](https://github.com/dhis2/dhis2-android-capture-app)|
|Demo instance (user/password)|[https://play.dhis2.org/2.34/ ](https://play.dhis2.org/2.34/) android / Android123|
|DHIS 2 community|[https://community.dhis2.org Mobile Community ](https://community.dhis2.org/c/subcommunities/mobile/16)|
|Source code of SDK on Github|[SDK 1.2.0 ](https://github.com/dhis2/dhis2-android-sdk/releases/tag/1.2.0)|
|Source code of RuleEngine on Github|[SDK 2.0.6 ](https://github.com/dhis2/dhis2-rule-engine/tree/f3aae2a5420b2c73e7c34a86bf6f221e11c98b0e)|

# DHIS2 Android App version 2.4 Release Notes

DHIS2 [Android Capture App 2.4](https://www.dhis2.org/android-2-4) is out with many improvements. 
Short description of the functionality.

This version is fully compatible with the [DHIS2 2.36 ](https://www.dhis2.org/235) and you can find the detailed new features and fixes below.


## GENERIC APP FEATURES 
**Configurable URL for Android App analytics:**  This version of the app uses Matomo for App analytics. This new platform allows to adding a custom server URL to track the Android App statistics. Custom URLs can be set in the Android Settings WebApp and will allow any implementation to  monitor staticits from the Android App its specific users. *(verify final implementation)* 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3464) | [Screenshot](*https://Update_URL*)

**Consume new importer error messages:**  This version of the app integrates with the new Tracker Importer which allows to provide more informative error messages (for servers using 2.36).

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2582) | [Screenshot](*https://Update_URL*)

**Support OpenID connect for authentication:**  Aligned with the server, this version of the app supports OpenID Connect (OAuth2 + OpenID) for authentication.

[Jira ](https://jira.dhis2.org/browse/ANDROAPP-3310) 


## USER EXPERIENCE AND USER INTERFACE
**New Icon for Searching TEIs:** The icon for searching TEIs has been redesigned to express the search/registration action. The android app forces for a search before creating a new TEI, however the information entered in the search fields is transferred to the registrtion form fields when the search is not successful and the user decides to enter a new TEI. This makes the search a first step for registration, hence the icon has been updated to reflect this integrated action.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3527) | [Screenshot](*https://Update_URL*)

**New Navigation Bar:** In the current and next version of the app there are new modules like Analytics and Tasks (next version). To expand the structure of the app and offer an easy and intuitive navigation across the new modules navigation has been moved to a bottom bar. The new Navigation bar is present in the current version in the Event and Tracked Entity Instance Dasboard screens. It will added to more screens as the new functionality is implemented in the upcoming versions.  

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3510) | [Screenshot](*https://Update_URL*)

**New layout for events and data sets lists:** The user inteface of the lists of events and datasets has been modified to have a look that integrates with the lists of TEI's in tracker programs.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3562) | [Jira2](https://jira.dhis2.org/browse/ANDROAPP-3563) | [Screenshot](*https://Update_URL*)

**Mandatory Data Elements are always displayed:** When a data element is configured as mandatory it will not be hiddenby program rules. This behaviour aligns with web Capture App. 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3497) | [Screenshot](*https://Update_URL*)

**Apply legends to data element fields:** Now if a numeric data element has a legend, the app will display a badge with the color and description for the given legend value.
[jira](https://jira.dhis2.org/browse/ANDROAPP-3312) | [Screenshot](*https://Update_URL*)

## EVENTS & TRACKER DATA ENTRY

**Program Indicators in Event Programs:** The event programs display now program indicators in the event data entry. The events implement the new navigation bar which allows the user to switch between event details, event data entry form and event program indicators.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3463) | [Screenshot](*https://Update_URL*)

## DATASETS DATA ENTRY
**Indicators in Datasets:** The datasets display now indicators in the dataset data entry screen. The indicators will be displayed in the section, after the tables. 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3464) | [Screenshot](*https://Update_URL*)

**Category Combination Option restrictions:** If Category Combinations are configured as attributes for the data set, the app will respect the restrictions to display the specific options that are available in the drop-down. Each option can be restricted to a particular range of dates and/or organisation units, and that option will not be shown if data is being captured outside of these dates or org units.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-1153) 


## LOCAL ANALYTICS
**Local offline analytics in TEI Dashboard:** This version of the app includes the display of charts and tables in the domain of a Tracked Entity Instance. In the TEI Dashbaord the "Indicators" tab has been replaced by the Analytics tab. In this section the app will display:

- One value: either a Data Element or a Program Indicator
- Feedback
- Charts to display evolution of one data element or program indicator accross time in repeteable stages.
  - Column Plain Chart (no background)
  - Line Plain Chart (no background)
  - Line Child Growth Chart (WHO models backgroud): weight for age, height for age, weight for height
- Tables for evolution of one data element or program indicator accross time in repeteable stages.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-664) | [Screenshot](*https://Update_URL*) | [Screenshot2](*https://Update_URL*) | [Screenshot3](*https://Update_URL*)

## MAPS
**Display Attributes and Data Elements:** It is possible now to display in the map Attributes and Data Elements together with TEI, Enrollment and Event coordinates. When a program has Attributes or Data Elements configured as either coordinates or polygons they will be listed as maps layers to be displayed in the maps. 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2893) | [Jira2](https://jira.dhis2.org/browse/ANDROAPP-2978) | [Screenshot](*https://Update_URL*)

**Display current location:** When the user opens the map, the current location of the device will be displayed.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3466) | [Screenshot](*https://Update_URL*)

**Navigate to selected location:** When the user opens the map, s/he will be able to open the default navigation app (i.e. Google Maps) from the DHIS2 Android Capture App. The default navigation app will open to guide the navigation from the current location of the user to the previously selected coordinate from a TEI, Enrollment, Attribute, Event or Data element.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3467) | [Screenshot](*https://Update_URL*)


## TEI SEARCH, REGISTRATION & DASHBOARD

**Search form opens in full screen more:** The search screen covers most of the screen in most implementations not allowing to see the resulting TEI list. To avoid confusion the TEI search form will be open in full screen mode and the results will be shown when the user returns to the tracker program screen. 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3528) | [Screenshot](*https://Update_URL*) 

**Display Enrolling Organisation Unit in TEI list:** When the user opens a tracker program and a list of TEI's is displayed, the Enrolling Organisation Unit will be shown in the TEI Card after the TEI Attributes. 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3039) | [Screenshot](*https://Update_URL*)


## TRACKER & EVENT PENDING FEATURES
**Working lists:** Working lists have been implemented and will be available in either event or tracker programs. Working lists will be downloaded from the server and user in the app will not be able to edit them. The user will be able to add filters to a selected working list. 

[Jira](https://jira.dhis2.org/browse/ANDROAPP-651) | [Screenshot](*https://Update_URL*)

**Edit Enrollment or Incident date:** The Enrollment and Incident date in tracker programs can be edited even if auto-generated events have been created. This behaviour aligns the functionality with the current implementation in web Capture App.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-2510) | [Screenshot](*https://Update_URL*)

**Organisation unit of a program stage not editable:** The Organisation Unit of a program stage (event) can not be edited. This behaviour aligns the functionality with the current implementation in web Capture App.

[Jira](https://jira.dhis2.org/browse/ANDROAPP-3019) 



RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download app from Google Play or Github (*ADD GITHUB*)|[https://www.dhis2.org/app-store ](https://www.dhis2.org/app-store)| 
|Documentation and Javadocs|[https://www.dhis2.org/android-documentation ](https://www.dhis2.org/android-documentation)|
|Details about each feature on JIRA (requires login)|[2.4 Features ](https://jira.dhis2.org/issues/?filter=11956)|
|Overview of bugs fixed on JIRA (requires login)|[2.4 Bugs](https://jira.dhis2.org/issues/?filter=11957)|
|Demo instance (user/password)|[https://play.dhis2.org/demo/ ](https://play.dhis2.org/demo/) android / Android123|
|DHIS 2 community|[https://community.dhis2.org Mobile Community ](https://community.dhis2.org/c/subcommunities/mobile/16)|
|Source code on Github|[https://github.com/dhis2/dhis2-android-capture-app ](https://github.com/dhis2/dhis2-android-capture-app)|
|Source code of SDK on Github (*UPDATE*)|[SDK 1.2.1 ](https://github.com/dhis2/dhis2-android-sdk/releases/tag/1.2.1)| 


## v41 (May 2024)

### Android

#### Android Capture
##### [Improve end-user config error feedback](https://dhis2.atlassian.net/issues/ROADMAP-296)  
In some cases configuration errors leave empty screens in the Android Capture app, either because of empty forms or because of lack of access. From this version of the Android App the app will display explicit and understandable errors to the user, who will be able to effectively communicate with the administrator to fix the problem.  
*Apps: Android Capture*  
##### [Improvements in tracker programs data entry flow](https://dhis2.atlassian.net/issues/ROADMAP-294)  
Several improvements have been made in the tracker programs user flow. An informative dialog has been added for confirmation when the user deletes a TEIs. The dialog for scheduling events after compilation has also been redesigned and improved. The selection of org. Units when the user only has access to one org. Unit for data collection has been removed and pre-filled, and lastly, the program rule “Hide program stage” behavior has been aligned with Capture web.  
*Apps: Android Capture*  
##### [New Inputs for value types in Android App](https://dhis2.atlassian.net/issues/ROADMAP-293)  
The inputs for all value types have been gradually redesigned from the 2.9 version of the app. The signature input field as well as the complete legend description are included now to improve user experience at data entry. The new input fields are now displayed by default and admin users are able to opt-out to use the old forms through the Android Settings web app.  
*Apps: Android Capture*  

### Platform

#### Global (App Shell)
##### [Global Command Pallet](https://dhis2.atlassian.net/issues/ROADMAP-53)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Global (App Shell)*  

#### Maintenance
##### [Maintenance App redesign MVP](https://dhis2.atlassian.net/issues/ROADMAP-47)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Maintenance*  
##### [Indicator and Indicator types Metadata Merging](https://dhis2.atlassian.net/issues/ROADMAP-39)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Maintenance*  

#### Login
##### [New, customizable version of the Login App](https://dhis2.atlassian.net/issues/ROADMAP-46)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Login*  

#### Data Entry
##### [Data Entry App support for legacy custom forms](https://dhis2.atlassian.net/issues/ROADMAP-45)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Data Entry*  
##### [Custom Forms Functionality](https://dhis2.atlassian.net/issues/ROADMAP-44)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Data Entry*  

#### Scheduler
##### [Scheduled job queues configuration UI](https://dhis2.atlassian.net/issues/ROADMAP-43)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Scheduler*  
##### [Scheduler app declarative architecture](https://dhis2.atlassian.net/issues/ROADMAP-37)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Scheduler*  

#### Data Exchange
##### [Aggregate Data Exchange configuration UI](https://dhis2.atlassian.net/issues/ROADMAP-42)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Data Exchange*  

#### Data Administration
##### [Integrity Check Configuration UI](https://dhis2.atlassian.net/issues/ROADMAP-41)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Data Administration*  

### Tracker

#### Android Capture
##### [Optionsets multiselect support for individual data](https://dhis2.atlassian.net/issues/ROADMAP-72)  
  
*Apps: Android Capture, Capture (web)*  

#### Capture (web)
##### [Optionsets multiselect support for individual data](https://dhis2.atlassian.net/issues/ROADMAP-72)  
  
*Apps: Android Capture, Capture (web)*  

### Analytics

#### Maps
##### [Increased granularity/options for periodicity in Maps App for Climate layers from GEE](https://dhis2.atlassian.net/issues/ROADMAP-154)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Maps*  
##### [Filtering event-layer maps by attribute categories](https://dhis2.atlassian.net/issues/ROADMAP-152)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Maps*  

#### Dashboard
##### [Dashboard email push](https://dhis2.atlassian.net/issues/ROADMAP-149)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Dashboard*  

#### Data Visualizer
##### [Cumulative values in pivot tables](https://dhis2.atlassian.net/issues/ROADMAP-147)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Data Visualizer*  
##### [Outlier tables in Data Visualizer](https://dhis2.atlassian.net/issues/ROADMAP-146)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Data Visualizer*  

#### Line Listing
##### [Tracked Entity / cross program line lists](https://dhis2.atlassian.net/issues/ROADMAP-143)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Line Listing*  

### 0_no_team

#### Android Capture
##### [Line listing analytics in Android](https://dhis2.atlassian.net/issues/ROADMAP-206)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Improve App behaviour when working in offline mode ](https://dhis2.atlassian.net/issues/ROADMAP-295)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Import/export App DB ](https://dhis2.atlassian.net/issues/ROADMAP-210)  
As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of being unable to sync. With this functionality the end user will be able to export the local database and share it with an admin who will be able to import it for troubleshooting, being able to replicate the exact environment (database, device, configuration). The exported database is encrypted and the administrator will require the user credentials to be able to access the database.

 As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of its nature and it would be easier to know what is the source by replicating in an exact environment (database, device, configuration).

Expected behavior
- Add an option in settings to export the database.- Add an option in login to import a database.
- Ask for permissions (user must provide the credentials to be able to import the DB)  
*Apps: Android Capture*  
##### [Configurable basemap layer](https://dhis2.atlassian.net/issues/ROADMAP-209)  
DHIS2 supports the configuration of custom map layers for the Maps Web App. From this version of the DHIS2 Android App, those custom layers will be downloaded and rendered in the Maps. The custom layers will be presented as additional layers to the default ones.



In some countries where there are political disputes about borders having a single source of maps (in our case Mapbox) can present a political issue and countries not adopting the app due to this.

DHIS2 server allows administrators to define different maps sources or specific border definitions (include reference to this in the documentation) and the App should do the same to avoid these conflicts. Ideally, the App should read the configuration from the backend an adapt the maps displayed in it.  
*Apps: Android Capture*  
##### [Improve app navigation performance for high number of TEIs ](https://dhis2.atlassian.net/issues/ROADMAP-208)  
Implementations are more and more demanding in terms of offline need of individual records. This version of the app has been reviewed to optimize performance when there are big numbers of TEIs downloaded locally.  
*Apps: Android Capture*  
##### [Custom icons](https://dhis2.atlassian.net/issues/ROADMAP-207)  
DHIS2 2 now supports uploading custom Icons to be used in addition to the built in Icon library. This is useful for use cases not related to health or that require very specific iconography. The Android App will render the custom icons that need to be uploaded and configured using the Maintenance DHIS2 Web App.  
*Apps: Android Capture*  
##### [Improve TEI dashboard user experience](https://dhis2.atlassian.net/issues/ROADMAP-205)  
In the previous version of the application, the TEI header part of the dashboard was improved. In continuation to that effort, the bottom part, where all program stages are displayed, has been redesigned in this version. The changes include are fresh and more clean look of the list of events, with more space and less -not critical- information displayed. In addition, the button for creating new events has been moved to the top (in timeline view).



Proposed improvements

Timeline
- When the timeline has more than 5 events, a “Show X more...” button with X = number of hidden events will be displayed.
- When displaying all the events the Show more button will change to “Show less...”- Remove the “last updated” from card

Grouped
- Program stages without events display the label “no data”- Program stages are always open (not collapsible as it was before)- When a program stage has more than 3 events, a “Show X more...” button with X = number of hidden events will be displayed.
- When displaying all the events the Show more button will change to “Show less...”- Remove the “last updated” from card  
*Apps: Android Capture*  
##### [Improvements in forms layout](https://dhis2.atlassian.net/issues/ROADMAP-204)  
When creating an event or an enrollment, there are a number of fields that are not data elements or attributes, for example, event date, org unit, coordinates, enrollment date, category combinations. Those elements are referred to as event/enrollment details and in previous versions they were displayed in different screens separated from the data elements or attributes. They were difficult to find when users wanted to edit or consult them. In this version the details are displayed inside the form, as the first opened section for completion. Once they are filled in, for example when the user reopens the event or enrollment form, the details section will be visible and easily available, but collapsed to leave more space for the data collection.  
*Apps: Android Capture*  
##### [Improve TEI search user experience](https://dhis2.atlassian.net/issues/ROADMAP-203)  
The search form has been improved to provide a cleaner look and a more intuitive user experience. The buttons have been made more explicit for differencing search from creation. In addition the flow for searching TEIs using attributes rendered as bar / QR codes has been made more agile. If there is only one result and the attribute is unique, the app will open the TEI Dashboard directly. If there are multiple results, the app will display all the cards on the TEI list (this is equal to the current workflow), and if there are no results, the app will display the create button and allow the user to “search outside the program” if the configuration allows it.



Reduce steps in QR code/Bar code search workflow

Improve the user experience when users search for a TEI using a UNIQUE QR/bar code. Currenrtly, when there are exact matches, the app displays the card or cards on the list.

The proposed behaviour is:

After searching by QR code/Barcode:
- If there is only one result, the app opens the TEI Dashboard.- If there are multiple results, the app will display all the cards on the TEI list (current workflow)- If there are no results, the app will display the create button  and allow the user to “search outside the program” (if the config allows it)  
*Apps: Android Capture*  
##### [Support for customized tracker terminology](https://dhis2.atlassian.net/issues/ROADMAP-201)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  

#### Global (App Shell)
##### [Global App Shell](https://dhis2.atlassian.net/issues/ROADMAP-190)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Global (App Shell)*  

#### Capture (web)
##### [Formfield and dashboard plugins in the Capture app](https://dhis2.atlassian.net/issues/ROADMAP-191)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Capture (web)*  
## TENTATIVE v42 (May 2025)

### Android

#### Android Capture
##### [Data entry: display GPS accuracy](https://dhis2.atlassian.net/issues/ROADMAP-89)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Android App - Technical debt / maintenance](https://dhis2.atlassian.net/issues/ROADMAP-268)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Integrate analytics into RTS module ](https://dhis2.atlassian.net/issues/ROADMAP-266)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Support integration with external APIs ](https://dhis2.atlassian.net/issues/ROADMAP-265)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Support dynamic modules/use cases](https://dhis2.atlassian.net/issues/ROADMAP-264)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Support custom Android intents (by configuration)](https://dhis2.atlassian.net/issues/ROADMAP-263)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Improve design and user experience](https://dhis2.atlassian.net/issues/ROADMAP-262)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Implement App notifications](https://dhis2.atlassian.net/issues/ROADMAP-107)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  
##### [Implement device to device event/tei sharing](https://dhis2.atlassian.net/issues/ROADMAP-95)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  

### Platform

#### Android Capture
##### [Custom Periods (Academic periods)](https://dhis2.atlassian.net/issues/ROADMAP-40)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture, Capture (web)*  
##### [Configure DHIS2 Platform Terminology](https://dhis2.atlassian.net/issues/ROADMAP-57)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  

#### Capture (web)
##### [Custom Periods (Academic periods)](https://dhis2.atlassian.net/issues/ROADMAP-40)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture, Capture (web)*  

#### Maintenance
##### [Program Indicator Disaggregations](https://dhis2.atlassian.net/issues/ROADMAP-73)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Maintenance*  
##### [Import / Export / Share: (Health / Toolkit Domain)](https://dhis2.atlassian.net/issues/ROADMAP-66)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Maintenance, Import/Export*  
##### [New Maintenance App continuous release](https://dhis2.atlassian.net/issues/ROADMAP-182)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Maintenance*  
##### [Improve metadata bundles (packages?) management](https://dhis2.atlassian.net/issues/ROADMAP-38)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Maintenance*  

#### Import/Export
##### [Import / Export / Share: (Health / Toolkit Domain)](https://dhis2.atlassian.net/issues/ROADMAP-66)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Maintenance, Import/Export*  
##### [Multi-calendar support for import/export app](https://dhis2.atlassian.net/issues/ROADMAP-35)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Import/Export*  

### Tracker

#### Android Capture
##### [Multi-calendar in Capture apps (web and android)](https://dhis2.atlassian.net/issues/ROADMAP-171)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture, Capture (web)*  

#### Capture (web)
##### [Multi-calendar in Capture apps (web and android)](https://dhis2.atlassian.net/issues/ROADMAP-171)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture, Capture (web)*  

### Analytics

#### Dashboard
##### [Simple presentation mode for dashboards](https://dhis2.atlassian.net/issues/ROADMAP-151)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Dashboard*  

#### Data Visualizer
##### [Data definitions in data item selector.](https://dhis2.atlassian.net/issues/ROADMAP-148)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Data Visualizer, Line Listing*  

#### Line Listing
##### [Data definitions in data item selector.](https://dhis2.atlassian.net/issues/ROADMAP-148)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Data Visualizer, Line Listing*  

### 0_no_team

#### Android Capture
##### [Request device sync from server](https://dhis2.atlassian.net/issues/ROADMAP-70)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Android Capture*  

#### Global (App Shell)
##### [Session expiration handling](https://dhis2.atlassian.net/issues/ROADMAP-193)  
:construction: LONG DESCRIPTION TBW!  
*Apps: Global (App Shell)*  

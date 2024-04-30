## v41 (May 2024)
[ROADMAP-72](https://dhis2.atlassian.net/issues/ROADMAP-72) **Optionsets multiselect support for individual data:**   
*Apps: Android Capture, Capture (web)*  
<small style='color:grey;'>HISPvotes: 55.0</small>

[ROADMAP-206](https://dhis2.atlassian.net/issues/ROADMAP-206) **Line listing analytics in Android:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 13.0</small>

[ROADMAP-296](https://dhis2.atlassian.net/issues/ROADMAP-296) **Improve end-user config error feedback:** In some cases configuration errors leave empty screens in the Android Capture app, either because of empty forms or because of lack of access. From this version of the Android App the app will display explicit and understandable errors to the user, who will be able to effectively communicate with the administrator to fix the problem.  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-295](https://dhis2.atlassian.net/issues/ROADMAP-295) **Improve App behaviour when working in offline mode :** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-294](https://dhis2.atlassian.net/issues/ROADMAP-294) **Improvements in tracker programs data entry flow:** Several improvements have been made in the tracker programs user flow. An informative dialog has been added for confirmation when the user deletes a TEIs. The dialog for scheduling events after compilation has also been redesigned and improved. The selection of org. Units when the user only has access to one org. Unit for data collection has been removed and pre-filled, and lastly, the program rule “Hide program stage” behavior has been aligned with Capture web.  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-293](https://dhis2.atlassian.net/issues/ROADMAP-293) **New Inputs for value types in Android App:** The inputs for all value types have been gradually redesigned from the 2.9 version of the app. The signature input field as well as the complete legend description are included now to improve user experience at data entry. The new input fields are now displayed by default and admin users are able to opt-out to use the old forms through the Android Settings web app.  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-210](https://dhis2.atlassian.net/issues/ROADMAP-210) **Import/export App DB :** As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of being unable to sync. With this functionality the end user will be able to export the local database and share it with an admin who will be able to import it for troubleshooting, being able to replicate the exact environment (database, device, configuration). The exported database is encrypted and the administrator will require the user credentials to be able to access the database.

 As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of its nature and it would be easier to know what is the source by replicating in an exact environment (database, device, configuration).

Expected behavior
- Add an option in settings to export the database.- Add an option in login to import a database.
- Ask for permissions (user must provide the credentials to be able to import the DB)  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-209](https://dhis2.atlassian.net/issues/ROADMAP-209) **Configurable basemap layer:** DHIS2 supports the configuration of custom map layers for the Maps Web App. From this version of the DHIS2 Android App, those custom layers will be downloaded and rendered in the Maps. The custom layers will be presented as additional layers to the default ones.



In some countries where there are political disputes about borders having a single source of maps (in our case Mapbox) can present a political issue and countries not adopting the app due to this.

DHIS2 server allows administrators to define different maps sources or specific border definitions (include reference to this in the documentation) and the App should do the same to avoid these conflicts. Ideally, the App should read the configuration from the backend an adapt the maps displayed in it.  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-208](https://dhis2.atlassian.net/issues/ROADMAP-208) **Improve app navigation performance for high number of TEIs :** Implementations are more and more demanding in terms of offline need of individual records. This version of the app has been reviewed to optimize performance when there are big numbers of TEIs downloaded locally.  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-207](https://dhis2.atlassian.net/issues/ROADMAP-207) **Custom icons:** DHIS2 2 now supports uploading custom Icons to be used in addition to the built in Icon library. This is useful for use cases not related to health or that require very specific iconography. The Android App will render the custom icons that need to be uploaded and configured using the Maintenance DHIS2 Web App.  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-205](https://dhis2.atlassian.net/issues/ROADMAP-205) **Improve TEI dashboard user experience:** In the previous version of the application, the TEI header part of the dashboard was improved. In continuation to that effort, the bottom part, where all program stages are displayed, has been redesigned in this version. The changes include are fresh and more clean look of the list of events, with more space and less -not critical- information displayed. In addition, the button for creating new events has been moved to the top (in timeline view).



Proposed improvements

Timeline
- When the timeline has more than 5 events, a “Show X more...” button with X = number of hidden events will be displayed.
- When displaying all the events the Show more button will change to “Show less...”- Remove the “last updated” from card

Grouped
- Program stages without events display the label “no data”- Program stages are always open (not collapsible as it was before)- When a program stage has more than 3 events, a “Show X more...” button with X = number of hidden events will be displayed.
- When displaying all the events the Show more button will change to “Show less...”- Remove the “last updated” from card  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-204](https://dhis2.atlassian.net/issues/ROADMAP-204) **Improvements in forms layout:** When creating an event or an enrollment, there are a number of fields that are not data elements or attributes, for example, event date, org unit, coordinates, enrollment date, category combinations. Those elements are referred to as event/enrollment details and in previous versions they were displayed in different screens separated from the data elements or attributes. They were difficult to find when users wanted to edit or consult them. In this version the details are displayed inside the form, as the first opened section for completion. Once they are filled in, for example when the user reopens the event or enrollment form, the details section will be visible and easily available, but collapsed to leave more space for the data collection.  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-203](https://dhis2.atlassian.net/issues/ROADMAP-203) **Improve TEI search user experience:** The search form has been improved to provide a cleaner look and a more intuitive user experience. The buttons have been made more explicit for differencing search from creation. In addition the flow for searching TEIs using attributes rendered as bar / QR codes has been made more agile. If there is only one result and the attribute is unique, the app will open the TEI Dashboard directly. If there are multiple results, the app will display all the cards on the TEI list (this is equal to the current workflow), and if there are no results, the app will display the create button and allow the user to “search outside the program” if the configuration allows it.



Reduce steps in QR code/Bar code search workflow

Improve the user experience when users search for a TEI using a UNIQUE QR/bar code. Currenrtly, when there are exact matches, the app displays the card or cards on the list.

The proposed behaviour is:

After searching by QR code/Barcode:
- If there is only one result, the app opens the TEI Dashboard.- If there are multiple results, the app will display all the cards on the TEI list (current workflow)- If there are no results, the app will display the create button  and allow the user to “search outside the program” (if the config allows it)  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-201](https://dhis2.atlassian.net/issues/ROADMAP-201) **Support for customized tracker terminology:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-192](https://dhis2.atlassian.net/issues/ROADMAP-192) **Support event hook notifications for data:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-191](https://dhis2.atlassian.net/issues/ROADMAP-191) **Formfield and dashboard plugins in the Capture app:** *long description TBW*  
*Apps: Capture (web)*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-190](https://dhis2.atlassian.net/issues/ROADMAP-190) **Global App Shell:** *long description TBW*  
*Apps: Global (App Shell)*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-154](https://dhis2.atlassian.net/issues/ROADMAP-154) **Increased granularity/options for periodicity in Maps App for Climate layers from GEE:** *long description TBW*  
*Apps: Maps*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-152](https://dhis2.atlassian.net/issues/ROADMAP-152) **Filtering event-layer maps by attribute categories:** *long description TBW*  
*Apps: Maps*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-149](https://dhis2.atlassian.net/issues/ROADMAP-149) **Dashboard email push:** *long description TBW*  
*Apps: Dashboard*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-147](https://dhis2.atlassian.net/issues/ROADMAP-147) **Cumulative values in pivot tables:** *long description TBW*  
*Apps: Data Visualizer*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-146](https://dhis2.atlassian.net/issues/ROADMAP-146) **Outlier tables in Data Visualizer:** *long description TBW*  
*Apps: Data Visualizer*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-143](https://dhis2.atlassian.net/issues/ROADMAP-143) **Tracked Entity / cross program line lists:** *long description TBW*  
*Apps: Line Listing*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-53](https://dhis2.atlassian.net/issues/ROADMAP-53) **Global Command Pallet:** *long description TBW*  
*Apps: Global (App Shell)*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-47](https://dhis2.atlassian.net/issues/ROADMAP-47) **Maintenance App redesign MVP:** *long description TBW*  
*Apps: Maintenance*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-46](https://dhis2.atlassian.net/issues/ROADMAP-46) **New, customizable version of the Login App:** *long description TBW*  
*Apps: Login*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-45](https://dhis2.atlassian.net/issues/ROADMAP-45) **Data Entry App support for legacy custom forms:** *long description TBW*  
*Apps: Data Entry*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-44](https://dhis2.atlassian.net/issues/ROADMAP-44) **Custom Forms Functionality:** *long description TBW*  
*Apps: Data Entry*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-43](https://dhis2.atlassian.net/issues/ROADMAP-43) **Scheduled job queues configuration UI:** *long description TBW*  
*Apps: Scheduler*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-42](https://dhis2.atlassian.net/issues/ROADMAP-42) **Aggregate Data Exchange configuration UI:** *long description TBW*  
*Apps: Data Exchange*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-41](https://dhis2.atlassian.net/issues/ROADMAP-41) **Integrity Check Configuration UI:** *long description TBW*  
*Apps: Data Administration*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-39](https://dhis2.atlassian.net/issues/ROADMAP-39) **Indicator and Indicator types Metadata Merging:** *long description TBW*  
*Apps: Maintenance*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-37](https://dhis2.atlassian.net/issues/ROADMAP-37) **Scheduler app declarative architecture:** *long description TBW*  
*Apps: Scheduler*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-36](https://dhis2.atlassian.net/issues/ROADMAP-36) **Accessibility improvements of UI library:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-33](https://dhis2.atlassian.net/issues/ROADMAP-33) **Expression parser refactor:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-32](https://dhis2.atlassian.net/issues/ROADMAP-32) **Java Persistence API (JPA) refactor:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-31](https://dhis2.atlassian.net/issues/ROADMAP-31) **Remove (most) of Apache Struts framework:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-8](https://dhis2.atlassian.net/issues/ROADMAP-8) **Refactor user profile data:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-5](https://dhis2.atlassian.net/issues/ROADMAP-5) **New rewards program:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

## TENTATIVE v42 (May 2025)
[ROADMAP-73](https://dhis2.atlassian.net/issues/ROADMAP-73) **Program Indicator Disaggregations:** *long description TBW*  
*Apps: Maintenance*  
<small style='color:grey;'>HISPvotes: 46.0</small>

[ROADMAP-40](https://dhis2.atlassian.net/issues/ROADMAP-40) **Custom Periods (Academic periods):** *long description TBW*  
*Apps: Android Capture, Capture (web)*  
<small style='color:grey;'>HISPvotes: 24.0</small>

[ROADMAP-70](https://dhis2.atlassian.net/issues/ROADMAP-70) **Request device sync from server:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 19.0</small>

[ROADMAP-141](https://dhis2.atlassian.net/issues/ROADMAP-141) **Tracker analytics performance improvements:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 18.0</small>

[ROADMAP-66](https://dhis2.atlassian.net/issues/ROADMAP-66) **Import / Export / Share: (Health / Toolkit Domain):** *long description TBW*  
*Apps: Maintenance, Import/Export*  
<small style='color:grey;'>HISPvotes: 14.0</small>

[ROADMAP-89](https://dhis2.atlassian.net/issues/ROADMAP-89) **Data entry: display GPS accuracy:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 5.0</small>

[ROADMAP-148](https://dhis2.atlassian.net/issues/ROADMAP-148) **Data definitions in data item selector.:** *long description TBW*  
*Apps: Data Visualizer, Line Listing*  
<small style='color:grey;'>HISPvotes: 3.0</small>

[ROADMAP-269](https://dhis2.atlassian.net/issues/ROADMAP-269) **Spring Upgrade:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-268](https://dhis2.atlassian.net/issues/ROADMAP-268) **Android App - Technical debt / maintenance:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-266](https://dhis2.atlassian.net/issues/ROADMAP-266) **Integrate analytics into RTS module :** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-265](https://dhis2.atlassian.net/issues/ROADMAP-265) **Support integration with external APIs :** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-264](https://dhis2.atlassian.net/issues/ROADMAP-264) **Support dynamic modules/use cases:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-263](https://dhis2.atlassian.net/issues/ROADMAP-263) **Support custom Android intents (by configuration):** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-262](https://dhis2.atlassian.net/issues/ROADMAP-262) **Improve design and user experience:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-220](https://dhis2.atlassian.net/issues/ROADMAP-220) **RTSM - Button for toggling home screen and offline analytics  :** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-193](https://dhis2.atlassian.net/issues/ROADMAP-193) **Session expiration handling:** *long description TBW*  
*Apps: Global (App Shell)*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-182](https://dhis2.atlassian.net/issues/ROADMAP-182) **New Maintenance App continuous release:** *long description TBW*  
*Apps: Maintenance*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-171](https://dhis2.atlassian.net/issues/ROADMAP-171) **Multi-calendar in Capture apps (web and android):** *long description TBW*  
*Apps: Android Capture, Capture (web)*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-153](https://dhis2.atlassian.net/issues/ROADMAP-153) **Provide enrollment coordinates in maps:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-151](https://dhis2.atlassian.net/issues/ROADMAP-151) **Simple presentation mode for dashboards:** *long description TBW*  
*Apps: Dashboard*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-142](https://dhis2.atlassian.net/issues/ROADMAP-142) **Tracker analytics stability improvements:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-107](https://dhis2.atlassian.net/issues/ROADMAP-107) **Implement App notifications:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-95](https://dhis2.atlassian.net/issues/ROADMAP-95) **Implement device to device event/tei sharing:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-57](https://dhis2.atlassian.net/issues/ROADMAP-57) **Configure DHIS2 Platform Terminology:** *long description TBW*  
*Apps: Android Capture*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-38](https://dhis2.atlassian.net/issues/ROADMAP-38) **Improve metadata bundles (packages?) management:** *long description TBW*  
*Apps: Maintenance*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-35](https://dhis2.atlassian.net/issues/ROADMAP-35) **Multi-calendar support for import/export app:** *long description TBW*  
*Apps: Import/Export*  
<small style='color:grey;'>HISPvotes: 0.0</small>

[ROADMAP-34](https://dhis2.atlassian.net/issues/ROADMAP-34) **Support translation for embedded objects and jsonb:** *long description TBW*  
*Apps: Server*  
<small style='color:grey;'>HISPvotes: 0.0</small>


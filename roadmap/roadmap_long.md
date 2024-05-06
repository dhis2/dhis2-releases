## v41 (May 2024)

### Android

#### Android Capture
##### [Improve end-user config error feedback [ROADMAP-296]](https://dhis2.atlassian.net/issues/ROADMAP-296)  
In some cases configuration errors leave empty screens in the Android Capture app, either because of empty forms or because of lack of access. From this version of the Android App the app will display explicit and understandable errors to the user, who will be able to effectively communicate with the administrator to fix the problem.  

##### [Improve App behaviour when working in offline mode  [ROADMAP-295]](https://dhis2.atlassian.net/issues/ROADMAP-295)  
:construction: LONG DESCRIPTION TBW!  

##### [Improvements in tracker programs data entry flow [ROADMAP-294]](https://dhis2.atlassian.net/issues/ROADMAP-294)  
Several improvements have been made in the tracker programs user flow. An informative dialog has been added for confirmation when the user deletes a TEIs. The dialog for scheduling events after compilation has also been redesigned and improved. The selection of org. Units when the user only has access to one org. Unit for data collection has been removed and pre-filled, and lastly, the program rule “Hide program stage” behavior has been aligned with Capture web.  

##### [New Inputs for value types in Android App [ROADMAP-293]](https://dhis2.atlassian.net/issues/ROADMAP-293)  
The inputs for all value types have been gradually redesigned from the 2.9 version of the app. The signature input field as well as the complete legend description are included now to improve user experience at data entry. The new input fields are now displayed by default and admin users are able to opt-out to use the old forms through the Android Settings web app.  

##### [Import/export App DB  [ROADMAP-210]](https://dhis2.atlassian.net/issues/ROADMAP-210)  
As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of being unable to sync. With this functionality the end user will be able to export the local database and share it with an admin who will be able to import it for troubleshooting, being able to replicate the exact environment (database, device, configuration). The exported database is encrypted and the administrator will require the user credentials to be able to access the database.

 As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of its nature and it would be easier to know what is the source by replicating in an exact environment (database, device, configuration).

Expected behavior
- Add an option in settings to export the database.- Add an option in login to import a database.
- Ask for permissions (user must provide the credentials to be able to import the DB)  

##### [Configurable basemap layer [ROADMAP-209]](https://dhis2.atlassian.net/issues/ROADMAP-209)  
DHIS2 supports the configuration of custom map layers for the Maps Web App. From this version of the DHIS2 Android App, those custom layers will be downloaded and rendered in the Maps. The custom layers will be presented as additional layers to the default ones.



In some countries where there are political disputes about borders having a single source of maps (in our case Mapbox) can present a political issue and countries not adopting the app due to this.

DHIS2 server allows administrators to define different maps sources or specific border definitions (include reference to this in the documentation) and the App should do the same to avoid these conflicts. Ideally, the App should read the configuration from the backend an adapt the maps displayed in it.  

##### [Improve app navigation performance for high number of TEIs  [ROADMAP-208]](https://dhis2.atlassian.net/issues/ROADMAP-208)  
Implementations are more and more demanding in terms of offline need of individual records. This version of the app has been reviewed to optimize performance when there are big numbers of TEIs downloaded locally.  

##### [Custom icons [ROADMAP-207]](https://dhis2.atlassian.net/issues/ROADMAP-207)  
DHIS2 2 now supports uploading custom Icons to be used in addition to the built in Icon library. This is useful for use cases not related to health or that require very specific iconography. The Android App will render the custom icons that need to be uploaded and configured using the Maintenance DHIS2 Web App.  

##### [Line listing analytics in Android [ROADMAP-206]](https://dhis2.atlassian.net/issues/ROADMAP-206)  
This version of the Android App includes the possibility to render and display line listing as part of the offline analytics functionalities. The line list has to be created using the Line Listing DHIS2 web App, and then configured to be displayed in Android using the Android Settings Web App (ASWA), as any other offline analytics in Android. In this case Line lists can be displayed in the home screen, and event or tracker programs (as they do not really apply to aggregated data, they are not displayed in Datasets). Users will be able to search by period, Org. unit, or any of the columns added in the Line List.

There are some limitations to the line lists to be displayed in the Android App. The Org. units and Periods must be relative, not fixed. And there is a maximum number of columns of 15.  Android Local Analytics are built using local data, and wil, update instantly as more data gets collected (or downloaded) in the device. The App will display a maximum of 500 rows and will inform the user when the limit is reached.


##🎯  High Level use case

In the context of a health facility stock control, any user of the mobile app should be able to view a complete record of all past transactions in order to replace the paper stock card with a digital stock card. When users have limited Internet connectivity the mobile app is intended to primarily be used off-line and users are expected to synchronize their local database with the server (only) about once a day.

 In the context of a health program, listing people who need following up, e.g. defaulters, at the community level would allow for follow-ups when tracking services and monitoring patients. Particualry useful when dealing with data like TB, HIV etc
##🧑‍🤝‍🧑  Users description

Community health worker, facility health worker, logisitican or person in change of warehouse and pharmacy stocks.



❓  Problem Description

Currentrly there is no solution to display a list of cases or transactions that works in offline settings to be able to continue providing services and analyssing the data when internet is nto available for proplonged periods of time,



\uD83E\uDD14  Assumptions

Not identified.
##ℹ️  Sources

This is a request from LMIS is well documented in the linked Jira issue.

Health program related use case comes from the community inputs.
##:warning:  Out of Scope

It is not possible to implement the complete functionality of the Linelisting web app. The features/limitations are
- Max. 500 lines per table- Max. 15 columns- There will be search/filter by column - including org. unit and event date





:question_mark:  Open Questions  

##### [Improve TEI dashboard user experience [ROADMAP-205]](https://dhis2.atlassian.net/issues/ROADMAP-205)  
In the previous version of the application, the TEI header part of the dashboard was improved. In continuation to that effort, the bottom part, where all program stages are displayed, has been redesigned in this version. The changes include are fresh and more clean look of the list of events, with more space and less -not critical- information displayed. In addition, the button for creating new events has been moved to the top (in timeline view).



Proposed improvements

Timeline
- When the timeline has more than 5 events, a “Show X more...” button with X = number of hidden events will be displayed.
- When displaying all the events the Show more button will change to “Show less...”- Remove the “last updated” from card

Grouped
- Program stages without events display the label “no data”- Program stages are always open (not collapsible as it was before)- When a program stage has more than 3 events, a “Show X more...” button with X = number of hidden events will be displayed.
- When displaying all the events the Show more button will change to “Show less...”- Remove the “last updated” from card  

##### [Improvements in forms layout [ROADMAP-204]](https://dhis2.atlassian.net/issues/ROADMAP-204)  
When creating an event or an enrollment, there are a number of fields that are not data elements or attributes, for example, event date, org unit, coordinates, enrollment date, category combinations. Those elements are referred to as event/enrollment details and in previous versions they were displayed in different screens separated from the data elements or attributes. They were difficult to find when users wanted to edit or consult them. In this version the details are displayed inside the form, as the first opened section for completion. Once they are filled in, for example when the user reopens the event or enrollment form, the details section will be visible and easily available, but collapsed to leave more space for the data collection.  

##### [Improve TEI search user experience [ROADMAP-203]](https://dhis2.atlassian.net/issues/ROADMAP-203)  
The search form has been improved to provide a cleaner look and a more intuitive user experience. The buttons have been made more explicit for differencing search from creation. In addition the flow for searching TEIs using attributes rendered as bar / QR codes has been made more agile. If there is only one result and the attribute is unique, the app will open the TEI Dashboard directly. If there are multiple results, the app will display all the cards on the TEI list (this is equal to the current workflow), and if there are no results, the app will display the create button and allow the user to “search outside the program” if the configuration allows it.



Reduce steps in QR code/Bar code search workflow

Improve the user experience when users search for a TEI using a UNIQUE QR/bar code. Currenrtly, when there are exact matches, the app displays the card or cards on the list.

The proposed behaviour is:

After searching by QR code/Barcode:
- If there is only one result, the app opens the TEI Dashboard.- If there are multiple results, the app will display all the cards on the TEI list (current workflow)- If there are no results, the app will display the create button  and allow the user to “search outside the program” (if the config allows it)  

##### [Support for customized tracker terminology [ROADMAP-201]](https://dhis2.atlassian.net/issues/ROADMAP-201)  
Some DHIS2 terminology is not familiar for the end users. For this reason, we are gradually enabling the possibility to customize it to each particular use case. In this version, the term "event" and "enrollment" are customizable. The admin user will be able to configure it for each program using the Maintenance App, and the Android Capture App will display the customized term instead of the generic one.



Support the posibility to configure certain tracker terminology to provide a more contextualized user experience. For 2.10 we will aim for:
- Enrollment (25 strings)- Event- Program Stage ()



Future version will include
- Registering unit- Follow-up- Attribute- Relationships- Notes  


### Tracker

#### Android Capture
##### [Optionsets multiselect support for individual data [ROADMAP-72]](https://dhis2.atlassian.net/issues/ROADMAP-72)  
DHIS2 already supports the introduction of multiple options for data elements for data aggregation. In this version it will also support it for individual data. The Android App will support both aggregated and individual multi select data elements from this version.
##🎯  High Level use case

Multi selection option sets in the Capture app
##🧑‍🤝‍🧑  Users description

Data entry: there are many types of structured data where the most accurate response is “select all that apply”

System Configurer: The only way to work around multiselect currently is create complex program rules and redundant fields that reduce form performance, introduce complications, and reduce data quality
##❓  Problem Description

The absence of multiselect
##\uD83E\uDD14  Assumptions

The approach used for multiselect in the Data Entry app can be reused here
##ℹ️  Sources

What were the sources of input for this requirement
##:warning:  Out of Scope

List the features discussed which are out of scope or might be revisited in a later release.
##:question_mark:  Open Questions  
*Components: Android Capture, Capture (web)*  


#### Capture (web)
##### [Formfield and dashboard plugins in the Capture app [ROADMAP-191]](https://dhis2.atlassian.net/issues/ROADMAP-191)  
:construction: LONG DESCRIPTION TBW!  


### Platform

#### Global (App Shell)
##### [Global App Shell [ROADMAP-190]](https://dhis2.atlassian.net/issues/ROADMAP-190)  
:construction: LONG DESCRIPTION TBW!  


#### Maintenance
##### [Maintenance App redesign MVP [ROADMAP-47]](https://dhis2.atlassian.net/issues/ROADMAP-47)  
:construction: LONG DESCRIPTION TBW!  

##### [Indicator and Indicator types Metadata Merging [ROADMAP-39]](https://dhis2.atlassian.net/issues/ROADMAP-39)  
:construction: LONG DESCRIPTION TBW!  


#### Login
##### [New, customizable version of the Login App [ROADMAP-46]](https://dhis2.atlassian.net/issues/ROADMAP-46)  
:construction: LONG DESCRIPTION TBW!  


#### Data Entry
##### [Data Entry App support for legacy custom forms [ROADMAP-45]](https://dhis2.atlassian.net/issues/ROADMAP-45)  
:construction: LONG DESCRIPTION TBW!  

##### [Custom Forms Functionality [ROADMAP-44]](https://dhis2.atlassian.net/issues/ROADMAP-44)  
:construction: LONG DESCRIPTION TBW!  


#### Scheduler
##### [Scheduled job queues configuration UI [ROADMAP-43]](https://dhis2.atlassian.net/issues/ROADMAP-43)  
:construction: LONG DESCRIPTION TBW!  

##### [Scheduler app declarative architecture [ROADMAP-37]](https://dhis2.atlassian.net/issues/ROADMAP-37)  
:construction: LONG DESCRIPTION TBW!  


#### Data Exchange
##### [Aggregate Data Exchange configuration UI [ROADMAP-42]](https://dhis2.atlassian.net/issues/ROADMAP-42)  
:construction: LONG DESCRIPTION TBW!  


#### Data Administration
##### [Integrity Check Configuration UI [ROADMAP-41]](https://dhis2.atlassian.net/issues/ROADMAP-41)  
:construction: LONG DESCRIPTION TBW!  


### Analytics

#### Maps
##### [Increased granularity/options for periodicity in Maps App for Climate layers from GEE [ROADMAP-154]](https://dhis2.atlassian.net/issues/ROADMAP-154)  
:construction: LONG DESCRIPTION TBW!  

##### [Filtering event-layer maps by attribute categories [ROADMAP-152]](https://dhis2.atlassian.net/issues/ROADMAP-152)  
:construction: LONG DESCRIPTION TBW!  


#### Dashboard
##### [Dashboard email push [ROADMAP-149]](https://dhis2.atlassian.net/issues/ROADMAP-149)  
:construction: LONG DESCRIPTION TBW!  


#### Data Visualizer
##### [Cumulative values in pivot tables [ROADMAP-147]](https://dhis2.atlassian.net/issues/ROADMAP-147)  
:construction: LONG DESCRIPTION TBW!  

##### [Outlier tables in Data Visualizer [ROADMAP-146]](https://dhis2.atlassian.net/issues/ROADMAP-146)  
:construction: LONG DESCRIPTION TBW!  


#### Line Listing
##### [Tracked Entity / cross program line lists [ROADMAP-143]](https://dhis2.atlassian.net/issues/ROADMAP-143)  
:construction: LONG DESCRIPTION TBW!  


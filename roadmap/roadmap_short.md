## v41 (May 2024)

### Android

#### Android Capture
##### [Improve end-user config error feedback [ROADMAP-296]](https://dhis2.atlassian.net/issues/ROADMAP-296)  
The Android Capture app now provides clear and explicit error messages for configuration issues, enabling effective communication between users and administrators to promptly resolve empty screen problems caused by empty forms or lack of access.  
##### [Improvements in tracker programs data entry flow [ROADMAP-294]](https://dhis2.atlassian.net/issues/ROADMAP-294)  
Improved tracker program user flow with confirmation dialog for TEI deletion, redesigned scheduling event dialog, streamlined org. unit selection for single access pre-filled, and program rule "Hide program stage" alignment with Capture web.  
##### [New Inputs for value types in Android App [ROADMAP-293]](https://dhis2.atlassian.net/issues/ROADMAP-293)  
Redesigned inputs for all value types in v41, improving data entry. Signature input and complete legend description enhance the experience. New fields have default settings, and admins have the option to opt-out via the Android Settings web app.  

### Platform

#### Maintenance
##### [Maintenance App redesign MVP [ROADMAP-47]](https://dhis2.atlassian.net/issues/ROADMAP-47)  
Introducing a complete rebuild of the Maintenance App in v41. The update includes advanced filtering options, bulk sharing capabilities, and a sleeker user interface. New modules will be continuously introduced as they are developed.  
##### [Indicator and Indicator types Metadata Merging [ROADMAP-39]](https://dhis2.atlassian.net/issues/ROADMAP-39)  
In v41, merging of indicator and indicator types is enabled, updating all references to the source indicator and facilitating metadata cleanup operations.  

#### Login
##### [New, customizable version of the Login App [ROADMAP-46]](https://dhis2.atlassian.net/issues/ROADMAP-46)  
In v41, a new login app built on React is introduced. This app provides customizable configuration options, allowing easy customization of the login experience to match your specific context.  

#### Data Entry
##### [Data Entry App support for legacy custom forms [ROADMAP-45]](https://dhis2.atlassian.net/issues/ROADMAP-45)  
Exploring a solution for legacy custom forms not being supported by the new aggregate data entry app.  
##### [Custom Forms Functionality [ROADMAP-44]](https://dhis2.atlassian.net/issues/ROADMAP-44)  
The new aggregate data entry app now supports configuration options that allow you to change the appearance of your data entry form without creating a custom form.  

#### Scheduler
##### [Scheduled job queues configuration UI [ROADMAP-43]](https://dhis2.atlassian.net/issues/ROADMAP-43)  
In v41, the Job Scheduler app now allows configuration of grouping jobs to run in sequence or in parallel. This functionality, previously added in v40 via the API, can now be easily configured through the app interface.  
##### [Scheduler app declarative architecture [ROADMAP-37]](https://dhis2.atlassian.net/issues/ROADMAP-37)  
Introducing a new simple scheduler based on the current database state, running asynchronously to execute task configurations. This eliminates issues with the previous "black box" approach, ensuring the job triggers as specified in the configuration.  

#### Data Exchange
##### [Aggregate Data Exchange configuration UI [ROADMAP-42]](https://dhis2.atlassian.net/issues/ROADMAP-42)  
The Data Exchange app has been updated to allow for creation and editing of the data exchanges directly within the app. Making it much easier to set up exchanges and transfer data or convert tracker data into the aggregate model.  

#### Data Administration
##### [Integrity Check Configuration UI [ROADMAP-41]](https://dhis2.atlassian.net/issues/ROADMAP-41)  
The Integrity check app has been given an extensive update, allowing individual check runs, separating longer checks, and providing informative recommendations.  

### Tracker

#### Android Capture
##### [Optionsets multiselect support for individual data [ROADMAP-72]](https://dhis2.atlassian.net/issues/ROADMAP-72)  
Starting from this version, the Android App will support the selection of multiple options for both aggregated and individual multi-select data elements.  
*Components: Android Capture, Capture (web)*  


### Analytics

#### Maps
##### [Increased granularity/options for periodicity in Maps App for Climate layers from GEE [ROADMAP-154]](https://dhis2.atlassian.net/issues/ROADMAP-154)  
More authority over periodicity in the google earth engine layers of the Maps app  
##### [Filtering event-layer maps by attribute categories [ROADMAP-152]](https://dhis2.atlassian.net/issues/ROADMAP-152)  
  

#### Dashboard
##### [Dashboard email push [ROADMAP-149]](https://dhis2.atlassian.net/issues/ROADMAP-149)  
Replace the legacy push analytics service with more modern functionality which uses the same visualization engine as the web-based visualization apps.  Allow dashboards to be rendered on the server and sent to a user's email, respecting sharing settings.  

#### Data Visualizer
##### [Cumulative values in pivot tables [ROADMAP-147]](https://dhis2.atlassian.net/issues/ROADMAP-147)  
Data Visualizer application now supports the "cumulative values" setting for pivot table visualization types in v41. Each cell in the table displays the sum of the value in that cell and all preceding values in the same row.  
##### [Outlier tables in Data Visualizer [ROADMAP-146]](https://dhis2.atlassian.net/issues/ROADMAP-146)  
The Data Visualizer application in v41 introduces support for outlier tables as a visualization type. This enhanced functionality replaces and improves upon the legacy outlier tables that were previously available in the WHO Data Quality application.  

#### Line Listing
##### [Tracked Entity / cross program line lists [ROADMAP-143]](https://dhis2.atlassian.net/issues/ROADMAP-143)  
The Line Listing app now supports the creation of line lists for tracked entities; including the ability to filter on data from different programs that tracked entity is enrolled in.  

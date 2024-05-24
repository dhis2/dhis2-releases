# DHIS2 version 40 Release Note

## DHIS2
Features that span accross multiple products are described in this section.

#### [Support for customized tracker terminology [ROADMAP-201]](https://dhis2.atlassian.net/issues/ROADMAP-201)  
DHIS2 now allows customizing tracker terminology like "event" and "enrollment" for end users' familiarity. Admins can configure it per program via the Maintenance App, and the Android Capture App reflects these custom terms.  

#### [Optionsets multiselect support for individual data [ROADMAP-72]](https://dhis2.atlassian.net/issues/ROADMAP-72) [DHIS2-16211](https://dhis2.atlassian.net/browse/DHIS2-16211)
Starting from this version, the Android App will support the selection of multiple options for both aggregated and individual multi-select data elements.  
*Components: Android Capture, Capture (web)*  

#### [Custom icons [ROADMAP-207]](https://dhis2.atlassian.net/issues/ROADMAP-207)  
DHIS2 2 now allows uploading custom icons, expanding beyond the built-in library. Ideal for non-health-related or specialized icon needs. Android App displays these icons, configured via Maintenance DHIS2 Web App.  

#### [Tracked Entity / cross program line lists [ROADMAP-143]](https://dhis2.atlassian.net/issues/ROADMAP-143)  
The Line Listing app now supports the creation of line lists for tracked entities; including the ability to filter on data from different programs that tracked entity is enrolled in.

### Android Capture
#### [Improve end-user config error feedback [ROADMAP-296]](https://dhis2.atlassian.net/issues/ROADMAP-296)  
The Android Capture app now provides clear and explicit error messages for configuration issues, enabling effective communication between users and administrators to promptly resolve empty screen problems caused by empty forms or lack of access.  

#### [Improve App behaviour when working in offline mode  [ROADMAP-295]](https://dhis2.atlassian.net/issues/ROADMAP-295)  
Android App now notifies users when actions requiring internet connection are tapped without connectivity. Improves behavior of non-responsive parts like sync buttons when no connection is available.  

#### [Improvements in tracker programs data entry flow [ROADMAP-294]](https://dhis2.atlassian.net/issues/ROADMAP-294)  
Improved tracker program user flow with confirmation dialog for TEI deletion, redesigned scheduling event dialog, streamlined org. unit selection for single access pre-filled, and program rule "Hide program stage" alignment with Capture web.  

#### [New Inputs for value types in Android App [ROADMAP-293]](https://dhis2.atlassian.net/issues/ROADMAP-293)  
Redesigned inputs for all value types in v2.10, improving data entry. Signature input and complete legend description enhance the experience. New fields have default settings, and admins have the option to opt-out via the Android Settings web app.  

#### [Import/export App DB  [ROADMAP-210]](https://dhis2.atlassian.net/issues/ROADMAP-210)  
Users can export an encrypted local database for troubleshooting, allowing admins to import the exact environment. This aids in diagnosing sync issues and ensuring data integrity. Access to the exported database requires credentials for security.  

#### [Configurable basemap layer [ROADMAP-209]](https://dhis2.atlassian.net/issues/ROADMAP-209)  
DHIS2 Android App now supports custom map layers configured in Maps Web App. These layers are downloaded and displayed alongside default ones, enhancing mapping capabilities.  

#### [Improve app navigation performance for high number of TEIs  [ROADMAP-208]](https://dhis2.atlassian.net/issues/ROADMAP-208)  
Implementations are more and more demanding in terms of offline need of individual records. This version of the app has been reviewed to optimize performance when there are big numbers of TEIs downloaded locally.  

#### [Line listing analytics in Android [ROADMAP-206]](https://dhis2.atlassian.net/issues/ROADMAP-206)  
Android App now supports offline line listing analytics. Created in DHIS2 web app, configured in Android Settings Web App (ASWA). Displayable on home screen and event/tracker programs; searchable by period, Org. unit, or custom columns.  

#### [Improve TEI dashboard user experience [ROADMAP-205]](https://dhis2.atlassian.net/issues/ROADMAP-205)  
TEI dashboard's bottom part, displaying program stages, revamped for a cleaner look. Events list now offers more space, less non-critical info. Plus, create event button relocated to top (timeline view).  

#### [Improvements in forms layout [ROADMAP-204]](https://dhis2.atlassian.net/issues/ROADMAP-204)  
In this version, event/enrollment details like event date, org unit, coordinates, and category combinations are integrated within the form. They're readily accessible as the first section, collapsed after filling for efficient data collection.  

#### [Improve TEI search user experience [ROADMAP-203]](https://dhis2.atlassian.net/issues/ROADMAP-203)  
Search form improved for cleaner, intuitive experience. Buttons now explicit for search/creation. TEI search with barcodes streamlined: Unique result opens TEI Dashboard; multiple results show TEI list; no results prompt creation or external search.  


### Capture (web)
#### [Formfield and dashboard plugins in the Capture app [ROADMAP-191]](https://dhis2.atlassian.net/issues/ROADMAP-191)  
Add extension points to the Capture App, allowing DHIS2 application developers to inject custom plugins in the data entry form as well as the enrollment dashboard.  

### Global (App Shell)
#### [Global App Shell [ROADMAP-190]](https://dhis2.atlassian.net/issues/ROADMAP-190)  
Serve the app shell independent of individual applications.  The global shell will ensure consistent headerbar and command pallet as well as other common global functionality such as alerts, session management, and more.  

### Maintenance
#### [Maintenance App redesign MVP [ROADMAP-47]](https://dhis2.atlassian.net/issues/ROADMAP-47)  
Introducing the first preview of the completely new Maintenance App. In v41 we are releasing the data element sections with new modules continuously introduced as they are developed. The updated features include advanced filtering options, bulk sharing capabilities, and a sleeker user interface.   

#### [Indicator and Indicator types Metadata Merging [ROADMAP-39]](https://dhis2.atlassian.net/issues/ROADMAP-39)  
In v41, merging of indicator and indicator types is enabled via the API, updating all references to the source indicator and facilitating metadata cleanup operations.  


### Login
#### [New, customizable version of the Login App [ROADMAP-46]](https://dhis2.atlassian.net/issues/ROADMAP-46)  
In v41, a new login app built on React is introduced. This app provides customizable configuration options, allowing easy customization of the login experience to match your specific context.  


### Data Entry
#### [Custom Forms Functionality [ROADMAP-44]](https://dhis2.atlassian.net/issues/ROADMAP-44)  
We are adding more configuration options to the aggregate data entry form to allow you to customise the look and feel of the data entry form without building a custom HTML form. We have started with the option to pivot categories as rows and have data elements as columns or move a category to a row. You can now also add rich text fields before and after a section.


### Scheduler
#### [Scheduled job queues configuration UI [ROADMAP-43]](https://dhis2.atlassian.net/issues/ROADMAP-43)  
In v41, the Job Scheduler app now allows configuration of grouping jobs to run in sequence or in parallel. This functionality, previously added in v40 via the API, can now be easily configured through the app interface.  

#### [Scheduler app declarative architecture [ROADMAP-37]](https://dhis2.atlassian.net/issues/ROADMAP-37)  
Introducing a new simple scheduler based on the current database state, running asynchronously to execute task configurations. This eliminates issues with the previous "black box" approach, ensuring the job triggers as specified in the configuration.  


### Data Exchange
#### [Aggregate Data Exchange configuration UI [ROADMAP-42]](https://dhis2.atlassian.net/issues/ROADMAP-42)  
The Data Exchange app has been updated to allow for creation and editing of the data exchanges directly within the app. Making it much easier to set up exchanges and transfer data or convert tracker data into the aggregate model.  


### Data Administration
#### [Integrity Check Configuration UI [ROADMAP-41]](https://dhis2.atlassian.net/issues/ROADMAP-41)  
The Integrity check app has been given an extensive update, allowing individual check runs, separating longer checks, and providing informative recommendations.  


### Maps
#### [Increased granularity/options for periodicity in Maps App for Climate layers from GEE [ROADMAP-154]](https://dhis2.atlassian.net/issues/ROADMAP-154)  
More authority over periodicity in the google earth engine layers of the Maps app  

  
### Dashboard
#### [Dashboard email push [ROADMAP-149]](https://dhis2.atlassian.net/issues/ROADMAP-149) (Scheduled for 41.1) 
Replace the legacy push analytics service with more modern functionality which uses the same visualization engine as the web-based visualization apps.  Allow dashboards to be rendered on the server and sent to a user's email, respecting sharing settings.  


### Data Visualizer
#### [Cumulative values in pivot tables [ROADMAP-147]](https://dhis2.atlassian.net/issues/ROADMAP-147)  
Data Visualizer application now supports the "cumulative values" setting for pivot table visualization types in v41. Each cell in the table displays the sum of the value in that cell and all preceding values in the same row.  

#### [Outlier tables in Data Visualizer [ROADMAP-146]](https://dhis2.atlassian.net/issues/ROADMAP-146)  
The Data Visualizer application in v41 introduces support for outlier tables as a visualization type. This enhanced functionality replaces and improves upon the legacy outlier tables that were previously available in the WHO Data Quality application.  


### Line Listing
#### [Tracked Entity / cross program line lists [ROADMAP-143]](https://dhis2.atlassian.net/issues/ROADMAP-143)  
The Line Listing app now supports the creation of line lists for tracked entities; including the ability to filter on data from different programs that tracked entity is enrolled in.  

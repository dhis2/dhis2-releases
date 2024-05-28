# DHIS2 version 41 Release Note

## Highlights

- Capture App now has all of the features of Tracker Capture, and more!

- Line Listing App supports listing Tracked Entities that are enrolled in multiple programs

- Android Capture App analytics now supports linelists that are updated while offline

- More than [450 bugs fixed](https://dhis2.atlassian.net/issues/?jql=project%20%3D%20DHIS2%20AND%20status%20%3D%20Done%20AND%20type%20%3D%20Bug%20AND%20fixversion%20IN%20%282.41%2C%202.41.0%29%0AORDER%20BY%20created%20ASC), thanks to extensive testing by the DHIS2 core team and beta testing partners

## Updates by component

### Login
#### [New, customizable version of the Login App [ROADMAP-46]](https://dhis2.atlassian.net/issues/ROADMAP-46)  
In v41, a new login app built on React is introduced. This app provides customizable configuration options, allowing easy customization of the login experience to match your specific context.  

### Maintenance
#### [Maintenance App redesign MVP [ROADMAP-47]](https://dhis2.atlassian.net/issues/ROADMAP-47)  
Introducing the first preview of the completely new Maintenance App. In v41 we are releasing the data element sections with new modules continuously introduced as they are developed. The updated features include advanced filtering options, bulk sharing capabilities, and a sleeker user interface.   

### System wide features 
#### [Optionsets multiselect support for individual data [ROADMAP-72]](https://dhis2.atlassian.net/issues/ROADMAP-72) [[DHIS2-16211]](https://dhis2.atlassian.net/browse/DHIS2-16211)
Dhis2 will support from this version support the selection of multiple options for datasets for both aggregated and individual multi-select data elements. They will also be available for analysis through indicators and program indicators.

#### [Custom Icons](https://dhis2.atlassian.net/browse/DHIS2-14272) 
DHIS2 2 now allows uploading custom icons, expanding beyond the built-in library, to allow for context-specific icons such as those used by the Ministry of Health or NGO, as well as expand the availability of icons for non-health-related areas. These icons are available across the web and Android, and are configured via Maintenance DHIS2 Web App.

### Aggregated Data Entry
#### [Custom Forms Functionality [ROADMAP-44]](https://dhis2.atlassian.net/issues/ROADMAP-44)  
We are adding more configuration options to the aggregate data entry form to allow you to customise the look and feel of the data entry form without building a custom HTML form. We have started with the option to pivot categories as rows and have data elements as columns or move a category to a row. You can now also add rich text fields before and after a section.

### Capture (web)

#### Capture App Feature Parity with Tracker Capture
From v41, Capture and Tracker Capture are considered feature equal. This means that the software development team is not adding any further functionality to Tracker Capture, only fixing critical/security bugs if discovered. The Tracker Capture app and old tracker endpoint are now deprecated, and will not be bundled into v42.

Since the Capture app is on continuous release, you can also use this app from 2.38 and above. There are certain features that have needed new backend dependencies, but if those are not required for you, you can use the app management app and update the app to newer versions on 2.38 and above.

The features that need specific backend versions are the following:
- Changelog, previously audit log (v41 and above)
- Image thumbnails in working lists, forms, and widgets (Currently v41, but will soon be supported for lower versions)

There are also several features that are only available in the Capture app which we hope will encourage you to test it out. These include:
- Working lists: The ability to configure, save, and share working lists in the UI itself (Rather than through API as in Tracker Capture), including program stage working lists.
- Scheduling: The ability to use program rules to calculate the next scheduled date (assigned to a data element) which can then be used as the default date when scheduling. (Docs)
- Configure widgets and layout: Similar to Tracker Capture, but done in the data store, meaning it will be the same for all users and stay consistent, with the possibility to have a different layout for the Enrollment Dashboard and the Program stage event workspace.

#### [Relationship improvements](https://dhis2.atlassian.net/browse/DHIS2-12361)
The relationships widget is updated for the Capture app with various improvements

#### [Inheritable attributes for relationships](https://dhis2.atlassian.net/browse/DHIS2-16123) 
When creating a tracked entity through a relationship, tracked entity attributes configured with “inherit” will be prefilled with values from the source tracked entity in order to reduce data entry burden and improve data quality
  
#### [Growth chart widget based on WHO Child Growth Standards](https://apps.dhis2.org/app/09f48f78-b67c-4efa-90ad-9ac2fed53bb8)
The Capture App now includes a growth chart widget for individual tracked entities, based on the WHO z-scores for:
- Head circumference for age
- Length/height for age
- Weight for age
- Weight for length/height

#### [Download working lists](https://dhis2.atlassian.net/browse/DHIS2-13233)
You are now able to download working lists in the Capture app as JSON or CSV files

#### [Mark tracked entities for follow up](https://dhis2.atlassian.net/browse/DHIS2-14799)
Individual tracked entities in working lists can now be marked for follow-up, and filtered to provide a list of all designated for follow-up

#### [Related Stages Widget](https://dhis2.atlassian.net/browse/DHIS2-16291)
The referral widget has been updated and renamed the "Related Stages Widget" in the Capture app with additional functionality and improved user experience.

#### [Ownership transfer between org units](https://dhis2.atlassian.net/browse/DHIS2-16322)
In order to support referall workflows and correct attribution of analytics, we have completed the ownership transfer of enrollments between org units. The ownership transfer overwrites the ownership field of an enrollment, while preserving the enrolling org unit and event org unit fields

#### [Allow one time referrals between org units] 
One time referrals are now supported in the Capture app, allowing for a selected org unit to access an enrollment without overwriting the ownership field.

#### [Images displayed in working lists](https://dhis2.atlassian.net/browse/DHIS2-15391)
Image attributes can now be displayed in working lists, to easier enable identification of tracked entities for use cases such as patient identification; inventory management; lab equipment monitoring; etc.

#### [Image preview](https://dhis2.atlassian.net/browse/DHIS2-15392)
Uploaded images can now be previewed in both the event page and profile widget

#### [Enhanced change log](https://dhis2.atlassian.net/browse/DHIS2-16764)
Various improvements to the changelog, including sorting and filtering in order to provide important information about when a value was created, changed or deleted and by which user.

#### [Formfield and dashboard plugins in the Capture app [ROADMAP-191]](https://dhis2.atlassian.net/issues/ROADMAP-191)  
As a part of the platform strategy to support greater customizability and external development, we have added extension points to the Capture App allowing DHIS2 application developers to inject custom plugins in the data entry form as well as the enrollment dashboard. For an example of this in action, see the new growth charts and documentation, which were built using these same extension points. 

#### [API harmonization: Harmonized names and parameters in /tracker API](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.41/README.md#tracker)
We have completed a full review of the /tracker API and made significant changes in order to harmonize names and parameters for consistency and ease of use. These improvements include some breaking changes that should be noted and addressed. See details in the v41 README, as well as the documentation.

#### [Verbose logging](https://dhis2.atlassian.net/browse/DHIS2-12544)
You can now append &verbose=TRUE to the end of a query in order receive better information for debugging and testing

### Android Capture 3.0
#### [Line listing analytics in Android [ROADMAP-206]](https://dhis2.atlassian.net/issues/ROADMAP-206)  
Android App now supports offline line listing analytics. Created in DHIS2 web app, configured in Android Settings Web App (ASWA). Displayable on home screen and event/tracker programs; searchable by period, Org. unit, or custom columns.  

#### [Support for customized tracker terminology [ROADMAP-201]](https://dhis2.atlassian.net/issues/ROADMAP-201)  
DHIS2 now allows customizing tracker terminology like "event" and "enrollment" for end users' familiarity. Admins can configure it per program via the Maintenance App, and the Android Capture App reflects these custom terms.  

#### [Improve end-user config error feedback [ROADMAP-296]](https://dhis2.atlassian.net/issues/ROADMAP-296)  
The Android Capture app now provides clear and explicit error messages for configuration issues, enabling effective communication between users and administrators to promptly resolve empty screen problems caused by empty forms or lack of access.  

#### [Improve App behaviour when working in offline mode  [ROADMAP-295]](https://dhis2.atlassian.net/issues/ROADMAP-295)  
Android App now notifies users when actions requiring internet connection are tapped without connectivity. Improves behavior of non-responsive parts like sync buttons when no connection is available.  

#### [Improvements in tracker programs data entry flow [ROADMAP-294]](https://dhis2.atlassian.net/issues/ROADMAP-294)  
Improved tracker program user flow with confirmation dialog for TEI deletion, redesigned scheduling event dialog, streamlined org. unit selection for single access pre-filled, and program rule "Hide program stage" alignment with Capture web.  

#### [New Inputs for value types in Android App [ROADMAP-293]](https://dhis2.atlassian.net/issues/ROADMAP-293)  
Redesigned inputs for all value types in v2.10, improving data entry. Signature input and complete legend description enhance the experience. New fields have default settings, and admins have the option to opt-out via the Android Settings web app.  

#### [Configurable basemap layer [ROADMAP-209]](https://dhis2.atlassian.net/issues/ROADMAP-209)  
DHIS2 Android App now supports custom map layers configured in Maps Web App. These layers are downloaded and displayed alongside default ones, enhancing mapping capabilities.  

#### [Improve app navigation performance for high number of TEIs  [ROADMAP-208]](https://dhis2.atlassian.net/issues/ROADMAP-208)  
Implementations are more and more demanding in terms of offline need of individual records. This version of the app has been reviewed to optimize performance when there are big numbers of TEIs downloaded locally.  

#### [Improve TEI dashboard user experience [ROADMAP-205]](https://dhis2.atlassian.net/issues/ROADMAP-205)  
TEI dashboard's bottom part, displaying program stages, revamped for a cleaner look. Events list now offers more space, less non-critical info. Plus, create event button relocated to top (timeline view).  

#### [Improvements in forms layout [ROADMAP-204]](https://dhis2.atlassian.net/issues/ROADMAP-204)  
In this version, event/enrollment details like event date, org unit, coordinates, and category combinations are integrated within the form. They're readily accessible as the first section, collapsed after filling for efficient data collection.  

#### [Improve TEI search user experience [ROADMAP-203]](https://dhis2.atlassian.net/issues/ROADMAP-203)  
Search form improved for cleaner, intuitive experience. Buttons now explicit for search/creation. TEI search with barcodes streamlined: Unique result opens TEI Dashboard; multiple results show TEI list; no results prompt creation or external search.  

#### [Import/export Android App DB  [ROADMAP-210]](https://dhis2.atlassian.net/issues/ROADMAP-210)  
Users can export an encrypted local database for troubleshooting, allowing admins to import the exact environment. This aids in diagnosing sync issues and ensuring data integrity. Access to the exported database requires credentials for security.  


### Maps
#### [Vector tiles as external layers [DHIS2-11960]](https://dhis2.atlassian.net/browse/DHIS2-11960)
Vector files can not be imported into DHIS2 and displated in the maps app. This allows for much more flexibility in displaying geographic data from other sources in the maps app. 
  
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
The Line Listing app now supports the creation of line lists for tracked entities which allows for creating a list of tracked entities that are registed or enrolled in multiple programs. This includes the ability to add and filter on data from different programs that tracked entity is enrolled in and/or view attributes of tracked entities that are shared across programs. 

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

### Extensibility

#### [New "Form Field" and "Enrollment Dashboard" plugin types in the Capture App [ROADMAP-191]](https://dhis2.atlassian.net/issues/ROADMAP-191)
*(experimental)* Additional plugin types can now be bundled in DHIS2 web apps, allowing Capture App functionality to be easily extended.  These widgets can be installed in the App Management App and can be configured for different programs in the Data Store.

#### [Expanded support for all HTTP methods in the Routes API [DHIS2-16921]](https://dhis2.atlassian.net/browse/DHIS2-16921)
The Routes API, introduced in DHIS2 v40, has been expanded to support all HTTP methods.  It was previously restricted to only forward GET requests to upstream targets.

#### [Partial and rolling updates in Data Store and User Data Store APIs [DHIS2-17469]](https://dhis2.atlassian.net/browse/DHIS2-17469)
*(experimental)* It is now possible to apply partial updates to keys in the Data Store and User Data Store.  When applying a partial updates, items can be appended to array type keys.  It is also possible to optionally specify a maximum size in the "roll" parameter which will discard items from the beginning of the array if its size exceeds the maximum after the new item has been appended.  This is an experimental feature which may be updated in future DHIS2 releases.

#### [Query aliases to shorten long API request URLs [ROADMAP-217]](https://dhis2.atlassian.net/issues/ROADMAP-217)
*(experimental)* To work around issues with too-long DHIS2 API request URIs, causing `HTTP 414 URI Too Long` errors, it is now possible to create short-lived query aliases.  A query alias is a shortened API path which is mapped to a specific longer path on the DHIS2 server.  Query aliases can be deterministically created and then reused until they expire.  This is an experimental feature which will be expanded, supported by the App Runtime, and leveraged in DHIS2 frontend apps such as the Data Visualizer in future releases.

#### [Global App Shell [ROADMAP-190]](https://dhis2.atlassian.net/issues/ROADMAP-190)  
*(experimental)* A global app shell can be optionally installed, which will be served independently of individual applications.  The global shell will ensure consistent headerbar and command pallet as well as other common global functionality such as alerts, session management, and more.  This is an optional and experimental feature which will be expanded in future releases.


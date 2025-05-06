# DHIS2 version 42 and Android Capture 3.2 Release Note

## Highlights

* New DHIS2 apps navigation menu - Command Palette for shortcuts and keyboard controls
* Tracker to Aggregate data - Program Indicator disaggregation within categories
* Dataset entry form configuration in Web and Android
* Embedded External Dashboard types (Superset) and Dashboard plugins
* Shared Rule Engine across DHIS2 platform backend, web Capture and Android App
* Global App Shell - a shared container for web applications

## Configure

### Login

#### [Email-based authentication codes for multi-factor authentication [ROADMAP-234]](https://dhis2.atlassian.net/browse/ROADMAP-234)

From this version, DHIS2 also support email-based multi factor authentication (MFA). Email-based MFA should be configured at the system level and will be an option for the users when they are turning on MFA/2FA. If the user selects "Email", the system emails a one-time password to the provided email address during the login process.



### Maintenance

#### [New Maintenance App continuous release [ROADMAP-182]](https://dhis2.atlassian.net/browse/ROADMAP-182)

The Maintenance is being gradually reimplementend in its new and improved version. The new Maintenance web app is on continuous release and keeps being dynamically updated. For the time of this v42 release we can announce the implementation of the Data Element, Categories and Indicator type sections.



#### [Program Indicator Disaggregations - Tracker to Aggregated data [ROADMAP-73]](https://dhis2.atlassian.net/browse/ROADMAP-73)

This feature enables the possibility of creating disaggregations for Program Indicators that match with existing category options, and combinations. Such disaggregation will facilitate analysing Program Indicators by those disaggregation with the analytics apps as well as aggregating the values and importing within an aggregated data model though the exchange app.



#### [Metadata deduplication and merging [ROADMAP-39]](https://dhis2.atlassian.net/browse/ROADMAP-39)

Merging of metadata is being gradually supported within DHIS2 core funcitonalities facilitating metadata cleanup operations. Backend supports merging the following metadata objects through the web API: Organisation Units, Data Elements, Indicators, Indicator Types, Category options, Categories, Category Combinations, Category option combinations (limited to one use case, when the catoptcombination are the same).  Frontend support through the user interface is gradually implemented as well. So far the new Maintenance app supports merging options for Category option and Category option combinations, Indicators and Indicator types. In these cases the user is able to select the “source” object to merge and the “target” object to merge references to.


### Android Settings Webapp

#### [Webapp for Android Synchronization troubleshooting   [ROADMAP-69]](https://dhis2.atlassian.net/browse/ROADMAP-69)

The new Synchronization Troubleshooting Web App provides implementation administrators real-time visibility and troubleshooting capabilities for synchronization errors occurring in the last 24 hours tracker or event programs. It will enable sys admins to analyze persisted Android sync error API responses. The app is available in the App hub and will require administrators to install it in their instances.


## Collect - Aggregated data

### Data Entry App and Android Capture App

#### [Configurable Forms Functionality for data sets [ROADMAP-44]](https://dhis2.atlassian.net/browse/ROADMAP-44)

The new section form configuration options allow for greater customization of the look and feel of aggregate data entry forms without the need to build a custom form. With vertical tabs, collapsible sections, and form titles added, there are now more ways to make your forms visually appealing and user-friendly.



#### ["Days after period to qualify for timely submission" and "Expiry days" supports number type values [ROADMAP-344]](https://dhis2.atlassian.net/browse/ROADMAP-344)

When specifying the parameters for a data set, you can now use numbers (eg 0.5) for the "Days after period to qualify for timely submission" and “Expiry days”. This will support IDSR use cases where timely submission for weekly IDSR data is Monday at 12 (noon), which is 0.5 days after period end on Sunday midnight.

With DHIS2 increasingly being used for IDSR where rapid reporting etc are a must, this change will increasingly be used to set timeliness requirements less than one day, or in some cases e.g. 1.5 days.  Historically this parameter has been mostly used for timeliness of "long transaction" monthly aggregated data (the term "long transaction" is a term used for data processes that take considerable time - in the DHIS2 case typically 5-20 days after the end of the month). Disease surveillance data is different, because rapid submission of e.g. outbreak data is of vital importance for the early containment of epidemics. Such data is also increasingly being submitted directly from health facilities or clinicians, using browsers or the Android Capture app.



## Collect - Individual data

### Web Capture App

#### [  Bulk Simple Operations in Capture [ROADMAP-325]](https://dhis2.atlassian.net/browse/ROADMAP-325)

You can now perform bulk actions in event and tracker programs working lists. 

For tracker programs, you can now either complete or delete enrollments sumiltaneously on multiple Tracked entities. The actions will apply to the tracked entities selected in the working list. Supported on continuous release, 2.39 and above.

For Events programs, you can either complete or delete simultanously multiple events. The action will apply to those events selected in the working list.



#### [Multi-calendar in Capture app [ROADMAP-171]](https://dhis2.atlassian.net/browse/ROADMAP-171)

The web Capture App uses now the CalendarInput component. The CalendarInput is an input field with an integrated calendar picker. It combines the functionality of the Calendar component with an input field, allowing users to either type a date or select one from the calendar picker.  The calendar component enables data collection for dates and periods based on the calendar configured in System settings.



#### [Changelog enhancements [ROADMAP-328]](https://dhis2.atlassian.net/browse/ROADMAP-328)

The event changelog now includes also a history of changes to report date, scheduled date and geometry. In addition, you can filter changes by either user or data item.



#### [Show and filter on assigned user in Program stage working list [ROADMAP-327]](https://dhis2.atlassian.net/browse/ROADMAP-327)

The filtering options in working lists have been improved in the DHIS2 web capture App. You can now display and filter on assigned user at the program stage level.



#### [Display event's org unit in working lists [ROADMAP-213]](https://dhis2.atlassian.net/browse/ROADMAP-213)

In event and program stage working lists, you can display the organisation unit for the event as a column. This can be helpful if you are for example looking at all events assigned to you or available to you, but have access to several organisation units.


#### [Launch/Start page [ROADMAP-331]](https://dhis2.atlassian.net/browse/ROADMAP-331)

Now when entering the Capture app, the start page will give short, helpful text to guide the user to what the app is for, as well as a link to the user documentation.



#### [Related stages/Linked events enhancements [ROADMAP-330]](https://dhis2.atlassian.net/browse/ROADMAP-330)

There have been some enhancements to the related stages functionality in Tracker programs. You now have a two event workspace so you can see both events that are linked in one page, the related stages widget is visible on the registration page, as well as in the view event page and you are also able to unlink events.



#### [Breadcrumb bar for event and enrollment pages [ROADMAP-320]](https://dhis2.atlassian.net/browse/ROADMAP-320)

Breadcrum navigation has been added at the top of the event and enrollment pages. It tells the user the steps thy followed to reach the page where they are. Each item is actionable and will let them navigate across pages.



#### [Organisation unit contextualization [ROADMAP-316]](https://dhis2.atlassian.net/browse/ROADMAP-316)

You can now hover over organisation units in working lists, widget and forms and see the full organisation unit hierarchy for that org unit for additional context.



#### [Display event's org. unit in working lists [ROADMAP-213]](https://dhis2.atlassian.net/browse/ROADMAP-213)

In event and program stage working lists, you can display the organisation unit for the event as a column. This can be helpful if you are for example looking at all events assigned to you or available to you, but have access to several organisation units.



#### [Show org unit selector in all event forms [ROADMAP-332]](https://dhis2.atlassian.net/browse/ROADMAP-332)

You can now change the org unit in the form itself (instead of the context selector) when creating or editing an event. The org unit selector is displayed in the “Basic info“ section in the workspace.



### Android Capture App

#### [Home screen: responsive display of programs [ROADMAP-120]](https://dhis2.atlassian.net/browse/ROADMAP-120)

The home screen of the Android app will adjust automatically the display depending on the number of programs available. The purpose is to show the programs in bigger size and use all the available space on the screen when users only work with small numbers of programs, normally below 6 or 7.



#### [Quick Actions bar [ROADMAP-363]](https://dhis2.atlassian.net/browse/ROADMAP-363)

Allows users to configure and add "chips" representing different actions for easy access in the TEI Dashboard.



#### [Improved navigation bar [ROADMAP-262]](https://dhis2.atlassian.net/browse/ROADMAP-262)

A revamp of the menus and navigation bar has been made to be more user-friendly and accessible. It includes a cleaner, more modern look that improves readability and usability. These updates are designed to provide a more efficient and enjoyable user experience.



#### [Improvemets in capture coordinates: display GPS accuracy [ROADMAP-89]](https://dhis2.atlassian.net/browse/ROADMAP-89)

New Capture Coordinates process:  Introducing new features designed to enhance the capture coordinates process. These improvements aim to provide greater accuracy, flexibility, and control over location data capture.

Accuracy: The capture coordinates process now includes a feature that displays the precision of the captured location. This allows users to see how accurate their location data is in real-time. This parameter can also be restricted using the Android Settings WebApp.

Search Functionality: A new search functionality has been added, allowing users to look up specific locations by name or address. Users are also able to navigate through the map and perform area searches to discover other locations within a specified region. 

Block Manual Capture: Using the Android Settings Web App, administrators now have the option to block manual location capture. When this setting is enabled, users can only capture the current location and cannot manually select or search a different one. This ensures that location data remains consistent and accurate.



#### [Update scheduling dialog [ROADMAP-362]](https://dhis2.atlassian.net/browse/ROADMAP-362)

New intuitive and user-friendly schedule dialog has been implemented to enhance the booking, rescheduling, and canceling events.



#### [Improvements in transfer flow [ROADMAP-361]](https://dhis2.atlassian.net/browse/ROADMAP-361)

From 3.1, the transfer button moves to a more accessible location within the three dot menu in the TEI Dashboard and new dialogs are implemented to provide clear, step-by-step guidance.


#### [Improve Relationships in Tracker and event programs [ROADMAP-319]](https://dhis2.atlassian.net/browse/ROADMAP-319)

Relationship cards have been updated with the new design to offer a more intuitive and visually appealing. A new confirmation dialog also has been added when deleting a relationship.






## Analyze

### Data Visualizer

#### [Option set option counts in Data Visualizer [ROADMAP-157]](https://dhis2.atlassian.net/browse/ROADMAP-157)

Event data items (data elements and tracked entity attributes) that have an option set assigned gain extended functionality in the Data Visualizer data dialog. Users can choose which options to include and disaggregate on and the presentation mode (individually vs aggregated) for the selected options.



#### [Data definitions and information in data item selector  [ROADMAP-148]](https://dhis2.atlassian.net/browse/ROADMAP-148)

On the right of each data item in the selector there is now an information icon that can be clicked and a table with relevant information is shown. The information displayed depends on the item’s data type.



### Dashboard

#### [External Dashboard types (Superset) [ROADMAP-317]](https://dhis2.atlassian.net/browse/ROADMAP-317)

Many countries and organizations have their data spread out across multiple instances of DHIS2. Often, these instances are not synchronized in terms of metadata, which complicates integration and reporting. DHIS2 has not offered an easy way to present dashboards with data from multiple instances and different sources. This functionality implements support for embedding external Superset dashboards in our core dashboards app.



#### [Dashboard slideshow [ROADMAP-151]](https://dhis2.atlassian.net/browse/ROADMAP-151)

The dashboard can be displayed in a slideshow by clicking on the **Slideshow** button. When you enter the slideshow, you’ll find navigation buttons and an exit button in a navigation bar at the bottom of the page. You can also navigate with the forward and back arrow keys on the keyboard, and exit the slideshow with the **esc** key. Any filters that are applied will be displayed in the navigation bar. Note that messages and spacer items are not displayed in the slideshow.



#### [Updated Dashboard app design with improved user experience [ROADMAP-318]](https://dhis2.atlassian.net/browse/ROADMAP-318)

* **Streamlined dashboard bar:** We’ve moved to a single, fixed dashboard bar, freeing up valuable vertical space and ensuring it remains accessible as you scroll.
* **Efficient dashboard menu:** The list of available dashboards is now located in the left-hand menu, providing a faster and more intuitive way to search for dashboards.
* **Enhanced dashboard grid:** The grid now has a more modern look and makes better use of the available space.



#### [Allow custom plugins to be added to a dashboard [ROADMAP-334]](https://dhis2.atlassian.net/browse/ROADMAP-334)

The dashboard now supports custom plugins built with the app platform to be added  as dashboard items. These plugins offer more flexibility than the previous dashboard widgets, including more filtering support, custom titles, “open in app” options and better support of multiple of the same plugins being able to show different data.



#### [External Dashboard types (Superset) [ROADMAP-317]](https://dhis2.atlassian.net/browse/ROADMAP-317)

DHIS2 now supports displaying external dashboards through the bundled Dashboard app. This allows dashboards served from other platforms to appear side-by-side with standard DHIS2 dashboards. The first supported external dashboard type is Superset, using a connector contributed by BAO Systems.




### Maps

#### [Maps: Functional and UX Improvements [ROADMAP-354]](https://dhis2.atlassian.net/browse/ROADMAP-354)

* **Allow selecting the user org unit in combination with other org units and/or org unit levels:** You can now combine org unit selections by selecting user org unit as well as other org units and org unit levels in all layer types.
* **Support custom calculations**: You can now utilize custom calculations created in Data Visualization app in Maps app.
*  **Additional information in pop-up for Tracked Entity Layers:** Pop-up now displays Coordinates, Org Unit name and attributes if marked to be displayed in list (similarly to Event layer pop-ups).
* **Enhanced support for type of relationships in Tracked Entity layer:** Experimental relationships mapping now supports a broader variety of relationships definitions: unidirectional and bidirectional relationships and permutations of: same TrackedEntity type and same program (or program not specified), same TrackedEntity type but different program (or one program not specified) or different TrackedEntity types.



#### [Maps: Period selector for thematic layers [ROADMAP-315]](https://dhis2.atlassian.net/browse/ROADMAP-315)

The Period tab has been completely redesigned to improve flexibility and clarity:

* It now uses the same period selector as other analytics apps, allowing selection of multiple periods and support for non-Gregorian calendars.
* All Maps now handle multiple periods selections, including mixed selections of different period types, fixed and/or relative presets.
* Start and End Date inputs use the new standard calendar with improved data entry mask, which supports translations (currently limited to the Gregorian calendar).
* Mapping options (Single, Timeline, or Split Map) are now more clearly displayed with icons and improved information messages.



#### [Support enrollment coordinates in Maps app [ROADMAP-153]](https://dhis2.atlassian.net/browse/ROADMAP-153)

You can now use enrollment coordinates in the Event layer in the Maps app. In this way you can map events (and the associated information) but utilize the coordinate that was captured during program enrollment.



#### [Maps: Support additional EE layers and allow them to be toggled for each DHIS2 instance [ROADMAP-336]](https://dhis2.atlassian.net/browse/ROADMAP-336)

Administrators with the authority to manage external layers can now select layers (For example from Earth Engine) from catalogue to be visible or hidden from other maps app users.





## Extend

### DHIS2

### Dashboard

#### [Allow custom plugins to be added to a dashboard [ROADMAP-334]](https://dhis2.atlassian.net/browse/ROADMAP-334)

The dashboard now supports custom plugins built with the app platform to be added  as dashboard items. These plugins offer more flexibility than the previous dashboard widgets, including more filtering support, custom titles, “open in app” options and better support of multiple of the same plugins being able to show different data.



#### [Calendar component [ROADMAP-71]](https://dhis2.atlassian.net/browse/ROADMAP-71)

The DHIS2 UI library now provides a reusable Calendar component to input dates. Notably, it supports many calendar types, including Nepali and Ethiopian, which solves a localization challenge that many apps face when allowing users to input dates.



### Global (App Shell)

#### [Global app shell [ROADMAP-355]](https://dhis2.atlassian.net/browse/ROADMAP-355)

DHIS2 now features a Global App Shell, which serves as a container for any of the apps that are loaded. It ensures a consistent header bar and navigation interface across all apps and consolidates functionality that is required by all apps. It can be used to roll out new features to all apps at once, like the new Command Palette, and will be useful for deploying further technical upgrades to the app platform.

The introduction of the Global Shell brings with it also some design upgrades in the header bar: it is more compact to give more space to app content and includes a modern design for the user profile menu.



#### [FHIR IG Generator app [ROADMAP-360]](https://dhis2.atlassian.net/browse/ROADMAP-360)

The FHIR IG Generator app is now available on the App Hub. It provides a user interface for creating FHIR implementation guides based on DHIS2 tracker metadata. It also provides guidance for publishing that implementation guide with the help of an external tool like SUSHI.



#### [Route manager app [ROADMAP-358]](https://dhis2.atlassian.net/browse/ROADMAP-358)

The Route Manager app is now available on the App Hub. It provides a user interface for managing Routes, which are secure ways of connecting DHIS2 to external services. The app enables creating, editing, and deleting Route objects, and allows the user to configure the authentication parameters a Route uses, the authorities required to run that Route, and sharing settings for the Route object.



#### [New Routes API features [ROADMAP-357]](https://dhis2.atlassian.net/browse/ROADMAP-357)

Routes can now be set up with more authentication schemes: authentication by custom headers, query parameters, or OAuth2 Client Credentials is now supported, in addition to the HTTP Basic auth and API token methods available previously.

Routes can also now be configured with custom timeout limits: this decides the time that the DHIS2 server will wait for a response from an upstream service before returning a timeout error.



#### [Updated Datastore Management app [ROADMAP-356]](https://dhis2.atlassian.net/browse/ROADMAP-356)

The Datastore Management app has gotten an overhaul to introduce a modern design. Notable new features include the ability to manage user datastore objects and a user interface for managing sharing settings on datastore keys.






## Core / Platform

### DHIS2

#### [New Apps menu - Command pallete for keyboard controls and shortcuts navigation [ROADMAP-353]](https://dhis2.atlassian.net/browse/ROADMAP-353)

The DHIS2 Apps menu component has been updated. The new feature provides navigation to apps as before, and introduces actions and shortcuts. Shortcuts are “deep links” to sections of an app, for example a particular page in the Maintenance app. Apps can define their shortcuts in their configuration files, then they will be visible and searchable in the Command Palette. Actions are scripts or jobs that can be run anywhere, and could be tasks like clearing caches or running analytics.

It is keyboard navigable, and can be opened It can be opened by either the Ctrl K or Cmd K keyboard shortcut, depending on the user’s operating system. It can also be opened by clicking on the apps icon in the header bar.

#### [Integrate Kotlin multiplatform rule engine with Capture App [ROADMAP-333]](https://dhis2.atlassian.net/browse/ROADMAP-333)

The Web Capture App, the Android Capture App and backend use the same rule engine from v42. this ensures consistency in the program rules configuration and and how actions are triggered across all platforms.


#### [Export idScheme [ROADMAP-351]](https://dhis2.atlassian.net/browse/ROADMAP-351)

The IdScheme support in the old tracker endpoints and the new Tracker endpoints have been aligned. Until now, New Tracker endpoints only supported importing tracker data with different idSchemes, but not when exporting. Exporting with different idSchemes is supported now.

The query parameters implemented are idScheme, categoryOptionComboIdScheme, categoryOptionIdScheme, dataElementIdScheme, orgUnitIdScheme, programIdScheme, programStageIdScheme. And valid values are one of UID, CODE, NAME, ATTRIBUTE:{uid}. 

The default is UID. All (supported) metadata is exported using the {{idScheme}} value unless it is overridden by one of the metadata-specific parameters. There might be metadata that is always exported using UIDs. Please check the individual endpoint issues/docs for specifics.

Support of different idSchemes is added to {{/tracker/trackedEntities}} and {{/tracker/events}} endpoints.


#### [Spring Framework Upgrades [ROADMAP-350]](https://dhis2.atlassian.net/browse/ROADMAP-350)

Ongoing upgrades to the Spring framework ensure that the security of DHIS2 is maintained. During this release the engineering team has performed an upgrade to Spring 6, upgrade Spring Security, and integrated Spring Authorisation Server which enables for implementing mutil-factor authentication in the DHIS2 Android App.









# Analyze

## Android Capture

**[Integrate analytics into RTS module  [ROADMAP-266]](https://dhis2.atlassian.net/browse/ROADMAP-266)**

*no description placeholder*



## Dashboard

**[Allow custom plugins to be added to a dashboard [ROADMAP-334]](https://dhis2.atlassian.net/browse/ROADMAP-334)**

The dashboard now supports custom plugins built with the app platform to be added  as dashboard items.



**[Updated Dashboard app design with improved user experience [ROADMAP-318]](https://dhis2.atlassian.net/browse/ROADMAP-318)**

** **Streamlined dashboard bar:** We’ve moved to a single, fixed dashboard bar, freeing up valuable vertical space and ensuring it remains accessible as you scroll.
** **Efficient dashboard menu:** The list of available dashboards is now located in the left-hand menu, providing a faster and more intuitive way to search for dashboards.
** **Enhanced dashboard grid:* The grid now has a more modern look and makes better use of the available space.



**[Embedded Superset Dashboards  [ROADMAP-317]](https://dhis2.atlassian.net/browse/ROADMAP-317)**

Many countries and organizations have their data spread out across multiple instances of DHIS2. Often, these instances are not synchronized in terms of metadata, which complicates integration and reporting. DHIS2 has not offered an easy way to present dashboards with data from multiple instances. This functionality implements support for embedding external Superset dashboards in our core dashboards app.



**[Dashboard slideshow [ROADMAP-151]](https://dhis2.atlassian.net/browse/ROADMAP-151)**

The dashboard can be displayed in a slideshow by clicking on the **Slideshow** button. When you enter the slideshow, you’ll find navigation buttons and an exit button in a navigation bar at the bottom of the page. You can also navigate with the forward and back arrow keys on the keyboard, and exit the slideshow with the **esc** key. Any filters that are applied will be displayed in the navigation bar. Note that messages and spacer items are not displayed in the slideshow.



## Data Visualizer

**[Option set option counts in Data Visualizer [ROADMAP-157]](https://dhis2.atlassian.net/browse/ROADMAP-157)**

Event data items (data elements and tracked entity attributes) that have an option set assigned gain extended functionality in the Data Visualizer data dialog. Users can choose which options to include and disaggregate on and the presentation mode (individually vs aggregated) for the selected options.



**[Data definitions and information in data item selector  [ROADMAP-148]](https://dhis2.atlassian.net/browse/ROADMAP-148)**

On the right of each data item in the selector there is now an information icon that can be clicked and a table with relevant information is shown. The information displayed depends on the item’s data type.



## Maps

**[Maps: Functional and UX Improvements [ROADMAP-354]](https://dhis2.atlassian.net/browse/ROADMAP-354)**

** **Allow selecting the user org unit in combination with other org units and/or org unit levels:** You can now combine org unit selections by selecting user org unit as well as other org units and org unit levels in all layer types.
** **Support custom calculations**: You can now utilize custom calculations created in Data Visualization app in Maps app.
**  **Additional information in pop-up for Tracked Entity Layers:** Pop-up now displays Coordinates, Org Unit name and attributes if marked to be displayed in list (similarly to Event layer pop-ups).
** **Enhanced support for type of relationships in Tracked Entity layer:** Experimental relationships mapping now supports a broader variety of relationships definitions: unidirectional and bidirectional relationships and permutations of: same TrackedEntity type and same program (or program not specified), same TrackedEntity type but different program (or one program not specified) or different TrackedEntity types.



**[Maps: Support additional EE layers and allow them to be toggled for each DHIS2 instance [ROADMAP-336]](https://dhis2.atlassian.net/browse/ROADMAP-336)**

Administrators with the authority to manage external layers can now select layers (For example from Earth Engine) from catalogue to be visible or hidden from other maps app users.



**[Maps: Period selector for thematic layers [ROADMAP-315]](https://dhis2.atlassian.net/browse/ROADMAP-315)**

The Period tab has been completely redesigned to improve flexibility and clarity:

** It now uses the same period selector as other analytics apps, allowing selection of multiple periods and support for non-Gregorian calendars.
** All Maps now handle multiple periods selections, including mixed selections of different period types, fixed and/or relative presets.
** Start and End Date inputs use the new standard calendar with improved data entry mask, which supports translations (currently limited to the Gregorian calendar).
** Mapping options (Single, Timeline, or Split Map) are now more clearly displayed with icons and improved information messages.



**[Provide enrollment coordinates in maps [ROADMAP-153]](https://dhis2.atlassian.net/browse/ROADMAP-153)**

*no description placeholder*





# Collect (Aggregate)

## Android Capture

**[Improve design and user experience [ROADMAP-262]](https://dhis2.atlassian.net/browse/ROADMAP-262)**

*no description placeholder*



**[Home screen: responsive display of programs [ROADMAP-120]](https://dhis2.atlassian.net/browse/ROADMAP-120)**

The home screen of the Android app will adjust automatically the display depending on the number of programs available. The purpose is to show the programs in bigger size and use all the available space on the screen when users only work with small numbers of programs, normaly below 6 or 7.



**[Configurable Forms Functionality for data sets [ROADMAP-44]](https://dhis2.atlassian.net/browse/ROADMAP-44)**

*no description placeholder*



## Data Entry

**["Days after period to qualify for timely submission" and "Expiry days" supports number type values [ROADMAP-344]](https://dhis2.atlassian.net/browse/ROADMAP-344)**

When specifying the parameters for a data set, you can now use numbers (eg 0.5) for the "Days after period to qualify for timely submission" and “Expiry days”.

Willl meet usecase like eg In Sierra Leone, timely submission for weekly IDSR data is Monday at 12 (noon), which is 0.5 days after period end on Sunday midnight.

With DHIS2 increasingly being used for IDSR where rapid reporting etc are a must, this change will increasingly be used to set timeliness requirements less than one day, or in some cases e.g. 1.5 days.  Historically this parameter has been mostly used for timeliness of "long transaction" monthly aggregated data (the term "long transaction" is a term used for data processes that take considerable time - in the DHIS2 case typically 5-20 days after the end of the month). Disease surveillance data is different, because rapid submission of e.g. outbreak data is of vital importance for the early containment of epidemics. Such data is also increasingly being submitted directly from health facilities or clinicians, using browsers or the Android Capture app.



**[Configurable Forms Functionality for data sets [ROADMAP-44]](https://dhis2.atlassian.net/browse/ROADMAP-44)**

*no description placeholder*



## Maintenance

**["Days after period to qualify for timely submission" and "Expiry days" supports number type values [ROADMAP-344]](https://dhis2.atlassian.net/browse/ROADMAP-344)**

When specifying the parameters for a data set, you can now use numbers (eg 0.5) for the "Days after period to qualify for timely submission" and “Expiry days”.

Willl meet usecase like eg In Sierra Leone, timely submission for weekly IDSR data is Monday at 12 (noon), which is 0.5 days after period end on Sunday midnight.

With DHIS2 increasingly being used for IDSR where rapid reporting etc are a must, this change will increasingly be used to set timeliness requirements less than one day, or in some cases e.g. 1.5 days.  Historically this parameter has been mostly used for timeliness of "long transaction" monthly aggregated data (the term "long transaction" is a term used for data processes that take considerable time - in the DHIS2 case typically 5-20 days after the end of the month). Disease surveillance data is different, because rapid submission of e.g. outbreak data is of vital importance for the early containment of epidemics. Such data is also increasingly being submitted directly from health facilities or clinicians, using browsers or the Android Capture app.



## Web Capture

**[Multi-calendar in Capture app [ROADMAP-171]](https://dhis2.atlassian.net/browse/ROADMAP-171)**

The web Capture App uses now the CalendarInput component. The CalendarInput is an input field with an integrated calendar picker. It combines the functionality of the Calendar component with an input field, allowing users to either type a date or select one from the calendar picker.  The calendar component enables data collection for dates and periods based on the calendar configured in System settings.





# Collect (Individual)

## Android Capture

**[Improve Relationships in Tracker and event programs [ROADMAP-319]](https://dhis2.atlassian.net/browse/ROADMAP-319)**

Relationship cards have been updated with the new design to offer a more intuitive and visually appealing. A new confirmation dialog also has been added when deleting a relationship.



**[Improve design and user experience [ROADMAP-262]](https://dhis2.atlassian.net/browse/ROADMAP-262)**

*no description placeholder*



**[Home screen: responsive display of programs [ROADMAP-120]](https://dhis2.atlassian.net/browse/ROADMAP-120)**

The home screen of the Android app will adjust automatically the display depending on the number of programs available. The purpose is to show the programs in bigger size and use all the available space on the screen when users only work with small numbers of programs, normaly below 6 or 7.



**[Allow disabling choice of location on a map (capture only current location) [ROADMAP-92]](https://dhis2.atlassian.net/browse/ROADMAP-92)**

*no description placeholder*



**[Data entry: display GPS accuracy [ROADMAP-89]](https://dhis2.atlassian.net/browse/ROADMAP-89)**

*no description placeholder*



## Web Capture

**[Integrate Kotlin multiplatform rule engine with Capture App [ROADMAP-333]](https://dhis2.atlassian.net/browse/ROADMAP-333)**

The Web Capture App, the Android Capture App and backend use the same rule engine from v42. this ensures consistency in the program rules configuration and and how actions are triggered across all platforms.



**[Show org unit selector in all event forms [ROADMAP-332]](https://dhis2.atlassian.net/browse/ROADMAP-332)**

You can now change the org unit in the form itself (instead of the context selector) when creating or editing an event. The org unit selector is displayed in the “Basic info“ section in the workspace.



**[Launch/Start page [ROADMAP-331]](https://dhis2.atlassian.net/browse/ROADMAP-331)**

Now when entering the Capture app, the start page will give short, helpful text to guide the user to what the app is for, as well as a link to the user documentation.



**[Related stages/Linked events enhancements [ROADMAP-330]](https://dhis2.atlassian.net/browse/ROADMAP-330)**

There have been some enhancements to the related stages functionality in Tracker programs. You now have a two event workspace so you can see both events that are linked in one page, the related stages widget is visible on the registration page, as well as in the view event page and you are also able to unlink events.



**[Additional form field plugins in the Capture app - Working list [ROADMAP-329]](https://dhis2.atlassian.net/browse/ROADMAP-329)**

*no description placeholder*



**[Changelog enhancements [ROADMAP-328]](https://dhis2.atlassian.net/browse/ROADMAP-328)**

The event changelog now includes also a history of changes to report date, scheduled date and geometry. In addition, you can filter changes by either user or data item.



**[Show and filter on assigned user in Program stage working list [ROADMAP-327]](https://dhis2.atlassian.net/browse/ROADMAP-327)**

The filtering options in working lists have been improved in the DHIS2 web capture App. You can now display and filter on assigned user at the program stage level.



**[  Bulk Simple Operations in Capture [ROADMAP-325]](https://dhis2.atlassian.net/browse/ROADMAP-325)**

You can now perform bulk actions in event and tracker programs working lists. 

For tracker programs, you can now either complete or delete enrollments sumiltaneously on multiple Tracked entities. The actions will apply to the tracked entities selected in the working list. Supported on continuous release, 2.39 and above.

For Events programs, you can either complete or delete simultanously multiple events. The action will apply to those events selected in the working list.



**[Breadcrumb bar for event and enrollment pages [ROADMAP-320]](https://dhis2.atlassian.net/browse/ROADMAP-320)**

Breadcrum navigation has been added at the top of the event and enrollment pages. It tells the user the steps thy followed to reach the page where they are. Each item is actionable and will let them navigate across pages.



**[Organisation unit contextualization [ROADMAP-316]](https://dhis2.atlassian.net/browse/ROADMAP-316)**

You can now hover over organisation units in working lists, widget and forms and see the full organisation unit hierarchy for that org unit for additional context.



**[Row-based data entry interface for secondary data entry in tracker [ROADMAP-281]](https://dhis2.atlassian.net/browse/ROADMAP-281)**

*no description placeholder*



**[Make "Registering Unit" as option to include in data views for event programs in capture [ROADMAP-213]](https://dhis2.atlassian.net/browse/ROADMAP-213)**

*no description placeholder*



**[Multi-calendar in Capture app [ROADMAP-171]](https://dhis2.atlassian.net/browse/ROADMAP-171)**

The web Capture App uses now the CalendarInput component. The CalendarInput is an input field with an integrated calendar picker. It combines the functionality of the Calendar component with an input field, allowing users to either type a date or select one from the calendar picker.  The calendar component enables data collection for dates and periods based on the calendar configured in System settings.





# Configure (Metadata)

## Data Approval

**[Improvements to Data Approval App including adding AOCs  [ROADMAP-255]](https://dhis2.atlassian.net/browse/ROADMAP-255)**

*no description placeholder*



## Data Visualizer

**[Program Indicator Disaggregations [ROADMAP-73]](https://dhis2.atlassian.net/browse/ROADMAP-73)**

This feature enables the possibility of creating dissagregations for Program Indicators that match with existing category options, and combinations. Such dissagregation will facilitate analysisng Program Indicators by those disaggregation witih the analytics apps as well as aggregating the values and importing within an aggregated data model thourgh the exchange app (in the same or different instance).



## Maintenance

**[New Maintenance App continuous release [ROADMAP-182]](https://dhis2.atlassian.net/browse/ROADMAP-182)**

The Maintenance is being gradually reimplementend in its new and improved version. The new Maintenance web app is on continuous release and keeps being dynamically updated. For the time of this v42 release we can announce the implementation of the Data Element, Categories and Indicator type sections.



**[Program Indicator Disaggregations [ROADMAP-73]](https://dhis2.atlassian.net/browse/ROADMAP-73)**

This feature enables the possibility of creating dissagregations for Program Indicators that match with existing category options, and combinations. Such dissagregation will facilitate analysisng Program Indicators by those disaggregation witih the analytics apps as well as aggregating the values and importing within an aggregated data model thourgh the exchange app (in the same or different instance).



**[Metadata deduplication and merging [ROADMAP-39]](https://dhis2.atlassian.net/browse/ROADMAP-39)**

Merging of metadata is being gradually supported within DHIS2 core funcitonalities facilitating metadata cleanup operations. Backend supports merging the following metadata objetcs through the web API: Organisation Units, Data Eelements, Indicators, Indicator Types, Category options, Categories, Category Combinations, Category option combinations (limited to one use case, when the catoptcombination are the same).  Frontend support through the user interface is gradually implemented as well. So far the new Maintenance app supports meging options for Category option and Category option comninations, Indicators and Indicator types. In these cases the user is able to select the “source” object to merge and the “target” object to merge into.





# Configure (System)

## Android Capture

**[Webapp for Android Synchronization troubleshooting   [ROADMAP-69]](https://dhis2.atlassian.net/browse/ROADMAP-69)**

The new Synchronization Troubleshooting Web App provides implementation administrators real-time visibility and troubleshooting capabilities for synchronization errors occurring in the last 24 hours tracker or event programs. It will enable sys admins to analyze persisted Android sync error API responses. The app is available in the App hub and will require administrators to install it in their instances.



## Login

**[Email-based authentication codes for multi-factor authentication [ROADMAP-234]](https://dhis2.atlassian.net/browse/ROADMAP-234)**

From this version, DHIS2 also support email-based multi factor authentication (MFA). Email-based MFA should be configured at the system level and will be an option for the users when they are turning on MFA/2FA. If the user selects "Email", they system emails a one-time password to the provided email address.





# Core / Platform

## DHIS2

**[Improved header bar menu - Shortcuts and Deep Link navigation [ROADMAP-353]](https://dhis2.atlassian.net/browse/ROADMAP-353)**

The DHIS2 *headerbar menu* component has been updated to offer more keyboard controls, logout option, improved app navigation and shortcuts / deep Link navigation to sections within DHIS2 Apps. Examples include shortcuts with direct access  to sections within the Maintenance App such as Data elements or Data Sets maintenance.



**[Export idScheme [ROADMAP-351]](https://dhis2.atlassian.net/browse/ROADMAP-351)**

The IdScheme support in the old tracker endpoints and the new Tracker endpoints have been aligned. Until now, New Tracker endpoints only supported importing tracker data with different idSchemes, but not when exporting. Exporting with different idSchemes is supported now.

The query parameters implemented are idScheme, categoryOptionComboIdScheme, categoryOptionIdScheme, dataElementIdScheme, orgUnitIdScheme, programIdScheme, programStageIdScheme. And valid values are one of UID, CODE, NAME, ATTRIBUTE:{uid}. 

The default is UID. All (supported) metadata is exported using the {{idScheme}} value unless it is overridden by one of the metadata-specific parameters. There might be metadata that is always exported using UIDs. Please check the individual endpoint issues/docs for specifics.

Support of different idSchemes is added to {{/tracker/trackedEntities}} and {{/tracker/events}} endpoints.



**[Spring Framework Upgrades [ROADMAP-350]](https://dhis2.atlassian.net/browse/ROADMAP-350)**

Ongoing upgrades to the Spring framework ensure that the security of DHIS2 is maintained



**[Dedicated analytics backend database - Aggregated data [ROADMAP-49]](https://dhis2.atlassian.net/browse/ROADMAP-49)**

Support for Apache doris as dedicated analytics database architecture for aggregated data. Deploying a dedicated analytics database architecture is to improve performance in query executions and the Analytics table update time. It also represents a modernization of analytics backend code incorporating Object orientation and abstraction and improved test automation coverage.

Dedicated analytics database will be available for implementations to set up and test for aggregated data in v42 and individual data in v43.



## Web Capture

**[Integrate Kotlin multiplatform rule engine with Capture App [ROADMAP-333]](https://dhis2.atlassian.net/browse/ROADMAP-333)**

The Web Capture App, the Android Capture App and backend use the same rule engine from v42. this ensures consistency in the program rules configuration and and how actions are triggered across all platforms.





# Extend

## DHIS2

**[Multi calendar - Dates in APIs [ROADMAP-71]](https://dhis2.atlassian.net/browse/ROADMAP-71)**

*no description placeholder*



## Dashboard

**[Allow custom plugins to be added to a dashboard [ROADMAP-334]](https://dhis2.atlassian.net/browse/ROADMAP-334)**

The dashboard now supports custom plugins built with the app platform to be added  as dashboard items.



**[Embedded Superset Dashboards  [ROADMAP-317]](https://dhis2.atlassian.net/browse/ROADMAP-317)**

Many countries and organizations have their data spread out across multiple instances of DHIS2. Often, these instances are not synchronized in terms of metadata, which complicates integration and reporting. DHIS2 has not offered an easy way to present dashboards with data from multiple instances. This functionality implements support for embedding external Superset dashboards in our core dashboards app.



## Web Capture

**[Additional form field plugins in the Capture app - Working list [ROADMAP-329]](https://dhis2.atlassian.net/browse/ROADMAP-329)**

*no description placeholder*






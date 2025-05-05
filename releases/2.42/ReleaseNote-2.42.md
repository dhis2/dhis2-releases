# Analyze

## Android Capture

### [Integrate Resource Feature from Web Reports into DHIS2 Android App [ROADMAP-313]](https://dhis2.atlassian.net/browse/ROADMAP-313)

*no description placeholder*



### [Improve end-user config error feedback [ROADMAP-296]](https://dhis2.atlassian.net/browse/ROADMAP-296)

In some cases configuration errors leave empty screens in the Android Capture app, either because of empty forms or because of lack of access. From this version of the Android App the app will display explicit and understandable errors to the user, who will be able to effectively communicate with the administrator to fix the problem.



### [Improve App behaviour when working in offline mode  [ROADMAP-295]](https://dhis2.atlassian.net/browse/ROADMAP-295)

*no description placeholder*



### [Integrate analytics into RTS module  [ROADMAP-266]](https://dhis2.atlassian.net/browse/ROADMAP-266)

*no description placeholder*



### [Support dynamic modules/use cases [ROADMAP-264]](https://dhis2.atlassian.net/browse/ROADMAP-264)

*no description placeholder*



### [Improve maps design and user experience [ROADMAP-259]](https://dhis2.atlassian.net/browse/ROADMAP-259)

*no description placeholder*



### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [RTSM - Language translation of all UI elements  [ROADMAP-219]](https://dhis2.atlassian.net/browse/ROADMAP-219)

*no description placeholder*



### [Import/export App DB  [ROADMAP-210]](https://dhis2.atlassian.net/browse/ROADMAP-210)

As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of being unable to sync. With this functionality the end user will be able to export the local database and share it with an admin who will be able to import it for troubleshooting, being able to replicate the exact environment (database, device, configuration). The exported database is encrypted and the administrator will require the user credentials to be able to access the database.

As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of its nature and it would be easier to know what is the source by replicating in an exact environment (database, device, configuration). 

[Documentation](https://docs.dhis2.org/en/use/android-app/settings.html) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-210-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-210-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-210-Image02.png) 

**Expected behavior**

** Add an option in settings to export the database.
** Add an option in login to import a database.
**** Ask for permissions (user must provide the credentials to be able to import the DB)



### [Configurable basemap layer [ROADMAP-209]](https://dhis2.atlassian.net/browse/ROADMAP-209)

DHIS2 supports the configuration of custom map layers for the Maps Web App. From this version of the DHIS2 Android App, those custom layers will be downloaded and rendered in the Maps. The custom layers will be presented as additional layers to the default ones.

In some countries where there are political disputes about borders having a single source of maps (in our case Mapbox) can present a political issue and countries not adopting the app due to this.

DHIS2 server allows administrators to define different maps sources or specific border definitions (include reference to this in the documentation) and the App should do the same to avoid these conflicts. Ideally, the App should read the configuration from the backend an adapt the maps displayed in it.

[Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#map-layers) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-209-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-209-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-209-Image02.png)



### [Improve app navigation performance for high number of TEIs  [ROADMAP-208]](https://dhis2.atlassian.net/browse/ROADMAP-208)

Implementations are more and more demanding in terms of offline need of individual records. This version of the app has been reviewed to optimize performance when there are big numbers of TEIs downloaded locally.



### [Line listing analytics in Android [ROADMAP-206]](https://dhis2.atlassian.net/browse/ROADMAP-206)

This version of the Android App includes the possibility to render and display line listing as part of the offline analytics functionalities. The line list has to be created using the Line Listing DHIS2 web App, and then configured to be displayed in Android using the Android Settings Web App (ASWA), as any other offline analytics in Android. In this case Line lists can be displayed in the home screen, and event or tracker programs (as they do not really apply to aggregated data, they are not displayed in Datasets). Users will be able to search by period, Org. unit, or any of the columns added in the Line List.

There are some limitations to the line lists to be displayed in the Android App. The Org. units and Periods must be relative, not fixed. And there is a maximum number of columns of 15.  Android Local Analytics are built using local data, and wil, update instantly as more data gets collected (or downloaded) in the device. The App will display a maximum of 500 rows and will inform the user when the limit is reached.

[Documentation](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#capture*app*visual*event*visualizations) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-206-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-206-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-206-Image02.png) | [3](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-206-Image03.png)

## 🎯 High Level use case 

In the context of a health facility stock control, any user of the mobile app should be able to view a complete record of all past transactions in order to replace the paper stock card with a digital stock card. When users have limited Internet connectivity the mobile app is intended to primarily be used off-line and users are expected to synchronize their local database with the server (only) about once a day.

In the context of a health program, listing people who need following up, e.g. defaulters, at the community level would allow for follow-ups when tracking services and monitoring patients. Particualry useful when dealing with data like TB, HIV etc

## :people*holding*hands: Users description

Community health worker, facility health worker, logisitican or person in change of warehouse and pharmacy stocks. 

❓ Problem Description

Currentrly there is no solution to display a list of cases or transactions that works in offline settings to be able to continue providing services and analyssing the data when internet is nto available for proplonged periods of time, 

🤔 Assumptions

Not identified.

## ℹ️ Sources

This is a request from LMIS is well documented in the linked Jira issue. 

Health program related use case comes from the community inputs. 

## (!) Out of Scope

It is not possible to implement the complete functionality of the Linelisting web app. The features/limitations are 

** Max. 500 lines per table
** Max. 15 columns 
** There will be search/filter by column - including org. unit and event date

  

(?) Open Questions

|**Question**|**Answer**|**Date Answered*|
| | |Type // to add a date|



### [Line Listing app - cascading multi-level sorting according to order of columns [ROADMAP-199]](https://dhis2.atlassian.net/browse/ROADMAP-199)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Display misconfigured Program Indicators in troubleshooting section [ROADMAP-98]](https://dhis2.atlassian.net/browse/ROADMAP-98)

*no description placeholder*



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*



## DHIS2

### [Org Units Favorites Feature Request [ROADMAP-311]](https://dhis2.atlassian.net/browse/ROADMAP-311)

*no description placeholder*



### [Implement Wild Card Search and Best Match Functionality in DHIS2 Data Entry App/ Data Visualizer for Organisation Units [ROADMAP-297]](https://dhis2.atlassian.net/browse/ROADMAP-297)

*no description placeholder*



### [Workflow-based platform entrypoint for accessing all DHIS2 functionality [ROADMAP-287]](https://dhis2.atlassian.net/browse/ROADMAP-287)

*no description placeholder*



### [Create a new combined event reports and visualizer application [ROADMAP-256]](https://dhis2.atlassian.net/browse/ROADMAP-256)

*no description placeholder*



### [Make it more intuitive to filter organization units [ROADMAP-246]](https://dhis2.atlassian.net/browse/ROADMAP-246)

*no description placeholder*



### [Indicators calculating values across Data element groups [ROADMAP-198]](https://dhis2.atlassian.net/browse/ROADMAP-198)

*no description placeholder*



### [Dashboard email push (Push Analytics) [ROADMAP-149]](https://dhis2.atlassian.net/browse/ROADMAP-149)

*no description placeholder*



### [Tracker analytics stability improvements [ROADMAP-142]](https://dhis2.atlassian.net/browse/ROADMAP-142)

*no description placeholder*



### [Tracker analytics performance improvements [ROADMAP-141]](https://dhis2.atlassian.net/browse/ROADMAP-141)

*no description placeholder*



### [Improved public portal support [ROADMAP-74]](https://dhis2.atlassian.net/browse/ROADMAP-74)

*no description placeholder*



## Dashboard

### [Allow custom plugins to be added to a dashboard [ROADMAP-334]](https://dhis2.atlassian.net/browse/ROADMAP-334)

The dashboard now supports custom plugins built with the app platform to be added  as dashboard items.

[Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/dashboards.html#adding-items-to-the-dashboard) | Feature card | Screenshot 1 | 2 | 3



### [Updated Dashboard app design with improved user experience [ROADMAP-318]](https://dhis2.atlassian.net/browse/ROADMAP-318)

** **Streamlined dashboard bar:** We’ve moved to a single, fixed dashboard bar, freeing up valuable vertical space and ensuring it remains accessible as you scroll.
** **Efficient dashboard menu:** The list of available dashboards is now located in the left-hand menu, providing a faster and more intuitive way to search for dashboards.
** **Enhanced dashboard grid:* The grid now has a more modern look and makes better use of the available space.

Feature card | Screenshot 1 | 2 | 3

!e6b13548fe58aa826f2d73eb05dd896f0907182c*2*1000x564.jpeg|width=1000,height=564,alt="image"!

!f04cc5e0cd1241501d00ccadedb16aa0e6de2c6d*2*1000x199.png|width=1000,height=199,alt="image"!

!451e0aee4c276abcdb94b036d80c0246598e34b9*2*1000x242.jpeg|width=1000,height=242,alt="image"!



### [Embedded Superset Dashboards  [ROADMAP-317]](https://dhis2.atlassian.net/browse/ROADMAP-317)

Many countries and organizations have their data spread out across multiple instances of DHIS2. Often, these instances are not synchronized in terms of metadata, which complicates integration and reporting. DHIS2 has not offered an easy way to present dashboards with data from multiple instances. This functionality implements support for embedding external Superset dashboards in our core dashboards app.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Dashboard Groups (UX, Sharing, etc.) [ROADMAP-312]](https://dhis2.atlassian.net/browse/ROADMAP-312)

*no description placeholder*



### [Add tooltips to dashboard cards [ROADMAP-245]](https://dhis2.atlassian.net/browse/ROADMAP-245)

*no description placeholder*



### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [Active hierarchy: management of closed OUs in data entry/analysis apps [ROADMAP-228]](https://dhis2.atlassian.net/browse/ROADMAP-228)

*no description placeholder*



### [Series color for visualization [ROADMAP-212]](https://dhis2.atlassian.net/browse/ROADMAP-212)

*no description placeholder*



### [Make white the background color for dashboards [ROADMAP-169]](https://dhis2.atlassian.net/browse/ROADMAP-169)

*no description placeholder*



### [Dashboard organizational layer/Grouping dashboards [ROADMAP-168]](https://dhis2.atlassian.net/browse/ROADMAP-168)

*no description placeholder*



### [Collapsible Sections within a dashboard [ROADMAP-167]](https://dhis2.atlassian.net/browse/ROADMAP-167)

*no description placeholder*



### [Move dashboard filtering to sidebar [ROADMAP-166]](https://dhis2.atlassian.net/browse/ROADMAP-166)

*no description placeholder*



### [Show details and interpretations full screen [ROADMAP-165]](https://dhis2.atlassian.net/browse/ROADMAP-165)

*no description placeholder*



### [Custom titles for dashboard items [ROADMAP-164]](https://dhis2.atlassian.net/browse/ROADMAP-164)

*no description placeholder*



### [Dashboard item transparent background color [ROADMAP-163]](https://dhis2.atlassian.net/browse/ROADMAP-163)

*no description placeholder*



### [Toggle on and off visualization title on dashboards [ROADMAP-162]](https://dhis2.atlassian.net/browse/ROADMAP-162)

*no description placeholder*



### [Tabs on the dashboard [ROADMAP-161]](https://dhis2.atlassian.net/browse/ROADMAP-161)

*no description placeholder*



### [Dashboard slideshow [ROADMAP-151]](https://dhis2.atlassian.net/browse/ROADMAP-151)

The dashboard can be displayed in a slideshow by clicking on the **Slideshow** button. When you enter the slideshow, you’ll find navigation buttons and an exit button in a navigation bar at the bottom of the page. You can also navigate with the forward and back arrow keys on the keyboard, and exit the slideshow with the **esc** key. Any filters that are applied will be displayed in the navigation bar. Note that messages and spacer items are not displayed in the slideshow.

#### [Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/dashboards.html#dashboard-slideshow) | Feature card | Screenshot 1 | 2 | 3

!7340e4e97d0d71f36c009bf2c1fb6a4d647ddfb0*2*1000x158.jpeg|width=1000,height=158,alt="Slideshow button"!

*Slideshow button*

!3b7a068361b9d18cb656637d4a8b80cc98215884*2*1000x157.png|width=1000,height=157,alt="Slideshow navigation bar"!

*Slideshow navigation bar*



### [Dashboard email push (Push Analytics) [ROADMAP-149]](https://dhis2.atlassian.net/browse/ROADMAP-149)

*no description placeholder*



### [Improved public portal support [ROADMAP-74]](https://dhis2.atlassian.net/browse/ROADMAP-74)

*no description placeholder*



## Data Entry

### [Analysis of text option sets together [ROADMAP-254]](https://dhis2.atlassian.net/browse/ROADMAP-254)

*no description placeholder*



### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Data Exchange

### [Tracker to aggregate [ROADMAP-270]](https://dhis2.atlassian.net/browse/ROADMAP-270)

*no description placeholder*



## Data Visualizer

### [Option to have "data not accessible/not assessed/not reliable enough" for the data elements [ROADMAP-299]](https://dhis2.atlassian.net/browse/ROADMAP-299)

*no description placeholder*



### [Analysis of text option sets together [ROADMAP-254]](https://dhis2.atlassian.net/browse/ROADMAP-254)

*no description placeholder*



### [Search function on OUs in visualizer [ROADMAP-236]](https://dhis2.atlassian.net/browse/ROADMAP-236)

*no description placeholder*



### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Active hierarchy: management of closed OUs in data entry/analysis apps [ROADMAP-228]](https://dhis2.atlassian.net/browse/ROADMAP-228)

*no description placeholder*



### [Different OU levels allowed in single value charts [ROADMAP-223]](https://dhis2.atlassian.net/browse/ROADMAP-223)

*no description placeholder*



### [Clickthrough from LineList to TEI dashboard [ROADMAP-214]](https://dhis2.atlassian.net/browse/ROADMAP-214)

*no description placeholder*



### [Series color for visualization [ROADMAP-212]](https://dhis2.atlassian.net/browse/ROADMAP-212)

*no description placeholder*



### [Spline chart type in data visualizer [ROADMAP-185]](https://dhis2.atlassian.net/browse/ROADMAP-185)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Tracked entity ownership organization unit dimension in analytics apps [ROADMAP-159]](https://dhis2.atlassian.net/browse/ROADMAP-159)

*no description placeholder*



### [Option set option counts in Data Visualizer [ROADMAP-157]](https://dhis2.atlassian.net/browse/ROADMAP-157)

Event data items (data elements and tracked entity attributes) that have an option set assigned gain extended functionality in the Data Visualizer data dialog. Users can choose which options to include and disaggregate on and the presentation mode (individually vs aggregated) for the selected options. 

[Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/data-visualizer.html#select-options-from-an-option-set) | Feature card | Screenshot 1 | 2 | 3



### [Data definitions and information in data item selector  [ROADMAP-148]](https://dhis2.atlassian.net/browse/ROADMAP-148)

On the right of each data item in the selector there is now an information icon that can be clicked and a table with relevant information is shown. The information displayed depends on the item’s data type.

[Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/data-visualizer.html#display-information-about-a-data-item) | Feature card | Screenshot 1 | 2 | 3

!1ea34e628336201622745c3ccbdfcb113efcc0c1*2*1000x572.png|width=1000,height=572,alt="image"!

!23bb9fe4ce3e93c9e021e2313d5270e7efca6091*2*1000x572.png|width=1000,height=572,alt="image"!

!695c6472cd68e1d8e11980e8cc14cbe1f238f97e*2*1000x572.png|width=1000,height=572,alt="image"!



### [Cumulative values in pivot tables [ROADMAP-147]](https://dhis2.atlassian.net/browse/ROADMAP-147)

*no description placeholder*



### [Outlier tables in Data Visualizer [ROADMAP-146]](https://dhis2.atlassian.net/browse/ROADMAP-146)

*no description placeholder*



### [Two value chart types in data visualizer [ROADMAP-145]](https://dhis2.atlassian.net/browse/ROADMAP-145)

*no description placeholder*



### [Solution for restricting access to sensitive tracker data (Non-analyzable attributes) [ROADMAP-80]](https://dhis2.atlassian.net/browse/ROADMAP-80)

*no description placeholder*



## Global (App Shell)

### [Customizable bundled contextualized documentation [ROADMAP-285]](https://dhis2.atlassian.net/browse/ROADMAP-285)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Import/Export

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Line Listing

### [Option to have "data not accessible/not assessed/not reliable enough" for the data elements [ROADMAP-299]](https://dhis2.atlassian.net/browse/ROADMAP-299)

*no description placeholder*



### [Unified query language to align Line Lists with Program Indicators [ROADMAP-292]](https://dhis2.atlassian.net/browse/ROADMAP-292)

*no description placeholder*



### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Active hierarchy: management of closed OUs in data entry/analysis apps [ROADMAP-228]](https://dhis2.atlassian.net/browse/ROADMAP-228)

*no description placeholder*



### [Include "Created on" date as global dimension in line list [ROADMAP-195]](https://dhis2.atlassian.net/browse/ROADMAP-195)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Tracked entity ownership organization unit dimension in analytics apps [ROADMAP-159]](https://dhis2.atlassian.net/browse/ROADMAP-159)

*no description placeholder*



### [Tracked entity count based upon event and enrollment line lists (single value chart type in linelisting app) [ROADMAP-144]](https://dhis2.atlassian.net/browse/ROADMAP-144)

*no description placeholder*



### [Tracked Entity / cross program line lists [ROADMAP-143]](https://dhis2.atlassian.net/browse/ROADMAP-143)

*no description placeholder*



### [Solution for restricting access to sensitive tracker data (Non-analyzable attributes) [ROADMAP-80]](https://dhis2.atlassian.net/browse/ROADMAP-80)

*no description placeholder*



### [Relationships based line lists [ROADMAP-76]](https://dhis2.atlassian.net/browse/ROADMAP-76)

*no description placeholder*



## Maintenance

### [Unified query language to align Line Lists with Program Indicators [ROADMAP-292]](https://dhis2.atlassian.net/browse/ROADMAP-292)

*no description placeholder*



### [Program Indicator Issues [ROADMAP-272]](https://dhis2.atlassian.net/browse/ROADMAP-272)

*no description placeholder*



### [Copy of Tracker to aggregate [ROADMAP-271]](https://dhis2.atlassian.net/browse/ROADMAP-271)

*no description placeholder*



### [Tracker to aggregate [ROADMAP-270]](https://dhis2.atlassian.net/browse/ROADMAP-270)

*no description placeholder*



### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Improve Master Facility List capabilities: [ROADMAP-181]](https://dhis2.atlassian.net/browse/ROADMAP-181)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Display misconfigured Program Indicators in troubleshooting section [ROADMAP-98]](https://dhis2.atlassian.net/browse/ROADMAP-98)

*no description placeholder*



## Maps

### [Maps: Functional and UX Improvements [ROADMAP-354]](https://dhis2.atlassian.net/browse/ROADMAP-354)

** **Allow selecting the user org unit in combination with other org units and/or org unit levels:** You can now combine org unit selections by selecting user org unit as well as other org units and org unit levels in all layer types.
** **Support custom calculations**: You can now utilize custom calculations created in Data Visualization app in Maps app.
**  **Additional information in pop-up for Tracked Entity Layers:** Pop-up now displays Coordinates, Org Unit name and attributes if marked to be displayed in list (similarly to Event layer pop-ups).
** **Enhanced support for type of relationships in Tracked Entity layer:** Experimental relationships mapping now supports a broader variety of relationships definitions: unidirectional and bidirectional relationships and permutations of: same TrackedEntity type and same program (or program not specified), same TrackedEntity type but different program (or one program not specified) or different TrackedEntity types.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Maps: Support additional EE layers and allow them to be toggled for each DHIS2 instance [ROADMAP-336]](https://dhis2.atlassian.net/browse/ROADMAP-336)

Administrators with the authority to manage external layers can now select layers (For example from Earth Engine) from catalogue to be visible or hidden from other maps app users.

[Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/maps.html#maps*app*administrator) | Feature card | Screenshot 1 | 2 | 3



### [Map layers configurations - Data item selector - Harmonization with other analytics applications [ROADMAP-335]](https://dhis2.atlassian.net/browse/ROADMAP-335)

*no description placeholder*



### [Maps: Period selector for thematic layers [ROADMAP-315]](https://dhis2.atlassian.net/browse/ROADMAP-315)

The Period tab has been completely redesigned to improve flexibility and clarity:

** It now uses the same period selector as other analytics apps, allowing selection of multiple periods and support for non-Gregorian calendars.
** All Maps now handle multiple periods selections, including mixed selections of different period types, fixed and/or relative presets.
** Start and End Date inputs use the new standard calendar with improved data entry mask, which supports translations (currently limited to the Gregorian calendar).
** Mapping options (Single, Timeline, or Split Map) are now more clearly displayed with icons and improved information messages.

[Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/maps.html#create-a-thematic-layer) | Feature card | Screenshot 1 | 2 | 3



### [Display only relevant periods for data analysis [ROADMAP-322]](https://dhis2.atlassian.net/browse/ROADMAP-322)

*no description placeholder*



### [Option to have "data not accessible/not assessed/not reliable enough" for the data elements [ROADMAP-299]](https://dhis2.atlassian.net/browse/ROADMAP-299)

*no description placeholder*



### [Custom map layers as a new extension point [ROADMAP-290]](https://dhis2.atlassian.net/browse/ROADMAP-290)

*no description placeholder*



### [Climate/enviromental Layers in DHIS2 Maps [ROADMAP-257]](https://dhis2.atlassian.net/browse/ROADMAP-257)

*no description placeholder*



### [Maps App - Search for an indicator or a data element within the layer [ROADMAP-240]](https://dhis2.atlassian.net/browse/ROADMAP-240)

*no description placeholder*



### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Improve Thematic layer and show value on the Map [ROADMAP-229]](https://dhis2.atlassian.net/browse/ROADMAP-229)

*no description placeholder*



### [Active hierarchy: management of closed OUs in data entry/analysis apps [ROADMAP-228]](https://dhis2.atlassian.net/browse/ROADMAP-228)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Tracked entity ownership organization unit dimension in analytics apps [ROADMAP-159]](https://dhis2.atlassian.net/browse/ROADMAP-159)

*no description placeholder*



### [Increased granularity/options for periodicity in Maps App for Climate layers from GEE [ROADMAP-154]](https://dhis2.atlassian.net/browse/ROADMAP-154)

*no description placeholder*



### [Provide enrollment coordinates in maps [ROADMAP-153]](https://dhis2.atlassian.net/browse/ROADMAP-153)

*no description placeholder*



### [Filtering event-layer maps by attribute categories [ROADMAP-152]](https://dhis2.atlassian.net/browse/ROADMAP-152)

*no description placeholder*



## Reports

### [Integrate Resource Feature from Web Reports into DHIS2 Android App [ROADMAP-313]](https://dhis2.atlassian.net/browse/ROADMAP-313)

*no description placeholder*



### [Enable an overview of the reporting rate summary for all of the data sets assigned to a facility at the same time [ROADMAP-233]](https://dhis2.atlassian.net/browse/ROADMAP-233)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Scheduler

### [Dashboard email push (Push Analytics) [ROADMAP-149]](https://dhis2.atlassian.net/browse/ROADMAP-149)

*no description placeholder*



## Usage Analytics

### [Extend Usage Analytics App to include disaggregation by organization units    [ROADMAP-197]](https://dhis2.atlassian.net/browse/ROADMAP-197)

*no description placeholder*



### [Enhance Usage Analytics for monitoring [ROADMAP-160]](https://dhis2.atlassian.net/browse/ROADMAP-160)

*no description placeholder*



## Web Capture

### [Unified query language to align Line Lists with Program Indicators [ROADMAP-292]](https://dhis2.atlassian.net/browse/ROADMAP-292)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*





# Collect (Aggregate)

## Android Capture

### [Improve end-user config error feedback [ROADMAP-296]](https://dhis2.atlassian.net/browse/ROADMAP-296)

In some cases configuration errors leave empty screens in the Android Capture app, either because of empty forms or because of lack of access. From this version of the Android App the app will display explicit and understandable errors to the user, who will be able to effectively communicate with the administrator to fix the problem.



### [Improve App behaviour when working in offline mode  [ROADMAP-295]](https://dhis2.atlassian.net/browse/ROADMAP-295)

*no description placeholder*



### [Support dynamic modules/use cases [ROADMAP-264]](https://dhis2.atlassian.net/browse/ROADMAP-264)

*no description placeholder*



### [Improve design and user experience [ROADMAP-262]](https://dhis2.atlassian.net/browse/ROADMAP-262)

*no description placeholder*



### [Improve user experience for the Completion of Datasets and Events   [ROADMAP-260]](https://dhis2.atlassian.net/browse/ROADMAP-260)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Username DE to automatically complete the current user’s username [ROADMAP-224]](https://dhis2.atlassian.net/browse/ROADMAP-224)

*no description placeholder*



### [Digit group separator in Data Entry forms, Capture app, Tracker Capture app in Capture Android app  [ROADMAP-221]](https://dhis2.atlassian.net/browse/ROADMAP-221)

*no description placeholder*



### [RTSM - Language translation of all UI elements  [ROADMAP-219]](https://dhis2.atlassian.net/browse/ROADMAP-219)

*no description placeholder*



### [RTSM - Batch number and expiry date management  [ROADMAP-218]](https://dhis2.atlassian.net/browse/ROADMAP-218)

*no description placeholder*



### [Import/export App DB  [ROADMAP-210]](https://dhis2.atlassian.net/browse/ROADMAP-210)

As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of being unable to sync. With this functionality the end user will be able to export the local database and share it with an admin who will be able to import it for troubleshooting, being able to replicate the exact environment (database, device, configuration). The exported database is encrypted and the administrator will require the user credentials to be able to access the database.

As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of its nature and it would be easier to know what is the source by replicating in an exact environment (database, device, configuration). 

[Documentation](https://docs.dhis2.org/en/use/android-app/settings.html) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-210-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-210-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-210-Image02.png) 

**Expected behavior**

** Add an option in settings to export the database.
** Add an option in login to import a database.
**** Ask for permissions (user must provide the credentials to be able to import the DB)



### [Improve app navigation performance for high number of TEIs  [ROADMAP-208]](https://dhis2.atlassian.net/browse/ROADMAP-208)

Implementations are more and more demanding in terms of offline need of individual records. This version of the app has been reviewed to optimize performance when there are big numbers of TEIs downloaded locally.



### [Custom icons [ROADMAP-207]](https://dhis2.atlassian.net/browse/ROADMAP-207)

DHIS2 2 now supports uploading custom Icons to be used in addition to the built in Icon library. This is useful for use cases not related to health or that require very specific iconography. The Android App will render the custom icons that need to be uploaded and configured using the Maintenance DHIS2 Web App.

[Documentation](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#capture*app*visual*icon*lib) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-207-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-207-Image01.png)



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Home screen: responsive display of programs [ROADMAP-120]](https://dhis2.atlassian.net/browse/ROADMAP-120)

The home screen of the Android app will adjust automatically the display depending on the number of programs available. The purpose is to show the programs in bigger size and use all the available space on the screen when users only work with small numbers of programs, normaly below 6 or 7. 

[Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture*app*programs*common*features_relationships) | Feature card | Screenshot 1 | 2 | 3



### [Geolocation monitoring [ROADMAP-111]](https://dhis2.atlassian.net/browse/ROADMAP-111)

*no description placeholder*



### [Automatic deletion of synced data [ROADMAP-110]](https://dhis2.atlassian.net/browse/ROADMAP-110)

*no description placeholder*



### [Bulk data tranfer device to device [ROADMAP-109]](https://dhis2.atlassian.net/browse/ROADMAP-109)

*no description placeholder*



### [Implement Sync mode ASAP [ROADMAP-108]](https://dhis2.atlassian.net/browse/ROADMAP-108)

*no description placeholder*



### [Implement App notifications [ROADMAP-107]](https://dhis2.atlassian.net/browse/ROADMAP-107)

*no description placeholder*



### [Add search box in long forms [ROADMAP-104]](https://dhis2.atlassian.net/browse/ROADMAP-104)

*no description placeholder*



### [Integration QR/Barcode readers for mobile Bluetooth devices [ROADMAP-96]](https://dhis2.atlassian.net/browse/ROADMAP-96)

*no description placeholder*



### [Data entry by reading RFID tags [ROADMAP-94]](https://dhis2.atlassian.net/browse/ROADMAP-94)

*no description placeholder*



### [Implement Text speech to fill the data on the table. [ROADMAP-93]](https://dhis2.atlassian.net/browse/ROADMAP-93)

*no description placeholder*



### [Sync: use SMS as default transmisison layer [ROADMAP-91]](https://dhis2.atlassian.net/browse/ROADMAP-91)

*no description placeholder*



### [Automatic log out after few hours of inactivity on Android capture app [ROADMAP-90]](https://dhis2.atlassian.net/browse/ROADMAP-90)

*no description placeholder*



### [Custom images [ROADMAP-55]](https://dhis2.atlassian.net/browse/ROADMAP-55)

*no description placeholder*



### [Configurable Forms Functionality for data sets [ROADMAP-44]](https://dhis2.atlassian.net/browse/ROADMAP-44)

*no description placeholder*



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*



## DHIS2

### [Org Units Favorites Feature Request [ROADMAP-311]](https://dhis2.atlassian.net/browse/ROADMAP-311)

*no description placeholder*



### [Implement Wild Card Search and Best Match Functionality in DHIS2 Data Entry App/ Data Visualizer for Organisation Units [ROADMAP-297]](https://dhis2.atlassian.net/browse/ROADMAP-297)

*no description placeholder*



### [Workflow-based platform entrypoint for accessing all DHIS2 functionality [ROADMAP-287]](https://dhis2.atlassian.net/browse/ROADMAP-287)

*no description placeholder*



### [Unified entrypoint for all data entry (individual and aggregate) [ROADMAP-286]](https://dhis2.atlassian.net/browse/ROADMAP-286)

*no description placeholder*



### [Make it more intuitive to filter organization units [ROADMAP-246]](https://dhis2.atlassian.net/browse/ROADMAP-246)

*no description placeholder*



### [Support event hook notifications for data [ROADMAP-192]](https://dhis2.atlassian.net/browse/ROADMAP-192)

*no description placeholder*



## Data Approval

### [ Data Approval analytics: possible to see completion and approval  status in dashboard  [ROADMAP-305]](https://dhis2.atlassian.net/browse/ROADMAP-305)

*no description placeholder*



## Data Entry

### ["Days after period to qualify for timely submission" and "Expiry days" supports number type values [ROADMAP-344]](https://dhis2.atlassian.net/browse/ROADMAP-344)

When specifying the parameters for a data set, you can now use numbers (eg 0.5) for the "Days after period to qualify for timely submission" and “Expiry days”.

Willl meet usecase like eg In Sierra Leone, timely submission for weekly IDSR data is Monday at 12 (noon), which is 0.5 days after period end on Sunday midnight.

With DHIS2 increasingly being used for IDSR where rapid reporting etc are a must, this change will increasingly be used to set timeliness requirements less than one day, or in some cases e.g. 1.5 days.  Historically this parameter has been mostly used for timeliness of "long transaction" monthly aggregated data (the term "long transaction" is a term used for data processes that take considerable time - in the DHIS2 case typically 5-20 days after the end of the month). Disease surveillance data is different, because rapid submission of e.g. outbreak data is of vital importance for the early containment of epidemics. Such data is also increasingly being submitted directly from health facilities or clinicians, using browsers or the Android Capture app.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Analysis of text option sets together [ROADMAP-254]](https://dhis2.atlassian.net/browse/ROADMAP-254)

*no description placeholder*



### [Autofill zero's into large form [ROADMAP-238]](https://dhis2.atlassian.net/browse/ROADMAP-238)

*no description placeholder*



### [Fluid Forms [ROADMAP-232]](https://dhis2.atlassian.net/browse/ROADMAP-232)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Username DE to automatically complete the current user’s username [ROADMAP-224]](https://dhis2.atlassian.net/browse/ROADMAP-224)

*no description placeholder*



### [Digit group separator in Data Entry forms, Capture app, Tracker Capture app in Capture Android app  [ROADMAP-221]](https://dhis2.atlassian.net/browse/ROADMAP-221)

*no description placeholder*



### [Combine aggregate and tracker data in one data entry form [ROADMAP-175]](https://dhis2.atlassian.net/browse/ROADMAP-175)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [WHODrug data entry [ROADMAP-87]](https://dhis2.atlassian.net/browse/ROADMAP-87)

*no description placeholder*



### [Data Entry App support for legacy custom forms [ROADMAP-45]](https://dhis2.atlassian.net/browse/ROADMAP-45)

*no description placeholder*



### [Configurable Forms Functionality for data sets [ROADMAP-44]](https://dhis2.atlassian.net/browse/ROADMAP-44)

*no description placeholder*



## Data Visualizer

### [Analysis of text option sets together [ROADMAP-254]](https://dhis2.atlassian.net/browse/ROADMAP-254)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Global (App Shell)

### [Customizable bundled contextualized documentation [ROADMAP-285]](https://dhis2.atlassian.net/browse/ROADMAP-285)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Import/Export

### [Support validation and metadata quality checks prior to import [ROADMAP-179]](https://dhis2.atlassian.net/browse/ROADMAP-179)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Line Listing

### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Maintenance

### ["Days after period to qualify for timely submission" and "Expiry days" supports number type values [ROADMAP-344]](https://dhis2.atlassian.net/browse/ROADMAP-344)

When specifying the parameters for a data set, you can now use numbers (eg 0.5) for the "Days after period to qualify for timely submission" and “Expiry days”.

Willl meet usecase like eg In Sierra Leone, timely submission for weekly IDSR data is Monday at 12 (noon), which is 0.5 days after period end on Sunday midnight.

With DHIS2 increasingly being used for IDSR where rapid reporting etc are a must, this change will increasingly be used to set timeliness requirements less than one day, or in some cases e.g. 1.5 days.  Historically this parameter has been mostly used for timeliness of "long transaction" monthly aggregated data (the term "long transaction" is a term used for data processes that take considerable time - in the DHIS2 case typically 5-20 days after the end of the month). Disease surveillance data is different, because rapid submission of e.g. outbreak data is of vital importance for the early containment of epidemics. Such data is also increasingly being submitted directly from health facilities or clinicians, using browsers or the Android Capture app.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Fluid Forms [ROADMAP-232]](https://dhis2.atlassian.net/browse/ROADMAP-232)

*no description placeholder*



### [Improve Master Facility List capabilities: [ROADMAP-181]](https://dhis2.atlassian.net/browse/ROADMAP-181)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Maps

### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Reports

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Web Capture

### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Username DE to automatically complete the current user’s username [ROADMAP-224]](https://dhis2.atlassian.net/browse/ROADMAP-224)

*no description placeholder*



### [Digit group separator in Data Entry forms, Capture app, Tracker Capture app in Capture Android app  [ROADMAP-221]](https://dhis2.atlassian.net/browse/ROADMAP-221)

*no description placeholder*



### [Combine aggregate and tracker data in one data entry form [ROADMAP-175]](https://dhis2.atlassian.net/browse/ROADMAP-175)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Multi-calendar in Capture app [ROADMAP-171]](https://dhis2.atlassian.net/browse/ROADMAP-171)

The web Capture App uses now the CalendarInput component. The CalendarInput is an input field with an integrated calendar picker. It combines the functionality of the Calendar component with an input field, allowing users to either type a date or select one from the calendar picker.  The calendar component enables data collection for dates and periods based on the calendar configured in System settings. 

Documentation | Feature card | Screenshot 1 | 2 | 3



### [WHODrug data entry [ROADMAP-87]](https://dhis2.atlassian.net/browse/ROADMAP-87)

*no description placeholder*



### [Custom images [ROADMAP-55]](https://dhis2.atlassian.net/browse/ROADMAP-55)

*no description placeholder*



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*





# Collect (Individual)

## Android Capture

### [Improve Relationships in Tracker and event programs [ROADMAP-319]](https://dhis2.atlassian.net/browse/ROADMAP-319)

Relationship cards have been updated with the new design to offer a more intuitive and visually appealing. A new confirmation dialog also has been added when deleting a relationship.

[Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture*app*programs*common*features_relationships) | Feature card | Screenshot 1 | 2 | 3



### [Support for customized tracker terminology v2 [ROADMAP-314]](https://dhis2.atlassian.net/browse/ROADMAP-314)

*no description placeholder*



### [Integrate Resource Feature from Web Reports into DHIS2 Android App [ROADMAP-313]](https://dhis2.atlassian.net/browse/ROADMAP-313)

*no description placeholder*



### [Limit Tracker program events downloaded to a mobile device [ROADMAP-310]](https://dhis2.atlassian.net/browse/ROADMAP-310)

*no description placeholder*



### [Additional DHIS2-RTS transactions [ROADMAP-309]](https://dhis2.atlassian.net/browse/ROADMAP-309)

*no description placeholder*



### [Use Tracker Data element values for in program rule [ROADMAP-308]](https://dhis2.atlassian.net/browse/ROADMAP-308)

*no description placeholder*



### [Program Indicator on Event program home screen [ROADMAP-302]](https://dhis2.atlassian.net/browse/ROADMAP-302)

*no description placeholder*



### [Administrator setting for forcing synchronisation during login/logout [ROADMAP-301]](https://dhis2.atlassian.net/browse/ROADMAP-301)

*no description placeholder*



### [One-Question-at-a-Time Viewing in DHIS2 Android Capture app [ROADMAP-300]](https://dhis2.atlassian.net/browse/ROADMAP-300)

*no description placeholder*



### [Improve end-user config error feedback [ROADMAP-296]](https://dhis2.atlassian.net/browse/ROADMAP-296)

In some cases configuration errors leave empty screens in the Android Capture app, either because of empty forms or because of lack of access. From this version of the Android App the app will display explicit and understandable errors to the user, who will be able to effectively communicate with the administrator to fix the problem.



### [Improve App behaviour when working in offline mode  [ROADMAP-295]](https://dhis2.atlassian.net/browse/ROADMAP-295)

*no description placeholder*



### [Improvements in tracker programs data entry flow [ROADMAP-294]](https://dhis2.atlassian.net/browse/ROADMAP-294)

Several improvements have been made in the tracker programs user flow. An informative dialog has been added for confirmation when the user deletes a TEIs. The dialog for scheduling events after compilation has also been redesigned and improved. The selection of org. Units when the user only has access to one org. Unit for data collection has been removed and pre-filled, and lastly, the program rule “Hide program stage” behavior has been aligned with Capture web. 

[Documentation 1](https://docs.dhis2.org/en/use/android-app/program-features.html#capture*app*programs*common*features*schedule*after*completion) |  [2 ](https://docs.dhis2.org/en/use/android-app/program-features.html#capture*app*programs*delete_tei) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-294-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-294-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-294-Image02.png)



### [New Inputs for value types in Android App [ROADMAP-293]](https://dhis2.atlassian.net/browse/ROADMAP-293)

The inputs for all value types have been gradually redesigned from the 2.9 version of the app. The signature input field as well as the complete legend description are included now to improve user experience at data entry. The new input fields are now displayed by default and admin users are able to opt-out to use the old forms through the Android Settings web app.

[Documentation 1](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#capture*app*visual*signature) |  [2](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#capture*app*visual*legends*descriptions) |  [3](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#capture*app*visual*input_fields) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-293-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-293-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-293-Image02.png) | [3](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-293-Image03.png) | [4](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-293-Image04.png)



### [Improve user experience of event management in tracker programs [ROADMAP-267]](https://dhis2.atlassian.net/browse/ROADMAP-267)

*no description placeholder*



### [Support integration with external APIs  [ROADMAP-265]](https://dhis2.atlassian.net/browse/ROADMAP-265)

*no description placeholder*



### [Support dynamic modules/use cases [ROADMAP-264]](https://dhis2.atlassian.net/browse/ROADMAP-264)

*no description placeholder*



### [Support custom Android intents (by configuration) [ROADMAP-263]](https://dhis2.atlassian.net/browse/ROADMAP-263)

*no description placeholder*



### [Improve design and user experience [ROADMAP-262]](https://dhis2.atlassian.net/browse/ROADMAP-262)

*no description placeholder*



### [Improve user experience of relationships (and adapt to new relationships in web) [ROADMAP-261]](https://dhis2.atlassian.net/browse/ROADMAP-261)

*no description placeholder*



### [Improve user experience for the Completion of Datasets and Events   [ROADMAP-260]](https://dhis2.atlassian.net/browse/ROADMAP-260)

*no description placeholder*



### [Improve maps design and user experience [ROADMAP-259]](https://dhis2.atlassian.net/browse/ROADMAP-259)

*no description placeholder*



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [Allow configuration to prevent user to add another event when scheduled is not complete in tracker capture tabular data entry [ROADMAP-250]](https://dhis2.atlassian.net/browse/ROADMAP-250)

*no description placeholder*



### [Users viewing each other data when they are working in the same Organization unit/Ward [ROADMAP-247]](https://dhis2.atlassian.net/browse/ROADMAP-247)

*no description placeholder*



### [Program rule toggle [ROADMAP-243]](https://dhis2.atlassian.net/browse/ROADMAP-243)

*no description placeholder*



### [Tracker Program Stage Control [ROADMAP-242]](https://dhis2.atlassian.net/browse/ROADMAP-242)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Username DE to automatically complete the current user’s username [ROADMAP-224]](https://dhis2.atlassian.net/browse/ROADMAP-224)

*no description placeholder*



### [Digit group separator in Data Entry forms, Capture app, Tracker Capture app in Capture Android app  [ROADMAP-221]](https://dhis2.atlassian.net/browse/ROADMAP-221)

*no description placeholder*



### [RTSM - Button for toggling home screen and offline analytics   [ROADMAP-220]](https://dhis2.atlassian.net/browse/ROADMAP-220)

*no description placeholder*



### [RTSM - Language translation of all UI elements  [ROADMAP-219]](https://dhis2.atlassian.net/browse/ROADMAP-219)

*no description placeholder*



### [RTSM - Batch number and expiry date management  [ROADMAP-218]](https://dhis2.atlassian.net/browse/ROADMAP-218)

*no description placeholder*



### [Allow a third party Android app to search and retrieve TEI attributes for a patient from DHIS2 Android offline [ROADMAP-216]](https://dhis2.atlassian.net/browse/ROADMAP-216)

*no description placeholder*



### [Barcode QR Code Data Type and Read Functionality [ROADMAP-215]](https://dhis2.atlassian.net/browse/ROADMAP-215)

*no description placeholder*



### [Import/export App DB  [ROADMAP-210]](https://dhis2.atlassian.net/browse/ROADMAP-210)

As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of being unable to sync. With this functionality the end user will be able to export the local database and share it with an admin who will be able to import it for troubleshooting, being able to replicate the exact environment (database, device, configuration). The exported database is encrypted and the administrator will require the user credentials to be able to access the database.

As part of troubleshooting, some errors can be hard to replicate and can lead to data loss because of its nature and it would be easier to know what is the source by replicating in an exact environment (database, device, configuration). 

[Documentation](https://docs.dhis2.org/en/use/android-app/settings.html) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-210-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-210-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-210-Image02.png) 

**Expected behavior**

** Add an option in settings to export the database.
** Add an option in login to import a database.
**** Ask for permissions (user must provide the credentials to be able to import the DB)



### [Configurable basemap layer [ROADMAP-209]](https://dhis2.atlassian.net/browse/ROADMAP-209)

DHIS2 supports the configuration of custom map layers for the Maps Web App. From this version of the DHIS2 Android App, those custom layers will be downloaded and rendered in the Maps. The custom layers will be presented as additional layers to the default ones.

In some countries where there are political disputes about borders having a single source of maps (in our case Mapbox) can present a political issue and countries not adopting the app due to this.

DHIS2 server allows administrators to define different maps sources or specific border definitions (include reference to this in the documentation) and the App should do the same to avoid these conflicts. Ideally, the App should read the configuration from the backend an adapt the maps displayed in it.

[Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#map-layers) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-209-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-209-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-209-Image02.png)



### [Improve app navigation performance for high number of TEIs  [ROADMAP-208]](https://dhis2.atlassian.net/browse/ROADMAP-208)

Implementations are more and more demanding in terms of offline need of individual records. This version of the app has been reviewed to optimize performance when there are big numbers of TEIs downloaded locally.



### [Custom icons [ROADMAP-207]](https://dhis2.atlassian.net/browse/ROADMAP-207)

DHIS2 2 now supports uploading custom Icons to be used in addition to the built in Icon library. This is useful for use cases not related to health or that require very specific iconography. The Android App will render the custom icons that need to be uploaded and configured using the Maintenance DHIS2 Web App.

[Documentation](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#capture*app*visual*icon*lib) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-207-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-207-Image01.png)



### [Improve TEI dashboard user experience [ROADMAP-205]](https://dhis2.atlassian.net/browse/ROADMAP-205)

In the previous version of the application, the TEI header part of the dashboard was improved. In continuation to that effort, the bottom part, where all program stages are displayed, has been redesigned in this version. The changes include are fresh and more clean look of the list of events, with more space and less -not critical- information displayed. In addition, the button for creating new events has been moved to the top (in timeline view).

[Documentation](https://docs.dhis2.org/en/use/android-app/program-features.htm#capture*app*programs*TEI*Dashboard*program*stages)

**Proposed improvements**

**Timeline**

** When the timeline has more than 5 events, a “Show X more...” button with X = number of hidden events will be displayed.
**** When displaying all the events the Show more button will change to “Show less...”
** Remove the “last updated” from card

**Grouped**

** Program stages without events display the label “no data”
** Program stages are always open (not collapsible as it was before)
** When a program stage has more than 3 events, a “Show X more...” button with X = number of hidden events will be displayed.
**** When displaying all the events the Show more button will change to “Show less...”
** Remove the “last updated” from card

[Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-205-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-205-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-202-Image02.png)



### [Improvements in forms layout [ROADMAP-204]](https://dhis2.atlassian.net/browse/ROADMAP-204)

When creating an event or an enrollment, there are a number of fields that are not data elements or attributes, for example, event date, org unit, coordinates, enrollment date, category combinations. Those elements are referred to as event/enrollment details and in previous versions they were displayed in different screens separated from the data elements or attributes. They were difficult to find when users wanted to edit or consult them. In this version the details are displayed inside the form, as the first opened section for completion. Once they are filled in, for example when the user reopens the event or enrollment form, the details section will be visible and easily available, but collapsed to leave more space for the data collection. 

[Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture*app*common*features*newEdit_event) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-204-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-204-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-204-Image02.png) | [3](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-204-Image03.png)



### [Improve TEI search user experience [ROADMAP-203]](https://dhis2.atlassian.net/browse/ROADMAP-203)

The search form has been improved to provide a cleaner look and a more intuitive user experience. The buttons have been made more explicit for differencing search from creation. In addition the flow for searching TEIs using attributes rendered as bar / QR codes has been made more agile. If there is only one result and the attribute is unique, the app will open the TEI Dashboard directly. If there are multiple results, the app will display all the cards on the TEI list (this is equal to the current workflow), and if there are no results, the app will display the create button and allow the user to “search outside the program” if the configuration allows it.

[Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture*app*programs*unique*qrBar_search) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-203-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-203-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-202-Image02.png)

**Reduce steps in QR code/Bar code search workflow**

Improve the user experience when users search for a TEI using a UNIQUE QR/bar code. Currenrtly, when there are exact matches, the app displays the card or cards on the list.

The proposed behaviour is:

After searching by QR code/Barcode:

** If there is only one result, the app opens the TEI Dashboard.
** If there are multiple results, the app will display all the cards on the TEI list (current workflow)
- If there are no results, the app will display the create button  and allow the user to “search outside the program” (if the config allows it)



### [Support for customized tracker terminology v1 [ROADMAP-201]](https://dhis2.atlassian.net/browse/ROADMAP-201)

Some DHIS2 terminology is not familiar for the end users. For this reason, we are gradually enabling the possibility to customize it to each particular use case. In this version, the term "event" and "enrollment" are customizable. The admin user will be able to configure it for each program using the Maintenance App, and the Android Capture App will display the customized term instead of the generic one.

[Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture*app*programs*common*features*customized*terminology)  | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-201-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-201-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-201-Image02.png) | [3](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-201-Image03.png) | [4](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-201-Image04.png)

Support the posibility to configure certain tracker terminology to provide a more contextualized user experience. For 2.10 we will aim for: 

** Enrollment (25 strings)
** Event
** Program Stage ()

Future version will include

** Registering unit
** Follow-up
** Attribute
** Relationships
** Notes



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Cross program rules [ROADMAP-130]](https://dhis2.atlassian.net/browse/ROADMAP-130)

*no description placeholder*



### [Home screen: responsive display of programs [ROADMAP-120]](https://dhis2.atlassian.net/browse/ROADMAP-120)

The home screen of the Android app will adjust automatically the display depending on the number of programs available. The purpose is to show the programs in bigger size and use all the available space on the screen when users only work with small numbers of programs, normaly below 6 or 7. 

[Documentation](https://docs.dhis2.org/en/use/android-app/program-features.html#capture*app*programs*common*features_relationships) | Feature card | Screenshot 1 | 2 | 3



### [Enable User assignment of events [ROADMAP-116]](https://dhis2.atlassian.net/browse/ROADMAP-116)

*no description placeholder*



### [Geolocation monitoring [ROADMAP-111]](https://dhis2.atlassian.net/browse/ROADMAP-111)

*no description placeholder*



### [Automatic deletion of synced data [ROADMAP-110]](https://dhis2.atlassian.net/browse/ROADMAP-110)

*no description placeholder*



### [Bulk data tranfer device to device [ROADMAP-109]](https://dhis2.atlassian.net/browse/ROADMAP-109)

*no description placeholder*



### [Implement Sync mode ASAP [ROADMAP-108]](https://dhis2.atlassian.net/browse/ROADMAP-108)

*no description placeholder*



### [Implement App notifications [ROADMAP-107]](https://dhis2.atlassian.net/browse/ROADMAP-107)

*no description placeholder*



### [Enable registering TEI without Program [ROADMAP-105]](https://dhis2.atlassian.net/browse/ROADMAP-105)

*no description placeholder*



### [Add search box in long forms [ROADMAP-104]](https://dhis2.atlassian.net/browse/ROADMAP-104)

*no description placeholder*



### [Allow sending images in Attributes or DataValues with better quality [ROADMAP-101]](https://dhis2.atlassian.net/browse/ROADMAP-101)

*no description placeholder*



### [Integration QR/Barcode readers for mobile Bluetooth devices [ROADMAP-96]](https://dhis2.atlassian.net/browse/ROADMAP-96)

*no description placeholder*



### [Implement device to device event/tei sharing [ROADMAP-95]](https://dhis2.atlassian.net/browse/ROADMAP-95)

*no description placeholder*



### [Data entry by reading RFID tags [ROADMAP-94]](https://dhis2.atlassian.net/browse/ROADMAP-94)

*no description placeholder*



### [Allow disabling choice of location on a map (capture only current location) [ROADMAP-92]](https://dhis2.atlassian.net/browse/ROADMAP-92)

*no description placeholder*



### [Sync: use SMS as default transmisison layer [ROADMAP-91]](https://dhis2.atlassian.net/browse/ROADMAP-91)

*no description placeholder*



### [Data entry: display GPS accuracy [ROADMAP-89]](https://dhis2.atlassian.net/browse/ROADMAP-89)

*no description placeholder*



### [Cold-chain temperature monitoring app [ROADMAP-82]](https://dhis2.atlassian.net/browse/ROADMAP-82)

*no description placeholder*



### [Optionsets multiselect support for individual data [ROADMAP-72]](https://dhis2.atlassian.net/browse/ROADMAP-72)

DHIS2 already supports the introduction of multiple options for data elements for data aggregation. In this version it will also support it for individual data. The Android App will support both aggregated and individual multi select data elements from this version.
[Documentation](https://docs.dhis2.org/en/use/android-app/value-types-supported.html#capture*app*value*types) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-72-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-72-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-72-Image01.png)

## 🎯 High Level use case 

Multi selection option sets in the Capture app

## :people*holding_hands: Users description

Data entry: there are many types of structured data where the most accurate response is “select all that apply”

System Configurer: The only way to work around multiselect currently is create complex program rules and redundant fields that reduce form performance, introduce complications, and reduce data quality

## ❓ Problem Description

The absence of multiselect

## 🤔 Assumptions

The approach used for multiselect in the Data Entry app can be reused here

## ℹ️ Sources

What were the sources of input for this requirement

## (!) Out of Scope

List the features discussed which are out of scope or might be revisited in a later release.

## (?) Open Questions

|**Question**|**Answer**|**Date Answered**|
|e.g., How might we make users more aware of this feature?|e.g., We'll announce the feature with a blog post and a presentation|Type // to add a date|



### [Request device sync from server [ROADMAP-70]](https://dhis2.atlassian.net/browse/ROADMAP-70)

*no description placeholder*



### [Enrollment attributes [ROADMAP-64]](https://dhis2.atlassian.net/browse/ROADMAP-64)

*no description placeholder*



### [Deduplication - Improve workflow for preventing new duplicates [ROADMAP-62]](https://dhis2.atlassian.net/browse/ROADMAP-62)

*no description placeholder*



### [Custom images [ROADMAP-55]](https://dhis2.atlassian.net/browse/ROADMAP-55)

*no description placeholder*



### [Improve sync process performance (tracker-android) [ROADMAP-51]](https://dhis2.atlassian.net/browse/ROADMAP-51)

*no description placeholder*



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*



## DHIS2

### [Org Units Favorites Feature Request [ROADMAP-311]](https://dhis2.atlassian.net/browse/ROADMAP-311)

*no description placeholder*



### [Implement Wild Card Search and Best Match Functionality in DHIS2 Data Entry App/ Data Visualizer for Organisation Units [ROADMAP-297]](https://dhis2.atlassian.net/browse/ROADMAP-297)

*no description placeholder*



### [Workflow-based platform entrypoint for accessing all DHIS2 functionality [ROADMAP-287]](https://dhis2.atlassian.net/browse/ROADMAP-287)

*no description placeholder*



### [Unified entrypoint for all data entry (individual and aggregate) [ROADMAP-286]](https://dhis2.atlassian.net/browse/ROADMAP-286)

*no description placeholder*



### [Make it more intuitive to filter organization units [ROADMAP-246]](https://dhis2.atlassian.net/browse/ROADMAP-246)

*no description placeholder*



### [Support event hook notifications for data [ROADMAP-192]](https://dhis2.atlassian.net/browse/ROADMAP-192)

*no description placeholder*



## Data Entry

### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Username DE to automatically complete the current user’s username [ROADMAP-224]](https://dhis2.atlassian.net/browse/ROADMAP-224)

*no description placeholder*



### [Digit group separator in Data Entry forms, Capture app, Tracker Capture app in Capture Android app  [ROADMAP-221]](https://dhis2.atlassian.net/browse/ROADMAP-221)

*no description placeholder*



### [Combine aggregate and tracker data in one data entry form [ROADMAP-175]](https://dhis2.atlassian.net/browse/ROADMAP-175)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [WHODrug data entry [ROADMAP-87]](https://dhis2.atlassian.net/browse/ROADMAP-87)

*no description placeholder*



## Data Visualizer

### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Solution for restricting access to sensitive tracker data (Non-analyzable attributes) [ROADMAP-80]](https://dhis2.atlassian.net/browse/ROADMAP-80)

*no description placeholder*



## Global (App Shell)

### [Customizable bundled contextualized documentation [ROADMAP-285]](https://dhis2.atlassian.net/browse/ROADMAP-285)

*no description placeholder*



### [Report error logs from clients (web browsers and android devices) for analysis on the server [ROADMAP-284]](https://dhis2.atlassian.net/browse/ROADMAP-284)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Import/Export

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Line Listing

### [Unified query language to align Line Lists with Program Indicators [ROADMAP-292]](https://dhis2.atlassian.net/browse/ROADMAP-292)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Solution for restricting access to sensitive tracker data (Non-analyzable attributes) [ROADMAP-80]](https://dhis2.atlassian.net/browse/ROADMAP-80)

*no description placeholder*



## Maintenance

### [Unified query language to align Line Lists with Program Indicators [ROADMAP-292]](https://dhis2.atlassian.net/browse/ROADMAP-292)

*no description placeholder*



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [Program rule toggle [ROADMAP-243]](https://dhis2.atlassian.net/browse/ROADMAP-243)

*no description placeholder*



### [Tracker Program Stage Control [ROADMAP-242]](https://dhis2.atlassian.net/browse/ROADMAP-242)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Improve Master Facility List capabilities: [ROADMAP-181]](https://dhis2.atlassian.net/browse/ROADMAP-181)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Strengthen support for surveillance validation rules, notifications and how these are presented to users for follow-up actions [ROADMAP-134]](https://dhis2.atlassian.net/browse/ROADMAP-134)

*no description placeholder*



### [TEI management tool [ROADMAP-131]](https://dhis2.atlassian.net/browse/ROADMAP-131)

*no description placeholder*



### [Cross program rules [ROADMAP-130]](https://dhis2.atlassian.net/browse/ROADMAP-130)

*no description placeholder*



### [Expression editing help for program rules and program indicators [ROADMAP-67]](https://dhis2.atlassian.net/browse/ROADMAP-67)

*no description placeholder*



## Maps

### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Reports

### [Integrate Resource Feature from Web Reports into DHIS2 Android App [ROADMAP-313]](https://dhis2.atlassian.net/browse/ROADMAP-313)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Usage Analytics

### [Report error logs from clients (web browsers and android devices) for analysis on the server [ROADMAP-284]](https://dhis2.atlassian.net/browse/ROADMAP-284)

*no description placeholder*



## Web Capture

### [Integrate Kotlin multiplatform rule engine with Capture App [ROADMAP-333]](https://dhis2.atlassian.net/browse/ROADMAP-333)

The Web Capture App, the Android Capture App and backend use the same rule engine from v42. this ensures consistency in the program rules configuration and and how actions are triggered across all platforms.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Show org unit selector in all event forms [ROADMAP-332]](https://dhis2.atlassian.net/browse/ROADMAP-332)

You can now change the org unit in the form itself (instead of the context selector) when creating or editing an event. The org unit selector is displayed in the “Basic info“ section in the workspace.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Launch/Start page [ROADMAP-331]](https://dhis2.atlassian.net/browse/ROADMAP-331)

Now when entering the Capture app, the start page will give short, helpful text to guide the user to what the app is for, as well as a link to the user documentation.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Related stages/Linked events enhancements [ROADMAP-330]](https://dhis2.atlassian.net/browse/ROADMAP-330)

There have been some enhancements to the related stages functionality in Tracker programs. You now have a two event workspace so you can see both events that are linked in one page, the related stages widget is visible on the registration page, as well as in the view event page and you are also able to unlink events. 

[Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/tracking-individual-level-data/capture.html#related-stages-and-linked-events-for-tracker-programs) | Feature card | Screenshot 1 | 2 | 3



### [Additional form field plugins in the Capture app - Working list [ROADMAP-329]](https://dhis2.atlassian.net/browse/ROADMAP-329)

*no description placeholder*



### [Changelog enhancements [ROADMAP-328]](https://dhis2.atlassian.net/browse/ROADMAP-328)

The event changelog now includes also a history of changes to report date, scheduled date and geometry. In addition, you can filter changes by either user or data item.

[Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/tracking-individual-level-data/capture.html#changelog) | Feature card | Screenshot 1 | 2 | 3



### [Show and filter on assigned user in Program stage working list [ROADMAP-327]](https://dhis2.atlassian.net/browse/ROADMAP-327)

The filtering options in working lists have been improved in the DHIS2 web capture App. You can now display and filter on assigned user at the program stage level.

[Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/tracking-individual-level-data/capture.html#tracker-program-stage-working-list) | Feature card | Screenshot 1 | 2 | 3



### [  Bulk Simple Operations in Capture [ROADMAP-325]](https://dhis2.atlassian.net/browse/ROADMAP-325)

You can now perform bulk actions in event and tracker programs working lists. 

For tracker programs, you can now either complete or delete enrollments sumiltaneously on multiple Tracked entities. The actions will apply to the tracked entities selected in the working list. Supported on continuous release, 2.39 and above.

For Events programs, you can either complete or delete simultanously multiple events. The action will apply to those events selected in the working list.

[Documentation 1](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/tracking-individual-level-data/capture.html#event-bulk-actions) | [Documentation 2](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/tracking-individual-level-data/capture.html#tracked-entity-bulk-actions) | Feature card | Screenshot 1 | 2 | 3



### [Breadcrumb bar for event and enrollment pages [ROADMAP-320]](https://dhis2.atlassian.net/browse/ROADMAP-320)

Breadcrum navigation has been added at the top of the event and enrollment pages. It tells the user the steps thy followed to reach the page where they are. Each item is actionable and will let them navigate across pages.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Organisation unit contextualization [ROADMAP-316]](https://dhis2.atlassian.net/browse/ROADMAP-316)

You can now hover over organisation units in working lists, widget and forms and see the full organisation unit hierarchy for that org unit for additional context.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Use Tracker Data element values for in program rule [ROADMAP-308]](https://dhis2.atlassian.net/browse/ROADMAP-308)

*no description placeholder*



### [Unified query language to align Line Lists with Program Indicators [ROADMAP-292]](https://dhis2.atlassian.net/browse/ROADMAP-292)

*no description placeholder*



### [Row-based data entry interface for secondary data entry in tracker [ROADMAP-281]](https://dhis2.atlassian.net/browse/ROADMAP-281)

*no description placeholder*



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [Multiple active enrolments for the same TEI under different organisation units [ROADMAP-253]](https://dhis2.atlassian.net/browse/ROADMAP-253)

*no description placeholder*



### [Update of events under multiple enrolments for same Tracked Entity Instance [ROADMAP-252]](https://dhis2.atlassian.net/browse/ROADMAP-252)

*no description placeholder*



### [Allow configuration to prevent user to add another event when scheduled is not complete in tracker capture tabular data entry [ROADMAP-250]](https://dhis2.atlassian.net/browse/ROADMAP-250)

*no description placeholder*



### [TEI management Function: Changing Org Unit Ownership [ROADMAP-248]](https://dhis2.atlassian.net/browse/ROADMAP-248)

*no description placeholder*



### [Users viewing each other data when they are working in the same Organization unit/Ward [ROADMAP-247]](https://dhis2.atlassian.net/browse/ROADMAP-247)

*no description placeholder*



### [Program rule toggle [ROADMAP-243]](https://dhis2.atlassian.net/browse/ROADMAP-243)

*no description placeholder*



### [Tracker Program Stage Control [ROADMAP-242]](https://dhis2.atlassian.net/browse/ROADMAP-242)

*no description placeholder*



### [User Group based orgunit tree display during data entry and analysis [ROADMAP-230]](https://dhis2.atlassian.net/browse/ROADMAP-230)

*no description placeholder*



### [Username DE to automatically complete the current user’s username [ROADMAP-224]](https://dhis2.atlassian.net/browse/ROADMAP-224)

*no description placeholder*



### [Digit group separator in Data Entry forms, Capture app, Tracker Capture app in Capture Android app  [ROADMAP-221]](https://dhis2.atlassian.net/browse/ROADMAP-221)

*no description placeholder*



### [Make "Registering Unit" as option to include in data views for event programs in capture [ROADMAP-213]](https://dhis2.atlassian.net/browse/ROADMAP-213)

*no description placeholder*



### [Filter by No Value [ROADMAP-211]](https://dhis2.atlassian.net/browse/ROADMAP-211)

*no description placeholder*



### [Option on/off to set permission Enrollment of Tracker [ROADMAP-196]](https://dhis2.atlassian.net/browse/ROADMAP-196)

*no description placeholder*



### [Formfield and dashboard plugins in the Capture app [ROADMAP-191]](https://dhis2.atlassian.net/browse/ROADMAP-191)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Combine aggregate and tracker data in one data entry form [ROADMAP-175]](https://dhis2.atlassian.net/browse/ROADMAP-175)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Multi-calendar in Capture app [ROADMAP-171]](https://dhis2.atlassian.net/browse/ROADMAP-171)

The web Capture App uses now the CalendarInput component. The CalendarInput is an input field with an integrated calendar picker. It combines the functionality of the Calendar component with an input field, allowing users to either type a date or select one from the calendar picker.  The calendar component enables data collection for dates and periods based on the calendar configured in System settings. 

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Bulk enrollment [ROADMAP-170]](https://dhis2.atlassian.net/browse/ROADMAP-170)

*no description placeholder*



### [Program Attribute Option Combo at enrollments [ROADMAP-140]](https://dhis2.atlassian.net/browse/ROADMAP-140)

*no description placeholder*



### [Preview images/download files [ROADMAP-139]](https://dhis2.atlassian.net/browse/ROADMAP-139)

*no description placeholder*



### [PWA for Capture App [ROADMAP-138]](https://dhis2.atlassian.net/browse/ROADMAP-138)

*no description placeholder*



### [Filter org units in hierarchy based on program selection in context selector [ROADMAP-137]](https://dhis2.atlassian.net/browse/ROADMAP-137)

*no description placeholder*



### [Strengthen support for surveillance validation rules, notifications and how these are presented to users for follow-up actions [ROADMAP-134]](https://dhis2.atlassian.net/browse/ROADMAP-134)

*no description placeholder*



### [Program rule action to complete current enrollment and enroll the TEI in a different program [ROADMAP-133]](https://dhis2.atlassian.net/browse/ROADMAP-133)

*no description placeholder*



### [Re-run program rules for existing data [ROADMAP-132]](https://dhis2.atlassian.net/browse/ROADMAP-132)

*no description placeholder*



### [TEI management tool [ROADMAP-131]](https://dhis2.atlassian.net/browse/ROADMAP-131)

*no description placeholder*



### [Cross program rules [ROADMAP-130]](https://dhis2.atlassian.net/browse/ROADMAP-130)

*no description placeholder*



### [Top bar/TEI context [ROADMAP-129]](https://dhis2.atlassian.net/browse/ROADMAP-129)

*no description placeholder*



### [TEI search improvements [ROADMAP-128]](https://dhis2.atlassian.net/browse/ROADMAP-128)

*no description placeholder*



### [Multi-stage working lists [ROADMAP-127]](https://dhis2.atlassian.net/browse/ROADMAP-127)

*no description placeholder*



### [Tracked Entity Dashboard page [ROADMAP-125]](https://dhis2.atlassian.net/browse/ROADMAP-125)

*no description placeholder*



### [Tracker request and response payload harmonization [ROADMAP-88]](https://dhis2.atlassian.net/browse/ROADMAP-88)

*no description placeholder*



### [WHODrug data entry [ROADMAP-87]](https://dhis2.atlassian.net/browse/ROADMAP-87)

*no description placeholder*



### [Self Reporting - external [ROADMAP-79]](https://dhis2.atlassian.net/browse/ROADMAP-79)

*no description placeholder*



### [Self reporting/monitoring for Tracked Entities [ROADMAP-78]](https://dhis2.atlassian.net/browse/ROADMAP-78)

*no description placeholder*



### [Reusable "capture building blocks" [ROADMAP-77]](https://dhis2.atlassian.net/browse/ROADMAP-77)

*no description placeholder*



### [Optionsets multiselect support for individual data [ROADMAP-72]](https://dhis2.atlassian.net/browse/ROADMAP-72)

DHIS2 already supports the introduction of multiple options for data elements for data aggregation. In this version it will also support it for individual data. The Android App will support both aggregated and individual multi select data elements from this version.
[Documentation](https://docs.dhis2.org/en/use/android-app/value-types-supported.html#capture*app*value*types) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-72-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-72-Image01.png) | [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-72-Image01.png)

## 🎯 High Level use case 

Multi selection option sets in the Capture app

## :people*holding_hands: Users description

Data entry: there are many types of structured data where the most accurate response is “select all that apply”

System Configurer: The only way to work around multiselect currently is create complex program rules and redundant fields that reduce form performance, introduce complications, and reduce data quality

## ❓ Problem Description

The absence of multiselect

## 🤔 Assumptions

The approach used for multiselect in the Data Entry app can be reused here

## ℹ️ Sources

What were the sources of input for this requirement

## (!) Out of Scope

List the features discussed which are out of scope or might be revisited in a later release.

## (?) Open Questions

|**Question**|**Answer**|**Date Answered**|
|e.g., How might we make users more aware of this feature?|e.g., We'll announce the feature with a blog post and a presentation|Type // to add a date|



### [Expression editing help for program rules and program indicators [ROADMAP-67]](https://dhis2.atlassian.net/browse/ROADMAP-67)

*no description placeholder*



### [Enrollment attributes [ROADMAP-64]](https://dhis2.atlassian.net/browse/ROADMAP-64)

*no description placeholder*



### [Deduplication - identify and resolve potential duplicates [ROADMAP-63]](https://dhis2.atlassian.net/browse/ROADMAP-63)

*no description placeholder*



### [Deduplication - Improve workflow for preventing new duplicates [ROADMAP-62]](https://dhis2.atlassian.net/browse/ROADMAP-62)

*no description placeholder*



### [Data sunsets, clean out expired personal information [ROADMAP-61]](https://dhis2.atlassian.net/browse/ROADMAP-61)

*no description placeholder*



### [Custom images [ROADMAP-55]](https://dhis2.atlassian.net/browse/ROADMAP-55)

*no description placeholder*



### [Configurable standard Forms - Tracker and events [ROADMAP-54]](https://dhis2.atlassian.net/browse/ROADMAP-54)

*no description placeholder*



### [Bulk data entry - editable working lists [ROADMAP-52]](https://dhis2.atlassian.net/browse/ROADMAP-52)

*no description placeholder*



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*



### [Specific authority for completing or uncompleting enrollment [ROADMAP-345]](https://dhis2.atlassian.net/browse/ROADMAP-345)

*no description placeholder*





# Configure (Metadata)

## Android Capture

### [Improve end-user config error feedback [ROADMAP-296]](https://dhis2.atlassian.net/browse/ROADMAP-296)

In some cases configuration errors leave empty screens in the Android Capture app, either because of empty forms or because of lack of access. From this version of the Android App the app will display explicit and understandable errors to the user, who will be able to effectively communicate with the administrator to fix the problem.



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [Allow configuration to prevent user to add another event when scheduled is not complete in tracker capture tabular data entry [ROADMAP-250]](https://dhis2.atlassian.net/browse/ROADMAP-250)

*no description placeholder*



### [Program rule toggle [ROADMAP-243]](https://dhis2.atlassian.net/browse/ROADMAP-243)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Cross program rules [ROADMAP-130]](https://dhis2.atlassian.net/browse/ROADMAP-130)

*no description placeholder*



### [Support DHIS2 messages [ROADMAP-119]](https://dhis2.atlassian.net/browse/ROADMAP-119)

*no description placeholder*



### [Home screen: group programs [ROADMAP-118]](https://dhis2.atlassian.net/browse/ROADMAP-118)

*no description placeholder*



### [Find testing sites (OU) in map [ROADMAP-112]](https://dhis2.atlassian.net/browse/ROADMAP-112)

*no description placeholder*



### [Implement App notifications [ROADMAP-107]](https://dhis2.atlassian.net/browse/ROADMAP-107)

*no description placeholder*



### [To Do list as home screen [ROADMAP-103]](https://dhis2.atlassian.net/browse/ROADMAP-103)

*no description placeholder*



### [Implementation support: message of the day [ROADMAP-102]](https://dhis2.atlassian.net/browse/ROADMAP-102)

*no description placeholder*



### [Multi-user: display account sync status [ROADMAP-99]](https://dhis2.atlassian.net/browse/ROADMAP-99)

*no description placeholder*



### [Display misconfigured Program Indicators in troubleshooting section [ROADMAP-98]](https://dhis2.atlassian.net/browse/ROADMAP-98)

*no description placeholder*



### [Configure DHIS2 Platform Terminology [ROADMAP-57]](https://dhis2.atlassian.net/browse/ROADMAP-57)

*no description placeholder*



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*



## DHIS2

### [Improve org. unit component: filtering, advanced selections [ROADMAP-279]](https://dhis2.atlassian.net/browse/ROADMAP-279)

*no description placeholder*



### [Support translation for embedded objects and jsonb [ROADMAP-34]](https://dhis2.atlassian.net/browse/ROADMAP-34)

*no description placeholder*



## Dashboard

### [Series color for visualization [ROADMAP-212]](https://dhis2.atlassian.net/browse/ROADMAP-212)

*no description placeholder*



## Data Administration

### [Tracker data sync (formerly server-to-server sync) [ROADMAP-83]](https://dhis2.atlassian.net/browse/ROADMAP-83)

*no description placeholder*



### [Integrity Check Configuration UI [ROADMAP-41]](https://dhis2.atlassian.net/browse/ROADMAP-41)

*no description placeholder*



## Data Approval

### [Improvements to Data Approval App including adding AOCs  [ROADMAP-255]](https://dhis2.atlassian.net/browse/ROADMAP-255)

*no description placeholder*



## Data Entry

### [Fluid Forms [ROADMAP-232]](https://dhis2.atlassian.net/browse/ROADMAP-232)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Formatting tools for printing (certificates and data entry forms) [ROADMAP-135]](https://dhis2.atlassian.net/browse/ROADMAP-135)

*no description placeholder*



## Data Exchange

### [Aggregate Data Exchange configuration UI [ROADMAP-42]](https://dhis2.atlassian.net/browse/ROADMAP-42)

*no description placeholder*



## Data Visualizer

### [Series color for visualization [ROADMAP-212]](https://dhis2.atlassian.net/browse/ROADMAP-212)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Program Indicator Disaggregations [ROADMAP-73]](https://dhis2.atlassian.net/browse/ROADMAP-73)

This feature enables the possibility of creating dissagregations for Program Indicators that match with existing category options, and combinations. Such dissagregation will facilitate analysisng Program Indicators by those disaggregation witih the analytics apps as well as aggregating the values and importing within an aggregated data model thourgh the exchange app (in the same or different instance).

Documentation | Feature card | Screenshot 1 | 2 | 3

## 

🎯 High Level use case 

Support bucketed program indicator outputs, mapping to category option combinations so that a single Program indicator can be converted to multiple aggregate data element values without having to create a program indicator for each permutation.

## :people*holding*hands: Users description

Crosses a large range of users that use program indicators  This is an important LMIS issue. 

## ❓ Problem Description

Reduce redundancy in PIs usage as currently you have to re-create multiple PIs to meet the required disaggregations

it is getting difficult to maintain thousands of program indicators with one change affecting all copies of the same indicator with different age and gender disaggregations

This could help support tracker to aggregate integration without creating massive amounts of metadata.

This is an important LMIS issue. The DHIS2-RTS Tracker Program allows recording "Distribution" for 17 different "Deliver to" (surgical ward, operating theatre etc.), total "Deliver" as well as "Receipt", "Discard" and "Correction" for, say 300 different health care products (TEIs). In order to provide daily and monthly aggregates we therefore need 22 x 300 = 6,600 Program Indicators (and 6,600 Predictors for the "daily" and an additional 6,600 Predictors for the "monthly" report in an "aggregate" Data entry form).

## 🤔 Assumptions

Needs to be considered along with other tracker to aggregate issues and tracker analytics issues

## ℹ️ Sources

What were the sources of input for this requirement

## (!) Out of Scope

List the features discussed which are out of scope or might be revisited in a later release.

## (?) Open Questions

|**Question**|**Answer**|**Date Answered**|
|e.g., How might we make users more aware of this feature?|e.g., We'll announce the feature with a blog post and a presentation|Type // to add a date|

Confluence: [https://dhis2.atlassian.net/wiki/x/AQBTJ](https://dhis2.atlassian.net/wiki/x/AQBTJ)



## Global (App Shell)

### [Customizable bundled contextualized documentation [ROADMAP-285]](https://dhis2.atlassian.net/browse/ROADMAP-285)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Import/Export

### [Support validation and metadata quality checks prior to import [ROADMAP-179]](https://dhis2.atlassian.net/browse/ROADMAP-179)

*no description placeholder*



### [Improvements & stability for import/export app [ROADMAP-177]](https://dhis2.atlassian.net/browse/ROADMAP-177)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Import / Export / Share: (Health / Toolkit Domain) [ROADMAP-66]](https://dhis2.atlassian.net/browse/ROADMAP-66)

*no description placeholder*



### [Multi-calendar support for import/export app [ROADMAP-35]](https://dhis2.atlassian.net/browse/ROADMAP-35)

*no description placeholder*



## Line Listing

### [Unified query language to align Line Lists with Program Indicators [ROADMAP-292]](https://dhis2.atlassian.net/browse/ROADMAP-292)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Maintenance

### [Link between org unit groups and user groups [ROADMAP-304]](https://dhis2.atlassian.net/browse/ROADMAP-304)

*no description placeholder*



### [Unified query language to align Line Lists with Program Indicators [ROADMAP-292]](https://dhis2.atlassian.net/browse/ROADMAP-292)

*no description placeholder*



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [OU Profile / Master School List [ROADMAP-251]](https://dhis2.atlassian.net/browse/ROADMAP-251)

*no description placeholder*



### [Detach dataset/program/category option assignment from editing [ROADMAP-249]](https://dhis2.atlassian.net/browse/ROADMAP-249)

*no description placeholder*



### [Program rule toggle [ROADMAP-243]](https://dhis2.atlassian.net/browse/ROADMAP-243)

*no description placeholder*



### [Functional app for allocating orgunits to datasets & programs [ROADMAP-239]](https://dhis2.atlassian.net/browse/ROADMAP-239)

*no description placeholder*



### [Search function on Option values in maintenance->Optionset [ROADMAP-237]](https://dhis2.atlassian.net/browse/ROADMAP-237)

*no description placeholder*



### [Fluid Forms [ROADMAP-232]](https://dhis2.atlassian.net/browse/ROADMAP-232)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [New Maintenance App continuous release [ROADMAP-182]](https://dhis2.atlassian.net/browse/ROADMAP-182)

The Maintenance is being gradually reimplementend in its new and improved version. The new Maintenance web app is on continuous release and keeps being dynamically updated. For the time of this v42 release we can announce the implementation of the Data Element, Categories and Indicator type sections.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Improve Master Facility List capabilities: [ROADMAP-181]](https://dhis2.atlassian.net/browse/ROADMAP-181)

*no description placeholder*



### [Possibility of applying sharing settings to Organization Units [ROADMAP-178]](https://dhis2.atlassian.net/browse/ROADMAP-178)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Strengthen support for surveillance validation rules, notifications and how these are presented to users for follow-up actions [ROADMAP-134]](https://dhis2.atlassian.net/browse/ROADMAP-134)

*no description placeholder*



### [TEI management tool [ROADMAP-131]](https://dhis2.atlassian.net/browse/ROADMAP-131)

*no description placeholder*



### [Cross program rules [ROADMAP-130]](https://dhis2.atlassian.net/browse/ROADMAP-130)

*no description placeholder*



### [Display misconfigured Program Indicators in troubleshooting section [ROADMAP-98]](https://dhis2.atlassian.net/browse/ROADMAP-98)

*no description placeholder*



### [Program Indicator Disaggregations [ROADMAP-73]](https://dhis2.atlassian.net/browse/ROADMAP-73)

This feature enables the possibility of creating dissagregations for Program Indicators that match with existing category options, and combinations. Such dissagregation will facilitate analysisng Program Indicators by those disaggregation witih the analytics apps as well as aggregating the values and importing within an aggregated data model thourgh the exchange app (in the same or different instance).

Documentation | Feature card | Screenshot 1 | 2 | 3

## 

🎯 High Level use case 

Support bucketed program indicator outputs, mapping to category option combinations so that a single Program indicator can be converted to multiple aggregate data element values without having to create a program indicator for each permutation.

## :people*holding*hands: Users description

Crosses a large range of users that use program indicators  This is an important LMIS issue. 

## ❓ Problem Description

Reduce redundancy in PIs usage as currently you have to re-create multiple PIs to meet the required disaggregations

it is getting difficult to maintain thousands of program indicators with one change affecting all copies of the same indicator with different age and gender disaggregations

This could help support tracker to aggregate integration without creating massive amounts of metadata.

This is an important LMIS issue. The DHIS2-RTS Tracker Program allows recording "Distribution" for 17 different "Deliver to" (surgical ward, operating theatre etc.), total "Deliver" as well as "Receipt", "Discard" and "Correction" for, say 300 different health care products (TEIs). In order to provide daily and monthly aggregates we therefore need 22 x 300 = 6,600 Program Indicators (and 6,600 Predictors for the "daily" and an additional 6,600 Predictors for the "monthly" report in an "aggregate" Data entry form).

## 🤔 Assumptions

Needs to be considered along with other tracker to aggregate issues and tracker analytics issues

## ℹ️ Sources

What were the sources of input for this requirement

## (!) Out of Scope

List the features discussed which are out of scope or might be revisited in a later release.

## (?) Open Questions

|**Question**|**Answer**|**Date Answered**|
|e.g., How might we make users more aware of this feature?|e.g., We'll announce the feature with a blog post and a presentation|Type // to add a date|

Confluence: [https://dhis2.atlassian.net/wiki/x/AQBTJ](https://dhis2.atlassian.net/wiki/x/AQBTJ)



### [Expression editing help for program rules and program indicators [ROADMAP-67]](https://dhis2.atlassian.net/browse/ROADMAP-67)

*no description placeholder*



### [Import / Export / Share: (Health / Toolkit Domain) [ROADMAP-66]](https://dhis2.atlassian.net/browse/ROADMAP-66)

*no description placeholder*



### [Maintenance App redesign preview [ROADMAP-47]](https://dhis2.atlassian.net/browse/ROADMAP-47)

*no description placeholder*



### [Metadata deduplication and merging [ROADMAP-39]](https://dhis2.atlassian.net/browse/ROADMAP-39)

Merging of metadata is being gradually supported within DHIS2 core funcitonalities facilitating metadata cleanup operations. Backend supports merging the following metadata objetcs through the web API: Organisation Units, Data Eelements, Indicators, Indicator Types, Category options, Categories, Category Combinations, Category option combinations (limited to one use case, when the catoptcombination are the same).  Frontend support through the user interface is gradually implemented as well. So far the new Maintenance app supports meging options for Category option and Category option comninations, Indicators and Indicator types. In these cases the user is able to select the “source” object to merge and the “target” object to merge into.

[Documentation](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/metadata.html#webapi*indicator*merge) | Feature card | Screenshot 1 | 2 | 3



### [Improve metadata bundles (packages?) management [ROADMAP-38]](https://dhis2.atlassian.net/browse/ROADMAP-38)

*no description placeholder*



### [Java Persistence API (JPA) refactor - Preparation [ROADMAP-32]](https://dhis2.atlassian.net/browse/ROADMAP-32)

*no description placeholder*



## Maps

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Reports

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Web Capture

### [Unified query language to align Line Lists with Program Indicators [ROADMAP-292]](https://dhis2.atlassian.net/browse/ROADMAP-292)

*no description placeholder*



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [Allow configuration to prevent user to add another event when scheduled is not complete in tracker capture tabular data entry [ROADMAP-250]](https://dhis2.atlassian.net/browse/ROADMAP-250)

*no description placeholder*



### [Program rule toggle [ROADMAP-243]](https://dhis2.atlassian.net/browse/ROADMAP-243)

*no description placeholder*



### [Cross-program / Tracked Entity Indicators [ROADMAP-183]](https://dhis2.atlassian.net/browse/ROADMAP-183)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Bulk enrollment [ROADMAP-170]](https://dhis2.atlassian.net/browse/ROADMAP-170)

*no description placeholder*



### [Allow view access to the patient for viewing own/child's records [ROADMAP-136]](https://dhis2.atlassian.net/browse/ROADMAP-136)

*no description placeholder*



### [Formatting tools for printing (certificates and data entry forms) [ROADMAP-135]](https://dhis2.atlassian.net/browse/ROADMAP-135)

*no description placeholder*



### [Strengthen support for surveillance validation rules, notifications and how these are presented to users for follow-up actions [ROADMAP-134]](https://dhis2.atlassian.net/browse/ROADMAP-134)

*no description placeholder*



### [Re-run program rules for existing data [ROADMAP-132]](https://dhis2.atlassian.net/browse/ROADMAP-132)

*no description placeholder*



### [TEI management tool [ROADMAP-131]](https://dhis2.atlassian.net/browse/ROADMAP-131)

*no description placeholder*



### [Cross program rules [ROADMAP-130]](https://dhis2.atlassian.net/browse/ROADMAP-130)

*no description placeholder*



### [Online/ offline switch for Android app [ROADMAP-117]](https://dhis2.atlassian.net/browse/ROADMAP-117)

*no description placeholder*



### [Tracker data sync (formerly server-to-server sync) [ROADMAP-83]](https://dhis2.atlassian.net/browse/ROADMAP-83)

*no description placeholder*



### [Reusable "capture building blocks" [ROADMAP-77]](https://dhis2.atlassian.net/browse/ROADMAP-77)

*no description placeholder*



### [Expression editing help for program rules and program indicators [ROADMAP-67]](https://dhis2.atlassian.net/browse/ROADMAP-67)

*no description placeholder*



### [Data sunsets, clean out expired personal information [ROADMAP-61]](https://dhis2.atlassian.net/browse/ROADMAP-61)

*no description placeholder*



### [Configure DHIS2 Tracker and Event Program Terminology [ROADMAP-56]](https://dhis2.atlassian.net/browse/ROADMAP-56)

*no description placeholder*



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*





# Configure (System)

## Android Capture

### [Enable to configure an icon to use as the app widget [ROADMAP-306]](https://dhis2.atlassian.net/browse/ROADMAP-306)

*no description placeholder*



### [Support dynamic modules/use cases [ROADMAP-264]](https://dhis2.atlassian.net/browse/ROADMAP-264)

*no description placeholder*



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [App android settings – synchronization by user group [ROADMAP-225]](https://dhis2.atlassian.net/browse/ROADMAP-225)

*no description placeholder*



### [Custom icons [ROADMAP-207]](https://dhis2.atlassian.net/browse/ROADMAP-207)

DHIS2 2 now supports uploading custom Icons to be used in addition to the built in Icon library. This is useful for use cases not related to health or that require very specific iconography. The Android App will render the custom icons that need to be uploaded and configured using the Maintenance DHIS2 Web App.

[Documentation](https://docs.dhis2.org/en/use/android-app/visual-configurations.html#capture*app*visual*icon*lib) | [Feature card](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-207-release-card.png) | [Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/41/ROADMAP-207-Image01.png)



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Enable/disable mobile users from web configuration [ROADMAP-114]](https://dhis2.atlassian.net/browse/ROADMAP-114)

*no description placeholder*



### [Enable deleting accounts without login under certain conditions [ROADMAP-100]](https://dhis2.atlassian.net/browse/ROADMAP-100)

*no description placeholder*



### [Request device sync from server [ROADMAP-70]](https://dhis2.atlassian.net/browse/ROADMAP-70)

*no description placeholder*



### [Webapp for Android Synchronization troubleshooting   [ROADMAP-69]](https://dhis2.atlassian.net/browse/ROADMAP-69)

The new Synchronization Troubleshooting Web App provides implementation administrators real-time visibility and troubleshooting capabilities for synchronization errors occurring in the last 24 hours tracker or event programs. It will enable sys admins to analyze persisted Android sync error API responses. The app is available in the App hub and will require administrators to install it in their instances. 

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*



## DHIS2

### [Metadata versioning [ROADMAP-288]](https://dhis2.atlassian.net/browse/ROADMAP-288)

*no description placeholder*



### [Improve org. unit component: filtering, advanced selections [ROADMAP-279]](https://dhis2.atlassian.net/browse/ROADMAP-279)

*no description placeholder*



### [App-specific settings in a central location [ROADMAP-277]](https://dhis2.atlassian.net/browse/ROADMAP-277)

*no description placeholder*



### [Invalidate user access cache [ROADMAP-68]](https://dhis2.atlassian.net/browse/ROADMAP-68)

*no description placeholder*



## Data Entry

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Data Exchange

### [Tracker to aggregate [ROADMAP-270]](https://dhis2.atlassian.net/browse/ROADMAP-270)

*no description placeholder*



## Data Visualizer

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Global (App Shell)

### [Customizable bundled contextualized documentation [ROADMAP-285]](https://dhis2.atlassian.net/browse/ROADMAP-285)

*no description placeholder*



### [Report error logs from clients (web browsers and android devices) for analysis on the server [ROADMAP-284]](https://dhis2.atlassian.net/browse/ROADMAP-284)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Import/Export

### [Metadata versioning [ROADMAP-288]](https://dhis2.atlassian.net/browse/ROADMAP-288)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Line Listing

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Login

### [Email-based authentication codes for multi-factor authentication [ROADMAP-234]](https://dhis2.atlassian.net/browse/ROADMAP-234)

From this version, DHIS2 also support email-based multi factor authentication (MFA). Email-based MFA should be configured at the system level and will be an option for the users when they are turning on MFA/2FA. If the user selects "Email", they system emails a one-time password to the provided email address.

Documentation | Feature card | Screenshot 1 | 2 | 3

## 
🎯 High Level use case 

It is likely that many of our less computer savvy users will not be able to set up and maintain a software based OTP solution such as google authenticator.

## :people*holding*hands: Users description

HISP SA require this flexibility on MFA type to support their compliance with ISO +27001+

## ❓ Problem Description

Please enable email based OTPs and when the user is turning on MFA/2FA for their account they are asked:

{quote}**How do you want to authenticate?**{quote}

** Authenticator app
** Email

If the user selects "Email", they system emails a one-time password to the email address on file and then states:

{quote}A two factor authentication code has been sent to **[email address]**.{quote}

[https://dhis2.atlassian.net/browse/DHIS2-13334](https://dhis2.atlassian.net/browse/DHIS2-13334)

## 🤔 Assumptions

List any assumptions you have about your users, technical constraints, or business goals.

## ℹ️ Sources

What were the sources of input for this requirement

## (!) Out of Scope

List the features discussed which are out of scope or might be revisited in a later release.

## (?) Open Questions

|**Question**|**Answer**|**Date Answered**|
|e.g., How might we make users more aware of this feature?|e.g., We'll announce the feature with a blog post and a presentation|Type // to add a date|



### [New, customizable version of the Login App [ROADMAP-46]](https://dhis2.atlassian.net/browse/ROADMAP-46)

*no description placeholder*



## Maintenance

### [Metadata versioning [ROADMAP-288]](https://dhis2.atlassian.net/browse/ROADMAP-288)

*no description placeholder*



### [Program Indicator Issues [ROADMAP-272]](https://dhis2.atlassian.net/browse/ROADMAP-272)

*no description placeholder*



### [Copy of Tracker to aggregate [ROADMAP-271]](https://dhis2.atlassian.net/browse/ROADMAP-271)

*no description placeholder*



### [Tracker to aggregate [ROADMAP-270]](https://dhis2.atlassian.net/browse/ROADMAP-270)

*no description placeholder*



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [OU Profile / Master School List [ROADMAP-251]](https://dhis2.atlassian.net/browse/ROADMAP-251)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Maps

### [Climate/enviromental Layers in DHIS2 Maps [ROADMAP-257]](https://dhis2.atlassian.net/browse/ROADMAP-257)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Reports

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Scheduler

### [Scheduled job queues configuration UI [ROADMAP-43]](https://dhis2.atlassian.net/browse/ROADMAP-43)

*no description placeholder*



## Usage Analytics

### [Report error logs from clients (web browsers and android devices) for analysis on the server [ROADMAP-284]](https://dhis2.atlassian.net/browse/ROADMAP-284)

*no description placeholder*



## Web Capture

### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Custom Periods (Academic periods) [ROADMAP-40]](https://dhis2.atlassian.net/browse/ROADMAP-40)

*no description placeholder*



### [Specific authority for completing or uncompleting enrollment [ROADMAP-345]](https://dhis2.atlassian.net/browse/ROADMAP-345)

*no description placeholder*





# Core / Platform

## Android Capture

### [Integrate Resource Feature from Web Reports into DHIS2 Android App [ROADMAP-313]](https://dhis2.atlassian.net/browse/ROADMAP-313)

*no description placeholder*



### [Android App - Technical debt / maintenance [ROADMAP-268]](https://dhis2.atlassian.net/browse/ROADMAP-268)

*no description placeholder*



### [Android Capture app DB dump [ROADMAP-244]](https://dhis2.atlassian.net/browse/ROADMAP-244)

*no description placeholder*



### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [cascade optionsets [ROADMAP-226]](https://dhis2.atlassian.net/browse/ROADMAP-226)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Cold-chain temperature monitoring app [ROADMAP-82]](https://dhis2.atlassian.net/browse/ROADMAP-82)

*no description placeholder*



### [Request device sync from server [ROADMAP-70]](https://dhis2.atlassian.net/browse/ROADMAP-70)

*no description placeholder*



### [Improve sync process performance (tracker-android) [ROADMAP-51]](https://dhis2.atlassian.net/browse/ROADMAP-51)

*no description placeholder*



## DHIS2

### [Improved header bar menu - Shortcuts and Deep Link navigation [ROADMAP-353]](https://dhis2.atlassian.net/browse/ROADMAP-353)

The DHIS2 *headerbar menu* component has been updated to offer more keyboard controls, logout option, improved app navigation and shortcuts / deep Link navigation to sections within DHIS2 Apps. Examples include shortcuts with direct access  to sections within the Maintenance App such as Data elements or Data Sets maintenance.

[Jira](https://dhis2.atlassian.net/browse/DHIS2-19411?atlOrigin=eyJpIjoiZTE3MzJmZmRiMjA2NDEzY2IwODM1NzVmMDdlMTY0NmMiLCJwIjoiaiJ9) | Feature card | Screenshot 1 | 2 | 3



### [Export idScheme [ROADMAP-351]](https://dhis2.atlassian.net/browse/ROADMAP-351)

The IdScheme support in the old tracker endpoints and the new Tracker endpoints have been aligned. Until now, New Tracker endpoints only supported importing tracker data with different idSchemes, but not when exporting. Exporting with different idSchemes is supported now.

The query parameters implemented are idScheme, categoryOptionComboIdScheme, categoryOptionIdScheme, dataElementIdScheme, orgUnitIdScheme, programIdScheme, programStageIdScheme. And valid values are one of UID, CODE, NAME, ATTRIBUTE:{uid}. 

The default is UID. All (supported) metadata is exported using the {{idScheme}} value unless it is overridden by one of the metadata-specific parameters. There might be metadata that is always exported using UIDs. Please check the individual endpoint issues/docs for specifics.

Support of different idSchemes is added to {{/tracker/trackedEntities}} and {{/tracker/events}} endpoints.

[Jira](https://dhis2.atlassian.net/browse/DHIS2-13363?atlOrigin=eyJpIjoiM2QwOWI5YmRkNzU2NGJhMGFiNGMyYTliMzJmOTI0NmQiLCJwIjoiaiJ9) | Feature card



### [Spring Framework Upgrades [ROADMAP-350]](https://dhis2.atlassian.net/browse/ROADMAP-350)

Ongoing upgrades to the Spring framework ensure that the security of DHIS2 is maintained

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Replace ANTLR with PEG expression parser [ROADMAP-321]](https://dhis2.atlassian.net/browse/ROADMAP-321)

*no description placeholder*



### [Org Units Favorites Feature Request [ROADMAP-311]](https://dhis2.atlassian.net/browse/ROADMAP-311)

*no description placeholder*



### [Translation packs for app interfaces (languages and terminology) [ROADMAP-291]](https://dhis2.atlassian.net/browse/ROADMAP-291)

*no description placeholder*



### [Data table component improvements, extensions [ROADMAP-280]](https://dhis2.atlassian.net/browse/ROADMAP-280)

*no description placeholder*



### [Accessibility across all apps and platform [ROADMAP-275]](https://dhis2.atlassian.net/browse/ROADMAP-275)

*no description placeholder*



### [Improve stability of apps by increase test quality and coverage  [ROADMAP-274]](https://dhis2.atlassian.net/browse/ROADMAP-274)

*no description placeholder*



### [Make it more intuitive to filter organization units [ROADMAP-246]](https://dhis2.atlassian.net/browse/ROADMAP-246)

*no description placeholder*



### [Allow larger API data/metadata queries to support complex filters [ROADMAP-217]](https://dhis2.atlassian.net/browse/ROADMAP-217)

*no description placeholder*



### [Tracker analytics stability improvements [ROADMAP-142]](https://dhis2.atlassian.net/browse/ROADMAP-142)

*no description placeholder*



### [Tracker analytics performance improvements [ROADMAP-141]](https://dhis2.atlassian.net/browse/ROADMAP-141)

*no description placeholder*



### [Telemetry / Global Analytics [ROADMAP-81]](https://dhis2.atlassian.net/browse/ROADMAP-81)

*no description placeholder*



### [Improved public portal support [ROADMAP-74]](https://dhis2.atlassian.net/browse/ROADMAP-74)

*no description placeholder*



### [Invalidate user access cache [ROADMAP-68]](https://dhis2.atlassian.net/browse/ROADMAP-68)

*no description placeholder*



### [Dedicated analytics backend database - Aggregated data [ROADMAP-49]](https://dhis2.atlassian.net/browse/ROADMAP-49)

Support for Apache doris as dedicated analytics database architecture for aggregated data. Deploying a dedicated analytics database architecture is to improve performance in query executions and the Analytics table update time. It also represents a modernization of analytics backend code incorporating Object orientation and abstraction and improved test automation coverage.

Dedicated analytics database will be available for implementations to set up and test for aggregated data in v42 and individual data in v43.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [Accessibility improvements of UI library [ROADMAP-36]](https://dhis2.atlassian.net/browse/ROADMAP-36)

*no description placeholder*



### [Initial version of new expression parser - program rules [ROADMAP-33]](https://dhis2.atlassian.net/browse/ROADMAP-33)

*no description placeholder*



### [Remove (most) of Apache Struts framework [ROADMAP-31]](https://dhis2.atlassian.net/browse/ROADMAP-31)

*no description placeholder*



## Dashboard

### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [cascade optionsets [ROADMAP-226]](https://dhis2.atlassian.net/browse/ROADMAP-226)

*no description placeholder*



### [Improved public portal support [ROADMAP-74]](https://dhis2.atlassian.net/browse/ROADMAP-74)

*no description placeholder*



## Data Entry

### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [cascade optionsets [ROADMAP-226]](https://dhis2.atlassian.net/browse/ROADMAP-226)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Data Exchange

### [Tracker to aggregate [ROADMAP-270]](https://dhis2.atlassian.net/browse/ROADMAP-270)

*no description placeholder*



## Data Visualizer

### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [cascade optionsets [ROADMAP-226]](https://dhis2.atlassian.net/browse/ROADMAP-226)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Global (App Shell)

### [Customizable bundled contextualized documentation [ROADMAP-285]](https://dhis2.atlassian.net/browse/ROADMAP-285)

*no description placeholder*



### [Report error logs from clients (web browsers and android devices) for analysis on the server [ROADMAP-284]](https://dhis2.atlassian.net/browse/ROADMAP-284)

*no description placeholder*



### [Batched API requests across the network [ROADMAP-283]](https://dhis2.atlassian.net/browse/ROADMAP-283)

*no description placeholder*



### [App Platform tools [ROADMAP-273]](https://dhis2.atlassian.net/browse/ROADMAP-273)

*no description placeholder*



### [Dark Mode [ROADMAP-194]](https://dhis2.atlassian.net/browse/ROADMAP-194)

*no description placeholder*



### [Session expiration handling [ROADMAP-193]](https://dhis2.atlassian.net/browse/ROADMAP-193)

*no description placeholder*



### [Global App Shell optional backend support [ROADMAP-190]](https://dhis2.atlassian.net/browse/ROADMAP-190)

*no description placeholder*



### [Universal Search in Command Pallet [ROADMAP-189]](https://dhis2.atlassian.net/browse/ROADMAP-189)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Global Command Pallet [ROADMAP-53]](https://dhis2.atlassian.net/browse/ROADMAP-53)

*no description placeholder*



## Import/Export

### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Line Listing

### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [cascade optionsets [ROADMAP-226]](https://dhis2.atlassian.net/browse/ROADMAP-226)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Login

### [New, customizable version of the Login App [ROADMAP-46]](https://dhis2.atlassian.net/browse/ROADMAP-46)

*no description placeholder*



## Maintenance

### [Program Indicator Issues [ROADMAP-272]](https://dhis2.atlassian.net/browse/ROADMAP-272)

*no description placeholder*



### [Copy of Tracker to aggregate [ROADMAP-271]](https://dhis2.atlassian.net/browse/ROADMAP-271)

*no description placeholder*



### [Tracker to aggregate [ROADMAP-270]](https://dhis2.atlassian.net/browse/ROADMAP-270)

*no description placeholder*



### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [cascade optionsets [ROADMAP-226]](https://dhis2.atlassian.net/browse/ROADMAP-226)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Maps

### [Relative period 10 financial years in visualizer [ROADMAP-235]](https://dhis2.atlassian.net/browse/ROADMAP-235)

*no description placeholder*



### [cascade optionsets [ROADMAP-226]](https://dhis2.atlassian.net/browse/ROADMAP-226)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Reports

### [Integrate Resource Feature from Web Reports into DHIS2 Android App [ROADMAP-313]](https://dhis2.atlassian.net/browse/ROADMAP-313)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



## Scheduler

### [Scheduler app declarative architecture [ROADMAP-37]](https://dhis2.atlassian.net/browse/ROADMAP-37)

*no description placeholder*



## Usage Analytics

### [Report error logs from clients (web browsers and android devices) for analysis on the server [ROADMAP-284]](https://dhis2.atlassian.net/browse/ROADMAP-284)

*no description placeholder*



## Web Capture

### [Integrate Kotlin multiplatform rule engine with Capture App [ROADMAP-333]](https://dhis2.atlassian.net/browse/ROADMAP-333)

The Web Capture App, the Android Capture App and backend use the same rule engine from v42. this ensures consistency in the program rules configuration and and how actions are triggered across all platforms.

Documentation | Feature card | Screenshot 1 | 2 | 3



### [cascade optionsets [ROADMAP-226]](https://dhis2.atlassian.net/browse/ROADMAP-226)

*no description placeholder*



### [Multiple Organisation Unit Hierarchies [ROADMAP-174]](https://dhis2.atlassian.net/browse/ROADMAP-174)

*no description placeholder*



### [Tracker request and response payload harmonization [ROADMAP-88]](https://dhis2.atlassian.net/browse/ROADMAP-88)

*no description placeholder*





# Extend

## Android Capture

### [Support integration with external APIs  [ROADMAP-265]](https://dhis2.atlassian.net/browse/ROADMAP-265)

*no description placeholder*



### [Support dynamic modules/use cases [ROADMAP-264]](https://dhis2.atlassian.net/browse/ROADMAP-264)

*no description placeholder*



### [Support custom Android intents (by configuration) [ROADMAP-263]](https://dhis2.atlassian.net/browse/ROADMAP-263)

*no description placeholder*



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [Cold-chain temperature monitoring app [ROADMAP-82]](https://dhis2.atlassian.net/browse/ROADMAP-82)

*no description placeholder*



## DHIS2

### [Translation packs for app interfaces (languages and terminology) [ROADMAP-291]](https://dhis2.atlassian.net/browse/ROADMAP-291)

*no description placeholder*



### [Server-side extensions [ROADMAP-282]](https://dhis2.atlassian.net/browse/ROADMAP-282)

*no description placeholder*



### [Support event hook notifications for data [ROADMAP-192]](https://dhis2.atlassian.net/browse/ROADMAP-192)

*no description placeholder*



### [Multi calendar - Dates in APIs [ROADMAP-71]](https://dhis2.atlassian.net/browse/ROADMAP-71)

*no description placeholder*



### [Consume external APIs - Generic [ROADMAP-59]](https://dhis2.atlassian.net/browse/ROADMAP-59)

*no description placeholder*



### [Improved native support for code systems & terminologies [ROADMAP-58]](https://dhis2.atlassian.net/browse/ROADMAP-58)

*no description placeholder*



## Dashboard

### [Allow custom plugins to be added to a dashboard [ROADMAP-334]](https://dhis2.atlassian.net/browse/ROADMAP-334)

The dashboard now supports custom plugins built with the app platform to be added  as dashboard items.

[Documentation](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/dashboards.html#adding-items-to-the-dashboard) | Feature card | Screenshot 1 | 2 | 3



### [Embedded Superset Dashboards  [ROADMAP-317]](https://dhis2.atlassian.net/browse/ROADMAP-317)

Many countries and organizations have their data spread out across multiple instances of DHIS2. Often, these instances are not synchronized in terms of metadata, which complicates integration and reporting. DHIS2 has not offered an easy way to present dashboards with data from multiple instances. This functionality implements support for embedding external Superset dashboards in our core dashboards app.

Documentation | Feature card | Screenshot 1 | 2 | 3



## Global (App Shell)

### [Support custom commands in command pallet [ROADMAP-289]](https://dhis2.atlassian.net/browse/ROADMAP-289)

*no description placeholder*



### [Customizable bundled contextualized documentation [ROADMAP-285]](https://dhis2.atlassian.net/browse/ROADMAP-285)

*no description placeholder*



### [App Platform tools [ROADMAP-273]](https://dhis2.atlassian.net/browse/ROADMAP-273)

*no description placeholder*



### [Session expiration handling [ROADMAP-193]](https://dhis2.atlassian.net/browse/ROADMAP-193)

*no description placeholder*



### [Global App Shell optional backend support [ROADMAP-190]](https://dhis2.atlassian.net/browse/ROADMAP-190)

*no description placeholder*



### [Global Command Pallet [ROADMAP-53]](https://dhis2.atlassian.net/browse/ROADMAP-53)

*no description placeholder*



## Login

### [New, customizable version of the Login App [ROADMAP-46]](https://dhis2.atlassian.net/browse/ROADMAP-46)

*no description placeholder*



## Maintenance

### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [Improve Master Facility List capabilities: [ROADMAP-181]](https://dhis2.atlassian.net/browse/ROADMAP-181)

*no description placeholder*



## Maps

### [Custom map layers as a new extension point [ROADMAP-290]](https://dhis2.atlassian.net/browse/ROADMAP-290)

*no description placeholder*



### [Climate/enviromental Layers in DHIS2 Maps [ROADMAP-257]](https://dhis2.atlassian.net/browse/ROADMAP-257)

*no description placeholder*



## Web Capture

### [Additional form field plugins in the Capture app - Working list [ROADMAP-329]](https://dhis2.atlassian.net/browse/ROADMAP-329)

*no description placeholder*



### [Improve DHIS2 Calculation of completeness rate to Exclude Weekends and Holidays [ROADMAP-258]](https://dhis2.atlassian.net/browse/ROADMAP-258)

*no description placeholder*



### [Formfield and dashboard plugins in the Capture app [ROADMAP-191]](https://dhis2.atlassian.net/browse/ROADMAP-191)

*no description placeholder*



### [Allow view access to the patient for viewing own/child's records [ROADMAP-136]](https://dhis2.atlassian.net/browse/ROADMAP-136)

*no description placeholder*






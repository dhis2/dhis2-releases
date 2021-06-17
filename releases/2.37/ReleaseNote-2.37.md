🚧 UNDER CONSTRUCTION 🚧

# DHIS version 2.37 Release Note

## DEVELOPMENT
<!-- +dev -->
- [Analytics](#analytics-features)
- [Tracker](#tracker-and-event-features)
- [Platform](#platform-features)
- [API](#api-features)

### ANALYTICS FEATURES


**Indicator type for single value:** This will add a "%, per thousand, per ten thousand, or per hundred thousand" to the single value chart type based upon the indicator factor. [jira](https://jira.dhis2.org/browse/DHIS2-7420)

**Dashboard default layout** will automatically configure a dashboard as users add more items. [jira](https://jira.dhis2.org/browse/DHIS2-3600)

**Org unit drill down in charts** will be enabled as long as the org unit demension are not in the filter. [jira](https://jira.dhis2.org/browse/DHIS2-11061)

**Freeze for and column headers in pivot tables** will allow users to scroll through large pivot tables while not loosing reference to the data labels. [jira](https://jira.dhis2.org/browse/DHIS2-11057)

**Axis labels for multi-axis charts** [jira](https://jira.dhis2.org/browse/DHIS2-6672)

**Continuous analytics for event and enrollment data** will make it possible to see new tracker and event data added to your dashboard in real-time. [jira](https://jira.dhis2.org/browse/DHIS2-11188)

**Last 10 years relative period** in data visualizer and maps applications. [jira](https://jira.dhis2.org/browse/DHIS2-7029)

**Organizational unit profile in maps application** will display key information for each organizational unit when you hover over it. This will make DHIS2 much more suitable as a master facility list.[jira](https://jira.dhis2.org/browse/DHIS2-11176)

**Offline dashboards** enables users on mobile or computer to save a dashboard to be viewable offline. When selected the dashboard will cashe onto the device and the user will be able to view that dashboard while offline. No new data will be added to the dashboard, and filters and interpretations will not be available on a dashboard while offline. However, viewing as in fullscreen mode will be available. This will help those working in places with poor internet connection to continue to be able to access their analytics even when offline. [jira](https://jira.dhis2.org/browse/DHIS2-10874)

**Custom date labels are respected in event reports downloads** [jira](https://jira.dhis2.org/browse/DHIS2-9641)

**Legend key for pivot tables on dashboard** will be available if a legend is applied to a pivot table to make it into a scorecard. [jira](https://jira.dhis2.org/browse/DHIS2-6296)


### TRACKER AND EVENT FEATURES

**Performance improvements:** Improvements to Tracker database lock issues (concurrency); Improved routines and pipelines for performance testing; updates to new Tracker importer

**Deduplication:** Strengthening the search/warning on registration of new TEI; Improved services for returning potential duplicates

**Tracker features in Capture App:** new tool for generating and interacting with managements for TEIs; expand capture app to allow users to work with enrollments and events in tracker programs; user acceptance testing


### PLATFORM FEATURES


### API FEATURES
<!-- -dev -->
- [Analytics](#analytics)
- [Tracker](#tracker)
- [Platform](#platform)
- [API](#api)

## DESIGN AND REQUIREMENTS GATHERING
<!-- +des -->
### ANALYTICS

**Design of the new event reports/line listing application:** we are working on the next generation of the event reports and linelisting application. The development of this application is expected to extend through the 2.37 release and we expect the first version to be released in 2.38. [jira](https://jira.dhis2.org/browse/DHIS2-3442)

**Dashboard cascade sharing** will enable dashboard owners to share a dahsobard and all of is consitient meta-data to users at one time. This will remove the burden of having to make sure all individual sharing pemissions for object on the dahsobard are in agreement for a user to be able to view the dashboard. [jira](https://jira.dhis2.org/browse/DHIS2-101)

**New series management in the data visualizer application:** There is an ever expanding fuctionality in the data visualizer application, and this means that we periodically have to update your menues and user experience to keep the application easy to use. Now we are working to design a new series management menue so that we can continue to expand the fuctionality specifially around custom series colors. [jira](https://jira.dhis2.org/browse/DHIS2-11132)

### TRACKER

**Deduplication:** design for merging of identified duplicates

**Tracker features in Capture App:** requirements for editing multiple TEIs in a line-listed format

**Sync**: requirements gathering and design for improved sync between instances / servers

### PLATFORM


### API


<!-- -des -->

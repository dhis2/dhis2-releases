🚧 UNDER CONSTRUCTION 🚧

# DHIS version 2.37 Release Note

## DEVELOPMENT

<!-- BEGIN-WEBSITE-SYNC-ID:dev -->

### ANALYTICS FEATURES

**Indicator type for single value**: This will add a "%, per thousand, per ten thousand, or per hundred thousand" to the single value chart type based upon the indicator factor. [DHIS2-7420](https://jira.dhis2.org/browse/DHIS2-7420)

**Dashboard default layout** will automatically configure a dashboard as users add more items. [DHIS2-3600](https://jira.dhis2.org/browse/DHIS2-3600)

**Org unit drill down in charts** will be enabled as long as the org unit dimension are not in the filter. [DHIS2-11061](https://jira.dhis2.org/browse/DHIS2-11061)

**Freeze for and column headers in pivot tables** will allow users to scroll through large pivot tables while not loosing reference to the data labels. [DHIS2-11057](https://jira.dhis2.org/browse/DHIS2-11057)

**Axis labels for multi-axis charts** [DHIS2-6672](https://jira.dhis2.org/browse/DHIS2-6672)

**Continuous analytics for event and enrollment data** will make it possible to see new tracker and event data added to your dashboard in real-time. [DHIS2-11188](https://jira.dhis2.org/browse/DHIS2-11188)

**Last 10 years relative period** in data visualizer and maps applications. [DHIS2-7029](https://jira.dhis2.org/browse/DHIS2-7029)

**Organizational unit profile in maps application** will display key information for each organizational unit when you hover over it. This will make DHIS2 much more suitable as a master facility list. [DHIS2-11176](https://jira.dhis2.org/browse/DHIS2-11176)

**Offline dashboards** enables users on mobile or computer to save a dashboard to be viewable offline. When selected the dashboard will be cached on the device and the user will be able to view that dashboard while offline. No new data will be added to the dashboard, and filters and interpretations will not be available on a dashboard while offline. However, viewing as in full-screen mode will be available. This will help those working in places with poor internet connection to continue to be able to access their analytics even when offline. [DHIS2-10874](https://jira.dhis2.org/browse/DHIS2-10874)

**Custom date labels are respected in event reports downloads** [DHIS2-9641](https://jira.dhis2.org/browse/DHIS2-9641)

**Legend key for pivot tables on dashboard** will be available if a legend is applied to a pivot table to make it into a scorecard. [DHIS2-6296](https://jira.dhis2.org/browse/DHIS2-6296)

### TRACKER AND EVENT FEATURES

**Performance improvements:** Improvements to Tracker database lock issues (concurrency); Improved routines and pipelines for performance testing; updates to new Tracker importer

**Deduplication:** Strengthening the search/warning on registration of new TEI; Improved services for returning potential duplicates

**Tracker features in Capture App:** new tool for generating and interacting with managements for TEIs; expand capture app to allow users to work with enrollments and events in tracker programs; user acceptance testing

### PLATFORM FEATURES

**Data Approval app:** A new data approval app is available, supporting multiple, parallel data approval workflows. After selecting a workflow, period and org unit, it allows the user to view data from all data sets associated with the workflow. The app features the new and modern DHIS 2 user experience, making data approval more efficient and user-friendly. The app is built using the new DHIS 2 front-end technology stack.

**Org unit image:** An image can be uploaded and associated with an organisation unit. This is useful e.g. for facility assessments and surveys, where an image should be taken of the facility and be part of the assessment.

**Org unit profile:** You can new design a profile for organisation units, which allows you to include an image and specify metadata attributes, org unit group sets/groups and data for data elements and indicators to display. The org unit profile must currently be configured through the API; user interface support is coming in the next release. The maps application lets you view the profile by right-clicking on an org unit in a map layer and clicking the Show more info button.

**Modified Z-score:** Outlier detection based on the modified Z-score statistical method is now available in the data quality app. The modified Z-score method is based on a value's distance from the median, and not the mean like the regular Z-score, and more resilient towards outliers in a dataset.

**App Hub**: Along with a new design, improved interfaces for managing applications, and support for organizations with multiple developers, the user experience when navigating between applications has been much improved. It is now possible to login to the App Hub with a GitHub account as an alternative to a Google account. For a complete reference on changes to the App Hub, please refer to the [changelog](https://github.com/dhis2/app-hub/blob/master/CHANGELOG.md).

**App Management app**: A new design that builds on the DHIS2 design principles and UI components has been introduced, in addition to many user experience improvements. The App Management application will now receive in-app notifications that there is a newer version of an application available on the App Hub that is compatible with the running DHIS2 version, along with a one-click update functionality. A complete reference of all the changes to App Management is available in the [changelog](https://github.com/dhis2/app-management-app/blob/master/CHANGELOG.md).

**App Platform**: To support a continuous delivery to the App Hub the d2-app-scripts has received a new command, `publish`, that after an initial configuration will publish a new version of an application to the App Hub. This is useful in both local command line environments, and
in continuous integration pipelines. Please refer to the [changelog](https://github.com/dhis2/app-platform/blob/master/CHANGELOG.md) for a complete list of bug fixes and features.

**App Runtime**: To promote best practices when communicating with the API, the application runtime will now warn in _development mode_ when a query does not use paging, or when fields are not explicitly added. Promoting good development practice in terms of API use is important for DHIS2 to function at scale. The [changelog](https://github.com/dhis2/app-runtime/blob/master/CHANGELOG.md) contains a full list of changes per version.

**DHIS2 UI**: The DHIS2 UI library has additional functionality useful for building DHIS2 Applications, such as the `DataTable` components, accessibility enhancements, and bug fixes.

For more information about specific bug fixes and features and in what versions they are available, refer to the [changelog](https://github.com/dhis2/ui/blob/master/CHANGELOG.md).

### API FEATURES

**Split org unit:** The new `/organisationUnits/split` endpoint allows for splitting an organisation unit into multiple organisation units. All associated metadata and tracker data will be transferred to the target organisation units. This is useful e.g. when a district splits into multiple, new districts.

[Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/metadata.html#webapi_organisation_unit_split)

**Merge org units**: The new `/organisationUnits/merge` endpoint allows for merging multiple organisation units into one. All associated metadata, data values and tracker data will be merged and transferred to the target organisation unit. This is useful e.g. when multiple districts merge into one district.

[Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/metadata.html#webapi_organisation_unit_merge)

 

<!-- END-WEBSITE-SYNC-ID:dev -->

## DESIGN AND REQUIREMENTS GATHERING

<!-- BEGIN-WEBSITE-SYNC-ID:des -->

### ANALYTICS

**Design of the new event reports/line listing application:** we are working on the next generation of the event reports and line-listing application. The development of this application is expected to extend through the 2.37 release and we expect the first version to be released in 2.38. [DHIS2-3442](https://jira.dhis2.org/browse/DHIS2-3442)

**Dashboard cascade sharing** will enable dashboard owners to share a dashboard and all of is consistent meta-data to users at one time. This will remove the burden of having to make sure all individual sharing permissions for object on the dashboard are in agreement for a user to be able to view the dashboard. [DHIS2-101](https://jira.dhis2.org/browse/DHIS2-101)

**New series management in the data visualizer application:** There is an ever expanding functionality in the data visualizer application, and this means that we periodically have to update your menus and user experience to keep the application easy to use. Now we are working to design a new series management menu so that we can continue to expand the functionality specifically around custom series colors. [DHIS2-11132](https://jira.dhis2.org/browse/DHIS2-11132)

### TRACKER

**Deduplication:** design for merging of identified duplicates

**Tracker features in Capture App:** requirements for editing multiple TEIs in a line-listed format

**Sync**: requirements gathering and design for improved sync between instances / servers

### Deprecation Notice

- **XML** support for metadata endpoints
- **PDF** support for metadata endpoints
- **XLS** support for metadata endpoints
- **CSV** support for metadata endpoints

<!-- END-WEBSITE-SYNC-ID:des -->

# DHIS version 2.39 Release Note



## ANALYTICS FEATURES

**Legend sets for linelists:** In the linelisting application you can not apply a legend to any data item. Legends can be predefined or automatically generated. This allows you to make your data more easily interpretable by applying a color coding to indicate performance, status, or severity. 

[Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/39/2-39_Legend_in_linelists.png) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-75)

**Scheduled/due data in linelists:** Scheduled data is not a time dimension in the linelisting application. You are now able to present or filter data by scheduled data. 

[Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/39/2-39_schedule_date_in_linelist.png) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12309)

**Earth Engine Importer:** In the import/export application there is now the ability to import data sets from the Google Earth Engine. These are the same Google Earth Engine data sets you are able to see in the maps application such as population and population by age and sex. This will allow implementations to use the data from Google Earth Engine as they would any other data in DHIS2, for example to visualize in the analytics application, use in indicator calculations, or use in validation rules and other data quality checks. 

[Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/39/2-39_GEE_importer.png) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-11966)

**Organisation Unit Geometry Importer:** In the import/export application there is now the ability to import associated additional geometries in GeoJSON format for organisation units. This allows system administrators to import catchment areas for health facilities or other additional shapes or points for organisation units. 

[Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/39/2-39_geometry_importer.png) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-11969)

## TRACKER AND EVENT FEATURES

**Continuously released Capture App:** The Capture app was released shortly after the 2.38 release on the App Hub, and is now continuously released in 2.38 and 2.39. If you are running any of these versions you will be able to continuously upgrade to the latest version of the Capture app and receive the following features and fixes. The following tracker features are all available in both the 2.38 and 2.39 versions though the App Hub.

[Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/39/2-39_app_hub.png)

**Enroll TEI in multiple programs:** A tracked entity instance (TEI) can now be enrolled in multiple programs in the Capture app.

[Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/39/2-39_TEI_multiple_programs.png) | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#re-enroll-an-existing-tracked-entity-instance) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12141)

**Open data entry after enrollment:** When enrolling a TEI into a program where one of the program stages is marked to be opened after enrollment, the user is taken directly to the form for adding that program stage to the enrollment. This is useful for reducing the amount of clicks and speeding up the data entry process.

[Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#enrollment-with-open-data-entry-form) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12611)

**Display front page lists:** The front page list view can now be disabled in the Capture app. After selecting the program and org unit, the user can be taken directly to the search screen instead of displaying the list of tracked entity instances enrolled in the org unit. This will improve the user experience when users are expected to primarily search and find tracked entity instances. Avoiding unnecessary loading of the front page list also has performance benefits.

[Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#list-tracked-entity-instances-enrolled-in-program) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12140)

**Working lists in search screen:** In the Capture app, the search screen will now show working lists for the selected program. This is helpful when the user either wants to search for a tracked entity instance or in some cases use a targeted working list. This works well in combination with disabling the front page list and instead directing a user to the search page, but also for allowing one-click access to working lists.

[Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/39/2-39_show_working_list_search.png) | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#custom-tei-working-list-for-programs-with-display-front-page-list-set-to-false) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12140)

**See previous selected org unit:** In the Capture app, a user that just deselected an org unit in the context selector will see the previously selected org unit highlighted. This is useful when working systematically through many org units.

[Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/39/2-39_previous_orgunit.png) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-13472)

**Preserve filters on navigation:** When filtering and sorting a working list in the Capture app, the filter selections will now persist through context switches. This is useful when a user needs to apply a filter across different org units as the org unit can be changed without losing the current filter and list settings. This works both with saved working lists and with unsaved filters.

Screenshot  | [Jira](https://dhis2.atlassian.net/browse/DHIS2-13285)

**Improved search in all programs:** When searching for a tracked entity instance in a specific program, the search might not yield any result in the context of the program. In this case the user can expand the search to look for a tracked entity instance in all programs. The expanded search happens without the user changing the context, and the possible expanded search results are displayed below the original program results. This allows the user to easily revise the search criteria and continue working in the context they started in, potentially expanding the search again if no results are found in the program.

[Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/39/2-39_search_all_programs.png) | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#search-for-tracked-entity-instances) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12678)

## PLATFORM FEATURES

**New data entry app:** A new aggregate data entry app is now available. The new app is built on the new modern technology stack and brings a number of usability improvements. The data set, org unit and period selection are always visible, making it easy to see the current selections. The org unit tree makes it easy to see which org units are open for data entry for the currently selected data set. The details of a data value, including metadata info, comments, min and max limits, data value history and audit log are available in a sidebar and can remain visible while doing data entry. Data validation rules will open and can be easily triggered in a sidebar as well. Data which is captured offline will be automatically synchronized with the server. The new data entry app lacks Javascript/CSS support for custom forms (HTML only). This will be added in version 2.40. The current data entry module will be phased out and removed in version 2.41.

Screenshot | Demo | Docs

**User group management:** The user group management in the user app now supports adding and removing users for databases which contain a large number of users. Users can be added and removed individually and the modifications will take effect when the user group is saved.

Screenshot | Demo | Docs

**GeoJSON importer:** A new import service supporting the GeoJSON format for geospatial data is now available. TODO

Screenshot | Demo | Docs

**Aggregate data exchange:** A new service for aggregate data exchange allows for exchanging data from one DHIS2 instance to another, as well as within a single instance of DHIS2. The service will aggregate data in the source instance using the analytics engine, and import the data as "raw" data values in the target instance. This means that data elements, indicators and program indicators can be used to generate data values in the source instance. A new web app named *Data exchange* is available from the App Hub. This is useful for transferring data from an HMIS instance to a DHIS2 data portal instance, to import aggregated numbers into a DHIS2 HMIS instance based on individual records in a DHIS 2 tracker instance, and to pre-compute aggregate numbers based on individual tracker records using program indicators.

Screenshot | Demo | App Hub | [API docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/data-exchange.html)

**Redis for cluster management:** When running DHIS2 in a cluster (using multiple servers/nodes for a single instance), Redis can now be used for dynamic invalidation of caches across instances. This is an improvement over the Debezium-based approach introduced in 2.38 as it is more reliable and works on other database engines beyond standard PostgreSQL such as AWS RDS. The new cluster management solution allows for adding and removing nodes dynamically without any updates to the DHIS2 configuration files of the existing nodes. The new solution requires Redis to be available, though Redis is already required for cluster configurations.

Docs

### PLATFORM API FEATURES

**Shorthand fields notation for attributes:** A new shorthand notation is supported for attributes and values in the metadata endpoints. Retrieving attribute values used to be cumbersome, and can now be conveniently referred to using the metadata attribute identifier: `fields=id,name,{attribute-id}`. The same applies to object filtering, where the attribute identifier can be used in filters: `filter={attribute-id}:eq:{value}`.

Docs 1 | Docs 2

**Data entry endpoints:** A collection of API endpoints optimized for the new data entry app is made available. These endpoints are also useful for custom data entry web apps. These include retrieving metadata for accessible data sets, retrieving custom data entry forms, retrieving data values for a form, retrieving context for a form, saving min-max limits and completing a form.

[Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/data-entry.html)

**API improvements:** Several incremental API improvements have been made available.

* CSV data value import supports a data set parameter, allowing for completing the data set. Docs
* In the user data store API, an admin can modify data store values for other users through a `username` query parameter. Docs
* The data value importer only creates an audit record if the data value was actually modified (identical values are ignored). Docs
* The tracked entity audit endpoints support org unit, start and end date and program stage query parameters. Docs
* All geometry data for org units can be removed in a single API call, useful for integration. Docs
* Metadata attribute values are now properly validated based on the value type of the associated data element.
* Deletion of data elements is significantly faster.



## RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation|[https://docs.dhis2.org](https://docs.dhis2.org/)|
|Upgrade notes|[Upgrade notes on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.39/README.md)|
|Full list of features and bugs|[Release Note](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.39/ReleaseNote-2.39.0.md)|
|Source code on GitHub|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.39/|
|Docker image|`docker pull dhis2/core:2.39.0`|
|Docker Hub images|https://hub.docker.com/r/dhis2/core|
|Community forum|https://community.dhis2.org/|

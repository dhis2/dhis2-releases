# DHIS version 2.39 Release Note



## ANALYTICS FEATURES


TODO


## TRACKER AND EVENT FEATURES

**Continuously Released Capture App:** The Capture app was shortly after 2.38 released on the App Hub, and is being continously released on 2.38 and 2.39. If you are running any of these versions, you will be able to download the latest version of the Capture app containing most of the following features and fixes.

[Screenshot]()

**Enroll TEI in multiple programs(parity):** TEI can now be enrolled in multiple programs in the Capture app. The feature is available in both 2.38 and 2.39 through the App Hub.

[Screenshot]() | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#re-enroll-an-existing-tracked-entity-instance) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12141)

**Open data entry after erollment(parity):** When enrolling into a program in the Capture app, where one of the program stages is marked to be opened after enrollment, the user is taken directly to the form for adding that program stage to the enrollment. This is useful for reducing the amount of clicks and speeding up data entry. The feature is available in both 2.38 and 2.39 through the App Hub.

[Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#enrollment-with-open-data-entry-form) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12611)

**Display front page lists(parity):** It is now possible to turn off the front page list in the Capture app. After selecting the program and org unit context, the user is taken direcly to the search screen, in stead of loading the list of tracked entity instances enrolled in the org unit. This is useful to improve the user experience when users are expected to first and foremost locate tracked entity instances through searching. Avoiding unneccesary loading of the front page list also has performance benefits. The feature is available in both 2.38 and 2.39 through the App Hub.

[Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#list-tracked-entity-instances-enrolled-in-program) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12140)

**Working lists in search screen:** In the Capture app, the search screen will now show working lists for the selected program. This caters to a use case where there is a chance that the user either wants to search for a tracked entity instance, or in some cases use a targeted working list. This works well in combination with turning off the `display front page list` property; directing a user to the search page, but also allowing one-click access to working lists. The feature is available in both 2.38 and 2.39 through the App Hub.

[Screenshot]() | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#custom-tei-working-list-for-programs-with-display-front-page-list-set-to-false) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12140)

**See previous selected org unit:** In the Capture app, a user that just deselected the organisation unit in the context selector will see a highlight on the previous selection in the org unit selector. This is useful for a user that is working systematically through many org units, or simply deselected the previous org unit by mistake. The feature is available in both 2.38 and 2.39 through the App Hub.

[Screenshot]() | [Jira](https://dhis2.atlassian.net/browse/DHIS2-13472)

**Preserve filters on navigation:** When filtering and sorting the working list in the Capture app, the filter selections will now persist through context switches. This is useful when a user needs to apply a filter across different org units, as the org unit can be changed without losing the users current filter and list settings. This works both with saved working lists, and unsaved filters. The feature is available in both 2.38 and 2.39 through the App Hub.

[Jira](https://dhis2.atlassian.net/browse/DHIS2-13285)

**Improved _search in all programs_ functionality:** When a user in the Capture app is searching for a tracked entity instance in a specific program, the search might not yield any result in the context of the program. In this case the user can expand the search to look for the tracked entity instance in all programs. This workflow is now improved in that this expanded search happens without the user changing context, and the possible expanded search restults is displayed below the original program results. This is useful as the user can easily revise the search criteria and continue working in the context they started in, potentially expanding the search again if no results is found in the program. The feature is available in both 2.38 and 2.39 through the App Hub.

[Screenshot]() | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-238/tracking-individual-level-data/capture.html#search-for-tracked-entity-instances) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-12678)

## PLATFORM FEATURES

**New data entry app:** A new aggregate data entry app is now available. The new app is built on the new modern technology stack and brings a number of usability improvements. The data set, org unit and period selection is always visible, making it easy to see the current selections. The org unit tree makes it easy to see which org units are open for data entry for the currently selected data set. The details of a data value, including metadata info, comments, min and max limits, data value history and audit log are available in a sidebar and can remain visible while doing data entry. Data validation rules will open and can be easily triggered in a sidebar as well. Data which is captured offline will be automatically synchronized with the server. The new data entry app lacks Javascript/CSS support for custom forms (HTML only). This will be added in version 2.40. The current data entry module will be phased out and removed in version 2.41.

Screenshot | Demo | Docs

**User group management:** The user group management in the user app now supports adding and removing users for databases which contain a large number of users. Users can be added and removed individually and the modifications will take effect when the user group is saved.

Screenshot | Demo | Docs

GeoJSON importer: TODO

Screenshot | Demo | Docs

**Aggregate data exchange:** A new service for aggregate data exchange allows for exchanging data from one DHIS 2 instance to another, as well as within a single instance of DHIS 2. The service will aggregate data in the source instance using the analytics engine, and import the data as "raw" data values in the target instance. This means that data elements, indicators and program indicators can be used to generate data values in the source instance. A new web app named *Data exchange* is available from the App Hub. This is useful for transferring data from an HMIS instance to a DHIS 2 data portal instance, to import aggregated numbers into a DHIS 2 HMIS instance based on individual records in a DHIS 2 tracker instance, and to pre-compute aggregate numbers based on individual tracker records using program indicators.

Screenshot | Demo | App Hub

**Redis for cluster management:** When running DHIS 2 in a cluster (using multiple servers/nodes for a single instance), Redis can now be used for dynamic invalidation of caches across instances. This is an improvement over the Debezium-based approach introduced in 2.38 as it is more reliable and works on other database engines beyond standard PostgreSQL such as AWS RDS. The new cluster management solution allows for adding and removing nodes dynamically without any updates to the DHIS 2 configuration files of the existing nodes. The new solution requires Redis to be available, though Redis is already required for cluster configurations.

Docs

### PLATFORM API FEATURES

**Shorthand fields notation for attributes:** A new shorthand notation is supported for attributes and values in the metadata endpoints. Retrieving attribute values used to be cumbersome, and can now be conveniently referred to using the metadata attribute identifier:

```
/api/dataElements.json?fields=id,code,name,{attribute1-id},{attribute2-id}
```

The same applies to object filtering, where the attribute identifier can be used in filters:

```
/api/dataElements.json?filter={attribute1-id}:eq:{value}
```

Docs

**API improvements:** Several incremental API improvements have been made available.

* CSV data value import supports a data set parameter, allowing for completing the data set. Docs.
* In the user data store API, an admin can modify data store values for other users through a `username` query parameter. Docs.
* The data value importer only creates an audit record if the data value was actually modified (identical values are ignored). Docs.
* The tracked entity audit endpoints support org unit, start and end date and program stage query parameters. Docs.
* All geometry data for org units can be removed in a single API call, useful for integration. Docs.
* Metadata attribute values are now properly validated based on the value type of the associated data element.
* Deletion of data elements is significantly faster.



## RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation|[https://docs.dhis2.org](https://docs.dhis2.org/)|
|Upgrade notes|[Upgrade notes on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.39/README.md)|
|Full list of features and bugs|[Release Note](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.39/ReleaseNote-2.39.0.md)|
|Source code on Github|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.39/|
|Docker image|`docker pull dhis2/core:2.39.0`|
|Docker Hub images|https://hub.docker.com/r/dhis2/core|
|Community forum|https://community.dhis2.org/|

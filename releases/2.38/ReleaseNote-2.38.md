# DHIS version 2.38 Release Note

## ANALYTICS FEATURES



## TRACKER AND EVENT FEATURES

**Tracker program working lists improvements:** The functionality for working lists for Tracker programs has been expanded to be similar to those of Event working lists. The Capture app now allows working lists to be configured, saved, shared, deleted and updated through the user interface. 

Screenshot 1 | Screenshot 2 | Docs | [DHIS2-9275](https://jira.dhis2.org/browse/DHIS2-9275)

**Tracker features in Capture App:** In addition to the Tracker functionality that was added in 2.37 for closed beta testing, additional functionality has been added:


## PLATFORM FEATURES

**Version check notifications:** A new DHIS 2 version check notification service is introduced, which will send notifications in the form of DHIS 2 system inbox messages when newer versions of DHIS 2 has become available. This includes major and patch versions. This is useful to encourage sysadmins to upgrade DHIS 2 to keep their instance secure and up to date.

[Jira](https://jira.dhis2.org/browse/DHIS2-9897) | Docs

**GeoJSON metadata attributes:** GeoJSON is now supported as value type for metadata attributes. This allows you to store any number of GeoJSON documents e.g. for organisation units.

[Docs]() | [Jira](https://jira.dhis2.org/browse/DHIS2-12328)

**Cancel analytics table jobs:** You can now cancel (stop) analytics tables jobs while they are running. This is useful in order to stop long-running jobs without having to wait for them to complete.

Docs | [Jira](https://jira.dhis2.org/browse/DHIS2-6314)

**Configurable log level:** Logging levels can now be configured in the `dhis.conf` configuration file on the package level. This means that you can specify the log level to output for specific frameworks and modules within DHIS 2 directly in the DHIS 2 configuration file.

[Docs]() | [Jira](https://jira.dhis2.org/browse/DHIS2-11898)

**Account disable notifications:** When automatically disabling users through the disable users schedulded job, an email notification can be sent to the relevant user. The number of days before the notification can be defined in the job configuration. This is useful to give users a chance to log in before their account is disabled.

Docs | [Jira](https://jira.dhis2.org/browse/DHIS2-11589)

**Data value set input scheme:** Input schemes is now supported for the data value sets API endpoint, allowing you to import data using the code field to reference metadata.

Docs | [Jira](https://jira.dhis2.org/browse/DHIS2-9822)

**Group set short name:** The indicator group set and category option group sets now have short name properties, which allows for precise and UI-friendly rendering. The short names are now used as column names in resource tables instead of names.

Docs | [Jira](https://jira.dhis2.org/browse/DHIS2-7317)


### PLATFORM API FEATURES

**Data store improvements:** The data store API has received numerous improvements to make it a fully-fledged data store and more useful to web apps and other clients.

* **Field filtering:** Allows you to return only specific keys and values of entries in the data store using the `fields` parameter. Works similar to fields filtering in the metadata API. The filtering takes place at the namespace level and is useful when a client needs to list many entries with specific keys/values in a single query. [Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/data-store.html#datastore-query-api) | [Jira](https://jira.dhis2.org/browse/DHIS2-12154)
* **Paging:** In query responses, paging is supported and enabled by default. You can specify paging explicitly with the `page` and `pageSize` parameters. Paging is useful to work with namespaces with high numbers of entries. [Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/data-store.html#datastore-query-api) | [Jira](https://jira.dhis2.org/browse/DHIS2-12329)
* **Entry filtering:** Allows you to match and filter entries in a namespace based on a variety of operators, such as `eq`, `lt`, `le`, `gt`, `ge`, `like`, `null`, using the `filter` parameter. Works similar to object filtering in the metadata API. The filtering is useful when a client wants to list many entries which match one or many criteria. [Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/data-store.html#filtering-entries) | [Jira](https://jira.dhis2.org/browse/DHIS2-12331)
* **Sorting:** Allows you to sort entries in a namespace ascending or descending based on a specific key/value using the `order` parameter.  This is useful when clients have specific requirements for sorting a list of entries. Docs | [Jira](https://jira.dhis2.org/browse/DHIS2-12330)

**Request logging:** Clients of the API can now submit a value with the `X-Request-ID` HTTP header which is included in all log statements. This is useful when looking at DHIS 2 logs and trying to understand which client/app made a request, for example when debugging an issue which applies to a specific installation of an Android app on a phone.

Docs | [Jira](https://jira.dhis2.org/browse/DHIS2-6494)









### PLATFORM DEVELOPER FEATURES



## RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation|[https://docs.dhis2.org](https://docs.dhis2.org/)|
|Upgrade notes|[Upgrade notes on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.38/README.md)|
|Full list of features and bugs in this release|[Release Note](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.38/ReleaseNote-2.38.md)|
|Source code on Github|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.38/|
|Docker image|`docker pull dhis2/core:2.38.0`|
|Docker Hub images|https://hub.docker.com/repository/docker/dhis2/core|
|Community forum|https://community.dhis2.org/|

🚧 UNDER CONSTRUCTION 🚧

# DHIS version 2.37 Release Note

## ANALYTICS FEATURES

**Offline dashboards** enables users on mobile or computer to save a dashboard to be viewable offline. When selected the dashboard will be cached on the device and the user will be able to view that dashboard while offline. While offline no new data will be added to the dashboard, and filters and interpretations will not be available on a dashboard . Viewing as in full-screen mode will be available. This will help those working in places with poor internet connection to continue to be able to access their analytics even when offline rather on a smart phone, labtop, or PC. [DHIS2-10874](https://jira.dhis2.org/browse/DHIS2-10874)

Screenshot | Docs

**Cascading dashboard sharing:** makes it much easier to share dashboards with many users simply. In precvious versions of DHIS2 in order to share a dashboard the dashboards administator had to ensure that each individual dashboard item had at least "View only" shairing setting for the users or usergroups they wished to share the dashboard with. Now in 2.37 if the dashboard administrator chooses to apply the sharing to all dashboard visualazations then those users or usergroups will recieve "View only" permission to all dashboard items automatically.  [DHIS2-101](https://jira.dhis2.org/browse/DHIS2-101)

Screenshot | Docs

**Indicator type for single value**: This will add a "%, per thousand, per ten thousand, or per hundred thousand" to the single value chart type based upon the indicator factor. [DHIS2-7420](https://jira.dhis2.org/browse/DHIS2-7420)

Screenshot | Docs

**Dashboard default layout** will automatically configure a dashboard as users add more items. Users creating or editing a dashboard can not choose from either adding new items to the bottom or top of the dashboard. Users can also choose a number of columns they wish the dashboard to have. This will auto configure the size and shape of all dashboard items to the number of columns selected. [DHIS2-3600](https://jira.dhis2.org/browse/DHIS2-3600)

Screenshot | Docs

**Org unit drill down in bar and column charts** allows users to left click on a bar or column and go down or up one organization unit level. This is only possible if the org unit dimension is not in the filter. [DHIS2-11061](https://jira.dhis2.org/browse/DHIS2-11061)

Screenshot | Docs

**Freeze for row and column headers in pivot tables** will allow users to scroll through large pivot tables while not losing reference to the data labels. A user can turn these on in the data visualizer app when viewing a pivot table through the options menue on the style tab.  [DHIS2-11057](https://jira.dhis2.org/browse/DHIS2-11057)

Screenshot | Docs

**Select all option in "Your Dimensions" in the Data Visualizer app:** In 2.37 you are able to easily turn on all items in Your Dimensions. This is particularly useful if you have dimensions that are regularly changing as it will automatically update as new dimensions are added or unnecessary dimensions are removed. [DHIS2-9734](https://jira.dhis2.org/browse/DHIS2-9734)

Screenshot

**Text wrapping in pivot tables:** will automatically be applied to both long text data values as well as row and column headers. [DHIS2-11556](https://jira.dhis2.org/browse/DHIS2-11556)

Screenshot

**Axis labels for multi-axis charts** can not been added for all axis for bar, column, and line charts in the Data Visualizer application.[DHIS2-6672](https://jira.dhis2.org/browse/DHIS2-6672)

Screenshot | Docs

**Last 10 years relative period** has been added in the Data Visualizer and Map applications. [DHIS2-7029](https://jira.dhis2.org/browse/DHIS2-7029)

Screenshot | Docs

**Organizational unit profile in maps application** will display key information for each organizational unit when you hover over it. This will make DHIS2 much more suitable as a master facility list. [DHIS2-11176](https://jira.dhis2.org/browse/DHIS2-11176)

Screenshot | Docs

**Legend key for pivot tables on dashboard** will be available if a legend is applied to a chart or a pivot table. [DHIS2-6296](https://jira.dhis2.org/browse/DHIS2-6296)

Screenshot | Docs

## TRACKER AND EVENT FEATURES

**Performance improvements:** Performance fixes to unique value generation allow IDs to be generated with less performance impact than before. Sequential patterns have seen the biggest improvement, and are the recommended method for ID generation in most cases.
[DHIS2-11892](https://jira.dhis2.org/browse/DHIS2-11892) | 
[DHIS2-11305](https://jira.dhis2.org/browse/DHIS2-11305)

**Working lists across org units** It is now possible to have working lists in the Capture app that span all accessible org units for a user. This can for example be useful when working with malaria case investigations across multiple locations.
[Screenshot](images/working-lists-across-orgunits.png) | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-237/tracking-individual-level-data/capture.html#capture_edit_event) | [DHIS2-11467](https://jira.dhis2.org/browse/DHIS2-11467) | [Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/metadata.html#webapi_partial_updates)

**Deduplication:** A new API service is built for merging 2 given duplicate records. Duplicates merging is not yet available in the DHIS2 standard user interface, but third party apps may integrate and start using the interface.
[DHIS2-11394](https://jira.dhis2.org/browse/DHIS2-11394)

**Program rule validation** Program rule validation has been implemented for program rule actions, and any invalid program rule action data expressions are flagged to the user while working with the rule in the maintenance app. This can for example be useful when writing expressions for data to assign to a program rule variable, to avoid syntax errors in that assignment expression.
[Screenshot](images/program-rule-action-validation.png) | [Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-237/metadata.html#webapi_program_rule_model) | [DHIS2-10802](https://jira.dhis2.org/browse/DHIS2-10802)

**Enhancements in new tracker exporter** The new tracker endpoint /tracker now has createdBy and updatedBy fields for all object types. This property is always system generated and reflects the user that created or made the last change to the object.
[DHIS2-10885](https://jira.dhis2.org/browse/DHIS2-10885)

**Event dates in program stage notification template** When configuring program stage notification templates, it is now possible to include the event date in the notification. This can be useful when sending a message to a person, referring to a past event that the person took part in.
[DHIS2-10831](https://jira.dhis2.org/browse/DHIS2-10831)

**Notifications used in integration scenarios** Notifications can now be sent to an external http address, in addition to the previous options of being sent as an email or SMS. The notifications sent to an external http service can be useful in system to system integration scenarios.
[DHIS2-10682](https://jira.dhis2.org/browse/DHIS2-10682)

**Tracker features in Capture App:** Enrollment and tracker events functionality is now released for closed beta testing in the new Capture app. We plan to open for beta testing for a wider audience throughout the lifetime of 2.37, and plan to release this functionality to everyone in 2.38.

## PLATFORM FEATURES

**Data Approval app:** A new data approval app is available, supporting multiple, parallel data approval workflows. After selecting a workflow, period and org unit, it allows the user to view data from all data sets associated with the workflow. The app features the new and modern DHIS 2 user experience, making data approval more efficient and user-friendly. The app is built using the new DHIS 2 front-end technology stack.

Docs

**Org unit image:** An image can be uploaded and associated with an organisation unit. This is useful e.g. for facility assessments and surveys, where an image should be taken of the facility and be part of the assessment.

User docs | [API docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/org-unit-profile.html#upload-image-for-organisation-unit)

**Org unit profile:** You can now design a profile for organisation units, which allows you to include an image and specify metadata attributes, org unit group sets/groups and data for data elements and indicators to display. The org unit profile must currently be configured through the API. User interface support is coming in the next release. The maps application lets you view the profile by right-clicking on an org unit in a map layer and clicking the Show more info button.

[User docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/configuring-the-system/metadata.html#manage_organisation_unit) | [API docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/org-unit-profile.html)

**Icon Library:** The DHIS2 Icon library has been integrated into the healthicons project and been redesigned by its team of volunteer in collaboration with our design team. More information about the project can be found at their website [healthicons.org](https://healthicons.org/). 

[DHIS2-11978](https://jira.dhis2.org/browse/DHIS2-11978) | [Screenshot](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/dhis2-android/release+notes+2.5/Android-2-5-Icon+library.png)

**Modified Z-score:** Outlier detection based on the modified Z-score statistical method is now available in the data quality app. The modified Z-score method is based on a value's distance from the median, and n	ot the mean like the regular Z-score, and more resilient towards outliers in a dataset.

User docs | [API docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/data-validation.html#outlier-detection)

**Personal access tokens:** You can now create personal API access tokens for your account. API access tokens are useful for authentication of software API clients such as integration services and web portals. When authenticating with an access token, a client will only get access to the API and not the user interface. Tokens can be restricted to specific HTTP methods (e.g. GET, POST) and IP-addresses. There are to types of tokens, one for server-side clients and one for web browser-based clients. To create a token, navigate to the profile menu > Edit profile > Personal access tokens.

Screenshot | User docs | [API docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/introduction.html#webapi_pat_authentication)

**Automatic cluster cache management:** When running DHIS 2 as a Tomcat cluster (many Tomcat servers), previously, the IP address of all Tomcat nodes (servers) in the cluster had to be defined in the configuration file of every DHIS 2 instance. This made dynamic scaling of cluster nodes complex and inconvenient. Now DHIS 2 will handle the cache management automatically and the cluster cache configuration is no longer needed. This makes dynamic scaling much more practical, as new nodes can be added without other nodes being made aware.

[Docs](https://docs.dhis2.org/en/manage/performing-system-administration/dhis-core-version-master/installation.html#install_cluster_configuration)

**User password email reset:** You can now reset the password for a user account by having the system send an email. The person owning the user account will be able to follow the instructions send to her by email to reset the password. Email reset requires that an SMTP server is set up and that the user account has a valid email address.

Screenshot | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/configuring-the-system/users-roles-and-groups.html#reset_user_password_by_email)  

**New authorities:** New authorities have been introduced. Generating min-max data element values requires the "Generate min-max values" authority. Creating data approval levels requires the "Add/Update Data Approval Level" authority. Creating data approval workflows requires the "Add/Update Data Approval Workflow" authority.

[Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/configuring-the-system/users-roles-and-groups.html#about_user_userrole)

**Faster data statistics:**  The data statistics overview in data administration app is order of magnitude faster. The statistics are now generated based on approximate counts, which offers good enough precision and usually completes in a few seconds even for the largest databases.

Screenshot

**Faster data value import:** For data value imports, when a data value is an exact match of an existing data value, update and audit operations are no longer happening. This significantly improves performance in particular for a data value sync scenario, where identical data is often imported multiple times.

[Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/maintaining-the-system/importexport-app.html#importing_data)

**App Hub improvements:** The App Hub has received a fresh new design and an improved user interface for managing and navigating between applications. Organizations now supports multiple developers, and you can now log in to the App Hub with a GitHub account as in addition to a Google account. Read about all improvements in the [changelog](https://github.com/dhis2/app-hub/blob/master/CHANGELOG.md).

Screenshot | [Changelog](https://github.com/dhis2/app-hub/blob/master/CHANGELOG.md) |[App Hub](https://apps.dhis2.org/)

**App Management app design:** The app management app has a new design which builds on the DHIS2 design principles and UI components. It now supports in-app notifications when there is a newer version of a compatible DHIS 2 web application available on the App Hub. Apps can now updated with a single click. Read about all improvements in the [changelog](https://github.com/dhis2/app-management-app/blob/master/CHANGELOG.md).

Screenshot | [Changelog](https://github.com/dhis2/app-management-app/blob/master/CHANGELOG.md)

### PLATFORM API FEATURES

**Split org unit:** The new `/organisationUnits/split` endpoint allows for splitting an organisation unit into multiple organisation units. All associated metadata and tracker data will be transferred to the target organisation units. This is useful e.g. when a district splits into multiple, new districts.

[Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/metadata.html#webapi_organisation_unit_split)

**Merge org units**: The new `/organisationUnits/merge` endpoint allows for merging multiple organisation units into one. All associated metadata, data values and tracker data will be merged and transferred to the target organisation unit. This is useful e.g. when multiple districts merge into one district.

[Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/metadata.html#webapi_organisation_unit_merge)

**Gist API:** The new _Gist_ API is a new metadata API which is optimized for scalability and performance. It renders a flat version of objects without nested associations to allow for efficiently rendering large payloads. The Gist API response can be accessed by appending `/gist` to the regular metadata object API paths. Collection properties, like `/userGroups/<id>/users/gist`, can be browsed in the same way as object collections, like `/userGroups/gist`. The API supports most parameters of the regular metadata API and offers some additional features.

[Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/metadata-gist.html)

**Patch API:** A new patch API is available, allowing for making partial updates of metadata.

[Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/metadata.html#webapi_partial_updates)

**User max org unit level data output:** A new field for defining the _max org unit level for data output_ is introduced for users. This controls how far down in the org unit hierarchy a user can view data in analytics apps. This is useful for web portals and public access where data should be made available but only down to e.g. the district level. User interface support coming in 2.37.1.

[Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/users.html#webapi_users)  

#### PLATFORM DEVELOPER FEATURES

**App Platform**: To support a continuous delivery to the App Hub the d2-app-scripts has received a new command, `publish`, that after an initial configuration will publish a new version of an application to the App Hub. This is useful in both local command line environments, and
in continuous integration pipelines. Refer to the [changelog](https://github.com/dhis2/app-platform/blob/master/CHANGELOG.md) for a complete list of bug fixes and features.

The App Platform now has a built-in proxy server to make it easier to work against DHIS2 instances that are on a different domain. [More information](https://developers.dhis2.org/blog/2021/11/app-platform-v8#new-feature-proxy-server-for-dhis2-api) is available on the DHIS2 developer blog.

Support for Progressive Web Applications is now built into the App Platform to be leveraged by application developers, be sure to [read the article](https://developers.dhis2.org/blog/2021/11/introducing-pwa) for a dive into what PWA is, and what it enables for DHIS2 applications.

[Changelog](https://github.com/dhis2/app-platform/blob/master/CHANGELOG.md)

**App Runtime**: To promote best practices when communicating with the API, the application runtime will now warn in _development mode_ when a query does not use paging, or when fields are not explicitly added. Promoting good development practice in terms of API use is important for DHIS2 to function at scale. The [changelog](https://github.com/dhis2/app-runtime/blob/master/CHANGELOG.md) contains a full list of changes per version.

[Client-side caching and request deduplication](https://developers.dhis2.org/blog/2021/11/app-platform-v8#new-feature-usedataquery-caches-and-deduplicates-queries) is now available. 

[Changelog](https://github.com/dhis2/app-runtime/blob/master/CHANGELOG.md)

**DHIS2 UI**: The DHIS2 UI library has additional functionality useful for building DHIS2 Applications, such as the `DataTable` components, accessibility enhancements, and bug fixes. For more information about specific bug fixes and features and in what versions they are available, refer to the [changelog](https://github.com/dhis2/ui/blob/master/CHANGELOG.md).

[Changelog](https://github.com/dhis2/ui/blob/master/CHANGELOG.md)

**Jar packaging:** The DHIS 2 backend API can now be packaged as a JAR file. The JAR build contains only the web API and no web modules. The build provides an embedded Jetty web server, and is self-contained and executable, meaning it can be started directly from the command line without an external Tomcat instance. This is a step in the direction of making DHIS 2 easier to deploy and more friendly to containerized environments. To build as JAR file you can use the [run_api.sh](https://github.com/dhis2/dhis2-core/blob/master/dhis-2/run-api.sh) script.


## RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation|[https://docs.dhis2.org](https://docs.dhis2.org/)|
|Upgrade notes|[Upgrade notes on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.37/README.md)|
|Full list of features and bugs in this release|[Release Note](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.37/ReleaseNote-2.37.md)|
|Source code on Github|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.37/|
|Docker image|`docker pull dhis2/core:2.37.0`|
|Docker Hub images|https://hub.docker.com/repository/docker/dhis2/core|
|Community forum|https://community.dhis2.org/|

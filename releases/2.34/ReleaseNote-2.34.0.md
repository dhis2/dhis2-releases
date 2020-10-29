# DHIS version 2.34 Release Note

This document highlights the key features of the initial release of DHIS2 version 2.34. This version is fully compatible with the DHIS2 version [2.1 Android Capture App](https://community.dhis2.org/t/dhis2-android-capture-app-version-2-1-is-released/39065).

## ANALYTICS FEATURES

**Pivot tables in Data visualizer app:** The Data visualizer app now supports pivot tables, meaning the functionality of the pivot table app is merged into the data visualizer app. A pivot table is now just another visualization type within the data visualizer app. This provides users with a more intuitive experience for building pivot tables, and it more seamlessly allows moving between pivot tables and other chart types. The performance of pivot tables is also dramatically improved, allowing for very large pivot tables with at least three times more data than the classic pivot table app.

[Jira](https://jira.dhis2.org/browse/DHIS2-7687) | [Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/pivot_table_1.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/pivot_table_2.png) | [3](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/pivot_table_3.png)

**Dimension recommendations:** In the data visualizer app, pivot tables now support “dimension recommendations”, which means that dimensions which are relevant to the select data elements will be indicated in the left panel with a green dot.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/pivot_table_dimension_recommendation.png)

**Continuous analytics table update:** The analytics table scheduler now supports continuous updates of analytics tables, offering a “real-time analytics” experience. The delay between data being entered and data becoming visible in analytics apps will now be in seconds, compared to hours or days. A new table partition which contains the latest data is introduced which allows for quicker updates. This can be configured in the _Scheduler_ app by selecting the _Continuous analytics table_ job type. The _Delay in seconds_ field refers to the delay in seconds in between each update of the latest data partition. The _Full update hour of day_ field refers to the time of the day at which the full analytics table update will run.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/continuous_analytics_table_job.png) | [Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/scheduling.html#continuous-analytics-table)

**Progressive caching:** Progressive caching reduces the time to render dashboards and speeds-up analytics by creating a new cache layer. Essentially this enables data to be viewed in the analytics immediately after being entered without running the analytics tables. 

[Jira](https://jira.dhis2.org/browse/DHIS2-8352) 

**Legends for single values:** Legends can now be added to single value chart types. The text color of the value is decided by the legend that the value falls within. This enables users to more effectively communicate the relative performance of values. 

[Jira](https://jira.dhis2.org/browse/DHIS2-8348) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/single_value.png)

**Improved gauge charts:** The usefulness of gauge charts has been dramatically improved. Now a gauge chart can include baselines and target lines, a legend that will change the color of the chart based on the value shown, and minimum and maximum data ranges. 

[Jira 1](https://jira.dhis2.org/browse/DHIS2-8330) | [2](https://jira.dhis2.org/browse/DHIS2-7888) | [3](https://jira.dhis2.org/browse/DHIS2-7887) | [Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/gauge_options.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/gauge_chart.png)

**Sort by totals in pivot tables:** You can now sort by subtotal and total columns in pivot tables.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/pivot_table_sort_by_totals.png)

**Dashboard item visual improvements:** Each dashboard item has text wrapping for long names. All dashboard item options are now available as a menu instead of icons, giving more space for the title and makes titles more visible in the dashboard.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/dashboard_item_title_menu.png)

**Pivot table and chart type visualization filter**: In the list of visualizations, a visualization _type_ filter is available and lets you filter by pivot tables and charts. An icon representing the visualization type is displayed for each row in the list, making it quick to see the type for each visualization.

[Jira](https://jira.dhis2.org/browse/DHIS2-8413) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/visualization_type_selector.png)

**Maps enhancements and WebGL**: The mapping engine in version 2.34 is brand-new and based on the [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) technology which is much more performant compared to the previous solution. 

[Jira](https://jira.dhis2.org/browse/DHIS2-5846)

The following key features are now available in Maps:

*   **Performance**: We are now capable of showing thousands of features on a map simultaneously, and the maps are much more responsive.

    [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/map_performance_events.png)

*   **Map rotation and tilting:** You can now rotate and tilt the map to enhance the view of your data.

    [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/map_bing_maps_rotated.png)

*   **Continuous zoom**: The zoom is now continuous, allowing you to fit the map perfectly to your content and avoids the previously large zoom “steps”.

*   **Full-screen view:** Maps can now be viewed in full-screen mode. This is especially useful for dashboard maps where space is limited. You can click the full-screen button on the right side of the map to enable it.
*   **Bing Maps:** Google Maps is no longer supported due to technical and legal issues, but we have included four new base maps from Bing, which should be a good replacement.

    [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/map_bing_basemap.png)
*   **Donut clusters**: We have added support for “donut clusters” which will show you the event cluster distribution if you style by a data element.


    [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/map_donut_clusters.png)
 

## TRACKER AND EVENT FEATURES

**Performance and stability improvements:** A range of improvements have been made related to performance and security:

*   Tracker capture performance: [Jira](https://jira.dhis2.org/browse/DHIS2-8066)
*   Monitoring Infrastructure: [Jira](https://jira.dhis2.org/browse/DHIS2-6954)
*   Improved caching: [Jira](https://jira.dhis2.org/browse/DHIS2-7174)
*   Various bug fixes: [Jira](https://jira.dhis2.org/issues/?jql=project%20%3D%20DHIS2%20AND%20issuetype%20in%20(Bug%2C%20Epic%2C%20Feature%2C%20Test%2C%20Design)%20AND%20component%20in%20(%22%5BApp%5D%20Tracker%20capture%22%2C%20%22%5BApp%5D%20Event%20capture%22%2C%20%22%5BApi%5D%20Tracker%22%2C%20%22%5BApi%5D%20Events%22%2C%20%22%5BApp%5D%20Capture%22)%20AND%20Sprint%20in%20(%22Tracker%202.34%20-%20MS1%22%2C%20%22Tracker%202.34%20MS2%22)%20AND%20status%20in%20(%22To%20Do%22%2C%20%22In%20Progress%22%2C%20Done%2C%20%22In%20Review%22)%20AND%20issuetype%20%3D%20Bug)
*   Antlr parsing of program rules: [Jira](https://jira.dhis2.org/browse/DHIS2-7945)

**Enhanced audit service:** An audit trail is now stored for all types of metadata and data. The audit trail is enabled by default and is configurable in this _dhis.conf_ configuration file. The solution is centralized and is based on the _Apache ActiveMQ [Artemis](https://activemq.apache.org/components/artemis/)_ asynchronous message broker. The audit solution covers _create_, _read_, _update_ and _delete_ operations across metadata, aggregate data and tracker data. Audit logs can currently be retrieved from the _audit_ table in the DHIS2 database. 

[Jira](https://jira.dhis2.org/browse/DHIS2-7837) | [Docs](https://docs.dhis2.org/master/en/dhis2_system_administration_guide/audit.html)

**Predefined event views in Capture app:** In the capture app it is now possible to save and share custom predefined list views/event filters. A user can save a named filter based on any otherwise filterable attributes like event data values, event dates, assignees, and so on. This can be a private filter or shared so that other users can see and utilize it. One use case for such filters can be to create a default working list of events assigned to the logged in user.

[Jira](https://jira.dhis2.org/browse/DHIS2-4440) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/dhis2_4440_working_list_assigned_to_me.png) | [Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/using-the-capture-app.html#predefined-list-views)

**Tracker capture search for relatives:** It is now possible for a user to search for and link a relationship to any tracked entity instance in their search scope. Previously it was only possible to search and link relationships within the users reporting organization unit. Searching across different organizations is useful in Covid-19 contact tracing where the contacts might live in another part of the country.


[Jira](https://jira.dhis2.org/browse/DHIS2-7226) | [Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/dhis2_7226_search_tei_relationship_widget.png) | [Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/using-the-tracker-capture-app.html#add-a-relationship-to-a-tei)


## APPS FEATURES

**Data approval:** The data approval functionality is re-introduced as a separate app called _Data approval_. It offers the same functionality which was previously accessible through the Reports app. It allows for approving data by data set and time period. We are working on a new approval app using our new technology stack which will support the data approval workflow model.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/data_approval_app.png)

**App Hub:** The App Store has been rebranded as the App Hub. The App Hub has been rewritten to support improved management of apps. DHIS2 2.34 uses the new App Hub ([https://apps.dhis2.org](https://apps.dhis2.org)) by default. Apps from the old App Store have been migrated to the new App Hub where possible. The old App Store link, used by previous versions of DHIS2, will continue to work, but will be seamlessly redirected to the new App Hub in the near future. App developers should now use the new App Hub for sharing your apps.

[https://apps.dhis2.org](https://apps.dhis2.org)

**Attribute ID schemes in data import-export:** The import-export app now allows for selecting attribute-based identifier schemes for data import and export.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/34/data_import_export_attribute_id_schemes.png) | [Jira](https://jira.dhis2.org/browse/DHIS2-7495)


## API FEATURES

**New combined endpoint for analytics visualizations**: The _reportsTables_ and _charts_ endpoints have been deprecated in favour of a new and consolidated _visualizations_ endpoint.

[Docs](https://docs.dhis2.org/master/en/dhis2_developer_manual/web-api.html#visualization)



## RELEASE INFO

|Release Information|Links|
|:---|:---|
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation and Javadocs|https://www.dhis2.org/documentation|
|Upgrade notes|[Upgrade notes for 2.34 on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.34/README.md)|
|Details about each feature on JIRA (requires login)|[2.34 Features](https://jira.dhis2.org/issues/?filter=11845)|
|Overview of bugs fixed on JIRA (requires login)|[2.34 Bugs](https://jira.dhis2.org/issues/?filter=11846)|
|Source code on Github|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.34.0/|
|Docker|`docker pull dhis2/core:2.34.0`<br>_for more docker image variants see [dockerhub](https://hub.docker.com/repository/docker/dhis2/core)_|

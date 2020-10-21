DHIS2 version 2.35 is out with many new features, apps, improvements and bug fixes. This version is fully compatible with the DHIS2 [Android Capture App 2.3](https://www.dhis2.org/android-2-3).

---

## ANALYTICS FEATURES


**Dashboard printing**: You can now easily print a dashboard, either with a single item per page or in the preset dashboard layout. This enables you to create a dashboard as a standard printed report for routine meetings or plannings. You can also save a dashboard as a PDF to be shared via email or messaging.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/dashboard-print-1.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/dashboard-print-2.png) | [Jira](https://jira.dhis2.org/browse/DHIS2-7045) | [Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/managing-dashboards.html#printing-a-dashboard)

**Time periods in indicators**: The analytics engine now supports comparing various time periods relative to the aggregation periods within indicator expressions. This allows you to compare data in previous (or future) periods, which is useful for calculating trends, stock consumption, performance against targets and much more.

[Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/configure-metadata.html#manage-indicators)

**Combination charts**: You can now create a line and bar combination chart. For example this is useful for showing a cumulative case count as bars and an infection rate as a line over time on the same chart.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-combination-charts.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-combination-charts-menu.png) | [Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/using-the-data-visualizer-app.html#using-multiple-visualization-types)

**Two-category charts**: Data items can now be grouped by multiple categories. For example you can group a bar chart of health facilities by facility type or ownership.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-two-category-chart.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-two-category-chart-2.png) | [Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/using-the-data-visualizer-app.html#two-category-charts)

**Chart color sets**: Many new color sets can now be applied to charts. These include light, dark, color-blind, grey scale, and patterns. This allows you to make more customized and printer friendly charts.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-color-sets-menu.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-color-sets.png)

**Text styling in charts**: You can now edit the style, color, and size of all text in the data visualizer app. This enables you to have larger or more interesting text for charts that are downloaded.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-font-styling.png) | [Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/using-the-data-visualizer-app.html#custom-styling-for-text-and-legend-in-charts)

**Axis management**: Chart axis management is improved, with a new user interface and up to four axis supported. For each data item you can select which axis to assign as well as the visualization type to use in a single screen.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-series-axis-type-menu.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-multi-category-axis-type-chart.png) | [3](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualizer-series-axis-type-menu.png) | [Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/using-the-data-visualizer-app.html#adding-more-axes)

**Visualization type menu**: A new menu is available for selecting the type of visualization, which offers nicer icons and a description of the visualization type, making it easier to select an appropriate way to explore your data.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/visualization-type-menu.png) | [Jira](https://jira.dhis2.org/browse/DHIS2-7855)

**Bubble maps**: This allows you to make a thematic map that represents each org unit as a single point/bubble. The size and the color of the bubble proportional to the value of that org unit compared to the range or legend. This is a popular way to visualize COVID-19 and other disease maps where hotspots need to be easily identifiable.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/bubble-maps.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/bubble-map-selection.png)

**Event data table**: The new data table for event layers allows you to search and filter events. The filtering is happening as you type and provides a quick way to look for cases and patterns.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/maps-event-data-table-1.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/maps-event-data-table-2.png)

**Tracked entities map layer improvements**: Several improvements to the TEI layer are available.

* Under "Program status" you can select "All" to show entities which are active, completed and cancelled.
* Under "Period" you can select start/end dates for either the period the entities were last updated, or the program/enrollment date.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/maps-tracked-entities-layer.png)

**Maps “no data” handling**: The Maps app is now able to allow users to define a color in a legend for those org units that do not have data. This makes it much more apparent which org units did not report any data.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/maps-no-data-handling.png)

**Event status filter**: A new "event status" option in the Maps allows you to only show events that are active, completed, scheduled, overdue or skipped.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/maps-event-status-filter.png)


## TRACKER AND EVENT FEATURES


**Performance enhancements**: The service for reading and writing tracker data is rewritten to improve performance. Reading and writing tracker data is now around 3 x faster, and can handle more than 100 concurrent users/requests. This will have a significant positive impact on overall server performance for tracker and event-focused DHIS2 installations.

**Program rule expression validation**: Program rule expressions will be validated as the user types it in. This will help the user avoid spelling errors and other preventable mistakes, as well as saving the user time when configuring program rules.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/program-rule-expression-validation.png) | [Jira](https://jira.dhis2.org/browse/DHIS2-6079)

**Year selector in date picker in Capture app**: The capture app date picker is now improved, allowing direct year selection. This will make selection of dates far in the past quicker and easier. One example of this benefit is a user entering birth dates - being able to quickly select the birth year.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/capture-app-year-selector.png)

**Completed date in program rules**: It is now possible to write program rules that evaluate and react to the completed date of an event. This is done with the variable called V{completed_date}.This can be useful when scheduling messages to be sent at a certain number of days after a patient visit was completed.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/program-rule-completed-date.png) | [Jira](https://jira.dhis2.org/browse/DHIS2-9223) | [Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/configure-programs-in-the-maintenance-app.html#reference-information-operators-and-functions-to-use-in-program-rule-expression)

**User selection without explicit authority**: It is no longer necessary to assign the “View user” authority to end users in order to use tracker and messaging apps. I.e. in Tracker capture, program stage user assignment and data elements of type username no longer requires any special authority.

**Metadata cache in Capture**: In previous versions it was necessary to clean the cache with the cache cleaner to pick up certain changes to metadata. This is no longer necessary. When the version number is increased in the maintenance app, the Capture app will detect this and download the program and all dependencies, as well as all relevant independent metadata objects like constants and org unit groups.

[Docs](https://docs.dhis2.org/master/en/dhis2_user_manual_en/using-the-capture-app.html#implementer-administrator-info)

## PLATFORM FEATURES


**Continuous application delivery**: Going forward, several core DHIS 2 apps will be released monthly. You can now install such core apps directly from the App Hub, and have the new version override the bundled version in DHIS 2. This can now be done from the App management app. This is beneficial as you can start using new features more quickly, and upgrade to receive bug fixes without having to test the entire system.

**SMS configuration app**: A new SMS configuration app is introduced, which provides a modern and more user-friendly user interface and additional options for configuring SMS in DHIS2. This app will replace the existing Mobile configuration module, which will be removed in 2.36.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/sms-app-overview.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/sms-app-commands.png) | [3](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/sms-app-recevied.png)

**Import/Export app**: This app is completely rewritten, and provides a better user interface and increased stability.

[Screenshot 1](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/import-export-data-export.png) | [2](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/import-export-event-import.png)

**OpenID Connect**: Basic support for the OpenID Connect (OIDC) authentication layer is introduced. So far Google is supported as a provider, while several additional providers will be added in the upcoming releases. OIC can support Single Sign-On solutions, where DHIS 2 can utilize an existing directory of user accounts.

[Docs](https://docs.dhis2.org/master/en/dhis2_system_administration_guide/installation.html#openid-connect-oidc-configuration)

**Disable changelog**: The changelog (aka. audit log) for aggregate data and tracker data which is persisted in the database can now be disabled in dhis.conf. This is helpful for instances where audit is not necessary or relevant, as it will reduce the size of the database and improve performance of data import.

[Docs](https://docs.dhis2.org/master/en/dhis2_system_administration_guide/installation.html#changelog) | [Jira](https://jira.dhis2.org/browse/DHIS2-9266)

**App rewrites**: The cache cleaner and reports apps have been rewritten internally using the new App platform, which offers better stability and performance.

**Icon Library review**: The DHIS2 icon library has been reviewed. Some icons have been modified to be more neutral when it comes to race and gender representations. Also some domains like Education and Covid-19 have been added following the requests from the community.

[Screenshot](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/35/icon-library.png)

## API FEATURES


**User lookup**: A new user lookup API is available. This provides essential user information like ID, username and name, without exposing other sensitive properties. The endpoint is open for all authenticated users. The main user API is now protected with the “View user” authority.

[Docs](https://docs.dhis2.org/master/en/dhis2_developer_manual/web-api.html#user-lookup)

**User API restrictions**: The metadata and users endpoints are now protected with the “View User” authority. The API field filtering is now restricted for user information, allowing only basic user information to be exposed. This provides better privacy and protection of user information.

[Note 1](https://github.com/dhis2/notes-backend/blob/master/platform/35/changelog/export_user_authority.md) | [Note 2](https://github.com/dhis2/notes-backend/blob/master/platform/35/changelog/user_property_transformer.md)

## RELEASE INFO


|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation|[https://www.dhis2.org/documentation](https://docs.dhis2.org/)|
|Upgrade notes|[Upgrade notes on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.35/README.md)|
|Details about each feature on JIRA|https://jira.dhis2.org/issues/?filter=11902|
|Overview of bugs fixed on JIRA|https://jira.dhis2.org/issues/?filter=11907|
|Source code on Github|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.35/|
|Docker|`docker pull dhis2/core:2.35.0`<br>_for more docker image variants see [dockerhub](https://hub.docker.com/repository/docker/dhis2/core)_|
|DHIS 2 community|https://community.dhis2.org/|

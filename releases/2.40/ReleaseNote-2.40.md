# DHIS2 version 40 Release Note

## ANALYTICS FEATURES

**On-the-fly custom calculations in Data Visualizer:** Now it's even easier to explore your data in DHIS2. With this feature, you can create your own custom calculations directly in the Data Visualizer application for pivot tables. This means you no longer need to have admin access or create new indicators to play around with your own personal data expressions. Plus, the custom calculation is automatically saved to the pivot table in which it was created without cluttering up your configuration with additional saved indicators. This feature is ideal for exploring coverage calculations with various population denominators and making quick and simple sums.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-13871)

**Single value charts with legend colors:** Legend colors can be applied to the background of a single value chart, making the performance of the value more obvious and visually engaging. This feature helps users quickly understand the significance of the value and its relation to the legend colors.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-13702)

**Legend for stacked column charts:** Spice up your data visualizations with a new feature that allows legends to be applied to column charts! This makes it easier to see how indicators are performing at a glance.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-13783)

**Indicator icons for single value charts:** Want to add some personality to your data? Now, icons can be shown in single value charts to represent the indicator being used. For example, if you're tracking total malaria cases, you can choose a mosquito icon to visually communicate what the value represents. This feature will also be added for data elements in the near future.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-5497)

**Line lists on dashboards:** Keep track of all your data in one place with line lists now available on dashboards! This feature has also been added to versions 2.39 and 2.38.  
[Jira](https://dhis2.atlassian.net/browse/TECH-475)

**Multiple event coordinate types in maps:** Visualize geographical data in new ways with multiple event coordinate types now available for use in maps. Choose to view location by event coordinate, enrollment coordinate, tracked entity coordinate, program stage data elements of type coordinates, or program tracked entity attributes of type coordinate. For example, you can easily see the household location for women who delivered last week at the health facility for outreach services.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-8165)

**Display values in thematic layers:** Make your maps even more informative with the option to show values directly on the map in thematic layers. This addition complements the legend and provides a more complete picture of the data being presented.  
[Jira](https://jira.dhis2.org/browse/DHIS2-13356)

**Improved maps download:** Get all of the key information you need when you download a map. You can now show the map title, description, legend(s), north arrow, and overview map all in one easy to use image when you download a map.

[Jira](https://dhis2.atlassian.net/browse/DHIS2-14317)

**Ownership analytics in program indicators:** Now you can make program indicators which are based on organisation unit ownership. For example, you can count the number of patients that are receiving care at a facility even if they were not originally enrolled in care at that facility or officially transfered. Specifically, program indicators can define which organisation unit will be used in analytics. Choices include the organisation unit for the event, enrollment, registration, organisation unit data element and tracked entity instance ownership at the start or end of the reporting period.
[Jira](https://dhis2.atlassian.net/browse/DHIS2-13373)


## TRACKER AND EVENT FEATURES

**Breaking the glass:** Programs with access level "protected" are now supported in the Capture app. For protected programs, when searching for a tracked entity instance that is found in another organisation unit, the user is asked to provide a reason for why they need access. This access level is useful when clinicians in one clinic should be able to access their own records, but only on exception accesses records from other clinics. This functionality was supported in the old Tracker Capture and have now been reimplemented and improved in Capture. Supported in DHIS version 2.38 or higher, with Capture version 100.27.0 or higher.

[Screenshot](images/break_the_glass.png) | [jira](https://dhis2.atlassian.net/browse/DHIS2-13804)

**Saved program stage working lists for tracker programs:** Program stage filters have been partially supported in the Capture app since 2.39, allowing filtering and ordering of lists based on event data in tracker programs. Now these filters can also be stored and shared as working lists. The program stage working lists can be utilized for many different purposes. Some examples are creating follow-up lists of specific tasks, following up defaulters or systematically reviewing data. Supported in DHIS2 version 40 or higher, with Capture version 100.31.0 or higher.  

[jira](https://dhis2.atlassian.net/browse/DHIS2-13654)

**Header bar improvements:** The header bar in Capture app has been updated to match other apps in the system. While the functionality remains the same, the header now takes up less space and popovers are used to avoid situations where the bar expands and pushes other content down from the user's view. Supported in DHIS2 version 2.38 or higher with Capture version 100.26.0 or higher.  
[Screenshot](images/headerbar_updates.png) | [jira](https://dhis2.atlassian.net/browse/DHIS2-14008)

**Ask user to create new event when stage is completed:** Capture app now includes functionality for asking users to create a new event after completing a stage. If the flag for asking the user to create a new stage is checked, users will be prompted to create a new event immediately upon completing the stage. This feature can improve data entry efficiency and reduce human errors. It was previously supported in the old Tracker Capture app and has now been re-implemented in Capture in an improved form. Supported in DHIS2 version 2.38 or higher with Capture version 100.21.0 or higher.  
[Screenshot](images/generate_new_event.png) | [jira](https://dhis2.atlassian.net/browse/DHIS2-13801)

**Create a new TEI when no results match:** After searching for a tracked entity instance in the Capture app and finding no results, users are now given the option to carry over the search criteria and create a new tracked entity instance. This feature was supported in the old Tracker Capture app and has now been re-implemented in Capture in an improved form. Supported in DHIS2 version 2.38 or higher with Capture version 100.20.0 or higher.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-9666)

**Hide due date:** The Capture app now supports hiding the scheduled date for individual program stages. This feature allows program stages that do not require scheduling or a scheduled date to have those fields hidden, resulting in a cleaner and more streamlined user interface. Supported in DHIS2 version 2.38 or higher with Capture version 100.19.0 or higher.  
[Screenshot](images/hide_due_date.png.png) | [jira](https://dhis2.atlassian.net/browse/DHIS2-13897)

**Attribute option combination for tracker programs:** Capture app now supports attribute action combination for tracker programs. This feature was already supported in the tracker capture app, but has now been redesigned and implemented in the Capture app. Supported in DHIS2 version 2.38 or above, with Capture version 100.30.0 or higher.
[Jira](https://dhis2.atlassian.net/browse/DHIS2-14465)

**Usability improvements:** Several non-functional usability updates have been introduced in the Capture app to provide a better user experience and a smoother look-and-feel. Supported in DHIS2 version 2.38 and above and Capture version 100.29.0 and above.  
[Jira 1](https://dhis2.atlassian.net/browse/DHIS2-12256) | [Jira 2](https://dhis2.atlassian.net/browse/DHIS2-14868) | [Jira 3](https://dhis2.atlassian.net/browse/DHIS2-12337) | [Jira 4](https://dhis2.atlassian.net/browse/DHIS2-13803) | [Jira 5](https://dhis2.atlassian.net/browse/DHIS2-14336) | [Jira 6](https://dhis2.atlassian.net/browse/DHIS2-14125)

**API for downloading files uploaded as tracked entity attributes:** A new API endpoint which allows accessing the file resources which are uploaded as tracked entity attribute values is now available. This feature enables users to use files as tracked entity attributes, such as uploading a birth certificate for a child.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-13657)

**API for downloading tracked entities as CSV:** The `/tracker` API endpoint now supports the functionality to download a tracked entity instance directly as comma-separated values. This feature is useful for importing data in other systems that accept CSV.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-13620)


## PLATFORM FEATURES

**Multi-select option sets for aggregate data entry:** The aggregate data entry app now supports multi-select option sets for text values. A new value type `MULTI_TEXT` is introduced for data elements, which allows users to select multiple options for an option set. This is useful for instance in survey forms, where you can ask users to check multiple boxes for a single question.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-14481)

**Aggregate Data Exchange app:** A new web app for aggregate data exchange is now available. This web app lets users select aggregate data exchanges, preview the data and finally submit the data to the target DHIS 2 instance. This allows for visually inspecting and verifying data which are to be submitted. A dialog will display the summery of the data submission after it has completed. As an example, this is useful in situations where national ministries or organizations need to submit data to international organizations or donors and would like to manually verify and be in complete control of the data which they are submitting.  
[Screenshot 1](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/40/data_exchange_overview.png)| [2](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/40/data_exchange_submission_success.png) | [3](https://s3.eu-west-1.amazonaws.com/content.dhis2.org/releases/screenshots/40/data_exchange_submit.png) | [Jira](https://dhis2.atlassian.net/browse/DHIS2-13105) | [User docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-240/exchanging-data/data-exchange.html) |[API docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-240/data-exchange.html)

**Improvements to data integrity:** The Data Integrity API is improved to handle the growing number of integrity checks. To avoid exceeding the maximum URL length, the following changes have been implemented:

- POST endpoints now accept the list of checks as a request body.
- Identifiers have been shortened.
- Slow tests have been excluded from wildcard name expansion.
- 25 new integrity checks
- Integrity checks for organisation units with same name and parent.
- Integrity checks for data elements belonging to data sets with different periods types.

[Jira 1](https://dhis2.atlassian.net/browse/DHIS2-14506) | [Jira 2](https://dhis2.atlassian.net/browse/DHIS2-14236) | [Jira 3](https://dhis2.atlassian.net/browse/DHIS2-14495) | [Jira 4](https://dhis2.atlassian.net/browse/DHIS2-14451)

**Job for refreshing materialized view SQL views:** SQL views of type _materialized view_ now has a new Job which can be scheduled to refresh the content of the SQL view. This ensures that the data remains fresh and removes the need for external cron jobs.  
[Jira (Backend)](https://dhis2.atlassian.net/browse/DHIS2-14718) | [Jira (Frontend)](https://dhis2.atlassian.net/browse/DHIS2-15095) | [Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-240/scheduling.html#job-parameters)

**Jobs can now be grouped to run in sequence:** Scheduled jobs can now be grouped to run in sequence, making it easier to create dependencies between jobs and clarify which jobs can be run in parallel. The feature will also soon be available in the Scheduler app.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-14314) | [Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-240/scheduling.html#queues)

**Minimum and maximum (sum in org unit hierarchy) aggregation:** Two new aggregation types that allow the minimum or maximum value for a data element, where data is summarized in the organisation unit hierarchy dimension, are now available. The new aggregation types can be defined for data elements in the maintenance app, and affects how the data elements are aggregated in analytics and visualization apps.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-14430)

**New predictor functions for computing probability:** In supply chain applications, knowing the probability of a stock out is crucial. With the new predictor functions for `normDistCum` and `normDistDen`, you can compute the probability of a stock-out for normally distributed stock consumption. These functions provide the equivalent of Excel `NORM.DIST()` and LibreOffice `NORMDIST()` and allow you to calculate the probability density function (PDF) and cumulative distribution function (CDF) for a given mean and standard deviation.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-14714) | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-240/configuring-the-system/metadata.html#manage_predictor)

**Efficiently create multiple predictors with data element groups:** Streamline your work with predictors by applying them to data element groups. This time-saving feature allows you to make multiple predictors, based on the data elements in a group, from a single definition. For instance, if you are tracking data for multiple commodities in supply chain, you can simply apply the predictor to the data element group for each commodity to produce the necessary values.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-14635) | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-240/configuring-the-system/metadata.html#manage_predictor)

**Predictions by disaggregation:** A single predictor can be used to independently predict every disaggregation of an output data element based on the same disaggregation of data in the predictor generator expression.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-9832) | [Docs](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-240/configuring-the-system/metadata.html#manage_predictor)


### PLATFORM API FEATURES

**Embedded OpenAPI 3 docs:** Working with the API just got a whole lot easier. The server now provides comprehensive OpenAPI documentation that covers all endpoints, allowing users to quickly and easily understand the capabilities of the API. JSON and YAML formats are supported so that you can choose the one that works best for you. If you want to generate a document for a specific endpoint or a selection of root paths and tags, it's as simple as making a request to the right endpoint. So whether you're a developer, analyst, or data manager, the OpenAPI feature will help you get the most out of the DHIS2 API.  
[Docs](https://docs.dhis2.org/en/develop/core-openapi-specification.html)

**New dedicated ping endpoint:** A new endpoint for pinging the server has been added. The new endpoint does not require authentication, extend the user session and uses a low amount of resources.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-14531)

**System info in data summary endpoint:** The data summary endpoint now returns information about the current system, including version, revision, build time and system ID.
[Jira](https://dhis2.atlassian.net/browse/DHIS2-14822)

**Data store now returns sharing information:** Data store keys can be shared in the same way metadata is shared. With this change, sharing information is now available in the data store API.
[Jira](https://dhis2.atlassian.net/browse/DHIS2-14595)

**Event hooks (preview) :** The event hook API is a powerful tool that can help you automate your workflows and keep your systems in sync with each other by allowing users to subscribe to two types of events that occur within the DHIS2. Currently, metadata events and scheduled job events are supported. To use the event hook API, you will need to enable it in your DHIS2 configuration file. A web hook consists of a source and a target. The supported target protocols are web hooks, JMS and Kafka. The event hook will publish events immediately, allowing target systems to take action in real-time. For example, you could set up an event hook that listens for changes to data elements in your metadata and then sends a message to a third-party system to update their records accordingly.
[Jira](https://dhis2.atlassian.net/browse/DHIS2-12194) | [Docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-240/event-hooks.html)

**API routes (preview):** The route API enables DHIS2 API requests to be routed to custom or external API services. This feature allows developers to build and expose custom microservices as well as expose external, third-party APIs through the DHIS2 API. These API endpoints can in turn can be used by custom DHIS 2 web apps. This is helpful in order to extend DHIS 2 with functionality that fits best on the server-side, such as heavy data processing, integration jobs and consumption of external services. Users can create routes, execute them and pass query parameters and request bodies. The route API supports `GET` and `POST` requests and authentication methods such as Basic Auth and API tokens. Custom authorities for route execution are supported. This feature provides a simple and effective way to use custom and external services DHIS2 in web apps.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-12193) | [Docs]()

**User impersonation (preview):** Users with the appropriate authority can now impersonate other users. This is primarily used internally in DHIS2 for generating reports at the current time, and will be enhanced in the future to support more use cases. User impersonation is disabled by default.  
[Jira](https://dhis2.atlassian.net/browse/DHIS2-10661)


## RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation|[https://docs.dhis2.org](https://docs.dhis2.org/)|
|Upgrade notes|[Upgrade notes on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.40/README.md)|
|Full list of features and bugs|[Release Note](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.40/ReleaseNote-2.40.0.md)|
|Source code on GitHub|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/40.0.0/|
|Docker image|`docker pull dhis2/core:40.0.0`|
|Docker Hub images|https://hub.docker.com/r/dhis2/core|
|Community forum|https://community.dhis2.org/|

# DHIS2 version 40 Release Note

## ANALYTICS FEATURES

**On-the-fly custom calculations in Data Visualizer:** Now it's even easier to explore your data within DHIS2! With this feature, you can create your own custom calculations directly in the application for pivot tables, just like you would with basic formulas in MS Excel. This means you no longer need to have admin access or create new indicators to play around with your own personal data expressions. Plus, the custom calculation is automatically saved to the pivot table in which it was created, without cluttering up your configuration with additional saved indicators. This feature is perfect for things like exploring coverage calculations with various population denominators or making quick and simple sums.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13871)

**Enhance single value charts with legend colors:** Now, legend colors can be applied to the background of a single value chart, making the performance of the value more obvious and visually engaging. This feature helps users quickly understand the significance of the value and its relation to the legend colors.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13702)

**Legend for stacked column charts:** Spice up your data visualizations with a new feature that allows legends to be applied to column charts! This makes it easier to see how indicators are performing at a glance.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13783)

**Show data element and indicator icon for single value charts:** Want to add some personality to your data? Now, icons can be shown in single value charts to represent the data element or indicator being used. For example, if you're tracking total malaria cases, you can choose a mosquito icon to visually communicate what the value represents. 

[jira](https://dhis2.atlassian.net/browse/DHIS2-5497)

**Linelist showing on dashboards:** Keep track of all your data in one place with line lists now available on dashboards! This feature has also been added to the latest releases of 2.39 and 2.38.

[jira](https://dhis2.atlassian.net/browse/TECH-475)

**Support multiple event coordinate types in maps:** Visualize geographical data in new ways with multiple event coordinate types now available for use in maps. Choose to view location by event coordinate, enrollment coordinate, tracked entity coordinate, program stage data elements of type coordinates, or program tracked entity attributes of type coordinate. For example, easily see the household location for women who delivered last week at the health facility for outreach services.

[jira](https://dhis2.atlassian.net/browse/DHIS2-8165)

**Add option to show value/number in thematic layers:** Make your maps even more informative with the option to show values directly on the map in thematic layers. This addition complements the legend and provides a more complete picture of the data being presented.

[jira](https://jira.dhis2.org/browse/DHIS2-13356)

**Prefictor functions for normDistCum and normDistDen:** In supply chain applications, knowing the probability of a stock out is crucial. With the new predictor functions for normDistCum and normDistDen, you can compute the probability of a stock out for normally distributed stock consumption. These functions provide the equivalent of Excel NORM.DIST() and LibreOffice NORMDIST() and allow you to calculate the probability density function (PDF) and cumulative distribution function (CDF) for a given mean and standard deviation.

[jira](https://dhis2.atlassian.net/browse/DHIS2-14714)

**Predictor by data element groups:** Streamline your work with predictors by applying them to data element groups. This time-saving feature allows you to make multiple predictors, based on the data elements in a group, from a single definition. For instance, if you're tracking data for multiple commodities in supply chain, simply apply the predictor to the data element group for each commodity to produce the necessary values.

[jira](https://dhis2.atlassian.net/browse/DHIS2-14635)


## TRACKER AND EVENT FEATURES

**Breaking the glass:**
The Capture app now supports programs with an access level of "protected." This means that if you're a clinician in one clinic and need to access records from another clinic, you'll be prompted to provide a reason for why you need access. This feature is especially handy for users who need to access their own records regularly but only occasionally need access to records from other organisation units. This functionality has been re-implemented in Capture in an even better form than the old Tracker Capture. To take advantage of this feature, make sure you're using DHIS version 2.38 or higher and Capture version 100.27.0 or higher.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13804)

**Saved program stage working lists for tracker programs:**
Program stage filters have been partially supported in the Capture app since 2.39, allowing filtering and ordering of lists based on event data in tracker programs. In 2.40 these filters can also be stored and shared as working lists. The program stage working lists can be utilized for many different purposes. Some examples are creating followup lists of specific tasks, following up defaulters or systematically reviewing data.
Supported in DHIS version 2.40 or higher, with capture version 100.X.0 or higher.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13654)

**Headerbar updates**
The header bar has been updated to match other apps in DHIS2. The functionality is the same as before, but the header takes up less space, and popovers are introduced to avoid situations where the bar expands and pushes other content down from the users field of view.
Supported in DHIS version 2.38 or higher, with capture version 100.26.0 or higher.

[jira](https://dhis2.atlassian.net/browse/DHIS2-14008)


**Ask user to create new event when stage is complete**
Functionality for asking a user to create a new event after completing a stage has been added to the Capture app. When the flag for asking the user to create a new stage is checked, a user completing the stage in question will be prompted to create a new event immediately. This can speed up data entry efficiency, and in some cases lead to fewer human errors in data entry. This functionality was supported in the old Tracker Capture app and have now been reimplemented in Capture in an improved form.
Supported in DHIS version 2.38 or higher, with capture version 100.21.0 or higher.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13801)

**Create a new TEI when no results match** After searching for a tracked entity instance, and no results are found, the users are now given the option to carry over the search criteria and create a new tracked entity instance. This functionality was supported in the old Tracker Capture app and have now been reimplemented in Capture in an improved form.
Supported in DHIS version 2.38 or higher, with capture version 100.20.0 or higher.

[jira](https://dhis2.atlassian.net/browse/DHIS2-9666)

**Hide due date** The Capture app now supports hiding scheduled date for individual program stages. This allows hiding some non-relevant items in programs that does not need scheduling and scheduled date, providing a cleaner user interface.
Supported in DHIS version 2.38 or higher, with capture version 100.19.0 or higher.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13897)


**Usability updates** Several non-functional usability updates are implemented to provide a better user experience and a smoother look to the Capture app in certain situations. These changes should generally be smaller improvements that although not essential individually, together will provide a better look and user experience.
They are all supported on DHIS2 version 2.38 and above, and Capture version 100.29.0 and above includes all these changes.
[jira 1](https://dhis2.atlassian.net/browse/DHIS2-12256) | [jira 2](https://dhis2.atlassian.net/browse/DHIS2-14868) | [jira 3](https://dhis2.atlassian.net/browse/DHIS2-12337) | [jira 4](https://dhis2.atlassian.net/browse/DHIS2-13803) | [jira 5](https://dhis2.atlassian.net/browse/DHIS2-14336) | [jira 6](https://dhis2.atlassian.net/browse/DHIS2-14125)


**API for downloading files uploaded as tracked entity attributes** A new API is created to allow accessing the file resources that is uploaded as tracked entity attribute values. It is now possible to use files as tracked entity attributes, for example uploading a birth certificate for a child.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13657)

**API support for downloading tracked entities as CSV from /tracker** The /tracker endpoint has now gotten functionality for downloading a tracked entity instance directly into a comma separated value list. This is useful for exporting data to other systems that accepts CSV.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13620)


## PLATFORM FEATURES

**New job for refreshing Materialized view SQL views:** SQL views of type "Materialized view" now has a new Job which can be scheduled to refresh the contents of the SQL view.

[jira (Backend)](https://dhis2.atlassian.net/browse/DHIS2-14718)

[jira (Frontend)](https://dhis2.atlassian.net/browse/DHIS2-15095)

[docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-239/scheduling.html#job-parameters)

**Multi-select option sets for aggregate data entry:** Users can now configure `MULTI_TEXT` data elements, which allows users to select multiple options for an option set. This feature is currently only added for aggregate data entry.

[jira](https://dhis2.atlassian.net/browse/DHIS2-14481)

**Jobs can now be grouped to run in sequence:** Jobs can be grouped to run in sequence, making it easier to define dependencies between jobs, and also clarify which jobs can be run in parallel. The feature is also soon available in the Scheduler app.

[jira](https://dhis2.atlassian.net/browse/DHIS2-14314)

[docs](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/scheduling.html#queues)

**Improvements to Data Integrity:** The Data Integrity API has been improved to handle the growing number of checks. To avoid exceeding the maximum URL length, the following changes have been implemented:
- POST endpoints now accept the list of checks as a request body
- Identifiers have been shortened
- Slow tests have been excluded from wildcard name expansion
- 25 new integrity checks
- Integrity checks for Organisation Units with same name and parent
- Integrity checks for Data Elements belonging to data sets with different periods types

[jira](https://dhis2.atlassian.net/browse/DHIS2-14506)
[jira](https://dhis2.atlassian.net/browse/DHIS2-14236)
[jira](https://dhis2.atlassian.net/browse/DHIS2-14495)
[jira](https://dhis2.atlassian.net/browse/DHIS2-14451)

**Improvements to Dashboard App Security:** Previously, users with READ access to a Dashboard could see all metadata objects, even without READ access. To address this, we have removed bypass functions and added validations requiring READ access to all Dashboard objects for updating and browsing.

[jira](https://dhis2.atlassian.net/browse/DHIS2-14404)

**Description Field added for Option and Option Sets**

[jira](https://dhis2.atlassian.net/browse/DHIS2-14102)

**Graphic added to start screen of new Data Entry App**

[jira](https://dhis2.atlassian.net/browse/DHIS2-13940)

**Added “Skip generation of organisation unit ownership data” checkbox to Data Administration App to support Event and enrollment analytics based on owner org unit**

[jira](https://dhis2.atlassian.net/browse/DHIS2-13916)

**Support added for application zip archives with a top-level directory**

[jira](https://dhis2.atlassian.net/browse/DHIS2-13760)

**User deletion prevented if the user has created or updated Metadata properties**

[jira](https://dhis2.atlassian.net/browse/DHIS2-13470?filter=10404)

**“User Disabled” column replaced with “Status” column in User app**

[jira](https://dhis2.atlassian.net/browse/DHIS2-13425)

**Added “Organisation unit” field in Program Indicator configuration:** Determines which organisation unit is assigned to program indicator values.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13374)

**Enabled grouping of data elements based on their category combo.** Added a new property to allow the configuration of grouping of data elements in the Data Entry app

[jira](https://dhis2.atlassian.net/browse/DHIS2-11600)

**Added option for importing indicators from CSV files**

[jira](https://dhis2.atlassian.net/browse/DHIS2-10529)


### PLATFORM API FEATURES

**Remove ProgramTrackedEntityAttributeGroup:**  This unused entity was removed from the software, and the relevant database tables, api endpoints and references will no longer be available.

[jira](https://dhis2.atlassian.net/browse/DHIS2-14815)

**New dedicated ping endpoint:** A new endpoint for pinging the server has been added. The new endpoint does not require authentication, extend the user session and uses a low amount of resources.

[jira](https://dhis2.atlassian.net/browse/DHIS2-14531)

**Users can no longer be created with case-sensitive usernames:** Existing users can still have the same usernames, with different upper- and lower-case variants, but new users must have a case-insensitive unique username accross all users.

[jira](https://dhis2.atlassian.net/browse/DHIS2-10886?filter=10404)

**New system info endpoint:** A new endpoint has been added to return information about the current system, including version, revision, build time and system ID.

[jira](https://dhis2.atlassian.net/browse/DHIS2-14822)

**DataStore now returns sharing information:** DataStore keys can be shared in the same way Metadata is shared. With this change, sharing information is now available in the DataStore API: `/api/dataStore/<namespace>/<key>/metaData`

[jira](https://dhis2.atlassian.net/browse/DHIS2-14595)





## RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation|[https://docs.dhis2.org](https://docs.dhis2.org/)|
|Upgrade notes|[Upgrade notes on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.40/README.md)|
|Full list of features and bugs|[Release Note](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.40/ReleaseNote-2.40.0.md)|
|Source code on GitHub|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.40.0/|
|Docker image|`docker pull dhis2/core:2.40.0`|
|Docker Hub images|https://hub.docker.com/r/dhis2/core|
|Community forum|https://community.dhis2.org/|

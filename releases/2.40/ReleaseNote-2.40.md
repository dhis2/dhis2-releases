# DHIS2 version 40 Release Note


## ANALYTICS FEATURES
**On-the-fly custom calculations in data visualizer:** Users can now create a custom calculation directly in the data visualizer application for pivot tables. This allow all users with access to the data visualize application to create their own calculations directly in the application instead of having to create an indicator, as many need additional calculations but to not have the authority to make a new indicator. The custom calculation is saved to the pivot table that it was created in. It does not create a new saved indicator that could be used in other tables or charts. This features is useful, for example, if users want to explore coverage calculations with various population denominators or need to make simple sums. 

[jira](https://dhis2.atlassian.net/browse/DHIS2-13871)

**Apply legend as background color for single value chart type:** This allows legend colors to be applied to the background color of a single value chart. This makes the perforance of the value much more obvious. 

[jira](https://dhis2.atlassian.net/browse/DHIS2-13702)

**Legend for stacked column charts:** This allows legend to be applied to column chart making performance of indicators more obvious in column charts. 

[jira](https://dhis2.atlassian.net/browse/DHIS2-13783)

**Show data element and indicator icon for single value charts:** If an icon has been assigned to a data element or indicator that icon can now be shown in a single value chart that uses that data element or indicator. Icons are used to help communicate what the value represents. For example if you have an indicator measuring total malaria cases you might choose the icon of a misquito which can now be shown on the dashboard when that indicator is used in a single value chart. 

[jira](https://dhis2.atlassian.net/browse/DHIS2-5497)

**Linelist showing on dashboards:** Line lists have been enabled on the dashboards. They have also been enabled in the lastest releases of 2.39 and 2.38 as well. 

[jira](https://dhis2.atlassian.net/browse/TECH-475)

**Support multiple event coordinate types in maps:** Now in the event layer you can choose to visualize the location by event coordinate, enrollment coordinate, tracked entity coordinate, program stage data elements of type coordinates or program tracked entity attributes of type coordinate. For example, if you need to see the household location for women which is captured as a data element for those that had delivered last week at the health facility for outreach services. 

[jira](https://dhis2.atlassian.net/browse/DHIS2-8165)

**Add option to show value/number in thematic layers** Now in thematic layers in maps you can choose to show the value directly in the map in addition to the legend. 

[jira](https://jira.dhis2.org/browse/DHIS2-13356)

**Prefictor functions for normDistCum and normDistDen** These functions provide the equivalent of Excel NORM.DIST() and LibreOffice NORMDIST(). For a normalized distribution of given mean and standard deviation they compute the the cumulative distribution function (CDF) probability that a variable falls below or at a specified value and the probability density function (PDF) at a specified value. These functions are needed for supply chain applications to compute the probability of a stock out for normally distributed stock consumption. The stockout probability is 1 minus the cumulative distribution function (CDF). 

[jira](https://dhis2.atlassian.net/browse/DHIS2-14714)

**Predictor by data element groups** Now you can apply a predictor to an data element group. This functionality provides a short cut if you need to make many like predictors based upon the data elements in a data element group. For example, in supply chain you have data elements for each comodity you are capturing and you need to apply the same predictor calculation to each. Now you can simply apply the predictor to the data element group of those commodity data elements to produce the values from  you need for each. 

[jira](https://dhis2.atlassian.net/browse/DHIS2-14635)


## TRACKER AND EVENT FEATURES


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

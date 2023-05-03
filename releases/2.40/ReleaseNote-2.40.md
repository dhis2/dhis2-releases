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

**Add option to show value/number in thematic layers** No in thematic layers in maps you can choose to show the value directly in the map in addition to the legend. 

[jira](https://jira.dhis2.org/browse/DHIS2-13356)



## TRACKER AND EVENT FEATURES

**Breaking the glass** Programs with access level "protected" are now supported in the Capture app. For protected programs, when searcing for a tracked entity instance that is found in another org unit, the user is asked to provide a reason for why they need access. This access level is useful when clinicians in one clinic should be able to access their own records, but only on exception accesses records from other clinics. This functionality was supported in the old Tracker Capture and have now been reimplemented in Capture in an improved form.
Supported in DHIS version 2.38 or higher, with capture version 100.27.0 or higher.

[jira](https://dhis2.atlassian.net/browse/DHIS2-13804)

**Saved program stage working lists for tracker programs**
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

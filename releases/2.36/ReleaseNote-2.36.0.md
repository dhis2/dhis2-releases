# DHIS version 2.36 Release Note

This document highlights the key features of the initial release of DHIS2 version 2.36. This version is fully compatible with the DHIS2 [Android Capture App](https://www.dhis2.org/android-2-4) version 2.4.


## ANALYTICS FEATURES

**Scatter plots:** Enable users to chart organizational units as points against two variables for a single period with scatter plots.

  - *Zoom in* by clicking and dragging the cursor over an area you would like to zoom in on. This is often necessary to see more detail in areas where many organisation units are clustered together. 
  - *Outlier detection* can be done using either a standard z-score, modified z-score, or an interquartile range via the options menu. An extreme vertical (y-axis) and horizontal (x-axis) threshold line can also be applied. Endorsed by the WHO, this is a very clear and powerful way to identify outliers that often represent data quality issues. You can identify the outliers that are most likely to throw off national statistics by using the outlier detection in combination with the extreme X and Y threshold lines.

[Screenshot]() | [Docs]()

**Full screen dashboard item presentation mode:** Expand any dashboard item (chart, map, or pivot table) to the size of the entire screen. This is great  for presenting data in virtual or in-person meetings directly from the dashboard.

[Screenshot]() | [Docs]()

**Bar and column chart legends:** Change the color of a bar or column based upon a predefined legend. This makes it easy to highlight under and over-performance with bar and column charts.

[Screenshot]() | [Docs]()

**Mobile-friendly dashboard app:** The DHIS 2 dashboard web app is now more mobile-friendly and is more usable on mobile devices. This allows you to use the power of dashboards from your mobile device. Now you can take your dashboards with you, check them any time, and share data with anyone you need from the convenience of your phone. The app has adopted several of the principles of _Progressive Web Apps_ (PWA). Offline support to dashboards will come a in future release.

[Screenshot]() | [Docs]()

**Population maps from Google Earth Engine:** Many DHIS2 instances suffer from not having adequate or accurate population values. This feature allows you to build maps with all data available in Google Earth Engine including the latest World Pop population estimates. You can apply a boundary layer to visualize the population totals, density by hectare, and average by hectare for organizational units. You can also apply a buffer around a facility or health post to see the population that falls within that buffer. Population dataset are available for age and sex disaggregation as well. These features allow you to quickly get the latest World Pop population estimates directly from the maps application. This is very useful feature for example in areas where census data is unreliable, for planning outreach or mass campaigns, and estimating risk for areas for high disease transmission.

[Screenshot]() | [Docs]()

**Universal data item search:** The data visualizer app now supports search for data items across all types, making it much easier to find the data items you want across indicators, data elements, data sets, program data elements and program indicators. All you need to do is search for the data item and all matches will be displayed irrespective of data item type.

[Screenshot]() | [Docs]()

**Dashboard filter settings:** Dashboard owners can now define which filters to make available for each dashboard. Often, a large number of data dimensions exist, and not all of them apply to the data in dashboard. This makes it cumbersome to find and select relevant data dimension. By defining exactly which data dimensions are relevant and become available for a dashboard, the user experience is simplified and made more engaging. Go to _Edit_ > _Filter settings_ to select filters.

[Screenshot]() | [Docs]()

**Visualization type constraints for dashboard items:** Will help the countries and projects work hard to craft dashboards that tell a specific story. In these countries the visualization types (maps, charts, or tables) are carefully selected and optimized. In previous versions of DHIS2 a user can quickly change the visualization type of each dashboard item between a table, map, or bar chart, but sometimes this may undermine the carefully crafted story the dashboard owner is trying to communicate. Now system administrators have the option to remove the option to change visualization types of the dashboard item, removed interpretation, remove the option to open the analytics in the relevant app, and remove the option for view full-screen. This is a system wide setting by the administrator through the system settings app and would be applied to all dashboards.

[Screenshot]() | [Docs]()


## TRACKER AND EVENT FEATURES



## PLATFORM FEATURES



## API FEATURES



## RELEASE INFO


|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation|[https://www.dhis2.org/documentation](https://docs.dhis2.org/)|
|Upgrade notes|[Upgrade notes on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.36/README.md)|
|Details about each feature on JIRA|https://jira.dhis2.org/issues/?filter=XXXXX|
|Overview of bugs fixed on JIRA|https://jira.dhis2.org/issues/?filter=XXXXX|
|Source code on Github|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.36/|
|Docker|`docker pull dhis2/core:2.36.0`<br>_for more docker image variants see [dockerhub](https://hub.docker.com/repository/docker/dhis2/core)_|
|DHIS 2 community|https://community.dhis2.org/|

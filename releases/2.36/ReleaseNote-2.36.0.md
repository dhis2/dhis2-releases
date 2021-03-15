# DHIS version 2.36 Release Note

This document highlights the key features of the initial release of DHIS2 version 2.36.
This version is fully compatible with the DHIS2 [Android Capture App 2.4](https://www.dhis2.org/android-2-4).


## ANALYTICS FEATURES

_Scatter Plots_ enable users to chart organizational units as points against two variables for a single period. 
  - *Zoom in* by clicking and dragging the curser over an area you would like to zoom in on. This is often necessary to see more detail in areas where many org. units are clustered together. 
  - *Outlier detection* can be doned using either a standard z-score, modified z-score, or an interquartle range via the options menu. An extream vertival (y-axis) and horizontal (x-axis) threshold line can also be applied. Endorsed by the WHO, this is a very clear and powerful way to identify outliers that often represent data quality issues. You can identify the outliers that are most likely to throw off national stastics by using the outlier detection in combination with the extream X and Y threshold lines.

_Full screen dashboard item presentation mode_ allows you to expand any dashboard item (chart, map, or pivot table) to the size of the whole screen. This is a great fueature to make it easier to do data analyis as well as presenting data in a vertual or in-person meetings directly from the dashboard.  

_Bar and column chart legends_ makes it possible to change the color of a bar or column based upon a predefined legend. This will make it more possible to highlight under performance or good performance using bar and column charts. 

_Mobile dashboard progressive web app_ is now available. This puts the power of DHIS2 dashboards right in your pocket. Now you can take your dashboards with you, check them any time, and share data with anyone you need from the convience of your phone. This app works on andriod and apple phones by navigating to your dhis2 dashboards through your phone's web browser and adding a shortcut link from your dashboard to your homescreen. Note that this is _*not*_ an app that can be downloaded from google play store of the apple app store. 

_Population and google earth engine data mapping._ Many DHIS2 instance suffer from not having adequate or accurate popluation values. This feature allows you to build maps with all data available in google earth engine including the latest World Pop population estimates. You can apply a bounraries layer to visualize the population totals, density by hectare, and average by hectare for organizational units as well as through applying a buffer to a facility or health post to see the population that falls within that buffer. Population dataset are available for age and sex dissagregations as well. These features allow you to quicky get the latest World Pop population estimates directly from the maps application. This is very useful feature for example in areas where census data is unreliable, for planning outreach or mass campaigns, and estimating risk for areas for high disease transmitability.  

_Universal data search in data visualizer_ makes it much easier to find the data items you want in the data visualizer app. Now all you need to do is search for the data item, and it will show you all of the data items that match your search regardless if they are data elements, indicaotrs, program indicators, or event data items. 

_Dashboard filter settings_ allows dashboard owners to set which filters will be available to use on each dashboard. Many project and countries have dozens of configured filters through org. unit group sets or catigory combinations. There are also the standard organization unit and period filters. In previous versions all of these filters would be available on every dashboard. This had lead to some users getting confued by the many filters that may not be approapriate for the data on the dashboard.  However now in 2.36, the dashboard owner can select which filter they want any user of the dashboard to be able to use. This puts more control in the hand of the dashboard owner over how the data can be analazed from the dashboard, and hopfully avoids some confusion to the users of those dashboards. 

_Visualization type contraints for dashboard items_ will help the countries and projects work hard to craft dashboards that tell a specific story. In these countries the visualization types (maps, charts, or tables) are carfully selected and optimized. In previous versions of DHIS2 a user can quickly change the visualization type of each dashboard item between a table, map, or bar chart, but sometimes this may undermine the carefully crafted story the dashboard ower is trying to communicate. Now system administrators have the option to remove the option to change visualization types of the dashboard item, removed interpretation, remove the option to open the analytics in the relivant app, and remove the option for veiw fullscreen. This is a system wide setting by the administrator through the system settings app and would be applied to all dashboards.


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

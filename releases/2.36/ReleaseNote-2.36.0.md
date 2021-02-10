# DHIS version 2.36 Release Note

This document highlights the key features of the initial release of DHIS2 version 2.36.
This version is fully compatible with the DHIS2 [Android Capture App 2.4](https://www.dhis2.org/android-2-4).


## ANALYTICS FEATURES

_Scatter Plots_ enable users to chart organizational units as points against two variables for a single period. 
  - *Zoom in* by clicking and dragging the curser over an area you would like to zoom in on. This is often necessary to see more detail in areas where many org. units are clustered together. 
  - *Outlier detection* is enabled using either a modified z-score or an interquartle range via the options menu. An extream vertival (y-axis) and horizontal (x-axis) threshold line can also be applied. Endorsed by the WHO, this is a very clear and powerful way to identify outliers that often represent data quality issues. You can identify the outliers that are most likely to throw off national stastics by using the outlier detection in combination with the extream X and Y threshold lines.

_Full screen dashboard item presentation mode_ allows users to expand any dashboard item (chart, map, or pivot table) to the size of the whole screen. This allows for more detailed analysis as well as the presentation of analytics directly from the dashboard. This is a great fueature to make it easier to present analytics in a vertual or in-person meetings directly from a dashboard.  

_Bar and column chart legends_ makes it possible to change the color of a bar or column based upon a predefined legend. This will make it more possible to highlight under performance or good performance using bar and column charts. 

_Mobile dashboard progressive web app_ is now available. This puts the power of DHIS2 dashboards right in your pocket. Now you can take your dashboards with you, check them any time, and share data with anyone you need from the convience of your phone. This app works on andriod and apple phones. 

_Populationand google earth engine data mapping._ Many DHIS2 instance suffer from not having adequate or accurate popluation figures. This feature allows you to build maps with all data available in google earth engine including the latest world pop. population estimates. Population dataset are available for age and sex dissagregations. This allows users to quicky get the latest World Pop population estimates directly from the maps application. This is very useful feature for example in areas where census data is unreliable, for planning outreach and mass campaigns, and estimating risk for areas with the potential for high disease tranmitability.  

_Universal data search in data visualizer_ makes it much easier to find the data items you want in the data visualizer app. Now all you need to do is search for the data item and it will show you all of the data items that match your search regardless is they are data elements, indicaotrs, program indicators, or event data items. 




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

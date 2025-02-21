# DHIS2 Deprecated Features

When a feature, or product, is first listed as deprecated, support for using it with DHIS2 is scheduled to be removed in a future update.
This information is provided to help you plan for alternatives to using that feature or product.
When the first version of DHIS2 releases in which that support is removed, this article is updated to indicate that specific version.

Generally, a feature is removed after it has been deprecated in all three of the last maintained versions.

|Feature|Deprecation announced|Planned removal|Removed|
|:---------|:---:|:---:|:---:|
|Tracker features deprecated in [v42](https://github.com/dhis2/dhis2-releases/tree/master/releases/2.42#tracker)|May 2025|2.43.0|-|
|Tracker features deprecated in [v41](https://github.com/dhis2/dhis2-releases/tree/master/releases/2.41#tracker)|May 2024|2.42.0|2.42.0|
|The /user/userCredentials object is merged into the user object|May 2023|2.42.0|2.42.0|
|The old and deprecated OAuth support|May 2023|2.42.0|2.42.0|
|The `/api/system/ping` is replaced by `/api/ping`|Sep 2023|2.42.0|-|
|Cache invalidation based on Debezium|June 2023|2.41.0|2.41.0|
|Request parameters for `/api/organisationUnits/{uid}` resulting in a list|April 2023|2.41.0|-|
|The old tracker APIs (replaced by `/api/tracker` endpoints)|Sep 2022|2.41.0|-|
|The Data Entry app (replaced by the Aggregate Data Entry app)|Dec 2022|2.41.0|-|
|The `/api/eventCharts` and `/api/eventReports` API endpoints|April 2022|2.41.0|-|
|Legacy access objects (`UserGroupAccess`, `UserAccesses`, `publicAccess`)|2021|2.41.0|2.41.0|
|XML support in metadata APIs and metadata import/export|April 2022|-|2.39.0|
|The `POST /api/dataAnalysis/stdDevOutlier` and `POST /api/dataAnalysis/minMaxOutlier` API endpoints|April 2021|-|2.39.0|
|The `POST /api/dataAnalysis/followup` API endpoint|April 2021|-|2.39.0|
|The `type` field in the `/api/analytcs` API endpoint|April 2021|-|2.39.0|
|Analytics visualizations: The _reportsTables_ and _charts_ endpoints|April 2020|-|2.37.0|
|Mobile configuration module|October 2020|-|2.36.0|
|The Event capture app|October 2018|-|2.32.0|
|Column "storagestatus" from the fileresource table|-|-|2.31.0|

# DHIS2 Deprecated Features

When a feature, or product, is first listed as deprecated, support for using it with DHIS2 is scheduled to be removed in a future update.
This information is provided to help you plan for alternatives to using that feature or product.
When the first version of DHIS2 releases in which that support is removed, this article is updated to indicate that specific version.

Generally, a feature is removed after it has been deprecated in all three of the last maintained versions.

## Deprecated Features

The following features are deprecated. You can still use them now, but the DHIS2 core team plans to end support in the future.

|Feature|Deprecation first announced|Planned end of support<br>(version)|
|:---------|:---:|:---:|
|Refer to [v42](https://github.com/dhis2/dhis2-releases/tree/master/releases/2.42#tracker) for deprecations in tracker.|May 2025|2.42.0|
|The /user/userCredentials object is merged into the user object and will be removed | May 2023|2.42.0|
|The old and deprecated OAuth support will be removed| May 2023|2.42.0|
|The old tracker APIs are deprecated and replaced by `/api/tracker` endpoints |Sep 2022|2.41.0|
|The Data Entry app is deprecated, and replaced by the Aggregate Data Entry app|Dec 2022|2.41.0|
|The `/api/eventCharts` and `/api/eventReports` API endpoints are deprecated. Use the consolidated `/api/eventVisualizations` API instead.|April 2022|2.41.0|
|Request parameters for `/api/organisationUnits/{uid}` resulting in a list are deprecated. Use path based substitues as follows: <ul><li> `/api/organisationUnits/{uid}?includeChildren=true` => `/api/organisationUnits/{uid}/children`</li><li> `/api/organisationUnits/{uid}?includeDescendants=true` => `/api/organisationUnits/{uid}/descendants`</li><li> `/api/organisationUnits/{uid}?includeAncestors=true` => `/api/organisationUnits/{uid}/ancestors` </li><li> `/api/organisationUnits/{uid}?level={n}` => `/api/organisationUnits/{uid}/children?level={n}` </li></ul> | April 2023 | 2.41.0 |
|The `/api/system/ping` is replaced by `/api/ping`. Unlike the former endpoint, the new endpoint does not require the user to be authenticated, nor will it extend the users session.|Sep 2023|2.42.0|


## Removed features

The following features are no longer supported.

|Feature|Deprecation first announced|Support removed<br>(version)|
|:---------|:---:|:---:|
|All parameters, properties and endpoints that have been deprecated in
[v41](https://github.com/dhis2/dhis2-releases/tree/master/releases/2.41#tracker) have been removed.|May 2025|2.42.0|
|The /user/userCredentials object is merged into the user object and will be removed | May 2023|2.42.0|
|The old and deprecated OAuth support will be removed| May 2023|2.42.0|
|Cache invalidation based on Debezium.| June 2023|2.41.0|
|XML support in metadata APIs as well as in metadata import and export has been removed.|April 2022|2.39.0|
|The `POST /api/dataAnalysis/stdDevOutlier` and `POST /api/dataAnalysis/minMaxOutlier` API endpoints are removed. These endpoints are superseded by the `/api/outlierDetection` API which offers higher performance and more sophisticated outlier detection. |April 2021|2.39.0|
|The `POST /api/dataAnalysis/followup` API endpoint for reading follow-up data values is removed. This endpoint is superseded by the `GET /api/dataAnalysis/followup` API endpoint. |April 2021|2.39.0|
|The `type` field in the `/api/analytcs` API endpoint `metadata` > `headers` response is removed. Instead use the `valueType` field. |April 2021|2.39.0|
|New combined endpoint for analytics visualizations: The _reportsTables_ and _charts_ endpoints have been removed in favour of a new and consolidated _visualizations_ endpoint.|April 2020|2.37.0|
|*Mobile configuration module* is removed. It is replaced by the *SMS configuration* app. |October 2020| 2.36.0|
|The *Event capture* app is removed. It is replaced by the *Capture* app which offers all of its features and more.|October 2018|2.32.0|
|Remove the deprecated column "storagestatus" from the fileresource table. This property is no longer persisted.||2.31.0|
|Legacy access objects: `UserGroupAccess`, `UserAccesses`, `publicAccess` are replaced with `sharing.users`, `sharing.userGroups` and `sharing.public`. As a result, those properties cannot be used in API filter. For example `api/dataSets?filter=userAccesses:empty` is replaced by `api/dataSets?filter=sharing.users:empty`| 2021 | 2.41 |

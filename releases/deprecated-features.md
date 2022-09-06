# DHIS2 Deprecated Features

When a feature, or product, is first listed as deprecated, support for using it with DHIS2 is scheduled to be removed in a future update.
This information is provided to help you plan for alternatives to using that feature or product.
When the first version of DHIS2 releases in which that support is removed, this article is updated to indicate that specific version.

Generally, a feature is removed after it has been deprecated in all three of the last maintained versions.

## Deprecated Features

The following features are deprecated. You can still use them now, but the DHIS2 core team plans to end support in the future.

|Feature|Deprecation first announced|Planned end of support<br>(version)|
|:---------|:---:|:---:|
|The `/api/eventCharts` and `/api/eventReports` API endpoints are deprecated. Use the consolidated `/api/eventVisualizations` API instead.|April 2022|2.41.0|
|XML support in metadata APIs as well as in metadata import and export has been deprecated.|April 2022|2.39.0|
|The `POST /api/dataAnalysis/stdDevOutlier` and `POST /api/dataAnalysis/minMaxOutlier` API endpoints are deprecated. These endpoints are superseded by the `/api/outlierDetection` API which offers higher performance and more sophisticated outlier detection. |April 2021|2.39.0|
|The `POST /api/dataAnalysis/followup` API endpoint for reading follow-up data values is deprecated. This endpoint is superseded by the `GET /api/dataAnalysis/followup` API endpoint. |April 2021|2.39.0|
|The `type` field in the `/api/analytcs` API endpoint `metadata` > `headers` response is deprecated. Instead use the `valueType` field. |April 2021|2.39.0|


## Removed features

The following features are no longer supported.

|Feature|Deprecation first announced|Support removed<br>(version)|
|:---------|:---:|:---:|
|New combined endpoint for analytics visualizations: The _reportsTables_ and _charts_ endpoints have been deprecated in favour of a new and consolidated _visualizations_ endpoint.|April 2020|2.37.0|
|*Mobile configuration module* is removed. It is replaced by the *SMS configuration* app. |October 2020| 2.36.0|
|The *Event capture* app is removed. It is replaced by the *Capture* app which offers all of its features and more.|October 2018|2.32.0|
|Remove the deprecated column "storagestatus" from the fileresource table. This property is no longer persisted.||2.31.0|
||||

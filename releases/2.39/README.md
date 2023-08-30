# 2.39 Upgrade Notes

> **Please ensure you have read the upgrade notes from the [PREVIOUS RELEASE](../2.38/README.md), if upgrading from an earlier version**

## Web Apps

* The previous data approval Struts-based web module is removed, and superseded by the React-based data approval web app.

## Tracker

* Relationships are now soft-deletable entities. This means that when they are deleted, they are still in the database but they are still used in validations. So if an import is trying to reference a soft-deleted relationship, the importer will return an error.
* In previous versions Relationships were identified by their `UID` or by a combination of `Relationship Type`, `from` field and `to` field. From 2.39 Relationships are only identified by their `UID`. This is causing a potential breaking change as earlier a payload with a Relationship without a specified `UID` could be imported multiple times without errors (just a warning that updating the relationship was not possible), while now the import is throwing an error stating that a Relationship of the same type and linking the same entities already exists.

## API

* **Metadata attribute validation:** Validation of metadata attributes will be executed when saving objects with attribute values in the maintenance app. Validation rules are now based on the `Attribute.ValueType`. Most of those rules are straightforward. For instance value type "number" will only accept digits. On the other hand, "phone number" has a regular expression validation rule `"^[0-9+\\(\\)#\\.\\s\\/ext-]{6,50}$"`. As a result of this new validation feature, you might get errors when editing metadata objects which now have invalid attribute values. In that case please update the values and save the object.

* **Old tracker APIs deprecated:** The old tracker API endpoints for importing tracked and event data are now deprecated. We encourage developers of apps and extensions do transition over to the new endpoints. Server-to-server sync will continue to use the old API endpoints. This includes all API calls which are made with the import strategy `SYNC`. Deprecated API endpoints (except `SYNC`) are:
   ```
   - /api/trackedEntityInstances
   - /api/enrollments
   - /api/events
   ```
   These endpoints have been replaced with the new tracker endpoint: 
   ```
   - /api/tracker/
   ```
   [Docs new tracker endpoint](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-238/new-tracker.html) | [Docs old tracker endpoints](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-238/tracker.html)

* **Deprecated endpoints have been removed:** (see [deprecated-features](https://github.com/dhis2/dhis2-releases/blob/master/releases/deprecated-features.md) )

    * XML support in metadata APIs as well as in metadata import and export has been removed.

    * The `POST /api/dataAnalysis/stdDevOutlier` and `POST /api/dataAnalysis/minMaxOutlier` API endpoints are removed. These endpoints are superseded by the `/api/outlierDetection` API which offers higher performance and more sophisticated outlier detection.

    * The `POST /api/dataAnalysis/followup` API endpoint for reading follow-up data values is removed. This endpoint is superseded by the `GET /api/dataAnalysis/followup` API endpoint.

    * The `type` field in the `/api/analytcs` API endpoint `metadata` > `headers` response is removed. Instead use the `valueType` field.

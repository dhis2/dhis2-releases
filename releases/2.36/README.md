# 2.36 Upgrade Notes

## Database

- A `shortName` column (mandatory property) has been added to the `category`, `dataelementgroupset` and `organisationunitgroupset` tables.
- A `description` column has been added to the `dataelementgroupset` and `organisationunitgroupset` tables.
- New index on table `trackedentityprogramowner` over columns `(trackedentityinstanceid, programid, organisationunitid)`. Improves lookup related to organisation unit scopes in the context of a program.
- New index on table `programinstance` over columns `(programid)`. Improves general lookup for programinstances based on program in most cases.
- New index on table `trackedentityattributevalue` over columns `(trackedentityinstanceid, trackedentityattributeid, lower(value))`. This is in addition to the previous index over the columns `(trackedentityattributeid, lower(value))`. We saw situations related to value lookup in the context of tracked entity instances where postgres would revert to a sequential scan, when using the existing index would yield a much better result. With the new index we are successfully encouraging postres to use the index also when we are matching on tracked entity instances.
- New index on table `programstageinstance` over the columns `(status, executiondate)`. This table often grows a lot bigger than tracked entity instance and program instance tables, and we saw a bottleneck in some of our queries when including program stage instances as filters in searches. We added this index to improve the performance of the most common column we filter by, status, as well as executiondate, which is often used together with status when searching for events.
- Note: Due to the number of new indexes added to potientially large tables, the upgrade process might take a significant amount of time.
- Sharing: a new jsonb column `sharing` is added to all metadata tables which is used to store sharing data. All of current `*useraccesses` and `*usergroupaccesses` tables are deprecated. There is a flyway script executed at start up for migrate all sharing data from deprecated tables to `sharing` column. In order to update sharing data with SQL query you can use [PostgreSQL JSON Functions](https://www.postgresql.org/docs/12/functions-json.html). The JSON format of the new `sharing` column looks like below. 
```json
{
  "owner": "GOLswS44mh8",
  "external": false,
  "users":{},
  "userGroups":
  {
    "Rg8wusV7QYi":
    {
      "access": "r-r-----",
      "id": "Rg8wusV7QYi"
    }
  },
  "public": "rw------"
}
```


## API

- The `POST /api/dataAnalysis/stdDevOutlier` and `POST /api/dataAnalysis/minMaxOutlier` API endpoints are deprecated and will be removed in 2.37. These endpoints are superseded by the `/api/outlierDetection` API which offers higher performance and more sophisticated outlier detection.
- The `POST /api/dataAnalysis/followup` API endpoint for reading follow-up data values is deprecated and will be removed in 2.38. This endpoint is superseded by the `GET /api/dataAnalysis/followup` API endpoint.
- The `type` field in the `/api/analytcs` API endpoint `metadata` > `headers` response is deprecated and will be removed in 2.37. Instead use the `valueType` field.
- Several Visualization attributes are made read-only as part of a deprecation process related to changes in the Visualization API (`/api/visualizations`). You can find the "new format" and the respective changed attributes at [DHIS2-10054](https://jira.dhis2.org/browse/DHIS2-10054). The new format is being covered in the Visualization section of DHIS2 documentation. To avoid breaking existing applications the old format will still be returned as part of the response. Changes to the refactored attributes will only take effect when using the new format. See [DHIS2-1369](https://jira.dhis2.org/browse/DHIS2-1369).
- The `restrictToCaptureScope` parameter in the API endpoints `api/categoryOptions` and `api/programs`  is no longer supported. For programs alone, an alternate endpoint `/api/programs/orgUnits?programs={programUids}` for fetching organisationUnit associations can be used. 
- Sharing: the introduction of new `sharing` column only affects the backend services and database as we try to keep this change backward compatible. Means that all api and apps should be working normally as before. All sharing related api endpoints still accept old format with `userAccesses` and `userGroupAccesses`, in backend we convert them to new format and saved to database. All api endpoints will return both new and old sharing format. Please see [Sharing](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-237/sharing.html) for more details.

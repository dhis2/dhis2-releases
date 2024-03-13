# 2.41 Upgrade Notes

> :warning: **Please ensure you have read the upgrade notes from the [PREVIOUS RELEASE](../2.40/README.md), if upgrading from an earlier version**

## API
### Sharing

- **Legacy Sharing properties are removed**: from 2.36 a new `sharing` property has been introduced in order to replace the legacy sharing properties userAccesses, userGroupAccesses, publicAccess, externalAccess. In order to keep the web api backward compability we have been supported both new and legacy properties our web api and all related features. However, in order to implement new features and keep the code base clean we need to remove the legacy format in 2.41. So from this version, you will not get those properties returned from our web api : `userAccesses`, `userGroupAccesses`, `publicAccess`, `externalAccess`. Instead, those properties can be accessed in new `sharing` properties as documented [here](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-237/sharing.html#new-sharing-object).

- **Breaking change in Dashboard App**: in 2.40 and older versions, Users can view Dashboard content even without `METADATA_READ` permission to all metadata objects linked to DashboardItems. That is possible because of a loophole in our web api which allows any User to see details of any metadata object if the `uid` is known. This loophole has been causing issues for a long time so we decided to remove it in 2.41. As a result, many Users will not be able to view Dashboards because they don't have enough `METADATA_READ` permission of the Dashboard content. In order to fix it, the System Administrator or the Dashboard owner can make use of the feature [Cascade sharing for Dashboard](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-237/sharing.html#cascade-sharing-for-dashboard) to grant required permissions to affected Users.

### Analytics

#### Tracked Entity Attribute Update Script Enhancement

In this release, a Flyway script has been introduced to enhance the DHIS system. The script is designed to update the valueType of all Tracked Entity Attributes (TEAs) whose values are incompatible with the declared attribute type.

Specifically, the script will update the type of these attributes to "TEXT." For instance, if a TEA is declared as a NUMBER, but its value is a text string, the script will modify the attribute type to TEXT.

This enhancement ensures data integrity and alignment between attribute types and their actual values which is especially needed in Analytics.

##### Verifying which attributes will be affected:

The following query can be executed before upgrading to verify which TEAs will be affected.

The query will also show the update statement 

``` SQL
CREATE or replace FUNCTION can_be_casted(s text, type text) RETURNS bool AS
$$
BEGIN
    execute 'SELECT $1::' || type || ';' USING s;
    return true;
EXCEPTION
    WHEN OTHERS THEN
        RETURN false;
END;
$$ LANGUAGE plpgsql STRICT;

select uid,
       valuetype,
       description,
       'update trackedentityattribute set valuetype=''TEXT'' where uid = ''' || uid || ''';' as suggested_fix_statement
from (select tea.uid,
                   tea.valuetype,
                   tea.description,
                   teav.value,
                   case
                       when tea.valuetype in ('NUMBER', 'UNIT_INTERVAL', 'PERCENTAGE') then can_be_casted(teav.value, 'double precision')
                       when tea.valuetype like '%INTEGER%' then can_be_casted(teav.value, 'integer')
                       when tea.valuetype in ('DATE', 'DATETIME', 'AGE') then can_be_casted(teav.value, 'timestamp')
                       end as safe_to_cast
            from trackedentityattribute tea
                     join trackedentityattributevalue teav
                          on tea.trackedentityattributeid = teav.trackedentityattributeid) as t1
      where safe_to_cast = false
group by uid, valuetype, description;

DROP function if exists can_be_casted(s text, type text);
```
> [!NOTE]
> It's unnecessary to manually run the update since the system will do it automatically on the next system startup.

> [!NOTE]
> You can also use this migration to identify the TEAs you need to correct if you *do not* want the type to be automatically changed.

> [!IMPORTANT]
> The first time the new version boots up, the script will be automatically executed (the first startup after upgrading might be slightly slower because of this script running).

### Tracker

#### Breaking Changes

The following query parameters have been removed as the same behavior can be achieved using the `filter` parameter

* `/tracker/trackedEntities?query`
* `/tracker/trackedEntities?attribute`

The following query parameters have been removed as they were misleading and did not provide any useful information

* `/tracker/trackedEntities?includeAllAttributes`

The following query parameters have been removed as they have never been implemented and thus had no
effect on the response

* `/tracker/trackedEntities?attachment`
* `/tracker/events?attachment`

Following parameters were removed as including or excluding fields from the JSON response can be achieved by using the `fields` query parameter

* `/tracker/trackedEntities?skipMeta`
* `/tracker/events?skipMeta`
* `/tracker/events?skipEventId`


The `index` field of an entity in the report of a tracker import was removed.
When importing tracker entities using `POST /tracker` endpoint, the response follow the format described [here](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-master/tracker.html#import-summary-structure).
The `index` field has been removed from the `objectsReport` as the objects are now ordered in the same way as in the request.
The `orgUnitName` field has been removed from `GET /tracker/enrollments` and `GET /tracker/events` endpoints, so it is not anymore possible to order on this field.
The `followup` field has been renamed to `followUp` in the response for `GET /tracker/events` CSV endpoint.

#### ACL tracker export breaking changes
** Unless explicitly specified otherwise, the subsequent breaking changes are applicable exclusively to versions 2.41 and beyond.
1. Validity of `/events` and `/tracker/events` requests
    * [TECH-1630](https://dhis2.atlassian.net/browse/TECH-1630): A request to `/events` and `/tracker/events` is now considered valid if the supplied organization unit is within the user's search scope, regardless of the program access level. This aligns with the current behavior of `/tracker/trackedEntities` and `/tracker/enrollments`. In previous versions, specifying a protected or closed program or omitting the program in the request, coupled with an organization unit outside the user's capture scope, would result in an exception. This change is effective from version 2.38 onwards.
    * [TECH-1663](https://dhis2.atlassian.net/browse/TECH-1663): Additionally, in `/events` and `/tracker/events`, a request using the `ACCESSIBLE` mode without specifying a program will now return all events in the user's search scope (in `OPEN` or `AUDITED` programs) and all events in the user's capture scope (in `PROTECTED` or `CLOSED` programs). Formerly, it would only return events from the user's capture scope. This change is also effective from version 2.38 onwards.

2. API Request with Organisation Unit Modes
    * [TECH-1585](https://dhis2.atlassian.net/browse/TECH-1585): An API request utilizing one of the organization unit modes (`ALL`, `ACCESSIBLE`, or `CAPTURE`) will now result in a `400|Bad Request` if an additional organization unit is specified in the request. In previous versions, such a request would tolerate the presence of an organization unit, even if it wouldn't be used when fetching results from the database. However, the request would return an exception if the provided organization unit wasn't within the user's scope.

3. Default Organisation Unit Modes
    * [TECH-1588](https://dhis2.atlassian.net/browse/TECH-1588): When neither the organization unit nor the organization unit mode is specified in the request, the default mode will be `ACCESSIBLE`. In contrast, older versions of `/trackedEntities` and `/enrollments` would return an exception when neither was specified. The SELECTED mode will continue being the default when an organization unit is specified.

4. Organization Unit Mode ALL Authorization
    * [TECH-1589](https://dhis2.atlassian.net/browse/TECH-1589): In `/enrollments` and `/tracker/enrollments`, the organization unit mode `ALL` is now restricted to users with either `ALL` or `F_TRACKED_ENTITY_INSTANCE_SEARCH_IN_ALL_ORGUNITS` authorities, consistent with the other two endpoints. Previously, any user could use the `ALL` mode, even if it might not return any results based on the user scope. This change is effective from version 2.38 onwards.

    * [TECH-1634](https://dhis2.atlassian.net/browse/TECH-1634) [TECH-1668](https://dhis2.atlassian.net/browse/TECH-1668): In all three endpoints, superusers and users with authorization "Search Tracked Entity Instance in All Org Units" will receive system-wide data, regardless of their user scope. Unauthorized users will now receive a `400|Bad Request`. Up until now, even superusers would only receive data within the boundaries of their user scope.

5. Tracker Exporter Endpoint Responses
    * [TECH-1630](https://dhis2.atlassian.net/browse/TECH-1630): A request to `/events` and `/tracker/events` with the organization unit mode `CHILDREN` will now produce a response comprising elements from the requested organization unit and its immediate children. This adjustment aligns the behavior with that of `/tracker/trackedEntities` and `/tracker/enrollments`. Previously, it did not include events from the supplied organization unit, only its children were present in the response. This change is effective from version 2.38 onwards.

    * [TECH-1656](https://dhis2.atlassian.net/browse/TECH-1656) A request to `/tracker/trackedEntities` will now result in a `403|Forbidden` if the user lacks access to the requested program or tracked entity type. In the past, this scenario would trigger an `409|Conflict`.

    * [TECH-1658](https://dhis2.atlassian.net/browse/TECH-1658) The endpoints `/tracker/trackedEntities` and `/tracker/enrollments` now throw a `400|Bad Request` in the event of inconsistent parameters involving the program field or any combination thereof. Previously, this scenario would result in an `409|Conflict`.

    * [TECH-1589](https://dhis2.atlassian.net/browse/TECH-1589): When accessing the `/tracker/enrollments endpoint`, a `403|Forbidden` status will be triggered if the user lacks authorization for the specified program, tracked entity type, or either the tracked entity's or program's tracked entity type. Previously a `409|Conflict` was triggered instead.

#### Deprecated APIs

##### Pagination

In the tracker endpoints

* `/tracker/trackedEntities`
* `/tracker/enrollments`
* `/tracker/events`
* `/tracker/relationships`
* `/programNotificationInstances`
* `/programNotificationTemplates/filter`
* `/potentialDuplicates`

the pagination-related fields

```json
{
  "page": 3,
  "pageSize": 2,
  "total": 373570,
  "pageCount": 186785,
  "instances": [
  ]
}
```

have been deprecated in favor of a `pager` object. Both the flat pagination fields shown above and
the nested `pager` are returned as of 2.41 if pagination is enabled. The flat fields will be removed
in a future release.

```json
{
  "pager": {
    "page": 3,
    "pageSize": 2,
    "total": 373570,
    "pageCount": 186785,
  },
  "page": 3,
  "pageSize": 2,
  "total": 373570,
  "pageCount": 186785,
}
```

The actual data previously returned in `instances` is returned in a key named after the plural of
the returned entity itself. For example `/tracker/trackedEntities` returns tracked entities in key
`trackedEntities` while `/potentialDuplicates` returns potential duplicates in key `potentialDuplicates`.

Query parameter `paging` replaces `skipPaging`. Note that `paging` is the inverse of `skipPaging`.
This means if you want to disable pagination use `paging=false` instead of `skipPaging=true`.
Pagination remains on by default.

This aligns pagination in Tracker with other DHIS2 endpoints.

##### Semicolon as separator for identifiers (UID)

Fields or query parameter accepting multiple values like UIDs are now consistently separated by
comma `,` instead of semicolon `;`. This is to ensure UIDs are consistently separated by comma
across all DHIS2 endpoints.

The following fields are affected
* `event.attributeCategoryOptions` (as well as an event returned as part of a relationship
`from`/`to`)

The following query parameters accepting one or more semicolon separated UIDs are deprecated in
favor of a parameter accepting **comma separated** UIDs. Names are now also consistently using
plural to indicate more than one UID is allowed.

`/tracker/trackedEntity`
* `assignedUsers` replaces `assignedUser`
* `orgUnits` replaces `orgUnit`
* `trackedEntities` replaces `trackedEntity`

`/tracker/enrollments`
* `orgUnits` replaces `orgUnit`
* `enrollments` replaces `enrollment`

`/tracker/events`
* `assignedUsers` replaces `assignedUser`
* `attributeCategoryOptions` replaces `attributeCos`
* `events` replaces `event`

##### Naming

Tracker names have changed over time. In order to provide a consistent API we have deprecated the
following query parameters and paths in favor of new ones consistently using `trackedEntity`,
`enrollment` and `event`.

`/tracker/relationships`
* `trackedEntity` replaces `tei`

`/tracker/events`
* `attributeCategoryCombo` replaces `attributeCc`

`/tracker/ownership/transfer`
* `trackedEntity` replaces `trackedEntityInstance`

`/tracker/ownership/override`
* `trackedEntity` replaces `trackedEntityInstance`

`/messages/`
* `enrollment` replaces `programInstance`
* `event` replaces `programStageInstance`

`/messages/scheduled/sent`
* `enrollment` replaces `programInstance`
* `event` replaces `programStageInstance`

`/audits/trackedEntityDataValue`
* `events` replaces `psi`

`/audits/trackedEntityAttributeValue`
* `trackedEntities` replaces `tei`

`/audits/trackedEntityInstance`
* `trackedEntities` replaces `tei`

`/programNotificationInstances`
* `enrollment` replaces `programInstance`
* `event` replaces `programStageInstance`

`/tracker/trackedEntities`
`/tracker/enrollments`
`/tracker/events`
* `orgUnitMode` replaces `ouMode`

The following endpoints are deprecated

* `/maintenance/softDeletedTrackedEntityRemoval` replaces `/maintenance/softDeletedTrackedEntityInstanceRemoval`
* `/maintenance/softDeletedEnrollmentRemoval` replaces `/maintenance/softDeletedProgramInstanceRemoval`
* `/maintenance/softDeletedEventRemoval` replaces `/maintenance/softDeletedProgramStageInstanceRemoval`
* `/audits/trackedEntity` replaces `/audits/trackedEntityInstance`

We have deprecated keys

* `trackedEntity` replaces `trackedEntityInstance`
* `enrollment` replaces `programInstance`
* `event` replaces `programStageInstance`

in the following API response bodies

* `/api/dataSummary` in the `objectCounts` object
* `/api/system/objectCounts`

##### FollowUp spelling fix

Field `followup` is deprecated and the camel case version `followUp` is used instead in the following API response bodies:
* `/tracker/events`
* `/tracker/relationships` in the `event` object

### Metadata
1. The property `DataDimensionType` is now mandatory for `CategoryOptionGroup` and `CategoryOptionGroupSet`. Existing records with `null` value would need to be manually updated with either `DISAGGREGATION` or `ATTRIBUTE`.
2. The `mergeMode` parameter is removed from In Metadata Import Export app and also from the endpoint `api/metadata`. This means when updating objects, all existing property values will be overwritten even if the new values are `null`. Please use [JSON Patch API](#webapi_partial_updates) in case you want do partial update to an object. 
## Database

We have removed prefix `dataelement` from `category` and `categoryoption` tables as this gives us more readability.

| Old Table Name                | New Table Name               |
| ------------------------------|:----------------------------:|
| dataelementcategoryopion      | categoryoption               |
| dataelementcategory           | category                     |

### Tracker

#### Breaking Changes: renamed tables and columns

We have renamed some tables and columns following tracker's new [naming](#naming) in the API.

Therefore, we align the database's names with the changes applied to `trackedEntityInstance`, `programInstance`, and `programStageInstance`.

Furthermore, we also align the `trackedentitycomment` and its related database tables to the API naming of `note`.

#### Renamed Tables

| Old Table Name              | New Table Name                 |
| ----------------------------|:------------------------------:|
| trackedentityinstance       | trackedentity                  |
| programinstance             | enrollment                     |
| programstageinstance        | event                          |
| programstageinstancefilter  | eventfilter                    |
| trackedentityinstanceaudit  | trackedentityaudit             |
| trackedentityinstancefilter | trackedentityfilter            |
| trackedentitycomment        | note                           |
| programstageinstancecomments| event_notes                    |
| programinstancecomments     | enrollment_notes               |

#### Renamed Columns

The following `programstageinstance` related columns have been renamed

| Table (new names)           | Column Old Name                | Column New Name        |
| ----------------------------|:------------------------------:|-----------------------:|
| event                       | programstageinstanceid         | eventid                |
| eventfilter                 | programstageinstancefilterid   | eventfilterid          |
| relationshipitem            | programstageinstanceid         | eventid                |
| trackedentitydatavalueaudit | programstageinstanceid         | eventid                |
| programmessage              | programstageinstanceid         | eventid                |
| programnotificationinstance | programstageinstanceid         | eventid                |
| eventcomments               | programstageinstanceid         | eventid                |
| trackedentitydatavalueaudit | programstageinstanceid         | eventid                |

The following `programinstance` related columns have been renamed

| Table (new names)           | Column Old Name                | Column New Name        |
| ----------------------------|:------------------------------:|-----------------------:|
| enrollment                  | programinstanceid              | enrollmentid           |
| enrollmentcomments          | programinstanceid              | enrollmentid           |
| relationshipitem            | programinstanceid              | enrollmentid           |
| programnotificationinstance | programinstanceid              | enrollmentid           |
| programmessage              | programinstanceid              | enrollmentid           |
| event                       | programinstanceid              | enrollmentid           |

The following `trackedentityinstance` related columns have been renamed

| Table (new names)                | Column Old Name                | Column New Name        |
| ---------------------------------|:------------------------------:|-----------------------:|
| trackedentity                    | trackedentityinstanceid        | trackedentityid        |
| trackedentityaudit               | trackedentityinstance          | trackedentity          |
| trackedentityaudit               | trackedentityinstanceauditid   | trackedentityauditid   |
| trackedentityfilter              | trackedentityinstancefilterid  | trackedentityfilterid  |
| enrollment                       | trackedentityinstanceid        | trackedentityid        |
| trackedentityattributevalueaudit | trackedentityinstanceid        | trackedentityid        |
| programmessage                   | trackedentityinstanceid        | trackedentityid        |
| relationshipitem                 | trackedentityinstanceid        | trackedentityid        |
| trackedentityprogramowner        | trackedentityinstanceid        | trackedentityid        |
| programtempownershipaudit        | trackedentityinstanceid        | trackedentityid        |
| programtempowner                 | trackedentityinstanceid        | trackedentityid        |
| programownershiphistory          | trackedentityinstanceid        | trackedentityid        |

The following `trackedentitycomment` related columns have been renamed

| Table (new names)                | Column Old Name                | Column New Name        |
| ---------------------------------|:------------------------------:|-----------------------:|
| note                             | trackedentitycommentid         | noteid                 |
| note                             | commenttext                    | notetext               |
| event_comments                   | trackedentitycommentid         | noteid                 |
| enrollment_comments              | trackedentitycommentid         | noteid                 |

The following `enrollment` date columns have been renamed

| Table (new names)                | Column Old Name                | Column New Name        |
| ---------------------------------|:------------------------------:|-----------------------:|
| enrollment                       | enddate                        | completeddate          |
| enrollment                       | incidentdate                   | occurreddate           |

The following `event` date columns have been renamed

| Table (new names)                | Column Old Name                | Column New Name        |
| ---------------------------------|:------------------------------:|-----------------------:|
| event                            | duedate                        | scheduleddate          |
| event                            | executiondate                  | occurreddate           |

#### Postgres Reference

From Postgres docs for [alter table](https://www.postgresql.org/docs/current/sql-altertable.html)

> The RENAME forms change the name of a table (or an index, sequence, view, materialized view, or foreign table),
> the name of an individual column in a table, or the name of a constraint of the table.
> When renaming a constraint that has an underlying index, the index is renamed as well. **There is no effect on the stored data.**

Renaming a table or a table's column does not affect the data. For example, re-building a primary key index, which can be expensive for large tables, should not happen.
Therefore, no downtime is expected following the migrations.

You can check that the index creation hasn't changed after the migration via the transaction commit.

```sql
SELECT pg_xact_commit_timestamp(xmin)
FROM pg_class
WHERE relname = 'programstageinstance_pkey';
```
Notice if you want to run the query, Postgres needs to start with `-c track_commit_timestamp=on`

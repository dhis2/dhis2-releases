# 2.35 Upgrade Notes

> :warning: **Please ensure you have read the upgrade notes from the [PREVIOUS RELEASE](../2.34/README.md), if upgrading from an earlier version**

## Database

- Excessive data element operands _might_ have been created due to an issue with saving of pivot tables. This [script](https://github.com/dhis2/dhis2-utils/blob/master/resources/sql/delete_deprecated_operands.sql) could be run in order to delete deprecated `data element operands` that prevents the deletion of `data elements`. More information about this in Jira issue [DHIS2-7043](https://jira.dhis2.org/browse/DHIS2-7043).

## API

- The `F_USER_VIEW` ("View users") authority is no longer required for regular end-users, e.g. in order to use the Tracker Capture app. This authority should be removed from user roles which are meant for end users (not for user managers). Read more in the [change note](https://github.com/dhis2/notes-backend/blob/master/platform/35/changelog/export_user_authority.md).
- The `F_USER_VIEW` authority is now required to export user information through the `/api/metadata` endpoint.
- User information linked to metadata entities in the API is being restricted. Field filtering is restricted and only the `id`, `code`, `username`, `name`, `displayName` fields are available. Read more in the [change note](https://github.com/dhis2/notes-backend/blob/master/platform/35/changelog/user_property_transformer.md).

## Functionality

- The J2ME mobile application is now discontinued and will no longer work.

## Apps

- A new `SMS configuration` web app is made available. This app will supersede the `Mobile configuration` web module. The latter module will be maintained for some time until the former app is considered stable.

## Patch-specific Changes

### 2.35.2 Database Schema

- New index on table `trackedentityprogramowner` over columns `(trackedentityinstanceid, programid, organisationunitid)`. Improves lookup related to organisation unit scopes in the context of a program.
- New index on table `programinstance` over columns `(programid)`. Improves general lookup for programinstances based on program in most cases.
- New index on table `trackedentityattributevalue` over columns `(trackedentityinstanceid, trackedentityattributeid, lower(value))`. This is in addition to the previous index over the columns `(trackedentityattributeid, lower(value))`. We saw situations related to value lookup in the context of tracked entity instances where postgres would revert to a sequential scan, when using the existing index would yield a much better result. With the new index we are successfully encouraging postres to use the index also when we are matching on tracked entity instances.
- New index on table `programstageinstance` over the columns `(status, executiondate)`. This table often grows a lot bigger than tracked entity instance and program instance tables, and we saw a bottleneck in some of our queries when including program stage instances as filters in searches. We added this index to improve the performance of the most common column we filter by, status, as well as executiondate, which is often used together with status when searching for events.

> **Caution** 
> 
> Due to the number of indexes, and the typical size of their tables, be aware that upgrading to this version or above might take a significant amount of time.

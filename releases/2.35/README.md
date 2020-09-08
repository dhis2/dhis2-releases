# 2.35 Upgrade Notes

## Database

- Excessive data element operands might have been created due to an issue with saving of pivot tables. This [script](https://github.com/dhis2/dhis2-utils/blob/master/resources/sql/delete_deprecated_operands.sql) could be run in order to delete deprecated `data element operands` that prevents the deletion of `data elements`. More information about this in Jira issue [DHIS2-7043](https://jira.dhis2.org/browse/DHIS2-7043).

## API

- The `F_USER_VIEW` ("View users") authority is no longer required for regular end-users, e.g. in order to use the Tracker Capture app. This authority should be removed from user roles which are meant for end users (not for user managers). Read more in the [change note](https://github.com/dhis2/notes-backend/blob/master/platform/35/changelog/export_user_authority.md).
- The `F_USER_VIEW` authority is now required to export user information through the `/api/metadata` endpoint.
- User information linked to metadata entities in the API is being restricted. Field filtering is disabled and only the `id`, `code`, `username`, `name`, `displayName` fields are available. Read more in the [change note](https://github.com/dhis2/notes-backend/blob/master/platform/35/changelog/user_property_transformer.md).

## Functionality

- The J2ME mobile application is now discontinued and will no longer work.

## Apps

- A new `SMS configuration` web app is made available. This app will supersede the `Mobile configuration` web module. The latter module will be maintained for some time until the former app is considered stable.

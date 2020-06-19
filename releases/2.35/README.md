# 2.35 Upgrade Notes

## Database

- Excessive data element operands might have been created due to an issue with saving of pivot tables. This (script)[https://github.com/dhis2/dhis2-utils/blob/master/resources/sql/delete_deprecated_operands.sql]  could be run in order to delete deprecated `data element operands` that prevents the deletion of `data elements`.
More information about this in Jira issue (DHIS2-7043)[https://jira.dhis2.org/browse/DHIS2-7043] .

## Apps

- The `Mobile configuration` web module is replaced by the new `SMS configuration` web app.

## Functionality

- The J2ME mobile application is now discontinued and will no longer work with DHIS 2.35.

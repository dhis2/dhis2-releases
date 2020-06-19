# 2.35 Upgrade Notes

## Database

- The following script https://github.com/dhis2/dhis2-utils/blob/master/resources/sql/delete_deprecated_operands.sql must be run in order to delete deprecated `data element operands` that prevents the correct deletion of `data elements`.
More information about this on the Jira issue: https://jira.dhis2.org/browse/DHIS2-7043

## Apps

- The `Mobile configuration` web module is replaced by the new `SMS configuration` web app.

## Functionality

- The J2ME mobile application is now discontinued and will no longer work with DHIS 2.35.

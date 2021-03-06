# 2.36 Upgrade Notes

## Database

- A `shortName` column (mandatory property) has been added to the following tables: `Category`, `DataElementGroupSet` and `OrganisationUnitGroupSet` ([DHIS2-8937](https://jira.dhis2.org/browse/DHIS2-8937))
- New index on table `trackedentityprogramowner` over columns `(trackedentityinstanceid, programid, organisationunitid)`. Improves lookup related to organisation unit scopes in the context of a program.
- New index on table `programinstance` over columns `(programid)`. Improves general lookup for programinstances based on program in most cases.
- New index on table `trackedentityattributevalue` over columns `(trackedentityinstanceid, trackedentityattributeid, lower(value))`. This is in addition to the previous index over the columns `(trackedentityattributeid, lower(value))`. We saw situations related to value lookup in the context of tracked entity instances where postgres would revert to a sequential scan, when using the existing index would yield a much better result. With the new index we are successfully encouraging postres to use the index also when we are matching on tracked entity instances.
- New index on table `programstageinstance` over the columns `(status, executiondate)`. This table often grows a lot bigger than tracked entity instance and program instance tables, and we saw a bottleneck in some of our queries when including program stage instances as filters in searches. We added this index to improve the performance of the most common column we filter by, status, as well as executiondate, which is often used together with status when searching for events.

**Note:** *Due to the number of indexes, and the typical size of their tables, be aware that upgrading to this version might take a significant amount of time.*


## API

- 

## Functionality

- 

## Apps

- 
# 2.41 Upgrade Notes




## API
### Sharing

- **Legacy Sharing properties are removed**: from 2.36 a new `sharing` property has been introduced in order to replace the legacy sharing properties userAccesses, userGroupAccesses, publicAccess, externalAccess. In order to keep the web api backward compability we have been supported both new and legacy properties our web api and all related features. However, in order to implement new features and keep the code base clean we need to remove the legacy format in 2.41. So from this version, you will not get those properties returned from our web api : `userAccesses`, `userGroupAccesses`, `publicAccess`, `externalAccess`. Instead, those properties can be accessed in new `sharing` properties as documented [here](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-237/sharing.html#new-sharing-object).

- **Breaking change in Dashboard App**: in 2.40 and older versions, Users can view Dashboard content even without `METADATA_READ` permission to all metadata objects linked to DashboardItems. That is possible because of a loophole in our web api which allows any User to see details of any metadata object if the `uid` is known. This loophole has been causing issues for a long time so we decided to remove it in 2.41. As a result, many Users will not be able to view Dashboards because they don't have enough `METADATA_READ` permission of the Dashboard content. In order to fix it, the System Administrator or the Dashboard owner can make use of the feature [Cascade sharing for Dashboard](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-237/sharing.html#cascade-sharing-for-dashboard) to grant required permissions to affected Users.

### Tracker

#### Breaking Changes

The following query parameters have been removed as they have never been implemented and thus had no
effect on the response

* `/tracker/trackedEntities?attachment`
* `/tracker/event?attachment`

#### Deprecated APIs

##### Semicolon as separator for identifiers (UID)

The following query parameters accepting one or more semicolon separated UIDs are deprecated in
favor of a parameter accepting **comma separated** UIDs. This is to ensure UIDs are consistently
separated by comma accross all DHIS2 endpoints. Names are now also consistently using plural to
indicate more than one UID is allowed.

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

The following endpoints are deprecated

* `/maintenance/softDeletedTrackedEntityRemoval` replaces `/maintenance/softDeletedTrackedEntityInstanceRemoval`
* `/maintenance/softDeletedEnrollmentRemoval` replaces `/maintenance/softDeletedProgramInstanceRemoval`
* `/maintenance/softDeletedEventRemoval` replaces `/maintenance/softDeletedProgramStageInstanceRemoval`

We have have deprecated keys

* `trackedEntity` replaces `trackedEntityInstance`
* `enrollment` replaces `programInstance`
* `event` replaces `programStageInstance`

in the following API response bodies

* `/api/dataSummary` in the `objectCounts` object
* `/api/system/objectCounts`

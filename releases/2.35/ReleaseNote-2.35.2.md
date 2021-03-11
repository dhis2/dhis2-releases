# Patch 2.35.1 Release Note

## Features

## Bugs

## Performance improvements

**[DHIS2-10670 (Epic)](https://jira.dhis2.org/browse/DHIS2-10670): Improve performance when querying and listing tracked entity instances:**
- **[DHIS2-10601](https://jira.dhis2.org/browse/DHIS2-10601): TEI search by unique attribute takes long when user search scope is lower level org unit**
- **[DHIS2-10603](https://jira.dhis2.org/browse/DHIS2-10603): Search takes long when max tei limit to return in search is set**
- **[DHIS2-10600](https://jira.dhis2.org/browse/DHIS2-10600): Front page list takes a long time to load when there are many teis in org unit**
Components: _[Api] Tracker_

**New indexes for tracker:**
- trackedentityprogramowner(trackedentityinstanceid, programid, organisationunitid)
- programinstance(programid)
- trackedentityattributevalue(trackedentityinstanceid, trackedentityattributeid, lower(value))
- programstageinstance(status,executiondate)

**Note:** *Upgrading to this version might take a significant time while the new indexes are created.*

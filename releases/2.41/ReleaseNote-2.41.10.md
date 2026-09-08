# Patch 2.41.10 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-15792](https://dhis2.atlassian.net/browse/DHIS2-15792): Improve UX of map download settings**  
Components: _[App] Maps_

**[DHIS2-19580](https://dhis2.atlassian.net/browse/DHIS2-19580): Events layer: Show breakdown of a cluster**  
Components: _[App] Maps_

**[DHIS2-20564](https://dhis2.atlassian.net/browse/DHIS2-20564): Climate layers - Under Heat Stress map, the scale limits cannot be changed in the style tab**  
Components: _[App] Maps_

## Bugs

**[DHIS2-21788](https://dhis2.atlassian.net/browse/DHIS2-21788): Only one event returned in event analytics query API if max limit set to unlimited**  
Components: _[API] Analytics_

**[DHIS2-21677](https://dhis2.atlassian.net/browse/DHIS2-21677):  NullPointerException for OUG{} indicators over org units with no group members**  
Components: _[API] Analytics_

**[DHIS2-19860](https://dhis2.atlassian.net/browse/DHIS2-19860): Selected user database language is skipped when displaying OU hierarchy in Pivot table**  
Components: _[API] Analytics_

**[DHIS2-21434](https://dhis2.atlassian.net/browse/DHIS2-21434): Cannot save a visualization with more than 255 periods**  
Components: _[API] Analytics_

**[DHIS2-21673](https://dhis2.atlassian.net/browse/DHIS2-21673): The sortOrder and limit parameters are ignored in enrollment/aggregate analytics request**  
Components: _[API] Analytics_

**[DHIS2-17214](https://dhis2.atlassian.net/browse/DHIS2-17214): outputIdSchema=id in analytics endpoint returns internal postgres pkeys**  
Components: _[API] Analytics_

**[DHIS2-21757](https://dhis2.atlassian.net/browse/DHIS2-21757): /api/dataEntry/metadata has a Hibernate n+1 query issue**  
Components: _[API] Data Entry_

**[DHIS2-20266](https://dhis2.atlassian.net/browse/DHIS2-20266): Map synchronization and import fails with ConstraintViolationException due to duplicate key**  
Components: _[API] Metadata import-export_, _[API] Synchronization_

**[DHIS2-21731](https://dhis2.atlassian.net/browse/DHIS2-21731): Metadata of MapViews with indicator fails to import**  
Components: _[API] Metadata import-export_

**[DHIS2-21740](https://dhis2.atlassian.net/browse/DHIS2-21740): User datastore updates cause updates to other users data**  
Components: _[API] Other_

**[DHIS2-21608](https://dhis2.atlassian.net/browse/DHIS2-21608): Metadata Sync keeps adding things in new versions but don't include real new metadata**  
Components: _[API] Synchronization_

**[DHIS2-21785](https://dhis2.atlassian.net/browse/DHIS2-21785): Program attribute can't be imported when calculated from program rule**  
Components: _[API] Tracker_

**[DHIS2-21599](https://dhis2.atlassian.net/browse/DHIS2-21599): null TEA values are sent in the payload and saved in the database, causing PR errors**  
Components: _[API] Tracker_

**[DHIS2-21221](https://dhis2.atlassian.net/browse/DHIS2-21221):  orgUnitMode=SELECTED Causes Full Table Scan**  
Components: _[API] Tracker_

**[DHIS2-21963](https://dhis2.atlassian.net/browse/DHIS2-21963): Unsynchronized native SQL writes evict all Hibernate L2 cache regions**  
Components: _[API] Tracker_, _[Core] Job Scheduler_

**[DHIS2-21870](https://dhis2.atlassian.net/browse/DHIS2-21870): Tracker import rejects valid IMAGE file resources with E1007 "invalid image format" (2.41/2.42)**  
Components: _[API] Tracker_

**[DHIS2-21536](https://dhis2.atlassian.net/browse/DHIS2-21536): Completed events with expiry date are always editable**  
Components: _[API] Tracker_

**[DHIS2-21800](https://dhis2.atlassian.net/browse/DHIS2-21800):  Event program notifications with recipient ORGANISATION_UNIT are broken**  
Components: _[API] Tracker_

**[DHIS2-21551](https://dhis2.atlassian.net/browse/DHIS2-21551): Completed events with "Block entry form after completion" can be edited**  
Components: _[API] Tracker_

**[DHIS2-19912](https://dhis2.atlassian.net/browse/DHIS2-19912): Outdated email text in other languages in account recovery: still refers to two emails**  
Components: _[API] User_

**[DHIS2-19079](https://dhis2.atlassian.net/browse/DHIS2-19079): Row and column totals don't appear when section is pivoted**  
Components: _[App] Data entry_

**[DHIS2-21726](https://dhis2.atlassian.net/browse/DHIS2-21726): Inconsistent issue with downloading of pivot table report from Data Visualiser**  
Components: _[App] Data visualizer_

**[DHIS2-20499](https://dhis2.atlassian.net/browse/DHIS2-20499): Log flooded by warnings like "Error reading attribute (DefaultFieldFilterService.java [http-nio-8080-exec-70]) java.lang.NoSuchFieldException: optionSetId"**  
Components: _[App] Data visualizer_, _[App] Maps_

**[DHIS2-21939](https://dhis2.atlassian.net/browse/DHIS2-21939): Event data not show for organisation unit group has different level**  
Components: _[App] Line Listing_

**[DHIS2-22028](https://dhis2.atlassian.net/browse/DHIS2-22028): OSM Light basemap tiles are watermarked - CARTO now requires an API key for its basemap service**  
Components: _[App] Maps_


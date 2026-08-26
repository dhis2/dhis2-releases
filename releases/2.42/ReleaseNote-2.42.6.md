# Patch 2.42.6 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-20564](https://dhis2.atlassian.net/browse/DHIS2-20564): Climate layers - Under Heat Stress map, the scale limits cannot be changed in the style tab**  
Components: _[App] Maps_

**[DHIS2-13242](https://dhis2.atlassian.net/browse/DHIS2-13242): Show map legend when dashboard map is displayed fullscreen**  
Components: _[App] Maps_

**[DHIS2-19850](https://dhis2.atlassian.net/browse/DHIS2-19850): Thematic / OrgUnit / Facility / EarthEngine layer - Deal with OrgUnits without coordinates**  
Components: _[App] Maps_

**[DHIS2-237](https://dhis2.atlassian.net/browse/DHIS2-237): Events layer - Deal with events without coordinates**  
Components: _[App] Maps_

**[DHIS2-3156](https://dhis2.atlassian.net/browse/DHIS2-3156): Allow setting of numeric precision in automatic map legends**  
Components: _[App] Maps_

**[DHIS2-8478](https://dhis2.atlassian.net/browse/DHIS2-8478): Automatic legends with few data points**  
Components: _[App] Maps_

**[DHIS2-10823](https://dhis2.atlassian.net/browse/DHIS2-10823): Improve the predefined legend display**  
Components: _[App] Maps_

**[DHIS2-15514](https://dhis2.atlassian.net/browse/DHIS2-15514): Zero value separate in Maps**  
Components: _[App] Maps_

**[DHIS2-18963](https://dhis2.atlassian.net/browse/DHIS2-18963): Digit groups separator functionality in maps**  
Components: _[App] Maps_

**[DHIS2-19078](https://dhis2.atlassian.net/browse/DHIS2-19078): Save visibility toggle state of layers and visibility and opacity of basemap with map**  
Components: _[App] Maps_

**[DHIS2-19812](https://dhis2.atlassian.net/browse/DHIS2-19812): Properly distinguish values outside of legend and no data and allow user to display both independently**  
Components: _[App] Maps_

**[DHIS2-20287](https://dhis2.atlassian.net/browse/DHIS2-20287): Hide or show map layers while on the dashboard like it is the charts**  
Components: _[App] Maps_

**[DHIS2-21142](https://dhis2.atlassian.net/browse/DHIS2-21142): Add new classification method (natural breaks, pretty breaks, log, sd)**  
Components: _[App] Maps_

**[DHIS2-15695](https://dhis2.atlassian.net/browse/DHIS2-15695): Improve display of value ranges in automatic legends**  
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

**[DHIS2-21591](https://dhis2.atlassian.net/browse/DHIS2-21591): Program Indicator is not calculated because a column name was not updated in the code (pistatus -> enrollmentstatus)**  
Components: _[API] Analytics_

**[DHIS2-17214](https://dhis2.atlassian.net/browse/DHIS2-17214): outputIdSchema=id in analytics endpoint returns internal postgres pkeys**  
Components: _[API] Analytics_

**[DHIS2-20266](https://dhis2.atlassian.net/browse/DHIS2-20266): Map synchronization and import fails with ConstraintViolationException due to duplicate key**  
Components: _[API] Metadata import-export_, _[API] Synchronization_

**[DHIS2-21731](https://dhis2.atlassian.net/browse/DHIS2-21731): Metadata of MapViews with indicator fails to import**  
Components: _[API] Metadata import-export_

**[DHIS2-21858](https://dhis2.atlassian.net/browse/DHIS2-21858): Flaky AuditIntegrationTest: await conditions never wait for the async audit consumer**  
Components: _[API] Other_

**[DHIS2-21856](https://dhis2.atlassian.net/browse/DHIS2-21856): Single-object metadata GET with field preset triggers link generation that loads entire lazy collections (30s+ CPU for large user roles)**  
Components: _[API] Other_

**[DHIS2-21740](https://dhis2.atlassian.net/browse/DHIS2-21740): User datastore updates cause updates to other users data**  
Components: _[API] Other_

**[DHIS2-21961](https://dhis2.atlassian.net/browse/DHIS2-21961): Enrollment AGE attribute evaluated as null/unavailable when program rules are revalidated on event completion in Capture app (v2.42)**  
Components: _[API] Program rules_, _[App] Capture_

**[DHIS2-21786](https://dhis2.atlassian.net/browse/DHIS2-21786): LazyInitializationException on User.userRoles when PAT authentication occurs on a non-OSIV endpoint (e.g. /api/dataValueSets)**  
Components: _[API] Security_

**[DHIS2-21608](https://dhis2.atlassian.net/browse/DHIS2-21608): Metadata Sync keeps adding things in new versions but don't include real new metadata**  
Components: _[API] Synchronization_

**[DHIS2-21781](https://dhis2.atlassian.net/browse/DHIS2-21781): Data sync between 2 instances logging ERROR in logs**  
Components: _[API] Synchronization_, _[App] Job scheduler_

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

**[DHIS2-21887](https://dhis2.atlassian.net/browse/DHIS2-21887): Data value can't be imported when calculated from program rule**  
Components: _[API] Tracker_

**[DHIS2-21800](https://dhis2.atlassian.net/browse/DHIS2-21800):  Event program notifications with recipient ORGANISATION_UNIT are broken**  
Components: _[API] Tracker_

**[DHIS2-21551](https://dhis2.atlassian.net/browse/DHIS2-21551): Completed events with "Block entry form after completion" can be edited**  
Components: _[API] Tracker_

**[DHIS2-21588](https://dhis2.atlassian.net/browse/DHIS2-21588): Exported CSV file fails when imported**  
Components: _[API] Tracker_

**[DHIS2-21388](https://dhis2.atlassian.net/browse/DHIS2-21388): [USERS APP]: fix metadata management app authority name**  
Components: _[API] Translations_, _[App] User_

**[DHIS2-19912](https://dhis2.atlassian.net/browse/DHIS2-19912): Outdated email text in other languages in account recovery: still refers to two emails**  
Components: _[API] User_

**[DHIS2-19079](https://dhis2.atlassian.net/browse/DHIS2-19079): Row and column totals don't appear when section is pivoted**  
Components: _[App] Data entry_

**[DHIS2-21726](https://dhis2.atlassian.net/browse/DHIS2-21726): Inconsistent issue with downloading of pivot table report from Data Visualiser**  
Components: _[App] Data visualizer_

**[DHIS2-21939](https://dhis2.atlassian.net/browse/DHIS2-21939): Event data not show for organisation unit group has different level**  
Components: _[App] Line Listing_

**[DHIS2-21516](https://dhis2.atlassian.net/browse/DHIS2-21516): Periods: Events layer - When editing start/end dates get reseted to default in UI**  
Components: _[App] Maps_

**[DHIS2-21517](https://dhis2.atlassian.net/browse/DHIS2-21517): Periods: Thematic layer - New single thematic layer period get initiated to existing single themaric layer period**  
Components: _[App] Maps_

**[DHIS2-21540](https://dhis2.atlassian.net/browse/DHIS2-21540): Multi splitmap download - the area box on the lower right is duplicated**  
Components: _[App] Maps_

**[DHIS2-20761](https://dhis2.atlassian.net/browse/DHIS2-20761): isFullscreen and resizeCount are not passed correctly to Map and MapItem components**  
Components: _[App] Maps_

**[DHIS2-19205](https://dhis2.atlassian.net/browse/DHIS2-19205): Program/Enrollment period setting is not saved with TE layer**  
Components: _[App] Maps_

**[DHIS2-15884](https://dhis2.atlassian.net/browse/DHIS2-15884): Data table doesn't resize together window resize**  
Components: _[App] Maps_

**[DHIS2-19696](https://dhis2.atlassian.net/browse/DHIS2-19696): Multiple filters on the same dimension fail**  
Components: _[App] Maps_

**[DHIS2-19998](https://dhis2.atlassian.net/browse/DHIS2-19998): Special character issue in alerts**  
Components: _[App] Maps_

**[DHIS2-19417](https://dhis2.atlassian.net/browse/DHIS2-19417): Manual URL editing issues in browser address bar**  
Components: _[App] Maps_

**[DHIS2-19418](https://dhis2.atlassian.net/browse/DHIS2-19418): Old format map links support issues**  
Components: _[App] Maps_

**[DHIS2-21113](https://dhis2.atlassian.net/browse/DHIS2-21113): When drilling up/down an OU from a timeline layer it does not update with the timeline anymore**  
Components: _[App] Maps_

**[DHIS2-19063](https://dhis2.atlassian.net/browse/DHIS2-19063): Error with data selection on timeline causes app crash**  
Components: _[App] Maps_

**[DHIS2-19982](https://dhis2.atlassian.net/browse/DHIS2-19982): Chevron icon is not centered in the color select button**  
Components: _[App] Maps_

**[DHIS2-19983](https://dhis2.atlassian.net/browse/DHIS2-19983): Improve ranges/legend sorting in Maps data table**  
Components: _[App] Maps_

**[DHIS2-19984](https://dhis2.atlassian.net/browse/DHIS2-19984): Values not displayed for data item with type NUMBER and associated to an option set in Maps app data table**  
Components: _[App] Maps_

**[DHIS2-20818](https://dhis2.atlassian.net/browse/DHIS2-20818): Thematic layer, bubble style - legends shows NaN when the all mapped values are equal**  
Components: _[App] Maps_

**[DHIS2-21356](https://dhis2.atlassian.net/browse/DHIS2-21356): Saving event layer without choosing predefined legend set breaks layer**  
Components: _[App] Maps_

**[DHIS2-12860](https://dhis2.atlassian.net/browse/DHIS2-12860): Equal counts distribution is not ideal when many values are the same**  
Components: _[App] Maps_

**[DHIS2-22000](https://dhis2.atlassian.net/browse/DHIS2-22000): Replicated users not shown in Users list**  
Components: _[App] User_


# Patch 2.43.1 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-19712](https://dhis2.atlassian.net/browse/DHIS2-19712): Allow for gzipped JSON and CSV min max bulk imports**  
Components: _[API] Other_

**[DHIS2-19940](https://dhis2.atlassian.net/browse/DHIS2-19940): Implement the "No value" filtering component for all filter types in the working list**  
Components: _[App] Capture_

**[DHIS2-21135](https://dhis2.atlassian.net/browse/DHIS2-21135): Improve truncated labels in Working List filter buttons**  
Components: _[App] Capture_

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

**[DHIS2-21778](https://dhis2.atlassian.net/browse/DHIS2-21778): # `optionSet` missing from `analytics/events/aggregate` GridHeader on 2.43**  
Components: _[API] Analytics_, _[API] Frameworks and libraries_

**[DHIS2-21434](https://dhis2.atlassian.net/browse/DHIS2-21434): Cannot save a visualization with more than 255 periods**  
Components: _[API] Analytics_

**[DHIS2-20929](https://dhis2.atlassian.net/browse/DHIS2-20929): Program Indicator using Yes/No Data element filter produces incorrect value for "No"**  
Components: _[API] Analytics_

**[DHIS2-21478](https://dhis2.atlassian.net/browse/DHIS2-21478): Invalid aggregate enrollment SQL when unfiltered stage dimensions share a stage with filtered stage dimensions**  
Components: _[API] Analytics_

**[DHIS2-21628](https://dhis2.atlassian.net/browse/DHIS2-21628): Enrollment analytics program indicator filters leak unresolved CTE placeholders into SQL**  
Components: _[API] Analytics_

**[DHIS2-21513](https://dhis2.atlassian.net/browse/DHIS2-21513): Tracker Program Indicators don't work after they are defined or edited**  
Components: _[API] Analytics_

**[DHIS2-21673](https://dhis2.atlassian.net/browse/DHIS2-21673): The sortOrder and limit parameters are ignored in enrollment/aggregate analytics request**  
Components: _[API] Analytics_

**[DHIS2-21750](https://dhis2.atlassian.net/browse/DHIS2-21750): Custom label for ou/enrollmentou is not respected in events/enrollments aggregate analytics responses**  
Components: _[API] Analytics_

**[DHIS2-21591](https://dhis2.atlassian.net/browse/DHIS2-21591): Program Indicator is not calculated because a column name was not updated in the code (pistatus -> enrollmentstatus)**  
Components: _[API] Analytics_

**[DHIS2-17214](https://dhis2.atlassian.net/browse/DHIS2-17214): outputIdSchema=id in analytics endpoint returns internal postgres pkeys**  
Components: _[API] Analytics_

**[DHIS2-15864](https://dhis2.atlassian.net/browse/DHIS2-15864): EVER: Download fails when data elements have legend sets**  
Components: _[API] Analytics_, _[App] EVER_

**[DHIS2-21496](https://dhis2.atlassian.net/browse/DHIS2-21496): Analytics fails to update when  "Respect category option start and end date in analytics table export" is on**  
Components: _[API] Data administration_

**[DHIS2-20266](https://dhis2.atlassian.net/browse/DHIS2-20266): Map synchronization and import fails with ConstraintViolationException due to duplicate key**  
Components: _[API] Metadata import-export_, _[API] Synchronization_

**[DHIS2-21731](https://dhis2.atlassian.net/browse/DHIS2-21731): Metadata of MapViews with indicator fails to import**  
Components: _[API] Metadata import-export_

**[DHIS2-21364](https://dhis2.atlassian.net/browse/DHIS2-21364): response.responseType unintentionally changed between versions**  
Components: _[API] Metadata import-export_

**[DHIS2-21873](https://dhis2.atlassian.net/browse/DHIS2-21873): Cannot select Data Elements in Maps thematic layer when Data Type = "Data elements"**  
Components: _[API] Metadata model_

**[DHIS2-21424](https://dhis2.atlassian.net/browse/DHIS2-21424): Category options are not saved in visualizations**  
Components: _[API] Metadata model_

**[DHIS2-21740](https://dhis2.atlassian.net/browse/DHIS2-21740): User datastore updates cause updates to other users data**  
Components: _[API] Other_

**[DHIS2-21366](https://dhis2.atlassian.net/browse/DHIS2-21366): Header bar in all apps crashes if an app manifest does not specify an icon**  
Components: _[API] Other_, _[App] Other_

**[DHIS2-21509](https://dhis2.atlassian.net/browse/DHIS2-21509): EventVisualization allows program to be null, on POST**  
Components: _[API] Other_

**[DHIS2-21359](https://dhis2.atlassian.net/browse/DHIS2-21359): ValidatePattern function is not correctly escaping regex expression**  
Components: _[API] Program rules_

**[DHIS2-21608](https://dhis2.atlassian.net/browse/DHIS2-21608): Metadata Sync keeps adding things in new versions but don't include real new metadata**  
Components: _[API] Synchronization_

**[DHIS2-21252](https://dhis2.atlassian.net/browse/DHIS2-21252): Metadata Sync StreamConstraintsException - String value length exceeds the maximum allowed**  
Components: _[API] Synchronization_

**[DHIS2-21551](https://dhis2.atlassian.net/browse/DHIS2-21551): Completed events with "Block entry form after completion" can be edited**  
Components: _[API] Tracker_

**[DHIS2-21536](https://dhis2.atlassian.net/browse/DHIS2-21536): Completed events with expiry date are always editable**  
Components: _[API] Tracker_

**[DHIS2-21599](https://dhis2.atlassian.net/browse/DHIS2-21599): null TEA values are sent in the payload and saved in the database, causing PR errors**  
Components: _[API] Tracker_

**[DHIS2-21581](https://dhis2.atlassian.net/browse/DHIS2-21581): Event import shows incorrect number of ignored events for CSV with invalid rows**  
Components: _[API] Tracker_

**[DHIS2-21588](https://dhis2.atlassian.net/browse/DHIS2-21588): Exported CSV file fails when imported**  
Components: _[API] Tracker_

**[DHIS2-20787](https://dhis2.atlassian.net/browse/DHIS2-20787): Incorrect validation for ProgramRuleVariable source types**  
Components: _[API] Tracker_

**[DHIS2-21288](https://dhis2.atlassian.net/browse/DHIS2-21288): d2:inOrgUnitGroup function doesn't work with codes in the server**  
Components: _[API] Tracker_

**[DHIS2-21103](https://dhis2.atlassian.net/browse/DHIS2-21103): Missing org unit scope validation when importing enrollments and events**  
Components: _[API] Tracker_

**[DHIS2-21388](https://dhis2.atlassian.net/browse/DHIS2-21388): [USERS APP]: fix metadata management app authority name**  
Components: _[API] Translations_, _[App] User_

**[DHIS2-19912](https://dhis2.atlassian.net/browse/DHIS2-19912): Outdated email text in other languages in account recovery: still refers to two emails**  
Components: _[API] User_

**[DHIS2-21392](https://dhis2.atlassian.net/browse/DHIS2-21392): New event form elements renders when no access to form**  
Components: _[App] Capture_

**[DHIS2-18592](https://dhis2.atlassian.net/browse/DHIS2-18592): Capture is not saving an option that starts and/or ends with an space**  
Components: _[App] Capture_

**[DHIS2-12281](https://dhis2.atlassian.net/browse/DHIS2-12281): Misleading text when creating new TEI through creation of relationship**  
Components: _[App] Capture_

**[DHIS2-17625](https://dhis2.atlassian.net/browse/DHIS2-17625): Working list fails without org unit when search scope exceeds capture scope**  
Components: _[App] Capture_

**[DHIS2-8814](https://dhis2.atlassian.net/browse/DHIS2-8814): Table in custom form overflows container with no scrollbar**  
Components: _[App] Capture_

**[DHIS2-20032](https://dhis2.atlassian.net/browse/DHIS2-20032): Last updated in enrollment widget is not automatically refreshed when updating dates**  
Components: _[App] Capture_

**[DHIS2-21249](https://dhis2.atlassian.net/browse/DHIS2-21249): Date and time filter not having time in filter button text**  
Components: _[App] Capture_

**[DHIS2-21348](https://dhis2.atlassian.net/browse/DHIS2-21348): Console log errors in Capture app if a TEA associated with a optionSet is empty (in the working list)**  
Components: _[App] Capture_

**[DHIS2-21136](https://dhis2.atlassian.net/browse/DHIS2-21136): Read-only program users can still transfer TEI ownership from enrollment widget**  
Components: _[App] Capture_

**[DHIS2-21058](https://dhis2.atlassian.net/browse/DHIS2-21058): Frontend validation for phone number value type does not align with backend validation**  
Components: _[App] Capture_

**[DHIS2-20985](https://dhis2.atlassian.net/browse/DHIS2-20985): Username field selects first suggestion instead of clicked user**  
Components: _[App] Capture_

**[DHIS2-21726](https://dhis2.atlassian.net/browse/DHIS2-21726): Inconsistent issue with downloading of pivot table report from Data Visualiser**  
Components: _[App] Data visualizer_

**[DHIS2-15969](https://dhis2.atlassian.net/browse/DHIS2-15969): Program notification email/SMS checkbox not persisting**  
Components: _[App] Maintenance_

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

**[DHIS2-19988](https://dhis2.atlassian.net/browse/DHIS2-19988): When sorting the data table, using the > or < operator behaves like >= and <=**  
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

**[DHIS2-21219](https://dhis2.atlassian.net/browse/DHIS2-21219): Predictor list showing horizontal scrollbar when overflow-y**  
Components: _[App] Metadata Management App_


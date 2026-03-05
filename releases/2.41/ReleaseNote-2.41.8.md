# Patch 2.41.8 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-20513](https://dhis2.atlassian.net/browse/DHIS2-20513): Expose HikariCP detailed metrics**  
Components: _[API] Other_

**[DHIS2-19134](https://dhis2.atlassian.net/browse/DHIS2-19134): Use DHIS2 UI Select component**  
Components: _[App] Capture_

**[DHIS2-18740](https://dhis2.atlassian.net/browse/DHIS2-18740): Update feedback and indicator widgets in the view event page in Event programs**  
Components: _[App] Capture_

**[DHIS2-20774](https://dhis2.atlassian.net/browse/DHIS2-20774): Upgrade WorldPop population dataset to Global2**  
Components: _[App] Import-export_, _[App] Maps_

**[DHIS2-20149](https://dhis2.atlassian.net/browse/DHIS2-20149): New GEE Layer(s): Additional ERA5 meteorological data**  
Components: _[App] Maps_

**[DHIS2-17856](https://dhis2.atlassian.net/browse/DHIS2-17856): New GEE Layer(s): Vegetation indexes (NDVI, EVI)**  
Components: _[App] Maps_

**[DHIS2-1764](https://dhis2.atlassian.net/browse/DHIS2-1764): New GEE Layer(s): Precipitation**  
Components: _[App] Maps_

**[DHIS2-20355](https://dhis2.atlassian.net/browse/DHIS2-20355): New GEE Layer(s): ERA5 Relative humidity**  
Components: _[App] Maps_

**[DHIS2-20523](https://dhis2.atlassian.net/browse/DHIS2-20523): Cache EE layer data (periods, map url, aggregated values)**  
Components: _[App] Maps_

## Bugs

**[DHIS2-18928](https://dhis2.atlassian.net/browse/DHIS2-18928): Incorrect analytics for Program Indicators with Program Stage Boundaries**  
Components: _[API] Analytics_

**[DHIS2-20428](https://dhis2.atlassian.net/browse/DHIS2-20428): On-time reporting/ rate incorrectly calculated for Weekly reports**  
Components: _[API] Analytics_, _[App] Data visualizer_, _[App] Reports_

**[DHIS2-18502](https://dhis2.atlassian.net/browse/DHIS2-18502): Period as filter returns 0 instead of data**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-20542](https://dhis2.atlassian.net/browse/DHIS2-20542): Analytics and Resource Table jobs running twice consecutively**  
Components: _[API] Job scheduler_

**[DHIS2-20312](https://dhis2.atlassian.net/browse/DHIS2-20312): PUT requests to categoryOptionCombinations should be restricted**  
Components: _[API] Metadata import-export_

**[DHIS2-20042](https://dhis2.atlassian.net/browse/DHIS2-20042): [API: program stage nextScheduleDate]: cannot associate nextScheduleDate with a program stage via patch**  
Components: _[API] Other_

**[DHIS2-19952](https://dhis2.atlassian.net/browse/DHIS2-19952): Scheduled messages by program rule are not sent**  
Components: _[API] Program rules_

**[DHIS2-20458](https://dhis2.atlassian.net/browse/DHIS2-20458): /api/me allows to retrieve userGroup/userRole data even when user has no read access to it**  
Components: _[API] Security_

**[DHIS2-19964](https://dhis2.atlassian.net/browse/DHIS2-19964): Tracker Program data: Attributes and Stage DataElements with "Skip synchronization" flag are sent to the remote server**  
Components: _[API] Synchronization_

**[DHIS2-19579](https://dhis2.atlassian.net/browse/DHIS2-19579): Editing Expired Period Fails with 409 Despite F_EDIT_EXPIRED**  
Components: _[API] Tracker_

**[DHIS2-19218](https://dhis2.atlassian.net/browse/DHIS2-19218): Fix limits on /trackedEntity collection endpoint**  
Components: _[API] Tracker_

**[DHIS2-20815](https://dhis2.atlassian.net/browse/DHIS2-20815): /trackedEntities allows ordering by enrolledAt without a program**  
Components: _[API] Tracker_

**[DHIS2-20811](https://dhis2.atlassian.net/browse/DHIS2-20811): Order by enrolledAt returns duplicate TEs with multiple enrollments**  
Components: _[API] Tracker_

**[DHIS2-20689](https://dhis2.atlassian.net/browse/DHIS2-20689): Allow 1 character for first name when create/update user**  
Components: _[API] User_, _[App] User_

**[DHIS2-20277](https://dhis2.atlassian.net/browse/DHIS2-20277): Error entering aggregated data for specific weeks**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-20938](https://dhis2.atlassian.net/browse/DHIS2-20938): Missing search bar for Option Sets**  
Components: _[App] Capture_

**[DHIS2-20930](https://dhis2.atlassian.net/browse/DHIS2-20930): Working lists without bulk data entry plugin should fill whole page**  
Components: _[App] Capture_

**[DHIS2-20786](https://dhis2.atlassian.net/browse/DHIS2-20786): Deleting a single event from event program working list does not have confirm dialog**  
Components: _[App] Capture_

**[DHIS2-20109](https://dhis2.atlassian.net/browse/DHIS2-20109): User without access to stage still sees it in program stage working list dropdown**  
Components: _[App] Capture_

**[DHIS2-18680](https://dhis2.atlassian.net/browse/DHIS2-18680): Breadcrumb arrows in RTL**  
Components: _[App] Capture_

**[DHIS2-19968](https://dhis2.atlassian.net/browse/DHIS2-19968): Capture not rendering right-to-left for all RTL languages**  
Components: _[App] Capture_

**[DHIS2-20631](https://dhis2.atlassian.net/browse/DHIS2-20631): "Edit" button not visible on profile widget when no data exists for Tracked Entity Type**  
Components: _[App] Capture_

**[DHIS2-20719](https://dhis2.atlassian.net/browse/DHIS2-20719): "X" icon stays highlighted after value is cleared**  
Components: _[App] Capture_

**[DHIS2-20777](https://dhis2.atlassian.net/browse/DHIS2-20777): Program rule induced mandatory fields are always invalid**  
Components: _[App] Capture_

**[DHIS2-17845](https://dhis2.atlassian.net/browse/DHIS2-17845): Improve UX when users do not have "Uncomplete events" authority**  
Components: _[App] Capture_

**[DHIS2-20514](https://dhis2.atlassian.net/browse/DHIS2-20514): Unable to open new event form without pre-selected org unit in programs with categories**  
Components: _[App] Capture_

**[DHIS2-20738](https://dhis2.atlassian.net/browse/DHIS2-20738):  Cannot save form after validation fails for related stages**  
Components: _[App] Capture_

**[DHIS2-20708](https://dhis2.atlassian.net/browse/DHIS2-20708): Capture: Edit button in Profile widget not clickable for TEA with option set (from Capture v104.0.0+)**  
Components: _[App] Capture_

**[DHIS2-20475](https://dhis2.atlassian.net/browse/DHIS2-20475): Sluggish data entry performance in large forms**  
Components: _[App] Capture_

**[DHIS2-20530](https://dhis2.atlassian.net/browse/DHIS2-20530): Fallback search in all programs is not working for all dataValues types**  
Components: _[App] Capture_

**[DHIS2-20652](https://dhis2.atlassian.net/browse/DHIS2-20652): Line list download fails when a boolean field is added**  
Components: _[App] Line Listing_

**[DHIS2-20425](https://dhis2.atlassian.net/browse/DHIS2-20425): Error on new Maps app version install**  
Components: _[App] Maps_

**[DHIS2-20684](https://dhis2.atlassian.net/browse/DHIS2-20684): EE layers: Error with dates**  
Components: _[App] Maps_

**[DHIS2-20588](https://dhis2.atlassian.net/browse/DHIS2-20588): Climate layers - Buffer radius for polygons**  
Components: _[App] Maps_

**[DHIS2-20561](https://dhis2.atlassian.net/browse/DHIS2-20561): Climate layers - Layer without a Buffer**  
Components: _[App] Maps_

**[DHIS2-20580](https://dhis2.atlassian.net/browse/DHIS2-20580): Climate layers - Invalid selected org unit leads to whole world being rendered**  
Components: _[App] Maps_

**[DHIS2-20589](https://dhis2.atlassian.net/browse/DHIS2-20589): Climate layers - Temperature layer missing last month**  
Components: _[App] Maps_

**[DHIS2-20593](https://dhis2.atlassian.net/browse/DHIS2-20593): Climate layers - Layer can be updated even if there are errors on the form**  
Components: _[App] Maps_

**[DHIS2-20606](https://dhis2.atlassian.net/browse/DHIS2-20606): Multi Image creation not working for ORG_UNIT and USER_AVATAR domains**  
Components: _[Core] General_


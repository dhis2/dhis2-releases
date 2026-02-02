# Patch 2.42.4 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-19795](https://dhis2.atlassian.net/browse/DHIS2-19795): Data integrity check for program stages without programs**  
Components: _[API] Data Integrity_

**[DHIS2-20513](https://dhis2.atlassian.net/browse/DHIS2-20513): Expose HikariCP detailed metrics**  
Components: _[API] Other_

**[DHIS2-20140](https://dhis2.atlassian.net/browse/DHIS2-20140): Create Event Data Sync Job for New Tracker**  
Components: _[API] Tracker_

**[DHIS2-20139](https://dhis2.atlassian.net/browse/DHIS2-20139): Create Tracker Data Sync Job for New Tracker**  
Components: _[API] Tracker_

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

**[DHIS2-18502](https://dhis2.atlassian.net/browse/DHIS2-18502): Period as filter returns 0 instead of data**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-19185](https://dhis2.atlassian.net/browse/DHIS2-19185): Continuous Analytics fails to process datavalues in new periods**  
Components: _[API] Analytics_

**[DHIS2-19673](https://dhis2.atlassian.net/browse/DHIS2-19673): DV crashing while searching by Name containing colon ( : )**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-20542](https://dhis2.atlassian.net/browse/DHIS2-20542): Analytics and Resource Table jobs running twice consecutively**  
Components: _[API] Job scheduler_

**[DHIS2-20528](https://dhis2.atlassian.net/browse/DHIS2-20528): Request IDs missing from early logging (filters, connection acquisition)**  
Components: _[API] Other_

**[DHIS2-20731](https://dhis2.atlassian.net/browse/DHIS2-20731): Crash in User Profile when certain DB default locales are configured**  
Components: _[API] System configuration_

**[DHIS2-20815](https://dhis2.atlassian.net/browse/DHIS2-20815): /trackedEntities allows ordering by enrolledAt without a program**  
Components: _[API] Tracker_

**[DHIS2-20655](https://dhis2.atlassian.net/browse/DHIS2-20655): /trackedEntities connection pool exhaustion**  
Components: _[API] Tracker_

**[DHIS2-19752](https://dhis2.atlassian.net/browse/DHIS2-19752): Backport ACL pagination break on tracked entities**  
Components: _[API] Tracker_

**[DHIS2-20512](https://dhis2.atlassian.net/browse/DHIS2-20512): OSIV is wasting DB connections**  
Components: _[API] Tracker_

**[DHIS2-20394](https://dhis2.atlassian.net/browse/DHIS2-20394): Program stage sharing settings not validated in /trackedEntities**  
Components: _[API] Tracker_

**[DHIS2-20277](https://dhis2.atlassian.net/browse/DHIS2-20277): Error entering aggregated data for specific weeks**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-20475](https://dhis2.atlassian.net/browse/DHIS2-20475): Sluggish data entry performance in large forms**  
Components: _[App] Capture_

**[DHIS2-20530](https://dhis2.atlassian.net/browse/DHIS2-20530): Fallback search in all programs is not working for all dataValues types**  
Components: _[App] Capture_

**[DHIS2-20514](https://dhis2.atlassian.net/browse/DHIS2-20514): Unable to open new event form without pre-selected org unit in programs with categories**  
Components: _[App] Capture_

**[DHIS2-20738](https://dhis2.atlassian.net/browse/DHIS2-20738):  Cannot save form after validation fails for related stages**  
Components: _[App] Capture_

**[DHIS2-20708](https://dhis2.atlassian.net/browse/DHIS2-20708): Capture: Edit button in Profile widget not clickable for TEA with option set (from Capture v104.0.0+)**  
Components: _[App] Capture_

**[DHIS2-20495](https://dhis2.atlassian.net/browse/DHIS2-20495): Org unit not retained after “Save and add another” event**  
Components: _[App] Capture_

**[DHIS2-20305](https://dhis2.atlassian.net/browse/DHIS2-20305): Update TEA unique filter text to 'Exact matches only'**  
Components: _[App] Capture_

**[DHIS2-20447](https://dhis2.atlassian.net/browse/DHIS2-20447): Missing validations on unique attributes**  
Components: _[App] Capture_

**[DHIS2-20437](https://dhis2.atlassian.net/browse/DHIS2-20437): No searchable attributes message appears when the page loads**  
Components: _[App] Capture_

**[DHIS2-16467](https://dhis2.atlassian.net/browse/DHIS2-16467): Maps Legend on the dashboard collapsed during printing**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-10698](https://dhis2.atlassian.net/browse/DHIS2-10698): Indicators do not calculate in custom forms**  
**[DHIS2-20362](https://dhis2.atlassian.net/browse/DHIS2-20362): Interpretations and details does not open in the Visualiser app when visualisation type is Pivot Table**  
Components: _[App] Data visualizer_

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

**[DHIS2-19809](https://dhis2.atlassian.net/browse/DHIS2-19809): Create/edit layer: Selected radio buttons dot not showing**  
Components: _[App] Maps_

**[DHIS2-20311](https://dhis2.atlassian.net/browse/DHIS2-20311): Routes with encoded params doesn't work**  
Components: _[App] Route Manager_

**[DHIS2-20283](https://dhis2.atlassian.net/browse/DHIS2-20283): Function "d2:condition" is not implemented in the expression-parser**  
Components: _[Core] Expression Language_

**[DHIS2-20606](https://dhis2.atlassian.net/browse/DHIS2-20606): Multi Image creation not working for ORG_UNIT and USER_AVATAR domains**  
Components: _[Core] General_

**[DHIS2-19787](https://dhis2.atlassian.net/browse/DHIS2-19787): OpenAPI - special handling for SystemSettings interface to list key names not property names**  
Components: _[Core] OpenAPI_

**[DHIS2-20377](https://dhis2.atlassian.net/browse/DHIS2-20377): Regression: some types in the OpenAPI schemas have widened which makes these schemas unusable**  
Components: _[Core] OpenAPI_


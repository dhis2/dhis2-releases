# Patch 40.0.0 Release Note

  - [Features](#features)
  - [Bugs](#bugs)

## Features

**[DHIS2-14430](https://dhis2.atlassian.net/browse/DHIS2-14430): New Aggregation Operators: MAX (SUM IN ORG UNIT) and MIN (SUM IN ORG UNIT)**  
Components: _[API] Analytics_, _[API] Metadata model_

**[DHIS2-14691](https://dhis2.atlassian.net/browse/DHIS2-14691): [B23] Add icons object into Visualization**  
Components: _[API] Analytics_

**[DHIS2-14452](https://dhis2.atlassian.net/browse/DHIS2-14452): Implement support for IN operator in program indicators**  
Components: _[API] Analytics_

**[DHIS2-13373](https://dhis2.atlassian.net/browse/DHIS2-13373): Add orgUnitField to program indicators**  
Components: _[API] Analytics_, _[API] Metadata model_

**[DHIS2-13105](https://dhis2.atlassian.net/browse/DHIS2-13105): Aggregate data value set exchange service**  
Components: _[API] Analytics_, _[API] Data value set_

**[DHIS2-14208](https://dhis2.atlassian.net/browse/DHIS2-14208): [N] Support unlogged tables in analytics export**  
Components: _[API] Analytics_

**[DHIS2-14305](https://dhis2.atlassian.net/browse/DHIS2-14305): [A23] Add 'labelTemplate' as a property of mapView for map analytical object**  
Components: _[API] Analytics_

**[DHIS2-14785](https://dhis2.atlassian.net/browse/DHIS2-14785): Check "unlimited" + default values for paging flags, as in AnalyticsPagingCriteria**  
Components: _[API] Analytics_

**[DHIS2-14584](https://dhis2.atlassian.net/browse/DHIS2-14584): [B23] Refactor Cross Program Linelisting (TEI Linelisting) to improve code readability**  
Components: _[API] Analytics_

**[DHIS2-14545](https://dhis2.atlassian.net/browse/DHIS2-14545): Support URL param "displayProperty" as events/enrollments**  
Components: _[API] Analytics_

**[DHIS2-14628](https://dhis2.atlassian.net/browse/DHIS2-14628): TEI query fails with 500 when we specify relative periods (dimension=pe:LAST_YEAR)**  
Components: _[API] Analytics_

**[DHIS2-14623](https://dhis2.atlassian.net/browse/DHIS2-14623): TEI query fails with non-friendly HTTP 400 for event programs**  
**[DHIS2-14548](https://dhis2.atlassian.net/browse/DHIS2-14548): [B23] Support URL param "analyzeOnly" as events/enrollments**  
Components: _[API] Analytics_

**[DHIS2-14573](https://dhis2.atlassian.net/browse/DHIS2-14573): [B23] Ignore non-existing headers instead of response with empty rows**  
Components: _[API] Analytics_

**[DHIS2-14528](https://dhis2.atlassian.net/browse/DHIS2-14528): [B23] Support URL param "isLastPage" as events/enrollments**  
Components: _[API] Analytics_

**[DHIS2-14530](https://dhis2.atlassian.net/browse/DHIS2-14530): [B23] Support URL param "totalPages" as events/enrollments**  
Components: _[API] Analytics_

**[DHIS2-14547](https://dhis2.atlassian.net/browse/DHIS2-14547): Support URL param "includeMetadataDetails" as events/enrollments**  
Components: _[API] Analytics_

**[DHIS2-14546](https://dhis2.atlassian.net/browse/DHIS2-14546): Support URL param "headers" as events/enrollments**  
Components: _[API] Analytics_

**[DHIS2-14527](https://dhis2.atlassian.net/browse/DHIS2-14527): [A23] TEI endpoint returns 500 error when analytics tables are absent**  
Components: _[API] Analytics_

**[DHIS2-13450](https://dhis2.atlassian.net/browse/DHIS2-13450): [H,I,J,K,L,M] Create analytics e2e tests structure**  
Components: _[API] Analytics_

**[DHIS2-13797](https://dhis2.atlassian.net/browse/DHIS2-13797): [M] Implement sorting by EnrollmentDate in Cross Program Line listing**  
**[DHIS2-13798](https://dhis2.atlassian.net/browse/DHIS2-13798): [M] Implement sorting by event date in Cross Program Line listing**  
**[DHIS2-13760](https://dhis2.atlassian.net/browse/DHIS2-13760): Support application zip archives with a top-level directory**  
Components: _[API] App management_

**[DHIS2-14495](https://dhis2.atlassian.net/browse/DHIS2-14495): Add metadata integrity check for organisation units with the same name and same parent**  
Components: _[API] Data administration_

**[DHIS2-14525](https://dhis2.atlassian.net/browse/DHIS2-14525): Add names for new data integrity checks**  
Components: _[API] Data administration_

**[DHIS2-14451](https://dhis2.atlassian.net/browse/DHIS2-14451): feat: Add SQL based check for data elements which belong to datasets with different periodtypes**  
Components: _[API] Data administration_

**[DHIS2-14822](https://dhis2.atlassian.net/browse/DHIS2-14822): Add DHIS 2 system info to data summary endpoint**  
Components: _[API] Data administration_

**[DHIS2-14595](https://dhis2.atlassian.net/browse/DHIS2-14595): DataStore metadata should show current user "access" info**  
Components: _[API] Data store_

**[DHIS2-13034](https://dhis2.atlassian.net/browse/DHIS2-13034): Category combo and category options query parameters for data value sets**  
Components: _[API] Data value set_

**[DHIS2-14372](https://dhis2.atlassian.net/browse/DHIS2-14372): Provide job parameters in system/tasks/{jobType} endpoint**  
Components: _[API] Job scheduler_, _[API] Other_

**[DHIS2-13156](https://dhis2.atlassian.net/browse/DHIS2-13156): Job sequence scheduled job type**  
**[DHIS2-10529](https://dhis2.atlassian.net/browse/DHIS2-10529): Indicator CSV metadata import**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-13730](https://dhis2.atlassian.net/browse/DHIS2-13730): Removal of CSV metadata export in UI**  
Components: _[API] Metadata import-export_

**[DHIS2-13470](https://dhis2.atlassian.net/browse/DHIS2-13470): Deletion handling of user references for metadata**  
Components: _[API] Metadata import-export_

**[DHIS2-12035](https://dhis2.atlassian.net/browse/DHIS2-12035): CSV export field filtering**  
Components: _[API] Metadata import-export_

**[DHIS2-14506](https://dhis2.atlassian.net/browse/DHIS2-14506): Data Integrity - Identifier Consistency and Limitations**  
Components: _[API] Metadata model_

**[DHIS2-14606](https://dhis2.atlassian.net/browse/DHIS2-14606): Store attribute flags as JSONB in the database**  
Components: _[API] Metadata model_

**[DHIS2-14488](https://dhis2.atlassian.net/browse/DHIS2-14488): Data Integrity Checks: API to list checks with results available as well as currently running checks**  
Components: _[API] Metadata model_

**[DHIS2-14102](https://dhis2.atlassian.net/browse/DHIS2-14102): Add "description" for option and option sets**  
Components: _[API] Metadata model_

**[DHIS2-12194](https://dhis2.atlassian.net/browse/DHIS2-12194): Event hooks system to notify external services of state changes**  
Components: _[API] Other_

**[DHIS2-14531](https://dhis2.atlassian.net/browse/DHIS2-14531): Create dedicated ping endpoint**  
Components: _[API] Other_

**[DHIS2-13731](https://dhis2.atlassian.net/browse/DHIS2-13731): Automatically convert fields query parameter in controllers**  
Components: _[API] Other_

**[DHIS2-14404](https://dhis2.atlassian.net/browse/DHIS2-14404): Remove METADATA_READ access bypass function for Dashboard's objects**  
Components: _[API] Other_

**[DHIS2-12795](https://dhis2.atlassian.net/browse/DHIS2-12795): [Backend] d2:round argument for decimal places**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-10886](https://dhis2.atlassian.net/browse/DHIS2-10886): Disallow case-sensitive username on user creation**  
Components: _[API] Security_

**[DHIS2-13768](https://dhis2.atlassian.net/browse/DHIS2-13768): Allow hyphens in usernames**  
Components: _[API] Security_, _[API] User_

**[DHIS2-13733](https://dhis2.atlassian.net/browse/DHIS2-13733): Cleanup: Client errors should be rejected with status code 400**  
Components: _[API] Tracker_

**[DHIS2-14866](https://dhis2.atlassian.net/browse/DHIS2-14866): Minor improvements in Program Stage Working List**  
Components: _[API] Tracker_

**[DHIS2-14367](https://dhis2.atlassian.net/browse/DHIS2-14367): Program stage working lists**  
Components: _[API] Tracker_

**[DHIS2-13620](https://dhis2.atlassian.net/browse/DHIS2-13620): CSV support on /tracker/trackedEntities**  
Components: _[API] Tracker_

**[DHIS2-13657](https://dhis2.atlassian.net/browse/DHIS2-13657): Expose an endpoint to download FILE tei attribute values**  
Components: _[API] Tracker_

**[DHIS2-13912](https://dhis2.atlassian.net/browse/DHIS2-13912): Support zip and gzip on /tracker/trackedEntities**  
Components: _[API] Tracker_

**[DHIS2-14481](https://dhis2.atlassian.net/browse/DHIS2-14481): Multi-select option sets for data entry**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-14744](https://dhis2.atlassian.net/browse/DHIS2-14744): Align OrgUnitDimension analytics component with DHIS2 Maps**  
Components: _[App] Analytics_

**[DHIS2-13237](https://dhis2.atlassian.net/browse/DHIS2-13237): Capture and show enrollment coordinates in enrollment widget**  
Components: _[App] Capture_

**[DHIS2-12256](https://dhis2.atlassian.net/browse/DHIS2-12256): Display translation of Event Date and Due Date**  
Components: _[App] Capture_, _[App] Translations_

**[DHIS2-13309](https://dhis2.atlassian.net/browse/DHIS2-13309): Show scheduled date in 6c. View/edit event page**  
Components: _[App] Capture_

**[DHIS2-13804](https://dhis2.atlassian.net/browse/DHIS2-13804): Enrollment page - handle protected programs**  
Components: _[App] Capture_

**[DHIS2-12337](https://dhis2.atlassian.net/browse/DHIS2-12337): Indicate waiting for server response in new TEI page**  
Components: _[App] Capture_

**[DHIS2-14008](https://dhis2.atlassian.net/browse/DHIS2-14008): Refactor the ScopeSelector to use the SelectionBar ui component**  
Components: _[App] Capture_

**[DHIS2-13747](https://dhis2.atlassian.net/browse/DHIS2-13747): [Frontend] Extend TEIWorkingList to support tracker events**  
Components: _[App] Capture_

**[DHIS2-13750](https://dhis2.atlassian.net/browse/DHIS2-13750): [Frontend] Sort by TEA and events DE**  
Components: _[App] Capture_

**[DHIS2-13803](https://dhis2.atlassian.net/browse/DHIS2-13803): Change labels and path for button in "All programs" search results**  
Components: _[App] Capture_

**[DHIS2-14336](https://dhis2.atlassian.net/browse/DHIS2-14336): Search with enter in capture**  
Components: _[App] Capture_

**[DHIS2-10986](https://dhis2.atlassian.net/browse/DHIS2-10986): Message on leaving page without saving also in cancel button**  
Components: _[App] Capture_

**[DHIS2-13801](https://dhis2.atlassian.net/browse/DHIS2-13801): Implement "Ask user to create new event when stage is complete" flag**  
Components: _[App] Capture_

**[DHIS2-13661](https://dhis2.atlassian.net/browse/DHIS2-13661): [Frontend] Add program stage filter**  
Components: _[App] Capture_

**[DHIS2-14125](https://dhis2.atlassian.net/browse/DHIS2-14125): Improve "No saved" list state in Saved lists widget**  
Components: _[App] Capture_

**[DHIS2-13943](https://dhis2.atlassian.net/browse/DHIS2-13943): Adjust "Save new..." button label when saving a TEI**  
Components: _[App] Capture_

**[DHIS2-13941](https://dhis2.atlassian.net/browse/DHIS2-13941): Adjust scheduled date infobox content**  
Components: _[App] Capture_

**[DHIS2-13672](https://dhis2.atlassian.net/browse/DHIS2-13672): Show referrals widget in 6b. Add event in enrollment**  
Components: _[App] Capture_

**[DHIS2-9666](https://dhis2.atlassian.net/browse/DHIS2-9666): Create new TEI when none of the results match (with searched attributes carried over)**  
Components: _[App] Capture_

**[DHIS2-13895](https://dhis2.atlassian.net/browse/DHIS2-13895): Show scheduled date for active/complete events**  
Components: _[App] Capture_

**[DHIS2-13897](https://dhis2.atlassian.net/browse/DHIS2-13897): Respect "Hide due date" flag in Event workspace**  
Components: _[App] Capture_

**[DHIS2-13748](https://dhis2.atlassian.net/browse/DHIS2-13748): [Frontend] Remove filter button**  
Components: _[App] Capture_

**[DHIS2-14101](https://dhis2.atlassian.net/browse/DHIS2-14101): Enrollment dashboard UI adjustments**  
Components: _[App] Capture_

**[DHIS2-14081](https://dhis2.atlassian.net/browse/DHIS2-14081): Use static table rows for accessory rows in stage>event list**  
Components: _[App] Capture_

**[DHIS2-13681](https://dhis2.atlassian.net/browse/DHIS2-13681): [Capture app] d2:round argument for decimal places**  
Components: _[App] Capture_

**[DHIS2-10496](https://dhis2.atlassian.net/browse/DHIS2-10496): Show data element and indicator icons for single values**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-13916](https://dhis2.atlassian.net/browse/DHIS2-13916): Skip generation of organization unit ownership data**  
Components: _[App] Data administration_

**[DHIS2-13871](https://dhis2.atlassian.net/browse/DHIS2-13871): Custom calculations in Data Visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-13702](https://dhis2.atlassian.net/browse/DHIS2-13702): Single value background color change based upon legend**  
Components: _[App] Data visualizer_

**[DHIS2-13475](https://dhis2.atlassian.net/browse/DHIS2-13475): Search by tokens across identifiable properties for saved favorites**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-14197](https://dhis2.atlassian.net/browse/DHIS2-14197): Import/Export UI adjustments**  
Components: _[App] Import-export_

**[DHIS2-13697](https://dhis2.atlassian.net/browse/DHIS2-13697): Removal of metadata XML import & export in UI**  
Components: _[App] Import-export_

**[DHIS2-15058](https://dhis2.atlassian.net/browse/DHIS2-15058): Belgium Pale Ale - 6.04%**  
Components: _[App] Interpretations_

**[DHIS2-13374](https://dhis2.atlassian.net/browse/DHIS2-13374): Choose orgUnitField for program indicators**  
Components: _[App] Maintenance_

**[DHIS2-11600](https://dhis2.atlassian.net/browse/DHIS2-11600): Configurable data element auto grouping in section**  
Components: _[App] Maintenance_

**[DHIS2-13995](https://dhis2.atlassian.net/browse/DHIS2-13995): Renaming 'Hide program stage' action in program rules to 'Prevent adding new events to stage'**  
Components: _[App] Maintenance_

**[DHIS2-12749](https://dhis2.atlassian.net/browse/DHIS2-12749): Add code field to category option group set**  
Components: _[App] Maintenance_

**[DHIS2-14152](https://dhis2.atlassian.net/browse/DHIS2-14152): Attribute values not displayed for options in maintenance app**  
Components: _[App] Maintenance_

**[DHIS2-8165](https://dhis2.atlassian.net/browse/DHIS2-8165): Maps app to provide access to enrollment coordinates for event maps**  
Components: _[App] Maps_

**[DHIS2-14633](https://dhis2.atlassian.net/browse/DHIS2-14633): Improved display of multiple geometries (main + associated geometries)**  
Components: _[App] Maps_

**[DHIS2-14318](https://dhis2.atlassian.net/browse/DHIS2-14318): Map download: Add map description**  
Components: _[App] Maps_

**[DHIS2-14323](https://dhis2.atlassian.net/browse/DHIS2-14323): Map download: Show legend beside map**  
Components: _[App] Maps_

**[DHIS2-13356](https://dhis2.atlassian.net/browse/DHIS2-13356): Add option to show value/number in thematic layers**  
Components: _[App] Maps_

**[DHIS2-14320](https://dhis2.atlassian.net/browse/DHIS2-14320): Map download: Add north arrow**  
Components: _[App] Maps_

**[DHIS2-14440](https://dhis2.atlassian.net/browse/DHIS2-14440): Support facility symbols in SVG-format**  
Components: _[App] Maps_

**[DHIS2-14321](https://dhis2.atlassian.net/browse/DHIS2-14321): Map download: Add overview map**  
Components: _[App] Maps_

**[DHIS2-14014](https://dhis2.atlassian.net/browse/DHIS2-14014): Long map attributions should not cover the scale bar**  
Components: _[App] Maps_

## Bugs

**[DHIS2-15106](https://dhis2.atlassian.net/browse/DHIS2-15106): [D23] EDIs name/shortName should not be unique**  
Components: _[API] Analytics_

**[DHIS2-15059](https://dhis2.atlassian.net/browse/DHIS2-15059): Add specific restriction to /dataItems endpoint for EDIs**  
Components: _[API] Analytics_

**[DHIS2-12152](https://dhis2.atlassian.net/browse/DHIS2-12152): Event analytics: Integer data element with decimal number filter causes a 500**  
Components: _[API] Analytics_

**[DHIS2-14561](https://dhis2.atlassian.net/browse/DHIS2-14561): [B23] Event analytics does not recognize no value "NV" as valid query filter for numeric values**  
Components: _[API] Analytics_

**[DHIS2-15093](https://dhis2.atlassian.net/browse/DHIS2-15093): Performance issue in /analytics**  
Components: _[API] Analytics_

**[DHIS2-14206](https://dhis2.atlassian.net/browse/DHIS2-14206): [N] Visualizations endpoint does not allow decimal values for axes props**  
Components: _[API] Analytics_

**[DHIS2-14339](https://dhis2.atlassian.net/browse/DHIS2-14339): DV - Digit group separator applied to valueType TEXT data elements**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-14704](https://dhis2.atlassian.net/browse/DHIS2-14704): [B23] Program Indicators - NaN values always returned in spite of filter**  
Components: _[API] Analytics_

**[DHIS2-14981](https://dhis2.atlassian.net/browse/DHIS2-14981): [D23] Support "lastupdatedatclient/createdAtClient" in analytics table export (events)**  
Components: _[API] Analytics_

**[DHIS2-15010](https://dhis2.atlassian.net/browse/DHIS2-15010): [D23] Make shortName mandatory/unique for ExpressionDimensionItem**  
Components: _[API] Analytics_

**[DHIS2-14199](https://dhis2.atlassian.net/browse/DHIS2-14199): [N] Aggregation validation not applied to data  element details (operands)**  
Components: _[API] Analytics_

**[DHIS2-14464](https://dhis2.atlassian.net/browse/DHIS2-14464): [A23] HTTP 500 error on /dataItems endpoint**  
Components: _[API] Analytics_

**[DHIS2-12897](https://dhis2.atlassian.net/browse/DHIS2-12897): [C]Paging issues in event/enrollment analytics**  
Components: _[API] Analytics_

**[DHIS2-14442](https://dhis2.atlassian.net/browse/DHIS2-14442): [A23] Scheduled events missing when using fixed monthly periods**  
Components: _[API] Analytics_

**[DHIS2-14908](https://dhis2.atlassian.net/browse/DHIS2-14908): [D23] Search feature in Dashboard edition should bring only LINE_LIST visualizations for Line Listing app**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14777](https://dhis2.atlassian.net/browse/DHIS2-14777): [B23, C23] Analytics events query API not respecting "unlimited" when paging=false**  
Components: _[API] Analytics_

**[DHIS2-14910](https://dhis2.atlassian.net/browse/DHIS2-14910): [D23] Remove existing core apps from Dashboard search results**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14851](https://dhis2.atlassian.net/browse/DHIS2-14851): [C23] Maps API not able to save existing maps via PUT**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-14871](https://dhis2.atlassian.net/browse/DHIS2-14871): [C23] Column "ounamehierarchy" is not sorting correctly (events/enrollments API)**  
Components: _[API] Analytics_

**[DHIS2-14493](https://dhis2.atlassian.net/browse/DHIS2-14493): Loading a line list with multi-stage elements causes a 400**  
Components: _[API] Analytics_

**[DHIS2-13774](https://dhis2.atlassian.net/browse/DHIS2-13774): Problems with yearToDate indicators using periodOffset**  
Components: _[API] Analytics_

**[DHIS2-14541](https://dhis2.atlassian.net/browse/DHIS2-14541): [A23] Line Listing: HTTP 500 when filter is empty**  
Components: _[API] Analytics_

**[DHIS2-13909](https://dhis2.atlassian.net/browse/DHIS2-13909): Attempting to sort org unit DE results in "No data available" message**  
Components: _[API] Analytics_

**[DHIS2-14306](https://dhis2.atlassian.net/browse/DHIS2-14306): [N] Deletion of associated Exp. Dimension Item causes HTTP 500**  
Components: _[API] Analytics_

**[DHIS2-14417](https://dhis2.atlassian.net/browse/DHIS2-14417): Analytics doesn't set resource tables update time when updating resource tables**  
Components: _[API] Analytics_

**[DHIS2-14434](https://dhis2.atlassian.net/browse/DHIS2-14434): [N] Data Visualizer: Excel download exports numbers as text**  
Components: _[API] Analytics_, _[API] Other_

**[DHIS2-13456](https://dhis2.atlassian.net/browse/DHIS2-13456): deGroup does not work (Expression not supported) for indicators**  
Components: _[API] Analytics_

**[DHIS2-13700](https://dhis2.atlassian.net/browse/DHIS2-13700): [J,K] Analytics query fails for Event data item of type TEXT**  
Components: _[API] Analytics_

**[DHIS2-14146](https://dhis2.atlassian.net/browse/DHIS2-14146): [N] Dashboard item search returns both EventReports and EventVisualizations as EventReports**  
Components: _[API] Analytics_

**[DHIS2-13514](https://dhis2.atlassian.net/browse/DHIS2-13514): [J, K] Analytics Continous Job Fails for New Program**  
Components: _[API] Analytics_

**[DHIS2-13694](https://dhis2.atlassian.net/browse/DHIS2-13694): [J,K] Event Date filter not respecting individual dates selection**  
Components: _[API] Analytics_

**[DHIS2-13721](https://dhis2.atlassian.net/browse/DHIS2-13721): [J,K] Incorrect column names in analytics events and enrollments response**  
Components: _[API] Analytics_

**[DHIS2-13836](https://dhis2.atlassian.net/browse/DHIS2-13836): Installed app redirects to bundled app path doesn't work**  
Components: _[API] App management_

**[DHIS2-13837](https://dhis2.atlassian.net/browse/DHIS2-13837): Installed app redirects from index.action return 302 with no Location header**  
Components: _[API] App management_

**[DHIS2-14743](https://dhis2.atlassian.net/browse/DHIS2-14743): Data entry metadata endpoint crash**  
Components: _[API] Data Entry_

**[DHIS2-13856](https://dhis2.atlassian.net/browse/DHIS2-13856): api/dataEntry/metadata fails on empty data set**  
Components: _[API] Data Entry_

**[DHIS2-14293](https://dhis2.atlassian.net/browse/DHIS2-14293): Performance issues with dataValueSets using importStrategy=DELETE in 2.37 and later**  
Components: _[API] Data value set_

**[DHIS2-13928](https://dhis2.atlassian.net/browse/DHIS2-13928): Request parameter binding errors cause internal server error response**  
Components: _[API] Data value set_

**[DHIS2-13135](https://dhis2.atlassian.net/browse/DHIS2-13135): Event pageSize is not respected when more than 1 category**  
Components: _[API] Events_

**[DHIS2-12934](https://dhis2.atlassian.net/browse/DHIS2-12934): Unexpected change of dueDate if a datavalue is updated**  
Components: _[API] Events_

**[DHIS2-13656](https://dhis2.atlassian.net/browse/DHIS2-13656): event org units are different depending on the API query**  
Components: _[API] Events_

**[DHIS2-14736](https://dhis2.atlassian.net/browse/DHIS2-14736): Events endpoint fails when updating existing event**  
Components: _[API] Events_

**[DHIS2-14720](https://dhis2.atlassian.net/browse/DHIS2-14720): TrackedEntityInstances endpoint does not return events if explicit fields are provided**  
Components: _[API] Events_

**[DHIS2-13555](https://dhis2.atlassian.net/browse/DHIS2-13555): eventVisualizations: order by created or lastUpdated doesn't work**  
Components: _[API] Events_

**[DHIS2-14476](https://dhis2.atlassian.net/browse/DHIS2-14476): [A23] paging=false and skipPaging=true are not working on api/events or api/enrollments**  
Components: _[API] Events_, _[API] Other_

**[DHIS2-13632](https://dhis2.atlassian.net/browse/DHIS2-13632): tracker/events endpoint updates created date**  
Components: _[API] Events_

**[DHIS2-15241](https://dhis2.atlassian.net/browse/DHIS2-15241): Scheduler API: scheduler list thows NPE when fixed delay jobs are in the list**  
Components: _[API] Job scheduler_

**[DHIS2-10331](https://dhis2.atlassian.net/browse/DHIS2-10331): Error on dataSets/ID/metadata endpoint when dataset attribute is selected**  
Components: _[API] Metadata import-export_, _[API] Metadata model_

**[DHIS2-14084](https://dhis2.atlassian.net/browse/DHIS2-14084): RelationshipType trackerDataView does not respect order of attributes**  
Components: _[API] Metadata import-export_

**[DHIS2-14634](https://dhis2.atlassian.net/browse/DHIS2-14634): GeoJSON-import: "Invalid" geometries should not be imported**  
Components: _[API] Metadata import-export_

**[DHIS2-11846](https://dhis2.atlassian.net/browse/DHIS2-11846): api/programs/[uid]/metadata endpoint fails with custom attribute**  
Components: _[API] Metadata import-export_

**[DHIS2-14105](https://dhis2.atlassian.net/browse/DHIS2-14105): Cannot Import Program Rule Actions into 2.37.8 or 2.38.1.1**  
Components: _[API] Metadata import-export_, _[API] Program rules_, _[App] Import-export_

**[DHIS2-14550](https://dhis2.atlassian.net/browse/DHIS2-14550): Sharing Patch Add command replaces, instead of adding**  
Components: _[API] Metadata import-export_

**[DHIS2-13922](https://dhis2.atlassian.net/browse/DHIS2-13922): Error on event export in XML format in Zip mode**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-13923](https://dhis2.atlassian.net/browse/DHIS2-13923): Error on TEI export in CSV format**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-13869](https://dhis2.atlassian.net/browse/DHIS2-13869): Metadata export to uncompressed file is not getting downloaded as a file**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-14696](https://dhis2.atlassian.net/browse/DHIS2-14696): Gist API: Restrict attribute values to map of values by attribute id key**  
Components: _[API] Metadata model_

**[DHIS2-14802](https://dhis2.atlassian.net/browse/DHIS2-14802): Attribute update is broken because flag properties are no longer persisted**  
Components: _[API] Metadata model_

**[DHIS2-12911](https://dhis2.atlassian.net/browse/DHIS2-12911): Organisation unit group description not saving after create or update of a organisation unit group**  
Components: _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-8953](https://dhis2.atlassian.net/browse/DHIS2-8953): Unable to delete OrganisationUnit when present in OrganisationUnit scopes**  
Components: _[API] Metadata model_

**[DHIS2-14526](https://dhis2.atlassian.net/browse/DHIS2-14526): Short names should be not null**  
Components: _[API] Metadata model_

**[DHIS2-14191](https://dhis2.atlassian.net/browse/DHIS2-14191): CreatedBy field is changed when updating with createdBy = null**  
Components: _[API] Metadata model_

**[DHIS2-12744](https://dhis2.atlassian.net/browse/DHIS2-12744): Category Management and Cat Option Groups - Description not saved**  
Components: _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-13517](https://dhis2.atlassian.net/browse/DHIS2-13517): QueryPlanner has issues separating persisted / non-persisted**  
Components: _[API] Metadata model_

**[DHIS2-13756](https://dhis2.atlassian.net/browse/DHIS2-13756): Metadata pagination no longer works with `order` parameter**  
Components: _[API] Metadata model_

**[DHIS2-14858](https://dhis2.atlassian.net/browse/DHIS2-14858): [C23] Interpretations failing on Maps application**  
Components: _[API] Other_

**[DHIS2-12220](https://dhis2.atlassian.net/browse/DHIS2-12220): WebMvc metrics (API) not appearing on /api/metrics**  
Components: _[API] Other_

**[DHIS2-14500](https://dhis2.atlassian.net/browse/DHIS2-14500): Error validating program indicator with custom aggregation function**  
Components: _[API] Other_

**[DHIS2-14114](https://dhis2.atlassian.net/browse/DHIS2-14114): SystemSettingManager.getSystemSetting causes performance issue**  
Components: _[API] Other_

**[DHIS2-14010](https://dhis2.atlassian.net/browse/DHIS2-14010): [M] Interpretations API is broken in Play debug/dev - NPE**  
Components: _[API] Other_

**[DHIS2-13853](https://dhis2.atlassian.net/browse/DHIS2-13853): organisationUnitGroupSets endpoint is not returning displayName in organisationUnitGroups**  
Components: _[API] Other_

**[DHIS2-13763](https://dhis2.atlassian.net/browse/DHIS2-13763): Token filter is not working**  
Components: _[API] Other_

**[DHIS2-14422](https://dhis2.atlassian.net/browse/DHIS2-14422): Regression bug in 2.38 - skip logic causes nullpointerexception**  
Components: _[API] Predictors_

**[DHIS2-14499](https://dhis2.atlassian.net/browse/DHIS2-14499): Predictor breaks with integer program indicators**  
Components: _[API] Predictors_

**[DHIS2-14916](https://dhis2.atlassian.net/browse/DHIS2-14916): More than one program rule variable linked to the same data element make rule engine crash**  
Components: _[API] Program rules_

**[DHIS2-14733](https://dhis2.atlassian.net/browse/DHIS2-14733): Program rule fails to assign when field is not in a program stage**  
Components: _[API] Program rules_, _[App] Tracker capture_

**[DHIS2-13821](https://dhis2.atlassian.net/browse/DHIS2-13821): 2.38.1.1 Program Rule Validation Preventing Data Syncing**  
Components: _[API] Program rules_, _[App] Capture_

**[DHIS2-14751](https://dhis2.atlassian.net/browse/DHIS2-14751): CLONE - 2.38.1.1 Program Rule Validation Preventing Data Syncing**  
**[DHIS2-13823](https://dhis2.atlassian.net/browse/DHIS2-13823): Disallow repeating and trailing hyphens in username**  
Components: _[API] Security_, _[API] User_

**[DHIS2-5682](https://dhis2.atlassian.net/browse/DHIS2-5682): "No flag" results in old DHIS2 logo**  
Components: _[API] System configuration_, _[App] Other_

**[DHIS2-15145](https://dhis2.atlassian.net/browse/DHIS2-15145): enrolments endpoint does not use capture scope when program is protected or closed**  
Components: _[API] Tracker_

**[DHIS2-13984](https://dhis2.atlassian.net/browse/DHIS2-13984): Capture app unable to save events for program rule that assigns long decimals**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-14917](https://dhis2.atlassian.net/browse/DHIS2-14917): Rule-engine triggered by program event in old tracker can cause performance issues**  
Components: _[API] Tracker_

**[DHIS2-13676](https://dhis2.atlassian.net/browse/DHIS2-13676): /events return incorrect results after filtering**  
Components: _[API] Tracker_

**[DHIS2-13840](https://dhis2.atlassian.net/browse/DHIS2-13840): Searching for attribute values containing "NV" results in malformed SQL and 500 internal error**  
Components: _[API] Tracker_

**[DHIS2-14882](https://dhis2.atlassian.net/browse/DHIS2-14882): Filter by attribute value (option set) returns invalid query item**  
Components: _[API] Tracker_

**[DHIS2-13422](https://dhis2.atlassian.net/browse/DHIS2-13422): Endpoint /trackedEntityInstances does not return assignedUser in events**  
Components: _[API] Tracker_

**[DHIS2-14711](https://dhis2.atlassian.net/browse/DHIS2-14711): Relationship validation in tracker returns misleading errors**  
Components: _[API] Tracker_

**[DHIS2-14524](https://dhis2.atlassian.net/browse/DHIS2-14524): Createdbyuserinfo and lastupdatedbyuserinfo jsonb fields in programinstance are all blank (Old Tracker Capture)**  
Components: _[API] Tracker_

**[DHIS2-13735](https://dhis2.atlassian.net/browse/DHIS2-13735): Tracker does not respect order of order criteria**  
Components: _[API] Tracker_

**[DHIS2-14562](https://dhis2.atlassian.net/browse/DHIS2-14562): TrackedEntities returning soft deleted events**  
Components: _[API] Tracker_

**[DHIS2-14828](https://dhis2.atlassian.net/browse/DHIS2-14828): href in /tracker/events is inconsistent and unused**  
Components: _[API] Tracker_

**[DHIS2-14407](https://dhis2.atlassian.net/browse/DHIS2-14407): Extends nested fields to Events in /trackedentities endpoint [ NTI ]**  
Components: _[API] Tracker_

**[DHIS2-14792](https://dhis2.atlassian.net/browse/DHIS2-14792): Ignore fields parameter in tracker CSV endpoints**  
Components: _[API] Tracker_

**[DHIS2-14783](https://dhis2.atlassian.net/browse/DHIS2-14783): Tracker does not return fields in accordance with field filtering**  
Components: _[API] Tracker_

**[DHIS2-11731](https://dhis2.atlassian.net/browse/DHIS2-11731): TrackedEntityInstance endpoint does not include nested event notes**  
Components: _[API] Tracker_

**[DHIS2-14502](https://dhis2.atlassian.net/browse/DHIS2-14502): Event notes behave differently in similar endpoints**  
Components: _[API] Tracker_

**[DHIS2-12906](https://dhis2.atlassian.net/browse/DHIS2-12906): /tracker/enrollments does not return attributes, events and relationships**  
Components: _[API] Tracker_

**[DHIS2-14497](https://dhis2.atlassian.net/browse/DHIS2-14497): The events cannot be filtered by the scheduled date**  
Components: _[API] Tracker_

**[DHIS2-14560](https://dhis2.atlassian.net/browse/DHIS2-14560): Sort order not respected for tracked entity attributes**  
Components: _[API] Tracker_


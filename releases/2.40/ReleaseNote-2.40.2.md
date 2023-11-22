# Patch 2.40.2 Release Note

  - [Features](#features)
  - [Bugs](#bugs)

## Features

**[DHIS2-15933](https://dhis2.atlassian.net/browse/DHIS2-15933): Metadata for user orgunits in analytics response**  
Components: _[API] Analytics_

**[DHIS2-14012](https://dhis2.atlassian.net/browse/DHIS2-14012): Remove the working list "Download as XML" button**  
Components: _[App] Capture_

**[DHIS2-15483](https://dhis2.atlassian.net/browse/DHIS2-15483): Assign user to scheduled events**  
Components: _[App] Capture_

**[DHIS2-15906](https://dhis2.atlassian.net/browse/DHIS2-15906): Relationships: Consider auto-generate event and first-stage on registration page for tracked entity registration**  
Components: _[App] Capture_

**[DHIS2-12616](https://dhis2.atlassian.net/browse/DHIS2-12616): Add TEI's relationship - Create new TEI to link (capture-parity edition)**  
Components: _[App] Capture_

**[DHIS2-12615](https://dhis2.atlassian.net/browse/DHIS2-12615): Add TEI's relationship - Search for existing TEI to link (capture-parity edition)**  
Components: _[App] Capture_

**[DHIS2-9661](https://dhis2.atlassian.net/browse/DHIS2-9661): Add event for first stage in registration page**  
Components: _[App] Capture_

**[DHIS2-14830](https://dhis2.atlassian.net/browse/DHIS2-14830): Rules execution for for first stage in registration page**  
Components: _[App] Capture_

**[DHIS2-13343](https://dhis2.atlassian.net/browse/DHIS2-13343): Implement PRA "Prevent adding new events to stage" in Capture app**  
Components: _[App] Capture_

**[DHIS2-14334](https://dhis2.atlassian.net/browse/DHIS2-14334): Edit enrollment date and incident date in capture**  
Components: _[App] Capture_

## Bugs

**[DHIS2-15573](https://dhis2.atlassian.net/browse/DHIS2-15573): Errors executing analytics due invalid date and period**  
Components: _[API] Analytics_

**[DHIS2-11509](https://dhis2.atlassian.net/browse/DHIS2-11509): Export of Event report: DE with optionSet doesn't use translation**  
Components: _[API] Analytics_

**[DHIS2-14971](https://dhis2.atlassian.net/browse/DHIS2-14971): Zero value for enrollment PI in a single period aggregates to zero value in multi-period Single Value chart**  
Components: _[API] Analytics_

**[DHIS2-15184](https://dhis2.atlassian.net/browse/DHIS2-15184): Return friendly error message when analytics queries fail to execute.**  
Components: _[API] Analytics_

**[DHIS2-15069](https://dhis2.atlassian.net/browse/DHIS2-15069): Sharing settings on program indicators do not work**  
Components: _[API] Analytics_, _[App] Event reports_, _[App] Event visualizer_, _[App] Line Listing_

**[DHIS2-15372](https://dhis2.atlassian.net/browse/DHIS2-15372): Month names are not same as the report in the PDF**  
Components: _[API] Analytics_

**[DHIS2-13173](https://dhis2.atlassian.net/browse/DHIS2-13173): [M][L][F][E] Param displayProperty:SHORTNAME doesn't return short name**  
Components: _[API] Analytics_

**[DHIS2-15791](https://dhis2.atlassian.net/browse/DHIS2-15791): /analytics API doesn't return the hierarchy for OUs that don't have data**  
Components: _[API] Analytics_

**[DHIS2-14923](https://dhis2.atlassian.net/browse/DHIS2-14923): 500 internal server error for calls to the orgUnitAnalytics API, when query references an ou group set that is not set to be a data dimension (Leading to error in Org unit distribution report)**  
Components: _[API] Analytics_

**[DHIS2-15502](https://dhis2.atlassian.net/browse/DHIS2-15502): Event report showing only 101 rows in first page and not navigated to next page**  
Components: _[API] Analytics_

**[DHIS2-15775](https://dhis2.atlassian.net/browse/DHIS2-15775): Option codes and OptionSet association is missing in metadata**  
Components: _[API] Analytics_

**[DHIS2-13773](https://dhis2.atlassian.net/browse/DHIS2-13773): Deleting SQL view metadata that references resource tables and/or analytics tables can then block resource tables and/or analytics**  
Components: _[API] Analytics_, _[App] Data administration_

**[DHIS2-12495](https://dhis2.atlassian.net/browse/DHIS2-12495): Tracker program table isn't generated**  
Components: _[API] Analytics_

**[DHIS2-15766](https://dhis2.atlassian.net/browse/DHIS2-15766): Installed app version are not retained after restart of DHIS2**  
Components: _[API] App management_

**[DHIS2-15837](https://dhis2.atlassian.net/browse/DHIS2-15837): dataApprovals/categoryOptionCombos returns no results**  
Components: _[API] Data approval_

**[DHIS2-15531](https://dhis2.atlassian.net/browse/DHIS2-15531): Hibernate error at startup : [org.hisp.dhis.period.PeriodType] : Discriminator: QuarterlyNov**  
Components: _[API] Database migration_

**[DHIS2-15631](https://dhis2.atlassian.net/browse/DHIS2-15631): Decimal places not setting**  
Components: _[API] Data Entry_

**[DHIS2-15362](https://dhis2.atlassian.net/browse/DHIS2-15362): Connection pool exceeded with idle connections by data value set import**  
Components: _[API] Data value set_

**[DHIS2-16138](https://dhis2.atlassian.net/browse/DHIS2-16138): dataValueSet API performance has drastically worsened in v40**  
Components: _[API] Data value set_

**[DHIS2-16159](https://dhis2.atlassian.net/browse/DHIS2-16159): dataValueSet API performance has drastically worsened in v40**  
Components: _[API] Data value set_

**[DHIS2-14836](https://dhis2.atlassian.net/browse/DHIS2-14836): Unexpected change of eventDate we sent to the server**  
Components: _[API] Events_

**[DHIS2-12345](https://dhis2.atlassian.net/browse/DHIS2-12345): CSV import events - UI does not recognize when import is complete**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-15417](https://dhis2.atlassian.net/browse/DHIS2-15417): Org unit email address validation is not consistent between UI and back-end**  
Components: _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-15658](https://dhis2.atlassian.net/browse/DHIS2-15658): /tracker/trackedEntities?order=enrolledAt/createdAtClient/updatedAtClient combined with attribute causes BadSqlGrammarException**  
Components: _[API] Tracker_

**[DHIS2-15102](https://dhis2.atlassian.net/browse/DHIS2-15102): Assign value program rules: Values not stored**  
Components: _[API] Tracker (deprecated)_

**[DHIS2-15883](https://dhis2.atlassian.net/browse/DHIS2-15883): Data Entry App: app crashes if section has no data elements**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-15814](https://dhis2.atlassian.net/browse/DHIS2-15814): Display translated org.unit name for enrollments and events**  
Components: _[App] Capture_

**[DHIS2-15383](https://dhis2.atlassian.net/browse/DHIS2-15383): Align mandatory error behaviour for all value types**  
Components: _[App] Capture_

**[DHIS2-15734](https://dhis2.atlassian.net/browse/DHIS2-15734): Assigned data value to MANDATORY DE is not treated as valid in Capture edit event page**  
Components: _[App] Capture_

**[DHIS2-12489](https://dhis2.atlassian.net/browse/DHIS2-12489): Import/Export app's data export start/end period  picker issue**  
Components: _[App] Core resource_, _[App] Import-export_

**[DHIS2-15381](https://dhis2.atlassian.net/browse/DHIS2-15381): Cannot delete a dashboard after creating it**  
Components: _[App] Dashboard_

**[DHIS2-12937](https://dhis2.atlassian.net/browse/DHIS2-12937): In local server without internet connectivity dashboards are not loading, it only loads if it saved as a "make available for offline"**  
Components: _[App] Dashboard_

**[DHIS2-15771](https://dhis2.atlassian.net/browse/DHIS2-15771): Line listing app duplicates values if option sets share the same code**  
Components: _[App] Line Listing_

**[DHIS2-14030](https://dhis2.atlassian.net/browse/DHIS2-14030): Make "greater than or equal to" render on a single line for conditions**  
Components: _[App] Line Listing_

**[DHIS2-15248](https://dhis2.atlassian.net/browse/DHIS2-15248): LL download does not apply user defined sorting**  
Components: _[App] Line Listing_

**[DHIS2-9717](https://dhis2.atlassian.net/browse/DHIS2-9717): Very long indicator expression descriptions overrun the screen**  
Components: _[App] Maintenance_

**[DHIS2-15416](https://dhis2.atlassian.net/browse/DHIS2-15416): Wrong errror message for invalid email address in organization unit edit page**  
Components: _[App] Maintenance_

**[DHIS2-16078](https://dhis2.atlassian.net/browse/DHIS2-16078): Adding external layer to map results in endless spinner**  
Components: _[App] Maps_

**[DHIS2-15953](https://dhis2.atlassian.net/browse/DHIS2-15953): External basemap not shown on dashboard**  
Components: _[App] Maps_

**[DHIS2-16024](https://dhis2.atlassian.net/browse/DHIS2-16024): map layers cannot be sorted**  
Components: _[App] Maps_

**[DHIS2-15651](https://dhis2.atlassian.net/browse/DHIS2-15651): Standard Reports take Data capture instead of Data output for Org Unit selection parameter**  
**[DHIS2-15875](https://dhis2.atlassian.net/browse/DHIS2-15875): Some pages are not full-height in System Settings app**  
Components: _[App] Settings_

**[DHIS2-15844](https://dhis2.atlassian.net/browse/DHIS2-15844): Expressions with multiple `d2:hasValue`s fails**  
Components: _[App] Tracker capture_

**[DHIS2-15860](https://dhis2.atlassian.net/browse/DHIS2-15860): Impossibility of creating or modifying a user when there are some attributes in the form and these are not completed**  
Components: _[App] User_

**[DHIS2-15485](https://dhis2.atlassian.net/browse/DHIS2-15485): User app: password message for create new user is missing text about special character**  
Components: _[App] User_


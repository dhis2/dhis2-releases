# Patch 2.42.5 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-18494](https://dhis2.atlassian.net/browse/DHIS2-18494): Data integrity check for empty custom data entry forms**  
Components: _[API] Data Integrity_

**[DHIS2-19291](https://dhis2.atlassian.net/browse/DHIS2-19291): Add integrity checks to check sharing of "default"**  
Components: _[API] Data Integrity_

**[DHIS2-19426](https://dhis2.atlassian.net/browse/DHIS2-19426): Support feature: Add function inUserGroup to program rule expression**  
Components: _[API] Program rules_

**[DHIS2-19134](https://dhis2.atlassian.net/browse/DHIS2-19134): Use DHIS2 UI Select component**  
Components: _[App] Capture_

**[DHIS2-19940](https://dhis2.atlassian.net/browse/DHIS2-19940): Implement the "No value" filtering component for all filter types in the working list**  
Components: _[App] Capture_

**[DHIS2-12881](https://dhis2.atlassian.net/browse/DHIS2-12881): Support additional value types for filters in working lists**  
Components: _[App] Capture_

**[DHIS2-21135](https://dhis2.atlassian.net/browse/DHIS2-21135): Improve truncated labels in Working List filter buttons**  
Components: _[App] Capture_

**[DHIS2-18740](https://dhis2.atlassian.net/browse/DHIS2-18740): Update feedback and indicator widgets in the view event page in Event programs**  
Components: _[App] Capture_

**[DHIS2-20774](https://dhis2.atlassian.net/browse/DHIS2-20774): Upgrade WorldPop population dataset to Global2**  
Components: _[App] Import-export_, _[App] Maps_

**[DHIS2-20492](https://dhis2.atlassian.net/browse/DHIS2-20492): Changes to the Scheduler App to support Single Event Data Sync job**  
Components: _[App] Job scheduler_

**[DHIS2-21116](https://dhis2.atlassian.net/browse/DHIS2-21116): Changes to the Scheduler App to support Tracked Entity Data Sync job**  
Components: _[App] Job scheduler_

**[DHIS2-19542](https://dhis2.atlassian.net/browse/DHIS2-19542): Support multiple timeline and split layers**  
Components: _[App] Maps_

**[DHIS2-20942](https://dhis2.atlassian.net/browse/DHIS2-20942): Implement delete avatar/profile picture with new DELETE endpoint on /me**  
Components: _[App] User Profile_

## Bugs

**[DHIS2-21513](https://dhis2.atlassian.net/browse/DHIS2-21513): Tracker Program Indicators don't work after they are defined or edited**  
Components: _[API] Analytics_

**[DHIS2-21440](https://dhis2.atlassian.net/browse/DHIS2-21440): PI disaggregation fails when using date between functions**  
Components: _[API] Analytics_

**[DHIS2-15864](https://dhis2.atlassian.net/browse/DHIS2-15864): EVER: Download fails when data elements have legend sets**  
Components: _[API] Analytics_, _[App] EVER_

**[DHIS2-20929](https://dhis2.atlassian.net/browse/DHIS2-20929): Program Indicator using Yes/No Data element filter produces incorrect value for "No"**  
Components: _[API] Analytics_

**[DHIS2-18928](https://dhis2.atlassian.net/browse/DHIS2-18928): Incorrect analytics for Program Indicators with Program Stage Boundaries**  
Components: _[API] Analytics_

**[DHIS2-21496](https://dhis2.atlassian.net/browse/DHIS2-21496): Analytics fails to update when  "Respect category option start and end date in analytics table export" is on**  
Components: _[API] Data administration_

**[DHIS2-20266](https://dhis2.atlassian.net/browse/DHIS2-20266): Map synchronization and import fails with ConstraintViolationException due to duplicate key**  
Components: _[API] Metadata import-export_, _[API] Synchronization_

**[DHIS2-21364](https://dhis2.atlassian.net/browse/DHIS2-21364): response.responseType unintentionally changed between versions**  
Components: _[API] Metadata import-export_

**[DHIS2-20896](https://dhis2.atlassian.net/browse/DHIS2-20896): Metadata import fails when reimporting a dataSet containing a section with an assigned indicator**  
Components: _[API] Metadata import-export_

**[DHIS2-20312](https://dhis2.atlassian.net/browse/DHIS2-20312): PUT requests to categoryOptionCombinations should be restricted**  
Components: _[API] Metadata import-export_

**[DHIS2-21366](https://dhis2.atlassian.net/browse/DHIS2-21366): Header bar in all apps crashes if an app manifest does not specify an icon**  
Components: _[API] Other_, _[App] Other_

**[DHIS2-21509](https://dhis2.atlassian.net/browse/DHIS2-21509): EventVisualization allows program to be null, on POST**  
Components: _[API] Other_

**[DHIS2-20744](https://dhis2.atlassian.net/browse/DHIS2-20744): Event Hooks API is broken**  
Components: _[API] Other_

**[DHIS2-20859](https://dhis2.atlassian.net/browse/DHIS2-20859): A new route defaults to all public access**  
Components: _[API] Other_

**[DHIS2-20042](https://dhis2.atlassian.net/browse/DHIS2-20042): [API: program stage nextScheduleDate]: cannot associate nextScheduleDate with a program stage via patch**  
Components: _[API] Other_

**[DHIS2-21359](https://dhis2.atlassian.net/browse/DHIS2-21359): ValidatePattern function is not correctly escaping regex expression**  
Components: _[API] Program rules_

**[DHIS2-21115](https://dhis2.atlassian.net/browse/DHIS2-21115): Comparing a string with a number in a program rule condition throws an error**  
Components: _[API] Program rules_

**[DHIS2-19952](https://dhis2.atlassian.net/browse/DHIS2-19952): Scheduled messages by program rule are not sent**  
Components: _[API] Program rules_

**[DHIS2-20458](https://dhis2.atlassian.net/browse/DHIS2-20458): /api/me allows to retrieve userGroup/userRole data even when user has no read access to it**  
Components: _[API] Security_

**[DHIS2-21252](https://dhis2.atlassian.net/browse/DHIS2-21252): Metadata Sync StreamConstraintsException - String value length exceeds the maximum allowed**  
Components: _[API] Synchronization_

**[DHIS2-20137](https://dhis2.atlassian.net/browse/DHIS2-20137): Program notification not triggered when using email DataElement**  
Components: _[API] Tracker_

**[DHIS2-20931](https://dhis2.atlassian.net/browse/DHIS2-20931): Read-only program users can still transfer TEI ownership from enrollment widget**  
Components: _[API] Tracker_

**[DHIS2-20787](https://dhis2.atlassian.net/browse/DHIS2-20787): Incorrect validation for ProgramRuleVariable source types**  
Components: _[API] Tracker_

**[DHIS2-21288](https://dhis2.atlassian.net/browse/DHIS2-21288): d2:inOrgUnitGroup function doesn't work with codes in the server**  
Components: _[API] Tracker_

**[DHIS2-21095](https://dhis2.atlassian.net/browse/DHIS2-21095): Missing org unit scope validation when transferring enrollment**  
Components: _[API] Tracker_

**[DHIS2-21103](https://dhis2.atlassian.net/browse/DHIS2-21103): Missing org unit scope validation when importing enrollments and events**  
Components: _[API] Tracker_

**[DHIS2-20934](https://dhis2.atlassian.net/browse/DHIS2-20934): Data Element of Type "file" in capture app always opens the most recently uploaded file for that data element across all events, instead of the file attached to the specific event being viewed in version 2.42**  
Components: _[API] Tracker_

**[DHIS2-20823](https://dhis2.atlassian.net/browse/DHIS2-20823): Error in /enrollments API endpoint in DHIS2 v2.42**  
Components: _[API] Tracker_

**[DHIS2-11171](https://dhis2.atlassian.net/browse/DHIS2-11171): Filter by OVERDUE events returns events of other statuses (SKIPPED, COMPLETE)**  
Components: _[API] Tracker_

**[DHIS2-20975](https://dhis2.atlassian.net/browse/DHIS2-20975): TEI transfers do not update the TEI updatedAt value**  
Components: _[API] Tracker_

**[DHIS2-20980](https://dhis2.atlassian.net/browse/DHIS2-20980): Update TE date after breaking the glass**  
Components: _[API] Tracker_

**[DHIS2-18406](https://dhis2.atlassian.net/browse/DHIS2-18406): TEA value lastUpdated field is not updated after a change**  
Components: _[API] Tracker_

**[DHIS2-19579](https://dhis2.atlassian.net/browse/DHIS2-19579): Editing Expired Period Fails with 409 Despite F_EDIT_EXPIRED**  
Components: _[API] Tracker_

**[DHIS2-16366](https://dhis2.atlassian.net/browse/DHIS2-16366): Cannot remove the profile picture**  
Components: _[API] User_, _[App] User Profile_

**[DHIS2-20689](https://dhis2.atlassian.net/browse/DHIS2-20689): Allow 1 character for first name when create/update user**  
Components: _[API] User_, _[App] User_

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

**[DHIS2-20786](https://dhis2.atlassian.net/browse/DHIS2-20786): Deleting a single event from event program working list does not have confirm dialog**  
Components: _[App] Capture_

**[DHIS2-20930](https://dhis2.atlassian.net/browse/DHIS2-20930): Working lists without bulk data entry plugin should fill whole page**  
Components: _[App] Capture_

**[DHIS2-19862](https://dhis2.atlassian.net/browse/DHIS2-19862): PRs "trigger for program stage" setting ignored while editing a TEI through the profile widget**  
Components: _[App] Capture_

**[DHIS2-21133](https://dhis2.atlassian.net/browse/DHIS2-21133):  Searching by unique attribute with unsupported type crashes**  
Components: _[App] Capture_

**[DHIS2-21129](https://dhis2.atlassian.net/browse/DHIS2-21129): Working list table use range type after switch to search groups**  
Components: _[App] Capture_

**[DHIS2-21131](https://dhis2.atlassian.net/browse/DHIS2-21131):  Console error when loading working list with empty-only filter attributes**  
Components: _[App] Capture_

**[DHIS2-20494](https://dhis2.atlassian.net/browse/DHIS2-20494): Inherited tracked entity attribute does not populate in the second program after relationship creation, when both programs using the same Tracked Entity Type.**  
Components: _[App] Capture_

**[DHIS2-20938](https://dhis2.atlassian.net/browse/DHIS2-20938): Missing search bar for Option Sets**  
Components: _[App] Capture_

**[DHIS2-20109](https://dhis2.atlassian.net/browse/DHIS2-20109): User without access to stage still sees it in program stage working list dropdown**  
Components: _[App] Capture_

**[DHIS2-19968](https://dhis2.atlassian.net/browse/DHIS2-19968): Capture not rendering right-to-left for all RTL languages**  
Components: _[App] Capture_

**[DHIS2-20631](https://dhis2.atlassian.net/browse/DHIS2-20631): "Edit" button not visible on profile widget when no data exists for Tracked Entity Type**  
Components: _[App] Capture_

**[DHIS2-20719](https://dhis2.atlassian.net/browse/DHIS2-20719): "X" icon stays highlighted after value is cleared**  
Components: _[App] Capture_

**[DHIS2-20777](https://dhis2.atlassian.net/browse/DHIS2-20777): Program rule induced mandatory fields are always invalid**  
Components: _[App] Capture_

**[DHIS2-20532](https://dhis2.atlassian.net/browse/DHIS2-20532): Break the glass feature is broken**  
Components: _[App] Capture_

**[DHIS2-17845](https://dhis2.atlassian.net/browse/DHIS2-17845): Improve UX when users do not have "Uncomplete events" authority**  
Components: _[App] Capture_

**[DHIS2-20652](https://dhis2.atlassian.net/browse/DHIS2-20652): Line list download fails when a boolean field is added**  
Components: _[App] Line Listing_

**[DHIS2-15969](https://dhis2.atlassian.net/browse/DHIS2-15969): Program notification email/SMS checkbox not persisting**  
Components: _[App] Maintenance_

**[DHIS2-9851](https://dhis2.atlassian.net/browse/DHIS2-9851): Short name for Validation rules**  
Components: _[App] Maintenance_

**[DHIS2-19988](https://dhis2.atlassian.net/browse/DHIS2-19988): When sorting the data table, using the > or < operator behaves like >= and <=**  
Components: _[App] Maps_

**[DHIS2-19808](https://dhis2.atlassian.net/browse/DHIS2-19808): Split-maps with two periods don't use all available space**  
Components: _[App] Maps_

**[DHIS2-20425](https://dhis2.atlassian.net/browse/DHIS2-20425): Error on new Maps app version install**  
Components: _[App] Maps_

**[DHIS2-20684](https://dhis2.atlassian.net/browse/DHIS2-20684): EE layers: Error with dates**  
Components: _[App] Maps_

**[DHIS2-20861](https://dhis2.atlassian.net/browse/DHIS2-20861): Program stage notification translations not respected**  
Components: _[App] Translations_


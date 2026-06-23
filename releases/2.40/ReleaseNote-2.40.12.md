# Patch 2.40.12 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-19134](https://dhis2.atlassian.net/browse/DHIS2-19134): Use DHIS2 UI Select component**  
Components: _[App] Capture_

**[DHIS2-21135](https://dhis2.atlassian.net/browse/DHIS2-21135): Improve truncated labels in Working List filter buttons**  
Components: _[App] Capture_

**[DHIS2-20774](https://dhis2.atlassian.net/browse/DHIS2-20774): Upgrade WorldPop population dataset to Global2**  
Components: _[App] Import-export_, _[App] Maps_

**[DHIS2-19542](https://dhis2.atlassian.net/browse/DHIS2-19542): Support multiple timeline and split layers**  
Components: _[App] Maps_

**[DHIS2-20942](https://dhis2.atlassian.net/browse/DHIS2-20942): Implement delete avatar/profile picture with new DELETE endpoint on /me**  
Components: _[App] User Profile_

## Bugs

**[DHIS2-15864](https://dhis2.atlassian.net/browse/DHIS2-15864): EVER: Download fails when data elements have legend sets**  
Components: _[API] Analytics_, _[App] EVER_

**[DHIS2-19473](https://dhis2.atlassian.net/browse/DHIS2-19473): Duplicated Analytics values when using Continuous Analytics job**  
Components: _[API] Analytics_

**[DHIS2-20929](https://dhis2.atlassian.net/browse/DHIS2-20929): Program Indicator using Yes/No Data element filter produces incorrect value for "No"**  
**[DHIS2-18928](https://dhis2.atlassian.net/browse/DHIS2-18928): Incorrect analytics for Program Indicators with Program Stage Boundaries**  
Components: _[API] Analytics_

**[DHIS2-20859](https://dhis2.atlassian.net/browse/DHIS2-20859): A new route defaults to all public access**  
Components: _[API] Other_

**[DHIS2-20042](https://dhis2.atlassian.net/browse/DHIS2-20042): [API: program stage nextScheduleDate]: cannot associate nextScheduleDate with a program stage via patch**  
Components: _[API] Other_

**[DHIS2-21115](https://dhis2.atlassian.net/browse/DHIS2-21115): Comparing a string with a number in a program rule condition throws an error**  
Components: _[API] Program rules_

**[DHIS2-19952](https://dhis2.atlassian.net/browse/DHIS2-19952): Scheduled messages by program rule are not sent**  
Components: _[API] Program rules_

**[DHIS2-20137](https://dhis2.atlassian.net/browse/DHIS2-20137): Program notification not triggered when using email DataElement**  
Components: _[API] Tracker_

**[DHIS2-20931](https://dhis2.atlassian.net/browse/DHIS2-20931): Read-only program users can still transfer TEI ownership from enrollment widget**  
Components: _[API] Tracker_

**[DHIS2-20787](https://dhis2.atlassian.net/browse/DHIS2-20787): Incorrect validation for ProgramRuleVariable source types**  
Components: _[API] Tracker_

**[DHIS2-21095](https://dhis2.atlassian.net/browse/DHIS2-21095): Missing org unit scope validation when transferring enrollment**  
Components: _[API] Tracker_

**[DHIS2-21041](https://dhis2.atlassian.net/browse/DHIS2-21041): tracker/events API returns SQL syntax error when using totalPages=true together with order and filter on data elements**  
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

**[DHIS2-8469](https://dhis2.atlassian.net/browse/DHIS2-8469): Error completing data set when a notification is configured to send an email**  
Components: _[App] Aggregate Data Entry_, _[App] Data entry_

**[DHIS2-8814](https://dhis2.atlassian.net/browse/DHIS2-8814): Table in custom form overflows container with no scrollbar**  
Components: _[App] Capture_

**[DHIS2-20032](https://dhis2.atlassian.net/browse/DHIS2-20032): Last updated in enrollment widget is not automatically refreshed when updating dates**  
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

**[DHIS2-15969](https://dhis2.atlassian.net/browse/DHIS2-15969): Program notification email/SMS checkbox not persisting**  
Components: _[App] Maintenance_

**[DHIS2-9851](https://dhis2.atlassian.net/browse/DHIS2-9851): Short name for Validation rules**  
Components: _[App] Maintenance_

**[DHIS2-19808](https://dhis2.atlassian.net/browse/DHIS2-19808): Split-maps with two periods don't use all available space**  
Components: _[App] Maps_

**[DHIS2-20425](https://dhis2.atlassian.net/browse/DHIS2-20425): Error on new Maps app version install**  
Components: _[App] Maps_

**[DHIS2-20861](https://dhis2.atlassian.net/browse/DHIS2-20861): Program stage notification translations not respected**  
Components: _[App] Translations_


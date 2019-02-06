# Patch 2.31.1 Release Note

## Features

**[DHIS2-3250](https://jira.dhis2.org/browse/DHIS2-3250): Remove the Jiggle from Unique Object Attributes**
>The Edit dialogs in the Maintenane app are no longer resized due to field validation messages being displayed. This means the fields in the dialogs remain in a fixed position and do not jump around during editing.

**[DHIS2-3706](https://jira.dhis2.org/browse/DHIS2-3706): Add Form-name to Tracked Entity Attributes**
>
>Tracked Entity Attributes now include the *Form Name* "name" attribute in addition to *Name* and *Short Name*, which can be configured in the same way as the existing feature for Data Elements.

**[DHIS2-4233](https://jira.dhis2.org/browse/DHIS2-4233): Add support for attachments in messages**
>The Messaging app now supports the ability to upload attachments to messages.

**[DHIS2-4875](https://jira.dhis2.org/browse/DHIS2-4875): System setting for SQL_VIEW_MAX_LIMIT**
> "Maximum number of SQL view records" is now configurable via *System Settings \> General Settings*
>Options are:
>- Unlimited
>- 50 000
>- 100 000
>- 200 000

**[DHIS2-5120](https://jira.dhis2.org/browse/DHIS2-5120): Edit user attributes from the edit-user form**
>It is now possible to edit attributeValues from the edit-user form and edit-user-group form in the new Users app.
>Attributes can be based on *optionsSets*, or on *ValueTypes*.


**[DHIS2-5424](https://jira.dhis2.org/browse/DHIS2-5424): Add event to a non repetable Program Stage should not be allowed in Tabular Data Entry**
>The new event button is now disabled in Tabular data entry when the program stage is not repeatable.


**[DHIS2-5464](https://jira.dhis2.org/browse/DHIS2-5464): Add upgradescript for removing deprecated status property for file resource**
>Remove the deprecated column "storagestatus" from the fileresource table. This property is no longer persisted.
>This upgrade requires backport to 2.29-2.31


**[DHIS2-5477](https://jira.dhis2.org/browse/DHIS2-5477): Show relative period data from interpretations**
>Relative period data is now displayed on the active Map when an interpretation is selected from that period.
>This is similar to functionality existing in the Data Visualizer.

**[DHIS2-5493](https://jira.dhis2.org/browse/DHIS2-5493): Orgunit selector style fixes**
>The styling of the Organisation Units selection dialog (e.g. in Data Visualizer) has been improved. 


**[DHIS2-5495](https://jira.dhis2.org/browse/DHIS2-5495): Orgunit selector must respect display name property**
>The display name user setting is now taken into account when showing orgunit names in the tree.
>**!!! THIS IS NOT WORKING IN MY TEST! - PHIL !!!**


**[DHIS2-5552](https://jira.dhis2.org/browse/DHIS2-5552): Change the program placeholder for event data items and program indicators**
>The prompt for selecting a program in the data selection dialog for the Data Visualizer has been corrected.


**[DHIS2-5586](https://jira.dhis2.org/browse/DHIS2-5586): New flag in dhis2 for Guatemala**
>The Guatemala flag is now available from *System Settings \> Appearance*


**[DHIS2-5727](https://jira.dhis2.org/browse/DHIS2-5727): Add Mauritius Flag to system Flags**
>The Mauritius flag is now available from *System Settings \> Appearance*


## Bugs

**[DHIS2-3989](https://jira.dhis2.org/browse/DHIS2-3989): Cannot sort an event report by event date or organisation unit (Regression)**
_[**API**] Analytics_, _[**App**] Event reports_ 

**[DHIS2-4034](https://jira.dhis2.org/browse/DHIS2-4034): Event/Tracker Queries and Update statements taking too long to execute**
_[API] Events_ 

**[DHIS2-5826](https://jira.dhis2.org/browse/DHIS2-5826): Solve problem with duplicate methods in JacksonEventService and AbstractEventService classes**
_[API] Tracker_, _Backend_ 

**[DHIS2-5333](https://jira.dhis2.org/browse/DHIS2-5333): Event import too slow**
_[API] Tracker_ 

**[DHIS2-5471](https://jira.dhis2.org/browse/DHIS2-5471): Combobox editable even if the event is completed**
_[API] Tracker_ 

**[DHIS2-5591](https://jira.dhis2.org/browse/DHIS2-5591): Failed to update the event in the server An error occurred, please check import summary.**
_[API] Tracker_ 

**[DHIS2-5607](https://jira.dhis2.org/browse/DHIS2-5607): Hiding option groups not working for Event programs**
_[API] Tracker_, _[App] Event capture_ 

**[DHIS2-4687](https://jira.dhis2.org/browse/DHIS2-4687): Household Location is not able to be used in GIS**
_[API] Tracker_, _[App] Maps_ 

**[DHIS2-5474](https://jira.dhis2.org/browse/DHIS2-5474): On registering a new patient using unique ID, shows patient as already existing when it isn't**
_[API] Tracker_ 

**[DHIS2-5598](https://jira.dhis2.org/browse/DHIS2-5598): Scroll bar shown for the  "Name" and "Add description" when Creating/editing a dashboard**
_[App] Dashboard_ 

**[DHIS2-5465](https://jira.dhis2.org/browse/DHIS2-5465): Untranslated app search placeholder in apps**
_[App] Data administration_, _[App] Settings_ 

**[DHIS2-5893](https://jira.dhis2.org/browse/DHIS2-5893): Unable to select multiple items in dimension list using ctrl button on Windows**
_[App] Data visualizer_ 

**[DHIS2-5723](https://jira.dhis2.org/browse/DHIS2-5723): Attributes not showing up in data visualizer**
_[App] Data visualizer_ 

**[DHIS2-5722](https://jira.dhis2.org/browse/DHIS2-5722): Program indicators not showing up in data visualizer**
_[App] Data visualizer_ 

**[DHIS2-5436](https://jira.dhis2.org/browse/DHIS2-5436): Charts are not shown in visualizer when navigating from dashboard interpretations**
_[App] Data visualizer_ 

**[DHIS2-5434](https://jira.dhis2.org/browse/DHIS2-5434): When navigating to interpretation, original chart is briefly displayed**
_[App] Data visualizer_ 

**[DHIS2-5191](https://jira.dhis2.org/browse/DHIS2-5191): Improve layout validation**
_[App] Data visualizer_ 

**[DHIS2-5565](https://jira.dhis2.org/browse/DHIS2-5565): Event coordinates not saving**
_[App] Event capture_ 

**[DHIS2-5595](https://jira.dhis2.org/browse/DHIS2-5595): Object type is missing in metadata dependency export**
_[App] Import-export_ 

**[DHIS2-5099](https://jira.dhis2.org/browse/DHIS2-5099): DHIS2 Metadata Import Issue with CSV**
_[App] Import-export_ 

**[DHIS2-5677](https://jira.dhis2.org/browse/DHIS2-5677): Can't import GML File to DHIS2**
_[API] Metadata import-export_, _[App] Import-export_ 

**[DHIS2-4285](https://jira.dhis2.org/browse/DHIS2-4285): Unable to import json into import/export app**
_[App] Import-export_ 

**[DHIS2-5596](https://jira.dhis2.org/browse/DHIS2-5596): Object type appears twice in Metadata Import**
_[App] Import-export_ 

**[DHIS2-5502](https://jira.dhis2.org/browse/DHIS2-5502): Program rule list program stages in other event programs**
_[App] Maintenance_ 

**[DHIS2-5359](https://jira.dhis2.org/browse/DHIS2-5359): Indicator Group Sets - code field not exposed in UI**
_[App] Maintenance_ 

**[DHIS2-5462](https://jira.dhis2.org/browse/DHIS2-5462): Cancel button in maintenance app icon dialog has no effect**
_[App] Maintenance_ 

**[DHIS2-5531](https://jira.dhis2.org/browse/DHIS2-5531): Icon selection is not showing correctly even after choosing the cancel option**
_[App] Maintenance_ 

**[DHIS2-5556](https://jira.dhis2.org/browse/DHIS2-5556): Unique validity for attributes is not working correctly for attributes with optionset**
_[App] Maintenance_ 

**[DHIS2-5318](https://jira.dhis2.org/browse/DHIS2-5318): Strange behaviour in Option Set color selection**
_[App] Maintenance_ 

**[DHIS2-5487](https://jira.dhis2.org/browse/DHIS2-5487): Locale filter is broken**
_[App] Maintenance_ 

**[DHIS2-5478](https://jira.dhis2.org/browse/DHIS2-5478): Issues with download map styles**
_[App] Maps_ 

**[DHIS2-5457](https://jira.dhis2.org/browse/DHIS2-5457): Mapping Tracked Entity Attributes is not working for thematic layers**
_[App] Maps_ 

**[DHIS2-5485](https://jira.dhis2.org/browse/DHIS2-5485): Send message from user-app**
_[App] Messaging_, _[App] User_ 

**[DHIS2-5050](https://jira.dhis2.org/browse/DHIS2-5050): Measure criteria does not seem to work with indicators**
_[App] Pivot table_ 

**[DHIS2-5571](https://jira.dhis2.org/browse/DHIS2-5571): settings key input fields should be password field**
_[App] Settings_ 

**[DHIS2-4460](https://jira.dhis2.org/browse/DHIS2-4460): Tracker dashboard - profile "Edit" hyperlink changing to "Show all"**
_[App] Tracker capture_ 

**[DHIS2-5519](https://jira.dhis2.org/browse/DHIS2-5519): Tracker Dashboard - boolean data elements not shaded when stage completed**
_[App] Tracker capture_ 

**[DHIS2-5324](https://jira.dhis2.org/browse/DHIS2-5324): Register one woman in multiple programs**
_[App] Tracker capture_ 

**[DHIS2-5467](https://jira.dhis2.org/browse/DHIS2-5467): Complete enrolment is allowed when having uncompleted events**
_[App] Tracker capture_ 

**[DHIS2-5511](https://jira.dhis2.org/browse/DHIS2-5511): Unable to create user group**
_[App] User_ 

**[DHIS2-4659](https://jira.dhis2.org/browse/DHIS2-4659): User administration does not support multiple OU roots**
_[App] User_ 

**[DHIS2-5579](https://jira.dhis2.org/browse/DHIS2-5579): Invalid Db Credentials shows "postgis not installed" error**
_Backend_ 

**[DHIS2-5524](https://jira.dhis2.org/browse/DHIS2-5524): SQL is not honoring existing search_path**
_Backend_ 

**[DHIS2-5523](https://jira.dhis2.org/browse/DHIS2-5523): Redis service not compatible with AWS ElastiCache**
_Backend_ 

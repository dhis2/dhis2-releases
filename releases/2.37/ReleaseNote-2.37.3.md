# Patch 2.37.3 Release Note

- [Features](#features)
- [Bugs](#bugs)

## Features

**[DHIS2-12498](https://jira.dhis2.org/browse/DHIS2-12498): System setting for including zero values in analytics tables**  
Components: _[API] Analytics_

**[DHIS2-12295](https://jira.dhis2.org/browse/DHIS2-12295): Backend rule-engine updates for ValueType parameter**  
Components: _[API] Program rules_

**[DHIS2-12241](https://jira.dhis2.org/browse/DHIS2-12241): Optimize performance for ouMode event queries**  
Components: _[API] Tracker_

**[DHIS2-11892](https://jira.dhis2.org/browse/DHIS2-11892): [ Reserved Values ] - Improve data base access while generating random values**  
Components: _[API] Tracker_

**[DHIS2-11589](https://jira.dhis2.org/browse/DHIS2-11589): Reminder emails for user account disabling**  
Components: _[API] User_, _[App] User_

**[DHIS2-5345](https://jira.dhis2.org/browse/DHIS2-5345): Display description/URL for data elements in Capture app**  
Components: _[App] Capture_

**[DHIS2-11400](https://jira.dhis2.org/browse/DHIS2-11400): Add tab bar to switch between "Report event" and "schedule"**  
**[DHIS2-11823](https://jira.dhis2.org/browse/DHIS2-11823): Allow org unit profile to be opened from the data table**  
Components: _[App] Maps_

**[DHIS2-12212](https://jira.dhis2.org/browse/DHIS2-12212): Basic offline support for DHIS2 Maps**  
Components: _[App] Maps_

**[DHIS2-12515](https://jira.dhis2.org/browse/DHIS2-12515): System setting for including zero value in analytics tables**  
Components: _[App] Settings_

**[DHIS2-12021](https://jira.dhis2.org/browse/DHIS2-12021): Remove verbs from left-side menu in user profile**  
Components: _[App] User Profile_

## Bugs

**[DHIS2-12216](https://jira.dhis2.org/browse/DHIS2-12216): [A]Event report download response has wrong content-disposition header - backport**  
Components: _[API] Analytics_

**[DHIS2-12237](https://jira.dhis2.org/browse/DHIS2-12237): Grid Caching is not properly used in analytics**  
Components: _[API] Analytics_, _[App] Event reports_

**[DHIS2-12496](https://jira.dhis2.org/browse/DHIS2-12496): periodOffset misses some data**  
Components: _[API] Analytics_

**[DHIS2-12258](https://jira.dhis2.org/browse/DHIS2-12258): periodOffset should be only for indicator expressions**  
Components: _[API] Analytics_

**[DHIS2-12278](https://jira.dhis2.org/browse/DHIS2-12278): Indicator coGroup: includes too many option combos**  
Components: _[API] Analytics_

**[DHIS2-11769](https://jira.dhis2.org/browse/DHIS2-11769): outputOrgUnitIdScheme not working on /analytics/dataValueSet endpoint**  
Components: _[API] Analytics_

**[DHIS2-12277](https://jira.dhis2.org/browse/DHIS2-12277): DHIS2 Can’t finish the analytic in version 2.37.1**  
Components: _[API] Analytics_

**[DHIS2-11997](https://jira.dhis2.org/browse/DHIS2-11997): LAST_10_YEARS missing name in metadata response**  
Components: _[API] Analytics_

**[DHIS2-11981](https://jira.dhis2.org/browse/DHIS2-11981): Unapprove data is incorrectly allowed**  
Components: _[API] Data approval_

**[DHIS2-11857](https://jira.dhis2.org/browse/DHIS2-11857): Sporadic error when loading data approvals**  
Components: _[API] Data approval_

**[DHIS2-12360](https://jira.dhis2.org/browse/DHIS2-12360): ADX Export excludes a period ending on the requested end date**  
Components: _[API] Data value set_

**[DHIS2-9313](https://jira.dhis2.org/browse/DHIS2-9313): ADX export of data value sets does not respect the same set of parameters as the other formats**  
Components: _[API] Data value set_

**[DHIS2-11624](https://jira.dhis2.org/browse/DHIS2-11624): Inconsistent behaviour (api/UI) - aggregate dataElement Values**  
Components: _[API] Data value set_

**[DHIS2-11921](https://jira.dhis2.org/browse/DHIS2-11921): dataValueSets endpoint broken for user group access to (attribute) category option**  
Components: _[API] Data value set_

**[DHIS2-12222](https://jira.dhis2.org/browse/DHIS2-12222): Upgrading instance from 2.35.8 to 2.36.4 fails with flyway error**  
Components: _[API] Database migration_

**[DHIS2-12494](https://jira.dhis2.org/browse/DHIS2-12494): The endpoint "/events" does not include results in select ou when ouMode is DESCENDANTS or CHILDREN**  
Components: _[API] Events_

**[DHIS2-12061](https://jira.dhis2.org/browse/DHIS2-12061): Event/tracker entries don't respect AttributeOption start & end dates**  
Components: _[API] Events_

**[DHIS2-12146](https://jira.dhis2.org/browse/DHIS2-12146): Executing jobs uses GET request**  
Components: _[API] Job scheduler_

**[DHIS2-12129](https://jira.dhis2.org/browse/DHIS2-12129): Mandatory program stage to program association not enforced**  
Components: _[API] Metadata import-export_

**[DHIS2-10323](https://jira.dhis2.org/browse/DHIS2-10323): Search does not work when using Cyrillic characters in Maintenance**  
Components: _[API] Metadata import-export_, _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-12293](https://jira.dhis2.org/browse/DHIS2-12293): ProgramSection is not shown in Translation App**  
Components: _[API] Metadata model_

**[DHIS2-12168](https://jira.dhis2.org/browse/DHIS2-12168): Gist API: String length (size) filter does not work with specific length**  
Components: _[API] Metadata model_

**[DHIS2-11932](https://jira.dhis2.org/browse/DHIS2-11932): SQL variables in SQL view do not accept accented characters**  
Components: _[API] Other_

**[DHIS2-12008](https://jira.dhis2.org/browse/DHIS2-12008): Superusers cannot update sharing for dashboards which are not already shared with them**  
Components: _[API] Other_

**[DHIS2-11946](https://jira.dhis2.org/browse/DHIS2-11946): SQL queries with variables names with accented characters will not return error when variable is not provided in query**  
Components: _[API] Other_

**[DHIS2-11990](https://jira.dhis2.org/browse/DHIS2-11990): Null pointer exception in /authorities**  
Components: _[API] Other_

**[DHIS2-12091](https://jira.dhis2.org/browse/DHIS2-12091): Predictors in a job don't run in a predictable order**  
Components: _[API] Predictors_

**[DHIS2-12164](https://jira.dhis2.org/browse/DHIS2-12164): Predictors fail on some systems on aggregate data input**  
Components: _[API] Predictors_

**[DHIS2-12614](https://jira.dhis2.org/browse/DHIS2-12614): sendMessage program rule not triggering**  
Components: _[API] Program rules_

**[DHIS2-12033](https://jira.dhis2.org/browse/DHIS2-12033): Program rules that assign values to calculated PRV fail to import**  
Components: _[API] Program rules_

**[DHIS2-12259](https://jira.dhis2.org/browse/DHIS2-12259): Analytics Table Runtime not formatted**  
Components: _[API] System configuration_

**[DHIS2-7107](https://jira.dhis2.org/browse/DHIS2-7107): Date and time data type doesn't display in event reports**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-11789](https://jira.dhis2.org/browse/DHIS2-11789): NTI: tracked entity attribute value history is not stored**  
Components: _[API] Tracker_

**[DHIS2-11979](https://jira.dhis2.org/browse/DHIS2-11979): NTI: slow imports and high memory allocation when posting full payloads**  
Components: _[API] Tracker_

**[DHIS2-12181](https://jira.dhis2.org/browse/DHIS2-12181): Adding enrollment using orgUnitIdScheme=ATTRIBUTE**  
Components: _[API] Tracker_

**[DHIS2-11893](https://jira.dhis2.org/browse/DHIS2-11893): Legacy Tei fetching causes performance issues**  
Components: _[API] Tracker_

**[DHIS2-11557](https://jira.dhis2.org/browse/DHIS2-11557): Endpoint /trackedEntityInstance does not include nested enrollments if program shared at user level**  
Components: _[API] Tracker_

**[DHIS2-11752](https://jira.dhis2.org/browse/DHIS2-11752): Adhoc connections are created outside datasource**  
Components: _[API] Tracker_

**[DHIS2-11973](https://jira.dhis2.org/browse/DHIS2-11973): NTI: time should be ignored when validating enrollment date**  
Components: _[API] Tracker_

**[DHIS2-12107](https://jira.dhis2.org/browse/DHIS2-12107): Using Event data element filters for the event API returns an error**  
Components: _[API] Tracker_

**[DHIS2-12123](https://jira.dhis2.org/browse/DHIS2-12123): Event import for new tracker API crashes when program stage and not program is specified**  
Components: _[API] Tracker_

**[DHIS2-12162](https://jira.dhis2.org/browse/DHIS2-12162): NPE when importing TEI**  
Components: _[API] Tracker_

**[DHIS2-12083](https://jira.dhis2.org/browse/DHIS2-12083): Multiple translations for the same "locale" and "property"**  
Components: _[API] Translations_, _[App] Translations_

**[DHIS2-11317](https://jira.dhis2.org/browse/DHIS2-11317): userLookup does not return all the users in the system**  
Components: _[API] User_

**[DHIS2-12172](https://jira.dhis2.org/browse/DHIS2-12172): V{orgunit_code} not being pulled when OUs are searched for in Capture App**  
Components: _[App] Capture_

**[DHIS2-11804](https://jira.dhis2.org/browse/DHIS2-11804): Add missing dependencies to the rules engine execution [edit enrollment event page]**  
Components: _[App] Capture_

**[DHIS2-12121](https://jira.dhis2.org/browse/DHIS2-12121): Warnings are not displayed on data elements**  
Components: _[App] Capture_

**[DHIS2-12134](https://jira.dhis2.org/browse/DHIS2-12134): New and scheduled events don't show up in the Stages and Events Widget**  
Components: _[App] Capture_

**[DHIS2-12480](https://jira.dhis2.org/browse/DHIS2-12480): Unable to download data in capture app**  
Components: _[App] Capture_

**[DHIS2-12473](https://jira.dhis2.org/browse/DHIS2-12473): Calculated program rule variables are not working**  
Components: _[App] Capture_

**[DHIS2-12324](https://jira.dhis2.org/browse/DHIS2-12324): Date in "Selected enrollment" in Locked selector should be EnrollmentDate**  
Components: _[App] Capture_

**[DHIS2-12077](https://jira.dhis2.org/browse/DHIS2-12077): Non-translatable fields in Capture (2.37)**  
Components: _[App] Capture_

**[DHIS2-12112](https://jira.dhis2.org/browse/DHIS2-12112): Program rules not working for the new events created in capture app**  
Components: _[App] Capture_

**[DHIS2-11837](https://jira.dhis2.org/browse/DHIS2-11837): Users are not prompted with the message when saving the form without having values on mandatory datalement**  
Components: _[App] Capture_

**[DHIS2-12125](https://jira.dhis2.org/browse/DHIS2-12125): Text for showing to see all records accessible to you in xxx prpogram is not shown for the program with category options**  
Components: _[App] Capture_

**[DHIS2-12124](https://jira.dhis2.org/browse/DHIS2-12124): Catergory options selection seems not be required for showing the list of events**  
Components: _[App] Capture_

**[DHIS2-12139](https://jira.dhis2.org/browse/DHIS2-12139): Potential duplicates open in tracker capture instead of capture**  
Components: _[App] Capture_

**[DHIS2-10607](https://jira.dhis2.org/browse/DHIS2-10607): d2:length() only works on number variables**  
Components: _[App] Capture_

**[DHIS2-12126](https://jira.dhis2.org/browse/DHIS2-12126): Error message when trying to click show all events from view event page for the program with category options**  
Components: _[App] Capture_

**[DHIS2-11797](https://jira.dhis2.org/browse/DHIS2-11797): App crashes when saving new enrollment event**  
Components: _[App] Capture_

**[DHIS2-11084](https://jira.dhis2.org/browse/DHIS2-11084): Tracked entity instance search: convert values based on valueType when sending the api request**  
Components: _[App] Capture_

**[DHIS2-11745](https://jira.dhis2.org/browse/DHIS2-11745): New events are not shown under the stages events lists**  
Components: _[App] Capture_

**[DHIS2-11791](https://jira.dhis2.org/browse/DHIS2-11791): Comments are not shown in edit event page**  
Components: _[App] Capture_

**[DHIS2-11815](https://jira.dhis2.org/browse/DHIS2-11815): Investigate and fix random crashes in enrollment pages**  
Components: _[App] Capture_

**[DHIS2-11830](https://jira.dhis2.org/browse/DHIS2-11830): Auto-select enrollment when opening enrollment dashboard**  
Components: _[App] Capture_

**[DHIS2-11832](https://jira.dhis2.org/browse/DHIS2-11832): Capture app should handle special characters**  
Components: _[App] Capture_

**[DHIS2-11986](https://jira.dhis2.org/browse/DHIS2-11986): Error opening enrollment overview page**  
Components: _[App] Capture_

**[DHIS2-12122](https://jira.dhis2.org/browse/DHIS2-12122): Events that are due today are showed as overdue**  
Components: _[App] Capture_

**[DHIS2-11822](https://jira.dhis2.org/browse/DHIS2-11822): Capture: spinner in the TEI selection when TEI has less than two TET attributes**  
Components: _[App] Capture_

**[DHIS2-11924](https://jira.dhis2.org/browse/DHIS2-11924): Missing names when map analytical objects are loaded by dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-12518](https://jira.dhis2.org/browse/DHIS2-12518): 500 error on some saved charts on Data Visualizer app and "Visits ANC" and "Nutrition" Dashboards**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-10671](https://jira.dhis2.org/browse/DHIS2-10671): Buffer layer map is not suporting "View as table/chart" in dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-11647](https://jira.dhis2.org/browse/DHIS2-11647): Show more/fewer dashboards tooltip not visible when bar expanded**  
Components: _[App] Dashboard_

**[DHIS2-11768](https://jira.dhis2.org/browse/DHIS2-11768): Disable layout buttons in edit mode when offline**  
Components: _[App] Dashboard_

**[DHIS2-11896](https://jira.dhis2.org/browse/DHIS2-11896): Data value history chart in data entry is broken**  
Components: _[App] Data entry_

**[DHIS2-9477](https://jira.dhis2.org/browse/DHIS2-9477): DE type Number displaying zero instead of null value**  
Components: _[App] Event reports_

**[DHIS2-12262](https://jira.dhis2.org/browse/DHIS2-12262): XML data import causes 406 response**  
Components: _[App] Import-export_

**[DHIS2-7931](https://jira.dhis2.org/browse/DHIS2-7931): ValidationStrategy dropdown for programs doesn't change value**  
Components: _[App] Maintenance_

**[DHIS2-12169](https://jira.dhis2.org/browse/DHIS2-12169): In some time zones map layer cards show the wrong date**  
Components: _[App] Maps_

**[DHIS2-12504](https://jira.dhis2.org/browse/DHIS2-12504): Error not shown when org unit selection for Earth Engine layer is invalid**  
Components: _[App] Maps_

**[DHIS2-12506](https://jira.dhis2.org/browse/DHIS2-12506): Avoid "null people per hectare" for population layers**  
Components: _[App] Maps_

**[DHIS2-12475](https://jira.dhis2.org/browse/DHIS2-12475): Earth Engine layers: Better handling when no aggregation types or org units are selected**  
Components: _[App] Maps_

**[DHIS2-11934](https://jira.dhis2.org/browse/DHIS2-11934): Typing start/end dates is not working properly**  
Components: _[App] Maps_

**[DHIS2-11919](https://jira.dhis2.org/browse/DHIS2-11919): Event layer does not restore start/end dates**  
Components: _[App] Maps_

**[DHIS2-11920](https://jira.dhis2.org/browse/DHIS2-11920): Event layer that is styled by data element crashes when changing program**  
Components: _[App] Maps_

**[DHIS2-11922](https://jira.dhis2.org/browse/DHIS2-11922): Layer name is not showing in map legend on dashboard**  
Components: _[App] Maps_

**[DHIS2-11970](https://jira.dhis2.org/browse/DHIS2-11970): App crash in style tab for thematic layer**  
Components: _[App] Maps_

**[DHIS2-11537](https://jira.dhis2.org/browse/DHIS2-11537): Reports App does not respect user org unit**  
Components: _[App] Reports_

**[DHIS2-10793](https://jira.dhis2.org/browse/DHIS2-10793): Tracker Capture case listing - lots of lookup errors in console**  
Components: _[App] Tracker capture_

**[DHIS2-12213](https://jira.dhis2.org/browse/DHIS2-12213): Error loading data entry form on slow connectivity**  
Components: _[App] Tracker capture_

**[DHIS2-12501](https://jira.dhis2.org/browse/DHIS2-12501): "Add new" in Enrollment widget in Tracker Capture does not work**  
Components: _[App] Tracker capture_

**[DHIS2-11468](https://jira.dhis2.org/browse/DHIS2-11468): Event-Tracker bidirectional event link from tracker not working**  
Components: _[App] Tracker capture_

**[DHIS2-12068](https://jira.dhis2.org/browse/DHIS2-12068): Tracker capture makes multiple requests to /generate for the same attribute**  
Components: _[App] Tracker capture_

**[DHIS2-8734](https://jira.dhis2.org/browse/DHIS2-8734): Yes/No (valuetype) not translated in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-9345](https://jira.dhis2.org/browse/DHIS2-9345): Tracker Capture - IDBObjectStore error when opening COMPLETED enrollment case**  
Components: _[App] Tracker capture_

**[DHIS2-12022](https://jira.dhis2.org/browse/DHIS2-12022): Remove heavy queries from reports functionality in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-12040](https://jira.dhis2.org/browse/DHIS2-12040): Events are not shown under program statistics report**  
Components: _[App] Tracker capture_

**[DHIS2-12009](https://jira.dhis2.org/browse/DHIS2-12009): More lax validation for allowed IPs/referrers in personal access tokens page**  
Components: _[App] User Profile_


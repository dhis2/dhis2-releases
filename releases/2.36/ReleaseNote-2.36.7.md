# Patch 2.36.7 Release Note

- [Features](#features)
- [Bugs](#bugs)

## Features

**[DHIS2-11305](https://jira.dhis2.org/browse/DHIS2-11305): Improve Reserved Values generation**  
Components: _[API] Tracker_

**[DHIS2-11892](https://jira.dhis2.org/browse/DHIS2-11892): [ Reserved Values ] - Improve data base access while generating random values**  
Components: _[API] Tracker_

**[DHIS2-11574](https://jira.dhis2.org/browse/DHIS2-11574): Translatable properties for Predictor and Expression**  
Components: _[API] Translations_

**[DHIS2-12212](https://jira.dhis2.org/browse/DHIS2-12212): Basic offline support for DHIS2 Maps**  
Components: _[App] Maps_

## Bugs

**[DHIS2-11769](https://jira.dhis2.org/browse/DHIS2-11769): outputOrgUnitIdScheme not working on /analytics/dataValueSet endpoint**  
Components: _[API] Analytics_

**[DHIS2-12258](https://jira.dhis2.org/browse/DHIS2-12258): periodOffset should be only for indicator expressions**  
Components: _[API] Analytics_

**[DHIS2-11981](https://jira.dhis2.org/browse/DHIS2-11981): Unapprove data is incorrectly allowed**  
Components: _[API] Data approval_

**[DHIS2-11857](https://jira.dhis2.org/browse/DHIS2-11857): Sporadic error when loading data approvals**  
Components: _[API] Data approval_

**[DHIS2-11858](https://jira.dhis2.org/browse/DHIS2-11858): Internal server error when loading a data set report**  
Components: _[API] Data approval_, _[API] Other_

**[DHIS2-11624](https://jira.dhis2.org/browse/DHIS2-11624): Inconsistent behaviour (api/UI) - aggregate dataElement Values**  
Components: _[API] Data value set_

**[DHIS2-11921](https://jira.dhis2.org/browse/DHIS2-11921): dataValueSets endpoint broken for user group access to (attribute) category option**  
Components: _[API] Data value set_

**[DHIS2-12222](https://jira.dhis2.org/browse/DHIS2-12222): Upgrading instance from 2.35.8 to 2.36.4 fails with flyway error**  
Components: _[API] Database migration_

**[DHIS2-12114](https://jira.dhis2.org/browse/DHIS2-12114): Capture app lists events from other org units than the chosen org unit**  
Components: _[API] Events_

**[DHIS2-12061](https://jira.dhis2.org/browse/DHIS2-12061): Event/tracker entries don't respect AttributeOption start & end dates**  
Components: _[API] Events_

**[DHIS2-11541](https://jira.dhis2.org/browse/DHIS2-11541): Event collection endpoint does not expose relationships**  
Components: _[API] Events_

**[DHIS2-12146](https://jira.dhis2.org/browse/DHIS2-12146): Executing jobs uses GET request**  
Components: _[API] Job scheduler_

**[DHIS2-10323](https://jira.dhis2.org/browse/DHIS2-10323): Search does not work when using Cyrillic characters in Maintenance**  
Components: _[API] Metadata import-export_, _[API] Metadata model_, _[App] Maintenance_

**[DHIS2-11568](https://jira.dhis2.org/browse/DHIS2-11568): Import of event report with program indicator using a filter does not populate table trackedentityprogramindicatordimension**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-11693](https://jira.dhis2.org/browse/DHIS2-11693): visualizationViews missing on dataStatistics endpoint**  
Components: _[API] Other_

**[DHIS2-11932](https://jira.dhis2.org/browse/DHIS2-11932): SQL variables in SQL view do not accept accented characters**  
Components: _[API] Other_

**[DHIS2-12008](https://jira.dhis2.org/browse/DHIS2-12008): Superusers cannot update sharing for dashboards which are not already shared with them**  
Components: _[API] Other_

**[DHIS2-11946](https://jira.dhis2.org/browse/DHIS2-11946): SQL queries with variables names with accented characters will not return error when variable is not provided in query**  
Components: _[API] Other_

**[DHIS2-11742](https://jira.dhis2.org/browse/DHIS2-11742): Sharing is not saved for new ProgramStage**  
Components: _[API] Other_

**[DHIS2-11848](https://jira.dhis2.org/browse/DHIS2-11848): Metadata with external access set to true requires login**  
Components: _[API] Other_

**[DHIS2-12091](https://jira.dhis2.org/browse/DHIS2-12091): Predictors in a job don't run in a predictable order**  
Components: _[API] Predictors_

**[DHIS2-12164](https://jira.dhis2.org/browse/DHIS2-12164): Predictors fail on some systems on aggregate data input**  
Components: _[API] Predictors_

**[DHIS2-9723](https://jira.dhis2.org/browse/DHIS2-9723): Program stage sharing not retained after metadata import**  
Components: _[API] Synchronization_, _[API] Tracker_, _[App] Settings_

**[DHIS2-12181](https://jira.dhis2.org/browse/DHIS2-12181): Adding enrollment using orgUnitIdScheme=ATTRIBUTE**  
Components: _[API] Tracker_

**[DHIS2-11893](https://jira.dhis2.org/browse/DHIS2-11893): Legacy Tei fetching causes performance issues**  
Components: _[API] Tracker_

**[DHIS2-11557](https://jira.dhis2.org/browse/DHIS2-11557): Endpoint /trackedEntityInstance does not include nested enrollments if program shared at user level**  
Components: _[API] Tracker_

**[DHIS2-11752](https://jira.dhis2.org/browse/DHIS2-11752): Adhoc connections are created outside datasource**  
Components: _[API] Tracker_

**[DHIS2-11762](https://jira.dhis2.org/browse/DHIS2-11762): NTI: updates fail when attributes are not in the payload**  
Components: _[API] Tracker_

**[DHIS2-11764](https://jira.dhis2.org/browse/DHIS2-11764): NTI: storedBy is not set for notes**  
Components: _[API] Tracker_

**[DHIS2-11852](https://jira.dhis2.org/browse/DHIS2-11852): NTI: exception when removing attribute values**  
Components: _[API] Tracker_

**[DHIS2-11950](https://jira.dhis2.org/browse/DHIS2-11950): NTI: uniqueness is not validated for attributes in enrollment scope**  
Components: _[API] Tracker_

**[DHIS2-11973](https://jira.dhis2.org/browse/DHIS2-11973): NTI: time should be ignored when validating enrollment date**  
Components: _[API] Tracker_

**[DHIS2-12107](https://jira.dhis2.org/browse/DHIS2-12107): Using Event data element filters for the event API returns an error**  
Components: _[API] Tracker_

**[DHIS2-11655](https://jira.dhis2.org/browse/DHIS2-11655): New tracker: Same TEI returned twice in the same payload**  
Components: _[API] Tracker_

**[DHIS2-11659](https://jira.dhis2.org/browse/DHIS2-11659): NTI: Error when updating enrollment**  
Components: _[API] Tracker_

**[DHIS2-11753](https://jira.dhis2.org/browse/DHIS2-11753): Relationships not included in audits**  
Components: _[API] Tracker_

**[DHIS2-11765](https://jira.dhis2.org/browse/DHIS2-11765): NTI: lastUpdatedBy and createdBy are not stored for data values**  
Components: _[API] Tracker_

**[DHIS2-11949](https://jira.dhis2.org/browse/DHIS2-11949): NTI: duplicate validation messages for enrollment attributes**  
Components: _[API] Tracker_

**[DHIS2-11824](https://jira.dhis2.org/browse/DHIS2-11824): NTI: last updated date on TEI is not updated when underlying data changes**  
Components: _[API] Tracker_

**[DHIS2-11918](https://jira.dhis2.org/browse/DHIS2-11918): NTI: slow imports because of cross joining program and psi**  
Components: _[API] Tracker_

**[DHIS2-11689](https://jira.dhis2.org/browse/DHIS2-11689): NTI: async tracker import adds audit entry with createdby='system-process'**  
Components: _[API] Tracker_

**[DHIS2-11780](https://jira.dhis2.org/browse/DHIS2-11780): Relationship not audited**  
Components: _[API] Tracker_

**[DHIS2-10818](https://jira.dhis2.org/browse/DHIS2-10818): Validation rules for boolean-type data elements not triggering**  
Components: _[API] Validation_

**[DHIS2-10607](https://jira.dhis2.org/browse/DHIS2-10607): d2:length() only works on number variables**  
Components: _[App] Capture_

**[DHIS2-12047](https://jira.dhis2.org/browse/DHIS2-12047): WorkingLists not loading event data**  
Components: _[App] Capture_

**[DHIS2-12179](https://jira.dhis2.org/browse/DHIS2-12179): Can’t Manually Write in GPS Coordinates into Event Capture**  
Components: _[App] Capture_

**[DHIS2-11084](https://jira.dhis2.org/browse/DHIS2-11084): Tracked entity instance search: convert values based on valueType when sending the api request**  
Components: _[App] Capture_

**[DHIS2-11924](https://jira.dhis2.org/browse/DHIS2-11924): Missing names when map analytical objects are loaded by dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-10671](https://jira.dhis2.org/browse/DHIS2-10671): Buffer layer map is not suporting "View as table/chart" in dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-11647](https://jira.dhis2.org/browse/DHIS2-11647): Show more/fewer dashboards tooltip not visible when bar expanded**  
Components: _[App] Dashboard_

**[DHIS2-11016](https://jira.dhis2.org/browse/DHIS2-11016): Wrong ou level name shown on dashboard**  
Components: _[App] Dashboard_, _[App] Data visualizer_

**[DHIS2-11017](https://jira.dhis2.org/browse/DHIS2-11017): Filter dialog in dashboard needs better styling**  
Components: _[App] Dashboard_

**[DHIS2-11685](https://jira.dhis2.org/browse/DHIS2-11685): Top section missing bottom shadow**  
Components: _[App] Dashboard_

**[DHIS2-10171](https://jira.dhis2.org/browse/DHIS2-10171): Mismatching org unit level and selected org unit should display a custom error**  
Components: _[App] Data visualizer_

**[DHIS2-11411](https://jira.dhis2.org/browse/DHIS2-11411): Horizontal axix title and labels not working for Year over Year chart type**  
Components: _[App] Data visualizer_

**[DHIS2-9477](https://jira.dhis2.org/browse/DHIS2-9477): DE type Number displaying zero instead of null value**  
Components: _[App] Event reports_

**[DHIS2-7230](https://jira.dhis2.org/browse/DHIS2-7230): Custom attribute for Program Indicator doesn't work**  
Components: _[App] Maintenance_

**[DHIS2-12169](https://jira.dhis2.org/browse/DHIS2-12169): In some time zones map layer cards show the wrong date**  
Components: _[App] Maps_

**[DHIS2-11749](https://jira.dhis2.org/browse/DHIS2-11749): Period for saved EE layers is not showing**  
Components: _[App] Maps_

**[DHIS2-11934](https://jira.dhis2.org/browse/DHIS2-11934): Typing start/end dates is not working properly**  
Components: _[App] Maps_

**[DHIS2-11919](https://jira.dhis2.org/browse/DHIS2-11919): Event layer does not restore start/end dates**  
Components: _[App] Maps_

**[DHIS2-11920](https://jira.dhis2.org/browse/DHIS2-11920): Event layer that is styled by data element crashes when changing program**  
Components: _[App] Maps_

**[DHIS2-11970](https://jira.dhis2.org/browse/DHIS2-11970): App crash in style tab for thematic layer**  
Components: _[App] Maps_

**[DHIS2-11537](https://jira.dhis2.org/browse/DHIS2-11537): Reports App does not respect user org unit**  
Components: _[App] Reports_

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

**[DHIS2-10550](https://jira.dhis2.org/browse/DHIS2-10550): Tracker Upcoming and Overdue Events reports missing pager**  
Components: _[App] Tracker capture_


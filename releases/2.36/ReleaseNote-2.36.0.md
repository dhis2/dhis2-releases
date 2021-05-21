# Patch 2.36.0 Release Note

- [Features](#Features)
- [Bugs](#Bugs)

## Features

**[DHIS2-10294](https://jira.dhis2.org/browse/DHIS2-10294): Add V{event_status} variable support for ProgramIndicator**  
Components: _[API] Analytics_

**[DHIS2-10079](https://jira.dhis2.org/browse/DHIS2-10079): Outlier analysis support in visualizations**  
Components: _[API] Analytics_, _[API] Metadata model_

**[DHIS2-10074](https://jira.dhis2.org/browse/DHIS2-10074): Allow vis types SCATTER and BUBBLE to be saved in the backend**  
Components: _[API] Analytics_

**[DHIS2-10054](https://jira.dhis2.org/browse/DHIS2-10054): Support visualization options per axis**  
Components: _[API] Analytics_, _[API] Metadata model_

**[DHIS2-9902](https://jira.dhis2.org/browse/DHIS2-9902): Remove SKIP_ZERO_VALUES_IN_ANALYTICS_TABLE_EXPORT system setting**  
Components: _[API] Analytics_, _[App] Settings_

**[DHIS2-9728](https://jira.dhis2.org/browse/DHIS2-9728): Fine-grained output ID scheme support in analytics aggregated data value export**  
Components: _[API] Analytics_

**[DHIS2-9322](https://jira.dhis2.org/browse/DHIS2-9322): Support logarithms in expressions**  
Components: _[API] Analytics_

**[DHIS2-3351](https://jira.dhis2.org/browse/DHIS2-3351): Data element/attribute with org unit value type for geospatial analytics**  
Components: _[API] Analytics_

**[DHIS2-10565](https://jira.dhis2.org/browse/DHIS2-10565): Export App Hub ID from app manifest in apps API**  
Components: _[API] App management_

**[DHIS2-9092](https://jira.dhis2.org/browse/DHIS2-9092): Support for overriding Core Apps with custom apps**  
Components: _[API] App management_

**[DHIS2-10408](https://jira.dhis2.org/browse/DHIS2-10408): Improve performance of data integrity checks**  
Components: _[API] Data administration_

**[DHIS2-180](https://jira.dhis2.org/browse/DHIS2-180):  Live updates of apps**  
Components: _[API] Data administration_, _[App] App management_

**[DHIS2-4453](https://jira.dhis2.org/browse/DHIS2-4453): What approval level am I in API endpoint**  
Components: _[API] Data approval_

**[DHIS2-10214](https://jira.dhis2.org/browse/DHIS2-10214): ValueType options class**  
Components: _[API] Data store_

**[DHIS2-10121](https://jira.dhis2.org/browse/DHIS2-10121): Upgrade Hibernate and Geo libs**  
Components: _[API] Data store_, _[API] Security_, _[API] System configuration_

**[DHIS2-10293](https://jira.dhis2.org/browse/DHIS2-10293): Program rules: Expand backend rules engine functionality: Assigning attributes**  
Components: _[API] Events_, _[API] Program rules_, _[API] Tracker_

**[DHIS2-10098](https://jira.dhis2.org/browse/DHIS2-10098): Program rules: Expand backend rules engine functionality: Assigning data values**  
Components: _[API] Events_, _[API] Program rules_, _[API] Tracker_

**[DHIS2-7310](https://jira.dhis2.org/browse/DHIS2-7310): Expand backend rules engine functionality: Assigning, errors and warnings**  
Components: _[API] Events_, _[API] Program rules_, _[API] Tracker_

**[DHIS2-10592](https://jira.dhis2.org/browse/DHIS2-10592): Refactor Artemis to use in-VM connector**  
Components: _[API] Frameworks and libraries_

**[DHIS2-10257](https://jira.dhis2.org/browse/DHIS2-10257): Cluster node leader exposed as API endpoint**  
Components: _[API] Job scheduler_

**[DHIS2-7981](https://jira.dhis2.org/browse/DHIS2-7981): Scheduled SMS "Sent" API endpoint should include template ID**  
Components: _[API] Messaging_

**[DHIS2-10407](https://jira.dhis2.org/browse/DHIS2-10407): Validate email of user during import**  
Components: _[API] Metadata import-export_, _[API] User_

**[DHIS2-8750](https://jira.dhis2.org/browse/DHIS2-8750): Exclude users from metadata concept and API endpoint**  
Components: _[API] Metadata import-export_, _[API] User_

**[DHIS2-10509](https://jira.dhis2.org/browse/DHIS2-10509): Endpoint for downloading program-org unit connection**  
Components: _[API] Metadata model_, _[API] Tracker_

**[DHIS2-10307](https://jira.dhis2.org/browse/DHIS2-10307): Filters should be dashboard specific and specified by the owner**  
Components: _[API] Metadata model_

**[DHIS2-10041](https://jira.dhis2.org/browse/DHIS2-10041): Support captureScopeFilter for programs endpoint**  
Components: _[API] Metadata model_, _[API] Tracker_

**[DHIS2-9219](https://jira.dhis2.org/browse/DHIS2-9219): Add description for data element and indicator group and group set**  
Components: _[API] Metadata model_

**[DHIS2-5814](https://jira.dhis2.org/browse/DHIS2-5814): Convert UserAccess and UserGroupAccess to JSONB**  
Components: _[API] Metadata model_, _[API] User_

**[DHIS2-10291](https://jira.dhis2.org/browse/DHIS2-10291): Allow Visual Type constraints for dashboard favorites**  
Components: _[API] Other_

**[DHIS2-10260](https://jira.dhis2.org/browse/DHIS2-10260): Add annotation for translatable properties**  
Components: _[API] Other_

**[DHIS2-10212](https://jira.dhis2.org/browse/DHIS2-10212): Change "user" property name to "createdBy"**  
Components: _[API] Other_

**[DHIS2-10177](https://jira.dhis2.org/browse/DHIS2-10177): Make old Axes elements read-only**  
Components: _[API] Other_

**[DHIS2-9934](https://jira.dhis2.org/browse/DHIS2-9934): Re-work of /dataItems endpoint**  
Components: _[API] Other_

**[DHIS2-9762](https://jira.dhis2.org/browse/DHIS2-9762): Update to API version 36 (api/36)**  
Components: _[API] Other_

**[DHIS2-9604](https://jira.dhis2.org/browse/DHIS2-9604): Hide dashboard app name**  
Components: _[API] Other_

**[DHIS2-9553](https://jira.dhis2.org/browse/DHIS2-9553): Log favorites loaded on dashboard**  
Components: _[API] Other_, _[App] Settings_

**[DHIS2-9514](https://jira.dhis2.org/browse/DHIS2-9514): Add flyway migration to pre-assign SMS Configuration app authority**  
Components: _[API] Other_

**[DHIS2-9272](https://jira.dhis2.org/browse/DHIS2-9272): api/dimensions/<uid>/items needs paging**  
Components: _[API] Other_

**[DHIS2-7410](https://jira.dhis2.org/browse/DHIS2-7410): Require "data read" sharing level for accessing SQL view contents**  
Components: _[API] Other_

**[DHIS2-5584](https://jira.dhis2.org/browse/DHIS2-5584): Cascade delete saved favorites**  
Components: _[API] Other_, _[App] Data visualizer_, _[App] Maps_, _[App] Pivot table_

**[DHIS2-9317](https://jira.dhis2.org/browse/DHIS2-9317): Speed up aggregate data fetching for predictors**  
Components: _[API] Predictors_

**[DHIS2-10380](https://jira.dhis2.org/browse/DHIS2-10380): Disable server-side program rules configuration property**  
Components: _[API] Program rules_, _[API] System configuration_

**[DHIS2-9444](https://jira.dhis2.org/browse/DHIS2-9444): End user message when program rule expression has syntax error**  
Components: _[API] Program rules_

**[DHIS2-10353](https://jira.dhis2.org/browse/DHIS2-10353): Add "generic" OIDC provider support**  
Components: _[API] Security_

**[DHIS2-9896](https://jira.dhis2.org/browse/DHIS2-9896): Add WSO2 OpenID Connect provider support**  
Components: _[API] Security_

**[DHIS2-9346](https://jira.dhis2.org/browse/DHIS2-9346): Add Azure AD OpenID Connect provider support**  
Components: _[API] Security_

**[DHIS2-8096](https://jira.dhis2.org/browse/DHIS2-8096): Remove username from user invitation and restore urls**  
Components: _[API] Security_, _[API] User_

**[DHIS2-10446](https://jira.dhis2.org/browse/DHIS2-10446): Add basic authentication support to SMS gateway**  
Components: _[API] SMS_

**[DHIS2-10040](https://jira.dhis2.org/browse/DHIS2-10040): Support SMS text UTF-8 encoding**  
Components: _[API] SMS_

**[DHIS2-9970](https://jira.dhis2.org/browse/DHIS2-9970): Add server timezone information to system info API endpoint**  
Components: _[API] System configuration_

**[DHIS2-9963](https://jira.dhis2.org/browse/DHIS2-9963): UI changes to new OpenID connect features**  
Components: _[API] System configuration_, _[App] User_, _[App] User Profile_

**[DHIS2-10796](https://jira.dhis2.org/browse/DHIS2-10796): Tracker attribute and data elements merge values by default. Null values removed.**  
Components: _[API] Tracker_

**[DHIS2-10495](https://jira.dhis2.org/browse/DHIS2-10495): Improve program rule engine error messages from tracker importer**  
Components: _[API] Tracker_

**[DHIS2-10479](https://jira.dhis2.org/browse/DHIS2-10479): Add indexes to relationshipitem's id columns**  
Components: _[API] Tracker_

**[DHIS2-10452](https://jira.dhis2.org/browse/DHIS2-10452): Validation for values with option sets**  
Components: _[API] Tracker_

**[DHIS2-10384](https://jira.dhis2.org/browse/DHIS2-10384): Expose UIDs in program notification**  
Components: _[API] Tracker_

**[DHIS2-10369](https://jira.dhis2.org/browse/DHIS2-10369): Use new naming conventions in new Tracker GET endpoints**  
Components: _[API] Tracker_

**[DHIS2-10239](https://jira.dhis2.org/browse/DHIS2-10239): Investigate use of java.util.Date or java.time.DateTime in new tracker DTOs for date fields, instead of plain strings**  
Components: _[API] Tracker_

**[DHIS2-10202](https://jira.dhis2.org/browse/DHIS2-10202): Refactor new tracker Enrollments, Relationships and Events GET controllers to support criteria in the same way it was done for TrackedEntitiesExportController**  
Components: _[API] Tracker_

**[DHIS2-10188](https://jira.dhis2.org/browse/DHIS2-10188): Add new GET endpoints in new tracker importer for /tracker/relationships**  
Components: _[API] Tracker_

**[DHIS2-10187](https://jira.dhis2.org/browse/DHIS2-10187): Add new GET endpoints in new tracker importer for /tracker/events and /tracker/events/<uid>**  
Components: _[API] Tracker_

**[DHIS2-10186](https://jira.dhis2.org/browse/DHIS2-10186): Add new GET endpoints in new tracker importer for /tracker/enrollments and /tracker/enrollments/<uid>**  
Components: _[API] Tracker_

**[DHIS2-10093](https://jira.dhis2.org/browse/DHIS2-10093): Add new GET endpoints in new tracker importer for /tracker/trackedEntities and /tracker/trackedEntities/<uid>**  
Components: _[API] Tracker_

**[DHIS2-10017](https://jira.dhis2.org/browse/DHIS2-10017): Remove long running transaction from tracker importer**  
Components: _[API] Tracker_

**[DHIS2-9841](https://jira.dhis2.org/browse/DHIS2-9841): Change Breaking the glass feature to use database persistence instead of cache**  
Components: _[API] Tracker_

**[DHIS2-9840](https://jira.dhis2.org/browse/DHIS2-9840): DataValues validator for new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-9835](https://jira.dhis2.org/browse/DHIS2-9835): Username, userid, first name and last name needed for tracker notes**  
Components: _[API] Tracker_

**[DHIS2-9271](https://jira.dhis2.org/browse/DHIS2-9271): AtomicMode Object in the new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-9270](https://jira.dhis2.org/browse/DHIS2-9270): Tracker attribute and data elements merge values by default. Null values removed.**  
Components: _[API] Tracker_

**[DHIS2-9269](https://jira.dhis2.org/browse/DHIS2-9269): SkipNotifications in the new Tracker Importer**  
Components: _[API] Tracker_

**[DHIS2-9268](https://jira.dhis2.org/browse/DHIS2-9268): Assign user to event in new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-9209](https://jira.dhis2.org/browse/DHIS2-9209): Move query for Uniqueness validation from validation hook to preheater.**  
Components: _[API] Tracker_

**[DHIS2-9208](https://jira.dhis2.org/browse/DHIS2-9208): Validation for Data Element FileResources in new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-9085](https://jira.dhis2.org/browse/DHIS2-9085): Add support for deletion of tracker objects in the new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-9084](https://jira.dhis2.org/browse/DHIS2-9084): Add support for synchronous import in the new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-8323](https://jira.dhis2.org/browse/DHIS2-8323): Validation for Relationships in new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-8270](https://jira.dhis2.org/browse/DHIS2-8270): Asynchronous handling of tracker import side-effect**  
Components: _[API] Tracker_

**[DHIS2-10562](https://jira.dhis2.org/browse/DHIS2-10562): Make chart/visualisation components translatable**  
Components: _[API] Translations_

**[DHIS2-10556](https://jira.dhis2.org/browse/DHIS2-10556): Make "trackedEntityInstanceFilters" & "ProgramStageInstanceFilters" translatable**  
Components: _[API] Translations_

**[DHIS2-8669](https://jira.dhis2.org/browse/DHIS2-8669): Translation support for "instruction" field of validation rule entity**  
Components: _[API] Translations_

**[DHIS2-8297](https://jira.dhis2.org/browse/DHIS2-8297): Ability to translate "description of report date" and "description of event date"**  
Components: _[API] Translations_

**[DHIS2-5587](https://jira.dhis2.org/browse/DHIS2-5587): Translations for Program Rule Actions (SHOWERROR/SHOWWARNING content)**  
Components: _[API] Translations_

**[DHIS2-8089](https://jira.dhis2.org/browse/DHIS2-8089): Expiration date for user accounts**  
Components: _[API] User_

**[DHIS2-6720](https://jira.dhis2.org/browse/DHIS2-6720): Auto-disable user accounts after configurable period of inactivity**  
Components: _[API] User_

**[DHIS2-10344](https://jira.dhis2.org/browse/DHIS2-10344): Data value follow-up endpoint**  
Components: _[API] Validation_

**[DHIS2-10113](https://jira.dhis2.org/browse/DHIS2-10113): Outlier detection API**  
Components: _[API] Validation_

**[DHIS2-8876](https://jira.dhis2.org/browse/DHIS2-8876): Return attribute option combos with validation results**  
Components: _[API] Validation_

**[DHIS2-7439](https://jira.dhis2.org/browse/DHIS2-7439): Delete ValidationResults through API**  
Components: _[API] Validation_

**[DHIS2-6031](https://jira.dhis2.org/browse/DHIS2-6031): Validation Results API validation rule and organisation unit filter**  
Components: _[API] Validation_

**[DHIS2-9847](https://jira.dhis2.org/browse/DHIS2-9847): Move d2.analytics to analytics and replace d2 with app-runtime**  
Components: _[App] Analytics_, _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-9821](https://jira.dhis2.org/browse/DHIS2-9821): Rewrite d2-ui-file-menu in analytics with @dhis2/ui**  
Components: _[App] Analytics_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-8802](https://jira.dhis2.org/browse/DHIS2-8802): Encrypt database option sounds ominous and scary**  
Components: _[App] Android Settings app_

**[DHIS2-10664](https://jira.dhis2.org/browse/DHIS2-10664): Port to app-platform [app-management-app]**  
Components: _[App] App management_

**[DHIS2-9424](https://jira.dhis2.org/browse/DHIS2-9424): Use new App Hub proxy in App Management App**  
Components: _[App] App management_

**[DHIS2-9354](https://jira.dhis2.org/browse/DHIS2-9354): Support self-updating of App Management App**  
Components: _[App] App management_

**[DHIS2-10525](https://jira.dhis2.org/browse/DHIS2-10525): Back functionality when navigating between tracker and Capture**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-10326](https://jira.dhis2.org/browse/DHIS2-10326): Open enrollment page from the working lists**  
Components: _[App] Capture_

**[DHIS2-10321](https://jira.dhis2.org/browse/DHIS2-10321): Adds view dasboard button on the duplicates modal.**  
Components: _[App] Capture_

**[DHIS2-10315](https://jira.dhis2.org/browse/DHIS2-10315): Autogenerate event when submitting enrollment**  
Components: _[App] Capture_

**[DHIS2-10312](https://jira.dhis2.org/browse/DHIS2-10312): Dates under enrollemnt section is prefilled with current date**  
Components: _[App] Capture_

**[DHIS2-10179](https://jira.dhis2.org/browse/DHIS2-10179): Block users from seeing a page when they have no access to it**  
Components: _[App] Capture_

**[DHIS2-10161](https://jira.dhis2.org/browse/DHIS2-10161): Create new page with routing**  
Components: _[App] Capture_

**[DHIS2-10136](https://jira.dhis2.org/browse/DHIS2-10136): Cancel button**  
Components: _[App] Capture_

**[DHIS2-10111](https://jira.dhis2.org/browse/DHIS2-10111): Only download relevant org units for programs**  
Components: _[App] Capture_

**[DHIS2-9808](https://jira.dhis2.org/browse/DHIS2-9808): Capture TEType id in the url**  
Components: _[App] Capture_

**[DHIS2-9675](https://jira.dhis2.org/browse/DHIS2-9675): Redesign Find button to match the new concept**  
Components: _[App] Capture_

**[DHIS2-9665](https://jira.dhis2.org/browse/DHIS2-9665): Update the Domain Selector in the Search Page according to the new design**  
Components: _[App] Capture_

**[DHIS2-9658](https://jira.dhis2.org/browse/DHIS2-9658): Duplicates modal**  
Components: _[App] Capture_

**[DHIS2-9655](https://jira.dhis2.org/browse/DHIS2-9655): Program rules are executed before form submittion, and results displayed**  
Components: _[App] Capture_

**[DHIS2-9654](https://jira.dhis2.org/browse/DHIS2-9654): User can register AND enroll new Tracker TEI's**  
Components: _[App] Capture_

**[DHIS2-9653](https://jira.dhis2.org/browse/DHIS2-9653): User can register new Tracker TETypes**  
Components: _[App] Capture_

**[DHIS2-9652](https://jira.dhis2.org/browse/DHIS2-9652): Display save buttons area**  
Components: _[App] Capture_

**[DHIS2-9651](https://jira.dhis2.org/browse/DHIS2-9651): Display enrollment section**  
Components: _[App] Capture_

**[DHIS2-9650](https://jira.dhis2.org/browse/DHIS2-9650): Display Profile section according to TETSelector value**  
Components: _[App] Capture_

**[DHIS2-9649](https://jira.dhis2.org/browse/DHIS2-9649): Display dropdown menu in which the user can select TEType**  
Components: _[App] Capture_

**[DHIS2-9648](https://jira.dhis2.org/browse/DHIS2-9648): Show user message when they land in the registration page without org unit selected**  
Components: _[App] Capture_

**[DHIS2-9647](https://jira.dhis2.org/browse/DHIS2-9647): Create empty registration page**  
Components: _[App] Capture_

**[DHIS2-9646](https://jira.dhis2.org/browse/DHIS2-9646): Change the positions of the buttons in the LockedSelector**  
Components: _[App] Capture_

**[DHIS2-9637](https://jira.dhis2.org/browse/DHIS2-9637): Add the New button**  
Components: _[App] Capture_

**[DHIS2-9551](https://jira.dhis2.org/browse/DHIS2-9551): Display the CardList component the same across the capture app**  
Components: _[App] Capture_

**[DHIS2-9524](https://jira.dhis2.org/browse/DHIS2-9524): Update documentation regarding d2:zScoreWFH**  
Components: _[App] Capture_

**[DHIS2-9276](https://jira.dhis2.org/browse/DHIS2-9276): Tracked entity instance list**  
Components: _[App] Capture_

**[DHIS2-9258](https://jira.dhis2.org/browse/DHIS2-9258): General error message**  
Components: _[App] Capture_

**[DHIS2-9257](https://jira.dhis2.org/browse/DHIS2-9257): Too many results funtionality**  
Components: _[App] Capture_

**[DHIS2-9245](https://jira.dhis2.org/browse/DHIS2-9245): View active enrollment buttons**  
Components: _[App] Capture_

**[DHIS2-9244](https://jira.dhis2.org/browse/DHIS2-9244): Fallback search functionality**  
Components: _[App] Capture_

**[DHIS2-9239](https://jira.dhis2.org/browse/DHIS2-9239): Card list component design**  
Components: _[App] Capture_

**[DHIS2-9196](https://jira.dhis2.org/browse/DHIS2-9196): Adds collapsible button in the search forms**  
Components: _[App] Capture_

**[DHIS2-9195](https://jira.dhis2.org/browse/DHIS2-9195): Write e2e tests with cypress**  
Components: _[App] Capture_

**[DHIS2-9192](https://jira.dhis2.org/browse/DHIS2-9192): Add D2Form data clean up option**  
Components: _[App] Capture_

**[DHIS2-9187](https://jira.dhis2.org/browse/DHIS2-9187): Show search results table**  
Components: _[App] Capture_

**[DHIS2-9140](https://jira.dhis2.org/browse/DHIS2-9140): Add correct texts and translations in the whole feature**  
Components: _[App] Capture_

**[DHIS2-9079](https://jira.dhis2.org/browse/DHIS2-9079): Add the Find button on the LockedSelector component**  
Components: _[App] Capture_

**[DHIS2-8927](https://jira.dhis2.org/browse/DHIS2-8927): Search for entity using attributes**  
Components: _[App] Capture_

**[DHIS2-8926](https://jira.dhis2.org/browse/DHIS2-8926): Render input fields depending on how many unique attributes a selection has**  
Components: _[App] Capture_

**[DHIS2-8925](https://jira.dhis2.org/browse/DHIS2-8925): Direct lookup using unique identifiers**  
Components: _[App] Capture_

**[DHIS2-8924](https://jira.dhis2.org/browse/DHIS2-8924): Implement the SearchDomainSelector component(Old design)**  
Components: _[App] Capture_

**[DHIS2-8923](https://jira.dhis2.org/browse/DHIS2-8923): Back functionality**  
Components: _[App] Capture_

**[DHIS2-8922](https://jira.dhis2.org/browse/DHIS2-8922): Search page in Capture app**  
Components: _[App] Capture_

**[DHIS2-8695](https://jira.dhis2.org/browse/DHIS2-8695): Refactor of components for TEI working lists**  
Components: _[App] Capture_

**[DHIS2-10530](https://jira.dhis2.org/browse/DHIS2-10530): Debounce request for visualizations in Dashboard editor**  
Components: _[App] Dashboard_

**[DHIS2-10518](https://jira.dhis2.org/browse/DHIS2-10518): Lazily load plugin code**  
Components: _[App] Dashboard_

**[DHIS2-10138](https://jira.dhis2.org/browse/DHIS2-10138): Dashboard responsive layout for small/mobile screens**  
Components: _[App] Dashboard_

**[DHIS2-9879](https://jira.dhis2.org/browse/DHIS2-9879): Dashboard visualization item fullscreen view**  
Components: _[App] Dashboard_

**[DHIS2-7630](https://jira.dhis2.org/browse/DHIS2-7630): Allow Visual Type constraints for dashboard items - frontend**  
Components: _[App] Dashboard_

**[DHIS2-7620](https://jira.dhis2.org/browse/DHIS2-7620): Filters should be dashboard specific and specified by the owner - frontend**  
Components: _[App] Dashboard_

**[DHIS2-7396](https://jira.dhis2.org/browse/DHIS2-7396): Add username to api/sharing/search endpoint**  
Components: _[App] Dashboard_

**[DHIS2-10483](https://jira.dhis2.org/browse/DHIS2-10483): Port to app-platform [data-administration-app]**  
Components: _[App] Data administration_

**[DHIS2-8201](https://jira.dhis2.org/browse/DHIS2-8201): Hide data set if the user does not have access to any category options**  
Components: _[App] Data entry_

**[DHIS2-7757](https://jira.dhis2.org/browse/DHIS2-7757): File Resource Single Api Call Endpoint Request**  
Components: _[App] Data entry_

**[DHIS2-10339](https://jira.dhis2.org/browse/DHIS2-10339): Add functionality to mark outliers for follow-up**  
Components: _[App] Data quality_

**[DHIS2-10259](https://jira.dhis2.org/browse/DHIS2-10259): Outlier detection UI**  
Components: _[App] Data quality_

**[DHIS2-9971](https://jira.dhis2.org/browse/DHIS2-9971): Port to app-platform [data quality]**  
Components: _[App] Data quality_

**[DHIS2-8877](https://jira.dhis2.org/browse/DHIS2-8877): Display attribute option combos with validation results**  
Components: _[App] Data quality_

**[DHIS2-6771](https://jira.dhis2.org/browse/DHIS2-6771): Data Quality does not filter organisation units based on user's assigned org units**  
Components: _[App] Data quality_

**[DHIS2-10482](https://jira.dhis2.org/browse/DHIS2-10482): Port to app-platform [datastore-app]**  
Components: _[App] Data store_

**[DHIS2-10269](https://jira.dhis2.org/browse/DHIS2-10269): Add warning for parameter options in Data Visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-9274](https://jira.dhis2.org/browse/DHIS2-9274): Paging of dynamic dimension items**  
Components: _[App] Data visualizer_

**[DHIS2-7943](https://jira.dhis2.org/browse/DHIS2-7943): Simpler, more usable data search and selection for data items**  
Components: _[App] Data visualizer_

**[DHIS2-1982](https://jira.dhis2.org/browse/DHIS2-1982): Graphs with values below zero should display with a negative axis**  
Components: _[App] Data visualizer_

**[DHIS2-1369](https://jira.dhis2.org/browse/DHIS2-1369): Scatter Plot in the Visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-147](https://jira.dhis2.org/browse/DHIS2-147): Legend sets for charts in data visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-10385](https://jira.dhis2.org/browse/DHIS2-10385): Remove unsupported import-export preheat options**  
Components: _[App] Import-export_

**[DHIS2-5320](https://jira.dhis2.org/browse/DHIS2-5320): Disable rendering of parsed HTML and Javascript in intepretations app**  
Components: _[App] Interpretations_

**[DHIS2-10644](https://jira.dhis2.org/browse/DHIS2-10644): Port scheduler to app platform**  
Components: _[App] Job scheduler_

**[DHIS2-10504](https://jira.dhis2.org/browse/DHIS2-10504): Implement system job permissions**  
Components: _[App] Job scheduler_

**[DHIS2-10472](https://jira.dhis2.org/browse/DHIS2-10472): Add feature files**  
Components: _[App] Job scheduler_

**[DHIS2-10463](https://jira.dhis2.org/browse/DHIS2-10463): Check the documentation links**  
Components: _[App] Job scheduler_

**[DHIS2-10453](https://jira.dhis2.org/browse/DHIS2-10453): Refetch clears components mounted below the store**  
Components: _[App] Job scheduler_

**[DHIS2-10451](https://jira.dhis2.org/browse/DHIS2-10451): Use custom hooks for retrieving parts of the store**  
Components: _[App] Job scheduler_

**[DHIS2-10306](https://jira.dhis2.org/browse/DHIS2-10306): Show next run time for delay type jobs**  
Components: _[App] Job scheduler_

**[DHIS2-10305](https://jira.dhis2.org/browse/DHIS2-10305): Translate all server side strings**  
Components: _[App] Job scheduler_

**[DHIS2-10298](https://jira.dhis2.org/browse/DHIS2-10298): Ensure all text is translated**  
Components: _[App] Job scheduler_

**[DHIS2-10277](https://jira.dhis2.org/browse/DHIS2-10277): Link to docs from job list**  
Components: _[App] Job scheduler_

**[DHIS2-10276](https://jira.dhis2.org/browse/DHIS2-10276): Use a noticebox for the notauthorized route**  
Components: _[App] Job scheduler_

**[DHIS2-10275](https://jira.dhis2.org/browse/DHIS2-10275): Removing loading text from loading components**  
Components: _[App] Job scheduler_

**[DHIS2-10273](https://jira.dhis2.org/browse/DHIS2-10273): Load form fields all at once**  
Components: _[App] Job scheduler_

**[DHIS2-10272](https://jira.dhis2.org/browse/DHIS2-10272): Add details field to edit form**  
Components: _[App] Job scheduler_

**[DHIS2-10271](https://jira.dhis2.org/browse/DHIS2-10271): Add delete button to edit form**  
Components: _[App] Job scheduler_

**[DHIS2-10270](https://jira.dhis2.org/browse/DHIS2-10270): Ensure info link in scheduler opens in new tab**  
Components: _[App] Job scheduler_

**[DHIS2-10458](https://jira.dhis2.org/browse/DHIS2-10458): Add short name and description fields for category, DE group set and OU group set**  
Components: _[App] Maintenance_

**[DHIS2-10095](https://jira.dhis2.org/browse/DHIS2-10095): Use fallback icon if previously existing icon is not available**  
Components: _[App] Maintenance_

**[DHIS2-9530](https://jira.dhis2.org/browse/DHIS2-9530): External and EE layers: Computation and analysis**  
Components: _[App] Maintenance_, _[App] Maps_

**[DHIS2-9056](https://jira.dhis2.org/browse/DHIS2-9056): Front-end support for translation of RelationshipType From/To name**  
Components: _[App] Maintenance_

**[DHIS2-8897](https://jira.dhis2.org/browse/DHIS2-8897): Make translation input fields in translation dialog dynamic based on schema**  
Components: _[App] Maintenance_

**[DHIS2-8558](https://jira.dhis2.org/browse/DHIS2-8558): Enable filtering/search for data elements in  data entry section forms in Programs**  
Components: _[App] Maintenance_

**[DHIS2-7581](https://jira.dhis2.org/browse/DHIS2-7581): Add Indicator functions to the UI**  
Components: _[App] Maintenance_

**[DHIS2-10549](https://jira.dhis2.org/browse/DHIS2-10549): Circle buffer aggregations for EE layers**  
Components: _[App] Maps_

**[DHIS2-10546](https://jira.dhis2.org/browse/DHIS2-10546): Link data table and map**  
Components: _[App] Maps_

**[DHIS2-10534](https://jira.dhis2.org/browse/DHIS2-10534): Switch from MUI Icons to DHIS2 UI Icons**  
Components: _[App] Maps_

**[DHIS2-10252](https://jira.dhis2.org/browse/DHIS2-10252): Dashboard: Enable mouse scroll zoom for fullscreen map and disable map panning on touch screens**  
Components: _[App] Maps_

**[DHIS2-10125](https://jira.dhis2.org/browse/DHIS2-10125): Don't include fullscreen control in dashboard maps by default**  
Components: _[App] Maps_

**[DHIS2-9699](https://jira.dhis2.org/browse/DHIS2-9699): Replace Material UI with @dhis2/ui**  
Components: _[App] Maps_

**[DHIS2-3201](https://jira.dhis2.org/browse/DHIS2-3201): External layer: Show legend in layers panel**  
Components: _[App] Maps_

**[DHIS2-10628](https://jira.dhis2.org/browse/DHIS2-10628): Increase searchDelay for the recipient field**  
Components: _[App] Messaging_

**[DHIS2-9700](https://jira.dhis2.org/browse/DHIS2-9700): Port to app-platform [messaging-app]**  
Components: _[App] Messaging_

**[DHIS2-9389](https://jira.dhis2.org/browse/DHIS2-9389): Port to app-platform [messaging-app]**  
Components: _[App] Messaging_

**[DHIS2-10316](https://jira.dhis2.org/browse/DHIS2-10316): Port to app-platform [menu management]**  
Components: _[App] Other_

**[DHIS2-10075](https://jira.dhis2.org/browse/DHIS2-10075): Remove "Skip zero values in analytics table export" from system settings app**  
Components: _[App] Settings_

**[DHIS2-9554](https://jira.dhis2.org/browse/DHIS2-9554): Log favorites loaded on dashboard**  
Components: _[App] Settings_

**[DHIS2-10444](https://jira.dhis2.org/browse/DHIS2-10444): Use query params as single source of truth**  
Components: _[App] SMS configuration_

**[DHIS2-10387](https://jira.dhis2.org/browse/DHIS2-10387): Update SMS app to support SMPP gateway**  
Components: _[App] SMS configuration_

**[DHIS2-8751](https://jira.dhis2.org/browse/DHIS2-8751): SMS configuration app**  
Components: _[App] SMS configuration_

**[DHIS2-10266](https://jira.dhis2.org/browse/DHIS2-10266): Only download relevant org units**  
Components: _[App] Tracker capture_

**[DHIS2-9574](https://jira.dhis2.org/browse/DHIS2-9574): Show full name in notes**  
Components: _[App] Tracker capture_

**[DHIS2-9830](https://jira.dhis2.org/browse/DHIS2-9830): Translation support for "instruction" field of validation rule entity**  
Components: _[App] Translations_

**[DHIS2-9811](https://jira.dhis2.org/browse/DHIS2-9811): Move the usage-analytics-app to declarative data fetching**  
Components: _[App] Usage analytics_

**[DHIS2-9390](https://jira.dhis2.org/browse/DHIS2-9390): Port to app-platform [usage-analytics-app]**  
Components: _[App] Usage analytics_

**[DHIS2-10364](https://jira.dhis2.org/browse/DHIS2-10364): Add expiration date for user account expiration**  
Components: _[App] User_

**[DHIS2-9386](https://jira.dhis2.org/browse/DHIS2-9386): Port to app-platform [user-app]**  
Components: _[App] User_

## Bugs

**[DHIS2-10766](https://jira.dhis2.org/browse/DHIS2-10766): Duplicated elements in the pagination of /dataItems**  
Components: _[API] Analytics_

**[DHIS2-10674](https://jira.dhis2.org/browse/DHIS2-10674): Chart and ReportTable are returning invalid "access" attribute**  
Components: _[API] Analytics_

**[DHIS2-10648](https://jira.dhis2.org/browse/DHIS2-10648): Charts are missing values for rows, columns and filters when filter by UID is used**  
Components: _[API] Analytics_

**[DHIS2-10480](https://jira.dhis2.org/browse/DHIS2-10480): Incorrect pager for dataElementOperands**  
Components: _[API] Analytics_

**[DHIS2-10447](https://jira.dhis2.org/browse/DHIS2-10447): Dashboard not logging first use - backend**  
Components: _[API] Analytics_

**[DHIS2-10441](https://jira.dhis2.org/browse/DHIS2-10441): Indicator .periodOffset() doesn't work for negative offsets**  
Components: _[API] Analytics_

**[DHIS2-10386](https://jira.dhis2.org/browse/DHIS2-10386): Data set with metrics should display as NAME - METRIC**  
Components: _[API] Analytics_

**[DHIS2-10346](https://jira.dhis2.org/browse/DHIS2-10346): Correct column name for enrollment status when using EVENT type Analytics**  
Components: _[API] Analytics_

**[DHIS2-10319](https://jira.dhis2.org/browse/DHIS2-10319): Items by dimension pager doesn't account for filter**  
Components: _[API] Analytics_

**[DHIS2-10304](https://jira.dhis2.org/browse/DHIS2-10304): Wrong program indicator result when using V{creation_date} with analytics boundaries**  
Components: _[API] Analytics_

**[DHIS2-10227](https://jira.dhis2.org/browse/DHIS2-10227): ANTLR division parsing bug: "Expression is empty"**  
Components: _[API] Analytics_

**[DHIS2-10166](https://jira.dhis2.org/browse/DHIS2-10166): Push Analysis - broken html around report table visualizations**  
Components: _[API] Analytics_

**[DHIS2-10082](https://jira.dhis2.org/browse/DHIS2-10082): Report Rates - Daily calculation failing**  
Components: _[API] Analytics_

**[DHIS2-10060](https://jira.dhis2.org/browse/DHIS2-10060): Saving with facility type CHP as filter throws 500 error**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-10056](https://jira.dhis2.org/browse/DHIS2-10056): Deleting an AO throws 500 "No row with the given identifier exists"**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-9791](https://jira.dhis2.org/browse/DHIS2-9791): Analytics API filters not working for input ID scheme CODE**  
Components: _[API] Analytics_

**[DHIS2-9737](https://jira.dhis2.org/browse/DHIS2-9737): Error when using start/end dates as filters - Division by zero**  
Components: _[API] Analytics_

**[DHIS2-9724](https://jira.dhis2.org/browse/DHIS2-9724): Analytics miscalculating % based indicators**  
Components: _[API] Analytics_

**[DHIS2-9668](https://jira.dhis2.org/browse/DHIS2-9668): mapview endpoint does not return valid XML when noDataColor property is present**  
Components: _[API] Analytics_

**[DHIS2-9510](https://jira.dhis2.org/browse/DHIS2-9510): Thematic layer with start/end dates breaks the app**  
Components: _[API] Analytics_, _[App] Maps_

**[DHIS2-8588](https://jira.dhis2.org/browse/DHIS2-8588): Event query analytics program indicators with conditions crashes**  
Components: _[API] Analytics_

**[DHIS2-10519](https://jira.dhis2.org/browse/DHIS2-10519): Override of Dashboard app doesn't work**  
Components: _[API] App management_

**[DHIS2-9939](https://jira.dhis2.org/browse/DHIS2-9939): File descriptor leak for app resources leads to unusable DHIS 2 instance**  
Components: _[API] App management_

**[DHIS2-9555](https://jira.dhis2.org/browse/DHIS2-9555): api/apps filter param for bundled apps should match JSON property**  
Components: _[API] App management_

**[DHIS2-10914](https://jira.dhis2.org/browse/DHIS2-10914): Error on clicking return/back arrow on batch deletion page**  
Components: _[API] Data administration_

**[DHIS2-10414](https://jira.dhis2.org/browse/DHIS2-10414): Adding = or & in PI/PR expressions/filter cause 500 error**  
Components: _[API] Data administration_, _[API] Program rules_

**[DHIS2-10401](https://jira.dhis2.org/browse/DHIS2-10401): Buggy paging and responses to program indicators**  
Components: _[API] Data administration_

**[DHIS2-9702](https://jira.dhis2.org/browse/DHIS2-9702):  "Run Data Integrity Checks" displaying nothing on Data Administration, Data Integrity sub section**  
Components: _[API] Data administration_

**[DHIS2-6642](https://jira.dhis2.org/browse/DHIS2-6642): Impossible to permanently delete soft deleted events**  
Components: _[API] Data administration_

**[DHIS2-10839](https://jira.dhis2.org/browse/DHIS2-10839): Endpoint /api/dataApprovals/multiple returns error 500**  
Components: _[API] Data approval_

**[DHIS2-9949](https://jira.dhis2.org/browse/DHIS2-9949): Error importing dataValueSet with new periods**  
Components: _[API] Data value set_

**[DHIS2-10685](https://jira.dhis2.org/browse/DHIS2-10685): Migration to 2.36 crashes with patienttabularreport issue**  
Components: _[API] Database migration_

**[DHIS2-8782](https://jira.dhis2.org/browse/DHIS2-8782): Upgrade from 2.33.3 to DHIS2 2.34 fails  - Flyway error**  
Components: _[API] Database migration_

**[DHIS2-10672](https://jira.dhis2.org/browse/DHIS2-10672): Error downloading events when a category combination is present**  
Components: _[API] Events_

**[DHIS2-10119](https://jira.dhis2.org/browse/DHIS2-10119): Events endpoint not returning events whose attributeCos are not shared publicly**  
Components: _[API] Events_

**[DHIS2-10000](https://jira.dhis2.org/browse/DHIS2-10000): Filtering on data elements of value type integer fails**  
Components: _[API] Events_

**[DHIS2-8420](https://jira.dhis2.org/browse/DHIS2-8420): Updating event filters causes sharing settings to reset**  
Components: _[API] Events_

**[DHIS2-7937](https://jira.dhis2.org/browse/DHIS2-7937): [ Internal Server Error ] Cannot filter events on certain kind of values [ phoneNumber ]**  
Components: _[API] Events_

**[DHIS2-10890](https://jira.dhis2.org/browse/DHIS2-10890): Continuous analytics job can't be disabled**  
Components: _[API] Job scheduler_

**[DHIS2-10768](https://jira.dhis2.org/browse/DHIS2-10768): Job configurations with parameters not saved if no parameters are included**  
Components: _[API] Job scheduler_

**[DHIS2-10505](https://jira.dhis2.org/browse/DHIS2-10505): Jobconfigurations endpoint doesn't enforce system jobs restrictions**  
Components: _[API] Job scheduler_

**[DHIS2-9783](https://jira.dhis2.org/browse/DHIS2-9783): JobStatus always returns SCHEDULED even if job is disabled**  
Components: _[API] Job scheduler_

**[DHIS2-10800](https://jira.dhis2.org/browse/DHIS2-10800): Cannot add attachments to messages**  
Components: _[API] Messaging_

**[DHIS2-9571](https://jira.dhis2.org/browse/DHIS2-9571): Schedule and Send message PRAs do not work**  
Components: _[API] Messaging_, _[App] Messaging_

**[DHIS2-10622](https://jira.dhis2.org/browse/DHIS2-10622): Import fails to link programstagedataelement to programstage due to renderType**  
Components: _[API] Metadata import-export_

**[DHIS2-10620](https://jira.dhis2.org/browse/DHIS2-10620): Slow searches in /api/reportTables**  
Components: _[API] Metadata import-export_

**[DHIS2-9972](https://jira.dhis2.org/browse/DHIS2-9972): Program Rule cannot be updated**  
Components: _[API] Metadata import-export_, _[App] Maintenance_

**[DHIS2-9966](https://jira.dhis2.org/browse/DHIS2-9966): Metadata code matching not working**  
Components: _[API] Metadata import-export_

**[DHIS2-9497](https://jira.dhis2.org/browse/DHIS2-9497): Import strategies are not considered in TEI import**  
Components: _[API] Metadata import-export_, _[App] Import-export_

**[DHIS2-10184](https://jira.dhis2.org/browse/DHIS2-10184): Rendering Options for attributes not correct**  
Components: _[API] Metadata model_, _[API] Other_, _[App] Maintenance_

**[DHIS2-10044](https://jira.dhis2.org/browse/DHIS2-10044): Org Unit API returns duplicates with pagination**  
Components: _[API] Metadata model_

**[DHIS2-10010](https://jira.dhis2.org/browse/DHIS2-10010): Adding and removing objects in a single request not working**  
Components: _[API] Metadata model_

**[DHIS2-8937](https://jira.dhis2.org/browse/DHIS2-8937): Category shortName value cannot update independent of the name Value (creates duplicate issues)**  
Components: _[API] Metadata model_

**[DHIS2-10752](https://jira.dhis2.org/browse/DHIS2-10752): New id for eventFilter - sharing settings are non editable**  
Components: _[API] Other_

**[DHIS2-10726](https://jira.dhis2.org/browse/DHIS2-10726): Clearing the cache does not rid of heap memory**  
Components: _[API] Other_

**[DHIS2-10642](https://jira.dhis2.org/browse/DHIS2-10642): /favorites?eventType=VISUALIZATION_VIEW returns no results**  
Components: _[API] Other_, _[App] Data visualizer_

**[DHIS2-10487](https://jira.dhis2.org/browse/DHIS2-10487): getModules.action does not translate displayName to user locale**  
Components: _[API] Other_

**[DHIS2-10220](https://jira.dhis2.org/browse/DHIS2-10220): Search functionality within sharing dialog doesn't work across first and last names**  
Components: _[API] Other_

**[DHIS2-10219](https://jira.dhis2.org/browse/DHIS2-10219): getMetaData action with ANTLR parsing is too slow**  
Components: _[API] Other_

**[DHIS2-10169](https://jira.dhis2.org/browse/DHIS2-10169): Problem With Oauth2**  
Components: _[API] Other_

**[DHIS2-9914](https://jira.dhis2.org/browse/DHIS2-9914): Filtering all items in /dataItems endpoint is not working**  
Components: _[API] Other_

**[DHIS2-9846](https://jira.dhis2.org/browse/DHIS2-9846): Names missing in analytics metadata**  
Components: _[API] Other_

**[DHIS2-9797](https://jira.dhis2.org/browse/DHIS2-9797): Flyway needs upgrade to support PostgreSQL 13.0**  
Components: _[API] Other_

**[DHIS2-9786](https://jira.dhis2.org/browse/DHIS2-9786): Custom application icons broken in Headerbar App Menu**  
Components: _[API] Other_

**[DHIS2-9601](https://jira.dhis2.org/browse/DHIS2-9601): Header vs rows mismatch on event data items as filter**  
Components: _[API] Other_

**[DHIS2-9575](https://jira.dhis2.org/browse/DHIS2-9575): allowDeleteUserGroupAccess error on updating sharing settings for program stages**  
Components: _[API] Other_

**[DHIS2-9520](https://jira.dhis2.org/browse/DHIS2-9520): Dashboards endpoint property favorite unexpectedly changes value**  
Components: _[API] Other_

**[DHIS2-9487](https://jira.dhis2.org/browse/DHIS2-9487): Text style for target/base line and axis labels missing**  
Components: _[API] Other_

**[DHIS2-9467](https://jira.dhis2.org/browse/DHIS2-9467): Audit for OrganisationUnit throw hibernate lazy exception**  
Components: _[API] Other_

**[DHIS2-8262](https://jira.dhis2.org/browse/DHIS2-8262): DataSet Sections are not getting translated first time it is saved**  
Components: _[API] Other_

**[DHIS2-8256](https://jira.dhis2.org/browse/DHIS2-8256): Deleting interpretation comments does not always work**  
Components: _[API] Other_

**[DHIS2-10724](https://jira.dhis2.org/browse/DHIS2-10724): Rule executed for events cannot access attributes**  
Components: _[API] Program rules_

**[DHIS2-10396](https://jira.dhis2.org/browse/DHIS2-10396): ProgramRule notification are not working in docker container**  
Components: _[API] Program rules_, _[API] SMS_

**[DHIS2-10105](https://jira.dhis2.org/browse/DHIS2-10105): Program rules: program stage is ignored**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-10055](https://jira.dhis2.org/browse/DHIS2-10055): "Program Rules Variable" Can't Translate into Local Language**  
Components: _[API] Program rules_, _[App] Translations_

**[DHIS2-9973](https://jira.dhis2.org/browse/DHIS2-9973): Program rule expression description fails when using TrackedEntityAttributes**  
Components: _[API] Program rules_

**[DHIS2-9667](https://jira.dhis2.org/browse/DHIS2-9667): It's impossible to update a ProgramRuleVariable unless changing its name**  
Components: _[API] Program rules_

**[DHIS2-9580](https://jira.dhis2.org/browse/DHIS2-9580): Error when trying to create program rules using d2:daysBetween function**  
Components: _[API] Program rules_

**[DHIS2-7986](https://jira.dhis2.org/browse/DHIS2-7986): Date manipulation in rule engine is not considering special cases**  
Components: _[API] Program rules_

**[DHIS2-7418](https://jira.dhis2.org/browse/DHIS2-7418): ProgramRuleVariable name is not unique**  
Components: _[API] Program rules_

**[DHIS2-10189](https://jira.dhis2.org/browse/DHIS2-10189): Struts2 vulnerability S2-061**  
Components: _[API] Security_

**[DHIS2-9760](https://jira.dhis2.org/browse/DHIS2-9760): OIDC logins and unsuccessful login attempts are not logged**  
Components: _[API] Security_

**[DHIS2-9469](https://jira.dhis2.org/browse/DHIS2-9469): Fix regression on redirect to form login on unauthenticated /api/* requests**  
Components: _[API] Security_

**[DHIS2-9392](https://jira.dhis2.org/browse/DHIS2-9392): Missing setter of 2FA property on user credentials in user account view**  
Components: _[API] Security_

**[DHIS2-10460](https://jira.dhis2.org/browse/DHIS2-10460): SMS command does not sent correct feedback**  
Components: _[API] SMS_

**[DHIS2-10076](https://jira.dhis2.org/browse/DHIS2-10076): SMS confidential parameters are not pushed to database**  
Components: _[API] SMS_

**[DHIS2-9941](https://jira.dhis2.org/browse/DHIS2-9941): SMS inbound issue on originator and user phone**  
Components: _[API] SMS_

**[DHIS2-9480](https://jira.dhis2.org/browse/DHIS2-9480): Duplicate IDs in SMS list**  
Components: _[API] SMS_

**[DHIS2-10853](https://jira.dhis2.org/browse/DHIS2-10853): Unable to Authenticate with LDAP**  
Components: _[API] System configuration_

**[DHIS2-10416](https://jira.dhis2.org/browse/DHIS2-10416): Password change reminder does not reference the instance URL**  
Components: _[API] System configuration_

**[DHIS2-9451](https://jira.dhis2.org/browse/DHIS2-9451): Infrastructural data not showing for org units**  
Components: _[API] System configuration_, _[App] Maps_

**[DHIS2-10870](https://jira.dhis2.org/browse/DHIS2-10870): Search by unique attribute doesn't work when minAttributesRequiredToSearch > 1**  
Components: _[API] Tracker_

**[DHIS2-10866](https://jira.dhis2.org/browse/DHIS2-10866): Cached user accesses are not invalidated after changing**  
Components: _[API] Tracker_

**[DHIS2-10841](https://jira.dhis2.org/browse/DHIS2-10841): Endpoint /trackedEntityInstances returns error 500 if orgunit not included in the query**  
Components: _[API] Tracker_

**[DHIS2-10764](https://jira.dhis2.org/browse/DHIS2-10764): Error when using lastUpdatedStartDate in get TEIs API**  
Components: _[API] Tracker_

**[DHIS2-10714](https://jira.dhis2.org/browse/DHIS2-10714): Excessive postgres count query when requesting trackedEntityInstances**  
Components: _[API] Tracker_

**[DHIS2-10683](https://jira.dhis2.org/browse/DHIS2-10683): TEI import fails with null pointer exception on value type validation**  
Components: _[API] Tracker_

**[DHIS2-10681](https://jira.dhis2.org/browse/DHIS2-10681): Tracker importer preheat caches default to Long.MAX_VALUE**  
Components: _[API] Tracker_

**[DHIS2-10678](https://jira.dhis2.org/browse/DHIS2-10678): Async import reports are sometimes unavailable**  
Components: _[API] Tracker_

**[DHIS2-10631](https://jira.dhis2.org/browse/DHIS2-10631): Optimize SQL query used in /tracker/trackedEntities**  
Components: _[API] Tracker_

**[DHIS2-10629](https://jira.dhis2.org/browse/DHIS2-10629): Aggressive cacheing makes instance unusable**  
Components: _[API] Tracker_

**[DHIS2-10603](https://jira.dhis2.org/browse/DHIS2-10603): Search takes long when max tei limit to return in search is set**  
Components: _[API] Tracker_

**[DHIS2-10601](https://jira.dhis2.org/browse/DHIS2-10601): TEI search by unique attribute takes long when user search scope is lower level org unit**  
Components: _[API] Tracker_

**[DHIS2-10600](https://jira.dhis2.org/browse/DHIS2-10600): Front page list takes a long time to load when there are many teis in org unit**  
Components: _[API] Tracker_

**[DHIS2-10522](https://jira.dhis2.org/browse/DHIS2-10522): Lazy init exception on tracked entity type when importing teis**  
Components: _[API] Tracker_

**[DHIS2-10520](https://jira.dhis2.org/browse/DHIS2-10520): Concurrent modification exception in sync import with higher load**  
Components: _[API] Tracker_

**[DHIS2-10494](https://jira.dhis2.org/browse/DHIS2-10494): Event import fails when there are program rules for enrollment**  
Components: _[API] Tracker_

**[DHIS2-10474](https://jira.dhis2.org/browse/DHIS2-10474): Persistence exception when importing enrollment**  
Components: _[API] Tracker_

**[DHIS2-10459](https://jira.dhis2.org/browse/DHIS2-10459): "ROOT" access error on events when posting teis with enrollments**  
Components: _[API] Tracker_

**[DHIS2-10435](https://jira.dhis2.org/browse/DHIS2-10435): Null pointer in program rule engine when importing tracker data**  
Components: _[API] Tracker_

**[DHIS2-10433](https://jira.dhis2.org/browse/DHIS2-10433): Duplicate key exception in tracker importer preheater**  
Components: _[API] Tracker_

**[DHIS2-10432](https://jira.dhis2.org/browse/DHIS2-10432): Logs from the import are incomplete**  
Components: _[API] Tracker_

**[DHIS2-10431](https://jira.dhis2.org/browse/DHIS2-10431): Slow  tracker importer performance due to user group memberships**  
Components: _[API] Tracker_

**[DHIS2-10430](https://jira.dhis2.org/browse/DHIS2-10430): Error when importing data value to event**  
Components: _[API] Tracker_

**[DHIS2-10429](https://jira.dhis2.org/browse/DHIS2-10429): Preheat timer stats are incorrect**  
Components: _[API] Tracker_

**[DHIS2-10409](https://jira.dhis2.org/browse/DHIS2-10409): Tracker audit fails and crashes the instance with higher load**  
Components: _[API] Tracker_

**[DHIS2-10399](https://jira.dhis2.org/browse/DHIS2-10399): NPE when importing events**  
Components: _[API] Tracker_

**[DHIS2-10397](https://jira.dhis2.org/browse/DHIS2-10397): Unique attribute values are considered duplicates**  
Components: _[API] Tracker_

**[DHIS2-10392](https://jira.dhis2.org/browse/DHIS2-10392): Instances to import duplicates when date is passed as anobject**  
Components: _[API] Tracker_

**[DHIS2-10390](https://jira.dhis2.org/browse/DHIS2-10390): Duplicate relationships are added**  
Components: _[API] Tracker_

**[DHIS2-10388](https://jira.dhis2.org/browse/DHIS2-10388): Tracker import is very slow**  
Components: _[API] Tracker_

**[DHIS2-10381](https://jira.dhis2.org/browse/DHIS2-10381): Tracker importer returns 200 when import failed**  
Components: _[API] Tracker_

**[DHIS2-10378](https://jira.dhis2.org/browse/DHIS2-10378): Nullpointer exception in tracker importer preheater when importing tei with enrollments and events**  
Components: _[API] Tracker_

**[DHIS2-10375](https://jira.dhis2.org/browse/DHIS2-10375): Response leaks SQL query if number of teis is too big**  
Components: _[API] Tracker_

**[DHIS2-10374](https://jira.dhis2.org/browse/DHIS2-10374): Incosistent query params in the new tracker exporter**  
Components: _[API] Tracker_

**[DHIS2-10351](https://jira.dhis2.org/browse/DHIS2-10351): Endpoint for tracked entity instances returns one less entry than requested**  
Components: _[API] Tracker_

**[DHIS2-10341](https://jira.dhis2.org/browse/DHIS2-10341): Slow PSQL queries when checking that TEA is unique**  
Components: _[API] Tracker_

**[DHIS2-10318](https://jira.dhis2.org/browse/DHIS2-10318): Endpoint /trackedEntityInstances requires "ou" even if TEI uid is provided**  
Components: _[API] Tracker_

**[DHIS2-10302](https://jira.dhis2.org/browse/DHIS2-10302): Error when updating event with a note**  
Components: _[API] Tracker_

**[DHIS2-10300](https://jira.dhis2.org/browse/DHIS2-10300): Exception when importing event that's already in the system**  
Components: _[API] Tracker_

**[DHIS2-10299](https://jira.dhis2.org/browse/DHIS2-10299): Dates for createdAtClient and updatedByClient are not stored correctly**  
Components: _[API] Tracker_

**[DHIS2-10209](https://jira.dhis2.org/browse/DHIS2-10209): Duplicated and incorrect error messages when importing teis**  
Components: _[API] Tracker_

**[DHIS2-10208](https://jira.dhis2.org/browse/DHIS2-10208): Enrolment is not updated**  
Components: _[API] Tracker_

**[DHIS2-10207](https://jira.dhis2.org/browse/DHIS2-10207): updatedAt is not saved correctly for event.dataValues**  
Components: _[API] Tracker_

**[DHIS2-10173](https://jira.dhis2.org/browse/DHIS2-10173): Program rules: rule action is not executed when condition contains program variable**  
Components: _[API] Tracker_

**[DHIS2-10123](https://jira.dhis2.org/browse/DHIS2-10123): Sporadic concurrent modification exception**  
Components: _[API] Tracker_

**[DHIS2-10122](https://jira.dhis2.org/browse/DHIS2-10122): Program rules: SETMANDATORYFIELD doesn't work**  
Components: _[API] Tracker_

**[DHIS2-10116](https://jira.dhis2.org/browse/DHIS2-10116): Program rules: ASSIGN action doesn't assign value to a data element**  
Components: _[API] Tracker_

**[DHIS2-10112](https://jira.dhis2.org/browse/DHIS2-10112): Program rules: ERRORONCOMPLETE rule is not executed for event program events**  
Components: _[API] Tracker_

**[DHIS2-10109](https://jira.dhis2.org/browse/DHIS2-10109): Program rules: validationStrategy and eventStatus is not considered in import**  
Components: _[API] Tracker_

**[DHIS2-10108](https://jira.dhis2.org/browse/DHIS2-10108): Program rules: status is ignored when using SHOW_ON_COMPLETE action**  
Components: _[API] Tracker_

**[DHIS2-10107](https://jira.dhis2.org/browse/DHIS2-10107): Program rules: insufficient text on program rule error/warning**  
Components: _[API] Tracker_

**[DHIS2-10102](https://jira.dhis2.org/browse/DHIS2-10102): Remove sideEffectDataBundles from the tracker import report**  
Components: _[API] Tracker_

**[DHIS2-10100](https://jira.dhis2.org/browse/DHIS2-10100): Enrollment date in the future is not allowed**  
Components: _[API] Tracker_

**[DHIS2-10084](https://jira.dhis2.org/browse/DHIS2-10084): Missing error message when posting soft deleted teis and enrollments**  
Components: _[API] Tracker_

**[DHIS2-10083](https://jira.dhis2.org/browse/DHIS2-10083): Empty report on unhandled exceptions**  
Components: _[API] Tracker_

**[DHIS2-10077](https://jira.dhis2.org/browse/DHIS2-10077): Missing validation for programTrackedEntityAttribute**  
Components: _[API] Tracker_

**[DHIS2-10072](https://jira.dhis2.org/browse/DHIS2-10072): Confusing Tracker validation message when Program and Program stage does not match**  
Components: _[API] Tracker_

**[DHIS2-10021](https://jira.dhis2.org/browse/DHIS2-10021): Repeatable stage validation is missing**  
Components: _[API] Tracker_

**[DHIS2-10020](https://jira.dhis2.org/browse/DHIS2-10020): Misleading message when event payload doesn't have enrollment**  
Components: _[API] Tracker_

**[DHIS2-10013](https://jira.dhis2.org/browse/DHIS2-10013): Redis deserialisation issue on WarningReports**  
Components: _[API] Tracker_

**[DHIS2-10009](https://jira.dhis2.org/browse/DHIS2-10009): Date handeling and validation in NTI not fully working**  
Components: _[API] Tracker_

**[DHIS2-10001](https://jira.dhis2.org/browse/DHIS2-10001): Missing validation for TEI mandatory attributes**  
Components: _[API] Tracker_

**[DHIS2-9996](https://jira.dhis2.org/browse/DHIS2-9996): Importing relationship with null in relationshipType doesn't give error reports**  
Components: _[API] Tracker_

**[DHIS2-9995](https://jira.dhis2.org/browse/DHIS2-9995): Misleading message when relationship constraint property is missing**  
Components: _[API] Tracker_

**[DHIS2-9993](https://jira.dhis2.org/browse/DHIS2-9993): TrackedEntityType defined in the relationship type is not validated for relationships**  
Components: _[API] Tracker_

**[DHIS2-9991](https://jira.dhis2.org/browse/DHIS2-9991): invalid relationship is imported when atomicMode=OBJECT**  
Components: _[API] Tracker_

**[DHIS2-9985](https://jira.dhis2.org/browse/DHIS2-9985): TrackedEntityInstances API should respect both ownership and registration OU for Access control checks.**  
Components: _[API] Tracker_

**[DHIS2-9981](https://jira.dhis2.org/browse/DHIS2-9981): Wrong stats when some events in the payload didn't pass validation**  
Components: _[API] Tracker_

**[DHIS2-9976](https://jira.dhis2.org/browse/DHIS2-9976): NPE in program rules validator when event is invalid**  
Components: _[API] Tracker_

**[DHIS2-9975](https://jira.dhis2.org/browse/DHIS2-9975): Event import fails with category option specified**  
Components: _[API] Tracker_

**[DHIS2-9974](https://jira.dhis2.org/browse/DHIS2-9974): Relationships are imported incorrectly**  
Components: _[API] Tracker_

**[DHIS2-9965](https://jira.dhis2.org/browse/DHIS2-9965): Incorrect validation for duplicate bidirectional relationships**  
Components: _[API] Tracker_

**[DHIS2-9964](https://jira.dhis2.org/browse/DHIS2-9964): NPE when getting TEI relationships**  
Components: _[API] Tracker_

**[DHIS2-9961](https://jira.dhis2.org/browse/DHIS2-9961): Relationship validation is missing**  
Components: _[API] Tracker_

**[DHIS2-9960](https://jira.dhis2.org/browse/DHIS2-9960): Wrong stats when importing relationship**  
Components: _[API] Tracker_

**[DHIS2-9958](https://jira.dhis2.org/browse/DHIS2-9958): Adding an event to an existing enrollment fails with validation error**  
Components: _[API] Tracker_

**[DHIS2-9955](https://jira.dhis2.org/browse/DHIS2-9955): Event is not created when importing to an existing enrollment**  
Components: _[API] Tracker_

**[DHIS2-9951](https://jira.dhis2.org/browse/DHIS2-9951): Posting an event with null value for occurredAt or UpdatedAt fails**  
Components: _[API] Tracker_

**[DHIS2-9946](https://jira.dhis2.org/browse/DHIS2-9946): Missing event validation**  
Components: _[API] Tracker_

**[DHIS2-9943](https://jira.dhis2.org/browse/DHIS2-9943): Error message referring to wrong property name**  
Components: _[API] Tracker_

**[DHIS2-9940](https://jira.dhis2.org/browse/DHIS2-9940): Error message in new tracker importer for OU access incorrect**  
Components: _[API] Tracker_

**[DHIS2-9895](https://jira.dhis2.org/browse/DHIS2-9895): Event import with orgUnitIdScheme doesn't work**  
Components: _[API] Tracker_

**[DHIS2-9894](https://jira.dhis2.org/browse/DHIS2-9894): Internal server error when posting events with user assignment**  
Components: _[API] Tracker_

**[DHIS2-9890](https://jira.dhis2.org/browse/DHIS2-9890): Redis deserialisation issue when using DELETE strategy**  
Components: _[API] Tracker_

**[DHIS2-9888](https://jira.dhis2.org/browse/DHIS2-9888): Internal server error when posting soft deleted event**  
Components: _[API] Tracker_

**[DHIS2-9886](https://jira.dhis2.org/browse/DHIS2-9886):  NPE when importing events with data values**  
Components: _[API] Tracker_

**[DHIS2-9877](https://jira.dhis2.org/browse/DHIS2-9877): NPE when getting an event that was imported with the new tracker importer**  
Components: _[API] Tracker_

**[DHIS2-9856](https://jira.dhis2.org/browse/DHIS2-9856): Exception when importing TEI with relationship**  
Components: _[API] Tracker_

**[DHIS2-9855](https://jira.dhis2.org/browse/DHIS2-9855): NPE when importing TEI with importMode=VALIDATE**  
Components: _[API] Tracker_

**[DHIS2-9852](https://jira.dhis2.org/browse/DHIS2-9852): Lazy init exceptions when updating and deleting TEI**  
Components: _[API] Tracker_

**[DHIS2-9845](https://jira.dhis2.org/browse/DHIS2-9845): Lazy initialisation exception on org units when importing TEIs**  
Components: _[API] Tracker_

**[DHIS2-9843](https://jira.dhis2.org/browse/DHIS2-9843): Incorrect status for unsuccessful tracker import job**  
Components: _[API] Tracker_

**[DHIS2-9825](https://jira.dhis2.org/browse/DHIS2-9825): No error reports or stats when tracker import was unsuccessful**  
Components: _[API] Tracker_

**[DHIS2-9817](https://jira.dhis2.org/browse/DHIS2-9817): Tracker import job doesn't finish**  
Components: _[API] Tracker_

**[DHIS2-9816](https://jira.dhis2.org/browse/DHIS2-9816): Tracker import report is not available when using redis**  
Components: _[API] Tracker_

**[DHIS2-9787](https://jira.dhis2.org/browse/DHIS2-9787): Error while using V{due_date} variable in Enrollment type Program Indicators**  
Components: _[API] Tracker_

**[DHIS2-9628](https://jira.dhis2.org/browse/DHIS2-9628): Tracker Capture - open existing relationship fails when Prog & orgunits differ**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-9625](https://jira.dhis2.org/browse/DHIS2-9625): Fetching for TEIs in a program will not throw an error even though there is a limit on the number of TEI to be returned from a search**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-9564](https://jira.dhis2.org/browse/DHIS2-9564): Enrollment notes - storedBy: "Unknown"**  
Components: _[API] Tracker_

**[DHIS2-9556](https://jira.dhis2.org/browse/DHIS2-9556): Performance degradation on GET /trackedEntityInstances**  
Components: _[API] Tracker_

**[DHIS2-9519](https://jira.dhis2.org/browse/DHIS2-9519): Null pointer exception when importing deleted TEIS**  
Components: _[API] Tracker_

**[DHIS2-9484](https://jira.dhis2.org/browse/DHIS2-9484): Add application event publishing to Tracker Event import for Insert**  
Components: _[API] Tracker_

**[DHIS2-9445](https://jira.dhis2.org/browse/DHIS2-9445): Exported TEIs open in the browser, file is not downloaded**  
Components: _[API] Tracker_, _[App] Import-export_

**[DHIS2-9441](https://jira.dhis2.org/browse/DHIS2-9441): Fix audit creation for Tracker events import**  
Components: _[API] Tracker_

**[DHIS2-9428](https://jira.dhis2.org/browse/DHIS2-9428): Return report information based on TrackerBundleReportMode parameter**  
Components: _[API] Tracker_

**[DHIS2-9415](https://jira.dhis2.org/browse/DHIS2-9415): Avoid querying the notes table when adding/updating events an event has no notes**  
Components: _[API] Tracker_

**[DHIS2-9411](https://jira.dhis2.org/browse/DHIS2-9411): Get Teis Api returns 500 error if assigned user related filters are present**  
Components: _[API] Tracker_

**[DHIS2-9405](https://jira.dhis2.org/browse/DHIS2-9405): Response exposes SQL statement**  
Components: _[API] Tracker_

**[DHIS2-9395](https://jira.dhis2.org/browse/DHIS2-9395): TEAs with data type YES ONLY cannot be unticked (set to false)**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-9351](https://jira.dhis2.org/browse/DHIS2-9351): Request to TrackedEntityInstances fails if there are no hits**  
Components: _[API] Tracker_

**[DHIS2-9288](https://jira.dhis2.org/browse/DHIS2-9288): Validation fails when an object is linked to another object in the payload**  
Components: _[API] Tracker_

**[DHIS2-9287](https://jira.dhis2.org/browse/DHIS2-9287): Implement count stats for new tracker importer report**  
Components: _[API] Tracker_

**[DHIS2-9286](https://jira.dhis2.org/browse/DHIS2-9286): Handle exceptions in new tracker importer job and notify in job summary**  
Components: _[API] Tracker_

**[DHIS2-9285](https://jira.dhis2.org/browse/DHIS2-9285): Fix the lazy initialization bug when using the new tracker importer api**  
Components: _[API] Tracker_

**[DHIS2-9127](https://jira.dhis2.org/browse/DHIS2-9127): SQL Injection possible with "assignedUser" url parameter**  
Components: _[API] Tracker_

**[DHIS2-8911](https://jira.dhis2.org/browse/DHIS2-8911): Tracker API allow setting an arbitrary string as "storedBy" for Tracked Entity Attribute Values and Data Element Values**  
Components: _[API] Tracker_

**[DHIS2-8910](https://jira.dhis2.org/browse/DHIS2-8910): Tracker API allows saving Data Values not linked to the selected Program Stage**  
Components: _[API] Tracker_

**[DHIS2-8872](https://jira.dhis2.org/browse/DHIS2-8872): Invalid report from Tracker when importing enrollment with events**  
Components: _[API] Tracker_

**[DHIS2-8442](https://jira.dhis2.org/browse/DHIS2-8442): Missing audit entry for TEI hard deletion**  
Components: _[API] Tracker_

**[DHIS2-8411](https://jira.dhis2.org/browse/DHIS2-8411): program notification templates persist when deleted through UI**  
Components: _[API] Tracker_, _[App] Maintenance_

**[DHIS2-7983](https://jira.dhis2.org/browse/DHIS2-7983): Multiple Events can be created for a non-repeatable program stage when sent in the same API payload.**  
Components: _[API] Tracker_

**[DHIS2-7573](https://jira.dhis2.org/browse/DHIS2-7573): Problem creating relationships with empty TEA of type Image**  
Components: _[API] Tracker_

**[DHIS2-6531](https://jira.dhis2.org/browse/DHIS2-6531): Can not delete assigned user on events**  
Components: _[API] Tracker_

**[DHIS2-10660](https://jira.dhis2.org/browse/DHIS2-10660): Can't PUT Dashboard without overriding translations and sharing**  
Components: _[API] Translations_

**[DHIS2-9618](https://jira.dhis2.org/browse/DHIS2-9618): Database translations not working in 2.35**  
Components: _[API] Translations_

**[DHIS2-10135](https://jira.dhis2.org/browse/DHIS2-10135): User App Pagination issue (existing in 2.35.1)**  
Components: _[API] User_

**[DHIS2-9454](https://jira.dhis2.org/browse/DHIS2-9454): User API NextPage Only Shows One User per Page**  
Components: _[API] User_, _[App] User_

**[DHIS2-8963](https://jira.dhis2.org/browse/DHIS2-8963): Wrong user retrieved in getCurrentUser() on HibernateIdentifiableObjectStore**  
Components: _[API] User_

**[DHIS2-8947](https://jira.dhis2.org/browse/DHIS2-8947): User search paging issue**  
Components: _[API] User_

**[DHIS2-4527](https://jira.dhis2.org/browse/DHIS2-4527): Validation of email on the user created/edit screen is not precise enough**  
Components: _[API] User_, _[App] User_

**[DHIS2-10415](https://jira.dhis2.org/browse/DHIS2-10415): Cache constant map for performance**  
Components: _[API] Validation_

**[DHIS2-10336](https://jira.dhis2.org/browse/DHIS2-10336): Validation fails when all data elements referenced with catOptionCombos also referenced without them**  
Components: _[API] Validation_

**[DHIS2-10859](https://jira.dhis2.org/browse/DHIS2-10859): App Management App self-update version comparison is incorrect**  
Components: _[App] App management_

**[DHIS2-10791](https://jira.dhis2.org/browse/DHIS2-10791): Cache cleaner selections not working**  
Components: _[App] Cache cleaner_

**[DHIS2-10632](https://jira.dhis2.org/browse/DHIS2-10632): No translations in Cache Cleaner App**  
Components: _[App] Cache cleaner_

**[DHIS2-9498](https://jira.dhis2.org/browse/DHIS2-9498): Capture app user caches are not deleted along with the main cache**  
Components: _[App] Cache cleaner_

**[DHIS2-9492](https://jira.dhis2.org/browse/DHIS2-9492): Error "Uncaught undefined"in the console when trying to clear in cache cleaner app.**  
Components: _[App] Cache cleaner_

**[DHIS2-10830](https://jira.dhis2.org/browse/DHIS2-10830): Capture app crashes when organisationUnits undefined**  
Components: _[App] Capture_

**[DHIS2-10765](https://jira.dhis2.org/browse/DHIS2-10765): Form names not showing in new Capture app**  
Components: _[App] Capture_

**[DHIS2-10739](https://jira.dhis2.org/browse/DHIS2-10739): Max TEI count message is not handled by the capture app**  
Components: _[App] Capture_

**[DHIS2-10738](https://jira.dhis2.org/browse/DHIS2-10738): After searching multiple times capture app crashes**  
Components: _[App] Capture_

**[DHIS2-10723](https://jira.dhis2.org/browse/DHIS2-10723): Capturing polygon fails**  
Components: _[App] Capture_

**[DHIS2-10716](https://jira.dhis2.org/browse/DHIS2-10716): Display value directly if option not found in the working lists**  
Components: _[App] Capture_

**[DHIS2-10715](https://jira.dhis2.org/browse/DHIS2-10715): Slow TEI listing due to attribute order**  
Components: _[App] Capture_

**[DHIS2-10713](https://jira.dhis2.org/browse/DHIS2-10713): LIKE is used instead of EQ when filtering by option set attribute**  
Components: _[App] Capture_

**[DHIS2-10712](https://jira.dhis2.org/browse/DHIS2-10712): Excessive /count queries when registering a TEI**  
Components: _[App] Capture_

**[DHIS2-10711](https://jira.dhis2.org/browse/DHIS2-10711): Duplicate calls to /generate when filling out enrolment form**  
Components: _[App] Capture_

**[DHIS2-10645](https://jira.dhis2.org/browse/DHIS2-10645): Change icon of the capture-app**  
Components: _[App] Capture_

**[DHIS2-10584](https://jira.dhis2.org/browse/DHIS2-10584): Selecting invalid program and org.unit combination causes error**  
Components: _[App] Capture_

**[DHIS2-10500](https://jira.dhis2.org/browse/DHIS2-10500): Tracker program stored in memory has repeatedly the same information**  
Components: _[App] Capture_

**[DHIS2-10493](https://jira.dhis2.org/browse/DHIS2-10493): Preserve sharing settings when updating working list**  
Components: _[App] Capture_

**[DHIS2-10461](https://jira.dhis2.org/browse/DHIS2-10461): Date filters are not preserved when saving working lists (eventFilters)**  
Components: _[App] Capture_

**[DHIS2-10398](https://jira.dhis2.org/browse/DHIS2-10398): new param restrictToCaptureScope=true break down our instances**  
Components: _[App] Capture_

**[DHIS2-10363](https://jira.dhis2.org/browse/DHIS2-10363): In search page TEType is shown on the dropdown menu even when user has no access to view**  
Components: _[App] Capture_

**[DHIS2-10206](https://jira.dhis2.org/browse/DHIS2-10206): Message on leaving page without saving is not working on registration page**  
Components: _[App] Capture_

**[DHIS2-10205](https://jira.dhis2.org/browse/DHIS2-10205): Profile section form validation is not working correctly**  
Components: _[App] Capture_

**[DHIS2-10142](https://jira.dhis2.org/browse/DHIS2-10142): While in registration page there is text referring to searching instead of creating**  
Components: _[App] Capture_

**[DHIS2-10141](https://jira.dhis2.org/browse/DHIS2-10141): Sum concatenates when a value is null**  
Components: _[App] Capture_

**[DHIS2-10070](https://jira.dhis2.org/browse/DHIS2-10070): Lag in Capture app for Large Event Program**  
Components: _[App] Capture_, _[App] Event capture_

**[DHIS2-10065](https://jira.dhis2.org/browse/DHIS2-10065): 2.35.0 COCs not found using Capture App**  
Components: _[App] Capture_

**[DHIS2-9989](https://jira.dhis2.org/browse/DHIS2-9989): User message text has invalid special character**  
Components: _[App] Capture_

**[DHIS2-9931](https://jira.dhis2.org/browse/DHIS2-9931): Inconsistent use of "Find" and "Search"**  
Components: _[App] Capture_

**[DHIS2-9827](https://jira.dhis2.org/browse/DHIS2-9827): The loading indicator that is being displayed without any height in some cases.**  
Components: _[App] Capture_

**[DHIS2-9793](https://jira.dhis2.org/browse/DHIS2-9793): Text is not aligned correctly**  
Components: _[App] Capture_

**[DHIS2-9785](https://jira.dhis2.org/browse/DHIS2-9785): Capture app crashes when there is no public acess for one of the tracked entity type**  
Components: _[App] Capture_

**[DHIS2-9709](https://jira.dhis2.org/browse/DHIS2-9709): Capture app rules engine: assigning boolean values doesn't work**  
Components: _[App] Capture_

**[DHIS2-9664](https://jira.dhis2.org/browse/DHIS2-9664): Assignee filter fails when reloading working list**  
Components: _[App] Capture_

**[DHIS2-9663](https://jira.dhis2.org/browse/DHIS2-9663): Name can not be filled in when creating a working list / view**  
Components: _[App] Capture_

**[DHIS2-9584](https://jira.dhis2.org/browse/DHIS2-9584): Getting access error when adding events eventhough the user is having read/write access to the program**  
Components: _[App] Capture_

**[DHIS2-9565](https://jira.dhis2.org/browse/DHIS2-9565): Getting error when trying to save events for the program which has has category combination**  
Components: _[App] Capture_

**[DHIS2-9489](https://jira.dhis2.org/browse/DHIS2-9489): Program rule action "Send message" is not working**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-9295](https://jira.dhis2.org/browse/DHIS2-9295): Capture App does not display all events entered for non-super user account**  
Components: _[App] Capture_

**[DHIS2-9246](https://jira.dhis2.org/browse/DHIS2-9246): Remove total pages from the search results list**  
Components: _[App] Capture_

**[DHIS2-9198](https://jira.dhis2.org/browse/DHIS2-9198): search with attributes wont show dropdown menu in certain cases.**  
Components: _[App] Capture_

**[DHIS2-8705](https://jira.dhis2.org/browse/DHIS2-8705): Remove total pages from the event list**  
Components: _[App] Capture_

**[DHIS2-5490](https://jira.dhis2.org/browse/DHIS2-5490): Program indicators concatenating numerical TEAs when null**  
Components: _[App] Capture_

**[DHIS2-10097](https://jira.dhis2.org/browse/DHIS2-10097): React is not available after core resource app was removed**  
Components: _[App] Core resource_, _[App] Data entry_

**[DHIS2-10787](https://jira.dhis2.org/browse/DHIS2-10787): Maps, EV, ER do not resize to fill screen when entering fullscreen on dashboard**  
Components: _[App] Dashboard_

**[DHIS2-10625](https://jira.dhis2.org/browse/DHIS2-10625): Avoid loading all user groups in interpretation comment**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-10045](https://jira.dhis2.org/browse/DHIS2-10045): Error on navigating to dashboard app**  
Components: _[App] Dashboard_

**[DHIS2-9980](https://jira.dhis2.org/browse/DHIS2-9980): Dashboard crashes when selecting Org unit filter and Interpretations don't open**  
Components: _[App] Dashboard_

**[DHIS2-9738](https://jira.dhis2.org/browse/DHIS2-9738): Dashboards app doesn't load when database is empty**  
Components: _[App] Dashboard_

**[DHIS2-9725](https://jira.dhis2.org/browse/DHIS2-9725): Adding an organisation unit filter to a dashboard with a widget crashes the dashboard**  
Components: _[App] Dashboard_

**[DHIS2-9715](https://jira.dhis2.org/browse/DHIS2-9715): Combination/multi-axis charts not shown as expected on dashboard**  
Components: _[App] Dashboard_

**[DHIS2-9599](https://jira.dhis2.org/browse/DHIS2-9599): Dashboard "View as chart" doesn't match visualization in DV**  
Components: _[App] Dashboard_

**[DHIS2-9593](https://jira.dhis2.org/browse/DHIS2-9593): Switch to map causes misrender of other maps**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-9590](https://jira.dhis2.org/browse/DHIS2-9590): Switching view on an item affects any item having the same visualization**  
Components: _[App] Dashboard_

**[DHIS2-9589](https://jira.dhis2.org/browse/DHIS2-9589): Switching View to Edit mode when item has a switched view**  
Components: _[App] Dashboard_

**[DHIS2-9588](https://jira.dhis2.org/browse/DHIS2-9588): Too much space in item title when it wraps**  
Components: _[App] Dashboard_

**[DHIS2-9560](https://jira.dhis2.org/browse/DHIS2-9560): Dashboard filter dialog isn't cleared after removing filter**  
Components: _[App] Dashboard_

**[DHIS2-9558](https://jira.dhis2.org/browse/DHIS2-9558): Console warning: too many WebGL contexts**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-9508](https://jira.dhis2.org/browse/DHIS2-9508): Degraded performance on Dashboard**  
Components: _[App] Dashboard_

**[DHIS2-9453](https://jira.dhis2.org/browse/DHIS2-9453): Removing dashboard filter causes corrupted app state**  
Components: _[App] Dashboard_

**[DHIS2-9442](https://jira.dhis2.org/browse/DHIS2-9442): Edit print preview of new dashboard shows wrong title**  
Components: _[App] Dashboard_

**[DHIS2-9382](https://jira.dhis2.org/browse/DHIS2-9382): Interpretations panel does not support rich text correctly**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-9202](https://jira.dhis2.org/browse/DHIS2-9202): Help Page Link does not work in all apps**  
Components: _[App] Dashboard_, _[App] Settings_

**[DHIS2-7764](https://jira.dhis2.org/browse/DHIS2-7764): [analytics apps] Sharing dialog does not paginate results**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-7016](https://jira.dhis2.org/browse/DHIS2-7016): Dashboard not logging use on first load for 2.30+**  
Components: _[App] Dashboard_

**[DHIS2-10869](https://jira.dhis2.org/browse/DHIS2-10869): Internal server error when deleting single Lock exception**  
Components: _[App] Data administration_

**[DHIS2-10868](https://jira.dhis2.org/browse/DHIS2-10868): Batch Deletion button on Lock Exceptions generates error**  
Components: _[App] Data administration_

**[DHIS2-10700](https://jira.dhis2.org/browse/DHIS2-10700): Error on opening Data administration app**  
Components: _[App] Data administration_

**[DHIS2-7726](https://jira.dhis2.org/browse/DHIS2-7726): Adjust analytics and resource tables section to work with revised API response payload**  
Components: _[App] Data administration_

**[DHIS2-10653](https://jira.dhis2.org/browse/DHIS2-10653): Remove the word "asdas" in Multi organisation unit forms**  
Components: _[App] Data entry_

**[DHIS2-10358](https://jira.dhis2.org/browse/DHIS2-10358): Column Totals not working in sections forms**  
Components: _[App] Data entry_

**[DHIS2-9032](https://jira.dhis2.org/browse/DHIS2-9032): Weekly in data Entry**  
Components: _[App] Data entry_

**[DHIS2-2510](https://jira.dhis2.org/browse/DHIS2-2510): Allow for implied 0s for non decimals between 0 and 1**  
Components: _[App] Data entry_

**[DHIS2-10813](https://jira.dhis2.org/browse/DHIS2-10813): The End date doesn't change on Validation Rule Analysis and Outlier detection sections of Data Quality App**  
Components: _[App] Data quality_

**[DHIS2-10771](https://jira.dhis2.org/browse/DHIS2-10771): Cannot deselect org unit in Validation rule analysis org unit tree**  
Components: _[App] Data quality_

**[DHIS2-10735](https://jira.dhis2.org/browse/DHIS2-10735): Wrong query param and default value for ordering in outlier detection**  
Components: _[App] Data quality_

**[DHIS2-10731](https://jira.dhis2.org/browse/DHIS2-10731): Scrollable options apear behind multi-select filter field**  
Components: _[App] Data quality_

**[DHIS2-10246](https://jira.dhis2.org/browse/DHIS2-10246): [Data Quality App] Unregister service worker**  
Components: _[App] Data quality_

**[DHIS2-10216](https://jira.dhis2.org/browse/DHIS2-10216): Localisations not showing in Data Quality app**  
Components: _[App] Data quality_

**[DHIS2-7523](https://jira.dhis2.org/browse/DHIS2-7523): Uploading to data store unsorts object keys**  
Components: _[App] Data store_

**[DHIS2-10990](https://jira.dhis2.org/browse/DHIS2-10990): Sharing is reverted when visualisation is saved**  
Components: _[App] Data visualizer_

**[DHIS2-10945](https://jira.dhis2.org/browse/DHIS2-10945): Error when "All types" data type is chosen**  
Components: _[App] Data visualizer_

**[DHIS2-10788](https://jira.dhis2.org/browse/DHIS2-10788): Visualizations rendering twice**  
Components: _[App] Data visualizer_

**[DHIS2-10692](https://jira.dhis2.org/browse/DHIS2-10692): Data visualizer only selects first 50 items for SELECT ALL**  
Components: _[App] Data visualizer_

**[DHIS2-10611](https://jira.dhis2.org/browse/DHIS2-10611): Debounce on visualization search does not work**  
Components: _[App] Data visualizer_

**[DHIS2-10514](https://jira.dhis2.org/browse/DHIS2-10514): Context menus have a double bottom border**  
Components: _[App] Data visualizer_

**[DHIS2-10329](https://jira.dhis2.org/browse/DHIS2-10329): Custom error messages are missing**  
Components: _[App] Data visualizer_

**[DHIS2-10289](https://jira.dhis2.org/browse/DHIS2-10289): Patterns palette is missing in DV options dialog**  
Components: _[App] Data visualizer_

**[DHIS2-10251](https://jira.dhis2.org/browse/DHIS2-10251): Skip rounding option missing from most vis types**  
Components: _[App] Data visualizer_

**[DHIS2-10249](https://jira.dhis2.org/browse/DHIS2-10249): Limit values not supported by some vis types**  
Components: _[App] Data visualizer_

**[DHIS2-10196](https://jira.dhis2.org/browse/DHIS2-10196): Visualization type selector help text inconsistencies**  
Components: _[App] Data visualizer_

**[DHIS2-9876](https://jira.dhis2.org/browse/DHIS2-9876): "New" button has no effect on unsaved charts**  
Components: _[App] Data visualizer_

**[DHIS2-9829](https://jira.dhis2.org/browse/DHIS2-9829): Trendline render behind column**  
Components: _[App] Data visualizer_

**[DHIS2-9789](https://jira.dhis2.org/browse/DHIS2-9789): Analytics data value set dynamic filters set as dimensions in download**  
Components: _[App] Data visualizer_

**[DHIS2-9729](https://jira.dhis2.org/browse/DHIS2-9729): Data visualizer - normal weekly charts only update x-axis on Wednesday 00 hours**  
Components: _[App] Data visualizer_

**[DHIS2-9633](https://jira.dhis2.org/browse/DHIS2-9633): Negative numbers with N%3 digits display extra DGS**  
Components: _[App] Data visualizer_

**[DHIS2-9549](https://jira.dhis2.org/browse/DHIS2-9549): Issues related to saving of chart label text styling**  
Components: _[App] Data visualizer_

**[DHIS2-9548](https://jira.dhis2.org/browse/DHIS2-9548): Visualization name erased when re-saving**  
Components: _[App] Data visualizer_

**[DHIS2-9547](https://jira.dhis2.org/browse/DHIS2-9547): Dropdowns hidden behind modal dialogs**  
Components: _[App] Data visualizer_

**[DHIS2-9521](https://jira.dhis2.org/browse/DHIS2-9521): Chart labels using wrong color**  
Components: _[App] Data visualizer_

**[DHIS2-9506](https://jira.dhis2.org/browse/DHIS2-9506): Separate scale for title and axis font size**  
Components: _[App] Data visualizer_

**[DHIS2-9486](https://jira.dhis2.org/browse/DHIS2-9486): Font and radio button size are too big in Legend option's tab**  
Components: _[App] Data visualizer_

**[DHIS2-9483](https://jira.dhis2.org/browse/DHIS2-9483): Visualization PDF Download Not Working**  
Components: _[App] Data visualizer_

**[DHIS2-9026](https://jira.dhis2.org/browse/DHIS2-9026): Org Unit Group in columns download as UID in pivot table (HTML/Excel/CSV)**  
Components: _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-8174](https://jira.dhis2.org/browse/DHIS2-8174): Hide Empty Categories not functioning in Visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-6824](https://jira.dhis2.org/browse/DHIS2-6824): Period selector says "selected data" instead of "selected periods"**  
Components: _[App] Data visualizer_

**[DHIS2-10379](https://jira.dhis2.org/browse/DHIS2-10379): Cannot see the fixed period selection field in Event Reports**  
Components: _[App] Event reports_

**[DHIS2-10355](https://jira.dhis2.org/browse/DHIS2-10355): In pivot tables two relative period are selected**  
Components: _[App] Event reports_, _[App] Pivot table_, _[App] Settings_

**[DHIS2-10163](https://jira.dhis2.org/browse/DHIS2-10163): Event Reports 'breaks' with Data Elements, Attributes and Program Indicators selected**  
Components: _[App] Event reports_

**[DHIS2-9839](https://jira.dhis2.org/browse/DHIS2-9839): Enrollment Line List in Event Report cannot sort with DEs from multiple stages**  
Components: _[App] Event reports_

**[DHIS2-9096](https://jira.dhis2.org/browse/DHIS2-9096): Org unit fields that are not Event org units give blank output in Event Analysis apps**  
Components: _[App] Event reports_

**[DHIS2-8905](https://jira.dhis2.org/browse/DHIS2-8905): Data elements from multiple stages cannot be restored after saving**  
Components: _[App] Event reports_

**[DHIS2-6134](https://jira.dhis2.org/browse/DHIS2-6134): AttributeCombos/DataSetAttributes/CategoryCombos not restricted properly in Event Reports**  
Components: _[App] Event reports_

**[DHIS2-7997](https://jira.dhis2.org/browse/DHIS2-7997): Push analytics - dashboards with map items export useless "link"**  
Components: _[App] GIS_, _[App] Maintenance_

**[DHIS2-10200](https://jira.dhis2.org/browse/DHIS2-10200): Null Pointer Exception in Metadata Import**  
Components: _[App] Import-export_

**[DHIS2-9632](https://jira.dhis2.org/browse/DHIS2-9632): Getting error "java.lang.ClassCastException@xxxxxx" when trying to do metadata import in xml format.**  
Components: _[App] Import-export_

**[DHIS2-9613](https://jira.dhis2.org/browse/DHIS2-9613): AlertBar component uses a lot of CPU and freezes page**  
Components: _[App] Import-export_

**[DHIS2-9546](https://jira.dhis2.org/browse/DHIS2-9546): Missing general error at end of form**  
Components: _[App] Import-export_

**[DHIS2-9545](https://jira.dhis2.org/browse/DHIS2-9545): Unclear if 'accessible' and 'capture' units overrride org.unit selection**  
Components: _[App] Import-export_

**[DHIS2-9523](https://jira.dhis2.org/browse/DHIS2-9523): Remove async option for TEI import**  
Components: _[App] Import-export_

**[DHIS2-9496](https://jira.dhis2.org/browse/DHIS2-9496): Add download flag to dataValueSets and trackedEntityInstances**  
Components: _[App] Import-export_

**[DHIS2-9493](https://jira.dhis2.org/browse/DHIS2-9493): Display icons for Import / Export section headers in menu**  
Components: _[App] Import-export_

**[DHIS2-9490](https://jira.dhis2.org/browse/DHIS2-9490): Difficult to read technical terms prefixing options**  
Components: _[App] Import-export_

**[DHIS2-9488](https://jira.dhis2.org/browse/DHIS2-9488): Export: missing user feedback when processing**  
Components: _[App] Import-export_

**[DHIS2-9472](https://jira.dhis2.org/browse/DHIS2-9472): Alert is positioned incorrectly**  
Components: _[App] Import-export_

**[DHIS2-9470](https://jira.dhis2.org/browse/DHIS2-9470): Label describing DELETE strategy is incorrect**  
Components: _[App] Import-export_

**[DHIS2-9447](https://jira.dhis2.org/browse/DHIS2-9447): Async data value import doesn't produce import summaries**  
Components: _[App] Import-export_

**[DHIS2-9440](https://jira.dhis2.org/browse/DHIS2-9440): Org units should be ordered alphabetically**  
Components: _[App] Import-export_

**[DHIS2-9404](https://jira.dhis2.org/browse/DHIS2-9404): Missing format extension in the TEI export url**  
Components: _[App] Import-export_

**[DHIS2-9403](https://jira.dhis2.org/browse/DHIS2-9403): Malformed URL when exporting teis with programStatus=ALL**  
Components: _[App] Import-export_

**[DHIS2-9402](https://jira.dhis2.org/browse/DHIS2-9402): Translations are not supported in import-export app**  
Components: _[App] Import-export_

**[DHIS2-9401](https://jira.dhis2.org/browse/DHIS2-9401): Change label from "meta data" to "metadata"**  
Components: _[App] Import-export_

**[DHIS2-9400](https://jira.dhis2.org/browse/DHIS2-9400): Successful import has a "conflicts" tag added**  
Components: _[App] Import-export_

**[DHIS2-9398](https://jira.dhis2.org/browse/DHIS2-9398): Error when recreating a metadata import job**  
Components: _[App] Import-export_

**[DHIS2-9397](https://jira.dhis2.org/browse/DHIS2-9397): Error when exporting events in all formats with compression**  
Components: _[App] Import-export_

**[DHIS2-9396](https://jira.dhis2.org/browse/DHIS2-9396): Error when exporting metadata in CSV and XML formats**  
Components: _[App] Import-export_

**[DHIS2-9188](https://jira.dhis2.org/browse/DHIS2-9188): App crashes when doing import with async = false**  
Components: _[App] Import-export_

**[DHIS2-3602](https://jira.dhis2.org/browse/DHIS2-3602): Event Import: Incorrect Text when missing Attribute Option Combo**  
Components: _[App] Import-export_

**[DHIS2-9712](https://jira.dhis2.org/browse/DHIS2-9712): User avatar display U instead of correct initials**  
Components: _[App] Interpretations_

**[DHIS2-10635](https://jira.dhis2.org/browse/DHIS2-10635): No translations in Scheduler App**  
Components: _[App] Job scheduler_

**[DHIS2-10606](https://jira.dhis2.org/browse/DHIS2-10606): Run job menu item should only be available if job is enabled**  
Components: _[App] Job scheduler_

**[DHIS2-10464](https://jira.dhis2.org/browse/DHIS2-10464): Sharing section is missing in program access page**  
Components: _[App] Maintenance_

**[DHIS2-10354](https://jira.dhis2.org/browse/DHIS2-10354): SQL View does not show grid**  
Components: _[App] Maintenance_

**[DHIS2-9969](https://jira.dhis2.org/browse/DHIS2-9969): Identify and fix regressions due to schema changes**  
Components: _[App] Maintenance_

**[DHIS2-9913](https://jira.dhis2.org/browse/DHIS2-9913): Labels for "Numerator Description" and "Denominator Description"**  
Components: _[App] Maintenance_, _[App] Translations_

**[DHIS2-9860](https://jira.dhis2.org/browse/DHIS2-9860): Hierarchy operations only moves first 50 selected**  
Components: _[App] Maintenance_

**[DHIS2-9412](https://jira.dhis2.org/browse/DHIS2-9412): Error when trying to create new program rule**  
Components: _[App] Maintenance_

**[DHIS2-9023](https://jira.dhis2.org/browse/DHIS2-9023): Un-informative message if deletion of programstagesection is blocked by programruleaction**  
Components: _[App] Maintenance_

**[DHIS2-6191](https://jira.dhis2.org/browse/DHIS2-6191): Error creating a program if the user only has authority to create private programs**  
Components: _[App] Maintenance_

**[DHIS2-10882](https://jira.dhis2.org/browse/DHIS2-10882): Extra slash / in base url**  
Components: _[App] Maps_

**[DHIS2-10846](https://jira.dhis2.org/browse/DHIS2-10846): Headerbar and File Menu translations don't load**  
Components: _[App] Maps_

**[DHIS2-10807](https://jira.dhis2.org/browse/DHIS2-10807): Maps only receiving 50 events from the api**  
Components: _[App] Maps_

**[DHIS2-10684](https://jira.dhis2.org/browse/DHIS2-10684): Maps don't load on the dashboard**  
Components: _[App] Maps_

**[DHIS2-10604](https://jira.dhis2.org/browse/DHIS2-10604): Error when loading EE maps on the dasboard**  
Components: _[App] Maps_

**[DHIS2-10586](https://jira.dhis2.org/browse/DHIS2-10586): Update data table after EE aggregations are available**  
Components: _[App] Maps_

**[DHIS2-10585](https://jira.dhis2.org/browse/DHIS2-10585): Update file menu when map is saved**  
Components: _[App] Maps_

**[DHIS2-10582](https://jira.dhis2.org/browse/DHIS2-10582): Keep palette and support decimals for EE layers**  
Components: _[App] Maps_

**[DHIS2-10071](https://jira.dhis2.org/browse/DHIS2-10071): Not possible to close right-click menu for dashboard maps**  
Components: _[App] Maps_

**[DHIS2-9733](https://jira.dhis2.org/browse/DHIS2-9733): Not possible to change start/end dates for thematic layers**  
Components: _[App] Maps_

**[DHIS2-9701](https://jira.dhis2.org/browse/DHIS2-9701): Automatic legend doesn't work with negative values**  
Components: _[App] Maps_

**[DHIS2-9698](https://jira.dhis2.org/browse/DHIS2-9698): Thematic layer with start/end dates breaks the app for data element,program Indicator, reporting rates, event data items**  
Components: _[App] Maps_

**[DHIS2-9634](https://jira.dhis2.org/browse/DHIS2-9634): "Incude relationships that connect entities outside program" sometime REDUCES the set of relationships rendered**  
Components: _[App] Maps_

**[DHIS2-9602](https://jira.dhis2.org/browse/DHIS2-9602): Dashboard "View as map" doesn't match visualization in Maps**  
Components: _[App] Maps_

**[DHIS2-9592](https://jira.dhis2.org/browse/DHIS2-9592): Date fields disappears when updated using keyboard**  
Components: _[App] Maps_

**[DHIS2-9570](https://jira.dhis2.org/browse/DHIS2-9570): Remove blue focus border around map container**  
Components: _[App] Maps_

**[DHIS2-9543](https://jira.dhis2.org/browse/DHIS2-9543): Wrong period shown in thematic layer popup**  
Components: _[App] Maps_

**[DHIS2-9536](https://jira.dhis2.org/browse/DHIS2-9536): Sharing settings for maps reset after editing**  
Components: _[App] Maps_

**[DHIS2-9522](https://jira.dhis2.org/browse/DHIS2-9522): Map is not always resized when data table is dragged**  
Components: _[App] Maps_

**[DHIS2-9504](https://jira.dhis2.org/browse/DHIS2-9504): Issue with editing already saved event map with period type start/end dates**  
Components: _[App] Maps_

**[DHIS2-8658](https://jira.dhis2.org/browse/DHIS2-8658): Maps app: Non-translatable fields**  
Components: _[App] Maps_

**[DHIS2-10576](https://jira.dhis2.org/browse/DHIS2-10576): No translations in Messaging App**  
Components: _[App] Messaging_

**[DHIS2-10508](https://jira.dhis2.org/browse/DHIS2-10508): Don't use system path lib for joining URLs**  
Components: _[App] Messaging_

**[DHIS2-9849](https://jira.dhis2.org/browse/DHIS2-9849): Message attachements can't be opened in messaging app**  
Components: _[App] Messaging_

**[DHIS2-10301](https://jira.dhis2.org/browse/DHIS2-10301): Login page does not show favicon**  
Components: _[App] Other_

**[DHIS2-9550](https://jira.dhis2.org/browse/DHIS2-9550): About page text is right-aligned**  
Components: _[App] Other_

**[DHIS2-10609](https://jira.dhis2.org/browse/DHIS2-10609): Reports app is loading all visualizations from API**  
Components: _[App] Reports_

**[DHIS2-9908](https://jira.dhis2.org/browse/DHIS2-9908): Missing Label when selecting Quarterly as period type in Report apps**  
Components: _[App] Reports_

**[DHIS2-9596](https://jira.dhis2.org/browse/DHIS2-9596): Alert when generating reports without period selection**  
Components: _[App] Reports_

**[DHIS2-9595](https://jira.dhis2.org/browse/DHIS2-9595): Console error when generating a report**  
Components: _[App] Reports_

**[DHIS2-9594](https://jira.dhis2.org/browse/DHIS2-9594): Styling is not applied to the data set reports**  
Components: _[App] Reports_

**[DHIS2-9368](https://jira.dhis2.org/browse/DHIS2-9368): Translations/localisations not displayed on Reports App**  
Components: _[App] Reports_

**[DHIS2-8844](https://jira.dhis2.org/browse/DHIS2-8844): Changes of Report app replaced all the data modal function existed before**  
Components: _[App] Reports_

**[DHIS2-10502](https://jira.dhis2.org/browse/DHIS2-10502): Unregistered parser cannot parse command string**  
Components: _[App] SMS configuration_

**[DHIS2-9932](https://jira.dhis2.org/browse/DHIS2-9932): [SMS Configuration]: Show correct formula after editing formula**  
Components: _[App] SMS configuration_

**[DHIS2-9905](https://jira.dhis2.org/browse/DHIS2-9905): [SMS Configuration]: Fix broken formula in sms commands section**  
Components: _[App] SMS configuration_

**[DHIS2-9866](https://jira.dhis2.org/browse/DHIS2-9866): Sent SMS section doesn't filter-params, page and pageSize in the URL**  
Components: _[App] SMS configuration_

**[DHIS2-9865](https://jira.dhis2.org/browse/DHIS2-9865): Received SMS section filter broken when using both filter fields**  
Components: _[App] SMS configuration_

**[DHIS2-9694](https://jira.dhis2.org/browse/DHIS2-9694): Failing to update clickatell gateway without token**  
Components: _[App] SMS configuration_

**[DHIS2-9598](https://jira.dhis2.org/browse/DHIS2-9598): Impossible to update bulk gateway without knowing the password**  
Components: _[App] SMS configuration_

**[DHIS2-9591](https://jira.dhis2.org/browse/DHIS2-9591): Save button is disabled after removing special character**  
Components: _[App] SMS configuration_

**[DHIS2-9583](https://jira.dhis2.org/browse/DHIS2-9583): Missing help text for the key value pairs**  
Components: _[App] SMS configuration_

**[DHIS2-9582](https://jira.dhis2.org/browse/DHIS2-9582): Confidential field doesn't display the value**  
Components: _[App] SMS configuration_

**[DHIS2-9577](https://jira.dhis2.org/browse/DHIS2-9577): Sent and Reveived SMS messages should be listed in reverse-chronological order**  
Components: _[App] SMS configuration_

**[DHIS2-9576](https://jira.dhis2.org/browse/DHIS2-9576): Filters on the Received tab are not functional**  
Components: _[App] SMS configuration_

**[DHIS2-9479](https://jira.dhis2.org/browse/DHIS2-9479): Key for notifications causing error for duplicate messages**  
Components: _[App] SMS configuration_

**[DHIS2-9478](https://jira.dhis2.org/browse/DHIS2-9478): Crash when editing event registration parser**  
Components: _[App] SMS configuration_

**[DHIS2-10996](https://jira.dhis2.org/browse/DHIS2-10996): Program rules: Leading zeros removed from text**  
Components: _[App] Tracker capture_

**[DHIS2-10804](https://jira.dhis2.org/browse/DHIS2-10804): Program icons are missing**  
Components: _[App] Tracker capture_

**[DHIS2-10719](https://jira.dhis2.org/browse/DHIS2-10719): Tracker capture app doesn't display full TEI information when rerouting from capture**  
Components: _[App] Tracker capture_

**[DHIS2-10548](https://jira.dhis2.org/browse/DHIS2-10548): Inefficient query on /api/enrollments causes heap explosion**  
Components: _[App] Tracker capture_

**[DHIS2-9935](https://jira.dhis2.org/browse/DHIS2-9935): Program rule action "Send message" is not working when the first stage appears on the registration page**  
Components: _[App] Tracker capture_

**[DHIS2-9559](https://jira.dhis2.org/browse/DHIS2-9559): Error when trying to remove the uploaded file in tracker capture**  
Components: _[App] Tracker capture_

**[DHIS2-9410](https://jira.dhis2.org/browse/DHIS2-9410): Error when creating new TEI in tracker capture**  
Components: _[App] Tracker capture_

**[DHIS2-9335](https://jira.dhis2.org/browse/DHIS2-9335): Simultaneously adding relationships to same TEI**  
Components: _[App] Tracker capture_

**[DHIS2-8950](https://jira.dhis2.org/browse/DHIS2-8950): Bidirectional Relationships give Unknown Error when created from To Constraint**  
Components: _[App] Tracker capture_

**[DHIS2-8903](https://jira.dhis2.org/browse/DHIS2-8903): Deleting Tracker point coordinates result in 0,0 being stored**  
Components: _[App] Tracker capture_

**[DHIS2-5902](https://jira.dhis2.org/browse/DHIS2-5902): Tracker capture data entry navigation tab through fields**  
Components: _[App] Tracker capture_

**[DHIS2-5835](https://jira.dhis2.org/browse/DHIS2-5835): Percentage data values do not accept floats**  
Components: _[App] Tracker capture_

**[DHIS2-10636](https://jira.dhis2.org/browse/DHIS2-10636): No translations in Usage Analytics App**  
Components: _[App] Usage analytics_

**[DHIS2-10717](https://jira.dhis2.org/browse/DHIS2-10717): Expiry date is set automatically when updating a user**  
Components: _[App] User_

**[DHIS2-10475](https://jira.dhis2.org/browse/DHIS2-10475): User app becomes unusable when editing a user group when there are many users**  
Components: _[App] User_

**[DHIS2-10377](https://jira.dhis2.org/browse/DHIS2-10377): User app crashes browser when there are many users in the system**  
Components: _[App] User_

**[DHIS2-10245](https://jira.dhis2.org/browse/DHIS2-10245): [Users App] Unregister service worker**  
Components: _[App] User_

**[DHIS2-9872](https://jira.dhis2.org/browse/DHIS2-9872): User group selector doesn't load**  
Components: _[App] User_

**[DHIS2-9672](https://jira.dhis2.org/browse/DHIS2-9672): Create user regression after porting to the app-platform**  
Components: _[App] User_

**[DHIS2-7940](https://jira.dhis2.org/browse/DHIS2-7940): Disabled users become Enabled once being Edited**  
Components: _[App] User_

**[DHIS2-9167](https://jira.dhis2.org/browse/DHIS2-9167): User avatar icon rendered outside headerbar**  
Components: _[App] User Profile_

**[DHIS2-8874](https://jira.dhis2.org/browse/DHIS2-8874): Analytics statistics don't echo continuous analytics**  
Components: _[App] User Profile_


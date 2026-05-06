# Patch 2.43.0 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-20809](https://dhis2.atlassian.net/browse/DHIS2-20809): Add API endpoint for scope-based deletion of aggregate data values**  
Components: _[API] Aggregate Data Exchange_, _[API] Data Import_

**[DHIS2-16444](https://dhis2.atlassian.net/browse/DHIS2-16444): Support for non-standard weeks in relative periods**  
Components: _[API] Analytics_, _[App] Data visualizer_, _[App] Settings_

**[DHIS2-20379](https://dhis2.atlassian.net/browse/DHIS2-20379): Configurable data output period types**  
Components: _[API] Analytics_, _[API] Metadata model_

**[DHIS2-20415](https://dhis2.atlassian.net/browse/DHIS2-20415): maps & mapViews schemas revision**  
Components: _[API] Analytics_, _[API] Metadata model_

**[DHIS2-19737](https://dhis2.atlassian.net/browse/DHIS2-19737): [Event/Enrollment] [Q] Support created date and completed date**  
Components: _[API] Analytics_

**[DHIS2-20503](https://dhis2.atlassian.net/browse/DHIS2-20503): [Event] [Q/A] Support enrollment dimensions**  
Components: _[API] Analytics_

**[DHIS2-20609](https://dhis2.atlassian.net/browse/DHIS2-20609): [Enrollment] [Q] Support stage specific dimensions**  
Components: _[API] Analytics_

**[DHIS2-20672](https://dhis2.atlassian.net/browse/DHIS2-20672): [TE] [Q] Support enrollment dimensions**  
Components: _[API] Analytics_

**[DHIS2-20746](https://dhis2.atlassian.net/browse/DHIS2-20746): [Enrollment] [A] Support stage specific dimensions**  
Components: _[API] Analytics_

**[DHIS2-20852](https://dhis2.atlassian.net/browse/DHIS2-20852): [Event/Enrollment/TE] [Q/A] Program status as dimension and filter**  
Components: _[API] Analytics_

**[DHIS2-19705](https://dhis2.atlassian.net/browse/DHIS2-19705): [Event/Enrollment] [A] Support time dimensions**  
Components: _[API] Analytics_

**[DHIS2-20767](https://dhis2.atlassian.net/browse/DHIS2-20767): [Event] [Q/A] Support stage specific categories and COGS**  
Components: _[API] Analytics_

**[DHIS2-20666](https://dhis2.atlassian.net/browse/DHIS2-20666): [TE] [Q] Support stage specific dimensions**  
Components: _[API] Analytics_

**[DHIS2-20935](https://dhis2.atlassian.net/browse/DHIS2-20935): [Enrollment] [Q] Support enrollment date and incident date as dimensions**  
Components: _[API] Analytics_

**[DHIS2-16458](https://dhis2.atlassian.net/browse/DHIS2-16458): Ignore non-analyzable attributes in analytics runs**  
Components: _[API] Analytics_

**[DHIS2-20650](https://dhis2.atlassian.net/browse/DHIS2-20650): Repeated events error on analytics enrollments query endpoint**  
Components: _[API] Analytics_

**[DHIS2-5970](https://dhis2.atlassian.net/browse/DHIS2-5970): Add Weekly (Start Friday) period type and apply to analytics apps**  
Components: _[API] Analytics_, _[App] Analytics_, _[App] Data visualizer_

**[DHIS2-20838](https://dhis2.atlassian.net/browse/DHIS2-20838): Add system setting value and analytics support for financial year February, August, September**  
Components: _[API] Analytics_

**[DHIS2-20837](https://dhis2.atlassian.net/browse/DHIS2-20837): Add system setting and analytics support for week relative start day**  
Components: _[API] Analytics_

**[DHIS2-20687](https://dhis2.atlassian.net/browse/DHIS2-20687): Removal of old push analysis service**  
Components: _[API] Analytics_

**[DHIS2-20501](https://dhis2.atlassian.net/browse/DHIS2-20501): [Event] [Q/A] Support stage specific dimensions**  
Components: _[API] Analytics_

**[DHIS2-19766](https://dhis2.atlassian.net/browse/DHIS2-19766): [Event/Enrollment] [A] Provide /dimensions endpoint**  
Components: _[API] Analytics_

**[DHIS2-19749](https://dhis2.atlassian.net/browse/DHIS2-19749): [Event/Enrollment] [A] Support stage specific data element as "value"**  
Components: _[API] Analytics_

**[DHIS2-19750](https://dhis2.atlassian.net/browse/DHIS2-19750): [Event/Enrollment] [A] Support cross-stage data elements**  
Components: _[API] Analytics_

**[DHIS2-19739](https://dhis2.atlassian.net/browse/DHIS2-19739): [Event/Enrollment] [A] Support full orgunit filtering**  
Components: _[API] Analytics_

**[DHIS2-20160](https://dhis2.atlassian.net/browse/DHIS2-20160): Analytics table update crashes when data approval enabled**  
Components: _[API] Analytics_

**[DHIS2-20403](https://dhis2.atlassian.net/browse/DHIS2-20403): Add more app build info to the bundle-app.json**  
Components: _[API] App management_

**[DHIS2-17494](https://dhis2.atlassian.net/browse/DHIS2-17494): Change the way apps are build in the core build process**  
Components: _[API] App management_

**[DHIS2-21085](https://dhis2.atlassian.net/browse/DHIS2-21085): Update integrity check links to new Metadata Management App**  
Components: _[API] Data administration_

**[DHIS2-15455](https://dhis2.atlassian.net/browse/DHIS2-15455): Create data integrity metrics endpoint**  
Components: _[API] Data administration_

**[DHIS2-19679](https://dhis2.atlassian.net/browse/DHIS2-19679): perf: SQL based data value import**  
Components: _[API] Data Entry_

**[DHIS2-18494](https://dhis2.atlassian.net/browse/DHIS2-18494): Data integrity check for empty custom data entry forms**  
Components: _[API] Data Integrity_

**[DHIS2-19291](https://dhis2.atlassian.net/browse/DHIS2-19291): Add integrity checks to check sharing of "default"**  
Components: _[API] Data Integrity_

**[DHIS2-19488](https://dhis2.atlassian.net/browse/DHIS2-19488): Add a new detection algorithm to find values which cannot be safely cast to doubles**  
Components: _[API] Data Integrity_

**[DHIS2-19795](https://dhis2.atlassian.net/browse/DHIS2-19795): Data integrity check for program stages without programs**  
Components: _[API] Data Integrity_

**[DHIS2-18873](https://dhis2.atlassian.net/browse/DHIS2-18873): Export data integrity check summaries in Prometheus text format**  
Components: _[API] Data Integrity_

**[DHIS2-19208](https://dhis2.atlassian.net/browse/DHIS2-19208): Min-max data element batch API**  
Components: _[API] Data value set_

**[DHIS2-20269](https://dhis2.atlassian.net/browse/DHIS2-20269): Perf: FileResource - when saving files, move creating extra image files to the async process**  
Components: _[API] File Resources_

**[DHIS2-14790](https://dhis2.atlassian.net/browse/DHIS2-14790): Upgrade iText library**  
Components: _[API] Frameworks and libraries_

**[DHIS2-21330](https://dhis2.atlassian.net/browse/DHIS2-21330): Add partial index to support the data value trim job**  
Components: _[API] Job scheduler_

**[DHIS2-19410](https://dhis2.atlassian.net/browse/DHIS2-19410): Gist API: use sub-select over join for filters when possible**  
Components: _[API] Metadata Gist_

**[DHIS2-19408](https://dhis2.atlassian.net/browse/DHIS2-19408): Gist API: add annotation to allow marking the property used as default sort property**  
Components: _[API] Metadata Gist_

**[DHIS2-19944](https://dhis2.atlassian.net/browse/DHIS2-19944): Add validation when importing CategoryOptionCombos**  
Components: _[API] Metadata import-export_

**[DHIS2-19942](https://dhis2.atlassian.net/browse/DHIS2-19942): Prevent updating a CategoryCombo's Categories through the `/api/metadata` endpoint, when associated data exists**  
Components: _[API] Metadata import-export_

**[DHIS2-18323](https://dhis2.atlassian.net/browse/DHIS2-18323): Category Combo deduplication API**  
Components: _[API] Metadata model_

**[DHIS2-20498](https://dhis2.atlassian.net/browse/DHIS2-20498): Add new property "Priority" to Program Rule Actions**  
Components: _[API] Metadata model_, _[API] Program rules_

**[DHIS2-18322](https://dhis2.atlassian.net/browse/DHIS2-18322): Category deduplication API**  
Components: _[API] Metadata model_

**[DHIS2-20661](https://dhis2.atlassian.net/browse/DHIS2-20661): Add legendset to Program Rule Action**  
Components: _[API] Metadata model_

**[DHIS2-20657](https://dhis2.atlassian.net/browse/DHIS2-20657): Add enrollment AOC support in metadata**  
Components: _[API] Metadata model_

**[DHIS2-20531](https://dhis2.atlassian.net/browse/DHIS2-20531): [EventVisualization] Support analytics props**  
Components: _[API] Metadata model_

**[DHIS2-20493](https://dhis2.atlassian.net/browse/DHIS2-20493): Add skipAnalytics for non analysable tracked entity attributes**  
Components: _[API] Metadata model_

**[DHIS2-19738](https://dhis2.atlassian.net/browse/DHIS2-19738): [EventVisualization] Support created date and completed date**  
Components: _[API] Metadata model_

**[DHIS2-18745](https://dhis2.atlassian.net/browse/DHIS2-18745): Add backend support for Program Indicator Disaggregation**  
Components: _[API] Metadata model_

**[DHIS2-20875](https://dhis2.atlassian.net/browse/DHIS2-20875): Implement session expiration mechanism (core)**  
Components: _[API] Other_

**[DHIS2-20826](https://dhis2.atlassian.net/browse/DHIS2-20826): Endpoint to expose backend capability of returning individual counts**  
Components: _[API] Other_

**[DHIS2-20845](https://dhis2.atlassian.net/browse/DHIS2-20845): Add period type "label" field**  
Components: _[API] Other_

**[DHIS2-20418](https://dhis2.atlassian.net/browse/DHIS2-20418): Remove User-Agent header from all outgoing HTTP requests in HttpUtils**  
Components: _[API] Other_

**[DHIS2-17927](https://dhis2.atlassian.net/browse/DHIS2-17927): Allow specifying a script section in a DB locale string**  
Components: _[API] Other_, _[App] Maintenance_

**[DHIS2-20755](https://dhis2.atlassian.net/browse/DHIS2-20755): Add API endpoint for relative periods**  
Components: _[API] Other_

**[DHIS2-20513](https://dhis2.atlassian.net/browse/DHIS2-20513): Expose HikariCP detailed metrics**  
Components: _[API] Other_

**[DHIS2-20189](https://dhis2.atlassian.net/browse/DHIS2-20189): DHIS2 route runs should be audited**  
Components: _[API] Other_

**[DHIS2-19780](https://dhis2.atlassian.net/browse/DHIS2-19780): New systemSettings.keyAzureMapsApiKey (Bing is being retired)**  
Components: _[API] Other_, _[App] Settings_

**[DHIS2-19317](https://dhis2.atlassian.net/browse/DHIS2-19317): Notifier - Setting to limit messages per Job**  
Components: _[API] Other_

**[DHIS2-20920](https://dhis2.atlassian.net/browse/DHIS2-20920): Pass new property "Priority" to rule-engine library in web rule-engine**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-20758](https://dhis2.atlassian.net/browse/DHIS2-20758): Add new property "Priority" to rule-engine library**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-20814](https://dhis2.atlassian.net/browse/DHIS2-20814): Events can be ordered in a consistent and predictable way**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-21153](https://dhis2.atlassian.net/browse/DHIS2-21153): Capture App - Events can be ordered in a consistent and predictable way**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-19426](https://dhis2.atlassian.net/browse/DHIS2-19426): Support feature: Add function inUserGroup to program rule expression**  
Components: _[API] Program rules_

**[DHIS2-19932](https://dhis2.atlassian.net/browse/DHIS2-19932): Make sure login page for OAuth2 on Android client works and config is less complicated**  
Components: _[API] Security_

**[DHIS2-18979](https://dhis2.atlassian.net/browse/DHIS2-18979): Make the cookie SameSite attribute a configurable via dhis.conf**  
Components: _[API] Security_

**[DHIS2-19828](https://dhis2.atlassian.net/browse/DHIS2-19828): HTTP HEAD as method for personal access tokens (PAT)**  
Components: _[API] Security_

**[DHIS2-13442](https://dhis2.atlassian.net/browse/DHIS2-13442): Reset MFA secret when MFA is disabled then enabled**  
Components: _[API] Security_, _[API] User_

**[DHIS2-18624](https://dhis2.atlassian.net/browse/DHIS2-18624): Automatically verify emails when using invite by email link**  
Components: _[API] Security_

**[DHIS2-18914](https://dhis2.atlassian.net/browse/DHIS2-18914): Move 2FA system settings into configuration aka. dhis.conf**  
Components: _[API] Security_

**[DHIS2-20950](https://dhis2.atlassian.net/browse/DHIS2-20950): Implement new system setting for color (core)**  
Components: _[API] System configuration_

**[DHIS2-19312](https://dhis2.atlassian.net/browse/DHIS2-19312): Rule engine optimisation**  
**[DHIS2-20486](https://dhis2.atlassian.net/browse/DHIS2-20486): Implement plurals for configurable terminology**  
Components: _[API] Tracker_

**[DHIS2-19452](https://dhis2.atlassian.net/browse/DHIS2-19452): Optimize Scheduled Notification Processing and Reduce ProgramNotificationTemplate Snapshot Size**  
Components: _[API] Tracker_

**[DHIS2-20140](https://dhis2.atlassian.net/browse/DHIS2-20140): Create Event Data Sync Job for New Tracker**  
Components: _[API] Tracker_

**[DHIS2-20139](https://dhis2.atlassian.net/browse/DHIS2-20139): Create Tracker Data Sync Job for New Tracker**  
Components: _[API] Tracker_

**[DHIS2-20659](https://dhis2.atlassian.net/browse/DHIS2-20659): Add enrollment AOC support in tracker exporter**  
Components: _[API] Tracker_

**[DHIS2-20422](https://dhis2.atlassian.net/browse/DHIS2-20422): Use read-only datasource in JdbcEnrollmentStore**  
Components: _[API] Tracker_

**[DHIS2-20107](https://dhis2.atlassian.net/browse/DHIS2-20107): Enable/Disable data values change logs from Program level**  
Components: _[API] Tracker_

**[DHIS2-19760](https://dhis2.atlassian.net/browse/DHIS2-19760): Remove obsolete APIs and queryParams related to trigram indexing**  
Components: _[API] Tracker_

**[DHIS2-15568](https://dhis2.atlassian.net/browse/DHIS2-15568): Backend: Support filtering of multi-select DEs in working lists**  
Components: _[API] Tracker_

**[DHIS2-20658](https://dhis2.atlassian.net/browse/DHIS2-20658): Add enrollment AOC support in tracker importer**  
Components: _[API] Tracker_

**[DHIS2-16911](https://dhis2.atlassian.net/browse/DHIS2-16911): Assign due date and schedule event with program rule**  
Components: _[API] Tracker_, _[App] Capture_, _[App] Tracker capture_

**[DHIS2-19835](https://dhis2.atlassian.net/browse/DHIS2-19835): Configuration on tracked entity attribute for blocked search operators**  
Components: _[API] Tracker_

**[DHIS2-19757](https://dhis2.atlassian.net/browse/DHIS2-19757): Minimum characters to search**  
Components: _[API] Tracker_

**[DHIS2-12183](https://dhis2.atlassian.net/browse/DHIS2-12183): Configuration on tracked entity attribute for preferred search operator**  
Components: _[API] Tracker_

**[DHIS2-8214](https://dhis2.atlassian.net/browse/DHIS2-8214): Remove value type "Tracker associate"**  
Components: _[API] Tracker_

**[DHIS2-19849](https://dhis2.atlassian.net/browse/DHIS2-19849): Prevent duplicate event creation triggered by the SCHEDULEEVENT program rule action.**  
Components: _[API] Tracker_

**[DHIS2-20106](https://dhis2.atlassian.net/browse/DHIS2-20106): Enable/Disable TEA change logs from TET level**  
Components: _[API] Tracker_

**[DHIS2-19759](https://dhis2.atlassian.net/browse/DHIS2-19759): Create/Update indexing job**  
Components: _[API] Tracker_

**[DHIS2-19965](https://dhis2.atlassian.net/browse/DHIS2-19965): Add database constraint to force SRID 4326**  
Components: _[API] Tracker_

**[DHIS2-19758](https://dhis2.atlassian.net/browse/DHIS2-19758): Trigram indexable configuration**  
Components: _[API] Tracker_

**[DHIS2-20014](https://dhis2.atlassian.net/browse/DHIS2-20014): Return whether a TEA is trigram indexed in the TEA Controller**  
Components: _[API] Tracker_

**[DHIS2-19852](https://dhis2.atlassian.net/browse/DHIS2-19852): Integrity check on trigram indexes**  
Components: _[API] Tracker_

**[DHIS2-19827](https://dhis2.atlassian.net/browse/DHIS2-19827): Backend: Support filtering of multi-select TEAs in working lists**  
Components: _[API] Tracker_

**[DHIS2-19683](https://dhis2.atlassian.net/browse/DHIS2-19683): Program parameter needs to be mandatory in /tracker/enrollments**  
Components: _[API] Tracker_

**[DHIS2-12012](https://dhis2.atlassian.net/browse/DHIS2-12012): Make "text" field in dashboardItems translatable**  
Components: _[API] Translations_, _[App] Dashboard_

**[DHIS2-20126](https://dhis2.atlassian.net/browse/DHIS2-20126): [DATA ENTRY APP]: Update UI of audit log**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18412](https://dhis2.atlassian.net/browse/DHIS2-18412): [DATA EXCHANGE APP]: remove superfluous requirements to reenter authentication details**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-16456](https://dhis2.atlassian.net/browse/DHIS2-16456): Hide non analysable attributes and data elements in analytics apps**  
Components: _[App] Analytics_, _[App] EVER_

**[DHIS2-20092](https://dhis2.atlassian.net/browse/DHIS2-20092): Add shortcuts: Android settings**  
Components: _[App] Android Settings app_

**[DHIS2-12881](https://dhis2.atlassian.net/browse/DHIS2-12881): Support additional value types for filters in working lists**  
Components: _[App] Capture_

**[DHIS2-20919](https://dhis2.atlassian.net/browse/DHIS2-20919): Support legendset in Capture App for Program Rule Action**  
Components: _[App] Capture_

**[DHIS2-20001](https://dhis2.atlassian.net/browse/DHIS2-20001): Hide unsupported attribute types from search form in Capture**  
Components: _[App] Capture_

**[DHIS2-20864](https://dhis2.atlassian.net/browse/DHIS2-20864): TEA SearchOperators and minCharactersToSearch in Working List filters**  
Components: _[App] Capture_

**[DHIS2-20429](https://dhis2.atlassian.net/browse/DHIS2-20429): Capture App : Use configured TEA Search Operators in the Search forms**  
Components: _[App] Capture_

**[DHIS2-19134](https://dhis2.atlassian.net/browse/DHIS2-19134): Use DHIS2 UI Select component**  
Components: _[App] Capture_

**[DHIS2-7079](https://dhis2.atlassian.net/browse/DHIS2-7079): Frontend validation when adding new events in locked periods**  
Components: _[App] Capture_

**[DHIS2-18740](https://dhis2.atlassian.net/browse/DHIS2-18740): Update feedback and indicator widgets in the view event page in Event programs**  
Components: _[App] Capture_

**[DHIS2-18739](https://dhis2.atlassian.net/browse/DHIS2-18739): Update feedback and indicator widgets in Registration page**  
Components: _[App] Capture_

**[DHIS2-20000](https://dhis2.atlassian.net/browse/DHIS2-20000): Show message when no searchable attributes exist for an entity type**  
Components: _[App] Capture_

**[DHIS2-18664](https://dhis2.atlassian.net/browse/DHIS2-18664): Show org. unit selector in the new event form in Event Programs**  
Components: _[App] Capture_

**[DHIS2-19190](https://dhis2.atlassian.net/browse/DHIS2-19190): Org. unit context selector read-only**  
Components: _[App] Capture_

**[DHIS2-18382](https://dhis2.atlassian.net/browse/DHIS2-18382): Replace TE org.unit with the owner org. unit in WorkingList**  
Components: _[App] Capture_

**[DHIS2-10134](https://dhis2.atlassian.net/browse/DHIS2-10134): Disable fallback when the TEType do not have searchable attributes**  
Components: _[App] Capture_

**[DHIS2-16991](https://dhis2.atlassian.net/browse/DHIS2-16991): Add x/clear button to TEA/DEs of Date and Date & Time value type**  
Components: _[App] Capture_

**[DHIS2-21128](https://dhis2.atlassian.net/browse/DHIS2-21128): Implement enabled/disabled period types and custom period type labels in Dashboard app**  
Components: _[App] Dashboard_

**[DHIS2-20923](https://dhis2.atlassian.net/browse/DHIS2-20923): Show translated text items in dashboards**  
Components: _[App] Dashboard_

**[DHIS2-20482](https://dhis2.atlassian.net/browse/DHIS2-20482): Add "Active users" table to data statistics page - FE**  
Components: _[App] Data administration_

**[DHIS2-20088](https://dhis2.atlassian.net/browse/DHIS2-20088): Add shortcuts: Data administration app**  
Components: _[App] Data administration_

**[DHIS2-19429](https://dhis2.atlassian.net/browse/DHIS2-19429): Allow for the client to specify the maximum results returned for a validation rule analysis**  
Components: _[App] Data quality_

**[DHIS2-20090](https://dhis2.atlassian.net/browse/DHIS2-20090): Add shortcuts: Data Quality**  
Components: _[App] Data quality_

**[DHIS2-19462](https://dhis2.atlassian.net/browse/DHIS2-19462): Outlier detection fails when values cannot be cast to Postgresql double precision**  
Components: _[App] Data quality_

**[DHIS2-21001](https://dhis2.atlassian.net/browse/DHIS2-21001): Implement enabled/disabled period types and custom period type labels in Data Visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-6568](https://dhis2.atlassian.net/browse/DHIS2-6568): Use "identifiable token" for metadata search across UID, code and name in data visualizer**  
Components: _[App] Data visualizer_

**[DHIS2-19748](https://dhis2.atlassian.net/browse/DHIS2-19748): Support xlsx downloads in DV**  
Components: _[App] Data visualizer_

**[DHIS2-21059](https://dhis2.atlassian.net/browse/DHIS2-21059): Add App Management shortcuts in Command Pallette**  
Components: _[App] Global Shell_

**[DHIS2-20121](https://dhis2.atlassian.net/browse/DHIS2-20121): Command palette: when searching an app name, also show shortcuts for that app**  
Components: _[App] Global Shell_

**[DHIS2-20876](https://dhis2.atlassian.net/browse/DHIS2-20876): Session expiration UIs**  
Components: _[App] Global Shell_

**[DHIS2-20879](https://dhis2.atlassian.net/browse/DHIS2-20879): Global shell: use custom color system setting to set header bar color**  
Components: _[App] Global Shell_

**[DHIS2-20774](https://dhis2.atlassian.net/browse/DHIS2-20774): Upgrade WorldPop population dataset to Global2**  
Components: _[App] Import-export_, _[App] Maps_

**[DHIS2-20089](https://dhis2.atlassian.net/browse/DHIS2-20089): Add shortcuts: Import/export**  
Components: _[App] Import-export_

**[DHIS2-20492](https://dhis2.atlassian.net/browse/DHIS2-20492): Changes to the Scheduler App to support Single Event Data Sync job**  
Components: _[App] Job scheduler_

**[DHIS2-21116](https://dhis2.atlassian.net/browse/DHIS2-21116): Changes to the Scheduler App to support Tracked Entity Data Sync job**  
Components: _[App] Job scheduler_

**[DHIS2-12051](https://dhis2.atlassian.net/browse/DHIS2-12051): Changes to the Scheduler App to support trigram indexing job**  
Components: _[App] Job scheduler_

**[DHIS2-21127](https://dhis2.atlassian.net/browse/DHIS2-21127): Implement enabled/disabled period types in Line Listing app**  
Components: _[App] Line Listing_

**[DHIS2-18786](https://dhis2.atlassian.net/browse/DHIS2-18786): Support XLSX downloads in Line Listing app**  
Components: _[App] Line Listing_

**[DHIS2-19411](https://dhis2.atlassian.net/browse/DHIS2-19411): Add shortcuts for command palette - Maintenance App**  
Components: _[App] Maintenance_

**[DHIS2-16455](https://dhis2.atlassian.net/browse/DHIS2-16455): Flag for non-analyzable tracked entity attributes in maintenance app**  
Components: _[App] Maintenance_

**[DHIS2-20717](https://dhis2.atlassian.net/browse/DHIS2-20717): Add validation for startDate > endDate in Run Now endpoint**  
Components: _[App] Maintenance_

**[DHIS2-3122](https://dhis2.atlassian.net/browse/DHIS2-3122): Prevent Empty Catcombos in GUI**  
Components: _[App] Maintenance_

**[DHIS2-19542](https://dhis2.atlassian.net/browse/DHIS2-19542): Support multiple timeline and split layers**  
Components: _[App] Maps_

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

**[DHIS2-3354](https://dhis2.atlassian.net/browse/DHIS2-3354): Allow selecting data elements and tracked entity attributes with org unit value type as coordinate field**  
Components: _[App] Maps_

**[DHIS2-21269](https://dhis2.atlassian.net/browse/DHIS2-21269): Change color of maintenance app icon**  
Components: _[App] Metadata Management App_

**[DHIS2-20091](https://dhis2.atlassian.net/browse/DHIS2-20091): Add shortcuts: Reports**  
Components: _[App] Reports_

**[DHIS2-20840](https://dhis2.atlassian.net/browse/DHIS2-20840): Add February, August, September as options for financial year relative start month in Settings app**  
Components: _[App] Settings_

**[DHIS2-20839](https://dhis2.atlassian.net/browse/DHIS2-20839): Add system setting for week relative start day in Settings app**  
Components: _[App] Settings_

**[DHIS2-20951](https://dhis2.atlassian.net/browse/DHIS2-20951): Implement new system setting for color (UI)**  
Components: _[App] Settings_

**[DHIS2-20093](https://dhis2.atlassian.net/browse/DHIS2-20093): Add shortcuts: System settings**  
Components: _[App] Settings_

**[DHIS2-8162](https://dhis2.atlassian.net/browse/DHIS2-8162): Add a description to user group details**  
Components: _[App] User_

**[DHIS2-13332](https://dhis2.atlassian.net/browse/DHIS2-13332): Require user to provide TOTP code to set up MFA/2FA**  
Components: _[App] User_, _[App] User Profile_

**[DHIS2-19234](https://dhis2.atlassian.net/browse/DHIS2-19234): [USER APP]: filter out F_PREVIOUS_IMPERSONATOR_AUTHORITY**  
Components: _[App] User_

**[DHIS2-20942](https://dhis2.atlassian.net/browse/DHIS2-20942): Implement delete avatar/profile picture with new DELETE endpoint on /me**  
Components: _[App] User Profile_

**[DHIS2-19971](https://dhis2.atlassian.net/browse/DHIS2-19971): [USER PROFILE APP]: UI for HTTP HEAD as method for personal access tokens (PAT)**  
Components: _[App] User Profile_

**[DHIS2-19863](https://dhis2.atlassian.net/browse/DHIS2-19863): Expose the ApiToken/PAT's code field to the UI, so it can be used for naming tokens**  
Components: _[App] User Profile_

**[DHIS2-20611](https://dhis2.atlassian.net/browse/DHIS2-20611): Enforce check on null usernames**  
Components: _[Core] General_

**[DHIS2-20143](https://dhis2.atlassian.net/browse/DHIS2-20143): Perf: Improve housekeeping job to only update file resources that need updating**  
Components: _[Core] Job Scheduler_

## Bugs

**[DHIS2-20860](https://dhis2.atlassian.net/browse/DHIS2-20860): Aggregate data exchanges do not work with data set reporting rates or program data items**  
Components: _[API] Aggregate Data Exchange_

**[DHIS2-18324](https://dhis2.atlassian.net/browse/DHIS2-18324): [DATA EXCHANGE API]: Scheduled data exchange jobs do not run**  
Components: _[API] Aggregate Data Exchange_, _[API] Job scheduler_

**[DHIS2-21344](https://dhis2.atlassian.net/browse/DHIS2-21344): [Event/Enrollment] [Q] Stage-specific dimensions can be specified in headers only**  
Components: _[API] Analytics_

**[DHIS2-18502](https://dhis2.atlassian.net/browse/DHIS2-18502): Period as filter returns 0 instead of data**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-19473](https://dhis2.atlassian.net/browse/DHIS2-19473): Duplicated Analytics values when using Continuous Analytics job**  
Components: _[API] Analytics_

**[DHIS2-21218](https://dhis2.atlassian.net/browse/DHIS2-21218): [Event] [Q/A] [Doris] Fix sql query when  using `ENROLLMENT_OU` as dimension**  
Components: _[API] Analytics_

**[DHIS2-21197](https://dhis2.atlassian.net/browse/DHIS2-21197): [Aggregate] Weekly relative system setting not respected by some weekly relative periods**  
Components: _[API] Analytics_

**[DHIS2-18928](https://dhis2.atlassian.net/browse/DHIS2-18928): Incorrect analytics for Program Indicators with Program Stage Boundaries**  
Components: _[API] Analytics_

**[DHIS2-20442](https://dhis2.atlassian.net/browse/DHIS2-20442): Event/enrollment query analytics api DATETIME criteria return 409**  
Components: _[API] Analytics_

**[DHIS2-20120](https://dhis2.atlassian.net/browse/DHIS2-20120): Continuous analytics fails to run when the `validationresult` table is not empty**  
Components: _[API] Analytics_

**[DHIS2-20753](https://dhis2.atlassian.net/browse/DHIS2-20753): [Event/Enrollment] [Q/A] Headers should have eventdate instead of occurreddate**  
Components: _[API] Analytics_

**[DHIS2-19464](https://dhis2.atlassian.net/browse/DHIS2-19464): Handle invalid characters in Resource Tables column names in Doris and Clickhouse**  
Components: _[API] Analytics_

**[DHIS2-19185](https://dhis2.atlassian.net/browse/DHIS2-19185): Continuous Analytics fails to process datavalues in new periods**  
Components: _[API] Analytics_

**[DHIS2-19681](https://dhis2.atlassian.net/browse/DHIS2-19681): analytics/tracker/events?coordinateField=**OrgUnit** returns polygons instead of their centroids**  
Components: _[API] Analytics_

**[DHIS2-20111](https://dhis2.atlassian.net/browse/DHIS2-20111): Invalid date range generated in Aggregate Enrollment analytics when `pe` dimension is used in filter**  
Components: _[API] Analytics_

**[DHIS2-18638](https://dhis2.atlassian.net/browse/DHIS2-18638): Events and enrollments queries assign option set names to Yes/No (boolean) attributes and data elements**  
Components: _[API] Analytics_, _[App] Line Listing_

**[DHIS2-19989](https://dhis2.atlassian.net/browse/DHIS2-19989): Analytics API: Query with dimensions of type coordinate fails**  
Components: _[API] Analytics_

**[DHIS2-20279](https://dhis2.atlassian.net/browse/DHIS2-20279): Periods in Visualization rows display out of order**  
Components: _[API] Analytics_

**[DHIS2-19934](https://dhis2.atlassian.net/browse/DHIS2-19934): Fix OU centroid property access when generating analytics tables**  
Components: _[API] Analytics_

**[DHIS2-20076](https://dhis2.atlassian.net/browse/DHIS2-20076): /api/visualizations/[visualization UID]/data results in internal server error when relative periods are used**  
Components: _[API] Analytics_

**[DHIS2-19584](https://dhis2.atlassian.net/browse/DHIS2-19584): Exporting dashboard with dependencies not exporting visualizations relativePeriods**  
Components: _[API] Analytics_

**[DHIS2-19928](https://dhis2.atlassian.net/browse/DHIS2-19928): Invalid SQL query generated when PI boundaries are deselected and PI FIRST/LAST aggregation is selected**  
Components: _[API] Analytics_

**[DHIS2-19028](https://dhis2.atlassian.net/browse/DHIS2-19028): Sorting of the Excel / CSV file when downloaded from Data Visualizer**  
Components: _[API] Analytics_

**[DHIS2-19058](https://dhis2.atlassian.net/browse/DHIS2-19058): Data Visualizer downloads XLS/CSV with removed empty rows/columns**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-19548](https://dhis2.atlassian.net/browse/DHIS2-19548): NPE in Maps API**  
Components: _[API] Analytics_

**[DHIS2-19539](https://dhis2.atlassian.net/browse/DHIS2-19539): Translation modal crashes in v43**  
Components: _[API] Analytics_, _[App] Analytics_

**[DHIS2-19323](https://dhis2.atlassian.net/browse/DHIS2-19323): Analytics: Difference in name/shortname in APIs**  
**[DHIS2-19248](https://dhis2.atlassian.net/browse/DHIS2-19248): Analytics API: displaying null instead of the correct name**  
Components: _[API] Analytics_

**[DHIS2-19986](https://dhis2.atlassian.net/browse/DHIS2-19986): App Management: /api/apps response has changed (Icons of core apps not showing)**  
Components: _[API] App management_, _[App] App management_

**[DHIS2-19124](https://dhis2.atlassian.net/browse/DHIS2-19124): App menu order can't be changed (using menu management)**  
Components: _[API] App management_

**[DHIS2-19319](https://dhis2.atlassian.net/browse/DHIS2-19319): Non-bundled apps display shortname instead of displayName in command palette**  
Components: _[API] App management_, _[App] Global Shell_

**[DHIS2-20455](https://dhis2.atlassian.net/browse/DHIS2-20455): Data Summary API Active users is actually showing Logged in users**  
Components: _[API] Data administration_

**[DHIS2-19866](https://dhis2.atlassian.net/browse/DHIS2-19866): Data statistics returns negative numbers for certain object types**  
Components: _[API] Data administration_

**[DHIS2-19338](https://dhis2.atlassian.net/browse/DHIS2-19338): Duplicated category option combos are created by the maintenance task**  
Components: _[API] Data administration_

**[DHIS2-20854](https://dhis2.atlassian.net/browse/DHIS2-20854): [DATA ENTRY API]: data input periods cannot be added in v43**  
Components: _[API] Data Entry_

**[DHIS2-20544](https://dhis2.atlassian.net/browse/DHIS2-20544): [DATA ENTRY]: audits and history do not work for data sets with attribute option combos**  
**[DHIS2-20309](https://dhis2.atlassian.net/browse/DHIS2-20309): api/dataEntry/metadata returns invalid response when data set does not have assigned OrgUnits**  
Components: _[API] Data Entry_

**[DHIS2-18295](https://dhis2.atlassian.net/browse/DHIS2-18295): [api/dataEntry/dataSetCompletion]: endpoint does not check compulsory data element operands**  
Components: _[API] Data Entry_

**[DHIS2-19591](https://dhis2.atlassian.net/browse/DHIS2-19591): Frontend crash in aggregate data entry when validation rules exceed 50 – DHIS2 2.42.0**  
Components: _[API] Data Entry_, _[App] Aggregate Data Entry_

**[DHIS2-18234](https://dhis2.atlassian.net/browse/DHIS2-18234): Org Unit Path Hibernate Cache invalid, results in 500s**  
Components: _[API] Data Entry_, _[API] Metadata model_

**[DHIS2-20190](https://dhis2.atlassian.net/browse/DHIS2-20190): Data Value Import (file value) - persists file resource and file even though validation fails**  
Components: _[API] Data Import_

**[DHIS2-20895](https://dhis2.atlassian.net/browse/DHIS2-20895): Data export - Skip default COC+AOC as opt-in**  
Components: _[API] Data value set_, _[Core] Data Export_

**[DHIS2-11925](https://dhis2.atlassian.net/browse/DHIS2-11925): Data value export to XML with compression creates empty archive**  
Components: _[API] Data value set_

**[DHIS2-19544](https://dhis2.atlassian.net/browse/DHIS2-19544): Public document access does not work for external users - UPDATE External sharing of multiple elements removed**  
Components: _[API] File Resources_, _[App] Login_

**[DHIS2-18424](https://dhis2.atlassian.net/browse/DHIS2-18424): Tomcat fails to start if monitoring.api.enabled is set to on**  
Components: _[API] Frameworks and libraries_

**[DHIS2-20366](https://dhis2.atlassian.net/browse/DHIS2-20366): Job Scheduler - Auto-named jobs must generate unique names**  
Components: _[API] Job scheduler_, _[Core] Job Scheduler_

**[DHIS2-20542](https://dhis2.atlassian.net/browse/DHIS2-20542): Analytics and Resource Table jobs running twice consecutively**  
Components: _[API] Job scheduler_

**[DHIS2-19531](https://dhis2.atlassian.net/browse/DHIS2-19531): Gist API - Links do not consider context path**  
Components: _[API] Metadata Gist_

**[DHIS2-20896](https://dhis2.atlassian.net/browse/DHIS2-20896): Metadata import fails when reimporting a dataSet containing a section with an assigned indicator**  
Components: _[API] Metadata import-export_

**[DHIS2-20312](https://dhis2.atlassian.net/browse/DHIS2-20312): PUT requests to categoryOptionCombinations should be restricted**  
Components: _[API] Metadata import-export_

**[DHIS2-19762](https://dhis2.atlassian.net/browse/DHIS2-19762): ProgramTrackedEntityAttributes and ProgramStageDataElements should not appear at root level in dependency export**  
Components: _[API] Metadata import-export_

**[DHIS2-19883](https://dhis2.atlassian.net/browse/DHIS2-19883): Exclusion of nested fields might not properly exclude them**  
Components: _[API] Metadata import-export_

**[DHIS2-15604](https://dhis2.atlassian.net/browse/DHIS2-15604): Import report showing incorrect ignore value when validation errors**  
Components: _[API] Metadata import-export_

**[DHIS2-18947](https://dhis2.atlassian.net/browse/DHIS2-18947): Superusers cannot see or delete a private dashboard**  
Components: _[API] Metadata model_

**[DHIS2-20730](https://dhis2.atlassian.net/browse/DHIS2-20730): Listing /api/dimensions/<category>/items returns a 400**  
Components: _[API] Metadata model_

**[DHIS2-19440](https://dhis2.atlassian.net/browse/DHIS2-19440): filtering programs by !empty does not work while empty works**  
Components: _[API] Metadata model_

**[DHIS2-18857](https://dhis2.atlassian.net/browse/DHIS2-18857): sorting by id case insensitive not working**  
Components: _[API] Metadata model_

**[DHIS2-20099](https://dhis2.atlassian.net/browse/DHIS2-20099): [API: validationNotificationTemplates]: patch updates do not work**  
Components: _[API] Metadata model_

**[DHIS2-19551](https://dhis2.atlassian.net/browse/DHIS2-19551): [Routes]: Impossible to create wildcard routes with allow list**  
Components: _[API] Metadata model_

**[DHIS2-20744](https://dhis2.atlassian.net/browse/DHIS2-20744): Event Hooks API is broken**  
Components: _[API] Other_

**[DHIS2-20859](https://dhis2.atlassian.net/browse/DHIS2-20859): A new route defaults to all public access**  
Components: _[API] Other_

**[DHIS2-20042](https://dhis2.atlassian.net/browse/DHIS2-20042): [API: program stage nextScheduleDate]: cannot associate nextScheduleDate with a program stage via patch**  
Components: _[API] Other_

**[DHIS2-20728](https://dhis2.atlassian.net/browse/DHIS2-20728): Visualization: Missing dataElement in response**  
Components: _[API] Other_

**[DHIS2-15191](https://dhis2.atlassian.net/browse/DHIS2-15191): Route API does not pass through non-200 response codes**  
Components: _[API] Other_

**[DHIS2-19455](https://dhis2.atlassian.net/browse/DHIS2-19455): User selected order of periods (any type) not respected in Visualization**  
Components: _[API] Other_

**[DHIS2-20188](https://dhis2.atlassian.net/browse/DHIS2-20188): [api/configuration]: configuration returns 406**  
Components: _[API] Other_

**[DHIS2-20261](https://dhis2.atlassian.net/browse/DHIS2-20261): Debug route logging can leak sensitive query params**  
Components: _[API] Other_

**[DHIS2-19941](https://dhis2.atlassian.net/browse/DHIS2-19941): [API: DATA SET SECTIONS EDIT]: removing an indicator from a data set does not remove it from an associated section**  
Components: _[API] Other_

**[DHIS2-17966](https://dhis2.atlassian.net/browse/DHIS2-17966): perf: extensive memory usage by CustomRequestMappingHandlerMapping**  
Components: _[API] Other_

**[DHIS2-16153](https://dhis2.atlassian.net/browse/DHIS2-16153): Removed references to old authorities F_DATAADMIN_LOCK, F_DATAADMIN_UNLOCK and F_DATASET_LOCK**  
Components: _[API] Other_, _[App] Data administration_, _Documentation_

**[DHIS2-19878](https://dhis2.atlassian.net/browse/DHIS2-19878): [api: system/flags]: Denmark is returned twice**  
Components: _[API] Other_

**[DHIS2-19606](https://dhis2.atlassian.net/browse/DHIS2-19606): Settings - allow field filtering**  
Components: _[API] Other_

**[DHIS2-19308](https://dhis2.atlassian.net/browse/DHIS2-19308): Redirect to start page application does not work**  
Components: _[API] Other_, _[App] Settings_

**[DHIS2-19516](https://dhis2.atlassian.net/browse/DHIS2-19516): Custom top menu icon broken**  
Components: _[API] Other_

**[DHIS2-19217](https://dhis2.atlassian.net/browse/DHIS2-19217): [api metadata sort]: lastUpdated does not accept iasc,**  
Components: _[API] Other_

**[DHIS2-16072](https://dhis2.atlassian.net/browse/DHIS2-16072): Removed references to old authorities F_PROGRAM_TRACKED_ENTITY_ATTRIBUTE_GROUP_ADD and F_PROGRAM_TRACKED_ENTITY_ATTRIBUTE_GROUP_DELETE**  
Components: _[API] Other_, _[App] Translations_

**[DHIS2-16070](https://dhis2.atlassian.net/browse/DHIS2-16070): Removed references to old authorities F_SQLVIEW_EXECUTE, F_SQLVIEW_MANAGEMENT, F_VIEW_SETTINGS**  
Components: _[API] Other_, _[App] Translations_

**[DHIS2-21115](https://dhis2.atlassian.net/browse/DHIS2-21115): Comparing a string with a number in a program rule condition throws an error**  
Components: _[API] Program rules_

**[DHIS2-19952](https://dhis2.atlassian.net/browse/DHIS2-19952): Scheduled messages by program rule are not sent**  
Components: _[API] Program rules_

**[DHIS2-20181](https://dhis2.atlassian.net/browse/DHIS2-20181): PR/PRA validation is wrong for certain combinations of PRAs**  
Components: _[API] Program rules_

**[DHIS2-19396](https://dhis2.atlassian.net/browse/DHIS2-19396): Assign null value to a data element representing an option set is failing**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-18848](https://dhis2.atlassian.net/browse/DHIS2-18848): Adding program rules to a program without previous rules does not work**  
Components: _[API] Program rules_

**[DHIS2-21137](https://dhis2.atlassian.net/browse/DHIS2-21137): Disable OAuth2 consent prompt on the default Android internal client**  
Components: _[API] Security_

**[DHIS2-20796](https://dhis2.atlassian.net/browse/DHIS2-20796): CSPFilter looks up config from DB on every request**  
Components: _[API] Security_

**[DHIS2-20458](https://dhis2.atlassian.net/browse/DHIS2-20458): /api/me allows to retrieve userGroup/userRole data even when user has no read access to it**  
Components: _[API] Security_

**[DHIS2-19779](https://dhis2.atlassian.net/browse/DHIS2-19779): Guest user role update via UI (user app) is broken**  
Components: _[API] Security_

**[DHIS2-19665](https://dhis2.atlassian.net/browse/DHIS2-19665): OAuth2 authentication server don't work with https**  
Components: _[API] Security_

**[DHIS2-19259](https://dhis2.atlassian.net/browse/DHIS2-19259): Rename DB table userinfo index on openid field with typo**  
Components: _[API] Security_

**[DHIS2-19725](https://dhis2.atlassian.net/browse/DHIS2-19725): Visualization with calculations won't sync - TransientObjectException - ExpressionDimensionItem**  
Components: _[API] Synchronization_

**[DHIS2-19583](https://dhis2.atlassian.net/browse/DHIS2-19583): MetadataSync does not chain anymore, only syncs 1 version.**  
Components: _[API] Synchronization_

**[DHIS2-20731](https://dhis2.atlassian.net/browse/DHIS2-20731): Crash in User Profile when certain DB default locales are configured**  
Components: _[API] System configuration_

**[DHIS2-20931](https://dhis2.atlassian.net/browse/DHIS2-20931): Read-only program users can still transfer TEI ownership from enrollment widget**  
Components: _[API] Tracker_

**[DHIS2-20137](https://dhis2.atlassian.net/browse/DHIS2-20137): Program notification not triggered when using email DataElement**  
Components: _[API] Tracker_

**[DHIS2-21095](https://dhis2.atlassian.net/browse/DHIS2-21095): Missing org unit scope validation when transferring enrollment**  
Components: _[API] Tracker_

**[DHIS2-21096](https://dhis2.atlassian.net/browse/DHIS2-21096): Missing org unit validation when setting the value of an attribute or data element of org unit type**  
**[DHIS2-21181](https://dhis2.atlassian.net/browse/DHIS2-21181): ConcurrentModificationException in tracker import**  
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

**[DHIS2-20822](https://dhis2.atlassian.net/browse/DHIS2-20822): Regression in 2.43: Bulk complete of events fails unless dataValues is included**  
Components: _[API] Tracker_

**[DHIS2-19485](https://dhis2.atlassian.net/browse/DHIS2-19485): Move ownership validation into the tracked entity store**  
Components: _[API] Tracker_

**[DHIS2-19644](https://dhis2.atlassian.net/browse/DHIS2-19644): ACL validations on enrollments break pagination**  
Components: _[API] Tracker_

**[DHIS2-19694](https://dhis2.atlassian.net/browse/DHIS2-19694): Unique attribute uses LIKE when filtering in working list in Capture**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-20394](https://dhis2.atlassian.net/browse/DHIS2-20394): Program stage sharing settings not validated in /trackedEntities**  
Components: _[API] Tracker_

**[DHIS2-20391](https://dhis2.atlassian.net/browse/DHIS2-20391): The attributes value are missing in the /tracker/relationships response**  
Components: _[API] Tracker_

**[DHIS2-12547](https://dhis2.atlassian.net/browse/DHIS2-12547): Program-related endpoints do not ensure SRID=4326 for all coordinates**  
Components: _[API] Tracker_, _[API] Tracker (deprecated)_

**[DHIS2-20173](https://dhis2.atlassian.net/browse/DHIS2-20173): Validate current and updated org unit when single event org unit updated**  
Components: _[API] Tracker_

**[DHIS2-20125](https://dhis2.atlassian.net/browse/DHIS2-20125): Tracker events use event org unit to validate ACL**  
Components: _[API] Tracker_

**[DHIS2-20132](https://dhis2.atlassian.net/browse/DHIS2-20132): Check for write access to a TET when importing a TE**  
Components: _[API] Tracker_

**[DHIS2-18338](https://dhis2.atlassian.net/browse/DHIS2-18338): Tracker endpoints emit inaccessible data for a period of time**  
Components: _[API] Tracker_

**[DHIS2-20037](https://dhis2.atlassian.net/browse/DHIS2-20037): Empty static text in warning program rule action breaks tracker importer**  
Components: _[API] Tracker_

**[DHIS2-19735](https://dhis2.atlassian.net/browse/DHIS2-19735): Change left join to inner join in JdbcTrackerEventStore**  
Components: _[API] Tracker_

**[DHIS2-19684](https://dhis2.atlassian.net/browse/DHIS2-19684): TE not visible after breaking the glass**  
Components: _[API] Tracker_

**[DHIS2-19472](https://dhis2.atlassian.net/browse/DHIS2-19472): Refactor tracker ownership controller**  
Components: _[API] Tracker_

**[DHIS2-19595](https://dhis2.atlassian.net/browse/DHIS2-19595): Event exporter pagination is broken when TE is enrolled in more than one program**  
Components: _[API] Tracker_

**[DHIS2-17679](https://dhis2.atlassian.net/browse/DHIS2-17679): Value of a TEA of valuetype AGE is not validated (it is possible to add wrong dates), and it breaks the analytics.**  
Components: _[API] Tracker_

**[DHIS2-19331](https://dhis2.atlassian.net/browse/DHIS2-19331): Tracker filter allows binary operator without value after a unary operator**  
Components: _[API] Tracker_

**[DHIS2-18877](https://dhis2.atlassian.net/browse/DHIS2-18877): Breaking the glass fails when program(s) accessible protected**  
Components: _[API] Tracker_

**[DHIS2-19286](https://dhis2.atlassian.net/browse/DHIS2-19286): Check TE access when requesting tracked entities without pagination**  
Components: _[API] Tracker_

**[DHIS2-19263](https://dhis2.atlassian.net/browse/DHIS2-19263): Cached program owner not loaded correctly**  
Components: _[API] Tracker_

**[DHIS2-19282](https://dhis2.atlassian.net/browse/DHIS2-19282): Registering org unit path not present after fetching TE from DB**  
Components: _[API] Tracker_

**[DHIS2-21053](https://dhis2.atlassian.net/browse/DHIS2-21053): GET /users?invitationStatus=EXPIRED returns 500 error**  
Components: _[API] User_

**[DHIS2-16366](https://dhis2.atlassian.net/browse/DHIS2-16366): Cannot remove the profile picture**  
Components: _[API] User_, _[App] User Profile_

**[DHIS2-20689](https://dhis2.atlassian.net/browse/DHIS2-20689): Allow 1 character for first name when create/update user**  
Components: _[API] User_, _[App] User_

**[DHIS2-20328](https://dhis2.atlassian.net/browse/DHIS2-20328): Not possible to create new users when credentialsExpires is set**  
Components: _[API] User_

**[DHIS2-16958](https://dhis2.atlassian.net/browse/DHIS2-16958): Search function for Users -> Edit group -> Add users to group always return nothing**  
Components: _[API] User_, _[App] User_

**[DHIS2-19693](https://dhis2.atlassian.net/browse/DHIS2-19693): Unable to Delete Users Without User Role Modification Permission**  
Components: _[API] User_

**[DHIS2-18741](https://dhis2.atlassian.net/browse/DHIS2-18741): List of authorities contains duplicates**  
Components: _[API] User_

**[DHIS2-19768](https://dhis2.atlassian.net/browse/DHIS2-19768): Greyed Fields not being disabled in custom forms in new data entry app**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-21158](https://dhis2.atlassian.net/browse/DHIS2-21158): Couldn't handle unknown period id in Data Entry History**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-20277](https://dhis2.atlassian.net/browse/DHIS2-20277): Error entering aggregated data for specific weeks**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-20396](https://dhis2.atlassian.net/browse/DHIS2-20396): Data Entry App: OrgUnit tree is not auto-expanded with selection populated from URL**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18488](https://dhis2.atlassian.net/browse/DHIS2-18488): [DATA ENTRY BETA]: custom form totals are not parsed correctly (only replaced within <td> elements)**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18640](https://dhis2.atlassian.net/browse/DHIS2-18640): Row and column totals applied to DEs with value types != from numbers (data entry beta)**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-19523](https://dhis2.atlassian.net/browse/DHIS2-19523): [AGGREGATE DATA ENTRY]: app crashes when user does not have access to underlying category options for AOC**  
Components: _[App] Aggregate Data Entry_

**[DHIS2-18402](https://dhis2.atlassian.net/browse/DHIS2-18402): [DATA EXCHANGE APP]: exchange is not retrievable/editable when has too many analytics dimensions**  
Components: _[App] Aggregate Data Exchange_

**[DHIS2-18852](https://dhis2.atlassian.net/browse/DHIS2-18852): [ASWA] Crash when click on Run Test in Visualisation screen**  
Components: _[App] Android Settings app_

**[DHIS2-19677](https://dhis2.atlassian.net/browse/DHIS2-19677): Links in the release notes do not open in global shell**  
Components: _[App] App management_, _[App] Global Shell_

**[DHIS2-19253](https://dhis2.atlassian.net/browse/DHIS2-19253): Line Listing app does not show info on previous releases and continuously triggers the API call**  
Components: _[App] App management_

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

**[DHIS2-21044](https://dhis2.atlassian.net/browse/DHIS2-21044): Minimum Search Characters enforced during registration**  
Components: _[App] Capture_

**[DHIS2-20494](https://dhis2.atlassian.net/browse/DHIS2-20494): Inherited tracked entity attribute does not populate in the second program after relationship creation, when both programs using the same Tracked Entity Type.**  
Components: _[App] Capture_

**[DHIS2-21045](https://dhis2.atlassian.net/browse/DHIS2-21045): Data entry blocked with "error during field validation" (minimum search characters)**  
Components: _[App] Capture_

**[DHIS2-20938](https://dhis2.atlassian.net/browse/DHIS2-20938): Missing search bar for Option Sets**  
Components: _[App] Capture_

**[DHIS2-20035](https://dhis2.atlassian.net/browse/DHIS2-20035): Cannot complete an event from a workinglist**  
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

**[DHIS2-20514](https://dhis2.atlassian.net/browse/DHIS2-20514): Unable to open new event form without pre-selected org unit in programs with categories**  
Components: _[App] Capture_

**[DHIS2-20738](https://dhis2.atlassian.net/browse/DHIS2-20738):  Cannot save form after validation fails for related stages**  
Components: _[App] Capture_

**[DHIS2-20708](https://dhis2.atlassian.net/browse/DHIS2-20708): Capture: Edit button in Profile widget not clickable for TEA with option set (from Capture v104.0.0+)**  
Components: _[App] Capture_

**[DHIS2-20475](https://dhis2.atlassian.net/browse/DHIS2-20475): Sluggish data entry performance in large forms**  
Components: _[App] Capture_

**[DHIS2-20495](https://dhis2.atlassian.net/browse/DHIS2-20495): Org unit not retained after “Save and add another” event**  
Components: _[App] Capture_

**[DHIS2-20305](https://dhis2.atlassian.net/browse/DHIS2-20305): Update TEA unique filter text to 'Exact matches only'**  
Components: _[App] Capture_

**[DHIS2-20447](https://dhis2.atlassian.net/browse/DHIS2-20447): Missing validations on unique attributes**  
Components: _[App] Capture_

**[DHIS2-20437](https://dhis2.atlassian.net/browse/DHIS2-20437): No searchable attributes message appears when the page loads**  
Components: _[App] Capture_

**[DHIS2-20352](https://dhis2.atlassian.net/browse/DHIS2-20352): Capture app fails to load when DE or TEA referenced in indicator is missing**  
Components: _[App] Capture_

**[DHIS2-16869](https://dhis2.atlassian.net/browse/DHIS2-16869): Capture top-bar showing UID when editing attribute**  
Components: _[App] Capture_

**[DHIS2-20530](https://dhis2.atlassian.net/browse/DHIS2-20530): Fallback search in all programs is not working for all dataValues types**  
Components: _[App] Capture_

**[DHIS2-19450](https://dhis2.atlassian.net/browse/DHIS2-19450): Error saving program stage event when setting user interface language to Arabic**  
Components: _[App] Capture_

**[DHIS2-19415](https://dhis2.atlassian.net/browse/DHIS2-19415): Editing two fields simultaneously blocks saving**  
Components: _[App] Capture_

**[DHIS2-20009](https://dhis2.atlassian.net/browse/DHIS2-20009): "Reason to check for enrollments" needs to be mandatory**  
Components: _[App] Capture_

**[DHIS2-16364](https://dhis2.atlassian.net/browse/DHIS2-16364): Stage selection still shown with only one available stage**  
Components: _[App] Capture_

**[DHIS2-19767](https://dhis2.atlassian.net/browse/DHIS2-19767): Translations not loading properly in Capture**  
Components: _[App] Capture_

**[DHIS2-19765](https://dhis2.atlassian.net/browse/DHIS2-19765): PI "displayInForm" ignored while editing a TEI through the profile widget**  
Components: _[App] Capture_

**[DHIS2-19647](https://dhis2.atlassian.net/browse/DHIS2-19647): Clicking "View event" breadcrumb in Edit event always shows "Discard changes" warning**  
Components: _[App] Capture_

**[DHIS2-11104](https://dhis2.atlassian.net/browse/DHIS2-11104): Translations missing for some fields in capture app**  
Components: _[App] Capture_

**[DHIS2-11847](https://dhis2.atlassian.net/browse/DHIS2-11847): Critical alert bar should be displayed on failure**  
Components: _[App] Capture_

**[DHIS2-18951](https://dhis2.atlassian.net/browse/DHIS2-18951): "Error encountered during field validation" when registering TE with unique, searchable PTEA**  
Components: _[App] Capture_

**[DHIS2-18770](https://dhis2.atlassian.net/browse/DHIS2-18770): Event-note uses wrong date-format**  
Components: _[App] Capture_

**[DHIS2-19467](https://dhis2.atlassian.net/browse/DHIS2-19467): Save button not working due to Program Rules valid state missing**  
Components: _[App] Capture_

**[DHIS2-18839](https://dhis2.atlassian.net/browse/DHIS2-18839): TEA with number option set value does not show in Profile widget on Capture App**  
Components: _[App] Capture_

**[DHIS2-19011](https://dhis2.atlassian.net/browse/DHIS2-19011): Forms Retain Previous Search Values After Navigation**  
Components: _[App] Capture_

**[DHIS2-18671](https://dhis2.atlassian.net/browse/DHIS2-18671): [Capture App] Discard changes dialog not responding**  
Components: _[App] Capture_

**[DHIS2-19172](https://dhis2.atlassian.net/browse/DHIS2-19172): | Capture app (web) |  Program stage's 'Report date to use' when event is auto-generated is blank and not set as configured**  
Components: _[App] Capture_

**[DHIS2-19441](https://dhis2.atlassian.net/browse/DHIS2-19441): TEA description value not being translated while editing a TEI**  
Components: _[App] Capture_

**[DHIS2-13236](https://dhis2.atlassian.net/browse/DHIS2-13236): Incorrect text on top of Profile widget**  
Components: _[App] Capture_

**[DHIS2-19307](https://dhis2.atlassian.net/browse/DHIS2-19307): Section containing data element not contained in program stage crashes app**  
Components: _[App] Capture_

**[DHIS2-19442](https://dhis2.atlassian.net/browse/DHIS2-19442): Edit title not being translated properly while editing a TEI**  
Components: _[App] Capture_

**[DHIS2-18854](https://dhis2.atlassian.net/browse/DHIS2-18854): Incorrect Display of Scheduled Events Count in Schedule Info Section**  
Components: _[App] Capture_

**[DHIS2-19336](https://dhis2.atlassian.net/browse/DHIS2-19336): “Some operations are still running” message pops up when creating new person on MNCH/PNC (Adult women) tracker program**  
Components: _[App] Capture_

**[DHIS2-19394](https://dhis2.atlassian.net/browse/DHIS2-19394): Migrate old ehcache 2 config to 3**  
Components: _[App] Core resource_, _[Core] General_

**[DHIS2-17687](https://dhis2.atlassian.net/browse/DHIS2-17687): Category integrity issues point to the wrong URL in maintenance app**  
Components: _[App] Data administration_

**[DHIS2-10698](https://dhis2.atlassian.net/browse/DHIS2-10698): Indicators do not calculate in custom forms**  
**[DHIS2-19310](https://dhis2.atlassian.net/browse/DHIS2-19310): Metadata icons are not working in DV due to a broken redirect**  
Components: _[App] Data visualizer_, _[App] Maintenance_

**[DHIS2-21312](https://dhis2.atlassian.net/browse/DHIS2-21312): Global Shell - Invalid app URL causes crash**  
Components: _[App] Global Shell_

**[DHIS2-21008](https://dhis2.atlassian.net/browse/DHIS2-21008): The header bar flickers the default color**  
Components: _[App] Global Shell_

**[DHIS2-21100](https://dhis2.atlassian.net/browse/DHIS2-21100): Custom colors: global shell UI - shadow, online status badge, notification badge colors**  
Components: _[App] Global Shell_

**[DHIS2-19402](https://dhis2.atlassian.net/browse/DHIS2-19402): Command palette shortcut navigation: selecting a shortcut navigates the whole page, when it could navigate just the loaded app**  
Components: _[App] Global Shell_

**[DHIS2-19255](https://dhis2.atlassian.net/browse/DHIS2-19255): Global Shell sometimes show version "undefined" if short name doesn't match app key**  
Components: _[App] Global Shell_

**[DHIS2-19631](https://dhis2.atlassian.net/browse/DHIS2-19631): Hovering on user profile in the header hover text is displayed "header bar profile"**  
Components: _[App] Global Shell_

**[DHIS2-19404](https://dhis2.atlassian.net/browse/DHIS2-19404): Command palette: Shortcut items missing arrow icon**  
Components: _[App] Global Shell_

**[DHIS2-19660](https://dhis2.atlassian.net/browse/DHIS2-19660): [IMPORT/EXPORT APP]: summary crashes app with metadata import**  
Components: _[App] Import-export_

**[DHIS2-21301](https://dhis2.atlassian.net/browse/DHIS2-21301): Dropdown options not loading for different Job types i.e Predictors, Analytics table**  
Components: _[App] Job scheduler_

**[DHIS2-20652](https://dhis2.atlassian.net/browse/DHIS2-20652): Line list download fails when a boolean field is added**  
Components: _[App] Line Listing_

**[DHIS2-18263](https://dhis2.atlassian.net/browse/DHIS2-18263): [LOGIN APP]: make no flag option show no flag (not DHIS2 logo)**  
Components: _[App] Login_

**[DHIS2-19975](https://dhis2.atlassian.net/browse/DHIS2-19975): TOTP secret created in versions earlier than v2.42 will not work after upgrading to v2.42+**  
Components: _[App] Login_, _[App] User Profile_

**[DHIS2-19639](https://dhis2.atlassian.net/browse/DHIS2-19639): Fallback login is returning 500**  
Components: _[App] Login_

**[DHIS2-21094](https://dhis2.atlassian.net/browse/DHIS2-21094): [MAINTENANCE OLD]: data approval levels, data approval workflows not loading**  
Components: _[App] Maintenance_

**[DHIS2-9851](https://dhis2.atlassian.net/browse/DHIS2-9851): Short name for Validation rules**  
Components: _[App] Maintenance_

**[DHIS2-19970](https://dhis2.atlassian.net/browse/DHIS2-19970): Shortcut fallback language not falling back for Maintenance app**  
Components: _[App] Maintenance_

**[DHIS2-16371](https://dhis2.atlassian.net/browse/DHIS2-16371): Adjust text for OrgUnitField for Program Indicators**  
Components: _[App] Maintenance_

**[DHIS2-19729](https://dhis2.atlassian.net/browse/DHIS2-19729): [MAINTENANCE APP]: program indicator disaggregations, soft deleted category mappings not deleted**  
Components: _[App] Maintenance_

**[DHIS2-12149](https://dhis2.atlassian.net/browse/DHIS2-12149): Approval levels are not shown in order**  
Components: _[App] Maintenance_

**[DHIS2-19268](https://dhis2.atlassian.net/browse/DHIS2-19268): OU Profile: "No data found" message is shown while the loading spinner is visible**  
Components: _[App] Maps_

**[DHIS2-20425](https://dhis2.atlassian.net/browse/DHIS2-20425): Error on new Maps app version install**  
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

**[DHIS2-19623](https://dhis2.atlassian.net/browse/DHIS2-19623): Events count is wrong with server clustering**  
Components: _[App] Maps_

**[DHIS2-19484](https://dhis2.atlassian.net/browse/DHIS2-19484): Attachments in Messaging App Fail to Open — “File wasn’t available on site” Error**  
Components: _[App] Messaging_

**[DHIS2-21323](https://dhis2.atlassian.net/browse/DHIS2-21323): Unable to edit validation notification**  
Components: _[App] Metadata Management App_

**[DHIS2-21215](https://dhis2.atlassian.net/browse/DHIS2-21215): editing "Limit data entry by period" throws "org.hibernate.TransientPropertyValueException" error message**  
Components: _[App] Metadata Management App_

**[DHIS2-21291](https://dhis2.atlassian.net/browse/DHIS2-21291): Cannot update only name of Analytics Table Hook (false duplicate error)**  
Components: _[App] Metadata Management App_

**[DHIS2-21159](https://dhis2.atlassian.net/browse/DHIS2-21159): Infinite recursion error saving dataset**  
Components: _[App] Metadata Management App_

**[DHIS2-19815](https://dhis2.atlassian.net/browse/DHIS2-19815): Relative periods previously assigned being cleared upon editing standard report**  
Components: _[App] Reports_

**[DHIS2-19736](https://dhis2.atlassian.net/browse/DHIS2-19736): Unable to select period on a HTML based standard report after editing the report**  
Components: _[App] Reports_

**[DHIS2-19069](https://dhis2.atlassian.net/browse/DHIS2-19069): Unable edit Standard report: throws an error on Edit**  
Components: _[App] Reports_

**[DHIS2-19327](https://dhis2.atlassian.net/browse/DHIS2-19327): Column Header and Content mismatch in Report Rate Summary**  
Components: _[App] Reports_

**[DHIS2-20462](https://dhis2.atlassian.net/browse/DHIS2-20462): Route URL Input does not allow localhost in the UI of Route Manager**  
Components: _[App] Route Manager_

**[DHIS2-20311](https://dhis2.atlassian.net/browse/DHIS2-20311): Routes with encoded params doesn't work**  
Components: _[App] Route Manager_

**[DHIS2-20010](https://dhis2.atlassian.net/browse/DHIS2-20010): Routes with parameters using filter=id:in:[uid,uid] doesn't work**  
Components: _[App] Route Manager_

**[DHIS2-20130](https://dhis2.atlassian.net/browse/DHIS2-20130): Post Routes with form data and file doesn't work**  
Components: _[App] Route Manager_

**[DHIS2-21011](https://dhis2.atlassian.net/browse/DHIS2-21011): Custom header bar colors style bugs (System settings)**  
Components: _[App] Settings_

**[DHIS2-19527](https://dhis2.atlassian.net/browse/DHIS2-19527): Custom App as a Start Page results in 404 or broken pages**  
Components: _[App] Settings_

**[DHIS2-19290](https://dhis2.atlassian.net/browse/DHIS2-19290): Display enableGlobalShell setting in Global Shell for v42+ (and not pre-42)**  
Components: _[App] Settings_

**[DHIS2-20861](https://dhis2.atlassian.net/browse/DHIS2-20861): Program stage notification translations not respected**  
Components: _[App] Translations_

**[DHIS2-15942](https://dhis2.atlassian.net/browse/DHIS2-15942): Rename authorities related to "Tracked Entity Type"**  
Components: _[App] User_

**[DHIS2-20283](https://dhis2.atlassian.net/browse/DHIS2-20283): Function "d2:condition" is not implemented in the expression-parser**  
Components: _[Core] Expression Language_

**[DHIS2-20606](https://dhis2.atlassian.net/browse/DHIS2-20606): Multi Image creation not working for ORG_UNIT and USER_AVATAR domains**  
Components: _[Core] General_

**[DHIS2-19463](https://dhis2.atlassian.net/browse/DHIS2-19463): Rename table from "intepretation_likedby" to "interpretation_likedby" (missed r)**  
Components: _[Core] General_

**[DHIS2-19287](https://dhis2.atlassian.net/browse/DHIS2-19287): Remove references in the code to old authorities**  
Components: _[Core] General_

**[DHIS2-20157](https://dhis2.atlassian.net/browse/DHIS2-20157): fix: FileResourceCleanUpJob does not clean up JOB_DATA file resources/files for deleted  ONCE_ASAP jobs**  
Components: _[Core] Job Scheduler_

**[DHIS2-20377](https://dhis2.atlassian.net/browse/DHIS2-20377): Regression: some types in the OpenAPI schemas have widened which makes these schemas unusable**  
Components: _[Core] OpenAPI_

**[DHIS2-19787](https://dhis2.atlassian.net/browse/DHIS2-19787): OpenAPI - special handling for SystemSettings interface to list key names not property names**  
Components: _[Core] OpenAPI_


# Patch 2.34.2 Release Note

## Features

**[DHIS2-9081](https://jira.dhis2.org/browse/DHIS2-9081): Support "Open periods after category option end date" in the backend**  
Components: _[API] Data approval_, _[API] Data value set_

**[DHIS2-9266](https://jira.dhis2.org/browse/DHIS2-9266): Config option for disabling all audit services**  
Components: _[API] System configuration_

**[DHIS2-7621](https://jira.dhis2.org/browse/DHIS2-7621): Flag for Madagascar**  
Components: _[API] System configuration_

**[DHIS2-9087](https://jira.dhis2.org/browse/DHIS2-9087): Event filters not working**  
Components: _[API] Tracker_

**[DHIS2-5320](https://jira.dhis2.org/browse/DHIS2-5320): Disable rendering of parsed HTML and Javascript in intepretations app**  
Components: _[App] Interpretations_

**[DHIS2-9080](https://jira.dhis2.org/browse/DHIS2-9080): Add field "Open periods after category option end date" to DataSets**  
Components: _[App] Maintenance_

**[DHIS2-9291](https://jira.dhis2.org/browse/DHIS2-9291): Use user lookup API for messaging app**  
Components: _[App] Messaging_

**[DHIS2-8119](https://jira.dhis2.org/browse/DHIS2-8119): Replace api/reportTables with api/visualizations**  
Components: _[App] Reports_

**[DHIS2-9267](https://jira.dhis2.org/browse/DHIS2-9267): Update gateway configuration UI for generic template**  
Components: _[App] SMS configuration_


## Bugs

**[DHIS2-8588](https://jira.dhis2.org/browse/DHIS2-8588): Event query analytics program indicators with conditions crashes**  
Components: _[API] Analytics_  

**[DHIS2-9737](https://jira.dhis2.org/browse/DHIS2-9737): Error when using start/end dates as filters - Division by zero**  
Components: _[API] Analytics_

**[DHIS2-9826](https://jira.dhis2.org/browse/DHIS2-9826): Unsafe division in indicators: Non-terminating decimal expansion; no exact decimal result**  
Components: _[API] Analytics_

**[DHIS2-9791](https://jira.dhis2.org/browse/DHIS2-9791): Analytics API filters not working for input ID scheme CODE**  
Components: _[API] Analytics_

**[DHIS2-9510](https://jira.dhis2.org/browse/DHIS2-9510): Thematic layer with start/end dates breaks the app**  
Components: _[API] Analytics_, _[App] Maps_

**[DHIS2-9328](https://jira.dhis2.org/browse/DHIS2-9328): Default digit group separator system setting not respected**  
Components: _[API] Analytics_, _[App] Data visualizer_, _[App] Event reports_, _[App] Maps_

**[DHIS2-8684](https://jira.dhis2.org/browse/DHIS2-8684): Resource table "CREATE TABLE" script can be invalid**  
Components: _[API] Analytics_

**[DHIS2-7539](https://jira.dhis2.org/browse/DHIS2-7539): Batch handler error importing data values for the first time**  
Components: _[API] Data value set_

**[DHIS2-8782](https://jira.dhis2.org/browse/DHIS2-8782): Upgrade from 2.33.3 to DHIS2 2.34 fails  - Flyway error**  
Components: _[API] Database migration_  

**[DHIS2-8420](https://jira.dhis2.org/browse/DHIS2-8420): Updating event filters causes sharing settings to reset**  
Components: _[API] Events_

**[DHIS2-8730](https://jira.dhis2.org/browse/DHIS2-8730): Capture Web App - Event list Filter - type mismatch**  
Components: _[API] Events_

**[DHIS2-9059](https://jira.dhis2.org/browse/DHIS2-9059): Fields parameter with AttributeValue is very slow**  
Components: _[API] Metadata model_

**[DHIS2-9797](https://jira.dhis2.org/browse/DHIS2-9797): Flyway needs upgrade to support PostgreSQL 13.0**  
Components: _[API] Other_

**[DHIS2-8783](https://jira.dhis2.org/browse/DHIS2-8783): Downloading file resources from Data Entry app fails with Network error**  
Components: _[API] Other_, _[App] Data entry_

**[DHIS2-9230](https://jira.dhis2.org/browse/DHIS2-9230): Loading TEI in TrackerCapture app trigger update program_attribute**  
Components: _[API] Other_

**[DHIS2-7043](https://jira.dhis2.org/browse/DHIS2-7043): Dataelement Deletion Handler Misses fk_datadimensionitem_dataelementoperand_dataelementid**  
Components: _[API] Other_, _[App] Maintenance_

**[DHIS2-7986](https://jira.dhis2.org/browse/DHIS2-7986): Date manipulation in rule engine is not considering special cases**  
Components: _[API] Program rules_

**[DHIS2-9146](https://jira.dhis2.org/browse/DHIS2-9146): Auto Generated sequential IDs reserving same numbers multiple times**  
Components: _[API] Tracker_

**[DHIS2-9395](https://jira.dhis2.org/browse/DHIS2-9395): TEAs with data type YES ONLY cannot be unticked (set to false)**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-9625](https://jira.dhis2.org/browse/DHIS2-9625): Fetching for TEIs in a program will not throw an error even though there is a limit on the number of TEI to be returned from a search**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-9564](https://jira.dhis2.org/browse/DHIS2-9564): Enrollment notes - storedBy: "Unknown"**  
Components: _[API] Tracker_

**[DHIS2-9065](https://jira.dhis2.org/browse/DHIS2-9065): Password reset message in many cases is misleading**  
Components: _[API] User_

**[DHIS2-9295](https://jira.dhis2.org/browse/DHIS2-9295): Capture App does not display all events entered for non-super user account**  
Components: _[App] Capture_

**[DHIS2-9709](https://jira.dhis2.org/browse/DHIS2-9709): Capture app rules engine: assigning boolean values doesn't work**  
Components: _[App] Capture_  
**Retesting**

**[DHIS2-9373](https://jira.dhis2.org/browse/DHIS2-9373): Coordinate field: rearrange input and fix display**  
Components: _[App] Capture_

**[DHIS2-9347](https://jira.dhis2.org/browse/DHIS2-9347): Align assigned user field in row view**  
Components: _[App] Capture_

**[DHIS2-8945](https://jira.dhis2.org/browse/DHIS2-8945): refactoring the RulesEngine**  
Components: _[App] Capture_

**[DHIS2-9315](https://jira.dhis2.org/browse/DHIS2-9315): Splitview map is not showing correctly in the dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-9382](https://jira.dhis2.org/browse/DHIS2-9382): Interpretations panel does not support rich text correctly**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-9234](https://jira.dhis2.org/browse/DHIS2-9234): Titleless dashboard links to undefined**  
Components: _[App] Dashboard_

**[DHIS2-9593](https://jira.dhis2.org/browse/DHIS2-9593): Switch to map causes misrender of other maps**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-9010](https://jira.dhis2.org/browse/DHIS2-9010): Target line and Base line not displayed for multi axis charts**  
Components: _[App] Data visualizer_

**[DHIS2-9014](https://jira.dhis2.org/browse/DHIS2-9014): Axis range, Steps, Decimals not displayed for multiple axes charts**  
Components: _[App] Data visualizer_

**[DHIS2-9381](https://jira.dhis2.org/browse/DHIS2-9381): Hide empty columns for pivot tables causes crash and unexpected behaviour**  
Components: _[App] Data visualizer_

**[DHIS2-9013](https://jira.dhis2.org/browse/DHIS2-9013): Vertical axis title not displayed for multiple axes charts**  
Components: _[App] Data visualizer_

**[DHIS2-9012](https://jira.dhis2.org/browse/DHIS2-9012): Transferring from MA-type to non MA-type still displays MA (multiple axes)**  
Components: _[App] Data visualizer_

**[DHIS2-9011](https://jira.dhis2.org/browse/DHIS2-9011): Area charts should not allow multiple axes**  
Components: _[App] Data visualizer_

**[DHIS2-9003](https://jira.dhis2.org/browse/DHIS2-9003): Legend key option is inverted**  
Components: _[App] Data visualizer_

**[DHIS2-9360](https://jira.dhis2.org/browse/DHIS2-9360): Saving a visualization in DV without a name throws a server error**  
Components: _[App] Data visualizer_

**[DHIS2-9483](https://jira.dhis2.org/browse/DHIS2-9483): Visualization PDF Download Not Working**  
Components: _[App] Data visualizer_

**[DHIS2-9002](https://jira.dhis2.org/browse/DHIS2-9002): Decimals and Steps allow negative values**  
Components: _[App] Data visualizer_

**[DHIS2-9340](https://jira.dhis2.org/browse/DHIS2-9340): Digit group separator not working for single value charts**  
Components: _[App] Data visualizer_

**[DHIS2-9026](https://jira.dhis2.org/browse/DHIS2-9026): Org Unit Group in columns download as UID in pivot table (HTML/Excel/CSV)**  
Components: _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-9004](https://jira.dhis2.org/browse/DHIS2-9004): Title / Subtitle options displayed incorrectly for certain vis types**  
Components: _[App] Data visualizer_

**[DHIS2-9000](https://jira.dhis2.org/browse/DHIS2-9000): Non-PT types display PT specific help text**  
Components: _[App] Data visualizer_

**[DHIS2-9194](https://jira.dhis2.org/browse/DHIS2-9194): Y-axis steps not always respected**  
Components: _[App] Data visualizer_

**[DHIS2-8896](https://jira.dhis2.org/browse/DHIS2-8896): Chart with negative axis range fail to save**  
Components: _[App] Data visualizer_

**[DHIS2-8905](https://jira.dhis2.org/browse/DHIS2-8905): Data elements from multiple stages cannot be restored after saving**  
Components: _[App] Event reports_

**[DHIS2-9168](https://jira.dhis2.org/browse/DHIS2-9168): Event Reports is showing option set codes instead of names**  
Components: _[App] Event reports_

**[DHIS2-8505](https://jira.dhis2.org/browse/DHIS2-8505): Cannot download Line list Enrollment Report if using Start/End Date**  
Components: _[App] Event reports_

**[DHIS2-4664](https://jira.dhis2.org/browse/DHIS2-4664): Scheduler for Analytics table is not working and is breaking analytics table data**  
Components: _[App] Job scheduler_

**[DHIS2-7649](https://jira.dhis2.org/browse/DHIS2-7649): Analytics tables did not update by Scheduler**  
Components: _[App] Job scheduler_  

**[DHIS2-9023](https://jira.dhis2.org/browse/DHIS2-9023): Un-informative message if deletion of programstagesection is blocked by programruleaction**  
Components: _[App] Maintenance_

**[DHIS2-9182](https://jira.dhis2.org/browse/DHIS2-9182): Pagination does not work in Indicator numerator/denominator pop-up**  
Components: _[App] Maintenance_

**[DHIS2-9522](https://jira.dhis2.org/browse/DHIS2-9522): Map is not always resized when data table is dragged**  
Components: _[App] Maps_

**[DHIS2-9543](https://jira.dhis2.org/browse/DHIS2-9543): Wrong period shown in thematic layer popup**  
Components: _[App] Maps_

**[DHIS2-9698](https://jira.dhis2.org/browse/DHIS2-9698): Thematic layer with start/end dates breaks the app for data element,program Indicator, reporting rates, event data items**  
Components: _[App] Maps_

**[DHIS2-9426](https://jira.dhis2.org/browse/DHIS2-9426): Disable mouseweel zoom for split view maps on dashboards**  
Components: _[App] Maps_

**[DHIS2-9314](https://jira.dhis2.org/browse/DHIS2-9314): Thematic layer - Maps not getting loaded when legend set under style is not chosen**  
Components: _[App] Maps_

**[DHIS2-9357](https://jira.dhis2.org/browse/DHIS2-9357): In maps it's not possible to toggle visibility**  
Components: _[App] Maps_

**[DHIS2-9052](https://jira.dhis2.org/browse/DHIS2-9052): Unread Message Count incorrect**  
Components: _[App] Messaging_

**[DHIS2-9368](https://jira.dhis2.org/browse/DHIS2-9368): Translations/localisations not displayed on Reports App**  
Components: _[App] Reports_  

**[DHIS2-8844](https://jira.dhis2.org/browse/DHIS2-8844): Changes of Report app replaced all the data modal function existed before**  
Components: _[App] Reports_

**[DHIS2-9158](https://jira.dhis2.org/browse/DHIS2-9158): Standard report(HTML) Reporting parameter(organisation units and  reporting period) does not save changes when checked to true**  
Components: _[App] Reports_

**[DHIS2-8913](https://jira.dhis2.org/browse/DHIS2-8913): Report params dialog is being skipped in v2.35**  
Components: _[App] Reports_

**[DHIS2-8908](https://jira.dhis2.org/browse/DHIS2-8908): In standard Report the configured period does not being filtered during view of standard Report**  
Components: _[App] Reports_

**[DHIS2-9335](https://jira.dhis2.org/browse/DHIS2-9335): Simultaneously adding relationships to same TEI**  
Components: _[App] Tracker capture_

**[DHIS2-8772](https://jira.dhis2.org/browse/DHIS2-8772): COMPLETING a Tracker case will DELETE enrollment point coordinates**  
Components: _[App] Tracker capture_

**[DHIS2-9437](https://jira.dhis2.org/browse/DHIS2-9437): App is lagging behind one major version of @dhis2/ui**  
Components: _[App] Usage analytics_


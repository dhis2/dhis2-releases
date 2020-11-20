# Patch 2.33.7 Release Note

## Features

**[DHIS2-9266](https://jira.dhis2.org/browse/DHIS2-9266): Config option for disabling all audit services**  
Components: _[API] System configuration_

**[DHIS2-7621](https://jira.dhis2.org/browse/DHIS2-7621): Add flags of the world**  
Components: _[API] System configuration_

**[DHIS2-5320](https://jira.dhis2.org/browse/DHIS2-5320): Disable rendering of parsed HTML and Javascript in interpretations app**  
Components: _[App] Interpretations_

**[DHIS2-9291](https://jira.dhis2.org/browse/DHIS2-9291): Use user lookup API for messaging app**  
Components: _[App] Messaging_

**[DHIS2-8119](https://jira.dhis2.org/browse/DHIS2-8119): Replace api/reportTables with api/visualizations**  
Components: _[App] Reports_

## Bugs

**[DHIS2-8588](https://jira.dhis2.org/browse/DHIS2-8588): Event query analytics program indicators with conditions crashes**  
Components: _[API] Analytics_

**[DHIS2-9737](https://jira.dhis2.org/browse/DHIS2-9737): Error when using start/end dates as filters - Division by zero**  
Components: _[API] Analytics_

**[DHIS2-9510](https://jira.dhis2.org/browse/DHIS2-9510): Thematic layer with start/end dates breaks the app**  
Components: _[API] Analytics_, _[App] Maps_

**[DHIS2-9939](https://jira.dhis2.org/browse/DHIS2-9939): File descriptor leak for app resources leads to unusable DHIS 2 instance**  
Components: _[API] App management_  

**[DHIS2-8420](https://jira.dhis2.org/browse/DHIS2-8420): Updating event filters causes sharing settings to reset**  
Components: _[API] Events_

**[DHIS2-9189](https://jira.dhis2.org/browse/DHIS2-9189): Program id omitted from payload when idScheme=ATTRIBUTE:uid**  
Components: _[API] Events_

**[DHIS2-9601](https://jira.dhis2.org/browse/DHIS2-9601): Header vs rows mismatch on event data items as filter**  
Components: _[API] Other_

**[DHIS2-9230](https://jira.dhis2.org/browse/DHIS2-9230): Loading TEI in TrackerCapture app trigger update program_attribute**  
Components: _[API] Other_

**[DHIS2-8783](https://jira.dhis2.org/browse/DHIS2-8783): Downloading file resources from Data Entry app fails with Network error**  
Components: _[API] Other_, _[App] Data entry_

**[DHIS2-9797](https://jira.dhis2.org/browse/DHIS2-9797): Flyway needs upgrade to support PostgreSQL 13.0**  
Components: _[API] Other_

**[DHIS2-9438](https://jira.dhis2.org/browse/DHIS2-9438): Custom attributes ignored when idScheme=Attribute:uid**  
Components: _[API] Tracker_

**[DHIS2-7573](https://jira.dhis2.org/browse/DHIS2-7573): Problem creating relationships with empty TEA of type Image**  
Components: _[API] Tracker_

**[DHIS2-8867](https://jira.dhis2.org/browse/DHIS2-8867): Posting events with "No access" data elements causes data removal in the server**  
Components: _[API] Tracker_

**[DHIS2-7983](https://jira.dhis2.org/browse/DHIS2-7983): Multiple Events can be created for a non-repeatable program stage when sent in the same API payload.**  
Components: _[API] Tracker_

**[DHIS2-9395](https://jira.dhis2.org/browse/DHIS2-9395): TEAs with data type YES ONLY cannot be unticked (set to false)**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-9625](https://jira.dhis2.org/browse/DHIS2-9625): Fetching for TEIs in a program will not throw an error even though there is a limit on the number of TEI to be returned from a search**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-9564](https://jira.dhis2.org/browse/DHIS2-9564): Enrollment notes - storedBy: "Unknown"**  
Components: _[API] Tracker_

**[DHIS2-9065](https://jira.dhis2.org/browse/DHIS2-9065): Password reset message in many cases is misleading**  
Components: _[API] User_

**[DHIS2-9709](https://jira.dhis2.org/browse/DHIS2-9709): Capture app rules engine: assigning boolean values doesn't work**  
Components: _[App] Capture_

**[DHIS2-9295](https://jira.dhis2.org/browse/DHIS2-9295): Capture App does not display all events entered for non-super user account**  
Components: _[App] Capture_

**[DHIS2-9373](https://jira.dhis2.org/browse/DHIS2-9373): Coordinate field: rearrange input and fix display**  
Components: _[App] Capture_

**[DHIS2-9347](https://jira.dhis2.org/browse/DHIS2-9347): Align assigned user field in row view**  
Components: _[App] Capture_

**[DHIS2-9382](https://jira.dhis2.org/browse/DHIS2-9382): Interpretations panel does not support rich text correctly**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-9234](https://jira.dhis2.org/browse/DHIS2-9234): Titleless dashboard links to undefined**  
Components: _[App] Dashboard_

**[DHIS2-9003](https://jira.dhis2.org/browse/DHIS2-9003): Legend key option is inverted**  
Components: _[App] Data visualizer_

**[DHIS2-9360](https://jira.dhis2.org/browse/DHIS2-9360): Saving a visualization in DV without a name throws a server error**  
Components: _[App] Data visualizer_

**[DHIS2-9483](https://jira.dhis2.org/browse/DHIS2-9483): Visualization PDF Download Not Working**  
Components: _[App] Data visualizer_

**[DHIS2-9002](https://jira.dhis2.org/browse/DHIS2-9002): Decimals and Steps allow negative values**  
Components: _[App] Data visualizer_

**[DHIS2-9026](https://jira.dhis2.org/browse/DHIS2-9026): Org Unit Group in columns download as UID in pivot table (HTML/Excel/CSV)**  
Components: _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-9194](https://jira.dhis2.org/browse/DHIS2-9194): Y-axis steps not always respected**  
Components: _[App] Data visualizer_

**[DHIS2-8905](https://jira.dhis2.org/browse/DHIS2-8905): Data elements from multiple stages cannot be restored after saving**  
Components: _[App] Event reports_

**[DHIS2-7997](https://jira.dhis2.org/browse/DHIS2-7997): Push analytics - dashboards with map items export useless "link"**  
Components: _[App] GIS_, _[App] Maintenance_

**[DHIS2-4664](https://jira.dhis2.org/browse/DHIS2-4664): Scheduler for Analytics table is not working and is breaking analytics table data**  
Components: _[App] Job scheduler_

**[DHIS2-7649](https://jira.dhis2.org/browse/DHIS2-7649): Analytics tables did not update by Scheduler**  
Components: _[App] Job scheduler_  

**[DHIS2-5801](https://jira.dhis2.org/browse/DHIS2-5801): Deleting a custom event form does not work**  
Components: _[App] Maintenance_  

**[DHIS2-9023](https://jira.dhis2.org/browse/DHIS2-9023): Un-informative message if deletion of programstagesection is blocked by programruleaction**  
Components: _[App] Maintenance_

**[DHIS2-9698](https://jira.dhis2.org/browse/DHIS2-9698): Thematic layer with start/end dates breaks the app for data element,program Indicator, reporting rates, event data items**  
Components: _[App] Maps_

**[DHIS2-9314](https://jira.dhis2.org/browse/DHIS2-9314): Thematic layer - Maps not getting loaded when legend set under style is not chosen**  
Components: _[App] Maps_

**[DHIS2-9908](https://jira.dhis2.org/browse/DHIS2-9908): Missing Label when selecting Quarterly as period type in Report apps**  
Components: _[App] Reports_

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

**[DHIS2-8950](https://jira.dhis2.org/browse/DHIS2-8950): Bidirectional Relationships give Unknown Error when created from To Constraint**  
Components: _[App] Tracker capture_

**[DHIS2-9335](https://jira.dhis2.org/browse/DHIS2-9335): Simultaneously adding relationships to same TEI**  
Components: _[App] Tracker capture_

**[DHIS2-9437](https://jira.dhis2.org/browse/DHIS2-9437): App is lagging behind one major version of @dhis2/ui**  
Components: _[App] Usage analytics_


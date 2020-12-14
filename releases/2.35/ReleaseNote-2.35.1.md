# Patch 2.35.1 Release Note

## Features

**[DHIS2-10041](https://jira.dhis2.org/browse/DHIS2-10041): Support captureScopeFilter for programs endpoint**  
Components: _[API] Metadata model_  

**[DHIS2-9346](https://jira.dhis2.org/browse/DHIS2-9346): Add Azure AD OpenID Connect provider support**  
Components: _[API] Security_  

**[DHIS2-9574](https://jira.dhis2.org/browse/DHIS2-9574): Show full name in notes**  
Components: _[App] Tracker capture_  
**Reopened**

## Bugs

**[DHIS2-10082](https://jira.dhis2.org/browse/DHIS2-10082): Report Rates - Daily calculation failing**  
Components: _[API] Analytics_

**[DHIS2-8588](https://jira.dhis2.org/browse/DHIS2-8588): Event query analytics program indicators with conditions crashes**  
Components: _[API] Analytics_

**[DHIS2-9737](https://jira.dhis2.org/browse/DHIS2-9737): Error when using start/end dates as filters - Division by zero**  
Components: _[API] Analytics_

**[DHIS2-9949](https://jira.dhis2.org/browse/DHIS2-9949): Error importing dataValueSet with new periods**  
Components: _[API] Data value set_

**[DHIS2-8782](https://jira.dhis2.org/browse/DHIS2-8782): Upgrade from 2.33.3 to DHIS2 2.34 fails  - Flyway error**  
Components: _[API] Database migration_

**[DHIS2-7937](https://jira.dhis2.org/browse/DHIS2-7937): [ Internal Server Error ] Cannot filter events on certain kind of values [ phoneNumber ]**  
Components: _[API] Events_

**[DHIS2-8420](https://jira.dhis2.org/browse/DHIS2-8420): Updating event filters causes sharing settings to reset**  
Components: _[API] Events_

**[DHIS2-10044](https://jira.dhis2.org/browse/DHIS2-10044): orgunit api returns duplicates with pagination**  
Components: _[API] Metadata model_

**[DHIS2-9601](https://jira.dhis2.org/browse/DHIS2-9601): Header vs rows mismatch on event data items as filter**  
Components: _[API] Other_

**[DHIS2-9914](https://jira.dhis2.org/browse/DHIS2-9914): Filtering all items in /dataItems endpoint is not working**  
Components: _[API] Other_

**[DHIS2-9797](https://jira.dhis2.org/browse/DHIS2-9797): Flyway needs upgrade to support PostgreSQL 13.0**  
Components: _[API] Other_

**[DHIS2-9575](https://jira.dhis2.org/browse/DHIS2-9575): allowDeleteUserGroupAccess error on updating sharing settings for program stages**  
Components: _[API] Other_

**[DHIS2-9973](https://jira.dhis2.org/browse/DHIS2-9973): Program rule expression description fails when using TrackedEntityAttributes**  
Components: _[API] Program rules_

**[DHIS2-7986](https://jira.dhis2.org/browse/DHIS2-7986): Date manipulation in rule engine is not considering special cases**  
Components: _[API] Program rules_

**[DHIS2-9985](https://jira.dhis2.org/browse/DHIS2-9985): TrackedEntityInstances API should respect both ownership and registration OU for Access control checks.**  
Components: _[API] Tracker_  

**[DHIS2-9415](https://jira.dhis2.org/browse/DHIS2-9415): Avoid querying the notes table when adding/updating events an event has no notes**  
Components: _[API] Tracker_

**[DHIS2-8442](https://jira.dhis2.org/browse/DHIS2-8442): Missing audit entry for TEI hard deletion**  
Components: _[API] Tracker_

**[DHIS2-8911](https://jira.dhis2.org/browse/DHIS2-8911): Tracker API allow setting an arbitrary string as "storedBy" for Tracked Entity Attribute Values and Data Element Values**  
Components: _[API] Tracker_  

**[DHIS2-9405](https://jira.dhis2.org/browse/DHIS2-9405): Response exposes SQL statement**  
Components: _[API] Tracker_

**[DHIS2-7573](https://jira.dhis2.org/browse/DHIS2-7573): Problem creating relationships with empty TEA of type Image**  
Components: _[API] Tracker_

**[DHIS2-8872](https://jira.dhis2.org/browse/DHIS2-8872): Invalid report from Tracker when importing enrollment with events**  
Components: _[API] Tracker_

**[DHIS2-9625](https://jira.dhis2.org/browse/DHIS2-9625): Fetching for TEIs in a program will not throw an error even though there is a limit on the number of TEI to be returned from a search**  
Components: _[API] Tracker_, _[App] Tracker capture_

**[DHIS2-10070](https://jira.dhis2.org/browse/DHIS2-10070): Lag in Capture app for Large Event Program**  
Components: _[App] Capture_, _[App] Event capture_

**[DHIS2-10065](https://jira.dhis2.org/browse/DHIS2-10065): 2.35.0 COCs not found using Capture App**  
Components: _[App] Capture_

**[DHIS2-9295](https://jira.dhis2.org/browse/DHIS2-9295): Capture App does not display all events entered for non-super user account**  
Components: _[App] Capture_

**[DHIS2-9709](https://jira.dhis2.org/browse/DHIS2-9709): Capture app rules engine: assigning boolean values doesn't work**  
Components: _[App] Capture_

**[DHIS2-9725](https://jira.dhis2.org/browse/DHIS2-9725): Adding an organisation unit filter to a dashboard with a widget crashes the dashboard**  
Components: _[App] Dashboard_

**[DHIS2-9980](https://jira.dhis2.org/browse/DHIS2-9980): Dashboard crashes when selecting Org unit filter and Interpretations don't open**  
Components: _[App] Dashboard_

**[DHIS2-9382](https://jira.dhis2.org/browse/DHIS2-9382): Interpretations panel does not support rich text correctly**  
Components: _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_

**[DHIS2-9032](https://jira.dhis2.org/browse/DHIS2-9032): Weekly in data Entry**  
Components: _[App] Data entry_

**[DHIS2-9876](https://jira.dhis2.org/browse/DHIS2-9876): "New" button has no effect on unsaved charts**  
Components: _[App] Data visualizer_

**[DHIS2-8905](https://jira.dhis2.org/browse/DHIS2-8905): Data elements from multiple stages cannot be restored after saving**  
Components: _[App] Event reports_

**[DHIS2-7997](https://jira.dhis2.org/browse/DHIS2-7997): Push analytics - dashboards with map items export useless "link"**  
Components: _[App] GIS_, _[App] Maintenance_

**[DHIS2-6191](https://jira.dhis2.org/browse/DHIS2-6191): Error creating a program if the user only has authority to create private programs**  
Components: _[App] Maintenance_  

**[DHIS2-5801](https://jira.dhis2.org/browse/DHIS2-5801): Deleting a custom event form does not work**  
Components: _[App] Maintenance_

**[DHIS2-9023](https://jira.dhis2.org/browse/DHIS2-9023): Un-informative message if deletion of programstagesection is blocked by programruleaction**  
Components: _[App] Maintenance_

**[DHIS2-10071](https://jira.dhis2.org/browse/DHIS2-10071): Not possible to close right-click menu for dashboard maps**  
Components: _[App] Maps_

**[DHIS2-9522](https://jira.dhis2.org/browse/DHIS2-9522): Map is not always resized when data table is dragged**  
Components: _[App] Maps_

**[DHIS2-9570](https://jira.dhis2.org/browse/DHIS2-9570): Remove blue focus border around map container**  
Components: _[App] Maps_

**[DHIS2-9543](https://jira.dhis2.org/browse/DHIS2-9543): Wrong period shown in thematic layer popup**  
Components: _[App] Maps_

**[DHIS2-9550](https://jira.dhis2.org/browse/DHIS2-9550): About page text is right-aligned**  
Components: _[App] Other_

**[DHIS2-8844](https://jira.dhis2.org/browse/DHIS2-8844): Changes of Report app replaced all the data modal function existed before**  
Components: _[App] Reports_

**[DHIS2-9368](https://jira.dhis2.org/browse/DHIS2-9368): Translations/localisations not displayed on Reports App**  
Components: _[App] Reports_

**[DHIS2-9908](https://jira.dhis2.org/browse/DHIS2-9908): Missing Label when selecting Quarterly as period type in Report apps**  
Components: _[App] Reports_

**[DHIS2-9905](https://jira.dhis2.org/browse/DHIS2-9905): [SMS Configuration]: Fix broken formula in sms commands section**  
Components: _[App] SMS configuration_

**[DHIS2-9932](https://jira.dhis2.org/browse/DHIS2-9932): [SMS Configuration]: Show correct formula after editing formula**  
Components: _[App] SMS configuration_

**[DHIS2-9865](https://jira.dhis2.org/browse/DHIS2-9865): Received SMS section filter broken when using both filter fields**  
Components: _[App] SMS configuration_

**[DHIS2-8950](https://jira.dhis2.org/browse/DHIS2-8950): Bidirectional Relationships give Unknown Error when created from To Constraint**  
Components: _[App] Tracker capture_


# Patch 2.31.2 Release Note 


## Features


**[DHIS2-6080](https://jira.dhis2.org/browse/DHIS2-6080): Skip zero values in analytics table export**  
Components: _[API] Analytics_ 
> Analytics can now be configured to skip zero data values for sum aggregation type data elements. See [System settings docs](https://docs.dhis2.org/master/en/developer/html/webapi_system_settings.html).


**[DHIS2-6160](https://jira.dhis2.org/browse/DHIS2-6160): Option and authority for disabling audit in data value import**  
Components: _[API] Data value set_  
> A skipAudit option is now available, to improve performance during import, for users with the correct authority. see [Import parameters docs](https://docs.dhis2.org/master/en/developer/html/webapi_data_values.html#webapi_data_values_import_parameters).


**[DHIS2-5905](https://jira.dhis2.org/browse/DHIS2-5905): Program Rule Engine Performance Enhancement**  
Components: _[API] Program rules_ 
> Performance of event updates has been improved by optimising calls to the rule engine.

**[DHIS2-5472](https://jira.dhis2.org/browse/DHIS2-5472), [DHIS2-4008](https://jira.dhis2.org/browse/DHIS2-4008)**: **Analytics apps: Order interpretations in descending order, comments in ascending order**  
Components: _[App] Dashboard_, _[App] Maps_  
> The Interpretations functionality has been improved to provide more intuitive ordering.


**[DHIS2-5486](https://jira.dhis2.org/browse/DHIS2-5486), [DHIS2-5483](https://jira.dhis2.org/browse/DHIS2-5483), [DHIS2-5469](https://jira.dhis2.org/browse/DHIS2-5469): Dashboard, DV, Maps: Add interpretations toolbar, sharing, styling changes**  
Components: _[App] Dashboard_ 
> The Interpretations functionality has been improved and harmonised across applications.

**[DHIS2-5470](https://jira.dhis2.org/browse/DHIS2-5470): Dashboard, Maps and Data Visualizer - Interpretation actions show icons only, with hover tooltip**  
Components: _[App] Dashboard_  
> The Interpretations has been simplified and de-cluttered with the use of clear, simple icons.

**[DHIS2-5081](https://jira.dhis2.org/browse/DHIS2-5081): Ensure API requests are encoded across front end apps**  
Components: _[App] Data entry_, _[App] Maintenance_  
> API requests from apps have been reviewed and updated to make sure they are properly URL-encoded.  


**[DHIS2-6225](https://jira.dhis2.org/browse/DHIS2-6225): Use form name in tracked entity attributes**  
Components: _[App] Tracker capture_ 
> Form name can now be defined for tracked entity attributes. The tracker capture app uses the form name instead of the tracked entity instance name in the same way as for data elements.

**[DHIS2-5838](https://jira.dhis2.org/browse/DHIS2-5838): Enrolling in tracker capture - prevent multiclick**  
Components: _[App] Tracker capture_  
> Accidental creation of multiple enrollments by multiple clicking is now prevented.


**[DHIS2-6026](https://jira.dhis2.org/browse/DHIS2-6026): Show incoming relationships in tei dashboard**  
Components: _[App] Tracker capture_  
> The TEI dashboard has been enhanced to show incoming as well as outgoing relationships, to allow easy reference and navigation between related entities.


## Bugs


**[DHIS2-4681](https://jira.dhis2.org/browse/DHIS2-4681): Reporting rates do not properly aggregate expected reports across multiple periods**  
Components: _[API] Analytics_, _[App] Data visualizer_, _[App] Pivot table_  


**[DHIS2-4000](https://jira.dhis2.org/browse/DHIS2-4000): Inconsistent indicator totals for indicators using Average (sum in organisationunit hierarchy)**  
Components: _[API] Analytics_, _[App] Pivot table_  


**[DHIS2-5956](https://jira.dhis2.org/browse/DHIS2-5956): Dimension Restriction adds lot of processing time for pivots**  
Components: _[API] Analytics_  


**[DHIS2-6208](https://jira.dhis2.org/browse/DHIS2-6208): Error for custom boundary before start and after end of reporting period**  
Components: _[API] Analytics_ 


**[DHIS2-4864](https://jira.dhis2.org/browse/DHIS2-4864): Analytics job is failing**  
Components: _[API] Analytics_ 


**[DHIS2-5334](https://jira.dhis2.org/browse/DHIS2-5334): Analytics scheduling with lastYears not set fails with NullPointerException**  
Components: _[API] Job scheduler_, _[App] Job scheduler_ 


**[DHIS2-6277](https://jira.dhis2.org/browse/DHIS2-6277): Missing escape of TEI search parameter**  
Components: _[API] Tracker_ 


**[DHIS2-6278](https://jira.dhis2.org/browse/DHIS2-6278): Can't select an Org Unit on Data Element with value type "Org Unit" when they are mandatory in a program stage (tracker program)**  
Components: _[API] Tracker_ 


**[DHIS2-5870](https://jira.dhis2.org/browse/DHIS2-5870): 409 when requesting a TEI when it has a relationship which the user cannot access**  
Components: _[API] Tracker_ 


**[DHIS2-6149](https://jira.dhis2.org/browse/DHIS2-6149): Tracked entity instance query API fails if event(psi) status is part of the query filter**  
Components: _[API] Tracker_ 


**[DHIS2-5249](https://jira.dhis2.org/browse/DHIS2-5249): Relationships - clicking on relationship link doesn't properly show TE #2**  
Components: _[API] Tracker_ 


**[DHIS2-6025](https://jira.dhis2.org/browse/DHIS2-6025): Error in the relationship widget in version 2.30**  
Components: _[API] Tracker_ 


**[DHIS2-5932](https://jira.dhis2.org/browse/DHIS2-5932): Extra slash in urls from Angular DHIS2 library**  
Components: _[App] d2-ui_ 


**[DHIS2-5918](https://jira.dhis2.org/browse/DHIS2-5918): Unable to import metadata**  
Components: _[App] Import-export_  


**[DHIS2-6050](https://jira.dhis2.org/browse/DHIS2-6050): Unable to save relationship type**  
Components: _[App] Maintenance_ 


**[DHIS2-5861](https://jira.dhis2.org/browse/DHIS2-5861): Legend color settings not working properly**  
Components: _[App] Maintenance_ 


**[DHIS2-5530](https://jira.dhis2.org/browse/DHIS2-5530): Strange behaviour in Option set Option color and Name fields**  
Components: _[App] Maintenance_ 


**[DHIS2-6003](https://jira.dhis2.org/browse/DHIS2-6003): Impossible to scroll through all OU groups / group sets in OU selector section of layers**  
Components: _[App] Maps_ 


**[DHIS2-5850](https://jira.dhis2.org/browse/DHIS2-5850): Event layers using a different coordinate field is not persisted**  
Components: _[App] Maps_ 


**[DHIS2-5963](https://jira.dhis2.org/browse/DHIS2-5963): "All" Button seems to be not working for non superusers**  
Components: _[App] Pivot table_  


**[DHIS2-3498](https://jira.dhis2.org/browse/DHIS2-3498): Tracker capture making redundant api calls**  
Components: _[App] Tracker capture_ 


**[DHIS2-6065](https://jira.dhis2.org/browse/DHIS2-6065): Program indicators not evaluating correctly with "Age" data element type**  
Components: _[App] Tracker capture_ 


**[DHIS2-6130](https://jira.dhis2.org/browse/DHIS2-6130): Event entry form still open after deleting parent enrollment**  
Components: _[App] Tracker capture_ 


**[DHIS2-5679](https://jira.dhis2.org/browse/DHIS2-5679): OU type tracked entity attributes cannot capture values in relationship widget**  
Components: _[App] Tracker capture_ 


**[DHIS2-5738](https://jira.dhis2.org/browse/DHIS2-5738): /schemas/relationshipType doesn't include rightConstraint and leftConstraint as required properties**  
Components: _Backend_ 



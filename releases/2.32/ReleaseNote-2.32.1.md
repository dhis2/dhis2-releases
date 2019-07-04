# Patch 2.32.1 Release Note 


## Features


**[DHIS2-5866](https://jira.dhis2.org/browse/DHIS2-5866): All users with write/edit permissions should be able to delete dashboard items**  
Components: _[API] Analytics_ 

> Users can now delete dashboards they have write permissions on, even if they do not own them.


**[DHIS2-6993](https://jira.dhis2.org/browse/DHIS2-6993): New temperature layer from Google Earth Engine**  
Components: _[App] Maps_ 

> The Maps temperature layer has been updated to cover recent periods.


## Bugs


**[DHIS2-7006](https://jira.dhis2.org/browse/DHIS2-7006): Program Indicator variable V{ValueCount} causes NullPointer**  
Components: _[API] Analytics_ 


**[DHIS2-6827](https://jira.dhis2.org/browse/DHIS2-6827): Backend does not store default JobParameters when no JobParameters are provided in POST request to /jobConfigurations**  
Components: _[API] Job scheduler_ 


**[DHIS2-6992](https://jira.dhis2.org/browse/DHIS2-6992): Exporting Data - ZIP and GZIP options use no compression - [Backend]**  
Components: _[API] Metadata import-export_, _[App] Import-export_ 


**[DHIS2-7127](https://jira.dhis2.org/browse/DHIS2-7127): Predictors abort when encountering null datavalues**  
Components: _[API] Other_ 


**[DHIS2-7146](https://jira.dhis2.org/browse/DHIS2-7146): Fix predictions when present data is found and past is missing**  
Components: _[API] Other_ 


**[DHIS2-7192](https://jira.dhis2.org/browse/DHIS2-7192): 409 conflict for /events when relationship user cant access exists**  
Components: _[API] Tracker_ 


**[DHIS2-7193](https://jira.dhis2.org/browse/DHIS2-7193): 409 conflict for /relationships when relationship user cant access exists**  
Components: _[API] Tracker_ 


**[DHIS2-6293](https://jira.dhis2.org/browse/DHIS2-6293): 409 conflict on multiple endpoints when relationships is part of response**  
Components: _[API] Tracker_ 


**[DHIS2-6818](https://jira.dhis2.org/browse/DHIS2-6818): api/relationships?event={uid} endpoint for entity does not return bidirectional relationships where entity is to**  
Components: _[API] Tracker_ 


**[DHIS2-6769](https://jira.dhis2.org/browse/DHIS2-6769): Search for unique ID fails when 2 attributes are required to search**  
Components: _[API] Tracker_ 


**[DHIS2-6924](https://jira.dhis2.org/browse/DHIS2-6924): 500 error when trying to delete RelationshipType**  
Components: _[API] Tracker_ 


**[DHIS2-6725](https://jira.dhis2.org/browse/DHIS2-6725): Users not able to access TEI enrolled at other OrgUnits**  
Components: _[API] Tracker_ 


**[DHIS2-6289](https://jira.dhis2.org/browse/DHIS2-6289): Event listing API fails if order by completedBy, storedBy or dueDate is specified**  
Components: _[API] Tracker_ 


**[DHIS2-6250](https://jira.dhis2.org/browse/DHIS2-6250): Remove "Apply" button in Manage sharing screen when writing new interpretation**  
Components: _[App] Analytics_, _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_ 


**[DHIS2-6863](https://jira.dhis2.org/browse/DHIS2-6863): Gracefully handle missing trackedEntityAttributes**  
Components: _[App] Capture_ 


**[DHIS2-6928](https://jira.dhis2.org/browse/DHIS2-6928): TET FeatureType field does not show in Profile when creating new TEI in Capture Relationship component**  
Components: _[App] Capture_ 


**[DHIS2-6925](https://jira.dhis2.org/browse/DHIS2-6925): Some enrollment options are not taken into account**  
Components: _[App] Capture_ 


**[DHIS2-6631](https://jira.dhis2.org/browse/DHIS2-6631): Filter chip positioning on scroll**  
Components: _[App] Dashboard_ 


**[DHIS2-7125](https://jira.dhis2.org/browse/DHIS2-7125): Wrong links to the documentation ("Open user guide")**  
Components: _[App] Data administration_, _[App] Maintenance_, _[App] Reports_, _Documentation_, _Frontend_ 


**[DHIS2-6551](https://jira.dhis2.org/browse/DHIS2-6551): Data admin app loads online external fonts**  
Components: _[App] Data administration_ 


**[DHIS2-6940](https://jira.dhis2.org/browse/DHIS2-6940): Org unit not in alphabetical order when short name is displayed**  
Components: _[App] Data entry_, _[App] Event capture_ 


**[DHIS2-6101](https://jira.dhis2.org/browse/DHIS2-6101): Event Capture crashes complete server when loading a lot of Category Options**  
Components: _[App] Capture_, _[App] Event capture_ 


**[DHIS2-6552](https://jira.dhis2.org/browse/DHIS2-6552): Can't update existing event via Import Export module**  
Components: _[App] Import-export_ 


**[DHIS2-4161](https://jira.dhis2.org/browse/DHIS2-4161): Attributes for tracked entity types appear on Attributes section of Design program on Maintenance**  
Components: _[App] Maintenance_ 


**[DHIS2-5277](https://jira.dhis2.org/browse/DHIS2-5277): On the create/edit Program Stage screen, the button is labelled 'Save' when in fact data is not yet saved - could this be corrected to show 'Add stage' or 'Update stage' as appropriate?**  
Components: _[App] Maintenance_ 


**[DHIS2-6328](https://jira.dhis2.org/browse/DHIS2-6328): GIS Labels sizes do not work in Maps app (2.29)**  
Components: _[App] Maps_ 


**[DHIS2-7041](https://jira.dhis2.org/browse/DHIS2-7041): Event styling by option set is not working**  
Components: _[App] Maps_ 


**[DHIS2-4726](https://jira.dhis2.org/browse/DHIS2-4726): Expand the width of the filter drop down menu of new Maps app**  
Components: _[App] Maps_ 


**[DHIS2-7198](https://jira.dhis2.org/browse/DHIS2-7198): Failure to assign user to the message**  
Components: _[App] Messaging_ 


**[DHIS2-4151](https://jira.dhis2.org/browse/DHIS2-4151): Cannot scroll options menu, shifts app window if too tall**  
Components: _[App] Pivot table_ 


**[DHIS2-6860](https://jira.dhis2.org/browse/DHIS2-6860): Switching to appearance section after changing a value renders app broken**  
Components: _[App] Settings_ 



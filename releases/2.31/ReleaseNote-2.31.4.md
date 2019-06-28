# Patch 2.31.4 Release Note 


## Features


**[DHIS2-5866](https://jira.dhis2.org/browse/DHIS2-5866): All users with write/edit permissions should be able to delete dashboard items**  
Components: _[API] Analytics_ 

> Users can now delete dashboards they have write permissions on, even if they do not own them.


**[DHIS2-5472](https://jira.dhis2.org/browse/DHIS2-5472): Order interpretations in desc order, comments in asc order**  
Components: _[App] Analytics_, _[App] Dashboard_, _[App] Maps_ 

> The ordering of interpretations has been made consistent across all analytics apps.


**[DHIS2-5582](https://jira.dhis2.org/browse/DHIS2-5582): Sort events in descending date order by default**  
Components: _[App] Event reports_ 

> Events are now listed in descending date order by default.


**[DHIS2-5292](https://jira.dhis2.org/browse/DHIS2-5292): Skip sharing option for metadata download with dependencies - [Backend]**  
Components: _[API] Metadata import-export_, _[App] Import-export_ 

> Sharing information can now be skipped when exporting metadata with dependencies. _Currently this is only available via the API, but will be in the GUI in the next patch release._


**[DHIS2-6993](https://jira.dhis2.org/browse/DHIS2-6993): New temperature layer from Google Earth Engine**  
Components: _[App] Maps_ 

> The Maps temperature layer has been updated to cover recent periods.


## Bugs


**[DHIS2-6491](https://jira.dhis2.org/browse/DHIS2-6491): Sluggish performance loading category options**  
Components: _[API] Events_ 


**[DHIS2-6827](https://jira.dhis2.org/browse/DHIS2-6827): Backend does not store default JobParameters when no JobParameters are provided in POST request to /jobConfigurations**  
Components: _[API] Job scheduler_ 


**[DHIS2-6999](https://jira.dhis2.org/browse/DHIS2-6999): Skip MessageConversations during metadata sync**  
Components: _[API] Job scheduler_, _[API] Metadata import-export_, _[API] Metadata model_ 


**[DHIS2-6806](https://jira.dhis2.org/browse/DHIS2-6806): RelationshipType imported without trackedEntityType**  
Components: _[API] Metadata import-export_ 


**[DHIS2-6992](https://jira.dhis2.org/browse/DHIS2-6992): Exporting Data - ZIP and GZIP options use no compression**  
Components: _[API] Metadata import-export_, _[App] Import-export_ 


**[DHIS2-6084](https://jira.dhis2.org/browse/DHIS2-6084): Cannot import JobConfiguration**  
Components: _[API] Metadata import-export_, _[App] Import-export_ 


**[DHIS2-5504](https://jira.dhis2.org/browse/DHIS2-5504): Sharing settings appear reset to public read and edit after saving**  
Components: _[API] Metadata import-export_ 


**[DHIS2-7127](https://jira.dhis2.org/browse/DHIS2-7127): Predictors abort when encountering null datavalues**  
Components: _[API] Other_ 


**[DHIS2-7146](https://jira.dhis2.org/browse/DHIS2-7146): Fix predictions when present data is found and past is missing**  
Components: _[API] Other_ 


**[DHIS2-4896](https://jira.dhis2.org/browse/DHIS2-4896): pager.nextPage property in api response does not include url parameters**  
Components: _[API] Other_ 


**[DHIS2-4645](https://jira.dhis2.org/browse/DHIS2-4645): /api/users cannot be sorted by email**  
Components: _[API] Other_ 


**[DHIS2-6293](https://jira.dhis2.org/browse/DHIS2-6293): 409 conflict on multiple endpoints when relationships is part of response**  
Components: _[API] Tracker_ 


**[DHIS2-6769](https://jira.dhis2.org/browse/DHIS2-6769): Search for unique ID fails when 2 attributes are required to search**  
Components: _[API] Tracker_ 


**[DHIS2-6725](https://jira.dhis2.org/browse/DHIS2-6725): Users not able to access TEI enrolled at other OrgUnits**  
Components: _[API] Tracker_ 


**[DHIS2-6289](https://jira.dhis2.org/browse/DHIS2-6289): Event listing API fails if order by completedBy, storedBy or dueDate is specified**  
Components: _[API] Tracker_ 


**[DHIS2-6250](https://jira.dhis2.org/browse/DHIS2-6250): Remove "Apply" button in Manage sharing screen when writing new interpretation**  
Components: _[App] Analytics_, _[App] Dashboard_, _[App] Data visualizer_, _[App] Maps_ 


**[DHIS2-6211](https://jira.dhis2.org/browse/DHIS2-6211): Updates to data entry fields does not trigger execute rules**  
Components: _[App] Capture_ 


**[DHIS2-6637](https://jira.dhis2.org/browse/DHIS2-6637): Select dropdown menu clipped by section bounds in custom forms**  
Components: _[App] Capture_ 


**[DHIS2-6599](https://jira.dhis2.org/browse/DHIS2-6599): Text boxes do not use the full height of the item in dashboard edit mode**  
Components: _[App] Dashboard_ 


**[DHIS2-7125](https://jira.dhis2.org/browse/DHIS2-7125): Wrong links to the documentation ("Open user guide")**  
Components: _[App] Data administration_, _[App] Maintenance_, _[App] Reports_, _Documentation_, _Frontend_ 


**[DHIS2-6940](https://jira.dhis2.org/browse/DHIS2-6940): Org unit not in alphabetical order when short name is displayed**  
Components: _[App] Data entry_, _[App] Event capture_ 


**[DHIS2-6530](https://jira.dhis2.org/browse/DHIS2-6530): Users/User Groups having permissions to the report is not getting displayed in Sharing Setting**  
Components: _[App] Data visualizer_ 


**[DHIS2-6101](https://jira.dhis2.org/browse/DHIS2-6101):  Event Capture crashes complete server when loading a lot of Category Options**  
Components: _[App] Capture_, _[App] Event capture_ 


**[DHIS2-6552](https://jira.dhis2.org/browse/DHIS2-6552): Can't update existing event via Import Export module**  
Components: _[App] Import-export_ 


**[DHIS2-5964](https://jira.dhis2.org/browse/DHIS2-5964): "Fixed" column width in Program Stage Data Element list make long DE names indistinguishable**  
Components: _[App] Maintenance_ 


**[DHIS2-4161](https://jira.dhis2.org/browse/DHIS2-4161): Attributes for tracked entity types appear on Attributes section of Design program on Maintenance**  
Components: _[App] Maintenance_ 


**[DHIS2-5277](https://jira.dhis2.org/browse/DHIS2-5277): On the create/edit Program Stage screen, the button is labelled 'Save' when in fact data is not yet saved - could this be corrected to show 'Add stage' or 'Update stage' as appropriate?**  
Components: _[App] Maintenance_ 


**[DHIS2-6767](https://jira.dhis2.org/browse/DHIS2-6767): Sharing setting on program level gets cleared when saving program**  
Components: _[App] Maintenance_ 


**[DHIS2-1827](https://jira.dhis2.org/browse/DHIS2-1827): Error message not showing up when "Category combination" mandatory data element value is missing in new program UI**  
Components: _[App] Maintenance_ 


**[DHIS2-6353](https://jira.dhis2.org/browse/DHIS2-6353): Cancel for create legend items does not cancel**  
Components: _[App] Maintenance_ 


**[DHIS2-6559](https://jira.dhis2.org/browse/DHIS2-6559): Push analytics preview not working**  
Components: _[App] Maintenance_ 


**[DHIS2-4726](https://jira.dhis2.org/browse/DHIS2-4726): Expand the width of the filter drop down menu of new Maps app**  
Components: _[App] Maps_ 


**[DHIS2-6332](https://jira.dhis2.org/browse/DHIS2-6332): User is not taken to 'compose message' view when he clicks on ´Send message´ button on user profile**  
Components: _[App] Messaging_, _[App] User_ 


**[DHIS2-4151](https://jira.dhis2.org/browse/DHIS2-4151): Cannot scroll options menu, shifts app window if too tall**  
Components: _[App] Pivot table_ 


**[DHIS2-6860](https://jira.dhis2.org/browse/DHIS2-6860): Switching to appearance section after changing a value renders app broken**  
Components: _[App] Settings_ 


**[DHIS2-6170](https://jira.dhis2.org/browse/DHIS2-6170): Program Stages (with validCompleteOnly=true) can be completed even if validation fails**  
Components: _[App] Tracker capture_ 


**[DHIS2-6772](https://jira.dhis2.org/browse/DHIS2-6772): User content too close to header bar in user app**  
Components: _[App] User_ 


**[DHIS2-6498](https://jira.dhis2.org/browse/DHIS2-6498): User list should be ordered by first name, last name**  
Components: _[App] User_ 



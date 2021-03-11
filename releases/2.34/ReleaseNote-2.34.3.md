# Patch 2.34.3 Release Note

## Features

**[DHIS2-10041](https://jira.dhis2.org/browse/DHIS2-10041): Support captureScopeFilter for programs endpoint**  
Components: _[API] Metadata model_

**[DHIS2-10040](https://jira.dhis2.org/browse/DHIS2-10040): Support SMS text UTF-8 encoding**  
Components: _[API] SMS_

**[DHIS2-9835](https://jira.dhis2.org/browse/DHIS2-9835): Username, userid, first name and last name needed for tracker notes**  
Components: _[API] Tracker_

**[DHIS2-10111](https://jira.dhis2.org/browse/DHIS2-10111): Only download relevant org units for programs**  
Components: _[App] Capture_

**[DHIS2-9056](https://jira.dhis2.org/browse/DHIS2-9056): Front-end support for translation of RelationshipType From/To name**  
Components: _[App] Maintenance_

## Bugs

**[DHIS2-10166](https://jira.dhis2.org/browse/DHIS2-10166): Push Analysis - broken html around report table visualizations**  
Components: _[API] Analytics_

**[DHIS2-10227](https://jira.dhis2.org/browse/DHIS2-10227): ANTLR division parsing bug: "Expression is empty"**  
Components: _[API] Analytics_  

**[DHIS2-10082](https://jira.dhis2.org/browse/DHIS2-10082): Report Rates - Daily calculation failing**  
Components: _[API] Analytics_

**[DHIS2-9939](https://jira.dhis2.org/browse/DHIS2-9939): File descriptor leak for app resources leads to unusable DHIS 2 instance**  
Components: _[API] App management_

**[DHIS2-6642](https://jira.dhis2.org/browse/DHIS2-6642): Impossible to permanently delete soft deleted events**  
Components: _[API] Data administration_

**[DHIS2-9949](https://jira.dhis2.org/browse/DHIS2-9949): Error importing dataValueSet with new periods**  
Components: _[API] Data value set_

**[DHIS2-7937](https://jira.dhis2.org/browse/DHIS2-7937): [ Internal Server Error ] Cannot filter events on certain kind of values [ phoneNumber ]**  
Components: _[API] Events_

**[DHIS2-9571](https://jira.dhis2.org/browse/DHIS2-9571): Schedule and Send message PRAs do not work**  
Components: _[API] Messaging_, _[App] Messaging_

**[DHIS2-10044](https://jira.dhis2.org/browse/DHIS2-10044): orgunit api returns duplicates with pagination**  
Components: _[API] Metadata model_

**[DHIS2-10219](https://jira.dhis2.org/browse/DHIS2-10219): getMetaData action with ANTLR parsing is too slow**  
Components: _[API] Other_  
**Testing**

**[DHIS2-9467](https://jira.dhis2.org/browse/DHIS2-9467): Audit for OrganisationUnit throw hibernate lazy exception**  
Components: _[API] Other_

**[DHIS2-9601](https://jira.dhis2.org/browse/DHIS2-9601): Header vs rows mismatch on event data items as filter**  
Components: _[API] Other_

**[DHIS2-9941](https://jira.dhis2.org/browse/DHIS2-9941): SMS inbound issue on originator and user phone**  
Components: _[API] SMS_

**[DHIS2-10318](https://jira.dhis2.org/browse/DHIS2-10318): Endpoint /trackedEntityInstances requires "ou" even if TEI uid is provided**  
Components: _[API] Tracker_

**[DHIS2-8911](https://jira.dhis2.org/browse/DHIS2-8911): Tracker API allow setting an arbitrary string as "storedBy" for Tracked Entity Attribute Values and Data Element Values**  
Components: _[API] Tracker_

**[DHIS2-9985](https://jira.dhis2.org/browse/DHIS2-9985): TrackedEntityInstances API should respect both ownership and registration OU for Access control checks.**  
Components: _[API] Tracker_

**[DHIS2-10139](https://jira.dhis2.org/browse/DHIS2-10139): Reduce the number of queries required to check if an Event's Org Unit belongs to a Program's Org Units List**  
Components: _[API] Tracker_  
**Testing**

**[DHIS2-8867](https://jira.dhis2.org/browse/DHIS2-8867): Posting events with "No access" data elements causes data removal in the server**  
Components: _[API] Tracker_

**[DHIS2-7573](https://jira.dhis2.org/browse/DHIS2-7573): Problem creating relationships with empty TEA of type Image**  
Components: _[API] Tracker_

**[DHIS2-9454](https://jira.dhis2.org/browse/DHIS2-9454): User API NextPage Only Shows One User per Page**  
Components: _[API] User_, _[App] User_

**[DHIS2-10135](https://jira.dhis2.org/browse/DHIS2-10135): User App Pagination issue (existing in 2.35.1)**  
Components: _[API] User_

**[DHIS2-5490](https://jira.dhis2.org/browse/DHIS2-5490): Program indicators concatenating numerical TEAs when null**  
Components: _[App] Capture_

**[DHIS2-10070](https://jira.dhis2.org/browse/DHIS2-10070): Lag in Capture app for Large Event Program**  
Components: _[App] Capture_, _[App] Event capture_

**[DHIS2-9489](https://jira.dhis2.org/browse/DHIS2-9489): Program rule action "Send message" is not working**  
Components: _[App] Capture_, _[App] Tracker capture_

**[DHIS2-9725](https://jira.dhis2.org/browse/DHIS2-9725): Adding an organisation unit filter to a dashboard with a widget crashes the dashboard**  
Components: _[App] Dashboard_

**[DHIS2-2510](https://jira.dhis2.org/browse/DHIS2-2510): Allow for implied 0s for non decimals between 0 and 1**  
Components: _[App] Data entry_

**[DHIS2-9032](https://jira.dhis2.org/browse/DHIS2-9032): Weekly in data Entry**  
Components: _[App] Data entry_

**[DHIS2-10216](https://jira.dhis2.org/browse/DHIS2-10216): Localisations not showing in Data Quality app**  
Components: _[App] Data quality_  
**Testing**

**[DHIS2-9096](https://jira.dhis2.org/browse/DHIS2-9096): Org unit fields that are not Event org units give blank output in Event Analysis apps**  
Components: _[App] Event reports_

**[DHIS2-7997](https://jira.dhis2.org/browse/DHIS2-7997): Push analytics - dashboards with map items export useless "link"**  
Components: _[App] GIS_, _[App] Maintenance_

**[DHIS2-10200](https://jira.dhis2.org/browse/DHIS2-10200): Null Pointer Exception in Metadata Import**  
Components: _[App] Import-export_

**[DHIS2-9714](https://jira.dhis2.org/browse/DHIS2-9714): Hibernate exception when importing GML data**  
Components: _[App] Import-export_

**[DHIS2-9936](https://jira.dhis2.org/browse/DHIS2-9936): Error while importing Events - no transaction is in progress**  
Components: _[App] Import-export_  
**Testing**

**[DHIS2-6191](https://jira.dhis2.org/browse/DHIS2-6191): Error creating a program if the user only has authority to create private programs**  
Components: _[App] Maintenance_  
**Retesting**

**[DHIS2-9913](https://jira.dhis2.org/browse/DHIS2-9913): Labels for "Numerator Description" and "Denominator Description"**  
Components: _[App] Maintenance_, _[App] Translations_

**[DHIS2-5801](https://jira.dhis2.org/browse/DHIS2-5801): Deleting a custom event form does not work**  
Components: _[App] Maintenance_

**[DHIS2-8658](https://jira.dhis2.org/browse/DHIS2-8658): Maps app: Non-translatable fields**  
Components: _[App] Maps_

**[DHIS2-10071](https://jira.dhis2.org/browse/DHIS2-10071): Not possible to close right-click menu for dashboard maps**  
Components: _[App] Maps_

**[DHIS2-9908](https://jira.dhis2.org/browse/DHIS2-9908): Missing Label when selecting Quarterly as period type in Report apps**  
Components: _[App] Reports_

**[DHIS2-9935](https://jira.dhis2.org/browse/DHIS2-9935): Program rule action "Send message" is not working when the first stage appears on the registration page**  
Components: _[App] Tracker capture_

**[DHIS2-8811](https://jira.dhis2.org/browse/DHIS2-8811): Expiry period and days does't work properly in tracker capture**  
Components: _[App] Tracker capture_

**[DHIS2-8950](https://jira.dhis2.org/browse/DHIS2-8950): Bidirectional Relationships give Unknown Error when created from To Constraint**  
Components: _[App] Tracker capture_

## Performance improvements

**[DHIS2-10670 (Epic)](https://jira.dhis2.org/browse/DHIS2-10670): Improve performance when querying and listing tracked entity instances:**
- **[DHIS2-10601](https://jira.dhis2.org/browse/DHIS2-10601): TEI search by unique attribute takes long when user search scope is lower level org unit**
- **[DHIS2-10603](https://jira.dhis2.org/browse/DHIS2-10603): Search takes long when max tei limit to return in search is set**
- **[DHIS2-10600](https://jira.dhis2.org/browse/DHIS2-10600): Front page list takes a long time to load when there are many teis in org unit**
Components: _[Api] Tracker_

**New indexes for tracker:**
- trackedentityprogramowner(trackedentityinstanceid, programid, organisationunitid)
- programinstance(programid)
- trackedentityattributevalue(trackedentityinstanceid, trackedentityattributeid, lower(value))
- programstageinstance(status,executiondate)

**Note:** *Upgrading to this version might take a significant time while the new indexes are created.*

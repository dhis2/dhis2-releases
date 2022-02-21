## Android

### 2.38 / 2.6

-   [Support multiple users offline](https://jira.dhis2.org/browse/ANDROAPP-653)

-   Data sync
    -  [x] [Allow the user to "refresh" to get last updated data from server](https://jira.dhis2.org/browse/ANDROAPP-4331)

-   Data Entry Features and User Experience
    -  [Improve Re-Open flow in events](https://jira.dhis2.org/browse/ANDROAPP-4610)
    -  [x] [Improve "Yes Only" data element design](https://jira.dhis2.org/browse/ANDROAPP-4493)
    -  [x] [Scan and display GS1 Data matrix QR codes (LMIS)](https://jira.dhis2.org/browse/ANDROAPP-4329)    -  
    -  [x] [Render Icons in enrollment forms](https://jira.dhis2.org/browse/ANDROAPP-4258)
    -  [x] [Improve prevention of duplicating unique identifiers](https://jira.dhis2.org/browse/ANDROAPP-4250)
    -  [x] [Improve design fo datasets columns span](https://jira.dhis2.org/browse/ANDROAPP-3016)
    -  [x] [Show hint of OU selected when opening the OU hierarchy](https://jira.dhis2.org/browse/ANDROAPP-2520)
    -  [Align events navigation bottom bar](https://jira.dhis2.org/browse/ANDROAPP-3651)
    -  [Hide save button if form is not editable](https://jira.dhis2.org/browse/ANDROAPP-4613)
    -  [Allow discarding changes in the form](https://jira.dhis2.org/browse/ANDROAPP-4545)
    -  [New design for warnings/errors and completion dialogs](https://jira.dhis2.org/browse/ANDROAPP-4591)

-   Mobile Implementation Support
    -   [x] [Add options in settings screen for configuration troubleshooting](https://jira.dhis2.org/browse/ANDROAPP-1655)

-   Offline Analytics
    -   [Support legends for tables in analytics](https://jira.dhis2.org/browse/ANDROAPP-4500)

-   Tracker Features
    -   [Break the glass](https://jira.dhis2.org/browse/ANDROAPP-657)
    -   [Make mandatory TEI search configurable](https://jira.dhis2.org/browse/ANDROAPP-4545)
    -   Program Rule Engine (**dependency** Tracker/Backend)  
    
-   Stability and Performance
    -   Automatic testing of Web API endpoints (**dependency **Tracker/Backend & QA)
    -   Review synchronization process (**dependency **Tracker/Backend/API)
    -   [Separate offline/online search flows](https://jira.dhis2.org/browse/ANDROAPP-4023)


### 2.39 / 2.7
**Development**
-   Data Entry
    -   [Support file value type](https://jira.dhis2.org/browse/ANDROAPP-1992)
-   Stability and Performance
    -   [Option to sync ASA](https://jira.dhis2.org/browse/ANDROAPP-2959)
    -   [DB trimming](https://jira.dhis2.org/browse/ANDROAPP-2912)
    -   [Automatic deletion of synced data](https://jira.dhis2.org/browse/ANDROAPP-2957)
    -   [Light Sync - only records updated offline](https://jira.dhis2.org/browse/ANDROAPP-1702)

-   Self reporting (TEI App)
    -   Platform for authenticating from TEI credentials
    -   TEI App
-   Mobile Implementation Support
    -   [Support app distribution version control](https://jira.dhis2.org/browse/ANDROAPP-2912)
    -   [Request sync from outside the App](https://jira.dhis2.org/browse/ANDROAPP-2899)
    -   Promote MDM support through documentation available and explore agreements
    -   [Improve error log and expose in the Android Settings webapp](https://jira.dhis2.org/browse/ANDROAPP-1655) +[Issue 2](https://jira.dhis2.org/browse/ANDROAPP-1140) (**dependency** platform)
    -   [Import/export db](https://jira.dhis2.org/browse/ANDROAPP-2474)

-   Offline Analytics
    -   [Evolve based on use and feedback from the community](https://jira.dhis2.org/browse/ANDROAPP-2557)
-   Notifications & Messaging
    -   [Push notifications](https://jira.dhis2.org/browse/ANDROAPP-2962)
    -   [DHIS2 Messaging](https://jira.dhis2.org/browse/ANDROAPP-694)
-   LMIS
    -   Stock management - Fast Scanning of items (LMIS)
    -   Item Catalog (LMIS)
    -   Bluetooth temperature data monitoring (LMIS)
-   EMIS
    -   Bulk data entry (EMIS)

-   Biometric identification (for search, for registering attendance...) ?
    -   Promote current approach for external solutions to connect to DHIS2

**Design**

-   Self reporting (TEI App) - _Prototype_
    -   Platform for authenticating from TEI credentials (**dependency** platform)
    -   TEI App
-   LMIS - Requirements / UX/UI design
    -   Stock management - Fast Scanning of items
    -   Item Catalog
    -   Bluetooth temperature data monitoring
-   EMIS - Requirements / UX/UI design
    -   Bulk data entry (EMIS)

**Innovation (based on available resources and task estimation)**

-   Review UX/UI
    -   [Implement TEI centered UI and flow](https://jira.dhis2.org/browse/ANDROAPP-4019)
-   [Task screen](https://jira.dhis2.org/browse/ANDROAPP-3427)
-   [Support multimedia](https://jira.dhis2.org/browse/ANDROAPP-3697)
-   NFC
    -   Read/write patient card (with config parameter for not storing patient data)
    -   Bulk data transfer device-device
-   Trigger data entry from Maps


### 2.40 / 2.8

-   Offline Analytics
    -   [Evolve based on use and feedback from the community](https://jira.dhis2.org/browse/ANDROAPP-2557)
-   LMIS
    -   Stock management - Fast Scanning of items (LMIS)
    -   Item Catalog (LMIS)
    -   Bluetooth temperature data monitoring (LMIS)
-   EMIS
    -   Bulk data entry (EMIS)

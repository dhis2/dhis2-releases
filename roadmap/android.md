## Android

### 2.38 / 2.6

-   **Implementation Support Features**
    -   [x] [Support multiple users offline](https://jira.dhis2.org/browse/ANDROAPP-653)
    -   [x] [Add options in settings screen for program rules configuration troubleshooting](https://jira.dhis2.org/browse/ANDROAPP-1655)
    
-   **Tracker Features**
    -   [x] [Break the glass](https://jira.dhis2.org/browse/ANDROAPP-657)
    -   [x] [Make mandatory TEI search configurable](https://jira.dhis2.org/browse/ANDROAPP-4545)
    -   [x] [Separate offline/online search flows](https://jira.dhis2.org/browse/ANDROAPP-4023)

-   **Offline Analytics**
    -   [x] [Support legends for tables in analytics](https://jira.dhis2.org/browse/ANDROAPP-4500)

-   **User Experience: Data Entry and Sync Features**
    -  [x] [Scan and display GS1 Data matrix QR codes (LMIS)](https://jira.dhis2.org/browse/ANDROAPP-4329)    -  
    -  [x] [Allow the user to "refresh data" to get last updated data from server](https://jira.dhis2.org/browse/ANDROAPP-4331)
    -  [x] [Improve "Yes Only" data element design](https://jira.dhis2.org/browse/ANDROAPP-4493)
    -  [x] [Render Icons in enrollment forms](https://jira.dhis2.org/browse/ANDROAPP-4258)
    -  [x] [Improve prevention of duplicating unique identifiers](https://jira.dhis2.org/browse/ANDROAPP-4250)
    -  [x] [Improve design fo datasets columns span](https://jira.dhis2.org/browse/ANDROAPP-3016)
    -  [x] [Show hint of OU selected when opening the OU hierarchy](https://jira.dhis2.org/browse/ANDROAPP-2520)
    -  [x] [Align events navigation bottom bar](https://jira.dhis2.org/browse/ANDROAPP-3651)
    -  [x] [Hide save button if form is not editable](https://jira.dhis2.org/browse/ANDROAPP-4613)
    -  [x] [Improve Save and Complete flow in events](https://jira.dhis2.org/browse/ANDROAPP-4610) - [Issue 2](https://jira.dhis2.org/browse/ANDROAPP-4545)
    -  [x] [New design for warnings/errors and completion dialogs](https://jira.dhis2.org/browse/ANDROAPP-4591)

       
### 2.39 / 2.7

-   **User Experience**
    -   [x] [Do not load the whole home list when returning to it](https://dhis2.atlassian.net/browse/ANDROAPP-4802)
    -   [x] [Increase tappable areas in icons and buttons]()
    -   [x] [Remove hints from fields]()
    -   [x] [Do not offer program stages selection when there is only one option]()
    -   [x] [Remove Share button from TEI Dashboard]()
    -   [x] [Accordion menus confused about half of the healthcare workers]()
    -   [x] [Add the "+" button for create events on TEI dashboard always visible]()

-   **User Experience - Data sets**
    -   [x] [Handle Vertical/Horizontal scroll in tables when a cell is selected]()
    -   [x] [Update legend style on tables]()
    -   [x] [Create new component for edit text input types]()
    -   [x] [Non visual improvements]()

-   **Mobile Implementation Support**
    -   [x] [Upload SMS APK]()
   
-   **Local Analytics**
    -   [x] [Implement missing aggregation functions]()

-   **Tracker Features**
    -   [x] [App does not update org unit ownership when referring permanently]()
   
-   **Sync Process**
    -   [x] [Open home after syncing metadata]()

-   **Quality**
    -   [x] [Refactor Data sets]()  
    -   [x] [Non visual tasks]()
    -   [x] []()


### 2.40 / 2.8

**Development**

-   Offline Analytics
    -   [Evolve based on use and feedback from the community](https://jira.dhis2.org/browse/ANDROAPP-2557)

-   Notifications & Messaging
    -   [Push notifications](https://jira.dhis2.org/browse/ANDROAPP-2962)
    -   [DHIS2 Messaging](https://jira.dhis2.org/browse/ANDROAPP-694)-   Data Entry
    -   [Support file value type](https://jira.dhis2.org/browse/ANDROAPP-1992)

-   Stability and Performance
    -   [Option to sync ASAP](https://jira.dhis2.org/browse/ANDROAPP-2959)
    -   [DB trimming](https://jira.dhis2.org/browse/ANDROAPP-2912)
    -   [Automatic deletion of synced data](https://jira.dhis2.org/browse/ANDROAPP-2957)
    -   [Light Sync - only records updated offline](https://jira.dhis2.org/browse/ANDROAPP-1702)

-   Mobile Implementation Support
    -   [Support app distribution version control](https://jira.dhis2.org/browse/ANDROAPP-2912)
    -   [Request sync from outside the App](https://jira.dhis2.org/browse/ANDROAPP-2899)
    -   Promote MDM support through documentation available and explore agreements
    -   [Improve error log and expose in the Android Settings webapp](https://jira.dhis2.org/browse/ANDROAPP-1655) +[Issue 2](https://jira.dhis2.org/browse/ANDROAPP-1140) (**dependency** platform)
    -   [Import/export db](https://jira.dhis2.org/browse/ANDROAPP-2474)

-   LMIS
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

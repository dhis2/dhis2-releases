## Android

### 2.38 / 2.5

**Development**

- Alignment with web
  - [Break the glass](https://jira.dhis2.org/browse/ANDROAPP-657)
  - Program Rule Engine (**dependency** Tracker/Backend)
  - [Support file value type](https://jira.dhis2.org/browse/ANDROAPP-1992)
- Stability and Performance
  - Automatic testing of Web API endpoints (**dependency **Tracker/Backend & QA)
  - Review synchronization process (**dependency **Tracker/Backend/API)
  - [Separate offline/online search flows](https://jira.dhis2.org/browse/ANDROAPP-4023)
  - [Automatic deletion of synced data](https://jira.dhis2.org/browse/ANDROAPP-2957)
  - [Light Sync - only records updated offline](https://jira.dhis2.org/browse/ANDROAPP-1702)
- Mobile Implementation Support
  - Promote MDM support through documentation available and explore agreements
  - [Improve error log and expose in the Android Settings webapp](https://jira.dhis2.org/browse/ANDROAPP-1655) +[Issue 2](https://jira.dhis2.org/browse/ANDROAPP-1140) (**dependency** platform)
  - [Import/export db](https://jira.dhis2.org/browse/ANDROAPP-2474)
  - [Dev options](https://jira.dhis2.org/browse/ANDROAPP-1655)
- Offline Analytics
  - [Evolve based on use and feedback from the community](https://jira.dhis2.org/browse/ANDROAPP-2557)
- [Support Multiple users offline](https://jira.dhis2.org/browse/ANDROAPP-653)
- Data Matrix Parsing (LMIS)
  - [Read full string](https://jira.dhis2.org/browse/ANDROAPP-4329)
- Biometric identification (for search, for registering attendance...) ?
  - Promote current approach for external solutions to connect to DHIS2
- Notifications & Messaging
  - [Push notifications](https://jira.dhis2.org/browse/ANDROAPP-2962)

**Design**

- Self reporting (TEI App) - _Prototype_
   - Platform for authenticating from TEI credentials (**dependency** platform)
   - TEI App
- LMIS - Requirements / UX/UI design
   - Stock management - Fast Scanning of items
   - Item Catalog
   - Bluetooth temperature data monitoring
- EMIS - Requirements / UX/UI design
   - Bulk data entry (EMIS)

**Innovation (based on available resources and task estimation)**

- Review UX/UI
  - [Implement TEI centered UI and flow](https://jira.dhis2.org/browse/ANDROAPP-4019)
- [Task screen](https://jira.dhis2.org/browse/ANDROAPP-3427)
- [Support multimedia](https://jira.dhis2.org/browse/ANDROAPP-3697)
- NFC
  - Read/write patient card (with config parameter for not storing patient data)
  - Bulk data transfer device-device
- Trigger data entry from Maps

### 2.39 / 2.6

- Stability and Performance
  - [Option to sync ASA](https://jira.dhis2.org/browse/ANDROAPP-2959)
  - [DB trimming](https://jira.dhis2.org/browse/ANDROAPP-2912)
- Self reporting (TEI App)
  - Platform for authenticating from TEI credentials
  - TEI App
- Mobile Implementation Support
  - [Support app distribution version control](https://jira.dhis2.org/browse/ANDROAPP-2912)
  - [Request sync from outside the App](https://jira.dhis2.org/browse/ANDROAPP-2899)
- Offline Analytics
  - [Evolve based on use and feedback from the community](https://jira.dhis2.org/browse/ANDROAPP-2557)
- Notifications & Messaging
  - [DHIS2 Messaging](https://jira.dhis2.org/browse/ANDROAPP-694)
- LMIS
  - Stock management - Fast Scanning of items (LMIS)
  - Item Catalog (LMIS)
  - Bluetooth temperature data monitoring (LMIS)
- EMIS
  - Bulk data entry (EMIS)

### 2.40 / 2.7

- Offline Analytics
  - [Evolve based on use and feedback from the community](https://jira.dhis2.org/browse/ANDROAPP-2557)
- LMIS
  - Stock management - Fast Scanning of items (LMIS)
  - Item Catalog (LMIS)
  - Bluetooth temperature data monitoring (LMIS)
- EMIS
  - Bulk data entry (EMIS)

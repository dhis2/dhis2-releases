## Platform

### 2.38

- Master facility list
    -  [x] User data output max organisation unit level

- Platform
    -  [x] DHIS 2 version notification system
    -  [x] Bulk metadata sharing backend API
    -  [x] Request ID in log statements
    -  [x] Geometry value type for metadata attributes
    -  [x] Log levels configurable in dhis.conf
    -  [x] Input identifier schemes for data values API

- Data quality
    -  [x] Individual data integrity checks
    -  [x] YAML-based data integrity checks

- Data store API improvements
    -  [x] Object/value filtering
    -  [x] Field filtering
    -  [x] Sort order
    -  [x] Paging


### 2.39

- Platform
    - [x] New data entry web app
    - [x] Improved continuous app releases/delivery and infrastructure
    - [x] Improved and more performant user group management
    - [x] GeoJSON organization unit geometry import support

- Backend improvements
    - [x] Cache invalidation with Redis (DHIS2 cluster configurations)
    - [x] API stability improvements (39 bugs fixed)
    - [x] Many small API functional enhancements
    - [x] New specialized APIs for data entry use-cases

- Master facility list
    - [x] Multi-select option sets in data model (data entry/analytics TBD)

- Aggregate Data Exchange
    - [x] Aggregate data exchange backend functionality

### 2.40

-   Platform
    -   [ ] 🛠️ New DHIS 2 web app portal, replace old portal with Javascript-based portal
    -   [ ] 🛠️ New login app
    -   [x] Multi-select option sets in data entry and analytics
    -   [ ] 🛠️ Improved multi-factor authentication support
    -   [ ] Deep linking for metadata and actions in the app menu
    -   [x] Improved multi-calendar support

-   Extensibility & Integration
    -   [x] Event subscription/notification system for metadata
    -   [x] External service routing / API gateway
    -   [x] OpenAPI specification

-   Maintenance app
    -   [x] Start work on new Maintenance app, gradually rebuilt and released

-   Data use/quality
    -   [ ] 🛠️ WebHook support for triggering external push analytics
    -   [ ] 🛠️ User impersonation (to support external push analytics)

-   Metadata management
    -   [ ] Metadata import audit log
    -   [ ] Metadata merge functionality
    -   [ ] Improved metadata dependency export

### 2.41 or later
-   Maintenance app
    -  [ ] New version of maintenance initial release with several modules
    
-   New login app with customisation options

-   Metadata management
    -   [ ] Metadata import audit log
    -   [ ] Metadata merge functionality

- Platform
    -   [ ] Remove Struts completely 
    -   [ ] Aggregate Data exchange configuration UI
    -   [ ] Job schedular configuration UI
    -   [ ] Integrity Check Configuration UI
    -   [ ] Accessibility improvements of UI library
    -   [ ] Multi-calendar support for import/export app


### Always Ongoing

- Performance improvements
- Bug fixes and stability
- Test coverage and test automation
- Extensibility
- Developer advocacy, resources and training material

### Parking Lot

-   Multi-calendar & time zone support
-   - Master facility list
    -   [ ] Reporting start date for organisation unit
    -   [ ] Org unit profile configuration UI
    -   [ ] Org unit split and merge UI
    -   [ ] Propose and approve org unit workflow UI
    -   [ ] Org unit analytics maintenance app updates
-   Multiple org unit hierarchies (with support from other teams)

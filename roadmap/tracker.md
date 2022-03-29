## Tracker

### 2.38

-   Program Rules:

    -   [x] Maintenance improvements for program rules
    -   [ ] Triggering of data to be saved from one stage to another
    -   [x] Support Android team and backend for matching functionality
    -   [x] Add support for GS1 Data Matrix
        -   GS1 Data Matrix is used for pharmaceutical and health commodity bar coding, and will support supply chain use cases

-   Working lists:

    -   [X] UI for configuring and saving working lists
    -   [ ] Design: Data elements in working lists
    -   [ ] Design: Editable data elements from single stages
        -   These two design issues will be used to create line-listing data entry for groups of TEIs

-   Deduplication:

    -   [ ] UI support for detecting and merging duplicates - simple/automatic cases
        -   Making use of the deduplication capabilities added to the back end in 2.37

-   Extensibility

-   Plugin framework

    -   [ ] Enabling the easier introduction of external applications and widgets

-   Capture app with full tracker functionality

    -   [x] Adding in the rest of the tracker functionality that was added in 2.37, and releasing the Capture app in beta form

-   Stability and performance

    -   [x] Continued additions to the core based on learning from large scale Tracker implementations
    -   [ ] Support Android with WEB API automatic testing
    -   [x] Support Android with review of synchronization process

-   Analytics:

    -   [x] Ownership org unit components and backend

-   LMIS

    -   Health commodity catalog
        -   Functionality to support the creation of health commodity catalogs for supply chain products
    -   [x] Support for barcode and scanning
        -   Making use of the GS1 data matrix, and full functionality through the Android application

-   EMIS

    -   [x] Data Model
        -   Confirming the recommended data model for education use cases which will enable such functionality as bulk enrollment; bulk data entry for grades and attendance; modeling of school / classes / sections, etc.

### 2.39

-   Referrals:

    -   Allow one time referrals between org units.

-   Program rules:

    -   Program rules across programs
        -   Enabling the creation of program rules that can take into consideration data from more than one program
    -   Managements
        -   Functionality that triggers decision support / recommended actions based on data from an event/multiple events

-   Working lists

    -   Editable data elements from multiple stages
    -   Editable data elements from multiple programs
        -   Taking the design created during 2.38 to create functionality for data entry in line-listing of TEIs

-   Biometrics

    -   Support for the generic biometric integration
        -   Native support for the handling of biometric data and data exchange

-   Privacy

    -   Solution for non-analysable attributes
        -   Functionality to make it easier to ensure that attributes designated as private will not be exposed to any analytics or display modes
    -   Data sunsets - clean out expired data
        -   Functionality to ensure that designated data will automatically be made unavailable after a certain period of time
    -   Ability to request removal of personal data
        -   Ensure the easier removal of personal data based on an individual's request

-   EMIS

    -   Use of improvements to working lists and analytics in recommended configuration
        -   Updating the recommended configuration for education to make use of new working lists / line listing / analytics

-   Analytics

    -   Easy integration of tracker program indicators with aggregate for categorized data
        -   Updating the functionality enabling linkages between individual and aggregate indicators

-   Deduplication

    -   Duplicate detection/comparison of tracked entity instances

-   Stability and performance

    -   Improve search for TEI performance

### 2.40

-   Deduplication

    -   Design and implement manual merging
        -   Building on deduplication tools to allow manual review and merging of potential duplicates

-   EMIS

    -   Full MVP for EMIS
        -   Bulk enrollment
        -   Attendance in line listing
        -   Concurrent enrollments

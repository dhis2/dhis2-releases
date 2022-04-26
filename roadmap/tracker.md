## Tracker

### 2.39

-   Feature parity in Capture app

    -   Relationship support
        -   Support new model for configuring attributes to display in relationships.
    -   Ownership transfer between org units

-   Referrals

    -   Allow one time referrals between org units.

-   Program rules

    -   Managements
        -   Functionality that triggers decision support / recommended actions based on data from an event/multiple events

-   Working lists

    -   Data elements in working lists - single stage tracker working lists
    -   Editable elements from single stage

-   Privacy

    -   Ability to request removal of personal data
        -   Ensure the easier removal of personal data based on an individual's request

-   EMIS

    -   Use of improvements to working lists and analytics in recommended configuration
        -   Updating the recommended configuration for education to make use of new working lists / line listing / analytics

-   Deduplication

    -   Duplicate detection/comparison of tracked entity instances
    -   UI support for detecting and merging duplicates - simple/automatic cases
        -   Making use of the deduplication capabilities added to the back end in 2.37

-   Plugin framework

    -   Enabling the easier introduction of external applications and widgets
    -   Allow reuse of self-contained tracker components in other apps

-   Stability and performance

    -   Improve search for TEI performance
    -   Code improvements in the importer to avoid common bugs
    -   Improve importer caching
    -   Improve stability and performance when importing with non-uid id schemes
    -   Improve how FileResources are linked to improve stability and security
    -   Extend dynamic indexing functionaility to include managing and evaluating existing indexes
    -   Support Android with WEB API automatic testing

### 2.40

-   Program rules
    -   Program rules across programs
        -   Enabling the creation of program rules that can take into consideration data from more than one program
        
-   Deduplication

    -   Design and implement manual merging
        -   Building on deduplication tools to allow manual review and merging of potential duplicates

-   Privacy

    -   Solution for non-analysable attributes
        -   Functionality to make it easier to ensure that attributes designated as private will not be exposed to any analytics or display modes
    -   Data sunsets - clean out expired data
        -   Functionality to ensure that designated data will automatically be made unavailable after a certain period of time

-   Working lists
    
    -   Editable data elements from multiple stages
    -   Editable data elements from multiple programs
        -   Taking the design created during 2.38 to create functionality for data entry in line-listing of TEIs
-   Biometrics

    -   Support for the generic biometric integration
        -   Native support for the handling of biometric data and data exchange


-   EMIS

    -   Full MVP for EMIS
        -   Bulk enrollment
        -   Attendance in line listing
        -   Concurrent enrollments

-   LMIS

    -   [ ] Health commodity catalog
        -   Functionality to support the creation of health commodity catalogs for supply chain products

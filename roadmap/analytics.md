## Analytics

### 2.38

-   New line listing application phase one

    -  [x] New, more intuitive, user-interface
    -  [x] Replace existing line listing functionality in old event reports
    -  [x] Include multiple repeating events linelists
    -  [x] Include 'created by' and 'last updated by' dimensions
    -  [x] Include enrollment date, event date, and incident date

-   Local data use/Micro planning

    -  [x] Vector Tiles in Maps
    -  [x] Catchment area for facilities - two geometries for one org unit in Maps
    -  [x] Backend support for two geometries for one org units
    -  [x] Develop plan and roadmap for the WHO immunization application functionality
    -  [x] Google earth building/structurs layer in maps

-   TEI ownership based analytics

    -  [ ] Design for ownership org unit dimension -> Will be implemented in 2.39 program indicators.

-   On-the-fly indicator calculations

    -  [ ] Scoping and design for on-the-fly indicator calculations.

### 2.39

-   Phase two of new line listing Application
    -  [ ] Incorporate cross program line lists [jira](https://jira.dhis2.org/browse/DHIS2-7458) (Delayed for backend performance improvements)
    -  [x] Include due/scheduled date and last updated on time dimensions. [jira](https://jira.dhis2.org/browse/DHIS2-12309)
    -  [x] Legends for program data elements and indicators [jira](https://jira.dhis2.org/browse/DHIS2-75)

-  Continued design for new line listing
    -   [x] Design relationship derived line lists
    -   [ ] Scoping and designing TEI chart types: network graphs, family trees, scatter plots, box and whisker cohort scatter plots. (Delayed for backend performance improvements)
 
-   TEI ownership based analytics

    -   [x] Design for ownership org unit component incorporated into all analytics apps (New EV/ER, Maps, Data Visualizer, and Maps)

-   Data use/Micro planning
    -   [ ] Cummulative values pivot tables [jira](https://jira.dhis2.org/browse/DHIS2-5497) (Expected for continuous release in 2.39+)
    -   [ ] Automated dashboard emails [jira](https://jira.dhis2.org/browse/DHIS2-12101) (Requirments gathered and design in process full feature expected in 2.40)
    -   [x] Google Earth Engine import in Maps [jira](https://jira.dhis2.org/browse/DHIS2-11966)
    -   [x] Design and requirments for persisted log-in dashboards
    -   [x] Design and requirments for dashboard sharing via web link
    -   Develop backend requirements for generic framework to embed custom web app outputs to dashboards

-   On-the-fly indicator calculations

    -   [x] Develop backend requirements for on-the-fly indicator calculations [jira](https://dhis2.atlassian.net/browse/DHIS2-13871)
    -   [x] Design of on-the-fly indicator calculations [jira](https://dhis2.atlassian.net/browse/DHIS2-13871)

### 2.40

-   Tracker analytics 

    -   [x] TEI / Cross program line list backend [jira](https://dhis2.atlassian.net/browse/DHIS2-13779)
    -   [x] Improved program indicator performance
    -   [x] Show org unit hierarchy in line lists [jira](https://dhis2.atlassian.net/browse/DHIS2-1558)
   
-   Data visualizer

    -   [x] On-the-fly calculations in data visualizer pivot tables [jira](https://dhis2.atlassian.net/browse/DHIS2-13871)
    -   [x] Apply legend as background color for single value chart type [jira](https://dhis2.atlassian.net/browse/DHIS2-13702)
    -   [x] Legend for stacked column charts [jira](https://dhis2.atlassian.net/browse/DHIS2-13783)  
    -   [x] Show data element and indicator icon for single value charts [jira](https://dhis2.atlassian.net/browse/DHIS2-10496)
    -   [x] Cummulative values in pivot tables [jira](https://dhis2.atlassian.net/browse/DHIS2-5497)

-   Dashboards 

    -   [x] Dashboard plug-in support [jira](https://dhis2.atlassian.net/browse/TECH-475)
    -   [x] Design for new push analytics - email dashboard print
    -   [x] Design for services/guidance/tools to better support public web portals [jira](https://dhis2.atlassian.net/browse/DHIS2-13716)

-   Maps

    - [ ] Support multiple event coordinate types (event, enrollment, registration, data element, attributes) [jira](https://dhis2.atlassian.net/browse/DHIS2-8165) 
    - [ ] Improved interoperability with ESRI/ArcGIS [jira](https://dhis2.atlassian.net/browse/DHIS2-9526)
    - [x] Option to show value/number in thematic layers [jira](https://jira.dhis2.org/browse/DHIS2-13356)
    - [ ] Show map legend for large dashboard maps [jira](https://dhis2.atlassian.net/browse/DHIS2-13242)
    - [x] Improvements to printed to maps to include north arros, inset map, download to PDF, inclusion of the description. [jira](https://dhis2.atlassian.net/browse/DHIS2-14317)


### 2.41

-   Tracker Analytics

    -   [x] Tracker analytics performance improvements
    -   [x] Tracker analytics stability improvements
    -   [x] TEI / Cross program line list frontend [jira](https://dhis2.atlassian.net/browse/DHIS2-15454)
    -   [x] Design tracked entity count based upon event and enrollment line lists

-   Data visualizer

    -   [ ] Design two value chart types 
    -   [x] Outlier tables (Replacing WHO DQ app) [jira](https://dhis2.atlassian.net/browse/DHIS2-13858)
    -   [x] Cummulative values in pivot tables [jira](https://dhis2.atlassian.net/browse/DHIS2-5497)
    -   [x] Design for indicator description included in data item selector [jira](https://dhis2.atlassian.net/browse/ROADMAP-148).

-   Dashboards

    -   [x] Dashboard email push [jira](https://dhis2.atlassian.net/browse/DHIS2-15367)
    -   [x] Design for indicator description included in dashboard items
    -   [x] Design and development for a "simple" presentation mode for dashboards [jira](https://dhis2.atlassian.net/browse/DHIS2-13038)

-   Maps
    -   [ ] Filtering event-layer maps by attribute categories [jira](https://dhis2.atlassian.net/browse/DHIS2-12041)
    -   [ ] Provide enrollment coordinates [jira](https://dhis2.atlassian.net/browse/DHIS2-8165)
    -   [ ] Increased granularity/options for periodicity in Maps App for Climate layers from GEE [jira](https://dhis2.atlassian.net/browse/DHIS2-15769)
    -   [ ] Make Google Earth Engine signup process easier [jira](https://dhis2.atlassian.net/browse/DHIS2-14262)

### 2.42

-   Line Listing 

    - [ ] Remember last used selections in LL [jira](https://dhis2.atlassian.net/browse/DHIS2-13498)

-   Data visualizer

    - [ ] Multiple option sets selection for data elements [jira](https://dhis2.atlassian.net/browse/DHIS2-7290)
    - [ ] Improve title/subtitle for relative periods in visualizations [jira](https://dhis2.atlassian.net/browse/DHIS2-17841)
    - [ ] Support download as xlsx [jira](https://dhis2.atlassian.net/browse/DHIS2-13907)

-   Dashboards
    
    - [ ] Simple presentation dashboard mode for dashboards frontend [jira](https://dhis2.atlassian.net/browse/DHIS2-13038)

- General
  
      - [x] User orgunit in analytics dictates org units user has access to visualize data. [jira](https://dhis2.atlassian.net/browse/DHIS2-13498) 
      - [ ] Development of next phase of tracker analytics, future of Event Reports and Event Visualizer
      - [ ] Combine user orgunit with levels/groups in the orgunit selector [jira 1](https://dhis2.atlassian.net/browse/DHIS2-15933) [jira 2](https://dhis2.atlassian.net/browse/DHIS2-15950)

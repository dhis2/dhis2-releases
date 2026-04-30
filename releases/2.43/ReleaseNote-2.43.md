# DHIS2 version 43 and Android Capture 3.4 Release Notes

## Highlights

* Performance improvements and Infrastructure to measure and benchmark DHIS2 versions 
* DHIS2 Custom Theme
* New Metadata Management App to replace the Maintenance App
* Support JavaScript in custom Data Entry Forms
* EPI weeks available in relative periods
* Possibility to disable not relevant period types
* Markdown and legend support in Android Feedback Widget
  
## Performance
#### [Infrastructure to measure and compare DHIS2 performance [ROADMAP-400]](https://dhis2.atlassian.net/browse/ROADMAP-400)
New infrastructure for systematically benchmarking DHIS2 performance across versions, enabling data-driven release QA. Preliminary v43 results show major import/export gains vs v42/v41. Follow the Roadmap Idea link for full methodology and details.

#### [Dedicated analytics backend database [ROADMAP-49]](https://dhis2.atlassian.net/browse/ROADMAP-49) [[ROADMAP-394]](https://dhis2.atlassian.net/browse/ROADMAP-394)
DHIS2 supports Apache Doris as a dedicated analytics database to improve query performance and analytics table updates. Modernizes backend code with better structure and testing. Available for aggregate data in v42 and individual data in v43.

#### [Platform API performance improvements [ROADMAP-403]](https://dhis2.atlassian.net/browse/ROADMAP-403)
The Data Import process has been fundamentally rewritten to improve performance. Instead of processing data values one-by-one through a Java middleware layer, the system now sends bulk SQL operations directly to the database, greatly improving imports. 

#### [Tracked Entity Search Performance Configuration [ROADMAP-128]](https://dhis2.atlassian.net/browse/ROADMAP-128)
Configure search operators for tracked entity attributes to improve performance. Web and Android Capture use recommended operators, restrict inefficient ones, avoid LIKE by default, and support min character limits and trigram indexing for faster searches.

#### [Android Metadata Sync Improvements [ROADMAP-617]](https://dhis2.atlassian.net/browse/ROADMAP-617)
Improves metadata synchronization by adding new frequency options (6 and 12 hours) and enhancing how sync settings are automatically updated and applied.

#### [Android synchronization of data by working list [ROADMAP-51]](https://dhis2.atlassian.net/browse/ROADMAP-51)
Improves sync performance by downloading tracked entity instances based on configured working lists, reducing the amount of data synced to the device.

#### [Capture App Performance Improvements [ROADMAP-389]](https://dhis2.atlassian.net/browse/ROADMAP-389)
Improved Capture app performance by optimizing Tracker API usage, removing redundant requests in certain workflows, and resolving slow data entry in large forms.

## Configure
#### [New Metadata Management App [ROADMAP-182]](https://dhis2.atlassian.net/browse/ROADMAP-182)
The Metadata Management App replaces and improves the Maintenance app, the primary tool for system administrators to configure metadata such as data elements, data sets, programs, and organisation units.

#### [DHIS2 Custom Theme [ROADMAP-622]](https://dhis2.atlassian.net/browse/ROADMAP-622)
Custom colors can now be applied to parts of the DHIS2 UI. This option can be configured in the System Settings app, and it applies to the header bar on web and to the theme on mobile.

#### [[Experimental] Custom translations / Custom terminology [ROADMAP-624]](https://dhis2.atlassian.net/browse/ROADMAP-624)
Custom translations or terminology overrides can now be applied to any text in a selection of apps by using the datastore. This can be used for both improving localization and using context-specific terminology in apps.

## Collect
#### [Support JavaScript in custom Data Entry Forms [ROADMAP-392]](https://dhis2.atlassian.net/browse/ROADMAP-392)
This feature introduces a new plugin in the Data Entry App that restores JavaScript support in custom forms.

#### [Non-analyzable Tracked Entity attributes [ROADMAP-80]](https://dhis2.atlassian.net/browse/ROADMAP-80)
Excludes tracked entity attributes from analytics using a “Skip in Analytics” option, improving performance and preventing sensitive data from being included in analytics processing.

#### [Program rule priority for Actions [ROADMAP-625]](https://dhis2.atlassian.net/browse/ROADMAP-625)
Introduces priority for program rule actions, allowing control over the order in which actions are applied and displayed.

#### [Markdown and legend support in Android Feedback Widget [ROADMAP-611]](https://dhis2.atlassian.net/browse/ROADMAP-611)
Enhances program rule feedback with Markdown formatting and legend-based styling, enabling richer content and clearer visual interpretation.

#### [New value type filters in working lists [ROADMAP-497]](https://dhis2.atlassian.net/browse/ROADMAP-497) 
Extends working list filtering by adding support for additional value types, enabling more flexible and accurate data filtering.

## Analyze
#### [Enable and disable period types [ROADMAP-626]](https://dhis2.atlassian.net/browse/ROADMAP-626) 
Period types for analytics can be enabled/disabled in System Settings, simplifying the analytics app interface by showing only relevant periods. Disabled periods are excluded from analytics table generation, improving performance and reducing processing time.

#### [Expanding support for weekly and financial year relative period types [ROADMAP-397]](https://dhis2.atlassian.net/browse/ROADMAP-397) 
Configure the start day for weekly relative period in System Settings, enabling analysis for periods like "this week", "last week" with other start days than Monday. Financial year now also supports February, August, and September as start months.

#### [Dashboard slideshow autoplay [ROADMAP-407]](https://dhis2.atlassian.net/browse/ROADMAP-407)
Dashboard slideshows now support autoplay. When play is clicked it  will advance based on the timing setting, with a countdown on the play/pause button. The slideshow loops continuously, and a warning appears if it has been 24 hours since it started.

#### [Environmental layer sources for Maps app [ROADMAP-590]](https://dhis2.atlassian.net/browse/ROADMAP-590)
The Maps app now includes new climate layers including precipitation, temperature, vegetation indices, humidity, and heat stress to align with layers available in the DHIS2 Climate app and enrich geographical analysis alongside other data.

#### [Multiple timeline and splitmap layers in Maps [ROADMAP-589]](https://dhis2.atlassian.net/browse/ROADMAP-589)
Multiple thematic layers can now be added as timeline or split map, enabling side-by-side comparison of several data items (data elements, indicators etc.) over time, with periods syncing automatically across layers where those map types are enabled.

#### [Harmonization of Maps Data item selector with other analytics apps [ROADMAP-335]](https://dhis2.atlassian.net/browse/ROADMAP-335)
The Maps app now uses the same data item selector as Data Visualizer, replacing the previous selector with a unified experience across analytics apps. Improvements include search, filtering, data item definitions, and the ability to create custom calculations directly in the Maps app.

## Platform
#### [Android Log In process improvements [ROADMAP-618]](https://dhis2.atlassian.net/browse/ROADMAP-618)
Updates the PIN creation screen in the login flow with a new full screen design, replacing the previous component while preserving the existing behavior.

#### [Improved Event ordering for consistent sync and calculations [ROADMAP-618]](https://dhis2.atlassian.net/browse/ROADMAP-618)
Improves sync compatibility between Web and Android by aligning event synchronization and ordering. For LMIS it ensures more consistent stock calculations across platforms.

#### [Session expiration handling [ROADMAP-621]](https://dhis2.atlassian.net/browse/ROADMAP-621)
Session expiration is now gracefully handled in DHIS2 applications: a notification appears when a user's session is soon to expire, and when the session has expired, a dialog appears with an option to log in again in a new tab.

#### [Expanded support for shortcuts [ROADMAP-623]](https://dhis2.atlassian.net/browse/ROADMAP-623) 
The app menu/Command Palette now offers fuzzy search for matching results similar to the user’s search, shortcuts for more core apps, and results for an app's shortcuts when searching for that app.

#### [Data Exchange - Remove stale values [ROADMAP-393]](https://dhis2.atlassian.net/browse/ROADMAP-393)
The aggregate data exchange has been updated to send the full scope of all possible data values specified in the exchange request. The full scope is then deleted before the new values are imported, removing the possibility of stale values persisting.

#### [Capture App migration to DHIS2 Standards [ROADMAP-390]](https://dhis2.atlassian.net/browse/ROADMAP-390)
Migrated Capture app to DHIS2 standards by adopting TypeScript, React 18, and App Platform (Vite), while upgrading core libraries. Improves maintainability, performance, and alignment with the DHIS2 frontend ecosystem.

#### [Separation of Tracker Program Events and Event Program Events [ROADMAP-406]](https://dhis2.atlassian.net/browse/ROADMAP-406)
Single events and tracker events are now separated into distinct  database tables and object models, improving validation, access control, performance, and enabling more efficient rule execution and data export.

#### [Hibernate Upgrade [ROADMAP-323]](https://dhis2.atlassian.net/browse/ROADMAP-323)
Upgrades the DHIS2 backend from Hibernate 5 to Hibernate 6, addressing deprecations and ensuring compatibility with modern Java persistence standards.

#### [HighCharts v12 upgrade [ROADMAP-398]](https://dhis2.atlassian.net/browse/ROADMAP-398)
The Data Visualizer chart library has been upgraded to Highcharts v12. Chart exports to PDF and PNG now happen client-side rather than on the server, giving faster and more reliable exports, including full support for non-latin characters in PDF exports.

#### [Enrollment AOCs (backend) [ROADMAP-140]](https://dhis2.atlassian.net/browse/ROADMAP-140)
The support for Enrollment Attribute Option Combos (AOCs) in Tracker programs has been implemented in the backend. Next steps will be to implement the required configuration functionality in the Metadata Management and the support in capture and analytics apps. These changes can be added through continuous release during the v44 release cycle.

This functionality, when completed, will enable more granular attribution, sharing, and analytics at the enrollment level, only available at event level at the moment.

#### [Metadata Deduplication Category and Category Combinations [ROADMAP-39]](https://dhis2.atlassian.net/browse/ROADMAP-39)
The backend and API support for merging Categories and Categories Combinations has been implemented in v43. Next steps will be to integrate in the Metadata Management to enable its use through the User Interface. These changes can be added through continuous release during the v44 release cycle.



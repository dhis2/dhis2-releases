# Patch 2.34.1 Release Note

## Features

**[DHIS2-8389](https://jira.dhis2.org/browse/DHIS2-8389): Use system setting for analytics server-side cache**  
Components: _[API] Analytics_

**[DHIS2-7783](https://jira.dhis2.org/browse/DHIS2-7783): Indicator numerator and denominator cannot be translated**  
Components: _[API] Metadata model_, _[API] Translations_  
**Testing**

**[DHIS2-8406](https://jira.dhis2.org/browse/DHIS2-8406): Tracker domain model updates/changes**  
Components: _[API] Tracker_

**[DHIS2-8616](https://jira.dhis2.org/browse/DHIS2-8616): Hide map name in dashboard maps**  
Components: _[App] Dashboard_

**[DHIS2-8769](https://jira.dhis2.org/browse/DHIS2-8769): Implement Org Unit drill up and drill down context menu in pivot tables**  
Components: _[App] Data visualizer_

**[DHIS2-8709](https://jira.dhis2.org/browse/DHIS2-8709): Analytics table "skip table types" options must be prettified and translated**  
Components: _[App] Job scheduler_

**[DHIS2-8618](https://jira.dhis2.org/browse/DHIS2-8618): New option to hide map title for Dashboard maps**  
Components: _[App] Maps_

**[DHIS2-8589](https://jira.dhis2.org/browse/DHIS2-8589): Support new analytics caching settings in the UI**  
Components: _[App] Settings_

**[DHIS2-8526](https://jira.dhis2.org/browse/DHIS2-8526): Editing localized appearance settings throws a 409 if default values are undefined**  
Components: _[App] Settings_

**[DHIS2-7610](https://jira.dhis2.org/browse/DHIS2-7610): Select all authorities checkbox**  
Components: _[App] User_

## Bugs

**[DHIS2-8580](https://jira.dhis2.org/browse/DHIS2-8580): Cannot generate report of indicators after upgrade from 2.33.1 to 2.33.2**  
Components: _[API] Analytics_

**[DHIS2-8803](https://jira.dhis2.org/browse/DHIS2-8803): 500 Error on Previewing Push Analytics**  
Components: _[API] Analytics_

**[DHIS2-8212](https://jira.dhis2.org/browse/DHIS2-8212): Weekly starting Sunday period type overlaps first and last week for 2019-2020**  
Components: _[API] Analytics_

**[DHIS2-8387](https://jira.dhis2.org/browse/DHIS2-8387): Map fails when indicator has 0 decimals**  
Components: _[API] Analytics_

**[DHIS2-7862](https://jira.dhis2.org/browse/DHIS2-7862): Indicators with fixed values or constants do not render**  
Components: _[API] Analytics_, _[App] Data visualizer_, _[App] Pivot table_

**[DHIS2-8571](https://jira.dhis2.org/browse/DHIS2-8571): 500 error on /analytics/events/query**  
Components: _[API] Analytics_

**[DHIS2-8060](https://jira.dhis2.org/browse/DHIS2-8060): Indicator multiplying blanks as zeros**  
Components: _[API] Analytics_, _[API] Other_, _[App] Pivot table_  
**Closed**

**[DHIS2-8691](https://jira.dhis2.org/browse/DHIS2-8691): Clearing the Application Cache Removes User Installed Apps**  
Components: _[API] App management_

**[DHIS2-8656](https://jira.dhis2.org/browse/DHIS2-8656): Error When Prunning Periods - Maintenance App**  
Components: _[API] App management_

**[DHIS2-9119](https://jira.dhis2.org/browse/DHIS2-9119): Resource table failing due to out of range for Int**  
Components: _[API] Data administration_

**[DHIS2-7895](https://jira.dhis2.org/browse/DHIS2-7895): Data Administration - Unable to remove TEIs due to linked records in table "trackedentityprogramowner"**  
Components: _[API] Data administration_

**[DHIS2-8627](https://jira.dhis2.org/browse/DHIS2-8627): Integer out of range when creating resource table for larger database**  
Components: _[API] Data administration_

**[DHIS2-9037](https://jira.dhis2.org/browse/DHIS2-9037): Restrict access to the METADATASTORE namespace in DataStore**  
Components: _[API] Data store_

**[DHIS2-8730](https://jira.dhis2.org/browse/DHIS2-8730): Capture Web App - Event list Filter - type mismatch**  
Components: _[API] Events_

**[DHIS2-8612](https://jira.dhis2.org/browse/DHIS2-8612): Capture app with the Arabic Interface Language does not save events / event list filtering fails**  
Components: _[API] Events_, _[App] Capture_

**[DHIS2-8682](https://jira.dhis2.org/browse/DHIS2-8682): Identifier matching on CODE does not work for metadata importer updates**  
Components: _[API] Metadata import-export_

**[DHIS2-3454](https://jira.dhis2.org/browse/DHIS2-3454): Can't delete Program Rule after importing it through metadata import**  
Components: _[API] Metadata import-export_, _[API] Metadata model_

**[DHIS2-8513](https://jira.dhis2.org/browse/DHIS2-8513): Pagination firstResult calculated incorrectly**  
Components: _[API] Metadata model_

**[DHIS2-8712](https://jira.dhis2.org/browse/DHIS2-8712): Login page does not use Interface language**  
Components: _[API] Other_  
**Reopened**

**[DHIS2-2652](https://jira.dhis2.org/browse/DHIS2-2652): Delete cascade not working for OrgUnitGroups**  
Components: _[API] Other_, _[App] Maintenance_

**[DHIS2-8832](https://jira.dhis2.org/browse/DHIS2-8832): HTTP 500 when saving a new Map with Layers/MapViews**  
Components: _[API] Other_, _[App] Maps_

**[DHIS2-2696](https://jira.dhis2.org/browse/DHIS2-2696): CategoryCombo W/O Options Causes DataElement Operands 500**  
Components: _[API] Other_

**[DHIS2-8578](https://jira.dhis2.org/browse/DHIS2-8578): Plugin resources aren't publicly accessible**  
Components: _[API] Other_

**[DHIS2-8912](https://jira.dhis2.org/browse/DHIS2-8912): Predictor bug when previous predicted value is deleted**  
Components: _[API] Predictors_

**[DHIS2-8843](https://jira.dhis2.org/browse/DHIS2-8843): Missing Value Stretagy not working properly for Predictor**  
Components: _[API] Predictors_

**[DHIS2-8707](https://jira.dhis2.org/browse/DHIS2-8707): Predictor only runs a single cycle when predicted data element is part of the generator**  
Components: _[API] Predictors_

**[DHIS2-8583](https://jira.dhis2.org/browse/DHIS2-8583): Any file types can be uploaded as file resources**  
Components: _[API] Security_

**[DHIS2-9017](https://jira.dhis2.org/browse/DHIS2-9017): corsWhiteList field is null on /api/configuration endpoint**  
Components: _[API] System configuration_

**[DHIS2-8732](https://jira.dhis2.org/browse/DHIS2-8732): Invalid error message if deeply nested TE and invalid org unit**  
Components: _[API] Tracker_

**[DHIS2-7415](https://jira.dhis2.org/browse/DHIS2-7415): Enrollments are not deleted when TEI is deleted**  
Components: _[API] Tracker_

**[DHIS2-6401](https://jira.dhis2.org/browse/DHIS2-6401): 500 error when trying to delete Program with associated RelationshipType**  
Components: _[API] Tracker_

**[DHIS2-7715](https://jira.dhis2.org/browse/DHIS2-7715): d2:addDays pushing blanks to date data element**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-7740](https://jira.dhis2.org/browse/DHIS2-7740): Relationships endpoint returns status code 200 even if there is an error**  
Components: _[API] Tracker_

**[DHIS2-8717](https://jira.dhis2.org/browse/DHIS2-8717): TEAV.storedBy does not get set on save/update enrollment**  
Components: _[API] Tracker_

**[DHIS2-8888](https://jira.dhis2.org/browse/DHIS2-8888): Program indicator expression validation fails**  
Components: _[API] Tracker_

**[DHIS2-8619](https://jira.dhis2.org/browse/DHIS2-8619): "relationship name seen from initiating/receiving entity" not translateable**  
Components: _[API] Translations_  
**Testing**

**[DHIS2-4086](https://jira.dhis2.org/browse/DHIS2-4086): Data elements do not display when translated in data entry forms**  
Components: _[API] Translations_, _[App] Data entry_, _[App] User Profile_

**[DHIS2-8946](https://jira.dhis2.org/browse/DHIS2-8946): User group filters never complete across horizontally scaled servers**  
Components: _[API] User_

**[DHIS2-7725](https://jira.dhis2.org/browse/DHIS2-7725): Users API very slow for large DBs**  
Components: _[API] User_

**[DHIS2-8439](https://jira.dhis2.org/browse/DHIS2-8439): Cannot remove What'sapp and Skype addresses from users**  
Components: _[API] User_, _[App] User_, _[App] User Profile_

**[DHIS2-8674](https://jira.dhis2.org/browse/DHIS2-8674): Make static strings translatable**  
Components: _[API] User_

**[DHIS2-5990](https://jira.dhis2.org/browse/DHIS2-5990): Data analysis: difference between last month and last three months**  
Components: _[App] Analytics_, _[App] Pivot table_  
**Retesting**

**[DHIS2-7593](https://jira.dhis2.org/browse/DHIS2-7593): Can't select year in calendar component in Capture**  
Components: _[App] Capture_

**[DHIS2-9067](https://jira.dhis2.org/browse/DHIS2-9067): Date picker in capture app shows only previous year upto 1980 only**  
Components: _[App] Capture_

**[DHIS2-8332](https://jira.dhis2.org/browse/DHIS2-8332): Built-in variable V{orgunit_code} not working in Capture app Program Rules**  
Components: _[App] Capture_  
**In Review**

**[DHIS2-8333](https://jira.dhis2.org/browse/DHIS2-8333): Can select future dates in Capture app when "date in future" is not checked**  
Components: _[App] Capture_

**[DHIS2-8648](https://jira.dhis2.org/browse/DHIS2-8648): Headerbar app menu and user menu is cut off in RTL mode**  
Components: _[App] Capture_, _Frontend_

**[DHIS2-8503](https://jira.dhis2.org/browse/DHIS2-8503): Syntax for functions at 'Tracker Capture' and 'Capture' are not aligned.**  
Components: _[App] Capture_

**[DHIS2-7348](https://jira.dhis2.org/browse/DHIS2-7348): Order of lat/long coordinate is different in create/edit event and in view event**  
Components: _[App] Capture_

**[DHIS2-8761](https://jira.dhis2.org/browse/DHIS2-8761): Rule Effects that normally would show a value on Feedback Widget wont show the value when it is zero**  
Components: _[App] Capture_

**[DHIS2-7300](https://jira.dhis2.org/browse/DHIS2-7300): Capture app - very high number of point coordinate decimals**  
Components: _[App] Capture_

**[DHIS2-8519](https://jira.dhis2.org/browse/DHIS2-8519): Covid-19 data package: Can't submit form in row view**  
Components: _[App] Capture_

**[DHIS2-8602](https://jira.dhis2.org/browse/DHIS2-8602): Opening the new event page with a tracker program selected causes the app to crash**  
Components: _[App] Capture_

**[DHIS2-8523](https://jira.dhis2.org/browse/DHIS2-8523): Working list: Active filters are hidden when loading a view**  
Components: _[App] Capture_

**[DHIS2-8567](https://jira.dhis2.org/browse/DHIS2-8567): Dashboard report/resource/user item: multiple items not showing when added**  
Components: _[App] Dashboard_

**[DHIS2-8492](https://jira.dhis2.org/browse/DHIS2-8492): Dashboard items with long titles cause chart to not display in its entirety**  
Components: _[App] Dashboard_

**[DHIS2-8784](https://jira.dhis2.org/browse/DHIS2-8784): Multi-Organisation Unit Forms Enabled by Default**  
Components: _[App] Data entry_, _[App] Maintenance_

**[DHIS2-5398](https://jira.dhis2.org/browse/DHIS2-5398): Removing a Data Element from a Data Set doesn't remove it from the Section**  
Components: _[App] Data entry_

**[DHIS2-8752](https://jira.dhis2.org/browse/DHIS2-8752): Single quotes not escaped in query for Std Dev Outlier Analysis, causing error "Unterminated string literal started at position 340 in SQL"**  
Components: _[App] Data quality_

**[DHIS2-8753](https://jira.dhis2.org/browse/DHIS2-8753): No tooltip displayed when items exceed window length**  
Components: _[App] Data visualizer_  
**Needs Update**

**[DHIS2-8124](https://jira.dhis2.org/browse/DHIS2-8124): In program indicators d2 functions return an error when using variables**  
Components: _[App] Data visualizer_, _[App] Event reports_, _[App] Pivot table_

**[DHIS2-8434](https://jira.dhis2.org/browse/DHIS2-8434): Loading spinner not shown when saving**  
Components: _[App] Data visualizer_

**[DHIS2-8473](https://jira.dhis2.org/browse/DHIS2-8473): Orgunit title says "in" for levels/groups without parents**  
Components: _[App] Data visualizer_

**[DHIS2-8407](https://jira.dhis2.org/browse/DHIS2-8407): Event Report - LineListing-Enrollment display optionvalueCODES and all text values in lowercase**  
Components: _[App] Event reports_

**[DHIS2-8615](https://jira.dhis2.org/browse/DHIS2-8615): Event reports with category option group sets cannot be restored**  
Components: _[App] Event reports_

**[DHIS2-8837](https://jira.dhis2.org/browse/DHIS2-8837): Error on metadata Import in XML format**  
Components: _[App] Import-export_

**[DHIS2-6998](https://jira.dhis2.org/browse/DHIS2-6998): Translation of Form Name for Tracked Entity Attributes not available**  
Components: _[App] Maintenance_  
**In Review**

**[DHIS2-8733](https://jira.dhis2.org/browse/DHIS2-8733): Attribute deletion is not deleting the associations it has with metadata completely**  
Components: _[App] Maintenance_

**[DHIS2-8590](https://jira.dhis2.org/browse/DHIS2-8590): Push analytics not preview not working**  
Components: _[App] Maintenance_

**[DHIS2-8621](https://jira.dhis2.org/browse/DHIS2-8621): Updated Attribute associated to DataSets is not working**  
Components: _[App] Maintenance_

**[DHIS2-4998](https://jira.dhis2.org/browse/DHIS2-4998): Update stage sections when a data element is removed**  
Components: _[App] Maintenance_

**[DHIS2-8435](https://jira.dhis2.org/browse/DHIS2-8435): Remove "Date to send message" field for send message program rule action**  
Components: _[App] Maintenance_

**[DHIS2-8574](https://jira.dhis2.org/browse/DHIS2-8574): Meta-data paging broken**  
Components: _[App] Maintenance_

**[DHIS2-9060](https://jira.dhis2.org/browse/DHIS2-9060): Keep created time when map is saved again**  
Components: _[App] Maps_

**[DHIS2-8880](https://jira.dhis2.org/browse/DHIS2-8880): Issue with display of Maps favorite on dashboard**  
Components: _[App] Maps_  
**In Review**

**[DHIS2-8658](https://jira.dhis2.org/browse/DHIS2-8658): Maps app: Non-translatable fields**  
Components: _[App] Maps_  
**Needs Update**

**[DHIS2-8840](https://jira.dhis2.org/browse/DHIS2-8840): App crash when expanding interpretations panel after a map is saved twice**  
Components: _[App] Maps_

**[DHIS2-8702](https://jira.dhis2.org/browse/DHIS2-8702): Map don't fill screen when going to full screen from an already full-screen browser window**  
Components: _[App] Maps_

**[DHIS2-8585](https://jira.dhis2.org/browse/DHIS2-8585): Error message in the console when trying to open a map as a chart**  
Components: _[App] Maps_

**[DHIS2-8575](https://jira.dhis2.org/browse/DHIS2-8575): Filters are not kept when switching from DV to Maps**  
Components: _[App] Maps_

**[DHIS2-8479](https://jira.dhis2.org/browse/DHIS2-8479): Handle error if org unit selection is invalid for thematic layers**  
Components: _[App] Maps_

**[DHIS2-8474](https://jira.dhis2.org/browse/DHIS2-8474): Handle error if org unit selection is invalid for facility layers**  
Components: _[App] Maps_

**[DHIS2-8176](https://jira.dhis2.org/browse/DHIS2-8176): Org Units with no data displaying for periods in Maps timeline**  
Components: _[App] Maps_

**[DHIS2-7924](https://jira.dhis2.org/browse/DHIS2-7924): Editing map layer with OU grandchildren selected breaks map**  
Components: _[App] Maps_

**[DHIS2-7089](https://jira.dhis2.org/browse/DHIS2-7089): Maps - Filtering on data element option with operator "Not one of" generates error**  
Components: _[App] Maps_

**[DHIS2-8564](https://jira.dhis2.org/browse/DHIS2-8564): Clear map data and legend when loading fails**  
Components: _[App] Maps_

**[DHIS2-8713](https://jira.dhis2.org/browse/DHIS2-8713): Map fullscreen not working in Safrari**  
Components: _[App] Maps_

**[DHIS2-8524](https://jira.dhis2.org/browse/DHIS2-8524): Include map title in fullscreen mode**  
Components: _[App] Maps_

**[DHIS2-8515](https://jira.dhis2.org/browse/DHIS2-8515): Map labels are not disappearing if mouse is leaving the map**  
Components: _[App] Maps_

**[DHIS2-8487](https://jira.dhis2.org/browse/DHIS2-8487): Avoid double scrollbars for layer filters**  
Components: _[App] Maps_

**[DHIS2-8471](https://jira.dhis2.org/browse/DHIS2-8471): Keep default legend set between thematic layer edits**  
Components: _[App] Maps_

**[DHIS2-8640](https://jira.dhis2.org/browse/DHIS2-8640): App crash with timeline maps**  
Components: _[App] Maps_

**[DHIS2-8451](https://jira.dhis2.org/browse/DHIS2-8451): Reset pagination when using filters in FileOpen dialog**  
Components: _[App] Other_

**[DHIS2-9139](https://jira.dhis2.org/browse/DHIS2-9139): Pivot tables app doesn't display all favourites**  
Components: _[App] Pivot table_  

**[DHIS2-9120](https://jira.dhis2.org/browse/DHIS2-9120): Reporting rate summary giving un error**  
Components: _[App] Reports_

**[DHIS2-8576](https://jira.dhis2.org/browse/DHIS2-8576): Create standard report not working**  
Components: _[App] Reports_

**[DHIS2-8610](https://jira.dhis2.org/browse/DHIS2-8610): [Bug] sms inbound API wrong error message**  
Components: _[App] SMS configuration_

**[DHIS2-8762](https://jira.dhis2.org/browse/DHIS2-8762): SMSCommand create/update failed**  
Components: _[App] SMS configuration_

**[DHIS2-7984](https://jira.dhis2.org/browse/DHIS2-7984): "hasUserRole" function is not working in Tracker Capture**  
Components: _[App] Tracker capture_

**[DHIS2-8718](https://jira.dhis2.org/browse/DHIS2-8718): Editing an event will DELETE event coordinates**  
Components: _[App] Tracker capture_

**[DHIS2-8661](https://jira.dhis2.org/browse/DHIS2-8661): Tracked entity instance filter of "followup" ignored**  
Components: _[App] Tracker capture_

**[DHIS2-8662](https://jira.dhis2.org/browse/DHIS2-8662): Program summary report fails in when one TEI is enrolled in multiple programs**  
Components: _[App] Tracker capture_

**[DHIS2-8940](https://jira.dhis2.org/browse/DHIS2-8940): Usage analytics app loads sign in form**  
Components: _[App] Usage analytics_

**[DHIS2-8428](https://jira.dhis2.org/browse/DHIS2-8428): Scrollbar on scrollbar in usage analytics app**  
Components: _[App] Usage analytics_

**[DHIS2-9051](https://jira.dhis2.org/browse/DHIS2-9051): User Group searching via Users app slow, inaccurate, and locks up Chrome for large DBs**  
Components: _[App] User_

**[DHIS2-8546](https://jira.dhis2.org/browse/DHIS2-8546): User is created despite error when Interface Language or Database Language are not selected**  
Components: _[App] User_

**[DHIS2-8830](https://jira.dhis2.org/browse/DHIS2-8830): D2-ui components are not translated correctly**  
Components: _[App] User_

**[DHIS2-8813](https://jira.dhis2.org/browse/DHIS2-8813): Strings not translated correctly**  
Components: _[App] User_

**[DHIS2-8829](https://jira.dhis2.org/browse/DHIS2-8829): Can create user without organisation unit**  
Components: _[App] User_

**[DHIS2-8788](https://jira.dhis2.org/browse/DHIS2-8788): API call /api/me/profile.json not working**  
Components: _[App] User Profile_


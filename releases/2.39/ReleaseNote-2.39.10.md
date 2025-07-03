# Patch 2.39.10 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-19190](https://dhis2.atlassian.net/browse/DHIS2-19190): Org. unit context selector read-only**  
Components: _[App] Capture_

**[DHIS2-18382](https://dhis2.atlassian.net/browse/DHIS2-18382): Replace TE org.unit with the owner org. unit in WorkingList**  
Components: _[App] Capture_

**[DHIS2-10134](https://dhis2.atlassian.net/browse/DHIS2-10134): Disable fallback when the TEType do not have searchable attributes**  
Components: _[App] Capture_

**[DHIS2-16991](https://dhis2.atlassian.net/browse/DHIS2-16991): Add x/clear button to TEA/DEs of Date and Date & Time value type**  
Components: _[App] Capture_

**[DHIS2-19144](https://dhis2.atlassian.net/browse/DHIS2-19144): Performance related options for working lists**  
Components: _[App] Capture_

**[DHIS2-18309](https://dhis2.atlassian.net/browse/DHIS2-18309): Enable non-Gregorian calendars in forms**  
Components: _[App] Capture_

**[DHIS2-18311](https://dhis2.atlassian.net/browse/DHIS2-18311): Enable non-Gregorian calendars in working list filters**  
Components: _[App] Capture_

**[DHIS2-18310](https://dhis2.atlassian.net/browse/DHIS2-18310): Enable non-Gregorian calendars in views and lists**  
Components: _[App] Capture_

## Bugs

**[DHIS2-18324](https://dhis2.atlassian.net/browse/DHIS2-18324): [DATA EXCHANGE API]: Scheduled data exchange jobs do not run**  
Components: _[API] Aggregate Data Exchange_, _[API] Job scheduler_

**[DHIS2-19028](https://dhis2.atlassian.net/browse/DHIS2-19028): Sorting of the Excel / CSV file when downloaded from Data Visualizer**  
Components: _[API] Analytics_

**[DHIS2-13925](https://dhis2.atlassian.net/browse/DHIS2-13925): Program indicators not outputting correct decimals**  
Components: _[API] Analytics_, _[App] Analytics_

**[DHIS2-18185](https://dhis2.atlassian.net/browse/DHIS2-18185): 404s if custom apps are accessed without a trailing slash**  
Components: _[API] App management_

**[DHIS2-18295](https://dhis2.atlassian.net/browse/DHIS2-18295): [api/dataEntry/dataSetCompletion]: endpoint does not check compulsory data element operands**  
Components: _[API] Data Entry_

**[DHIS2-11925](https://dhis2.atlassian.net/browse/DHIS2-11925): Data value export to XML with compression creates empty archive**  
Components: _[API] Data value set_

**[DHIS2-15604](https://dhis2.atlassian.net/browse/DHIS2-15604): Import report showing incorrect ignore value when validation errors**  
Components: _[API] Metadata import-export_

**[DHIS2-19020](https://dhis2.atlassian.net/browse/DHIS2-19020): OU from merge shows in hierarchy root**  
Components: _[API] Metadata model_

**[DHIS2-18517](https://dhis2.atlassian.net/browse/DHIS2-18517): New tracker API does not handle dates for scheduled messages**  
Components: _[API] Program rules_, _[API] Tracker_, _[App] Maintenance_

**[DHIS2-18848](https://dhis2.atlassian.net/browse/DHIS2-18848): Adding program rules to a program without previous rules does not work**  
Components: _[API] Program rules_

**[DHIS2-19227](https://dhis2.atlassian.net/browse/DHIS2-19227): Change logs recorded even when disabled in config**  
Components: _[API] Tracker_

**[DHIS2-17679](https://dhis2.atlassian.net/browse/DHIS2-17679): Value of a TEA of valuetype AGE is not validated (it is possible to add wrong dates), and it breaks the analytics.**  
Components: _[API] Tracker_

**[DHIS2-19156](https://dhis2.atlassian.net/browse/DHIS2-19156): ProgramRule notifications does not work in 2.39 using Capture app**  
Components: _[API] Tracker_

**[DHIS2-19478](https://dhis2.atlassian.net/browse/DHIS2-19478): /tracker/events?filterAttributes operator in and like based fail on numbers and wildcards**  
Components: _[API] Tracker_

**[DHIS2-19233](https://dhis2.atlassian.net/browse/DHIS2-19233): [Backport] Create new relationship in /relationships endpoint does not update TE lastupdated value**  
Components: _[API] Tracker_

**[DHIS2-19467](https://dhis2.atlassian.net/browse/DHIS2-19467): Save button not working due to Program Rules valid state missing**  
Components: _[App] Capture_

**[DHIS2-18839](https://dhis2.atlassian.net/browse/DHIS2-18839): TEA with number option set value does not show in Profile widget on Capture App**  
Components: _[App] Capture_

**[DHIS2-18671](https://dhis2.atlassian.net/browse/DHIS2-18671): [Capture App] Discard changes dialog not responding**  
Components: _[App] Capture_

**[DHIS2-19172](https://dhis2.atlassian.net/browse/DHIS2-19172): | Capture app (web) |  Program stage's 'Report date to use' when event is auto-generated is blank and not set as configured**  
Components: _[App] Capture_

**[DHIS2-19441](https://dhis2.atlassian.net/browse/DHIS2-19441): TEA description value not being translated while editing a TEI**  
Components: _[App] Capture_

**[DHIS2-13236](https://dhis2.atlassian.net/browse/DHIS2-13236): Incorrect text on top of Profile widget**  
Components: _[App] Capture_

**[DHIS2-19442](https://dhis2.atlassian.net/browse/DHIS2-19442): Edit title not being translated properly while editing a TEI**  
Components: _[App] Capture_

**[DHIS2-18854](https://dhis2.atlassian.net/browse/DHIS2-18854): Incorrect Display of Scheduled Events Count in Schedule Info Section**  
Components: _[App] Capture_

**[DHIS2-18952](https://dhis2.atlassian.net/browse/DHIS2-18952): Relationship widget and search page (general+relationships) should use form name**  
Components: _[App] Capture_

**[DHIS2-16918](https://dhis2.atlassian.net/browse/DHIS2-16918): Event relationship URL link is broken**  
Components: _[App] Capture_

**[DHIS2-18676](https://dhis2.atlassian.net/browse/DHIS2-18676): Capture: display error for age in the future in tracked entity in capture**  
Components: _[App] Capture_

**[DHIS2-18855](https://dhis2.atlassian.net/browse/DHIS2-18855): Program indicators without expressions break the capture app**  
Components: _[App] Capture_

**[DHIS2-18714](https://dhis2.atlassian.net/browse/DHIS2-18714): "Search Unique ID" when adding relationships shows different behavior**  
Components: _[App] Capture_

**[DHIS2-18944](https://dhis2.atlassian.net/browse/DHIS2-18944): Deleting an Event in Event Programs Requires a Refresh to Update the View**  
Components: _[App] Capture_

**[DHIS2-19685](https://dhis2.atlassian.net/browse/DHIS2-19685): Program rule notification/message doesn't recognise data element**  
Components: _[App] Tracker capture_


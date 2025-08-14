# Patch 2.42.1 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-19208](https://dhis2.atlassian.net/browse/DHIS2-19208): Min-max data element batch API**  
Components: _[API] Data value set_

**[DHIS2-19317](https://dhis2.atlassian.net/browse/DHIS2-19317): Notifier - Setting to limit messages per Job**  
Components: _[API] Other_

**[DHIS2-18624](https://dhis2.atlassian.net/browse/DHIS2-18624): Automatically verify emails when using invite by email link**  
Components: _[API] Security_

**[DHIS2-7079](https://dhis2.atlassian.net/browse/DHIS2-7079): Frontend validation when adding new events in locked periods**  
Components: _[App] Capture_

**[DHIS2-19190](https://dhis2.atlassian.net/browse/DHIS2-19190): Org. unit context selector read-only**  
Components: _[App] Capture_

**[DHIS2-18382](https://dhis2.atlassian.net/browse/DHIS2-18382): Replace TE org.unit with the owner org. unit in WorkingList**  
Components: _[App] Capture_

**[DHIS2-10134](https://dhis2.atlassian.net/browse/DHIS2-10134): Disable fallback when the TEType do not have searchable attributes**  
Components: _[App] Capture_

**[DHIS2-16991](https://dhis2.atlassian.net/browse/DHIS2-16991): Add x/clear button to TEA/DEs of Date and Date & Time value type**  
Components: _[App] Capture_

## Bugs

**[DHIS2-18324](https://dhis2.atlassian.net/browse/DHIS2-18324): [DATA EXCHANGE API]: Scheduled data exchange jobs do not run**  
Components: _[API] Aggregate Data Exchange_, _[API] Job scheduler_

**[DHIS2-19028](https://dhis2.atlassian.net/browse/DHIS2-19028): Sorting of the Excel / CSV file when downloaded from Data Visualizer**  
Components: _[API] Analytics_

**[DHIS2-19548](https://dhis2.atlassian.net/browse/DHIS2-19548): NPE in Maps API**  
Components: _[API] Analytics_

**[DHIS2-18295](https://dhis2.atlassian.net/browse/DHIS2-18295): [api/dataEntry/dataSetCompletion]: endpoint does not check compulsory data element operands**  
Components: _[API] Data Entry_

**[DHIS2-11925](https://dhis2.atlassian.net/browse/DHIS2-11925): Data value export to XML with compression creates empty archive**  
Components: _[API] Data value set_

**[DHIS2-19531](https://dhis2.atlassian.net/browse/DHIS2-19531): Gist API - Links do not consider context path**  
Components: _[API] Metadata Gist_

**[DHIS2-15604](https://dhis2.atlassian.net/browse/DHIS2-15604): Import report showing incorrect ignore value when validation errors**  
Components: _[API] Metadata import-export_

**[DHIS2-19455](https://dhis2.atlassian.net/browse/DHIS2-19455): User selected order of periods (any type) not respected in Visualization**  
Components: _[API] Other_

**[DHIS2-19606](https://dhis2.atlassian.net/browse/DHIS2-19606): Settings - allow field filtering**  
Components: _[API] Other_

**[DHIS2-19217](https://dhis2.atlassian.net/browse/DHIS2-19217): [api metadata sort]: lastUpdated does not accept iasc,**  
Components: _[API] Other_

**[DHIS2-19396](https://dhis2.atlassian.net/browse/DHIS2-19396): Assign null value to a data element representing an option set is failing**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-18848](https://dhis2.atlassian.net/browse/DHIS2-18848): Adding program rules to a program without previous rules does not work**  
Components: _[API] Program rules_

**[DHIS2-19587](https://dhis2.atlassian.net/browse/DHIS2-19587): Azure OIDC lacking issuer uri**  
Components: _[API] Security_

**[DHIS2-19259](https://dhis2.atlassian.net/browse/DHIS2-19259): Rename DB table userinfo index on openid field with typo**  
Components: _[API] Security_

**[DHIS2-19347](https://dhis2.atlassian.net/browse/DHIS2-19347): /tracker/trackedEntities?filter does not use numeric value semantics**  
Components: _[API] Tracker_

**[DHIS2-19694](https://dhis2.atlassian.net/browse/DHIS2-19694): Unique attribute uses LIKE when filtering in working list in Capture**  
Components: _[API] Tracker_, _[App] Capture_

**[DHIS2-19684](https://dhis2.atlassian.net/browse/DHIS2-19684): TE not visible after breaking the glass**  
Components: _[API] Tracker_

**[DHIS2-19595](https://dhis2.atlassian.net/browse/DHIS2-19595): Event exporter pagination is broken when TE is enrolled in more than one program**  
Components: _[API] Tracker_

**[DHIS2-17679](https://dhis2.atlassian.net/browse/DHIS2-17679): Value of a TEA of valuetype AGE is not validated (it is possible to add wrong dates), and it breaks the analytics.**  
Components: _[API] Tracker_

**[DHIS2-19331](https://dhis2.atlassian.net/browse/DHIS2-19331): Tracker filter allows binary operator without value after a unary operator**  
Components: _[API] Tracker_

**[DHIS2-18741](https://dhis2.atlassian.net/browse/DHIS2-18741): List of authorities contains duplicates**  
Components: _[API] User_

**[DHIS2-19677](https://dhis2.atlassian.net/browse/DHIS2-19677): Links in the release notes do not open in global shell**  
Components: _[App] App management_, _[App] Global Shell_

**[DHIS2-19647](https://dhis2.atlassian.net/browse/DHIS2-19647): Clicking "View event" breadcrumb in Edit event always shows "Discard changes" warning**  
Components: _[App] Capture_

**[DHIS2-11104](https://dhis2.atlassian.net/browse/DHIS2-11104): Translations missing for some fields in capture app**  
Components: _[App] Capture_

**[DHIS2-11847](https://dhis2.atlassian.net/browse/DHIS2-11847): Critical alert bar should be displayed on failure**  
Components: _[App] Capture_

**[DHIS2-18951](https://dhis2.atlassian.net/browse/DHIS2-18951): "Error encountered during field validation" when registering TE with unique, searchable PTEA**  
Components: _[App] Capture_

**[DHIS2-19467](https://dhis2.atlassian.net/browse/DHIS2-19467): Save button not working due to Program Rules valid state missing**  
Components: _[App] Capture_

**[DHIS2-18839](https://dhis2.atlassian.net/browse/DHIS2-18839): TEA with number option set value does not show in Profile widget on Capture App**  
Components: _[App] Capture_

**[DHIS2-19011](https://dhis2.atlassian.net/browse/DHIS2-19011): Forms Retain Previous Search Values After Navigation**  
Components: _[App] Capture_

**[DHIS2-18671](https://dhis2.atlassian.net/browse/DHIS2-18671): [Capture App] Discard changes dialog not responding**  
Components: _[App] Capture_

**[DHIS2-19172](https://dhis2.atlassian.net/browse/DHIS2-19172): | Capture app (web) |  Program stage's 'Report date to use' when event is auto-generated is blank and not set as configured**  
Components: _[App] Capture_

**[DHIS2-19441](https://dhis2.atlassian.net/browse/DHIS2-19441): TEA description value not being translated while editing a TEI**  
Components: _[App] Capture_

**[DHIS2-13236](https://dhis2.atlassian.net/browse/DHIS2-13236): Incorrect text on top of Profile widget**  
Components: _[App] Capture_

**[DHIS2-19307](https://dhis2.atlassian.net/browse/DHIS2-19307): Section containing data element not contained in program stage crashes app**  
Components: _[App] Capture_

**[DHIS2-19442](https://dhis2.atlassian.net/browse/DHIS2-19442): Edit title not being translated properly while editing a TEI**  
Components: _[App] Capture_

**[DHIS2-18854](https://dhis2.atlassian.net/browse/DHIS2-18854): Incorrect Display of Scheduled Events Count in Schedule Info Section**  
Components: _[App] Capture_

**[DHIS2-19262](https://dhis2.atlassian.net/browse/DHIS2-19262): [Datastore] App keeps showing deleted namespace**  
Components: _[App] Data store_

**[DHIS2-19466](https://dhis2.atlassian.net/browse/DHIS2-19466): Visualization name does not update immediately after a rename in Data Visualizer**  
Components: _[App] Data visualizer_, _[App] Line Listing_

**[DHIS2-19506](https://dhis2.atlassian.net/browse/DHIS2-19506): Renaming overwrites newer copy of visualization**  
Components: _[App] Data visualizer_, _[App] Line Listing_, _[App] Maps_

**[DHIS2-19533](https://dhis2.atlassian.net/browse/DHIS2-19533): Visualization canvas loading state wrong background color**  
Components: _[App] Data visualizer_

**[DHIS2-19402](https://dhis2.atlassian.net/browse/DHIS2-19402): Command palette shortcut navigation: selecting a shortcut navigates the whole page, when it could navigate just the loaded app**  
Components: _[App] Global Shell_

**[DHIS2-19255](https://dhis2.atlassian.net/browse/DHIS2-19255): Global Shell sometimes show version "undefined" if short name doesn't match app key**  
Components: _[App] Global Shell_

**[DHIS2-19631](https://dhis2.atlassian.net/browse/DHIS2-19631): Hovering on user profile in the header hover text is displayed "header bar profile"**  
Components: _[App] Global Shell_

**[DHIS2-19639](https://dhis2.atlassian.net/browse/DHIS2-19639): Fallback login is returning 500**  
Components: _[App] Login_

**[DHIS2-12149](https://dhis2.atlassian.net/browse/DHIS2-12149): Approval levels are not shown in order**  
Components: _[App] Maintenance_

**[DHIS2-19479](https://dhis2.atlassian.net/browse/DHIS2-19479): When renaming while in a different database language, the original name is lost because the translated name is used.**  
Components: _[App] Maps_

**[DHIS2-5920](https://dhis2.atlassian.net/browse/DHIS2-5920): Text overflow in event popups when having long data element names**  
Components: _[App] Maps_

**[DHIS2-19215](https://dhis2.atlassian.net/browse/DHIS2-19215): Event layers style by data item: handle new value types and missing data**  
Components: _[App] Maps_

**[DHIS2-19224](https://dhis2.atlassian.net/browse/DHIS2-19224): On save TE layer data become exclusive of last day**  
Components: _[App] Maps_

**[DHIS2-19522](https://dhis2.atlassian.net/browse/DHIS2-19522): When loading saved map the extent shown in the canvas not always show all layers**  
Components: _[App] Maps_

**[DHIS2-19281](https://dhis2.atlassian.net/browse/DHIS2-19281): Maps plugin not loading in offline dashboard**  
Components: _[App] Maps_

**[DHIS2-19357](https://dhis2.atlassian.net/browse/DHIS2-19357): Map doesn't load after user switch**  
Components: _[App] Maps_


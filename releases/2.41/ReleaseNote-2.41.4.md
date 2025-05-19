# Patch 2.41.4 Release Note

- [Features](#features)
- [Bugs fixed](#bugs)

## Features

**[DHIS2-18899](https://dhis2.atlassian.net/browse/DHIS2-18899): [Data Administration]: Update deprecated reference to softDeletedTrackedEntityInstanceRemoval**  
Components: _[API] Data administration_

**[DHIS2-18880](https://dhis2.atlassian.net/browse/DHIS2-18880): Notifier - minimum notification level setting**  
Components: _[API] Other_

**[DHIS2-18846](https://dhis2.atlassian.net/browse/DHIS2-18846): Notifier - add API endpoint to clear notifications of jobs**  
Components: _[API] Other_

**[DHIS2-18837](https://dhis2.atlassian.net/browse/DHIS2-18837): Support other authentication schemes for Route API**  
Components: _[API] Other_, _[App] Route Manager_

**[DHIS2-10134](https://dhis2.atlassian.net/browse/DHIS2-10134): Disable fallback when the TEType do not have searchable attributes**  
Components: _[App] Capture_

**[DHIS2-19190](https://dhis2.atlassian.net/browse/DHIS2-19190): Org. unit context selector read-only**  
Components: _[App] Capture_

**[DHIS2-18382](https://dhis2.atlassian.net/browse/DHIS2-18382): Replace TE org.unit with the owner org. unit in WorkingList**  
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

**[DHIS2-15466](https://dhis2.atlassian.net/browse/DHIS2-15466): Typing the date when editing enrollment- and incident-date**  
Components: _[App] Capture_

**[DHIS2-18746](https://dhis2.atlassian.net/browse/DHIS2-18746): Show org. unit selector in the edit event forms for Tracker programs**  
Components: _[App] Capture_

**[DHIS2-18018](https://dhis2.atlassian.net/browse/DHIS2-18018): Show related stages Widget in view event page**  
Components: _[App] Capture_

**[DHIS2-17192](https://dhis2.atlassian.net/browse/DHIS2-17192): Show related stages Widget on registration page**  
Components: _[App] Capture_

**[DHIS2-18641](https://dhis2.atlassian.net/browse/DHIS2-18641): Adjust map zoom level when entering/leaving fullscreen/slideshow of dashboard**  
Components: _[App] Dashboard_, _[App] Maps_

**[DHIS2-6647](https://dhis2.atlassian.net/browse/DHIS2-6647): Dashboard search/filtering, inform user of no returned results**  
Components: _[App] Dashboard_

**[DHIS2-19047](https://dhis2.atlassian.net/browse/DHIS2-19047): Maps app to provide access to enrollment coordinates for event maps**  
Components: _[App] Maps_

**[DHIS2-16823](https://dhis2.atlassian.net/browse/DHIS2-16823): Maps app: "timeline" bar blocking map view**  
Components: _[App] Maps_

## Bugs

**[DHIS2-19548](https://dhis2.atlassian.net/browse/DHIS2-19548): NPE in Maps API**  
Components: _[API] Analytics_

**[DHIS2-13925](https://dhis2.atlassian.net/browse/DHIS2-13925): Program indicators not outputting correct decimals**  
Components: _[API] Analytics_, _[App] Analytics_

**[DHIS2-18509](https://dhis2.atlassian.net/browse/DHIS2-18509): Visualizations fails for indicators with period-based criteria**  
Components: _[API] Analytics_, _[App] Data visualizer_

**[DHIS2-18845](https://dhis2.atlassian.net/browse/DHIS2-18845): Analytics event/enroll query: IN filter not working for Org. Unit DE**  
Components: _[API] Analytics_

**[DHIS2-18989](https://dhis2.atlassian.net/browse/DHIS2-18989): Analytics across TEI relationships with program indicators does not work**  
Components: _[API] Analytics_

**[DHIS2-18738](https://dhis2.atlassian.net/browse/DHIS2-18738): Analytics table not generated for the first week when registering weekly data**  
Components: _[API] Analytics_

**[DHIS2-12003](https://dhis2.atlassian.net/browse/DHIS2-12003): GET maps/data.png fails**  
Components: _[API] Analytics_

**[DHIS2-18957](https://dhis2.atlassian.net/browse/DHIS2-18957): Check for latest completeness analytics data query fails**  
Components: _[API] Analytics_

**[DHIS2-18185](https://dhis2.atlassian.net/browse/DHIS2-18185): 404s if custom apps are accessed without a trailing slash**  
Components: _[API] App management_

**[DHIS2-18666](https://dhis2.atlassian.net/browse/DHIS2-18666): [Indicator merge]: Duplicate reference kept in list of indicators in dataSet sections**  
Components: _[API] Data Entry_, _[Core] General_

**[DHIS2-19004](https://dhis2.atlassian.net/browse/DHIS2-19004): Prevent duplicate descriptions in data integrity checks**  
Components: _[API] Data Integrity_

**[DHIS2-15604](https://dhis2.atlassian.net/browse/DHIS2-15604): Import report showing incorrect ignore value when validation errors**  
Components: _[API] Metadata import-export_

**[DHIS2-17445](https://dhis2.atlassian.net/browse/DHIS2-17445): Import fails with TransientObjectException on LegendSet during export then import of Event Visualization**  
Components: _[API] Metadata import-export_

**[DHIS2-18947](https://dhis2.atlassian.net/browse/DHIS2-18947): Superusers cannot see or delete a private dashboard**  
Components: _[API] Metadata model_

**[DHIS2-19020](https://dhis2.atlassian.net/browse/DHIS2-19020): OU from merge shows in hierarchy root**  
Components: _[API] Metadata model_

**[DHIS2-18702](https://dhis2.atlassian.net/browse/DHIS2-18702): Error when deleting a program because there is a mapview associated that was not deleted**  
Components: _[API] Metadata model_

**[DHIS2-19455](https://dhis2.atlassian.net/browse/DHIS2-19455): User selected order of periods (any type) not respected in Visualization**  
Components: _[API] Other_

**[DHIS2-18842](https://dhis2.atlassian.net/browse/DHIS2-18842): Notifier - LOOP level items should be replaced by successive messages in redis**  
Components: _[API] Other_

**[DHIS2-17596](https://dhis2.atlassian.net/browse/DHIS2-17596): User cannot log off when they log in via OIDC when using linked accounts**  
Components: _[API] Other_

**[DHIS2-19396](https://dhis2.atlassian.net/browse/DHIS2-19396): Assign null value to a data element representing an option set is failing**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-18848](https://dhis2.atlassian.net/browse/DHIS2-18848): Adding program rules to a program without previous rules does not work**  
Components: _[API] Program rules_

**[DHIS2-15891](https://dhis2.atlassian.net/browse/DHIS2-15891): Impossibility of saving an event in Capture App, when there is a Program Rule Action associated to a data element with Date value type**  
Components: _[API] Program rules_, _[API] Tracker_

**[DHIS2-17959](https://dhis2.atlassian.net/browse/DHIS2-17959): MD Sync Failure [v2.40.4.1]**  
Components: _[API] Synchronization_, _[API] Tracker_

**[DHIS2-18961](https://dhis2.atlassian.net/browse/DHIS2-18961): Setting connection.schema=update interferes with flyway migrations**  
Components: _[API] System configuration_

**[DHIS2-19227](https://dhis2.atlassian.net/browse/DHIS2-19227): Change logs recorded even when disabled in config**  
Components: _[API] Tracker_

**[DHIS2-17679](https://dhis2.atlassian.net/browse/DHIS2-17679): Value of a TEA of valuetype AGE is not validated (it is possible to add wrong dates), and it breaks the analytics.**  
Components: _[API] Tracker_

**[DHIS2-19478](https://dhis2.atlassian.net/browse/DHIS2-19478): /tracker/events?filterAttributes operator in and like based fail on numbers and wildcards**  
Components: _[API] Tracker_

**[DHIS2-19092](https://dhis2.atlassian.net/browse/DHIS2-19092): Changelog does not show new values added to an existing event**  
Components: _[API] Tracker_

**[DHIS2-18877](https://dhis2.atlassian.net/browse/DHIS2-18877): Breaking the glass fails when program(s) accessible protected**  
Components: _[API] Tracker_

**[DHIS2-17806](https://dhis2.atlassian.net/browse/DHIS2-17806): Program Stage Notification not sent on 39 & 40 when there are multiple actions defined with Send Message for Program Rule**  
Components: _[API] Tracker_

**[DHIS2-19238](https://dhis2.atlassian.net/browse/DHIS2-19238): [Backport] Unidirectional relationships should only consider "from" end in the exporter**  
Components: _[API] Tracker_

**[DHIS2-19233](https://dhis2.atlassian.net/browse/DHIS2-19233): [Backport] Create new relationship in /relationships endpoint does not update TE lastupdated value**  
Components: _[API] Tracker_

**[DHIS2-19050](https://dhis2.atlassian.net/browse/DHIS2-19050): NPE when requesting TEs without a program in an instance with a TE return limit**  
Components: _[API] Tracker_

**[DHIS2-18621](https://dhis2.atlassian.net/browse/DHIS2-18621): d2:hasValue check doesn’t work when sending null, blocking enrollment**  
Components: _[API] Tracker_

**[DHIS2-19001](https://dhis2.atlassian.net/browse/DHIS2-19001): Importing an event results in a 500 error when a program rule assigns a value to a variable**  
Components: _[API] Tracker_

**[DHIS2-17864](https://dhis2.atlassian.net/browse/DHIS2-17864): Event and enrollment notes don't return storedAt time component on collection endpoints**  
Components: _[API] Tracker_

**[DHIS2-18655](https://dhis2.atlassian.net/browse/DHIS2-18655): Cannot switch accounts in v40.6.0**  
Components: _[API] User_

**[DHIS2-17803](https://dhis2.atlassian.net/browse/DHIS2-17803): Various crashes and hangs in 41-42 after creating a user group including the logged in user**  
Components: _[API] User_

**[DHIS2-19173](https://dhis2.atlassian.net/browse/DHIS2-19173): The pagination of the endpoint /api/validationResults is not working**  
Components: _[API] Validation_

**[DHIS2-19467](https://dhis2.atlassian.net/browse/DHIS2-19467): Save button not working due to Program Rules valid state missing**  
Components: _[App] Capture_

**[DHIS2-18582](https://dhis2.atlassian.net/browse/DHIS2-18582): Data element with number option set value does not show in stages & event widget on Capture App**  
Components: _[App] Capture_

**[DHIS2-19011](https://dhis2.atlassian.net/browse/DHIS2-19011): Forms Retain Previous Search Values After Navigation**  
Components: _[App] Capture_

**[DHIS2-18671](https://dhis2.atlassian.net/browse/DHIS2-18671): [Capture App] Discard changes dialog not responding**  
Components: _[App] Capture_

**[DHIS2-17152](https://dhis2.atlassian.net/browse/DHIS2-17152): Autogenerated events with "Open data entry form after enrollment" should have status SCHEDULE until saved**  
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

**[DHIS2-18952](https://dhis2.atlassian.net/browse/DHIS2-18952): Relationship widget and search page (general+relationships) should use form name**  
Components: _[App] Capture_

**[DHIS2-16918](https://dhis2.atlassian.net/browse/DHIS2-16918): Event relationship URL link is broken**  
Components: _[App] Capture_

**[DHIS2-19165](https://dhis2.atlassian.net/browse/DHIS2-19165): Can't edit an event missing schedule date**  
Components: _[App] Capture_

**[DHIS2-18326](https://dhis2.atlassian.net/browse/DHIS2-18326): App stuck in infinite loading state when deselecting orgUnit**  
Components: _[App] Capture_

**[DHIS2-18676](https://dhis2.atlassian.net/browse/DHIS2-18676): Capture: display error for age in the future in tracked entity in capture**  
Components: _[App] Capture_

**[DHIS2-18855](https://dhis2.atlassian.net/browse/DHIS2-18855): Program indicators without expressions break the capture app**  
Components: _[App] Capture_

**[DHIS2-18704](https://dhis2.atlassian.net/browse/DHIS2-18704): Registration form missing values**  
Components: _[App] Capture_

**[DHIS2-18714](https://dhis2.atlassian.net/browse/DHIS2-18714): "Search Unique ID" when adding relationships shows different behavior**  
Components: _[App] Capture_

**[DHIS2-18673](https://dhis2.atlassian.net/browse/DHIS2-18673): Capture: profile widget allows saving when validation errors are present**  
Components: _[App] Capture_

**[DHIS2-18571](https://dhis2.atlassian.net/browse/DHIS2-18571): Bulk operations: Modal says 50 when more than 50 enrollments are selected**  
Components: _[App] Capture_

**[DHIS2-15685](https://dhis2.atlassian.net/browse/DHIS2-15685): Viewing an event in Tracker Programs should be possible without selecting org. unit**  
Components: _[App] Capture_

**[DHIS2-18944](https://dhis2.atlassian.net/browse/DHIS2-18944): Deleting an Event in Event Programs Requires a Refresh to Update the View**  
Components: _[App] Capture_

**[DHIS2-16871](https://dhis2.atlassian.net/browse/DHIS2-16871): Fix requests that use semicolon as separator for UIDs**  
Components: _[App] Capture_

**[DHIS2-18876](https://dhis2.atlassian.net/browse/DHIS2-18876): Replace parameters deprecated in 2.41**  
Components: _[App] Capture_

**[DHIS2-18958](https://dhis2.atlassian.net/browse/DHIS2-18958): "Search in all programs" is missing a loading spinner**  
Components: _[App] Capture_

**[DHIS2-18902](https://dhis2.atlassian.net/browse/DHIS2-18902): Searching for a TEI in protected program (break the glass) exits the program context in top bar**  
Components: _[App] Capture_

**[DHIS2-18668](https://dhis2.atlassian.net/browse/DHIS2-18668): Possible to delete TE from event page**  
Components: _[App] Capture_

**[DHIS2-18836](https://dhis2.atlassian.net/browse/DHIS2-18836): Profile widget displays "false profile" when loading**  
Components: _[App] Capture_

**[DHIS2-18268](https://dhis2.atlassian.net/browse/DHIS2-18268): Data visualization issue with Nepal Implementation**  
Components: _[App] Data visualizer_

**[DHIS2-17876](https://dhis2.atlassian.net/browse/DHIS2-17876): Pivot table breaks when hideEmptyColumns is selected but hideEmptyRows is not**  
Components: _[App] Data visualizer_

**[DHIS2-19046](https://dhis2.atlassian.net/browse/DHIS2-19046): Sidebar dimension items content movement on :hover**  
Components: _[App] Data visualizer_

**[DHIS2-17934](https://dhis2.atlassian.net/browse/DHIS2-17934): Dimension chips lose styling when being dragged from the sidebar**  
Components: _[App] Data visualizer_

**[DHIS2-18929](https://dhis2.atlassian.net/browse/DHIS2-18929): [IMPORT/EXPORT]: clean up implementation of new tracker api endpoints**  
Components: _[App] Import-export_

**[DHIS2-12067](https://dhis2.atlassian.net/browse/DHIS2-12067): First value (averge in org unit hierarchy) - typo**  
Components: _[App] Maintenance_

**[DHIS2-18365](https://dhis2.atlassian.net/browse/DHIS2-18365): Mandatory Attribute not being respected as Mandatory**  
Components: _[App] Maintenance_, _[App] User_, _[Core] Attributes_

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

**[DHIS2-17711](https://dhis2.atlassian.net/browse/DHIS2-17711): Name of data element used for styling event disappears in pop-up after saving**  
Components: _[App] Maps_

**[DHIS2-19008](https://dhis2.atlassian.net/browse/DHIS2-19008): When a popup is open in a timeline map, the period is updated but not the value**  
Components: _[App] Maps_

**[DHIS2-17710](https://dhis2.atlassian.net/browse/DHIS2-17710): "Coordinate field" defaults to "Event location" whenever the "Data" tab of "Edit event layer" is opened**  
Components: _[App] Maps_

**[DHIS2-18312](https://dhis2.atlassian.net/browse/DHIS2-18312): TE Layer won't load - Select Data > Program, Period > Enrollment and change back Data > Program to None**  
Components: _[App] Maps_

**[DHIS2-18495](https://dhis2.atlassian.net/browse/DHIS2-18495): Initial map view in the timeline map does not cover all areas (polygons) that have data, resulting in them not being displayed within the map boundaries**  
Components: _[App] Maps_

**[DHIS2-19204](https://dhis2.atlassian.net/browse/DHIS2-19204): Switching to start-end date in saved map causes app crash**  
Components: _[App] Maps_

**[DHIS2-15704](https://dhis2.atlassian.net/browse/DHIS2-15704): Password validation needs to be consistent with the backend**  
Components: _[App] User_, _[App] User Profile_

**[DHIS2-18358](https://dhis2.atlassian.net/browse/DHIS2-18358): Two-factor Authentication doesn't work if Application title is not English alphabet character**  
Components: _[App] User Profile_

**[DHIS2-18460](https://dhis2.atlassian.net/browse/DHIS2-18460): system.session.timeout not enforced when using a cluster and Redis**  
Components: _[Core] General_


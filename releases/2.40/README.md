# 2.40 Upgrade Notes

## Update Dashboard 
- From 2.40 when updating a `Dashboard`, user is required to have `METADATA_WRITE` permission to the `Dashboard` itself and `METADATA_READ` permission to all referenced objects in all `DashboardItems`. The Administrator can use function [Cascade sharing](https://docs.dhis2.org/en/use/user-guides/dhis-core-version-master/analysing-data/dashboards.html#cascade-sharing-of-visualizations-on-the-dashboard) in order to grant required sharing permissions when needed. 

## Line Listing/Analytics
- A new column (ounamehierarchy) was added to events and enrollments analytics tables. A full export of analytics tables is required in order to make analytics queries work correctly, for events and enrollments.

- Now, the dates related to the time dimension "Last updated on" will also take into consideration the last updated date used by mobile or other API clients. Basically, the rule being applied is: if there is a "last updated" date persisted by the client/mobile, this date will take precedence in analytics queries, and will be used by the "Last updated on" dimension. Otherwise, it will use the default/usual server-side "last updated" date.

- The time dimension "Event date", which represents the execution date and can assume different names depending on the program/stage (ie. "Report date", "Event date", "Visit date", etc.), will now display the timestamp along with the date. This will give more precision to the client/mobile applications if needed. If no timestamp is set, it will be displayed with zeros.

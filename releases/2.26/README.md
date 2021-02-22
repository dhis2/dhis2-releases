# DHIS 2.26 Upgrade Notes

## Database
- Run the [upgrade script](https://github.com/dhis2/dhis2-utils/blob/master/resources/sql/upgrade-226.sql).

## System Administration

- A new authority **View event analytics** (F_VIEW_EVENT_ANALYTICS) has been introduced, which controls whether the user should be able to view event reports and event charts through the event analytics Web API endpoint.
- The system setting for hiding unapproved data in analytics has been moved to a new **analytics** system settings section, and renamed to **max number of years to hide unapproved data in analytics**. This provides greater control and allows you to automatically show data after a given number of years, as well as pruning the data approval table for better performance.

## Web API

- The Expression - **dataElementsInExpression** association has been removed from the API and data model.
- When POSTing data elements, data sets and programs one can omit the category combo if it is "default". The default category combo will be injected by if omitted.


## User Interface

- Validation rule management has been moved from the Data quality app to the Maintenance app.
- Messaging and interpretations have been split out from the dashboard app and turned into separate apps.

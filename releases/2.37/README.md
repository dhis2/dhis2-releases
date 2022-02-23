# 2.37 Upgrade Notes

## Database

## API

- The `/api/userCredentials` API endpoint is removed. API users should use the `/api/users` and `/api/userLookup` API endpoints instead.
- The APIs related to charts (`/api/charts`) and report tables (`/api/reportTables`) are removed. Consumers should use the Visualization API instead (`/api/visualizations`). Other existing endpoints that make any kind of reference to Chart and Report Table will now reference Visualization.
- `GET /systemSettings` returning JSONP (`Accept=application/javascript`) was removed

## Authorities

- The existing `F_GENERATE_MIN_MAX_VALUES` authority is now required to generate min-max values in the data administration app. Previously `F_PERFORM_MAINTENANCE` was required.
- Creating data approval levels requires the `F_DATA_APPROVAL_LEVEL` authority.
- Creating data approval workflows requires the `F_DATA_APPROVAL_WORKFLOW` authority.

## Audit

In 2.38 we will be changing the default location of audits from the database to a logfile called `dhis-audits.log`. If you don't want this
behavior and want to be futureproof it's recommended that you add these lines to your `dhis.conf`:

```
audit.database = on
audit.logger = off
```

## Future API changes
Please note that from 2.38 onwards several API endpoints slightly change
their response root object to be in line with the majority of endpoints.
The root object returned pre 2.38 will become the member named `response`
of the root object returned by 2.38. Consumers can opt to either use
`/api/37/...` to get the old behaviour or have to unpack to new response
by doing `<root>.response` to resolve the old root from the 2.38 response.
In case of error responses this also entails an HTTP status code change from `200 OK` to `409 Conflict`.

Affected endpoints are:

- `POST /api/completeDataSetRegistrations` with `JSON`/`XML` (only non `async` affected)
- `POST /api/dataValueSets` with `JSON`/`XML`/`ADX`/`CSV` (only non `async` affected)
- `POST /api/metadata` with `JSON`/`XML`/`GML`/`CSV` (only non `async` affected)
- `POST /api/predictions` (only non `async` affected)
- `PUT /api/predictions` (only non `async` affected)
- `PUT /api/relationships/{id}`
- `PUT /api/users/{uid}` with `JSON`/`XML`

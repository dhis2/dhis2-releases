# 2.37 Upgrade Notes

## Database

## API

- The `/api/userCredentials` API endpoint is removed. API users should use the `/api/users` and `/api/userLookup` API endpoints instead.
- The APIs related to Charts and Report Tables were removed. Users should starting using the Visualization API instead (`/api/visualizations`). Other existing endpoints that make any kind of reference to Chart and Report Table will now reference Visualization. Please see the documentation, of this release, for more details about visualizations.

## Authorities

- The existing `F_GENERATE_MIN_MAX_VALUES` authority is now required to generate min-max values in the data administration app. Previously `F_PERFORM_MAINTENANCE` was required.

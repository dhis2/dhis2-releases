# 2.37 Upgrade Notes

## Database

## API

- The `/api/userCredentials` API endpoint is removed. API users should use the `/api/users` and `/api/userLookup` API endpoints instead.

## Authorities

- The existing `F_GENERATE_MIN_MAX_VALUES` authority is now required to generate min-max values in the data administration app. Previously `F_PERFORM_MAINTENANCE` was required.

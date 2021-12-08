# 2.38 Upgrade Notes

## Database

## API

- Running jobs manually using `/api/jobConfigurations/execute` changed from 
  `GET` to `POST` request
- Program id is now mandatory for program stage. Affected endpoints: /programStages, /metadata
- Several API endpoints slightly change their response root object to be consistent with the rest of endpoints. The root object returned pre 2.38 will become the member named response of the root object returned by 2.38. Consumers can opt to either use /api/37/... to get the old behaviour or have to unpack to new response by doing <root>.response to resolve the old root from the 2.38 response. In case of error responses this also entails an HTTP status code change from 200 OK to 409 Conflict.

Affected endpoints:

POST /api/completeDataSetRegistrations with JSON/XML (only non async affected)
POST /api/dataValueSets with JSON/XML/ADX/CSV (only non async affected)
POST /api/metadata with JSON/XML/GML/CSV (only non async affected)
POST /api/predictions (only non async affected)
PUT /api/predictions (only non async affected)
PUT /api/relationships/{id}
PUT /api/users/{uid} with JSON/XML
## Authorities


## Audit


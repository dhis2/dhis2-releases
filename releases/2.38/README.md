# 2.38 Upgrade Notes

## Java Support

Starting with DHIS 2.38, Java JDK version 11 is required. This means that you cannot use Java 8 anymore when deploying DHIS 2.38 onwards.

Java 11 has been supported for DHIS 2 since version 2.35. This means that you can upgrade your server to JDK 11 while still running DHIS 2.35 or later in preparation for the DHIS 2.38 upgrade. Java 11 has proven to be reliable and significantly faster for DHIS 2.

As always, we recommend using an OpenJDK distribution of Java, due to the free and open source nature. OpenJDK 11 distributions are available on all major operating systems and is the default JDK on Ubuntu 20.04 LTS.

## Database

## API

- Running jobs manually using `/api/jobConfigurations/execute` changed from 
  `GET` to `POST` request
- Program id is now mandatory for program stage. Affected endpoints: /programStages, /metadata
- Several API endpoints slightly change their response root object to be in line 
  with the majority of endpoints.
  The root object returned pre 2.38 will become the member named `response`
  of the new root object returned by 2.38. Consumers can opt to either use
  `/api/37/...` to get the old behaviour or have to unpack to new response
  by doing `<root>.response` to resolve the previous root from the 2.38 
  response.
 
  > **NOTE**
  > 
  > In case of error responses this also entails an HTTP status code 
  change from `200 OK` to `409 Conflict`.
  
  Affected endpoints are:

  - `POST /api/completeDataSetRegistrations` with `JSON`/`XML` (only non 
   `async` affected)
  - `POST /api/dataValueSets` with `JSON`/`XML`/`ADX`/`CSV` (only non `async` affected)
  - `POST /api/metadata` with `JSON`/`XML`/`GML`/`CSV` (only non `async` affected)
  - `POST /api/predictions` (only non `async` affected)
  - `PUT /api/predictions` (only non `async` affected)
  - `PUT /api/relationships/{id}`
  - `PUT /api/users/{uid}` with `JSON`/`XML`

## Authorities


## Audit


# 2.38 Upgrade Notes

## Java Support

Starting with DHIS 2.38, Java JDK version 11 is required. This means that Java 8 is no longer supported.

Java 11 has been supported for DHIS 2 since version 2.35. This means that you can upgrade your server to JDK 11 while still running DHIS 2.35 or later in preparation for the DHIS 2.38 upgrade. Java 11 has proven to be reliable and significantly faster for DHIS 2 in production.

As always, we recommend using an OpenJDK distribution of Java, due to the free and open source nature. OpenJDK 11 distributions are available on all major operating systems and is the default JDK on Ubuntu 20.04 LTS.

## Database

- All legacy metadata attribute values tables are now removed. Those tables have `*attributevalues` postfix such as `categoryattributevalues` or `datasetattributevalues`.
- In table `sqlview`, `not-null` constraints have been added to the `type` and `cachestrategy` columns.
- The table `users` are removed, and its data are migrated into the `userinfo` table. (This does not affect the API, which maintains backward compatibility)
- For adding trigram indexes and compounding it with primitive column types, two extensions have to be created in the database. The extensions are already part of the default posgresql installation. Extensions:
- In table `programrulevariable`,  the `not-null` column `valuetype` of type `character varying(50)` has been added with default value TEXT. Program Rule Variables of column CALCULATED_VALUE, which store a numeric value, should be reviewed and `valuetype` property should be updated accordingly.

 ```
 create extension pg_trgm;
 create extension btree_gin;
 ```

## API

- Running jobs manually using `/api/jobConfigurations/execute` changed from using the `GET` to the `POST` request method.
- Program ID is now mandatory for program stage. Affected endpoints are `/programStages`, `/metadata`.
- The `GET /systemSettings` endpoint returning JSONP (`Accept=application/javascript`) has been removed.
- Several API endpoints slightly change their response root object to be in line with the majority of endpoints. The root object returned prior to 2.38 will become the member named `response`  of the new root object returned in 2.38. Consumers can opt to either use `/api/37/` to get the old behaviour or have to unpack to new response by doing `<root>.response` to resolve the previous root from the 2.38 response.
 
  > **NOTE**
  > 
  > In case of an error, responses will return HTTP status `409 Conflict` and not `200 OK`.
  
  Affected endpoints are:

  - `POST /api/completeDataSetRegistrations` with `JSON`/`XML` (only non 
   `async` affected)
  - `POST /api/dataValueSets` with `JSON`/`XML`/`ADX`/`CSV` (only non `async` affected)
  - `POST /api/metadata` with `JSON`/`XML`/`GML`/`CSV` (only non `async` affected)
  - `POST /api/predictions` (only non `async` affected)
  - `PUT /api/predictions` (only non `async` affected)
  - `PUT /api/relationships/{id}`
  - `PUT /api/users/{uid}` with `JSON`/`XML`

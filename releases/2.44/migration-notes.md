# DHIS2 Version 44 Migration Notes

Welcome to the migration notes for DHIS2 version 44.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [Inconsistent data](#inconsistent-data)
    - [Tracker](#tracker)
      - [Tracked entity value has encrypted value but no plain text value](#tracked-entity-value-has-encrypted-value-but-no-plain-text-value)
---
## Inconsistent data

### Tracker

### Tracked entity value has encrypted value but no plain text value

Support for marking tracked entity attributes as confidential has been removed in version 2.44. Attributes that were previously marked as confidential are automatically migrated to `skipAnalytics = true`, preserving their exclusion from analytics exports. 

The migration will fail if any attribute value exists only in encrypted form with no readable value. See below for how to detect and fix this before upgrading.


#### Checking for records with encrypted values only

 To identify any tracked entity attribute values that exist only in encrypted form, you can run the following SQL query. If it returns a value greater than 0, there are inconsistent records that must be resolved before upgrading:


```sql
SELECT COUNT(*)
FROM trackedentityattributevalue
WHERE encryptedvalue IS NOT NULL
AND (value IS NULL OR value = '');
```

#### Fixing records with encrypted values only

 There are 2 options to fix the data:

  - Populate the plain text value from the encrypted value. This requires access to the encryption key and must be done outside the database. Contact DHIS2 support if you need assistance recovering these values before upgrading.   
  - Completely remove the records. If the encrypted only values can be discarded, the following script permanently removes them:

```sql      
DELETE FROM trackedentityattributevalue
WHERE encryptedvalue IS NOT NULL
AND (value IS NULL OR value = '');
```
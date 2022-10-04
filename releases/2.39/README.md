# 2.39 Upgrade Notes

## Web Apps

* The previous data approval Struts-based web module is removed, and superseded by the React-based data approval web app.

## API
**Validations Metadata Attribute:** The validations will be applied when saving metadata objects with attribute values. Validation rules are defined according to the `Attribute.ValueType`. Most of those rules are straightforward, for instance an `Attribute.valueType` = `Number` will only accept digits. On the other hand, `Phone Number` has a generic validation rule = `"^[0-9+\\(\\)#\\.\\s\\/ext-]{6,50}$"`. As a result of this new validation feature, you might get errors when editing metadata objects which already have invalid attribute values. In that case please fix the values and save the object again.


**Old tracker APIs being deprecated:** In a future release, for all purposes except server-to-server sync, the old tracker APIs are getting deprecated. We encourage all apps and middleware/scripts do trasition over to the new endpoints as soon as possible. Server-to-server sync will still use the old endpoints for the forseeable future; this includes all calls that is made with the import strategy `SYNC`.
APIs to be deprecated (except `SYNC`) are:
```
- /api/trackedEntityInstances
- /api/enrollments
- /api/events
```
These endpoints have been replaced with the new tracker endpoint
```
- /api/tracker/
```

[Docs new tracker endpoint](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-238/new-tracker.html) | [Docs old tracker endpoints](https://docs.dhis2.org/en/develop/using-the-api/dhis-core-version-238/tracker.html)

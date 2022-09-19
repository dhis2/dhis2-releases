# 2.39 Upgrade Notes

## Web Apps

* The previous data approval Struts-based web module is removed, and superseded by the React-based data approval web app.

## API
* We have added validations Metadata Attribute. The validations will be applied when saving metadata objects with attribute values. Validation rules are defined according to the `Attribute.ValueType`. Most of those rules are straightforward, for instance an `Attribute.valueType` = `Number` will only accept digits. On the other hand, `Phone Number` has a generic validation rule = `"^[0-9+\\(\\)#\\.\\s\\/ext-]{6,50}$"`. As a result of this new validation feature, you might get errors when editing metadata objects which already have invalid attribute values. In that case please fix the values and save the object again.


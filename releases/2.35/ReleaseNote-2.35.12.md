# Patch 2.35.12 Release Note

  - [Important Information](#important-information)
  - [Bugs](#bugs)

## Important Information

This HOTFIX patch release reverts the fix for **[DHIS2-8868](https://jira.dhis2.org/browse/DHIS2-8868): Adding custom attribute to program indicator breaks metadata export** as that was found to result in a more critical issue in the case that a data elements with custom attributes is shared between multiple tracker programs.

## Bugs

**[DHIS2-12468](https://jira.dhis2.org/browse/DHIS2-12468): Error with custom attribute values for Program indicators.**  
Components: _[API] Metadata import-export_, _[API] Metadata model_

**[DHIS2-12636](https://jira.dhis2.org/browse/DHIS2-12636): Custom attributes on data elements break program export**  
Components: _[App] Tracker capture_


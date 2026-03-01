# DHIS2 version 43 Release Notes

- [Features](#features)
- [Bugs fixed](#bugs)

- ## Features

- ## Bugs
-
- **[DHIS2-20611](https://dhis2.atlassian.net/browse/DHIS2-20611): Enforce check on null usernames**  
Components: _[API] User_

Under certain circumstances, users may have a `null` username. In this version, we will disable 
such users and reasssign a username like `missing_uname_` + random UUID string. Additionally, a
database constraint will be added to prevent creation of users with a `null` username. 

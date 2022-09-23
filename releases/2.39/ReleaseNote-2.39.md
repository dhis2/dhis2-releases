# DHIS version 2.38 Release Note

---

## ANALYTICS FEATURES



---

## TRACKER AND EVENT FEATURES

### /tracker/events

Filter events based on some of their associated enrollment or tracked entity properties using new request parameters

* enrollmentEnrolledAfter - Start date for enrollment in the given program
* enrollmentEnrolledBefore - End date for enrollment in the given program
* enrollmentOccurredAfter - Start date for incident in the given program
* enrollmentOccurredBefore - End date for incident in the given program
* filterAttributes - Filters like `H9IlTX2X6SL:sw:A` for tracked entity attributes

In addition to existing `order` capabilities order now by `enrollmentStatus`, `enrolledAt`,
`occurredAt` and tracked entity attribute like `order=AuPLng5hLbE:asc`.

For more details see https://dhis2.atlassian.net/browse/DHIS2-13648

---

## PLATFORM FEATURES



---

### PLATFORM API FEATURES


---

## RELEASE INFO

|Release Information|Link|
| --- | --- |
|Download release and sample database|https://www.dhis2.org/downloads|
|Documentation|[https://docs.dhis2.org](https://docs.dhis2.org/)|
|Upgrade notes|[Upgrade notes on GitHub](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.38/README.md)|
|Full list of features and bugs|[Release Note](https://github.com/dhis2/dhis2-releases/blob/master/releases/2.38/ReleaseNote-2.38.0.md)|
|Source code on Github|https://github.com/dhis2|
|Demo instance|https://play.dhis2.org/2.38/|
|Docker image|`docker pull dhis2/core:2.38.0`|
|Docker Hub images|https://hub.docker.com/r/dhis2/core|
|Community forum|https://community.dhis2.org/|

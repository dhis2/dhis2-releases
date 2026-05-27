# DHIS2 Version 44 Upgrade Notes

Welcome to the upgrade notes for DHIS2 version 44.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**
>
> :warning: **Please ensure you have also read the upgrade notes from the [PREVIOUS RELEASE](../2.43/README.md), if upgrading from an earlier version**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [API Changes](#api-changes)
    - [Platform](#platform)
    - [Tracker](#tracker)
    - [Analytics](#analytics)
---

## API Changes

### Platform

### Tracker
The `storedBy` field has been removed from Notes, Tracked Entities, Enrollments, Events, and EventDataValues. For these objects, the existing `createdBy` field should be used instead, as it already provides the relevant user information. The only exception is EventDataValues, which expose this information through the `createdByUserInfo` field.

Please note that both `createdBy` and `createdByUserInfo` are set server-side, so no user input is required.

For TrackedEntityAttributeValues, the `storedBy` field is still available. However, it will now store the authenticated user instead of the user provided in the payload. This value is also set server-side, making the field effectively read-only.

### Analytics

# DHIS2 Version 43 Upgrade Notes

Welcome to the upgrade notes for DHIS2 version 43.

> **It is important to be familiar with the contents of these notes *before* attempting an upgrade.**
>
> :warning: **Please ensure you have also read the upgrade notes from the [PREVIOUS RELEASE](../2.42/README.md), if upgrading from an earlier version**

To help you navigate the document, here's a detailed table of contents.

## Table of Contents

  - [Prerequisits](#prerequisits)
  - [API Changes](#api-changes)
    - [Platform](#platform)
    - [Tracker](#tracker)
    - [Analytics](#analytics)
---
## Prerequisits

## API Changes

### Platform

### Analytics

### Tracker

#### Breaking Changes

The following changes have been made to Tracker error codes to improve accuracy and consistency:​
- Error code `E1084` has been removed. Depending on the context, the system will now return
the more appropriate error codes: `E1007` for attributes or `E1302` for data values.
- Error code `E1085` has also been removed. In its place, the system will return error code `E1007`.​

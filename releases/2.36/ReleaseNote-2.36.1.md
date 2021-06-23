# Patch 2.36.1 Release Note

## This is a security-only patch release

This patch fixes a vulnerability found on a previous patch release for this version of DHIS2.  
The affected patch versions are:

- 2.36.0

### Vulnerability scope

The system is vulnerable to attack only from users that are logged in to DHIS2, and there is no known way of exploiting the vulnerability without first being logged in as a DHIS2 user. 

The vulnerability will never be exposed to a non-malicious user - the vulnerability requires a conscious attack to be exploited.

A successful exploit of this vulnerability could allow a malicious user to read, edit and delete data in the DHIS2 instance. 

#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
usage: manageTests.py [-h] -u USER -p PASSWORD -l LABEL -z '<ZQL expression>'

Find all tests matching a ZQL filter and apply a label.

arguments:
  -h, --help            show this help message and exit
  -u USER, --user USER  Jira user
  -p PASSWORD, --password PASSWORD
                        Jira password
  -l LABEL, --label LABEL
                        Label to apply to issues
  -z ZQL, --zql ZQL     ZQL query

"""

from jira import JIRA
from pprint import pprint
import argparse
import requests

parser = argparse.ArgumentParser(description='Find all tests matching a ZQL filter and apply a label.')
parser.add_argument('-z','--zql', action="store", help='ZQL query', required=True)
parser.add_argument('-l','--label', action="store", help='Label to append', required=True)
parser.add_argument('-u','--user', action="store", help='Jira user', required=True)
parser.add_argument('-p','--password', action="store", help='Jira password', required=True)
args = parser.parse_args()


options = {
    'server': 'https://jira.dhis2.org'}
jira = JIRA(options,auth=(args.user, args.password))

zql = args.zql # 'executionStatus != "UNEXECUTED" AND executedBy = "haroon"  OR executedBy = "hella"'
label = args.label

print(zql)

r = requests.get('https://jira.dhis2.org/rest/zapi/latest/zql/executeSearch?maxRecords=500&zqlQuery='+zql, auth=(args.user, args.password))

if r.status_code == 200:
    executions = r.json()
    #print(executions)

    issues = []

    for e in executions['executions']:
        iKey = e['issueKey']
        if iKey not in issues:
            issues.append(iKey)
            issue = jira.issue(iKey)
            issue.fields.labels.append(label)
            issue.update(fields={"labels": issue.fields.labels})
            print(iKey,issue.fields.labels)


else:
    print("Query failed.")



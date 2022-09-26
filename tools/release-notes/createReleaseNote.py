#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
usage: createReleaseNote.py [-h] -u USER -p PASSWORD patch

Create a simple release note for DHIS 2, based on Jira Fix Version.

positional arguments:
  patch                 Patch ID. e.g. 2.32.2

optional arguments:
  -h, --help            show this help message and exit
  -u USER, --user USER  Jira user
  -p PASSWORD, --password PASSWORD
                        Jira password
"""


from jira import JIRA
from pprint import pprint
import argparse

parser = argparse.ArgumentParser(description='Create a simple release note for DHIS 2, based on Jira Fix Version.')
parser.add_argument('version', action="store", help='Patch ID. e.g. 2.32.2')
parser.add_argument('-u','--user', action="store", help='Jira user', required=True)
parser.add_argument('-p','--password', action="store", help='Jira password', required=True)
args = parser.parse_args()


options = {
    'server': 'https://dhis2.atlassian.net'}
jira = JIRA(options,basic_auth=(args.user, args.password))

release= args.version[0:4]
outfile="../../releases/"+release+"/ReleaseNote-"+args.version+".md"
apifile= open(outfile,'w')
notdone="notdone.txt"
notdonefile= open(notdone,'w')



apifile.write('# Patch '+args.version+' Release Note'+'\n\n')
apifile.write('- [Features](#features)\n- [Bugs](#bugs)\n\n')

cl = "===CLOSED\n"

for type in ["Feature","Bug"]:
    #
    apifile.write('## '+type+'s''\n\n')
    cnt=0
    fallback_version = ""
    if args.version[5] == '0':
        fallback_version = ' or fixVersion = '+args.version[0:4]
    else:
        for prev in range(int(args.version[5])):
            fallback_version += ' and not fixVersion = '+args.version[0:5]+str(prev)
    jql='project = DHIS2 AND type = '+type+' AND (fixVersion = '+args.version+fallback_version+') ORDER BY component ASC, updated DESC'
    print(jql)
    for issue in jira.search_issues(jql,maxResults=1000):
        cnt+=1
        comp=""
        for c in issue.fields.components:
            comp+= "_"+c.name+"_, "
        apifile.write('**[{}]({}): {}**  \n'.format(issue.key,issue.permalink(), issue.fields.summary.rstrip()))
        #apifile.write('>{}\n'.format(issue.fields.description))
        if issue.fields.status.name != "Done":
            if issue.fields.status.name != "Closed":
                apifile.write('Components: {}\n\n'.format(comp[:-2]))
                notdonefile.write('{}: {} - {}\n'.format(issue.fields.status.name,issue.key,issue.permalink(), issue.fields.summary.rstrip()))
            else:
                cl += '{}: {} - {}\n'.format(issue.fields.status.name,issue.key,issue.permalink(), issue.fields.summary.rstrip())
        else:
            apifile.write('Components: '+comp[:-2]+'\n\n')


apifile.close()
notdonefile.write(cl)
notdonefile.close()

print("Output to:",outfile)

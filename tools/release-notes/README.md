# DHIS2 Simple Jira-based Release Note generator

## Usage

```
# The first time, you need to set up the python3 venv:

source setup_venv

# then...

python3 createReleaseNote.py -u USER -p PASSWORD version
```

- `USER`: Jira user name  
- `PASSWORD`: Jira password  
- `version`: should be in the form `2.<release>.<patch>`  

The release note will be output as:
```
../../releases/<release>/ReleaseNote-<version>.md
```
Check and edit as necessary before pushing to github!

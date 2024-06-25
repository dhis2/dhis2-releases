import requests
import re
import json
import os

# This script fetches the release notes for the DHIS2 apps from GitHub and
# categorizes the commits based on the commit message. The output is written
# to a JSON file.

# get the list of apps from the apphub
# https://apps.dhis2.org/api/v2/apps?pageSize=1000
apphub = requests.get("https://apps.dhis2.org/api/v2/apps?pageSize=1000").json()


# save to a file
with open("website/data/apphub.json", "w") as f:
    json.dump(apphub, f, indent=2)

# filter the list of apps to only those that have developer.organisation == "DHIS2"
apps = [app for app in apphub["result"] if app["developer"]["organisation"] in ["DHIS2","UiO"] and app["sourceUrl"] != '']
# appnames = [app["name"] for app in apphub["result"] if (app["developer"]["organisation"] == "DHIS2" and not app["sourceUrl"])]
print(apps)
# print(appnames)

# Configuration
categories_config = {
    "feat": "Features",
    "fix": "Bug Fixes",
    "test": "Testing",
    # "ci": "Build Updates",
    # "docs": "Documentation",
    # "refactor": "Refactoring",
    "perf": "Performance",
    # "chore": "Maintenance",
}
# apps = ["data-visualizer-app"]
base_url = "https://api.github.com/repos/dhis2"
output_file = "website/data/app_releases.json"

# Initialize the output dictionary
output = {}

# authorization headers
headers = {
    'Authorization': 'Bearer ' + os.environ['GITHUB_TOKEN'],
}   


# Function to fetch tags from the GitHub repository
def fetch_tags(app):
    url = f"{base_url}/{app}/tags"
    print(url)
    response = requests.get(url, headers=headers)
    print(app,response.json())
    return [tag['name'] for tag in response.json() if tag['name'].startswith('v100')]

# Function to fetch and categorize commits between two tags
def fetch_and_categorize_commits(app, from_tag, to_tag):
    url = f"{base_url}/{app}/compare/{from_tag}...{to_tag}"
    response = requests.get(url, headers=headers)
    commits = response.json().get('commits', [])
    categories = {}
    for commit in commits:
        raw_message = commit['commit']['message']
        for line in raw_message.split('\n'):
            for pattern, category in categories_config.items():
                full_pattern = '^[* ]*'+pattern+'(:|\([^:]+\):)'
                if re.search(full_pattern, line, re.I):
                    match = re.search(r'\(([^)]+)\):', line)
                    replacement = match.group(1)+':' if match else ''
                    processed_line = re.sub(full_pattern, replacement, line, flags=re.I).strip()
                    categories.setdefault(category, set()).add(processed_line)
    
    # Filter out substrings
    for category, messages in categories.items():
        filtered_messages = set()
        for msg in messages:
            if not any(msg != other_msg and msg in other_msg for other_msg in messages):
                filtered_messages.add(msg)
        categories[category] = filtered_messages
    
    return categories

# Iterate over the apps and fetch the categorized commit messages
for appie in apps:
    app = appie["sourceUrl"].strip('/').split('/')[-1]
    tags = fetch_tags(app)
    app_output = {}
    for i in range(len(tags) - 1):
        from_tag = tags[i + 1]
        to_tag = tags[i]
        categories = fetch_and_categorize_commits(app, from_tag, to_tag)
        version_output = {}
        for category, messages in categories.items():
            version_output[category] = list(messages)
        app_output[to_tag] = version_output

        # update the apphub object with the release notes
        # find the versions object and identify the index of the version
        versions = appie.get("versions", [])
        print(app, versions, to_tag.replace("v",""))
        for v in versions:
            if v["version"] == to_tag.replace("v",""):
                # add the release notes to the versions object
                v["releaseNotes"] = version_output


    output[app] = app_output

with open("website/data/apphub.json", "w") as f:
    json.dump(apphub, f, indent=2)

# Write the output to a JSON file
with open(output_file, 'w') as f:
    json.dump(output, f, indent=2)

print(f"Output written to {output_file}")

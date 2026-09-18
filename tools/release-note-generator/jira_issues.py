# Fetches the issues fixed in a DHIS2 patch from Jira, by fix version, leaving
# out issues that already shipped in an earlier patch of the same release line.

import re
from dataclasses import dataclass

from jira import JIRA

JIRA_SERVER = "https://dhis2.atlassian.net"
PROJECT = "DHIS2"
ISSUE_TYPES = ("Feature", "Bug")
DONE_STATUSES = ("Done", "Closed")
ISSUE_FIELDS = "summary,status,components"

# The issue trackers whose keys appear in DHIS2 commit messages.
ISSUE_KEY_PATTERN = r"(?:DHIS2|LIBS|TECH|ANDROID)-[0-9]+"
ISSUE_KEY = re.compile(r"\b" + ISSUE_KEY_PATTERN + r"\b")


@dataclass(frozen=True)
class Issue:
    key: str
    url: str
    summary: str
    status: str
    components: tuple

    @property
    def is_done(self):
        """Whether the issue reached a state that belongs in a published note."""
        return self.status in DONE_STATUSES


def connect(email, token):
    return JIRA({"server": JIRA_SERVER}, basic_auth=(email, token))


def build_jql(issue_type, version, earlier_patches):
    """JQL for the issues of one type fixed in `version` but in no earlier patch.

    An issue can carry several fix versions, so one fixed in 2.42.5 may also be
    tagged 2.42.1; excluding the earlier patches keeps it in the note that first
    shipped it.
    """
    if version.patch == 0 and version.hotfix is None:
        # The first patch of a release line ships everything targeted at the line.
        fix_version = f'fixVersion in ("{version}", "{version.release}")'
    else:
        fix_version = f'fixVersion = "{version}"'

    clauses = [f"project = {PROJECT}", f'type = "{issue_type}"', fix_version]
    if earlier_patches:
        shipped = ", ".join(f'"{patch}"' for patch in earlier_patches)
        clauses.append(f"fixVersion not in ({shipped})")
    return " AND ".join(clauses) + " ORDER BY component ASC, updated DESC"


def fetch_issues(client, issue_type, version, earlier_patches):
    """Every issue of one type fixed in `version`, with the JQL that found them."""
    jql = build_jql(issue_type, version, earlier_patches)
    results = client.enhanced_search_issues(jql, fields=ISSUE_FIELDS, maxResults=False)
    issues = [
        Issue(
            key=issue.key,
            url=issue.permalink(),
            summary=issue.fields.summary.rstrip(),
            status=issue.fields.status.name,
            components=tuple(component.name for component in issue.fields.components),
        )
        for issue in results
    ]
    return jql, issues

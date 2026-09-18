# Collects the commits an app gained between two of its released versions and
# groups the messages by conventional-commit type.

import re

from bundled_apps import SOURCE_ORG
from jira_issues import ISSUE_KEY

FEATURES = "Features"
BUG_FIXES = "Bug Fixes"

CONVENTIONAL_TYPES = {
    "feat": FEATURES,
    "fix": BUG_FIXES,
    "perf": "Performance",
    "refactor": "Refactoring",
    "docs": "Documentation",
    "test": "Testing",
    "ci": "Build Updates",
    "chore": "Maintenance",
}

# Categories a release note reports, in the order they appear under each app.
# Anything else describes the app's internals and is left out.
REPORTED_CATEGORIES = (
    FEATURES,
    BUG_FIXES,
    "Performance",
    "Refactoring",
    "Documentation",
)

# Themes worth naming when an app's changes carry no tracked issue. The patterns
# are matched across every category, so a dependency bump filed as a chore still
# counts; the categories are read afterwards, on whatever the patterns left.
THEME_PATTERNS = (
    ("new translations", re.compile(r"translat|transifex", re.I)),
    ("dependency updates", re.compile(r"\bbump\b|\bdeps\b|dependenc", re.I)),
)
CATEGORY_THEMES = (
    (FEATURES, "minor improvements"),
    (BUG_FIXES, "minor bug fixes"),
    ("Performance", "performance improvements"),
    ("Documentation", "documentation updates"),
)

COMMITS_PER_PAGE = 100


def fetch_commit_messages(github, repo, base, head):
    """Every commit message an app gained between two of its refs."""
    messages = []
    page = 1
    while True:
        payload = github.api(
            f"/repos/{SOURCE_ORG}/{repo}/compare/{base}...{head}"
            f"?per_page={COMMITS_PER_PAGE}&page={page}"
        )
        commits = payload.get("commits", [])
        messages.extend(commit["commit"]["message"] for commit in commits)
        if not commits or len(messages) >= payload.get("total_commits", 0):
            return messages
        page += 1


def categorise(messages):
    """Conventional-commit lines grouped by category, as {category: {line}}.

    Every line of every message is considered, so a squashed commit that lists
    several changes contributes each of them.
    """
    categorised = {}
    for message in messages:
        for line in message.split("\n"):
            for conventional_type, category in CONVENTIONAL_TYPES.items():
                prefix = r"^[* ]*" + conventional_type + r"(:|\([^:]+\):)"
                if not re.search(prefix, line, re.I):
                    continue
                scope = re.search(r"\(([^)]+)\):", line)
                entry = re.sub(prefix, scope.group(1) + ":" if scope else "", line, flags=re.I)
                categorised.setdefault(category, set()).add(entry.strip())
    return categorised


def drop_contained(entries):
    """Entries that are not wholly contained in another entry of the same category."""
    return {
        entry
        for entry in entries
        if not any(entry != other and entry in other for other in entries)
    }


def tracked_changes(categorised, issues_only=True):
    """Reportable changes as {category: [entry]}, in the order they are reported.

    With `issues_only`, only changes naming a tracked issue are kept, which
    leaves out dependency bumps and other housekeeping.
    """
    changes = {}
    for category in REPORTED_CATEGORIES:
        entries = drop_contained(categorised.get(category, set()))
        if issues_only:
            entries = {entry for entry in entries if ISSUE_KEY.search(entry)}
        if entries:
            changes[category] = sorted(entries)
    return changes


def general_summary(categorised):
    """Phrases describing an app's changes when none of them name an issue."""
    remaining = {category: set(entries) for category, entries in categorised.items()}

    themes = []
    for phrase, pattern in THEME_PATTERNS:
        matched = False
        for category, entries in remaining.items():
            hits = {entry for entry in entries if pattern.search(entry)}
            if hits:
                remaining[category] = entries - hits
                matched = True
        if matched:
            themes.append(phrase)

    phrases = [
        phrase for category, phrase in CATEGORY_THEMES if remaining.get(category)
    ]
    return phrases + themes


def app_report(github, update, issues_only=True):
    """One app's reportable changes, and a general summary when it has none."""
    messages = fetch_commit_messages(
        github, update.repo, update.previous_ref, update.current_ref
    )
    categorised = categorise(messages)
    changes = tracked_changes(categorised, issues_only)
    summary = [] if changes else general_summary(categorised)
    return changes, summary

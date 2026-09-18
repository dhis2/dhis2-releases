# Renders the release note markdown: the issues fixed in the patch, followed by
# the changes in each bundled app whose version moved since the previous patch.

import re
from dataclasses import dataclass, field

from commits import BUG_FIXES, FEATURES, REPORTED_CATEGORIES
from jira_issues import ISSUE_KEY, ISSUE_KEY_PATTERN

ISSUE_BROWSE = "https://dhis2.atlassian.net/browse"
ISSUE_REFERENCE = re.compile(r"\[?\b(" + ISSUE_KEY_PATTERN + r")\b\]?")
# Commit subjects often run several keys together, as in "[DHIS2-1][DHIS2-2] ...".
ADJACENT_ISSUE_KEYS = re.compile(r"(\[" + ISSUE_KEY_PATTERN + r"\])(?=\[)")

# Where issues carrying no component are collected, after the named ones.
OTHER_COMPONENT = "Other"

APP_COMPONENT_PREFIX = "[App] "

# Jira components whose name differs from the bundled app's, once both are
# lowercased and hyphens read as spaces.
COMPONENT_APPS = {
    "data entry": "aggregate data entry",
    "job scheduler": "scheduler",
}

# The app category a Jira issue of each type joins.
APP_CATEGORIES = {"Feature": FEATURES, "Bug": BUG_FIXES}


@dataclass
class AppReport:
    """One updated app, with its reportable changes or a general summary."""

    update: object
    changes: dict = field(default_factory=dict)
    summary: list = field(default_factory=list)


@dataclass
class ReleaseNote:
    """Everything a patch release note says, ready to render."""

    version: object
    previous: object = None
    issues: dict = field(default_factory=dict)
    apps: list = field(default_factory=list)
    added: list = field(default_factory=list)
    removed: list = field(default_factory=list)

    @property
    def has_app_section(self):
        return bool(self.apps or self.added or self.removed)


def link_issues(text):
    """Turns tracked issue keys in commit text into links, absorbing any brackets."""
    spaced = ADJACENT_ISSUE_KEYS.sub(r"\1 ", text)
    return ISSUE_REFERENCE.sub(
        lambda match: f"[{match.group(1)}]({ISSUE_BROWSE}/{match.group(1)})", spaced
    )


def display_version(ref):
    return ref[1:] if ref.startswith("v") else ref


def join_names(names):
    names = list(names)
    if len(names) < 2:
        return "".join(names)
    return ", ".join(names[:-1]) + " and " + names[-1]


def render(note):
    covered = issue_keys_in_apps(note.apps)
    issues = {kind: not_covered(found, covered) for kind, found in note.issues.items()}
    issues, apps = file_under_apps(issues, note.apps)
    lines = [f"# Patch {note.version} Release Note", ""]
    lines += contents(note)
    lines += core_section(issues, covered)
    if note.has_app_section:
        lines += app_section(note, apps)
    return "\n".join(lines).rstrip("\n") + "\n"


def contents(note):
    lines = [
        "- [Core updates](#core-updates)",
        "  - [Features](#features)",
        "  - [Bugs](#bugs)",
    ]
    if note.has_app_section:
        lines.append("- [App updates](#app-updates)")
    lines.append("")
    return lines


def core_section(issues, covered):
    lines = ["## Core updates", ""]
    if covered:
        lines.append(
            "Changes made in the bundled applications are listed under "
            "[App updates](#app-updates)."
        )
        lines.append("")
    lines += issue_section("Features", issues.get("Feature", []))
    lines += issue_section("Bugs", issues.get("Bug", []))
    return lines


def app_name(component):
    """The app a Jira component names, or None where it names no app."""
    if not component.startswith(APP_COMPONENT_PREFIX):
        return None
    name = plain(component[len(APP_COMPONENT_PREFIX):])
    return COMPONENT_APPS.get(name, name)


def plain(name):
    return name.lower().replace("-", " ").strip()


def file_under_apps(issues, reports):
    """Moves issues about an updated app into that app's section.

    A reader looking for a Maps fix expects it beside the other Maps changes,
    whichever half of the note turned it up. Only the leading component counts,
    so a fix filed against the API first stays under Core updates.
    """
    reports_by_app = {plain(report.update.title): report for report in reports}
    moved, remaining = {}, {}
    for kind, found in issues.items():
        category = APP_CATEGORIES.get(kind)
        kept = []
        for issue in found:
            app = app_name(issue.components[0]) if issue.components else None
            if category is None or app not in reports_by_app:
                kept.append(issue)
                continue
            moved.setdefault(app, {}).setdefault(category, []).append(
                f"{issue.key} {issue.summary}"
            )
        remaining[kind] = kept

    return remaining, [fold_in(report, moved.get(plain(report.update.title))) for report in reports]


def fold_in(report, extra):
    """A copy of an app report with the issues filed under it added."""
    if not extra:
        return report
    changes = {category: list(entries) for category, entries in report.changes.items()}
    for category, entries in extra.items():
        changes.setdefault(category, []).extend(entries)
    ordered = {
        category: sorted(changes[category])
        for category in REPORTED_CATEGORIES
        if category in changes
    }
    return AppReport(report.update, ordered, [] if ordered else report.summary)


def issue_keys_in_apps(reports):
    """Every issue key the app sections already name."""
    keys = set()
    for report in reports:
        for entries in report.changes.values():
            for entry in entries:
                keys.update(ISSUE_KEY.findall(entry))
    return keys


def not_covered(issues, covered):
    """Issues the app sections do not already account for."""
    return [issue for issue in issues if issue.key not in covered]


def issue_section(title, issues):
    lines = [f"### {title}", ""]
    for component, grouped in group_by_component(issues):
        lines.append(f"#### {component}")
        lines.append("")
        lines += [issue_entry(issue) for issue in grouped]
        lines.append("")
    return lines


def group_by_component(issues):
    """Issues bucketed under their first component, alphabetically, Other last."""
    groups = {}
    for issue in issues:
        component = issue.components[0] if issue.components else OTHER_COMPONENT
        groups.setdefault(component, []).append(issue)
    named = sorted(name for name in groups if name != OTHER_COMPONENT)
    if OTHER_COMPONENT in groups:
        named.append(OTHER_COMPONENT)
    return [(name, groups[name]) for name in named]


def issue_entry(issue):
    entry = f"- **[{issue.key}]({issue.url})** {issue.summary}"
    also = issue.components[1:]
    if also:
        entry += " \u2014 also " + join_names(f"_{name}_" for name in also)
    return entry


def app_section(note, reports):
    lines = ["## App updates", ""]
    lines.append(
        f"The bundled applications below were updated between "
        f"DHIS2 {note.previous} and {note.version}."
    )
    lines.append("")

    lines += app_index(reports)

    for report in reports:
        lines += app_subsection(report)

    if note.added:
        lines.append("Newly bundled: " + join_names(note.added) + ".")
        lines.append("")
    if note.removed:
        lines.append("No longer bundled: " + join_names(note.removed) + ".")
        lines.append("")

    return lines


def anchor(title):
    """The heading anchor an app title gets, in both kramdown and on github.com."""
    return title.lower().replace(" ", "-")


def version_range(update):
    return (
        f"{display_version(update.previous_ref)} → "
        f"{display_version(update.current_ref)}"
    )


def change_note(report):
    """The one-phrase description of an app's changes used in the index."""
    count = sum(len(entries) for entries in report.changes.values())
    if count:
        return f"{count} change{'' if count == 1 else 's'}"
    if report.summary:
        return join_names(report.summary)
    return "no user-facing changes"


def app_index(reports):
    if not reports:
        return []
    lines = ["| App | Versions | Changes |", "| --- | --- | --- |"]
    for report in reports:
        lines.append(
            f"| [{report.update.title}](#{anchor(report.update.title)}) "
            f"| {version_range(report.update)} | {change_note(report)} |"
        )
    lines.append("")
    return lines


def app_subsection(report):
    update = report.update
    lines = [
        f"### {update.title}",
        "",
        f"[{version_range(update)}]({update.compare_url})",
        "",
    ]
    for category, entries in report.changes.items():
        lines.append(f"#### {category}")
        lines.append("")
        lines += [f"- {link_issues(entry)}" for entry in entries]
        lines.append("")
    if not report.changes:
        lines.append(summary_sentence(report.summary))
        lines.append("")
    return lines


def summary_sentence(summary):
    """Describes an app whose changes name no tracked issue."""
    if not summary:
        return "Updated with no user-facing changes."
    return "Includes " + join_names(summary) + "."

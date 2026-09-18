#!/usr/bin/env python3
# Command line entry point for a DHIS2 patch release note: combines the issues
# Jira records against the fix version with the changes in each updated app.

import argparse
import os
import sys
from pathlib import Path

import bundled_apps
import commits
import jira_issues
import render
from github import GitHub, RateLimited
from versions import REPO_ROOT, Version, earlier_patches, previous_patch

TOOL_DIR = Path(__file__).resolve().parent


def parse_args():
    parser = argparse.ArgumentParser(
        description="Create a release note for a DHIS2 patch, from Jira fix "
        "versions and the app versions bundled by dhis2-core."
    )
    parser.add_argument("version", help="the patch to describe, e.g. 2.42.5")
    parser.add_argument(
        "--previous",
        help="patch to compare bundled apps against (default: the patch released before it)",
    )
    parser.add_argument(
        "--user",
        default=os.environ.get("JIRA_EMAIL"),
        help="Jira account email (default: $JIRA_EMAIL)",
    )
    parser.add_argument(
        "--token",
        default=os.environ.get("JIRA_API_TOKEN"),
        help="Jira API token (default: $JIRA_API_TOKEN)",
    )
    parser.add_argument(
        "--github-token",
        default=os.environ.get("GITHUB_TOKEN"),
        help="GitHub token, needed to stay inside the API rate limit (default: $GITHUB_TOKEN)",
    )
    parser.add_argument(
        "--output",
        help="where to write the note (default: releases/<release>/ReleaseNote-<version>.md)",
    )
    parser.add_argument(
        "--full",
        action="store_true",
        help="report app changes that name no tracked issue, such as dependency bumps",
    )
    parser.add_argument("--no-jira", action="store_true", help="leave out features and bugs")
    parser.add_argument("--no-apps", action="store_true", help="leave out app updates")
    parser.add_argument(
        "--no-cache", action="store_true", help="always ask GitHub, ignoring cached responses"
    )
    return parser.parse_args()


def collect_issues(args, version):
    """The issues Jira records against the patch, keyed by issue type."""
    if not (args.user and args.token):
        sys.exit(
            "Jira credentials missing: pass --user and --token, or set "
            "JIRA_EMAIL and JIRA_API_TOKEN"
        )
    client = jira_issues.connect(args.user, args.token)
    earlier = earlier_patches(version)
    issues = {}
    for issue_type in jira_issues.ISSUE_TYPES:
        jql, found = jira_issues.fetch_issues(client, issue_type, version, earlier)
        print(f"{issue_type}: {len(found)} issue(s)")
        print(f"  {jql}")
        issues[issue_type] = found
    return issues


def collect_apps(github, version, previous, issues_only):
    """App reports for the patch, plus the apps added to and dropped from the bundle."""
    current_pins = bundled_apps.fetch_bundle(github, version)
    previous_pins = bundled_apps.fetch_bundle(github, previous)

    reports, core_released = [], []
    for update in bundled_apps.updated_apps(previous_pins, current_pins):
        if bundled_apps.is_core_released(update, version):
            core_released.append(update.title)
            continue
        changes, summary = commits.app_report(github, update, issues_only=issues_only)
        reported = sum(len(entries) for entries in changes.values())
        print(
            f"{update.title}: {update.previous_ref} -> {update.current_ref}, "
            f"{reported} change(s)" + ("" if reported else f" [{', '.join(summary)}]")
        )
        reports.append(render.AppReport(update=update, changes=changes, summary=summary))

    if core_released:
        print(
            "Released with core, so covered by the fix version: "
            + ", ".join(sorted(core_released))
        )

    added = sorted(bundled_apps.app_title(repo) for repo in current_pins.keys() - previous_pins.keys())
    removed = sorted(bundled_apps.app_title(repo) for repo in previous_pins.keys() - current_pins.keys())
    return reports, added, removed


def write_not_done_report(version, issues):
    """Records the issues in the fix version that are not Done, for checking."""
    not_done = sorted(
        (issue for found in issues.values() for issue in found if not issue.is_done),
        key=lambda issue: (issue.status, issue.key),
    )
    path = TOOL_DIR / f"notdone-{version}.txt"
    path.write_text(
        "".join(
            f"{issue.status}: {issue.key} - {issue.url} - {issue.summary}\n"
            for issue in not_done
        )
    )
    return path, not_done


def main():
    args = parse_args()
    version = Version.parse(args.version)
    note = render.ReleaseNote(version=version)

    if not args.no_jira:
        note.issues = collect_issues(args, version)

    if not args.no_apps:
        note.previous = Version.parse(args.previous) if args.previous else previous_patch(version)
        if note.previous is None:
            print(
                f"{version} is the first patch of {version.release}, so there is no "
                f"earlier bundle to compare; pass --previous to choose one"
            )
        else:
            github = GitHub(token=args.github_token, use_cache=not args.no_cache)
            print(f"Comparing bundled apps with {note.previous}")
            note.apps, note.added, note.removed = collect_apps(
                github, version, note.previous, issues_only=not args.full
            )

    output = (
        Path(args.output)
        if args.output
        else REPO_ROOT / "releases" / version.release / f"ReleaseNote-{version}.md"
    )
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(render.render(note))
    print("Note written to", output)

    if note.issues:
        path, not_done = write_not_done_report(version, note.issues)
        if not_done:
            print(f"{len(not_done)} issue(s) are not Done yet; listed in {path}")


if __name__ == "__main__":
    try:
        main()
    except (RateLimited, LookupError) as problem:
        sys.exit(str(problem))

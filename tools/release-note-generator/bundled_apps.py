# Reads the bundled app versions recorded in dhis2-core's apps-to-bundle.json
# and works out which apps changed between two DHIS2 patch releases.

import re
from dataclasses import dataclass

SOURCE_ORG = "dhis2"
CORE_REPO = "dhis2/dhis2-core"

APP_SUFFIX = "-app"

BUNDLE_ENTRY = re.compile(r"https://github\.com/[^/]+/(?P<repo>[^/#]+)(?:#(?P<ref>.+))?$")

TITLE_OVERRIDES = {
    "sms-configuration-app": "SMS Configuration",
}


def app_title(repo):
    """A readable app name for a repository slug, e.g. "Aggregate Data Entry"."""
    if repo in TITLE_OVERRIDES:
        return TITLE_OVERRIDES[repo]
    if repo.endswith(APP_SUFFIX):
        repo = repo[: -len(APP_SUFFIX)]
    return " ".join(word.capitalize() for word in repo.split("-"))


@dataclass(frozen=True)
class AppUpdate:
    """One bundled app, pinned to a different version than in the previous patch."""

    repo: str
    previous_ref: str
    current_ref: str

    @property
    def title(self):
        return app_title(self.repo)

    @property
    def compare_url(self):
        return (
            f"https://github.com/{SOURCE_ORG}/{self.repo}"
            f"/compare/{self.previous_ref}...{self.current_ref}"
        )


def fetch_bundle(github, version):
    """The app versions dhis2-core bundles for a release, as {repo: ref}.

    Released versions are read from their tag; a note built ahead of tagging
    falls back to the patch branch.
    """
    for ref in (f"refs/tags/{version}", f"refs/heads/patch/{version}"):
        entries = github.raw(f"/{CORE_REPO}/{ref}/{version.bundle_path}", allow_missing=True)
        if entries is not None:
            return parse_bundle(entries)
    raise LookupError(f"dhis2-core has no {version.bundle_path} for {version}")


def parse_bundle(entries):
    pins = {}
    for entry in entries:
        match = BUNDLE_ENTRY.match(entry.strip())
        if not match:
            raise ValueError(f"Cannot read bundled app entry {entry!r}")
        pins[match.group("repo")] = match.group("ref")
    return pins


def updated_apps(previous_pins, current_pins):
    """Apps bundled in both patches at a different version, by app name."""
    updates = [
        AppUpdate(repo, previous_pins[repo], current_pins[repo])
        for repo in set(previous_pins) & set(current_pins)
        if previous_pins[repo] != current_pins[repo]
    ]
    return sorted(updates, key=lambda update: update.title)


def is_core_released(update, version):
    """True when the app is pinned to the DHIS2 version itself.

    These apps are built from the dhis2-core patch branch rather than released
    on their own, so their fixes already reach the note from Jira under the
    release's fix version. A hotfix bundle carries its parent patch's app pins.
    """
    return update.current_ref in {str(version), str(version.parent)}

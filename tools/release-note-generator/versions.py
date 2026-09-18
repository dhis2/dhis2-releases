# Parses DHIS2 version strings and resolves the previously released patch,
# using the patch list published in downloads/v1/versions/stable.json.

import json
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
STABLE_JSON = REPO_ROOT / "downloads" / "v1" / "versions" / "stable.json"

# The release line from which apps-to-bundle.json moved to dhis-web-server.
WEB_SERVER_FROM_MINOR = 42

WEB_SERVER_BUNDLE_PATH = "dhis-2/dhis-web-server/apps-to-bundle.json"
WEB_APPS_BUNDLE_PATH = "dhis-2/dhis-web/dhis-web-apps/apps-to-bundle.json"


class Version:
    """A DHIS2 release version such as 2.42.5, or the hotfix 2.42.5.1."""

    def __init__(self, minor, patch, hotfix=None):
        self.minor = minor
        self.patch = patch
        self.hotfix = hotfix

    @classmethod
    def parse(cls, raw):
        parts = raw.strip().split(".")
        if parts[0] == "2":
            parts = parts[1:]
        if len(parts) not in (2, 3) or not all(part.isdigit() for part in parts):
            raise ValueError(
                f"Cannot read {raw!r} as a DHIS2 patch version; expected e.g. 2.42.5 or 2.42.5.1"
            )
        minor, patch = int(parts[0]), int(parts[1])
        hotfix = int(parts[2]) if len(parts) == 3 else None
        return cls(minor, patch, hotfix)

    @property
    def release(self):
        """The release line this patch belongs to, e.g. "2.42"."""
        return f"2.{self.minor}"

    @property
    def parent(self):
        """The patch a hotfix amends; the version itself when it is not a hotfix."""
        return Version(self.minor, self.patch) if self.hotfix is not None else self

    @property
    def bundle_path(self):
        """Where apps-to-bundle.json sits in dhis2-core for this release line."""
        if self.minor >= WEB_SERVER_FROM_MINOR:
            return WEB_SERVER_BUNDLE_PATH
        return WEB_APPS_BUNDLE_PATH

    def sort_key(self):
        return (self.minor, self.patch, self.hotfix or 0)

    def __str__(self):
        parts = ["2", str(self.minor), str(self.patch)]
        if self.hotfix is not None:
            parts.append(str(self.hotfix))
        return ".".join(parts)


def released_patches(release):
    """Every published patch of a release line, oldest first."""
    data = json.loads(STABLE_JSON.read_text())
    for entry in data["versions"]:
        if entry["name"] == release:
            patches = [Version.parse(p["name"]) for p in entry["patchVersions"]]
            return sorted(patches, key=Version.sort_key)
    raise LookupError(f"Release {release} is not listed in {STABLE_JSON}")


def earlier_patches(version):
    """Published patches of the same release line that precede `version`.

    These are the fix versions an issue may already have shipped under, so a
    patch note excludes issues that carry any of them.
    """
    return [p for p in released_patches(version.release) if p.sort_key() < version.sort_key()]


def previous_patch(version):
    """The patch released immediately before `version`, or None if it is the first.

    A note is usually generated before its own version reaches stable.json, so
    the version itself need not be listed.
    """
    earlier = earlier_patches(version)
    return earlier[-1] if earlier else None

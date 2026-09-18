# Checks version parsing and the resolution of the previously released patch
# against the published patch list.

import pytest

from versions import Version, earlier_patches, previous_patch


def test_parses_full_and_short_forms():
    assert str(Version.parse("2.42.5")) == "2.42.5"
    assert str(Version.parse("42.5")) == "2.42.5"
    assert str(Version.parse(" 2.42.5 ")) == "2.42.5"


def test_parses_hotfix():
    version = Version.parse("2.42.5.1")
    assert (version.minor, version.patch, version.hotfix) == (42, 5, 1)
    assert str(version.parent) == "2.42.5"


def test_patch_is_its_own_parent():
    assert str(Version.parse("2.42.5").parent) == "2.42.5"


def test_rejects_a_release_line():
    with pytest.raises(ValueError):
        Version.parse("2.42")


def test_rejects_nonsense():
    with pytest.raises(ValueError):
        Version.parse("2.42.x")


def test_bundle_path_moved_in_2_42():
    assert "dhis-web-server" in Version.parse("2.42.0").bundle_path
    assert "dhis-web-apps" in Version.parse("2.41.9").bundle_path


def test_previous_patch_prefers_the_latest_hotfix():
    assert str(previous_patch(Version.parse("2.42.5"))) == "2.42.4.1"


def test_previous_patch_of_a_hotfix_is_its_parent():
    assert str(previous_patch(Version.parse("2.42.5.1"))) == "2.42.5"


def test_first_patch_of_a_line_has_no_predecessor():
    assert previous_patch(Version.parse("2.42.0")) is None


def test_earlier_patches_include_hotfixes():
    earlier = [str(patch) for patch in earlier_patches(Version.parse("2.42.5"))]
    assert earlier == ["2.42.0", "2.42.1", "2.42.2", "2.42.3", "2.42.3.1", "2.42.4", "2.42.4.1"]


def test_unreleased_version_still_resolves_a_predecessor():
    assert previous_patch(Version.parse("2.42.99")) is not None

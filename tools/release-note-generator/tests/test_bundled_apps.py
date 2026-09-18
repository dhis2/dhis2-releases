# Checks how apps-to-bundle.json entries are read and compared between patches.

import pytest

from bundled_apps import app_title, is_core_released, parse_bundle, updated_apps, AppUpdate
from versions import Version

BUNDLE_2_42_4 = [
    "https://github.com/d2-ci/capture-app#v105.2.8",
    "https://github.com/d2-ci/data-quality-app#2.42.4",
    "https://github.com/d2-ci/cache-cleaner-app#v100.2.2",
    "https://github.com/d2-ci/menu-management-app#v100.2.0",
]
BUNDLE_2_42_5 = [
    "https://github.com/d2-ci/capture-app#v106.2.2",
    "https://github.com/d2-ci/data-quality-app#2.42.5",
    "https://github.com/d2-ci/cache-cleaner-app#v100.2.2",
    "https://github.com/d2-ci/datastore-app#v100.5.0",
]


def test_parses_repo_and_ref():
    pins = parse_bundle(BUNDLE_2_42_5)
    assert pins["capture-app"] == "v106.2.2"
    assert pins["data-quality-app"] == "2.42.5"


def test_rejects_an_unreadable_entry():
    with pytest.raises(ValueError):
        parse_bundle(["git@github.com:d2-ci/capture-app.git"])


def test_reports_only_apps_whose_pin_moved():
    updates = updated_apps(parse_bundle(BUNDLE_2_42_4), parse_bundle(BUNDLE_2_42_5))
    assert [update.repo for update in updates] == ["capture-app", "data-quality-app"]


def test_apps_only_in_one_bundle_are_not_updates():
    updates = updated_apps(parse_bundle(BUNDLE_2_42_4), parse_bundle(BUNDLE_2_42_5))
    repos = [update.repo for update in updates]
    assert "datastore-app" not in repos
    assert "menu-management-app" not in repos


def test_compare_url_uses_the_source_repository():
    update = AppUpdate("capture-app", "v105.2.8", "v106.2.2")
    assert update.compare_url == (
        "https://github.com/dhis2/capture-app/compare/v105.2.8...v106.2.2"
    )


def test_apps_pinned_to_the_core_version_are_released_with_core():
    update = AppUpdate("data-quality-app", "2.42.4", "2.42.5")
    assert is_core_released(update, Version.parse("2.42.5"))


def test_a_hotfix_bundle_keeps_its_parent_patch_pins():
    update = AppUpdate("data-quality-app", "2.42.4", "2.42.5")
    assert is_core_released(update, Version.parse("2.42.5.1"))


def test_continuously_released_apps_are_not_released_with_core():
    update = AppUpdate("capture-app", "v105.2.8", "v106.2.2")
    assert not is_core_released(update, Version.parse("2.42.5"))


def test_app_titles_read_as_names():
    assert app_title("capture-app") == "Capture"
    assert app_title("aggregate-data-entry-app") == "Aggregate Data Entry"
    assert app_title("sms-configuration-app") == "SMS Configuration"
    assert app_title("global-shell-app") == "Global Shell"

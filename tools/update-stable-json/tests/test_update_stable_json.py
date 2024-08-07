import json
import pytest
import os

from update_stable_json import (
    create_new_patch_version,
    create_new_version,
    update_existing_version,
    update_support_status,
    update_dhis2_releases,
    parse_version
)

@pytest.fixture
def sample_data():
    with open(os.path.join(os.path.dirname(__file__), 'sample.json'), 'r') as file:
        data = json.load(file)
    return data


@pytest.fixture
def new_release():
    return {
        "major_version": 42,
        "minor_version": 1,
        "patch_version": 0,
        "release_date": "2024-06-07",
        "url": "https://releases.dhis2.org/42/dhis2-stable-42.1.1.war",
        "sha256": "z78de1a96afc6136c8415ab0035feb6b4f8c5cc4dff8d4f0e5b9878q",
        "file_size": "290.0 MB"
    }

@pytest.fixture
def new_hotfix_release():
    return {
        "major_version": 42,
        "minor_version": 1,
        "patch_version": 1,
        "release_date": "2024-06-07",
        "url": "https://releases.dhis2.org/42/dhis2-stable-42.1.1.war",
        "sha256": "z78de1a96afc6136c8415ab0035feb6b4f8c5cc4dff8d4f0e5b9878q",
        "file_size": "290.0 MB"
    }


def test_create_new_patch_version(new_release):
    new_patch_version = create_new_patch_version(new_release)
    assert new_patch_version['name'] == '2.42.1'
    assert new_patch_version['displayName'] == '42.1.0'
    assert new_patch_version['version'] == 1
    assert new_patch_version['hotfixVersion'] == 0
    assert new_patch_version['hotfix'] == False


def test_create_new_hotfix_version(new_hotfix_release):
    new_patch_version = create_new_patch_version(new_hotfix_release)
    assert new_patch_version['name'] == '2.42.1.1'
    assert new_patch_version['displayName'] == '42.1.1'
    assert new_patch_version['version'] == 1
    assert new_patch_version['hotfixVersion'] == 1
    assert new_patch_version['hotfix'] == True


def test_create_new_version(new_hotfix_release):
    new_patch_version = create_new_patch_version(new_hotfix_release)
    new_version = create_new_version(new_hotfix_release, new_patch_version)
    assert new_version['name'] == '2.42'
    assert new_version['displayName'] == 'v42'
    assert new_version['latest'] == True
    assert new_version['version'] == 42
    assert new_version['latestPatchVersion'] == 1
    assert new_version['latestHotfixVersion'] == 1
    assert new_version['latestStableUrl'] == new_hotfix_release['url']
    assert new_version['sha256'] == new_hotfix_release['sha256']
    assert new_version['jdk'] == 17  # Assuming major version 42 uses JDK 17
    assert new_version['patchVersions'] == [new_patch_version]


def test_update_existing_version(sample_data, new_hotfix_release):
    existing_version = sample_data['versions'][0]
    new_patch_version = create_new_patch_version(new_hotfix_release)
    update_existing_version(existing_version, new_hotfix_release, new_patch_version)
    assert existing_version['supported'] == True
    assert existing_version['latestPatchVersion'] == 1
    assert existing_version['latestHotfixVersion'] == 1
    assert existing_version['latestStableUrl'] == new_hotfix_release['url']
    assert existing_version['sha256'] == new_hotfix_release['sha256']
    assert existing_version['fileSize'] == new_hotfix_release['file_size']
    assert len(existing_version['patchVersions']) == 2


def test_update_support_status(sample_data):
    update_support_status(sample_data)
    for i, version in enumerate(sample_data['versions']):
        if i < 4:
            assert version['supported'] == True
        else:
            assert version['supported'] == False


def test_update_dhis2_releases(sample_data, new_hotfix_release):
    updated_data = update_dhis2_releases(sample_data, new_hotfix_release)
    assert len(updated_data['versions']) == 2
    assert updated_data['versions'][0]['latest'] == True
    assert updated_data['versions'][0]['supported'] == True
    assert updated_data['versions'][0]['latestPatchVersion'] == 1
    assert updated_data['versions'][0]['latestHotfixVersion'] == 1
    assert updated_data['versions'][0]['latestStableUrl'] == new_hotfix_release['url']
    assert updated_data['versions'][0]['releaseDate'] == new_hotfix_release['release_date']
    assert updated_data['versions'][0]['sha256'] == new_hotfix_release['sha256']
    assert updated_data['versions'][0]['fileSize'] == new_hotfix_release['file_size']

def test_create_new_version_sets_latest_true(sample_data, new_hotfix_release):
    updated_data = update_dhis2_releases(sample_data, new_hotfix_release)
    new_version_name = f"2.{new_hotfix_release['major_version']}"

    assert any(version['name'] == new_version_name and version['latest'] for version in updated_data['versions'])

    for version in updated_data['versions']:
        if version['name'] != new_version_name:
            assert not version['latest']

def test_update_existing_version_does_not_modify_latest(sample_data, new_release):
    existing_version = sample_data['versions'][0]
    new_patch_version = create_new_patch_version(new_release)

    original_latest_flag = existing_version['latest']

    update_existing_version(existing_version, new_release, new_patch_version)

    assert existing_version['latest'] == original_latest_flag


def test_parse_version():
    version = "42.1.1"
    parsed_version = parse_version(version)
    assert parsed_version == (42, 1, 1)

    with pytest.raises(ValueError):
        parse_version("invalid_version_format")

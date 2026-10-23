# Tests for the EOS builds updater: S3 listing parsing and eos.json update rules.
# Uses a captured S3 ListObjectsV2 response; S3 access is replaced by in-memory data.
import os
import pytest

from update_eos_json import (
    eos_key,
    parse_listing,
    find_eos_object,
    format_file_size,
    create_eos_build,
    update_eos_builds
)


@pytest.fixture
def listing_xml():
    with open(os.path.join(os.path.dirname(__file__), 'listing_2.39.xml'), 'r') as file:
        return file.read()


@pytest.fixture
def eos_object():
    return {
        "key": "2.39/dhis2-stable-2.39-eos.war",
        "lastModified": "2026-06-09T16:39:44.000Z",
        "etag": "93500f66e449aa04b5dcc190c02861fe-38",
        "size": 310386099
    }


class FakeBucket:
    def __init__(self, objects):
        self.objects = objects
        self.hashed = []

    def list_objects(self, prefix):
        return [obj for obj in self.objects if obj["key"].startswith(prefix)]

    def hash_object(self, obj):
        self.hashed.append(obj["key"])
        return f"sha-of-{obj['key']}"


def test_eos_key():
    assert eos_key("2.39") == "2.39/dhis2-stable-2.39-eos.war"
    assert eos_key("2.40") == "2.40/dhis2-stable-2.40-eos.war"


def test_parse_listing(listing_xml, eos_object):
    assert parse_listing(listing_xml) == [eos_object]


def test_parse_empty_listing():
    xml = '<?xml version="1.0" encoding="UTF-8"?><ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><KeyCount>0</KeyCount></ListBucketResult>'
    assert parse_listing(xml) == []


def test_find_eos_object_ignores_other_keys(eos_object):
    other = dict(eos_object, key="2.39/dhis2-stable-2.39-eos.war.bak")
    assert find_eos_object("2.39", [other, eos_object]) == eos_object
    assert find_eos_object("2.39", [other]) is None


def test_format_file_size():
    assert format_file_size(310386099) == "296.01 MB"


def test_create_eos_build(eos_object):
    assert create_eos_build(eos_object, "abc123") == {
        "url": "https://releases.dhis2.org/2.39/dhis2-stable-2.39-eos.war",
        "buildDate": "2026-06-09",
        "sha256": "abc123",
        "fileSize": "296.01 MB",
        "etag": "93500f66e449aa04b5dcc190c02861fe-38"
    }


def test_new_build_is_hashed(eos_object):
    bucket = FakeBucket([eos_object])
    builds = update_eos_builds(["2.40", "2.39"], bucket.list_objects, bucket.hash_object, {})
    assert list(builds) == ["2.39"]
    assert builds["2.39"]["sha256"] == "sha-of-2.39/dhis2-stable-2.39-eos.war"
    assert bucket.hashed == ["2.39/dhis2-stable-2.39-eos.war"]


def test_unchanged_build_is_not_rehashed(eos_object):
    bucket = FakeBucket([eos_object])
    existing = {"2.39": create_eos_build(eos_object, "previous-sha")}
    builds = update_eos_builds(["2.39"], bucket.list_objects, bucket.hash_object, existing)
    assert builds["2.39"]["sha256"] == "previous-sha"
    assert bucket.hashed == []


def test_rebuilt_build_is_rehashed(eos_object):
    rebuilt = dict(eos_object, etag="newetag-38", lastModified="2026-10-01T10:00:00.000Z", size=320000000)
    bucket = FakeBucket([rebuilt])
    existing = {"2.39": create_eos_build(eos_object, "previous-sha")}
    builds = update_eos_builds(["2.39"], bucket.list_objects, bucket.hash_object, existing)
    assert builds["2.39"]["sha256"] == "sha-of-2.39/dhis2-stable-2.39-eos.war"
    assert builds["2.39"]["buildDate"] == "2026-10-01"
    assert builds["2.39"]["etag"] == "newetag-38"


def test_removed_build_is_dropped(eos_object):
    bucket = FakeBucket([])
    existing = {"2.39": create_eos_build(eos_object, "previous-sha")}
    assert update_eos_builds(["2.39"], bucket.list_objects, bucket.hash_object, existing) == {}


def test_builds_follow_version_order(eos_object):
    eos_2_38 = dict(eos_object, key="2.38/dhis2-stable-2.38-eos.war")
    bucket = FakeBucket([eos_2_38, eos_object])
    builds = update_eos_builds(["2.39", "2.38"], bucket.list_objects, bucket.hash_object, {})
    assert list(builds) == ["2.39", "2.38"]

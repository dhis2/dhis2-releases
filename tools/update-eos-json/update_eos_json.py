#!/usr/bin/env python3
# Updates eos.json with the end-of-support WAR builds found in the releases S3 bucket.
# EOS builds are rebuilt in place, so each one is re-hashed only when its S3 ETag changes.

import json
import argparse
import hashlib
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from typing import Callable, Dict, Any, List, Optional

S3_BUCKET_URL = "https://s3.eu-west-1.amazonaws.com/releases.dhis2.org"
RELEASES_URL = "https://releases.dhis2.org"
S3_NAMESPACE = {"s3": "http://s3.amazonaws.com/doc/2006-03-01/"}


def eos_key(version_name: str) -> str:
    return f"{version_name}/dhis2-stable-{version_name}-eos.war"


def parse_listing(xml_text: str) -> List[Dict[str, Any]]:
    root = ET.fromstring(xml_text)
    return [
        {
            "key": contents.findtext("s3:Key", namespaces=S3_NAMESPACE),
            "lastModified": contents.findtext("s3:LastModified", namespaces=S3_NAMESPACE),
            "etag": contents.findtext("s3:ETag", namespaces=S3_NAMESPACE).strip('"'),
            "size": int(contents.findtext("s3:Size", namespaces=S3_NAMESPACE)),
        }
        for contents in root.findall("s3:Contents", S3_NAMESPACE)
    ]


def find_eos_object(version_name: str, listing: List[Dict[str, Any]]) -> Optional[Dict[str, Any]]:
    key = eos_key(version_name)
    return next((obj for obj in listing if obj["key"] == key), None)


def format_file_size(size_bytes: int) -> str:
    return f"{size_bytes / (1024 * 1024):.2f} MB"


def create_eos_build(obj: Dict[str, Any], sha256: str) -> Dict[str, Any]:
    return {
        "url": f"{RELEASES_URL}/{obj['key']}",
        "buildDate": obj["lastModified"][:10],
        "sha256": sha256,
        "fileSize": format_file_size(obj["size"]),
        "etag": obj["etag"]
    }


def update_eos_builds(
    version_names: List[str],
    list_objects: Callable[[str], List[Dict[str, Any]]],
    hash_object: Callable[[Dict[str, Any]], str],
    existing: Dict[str, Any]
) -> Dict[str, Any]:
    builds = {}
    for name in version_names:
        obj = find_eos_object(name, list_objects(eos_key(name)))
        if obj is None:
            continue

        previous = existing.get(name)
        if previous and previous.get("etag") == obj["etag"]:
            builds[name] = previous
            continue

        print(f"Hashing EOS build for {name} ({obj['key']})")
        builds[name] = create_eos_build(obj, hash_object(obj))
    return builds


def list_s3_objects(prefix: str) -> List[Dict[str, Any]]:
    query = urllib.parse.urlencode({"list-type": 2, "prefix": prefix})
    with urllib.request.urlopen(f"{S3_BUCKET_URL}?{query}") as response:
        return parse_listing(response.read().decode("utf-8"))


def sha256_of_eos_build(obj: Dict[str, Any]) -> str:
    # Objects are only readable through the CDN, so check it serves the listed version
    h = hashlib.sha256()
    with urllib.request.urlopen(f"{RELEASES_URL}/{urllib.parse.quote(obj['key'])}") as response:
        served_etag = response.headers.get("ETag", "").strip('"')
        if served_etag != obj["etag"]:
            raise RuntimeError(f"{obj['key']}: served ETag {served_etag} does not match S3 ETag {obj['etag']}")
        while chunk := response.read(1024 * 1024):
            h.update(chunk)
    return h.hexdigest()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Update DHIS2 EOS builds JSON file.')
    parser.add_argument('--stable-json-file', required=True, help='The path to stable.json, used for the list of versions')
    parser.add_argument('--json-file', required=True, help='The path to the EOS JSON file to update')

    args = parser.parse_args()

    with open(args.stable_json_file, 'r') as file:
        version_names = [version['name'] for version in json.load(file)['versions']]

    try:
        with open(args.json_file, 'r') as file:
            existing = json.load(file)
    except FileNotFoundError:
        existing = {}

    updated_data = update_eos_builds(version_names, list_s3_objects, sha256_of_eos_build, existing)

    with open(args.json_file, 'w') as file:
        json.dump(updated_data, file, indent=4)
        file.write("\n")  # add newline at the end of the file

    print(f"EOS builds updated successfully ({len(updated_data)} found)")

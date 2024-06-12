import json
import argparse
from typing import Dict, Any, Tuple, List


def create_new_patch_version(new_release: Dict[str, Any]) -> Dict[str, Any]:
    major_version, minor_version, patch_version = new_release['major_version'], new_release['minor_version'], new_release['patch_version']
    old_version_format = f"2.{major_version}.{minor_version}"
    new_version_format = f"{major_version}.{minor_version}.{patch_version}"
    hotfix = patch_version > 0

    return {
        "name": old_version_format,
        "displayName": new_version_format,
        "version": minor_version,
        "hotfixVersion": patch_version,
        "releaseDate": new_release['release_date'],
        "url": new_release['url'],
        "sha256": new_release['sha256'],
        "hotfix": hotfix,
        "fileSize": new_release['file_size']
    }


def create_new_version(new_release: Dict[str, Any], new_patch_version: Dict[str, Any]) -> Dict[str, Any]:
    major_version = new_release['major_version']
    version_name = f"2.{major_version}"

    return {
        "name": version_name,
        "displayName": f"v{major_version}",
        "latest": True,
        "version": major_version,
        "releaseDate": new_release['release_date'],
        "supported": True,
        "latestPatchVersion": new_release['minor_version'],
        "latestHotfixVersion": new_release['patch_version'],
        "latestStableUrl": new_release['url'],
        "sha256": new_release['sha256'],
        "jdk": 17 if major_version >= 41 else 11,
        "patchVersions": [new_patch_version],
        "fileSize": new_release['file_size']
    }


def update_existing_version(version: Dict[str, Any], new_release: Dict[str, Any], new_patch_version: Dict[str, Any]) -> None:
    version['latest'] = True
    version['supported'] = True
    version['latestPatchVersion'] = new_release['minor_version']
    version['latestHotfixVersion'] = new_release['patch_version']
    version['latestStableUrl'] = new_release['url']
    version['releaseDate'] = new_release['release_date']
    version['sha256'] = new_release['sha256']
    version['fileSize'] = new_release['file_size']

    # Check if the DHIS2 release version already exists
    for patch_version in version['patchVersions']:
        if patch_version['displayName'] == new_patch_version['displayName']:
            print(f"Patch version {new_patch_version['displayName']} already exists.")
            exit()
    version['patchVersions'].append(new_patch_version)
    print(f"Added new patch version {new_patch_version['displayName']} to version {version['displayName']}")


def update_support_status(data: Dict[str, Any]) -> None:
    for i, version in enumerate(data['versions']):
        version['supported'] = i < 4

    print("Support status updated for the last 4 versions")


def update_dhis2_releases(data: Dict[str, Any], new_release: Dict[str, Any]) -> Dict[str, Any]:
    major_version = new_release['major_version']
    new_patch_version = create_new_patch_version(new_release)
    version_name = f"2.{major_version}"

    for version in data['versions']:
        version['latest'] = version['name'] == version_name
        if version['latest']:
            update_existing_version(version, new_release, new_patch_version)
            break
    else:
        new_version = create_new_version(new_release, new_patch_version)
        data['versions'].insert(0, new_version)
        print(f"Added new version {new_version['displayName']}")

    update_support_status(data)
    return data


def parse_version(version: str) -> Tuple[int, ...]:
    parts = version.split('.')
    if len(parts) != 3:
        raise ValueError(f"Invalid version format: {version}")
    return tuple(map(int, parts))


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Update DHIS2 versions JSON file.')
    parser.add_argument('--version', required=True, help='The DHIS2 version (e.g., 40.1.3)')
    parser.add_argument('--url', required=True, help='The URL to the WAR file')
    parser.add_argument('--sha256', required=True, help='The SHA256 hash of the WAR file')
    parser.add_argument('--file-size', required=True, help='The size of the WAR file')
    parser.add_argument('--release-date', required=True, help='The release date of the new version (e.g., 2024-06-07)')
    parser.add_argument('--json-file', required=True, help='The path to the JSON file to update')

    args = parser.parse_args()

    major_version, minor_version, patch_version = parse_version(args.version)

    new_release = {
        "major_version": major_version,
        "minor_version": minor_version,
        "patch_version": patch_version,
        "release_date": args.release_date,
        "url": args.url,
        "sha256": args.sha256,
        "file_size": args.file_size
    }

    with open(args.json_file, 'r') as file:
        data = json.load(file)

    updated_data = update_dhis2_releases(data, new_release)

    with open(args.json_file, 'w') as file:
        json.dump(updated_data, file, indent=4)

    print("DHIS2 versions updated successfully")

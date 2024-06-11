import json
import argparse
from typing import Dict, Any, Tuple


def create_new_patch_version(new_release: Dict[str, Any]) -> Dict[str, Any]:
    major_version: int = new_release['major_version']
    minor_version: int = new_release['minor_version']
    patch_version: int = new_release['patch_version']
    old_version_format: str = f"2.{major_version}.{minor_version}"
    new_version_format: str = f"{major_version}.{minor_version}.{patch_version}"
    hotfix: bool = patch_version > 0

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
    major_version: int = new_release['major_version']
    version_name: str = f"2.{major_version}"

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

    print(f"Support status updated for the last 4 versions")


def update_dhis2_releases(data: Dict[str, Any], new_release: Dict[str, Any]) -> Dict[str, Any]:
    major_version: int = new_release['major_version']
    new_patch_version: Dict[str, Any] = create_new_patch_version(new_release)
    version_name: str = f"2.{major_version}"

    version_exists: bool = False

    for version in data['versions']:
        if version['name'] == version_name:
            version_exists = True
            update_existing_version(version, new_release, new_patch_version)
        else:
            version['latest'] = False

    if not version_exists:
        new_version: Dict[str, Any] = create_new_version(new_release, new_patch_version)

        # Check if the DHIS2 major release version already exists
        if not any(v['name'] == new_version['name'] for v in data['versions']):
            # Insert new versions at the beginning of the list
            data['versions'].insert(0, new_version)
            print(f"Added new version {new_version['displayName']}")

    update_support_status(data)
    return data


def parse_version(version: str) -> Tuple[int, ...]:
    version_parts: List[str] = version.split('.')
    if len(version_parts) != 3:
        raise ValueError(f"Invalid version format: {version}")

    return tuple(map(int, version_parts[:3]))


if __name__ == "__main__":
    parser: argparse.ArgumentParser = argparse.ArgumentParser(description='Update DHIS2 versions JSON file.')
    parser.add_argument('--version', required=True, help='The DHIS2 version (e.g., 40.1.3)')
    parser.add_argument('--url', required=True, help='The URL to the WAR file')
    parser.add_argument('--sha256', required=True, help='The SHA256 hash of the WAR file')
    parser.add_argument('--file-size', required=True, help='The size of the WAR file')
    parser.add_argument('--release-date', required=True, help='The release date of the new version (e.g., 2024-06-07)')
    parser.add_argument('--json-file', required=True, help='The path to the JSON file to update')

    args: argparse.Namespace = parser.parse_args()

    major_version, minor_version, patch_version = parse_version(args.version)

    new_release: Dict[str, Any] = {
        "major_version": major_version,
        "minor_version": minor_version,
        "patch_version": patch_version,
        "release_date": args.release_date,
        "url": args.url,
        "sha256": args.sha256,
        "file_size": args.file_size
    }

    with open(args.json_file, 'r') as file:
        data: Dict[str, Any] = json.load(file)

    updated_data: Dict[str, Any] = update_dhis2_releases(data, new_release)

    with open(args.json_file, 'w') as file:
        json.dump(updated_data, file, indent=4)

    print("DHIS2 versions updated successfully")

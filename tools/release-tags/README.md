# DHIS2 Release scripts

## Branch a new release

Used for SOFT FREEZE prior to a new major release. This is the point at which the new version is branched from master.

TBD

## Create Patch branch

Used for HARD FREEZE (both major and patch releases). This is the point when the patch branch is created for the release candidate.

### Usage

```
./create_patch_branch.sh <version>
```
`version`: should be in the form `2.<release>.<patch>`

The repositories are cloned into a `temp_<xxx>` directory, where `xxx` is the PID of the script execution.

The script only makes changes to the repositories locally, but creates git push statements in a `push_<xxx>` file.

The branches will be modified directly in GitHub, so make sure you sanity-check the changes in the repository before pushing the changes with:

```
source push_<xxx>
```

### Example

```
./create_patch_branch.sh 2.34.3
```
- creates a new branch on core `2.34` called `patch/2.34.3`
    - updates core to package apps based on branch tag `patch/2.34.3`  
- changes the mvn version on core `2.34` to `2.34.4-SNAPSHOT`
- creates a new branch called `patch/2.34.3` on apps. The relevant base branch (`v32`, `32.X`, `master`) is taken from packaged apps file.


## Tag patch release

Used for HARD FREEZE (both major and patch releases). This is the point when the patch branch is created for the release candidate.

### Usage

```
./tag_patch_release.sh <version>
```
`version`: should be in the form `2.<release>.<patch>`

The repositories are cloned into a `temp_<xxx>` directory, where `xxx` is the PID of the script execution.

The script only makes changes to the repositories locally, but creates git push statements in a `push_<xxx>` file.

The branches will be modified directly in GitHub, so make sure you sanity-check the changes in the repository before pushing the changes with:

```
source push_<xxx>
```

### Example

```
/tag_patch_release.sh 2.34.3
```

- updates HEAD of `patch/2.34.3` branch on core to package apps based on tag `2.34.3`
- tags the HEAD of all `patch/2.34.3` branches (core and apps) with `2.34.3`

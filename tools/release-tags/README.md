# DHIS2 Release script

## Usage

```
./release.sh version [suffix]
```

`version`: should be in the form `2.<release>.<patch>`

set `dry_run=1` (line 21) to test the script without pushing changes back to git.
*The dry_run mode will also output the git log of changes in the last week for each repo.*


## Examples

### Branch a release for feature freeze

```
./release.sh 2.32.0 FF
```
- creates a new branch on core `2.32`
- changes the mvn version on core to `2.32.0-FF`.
*Assumes the current version is either `2.32.0-SNAPSHOT` or `2.32-SNAPSHOT`.*
- creates a new branch on apps `v32`
- tags apps with `2.32.0-FF`
- updates core to package apps based on tag `2.32.0-FF`  
- tags core with `2.32.0-FF`

then
- changes mvn version on core to `2.32.0-SNAPSHOT` for development
- updates core to package apps based on branch tag `v32`  

### Tag a point in development

```
./release.sh 2.32.0 rc1
```
- changes the mvn version on core branch `2.32` to `2.32.0-rc1`
- tags apps with `2.32.0-rc1`
- updates core to package apps based on tag `2.32.0-rc1`  
- tags core with `2.32.0-rc1`

then
- changes mvn version on core _back_ to `2.32.0-SNAPSHOT` for development
- updates core to package apps based on branch tag `v32`

_When adding a suffix to a release, it is assumed that you just wish to create a fixed tag without updating the patch version._

### Patch Release 2.32.3

```
./release.sh 2.32.3
```
- changes the mvn version on core branch `2.32` to `2.32.3`. _Assumes that the previous version in `2.32.3-SNAPSHOT`._
- tags apps with `2.32.3`
- updates core to package apps based on tag `2.32.3`  
- tags core with `2.32.3`

then
- changes mvn version on core to `2.32.4-SNAPSHOT` for development
- updates core to package apps based on branch tag `v32`

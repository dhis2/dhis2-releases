# DHIS2 Release scripts

For all of these scripts the repositories are cloned into a `temp_<xxx>` directory, where `xxx` is the PID of the script execution.

The script only makes changes to the repositories locally, but creates git push statements in a `push_<xxx>` file.

The branches will be modified directly in GitHub, so make sure you sanity-check the changes in the cloned repositories before pushing the changes with:

```
source push_<xxx>
```

## Soft Freeze of major release.

   This is the point at which the version is first branched from master.

   pseudocode

   ```
   #input: <major version>
   - clone core master
   - clone bundled non-FT apps
   - create relevant app branches (`vXX/X.X`)
   - reference correct app branches in core bundled-apps
   - update mvn version on master for next dev version
   ```

## Hard Freeze of major or patch release.

   This is the point where we branch a release candidate (`patch/2.xx.x` branch)

   pseudocode

   ```
   #input: <patch>
   - clone core dev branch
      - create patch branches on core
         - reference the correct branches in bundled-apps
            - version branches for CD apps
            - patch branches for others, including FT apps
      - update mvn version on core version branch to reference following patch
   - clone bundled non-CD apps
      - create patch branches on apps
   ```

## Release with patch tag
   
   This is where we tag the final release. This should be the same for `-EMBARGOED` releases too.

   pseudocode

   ```
   #input: <release tag>
   - clone the core patch branch
      - change the reference for non-CD apps from the patch branch to the release tag
      - update core mvn version to the pure tag (not snapshot)
      - add tag to core
   - clone all the apps non-CD at the reference from the bundled-apps
      - add tag to apps
   ```


## Hotfix Hard Freeze
   
   Hotfix is a special case where we branch from a previous release branch. e.g. we have released 2.35.9 and now we want to release 2.35.10 as a delta to that release (avoiding other changes in the 2.35 development branch).  
   After the Hotfix Hard Freeze, the Release tag follows the normal process.

   pseudocode

   ```
   #input: <hotfix patch>  (previous patch == hotfix patch - 1 minor version)
   - clone core previous patch branch
   - clone any apps that have the same previous patch branch
   - create new patch branch on cloned apps
   - create new patch branch on the core
   - reference the correct patch branches in bundled apps
        - patch branches for the cloned apps
   - update mvn version on the core patch branch

   ```

## Release candidate tag
   
   We generally don't tag specific release candidate tags, but build the head of the patch release branches as release candidates. However, we may want to add a deterministic tag at some point.
   Since a deterministic tag requires a change in the bundled-apps references, the best way to achieve this is to add a branch tag to core and simple tags to the apps.

   pseudocode

   ```
   #input: <target core branch/tag> <tag to apply> 
   - clone core
   - clone all non-CD apps at reference from bundled apps
   - tag all cloned apps with tag
   - update bundled-apps for the tagged apps
   - tag the core
   ```
# DHIS2 Release scripts

For all of these scripts the repositories are cloned into a `temp_<xxx>` directory, where `xxx` is the PID of the script execution.

The script only makes changes to the repositories locally, but creates git push statements in a `push_<xxx>` file.

The branches will be modified directly in GitHub, so make sure you sanity-check the changes in the cloned repositories before pushing the changes with:

```
source push_<xxx>
```

### Some defenitions

**Versioned application**:

An application where we maintain one release branch corresponding to each major branch of the DHIS2 core. Typically the app repository has a branch `v37` corresponding to `2.37` in dhis2-core, and so on.

**Feature Toggling (FT) application**:

An application where all development occurs on the `master` branch. The same artifact is used for several DHIS2 core versions; the application identifies the core version it is used with and toggles relevan features on or off.

**Continuous Delivery (CD) application**:

A Feature Toggling application that is released to the App Hub. Specific versions are bundled with stable core releases, but users can update to new versions of the application when they become available on the App Hub.


## Soft Freeze of major release:

   This is the point at which the version is first branched from master.

   
   ```
   ./SOFT_FREEZE.sh 2.38
   ```

#### what it does:


- clones core master
  - [ ] creates the new version branch
  - [ ] on new version branch: references correct app branches in bundled-apps 
  - [ ] back on master branch: updates mvn version for next dev version
- clones bundled non-FT apps
  - [ ] creates relevant app branches (`vXX/X.X`)
   

## Hard Freeze of major or patch release:

   This is the point where we branch a release candidate (`patch/2.xx.x` branch)

   ```
   ./HARD_FREEZE.sh 2.36.9
   ```

#### what it does:

- clones core dev branch
  - [ ] creates patch branch on core (`patch/2.xx.x`)
  - [ ] on patch branch: references the correct branches in bundled-apps:
    - [ ] version branches for CD apps
    - [ ] patch branches for others (including FT apps)
  - [ ] back on dev branch: updates mvn version to reference the subsequent patch
- clones bundled non-CD apps
  - [ ] creates patch branches on apps


## Release with patch tag
   
   This is where we tag the final release. 

   ```
   ./RELEASE.sh 2.36.9
   ```

#### what it does:

- clones the core patch branch
    - [ ] changes the reference for non-CD apps from the patch branch to the release tag
    - [ ] updates core mvn version to the pure tag (from snapshot, e.g. `2.36.9-SNAPSHOT` to `2.36.9`)
    - [ ] adds release tag
- clones all the apps non-CD at the reference from the bundled-apps
    - [ ] adds release tag to apps



## Hotfix Hard Freeze
   
   Hotfix is a special case where we branch from a previous release branch. e.g. we have released 2.35.9 and now we want to release 2.35.10 as a delta to that release (avoiding other changes in the 2.35 development branch).  
   After the Hotfix Hard Freeze, the Release tag follows the normal process.

   ```
   ./HOTFIX_FREEZE.sh 2.35.10
   ```

#### what it does:

- clones core at previous patch release tag (e.g. `2.35.9`)
  - [ ] creates new patch branch on the core (e.g. `patch/2.35.10`)
  - [ ] references the correct patch branches in bundled apps
      - patch branches for the cloned, non-CD, apps (e.g. `2.35.9` to `patch/2.35.10`)
  - [ ] updates mvn version on the core patch branch (e.g. `2.35.9` to `2.35.10-SNAPSHOT`)
  - [ ] on core version branch: updates mvn version to subsequent patch snapshot (e.g. `2.35.10-SNAPSHOT` to `2.35.11-SNAPSHOT`)
- clones any apps that have the same previous patch branch
  - [ ] creates new patch branch on cloned apps


#### Additional steps :warning:

Remeber to update Jira too! Most of the issues with a Fix Version matching the hotfix version will now be included in the subsequent version instead. The fix version should therefore be modified
   - [ ] Shift affected Fix Versions to the next patch version (e.g. where fix version is `2.35.10`, add `2.35.11` then remove `2.35.10`)
   - [ ] For issues where the Fix Version has been changed, comments that say "tested on \<patch\>" should be changed to "tested on \<patch+1\>". [This tool](https://github.com/chrisboyke/jira_search_replace) can help.


## Embargoed release tag
   
  This is where we provisionally tag the final release, but additionally include a security patch at build time, rather than in the source code. The resulting release can be distributed to trusted groups to allow them to update their instances prior to removing the embargo on the security patch: *at which point the code for the fix is merged into the repository and the normal release tag is applied with the `RELEASE.sh` script*. 

  ```
  ./RELEASE_EMBARGOED.sh 2.36.9
  ```

#### what it does:

- clones the core patch branch
    - [ ] changes the reference for non-CD apps from the patch branch to the embargoed release tag
    - [ ] updates core mvn version to the pure tag (from snapshot, e.g. `2.36.9-SNAPSHOT` to `2.36.9-EMBARGOED`)
    - [ ] adds embargoed release tag
    - [ ] resets the branch so that we can follow the "nominal" release process after the embargo period:
        - [ ] changes the reference for non-CD apps from the embargoed release tag back to the patch branch
        - [ ] sets core mvn version back to the snapshot tag (e.g. `2.36.9-EMBARGOED` to `2.36.9-SNAPSHOT`)
- clones all the apps non-CD at the reference from the bundled-apps
    - [ ] adds embargoed release tag to apps



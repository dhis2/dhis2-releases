#!/usr/bin/env bash





#
## bash setup
#

if test "$BASH" = "" || "$BASH" -uc "a=();true \"\${a[@]}\"" 2>/dev/null; then
    # Bash 4.4, Zsh
    set -euo pipefail
else
    # Bash 4.3 and older chokes on empty arrays with set -u.
    set -eo pipefail
fi
# set -xv
shopt -s nullglob globstar

readonly git_quiet="-q"  # "" for normal, "-q" for quiet git calls
readonly freeze_date_time="" #"2020-03-11 13:00:00 +0100"
readonly PATCH_BRANCH_PREFIX="patch/"





#
## parameters
#

readonly REL_VERSION=$1
readonly SUFFIX=${2:-}
readonly PUSH=${PWD}/push_$$





#
## repos
#

readonly core_repo="git@github.com:dhis2/dhis2-core.git"
declare created_branch=""
declare app_repos
# Array of repos that handle version compatibility by
# feature toggling. These apps are developed on the master branch.
# The array is a subset of app_repos
declare toggling_app_repos



#
## helpers
#

source ./lib/helpers.sh


#
## functions
#


function release_apps {
    # creates release branch
    # pushes to remote

    for app in "${app_repos[@]}"
    do
        local name=$(app_name "$app")
        local path="${TEMP}/${name}"
        local branch=$(app_package_branch "$app")
        local freeze_branch=$(patch_branch_name)

        echo "----------------- Updating $name : add ${branch} branch..."

        pushd "$path"

        # Attemp to checkout the branch again - in case we want a specific date-time
        checkout "$branch" "$freeze_date_time"

        # create a new release branch for the patch
        create_branch_new "$freeze_branch"
        checkout "$freeze_branch"

        # make an empty commit to ensure Travis builds this new branch
        git commit --allow-empty -m "chore(release-prepare): cut $freeze_branch"
        prepare_push "$freeze_branch"

        popd
    done
}

function release_core {

    local name=$(app_name "$core_repo")
    local path="${TEMP}/${name}"
    local branch="$(core_branch_name)"
    local freeze_branch=$(patch_branch_name)
    local pkg_path="./dhis-2/dhis-web/dhis-web-apps"
    # local snapshot_branch="<version>${branch}-SNAPSHOT</version>"
    local snapshot_version="<version>${REL_VERSION}-SNAPSHOT</version>"
    local next_snapshot_version="<version>$(get_next_snapshot)</version>"

    echo "NEXT SNAPSHOT VERSION: $next_snapshot_version"

    pushd "$path"

    echo "----------------- Updating core ..."


    # we checked out the relevant version branch when we cloned
    # now we want to create a new patch release branch

    # branch
    create_branch "$freeze_branch"
    checkout "$freeze_branch"

    # track patch release app branches
    # updates all app version refs to tracking branch (either release or master)
    for app in "${app_repos[@]}"
    do
          local app_no_ext=${app%.git*}
          local app_clean=${app_no_ext##*/}
          sed -i "s:/${app_clean}.*\":/${app_clean}#${freeze_branch}\":" "${pkg_path}/apps-to-bundle.json"
    done

    # commit
    git add "${pkg_path}/apps-to-bundle.json"
    git commit -m "chore: set apps to track patch release branches"

    prepare_push "$freeze_branch"

    # back on the version branch...
    checkout "$branch"
    # update the mvn versions to next snapshot
    local find=$(unregex "$snapshot_version")
    local replace=$(unregex "$next_snapshot_version")
    echo "change snapshot from $find to $replace"
    for pom in `find . -name "pom*.xml"`
    do
      sed -i "s;${find};${replace};" $pom
      git add $pom
    done
    git commit -m "chore: update maven versions to $next_snapshot_version"

    prepare_push "$branch"

    popd
}

function clone_core {

  local name=$(app_name "$core_repo")
  local branch="$(core_branch_name)"
  clone "${core_repo}#${branch}" "${TEMP}/${name}"

  local path="${TEMP}/${name}"
  pushd "$path"

  # creates release branch for The Core
  # readonly created_branch=$(create_branch "$branch")
  # echo $created_branch

  # perform checkout in case we want to force a different date-time
  checkout "$branch" "$freeze_date_time"

  popd

  local pkg_path="/dhis-2/dhis-web/dhis-web-apps"

  # readonly app_repos=($(cat "${path}${pkg_path}/apps-to-bundle.json" | grep 'd2-ci' | sed 's;"https://github.com/d2-ci/\([^"]*\).*;\1; '))
  readonly app_repos=($(cat "${path}${pkg_path}/apps-to-bundle.json" | \
                      grep 'd2-ci' | \
                      grep -v '#FINAL' | \
                      sed 's;"https://github.com/d2-ci;git@github.com:dhis2;' | \
                      sed 's;#\([^"]*\)".*$;.git#\1;' | \
                      sed 's;",;#master;'))
  #readonly toggling_app_repos=($(cat "toggling_apps" | grep $branch | sed 's;\.git.*$;.git;'))
}

function clone_all {

    echo "Cloning app repositories to be updated:"
    for repo in "${app_repos[@]}"
    do
        #echo $repo
        local name=$(app_name "$repo")
        local app_package_branch=$(app_name "$repo")

        # echo "clone $repo ${TEMP}/${name}"
        clone "$repo" "${TEMP}/${name}"
    done
}



function main {
    local TEMP="./temp_$$"

    clone_core
    clone_all
    release_apps
    release_core

    echo "Done."
}

cleanup() {
    echo "cleanup.."
}




#
## start it up
#

trap cleanup EXIT
main

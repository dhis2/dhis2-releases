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
    # creates release tag

    local tag=$(app_tag_name)

    for app in "${app_repos[@]}"
    do
        local name=$(app_name "$app")
        local path="${TEMP}/${name}"
        local branch=$(app_branch_name "$app")
        local freeze_branch=$(patch_branch_name)

        echo "----------------- Updating $name ..."

        pushd "$path"



        if [ "$name" != "core-resource-app" ]
        then
          checkout "$branch"
          checkout "$freeze_branch"

          # during dry run display recent changes
          echo "============= ++ CHANGES IN PATCH RELEASE BRANCH ${name}:"
          #git log --no-merges --oneline --since='1 week ago'
          git log ${branch}..${freeze_branch} --oneline
          echo "============= -- CHANGES IN PATCH RELEASE BRANCH ${name}:"

          create_tag "$tag"

          prepare_push "$tag"
        fi


        popd
    done
}

function release_core {
    local name=$(app_name "$core_repo")
    local path="${TEMP}/${name}"
    local branch="$(core_branch_name)"
    local freeze_branch=$(patch_branch_name)
    local tag=$(app_tag_name)
    local pkg_path="./dhis-2/dhis-web/dhis-web-apps"
    local snapshot_branch="<version>${branch}-SNAPSHOT</version>"
    local snapshot_version="<version>${REL_VERSION}-SNAPSHOT</version>"
    local tag_version="<version>${tag}</version>"
#    if [ "${SUFFIX}" == "" ]
#    then
#      local next_snapshot_version=$snapshot_version
#    else
      local next_snapshot_version="<version>$(get_next_snapshot)</version>"
#    fi
    echo "NEXT SNAPSHOT VERSION: $next_snapshot_version"

    pushd "$path"

    echo "----------------- Updating core ..."

    checkout "$freeze_branch"

      # during dry run display recent changes
      echo "============= ++ CHANGES IN PATCH RELEASE BRANCH core:"
#        git log --no-merges --oneline --since='1 week ago'
      git log ${branch}..${freeze_branch} --oneline
      echo "============= -- CHANGES IN PATCH RELEASE BRANCH core:"

    # updates all app version refs to tag
  jq --exit-status "(. |= (
    .|map(
            . |=
                if .|contains(\"#\") then
                    .|sub(\"#.*$\"; \"#${tag}\")
                else
                    .+\"#${tag}\"
                end
    )
  ))" "${pkg_path}/apps-to-bundle.json" > "${pkg_path}/apps-to-bundle.json.mod"
    mv "${pkg_path}/apps-to-bundle.json.mod" "${pkg_path}/apps-to-bundle.json"
    sed -i "s:/core-resource-app.*\":/core-resource-app#FINAL\":" "${pkg_path}/apps-to-bundle.json"

    # commits and tags
    git add "${pkg_path}/apps-to-bundle.json"
    git commit -m "chore: lock app versions to tag ${tag}"

    # update the mvn versions
    local find=$(unregex "$snapshot_version")
    local find_branch=$(unregex "$snapshot_branch")
    local replace=$(unregex "$tag_version")
    for pom in `find . -name "pom*.xml"`
    do
      sed -i "s;${find};${replace};" $pom
      sed -i "s;${find_branch};${replace};" $pom
      git add $pom
    done
    git commit -m "chore: update maven versions to ${tag}"

    create_tag "$tag"

    prepare_push "$freeze_branch"
    prepare_push "$tag"


    popd
}

function clone_core {

    local name=$(app_name "$core_repo")
    clone "$core_repo" "${TEMP}/${name}"

    local path="${TEMP}/${name}"
    pushd "$path"
    local branch="$(core_branch_name)"

    # creates release branch for The Core
    readonly created_branch=$(create_branch "$branch")
    echo $created_branch
    checkout "$branch" "$freeze_date_time"

    popd

    local pkg_path="/dhis-2/dhis-web/dhis-web-apps"

    readonly app_repos=($(cat "${path}${pkg_path}/apps-to-bundle.json" | grep 'd2-ci' | sed 's;"https://github.com/d2-ci;git@github.com:dhis2; ; s;["#].*$;.git;'))
    readonly toggling_app_repos=($(cat "toggling_apps" | grep $branch | sed 's;\.git.*$;.git;'))
}

function clone_all {

    echo "Cloning app repositories to be updated:"
    for repo in "${app_repos[@]}"
    do
        #echo $repo
        local name=$(app_name "$repo")
        clone "$repo" "${TEMP}/${name}"
    done
}


function recent_changes {
    local all_repos=()
    all_repos+=("${core_repo}" "${app_repos[@]}")

    for repo in "${all_repos[@]}"
    do
        local name=$(app_name "$repo")
        pushd "${TEMP}/${name}"
        echo "============= ++ CHANGES IN LAST WEEK ${name}:"
        git log --no-merges --oneline --since='1 week ago'
        echo "============= -- CHANGES IN LAST WEEK ${name}:"
        popd
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

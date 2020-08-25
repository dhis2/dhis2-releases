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



#
## helpers
#

source ./lib/helpers.sh



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
## functions
#


function app_tag_name {
    # turns 2.31 and rc1 into `2.31-rc1`

    local TAG="${REL_VERSION}"
    if [[ -n ${SUFFIX} ]]; then
        TAG="${TAG}-${SUFFIX}"
    fi
    echo "$TAG"
}

function get_next_snapshot {
    # turns 2.31.1 into `2.31.2`
    # unless we have provided a suffix, in which case, the patch
    # version is unchanged.
    local ITER=1
    if [ $SUFFIX ]
    then
      local ITER=0
    fi

    if [ $(core_branch_name) == $REL_VERSION ]
    then
      local BRANCH=$(core_branch_name)
      local NEXT_PATCH=0
      local NEXT_SNAPSHOT="$BRANCH.${NEXT_PATCH}-SNAPSHOT"
    else
      local BRANCH=$(core_branch_name)
      local NEXT_PATCH=$((${REL_VERSION#$BRANCH.} + ITER))
      local NEXT_SNAPSHOT="$BRANCH.${NEXT_PATCH}-SNAPSHOT"
    fi
    echo "$NEXT_SNAPSHOT"
}

function get_new_master {
    # turns 2.31 into `2.32`

    local BRANCH=$(core_branch_name)
    local NEXT_VERSION=$((${BRANCH#2.} + 1))
    local NEXT_SNAPSHOT="2.${NEXT_VERSION}-SNAPSHOT"

    echo "$NEXT_SNAPSHOT"
}

function app_branch_name {
    # turns 2.31 or 2.31.1.12.23.3 into `v31`
    # unless it is a feature-toggling app; in which case the branch is aways master

    if [[ " ${toggling_app_repos[@]} " =~ " $1 " ]]; then
        echo "master"
    else
    if [[ "$1" =~ "data-visualizer-app" ]]; then

                
        local RHS=${REL_VERSION#*.}
        local LHS=${RHS%%.*}
        echo "${LHS}.x"
      else
        local RHS=${REL_VERSION#*.}
        local LHS=${RHS%%.*}
        echo "v${LHS}"

      fi

      fi

}

function patch_branch_name {
    # turns 2.31.3 into `patch/2.31.3`

    echo "${PATCH_BRANCH_PREFIX}${REL_VERSION}"

}

function core_branch_name {
    local LHS=${REL_VERSION%%.*}
    local RHS=${REL_VERSION#*.}
    RHS=${RHS%%.*}
    echo "${LHS}.${RHS}"
}


function release_apps {
    # creates release branch and tag
    # pushes to remote

    local tag=$(app_tag_name)

    for app in "${app_repos[@]}"
    do
        local name=$(app_name "$app")
        local path="${TEMP}/${name}"

        echo "----------------- Updating $name ..."

        pushd "$path"

        local branch=$(app_branch_name "$app")

           local created_app_b=$(create_branch "$branch")
            checkout "$branch" "$freeze_date_time"

              # make an empty commit to ensure Travis builds this new branch
            git commit --allow-empty -m "chore(release-prepare): branch $branch"

              if [ "$created_app_b" != "" ]
              then
                prepare_push "$branch"
              fi


        popd
    done
}

function release_core {
    local name=$(app_name "$core_repo")
    local path="${TEMP}/${name}"
    local branch="$(core_branch_name)"
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

      # we checked out the relevant version branch when we cloned


      # track app branches
      # updates all app version refs to tracking branch (either release or master)
      for app in "${app_repos[@]}"
      do
            local app_no_ext=${app%.git}
            local app_clean=${app_no_ext##*/}
            local app_branch=$(app_branch_name "$app")
            sed -i "s:/${app_clean}.*\":/${app_clean}#${app_branch}\":" "${pkg_path}/apps-to-bundle.json"
      done

      # commit
      git add "${pkg_path}/apps-to-bundle.json"
      git commit -m "chore: set apps to track version branches"

      prepare_push "$branch"


      # update the master in the case we have branched a new version
      if [ "$created_branch" != "" ]
      then
        echo "updating the mvn version on master"
        local new_master="$(get_new_master)"
        local next_version="<version>$new_master</version>"
        echo "$next_version"
        checkout "master"

        # update the mvn versions
        local find=$(unregex "$snapshot_version")
        local find_branch=$(unregex "$snapshot_branch")
        local replace=$(unregex "$next_version")
        for pom in `find . -name "pom*.xml"`
        do
          sed -i "s;${find};${replace};" $pom
          sed -i "s;${find_branch};${replace};" $pom
          git add $pom
        done
        git commit -m "chore: update maven versions to ${new_master}"

          prepare_push "master"
      fi






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

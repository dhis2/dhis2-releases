#!/usr/bin/env bash

pushd () {
    command pushd "$@" > /dev/null
}

popd () {
    command popd "$@" > /dev/null
}

function app_name {
    local repo=$1
    local name=$(echo "${repo}" | sed -n "s/^.*dhis2\/\(.*\)\.git.*$/\1/p")

    echo "$name"
}

function clone {

    local repo=${1%\#*}
    local path=$2
    local branch=$3

    if [[ "$branch" != "" ]]; then
        echo "cloning ${repo} branch ${branch} to ${path}"
        git clone -c advice.detachedHead=false -q "${repo}" --branch ${branch} "${path}"
    else
        echo "cloning ${repo} to ${path}"
        git clone -q "${repo}" "${path}"
    fi

}

function create_tag {
    local tag=$1
    local out=$(git rev-parse --verify "$tag" 2>&1)

    if [[ "$out" == fatal* ]]; then
        echo "creating tag: ${tag}"
        git tag "$tag"
    else
        echo "existing tag: ${tag}"
        git tag --force "$tag"
    fi
}
function prepare_push {
    local refspec=$1

    echo "cd $(pwd)" >> $PUSH
    echo "git push -q origin '$refspec'" >> $PUSH
}

function prepare_delete {
    local refspec=$1

    echo "cd $(pwd)" >> $PUSH
    echo "git push -q origin --delete '$refspec'" >> $PUSH
}

function app_branch_name {
    # turns 2.31 or 2.31.1.12.23.3 into `v31`
    # unless it is a feature-toggling app; in which case the branch is aways master


    if [[ " ${toggling_app_repos[*]} " =~ " $1 " ]]; then
      if [[ "$1" =~ "core-resources-app" ]]; then
        echo "FINAL"
      else
        echo "master"
      fi
    else
      if [[ "$1" =~ "data-visualizer-app" ]]; then


        local RHS=${REL_VERSION#*.}
        local LHS=${RHS%%.*}
        echo "${LHS}.x"
      else
        if [[ "$1" =~ "scheduler-app" ]]; then
          echo "100.x"
        else
          local RHS=${REL_VERSION#*.}
          local LHS=${RHS%%.*}
          echo "v${LHS}"
        fi

      fi

    fi

}


function core_branch_name {
    local LHS=${REL_VERSION%%.*}
    local RHS=${REL_VERSION#*.}
    RHS=${RHS%%.*}
    echo "${LHS}.${RHS}"
}

function get_next_patch {
    # turns 2.31.1 into `2.31.2`

    local BRANCH=$(core_branch_name)
    local NEXT_PATCH=$((${REL_VERSION#$BRANCH.} + 1))
    local NEXT_SNAPSHOT="$BRANCH.${NEXT_PATCH}"
    echo "$NEXT_SNAPSHOT"
}

function get_last_patch {

    if [ ${#REL_VERSION} -gt 7 ]
    then
        # turns 2.31.1.1 into `2.31.1`
        # turns 2.31.1.4 into `2.31.1.3`
        local lastHF=$((${REL_VERSION##[^-]*\.} - 1))
        if [ $lastHF -eq 0 ]
        then
            echo ${REL_VERSION%\.[^.]*}
        else
            echo "${REL_VERSION%\.[^.]*}.$lastHF"
        fi
    else
        # turns 2.31.1 into `2.31.2`
        local BRANCH=$(core_branch_name)
        local NEXT_PATCH=$((${REL_VERSION#$BRANCH.} - 1))
        local NEXT_SNAPSHOT="$BRANCH.${NEXT_PATCH}"
        echo "$NEXT_SNAPSHOT"

    fi
}

function get_new_master {
    # turns 2.31 into `2.32`

    local BRANCH=$(core_branch_name)
    local NEXT_VERSION=$((${BRANCH#2.} + 1))
    local NEXT_SNAPSHOT="2.${NEXT_VERSION}"

    echo "$NEXT_SNAPSHOT"
}

function patch_branch_name {
    # turns 2.31.3 into `patch/2.31.3`
    echo "${PATCH_BRANCH_PREFIX}${REL_VERSION}"
}

function previous_patch_branch {
    # turns 2.31.3 into `patch/2.31.2`
    local LAST_REL=$(get_last_patch)
    echo "${PATCH_BRANCH_PREFIX}${LAST_REL}"
}


# REL_VERSION="2.36.9"
# get_last_patch
# core_branch_name
# REL_VERSION="2.36.9.1"
# get_last_patch
# core_branch_name
# REL_VERSION="2.37.0.2"
# get_last_patch
# core_branch_name
# REL_VERSION="2.31.1.4"
# get_last_patch
# core_branch_name
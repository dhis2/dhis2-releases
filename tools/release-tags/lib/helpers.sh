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

function app_package_branch {
    echo "${1#[^#]*\#}"
}

function checkout {
    local branch=$1
    local fd=""
    local freeze_date=${2:-${fd}}
    echo "checking out branch: ${branch}"
    git checkout $git_quiet "$branch"
    if [[ "${freeze_date}" != "" ]]
    then
      local freeze_commit=$(git rev-list -1 --before="${freeze_date}" ${branch})
      git checkout ${freeze_commit}
    fi
    # git fetch origin "$branch"
    # git merge
}

function clone {

    local repo=${1%\#*}
    local path=$2
    local branch=${1#[^#]*\#}

    if [[ ! -d "$path" ]]; then
        echo "cloning ${repo} branch ${branch} to ${path}"
        git clone $git_quiet "${repo}" --branch ${branch} --single-branch "${path}"
    else
        pushd "$path"
        echo "resetting ${path} to ${branch} branch"
        git reset $git_quiet HEAD --hard
        git checkout $git_quiet ${branch}

        # remove local tags and get remote
        local pruned_tags=$(git tag -l | xargs git tag -d)

        # remove local branches
        local pruned_branches=$(git branch | grep -v ${branch} | xargs git branch -D)

        # update master
        git fetch $git_quiet origin
        git merge $git_quiet
        popd
    fi
}

function create_branch {
    # this should only return some output if a new branch is created
    local branch=$1
    local out=$(git rev-parse --verify "origin/${branch}" 2>&1)

    if [[ "$out" == fatal* ]]; then
        echo "creating branch: ${branch}"
        git branch $git_quiet "$branch"
    # else
    #     echo "existing branch: ${branch}"
    fi
}

function create_branch_new {
    # this should only return some output if a new branch is created
    local branch=$1
    local out=$(git rev-parse --verify "origin/${branch}" 2>&1)

    if [[ "$out" == fatal* ]]; then
        echo "creating branch: ${branch}"
        git branch $git_quiet "$branch"
    else
        echo "existing branch: ${branch}, Exiting."
        exit 1
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

function push {
    local refspec=$1

    #git push $git_quiet origin "$refspec"
}

function prepare_push {
    local refspec=$1

    echo "cd $(pwd)" >> $PUSH
    echo "git push $git_quiet origin '$refspec'" >> $PUSH
}


function unregex {
   # http://stackoverflow.com/a/2705678/120999
   sed -e 's/[]\/()$*.^|[]/\\&/g' <<< "$1"
}


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

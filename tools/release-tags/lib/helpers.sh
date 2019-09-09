#!/usr/bin/env bash

function app_name {
    local repo=$1
    local name=$(echo "${repo}" | sed -n "s/^.*dhis2\/\(.*\)\.git$/\1/p")

    echo "$name"
}

function checkout {
    local branch=$1
    echo "checking out branch: ${branch}"
    git checkout $git_quiet "$branch"
    # git fetch origin "$branch"
    # git merge
}

function clone {
    local repo=$1
    local path=$2

    if [[ ! -d "$path" ]]; then
        echo "cloning ${repo} to ${path}"
        git clone $git_quiet "${repo}" "${path}"
    else
        pushd "$path"
        echo "resetting ${path} to master branch"
        git reset $git_quiet HEAD --hard
        git checkout $git_quiet master

        # remove local tags and get remote
        local pruned_tags=$(git tag -l | xargs git tag -d)

        # remove local branches
        local pruned_branches=$(git branch | grep -v "master" | xargs git branch -D)

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

function create_tag {
    local tag=$1
    local out=$(git rev-parse --verify "$tag" 2>&1)

    if [[ "$out" == fatal* ]]; then
        echo "creating tag: ${tag}"
        git tag "$tag"
    else
        echo "existing tag: ${tag}"
    fi
}

function push {
    local refspec=$1

    git push $git_quiet origin "$refspec"
}


function unregex {
   # http://stackoverflow.com/a/2705678/120999
   sed -e 's/[]\/()$*.^|[]/\\&/g' <<< "$1"
}

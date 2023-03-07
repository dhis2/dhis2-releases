#!/usr/bin/env bash

readonly SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

readonly TEMP="./temp_$$"
readonly PUSH="${PWD}/push_$$"
mkdir -p "${SCRIPT_DIR}/resources"

source ${SCRIPT_DIR}/lib/bash_setup.sh
source ${SCRIPT_DIR}/lib/release_lib.sh


readonly PATCH_BRANCH_PREFIX="patch/"
readonly core_repo="git@github.com:dhis2/dhis2-core.git"
# readonly REL_VERSION=$1
# readonly CORE_BRANCH=$(core_branch_name)
# readonly PATCH_BRANCH=$(patch_branch_name)


function get_next_hotfix {

    if [ ${#1} -gt 7 ]
    then
        # turns 2.31.1.1 into `2.31.1.2`
        local nextHF=$((${1##[^-]*\.} + 1))
        echo "${1%\.[^.]*}.$nextHF"
    else
        # turns 2.31.1 into `2.31.1.1`
        echo "${1}.1"
    fi

}

function hotfix_branch {

        local LAST=${1}
        local NEXT=${2}
        # create the new patch branch
        git checkout "${LAST}"
        git checkout -b "${PATCH_BRANCH_PREFIX}${NEXT}"

        # update mvn version to the current snapshot
        this_snapshot="${LAST}"
        next_snapshot="${NEXT}-SNAPSHOT"
        for pom in $(find . -name "pom*.xml")
        do
            sed -i "s;${this_snapshot};${next_snapshot};" $pom
            git add $pom
        done
        git commit -m "chore: update maven versions to ${next_snapshot}"
        prepare_push "${PATCH_BRANCH_PREFIX}${NEXT}"
}


function manage_hotfixes {

    # for the last three major versions
    echo "Ensure the latest hotfix branches are availabe:"
    for v in $(git tag -l '2.*.*' | sed 's/\(2\.[3-9][0-9]\).*/\1/' | sort -ur | head -4)
    do
        echo "DHIS2 Version ${v}:"
        # get the latest release and make sure there is a hotfix branched from it
        for p in $(git tag -l "${v}.*" | grep -v EMBARGOED | sed 's/\(2\.[3-9][0-9].[0-9]{1,2}\).*/\1/' | sort -Vur | head -1)
        do
            # echo "Last release: $p"
            local nextHF=$(get_next_hotfix "$p")
            local hfText=" Last release: $p => Next Hotfix : ${nextHF}"
            # does the hotfix branch exist?
            if [ "$(git branch -a | grep "${PATCH_BRANCH_PREFIX}${nextHF}")" = "" ]
            then
                echo "${hfText} - need to create"
                hotfix_branch "${p}" "${nextHF}"
            else
                echo "${hfText} [exists]"
            fi

        done
    done

    # for the last four major versions (to take care of a "previous" maintenance version after new major release)
    echo "Remove any earlier unreleased hotfix branches:"
    for v in $(git tag -l '2.*.*' | sed 's/\(2\.[3-9][0-9]\).*/\1/' | sort -ur | head -4)
    do
        # get previous releases and remove any unused hotfix branches
        for p in $(git branch -r | grep -E "${PATCH_BRANCH_PREFIX}${v}\..*\..*" | sed 's/.*patch\/// ; s/\(2\.[3-9][0-9].[0-9]{1,2}.[0-9]{1,2}\).*/\1/' | sort -Vur | tail +2)
        do
            local prevText="Earlier hotfix: ${p}"
            # does the hotfix branch exist?
            if [ "$(git branch -a | grep "${PATCH_BRANCH_PREFIX}${p}")" != "" ]
            then
                # echo "no hotfix - great"
            # else
                # echo "hoftix exists - check is used"
                if [ "$(git tag -l "${p}")" = "" ]
                then
                    echo " ${prevText} - UNRELEASED. REMOVE..."
                    # echo "    git push origin --delete \"${PATCH_BRANCH_PREFIX}${p}\""
                    prepare_delete "${PATCH_BRANCH_PREFIX}${p}"
                else
                    echo " ${prevText} - RELEASED."
                fi
            fi

        done
    done
}



function process_core {

    echo "Cloning the core repository"
    local name=$(app_name "$core_repo")
    local repo_path="${TEMP}/${name}"
    local last_patch=$(get_last_patch)
    clone "$core_repo" "${repo_path}" "${last_patch}"


    # Make the updates to the core
    pushd "${repo_path}"

        git config --local --add advice.detachedHead false
        manage_hotfixes

    popd

}


function main {

   #input: <patch>
#    - clone core at previous patch tag
#       - create patch branches on core
#          - update mvn version to patch snapshot
    process_core
    #   prune_core

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

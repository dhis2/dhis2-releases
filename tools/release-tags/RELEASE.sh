#!/usr/bin/env bash 

readonly TEMP="./temp_$$"
readonly PUSH="${PWD}/push_$$"

source ./lib/bash_setup.sh
source ./lib/release_lib.sh


readonly PATCH_BRANCH_PREFIX="patch/"
readonly core_repo="git@github.com:dhis2/dhis2-core.git"
readonly REL_VERSION=$1
readonly PATCH_BRANCH=$(patch_branch_name)

declare app_repos
# Array of repos that handle version compatibility by
# feature toggling. These apps are developed on the master branch.
# The array is a subset of app_repos
# declare toggling_app_repos


function process_core {

    echo "Cloning the core repository"
    local name=$(app_name "$core_repo")
    local repo_path="${TEMP}/${name}"
    clone "$core_repo" "${repo_path}" "${PATCH_BRANCH}"

    local bundle_path="dhis-2/dhis-web/dhis-web-apps/apps-to-bundle.json"

    # for RELEASE tagging we only tag app repos that have a patch release branch (i.e. not Continuous Delivery apps)
    readonly app_repos=($(cat "${repo_path}/${bundle_path}" | grep "${PATCH_BRANCH}" | sed 's;"https://github.com/d2-ci;git@github.com:dhis2; ; s;["#].*$;.git;'))

    # Make the updates to the core
    pushd "${repo_path}"

        sed -i "s:${PATCH_BRANCH}:${REL_VERSION}:" "${bundle_path}"
        # commits and tags
        git add "${bundle_path}"
        git commit -m "chore: lock app versions to tag ${REL_VERSION}"

        # - update core mvn version to the pure tag (not snapshot)
        for pom in $(find . -name "pom*.xml")
        do
            sed -i "s;${REL_VERSION}-SNAPSHOT;${REL_VERSION};" $pom
            git add $pom
        done
        git commit -m "chore: update maven versions to ${REL_VERSION}"

        # - add tag to core
        create_tag "$REL_VERSION"

        prepare_push "$PATCH_BRANCH"
        prepare_push "$REL_VERSION"
    popd


    # readonly toggling_app_repos=($(cat "toggling_apps" | grep $branch | sed 's;\.git.*$;.git;'))
}

function process_apps {

    echo "Cloning app repositories to be updated:"
    for repo in "${app_repos[@]}"
    do
        #echo $repo
        local name=$(app_name "$repo")
        local repo_path="${TEMP}/${name}"
        echo "clone $name"
        clone "${repo}" "${repo_path}" "$PATCH_BRANCH"
        pushd "${repo_path}"
            create_tag "${REL_VERSION}"
            prepare_push "${REL_VERSION}"
        popd
    done
}

function main {

    #input: <release tag>

    # - clone the core patch branch
        # - update core mvn version to the pure tag (not snapshot)
        # - add tag to core
        process_core
    # - clone all the apps non-CD at the reference from the bundled-apps
        # - add tag to apps
        process_apps

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
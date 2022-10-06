#!/usr/bin/env bash
readonly SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

readonly TEMP="./temp_$$"
readonly PUSH="${PWD}/push_$$"
readonly FTA="${SCRIPT_DIR}/resources/feature_toggling_apps"
readonly CDA="${SCRIPT_DIR}/resources/continuous_delivery_apps"
mkdir -p "${SCRIPT_DIR}/resources"

source ${SCRIPT_DIR}/lib/bash_setup.sh
source ${SCRIPT_DIR}/lib/release_lib.sh
source ${SCRIPT_DIR}/lib/update_togglers.sh


readonly PATCH_BRANCH_PREFIX="patch/"
readonly core_repo="git@github.com:dhis2/dhis2-core.git"
readonly REL_VERSION=$1
readonly CORE_BRANCH=$(core_branch_name)
readonly PATCH_BRANCH=$(patch_branch_name)


declare app_repos
# Array of repos that handle version compatibility by
# feature toggling. These apps are developed on the master branch.
# The array is a subset of app_repos
declare toggling_app_repos
readonly toggling_app_repos=($(cat "$FTA" | grep ${CORE_BRANCH} | sed 's;\.git.*$;.git;'))
readonly continuous_delivery_apps=($(cat "$CDA" | grep "${CORE_BRANCH}:" | sed 's; .*$;;'))


function process_core {

    echo "Cloning the core repository"
    local name=$(app_name "$core_repo")
    local repo_path="${TEMP}/${name}"
    clone "$core_repo" "${repo_path}" "master"

    local bundle_path="dhis-2/dhis-web/dhis-web-apps/apps-to-bundle.json"

    readonly app_repos=($(cat "${repo_path}/${bundle_path}" | grep "d2-ci" | sed 's;"https://github.com/d2-ci;git@github.com:dhis2; ; s;["#].*$;.git;'))

    # Make the updates to the core
    pushd "${repo_path}"

        # create the new patch branch
        git checkout -b "${CORE_BRANCH}"

        for repo in "${app_repos[@]}"
        do
            #echo $repo
            local app_name=$(app_name "$repo")
            local app_branch="$(app_branch_name $repo)"
            sed -i "s:/${app_name}[^\"]*\":/${app_name}#${app_branch}\":" "${bundle_path}"
        done

        # commits and tags
        git add "${bundle_path}"
        git commit -m "chore: lock app versions to version branches"


        # update mvn version on the core dev branch
        this_snapshot="${CORE_BRANCH}-SNAPSHOT"
        next_snapshot="${CORE_BRANCH}.0-SNAPSHOT"
        # # - update core mvn version to the pure tag (not snapshot)
        for pom in $(find . -name "pom*.xml")
        do
            sed -i "s;${this_snapshot};${next_snapshot};" $pom
            git add $pom
        done
        git commit -m "chore: update maven versions to ${next_snapshot}"
        prepare_push "${CORE_BRANCH}"


        # update mvn version on the core master
        git checkout "master"
        this_snapshot="${CORE_BRANCH}-SNAPSHOT"
        next_snapshot="$(get_new_master)-SNAPSHOT"
        # # - update core mvn version to the pure tag (not snapshot)
        for pom in $(find . -name "pom*.xml")
        do
            sed -i "s;${this_snapshot};${next_snapshot};" $pom
            git add $pom
        done
        git commit -m "chore: update maven versions to ${next_snapshot}"
        prepare_push "master"


    popd

}

function process_apps {


    echo "Cloning app repositories to be updated:"
    for repo in "${app_repos[@]}"
    do
        #echo $repo
        local app_name=$(app_name "$repo")
        local app_branch=$(app_branch_name "$repo")
        if [[ "$app_branch" != "master" ]]
        then
            local repo_path="${TEMP}/${app_name}"
            clone "${repo}" "${repo_path}" "master"
            pushd "${repo_path}"
                git checkout -b "${app_branch}"
                # need to push an empty commit to ensure we trigger a build
                git commit --allow-empty -m "chore(release-prepare): cut ${app_branch}"
                prepare_push "${app_branch}"
            popd
        fi
    done

}

function main {


   #input: <major version>
#    - clone core master
    #    - create new version branch
    #    - reference correct app branches in core bundled-apps
    #    - update mvn version on master for next dev version
        process_core
#    - clone bundled non-FT apps
    #    - create relevant app branches (`vXX/X.X`)
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

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
    clone "$core_repo" "${repo_path}" "$CORE_BRANCH"

    local bundle_path="dhis-2/dhis-web/dhis-web-apps/apps-to-bundle.json"

    readonly app_repos=($(cat "${repo_path}/${bundle_path}" | grep "d2-ci" | sed 's;"https://github.com/d2-ci;git@github.com:dhis2; ; s;["#].*$;.git;'))

    # Make the updates to the core
    pushd "${repo_path}"

        # create the new patch branch
        git checkout -b "${PATCH_BRANCH}"

        for repo in "${app_repos[@]}"
        do
            #echo $repo
            local app_name=$(app_name "$repo")
            if [[ " ${continuous_delivery_apps[@]} " =~ "$app_name" ]]
            then
                app_cd_version=$(cat "$CDA" | grep $app_name | sed "s;.*$CORE_BRANCH:\([^ ]*\).*;\1;")
                sed -i "s:${app_name}[^\"]*\":${app_name}#${app_cd_version}\":" "${bundle_path}"
            else
                sed -i "s:${app_name}[^\"]*\":${app_name}#${PATCH_BRANCH}\":" "${bundle_path}"
            fi
        done

        # commits and tags
        git add "${bundle_path}"
        git commit -m "chore: lock app versions to branch ${PATCH_BRANCH}"
        prepare_push "$PATCH_BRANCH"


        # update mvn version on the core dev branch
        git checkout "$CORE_BRANCH"
        this_snapshot="${REL_VERSION}-SNAPSHOT"
        next_snapshot="$(get_next_patch)-SNAPSHOT"
        # # - update core mvn version to the pure tag (not snapshot)
        for pom in $(find . -name "pom*.xml")
        do
            sed -i "s;${this_snapshot};${next_snapshot};" $pom
            git add $pom
        done
        git commit -m "chore: update maven versions to ${next_snapshot}"
        prepare_push "$CORE_BRANCH"

    popd


    # readonly toggling_app_repos=($(cat "toggling_apps" | grep $branch | sed 's;\.git.*$;.git;'))
}

function process_apps {


    echo "Cloning app repositories to be updated:"
    for repo in "${app_repos[@]}"
    do
        #echo $repo
        local app_name=$(app_name "$repo")
        if [[ " ${continuous_delivery_apps[@]} " =~ "$app_name" ]]
        then
            echo "$app_name is a Continuous Delivery app. Skipping."
        else
            local repo_path="${TEMP}/${app_name}"
            # echo "clone $app_name"
            clone "${repo}" "${repo_path}" "$(app_branch_name $repo)"
            pushd "${repo_path}"
                git checkout -b "${PATCH_BRANCH}"
                # need to push an empty commit to ensure we trigger a build
                git commit --allow-empty -m "chore(release-prepare): cut ${PATCH_BRANCH}"
                prepare_push "${PATCH_BRANCH}"
            popd
        fi
    done

}

function main {

   #input: <patch>
#    - clone core dev branch
#       - create patch branches on core
#          - reference the correct branches in bundled-apps
#             - version branches for CD apps
#             - patch branches for others, including FT apps
#       - update mvn version on core version branch to reference following patch
        process_core
#    - clone bundled non-CD apps
#       - create patch branches on apps
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

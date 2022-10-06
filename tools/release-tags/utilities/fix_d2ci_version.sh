#!/usr/bin/env bash

# Sometimes the latest version of a continuous-delivery app is not available on d2-ci.
# Usually this is because it was build with [skip-ci]
# This causes a problem when freezing branches for patch release, as the app version
# (which matches the development HEAD at that time) is not available for the core RC build -
# the artefacts are there, but the reference to the version is missing.
#
# This script, from Varl, finds the artefacts based on the app repo and then creates the
# necessary branch in d2-ci
#
# usage:
# ./fix_d2ci_version.sh <app-name> <missing version tag>
# e.g.
# ./fix_d2ci_version app-management-app v100.2.11

pushd () {
    command pushd "$@" > /dev/null
}

popd () {
    command popd "$@" > /dev/null
}

readonly TEMP="./d2ci_$$"
mkdir -p ${TEMP}

APP="$1"
VERSION="$2"

pushd ${TEMP}

    # get the application
    git clone -q -c advice.detachedHead=false --branch "$VERSION" --single-branch "git@github.com:dhis2/${APP}.git"

    pushd "$APP"
        
        # for "old" release ([skip ci] in the commit msg)
        SRC_SHA=$(git log -1 --skip=1 --abbrev-commit --oneline | cut -d ' ' -f 1)
        
        # for "new" release ([skip release] in the commit msg)
        #SRC_SHA=$(git log -1 --abbrev-commit --oneline | cut -d ' ' -f 1)

        git clone -q "git@github.com:d2-ci/${APP}.git" d2ci --single-branch

        pushd d2ci
        
            BUILD_SHA=$(git log --oneline | grep "$SRC_SHA" | cut -d ' ' -f 1)
            git checkout -q "$BUILD_SHA"
            git switch -c "$VERSION"
            #git push origin "$VERSION"

            echo "Run the following to complete the fix: cd ${PWD} && git push origin \"$VERSION\""
        
        popd
        #rm -rf temp
    popd
    #rm -rf "$APP"
popd


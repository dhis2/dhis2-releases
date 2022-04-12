#!/usr/bin/env bash


echo "Updating lists of toggling apps and continuous delivery versions..."

# FTA="lib/feature_toggling_apps"
# CDA="lib/continuous_delivery_apps"
toggling_readme="https://raw.githubusercontent.com/dhis2/dhis2-core/master/dhis-2/dhis-web/dhis-web-apps/README.md"
versions=()


echo "# Mapping of github repos to the DHIS2 versions that use the" > $FTA
echo "# master branch of the app (feature toggling)" >> $FTA
echo "#" >> $FTA
echo "" >> $FTA
echo "" > $CDA


function process_line() {

    # echo "${#versions[@]}"
    #echo "Processing line $Counter: $1"
    if [[ "$1" =~ "|app repository|".* ]]
    then
        versions+=(${1//|/ })
        # echo "${#versions[@]}"
        # echo "${versions[@]}"
    else
        if [[ ${#versions[@]} -ne 0 ]]
        then
            col=1
            columns=(${1//|/ })
            local app=""
            for c in "${columns[@]}"
            do
                if [[ $col -eq 1 ]]
                then
                    echo -n "${c} " >> $FTA
                    echo -n "${c} " | sed 's/git.*\/\(.*\)\.git/\1/' >> $CDA
                    app="$(echo "${c}" | sed 's/git.*\/\(.*\)\.git/\1/')"
                    contver=""
                else
                    if [[ "$c" == "master" ]]
                    then
                        echo -n "${versions[$col]} " >> $FTA

                        #$CDA
                        if [[ "$contver" == "" ]]
                        then
                            contver=$(git -c 'versionsort.suffix=-'     ls-remote --exit-code --refs --sort='version:refname' --tags "${columns[0]}" '*.*.*'     | tail --lines=1     | cut --delimiter='/' --fields=3)
                        fi
                        if [[ "$contver" =~ v[1-9][0-9][0-9]\.[0-9]+\.[0-9]+ ]]
                        then
                            echo -n "${versions[$col]}:$contver " >> $CDA
                        fi
                        # core-resources-app is no longer maintained; use "FINAL" version
                        if [[ "${app}" == "core-resource-app" ]]
                        then
                            echo -n "${versions[$col]}:FINAL " >> $CDA
                        fi

                    fi
                fi
                ((col+=1))
            done
            echo "" >> $FTA
            echo "" >> $CDA

        fi
    fi


}

while IFS='' read -r LinefromFile ; do

    process_line "$LinefromFile"

done < <(curl -s $toggling_readme)

echo "done."



// Make a GET request to the URL
fetch('../data/apphub.json')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        const apps = data.result || [];
        // console.log(apps);
        //const coreApps = apps.filter(app => app.coreApp);
        // filter apps by developer.organisation = "DHIS2"
        const coreApps = apps.filter(app => app.developer.organisation === "DHIS2");

        let minDate = Infinity;
        let maxDate = -Infinity;

        const originalPlotData = coreApps.map(coreApp => {
            const x = coreApp.versions.map(v => {
                const date = new Date(v.lastUpdated);
                minDate = Math.min(minDate, date);
                maxDate = Math.max(maxDate, date);
                return date;
            });
            const y = coreApp.versions.map(() => coreApp.name);
            const minDhisVersions = coreApp.versions.map(v => v.minDhisVersion);
            const maxDhisVersions = coreApp.versions.map(v => v.maxDhisVersion); // Assuming each version has a maxDhisVersion property
            const text = coreApp.versions.map(v => `Version: ${v.version}<br>Min DHIS Version: ${v.minDhisVersion}<br>Max DHIS Version: ${v.maxDhisVersion}`);
            return {
                x,
                y,
                minDhisVersions,
                maxDhisVersions, // Include maxDhisVersions in the trace
                mode: 'lines+markers',
                type: 'scatter',
                name: coreApp.name,
                text,
                textposition: 'top right',
                line: { dash: 'dot', width: 0.5 },
                marker: {
                    symbol: coreApp.coreApp ? 'circle' : 'circle-open', // change 'circle' and 'square' to your preferred shapes
                    opacity: coreApp.coreApp ? 1 : 0.5, // change 1 and 0.5 to your preferred opacity
                    size: 10 // change 10 to your preferred marker size

                }
            };
        });


        // set the starting date to 6 months before the maxDate
        const startDate = new Date(maxDate);
        startDate.setMonth(startDate.getMonth() - 6);


        const layout = {
            title: 'DHIS2 Core Team Releases on AppHub over Time<br><span style="color:#888;">closed circle = coreApp:true, open circle = coreApp:false</span>',
            // width: window.innerWidth,
            // height: window.innerHeight,
            margin: {
                l: 50,
                r: 50,
                b: 50,
                t: 50,
                pad: 4
            },
            hovermode: 'closest', // Show closest data on hover
            xaxis: {
                range: [startDate, maxDate],
                rangeselector: {
                    buttons: [
                        {
                            count: 1,
                            label: '1m',
                            step: 'month',
                            stepmode: 'backward'
                        },
                        {
                            count: 6,
                            label: '6m',
                            step: 'month',
                            stepmode: 'backward'
                        },
                        {
                            count: 1,
                            label: '1y',
                            step: 'year',
                            stepmode: 'backward'
                        },
                        {
                            count: 2,
                            label: '2y',
                            step: 'year',
                            stepmode: 'backward'
                        },
                        {
                            step: 'all'
                        }
                    ]
                },
                rangeslider: {
                    visible: true,
                    thickness: 0.1, // Adjust the height of the rangeslider
                    bgcolor: '#D8F7F7', // Background color of the rangeslider
                    bordercolor: 'gray', // Border color of the rangeslider
                    borderwidth: 1, // Border width of the rangeslider
                    yaxis: {
                        rangemode: 'auto',
                        color: 'blue' // Color of the range bar
                    }
                },
                type: 'date',
                minor: {
                    dtick: "M1" // Minor ticks every month
                }
                
            },
            yaxis: {
                borderwidth: 0,
                // title: 'DHIS2 Core Team Apps',
            },
            margin: {
                l: 150 // Increase left margin to allow more space for y-axis labels
            }
        };


        // After Plotly.newPlot
        Plotly.newPlot('core-apps-plot', originalPlotData, layout, {responsive: true});

        // Event listeners for minDhisVersion
        document.getElementById('minDhisVersionDropdown').addEventListener('change', function() {
            const selectedVersion = this.value;
            // Handle the change and filter the data based on the selected version
            filterData(selectedVersion);
        });

        document.getElementById('clear-min-version').addEventListener('click', function() {
            document.getElementById('minDhisVersionDropdown').selectedIndex = 0;
            filterData();
        });
        


        function filterData(myDhisVersion) {
            const filteredData = originalPlotData.map(trace => {
                const filteredIndices = trace.minDhisVersions.map((minVersion, index) => {
                    const maxVersion = trace.maxDhisVersions[index]; // Assuming you have maxDhisVersions array in your trace
                    const isMinVersionValid = myDhisVersion ? minVersion <= myDhisVersion : true;
                    const isMaxVersionValid = maxVersion ? (myDhisVersion ? maxVersion >= myDhisVersion : true) : true;
                    return isMinVersionValid && isMaxVersionValid ? index : -1;
                }).filter(index => index !== -1);
                return {
                    ...trace,
                    x: filteredIndices.map(index => trace.x[index]),
                    y: filteredIndices.map(index => trace.y[index]),
                    text: filteredIndices.map(index => trace.text[index])
                };
            });
            Plotly.react('core-apps-plot', filteredData, layout);
        }
        
    })
    .catch(e => {
        console.error("Failed to retrieve data.", e);
    });

// Fetch the data
fetch('/dhis2-releases/downloads/v1/versions/stable.json')
.then(response => response.json())
.then(data => {
    const traces = [];

    // Parse the data for each major version
    data.versions.forEach(version => {
        const patchVersions = [];
        const dates = [];
        const hoverTexts = [];
        const markerBorders = []; // Array for marker colors
        const markerLineColors = []; // Array for marker line colors

        version.patchVersions.forEach(patch => {
            patchVersions.push(patch.version);
            dates.push(patch.releaseDate);
            hov = (patch.displayName || patch.name) + "<br>" + patch.releaseDate;
            hoverTexts.push(hov); // Use displayName if defined, otherwise use name

            // Check if hotfixVersion is greater than 0
            if (patch.hotfixVersion && patch.hotfixVersion > 0) {
                markerBorders.push(2); // Transparent marker color
                markerLineColors.push('orange'); // Orange border
            } else {
                markerBorders.push(0); // Default marker color
                markerLineColors.push('blue'); // Default border color
            }
        });

        // Create a trace for each major version
        const trace = {
            x: dates,
            y: patchVersions, // Extract the patch version number
            mode: 'lines+markers',
            type: 'scatter',
            name: (version.displayName  || version.name), // Name the trace by the major version
            text: hoverTexts, // Hover text
            hoverinfo: 'text', // Display x, y, and hover text on hover
            marker: {
                //color: markerColors,
                line: {
                    color: markerLineColors,
                    width: markerBorders // Border width
                }
            },
            line: {
                dash: 'dot', // Use dotted lines
                width: 1
            }
        };

        traces.push(trace);
    });

    const layout = {
        title: 'DHIS2 Stable Patch Releases Over Time',
        height: 800, // Adjust the height of the chart
        width: 1200, // Adjust the width of the chart
        hovermode: 'closest', // Show closest data on hover
        xaxis: {
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
            title: 'Patch Version',
            dtick: 1 // Minor ticks every 1 unit
        }
    };
    

    Plotly.newPlot('plotly-div', traces, layout);
});

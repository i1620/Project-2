function init() {

    d3.csv("data_sources/daily_up 2.csv").then(function (data) {
        console.log(data);

    data.sort(function(a,b){
        return parseFloat(b.state) - parseFloat(a.state);

    });

    data = data.reverse();  

    var trace1 = {
        x: data.map(row => row.date_modified),
        y: data.map(row => row.death),
        name: "Deaths",
        type: "line"
    };

    var trace2 = {
        x: data.map(row => row.date_modified),
        y: data.map(row => row.hospitalizedCumulative),
        name: "Hospitalized Cumulative",
        type: "line"
    };

    var trace3 = {
        x: data.map(row => row.date_modified),
        y: data.map(row => row.positive),
        name: "Positive Results",
        type: "line"
    };

    var chartData = [trace1,trace2,trace3];

    var layout = {
        xaxis:{title:"Dates"},
        height: 600,
        width: 1000
    };

    Plotly.newPlot('line', chartData, layout);
    });

    var dropdown = d3.select("#selDataset");

    // Read Data
    // var state = ['AK', 'AL', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

    d3.csv("data_sources/daily_up 2.csv").then(function (data) {
        console.log(data)
    
    var state = data.map(row => row.state)
    // var state = ['AK', 'AL', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

        state.forEach(function (state) {
            dropdown.append("option").text(state).property("value");
        });
    });
    
    // d3.csv("data_sources/daily_up 2.csv").then(function (data) {
    //      // console.log(data[data].state);
    // // var states = data.columns[1]
    // var states = ['AK', 'AL', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
    // d3.select("select")
    //     .selectAll("option")
    //     .data(states)
    //     .text(function (d) {
    //         return d
    //     })
    // d3.select("select")
    //     .selectAll("option")
    //     .data(states)
    //     .enter()
    //     .append("option")
    //     .text(function (d) {
    //         return d
    //     })
    // })
}

init();
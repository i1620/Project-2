function init() {

    d3.csv("data_sources/national_data.csv").then(function (data) {
        console.log(data[0]);

    data.sort(function(a,b){
        return parseFloat(b.date) - parseFloat(a.date);

    });

    // data = data.slice(0,100);
    data = data.reverse();  

    var trace1 = {
        x: data.map(row => row.date_modified),
        y: data.map(row => row.death),
        name: "Deaths",
        type: "scatter"
    };

    var trace2 = {
        x: data.map(row => row.date_modified),
        y: data.map(row => row.hospitalizedCumulative),
        name: "Hospitalized Cumulative",
        type: "scatter"
    };

    var trace3 = {
        x: data.map(row => row.date_modified),
        y: data.map(row => row.positive),
        name: "Positive Results",
        type: "scatter"
    };


    var chartData = [trace1,trace2,trace3];

    var layout = {
        xaxis:{title:"Dates"},
        height: 600,
        width: 1000
    };
    Plotly.newPlot('line', chartData, layout);
});
}

init();
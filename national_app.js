// function getPlot(id) {

//     d3.json("data_sources/national_data.json").then((data) => {
//         console.log(data)

//         var trace1 = {
//             x: "date",
//             y: "deaths",
//             type: 'scatter'
//         };

//         var trace2 = {
//             x: "date",
//             y: "samples.positive",
//             type: 'scatter'
//         };

//         var data = [trace1, trace2];

//         Plotly.newPlot('myDiv', data);


//     });
// }

// function getInfo(id) {

//     // Read Data
//     d3.json("data_sources/national_data.json").then((data) => {

//         var date = data.date;
//         console.log(date)

//         var result = date.filter(meta => meta.id.toString() == id)[0]

//         var date_info = d3.select("#sample-metadata");

//         date_info.html("");

//         Object.entries(result).forEach((key) => {
//             date_info.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
//         });
//     });
// }

// function init() {

//     var dropdown = d3.select("#selDataset");

//     // Read Data
//     d3.json("data_sources/national_data.json").then((data) => {
//         console.log(data)

//         data.date.forEach(function(date) {
//             dropdown.append("option").text(date).property("value");
//         });

//         getPlot(data.date[0]);
//         getInfo(data.date[0]);
//     });
// }

// function optionChanged(id) {
//     init();
//     getInfo(id);
// }

// init();

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

// function getInfo() {

//     // Read Data
//     d3.csv("data_sources/national_data.csv").then(function (data) {

//         // var data = data.data;
//         console.log(data[0]);

//         // var result = data.filter(meta => meta.id.toString() == id)[0]

//         var date_info = d3.select("#sample-metadata");

//         date_info.html("");

//         Object.entries(result).forEach((key) => {
//             date_info.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
//         });
//     });
// }

// function init() {

//     var dropdown = d3.select("#selDataset");

//     // Read Data
//     d3.csv("data_sources/national_data.csv").then(function (data) {
//         console.log(data)

//         data.forEach(function (data) {
//             dropdown.append("option").text("value");
//         });

//         getPlot(data[0]);
//         getInfo(data[0]);
//     });
// }

// function optionChanged(id) {
//     getPlot();
//     getInfo();
// }

init();
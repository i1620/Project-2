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

// function init() {

//     d3.json("data_sources/daily_up.json").then((importedData) => {   
//         console.log(importedData)
//         var data = importedData;

//         // data.sort(function (a, b) {
//         //     return parseFloat(b.date) - parseFloat(a.date);

//         // });

//         // data = data.slice(0, 100);
//         // data = data.reverse();

//         // var date1 = GetFormattedDate(data.map(row => row.date))
//         console.log(data.dateModified)

//         data.dateModified.forEach(function (date) {
//             dropdown.append("option").text(date).property("value");
//         });

//         var trace1 = {
//             x: data.dateModified,
//             y: data.death,
//             name: "Deaths",
//             type: "bar"
//         };

//         var trace2 = {
//             x: data.dateModified,
//             y: data.hospitalizedCumulative,
//             name: "Hospitalized Cumulative",
//             type: "bar"
//         };

//         var trace3 = {
//             x: data.dateModified,
//             y: data.positive,
//             name: "Positive Results",
//             type: "bar"
//         };


//         var chartData = [trace1, trace2, trace3];

//         var layout = {
//             xaxis: { title: "Dates" },
//             height: 600,
//             width: 1000
//         };
//         Plotly.newPlot('scatter', chartData, layout);
//     });
// }

// function GetFormattedDate(date) {
//         var todayTime = new Date(date);
//         // var month = format(todayTime .getMonth() + 1);
//         // var day = format(todayTime .getDate());
//         // var year = format(todayTime .getFullYear());
//         // return month + "/" + day + "/" + year;
//         return todayTime;
//     }

// function init() {

//     d3.json("data_sources/daily_up.json").then((importedData) => {
//         console.log(importedData)
//         var data = importedData;

//         // data.sort(function (a, b) {
//         //     return parseFloat(b.date) - parseFloat(a.date);
//         // });

//         // data = data.slice(0, 100);
//         // data = data.reverse();

//         var trace1 = {
//             x: data.date_modified,
//             y: data.death,
//             name: "Deaths",
//             type: "bar"
//         };

//         var trace2 = {
//             x: data.date_modified,
//             y: data.hospitalizedCumulative,
//             name: "Hospitalized Cumulative",
//             type: "bar"
//         };

//         var trace3 = {
//             x: data.date_modified,
//             y: data.positive,
//             name: "Positive Results",
//             type: "bar"
//         };


//         var chartData = [trace1, trace2, trace3];

//         var layout = {
//             xaxis: { title: "Dates" },
//             height: 600,
//             width: 1000
//         };
//         Plotly.newPlot('line', chartData, layout);
//     });
// }


function init() {

    d3.csv("data_sources/daily_up.csv").then(function (data) {
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
}

var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
d3.select("select")
    .selectAll("option")
    .data(states)
    .text(function (d) {
        return d
    })
d3.select("select")
    .selectAll("option")
    .data(states)
    .enter()
    .append("option")
    .text(function (d) {
        return d
    })

init();
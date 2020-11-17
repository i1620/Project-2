function getPlot(id) {

    d3.json("data_sources/national_data.json").then((data) => {
        console.log(data)


    var samples = data.samples.filter(s => s.id.toString() === id)[0];
    console.log(samples)

        var trace1 = {
            x: samples.date,
            y: samples.deaths,
            type: 'scatter'
        };

        var trace2 = {
            x: samples.date,
            y: samples.positive,
            type: 'scatter'
        };

        var data = [trace1, trace2];

        Plotly.newPlot('myDiv', data);


    });
}

function getInfo(id) {

    // Read Data
    d3.json("data_sources/national_data.json").then((data) => {

        var date = data.date;
        console.log(date)

        var result = date.filter(meta => meta.id.toString() == id)[0]

        var date_info = d3.select("#sample-metadata");

        date_info.html("");

        Object.entries(result).forEach((key) => {
            date_info.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
        });
    });
}

function init() {

    var dropdown = d3.select("#selDataset");

    // Read Data
    d3.json("data_sources/national_data.json").then((data) => {
        console.log(data)

        data.date.forEach(function (date) {
            dropdown.append("option").text(date).property("value");
        });

        getPlot(data.date[0]);
        getInfo(data.date[0]);
    });
}

function optionChanged(id) {
    getPlot(id);
    getInfo(id);
}

init();
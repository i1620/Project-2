<<<<<<< HEAD
d3.csv("data_sources/daily_up 2.csv").then(function (data) {
    var states = []
    var positives = []
    var deaths = []
    var hospital = []
    var date = []
    var abbr = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]

    d3.select("select")
        .selectAll("option")
        .data(abbr)
        .enter()
        .append("option")
        .text(function(d) {
            return d
        })

// You can also define an anonymous function inline
    for (var i = 0; i < data.length; i++) {
        states.push(data[i].state);
        positives.push(data[i].positive);
        deaths.push(data[i].death);
        hospital.push(data[i].hospitalizedCurrently);
        date.push(data[i].date);
    }
    year = date[0][0] + date[0][1] + date[0][2] + date[0][3];
    month = date[0][4] + date[0][5];
    day = date[0][6] + date[0][7]
    console.log(month + "-" +  day + "-" + year)

    var dateformated = []
    for (var i = 0; i < date.length; i++) {
        year = date[i][0] + date[i][1] + date[i][2] + date[i][3];
        month = date[i][4] + date[i][5];
        day = date[i][6] + date[i][7]
        dateformated.push(month + "-" +  day + "-" + year)
    }

    console.log(dateformated)
    // initialize all data for alabama into array to be used for graphs
    function init() {
        var alPositives = []
        var alDeaths = []
        var alHospital = []
        var alDate = []
        for (var i = 0; i < states.length; i++) {
            if (states[i] === "AL") {
                alPositives.push(positives[i]);
                alDeaths.push(deaths[i]);
                alHospital.push(hospital[i]);
                alDate.push(dateformated[i]);
            }
        }
        console.log(alDate)
        var trace1 = {
            x: alDate.reverse(),
            y: alDeaths.reverse(),
            name: "Deaths",
            type: "line"
        }; 

        var trace2 = {
            x: alDate.reverse(),
            y: alHospital.reverse(),
            name: "Hospitalized Cumulative",
            type: "line"
        };

        var trace3 = {
            x: alDate.reverse(),
            y: alPositives.reverse(),
            name: "Positive Results",
            type: "line"
        };

        
        var chartData = [trace1,trace2,trace3];

        var layout = {
            xaxis:{
                title:"Dates",
                tickmode: "array",
                tickvals: ["03-15-2020", "04-15-2020","05-15-2020","06-15-2020","07-15-2020","08-15-2020","09-15-2020","10-15-2020","11-15-2020"],
                ticktext: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']
            },
            height: 600,
            width: 1000
        };
        Plotly.newPlot('line', chartData, layout);
    
    }

              // Call updatePlotly() when a change takes place to the DOM
            d3.selectAll("#selDataset").on("change", updatePlotly);
          
              // This function is called when a dropdown menu item is selected
            function updatePlotly() {
                // Use D3 to select the dropdown menu
                var dropdownMenu = d3.select("#selDataset");
                // Assign the value of the dropdown menu option to a variable
                var dataset = dropdownMenu.property("value");
              
                // // Initialize x and y arrays
                // var x = [];
                // var y = [];
                // var hover = [];
                var statePositives = []
                var stateDeaths = []
                var stateHospital = []
                var stateDate = []
                for (var i = 0; i <states.length; i++) {
                    if (dataset === states[i])
                        statePositives.push(positives[i]),
                        stateDeaths.push(deaths[i]),
                        stateHospital.push(hospital[i]),
                        stateDate.push(dateformated[i]);

                }
                var update = {
                    x: [stateDate.reverse(), stateDate.reverse(), stateDate.reverse()],
                    y: [stateDeaths.reverse(), stateHospital.reverse(), statePositives.reverse()]
                    }

                Plotly.restyle("line", update);
                        


                }


    init();
})
=======
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
>>>>>>> bf397b3e501ba15c15c3a3562ce95fd4621b87be

//Call in data source
d3.csv("data_sources/Race Data Entry - CRDT.csv").then(function (data) {
    var states = []
    var cases = []
    var deaths = []
    //var hospital = []
    var date = []
    // abbreviations array for the dropdown menu
    var abbr = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]
    //creating the dropdown menu
    d3.select("select")
        .selectAll("option")
        .data(abbr)
        .enter()
        .append("option")
        .text(function(d) {
            return d
        })

    //loop for pulling data into the arrays
    for (var i = 0; i < data.length; i++) {
        states.push(data[i].State);
        cases.push(data[i].Cases_Total);
        deaths.push(data[i].Deaths_Total);
        //hospital.push(data[i].hospitalizedCurrently);
        date.push(data[i].Date);
    }

    var dateformated = []
    //Loop for changing date format from yyyymmdd to mm-dd-yyyy
    for (var i = 0; i < date.length; i++) {
        year = date[i][0] + date[i][1] + date[i][2] + date[i][3];
        month = date[i][4] + date[i][5];
        day = date[i][6] + date[i][7]
        dateformated.push(month + "-" +  day + "-" + year)
    }


    // initialize all data for alabama into array to be used initial graph
    function init() {
        var alCases = []
        var alDeaths = []
        //var alHospital = []
        var alDate = []
        for (var i = 0; i < states.length; i++) {
            if (States[i] === "AL") {
                alCases.push(cases[i]);
                alDeaths.push(deaths[i]);
                //alHospital.push(hospital[i]);
                alDate.push(dateformated[i]);
            }
        }
        //array data starts at present and works backwards to the past, data needs to be reversed to appear correctly left to right
        var trace1 = {
            x: alDate.reverse(),
            y: alDeaths.reverse(),
            name: "Deaths",
            type: "line"
        }; 

        //var trace2 = {
           // x: alDate.reverse(),
           // y: alHospital.reverse(),
           // name: "Hospitalized Cumulative",
            //type: "line"
        //};

        var trace3 = {
            x: alDate.reverse(),
            y: alCases.reverse(),
            name: "Positive Results",
            type: "line"
        };

        
        var chartData = [trace1,trace3];

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
                //declare arrays to hold state specific data for updated graph
                var stateCases = []
                var stateDeaths = []
               // var stateHospital = []
                var stateDate = []
                for (var i = 0; i <states.length; i++) {
                    //verifying state data being pulled into state specific array is the state selected
                    if (dataset === states[i])
                        stateCases.push(cases[i]),
                        stateDeaths.push(deaths[i]),
                       // stateHospital.push(hospital[i]),
                        stateDate.push(dateformated[i]);

                }
                //array for updating x and y values for trace1, trace2, and trace3
                var update = {
                    x: [stateDate.reverse(), stateDate.reverse(), stateDate.reverse()],
                    y: [stateDeaths.reverse(), stateCases.reverse()]
                    }

                Plotly.restyle("line", update);
                        


                }


    init();
})

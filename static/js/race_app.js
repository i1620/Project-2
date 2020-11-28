function makeResponsive() {

    // if the SVG area isn't empty when the browser loads, remove it and replace it with a resized version of the chart
    var svgArea = d3.select("body").select("svg");
  
    // clear svg is not empty
    if (!svgArea.empty()) {
      svgArea.remove();
    }
  
    // SVG wrapper dimensions are determined by the current width and height of the browser window.
    var svgWidth = window.innerWidth;
    var svgHeight = window.innerHeight/1;
  
    var margin = {
      top: 40,
      right: 200,
      bottom: 200,
      left: 150
    };
  
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;

    // Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
    var svg = d3
      .select("body")
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .call(d3.zoom().on("zoom", function () {
        svg.attr("transform", d3.event.transform)
     }))
     .append("g");
  
    // Append an SVG group
    var chartGroup = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
  
    // Initial Params
    var chosenXAxis = "Deaths_Total";
    var chosenYAxis = "Cases_Total";
  
    // function used for updating x-scale var upon click on axis label
    function xScale(csvData, chosenXAxis) {
      var xLinearScale = d3.scaleLinear()
        .domain([d3.min(csvData, d => d[chosenXAxis]) * 0.85,
          d3.max(csvData, d => d[chosenXAxis]) * 1.15
        ])
        .range([0, width]);
      return xLinearScale;
    }
  // function used for updating y-scale var upon click on axis label
    function yScale(csvData, chosenYAxis) {
      var yLinearScale = d3.scaleLinear()
        .domain([d3.min(csvData, d => d[chosenYAxis]) * 0.85,
          d3.max(csvData, d => d[chosenYAxis]) * 1.15
        ])
        .range([height, 0]);
      return yLinearScale;
    }
  
    // function used for updating xAxis var upon click on axis label
    function renderXAxes(newXScale, xAxis) {
      var bottomAxis = d3.axisBottom(newXScale);
    
      xAxis.transition()
        .duration(1000)
        .call(bottomAxis);
      return xAxis;
    }
    
    // function used for updating yAxis var upon click on axis label
    function renderYAxes(newYScale, yAxis){
      var leftAxis = d3.axisLeft(newYScale, yAxis)
      
      yAxis.transition()
        .duration(1000)
        .call(leftAxis);
      return yAxis;
    }
  
    // function used for updating circles group with a x transition to new circles
    function renderXCircles(circlesGroup, newXScale, chosenXAxis) {
      circlesGroup.transition()
        .duration(1000)
        .attr("cx", d => newXScale(d[chosenXAxis]));
      return circlesGroup;
    }
  
    // function used for updating circles group with a y transition to new circles
    function renderYCircles(circlesGroup, newYScale, chosenYAxis) {
      circlesGroup.transition()
        .duration(1000)
        .attr("cy", d => newYScale(d[chosenYAxis]));
      return circlesGroup;
    }
  
    // function used for updating circles labels with a xtransition to new circles
    function renderXLabel (circlesLabels, newXScale, chosenXAxis){
      circlesLabels.transition()
        .duration(1000)
        .attr("x", d => newXScale(d[chosenXAxis]));
      return circlesLabels;
    }
  
    // function used for updating circles labels with a y transition to new circles
    function renderYLabel (circlesLabels, newYScale, chosenYAxis){
      circlesLabels.transition()
        .duration(1000)
        .attr("y", d => newYScale(d[chosenYAxis]));
      return circlesLabels
    }
  
    // function used for updating circles group with new tooltip
    function updateToolTip(chosenXAxis, chosenYAxis, circlesGroup) {
  
      if (chosenXAxis === "Deaths_Total") {
        var xlabel = "Total Deaths";
      }
      else if (chosenXAxis === "Deaths_White"){
        var xlabel = "White Deaths:";
      }
      else if (chosenXAxis === "Deaths_Black"){
        var xlabel = "Black Deaths:";
      }
      else if (chosenXAxis === "Deaths_LatinX"){
        var xlabel = "LatinX Deaths:";
      }
      else if (chosenXAxis === "Deaths_Asian"){
        var xlabel = "Asian Deaths:";
      }
      else if (chosenXAxis === "Deaths_AIAN"){
        var xlabel = "AIAN Deaths:";
      }
      else if (chosenXAxis === "Deaths_NHPI"){
        var xlabel = "NHPI Deaths:";
      }
      else {
        var xlabel = " Deaths_Other: "
      }
  
      if (chosenYAxis === "Cases_Total"){
        var ylabel = "Total Cases: "
      }
      else if (chosenYAxis === "Cases_White"){
        var ylabel = "White Cases: "
      }
      else if (chosenYAxis === "Cases_Black"){
        var ylabel = "Black Cases: "
      }
      else if (chosenYAxis === "Cases_LatinX"){
        var ylabel = "LatinX Cases: "
      }
      else if (chosenYAxis === "Cases_Asian"){
        var ylabel = "Asian Cases: "
      }
      else if (chosenYAxis === "Cases_AIAN"){
        var ylabel = "AIAN Cases: "
      }
      else if (chosenYAxis === "Cases_NHPI"){
        var ylabel = "NHPI Cases: "
      }
      else {
        var ylabel = "Cases_Other: "
      }
  
      var toolTip = d3.tip()
        .attr("class", "d3-tip")
        .offset([80, -60])
        .html(function(d) {
          return (`${d.State}<br>${xlabel} ${d[chosenXAxis]}
            <br>${ylabel} ${d[chosenYAxis]}`);
        });
  
      circlesGroup.call(toolTip);
  
      circlesGroup.on("mouseover", function(data) {
        toolTip.show(data, this);
      })
        // onmouseout event
        .on("mouseout", function(data) {
          toolTip.hide(data);
        });
  
      return circlesGroup;
    }
  
    // Retrieve data from the CSV file and execute everything below
    d3.csv("data_sources/Race_Data_COVID.csv").then(function(csvData){
      var state = []

      // parse data
      csvData.forEach(function(data) {
        state.push(data.State);
        data.Deaths_Total = +data.Deaths_Total;
        data.Deaths_White = +data.Deaths_White;
        data.Deaths_Black = +data.Deaths_Black;
        data.Deaths_LatinX = +data.Deaths_LatinX;
        data.Deaths_Asian = +data.Deaths_Asian;
        data.Deaths_AIAN = +data.Deaths_AIAN;
        data.Deaths_NHPI = +data.Deaths_NHPI;
        data.Deaths_Other = +data.Deaths_Other;
        data.Cases_Total = +data.Cases_Total;
        data.Cases_White = +data.Cases_White;
        data.Cases_Black = +data.Cases_Black;
        data.Cases_LatinX = +data.Cases_LatinX;
        data.Cases_Asian = +data.Cases_Asian;
        data.Cases_AIAN = +data.Cases_AIAN;
        data.Cases_NHPI = +data.Cases_NHPI;
        data.Cases_Other = +data.Cases_Other;
      });
        console.log(state)

        d3.select("select")
        .selectAll("option")
        .data(state)
        .enter()
        .append("option")
        .text(function(d) {
            return d
        })

      // xLinearScale function above csv import
      var xLinearScale = xScale(csvData, chosenXAxis);
  
      // Create y scale function
      var yLinearScale = yScale(csvData, chosenYAxis);
  
      // Create initial axis functions
      var bottomAxis = d3.axisBottom(xLinearScale);
      var leftAxis = d3.axisLeft(yLinearScale);
  
      // append x axis
      var xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);
  
      // append y axis
      var yAxis = chartGroup.append("g")
        .classed("y-axis", true)
        // .attr("transform", `translate(${width}, 0)`) // FIX THIS
        .call(leftAxis);
  
      // append initial circles
      var circlesGroup = chartGroup.selectAll("circle")
        .data(csvData)
        .enter()
        .append("circle")
        .classed("stateCircle", true)
        .attr("cx", d => xLinearScale(d[chosenXAxis]))
        .attr("cy", d => yLinearScale(d[chosenYAxis]))
        .attr("r", 10)
        .attr("opacity", ".8")
        
      var circlesLabels = chartGroup.selectAll(null)
        .data(csvData)
        .enter()
        .append("text")
        .text(function(d) {return d.abbr;})
        .classed("stateText", true)
        .attr("x", d => xLinearScale(d[chosenXAxis]))
        .attr("y", d => yLinearScale(d[chosenYAxis]));
      
      // Create group for  8 x-axis labels
      var xlabelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${width / 2}, ${height + 20})`);

      var deathsLabel = xlabelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 20)
        .classed("active", true)
        .text("Race Deaths")
        .style("text-decoration", "underline");

      var deathsTotalLabel = xlabelsGroup.append("text")
        .attr("x", -50)
        .attr("y", 40)
        .attr("value", "Deaths_Total") 
        .classed("active", true)
        .text("Total");
      
      var deathsWhiteLabel = xlabelsGroup.append("text")
        .attr("x", 50)
        .attr("y", 40)
        .attr("value", "Deaths_White") 
        .classed("inactive", true)
        .text("White");
        
      var deathsBlackLabel = xlabelsGroup.append("text")
        .attr("x", -50)
        .attr("y", 60)
        .attr("value", "Deaths_Black") 
        .classed("inactive", true)
        .text("Black");
   
      var deathsLatinXLabel = xlabelsGroup.append("text")
        .attr("x", 50)
        .attr("y", 60)
        .attr("value", "Deaths_LatinX") 
        .classed("inactive", true)
        .text("LatinX");

      var deathsAsianLabel = xlabelsGroup.append("text")
        .attr("x", -50)
        .attr("y", 80)
        .attr("value", "Deaths_Asian") 
        .classed("inactive", true)
        .text("Asian");

      var deathsAIANLabel = xlabelsGroup.append("text")
        .attr("x", 50)
        .attr("y", 80)
        .attr("value", "Deaths_AIAN") 
        .classed("inactive", true)
        .text("AIAN");

      var deathsNHPILabel = xlabelsGroup.append("text")
        .attr("x", -50)
        .attr("y", 100)
        .attr("value", "Deaths_NHPI") 
        .classed("inactive", true)
        .text("NHPI");

      var deathsOtherLabel = xlabelsGroup.append("text")
        .attr("x", 50)
        .attr("y", 100)
        .attr("value", "Deaths_Other") 
        .classed("inactive", true)
        .text("Other");
  
      // Create group for  8 y-axis labels
      var ylabelsGroup = chartGroup.append("g")
        .attr("transform", "rotate(-90)");

      var casesLabel = ylabelsGroup.append("text")
        .attr("y", 20 - margin.left)
        .attr("x", 0 - (height / 2)) 
        .classed("active", true)
        .text("Race Cases")
        .style("text-decoration", "underline");  

      var casesTotalLabel = ylabelsGroup.append("text")
        .attr("y", 40 - margin.left)
        .attr("x", -50 - (height / 2))
        .attr("value", "Cases_Total") 
        .classed("active", true)
        .text("Total");
  
      var casesWhiteLabel = ylabelsGroup.append("text")
        .attr("y", 40 - margin.left)
        .attr("x", 50 - (height / 2))
        .attr("value", "Cases_White") 
        .classed("inactive", true)
        .text("White");

      var casesBlackLabel = ylabelsGroup.append("text")
        .attr("y", 60 - margin.left)
        .attr("x", -50 - (height / 2))
        .attr("value", "Cases_Black") 
        .classed("inactive", true)
        .text("Black");

      var casesLatinXLabel = ylabelsGroup.append("text")
        .attr("y", 60 - margin.left)
        .attr("x", 50 - (height / 2))
        .attr("value", "Cases_LatinX") 
        .classed("inactive", true)
        .text("LatinX");

      var casesAsianLabel = ylabelsGroup.append("text")
        .attr("y", 80 - margin.left)
        .attr("x", -50 - (height / 2))
        .attr("value", "Cases_Asian") 
        .classed("inactive", true)
        .text("Asian");

      var casesAIANLabel = ylabelsGroup.append("text")
        .attr("y", 80 - margin.left)
        .attr("x", 50 - (height / 2))
        .attr("value", "Cases_AIAN") 
        .classed("inactive", true)
        .text("AIAN");

      var casesNHPILabel = ylabelsGroup.append("text")
        .attr("y", 100 - margin.left)
        .attr("x", -50 - (height / 2))
        .attr("value", "Cases_NHPI") 
        .classed("inactive", true)
        .text("NHPI");

      var casesOtherLabel = ylabelsGroup.append("text")
        .attr("y", 100 - margin.left)
        .attr("x", 50 - (height / 2))
        .attr("value", "Cases_Other") 
        .classed("inactive", true)
        .text("Other");
      
      // updateToolTip function above csv import
      var circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);
  
      // x axis labels event listener
      xlabelsGroup.selectAll("text")
        .on("click", function() {
          // get value of selection
          var value = d3.select(this).attr("value");
          if (value !== chosenXAxis) {
  
            // replaces chosenXAxis with value
            chosenXAxis = value;
  
            // updates x scale for new data
            xLinearScale = xScale(csvData, chosenXAxis);
  
            // updates x axis with transition
            xAxis = renderXAxes(xLinearScale, xAxis);
  
            // updates circles with new x values
            circlesGroup = renderXCircles(circlesGroup, xLinearScale, chosenXAxis);
  
            // updates tooltips with new info
            circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);
  
            circlesLabels = renderXLabel(circlesLabels, xLinearScale, chosenXAxis);
  
            // changes classes to change bold text         
            if (chosenXAxis === "Deaths_White") {
              deathsWhiteLabel
                .classed("active", true)
                .classed("inactive", false);
              deathsTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              deathsOtherLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else if (chosenXAxis === "Deaths_Black") {
              deathsWhiteLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsBlackLabel
                .classed("active", true)
                .classed("inactive", false);
              deathsLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              deathsOtherLabel
                .classed("active", false)
                .classed("inactive", true);  
            }
            else if (chosenXAxis === "Deaths_LatinX") {
              deathsWhiteLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsLatinXLabel
                .classed("active", true)
                .classed("inactive", false);
              deathsAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              deathsOtherLabel
                .classed("active", false)
                .classed("inactive", true);  
            }
            else if (chosenXAxis === "Deaths_Asian") {
              deathsWhiteLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAsianLabel
                .classed("active", true)
                .classed("inactive", false);
              deathsAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              deathsOtherLabel
                .classed("active", false)
                .classed("inactive", true);  
            }
            else if (chosenXAxis === "Deaths_AIAN") {
              deathsWhiteLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAIANLabel
                .classed("active", true)
                .classed("inactive", false);
              deathsNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              deathsOtherLabel
                .classed("active", false)
                .classed("inactive", true);  
            }
            else if (chosenXAxis === "Deaths_NHPI") {
              deathsWhiteLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsNHPILabel
                .classed("active", true)
                .classed("inactive", false);
              deathsOtherLabel
                .classed("active", false)
                .classed("inactive", true);  
            }
            else if (chosenXAxis === "Deaths_Other") {
              deathsWhiteLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsNHPILabel
                .classed("active", true)
                .classed("inactive", false);
              deathsOtherLabel
                .classed("active", true)
                .classed("inactive", false);  
            }
            else {
              deathsWhiteLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsTotalLabel
                .classed("active", true)
                .classed("inactive", false);
              deathsLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              deathsOtherLabel
                .classed("active", false)
                .classed("inactive", true);  
            }
          }
        });
      
      // y axis labels event listener
      ylabelsGroup.selectAll("text")
        .on("click", function() {
          // get value of selection
          var value = d3.select(this).attr("value");
  
          if (value !== chosenYAxis) {
  
            // replaces chosenYAxis with value
            chosenYAxis = value;

            // updates y scale for new data
            yLinearScale = yScale(csvData, chosenYAxis);
  
            // updates y axis with transition
            yAxis = renderYAxes(yLinearScale, yAxis);
  
            // updates circles with new y values
            circlesGroup = renderYCircles(circlesGroup, yLinearScale, chosenYAxis);
  
            // updates tooltips with new info
            circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);
  
            circlesLabels = renderYLabel(circlesLabels, yLinearScale, chosenYAxis);
  
            // changes classes to change bold text
            if (chosenYAxis === "Cases_White") {
              casesWhiteLabel
                .classed("active", true)
                .classed("inactive", false);
              casesTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              casesBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              casesLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              casesNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              casesOtherLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else if (chosenYAxis === "Cases_Black") {
              casesWhiteLabel  
                .classed("active", false)
                .classed("inactive", true);
              casesTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              casesBlackLabel
                .classed("active", true)
                .classed("inactive", false);
              casesLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              casesNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              casesOtherLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else if (chosenYAxis === "Cases_LatinX") {
              casesWhiteLabel  
                .classed("active", false)
                .classed("inactive", true);
              casesTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              casesBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              casesLatinXLabel
                .classed("active", true)
                .classed("inactive", false);
              casesAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              casesNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              casesOtherLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else if (chosenYAxis === "Cases_Asian") {
              casesWhiteLabel  
                .classed("active", false)
                .classed("inactive", true);
              casesTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              casesBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              casesLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAsianLabel
                .classed("active", true)
                .classed("inactive", false);
              casesAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              casesNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              casesOtherLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else if (chosenYAxis === "Cases_AIAN") {
              casesWhiteLabel  
                .classed("active", false)
                .classed("inactive", true);
              casesTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              casesBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              casesLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAIANLabel
                .classed("active", true)
                .classed("inactive", false);
              casesNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              casesOtherLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else if (chosenYAxis === "Cases_NHPI") {
              casesWhiteLabel  
                .classed("active", false)
                .classed("inactive", true);
              casesTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              casesBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              casesLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              casesNHPILabel
                .classed("active", true)
                .classed("inactive", false);
              casesOtherLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else if (chosenYAxis === "Cases_Other") {
              casesWhiteLabel  
                .classed("active", false)
                .classed("inactive", true);
              casesTotalLabel
                .classed("active", false)
                .classed("inactive", true);
              casesBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              casesLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              casesNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              casesOtherLabel
                .classed("active", true)
                .classed("inactive", false);
            }
            else {
              casesWhiteLabel  
                .classed("active", false)
                .classed("inactive", true);
              casesTotalLabel
                .classed("active", true)
                .classed("inactive", false);
              casesBlackLabel
                .classed("active", false)
                .classed("inactive", true);
              casesLatinXLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAsianLabel
                .classed("active", false)
                .classed("inactive", true);
              casesAIANLabel
                .classed("active", false)
                .classed("inactive", true);
              casesNHPILabel
                .classed("active", false)
                .classed("inactive", true);
              casesOtherLabel
                .classed("active", false)
                .classed("inactive", true);
              }      
          }
        });
    });
  }
  
  // When the browser loads, makeResponsive() is called.
  makeResponsive();
  
  // When the browser window is resized, makeResponsive() is called.
  d3.select(window).on("resize", makeResponsive);
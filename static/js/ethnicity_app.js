// @TODO: YOUR CODE HERE!
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
    var chosenXAxis = "Deaths_Ethnicity_Hispanic";
    var chosenYAxis = "Cases_Ethnicity_Hispanic";
  
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
  
      if (chosenXAxis === "Deaths_Ethnicity_Hispanic") {
        var xlabel = "Hispanic Deaths: ";
      }
      else if (chosenXAxis === "Deaths_Ethnicity_NonHispanic"){
        var xlabel = "NonHispanic Deaths:";
      }
      else {
        var xlabel = " Deaths_Ethnicity_Unknown: "
      }
  
      if (chosenYAxis === "Cases_Ethnicity_Hispanic"){
        var ylabel = "Hispanic Cases: "
      }
      else if (chosenYAxis === "Cases_Ethnicity_NonHispanic"){
        var ylabel = "NonHispanic Cases: "
      }
      else {
        var ylabel = "Cases_Ethnicity_Unknown: "
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
      // parse data
      csvData.forEach(function(data) {
        data.Deaths_Ethnicity_Hispanic = +data.Deaths_Ethnicity_Hispanic;
        data.Deaths_Ethnicity_NonHispanic = +data.Deaths_Ethnicity_NonHispanic;
        data.Deaths_Ethnicity_Unknown = +data.Deaths_Ethnicity_Unknown;
        data.Cases_Ethnicity_Hispanic = +data.Cases_Ethnicity_Hispanic;
        data.Cases_Ethnicity_NonHispanic = +data.Cases_Ethnicity_NonHispanic;
        data.Cases_Ethnicity_Unknown = +data.Cases_Ethnicity_Unknown;
      });
  
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
        .classed("StateText", true)
        .attr("x", d => xLinearScale(d[chosenXAxis]))
        .attr("y", d => yLinearScale(d[chosenYAxis]));
      
      // Create group for  4 x-axis labels
      var xlabelsGroup = chartGroup.append("g")
        .attr("transform", `translate(${width / 2}, ${height + 20})`);

      var deathsLabel = xlabelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 20)
        .classed("active", true)
        .text("Ethnicity Deaths")
        .style("text-decoration", "underline");

      var deathsHispanicLabel = xlabelsGroup.append("text")
        .attr("x", -50)
        .attr("y", 40)
        .attr("value", "Deaths_Ethnicity_Hispanic") 
        .classed("active", true)
        .text("Hispanic");
      
      var deathsNonHispanicLabel = xlabelsGroup.append("text")
        .attr("x", 50)
        .attr("y", 40)
        .attr("value", "Deaths_Ethnicity_NonHispanic") 
        .classed("inactive", true)
        .text("NonHispanic");
        
      var deathsUnkownLabel = xlabelsGroup.append("text")
        .attr("x", 0)
        .attr("y", 60)
        .attr("value", "Deaths_Ethnicity_Unknown") 
        .classed("inactive", true)
        .text("Other");
  
      // Create group for  4 y-axis labels
      var ylabelsGroup = chartGroup.append("g")
        .attr("transform", "rotate(-90)");

      var casesLabel = ylabelsGroup.append("text")
        .attr("y", 20 - margin.left)
        .attr("x", 0 - (height / 2)) 
        .classed("active", true)
        .text("Ethnicity Cases")
        .style("text-decoration", "underline");  

      var casesHispanicLabel = ylabelsGroup.append("text")
        .attr("y", 40 - margin.left)
        .attr("x", -50 - (height / 2))
        .attr("value", "Cases_Ethnicity_Hispanic") 
        .classed("active", true)
        .text("Hispanic");
  
      var casesNonHispanicLabel = ylabelsGroup.append("text")
        .attr("y", 40 - margin.left)
        .attr("x", 50 - (height / 2))
        .attr("value", "Cases_Ethnicity_NonHispanic") 
        .classed("inactive", true)
        .text("NonHispanic");

      var casesUnknownLabel = ylabelsGroup.append("text")
        .attr("y", 60 - margin.left)
        .attr("x", 0 - (height / 2))
        .attr("value", "Cases_Ethnicity_Unknown") 
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
            if (chosenXAxis === "Deaths_Ethnicity_NonHispanic") {
              deathsNonHispanicLabel
                .classed("active", true)
                .classed("inactive", false);
              deathsHispanicLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsUnknownLabel
                .classed("active", false)
                .classed("inactive", true);
            }    
            else if (chosenXAxis === "Deaths_Ethnicity_Unknown") {
              deathsNonHispanicLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsHispanicLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsUnknownLabel
                .classed("active", true)
                .classed("inactive", false);
            }
            else {
              deathsNonHispanicLabel
                .classed("active", false)
                .classed("inactive", true);
              deathsHispanicLabel
                .classed("active", true)
                .classed("inactive", false);
              deathsUnknownLabel
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
            if (chosenYAxis === "Cases_Ethnicity_NonHispanic") {
                casesNonHispanicLabel
                  .classed("active", true)
                  .classed("inactive", false);
                casesHispanicLabel
                  .classed("active", false)
                  .classed("inactive", true);
                casesUnknownLabel
                  .classed("active", false)
                  .classed("inactive", true);
              }    
              else if (chosenYAxis === "Cases_Ethnicity_Unknown") {
                casesNonHispanicLabel
                  .classed("active", false)
                  .classed("inactive", true);
                casesHispanicLabel
                  .classed("active", false)
                  .classed("inactive", true);
                casesUnknownLabel
                  .classed("active", true)
                  .classed("inactive", false);
              }
              else {
                casesNonHispanicLabel
                  .classed("active", false)
                  .classed("inactive", true);
                casesHispanicLabel
                  .classed("active", true)
                  .classed("inactive", false);
                casesUnknownLabel
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
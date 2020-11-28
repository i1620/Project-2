    var myMap = L.map("map", {
        center: [39.8283, -98.5795],
        zoom: 5
    });   
          
        // Adding tile layer
     L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    }).addTo(myMap);


    function getColor(d) {
      return d > 1000000  ? '#FA0303'  :
             d > 500000   ? '#FA7703'  :
             d > 250000   ? '#FAA703'  :
             d > 100000   ? '#FAEE03'  :
             d > 50000    ? '#9AFA03'  :
             d > 0        ? '#4BFA03'  :
                       '#FFFFFF';
  }

    // Use this link to get the geojson data.
    var link = "static/data/States_GEO.json";
    
// Grabbing our GeoJSON data..
d3.json(link, function(data) {
    // Creating a geoJSON layer with the retrieved data
    L.geoJson(data, {
      // Style each state
      style: function(feature) {        
        return {
          color: "white",
          // Call the chooseColor function to decide which color to color our state
          fillColor: getColor(feature.properties.Positive),
          fillOpacity: 0.5,
          weight: 1.5
        };
      },
      // Called on each feature
      onEachFeature: function(feature, layer) {
        // Set mouse events to change map styling
        layer.on({
          mouseover: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.9
            });
          },
          mouseout: function(event) {
            layer = event.target;
            layer.setStyle({
              fillOpacity: 0.5
            });
          },
          // When a state is clicked, it is enlarged to fit the screen
          click: function(event) {
            myMap.fitBounds(event.target.getBounds());
          }
        });
        // Giving each feature a pop-up with information pertinent to it
        layer.bindPopup("<h1>" + feature.properties.NAME + "</h1> <hr> <h2>" + "Positive Cases: " + feature.properties.Positive + "</h2>  <hr> <h2>" + "Deaths: " + feature.properties.Deaths + "</h2>");
  
      }
    }).addTo(myMap);

        //Legend came from https://leafletjs.com/examples/choropleth/
        var legend = L.control({position: 'bottomright'});

        legend.onAdd = function (myMap) {
        
            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 50000, 100000, 250000, 500000, 1000000],
                labels = [];
        
            // from example on site legend was offset, added a second <br> to align
            div.innerHTML += '<h4> Number of Cases </h4>';
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br><br>' : '+');
            }
        
            return div;
        };
        
        legend.addTo(myMap);
  });

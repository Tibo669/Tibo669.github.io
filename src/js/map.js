require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/widgets/Locate",
  "esri/widgets/Search",
], function(Map, MapView, Graphic, Locate, Search) {
  const map = new Map({
    basemap: "satellite"
  });
  let view = new MapView({
    center: [4.577407, 45.848032],
    container: "viewDiv",
    map: map,
    zoom: 16
  });

  let colorPersonnage = "#e27728";
  let colorLieu = "#fd2d73";

  // Create a symbol for drawing the point
  let personnageMarker = {
    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
    color: colorPersonnage,
    outline: { // autocasts as new SimpleLineSymbol()
      color: [255, 255, 255],
      width: 2
    }
  };

  // Create a symbol for drawing the point
  let lieuMarker = {
    type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
    color: colorLieu,
    outline: { // autocasts as new SimpleLineSymbol()
      color: [255, 255, 255],
      width: 2
    }
  };

  const textSymbol = {
    type: "text",  // autocasts as new TextSymbol()
    color: "",
    text: "",
    haloColor: "black",
    haloSize: "1px",
    yoffset: 10,
    font: {  // autocasts as new Font()
      size: 10,
      family: "sans-serif",
      weight: "bold"
    }
  };

  let listLocation = [];

  for (let location_key in map_map) {
    let location = map_map[location_key];
    let point = {
      type: "point", // autocasts as new Point()
      longitude: location['longitude'],
      latitude: location['latitude']
    };
    let graphic;
    if ( location['type'] === "lieu") {
      graphic = new Graphic({
        geometry: point,
        symbol: lieuMarker
      });
      textSymbol.color = colorLieu;
    }
    else {
      graphic = new Graphic({
        geometry: point,
        symbol: personnageMarker
      });
      textSymbol.color = colorPersonnage;
    }
    textSymbol.text = location['name'];
    let graphicText = new Graphic({
      geometry: point,
      symbol: textSymbol
    });
    listLocation.push(graphic);
    listLocation.push(graphicText);
  }
  // Add the graphics to the view's graphics layer
  view.graphics.addMany(listLocation);

  let locateBtn = new Locate({
    view: view
  });

  // Add the locate widget to the top left corner of the view
  view.ui.add(locateBtn, {
    position: "top-left"
  });

  let searchWidget = new Search({
    view: view
  });

  // Add the search widget to the top right corner of the view
  view.ui.add(searchWidget, {
    position: "top-right"
  });
});

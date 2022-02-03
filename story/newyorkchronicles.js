function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.753384326961836, lng: -73.98934147498935 },
    zoom: 12,
// Setting satellite layer for base map.
    mapTypeId: "satellite",
  });
  map.setTilt(45);
}
  // Building icons used to label the markers - retrieved from https://www.vectorstock.com/royalty-free-vector/building-construction-icon-vector-27400233
  const labels = {
    imagePath:
    "images/BUILDING.jpg",
    // Setting marker size to 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // Setting origin for image to be (0, 0).
    origin: new google.maps.Point(0, 0),
    // Setting anchors for the markers to be the building base (0, 32).
    anchor: new google.maps.Point(0, 32),
  };
  // Adding custom markers to the map
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
// Image retrieved from https://www.vectorstock.com/royalty-free-vector/building-construction-icon-vector-27400233
const locations = [
{ lat: 40.70920280604806, lng: -74.00644614895027},
{ lat: 40.753384326961836, lng: -73.98934147498935},
{ lat: 40.70913444688292, lng: -74.01281723401323},
{ lat: 40.676576577825756, lng: -73.98830090012436},
{ lat: 40.72381192329156, lng: -74.0097633308105},
{ lat: 40.73771936412929, lng: -73.99695795924494},
{ lat: 40.7421905380155, lng: -74.00662384560603},
{ lat: 40.93252878271926, lng: -73.89462511546168},
{ lat: 40.711123100008955, lng: -74.00633370012342},  
{ lat: 40.707589473926944, lng: -73.96872373081086},
{ lat: 40.75462153324412, lng: -73.98035267313787},
{ lat: 40.77140040810053, lng: -73.95921393080936},
{ lat: 40.67869000944418, lng: -73.98716353081161},
{ lat: 40.721305954864555, lng: -74.00942294615415}
];

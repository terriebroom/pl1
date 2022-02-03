function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 44.039956, lng: -77.056496 },
  });
  // I spend so many hours trying to make my map look like I imagined, but I just could not get it to do all the things I wanted.
  // Not to make excuses, but Github has been having issues and my committs took a long time to be reflected on my map webpage
  // So for the sake of time, I had to settle for something simple to get rid of the errors I encountered.
  // Simple Characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Adding markers to the map at the locations specified.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // I was not able to get rid of the surrounding texts and icons not used
  // I was not able to change the style of my map background, so please click on satellite when you open the image.
  // That will tell my story better.
  // Clusterer marker added to manage the appearance of the markers on zoom.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
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

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    mapTypeId: 'satellite',
    zoom: 12,
  // This map shows all the job sites I worked on in the New York Metropolitan area.
  // With the map centred on the main office building
  // I wanted to rank the buildings in order of timeline worked on, thus the alphabetical order corresponding with the location order.
    center: { lat: 40.753384326961836, lng: -73.98934147498935 },
  });
  // I spend so many hours trying to make my map look like I imagined, but I just could not get it to do all the things I wanted.
  // Not to make excuses, but Github has been having issues and my committs took a long time to be reflected on my map webpage
  // So I had to wait several minutes (up to 20 minutes at times) to see the changes made.
  // Therefore, for the sake of time, I had to settle for something simple to get rid of the errors I encountered.
  // Simple Characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Adding markers to the map at the locations specified.
  // Clusters style was used because the locations are spread over the city, so the map will be zoomed out a bit to show all the locations at once,
  // But there are also small areas where several points are concentrated that might look crowded to the viewer when zoomed out.
  // Clusters eliminates this noise and makes viewing the map easier.
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

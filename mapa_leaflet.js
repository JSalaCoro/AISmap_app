var map = L.map('map').setView([41.39742, 2.16328], 9);

var AIS = L.geoJSON(staticAIS).addTo(map);

/*
var geotiffLayer = L.leafletGeotiff('otb_vmsint_2021_4326.tif',
bounds = [[35.8542414890000032, -4.4214261090000004],[43.0069318290000027,4.7646060660000007]] ).addTo(map);
*/
L.imageOverlay('fishingEffort_hours_2018_bottomtrawling.png', 
                imageBounds = [[35.8542414890000032, -4.4214261090000004],[43.0069318290000027,4.7646060660000007]]).addTo(map);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap'
}).addTo(map);


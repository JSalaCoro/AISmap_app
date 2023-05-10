var map = L.map('map').setView([41.39742, 2.16328], 9);

var AIS = L.geoJSON(staticAIS).addTo(map);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap'
}).addTo(map);


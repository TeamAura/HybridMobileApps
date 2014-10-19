//(function () {
//    document.addEventListener("deviceready", startWatchingGeolocation, false);

//    function startWatchingGeolocation() {
//        //navigator.geolocation.watchPosition(geoWatchSuccess, geoWatchError, {
//        //    enableHighAccuracy: false,
//        //    maximumAge: 1000
//        //});
//    }

//    function geoWatchSuccess(position) {
//        var lat = position.coords.latitude;
//        var long = position.coords.longitude;
//        var heading = position.coords.heading;

//        var mapsbaseurl = "http://maps.googleapis.com/maps/api/staticmap";
//        //var mapsbaseurl = "http://maps.googleapis.com/maps/api/js?key=uzcyebcu_796eozclpksjhfs&sensor=true"
//        var centerpar = "center=" + lat + "," + long;
//        var sizepar = "size=300x300";

//        var locationviz = document.getelementbyid("location");

//        locationviz.src = mapsbaseurl + "?" + centerpar + "&" + sizepar + "&" + "sensor=true&zoom=10";
//        //locationviz.src = mapsbaseurl;

//        if (locationviz && locationviz.style) {
//            locationviz.style.webkittransform = "rotate(" + (-heading | 0) + "deg)";
//            locationviz.style.transform = "rotate(" + (-heading | 0) + "deg)";
//        }
//    }

//    function geoWatchError(error) {
//        alert("error " + error)
//    }

////}());
//function createMap() {
//    $("#map").kendoMap({
//        center: [30.268107, -97.744821],
//        zoom: 3,
//        layers: [{
//            type: "tile",
//            urlTemplate: "http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
//            subdomains: ["a", "b", "c"],
//            attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap contributors</a>"
//        }],
//        markers: [{
//            location: [30.268107, -97.744821],
//            shape: "pinTarget",
//            tooltip: {
//                content: "Austin, TX"
//            }
//        }]
//    });
//}

//$(document).ready(createMap);
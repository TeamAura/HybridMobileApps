function startWatchingGeolocation() {
    navigator.geolocation.watchPosition(geoWatchSuccess, geoWatchError, {
        enableHighAccuracy: true,
        maximumAge: 300
    });
}

function geoWatchSuccess(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var heading = position.coords.heading;

    var mapsBaseUrl = "http://maps.googleapis.com/maps/api/staticmap";
    var centerPar = "center=" + lat + "," + long;
    var sizePar = "size=300x300";

    var locationViz = document.getElementById("location");
    locationViz.src = mapsBaseUrl + "?" + centerPar + "&" + sizePar + "&" + "sensor=true&zoom=12";

    locationViz.style.webkitTransform = "rotate(" + (-heading | 0) + "deg)";    
    locationViz.style.transform = "rotate(" + (-heading | 0) + "deg)";
}

function geoWatchError(error) {
    alert("error " + error)
}
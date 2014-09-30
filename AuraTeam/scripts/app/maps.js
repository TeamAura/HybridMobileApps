(function () {
    document.addEventListener("deviceready", startWatchingGeolocation, false);

    function startWatchingGeolocation() {
        navigator.geolocation.watchPosition(geoWatchSuccess, geoWatchError, {
            enableHighAccuracy: true,
            maximumAge: 1000
        });
    }

    function geoWatchSuccess(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var heading = position.coords.heading;

        var mapsBaseUrl = "http://maps.googleapis.com/maps/api/staticmap";
        var centerPar = "center=" + lat + "," + long;
        var sizePar = "size=500x500";

        var locationViz = document.getElementById("location");
        if (locationViz && locationViz.src) {
            locationViz.src = mapsBaseUrl + "?" + centerPar + "&" + sizePar + "&" + "sensor=true&zoom=10";
        }

        if (locationViz && locationViz.style) {
            locationViz.style.webkitTransform = "rotate(" + (-heading | 0) + "deg)";
            locationViz.style.transform = "rotate(" + (-heading | 0) + "deg)";
        }
    }

    function geoWatchError(error) {
        alert("error " + error)
    }

}());
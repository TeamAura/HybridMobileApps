(function () {
    document.addEventListener("deviceready", bindCompassEvents, false);

    function bindCompassEvents() {
        navigator.compass.watchHeading(
            compassHeadingRetrieved,
            null, {
                frequency: 1000
            });
    }

    function compassHeadingRetrieved(heading) {
        var sensorVizElement = document.getElementById("sensor");

        var rotationStyleString = "rotate(" + -(heading.magneticHeading | 0) + "deg)"

        if (sensorVizElement && sensorVizElement.style) {
            sensorVizElement.style.webkitTransform = rotationStyleString;
            sensorVizElement.style.transform = rotationStyleString;
        }
    }
    
}());
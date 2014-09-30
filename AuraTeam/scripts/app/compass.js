var comp = (function () {    
    function bindCompassEvents() {
        navigator.compass.watchHeading(
            compassHeadingRetrieved,
            null, {
                frequency: 3000
            });
    }

    function compassHeadingRetrieved(heading) {
        var sensorVizElement = document.getElementById("sensor");

        var rotationStyleString = "rotate(" + -(heading.magneticHeading | 0) + "deg)"

        // -webkit-transform: rotate(15deg)

        if (sensorVizElement && sensorVizElement.style) {
            sensorVizElement.style.webkitTransform = rotationStyleString;
            sensorVizElement.style.transform = rotationStyleString;
        }
    }
    return {
        bindCompassEvents: bindCompassEvents
    };
}());
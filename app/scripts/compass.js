function bindCompassEvents() {
    navigator.compass.watchHeading(
        compassHeadingRetrieved,
        null, {
            frequency: 100
        });
}

function compassHeadingRetrieved(heading) {
    var sensorVizElement = $("#sensor");

    var rotationStyleString = "rotate(" + -(heading.magneticHeading | 0) + "deg)"

    // -webkit-transform: rotate(15deg)
    sensorVizElement.style.webkitTransform = rotationStyleString;
    sensorVizElement.style.transform = rotationStyleString;
}

bindCompassEvents();
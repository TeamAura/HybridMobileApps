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

    // -webkit-transform: rotate(15deg)
    sensorVizElement.style.webkitTransform = rotationStyleString;
    sensorVizElement.style.transform = rotationStyleString;
}
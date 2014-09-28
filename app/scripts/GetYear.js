(function () {
    var getYear = (function() {
        return new Date().getFullYear();
    })
    return {
        getYear: getYear
    }
}());
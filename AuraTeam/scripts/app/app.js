var app = (function () {
    "use strict"    

    var getYear = (function () {
        return new Date().getFullYear();
    }());

    var showConfirm = function (message, title, callback) {
        navigator.notification.confirm(message, callback || function () {
        }, title, ['OK', 'Cancel']);
    };

    var isNullOrEmpty = function (value) {
        return typeof value === 'undefined' || value === null || value === '';
    };

    var isKeySet = function (key) {
        var regEx = /^\$[A-Z_]+\$$/;
        return !isNullOrEmpty(key) && !regEx.test(key);
    };

    var fixViewResize = function () {
        if (device.platform === 'iOS') {
            setTimeout(function () {
                $(document.body).height(window.innerHeight);
            }, 10);
        }
    };

    return {
        //showAlert: showAlert,
        //showError: showError,
        showConfirm: showConfirm,
        isKeySet: isKeySet,
        //mobileApp: mobileApp,
        //helper: AppHelper,
        //everlive: el,
        getYear: getYear
    }
}());
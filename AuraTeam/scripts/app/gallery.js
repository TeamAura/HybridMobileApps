var app = app || {}
app.viewmodels = app.viewmodels || {};
(function (scope) {
    var everlive = new Everlive("DexHTiBwelsCZOzh");

    //var app = new kendo.mobile.Application(document.body, {
    //    skin: "flat",
    //    transition: "slide"
    //})

    function loadPhotos() {
        //appSettings.everlive.apiKey.Files.get().then(function (data) {
        return everlive.Files.get().then(function (data) {
            var files = [];
            data.result.forEach(function (image) {
                files.push(image.Uri);
            });
            return files;
        });
    }
    function show(e) {
        loadPhotos().
            then(function (files) {
                //for (var i = 0, len = files.length; i < len; i++) {
                //    files[i].deletePicture =
                //}

                var vm = kendo.observable({
                    files: files,
                    addImage: function () {
                        var success = function (data) {
                            //appSettings.everlive.apiKey.Files.create({
                            everlive.Files.create({
                                Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
                                ContentType: "image/jpeg",
                                base64: data
                            }).then(loadPhotos);
                        };
                        var error = function () {
                            navigator.vibrate();
                            navigator.notification.alert("Unfortunately we could not add the image");
                        };
                        var config = {
                            destinationType: Camera.DestinationType.DATA_URL,
                            targetHeight: 300,
                            targetWidth: 300
                        };
                        navigator.camera.getPicture(success, error, config);
                    },
                    deletePicture:  function () {
                        alert("delete one")
                    },
                    deleteAll: function () {
                        var query = new Everlive.Query();
                        query.where().gt('Length', 500);
                        everlive.Files.destroy(query,
                            function (data) {
                                alert('Files successfully deleted.');
                                loadPhotos();
                            },
                            function (error) {
                                alert(JSON.stringify(error));
                            });
                    },
                });
                kendo.bind(e.view.element, vm);
            });
    }

    scope.gallery = {
        show: show,
        deletePicture: function () {
            alert("delete one")
        },
    };
}(app.viewmodels));
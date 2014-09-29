document.addEventListener("deviceready", function () {
    var everlive = new Everlive("DexHTiBwelsCZOzh");
    window.listView = kendo.observable({
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

        deletePicture: function () {
            alert("delete one")
        }
    });

    var app = new kendo.mobile.Application(document.body, {
        skin: "flat",
        transition: "slide"
    })

    function loadPhotos() {
        //appSettings.everlive.apiKey.Files.get().then(function (data) {
        everlive.Files.get().then(function (data) {
            var files = [];
            data.result.forEach(function (image) {
                files.push(image.Uri);
            });
            $("#images").kendoMobileListView({
                dataSource: files,
                //template: "<img src='#: data #'>"              
                template: $("#customTemplate").html()
            });
        });
    }
    loadPhotos();

});
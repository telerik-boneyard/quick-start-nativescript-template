var observable = require("data/observable");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var observableArrayModule = require("data/observable-array");

var backendServices = require('./everlive.all');
var everlive = new backendServices("YOUR KEY");

var __extends = this.__extends || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var array = new observableArrayModule.ObservableArray();

var directory = "/res/";

function imageFromSource(data) {
    return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + data));
};

var item1 = {
    photoItemImage: imageFromSource("01.jpg")
};
var item2 = {
    photoItemImage: imageFromSource("02.jpg")
};
var item3 = {
    photoItemImage: imageFromSource("03.jpg")
};
var item4 = {
    photoItemImage: imageFromSource("04.jpg")
};
var item5 = {
    photoItemImage: imageFromSource("05.jpg")
};
var item6 = {
    photoItemImage: imageFromSource("06.jpg")
};

array.push([item1, item2, item3, item4, item5, item6]);

var item7 = {
    photoItemImage: imageFromSource("07.jpg")
};
var item8 = {
    photoItemImage: imageFromSource("08.jpg")
};

var PhotoAlbumModel = (function (_super) {
    __extends(PhotoAlbumModel, _super);

    function PhotoAlbumModel() {
        _super.call(this);

        this.set("message", "Add new images");
    }

    Object.defineProperty(PhotoAlbumModel.prototype, "photoItems", {
        get: function () {
            return array;
        },
        enumerable: true,
        configurable: true
    });

    PhotoAlbumModel.prototype.tapAction = function () {
        array.push(item7);
        array.push(item8);

        for (i = 0; i < array.length; i++) {
            var file = {
                "Filename": Math.random().toString(36).substring(2, 15) + ".jpg",
                "ContentType": "image/png",
                "base64": array.getItem(i).photoItemImage.toBase64String(1, 100)
            };

            everlive.Files.create(file,
                function (data) {
                },
                function (error) {
                });
        }

        //var locationModule = require("location");

        // locationModule.getLocation({ desiredAccuracy: 3, maximumAge: 20000, minimumUpdateTime: 5000, updateDistance: 0 })

        // locationModule.getLocation({ desiredAccuracy: 3, maximumAge: 20000, minimumUpdateTime: 5000, updateDistance: 0}).then(function(location) {
        //     this.set("message", "Images added. Total images: " + location.longitude + " ");    
        // }, function(error){
        //     this.set("message", "Imges added. Total images: " + error.message);    
        // });


        //var locationModule = require("location/location-manager");

        //this.set("message", locationModule.LocationManager.isEnabled() + "");

        //this.set("message", "Images added. Total images: " + array.length);    
    };

    return PhotoAlbumModel;
})(observable.Observable);

exports.PhotoAlbumModel = PhotoAlbumModel;
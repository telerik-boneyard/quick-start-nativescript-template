//var pageModule = require("ui/page");

var modelModule = require("./view-model");
var model = new modelModule.PhotoAlbumModel();

//var buttonModule = require("ui/button");
//var gridModule = require("ui/panels/grid-panel");
//var listViewModule = require("ui/list-view");

//var enums = require("ui/enums");
//var imageModule = require("ui/image");

function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = model;
}

// function listViewItemLoading(args) {
//     var image = args.view._children[0];
//     image.source = args.object.items.getItem(args.index);
// }

function buttonClick(args) {
    model.tapAction();
}

exports.buttonClick = buttonClick;
//exports.listViewItemLoading = listViewItemLoading;
exports.onPageLoaded = onPageLoaded;

// function createPage() {

//     var model = new modelModule.PhotoAlbumModel();

//     var button = new buttonModule.Button();

//     // everlive.Files.create({
//     //     Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
//     //     ContentType: "image/jpeg",
//     //     base64: model.items.getItem(0)
//     // })

//     var listView = new listViewModule.ListView();

//     listView.on("itemLoading", function (args) {
//         var imageGrid = args.view;
//         var image;
//         if (!imageGrid) {
//             imageGrid = new gridModule.GridPanel();
//             image = new imageModule.Image();
//             //image = new labelModule.Label();

//             image.stretch = enums.Stretch.aspectFill;
//             imageGrid.addChild(image);

//             args.view = imageGrid;
//         } else {
//             image = imageGrid._children[0];
//         }

//         image.source = args.object.items.getItem(args.index);
//     });

//     listView.bind({
//         sourceProperty: "items",
//         targetProperty: "items",
//         twoWay: true
//     }, model);

//     button.bind({
//         sourceProperty: "message",
//         targetProperty: "text"
//     }, model);

//     button.on("click", function () {
//         model.tapAction();
//     });

//     var gridPanel = new gridModule.GridPanel();

//     gridPanel.addChild(listView);
//     gridPanel.addChild(button);

//     // Specify in which column button should be placed.
//     gridModule.GridPanel.setColumn(listView, 0);
//     gridModule.GridPanel.setColumn(button, 0);

//     // Specify in which row button should be placed.
//     gridModule.GridPanel.setRow(listView, 0);
//     gridModule.GridPanel.setRow(button, 1);

//     // Create GridLength object with star size (take remaining space)
//     var starGridLength = new gridModule.GridLength(1, gridModule.GridUnitType.star);

//     // Create GridLength object with auto size (size to content)
//     var autoGridLength = gridModule.GridLength.auto;

//     // Create RowDefiniton object and set its height to auto width.
//     var firstRowDefinition = new gridModule.RowDefinition();
//     firstRowDefinition.height = starGridLength;

//     // Create RowDefiniton object and set its height to star width.
//     var secondRowDefinition = new gridModule.RowDefinition();
//     secondRowDefinition.height = autoGridLength;

//     // Add rowDefiniton objects to gridPanel.
//     gridPanel.addRowDefinition(firstRowDefinition);
//     gridPanel.addRowDefinition(secondRowDefinition);

//     // Create and return the page.    
//     var mainPage = new pageModule.Page();
//     //mainPage.content = gridPanel;
//     mainPage.css = "button { font-size: 20; color: #3BB9FF; background-color: gray }";
//     return mainPage;
// }

// exports.createPage = createPage;
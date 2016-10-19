'use strict';
var frame = require('ui/frame'),
    platform = require('platform');

function platformInit(page) {
    var top = frame.topmost(),
        ios = top.ios,
        android = top.android;

    if (android) {
        android.defaultAnimatedNavigation = true;
    }

    if (ios) {
        ios.navBarVisibility = 'always';
        // Restore back swipe gesture
        if (top.canGoBack()) {
            page.ios.navigationController.interactivePopGestureRecognizer.delegate = page.ios;
        }
    }
}

function back() {
    frame.topmost().goBack();
}

function navigate(location) {
    frame.topmost().navigate(location);
}

function onOpenUrl(url) {
    if (!url) {
        return;
    }

    if (platform.device.os === platform.platformNames.ios) {
        var nsUrl = NSURL.URLWithString(url),
            sharedApp = UIApplication.sharedApplication();

        if (sharedApp.canOpenURL(nsUrl)) {
            sharedApp.openURL(nsUrl);
        }
    } else if (platform.device.os === platform.platformNames.android) {
        var intent = new android.content.Intent(android.content.Intent.ACTION_VIEW, android.net.Uri.parse(url)),
            activity = frame.topmost().android.activity;

        activity.startActivity(android.content.Intent.createChooser(intent, 'share'));
    }
}

function processImage(img, dbConfiguration) {
    function isAbsolute(img) {
        if (img && (img.slice(0, 5) === 'http:' || img.slice(0, 6) === 'https:' || img.slice(0, 2) === '//' || img.slice(0, 5) === 'data:')) {
            return true;
        }
        return false;
    }

    if (!img) {
        var empty1x1png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=';
        img = 'data:image/png;base64,' + empty1x1png;
    } else if (!isAbsolute(img)) {
        var setup = dbConfiguration || {};
        img = setup.scheme + ':' + setup.url + setup.appId + '/Files/' + img + '/Download';
    }
    return img;
}

exports.back = back;
exports.navigate = navigate;
exports.platformInit = platformInit;
exports.onOpenUrl = onOpenUrl;
exports.processImage = processImage;

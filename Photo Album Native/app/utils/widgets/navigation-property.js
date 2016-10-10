var specialProperties = require('ui/builder/special-properties'),
    gestures = require('ui/gestures'),
    util = require('utils/utils'),
    helpers = require('./helper'),
    app = require('application');

specialProperties.registerSpecialProperty('externalAddress', (instance, value) => {
    if (value.substring(0, 4) === 'geo:' && app.ios) {
        value = 'http://maps.apple.com/?ll=' + value.substring(4, value.length);
    }

    instance.on(gestures.GestureTypes.tap, () => {
        util.openUrl(value);
    });
});

specialProperties.registerSpecialProperty('linkToView', (instance, value) => {
    instance.on(gestures.GestureTypes.tap, () => {
        helpers.navigate({
            moduleName: value
        });
    });
});

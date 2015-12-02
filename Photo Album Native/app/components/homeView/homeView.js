'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper');

// additional functions
function pageLoaded(args) {
    var page = args.object;
    helpers.platformInit(page);

    // additional pageLoaded
    if (isInit) {
        isInit = false;

        // additional pageInit
    }
}

// START_CUSTOM_CODE_homeView
// Add custom code here.
// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;
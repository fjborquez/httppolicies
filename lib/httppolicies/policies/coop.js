var policy = require('../httppolicy');

(function() {

    'use strict';

    var settings = {
        defaultDirective: 'unsafe-none',
        headerName: 'Cross-Origin-Opener-Policy',
        directives: ['same-origin-allow-popups', 'same-origin']
    };

    module.exports = policy(settings);
})();

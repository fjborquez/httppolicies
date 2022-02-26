var policy = require('../httppolicy');

(function() {

    'use strict';

    var settings = {
        defaultDirective: 'unsafe-none',
        headerName: 'Cross-Origin-Embedder-Policy',
        directives: ['require-corp']
    };

    module.exports = policy(settings);
})();

// TODO: Add test for this library

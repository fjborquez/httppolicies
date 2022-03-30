const httppolicymanager = require('../httppolicymanager');

let policy = {
    defaultDirective: 'unsafe-none',
    headerName: 'Cross-Origin-Embedder-Policy',
    directives: ['require-corp'],
};

httppolicymanager.setPolicy('coep', policy);

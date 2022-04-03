const httppolicymanager = require('../httppolicymanager');

let policy = {
    defaultDirective: 'unsafe-none',
    headerName: 'Cross-Origin-Embedder-Policy',
    directives: ['require-corp'],
};

module.exports = () => {
    httppolicymanager.setPolicy('coep', policy);
};

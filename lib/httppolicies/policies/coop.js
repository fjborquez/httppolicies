const httppolicymanager = require('../httppolicymanager');

let policy = {
    defaultDirective: 'unsafe-none',
    headerName: 'Cross-Origin-Opener-Policy',
    directives: ['same-origin-allow-popups', 'same-origin'],
};

module.exports = () => {
    httppolicymanager.setPolicy('coop', policy);
};

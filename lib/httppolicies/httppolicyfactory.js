const coep = require('../HttpPolicies/policies/coep');
const coop = require('../HttpPolicies/policies/coop');

module.exports = (options) => {
    switch (options.policy) {
        case 'coep':
            return coep;
        case 'coop':
            return coop;
        default:
            throw new Error('Invalid policy');
    }
}

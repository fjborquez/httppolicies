const coep = require('../HttpPolicies/policies/coep');
const coop = require('../HttpPolicies/policies/coop');

module.exports = (options) => {
    return () => {
        switch (options.policy) {
            case 'coep':
                return coep;
            case 'coop':
                return coop;
            default:
                throw new Error('Invalid policy');
        }
    }
}

// TODO: add a test for this file

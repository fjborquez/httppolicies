(function() {
    'use strict';

    const httpPolicyFactory = require('./httppolicyfactory');
    const policies = new Map();

    function setPolicy(policyName, policy) {
        policies.set(policyName, policy);
    }

    function getPolicy(policyName) {
        return policies.get(policyName);
    }

    function hasPolicy(policyName) {
        return policies.has(policyName);
    }

    function createPolicyInstance(shortName) {
        return httpPolicyFactory(getPolicy(shortName));
    }

    module.exports = () => {
        return {
            setPolicy: setPolicy,
            getPolicy: getPolicy,
            hasPolicy: hasPolicy,
            createPolicyInstance: createPolicyInstance,
        };
    };
})();




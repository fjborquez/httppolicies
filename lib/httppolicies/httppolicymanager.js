const httpPolicyFactory = require('./httppolicyfactory');

module.exports = () => {
    // TODO: Change for map object
    const policies = {};

    function setPolicy(policyName, policy) {
        policies[policyName] = policy;
    }

    function getPolicy(policyName) {
        return policies[policyName];
    }

    function hasPolicy(policyName) {
        return policyName in policies;
    }

    function createPolicyInstance(shortName) {
        return httpPolicyFactory(getPolicy(shortName));
    }

    return {
        setPolicy: setPolicy,
        getPolicy: getPolicy,
        hasPolicy: hasPolicy,
        createPolicyInstance: createPolicyInstance,
    };
};

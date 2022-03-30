const expect = require('chai').expect;
const manager = require('../lib/httppolicies/httppolicymanager');

describe('httppolicymanager', function() {
    beforeEach(function() {
        this.httppolicymanager = manager();
    });

    describe('create a policy', function() {
        it('should return true when check if exists', function() {
            const policyName = 'aPolicy';
            const policyObject = {};
            this.httppolicymanager.setPolicy(policyName, policyObject);
            expect(this.httppolicymanager.hasPolicy(policyName)).to.be.true;
        });
    });

    describe('get a policy', function() {
        it('should return the policy object', function() {
            const policyName = 'aPolicy';
            const policyObject = {};
            this.httppolicymanager.setPolicy(policyName, policyObject);
            expect(this.httppolicymanager.getPolicy(policyName)).to.equal(policyObject);
        });
    });

    describe('create a policy instance', function() {
        it('should return an instance of the passed policy', function() {
            const policyName = 'aPolicy';
            const policyObject = {
                directives: ['aDirective']
            };
            this.httppolicymanager.setPolicy(policyName, policyObject);
            const policyInstance = this.httppolicymanager.createPolicyInstance(policyName);
            expect(policyInstance).to.be.an('object');
        });
    });
});

const expect = require('chai').expect;
const sinon  = require('sinon');
const httpPolicy = require('../lib/httppolicies/httppolicy');

describe('httppolicy', function() {
    beforeEach(function() {
        this.settings = {
            defaultDirective: 'directive1',
            directives: ['directive2', 'directive3'],
            headerName: 'headerName',
        };

        this.policy = httpPolicy(this.settings);
    });

    describe('create object', function() {
        it('should create the policy object', function() {
            expect(this.policy).to.be.an('object');
        });
    });

    describe('isDirectiveAllowed', function() {
        it('should return true when directive exists', function() {
            expect(this.policy.isDirectiveAllowed('directive1')).to.be.true;
        });

        it('should return false when directive does not exist', function() {
            expect(this.policy.isDirectiveAllowed('directive0')).to.be.false;
        });
    });

    describe('getDirectiveOrDefault', function() {
        it('should return the default directive when directive does not exist', function() {
            expect(this.policy.getDirectiveOrDefault('directive0')).to.equal('directive1');
        });

        it('should return the directive when it exists', function() {
            expect(this.policy.getDirectiveOrDefault('directive2')).to.equal('directive2');
        });
    });

    describe('getDefaultDirective', function() {
        it('should return the default directive', function() {
            expect(this.policy.getDefaultDirective()).to.equal('directive1');
        });
    });
});

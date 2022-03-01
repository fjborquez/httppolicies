const expect = require('chai').expect;
const sinon  = require('sinon');
const factory = require('../lib/httppolicies/httppolicyfactory');

describe('httppolicyfactory', function() {
    describe('create existing policy', function() {
        it('should return the coep policy', function() {
            const policy = factory({ policy: 'coep' });
            expect(policy).to.be.an('object');
            expect(policy.getHeaderName()).to.equal('Cross-Origin-Embedder-Policy');
        });

        it('should return the coop policy', function() {
            const policy = factory({ policy: 'coop' });
            expect(policy).to.be.an('object');
            expect(policy.getHeaderName()).to.equal('Cross-Origin-Opener-Policy');
        });
    });
    describe('create non-existing policy', function() {
        it('should throw an error', function() {
            expect(() => {
                factory({ policy: 'invalid' });
            }).to.throw(Error);
        });
    });
});

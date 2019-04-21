//index.spec.js

const expect = require('chai').expect
const server = require('../routes/index');

describe('test', () => {
    it('should return a strig', () => {
        expect('ci with travis').to.equal('ci with travis');
    });
});
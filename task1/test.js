const chai = require('chai');
const assert = chai.assert;

const { firstEntry, getIndex } = require('./task1');

describe('String Functions', function() {
    const str = "Hello, how it is going? Fine, it is alright";
    const substr = "it";

    describe('firstEntry', function() {
        it('should return the correct index of the first entry', function() {
            assert.equal(firstEntry(str, substr), 11);
        });

        it('should return -1 if the substring is not found', function() {
            assert.equal(firstEntry(str, 'gf'), -1);
        });

        it('should ')
    });

    describe('getIndex', function() {
        it('should return the correct index of the first entry', function() {
            assert.equal(getIndex(str, substr), 11);
        });

        it('should return -1 if the substring is not found', function() {
            assert.equal(getIndex(str, 'gf'), -1);
        });
    });
});

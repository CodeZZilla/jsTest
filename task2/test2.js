

const chai = require('chai');
const assert = chai.assert;

const {searchKey} = require('./task4');
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
describe('Search function', function (){
    it('should return index of the searching key',function (){
        assert.equal(searchKey(array,4),3)
    })
    it('should return -1 if key is not founded',function (){
        assert.equal(searchKey(array,123),-1)
    })
})

const chai = require('chai');
const assert = chai.assert;

const {replacedStr} = require('./task4');

describe('Replace function', function (){
    let str = 'lorem ipsum lorem ipsum lorem ipsum'

    it('should return string with replaced spaces to %20',function (){
        assert.equal(replacedStr(str,'%20'),'lorem%20ipsum%20lorem%20ipsum%20lorem%20ipsum')
    })

    it('should return string with replaced spaces to 130',function (){
        assert.equal(replacedStr(str,'130'),'lorem130ipsum130lorem130ipsum130lorem130ipsum')
    })

    it('should return -1 if replacer is \' \' ',function (){
        assert.equal(replacedStr(str,' '),-1)
    })
})
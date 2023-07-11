const { describe } = require("node:test");
const utils = require('./utils');
const should = require('should'); // 가독성을 높이기 위함
describe ('utils.js 모듈의 capitialize()함수는',()=>{
    it('문자열의 첫번째 문자를  대문자로 변환한다.',()=>{
        const result = utils.capitialize('hello');
        result.should.be.equal('Hello');
    })

})
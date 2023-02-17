var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var student = require('../controller/studentctrl');
var studentobj = new student();


describe("stub", () => {


    it("function args check",() => {
        var stub1 = sinon.stub(studentobj,'getexternal')
        stub1.withArgs(40).returns(5)
        expect(studentobj.finalmarks(40)).to.be.equal(54);
    });
    
});
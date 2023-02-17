var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var student = require('../controller/studentctrl');
var studentobj = new student();


describe("function return check", () => {
    it("test user function",() => {
        expect(studentobj.userid()).to.be.equal(12);
    });

    // it("function call",() => {
    //     var spyobj = sinon.spy(studentobj,'getinfo');
    //     studentobj.home(5);
    //     expect(spyobj.calledOnce).to.be.true;
    // });

    it("function args check",() => {
        var spyobj1 = sinon.spy(studentobj,'getinfo')
        studentobj.home(13);
        expect(spyobj1.calledWith(13,1)).to.be.true;
    });
    
});
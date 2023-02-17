var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var student = require('../controller/studentctrl');
var studentobj = new student();


describe("mock", () => {


    it("mock count function",() => {
        var mock = sinon.mock(studentobj);

        var expt = mock.expects('getexternal');
        expt.exactly(2);
        expt.withArgs(40);
        studentobj.finalmarks(40);

        mock.verify();
    });
    
});
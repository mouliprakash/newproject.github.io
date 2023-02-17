var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var student = require('../controller/studentctrl');
var studentobj = new student();
var chaiaspromise = require('chai-as-promised')
chai.use(chaiaspromise)

describe("proimise", () => {


    // it("check value function",() => {
    //     //expect(studentobj.dbdata()).to.be.equal(10);
    //     studentobj.dbdata().then(function(result){
    //         expect(result).to.be.equal(10);
    //     });
    // });

    it("check value function", function()  {
        //expect(studentobj.dbdata()).to.be.equal(10);
        this.timeout(0);
        studentobj.dbdata().then(function (result) {
            expect(result).to.be.equal(10);
        });
    });

    it("check promise", function()  {

        this.timeout(0);
        return expect(studentobj.dbdata()).to.be.eventually.equal(10);
    });



});
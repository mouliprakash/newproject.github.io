const chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var assert = chai.assert;
describe("Aspect check", () => {
    let username = "Mouli";
    it("check string", () => {
        assert.typeOf(username, 'string');
    });

    it("check equal", () => {
        assert.equal(username, "Mouli");
    });

    it("check equal", () => {
        assert.lengthOf(username, 5);
    });
});

//*********should****************/


describe("should check", () =>{
    let username = 'Mouli';
    let mylist = {
        item:[
            {
                id:1,name:'demo'
            }
        ],
        title: 'user list'
    }
    it("check string", () => {
        username.should.be.a('string');
    });

    // it("check string", () => {
    //     username.should.be.a('boolean');
    // });

    it("check string", () => {
        username.should.be.equal('Mouli');
    });

    it("check mylist", () => {
        mylist.should.have.property('item').with.lengthOf(1);
    });
});

//*********expect****************/

describe("check expecty", () => {

    let username = 'Mouli';
    let mylist = {
        item:[
            {
                id:1,name:'demo'
            }
        ],
        title: 'user list',
        mouli: 'abc',
        address:{
            phoneno: "7899308137",
            city: "Bangalore"
        }
    }

    it("string match", () => {
        expect(username).to.be.a.string;
    });

    it("equal test", () => {
        expect(username).to.equal("Mouli");
    });

    it("check length", () => {
        expect(username).to.lengthOf(5);
    });

    it("check property", () => {
        expect(mylist).to.have.property('item').with.lengthOf(1);
    });

    it("api object match", () => {
        expect(mylist).to.have.all.keys('item','title','mouli','address');
    });

    it("phone no", () => {
        expect(mylist).to.have.nested.property('address.phoneno');
    });

    it("phone no", () => {
        expect(mylist).to.have.nested.include({'address.city':'Bangalore'});
    });
});
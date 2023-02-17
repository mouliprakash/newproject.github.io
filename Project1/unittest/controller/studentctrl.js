const { default: axios } = require("axios");

class student {
    constructor() {

    }

    home(type) {
        var data = this.getinfo(type, 1);
        // this.getinfo(type, 1);
        return data + 5;
    }

    getinfo(type, num) {
        return 10;
    }

    userid() {
        return 12;
    }

    finalmarks(total){
        let external = this.getexternal(total);
        this.getexternal(total);
        let internal = this.getinternal(total);
        let finalsum = external+ internal +10;
        return finalsum;

    }

    getexternal(total){
        return total +1;
    }

    getinternal(total){
        return total-1;
    }

    dbdata(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {resolve(10)
                
            }, 10000);
        })
    }
}

module.exports = student;
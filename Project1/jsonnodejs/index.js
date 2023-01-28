const fs = require('fs');

const bioData = {
    name : "Mouli",
    age : 23,
    gender : "male",
    phno : "7899308137"
};

console.log(bioData.gender);

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

fs.writeFile('jsondata.json',jsonData, () => {
    console.log('new file created');
});

fs.readFile("jsondata.json","utf8", (err, data) => {
    console.log(JSON.parse(data));
});


//const objData = JSON.parse(jsonData);
//console.log(objData);

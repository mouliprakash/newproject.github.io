const fs = require('fs');
fs.writeFileSync('bio.txt',"Simply putting some data\n");
fs.appendFileSync('bio.txt',"Adding extra data");

data = fs.readFileSync('bio.txt','utf8');
console.log(data);
fs.renameSync('bio.txt','fuckoff.txt');
fs.unlinkSync('fuckoff.txt');
fs.mkdirSync('helloworld');
fs.rmdirSync('helloworld');

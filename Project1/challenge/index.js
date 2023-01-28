const fs = require('fs');
fs.writeFile('bio.txt',"Hello world...",
(err) => {
    console.log("file created");
});

fs.appendFile('bio.txt',"My name is Mouli",
(err) =>{
    console.log('added text');
});

fs.readFile('bio.txt','utf8',
(err,data) => {
    console.log(data);
});

fs.rename("bio.txt",'mybio.txt',
(err) => {
    console.log('renamed file');
});
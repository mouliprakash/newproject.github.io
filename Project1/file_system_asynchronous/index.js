const fs = require("fs");

fs.writeFile('read.txt',"today is an awesome day\n",
(err) => {
    console.log("created");
    console.log(err);
});

fs.appendFile("read.txt","tomorrow will also be an awesome day",
(err) => {
    console.log("task completed");
});

fs.readFile('read.txt','utf8',
(err,data) => {
    console.log(data);
});


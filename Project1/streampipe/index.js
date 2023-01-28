const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    // fs.readFile('input.txt','utf8', (err, data) => {
    //     if(err) return console.log(err);
    //     res.end(data);
    // });

    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);
});

server.listen(8000,'127.0.0.1');
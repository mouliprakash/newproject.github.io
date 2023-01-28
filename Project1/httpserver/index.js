const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url =="/"){
    res.end('Hello from the other side mouli');
    } else if(req.url =="/about"){
        res.end("Hello from the about us side");
    } else if(req.url =="/mouli"){
        res.end("Hello from Mouli");
    } else if(req.url =="/userapi"){
        //res.end("Hello from user api");
        fs.readFile('./Userapi/userapi.json',"utf8",(err,data) =>{
            console.log(data);
            const objdata = JSON.parse(data);
            res.end(objdata[3].name);
        });
    } else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h1>404 error page does not exist<h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log('listening to port no 8000');
});
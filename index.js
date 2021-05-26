const http = require('http');
const port = 3000;

const handlers = require('./handlers/index');

http.createServer((req,res)=>{
   
    for(let handler of handlers){
        if(!handler(req,res)){
            break;
        }
    }
    // res.writeHead(200,{
    //     'Content-type':'text/plain'
    // });
    // res.write('Hello JS WORLD!!!');
    // res.end();

}).listen(port);
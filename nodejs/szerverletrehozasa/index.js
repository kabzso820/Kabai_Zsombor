const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


console.log(__dirname);
console.log(__filename);

const add = require("./calculator.js");

console.log(add(2,3));

const http = require("http");

const server2 = http.createServer(function(req,res){
  /*
    Request:
    URL pl http://localhost.8080/<path>
    METHOD PL GET, POST, DELETE, PATCH, PUT

    Response:
    HEADER
    BODY
    STATUS

    
  */


    res.writeHead(200);
    res.end("Hello World!");

});

server.listen(8080);
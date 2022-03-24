//Load  http Package
var http = require('http');
var a = 10;
var b = 20;
var c = a + b;
var msg = `A Value is ${a} <br/> B Value is ${b} and  <br/>Sum is ${c}`;
//Create Server Code
http.createServer(function(req,res){
    //Content Head
    res.writeHead(200,{'Content-type':'text/html'})
    //Print Message on Browser
    res.end(msg);
}).listen(3000);
console.log("Server is started http://127.0.0.1:3000 ")
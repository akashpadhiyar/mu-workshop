//Load  http Package
var http = require('http');

//Create Server Code
http.createServer(function(req,res){

    //Print Message on Browser
    res.end("<h1>Welcome to Node JS</h1>");

}).listen(3000);
console.log("Server is started http://127.0.0.1:3000 ")
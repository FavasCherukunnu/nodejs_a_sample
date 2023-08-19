const fs = require('fs');
var http = require('http');
var path = require('path');

const htmlPath = 'views'
http.createServer(function(req,res){


    if(req.url === '/login'){
        fs.readFile(path.join(__dirname,htmlPath,'loginpage.html'),(err,data)=>{
            res.writeHead(200,{"Content-Type":'text/html'});
            res.write(data);
            res.end();
        })
    }else{
        fs.readFile(path.join(__dirname,htmlPath,'homePage.html'),(err,data)=>{
            res.writeHead(200,{"Content-Type":'text/html'});
            res.write(data);
            res.end();
        })
    }
  


}
).listen(8080);
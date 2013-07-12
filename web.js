var express = require('express');

var fs = require('fs');
var FILE_DEFAULT = "index.html";

var message() = function (file) {
file = file || FILE_DEFAULT;
var buffer = fs.readFileSync(file);
return (buffer.toString('utf-8'));
}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

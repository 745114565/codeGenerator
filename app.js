var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
	res.sendFile(__dirname + "/" + "src/views/index.html");
   // res.send('Hello World');
});
 

app.get('/gotoGeneratePage', function (req, res) {
   res.sendFile(__dirname + "/" + "src/views/input.html");

});

app.post('/postDate', function (req, res) {
  res.send(req);

});

var server = app.listen(8080, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("服务已经启动，访问地址为 http://%s:%s", host, port);
 
});
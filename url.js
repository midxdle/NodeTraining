var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(6969);

//split query string

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200 , {'content-type':'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(9696);
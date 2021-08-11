//combine URL,FS and HTTP methods

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    // var q = url.parse(req.url, true);
    //var filename = "." + q.pathname;
    //fs.readfile(filename, ...) ...
    if(req.url == '/summer') {
    fs.readFile('url1.html', function(err, data) {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
} else if(req.url == '/winter') {
    fs.readFile('url2.html', function(err, data) {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
} else {
    res.write(`404 ERROR
please use "localhost:7070/winter" or "localhost:7070/summer"`);
    res.end();
}

}).listen(7070);
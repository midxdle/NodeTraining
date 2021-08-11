var http = require('http');
var dt = require('./mymodules');

http.createServer(function(req, res) {
    res.writeHead(200, {'content-type':'text/html'});
    res.write(dt.mydatetime());
    res.end();
}).listen(6969);
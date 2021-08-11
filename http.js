var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'content-Type':'text/html'});
    res.end('my first lines with node js');
}).listen(6969);
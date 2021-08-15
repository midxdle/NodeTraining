var http = require('http');
var fs = require('fs');

//fs readfile
/*http.createServer(function(req, res) {
    fs.readFile('fs.html', function(err, data) {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(6969);

//fs create and update file
//append method
fs.appendFile('fs.txt', 'it is a test', function(err) {
    if(err) throw err;
    console.log('done');
});

//open method(create only)
fs.open('fs.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('done!');
});

//writeFile method
fs.writeFile('fs.txt', 'it is a test!', function(err) {
    if(err) throw err;
    console.log('file has been wrote...');
});

//fs delete file
fs.unlink('fs.txt', function(err) {
    if(err) throw err;
    console.log('file deleted...');
});

//fs rename file
fs.rename('fs.txt', 'filesystem.txt', function(err) {
    if(err) throw err;
    console.log('file renamed...');
});

let stream = fs.createReadStream("./data.txt");

stream.on("data", function(data) {
    let chunk = data.toString();
    console.log(chunk);
});

let Stream = fs.createWriteStream("./empty.txt");

Stream.write("i think node.js ")
Stream.write("\nis one of the best ")
Stream.write("\ntools for programmers ")
Stream.write("\nwhom wanted to write and build ")
Stream.write("\nfastest servers and applications.")
Stream.write("\nwrote by midxdle")*/

//pipes
let readStream = fs.createReadStream("./dataIn.txt");
let writeStream = fs.createWriteStream("./dataOut.txt");

readStream.pipe(writeStream);
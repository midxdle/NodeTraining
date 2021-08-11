const formidable = require('formidable');
const http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if(req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            let oldpath = files.filetoupload.path;
            let newpath = 'C:/Users/ROOZIN~1/AppData/Local/Temp/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err) {
                if(err) throw err;
                res.write('file uploaded and moved...');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(7070);
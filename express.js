const express = require('express');

let app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.send('Hi to the world out there!')
});

let server = app.listen(8080, ()=>{});
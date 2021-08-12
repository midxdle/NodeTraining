const express = require('express');

let app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index', 
    {title:'midxdle', message:'I am a programmer'})
   //res.send('Hi to the world out there!')
});

let server = app.listen(3000, ()=>{});

app.route('/node').get(function(req, res) {
    res.send("node is so exciting");
});

app.route('/javascript').get(function(req, res) {
    res.send('javascript is so powerfull');
});

app.get('/', function(req, res) {
    res.send("i really enjoy programming");
});
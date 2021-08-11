//npm install express

const express = require('express');

let app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {});

let server = app.listen(8080, ()=>{});
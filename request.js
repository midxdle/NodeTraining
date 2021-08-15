const request = require('request');
request("https://github.com/midxdle/fourthrepo.git", function(error, response, body) {
    console.log(error, response, body);
});
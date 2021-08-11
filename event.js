//fire event
var fs = require('fs');
var rs = fs.createReadStream('fs.txt');
rs.on('open', function() {
    console.log("file is open...");
});

//EventEmitter
var events = require('events');
var emitter = new events.EventEmitter();

//event handler
var handler = function() {
    console.log('who called handler...?');
}

//assign handler to event
emitter.on('handler', handler);

//fire the event
emitter.emit('handler');
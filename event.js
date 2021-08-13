//fire event
var fs = require('fs');
var rs = fs.createReadStream('fs.txt');
rs.on('open', function() {
    console.log("file is open...");
});

//EventEmitter
var events = require('events');
const { emit } = require('process');
var emitter = new events.EventEmitter();

//event handler
var handler = function() {
    console.log('who called handler...?');
}

//assign handler to event
emitter.on('handler', handler);

//fire the event
emitter.emit('handler');

//once method
emitter.once('handler', handler);
emitter.emit('handler'); //event will be triggered
emitter.emit('handler'); //event won't be triggered

//ListenerCount
emitter.on('handler', handler);
emitter.on('handler', handler);

console.log(events.EventEmitter(emitter, 'handler'));

//NewListener
emitter.on('NewListener', function(eventName, listener) {
    console.log('added listener for ' + eventName + 'events');
});

emitter.on('handler', handler);
emitter.on('handler', handler);
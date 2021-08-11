const event = require('events');
const emitter = new event.EventEmitter();
const handler = ()=>{console.log('hi');}
emitter.on('name', handler);
emitter.emit('name');
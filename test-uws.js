
/*
	npm install -g node-gyp
	npm install --global --production windows-build-tools
	npm install --save uws
*/

try{
	var asd = require('./uws');
} catch (e) {
	console.log('error', e);
}

if(true){
var WebSocket = require('uws');
var ws = new WebSocket('wss://clusteratlas.com:443/');

ws.on('open', function open() {
    console.log('Connected!');
    ws.send('This will be sent!');
});

ws.on('error', function error() {
    console.log('Error connecting!');
});

ws.on('message', function(data, flags) {
    console.log('Message: ' + data);
});

ws.on('close', function(code, message) {
    console.log('Disconnection: ' + code + ', ' + message);
});
}

/*
	npm install -g node-gyp
	npm install --global --production windows-build-tools
	npm install --save uws
*/

try{
	var faye = require('faye');
	var client = new faye.Client('http://clusteratlas.com/faye');
	
	client.subscribe('/messages', function(message) {
		alert('Got a message: ' + message.text);
	});
	
} catch (e) {
	console.log('error', e);
}

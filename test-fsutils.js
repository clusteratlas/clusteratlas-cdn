var fs			= require('fs');
var fsUtils		= require('nodejs-fs-utils');
var XXHash		= require('xxhash');
var prettyBytes = require('pretty-bytes');

	// Folder size:
	var size = fsUtils.fsizeSync('./node_modules');
	console.log('./node_modules:', size);

    // walk througth a list of files and folders in a folder 
    fsUtils.walkSync("./test", function (err, path, stats, next, cache) {
		if(err){
			console.log('err:', err);
		}
		if (typeof path === 'string') {
			// console.log('stats:', stats);
			if (typeof stats !== 'undefined') {
				if (typeof stats.isDirectory === 'function') {
					console.log(path, '\n\t', prettyBytes(fsUtils.fsizeSync(path)), stats.isDirectory());
					if (stats.isDirectory() === false) {
						console.log('\t', XXHash.hash(fs.readFileSync(path), 0xCAFEBABE));
					}
					console.log('\n');
				}
			}
		}
        if (typeof next === 'function') {
			next();
		}
    });
var XXHash = require('xxhash'),
    fs = require('fs');

var file = fs.readFileSync('index.js'),
    result = XXHash.hash(file, 0xCAFEBABE);
	
console.log(result);
//Require the file system accesses
fs = require('fs');
//Read the file Buffer
imgReadBuffer =  fs.readFileSync('test-pattern.jpg');
//Encode image buffer to hex
imaHexEncode = new Buffer.from(imgReadBuffer).toString('hex');

//output encoded data to console
//console.log(imaHexEncode);


//DECODE THE IMAGE
var imgHexDecode = new Buffer.alloc(imaHexEncode.length,imgReadBuffer,'hex');

fs.writeFileSync('decodedImage.jpg',imaHexEncode);

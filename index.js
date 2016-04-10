
const app = require('./lib/app.js');
const writeFile = require('./lib/write_bitmap');
const bufferTransform = require('./lib/bitmap_transform');

var myFile = __dirname + '/palette-bitmap.bmp';
app.readFile(myFile);

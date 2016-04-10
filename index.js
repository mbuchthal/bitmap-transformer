
const app = require('./lib/app.js');
const writeFile = require('./lib/write_bitmap');
const BufferTransform = require('./lib/bitmap_transform');
const bitmapToObject = require('./lib/bitmap_object');
const EE = require('events');

var ee = new EE();
var transform = new BufferTransform();

var myFile = __dirname + '/palette-bitmap.bmp';
app.readFile(myFile);




'use strict';

const fs = require('fs');
const EE = require('events');
const BufferTransform = require(__dirname + '/bitmap_transform');
const createBitObject = require(__dirname + '/bitmap_object');
const writeFile = require(__dirname + '/write_bitmap');

var ee = new EE();
var transform = new BufferTransform();
// 1. open file using fs and read it into a buffer

var app = module.exports = exports = function() {};

var myFile = __dirname + '/../non-palette-bitmap.bmp';

app.readFile = function(file, cb) {
  var bitmap;
  var bitmapData;
  var newBitmap;
  fs.readFile(file, function(err, data) {
    if (err) throw err;

    bitmap = data;
    ee.emit('createObject');
  });

  ee.on('createObject', function(err) {
    if (err) throw err;

    createBitObject(bitmap);
    bitmapData = createBitObject(bitmap);
    ee.emit('transform');
  });

  ee.on('transform', function(err) {
    if (err) throw err;

    transform.goBlue(bitmap);
    if (cb) cb(bitmap, bitmapData);
  });
};

// Bonus Points:

// Can handle palette and non-palette bitmaps
// Can handle multiple types of bitmaps (not just BM)
// create a command line interface
// command line interface that can select the transform
// can handle various sized bitmaps
// make your command install-able on npm and use a "bin"

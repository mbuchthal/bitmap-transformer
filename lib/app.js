'use strict';

const fs = require('fs');
const EE = require('events');
const BufferTransform = require(__dirname + '/bitmap_transform');
const createBitObject = require(__dirname + '/bitmap_object');
const writeFile = require(__dirname + '/write_bitmap');

var ee = new EE();
var transform = new BufferTransform();
// 1. open file using fs and read it into a buffer

var app = module.exports = exports = function() {}
var bitmap;
var myFile = __dirname + '/../non-palette-bitmap.bmp';

app.readFile = function(file) {
  fs.readFile(file, function(err, data) {
    if (err) throw err;

    bitmap = data;
    console.log(data);
    ee.emit('createObject');
  });
  ee.on('createObject', function(err) {
    if (err) throw err;

    createBitObject(bitmap);
    ee.emit('transform');
  });
  ee.on('transform', function(err) {
    if (err) throw err;

    transform.goRed(bitmap);
  });
};

// Bonus Points:

// Can handle palette and non-palette bitmaps

// Can handle multiple types of bitmaps (not just BM)

// Handle LE and BE computers with a single if statement

// create a command line interface

// command line interface that can select the transform

// can handle various sized bitmaps

// make your command install-able on npm and use a "bin"

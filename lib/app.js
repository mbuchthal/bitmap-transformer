'use strict';
const fs = require('fs');
const bufferTransform = require(__dirname + '/bitmap_transform');

// 1. open file using fs and read it into a buffer

var app = module.exports = exports = function() {}
  var bitmap;
  var myFile = __dirname + '/../palette-bitmap.bmp';

  app.readFile = function(file) {
    fs.readFile(file, function (err, data) {
      if (err) throw err;
      bitmap = data;
      console.log(bitmap);
      createBitObject(bitmap);
    });
  }
  // app.readFile(myFile);

  // 2. convert buffer header data into a Javascript Object

  var createBitObject = function(bitmap) {
    var bitmapData = {};
    bitmapData.headField = bitmap.toString('ascii', 0, 2);
    bitmapData.size = bitmap.readUInt32LE(2);
    bitmapData.res1 = bitmap.readUInt32LE(6);
    bitmapData.res2 = bitmap.readUInt32LE(8);
    bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
    bitmapData.numberOfColor = bitmap.readUInt32LE(26);
    bitmapData.infoHeader = {};
    bitmapData.infoHeader.biSize = bitmap.readUInt32LE(14);
    bitmapData.infoHeader.biWidth = bitmap.readUInt32LE(18);
    bitmapData.infoHeader.biHeight = bitmap.readUInt32LE(22);
    bitmapData.infoHeader.biPlanes = bitmap.readUInt32LE(26);
    bitmapData.infoHeader.biBitCount = bitmap.readUInt32LE(28);
    bitmapData.infoHeader.biCompression = bitmap.readUInt32LE(30);
    bitmapData.infoHeader.bitSizeImage = bitmap.readUInt32LE(34);
    bitmapData.infoHeader.biXPelsPerMeter = bitmap.readUInt32LE(38);
    bitmapData.infoHeader.biYPelsPerMeter = bitmap.readUInt32LE(42);
    bitmapData.infoHeader.biClrUsed = bitmap.readUInt32LE(46);
    bitmapData.infoHeader.biClrImportant = bitmap.readUInt32LE(50);
    console.log(bitmapData);
    bufferTransform.greyScale(bitmap);
  }

// Bonus Points:

// Can handle palette and non-palette bitmaps

// Can handle multiple types of bitmaps (not just BM)

// Handle LE and BE computers with a single if statement

// create a command line interface

// command line interface that can select the transform

// can handle various sized bitmaps

// make your command install-able on npm and use a "bin"









const bufferTransform = require(__dirname + '/bitmap_transform');
const EE = require('events');
const os = require('os');

var ee = new EE();
  // 2. convert buffer header data into a Javascript Object

var createBitObject = module.exports = exports = function(bitmap) {
  var bitmapData = {};
  var LE = function (offset) {
    return bitmap.readUInt32LE(offset);
  };
  var BE = function (offset) {
    return bitmap.readUInt32BE(offset);
  };
// * Handle LE and BE computers with a single if statement
  bitmapData.headField = bitmap.toString('ascii', 0, 2);
  if (os.endianness() == 'LE') {
    bitmapData.size = LE(2);
    bitmapData.res1 = LE(6);
    bitmapData.res2 = LE(8);
    bitmapData.pixelArrayStart = LE(10);
    bitmapData.numberOfColor = LE(26);
    bitmapData.infoHeader = {};
    bitmapData.infoHeader.biSize = LE(14);
    bitmapData.infoHeader.biWidth = LE(18);
    bitmapData.infoHeader.biHeight = LE(22);
    bitmapData.infoHeader.biPlanes = LE(26);
    bitmapData.infoHeader.biBitCount = LE(28);
    bitmapData.infoHeader.biCompression = LE(30);
    bitmapData.infoHeader.bitSizeImage = LE(34);
    bitmapData.infoHeader.biXPelsPerMeter = LE(38);
    bitmapData.infoHeader.biYPelsPerMeter = LE(42);
    bitmapData.infoHeader.biClrUsed = LE(46);
    bitmapData.infoHeader.biClrImportant = LE(50);
  } else {
    bitmapData.size = BE(2);
    bitmapData.res1 = BE(6);
    bitmapData.res2 = BE(8);
    bitmapData.pixelArrayStart = BE(10);
    bitmapData.numberOfColor = BE(26);
    bitmapData.infoHeader = {};
    bitmapData.infoHeader.biSize = BE(14);
    bitmapData.infoHeader.biWidth = BE(18);
    bitmapData.infoHeader.biHeight = BE(22);
    bitmapData.infoHeader.biPlanes = BE(26);
    bitmapData.infoHeader.biBitCount = BE(28);
    bitmapData.infoHeader.biCompression = BE(30);
    bitmapData.infoHeader.bitSizeImage = BE(34);
    bitmapData.infoHeader.biXPelsPerMeter = BE(38);
    bitmapData.infoHeader.biYPelsPerMeter = BE(42);
    bitmapData.infoHeader.biClrUsed = BE(46);
    bitmapData.infoHeader.biClrImportant = BE(50);
  };
  return bitmapData;
};


const bufferTransform = require(__dirname + '/bitmap_transform');
const EE = require('events');

var ee = new EE();
  // 2. convert buffer header data into a Javascript Object

var createBitObject = module.exports = exports = function(bitmap) {
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
  ee.emit('transform');
}

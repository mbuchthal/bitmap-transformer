'use strict';

const EE = require('events');
const writeFile = require(__dirname + '/write_bitmap');
const newFile = __dirname + '/../sample.bmp';

var ee = new EE();
// 3. Run a transform on the buffer directly
// * invert the colors (essentially subtract every color value from the max color value which is 255),
// * Grayscale the colors, multiply each color value by a constant, just make sure your values don't go over 255.
// * (red|green|blue)scale the colors, same as above but only multiply one of the colors.

const BufferTransform = module.exports = exports = function() {};

BufferTransform.prototype.colorInvert = (bitmap) => {
  for (let i = 54; i < 1078; i++) {
    bitmap[i] = 255 - bitmap[i];
  }
  writeFile(bitmap, newFile);
};

BufferTransform.prototype.greyScale = (bitmap) => {
  for (let i = 54; i < 1078; i++) {
    (bitmap[i] * 2.5) < 256 ?  bitmap[i] = bitmap[i] * 2.5 : bitmap[i] = 255;
  }
  writeFile(bitmap, newFile);
};

BufferTransform.prototype.goBlue = (bitmap) => {
  for (let i = 54; i < 1078; i = i+4) {
    (bitmap[i] + 150) < 256 ?  bitmap[i] = bitmap[i] + 150: bitmap[i] = 255;
  }
  writeFile(bitmap, newFile);
  return bitmap;
};

BufferTransform.prototype.goGreen = (bitmap) => {
  for (let i = 55; i < 1078; i = i+4) {
    (bitmap[i] + 150) < 256 ?  bitmap[i] = bitmap[i] + 150: bitmap[i] = 255;
  }
  writeFile(bitmap, newFile);
};

BufferTransform.prototype.goRed = (bitmap) => {
  for (let i = 56; i < 1078; i = i+4) {
    (bitmap[i] + 150) < 256 ?  bitmap[i] = bitmap[i] + 150: bitmap[i] = 255;
  }
  writeFile(bitmap, newFile);
};

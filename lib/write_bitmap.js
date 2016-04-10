'use strict';
var fs = require('fs');
var newFile = __dirname + '/../sample.bmp';

// 4. Write the buffer to a new file.

var writeFile = module.exports = exports = function (data) {
  fs.writeFile(newFile, data, (err) => {
    if (err) throw err;
    console.log('file written');
  });
};

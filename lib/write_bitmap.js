'use strict';
const fs = require('fs');
const newFile = __dirname + '/../sample.bmp';
const EE = require('events');

var ee = new EE();

// 4. Write the buffer to a new file.

var writeFile = module.exports = exports = function (data) {

  // ee.on('write', function (data) {
    fs.writeFile(newFile, data, (err) => {
      if (err) throw err;
      console.log('file written');
    });
  // });
};

'use strict';
const fs = require('fs');
const EE = require('events');

var ee = new EE();

// 4. Write the buffer to a new file.

var writeFile = module.exports = exports = function (data, path) {
  fs.writeFile(path, data, (err) => {
    if (err) throw err;
    console.log('A file was written at ' + path);
  });
};

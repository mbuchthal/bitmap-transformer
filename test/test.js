const chai = require('chai');
const expect = chai.expect;
const chaiFiles = require('chai-files');
const app = require(__dirname + '/../lib/app');
const fs = require('fs');
const writeFile = require(__dirname + '/../lib/write_bitmap');
const BufferTransform = require(__dirname + '/../lib/bitmap_transform');
const createObject = require(__dirname + '/../lib/bitmap_object');
const EE = require('events');

chai.use(chaiFiles);
var file = chaiFiles.file;

describe('bitmap', function() {
  before((done) => {
    var testFile = __dirname + '/../palette-bitmap.bmp';
    this.newFile = __dirname + '/test_image.bmp';
    var transform = new BufferTransform();
    this.dummy = new Buffer(100);
    for (var i = 0; i < this.dummy.length; i++) {
      this.dummy[i] = 0x00;
    }
    transform.goBlue(this.dummy);
    app.readFile(testFile, (arg, arg2) => {
      this.bitmap = arg;
      this.bitmapData = arg2
      done();
    writeFile(this.dummy, __dirname + '/test_image.bmp')
    });
  });

  after(() => {
    fs.unlink(this.newFile, (err) => {
      if (err) throw err;
    });
  });

  // test for buffer
  it('should be read as a buffer', () => {
    expect(Buffer.isBuffer(this.bitmap)).to.equal(true);
  });

  // test for creating the bitmap object
  it('should be converted into a JS object', () => {
    expect(this.bitmapData).has.property('headField');
  });

  // test for transforming the buffer
  it('the transform should be transformed', () => {
    expect(this.dummy[54]).is.eql(0x96);
  });

  // test for writing a file
  it('should be written to a new file', () => {
    expect(file(this.newFile)).to.exist;
  });
});


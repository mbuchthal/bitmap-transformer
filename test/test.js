
const expect = require('chai').expect;
const app = require(__dirname + '/../lib/app');


describe('buffer', function() {
  var testFile = __dirname + '/../test_image.bmp';
  app.readFile(testFile);

  it('should be read', (done) => {
    expect(Buffer.isBuffer(myApp.bitmap)).to.equal(true);
    done();
  });

  it('should be converted into a JS object', (done) => {
    expect(typeof myApp.bitmapData).to.equal('object');
    done();
  });
});

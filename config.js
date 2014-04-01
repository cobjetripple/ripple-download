var path = require('path'),
    fs = require('fs');

var pkgFileName = 'package.json',
    pkgFilePath = './ripple-client/';

var pkgFile = path.join(pkgFilePath, pkgFileName);

module.exports = function() {
  return JSON.parse(fs.readFileSync(pkgFile, 'utf8', function(err, data) {
    if (err) {
      console.log("Read error: ", err);
    }
  }));
}
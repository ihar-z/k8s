var fs = require('fs');
fs.readFile( __dirname + '/test.txt', function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
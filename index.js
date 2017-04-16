var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'docs')))

app.listen(PORT, function () {
  console.log('Your app listening on port %s!', PORT);
});

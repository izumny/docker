var express = require('express');
var app = express();

app.get(['/', '/index.html'], function (req, res) {
  res.send('Hi Izumi chan!!!');
});

app.listen(80);
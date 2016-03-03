var express = require('express');
var app = express();

// The number of milliseconds in one day
var oneDay = 86400000;

// Use compress middleware to gzip content
app.use(express.compress());


// HTACESS code
var auth = require('./auth');
app.use(auth);

// Serve up content from public directory
app.use(express.static(__dirname + '/public-1', { maxAge: oneDay }));




app.listen(process.env.PORT || 3000);

console.log('Server started at port 3000');
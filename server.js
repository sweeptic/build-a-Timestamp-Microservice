// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

const defaultRoutes = require('./routes/default');
const apiRoutes = require('./routes/api');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use('/', defaultRoutes);
app.use('/api', apiRoutes);

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// app.listen(3010);

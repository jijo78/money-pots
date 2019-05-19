var express = require('express');
var app = express();
var activePots = require('./pots.json');

var SERVER_PORT = 3004;

app.get('/pots', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Access-Control-Allow-Origin', '*');

  response.send(JSON.stringify(activePots));
});

app.listen(SERVER_PORT, () =>
  console.log('Pot service listening on http://localhost:' + SERVER_PORT)
);

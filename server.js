// server.js
// where your node app starts

// Set your own valentine message for your lover(s)
var VALENTINE_MESSAGE="Hannah, I love you so much ❤️️ You are my everything and I couldn't live without you. You always make me cool stuff, so I thought I would make you something cool!";

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Sending your message to the app
app.get("/message", function (request, response) {
  response.send(VALENTINE_MESSAGE);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
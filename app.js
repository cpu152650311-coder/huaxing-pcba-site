// Minimal Passenger test — does Passenger even work?
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end('<h1>Passenger is working!</h1><p>Path: ' + req.url + '</p>');
});

var port = process.env.PORT || process.env.PASSENGER_PORT || 3000;
server.listen(port, function() {
  console.log('Listening on port ' + port);
});


var http, port, hostname, redirector, server, location;

http = require('http');

port = process.env.PORT || 81;

redirector = function (req, res) {
  location = "https://" + req.headers['host'] + req.originalUrl;
  res.writeHead(301, { 'Location': location });
  res.end();
  console.log((new Date()).toJSON() + ': Redirecting ' + req.ip + ' from http to https on path ' + req.url + '.');
}
server = http.createServer(redirector);

if (hostname = process.env.HOSTNAME) {
  server.listen(port, hostname);
}
else {
  server.listen(port);
}

console.log('Redirector listening on port '+port+'.');


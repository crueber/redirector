
var http, hostname, redirector, server, from_port, to_port;

http = require('http');

from_port = process.argv[2] || 80;
to_port = process.argv[3] || 443;

redirector = function (req, res) {
  var host, location;
  host = req.headers['host'].split(':')[0];
  if (to_port != 443) { host = host + ":" + to_port; }
  location = "https://" + host + req.url;
  res.writeHead(301, { 'Location': location });
  res.end();
  console.log((new Date()).toJSON() + ': Redirecting ' + req.ip + ' from http('+from_port+') to https('+to_port+') on path ' + req.url + '.');
}
server = http.createServer(redirector);

if (hostname = process.env.HOSTNAME) {
  server.listen(from_port, hostname);
}
else {
  server.listen(from_port);
}

console.log('Redirector listening on port '+from_port+'.');


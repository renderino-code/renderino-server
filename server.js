var cluster = require('cluster');
var os = require('os');
var server = require('./lib/server');

if (cluster.isMaster) {
  for (var i = 0; i < os.cpus().length-1; i += 1) {
    cluster.fork();
  }
} else {
  server.start(3000);
}
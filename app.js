var dotenv      = require('dotenv')();
dotenv.load();

var e           = module.exports;
e.ENV           = process.env.NODE_ENV || 'development';

var port        = parseInt(process.env.PORT) || 3000;
var Hapi        = require('hapi');
server          = new Hapi.Server(+port, '0.0.0.0', { cors: true });

var publics = {
  index: {
  }
}

server.route({
  method  : 'GET',
  path    : '/{path*}',
  handler: { 
    directory: { path: './public', listing: false, index: true }
  }
});

server.start(function() {
  console.log('Handshake.js Signup server started at: ' + server.info.uri);
});

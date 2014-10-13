'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server(3000);

server.start(function startServer() {
    console.log('Server is running at port', server.info.uri);
});

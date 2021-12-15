var StaticServer = require('static-server');

var server = new StaticServer({

  rootPath: '.',            // required, the root of the server file tree

  port: 1337,               // required, the port to listen

  name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header

  host: '0.0.0.0',       // optional, defaults to any interface

  cors: '*',                // optional, defaults to undefined

  followSymlink: true,      // optional, defaults to a 404 error

  templates: {

    index: 'foo.html',      // optional, defaults to 'index.html'

    notFound: '404.html'    // optional, defaults to undefined

  }

});

 

server.start(function () {

  console.log('Server listening to', server.port);

});

 

server.on('request', function (req, res) {

  // req.path is the URL resource (file name) from server.rootPath

  // req.elapsedTime returns a string of the request's elapsed time

    res.headers = { 'Document-Policy': 'js-profiling' };

});
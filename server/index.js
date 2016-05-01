var httpServer = require('http-server');
var port = 8080;

httpServer.createServer({
	 root: 'app'
}).listen(port);

console.log('Server is listening at: ' + port);
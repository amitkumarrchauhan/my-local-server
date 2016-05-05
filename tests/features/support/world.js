const Browser = require('zombie');

var domainName = "localhost";
var port = 8080;

Browser.localhost(domainName, port);

var World = function(callback) {
  this.browser = new Browser({
    //waitDuration: 60*1000
  });

  // last line to tell cucumber.js the World is ready.
  if (callback) {
    callback(this);
  }
};

exports.World = World;

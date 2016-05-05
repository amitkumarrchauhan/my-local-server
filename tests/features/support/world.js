var zombie = require('zombie');

var World = function(callback) {
  this.browser = new zombie();

  this.visit = function(url, callback) {
    this.browser.visit(url, callback);
  };

  // last line to tell cucumber.js the World is ready.
  if (callback) {
    callback(this);
  }
};

exports.World = World;

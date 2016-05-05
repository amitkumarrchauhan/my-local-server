var loginTest = function() {
  this.World = require("../support/world.js").World;

  this.Given(/^username "([^"]*)" password "([^"]*)"$/, function (username, password, next) {
    // Write code here that turns the phrase above into concrete actions
    next(null, 'pending');
  });

  this.When(/^user press login button$/, function (next) {
    // Write code here that turns the phrase above into concrete actions
    next(null, 'pending');
  });

  this.Then(/^user should not be able to login$/, function (next) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
};

module.exports = loginTest;

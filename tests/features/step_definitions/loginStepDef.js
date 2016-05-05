var loginTest = function() {
    this.World = require("../support/world.js").World;

    this.Given(/^username "([^"]*)" password "([^"]*)"$/, function(username, password, next) {
        var browser = this.browser;

        browser.visit('/', function() {
            browser.assert.text('title', 'Local Http Server');
            browser.assert.element('.user-name');
            browser.assert.element('.password');

            browser.fill('input.user-name', username).fill('input.password', password);

            next();
        });
    });

    this.When(/^user presses login button$/, function(next) {
        var browser = this.browser;

        browser.pressButton('.login-button', next);
    });

    this.Then(/^user should be landed to home page$/, function(next) {
        var browser = this.browser;

        browser.assert.element('.home-cucumeber-test');

        next();
    });
};

module.exports = loginTest;

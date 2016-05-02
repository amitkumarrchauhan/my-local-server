var World = function(callback) {
	// set up code goes here

	// last line to tell cucumber.js the World is ready.
	if (callback) {
		callback(this);
	}
};

exports.World = World;
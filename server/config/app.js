var config = require('./config'), 
    mongoose = require('mongoose'),   
    express = require('./express');

module.exports.start = function() {
  var app = express.init();
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => {
    	console.log(`Our app is running on port ${ PORT }`);
	});
};
// Test Boostrapper script
var tester = require('../system/bootstrap/test')

tester(async () => {
	var Mocha = require('mocha'),
		// fs = require('fs'),
		path = require('path');

	// Instantiate a Mocha instance.
	var mocha = new Mocha();

	var testDir = __dirname

	// Add each .js file to the mocha instance
	var recursive = require("recursive-readdir");
 
	var files = await recursive(testDir, ['index.js'])
	// `files` is an array of file paths
	// console.log(files);
	files.filter(function(file) {
		// Only keep the .js files
		return file.substr(-3) === '.js';

	}).forEach(function(file) {
		mocha.addFile(
			file
		);
	});

	// Run the tests.
	mocha.run(function(failures) {
		var exitCode = failures ? 1 : 0;  // exit with non-zero status if there were failures
		use('Database').default().dropDatabase().then(() => {
			process.exit(exitCode)
		})
	});
})

module.exports = {
	job: job
};

const Printer = require('node-printer');

function job(filename, opts) {

	opts = {
    n: 1,
    media: 'a4'
};

	// Get available printers list 
	const printers = Printer.list();

	// Create a new Pinter from available devices 
	var printer = new Printer(printers[0]);

	var filePath = 'package.json';
	var jobFromFile = printer.printFile(filePathn, opts);

	// Listen events from job 
	jobFromFile.once('sent', function () {
		jobFromFile.on('completed', function () {
			console.log('Job ' + jobFromFile.identifier + 'has been printed');
			jobFromFile.removeAllListeners();
		});
	});
}
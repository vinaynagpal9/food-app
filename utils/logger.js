const bunyan = require('bunyan');

const logger = bunyan.createLogger({
	name: 'viztor-user-app',
	streams: [
		{
			level: 'debug',
			stream: process.stdout
		},
		{
			type: 'rotating-file',
			level: 'info',
			path: 'log/viztor-user-app-debug.log',
			period: '1d', // daily rotation
			count: 10 // keep 10 back copies
		},
		{
			type: 'rotating-file',
			level: 'error',
			path: 'log/viztor-user-app-error.log',
			period: '1d', // daily rotation
			count: 10 // keep 10 back copies
		}
	]
});

module.exports = logger;

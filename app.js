'use strict';

/*
 * This file exports the app that is used by the server to expose the routes.
 * And make the routes visible.
 */

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandler = require('./utils/errorHandler');

// Express App
const app = express();

// Use default logger for now
app.use(logger('dev'));
app.use(cors());
app.use(
	bodyParser.json({
		limit: '10mb',
		extended: true
	})
);
app.use(
	bodyParser.urlencoded({
		limit: '10mb',
		extended: true
	})
);
app.use(cookieParser());

// This is to check if the service is online or not
app.use('/ping', function(req, res) {
	res.json({
		reply: 'pong'
	});
	res.end();
});

// Mount the Routes
app.use('/food', routes);

app.use('/documentation', express.static('docs'));

app.use(errorHandler);

// Export the express app instance
module.exports = app;

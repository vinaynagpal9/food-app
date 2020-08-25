const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// load up the user model
// var Models = require('../auth-manager/models');

const getToken = function(req) {
	if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
		// Authorization: Bearer g1jipjgi1ifjioj
		// Handle token presented as a Bearer token in the Authorization header
		return req.headers.authorization.split(' ')[1];
	} else if (req.query && req.query.token) {
		// Handle token presented as URI param
		return req.query.token;
	} else if (req.cookies && req.cookies.token) {
		// Handle token presented as a cookie parameter
		return req.cookies.token;
	}
	// If we return null, we couldn't find a token.
	// In this case, the JWT middleware will return a 401 (unauthorized)
	// to the client for this request
	return null;
};

const _auth = {};

_auth.common = function(req, res, next) {
	const token = getToken(req);
	if (!token) {
		res.status(401).json({
			message: 'Unauthorised access'
		});
	} else {
		jwt.verify(token, process.env.SECRET || 'Development', (err, decoded) => {
			if (err) {
				res.status(401).json({
					message: 'Unauthorised access or token expired'
				});
			} else {
				const criteria = {
					userId: decoded.id
				};
				Models.User.findOne(criteria, function(err, user) {
					delete user.password;
					user.token = token;
					req.user = user;
					next();
				});
			}
		});
	}
};

_auth.user = function(req, res, next) {
	if (req.body && req.body.source && req.body.source === process.env.SOURCE && req.body.slackToken === process.env.SLACKTOKEN) {
		req.user = {};
		req.user._id = null;
		console.log(req.body);
		next();
	} else {
		const token = getToken(req);
		if (!token) {
			res.status(401).json({
				message: 'Unauthorised access'
			});
		} else {
			jwt.verify(token, process.env.SECRET || 'Development', (err, decoded) => {
				if (err || (decoded && decoded.role) != 'USER') {
					res.status(401).json({
						message: 'Unauthorised access or token expired'
					});
				} else {
					const criteria = {
						_id: decoded._id
					};
					Models.User.findOne(criteria, function(err, user) {
						if (err || !user) {
							res.status(401).json({
								success: false,
								message: 'Unable to Find User',
								data: {}
							});
						} else {
							delete user.password;
							user.token = token;
							req.user = user;
							next();
						}
					});
				}
			});
		}
	}
};

_auth.verifyEmail = function(req, res, next) {
	const token = getToken(req);
	if (!token) {
		res.status(401).json({
			message: 'Unauthorised access'
		});
	} else {
		jwt.verify(token, process.env.SECRET || 'Development', (err, decoded) => {
			if (err || !(decoded && decoded.emailVerifying)) {
				res.status(401).json({
					message: 'Unauthorised access or token expired'
				});
			} else {
				decoded.token = token;
				req.user = decoded;
				next();
			}
		});
	}
};

module.exports = _auth;

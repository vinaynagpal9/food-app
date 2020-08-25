const validation = require('express-validation');
module.exports = function(error, req, res, next) {
	if (error instanceof validation.ValidationError) {
		return res.status(error.status).json({
			success: false,
			message: error.errors[0].messages[0].replace('"', '').replace('"', ''),
			data: {}
		});
	}
	if (process.env.NODE_ENV !== 'production') {
		return res.status(500).json({
			success: false,
			message: 'Something went wrong',
			error: error.stack,
			data: {}
		});
	} else {
		return res.status(500).json({
			success: false,
			message: 'Something went wrong',
			data: {}
		});
	}
};

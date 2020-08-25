'use strict';

// const Config = require('../config/awsS3Config');

// const AWS = require('aws-sdk');

// const _upload = {};

// _upload.uploadTos3 = async function(data) {
// 	// For dev purposes only
// 	AWS.config.update({
// 		accessKeyId: process.env.ACCESS_KEY_ID,
// 		secretAccessKey: process.env.SECRET_ACCESS_KEY
// 	});
// 	// Read in the file, convert it to base64, store to S3
// 	// let data = fs.readFileSync(file)
// 	var url = `https://s3.amazonaws.com/food-apps/${data.path}/` + data.fileName;
// 	var s3 = new AWS.S3();
// 	const response = await s3
// 		.upload({
// 			Bucket: `food-apps/${data.path}`,
// 			Body: data.body,
// 			Key: data.fileName,
// 			ACL: 'public-read'
// 		})
// 		.promise();
// 	return url;
// };

// module.exports = _upload;


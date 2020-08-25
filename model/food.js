'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var FoodSchema = new Schema(
	{
		foodName: { type: String, trim: true, required: true },
		foodDetails: { type: String, trim: true, required: true },
		foodImage: { type: String, default: '' }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Food', FoodSchema);

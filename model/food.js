'use strict';
var mongoose = require('mongoose');
const { array } = require('@hapi/joi');
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var FoodSchema = new Schema(
	{
		foodName: { type: String, trim: true, required: true },
		foodDetails: { type: String, trim: true, required: true },
		foodImage: { type: Array, default: [] }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Food', FoodSchema);

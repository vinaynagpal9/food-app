'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingredientSchema = new Schema(
	{
		name: { type: String, default: '' },
		foodId: { type: Schema.Types.ObjectId }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('ingredient', ingredientSchema);

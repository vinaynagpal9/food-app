'use strict';

const Joi = require('@hapi/joi');

const addFood = Joi.object({
	foodName: Joi.string().required(),
	foodDetails: Joi.string().required(),
	foodImage: Joi.string().optional()
});

const nothing = Joi.object({});

const addIngridient = Joi.object({
	Id: Joi.string().required(),
	name: Joi.string().required()
});

const deleteFood = Joi.object({
	Id: Joi.string().required()
});
module.exports = {
	addFood,
	nothing,
	addIngridient,
	deleteFood
};

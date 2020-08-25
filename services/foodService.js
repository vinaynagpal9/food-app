'use strict';

const couchbase = require('couchbase');
const N1qlQuery = couchbase.N1qlQuery;
const dbConfig = require('../dbConfig');
const collections = dbConfig.mongoDriver;
const bucket = dbConfig.couchbaseConfig;
const Models = require('../model');

const addFood = async (objToSave) => {
	let data = await new Models.food(objToSave).save();
	return data.toObject();
};

const getFood = async (criteria, projection, options) => {
	let data = await Models.food.find(criteria, projection, options);
	return data;
};

const getOneFood = async (criteria, projection, options) => {
	let data = await Models.food.findOne(criteria, projection, options);
	return data;
};

const addIngridient = async (objToSave) => {
	let data = await new Models.ingridient(objToSave).save();
	return data.toObject();
};

const getIngridient = async (criteria, projection, options) => {
	let data = await Models.ingridient.find(criteria, projection, options);
	return data;
};

const deleteIngridient = async (criteria) => {
	let data = await Models.ingridient.deleteMany(criteria).exec();
	return data;
};

const deleteFood = async (criteria) => {
	let data = await Models.food.deleteOne(criteria).exec();
	return data;
};

module.exports = {
	addFood,
	getFood,
	getOneFood,
	getIngridient,
	addIngridient,
	deleteFood,
	deleteIngridient
};

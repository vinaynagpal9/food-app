'use strict';

const moment = require('moment');
const lib = require('../lib');
const { ObjectID } = require('mongodb');
const { user } = require('../lib/auth');
const _ = require('underscore');
const { resolveConfig } = require('prettier');
const Services = require('../services');

const addFood = async (req, res) => {
	console.log('<<<<<<<<<< add food >>>>>>>>>');
	let resData;
	console.log('Body>>>>>>>>', req.body);
	try {
		// add food
		let food = await Services.foodService.addFood(req.body);
		console.log('food>>>>>>', food);
		if (!food) {
			resData = false;
		} else {
			resData = true;
		}
	} catch (err) {
		console.log('Error while adding food: ', err);
		return res.status(400).json({
			success: false,
			message: err.message,
			data: {}
		});
	}
	res.status(200).json({
		success: true,
		message: 'success',
		data: resData
	});
};

const getFood = async (req, res) => {
	console.log('<<<<<<<<<< getting food >>>>>>>>>');
	let resData;
	let criteria = {};
	let projection = {};
	let options = { lean: true };
	try {
		//get Food
		let foods = await Services.foodService.getFood(criteria, projection, options);
		console.log('foods>>>>>', foods);
		for (let food of foods) {
			//ingridient
			let criteria = {
				foodId: food._id
			};
			food.ingridient = await Services.foodService.getIngridient(criteria, projection, options);
		}
		resData = foods;
	} catch (err) {
		console.log('Error while getting food: ', err);
		return res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
	res.status(200).json({
		status: 'success',
		data: resData
	});
};

const addIngridient = async (req, res) => {
	console.log('<<<<<<<<<< add Ingridient >>>>>>>>>');
	let resData;
	console.log('Body>>>>>>>>', req.body);
	try {
		// add ingridient
		let datatosave = {
			foodId: req.body.Id,
			name: req.body.name
		};
		let ingridient = await Services.foodService.addIngridient(datatosave);
		console.log('food>>>>>>', ingridient);
		if (!ingridient) {
			resData = false;
		} else {
			resData = true;
		}
	} catch (err) {
		console.log('Error while adding ingridient: ', err);
		return res.status(400).json({
			success: false,
			message: err.message,
			data: {}
		});
	}
	res.status(200).json({
		success: true,
		message: 'success',
		data: resData
	});
};

const deleteFood = async (req, res) => {
	console.log('<<<<<<<<<< delete food >>>>>>>>>');
	let resData;
	console.log('Body>>>>>>>>', req.body);
	try {
		// add food
		let criteria = {
			_id: req.body.Id
		};
		let projection = {};
		let options = { lean: true };
		let food = await Services.foodService.getOneFood(criteria, projection, options);
		console.log('food>>>>>>', food);
		let FoodId = food._id;
		// delete ingrident
		criteria = {
			foodId: FoodId
		};
		await Services.foodService.deleteIngridient(criteria);
		// delete food
		criteria = {
			_id: FoodId
		};
		await Services.foodService.deleteFood(criteria);

		if (!food) {
			resData = false;
		} else {
			resData = true;
		}
	} catch (err) {
		console.log('Error while delete food: ', err);
		return res.status(400).json({
			success: false,
			message: err.message,
			data: {}
		});
	}
	res.status(200).json({
		success: true,
		message: 'success',
		data: resData
	});
};

module.exports = {
	addFood,
	getFood,
	addIngridient,
	deleteFood
};

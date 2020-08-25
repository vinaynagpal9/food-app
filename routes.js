'use strict';

const { FoodController } = require('./controllers');
const validation = require('./validation');
const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({ passError: true });

//     food :
router.post('/', validator.body(validation.addFood), FoodController.addFood);
router.get('/', validator.query(validation.nothing), FoodController.getFood);
router.post('/ingridient', validator.body(validation.addIngridient), FoodController.addIngridient);
router.delete('/', validator.body(validation.deleteFood), FoodController.deleteFood);

module.exports = router;

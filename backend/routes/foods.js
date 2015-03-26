var express = require('express');
var router = express.Router();
var Food = require('../models/food.js');

/* GET foods listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/getAll', function(req, res, next) {
	var data = {};
	Food.find(data, function (err, foods) {
		if (err) 
			res.json(err);
		else
			res.json(foods);
	});
});

router.post('/add', function(req, res, next) {
	var data = {};

	Food.create(data, function(err, food){
	    if(err) 
	    	res.json(err);
	    else 
	    	res.json({status: 'success', message:'Successfully Add Food Record!'});
	});

});

router.post('/update', function(req, res, next) {
	var data = {};
	Food.update({ _id: 0 }, data, function (err, numberAffected, raw) {
		if (err) 
			res.json(err);
		else
			res.json({status: 'success', message:'Successfully Add Food Record!'});
	});		
});

router.post('/remove', function(req, res, next) {
	var data = {};
	Food.remove(data, function (err) {
  		if (err) 
			res.json(err);
		else
			res.json({status: 'success', message:'Successfully Add Food Record!'});
	});
});

module.exports = router;
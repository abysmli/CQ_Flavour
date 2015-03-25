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
	var data = {
		number: 'FC1',
		name: 'Test',
		details: 'Test_details',
		price: 50.5,
		suspend_status: false,
		image: '123',
	};

	Food.create(data, function(err, food){
	    if(err) 
	    	res.json(err);
	    else 
	    	res.json({status: 'success', message:'Successfully Add Food Record!'});
	});

});

router.post('/update', function(req, res, next) {
	var data = {
		type: 'data',
		id: '',
		data: {
			number: 'FC2',
			name: 'Test2',
			details: 'Test_details2',
			price: 52.5,
			suspend_status: false,
			image: '1234',
		}
	};
	Food.update({ number: 'FC1' }, data.data, function (err, numberAffected, raw) {
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
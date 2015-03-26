var express = require('express');
var router = express.Router();
var Order = require('../models/order.js');

/* GET orders listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/getAll', function(req, res, next) {
	var data = {};
	Order.find(data, function (err, orders) {
		if (err) 
			res.json(err);
		else
			res.json(orders);
	});
});

router.post('/add', function(req, res, next) {
	var data = {
		name: 'Test',
		pickup_date: 'Today',
		amount: 1,
		pickup_status: false,
		device_info: 'android',
		ip: '',
		phone_number: '',
	};

	Order.create(data, function(err, order) {
	    if(err) 
	    	res.json(err);
	    else 
	    	res.json({status: 'success', message:'Successfully Add Order Record!'});
	});

});

router.post('/update', function(req, res, next) {
	var data = {
		id: req.body.id,
		pickup_status: req.body.pickup_status,
	};
	Order.update({ order_no: data.id }, { pickup_status: data.pickup_status }, function (err, numberAffected, raw) {
		if (err) 
			res.json(err);
		else
			res.json({status: 'success', message:'Successfully Add Order Record!'});
	});		
});

router.post('/remove', function(req, res, next) {
	var query;
	if (req.body['remove_order_no[]'].constructor == Array) {
		query = {$in: req.body['remove_order_no[]']};
	} else {
		query = req.body['remove_order_no[]'];
	}
	Order.remove({order_no: query}, function (err) {
  		if (err) 
			res.json(err);
		else
			res.json({status: 'success', message:'Successfully Add Order Record!'});
	});
});

module.exports = router;
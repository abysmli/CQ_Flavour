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
		id: '',
		data: {
			pickup_status: true,
		}
	};
	Order.update({ order_no: 1 }, data.data, function (err, numberAffected, raw) {
		if (err) 
			res.json(err);
		else
			res.json({status: 'success', message:'Successfully Add Order Record!'});
	});		
});

router.post('/remove', function(req, res, next) {
	var data = {};
	Order.remove(data, function (err) {
  		if (err) 
			res.json(err);
		else
			res.json({status: 'success', message:'Successfully Add Order Record!'});
	});
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/food_details', function(req, res, next) {
    res.render('food_details');
});

router.get('/order_details', function(req, res, next) {
    res.render('order_details');
});

router.get('/my_orders', function(req, res, next) {
    res.render('my_orders');
});

router.get('/about', function(req, res, next) {
    res.render('about');
});

module.exports = router;

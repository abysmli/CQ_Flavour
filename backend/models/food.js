var mongoose = require('mongoose');
var setting = require('../setting.js');

mongoose.connect('mongodb://localhost/'+setting.database);

var FoodSchema = new mongoose.Schema({
	number: String,
	name: String,
	details: String,
	price: Number,
	suspend_status: Boolean,
	image: String,
	updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Food', FoodSchema);
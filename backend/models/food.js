var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cq_flavour');

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
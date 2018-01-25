var mongoose = require('mongoose')
var PizzaSchema = new mongoose.Schema({
	name: String,
	type: String
}, {timestamps:true})

mongoose.model('Pizza', PizzaSchema);
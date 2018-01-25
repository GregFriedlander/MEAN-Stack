var mongoose = require('mongoose');
var Pizza = mongoose.model('Pizza');
module.exports = {
	index: function(req,res){
		console.log("hit index");
		Pizza.find({}).exec(function(err, foundPizzas){
			if(err){
				console.log('something went wrong');
				res.json(err);
			}else{
				console.log("found the pizzas");
				res.json(foundPizzas);
			}
		})
	},
	create: function(req,res){
		console.log("hit create");
		// res.json(true);
		var newPizza = new Pizza(req.body);
		newPizza.save(function(err, savedPizza){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("successfully saved pizza");
				res.json(savedPizza);
			}
		})
	}
}
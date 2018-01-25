
var Pizzas = require('./../controllers/pizzas.js');
module.exports = function(app){
	app.post('/pizzas', Pizzas.create);
	app.get('/pizzas', Pizzas.index);
}
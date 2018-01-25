var dogs = require('../controllers/dogs.js');
module.exports = function(app){
    app.get('/', function(req, res){
        dogs.show(req, res);
    })
    app.get('/dogs/new', function(req, res){
        dogs.new_dog_form(req, res);
    })
    app.get('/dogs/edit/:id', function(req,res){
        dogs.edit_info(req, res);
    })
    app.get('/dogs/:id', function(req,res){
        dogs.show_info(req, res);
    })
    app.post('/dogs', function(req,res){
        dogs.create(req, res);
    })
    app.post('/dogs/destroy/:id', function(req,res){
        dogs.delete(req, res);
    })
    app.post('/dogs/update/:id', function(req,res){
        dogs.update_dog(req, res);
    })
}
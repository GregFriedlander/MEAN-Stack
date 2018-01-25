var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');
module.exports = {
    show: function(req, res){
        Dog.find({}, function(err, allDogs){
            if(err){
                console.log('something went wrong');
                console.log(err);
                res.send(err);
            }else{
                console.log("got all dogs");
                res.render('index', {dogs: allDogs});
            }
        })
    },
    new_dog_form: function(req, res){
        res.render('add_dog_form');
    },
    edit_info: function(req, res){
        Dog.find({_id: req.params.id}, function(err, thisDog){
            if(err){
                console.log('something went wrong');
                console.log(err);
                res.send(err);
            }else{
                console.log("Got the dog");
                res.render('edit_page', {dogs: thisDog});
            }
        })
    },
    show_info: function(req, res){
        Dog.find({_id: req.params.id}, function(err, thisDog){
            if(err){
                console.log('something went wrong');
                console.log(err);
                res.send(err);
            }else{
                console.log("Got the dog");
                res.render('dog_page', {dogs: thisDog});
            }
        })
    },
    create: function(req, res){
        var newDog = new Dog(req.body);
        newDog.save(function(err){
            if(err){
                console.log('something went wrong');
                console.log(err);
                res.send(err);
            }else{
                console.log('successfully saved new Dog');
                res.redirect('/');
            }
        })
    },
    delete: function(req, res){
        Dog.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('something went wrong');
                console.log(err);
                res.send(err);
            }else{
                console.log('successfully deleted Dog');
                res.redirect('/');
            }
        })
    },
    update_dog: function(req, res){
        Dog.update({_id: req.params.id}, {name:req.body.name, color: req.body.color, weight: req.body.weight}, function(err){
            if(err){
                console.log('something went wrong');
                console.log(err);
                res.send(err);
            }else{
                console.log('successfully updated new Dog');
                res.redirect('/');
            }
        })
    }
}
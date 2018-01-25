var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/mongo_dashboard');

var DogSchema = new mongoose.Schema({
    name: String,
    color: String,
    weight: Number, 
}, {timestamps: true})

mongoose.model('Dog', DogSchema);

var Dog = mongoose.model('Dog');

app.get('/', function(req, res){
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
})
app.get('/dogs/new', function(req, res){
    res.render('add_dog_form');
})
app.get('/dogs/edit/:id', function(req,res){
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
})
app.get('/dogs/:id', function(req,res){
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
})
app.post('/dogs', function(req,res){
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
})
app.post('/dogs/destroy/:id', function(req,res){
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
})
app.post('/dogs/update/:id', function(req,res){
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
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})
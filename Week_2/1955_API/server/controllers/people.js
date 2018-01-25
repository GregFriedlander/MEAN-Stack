var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
   show: function(req, res){
       Person.find({}, function(err, allPeople){
           if(err){
               console.log('something went wrong');
               console.log(err);
               res.send(err);
           }else{
               console.log('got all people');
               res.json(allPeople);
           }
       })
   },
   create: function(req, res){
       var newPerson = new Person({name: req.params.name});
       newPerson.save(function(err){
           if(err){
               console.log('something went wrong');
               console.log(err);
               res.send(err);
           }else{
               console.log('added new person');
               res.redirect('/');
           }
       })
   },
   remove: function(req, res){
       Person.remove({name: req.params.name}, function(err){
           if(err){
               console.log('something went wrong');
               console.log(err);
               res.send(err);
           }else{
               console.log('successfully deleted person');
               res.redirect('/');
           }
       })
   },
   info: function(req, res){
       Person.find({name: req.params.name}, function(err, thisPerson){
           if(err){
               console.log('something went wrong');
               console.log(err);
               res.send(err);
           }else{
               console.log('got the person');
               res.json(thisPerson);
           }
       })
   }
}
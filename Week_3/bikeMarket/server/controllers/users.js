var mongoose = require('mongoose');
var User = mongoose.model('User');
var Bike = mongoose.model('Bike');
var bcrypt = require('bcrypt-as-promised');

module.exports = {
    register: function(req,res){
        console.log('hit Users.register');
        console.log('the req.body = ', req.body);
        if(req.body.password != req.body.passwordConfirm){
            res.send('Passwords do not match');
        }else{
            var newUser = new User(req.body);
			newUser.save(function(err){
				if(err){
					console.log("something went wrong");
					console.log(err);
					var errorsArray = [];
					if(err.errmsg != undefined){
						errorsArray = [{message: "Email is already taken"}]
					}else{
						for(var key in err.errors){
							errorsArray.push(err.errors[key]);
						}
					}
					
					res.json(errorsArray);
				}else{
					console.log("successfully saved user");
					req.session.userId = newUser._id;
					res.json(newUser);
				}
			})
        }
    },
    login: function(req,res){
        console.log('hit Users.login');
        console.log('the req.body = ', req.body);
        User.findOne({email:req.body.email}, function(err, foundUser){
			if(foundUser != null){
				console.log("found user in DB");
				// Verify the passwords using bcrypt
				bcrypt.compare(req.body.password, foundUser.password)
				.then(function(data){
					console.log("passwords match");
					req.session.userId = foundUser._id;
					res.json(foundUser);
					// Once logged in, add the user to session and redirect

				})
				.catch(function(error){
					console.log("passwords don't match");
					console.log(error);
					res.json(error);
				})
			}
		})
    },
    current: function(req,res){
        User.findOne({_id: req.session.userId}).exec(function(err, foundUser){
			console.log('foundUser', foundUser);
			res.json(foundUser);
		})
    },
    destroysession: function(req,res){
        console.log('hit Users.destroysession');
        req.session.destroy(function(){
            console.log('destroyed the session info');
            res.json(true);
        })
    },
    addlisting: function(req,res){
        console.log('hit Users.addlisting');
        console.log('the req.body = ', req.body);
        var newListing = new Bike(req.body);
        newListing._user = req.session.userId;
        newListing.save(function(err){
            if(err){
                console.log('the new listing did not save');
            }else{
                console.log('the new listing SAVED: ', newListing);
                res.send(true);
            }
        })
    },
    getyourlistings: function(req,res){
        console.log('hit Users.getyourlistings');
        Bike.find({_user: req.session.userId})
        .exec(function(err, foundUser){
            if(err){
                console.log('There was an error getting your listings');
                res.send(err);
            }else{
                res.json(foundUser);
            }
        })
    },
    getallbikes: function(req,res){
        console.log('hit Users.getallbikes');
        Bike.find({})
        .populate('_user')
        .exec(function(err,foundBikes){
            if(err){
                console.log('something went wrong');
                res.json(err);
            }else{
                console.log('found the bikes');
                res.json(foundBikes);
            }
        })
    }
}
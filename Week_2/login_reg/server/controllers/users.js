var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-as-promised');

module.exports = {
    index: function(req,res){
        console.log('hit Users.index');
        res.render('index');
    },
    register: function(req,res){
        console.log('hit Users.Register');
        console.log('req.body:', req.body);
        if(req.body.password != req.body.confirm_password){
            res.send('Passwords do not match');
        }else{
            var newUser = new User(req.body);
            newUser.save(function(err){
                if(err){
                    console.log('something went wrong');
                    res.send(err);
                }else{
                    console.log('successfully saved user');
                    res.redirect('/homepage');
                }
            })
        }
    },
    login: function(req,res){
        console.log('hit Users.Login');
        console.log('req.body.email: ', req.body.email);
        User.findOne({email: req.body.email}, function(err, thisUser){
            if(thisUser == null){
                console.log('email is not in the system');
                res.redirect('/');
            }else{
                console.log('found email in system');
                console.log('thisUser: ', thisUser);
                console.log('req.body.password: ', req.body.password)
                bcrypt.compare(req.body.password, thisUser.password)
                .then(function(hashed){
                    res.redirect('/homepage');
                })
                .catch(function(error){
                    res.redirect('/');
                })
            }
        })
    },
    homepage: function(req,res){
        res.render('homepage');
    }
}
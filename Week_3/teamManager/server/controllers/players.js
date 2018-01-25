var mongoose = require('mongoose');
var Player = mongoose.model('Player');
module.exports = {
    create: function(req,res){
        console.log('hit create');
        var newPlayer = new Player(req.body);
        newPlayer.save(function(err,savedPlayer){
            if(err){
                console.log('something went wrong');
                res.json(err);
            }else{
                console.log('successfully saved player');
                res.json(savedPlayer);
            }
        })
    },
    retrieve: function(req,res){
        console.log('hit retrieve');
        Player.find({}).exec(function(err,foundPlayers){
            if(err){
                console.log('something went wrong');
                res.json(err);
            }else{
                console.log('found players');
                res.json(foundPlayers);
            }
        })
    },
    delete: function(req,res){
        console.log('hit delete');
        Player.remove({_id: req.params.id}, function(err){
            if(err){
                console.log('something went wrong');
                res.json(err);
            }else{
                console.log('successfully deleted player');
            }
        })
    },
    update: function(req,res){
        console.log('hit update function, did the string pass?', req.params.status);
        console.log('hit update function, did the id pass?', req.params.id);
        if(req.params.game == 'game1Status'){
            Player.update({_id: req.params.id}, {game1Status: req.params.status},function(err){
                if(err){
                    console.log('something went wrong');
                    res.json(err);
                }else{
                    console.log('save successful');
                    res.json(true);
                }
                
            })
        }
        else if(req.params.game == 'game2Status'){
            Player.update({_id: req.params.id}, {game2Status: req.params.status},function(err){
                if(err){
                    console.log('something went wrong');
                    res.json(err);
                }else{
                    console.log('save successful')
                    res.json(true);
                }
                
            })
        }
        else{
            Player.update({_id: req.params.id}, {game3Status: req.params.status},function(err){
                if(err){
                    console.log('something went wrong');
                    res.json(err);
                }else{
                    console.log('save successful');
                    res.json(true);
                }
                
            })
        }
    }
}
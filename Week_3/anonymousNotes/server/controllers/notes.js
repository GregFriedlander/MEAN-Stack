var mongoose = require('mongoose');
var Note = mongoose.model('Note');
module.exports = {
    index: function(req,res){
        console.log('hit index');
        Note.find({}).exec(function(err,foundNotes){
            if(err){
                console.log('something went wrong');
                res.json(err);
            }else{
                console.log('found notes');
                res.json(foundNotes);
            }
        })
    },
    create: function(req,res){
        console.log('hit create');
        var newNote = new Note(req.body);
        newNote.save(function(err, savedNote){
            if(err){
                console.log('something went wrong');
                res.json(err);
            }else{
                console.log('successfully save note');
                res.json(savedNote);
            }
        })
        
    }
}
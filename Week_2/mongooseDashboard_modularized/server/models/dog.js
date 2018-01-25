var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
    name: String,
    color: String,
    weight: Number, 
}, {timestamps: true})

var Dog = mongoose.model('Dog', DogSchema);
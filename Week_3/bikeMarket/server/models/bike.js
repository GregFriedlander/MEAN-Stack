var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BikeSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    location: String,
    image: String,
    _user: {type: Schema.Types.ObjectId, ref:'User'},
}, {timestamps: true})

mongoose.model('Bike', BikeSchema);
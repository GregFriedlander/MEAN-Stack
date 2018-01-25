var mongoose = require('mongoose');
var PlayerSchema = new mongoose.Schema({
    name: String,
    position: String,
    game1Status: {type: String, default: 'undecided'},
    game2Status: {type: String, default: 'undecided'},
    game3Status: {type: String, default: 'undecided'},
}, {timestamps: true})

mongoose.model('Player', PlayerSchema);
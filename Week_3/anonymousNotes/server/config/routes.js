var Notes = require('./../controllers/notes.js');

module.exports = function(app){
    app.post('/notes', Notes.create);
    app.get('/notes', Notes.index);
}
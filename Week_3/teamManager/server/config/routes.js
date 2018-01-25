var Players = require('./../controllers/players.js');
var path = require('path');

module.exports = function(app){
    app.post('/createplayer', Players.create);
    app.post('/updateplayer/:id/:status/:game', Players.update);
    app.get('/getplayers', Players.retrieve);
    app.post('/deleteplayer/:id', Players.delete);
    app.all("*", (req, res) => { res.sendFile(path.resolve("./public/dist/index.html")) });
}
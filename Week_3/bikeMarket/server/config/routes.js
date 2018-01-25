var path = require('path');
var Users = require('./../controllers/users.js');
var Bikes = require('./../controllers/bikes.js');

module.exports = function(app){
    app.post('/adduser', Users.register);
    app.post('/login', Users.login);
    app.get('/current', Users.current);
    app.get('/destroysession', Users.destroysession);
    app.get('/getyourlistings', Users.getyourlistings);
    app.post('/addlisting/', Users.addlisting);
    app.get('/getall', Users.getallbikes);
    app.all("*", (req, res) => { res.sendFile(path.resolve("./public/dist/index.html")) });
}
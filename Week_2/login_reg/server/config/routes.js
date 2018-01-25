var Users = require('./../controllers/users.js');

module.exports = function(app){
    app.get('/', Users.index);
    app.post('/register', Users.register);
    app.post('/login', Users.login);
    app.get('/homepage', Users.homepage);
}
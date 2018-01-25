
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");;
var session = require("express-session");

app.use(bodyParser.urlencoded());
app.use(session({secret: 'codingdojorocks'})); 

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var count = 0; 

app.get('/', function(req, res){
    count = 1;
    req.session.count = count; 
    res.render('index', {counter: req.session.count});
})

var server = app.listen(8000, function() {
    console.log('listening on port 8000');
})
var io = require('socket.io').listen(server);



io.sockets.on('connection', function(socket){
    socket.on('pushed_button', function(data){
        count += data.count;
        console.log("data.session.count", count);
        io.emit('update_number', count);
    })
    socket.on('pushed_reset', function(data){
        count = data.count;
        console.log("reset number: ", count);
        io.emit('reset_number', count);
    })
})
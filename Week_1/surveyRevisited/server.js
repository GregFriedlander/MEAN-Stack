var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");;

var randomNum = Math.floor(Math.random() * 1000) + 1;

app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
})

var server = app.listen(8000, function() {
    console.log('listening on port 8000');
})
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    socket.on('posting_form', function(data){
        console.log("Trying to update the message");
        io.emit('updated_message', data);
        io.emit('lucky_number', randomNum);
    })
})
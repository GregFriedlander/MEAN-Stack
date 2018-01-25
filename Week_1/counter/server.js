var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");

app.use(bodyParser.urlencoded());
app.use(session({secret: 'codingdojorocks'})); 

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var count = 0; 

app.get("/", function(request, response){
    count++;
    request.session.count = count;
    response.render('counterHome', {counter: request.session.count});
})

app.post('/plus', function (req, res){
    count++;
    res.redirect('/');
})

app.post('/reset', function (req, res){
    count = 0;
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
  })
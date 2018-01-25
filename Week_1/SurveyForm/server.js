var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");

app.use(bodyParser.urlencoded());
app.use(session({secret: 'codingdojorocks'})); 

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('survey_form');
})

app.post('/information', function(req, res){

    res.render('survey_results', {info: req.body});
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})
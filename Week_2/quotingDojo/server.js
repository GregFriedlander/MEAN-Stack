var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteDojoSchema = new mongoose.Schema({
    name: String,
    quote: String,   
}, {timestamps: true})

mongoose.model('Quote', QuoteDojoSchema);

var Quote = mongoose.model('Quote');

app.get('/', function(req, res){
    res.render('index');
})

app.get('/quotes', function(req, res){
    Quote.find({}, function(err, allQuotes){
        if(err){
            console.log("something went wrong");
			console.log(err);
			res.send(err);
        }else {
            console.log("got all quotes");
            res.render('quote_page', {quotes: allQuotes});
        }
    })
})

app.post('/quotes', function(req,res){
    var newQuote = new Quote(req.body);
    newQuote.save(function(err){
        if(err){
            console.log("something went wrong");
			console.log(err);
			res.send(err);
        }else{
            console.log("successfully saved new Quote");
            res.redirect('/quotes');
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})
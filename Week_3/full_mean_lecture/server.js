// require modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

// configure express

// NEW FOR FULL MEAN VVVVVVVVVV
app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
	console.log("on port 8000");
})
var express = require('express');
var config = require('./server/config');
var mongoose = require('mongoose');
var app = express();
app = config.initialize(app);
app.listen(3000);
mongoose.connect('mongodb://localhost:27017');
mongoose.connection.on('open', function(){
	console.log('Mongoose connected');
})
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Questions = new Schema({
	name : {type : String},
	answers : [{type : String}],
	correct : {type: String}
});
module.exports = Questions;
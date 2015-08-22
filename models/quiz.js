var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Questions = require('./questions');

var QuizSchema = new Schema({
	quizId : {type: String},
	quizName : {type: String},
	questions : [Questions]
});

module.exports = mongoose.model('Quiz',QuizSchema);
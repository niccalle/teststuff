var Quiz = require('../models/quiz');

module.exports = {
	initialize: function(quizModel, callback){
			// quizModel.questions = [
			// {
			// 'name' : "Question 1",
			// 'answers' : ["Answer 1", "Answer2", "Answer3"],
			// 'correct' : 2
			// },
			// {
			// 'name' : "Question 2",
			// 'answers' : ["Answer 1", "Answer2", "Answer3"],
			// 'correct' : 1		
			// },{
			// 'name' : "Question 3",
			// 'answers' : ["Answer 1", "Answer2", "Answer3"],
			// 'correct' : 3
			// }
			// ];
			// var newQuiz = new Quiz(quizModel);
			// newQuiz.save();
			callback(quizModel);
			}
}
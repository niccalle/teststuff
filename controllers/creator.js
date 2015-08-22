var Quiz = require('../models/quiz');
module.exports = {
	index: function(req,res){
		res.render('create');
	},

	createQuiz: function(req,res){
		console.log(req.body);
		var reqQuestions = JSON.parse(req.body.questions);
		console.log(reqQuestions);
		var quizModel = {
			quizId : "",
			quizName : req.body.quizName,
			questions : reqQuestions
		}
		var saveQuiz = function(model){
			var everyChar = "abcdefghijklmnopqrstuvwkyz";
			var quizId = "";
			for(var i = 0; i < 4; i++){
				quizId += everyChar.charAt(Math.random()*26);
			}
			Quiz.findOne({'quizId' : quizId}, function(err,qz){
				if(qz){
					saveQuiz(model);
				} else{
					model.quizId = quizId;
					var newModel = new Quiz(model);
					newModel.save(function(err, image){
						console.log("saved model " + quizId);
						res.send(quizId);

					});
					
				}
			})

		}
		saveQuiz(quizModel);
	}
}
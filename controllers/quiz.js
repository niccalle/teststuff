var questions = require('../helpers/questions');
var Quiz = require('../models/quiz');
module.exports = {

	index: function(req,res){
		function quizModel(id, name){
		this.quizId = id;
		this.quizName = name;
		}
		var quizzes = [];
		var callback = function(err,qzs){
			if (err){throw err};
			if (qzs){
				qzs.forEach(function(element, index, array){
					var qzm = new quizModel(element.quizId,element.quizName);
					quizzes.push(qzm);					
				})
				console.log(quizzes);

			}
			var model = {
				quizzes : quizzes
			};
			res.render('index',model);
		}
		Quiz.find({},"quizId quizName").limit(5).exec(callback)
	},
	getQuiz: function(req,res){
		var str = "<b> Quiz #: </b>" + req.params.id;
		quizModel = {
			'quizId' : "",
			'quizName' : ""
		};
		Quiz.findOne({'quizId' : req.params.id}, function(err,qz){
			if(err){throw err};
			if(qz){
				console.log("Found quiz!");
				quizModel.quizId = qz.quizId;
				quizModel.quizName = qz.quizName;
				quizModel.questions = qz.questions;
				questions.initialize(quizModel,function(model){
					res.render('quiz',model);
				})
			}
		});
		// questions.initialize(quizModel,function(model){
		// 	res.render('quiz',model);
		// })
	},
	sendQuiz: function(req,res){
		console.log("recieved a post request!");
		var answers = JSON.parse(req.body.formAnswers);
		console.log(answers);
		Quiz.findOne({'quizId' : req.body.quizId}, function(err,qz){
			if(err) {throw err};
			if(qz){
				console.log("found one");
				var counter = 0;
				console.log(qz.questions);
				var howMany = 0;
				console.log(qz.questions.length);
				for (var i = 0; i < qz.questions.length; i+=1){
					if(qz.questions[i].name == answers[counter].question){
						if(qz.questions[i].correct == qz.questions[i].answers[answers[counter].ans]){
							howMany+=1;
						}
					}
				counter+=1;
				}
				res.send(JSON.stringify(howMany));
			}
		})
}
}
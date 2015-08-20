var questions = require('../helpers/questions');
module.exports = {
	index: function(req,res){
		res.render('index');
	},
	getQuiz: function(req,res){
		var str = "<b> Quiz #: </b>" + req.params.id;
		quizModel = {
			'quizId' : req.params.id,
			'quizName' : "Temporary Quiz" 
		};
		questions(quizModel,function(model){
			res.render('quiz',model);
		})
	},
	sendQuiz: function(req,res){
		res.redirect('/');
	}
}
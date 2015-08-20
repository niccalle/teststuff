var creator = require('../controllers/creator');
var quiz = require('../controllers/quiz');
module.exports = function(app){
	app.get('/', quiz.index);

	app.get('/quiz/:id', quiz.getQuiz);

	app.get('/create',creator.index);

	app.post('/create', creator.createQuiz);

	app.post('/quiz', quiz.sendQuiz);
}

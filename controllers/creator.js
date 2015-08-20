module.exports = {
	index: function(req,res){
		res.send('Creation page!');
	},

	createQuiz: function(req,res){
		res.send('Created quiz');
	}
}
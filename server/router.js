module.exports = function(app){
	app.get('/', function(req,res){
		res.render('index');
	});

	app.get('/quiz/:id', function(req,res){
		var str = "<b> Quiz #: </b>" + req.params.id;
		res.send(str);
	});

	app.get('/create',function(req,res){
		res.send('Creation Page!');
	});

	app.post('/create', function(req,res){
		res.redirect('/');
	});

	app.post('/quiz',function(req,res){
		res.redirect('/');
	});
}

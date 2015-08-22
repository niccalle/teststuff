$(document).ready(function(){
	$('#submitBtn').click(function(event){
		event.preventDefault();
		var answers = [];
		$("input[type='radio']:checked").each(function(){
			
			var answer = {
				question : $(this).attr("name"),
				ans : parseInt($(this).val())
			};
			answers.push(answer);
	
		});
		var patharray = window.location.pathname.split('/');
		var data = {
			"quizId" : patharray[2],
			"formAnswers" : JSON.stringify(answers)
		};
		$.post('/quiz',data, function(data){
			console.log(data);
		})
	})
})
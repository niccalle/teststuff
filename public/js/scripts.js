$(function(){
	$('#submitBtn').click(function(event){
		event.preventDefault();
		var answers = [];
		$("input[type='radio']:checked").each(){
			var answer = {
				question : $(this).name,
				ans : $(this).val()
			};
			answers.push(answer);
		};
		var data = {
			formAnswers : answers
		};
		$.post('/quiz',data, function(data){
			console.log(data);
		})
	})
})
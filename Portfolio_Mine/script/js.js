$('document').ready(function()
	{
		$("#submit_button").click(function(){
			var $name=$("#name").val();
			var $email=$("#email").val();
			var $url=$("#url").val();
			var $message=$("#message_area").val();

			var dataString="name1"+$name+"&email1"+$email+"&url1"+$url+"&message1"+$message;
			$.ajax({
				type:'POST',
				url:'../../../../../wamp/www/portfoli/ajaxSubmit.php',
				data:dataString,
				cache:false,
				success:function(data){

				},
				error:function(error){

				}

			});
		});
	});
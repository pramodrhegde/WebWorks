$(document).ready(function()
	{

		//alert("rady");

		$('ul a').on('click',function()
		{
			//alert('clicked');
			var toLoad=$(this).attr('href')+" #content";
			alert(toLoad);
			//hide current page content
			$("#content").hide();
			//call load method to load specified page
			$("#content").load(toLoad,'',LoadNewContent)
			//after load show to content of loaded page;

			//alert(toLoad);
			return false;
		});

		function LoadNewContent()
		{
            $("#content").show();
		}
	});
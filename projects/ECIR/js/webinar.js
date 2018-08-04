if ($(window).innerWidth()>=1025){ 
	$(".webinar-welcome__video > video").each(function(){ 
		$(this).attr("src", $(this).attr("src-desktop")); 
	});
}
if ($(window).innerWidth()>=1025){ 
	$(".welcome__video > video").each(function(){ 
		$(this).attr("src", $(this).attr("src-desktop")); 
	});
}
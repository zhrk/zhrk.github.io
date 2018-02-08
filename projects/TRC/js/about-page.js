function aboutPageMobile() {
	if (window.innerWidth < 767) {
		$('.about-page__welcome-items').slick({
		  infinite: true,
		  autoplay: true,
  		autoplaySpeed: 2000,
		  arrows: false,
		  dots: false,
		  touchMove: false
		});

		$('.about-page__slides').slick({
			infinite: false,
			arrows: false,
		  dots: true,
		  touchMove: true
		});

		lightGallery(document.querySelector('#lightgallery>div>div'));

	} else {
		lightGallery(document.getElementById('lightgallery'));
	}
}

aboutPageMobile();

if ($(window).innerWidth()>=767){ 
  $("#video").each(function(){ 
    $(this).attr("src", $(this).attr("src-desktop"));
    document.getElementById('video').setAttribute('poster-desktop', 'img/about-poster-d.png');
  });
}

if ($(window).innerWidth()<=767){ 
  $("#video").each(function(){ 
    $(this).attr("poster", $(this).attr("poster-desktop"));
  });
} else {
	$("#video").each(function(){ 
    $(this).attr("poster", $(this).attr("poster-desktop"));
  });
}
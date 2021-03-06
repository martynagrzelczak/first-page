$(document).ready(function(){
	$('nav a').click(function(event){
		var id = $(this).attr('href'),
			offset = 66,
			target = $(id).offset().top - offset;
			$('html body').animate({
				scrollTop: target
			}, 1000);
			event.preventDefault();
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#returnToTop').fadeIn(200);
			$('#nav').addClass('navScroll');
		} else {
			$('#returnToTop').fadeOut(200);
			$('#nav').removeClass('navScroll');
		}
	});

	$('#mobile-toggle').on('click', function(){
		$(this).toggleClass('mobile-toggle--open');
	});

	$('.mobile-toggle').click(function(){
		if ($('#nav').hasClass('nav--open')) {
			$('#nav').removeClass('nav--open');
		} else {
			$('#nav').addClass('nav--open');
		}
	});

	$('.nav li a').click(function(){
		if ($('#nav').hasClass('nav--open')) {
			$('#nav').removeClass('nav--open')
			$('#mobile-toggle').removeClass('mobile-toggle--open');
		} 
	});

	$('#returnToTop').click(function(){
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

});
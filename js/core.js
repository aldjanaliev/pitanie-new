$(document).ready(function() {

	$('.scroll-btn').on('click', function(e) {
		e.preventDefault()
		$('body').removeClass('active')
  	$('.mob').removeClass('active')
    	let href = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(href).offset().top
	    });
	    return false;
	});

	$('.slider').slick({
  	dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
    {
      breakpoint: 781,
      settings: {
    		slidesToShow: 1,
      }
    }]
  });

  $('.mob_close').on('click', function(){
  	$('body').removeClass('active')
  	$('.mob').removeClass('active')
  })
  $('.burger').on('click', function(){
  	$('body').addClass('active')
  	$('.mob').addClass('active')
  })

  // number validation 
	let selector = document.querySelectorAll('input[type="tel"]');
	let im = new Inputmask('+7 (999) 999-99-99');
	im.mask(selector);

  $('.quiz').on('click','.getplan__item',function(){
    $('.section-show').css('display','none')
  })
})
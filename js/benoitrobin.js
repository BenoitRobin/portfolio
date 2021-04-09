$(function(){
	var words = [
	'un Web Designer',
	'un optimiste',
	'un monteur',
	'disponible maintenant',
	'un gars agréable',
	'un motion designer',
	'un bosseur',
	'un intégrateur',
	'créatif',
	'un développeur en devenir'

	],
	i = 0;
	// Affichage menu responsive pour les écrans inférieur ou égaux à medium(<992px)
	$(".navbar-responsive").toggle();

	$(".menu").click(function(){
		$(".navbar-responsive").toggle("slow");
	});

	// affichage aléatoire des phrases du header
	setInterval(function() {
		$("#word").fadeOut(function() {
			$(this).html(words[i = (i +1) % words.length]).fadeIn();
		});
	}, 2500);

	// scroll vers les ancres du site

	$('.scroll').click(function(){
		var section = $("." + this.id);
		$("html,body").animate({scrollTop: section.offset().top}, "slow");
	});

		// Progress Bar skills

	window.sr = ScrollReveal();
	sr.reveal('.progress-bar', {
		origin:'left',
		duration: 3000,
		distance: '100%'

	})

	// Scroll to top smoothly

	ScrollToTop=function() {
	  var s = $(window).scrollTop();
	  if (s > 250) {
	    $('.scrollup').fadeIn();
	  } else {
	    $('.scrollup').fadeOut();
	  }
	 
	  $('.scrollup').click(function () {
	      $("html, body").animate({ scrollTop: 0 }, 500);
	      return false;
	  });
	}
	 
	StopAnimation=function() {
	  $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
	    $('html, body').stop();
	  });
	}
	 
	 
	$(window).scroll(function() {
	  ScrollToTop();
	  StopAnimation();
	});

	// Circle Progress

	$('#circle').circleProgress({
    value: 1,
		size: 150,
		thickness: 30,
		lineCap: "round",
		emptyFill: "#ccc",
		fill: "#e28139",
		animation: { duration: 3000, easing: "circleProgressEasing" } 
		

})
	
	$('#circle1').circleProgress({
    value: 0.80,
		size: 150,
		thickness: 30,
		lineCap: "round",
		emptyFill: "#ccc",
    fill: "#e28139", 
		
	});



	$('#circle2').circleProgress({
    value: .99,
		size: 150,
		thickness: 30,
		lineCap: "round",
		emptyFill: "#ccc",
    fill: "#e28139", 
		
  });


});


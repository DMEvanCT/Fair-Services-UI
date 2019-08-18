// SMOOTH SCROLL
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
  });
});

// SCROLL POSITION
$(window).scroll(function(){
	if($(window).scrollTop()>120){
		$('#header').addClass('scroll');
	}
	if($(window).scrollTop()<120){
		$('#header').removeClass('scroll');
	}
	if($(window).scrollTop()>800){
		$('body').addClass('scroll2');
	}
	if($(window).scrollTop()<800){
		$('body').removeClass('scroll2');
	}
})

$( document ).ready(function() {

	// TOGGLE CLASS
	$(".slideMenu").click(function(){
	  $("body").toggleClass("slide");
	});
	$(".faqs h2").click(function(){
	  $(this).toggleClass("on");
	});
    $("#header>nav li>span").click(function () {
        if ($(this).parent().hasClass("on")) {
            $(this).prev().css("display", "block").slideUp("400");
        } else {
            $(this).prev().slideDown("400");
        }
        $(this).parent().toggleClass("on");
    });     

	// SIMPLE LIGHTBOX
	$(document).ready(function() {
		$(function(){
			var $gallery = $('.gallery a').simpleLightbox();
		
			$gallery.on('show.simplelightbox', function(){
				console.log('Requested for showing');
			})
			.on('shown.simplelightbox', function(){
				console.log('Shown');
			})
			.on('close.simplelightbox', function(){
				console.log('Requested for closing');
			})
			.on('closed.simplelightbox', function(){
				console.log('Closed');
			})
			.on('change.simplelightbox', function(){
				console.log('Requested for change');
			})
			.on('next.simplelightbox', function(){
				console.log('Requested for next');
			})
			.on('prev.simplelightbox', function(){
				console.log('Requested for prev');
			})
			.on('nextImageLoaded.simplelightbox', function(){
				console.log('Next image loaded');
			})
			.on('prevImageLoaded.simplelightbox', function(){
				console.log('Prev image loaded');
			})
			.on('changed.simplelightbox', function(){
				console.log('Image changed');
			})
			.on('nextDone.simplelightbox', function(){
				console.log('Image changed to next');
			})
			.on('prevDone.simplelightbox', function(){
				console.log('Image changed to prev');
			})
			.on('error.simplelightbox', function(e){
				console.log('No image found, go to the next/prev');
				console.log(e);
			});
		});
	}); 


});



// IOS SLIDER
/*
$(document).ready(function() {
	
	$('.iosSlider').iosSlider({
		snapToChildren: true,
		desktopClickDrag: true,
		keyboardControls: true,
		autoSlide: true,
		autoSlideTimer: 8000,
		autoSlideToggleSelector: null,
		autoSlideHoverPause: true,
		infiniteSlider: true,
		navNextSelector: $('.next'),
		navPrevSelector: $('.prev'),
		onSlideChange: slideChange
	});
	
}); 

function slideChange(args) {
	
	$('.selectors .item').removeClass('selected');
	$('.selectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
	
}
*/



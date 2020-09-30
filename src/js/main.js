//= jquery.min.js
'use strict';


//код для оформления видео
$(document).on('click','.js-videoPoster',function(e) {
    e.preventDefault();
    var poster = $(this);
    var wrapper = poster.closest('.js-videoWrapper');
    videoPlay(wrapper);
  });
  
  function videoPlay(wrapper) {
    var iframe = wrapper.find('.js-videoIframe');
    var src = iframe.data('src');
    wrapper.addClass('video__wrapper_active');
    iframe.attr('src',src);
  }



//открытие-закрытие модального окна
$('.equipment-cards__item').click(function(){
        $('.equipment-popup').addClass('equipment-popup__active');
});

$('.close').click(function(){
  $('.equipment-popup').removeClass('equipment-popup__active');
});

jQuery(function($){
	$('.equipment-popup').mouseup(function (e){ 
		var popup = $("#equipment-popup"); 
		if (!popup.is(e.target) 
		    && popup.has(e.target).length === 0) { 
        $('.equipment-popup').removeClass('equipment-popup__active');
		}
	});
});
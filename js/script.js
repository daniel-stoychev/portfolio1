//alert("Hello! I am an alert box!!");
// When the user scrolls down 20px from the top of the document, show the button
//Scroller
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '900');
});

//Carousel
$(document).ready(function() {
    $('.custom-select').select2({
    	width: '200px'
    });

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
});

$('.carousel').carousel({
  interval: 9000
})

//MODAL
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

//SHOWvideo 
$("#demobutton").click(function(){
	$(".video_middle").slideToggle();
});

//SHOWmenuACTIVITIES

$("#menubutton").click(function(){
	$(".menu").fadeIn(200);
		
});

$('#closeX').click(function(){
  $('.menu').fadeOut(200);
});

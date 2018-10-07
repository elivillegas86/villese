//navbar

$(window).scroll(function () {
  /* affix after scrolling 100px */
  if ($(document).scrollTop() > 100) {
    $('.navbar').addClass('affix');
  } else {
    $('.navbar').removeClass('affix');
  }
});

//clientes

$('#blogCarousel').carousel({
  interval: 5000
});
  $('.scroll').fadeOut()

$(window).scroll(function() {
  if ($(this).scrollTop()>160) {
      $('.scroll').fadeIn();
  } else {
      $('.scroll').fadeOut();
  }
});

$(".scroll").click(function() {
  $("html, body").animate({scrollTop: 0}, 500);
});
  
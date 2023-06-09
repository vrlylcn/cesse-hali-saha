$(function() {

  /// Header Announcements Marquee
  $(".js-header-announcements").marquee({
    speed: 100,
    pauseOnHover: true
  });

  /// Home Slider
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayHoverPause: true
  });

});
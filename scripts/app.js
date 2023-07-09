$(function() {

  /// Header Announcements Marquee
  $(".js-header-announcements").marquee({
    speed: 100,
    pauseOnHover: true
  });

  /// Home Slider
  $(".js-home-slider").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayHoverPause: true
  });

  /// Future Matches
  $(".js-feature-matches").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    navText: ["", ""]
  });

});
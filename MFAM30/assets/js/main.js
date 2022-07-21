!(function($) {
  "use strict";

  $("[title]").tooltip({
    delay: { "show": 500, "hide": 10 },
    offset: '0 10',
    boundary: 'window',
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });

  $(".recentblogs-carousel").owlCarousel({
      items: 3,
      dots: true,
      autoplay: true,
      margin: 0,
      loop: true,
      smartSpeed: 1200,
      responsive: {
          320: {
              items: 1,
          },
          768: {
              items: 2,
          },
          992: {
              items: 3,
          }
      }
  });

  /*------------------
      Background Set
  --------------------*/
  $('.set-bg').each(function () {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
  });

  $(".canvas-open").on('click', function () {
      $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
      $(".offcanvas-menu-overlay").addClass("active");
  });


  $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
      $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
      $(".offcanvas-menu-overlay").removeClass("active");
  });

})(jQuery);
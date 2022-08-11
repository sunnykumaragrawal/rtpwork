!(function($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.overlay-content a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.overlay-content').length) {
          $('#myNav').removeClass('menu_width');
          $('.custom-btn').removeClass('custom-cross-btn');
        }
        return false;
      }
    }
  });

  $("[title]").tooltip({
    delay: { "show": 500, "hide": 10 },
    offset: '0 10',
    boundary: 'window',
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 3000
  });

      if ( $('.hero-carousel').length > 0 ) {
        $('.hero-carousel').owlCarousel({
          items: 1,
          loop: true,
          stagePadding: 0,
          margin: 0,
          autoplay: true,
          animateOut: 'slideOutDown',
          animateIn: 'fadeIn',
          pauseOnHover: false,
          nav: true,
          navText: ['<span class="icon-arrow_back"><i class="icofont-arrow-up"></i></span>', '<span class="icon-arrow_forward"><i class="icofont-arrow-down"></i></span>']
        });
      }

  $(".recentblogs-carousel").owlCarousel({
      items: 3,
      dots: false,
      autoplay: true,
      margin: 20,
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

  // Social Media carousel (uses the Owl Carousel library)
  $(".socialmedia-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    margin:20,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 5
      },
      900: {
        items: 6
      }
    }
  });

  // Medical Media carousel (uses the Owl Carousel library)
  $(".medicalmedia-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    margin:30,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Testimonial carousel (uses the Owl Carousel library)
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    smartSpeed: 1200,
    margin:20,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // AOS animation
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').addClass('showbacktop');
    } else {
      $('.back-to-top').removeClass('showbacktop');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
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
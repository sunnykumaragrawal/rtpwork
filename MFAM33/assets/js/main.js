!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(3000).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Toggle nav menu
  $(document).on('click', '.nav-toggle', function(e) {
    $('body').toggleClass('body-active');
    $('.nav-menu').toggleClass('nav-menu-active');
    $('.nav-toggle').toggleClass('nav-toggle-active');
   // $('.nav-toggle i').toggleClass('bx-x bx-menu');

  });

  // Toogle nav menu drop-down items
  $(document).on('click', '.nav-menu .drop-down > a', function(e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
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

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .active').removeClass('active');
          $(this).closest('li').addClass('active');
          $('body').toggleClass('body-active');
          $('.nav-menu').toggleClass('nav-menu-active');
          $('.nav-toggle').removeClass('nav-toggle-active');
          // $('.nav-toggle i').toggleClass('bx-x bx-menu');
        }
        return false;
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

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    nav: false,
    loop: true,
    margin:25,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        center: true,
        items: 3
      }
    }
  });

})(jQuery);
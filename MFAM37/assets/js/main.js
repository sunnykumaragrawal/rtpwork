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

  // AOS animation
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  // Toggle nav menu
  $(document).on('click', '.nav-toggle', function(e) {
    $('body').toggleClass('body-active');
    $('#header').toggleClass('header-active');
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
          // $('.nav-menu').removeClass('nav-menu-active');
          // $('.nav-toggle').removeClass('nav-toggle-active');
          // $('.nav-toggle i').toggleClass('bx-x bx-menu');
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Hero carousel (uses the Owl Carousel library)
  $(".hero-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    animateOut: 'zoomIn',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 1
      }
    }
  });

  $(function(){
      $(".serviceone-typed").typed({
          strings: ["Gynecologist"],
          loop: true,
          typeSpeed: 100,
          backSpeed: 40,
          backDelay: 2000
      });
  });

  $(function(){
      $(".servicetwo-typed").typed({
          strings: ["Physician"],
          loop: true,
          typeSpeed: 100,
          backSpeed: 40,
          backDelay: 2000
      });
  });

  $(function(){
      $(".servicethree-typed").typed({
          strings: ["Child Specialist"],
          loop: true,
          typeSpeed: 100,
          backSpeed: 40,
          backDelay: 2000
      });
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 3000
  });

  // Social Media carousel (uses the Owl Carousel library)
  $(".socialmedia-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    margin:30,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 4
      },
      900: {
        items: 5
      }
    }
  });

  $("[title]").tooltip({
    delay: { "show": 500, "hide": 10 },
    offset: '0 10',
    boundary: 'window',
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });

  // Insurance carousel (uses the Owl Carousel library)
  $(".insurance-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    margin:10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 2
      }
    }
  });

  // Medical Media carousel (uses the Owl Carousel library)
  $(".medicalmedia-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    margin:30,
    smartSpeed: 1200,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 4
      },
      900: {
        items: 5
      }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $('.testimonial-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    smartSpeed: 1000,
    responsiveClass: true,
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

})(jQuery);
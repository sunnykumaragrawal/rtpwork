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

  // AOS animation
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
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
    $('.nav-menu').toggleClass('nav-menu-active');
    $('.nav-toggle').toggleClass('nav-toggle-active');
    $('.nav-toggle i').toggleClass('bx-x bx-menu');

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
          $('.nav-menu').removeClass('nav-menu-active');
          $('.nav-toggle').removeClass('nav-toggle-active');
          $('.nav-toggle i').toggleClass('bx-x bx-menu');
        }
        return false;
      }
    }
  });

  // Hero carousel (uses the Owl Carousel library)
  $(".hero-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    margin:20,
    animateOut: 'slideOutUp',
    animateIn: 'fadeIn',
    nav: false,
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

  // Hero Img carousel (uses the Owl Carousel library)
  $(".heroimg-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    margin:20,
    animateOut: 'slideOutDown',
    animateIn: 'fadeIn',
    nav: false,
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

  // Blog carousel (uses the Owl Carousel library)
  $(".recentblogs-carousel").owlCarousel({
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

})(jQuery);
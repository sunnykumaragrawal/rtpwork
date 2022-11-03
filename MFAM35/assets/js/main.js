!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader_1').length) {
      $('#preloader_1').delay(3000).fadeOut('slow', function() {
        $('#preloader_1').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});
        $('.preloader-left').addClass('loaded-left');
        $('.preloader-right').addClass('loaded-right');
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

  if ($.fn.owlCarousel) {
      var welcomeSlider = $('.hero-carousel');
      welcomeSlider.owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          smartSpeed: 1200,
          animateIn: 'slideOutRight',
          animateOut: 'fadeIn',
          nav: true,
      })

      welcomeSlider.on('translate.owl.carousel', function () {
          var layer = $("[data-animation]");
          layer.each(function () {
              var anim_name = $(this).data('animation');
              $(this).removeClass('animated ' + anim_name).css('opacity', '0');
          });
      });

      $("[data-delay]").each(function () {
          var anim_del = $(this).data('delay');
          $(this).css('animation-delay', anim_del);
      });

      $("[data-duration]").each(function () {
          var anim_dur = $(this).data('duration');
          $(this).css('animation-duration', anim_dur);
      });

      welcomeSlider.on('translated.owl.carousel', function () {
          var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
          layer.each(function () {
              var anim_name = $(this).data('animation');
              $(this).addClass('animated ' + anim_name).css('opacity', '1');
          });
      });

      function welcomeSlide() {
          $('.owl-item').removeClass('prev next');
          var currentSlide = $('.hero-carousel .owl-item.active');
          currentSlide.next('.owl-item').addClass('next');
          currentSlide.prev('.owl-item').addClass('prev');
          var nextSlideImg = $('.owl-item.next').find('.hero-item').attr('data-img-url');
          var prevSlideImg = $('.owl-item.prev').find('.hero-item').attr('data-img-url');
          $('.owl-nav .owl-prev').css({
              background: 'url(' + prevSlideImg + ')'
          });
          $('.owl-nav .owl-next').css({
              background: 'url(' + nextSlideImg + ')'
          });
      }

      welcomeSlide();

      welcomeSlider.on('translated.owl.carousel', function () {
          welcomeSlide();
      });
  }

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

  // Insurance carousel (uses the Owl Carousel library)
  $(".insurance-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    margin:20,
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
        items: 1
      },
      900: {
        items: 1
      }
    }
  });

})(jQuery);
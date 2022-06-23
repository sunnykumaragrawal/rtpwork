!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
   $(".loader").fadeOut();
   $("#preloder").delay(400).fadeOut("slow");	
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  //navbar
  $(".menu-switch").on('click', function () {
  	$('.side-menu-wrapper').addClass('active');
  	$('.menu-wrapper').addClass('hide-left');
  });

  $(".menu-close").on('click', function () {
  	$('.side-menu-wrapper').removeClass('active');
  	$('.menu-wrapper').removeClass('hide-left');
  });

  function trainedPhy() {
    var x = document.getElementById("about1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function extraCare() {
    var x = document.getElementById("about2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function allSupport() {
    var x = document.getElementById("about3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  // Hero carousel (uses the Owl Carousel library)
  $(".hero-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    margin:20,
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

  // Social Media carousel (uses the Owl Carousel library)
  $(".socialmedia-carousel").owlCarousel({
    autoplay: true,
    dots: true,
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

  // Recentblogs carousel (uses the Owl Carousel library)
  $(".recentblogs-carousel").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    margin:30,
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

})(jQuery);
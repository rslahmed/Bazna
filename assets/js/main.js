(function ($) {
  "use strict";
  // preloader
  $(window).load(function () {
    $('.preloader').fadeOut('slow');
  });

  // mobile menu
  // sidebar
  $('#open-sidebar').click(function (event) {
    $('.sidebar').addClass('sidebar-open');
    event.preventDefault();
  })
  $('#close-sidebar').click(function () {
    $('.sidebar').removeClass('sidebar-open');
    event.preventDefault();
  })

  // sidebar sub menu
  var subMenu = document.querySelector(".sidebar-sub-menu");
  subMenu.style.display = "none";
  $("a.with-side-sub").click(function () {
    if (subMenu.style.display == "none") {
      subMenu.style.display = "block"
    } else {
      subMenu.style.display = "none"
    }
  })




  // main slider 
  function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      dots: true,
      infinite: true,
      autoplay: true,
      fade: true,
      autoplaySpeed: 10000,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      responsive: [{
          breakpoint: 1400,
          settings: {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            fade: true,
            autoplaySpeed: 10000
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: true,
            fade: true,
            autoplaySpeed: 10000
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  // testimonial slider
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    fade: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
          infinite: true,
          autoplay: true,
          fade: false,
          prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // blog-slider 
  $('.blog-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  // brand slider
  $('.brand-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 300,
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.video-play-btn').magnificPopup({
    items: {
      src: 'https://youtu.be/Nt9L1jCKGnE'
    },
    type: 'iframe'
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  new WOW().init();



})(jQuery);
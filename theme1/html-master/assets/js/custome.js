$(function() {

    // Back to top
    var BackToTop = $('#BackToTop');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            BackToTop.addClass('show');
        } else {
            BackToTop.removeClass('show');
        }
    });

    BackToTop.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    // Sticky Menu
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#MenuBar').addClass('sticky')
        } else{
            $('#MenuBar').removeClass('sticky')
        }
    });


    // Banner Slider
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        thumbs: {
            swiper: swiper,
        },
    });

    // Mobile Banner Slider
    var swiper = new Swiper(".MobileBannerSlider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

    // Service Slider
    var swiper = new Swiper(".ServiceSlider", {
        spaceBetween: 30,
        breakpoints: {
            // when window width is >= 480px
            320: {
              slidesPerView: 1,
            },
            700:{
                slidesPerView: 2,
            },
            // when window width is >= 640px
            1200: {
              slidesPerView: 4,
            }
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: false,
        navigation: {
            nextEl: ".NextArrow",
            prevEl: ".PrevArrow",
        },
    });

    // OurClient Slider
    var swiper = new Swiper(".OurClientSlider", {
        effect: "cube",
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    // OurGallery Slider
    var swiper = new Swiper(".OurGallerySlider", {
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    // Mobile OurGallery Slider
    var swiper = new Swiper(".MobileGallerySlider", {
        loop: true,
        effect: "cards",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });

    // OurBlog Slider
    var swiper = new Swiper(".OurBlogSlider", {
        loop: true,
        spaceBetween: 30,
        breakpoints: {
            // when window width is >= 480px
            320: {
              slidesPerView: 1,
            },
            700: {
                slidesPerView: 2,
              },
            // when window width is >= 640px
            1200: {
              slidesPerView: 4,
            },
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });






});
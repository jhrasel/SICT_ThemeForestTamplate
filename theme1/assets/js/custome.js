$(function() {

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


    // Service Slider
    var swiper = new Swiper(".ServiceSlider", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: false,
        navigation: {
            nextEl: ".NextArrow",
            prevEl: ".PrevArrow",
        },
    });


});
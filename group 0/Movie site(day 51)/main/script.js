const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 4,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    grabCursor:true,
    pagination : {
        el : '.swiper-pagination',
        type: 'bullets',
        clickable:true
    },
    navigation : {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



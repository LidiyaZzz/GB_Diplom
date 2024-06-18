'use strict'

  // второй слайдер
  const expositionSwiper = new Swiper('.exposition__gallery', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    touchRatio: 2,
    watchOverflow: true,  
    navigation: {
      nextEl: '.gallery__btn-prev',
      prevEl: '.gallery__btn-next',
    },  
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
     keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1.3
      },
      481: {
        slidesPerView: 1.6
      },
      578: {
        slidesPerView: 2
      },
      700: {
        slidesPerView: 2.5
      },
      993: {
        slidesPerView: 3
      },
      1201: {
        slidesPerView: 4
      }
    },
    speed: 500
  });
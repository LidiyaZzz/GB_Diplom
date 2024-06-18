'use strict'

const generalSwiper = new Swiper('.general__swiper', {
    //   autoplay: {
    //    delay: 3000,
    //  },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
       keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      touchRatio: 4,
      speed: 1500,
      spaceBetween: 100,
      watchOverflow: true,
      loop: true,
    });  
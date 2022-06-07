const ceramicsSwiper = new Swiper('.slider-ceramics', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  direction: 'horizontal',
  loop:true,
  slidesPerView: 1, 
  effect: "slide",
  spaceBetween: 30,
  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const blogSwiper = new Swiper('.slider-blog', {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    }, 
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    }, 
  },
});

const projectsSwiper = new Swiper('.slider-projects', {
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    }, 
    1470: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    }, 
  },
});


$(document).ready(function() {
  $('.zoom').magnify({
    speed: 200,
    src: '../img/content_images/start_and_finish_3.png',
  });
});

//* initialize swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
  grabCusrsor:true,
  spaceBetween :30,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //! responsive breakpoints
  breakpoints:{
    0:{
        slidesPerView:1
    },
    480:{
slidesPerView:2
    },
    768:{
        slidesPerView:2
    },
    1400:{
        slidesPerView:2
    },
    1440:{
        slidesPerView:3
    }


  }
  });

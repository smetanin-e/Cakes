const swiper = new Swiper('.slider-reviews', {
    navigation: {
        nextEl: '.slider-reviews-button-next',
        prevEl: '.slider-reviews-button-prev',
      },
      direction: 'horizontal',
      loop: true,
      spaceBetween: 0,
      centeredSlides: true,
      setTransition: .2,
      slidesPerView: 1.75,
      /*breakpoints: {
          1921: {
              slidesPerView: 'auto',
          },
          
          1400: {
              slidesPerView: 1.75,
          },
  
          0: {
              spaceBetween: 35,
              slidesPerView: 1,
          }
      },*/
   
});

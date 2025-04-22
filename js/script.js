'use strict';

/*=========Slider Swiper============== */

const swiper = new Swiper('.slider-reviews', {
    navigation: {
        nextEl: '.slider-reviews-button-next',
        prevEl: '.slider-reviews-button-prev',
      },

      speed: 900,
      loop: true,
      centeredSlides: true,
      slidesPerView: 1.75,

      breakpoints: {
          1921: {
              slidesPerView: 'auto',
          },

          1880: {
            slidesPerView: 1.71,
        },
          

          0: {
              spaceBetween: 35,
              slidesPerView: 1,
          }
      },
   
});
/*=========/Slider Swiper============== */


/*=========Checkbox============== */

const checkboxLabel = document.querySelector('.form-order__agreement-label');
const checkboxInput = document.querySelector('.input-checkbox');


   if (checkboxInput.attributes['checked']) {
    checkboxLabel.classList.add('--checked');
   }
   else {
    checkboxLabel.classList.remove('--checked');
   } 
   
   checkboxInput.addEventListener('click', function() {
    if (checkboxInput.attributes['checked']) {
        checkboxLabel.classList.remove('--checked');
        checkboxInput.removeAttribute('checked');
    } else {
        checkboxLabel.classList.add('--checked');
        checkboxInput.setAttribute('checked', 'checked');
    }
    
});


/*=========/Checkbox============== */
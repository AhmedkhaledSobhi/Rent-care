var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
    },
    on: {
      reachEnd: function () {
        // Disable next button when reaching the last slide
        document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
      },
      reachBeginning: function () {
        // Enable next button when not at the last slide
        document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
      }
    }
  });
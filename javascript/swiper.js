
var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
});

var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

AOS.init();
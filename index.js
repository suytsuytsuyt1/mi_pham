
var swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
});

// Hàm để cập nhật slidesPerView
function updateSlidesPerView() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    swiper.params.slidesPerView = 2;
  } else if (window.matchMedia("(max-width: 765px)").matches) {
    swiper.params.slidesPerView = 3;
  } else if (window.matchMedia("(max-width: 900px)").matches) {
    swiper.params.slidesPerView = 4;
  } else {
    swiper.params.slidesPerView = 5;
  }
  swiper.update();
}

updateSlidesPerView();

// Cập nhật slidesPerView khi thay đổi kích thước màn hình
window.addEventListener("resize", updateSlidesPerView);




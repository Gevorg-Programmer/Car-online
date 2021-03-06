
new Swiper('.swiper-web', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

new Swiper('.swiper-mobile', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

new Swiper('.swiper-comment-lg', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    slidesPerView: 3
});

new Swiper('.swiper-comment-md', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    slidesPerView: 2
});

new Swiper('.swiper-comment-sm', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination-one',
    },
    slidesPerView: 1
});

new Swiper('.cars-container-mobile', {
  pagination: {
    el: '.swiper-pagination-two',
  },
});
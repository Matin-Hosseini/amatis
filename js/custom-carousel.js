$(document).ready(function () {
  $(".main-slider").owlCarousel({
    rtl: true,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    lazyload: true,
    smartSpeed: 900,
    responsive: { 0: { items: 1 } },
    navText: [
      "<i class='bi bi-arrow-right-circle'></i>",
      "<i class='bi bi-arrow-left-circle'></i>",
    ],
  });

  $(".promotion-carousel").owlCarousel({
    rtl: true,
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      300: { items: 2 },
      500: { items: 3 },
      650: { items: 4 },
      850: { items: 5 },
      1000: { items: 6 },
    },
    navText: [
      "<i class='bi bi-arrow-right-short'></i>",
      "<i class='bi bi-arrow-left-short'></i>",
    ],
  });
  $(".products-carousel ").owlCarousel({
    rtl: true,
    loop: false,
    margin: 0,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      800: { items: 3 },
      1200: { items: 4 },
      1600: { items: 5 },
    },
    navText: [
      "<i class='bi bi-chevron-right'></i>",
      "<i class='bi bi-chevron-left'></i>",
    ],
  });
  $("#recommanded-products").owlCarousel({
    rtl: true,
    loop: false,
    margin: 0,
    nav: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      800: { items: 3 },
      1200: { items: 4 },
      1600: { items: 5 },
    },
    navText: [
      "<i class='bi bi-chevron-right'></i>",
      "<i class='bi bi-chevron-left'></i>",
    ],
  });
  $(".best-selleres-carousel").owlCarousel({
    rtl: true,
    loop: false,
    margin: 5,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      700: { items: 2 },
      1200: { items: 3 },
      1600: { items: 5 },
    },
    navText: [
      "<i class='bi bi-arrow-right-circle'></i>",
      "<i class='bi bi-arrow-left-circle'></i>",
    ],
  });

  $(".favorite-brands__carousel").owlCarousel({
    rtl: true,
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      420: { items: 2 },
      576: { items: 3 },
      768: { items: 4 },
      992: { items: 5 },
      1200: { items: 6 },
    },
    navText: [
      "<i class='bi bi-chevron-right'></i>",
      "<i class='bi bi-chevron-left'></i>",
    ],
  });
});

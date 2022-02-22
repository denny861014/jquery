/* eslint-disable no-undef */
$(document).ready(function () {
  $('.dropdown').click(function (event) {
    event.preventDefault()
    $('.dropdown-open').slideToggle()
  })
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 1500
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
  $('.top a').click(function (event) {
    event.preventDefault()
    $('html, body').animate({
      scrollTop: 0
    }, 700)
  })
})

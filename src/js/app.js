const swiper = new Swiper('.js-swiper-container', {
  speed: 400,
  spaceBetween: 0,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

// Menu responsive

const menuResponsive = document.querySelector('.js-menu-responsive')
const btnClean = document.querySelector('.js-menu-responsive__btn-clean')
const btnToggle = document.querySelector('.js-menu-responsive__btn-toggle')

btnToggle.onclick = function () {
  menuResponsive.classList.add('is-menu-responsive')
}
btnClean.onclick = function () {
  menuResponsive.classList.remove('is-menu-responsive')
}

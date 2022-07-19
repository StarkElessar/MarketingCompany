import * as flsFunctions from './modules/functions.js'
import Swiper, { Navigation } from 'swiper'

flsFunctions.isWebp()
flsFunctions.setBurgerMenu('.burger-menu', '.menu')
flsFunctions.filterTabs()

const ourClientSwiper = new Swiper('.client-slider__wrapper', {
  modules: [ Navigation ],
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 1, 
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    620: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  setWrapperSize: true,
})

const ourBlogPost = new Swiper('.posts-swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
})
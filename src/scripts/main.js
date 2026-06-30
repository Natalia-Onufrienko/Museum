'use strict';

import Swiper from 'swiper';
import 'swiper/css';

const form = document.querySelector('.newsletter__form');
const successMessage = document.querySelector('.newsletter__success');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  successMessage.classList.add('newsletter__success--visible');

  setTimeout(() => {
    successMessage.classList.remove('newsletter__success--visible');
  }, 3000);
});

const icons = document.querySelectorAll('.nav-icon');
const links = document.querySelectorAll(
  '.nav__link, .logo, .button__link--type--up',
);
const menu = document.querySelector('.page__menu');

/* =========================
   TOGGLE MENU
========================= */

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    icons.forEach((ic) => ic.classList.toggle('open'));
    menu.classList.toggle('page__menu__open');
  });
});

/* =========================
   SMOOTH SCROLL
========================= */

links.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href');

    if (!href || !href.startsWith('#')) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    menu.classList.remove('page__menu__open');

    icons.forEach((ic) => ic.classList.remove('open'));

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  });
});

/* =========================
   SWIPER
========================= */
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

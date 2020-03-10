'use strict';

const shippingPage = document.querySelector('.cart');
const buyButton = document.querySelector('.button--question');
const sandwich = document.querySelector('.header__sandwich');
const navigationList = document.querySelector('.header-list');
const closeButton = document.querySelector('.header__close');
const upButton = document.querySelector('.button--up');

sandwich.addEventListener('click', function() {
  navigationList.classList.remove('menu-close');
  navigationList.classList.add('show-in');
  sandwich.classList.add('disappear');
  closeButton.classList.add('show-in');
});

closeButton.addEventListener('click', function() {
  navigationList.classList.add('menu-close');
  navigationList.classList.remove('show-in');
  sandwich.classList.remove('disappear');
  closeButton.classList.remove('show-in');
});

buyButton.addEventListener('click', function() {
  shippingPage.classList.add('cart--buy');
});

window.onscroll = function() {
  if (window.pageYOffset > 1200) {
    upButton.classList.add('show');
  } else {
    upButton.classList.remove('show');
  }
};

upButton.addEventListener('click', function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

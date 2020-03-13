'use strict';

const inputs = document.querySelectorAll('.shipping__input');
const placeholders = document.querySelectorAll('.shipping__placeholder');
const buttonContinue = document.querySelector('.button--form');
const shipping = document.querySelector('.shipping');
const shippingLink = document.querySelector('.form__link--shipping');
const payment = document.querySelector('.payment');

inputs.forEach((input, index) => {
  input.addEventListener('focus', function() {
    placeholders[index].classList.add('fake-placeholder');
  });
});

inputs.forEach((input, index) => {
  input.addEventListener('focusout', function() {
    placeholders[index].classList.remove('fake-placeholder');
  });
});

buttonContinue.addEventListener('click', function() {
  shipping.classList.add('hide');
  payment.classList.remove('hide');
});

shippingLink.addEventListener('click', function(e) {
  e.preventDefault();
  payment.classList.add('hide');
  shipping.classList.remove('hide');
});

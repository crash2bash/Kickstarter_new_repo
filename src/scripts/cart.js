'use strict';

const
  deleteProductButton = document.querySelector('.product-card__close--gold');
const goldSpeakerCard = document.querySelector('.product-card--gold');
const addProductItem = document.querySelector('.cart__price-up');
const valueOfProduct = document.querySelectorAll('.cart__value');
const removeProductItem = document.querySelector('.cart__price-down');
const colors = document.querySelectorAll('.cart__radio');
const colorSignature = document.querySelector('.cart__color-signature');
let inputValue = 1;

colors.forEach(input => {
  input.addEventListener('click', function() {
    removeBorderInput();
    input.classList.add('cart__radio--active');

    if (input.classList.contains('cart__radio--silver')) {
      colorSignature.innerHTML = 'Silver';
    } else if (input.classList.contains('cart__radio--grey')) {
      colorSignature.innerHTML = 'Grey';
    } else if (input.classList.contains('cart__radio--bronze')) {
      colorSignature.innerHTML = 'Bronze';
    } else if (input.classList.contains('cart__radio--gold')) {
      colorSignature.innerHTML = 'Gold';
    } else if (input.classList.contains('cart__radio--space')) {
      colorSignature.innerHTML = 'Space grey';
    } else {
      colorSignature.innerHTML = 'Something wrong';
    }
  });
});

function removeBorderInput() {
  colors.forEach(input => {
    if (input.classList.contains('cart__radio--active')) {
      input.classList.remove('cart__radio--active');
    }
  });
}

deleteProductButton.addEventListener('click', function() {
  goldSpeakerCard.classList.add('hide');
});

addProductItem.addEventListener('click', function() {
  inputValue += 1;

  for (const i in valueOfProduct) {
    if ((valueOfProduct[i].value < 10) && (valueOfProduct[i].value > 0)) {
      valueOfProduct[i].value = inputValue;
    }
  }
});

removeProductItem.addEventListener('click', function() {
  inputValue -= 1;

  for (const i in valueOfProduct) {
    if (valueOfProduct[i].value > 1) {
      valueOfProduct[i].value = inputValue;
    }
  }
});

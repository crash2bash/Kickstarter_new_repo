'use strict';

const rightButtonFeautures = document.querySelector('#feautures__right-arrow');
const leftButtonFeautures = document.querySelector('#feautures__left-arrow');
const feauturesFirst = document.querySelector('.feautures__list-item--'
  + 'grid-first');
const feauturesSecond = document.querySelector('.feautures__list-item--'
  + 'grid-second');
const feauturesThird = document.querySelector('.feautures__list-item--'
  + 'grid-third');
const feauturesChangeValue = document.querySelector('#post-scrolling__change');
let feauturesPostValue = getNumber(document.querySelector('#post-'
  + 'scrolling__change'));

function getNumber(str) {
  const result = parseInt(str.innerHTML.charAt(1));

  return result;
}

rightButtonFeautures.addEventListener('click', function() {
  feauturesSlideRight();
});

leftButtonFeautures.addEventListener('click', function() {
  feauturesSlideLeft();
});

function feauturesSlideRight() {
  if (feauturesPostValue === 1) {
    feauturesFirst.classList.add('scroll');
    feauturesSecond.classList.remove('scroll');
    feauturesSecond.classList.add('animation-show');
    rightButtonFeautures.classList.add('arrow-right--enable');
    leftButtonFeautures.classList.remove('arrow-left--disable');
    leftButtonFeautures.classList.add('arrow-left--enable');
    feauturesChangeValue.innerHTML = '02';
    feauturesPostValue += 1;
  } else if (feauturesPostValue === 2) {
    feauturesSecond.classList.add('scroll');
    feauturesThird.classList.remove('scroll');
    feauturesThird.classList.add('animation-show');
    rightButtonFeautures.classList.remove('arrow-right--enable');
    rightButtonFeautures.classList.add('arrow-right--disable');
    feauturesChangeValue.innerHTML = '03';
    feauturesPostValue += 1;
  }
}

function feauturesSlideLeft() {
  if (feauturesPostValue === 3) {
    feauturesThird.classList.add('scroll');
    feauturesSecond.classList.remove('scroll');
    rightButtonFeautures.classList.remove('arrow-right--disable');
    rightButtonFeautures.classList.add('arrow-right--enable');
    leftButtonFeautures.classList.remove('arrow-left--disable');
    leftButtonFeautures.classList.add('arrow-left--enable');
    feauturesChangeValue.innerHTML = '02';
    feauturesPostValue -= 1;
  } else if (feauturesPostValue === 2) {
    feauturesSecond.classList.add('scroll');
    feauturesFirst.classList.remove('scroll');
    feauturesFirst.classList.add('animation-show');
    leftButtonFeautures.classList.remove('arrow-left--enable');
    leftButtonFeautures.classList.add('arrow-left--disable');
    feauturesChangeValue.innerHTML = '01';
    feauturesPostValue -= 1;
  }
}

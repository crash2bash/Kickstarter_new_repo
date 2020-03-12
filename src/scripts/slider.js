'use strict';

const rightButton = document.querySelector('#advantages__right-arrow');
const leftButton = document.querySelector('#advantages__left-arrow');
const advantagesDesign = document.querySelector('.advantages__list-item'
  + '--design');
const advantagesSpeaker = document.querySelector('.advantages__list-item'
  + '--speaker');
const advantagesMultiroom = document.querySelector('.advantages__list'
  + '-item--multiroom');
const advantagesLighting = document.querySelector('.advantages__list'
  + '-item--lighting');

let postValue = parseInt(document.querySelector('.post-scrolling'
  + '__change').innerHTML.charAt(1));

const changeValue = document.querySelector('.post-scrolling__change');

rightButton.addEventListener('click', function() {
  slideRight();
});

leftButton.addEventListener('click', function() {
  slideLeft();
});

function slideRight() {
  if (postValue === 1) {
    advantagesDesign.classList.add('scroll');
    advantagesSpeaker.classList.remove('scroll');
    advantagesSpeaker.classList.add('animation-show');
    rightButton.classList.add('arrow-right--enable');
    leftButton.classList.remove('arrow-left--disable');
    leftButton.classList.add('arrow-left--enable');
    changeValue.innerHTML = '02';
    postValue += 1;
  } else if (postValue === 2) {
    advantagesSpeaker.classList.add('scroll');
    advantagesMultiroom.classList.remove('scroll');
    advantagesMultiroom.classList.add('animation-show');
    rightButton.classList.remove('arrow-right--disable');
    rightButton.classList.add('arrow-right--enable');
    changeValue.innerHTML = '03';
    postValue += 1;
  } else if (postValue === 3) {
    advantagesMultiroom.classList.add('scroll');
    advantagesLighting.classList.remove('scroll');
    advantagesLighting.classList.add('animation-show');
    rightButton.classList.remove('arrow-right--enable');
    rightButton.classList.add('arrow-right--disable');
    changeValue.innerHTML = '04';
    postValue += 1;
  }
}

function slideLeft() {
  if (postValue === 4) {
    advantagesLighting.classList.add('scroll');
    advantagesMultiroom.classList.remove('scroll');
    rightButton.classList.remove('arrow-right--disable');
    leftButton.classList.remove('arrow-left--disable');
    leftButton.classList.add('arrow-left--enable');
    changeValue.innerHTML = '03';
    postValue -= 1;
  } else if (postValue === 3) {
    advantagesMultiroom.classList.add('scroll');
    advantagesSpeaker.classList.remove('scroll');
    rightButton.classList.remove('arrow-right--disable');
    rightButton.classList.add('arrow-right--enable');
    leftButton.classList.remove('arrow-left--disable');
    leftButton.classList.add('arrow-left--enable');
    changeValue.innerHTML = '02';
    postValue -= 1;
  } else if (postValue === 2) {
    advantagesSpeaker.classList.add('scroll');
    advantagesDesign.classList.remove('scroll');
    advantagesDesign.classList.add('animation-show');
    leftButton.classList.remove('arrow-left--enable');
    leftButton.classList.add('arrow-left--disable');
    changeValue.innerHTML = '01';
    postValue -= 1;
  }
}

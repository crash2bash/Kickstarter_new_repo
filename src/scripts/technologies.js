'use strict';

// const buttonTechnologies = document.querySelectorAll('.technology__details');
const button = document.querySelector('.technology__details--seven');
const captionLine = document.querySelector('.technology__caption-line');
const captionText = document.querySelector('.technology__caption-text');

// buttonTechnologies.forEach(button => {
//   button.addEventListener('click', function() {
//     button.classList.add('technology__details--active');
//   });
// });

button.addEventListener('click', function() {
  captionLine.classList.toggle('show');
  captionText.classList.toggle('show');
});

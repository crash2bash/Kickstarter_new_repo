'use strict';

const button = document.querySelector('.technology__details--seven');
const captionLine = document.querySelector('.technology__caption-line');
const captionText = document.querySelector('.technology__caption-text');

button.addEventListener('click', function() {
  captionLine.classList.toggle('show');
  captionText.classList.toggle('show');
});

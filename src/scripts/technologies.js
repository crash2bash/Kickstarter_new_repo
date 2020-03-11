'use strict';

const buttonTechnologies = document.querySelectorAll('.technology__details');

buttonTechnologies.forEach(button => {
  button.addEventListener('click', function() {
    button.classList.add('technology__details--active');
  });
});

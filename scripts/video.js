'use sctrict';

const video = document.querySelector(".video__container");
const videoLink = document.querySelector(".video__link");
const videoImg = document.querySelector(".video__image");
let iframe = '<iframe src="https://www.youtube.com/embed/T3psVSj1YC8" frameborder="0" allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

videoLink.addEventListener("click", function(e) {
  e.preventDefault();
  videoLink.remove();
  videoImg.remove();
  video.innerHTML = iframe;
});

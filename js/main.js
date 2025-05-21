"use strict";

let carouselContainer = document.querySelector(".Carousel");
let carouselSlider = carouselContainer.querySelector(".CarouselContainer");
let slides = carouselContainer.querySelectorAll(".CarouselSlide");
let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");

let slideIndex = 0;
let totalSlides = slides.length;


document.addEventListener('DOMContentLoaded', () => {

  setUpContinuousRotation();
  updateCarouselPosition();
});

function setUpContinuousRotation() {
  slides.forEach(slide =>{ 
    const clone = slide.cloneNode(true);
    carouselSlider.appendChild(clone);
  });

  slides = carouselContainer.querySelectorAll(".CarouselSlide");
  totalSlides = slides.length;
}

function goToNextSlide() {
 slideIndex++;

 if (slideIndex >= totalSlides / 2) {
updateCarouselPosition();

setTimeout(() => {
    slideIndex = slideIndex % (totalSlides / 2);
    carouselSlider.style.transition = "none";
    updateCarouselPosition();

setTimeout(() => {
      carouselSlider.style.transition = "transform 0.5s ease-in-out";
    }, 50);
  }, 500);
   
} else {
  updateCarouselPosition();
}
}
  
function goToPrevSlide() {
    slideIndex--;


    if (slideIndex < 0) {
      slideIndex = totalSlides / 2 - 1;
    
      carouselSlider.style.transition = "none";
    updateCarouselPosition();

    setTimeout(() => {
        carouselSlider.style.transition = "transform 0.5s ease";
      }, 50);
    } else {
      updateCarouselPosition();
    }
  }

  previousButton.addEventListener('click', () => {
    goToPrevSlide();
  });

nextButton.addEventListener('click', () => {
    goToNextSlide();
  });

  function updateCarouselPosition() {
    const translateValue = -slideIndex * 100;
    carouselSlider.style.transform = `translateX(${translateValue}%)`;
  }

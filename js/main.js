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
 updateCarouselPosition();
 if (slideIndex >= totalSlides / 2) {
setTimeout(() => {
    carouselSlider.style.transition = "none";
    slideIndex = 0;
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
      carouselSlider.style.transition = "none";
      slideIndex = (totalSlides / 2) - 1;
    updateCarouselPosition();

    setTimeout(() => {
      
        carouselSlider.style.transition = "transform 0.5s ease-in-out";
        goToPrevSlide();
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

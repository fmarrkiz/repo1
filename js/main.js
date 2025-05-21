"use strict";

let carouselContainer = document.querySelector(".Carousel");
let carouselSlider = carouselContainer.querySelector(".CarouselContainer");
let slides = carouselContainer.querySelectorAll(".CarouselSlide");
let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");

let slideIndex = 0;
let totalSlides = slides.length;
let rotationDirection = 1;

document.addEventListener('DOMContentLoaded', updateCarouselPosition);

  
function goToNextSlide() {
  rotationDirection = 1;
    slideIndex = (slideIndex + 1) % totalSlides;
    updateCarouselPosition();
  }
  
function goToPrevSlide() {
  rotationDirection = -1;
    slideIndex = (slideIndex - 1) % totalSlides;
    updateCarouselPosition();
  }

 
  previousButton.addEventListener('click', () => {
    goToPrevSlide()});
 


nextButton.addEventListener('click', () => {
    goToNextSlide()});

  function updateCarouselPosition() {
    const translateValue = -slideIndex * 100;
    carouselSlider.style.transform = `translateX(${translateValue}%)`;
  }

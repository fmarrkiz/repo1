"use strict";

let carouselContainer = document.querySelector(".Carousel");
let carouselSlider = carouselContainer.querySelector(".CarouselContainer");
let slides = carouselContainer.querySelectorAll(".CarouselSlide");
let previousButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");

let slideIndex = Array.from(slides);
let totalSlides = slideIndex.length;



previousButton.addEventListener("click", goToPrevSlide);
nextButton.addEventListener("click", goToNextSlide);

function goToNextSlide() {
if (slideIndex === totalSlides -1){
slideIndex = 0;
updateCarouselPosition(); 
} else {
    slideIndex++;
    updateCarouselPosition();
}
}



function goToPrevSlide() {
    if (slideIndex === 0) {
        slideIndex = (totalSlides - 1);
        updateCarouselPosition(slideIndex);
    } else {
        slideIndex--;
        updateCarouselPosition(slideIndex);
}
}

function updateCarouselPosition() {
    let translateX = -slideIndex * 100; 
    carouselSlider.style.transform = `translateX(${translateX}%)`;

}
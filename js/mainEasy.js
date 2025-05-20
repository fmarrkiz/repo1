"use strict";

const carouselContainer = document.querySelector(".carousel__container")
const carouselSlider = document.querySelectorAll(".item")
const slides = document.querySelectorAll(".item__image")
const nextButton = document.querySelector(".next")
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initialiseSlider);

function initialiseSlider(){
    if(slides.length> 0){
        slides[slideIndex].classList.add("displaySlide");
            }
          }
    nextButton.addEventListener('click', nextSlide);
    }
}

function showSlide(n){
if (n >= slides.length){
    slideIndex = 0;
} else if (n < 0) {
    slideIndex = slides.length -1;
} 

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
"use strict";

const _carouselContainer = document.querySelector(".carousel__container")
const _carouselSlider = document.querySelectorAll(".item")
const _slides = document.querySelectorAll(".item__image")
const _nextButton = document.querySelector(".next")
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded',initialiseSlider);

function initialiseSlider(){
    if(carousel.length> 0){
        slides[slidesIndex].classList.add("displaySlide");
        intervalID = () // something button
    }
}

function showSlide(slideIndexndex){

    if(index >= slide){
slideIndex = 0;
    } 


    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex)
}
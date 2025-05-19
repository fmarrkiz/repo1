"use strict";

class Carousel {
    constructor(element, options = {}){

this.element = element;

this.options = Object.assign({}, {
    slidesToScroll: 1,
    slidesVisible: 1,
}, options);

this.children = [].slice.call(element.children);

let root = this.createArticleWithClass('carousel');
let container = this.createArticleWithClass('carousel__container');
root.appendChild(container);
this.element.appendChild(root);
this.children.forEach((child) => {
   let item = this.createArticleWithClass('carousel__item')
   item.appendChild(child);
    container.appendChild(child)
});


}
}

function createArticleWithClass(className) { //check that it's article and not section
let article = document.createElement('article');
article.setAttribute('class', className);
return article;
}

//document.addEventListener('DOMContentLoaded',function(){
 
new Carousel(document.querySelector('#carousel1'), {
    slidesToScroll: 1,
    slidesVisible: 1,
})

//})

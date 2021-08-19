//splash

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none")
    },2500);
})

//slideshow
let slideIndex = 1;
const slides = document.querySelectorAll("article.slide");

function currentSlide(n){
    showSlides(slideIndex = n);
}

function plusSlides(n){
    showSlides(slideIndex +=n);

}

function showSlides(n){

    if (n > slides.length){
        slideIndex=1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display= "none";
    }

    slides[slideIndex-1].style.display = "block";

}

showSlides(slideIndex);

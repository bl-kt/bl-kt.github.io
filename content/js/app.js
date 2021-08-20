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

//dark mode

const body = document.querySelector('body');
const mode = document.querySelector("#mode");
const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');

function lightMode(){
    body.classList.toggle('light');
    if (body.classList.contains('light')){
        moon.style.display = "inline-block";
        sun.style.display = "none";
    }
    else {
        sun.style.display = "inline-block";
        moon.style.display = "none";
    }
}
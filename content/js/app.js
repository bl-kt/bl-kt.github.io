//splash

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none")
    },2500);
})

//dark mode

const body = document.querySelector("body");
const mode = document.querySelector("#mode");
const moon = document.querySelector("#moon" );
const sun = document.querySelector("#sun");

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
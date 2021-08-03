//splash

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none')
    },2500);
})

//countdown

const countDownDate= new Date("September 1, 2021 12:00:00").getTime();

const x = setInterval(function(){
    let now = new Date().getTime();
    let distanceBetweenTimes = countDownDate - now;

    let days = Math.floor(distanceBetweenTimes / ( 1000 * 60 * 60 * 24));
    let hours = Math.floor((distanceBetweenTimes % ( 1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60 ));
    let minutes = Math.floor((distanceBetweenTimes % ( 1000 * 60 * 60)) / ( 1000 * 60));
    let seconds = Math.floor((distanceBetweenTimes % ( 1000 * 60 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance > 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED"
    }

},1000);
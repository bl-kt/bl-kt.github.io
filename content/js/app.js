//splash

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none")
    },2500);
})

//countdown - does not work. switching from document.byid to document.queryselector

//const days = document.querySelector("#days .count .countdownNumb");
//const hours = document.querySelector("#hours .countdownNumb");
//const minutes = document.querySelector("#minutes .countdownNumb");
//const seconds = document.querySelector("#seconds .countdownNumb");

//var timer = setInterval(()=>{
    //var launchDate = new Date("2021-09-1").getTime();
    //var now = new Date().getTime();
   // var duration = launchDate - now;

   // var d = Math.floor(duration / (1000 * 60 * 60 * 24));
   // var h = Math.floor((duration % (100 * 60 * 60 * 24)) / (100 * 60 * 60));
   // var m = Math.floor((duration % (100 * 60 * 60)) / (100 * 60));
  //  var s = Math.floor((duration % (1000 * 60)) / 1000);

   // days.innerHTML = d;
  //  hours.innerHTML = h;
  //  minutes.innerHTML = m;
  //  seconds.innerHTML = s;

//},1000);

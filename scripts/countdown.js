// Set the date we're counting down to
//var countDownDate = new Date("Jul 27, 2024 00:00:00").getTime();
var countDownDate = new Date("Jun 23, 2024 22:45:30").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("dias").innerHTML = days;
  document.getElementById("horas").innerHTML = hours;
  document.getElementById("minutos").innerHTML = minutes;
  document.getElementById("segundos").innerHTML = seconds;


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
   
    if(window.innerWidth > 600){
      document.getElementById("mainBlock").style.height = "50%"
    }
    else{
      document.getElementById("mainBlock").style.height = "35%"

    }
    document.getElementById("time").style.display = "none"
    document.getElementById("log").style.opacity = "1"
    document.getElementById("log").style.height = "auto"
    document.getElementById("log").style.display = "flex"


  }
}, 1000);
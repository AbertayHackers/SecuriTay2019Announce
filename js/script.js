
var countDownDate = new Date("Mar 1, 2019 08:00:00").getTime();

var x = setInterval(function() {

  
  var now = new Date().getTime();

  
  var distance = countDownDate - now;
  
  document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

   
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TODAY";
  }
}, 1000);
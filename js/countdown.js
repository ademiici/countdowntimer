// Set the date we're counting down to
let countDownDate = new Date("August 11, 3023 13:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let differ = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(differ / (1000 * 60 * 60 * 24));
  let hours = Math.floor((differ % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((differ % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((differ % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
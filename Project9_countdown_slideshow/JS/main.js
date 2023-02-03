function countdown() { //function "countdown"
  var seconds = document.getElementById("seconds").value; //variable seconds

  function tick() { //function tick
    seconds = seconds -1; //seconds = seconds - 1 causing the countdown effect
    timer.innerHTML = seconds; //timer = seconds
    var time = setTimeout(tick, 1000); //variable time = setTimeout setting a timer
    if (seconds == -1) { //if statement, if seconds == -1 then alert "Time's up" and clear the timer
      alert("Time's up!");
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
  tick(); //calling the tick function
}


let slideIndex = 1; //variable slideIndex = 1
showSlides(slideIndex); //showSlides indicating what slide to show

// Next/previous controls
function plusSlides(n) { //function plusSlides
  showSlides(slideIndex += n); //slideIndex is plus or equal to n
 }

// Thumbnail image controls
function currentSlide(n) { //function currentSlide
  showSlides(slideIndex = n); //the current slide
}

function showSlides(n) { //function showSlides
  let i; //variable i
  let slides = document.getElementsByClassName("mySlides"); //variable slides equals get class name "mySlides"
  let dots = document.getElementsByClassName("dot"); //variable dots equals get class name "dot"
  if (n > slides.length) {slideIndex = 1} // if n is greater than slides.length slideIndex equals one
  if (n < 1) {slideIndex = slides.length} //if n is less than one slideIndex equals slides.length
  for (i = 0; i < slides.length; i++) {  //for i to equal 0, i needs to be less than slides.length and i++
    slides[i].style.display = "none"; //slides[i].style.display is set to none 
  }
  for (i = 0; i < dots.length; i++) { //for i to equal 0 i needs to be less than dots.length and i++
    dots[i].className = dots[i].className.replace(" active", ""); //dots[i].className equals dots[i].className.replace(" active", "")
  }
  slides[slideIndex-1].style.display = "block"; //style display "block"
  dots[slideIndex-1].className += " active"; //dots is set to "active"
}
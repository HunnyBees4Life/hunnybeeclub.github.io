var beeImages = ["beeimages/beenata.jpg", "beeimages/bluecollarbee.jpg", "beeimages/chuckecheesebee.jpeg", "beeimages/criminalbee.webp", "beeimages/cringebee.jpg", "beeimages/doesntwanttobeehere.webp", "beeimages/hollowbee.webp", "beeimages/killerbee.jpg", "beeimages/lilbee.jpg", "beeimages/masterofbees.jpg", "beeimages/popstarbee.jpg", "beeimages/powerstancebee.jpg", "beeimages/skechersbee.jpg", "beeimages/thiccbee.jpeg", "beeimages/zoombee.jpg"];

function randomImage(){
  var index = parseInt(Math.random() * beeImages.length);
  location.href = beeImages[index];
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

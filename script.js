// plusslide in carousel portf (previ,nexti)and testimonial
// plusSlides in lightbox Gallery 


// portfolio lightbox

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slidesIndex = 1;
showSlides(slidesIndex);

function plusSlides(n) {
  showSlides(slidesIndex += n);
}

function currentSlides(n) {
  showSlides(slidesIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dotes = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) { slidesIndex = 1 }
  if (n < 1) { slidesIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dotes.length; i++) {
    dotes[i].className = dotes[i].className.replace(" active", "");
  }
  slides[slidesIndex - 1].style.display = "block";
  dotes[slidesIndex - 1].className += " active";
  captionText.innerHTML = dotes[slidesIndex - 1].alt;
}

// Accordion
var acc = document.getElementsByClassName("accordions");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("dropdown-show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// validation
function validateForm() {
  let x = document.forms["myForm"]["firstname"].value;
  if (x == "") {
    alert("First name must be filled out");
    return false;
  };
  let y = document.forms["myForm"]["lastname"].value;
  if (y == "") {
    alert("Last name must be filled out");
    return false;
  };
  let z = document.forms["myForm"]["email"].value;
  if (z == "") {
    alert("Email must be filled out");
    return false;
  };
  let q = document.forms["myForm"]["country"].value;
  if (q == "") {
    alert("Country must be selected");
    return false;
  };
};

// testimonial slider

var slideIndee = 1;
showSlidee(slideIndee);
function plusSlidee(n) {
  showSlidee((slideIndee += n));
}
function currentSlidee(n) {
  showSlidee((slideIndee = n));
}
function showSlidee(n) {
  var i;
  var slidee = document.getElementsByClassName("testi");
  var dotee = document.getElementsByClassName("dotee");
  if (n > slidee.length) {
    slideIndee = 1;
  }
  if (n < 1) {
    slideIndee = slidee.length;
  }
  for (i = 0; i < slidee.length; i++) {
    slidee[i].style.display = "none";
  }
  for (i = 0; i < dotee.length; i++) {
    dotee[i].className = dotee[i].className.replace(" active", "");
  }
  slidee[slideIndee - 1].style.display = "block";
  dotee[slideIndee - 1].className += " active";
}
window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 2000);
};


// search bar
function search_shoes() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('shoes');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}

// team members tabb
function openTeam(evt, positionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(positionName).style.display = "block";
  evt.currentTarget.className += " active";
}

// carousel

let slideIndice = 0;
showSlide();

function showSlide() {
  let i;
  let slide = document.getElementsByClassName("car");
  let dots = document.getElementsByClassName("dots");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndice++;
  if (slideIndice > slide.length) { slideIndice = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideIndice - 1].style.display = "block";
  dots[slideIndice - 1].className += " active";
  setTimeout(showSlide, 2000); // Change image every 2 seconds
}

// Header and footer animation 

var greet = new Array("Sneakeround", "Sneak Around");

var counter = 0;
document.getElementById('greeting').innerHTML = greet[counter];

Changegreeting1();
function Changegreeting1() {
  incrementIndex()
  document.getElementById('greeting1').innerHTML = greet[counter];

  document.getElementById('greeting').style.opacity = 0;

  document.getElementById('greeting1').style.opacity = 1;

  setTimeout(Changegreeting, 2000);
}
function Changegreeting() {
  incrementIndex();
  document.getElementById('greeting').innerHTML = greet[counter];

  document.getElementById('greeting').style.opacity = 1;

  document.getElementById('greeting1').style.opacity = 0;

  setTimeout(Changegreeting1, 2000);
}
function incrementIndex() {
  if (counter < greet.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
}

// modal
var modal = document.getElementById("myModals");

var btn = document.getElementById("myButn");

var span = document.getElementsByClassName("off")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// sticky header
window.onscroll = function () { stickyFunction(scrollFunction()) };

var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function stickyFunction(callback) {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  callback()
}

//up top button
let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// hamburger menu
function hamFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("contents").style.display = "block";
}
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

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


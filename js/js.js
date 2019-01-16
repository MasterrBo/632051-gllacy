
var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal__feedback"); 
var overlay = document.querySelector(".overlay");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-show");
});

var close = document.querySelector(".button-close");    
close.addEventListener("click", function (evt) {
  	evt.preventDefault();
  	popup.classList.remove("modal-show");
  	overlay.classList.remove("overlay-show");
}); 
       
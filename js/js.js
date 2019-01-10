
var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal__feedback"); 

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");   
});

var close = document.querySelector(".button-close");    
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
}); 
        
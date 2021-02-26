const button = document.querySelectorAll("button");
const link = document.querySelectorAll("a");
const close = document.querySelector(".close");
const modal = document.querySelector(".modal");

function toggleModal() {
  modal.classList.toggle("is-open");
}
[].forEach.call(button,function(button){
    button.addEventListener("click", toggleModal);
});
[].forEach.call(link,function(link){
    link.addEventListener("click", toggleModal);
});

close.addEventListener("click", toggleModal);


$(document).ready(function(){
    $('.slider').slick({
      
    });
});
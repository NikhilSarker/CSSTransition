

let square = document.getElementById("square_one");
square.addEventListener("transitionend", function () {
  location.reload();

})

let btn = document.getElementById("click_btn");
btn.onclick = click;


function click() {
  square.classList.add("show");
  square.style.background = "red";
  square.style.color = "white";
}









var menu = document.getElementById("menu");
var pan = document.getElementById("pan");
menu.addEventListener("click", function () {
  pan.style.visibility = "visible";
  pan.classList.add("pl");
});
var close = document.getElementById("cl");
close.addEventListener("click", function () {
  pan.style.visibility = "hidden";
  pan.classList.remove("pl");
});
var btns = document.querySelectorAll(".side-1");
console.log(btns);
btns.forEach((element) => {
  element.addEventListener("click", function () {
    pan.style.visibility = "hidden";
  });
});

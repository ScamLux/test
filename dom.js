const addBtn = document.getElementById("btn");
const addBtn2 = document.getElementById("btn2");
const addBtn3 = document.getElementById("btn3");
const addBtn4 = document.getElementById("btn4");
const addBtn5 = document.getElementById("btn5");
const addBtn6 = document.getElementById("btn6");
const addBtn7 = document.getElementById("btn7");
const addBtn8 = document.getElementById("btn8");
const heading = document.querySelector("#heading");
const refresh = document.getElementById("refresher");
const color = randomColor();
const color2 = randomColor();
const color3 = randomColor();
const color4 = randomColor();
const color5 = randomColor();
const color6 = randomColor();
const color7 = randomColor();
const color8 = randomColor();
addBtn.style.backgroundColor = color;
addBtn.innerHTML = color;
addBtn2.style.backgroundColor = color2;
addBtn2.innerHTML = color2;
addBtn3.style.backgroundColor = color3;
addBtn3.innerHTML = color3;
addBtn4.style.backgroundColor = color4;
addBtn4.innerHTML = color4;
addBtn5.style.backgroundColor = color5;
addBtn5.innerHTML = color5;
addBtn6.style.backgroundColor = color6;
addBtn6.innerHTML = color6;
addBtn7.style.backgroundColor = color7;
addBtn7.innerHTML = color7;
addBtn8.style.backgroundColor = color8;
addBtn8.innerHTML = color8;
addBtn.addEventListener("click", function () {
  let tempText = color;
  document.body.style.background = tempText;
  heading.innerHTML = tempText;
});
addBtn2.addEventListener("click", function () {
  let tempText = color2;
  document.body.style.background = tempText;
  heading.innerHTML = tempText;
});
addBtn3.addEventListener("click", function () {
  let tempText = color3;
  document.body.style.background = tempText;
  heading.innerHTML = tempText;
});
addBtn4.addEventListener("click", function () {
  let tempText = color4;
  document.body.style.background = tempText;
  heading.innerHTML = tempText;
});
addBtn5.addEventListener("click", function () {
  let tempText = color5;
  document.body.style.background = tempText;
  heading.innerHTML = tempText;
});
addBtn6.addEventListener("click", function () {
  let tempText = color6;
  document.body.style.background = tempText;
  heading.innerHTML = tempText;
});
addBtn7.addEventListener("click", function () {
  let tempText = color7;
  document.body.style.background = tempText;
  heading.innerHTML = tempText;
});
addBtn8.addEventListener("click", function () {
  let tempText = color8;
  document.body.style.background = tempText;
  heading.innerHTML = tempText;
});

function randomColor() {
  let keys = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += keys[Math.floor(Math.random() * 16)];
  }

  return color;
}

const addBtn1 = document.getElementById("btn");
const addBtn2 = document.getElementById("btn2");
const addBtn3 = document.getElementById("btn3");
const addBtn4 = document.getElementById("btn4");
const addBtn5 = document.getElementById("btn5");
const addBtn6 = document.getElementById("btn6");
const addBtn7 = document.getElementById("btn7");
const addBtn8 = document.getElementById("btn8");

addBtn1.addEventListener("click", function () {
  const color = randomColor();
  document.body.style.background = color;
  document.getElementById("btn").style.background = color;
});

addBtn2.addEventListener("click", function () {
  const color2 = randomColor();
  document.body.style.background = color2;
  document.getElementById("btn2").style.background = color2;
});

addBtn3.addEventListener("click", function () {
  const color3 = randomColor();
  document.body.style.background = color3;
  document.getElementById("btn3").style.background = color3;
});

addBtn4.addEventListener("click", function () {
  const color4 = randomColor();
  document.body.style.background = color4;
  document.getElementById("btn4").style.background = color4;
});

addBtn5.addEventListener("click", function () {
  const color5 = randomColor();
  document.body.style.background = color5;
  document.getElementById("btn5").style.background = color5;
});

addBtn6.addEventListener("click", function () {
  const color6 = randomColor();
  document.body.style.background = color6;
  document.getElementById("btn6").style.background = color6;
});

addBtn7.addEventListener("click", function () {
  const color7 = randomColor();
  document.body.style.background = color7;
  document.getElementById("btn7").style.background = color7;
});
addBtn8.addEventListener("click", function () {
  const color8 = randomColor();
  document.body.style.background = color8;
  document.getElementById("btn8").style.background = color8;
});


function randomColor() {
  let keys = "0123456789ABCDEF";
  let color = "#";
  let color2 = "#";
  let color3 = "#";
  let color4 = "#";
  let color5 = "#";
  let color6 = "#";
  let color7 = "#";
  let color8 = "#";
  for (let i = 0; i < 6; i++) {
    color += keys[Math.floor(Math.random() * 16)];
    color2 += keys[Math.floor(Math.random() * 16)];
    color3 += keys[Math.floor(Math.random() * 16)];
    color4 += keys[Math.floor(Math.random() * 16)];
    color5 += keys[Math.floor(Math.random() * 16)];
    color6 += keys[Math.floor(Math.random() * 16)];
    color7 += keys[Math.floor(Math.random() * 16)];
    color8 += keys[Math.floor(Math.random() * 16)];
  }

  return color,color2,color3,color4,color5,color6,color7,color8;
}

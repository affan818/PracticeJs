const randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let colorCode;
const start = function () {
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
    // console.log(randomColor());
  }
  if (colorCode == null) {
    colorCode = setInterval(changeColor, 500);
  }
};
const stop = function () {
  clearInterval(colorCode);
  colorCode = null;
};

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);

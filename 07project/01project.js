// let alpha = ["a", "b", "c", "d", "e", "f"];
// function random() {
//   return alpha[Math.floor(Math.random() * alpha.length)];
// }
// let hash = "#";
// let doubleNum = Math.ceil(Math.random() * 90 + 9);
// let singleNum = Math.ceil(Math.random() * 9);
// const color = `${hash}${doubleNum}${random()}${doubleNum}${singleNum}`;

const button = document.querySelectorAll(".button");
console.log(button);
const body = document.querySelector("body");
const h1 = document.querySelectorAll(".first");
console.log(h1);
button.forEach((event) => {
  event.addEventListener("click", (e) => {
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
      h1.forEach((h) => (h.style.color = "white"));
    } else h1.forEach((h) => (h.style.color = "blue"));
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
      h1.forEach((h) => (h.style.color = "white"));
    }
    if (e.target.id === "paleturquoise") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "gold") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

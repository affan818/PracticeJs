const discripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(discripter);

// Math.PI = 5;
// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("ready soon");
  },
};

console.log(
  Object.getOwnPropertyDescriptor(chai, "name", {
    enumerable: false,
    writable: false,
  })
);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} = ${value}`);
  }
}

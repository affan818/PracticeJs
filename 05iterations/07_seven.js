const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newNum = myNumers.map((e) => {
//   return e + 10;
// });

let newNum = myNumers
  .map((e) => e * 10)
  .filter((e) => e >= 50)
  .map((e2) => e2 + 1);

console.log(newNum);

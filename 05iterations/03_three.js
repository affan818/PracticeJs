// for of

const array = [1, 2, 3, 4, 5];

for (const arrays of array) {
  // console.log(arrays)
}

const greeting = "hello world!";

for (const greetings of greeting) {
  if (greetings == " ") {
    // console.log('-')
    continue;
  }
  // console.log(greetings)
}

// country

const country = new Map();
country.set("IN", "India");
country.set("USA", "United States of America");
country.set("Fr", "France");
country.set("IN", "India");

for (const [key,value]  of country) {
    // console.log(`${key}: ${value}`)
}

const game$ = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// console.log(game$)

// for (const [game,name] of game$) {
//     console.log(game)
// } //for of not works in object


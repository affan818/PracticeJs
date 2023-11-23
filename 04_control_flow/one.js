//if sattement
const isUserloggedIn = true;
const userAge = 16;

if (isUserloggedIn == true) {
  // console.log("You are eligible to vote");
}

//  if (userAge == 25){
//     console.log('less than 40')
//  } else if (userAge > 40) {
// console.log('more than 40')
//  } else if (userAge <= 40){
//     console.log('eligible')
//  } else {
//     console.log('not eligible')
//  }

let score = 200;
if (score > 100) {
  let power = "lets fly";
  // console.log(`user power : ${power}`)
}
// console.log(`user power : ${power}`)  this console is not executed becose its out of scor

const balance = 100;

// if (balance > 100) {
//    console.log("you are rich")
// } else if (balance !== 99) {
//    console.log("you are poor 99")
// } else if ( balance != 100) {
//    console.log("you are poor")
// } else {
//    console.log('error')
// }

// one line code

// if (balance > 50) console.log('congrats'), console.log("poor") // this is a very worst code formatting

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const loggedInFromMicrosoft = true;

if (userLoggedIn && debitCard && !loggedInFromGoogle) {
  console.log("allow to buy cards");
}

if (loggedInFromEmail || loggedInFromGoogle || loggedInFromMicrosoft) {
  console.log("also allow");
}

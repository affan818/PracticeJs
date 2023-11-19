let a = "affan";
const b = "arhan";
var c = "ahmad";

// warning don't declare a veriable with var var is error taker becose in var it access value in local scope curly {} in function is scope curly {} in conditions is scope etc

if (1) {
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log(a);
  //   console.log(b);
  //   console.log(c);
}
// console.log(a)
// console.log(b)
// console.log(c)

// notes+++ Always a parent function global function for child and child access values from parents always but child function is local scope for parent function and parent can not access the value from child++++++++

function parent() {
  const userName = "affan";
  function child() {
    const age = 21;
    console.log(` my name is ${userName} and i am ${age} year old`);
  }
  return child();
  //   console.log(age)
  //   child()
}
// console.log(parent());

// all the numbers is truthy value expect zero (0)
if (2) {
  const userName = "affan";
  if (userName === "affan") {
    const age = 21;
    // console.log(` my name is ${userName} and i am ${age} year old`)
    // it working bcz we access values from parent to child
  }
  // console.log(age) // that not print bcz we print child out side
  // console.log(userName) // its working becz we console userName inside
}
// console.log(userName)
// it not working bcz we console or acces out side of the scope

//+++++++++intresting+++++++++

number(5);
// if the function is plane we access the value befor the declareation
function number(num) {
  console.log(num + 1);
}

number(1)

// if we declare a function into variable we cannot access the value or call the funct befor declareation 

//before initiallisation run it to terminal 
// addTwoNumber(5)

const addTwoNumber = function (num) {
 console.log(num + 2)
}

addTwoNumber(6)

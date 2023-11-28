const userEmail = [];

if (userEmail) {
  console.log("got a email");
} else {
  console.log("dont get email");
}

//falsy value
// boolean false ,0 -0 ,0n, "",null,undefined,NaN

// truthy value

// "0", any number , "false", " ", [], {},function(){}

// if (userEmail.length === 0){
//     console.log('empty email')
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("empty object");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 15 ?? 20;
// console.log(val1)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("less than 80")
  : console.log("greater than 80");

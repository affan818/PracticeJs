const myFirstArray = ["affan", "arhan", "ahmad"];
// console.log(myFirstArry);
const secondArray = ["ansari"];

// let pushArry = myFirstArry.push(secondArry);
// console.log(pushArry);

const concatArray = myFirstArray.concat(secondArray);
// console.log(concatArry);

const myArray = [1, 2, 3, 4, 5];
// console.log(myArray[1])

const myHeros = ["Ironman", "spiderman"];

const myArry2 = new Array(0, 1, 2, 3, 4, 5);
// console.log(myArry2[1])

//Arrays Method
//push method
myArray.push(6);

myArray.push(7);
//pop method its remove a last index element
myArray.pop();

// unshift method  they add element in 0 index
myArray.unshift(9);
//shift method they remove element on 0 index
myArray.shift();

// includes method it give us a boolean value and it see the given element is available or not
//  console.log(myArray.includes(9))

//indexof method it provides a index of a element
//  console.log(myArray.indexOf(3))

// join all they array and provide a string in console.log

const newArray = myArray.join();

// console.log(newArray);
// console.log(myArray);

// slice & splice

// slice method its return a copy of an array and it takes 2 parameters of indexes it skip the second parameters index in output
console.log("A", myArray);
const myn1 = myArray.slice(1, 3);

console.log(myn1);
console.log("B", myArray);

// splice method remove a element from original array and it takesk all parameter without ignoring it if you want to aad new element then take 3rd parameter

const myn2 = myArray.splice(1,3);
// const myn2 = myArray.splice(1, 3, "affan");
console.log("c", myArray);
console.log(myn2);

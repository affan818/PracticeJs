// function addTwoNumber (num,num) {
//     console.log(num + num)
// }

// addTwoNumber(2,2)

// second type

function addTwoNumber(num, num) {
  //  let result = num + num
  //  console.log(result)
  // return result
  return num + num;
}

let result = addTwoNumber(2, 8);
// console.log("Result",result)

function loginUserMessage(username) {
  // tripple equal sign method
  // if (username===undefined){
  //     console.log('please enter a name')
  //     return
  // }

  // ! sign methon this sign convert true to false or false to true
  if (!username) {
    console.log("please enter a name");
    return;
  }
  return ` ${username} just loggedin`;
}

// console.log(loginUserMessage('affan'))
// console.log(loginUserMessage());

// one more type
function loggedin(username = "affu") {
  return `${username} just loggedin`;
}

// console.log(loggedin())

// somthing about rest opretor this operator collect all the values and return it in to arry
function calculateValue(...num) {
  // return num
  console.log(num);
}

// calculateValue(100,200,300,500,800)

const user = {
  firtsName: "affan",
  lastName: "ahmad",
  age : 21
};

function handleObject (obj) {
    console.log(`username is ${obj.firtsName} ${obj.lastName} and he is ${obj.age} year old`)
}

handleObject(user)
// declare object in value
handleObject({
    firtsName:"arhan",
    lastName: "ahmad",
    age : 5
})


const array = [100,200,300,400,500]

function handleArray (getarray) {
console.log(getarray[2])
}

handleArray(array)
// declare Array in value

handleArray([100,200,300,500])

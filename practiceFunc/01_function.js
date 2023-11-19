
// function addTwoNumber (num,num) {
//     console.log(num + num)
// }

// addTwoNumber(2,2)

// second type 

function addTwoNumber (num,num) {
//  let result = num + num
//  console.log(result)
// return result
return num + num
}

let result = addTwoNumber(2,8)
// console.log("Result",result)

function loginUserMessage (username) {
    // tripple equal sign method 
    // if (username===undefined){
    //     console.log('please enter a name')
    //     return 
    // }

    // ! sign methon this sign convert true to false or false to true
    if (!username){
        console.log('please enter a name')
        return
    }
return ` ${username} just loggedin`
}

// console.log(loginUserMessage('affan'))
console.log(loginUserMessage())

// one more type 
function loggedin (username  = 'affu') {
    return `${username} just loggedin`
}

console.log(loggedin())



const userName = {
    fiersName : "affan",
    lastName : "ahmad",
    age : 21,

    wellcomeMessage () {
        console.log(`${this.fiersName} ${this.lastName} wellcome`)
        // console.log(this)
    }
}

// userName.wellcomeMessage()
// userName.fiersName = 'arhan'
// userName.wellcomeMessage()

// console.log(this)


// this key word not use in functions but in object it work
function user () {
    let name = 'affan'
    console.log(name)
    console.log(this.name)
}

const userOne = function () {
    let name = 'affan'
    console.log(this.name)
    console.log(name)
}
// user ()


// arrow function
const userTwo = () => {
let firstName = 'affan'
console.log(this.firstName)
}
// userTwo()

// second type of making arrow func in single line without curly {} if we use curly {} we need to type return key word compulsary other wise the third type of arrow funct in line no 48 are as follows

const userThree = (name) => console.log(name)

// userThree('affan')

// third type // in parenthesis () we don't need to return the funct they also know 
const addNum = (num1 ,num2) => (num1 + num2)

console.log(addNum(3,4))
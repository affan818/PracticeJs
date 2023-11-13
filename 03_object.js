// there are two types of object singleton
//  Object.create is a singleton object

const mySym = Symbol();
const JsUser = {
  name: "Affan",
  "full name": "Affan Ahmad",
[mySym]:"A",
  age: 18,
  isMarried: false,
email : "affanansari818@gmail.com",
isLoggedin:false,
lastLoginDays:["monday","saturday"]
};
// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// you can change the value by accessing data out of object
JsUser["email"]="affanahmad@google.com"
console.log(JsUser["email"])


// you can freez the object for want any other change this
// Object.freeze(JsUser)
    // JsUser.age=25
// console.log(JsUser)

JsUser.greeting = function(){
    console.log('hii Affan ');
}

JsUser.greetingTwo = function(){
    console.log("how are you")
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



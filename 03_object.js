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
console.log(JsUser)
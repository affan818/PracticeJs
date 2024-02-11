const user = {
  name: "affan",
  email: "xyz@12.com",
  isLoggedIn: true,

  getuser: function () {
    // console.log(this);
    console.log(`wellcome ${this.name}`);
    console.log(`your email is ${this.email}`);
  },
};
// console.log(user.getuser());
// console.log(this); // it give us Empty Object in Node but in browser it give window globle object

function Users(username, email, isLoggedIn) {
  this.username = username;
  this.email = email;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`wellcome ${this.username}`);
  };
  return this;
}

const userOne = new Users("affan", "ansari@getMaxListeners.com", true);
const userTwo = new Users("arhan", "gasa@fhh", false);
// console.log(userOne);
// console.log(userOne.greetings());
console.log(userTwo.constructor);

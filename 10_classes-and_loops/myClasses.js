// Javascript is prototype based language after ES6 Js has classes

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}@abc`;
  }

  greetings() {
    return `wellcome ${
      this.username
    } your password is ${this.encryptPassword()}`;
  }
}
const user1 = new User("affan", "ansri@fb.com", 456);

console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.greetings());

//////////behind the scene//////////

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}@abc`;
// };

// User.prototype.greetings = function () {
//   return `Wellcome ${this.username} your password is ${this.encryptPassword()}`;
// };

// const user1 = new User("affan", "ansari@fb.com", 456);

// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.greetings());

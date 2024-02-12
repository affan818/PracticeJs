// Javascript is prototype based language after ES6 Js has classes

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.password = password;
//     this.email = email;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   greetings() {
//     console.log(
//       `Wellocom ${this.username} your password is ${this.encryptPassword()}`
//     );
//   }
// }

// const affan = new User("affan", "affan@fb.com", 123);

// affan.greetings();
// console.log(affan.encryptPassword());

//////////behind the scene//////////

function User(username, email, password) {
  this.username = username;
  this.password = password;
  this.email = email;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.greetings = function () {
  console.log(
    `wellcome ${this.username} your password is ${this.encryptPassword()}`
  );
};

const affan = new User("affan", "affan@fb.com", 123);

affan.greetings();
console.log(affan.encryptPassword());

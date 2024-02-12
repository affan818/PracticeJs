class Admin {
  constructor(username, email, password) {
    this.username = username;
    this.password = password + "@123";
    this.email = email;
  }

  greetings() {
    console.log(`Congrats you are now ADMIN : ${this.username}`);
  }
  static createPassword() {
    console.log(`your password is ${this.password}@123`);
  }
  static createId() {
    console.log(Math.floor(Math.random() * 100));
  }
}

class User extends Admin {
  constructor(username, email, password) {
    super(username, email, password);
  }
}

const admin = new Admin("affan", "ansar@google.com", "affan");

// admin.greetings();
// admin.createId();// create Id not perform bcz static

const user = new User("arhan", "ahmad@google.com", "arhan");

user.greetings();
console.log(user);

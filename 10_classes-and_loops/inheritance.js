class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    return `UserName is ${this.username}`;
  }
}

class Supporter extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addSomeThings() {
    return `${this.username} please add something`;
  }
}

const user1 = new User("affan");
// console.log(user1);
// console.log(user1.logMe()); // childrens Take candy from elders but elders can not take from childrens

const support1 = new Supporter("arhan", "arhan@fb.com", 123);

console.log(support1.logMe()); // Supporter  take method of user because user is parent
console.log(support1.addSomeThings());

// console.log(Supporter === User);
// console.log(support1 instanceof User);
// console.log(user1 instanceof User);
console.log(support1 instanceof Supporter);
console.log(user1 instanceof Supporter);

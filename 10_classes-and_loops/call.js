function User(username) {
  //Db calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  User.call(this, username);
  this.email = email;
  this.password = password;
}

const affan = new createUser("affan", "affan@fb.com", 123);
console.log(affan);

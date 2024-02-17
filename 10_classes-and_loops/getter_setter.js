class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(val) {
    this._email = val;
  }

  get password() {
    return this._password + "1232";
  }

  set password(val) {
    this._password = val;
  }
}

const sahil = new User("sahil@123.com", 1234);
console.log(sahil.email);
console.log(sahil.password);
